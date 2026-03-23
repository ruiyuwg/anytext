In high-density deployments of stateful applications such as databases or workloads with many short-lived containers such as continuous integration or batch processing, each pod requires multiple cloud disks for data storage. When many pods are scheduled to the same node simultaneously, the default serial attachment process significantly increases pod startup time. Enable parallel cloud disk attachment to resolve this issue.

## Prerequisites

-   ACK managed cluster version 1.26 or later is required. The [csi-plugin](/help/en/ack/product-overview/csi-plugin) and [csi-provisioner](/help/en/ack/product-overview/csi-provisioner) components must be version 1.30.4 or later.
    
-   Install and configure the Cloud Assistant CLI. For more information, see [Install Cloud Assistant CLI](/help/en/cli/installation-guide/).
    

## Notes

-   Only cloud disks that have a disk serial number support parallel attachment. For more information about viewing disk serial numbers, see [View Elastic Block Storage serial numbers](/help/en/ecs/user-guide/query-the-serial-number-of-a-disk).
    
    Cloud disks created before June 10, 2020 do not contain identifiable serial number information. You cannot enable parallel attachment for these disks because they cannot be mounted normally.
    
-   Unmounting multiple cloud disks from the same node remains a serial operation.
    
-   After enabling parallel attachment, the `Device` field returned by OpenAPI operations such as ECS DescribeDisks and the mount target displayed in the console may be unreliable. Do not use this mount path in your application. Instead, confirm the actual mount path using the cloud disk’s serial number.
    

## Enabling Steps

You can enable parallel cloud disk attachment by running an automated script or by manual configuration.

## Configure Using an Automated Script

1.  Save the following script as enable\_parallel\_attach.sh.
    
    **Expand to view the configuration script**
    
    ```
    #!/bin/bash
    
    set -e
    set -o pipefail
    
    readonly REQUIRED_VERSION="v1.30.4"
    CLUSTER_ID=$1
    
    if [ -z "$CLUSTER_ID" ]; then
        echo "Usage: enable_parallel_attach.sh <cluster-id>"
        exit 1
    fi
    
    check_version() {
        local ADDONS VERSION
        ADDONS=$(aliyun cs GET "/clusters/${CLUSTER_ID}/addon_instances")
    
        VERSION=$(echo "$ADDONS" | jq -r '.addons[] | select(.name=="csi-plugin") | .version')
        if ! printf "%s\n" "$REQUIRED_VERSION" "$VERSION" | sort -V -C; then
            echo "csi-plugin version $VERSION is not supported, please upgrade to $REQUIRED_VERSION or later"
            exit 1
        fi
    
        PROVISIONER=managed-csiprovisioner
        VERSION=$(echo "$ADDONS" | jq -r '.addons[] | select(.name=="managed-csiprovisioner") | .version')
        if [ -z "$VERSION" ]; then
            PROVISIONER=csi-provisioner
            VERSION=$(echo "$ADDONS" | jq -r '.addons[] | select(.name=="csi-provisioner") | .version')
        fi
        if ! printf "%s\n" "$REQUIRED_VERSION" "$VERSION" | sort -V -C; then
            echo "$PROVISIONER version $VERSION is not supported, please upgrade to $REQUIRED_VERSION or later"
            exit 1
        fi
    }
    
    update_node_pool() {
        local NODE_POOL_DOC
        NODE_POOL_DOC=$(aliyun cs GET "/clusters/${CLUSTER_ID}/nodepools/$1")
    
        if [ -n "$(echo "$NODE_POOL_DOC" | jq -r '(.scaling_group.tags // [])[] | select(.key=="supportConcurrencyAttach")')" ]; then
            echo "node pool already has supportConcurrencyAttach tag"
            return
        fi
    
        aliyun cs PUT "/clusters/${CLUSTER_ID}/nodepools/$1" --header "Content-Type=application/json" \
            --body "$(echo "$NODE_POOL_DOC" | jq -c '{
        "scaling_group": {
            "tags": ((.scaling_group.tags // []) + [{
                "key": "supportConcurrencyAttach",
                "value": "true"
            }])
        }
    }')"
    }
    
    # Configure existing nodes
    update_nodes() {
        local PAGE=1
        local IDX TOTAL NODES_DOC ARGS
        while :; do
            echo "tagging nodes, page $PAGE"
            NODES_DOC=$(aliyun cs GET "/clusters/${CLUSTER_ID}/nodes" --pageSize 50 --pageNumber $PAGE)
            TOTAL=$(echo "$NODES_DOC" | jq -r '.page.total_count')
    
            ARGS=()
            IDX=0
            for node in $(echo "$NODES_DOC" | jq -r '.nodes[] | select(.is_aliyun_node) | .instance_id'); do
                IDX=$((IDX+1))
                ARGS+=("--ResourceId.$IDX" "$node")
            done
            if [ "$IDX" != "0" ]; then
                aliyun ecs TagResources --region "$ALIBABA_CLOUD_REGION_ID" --ResourceType Instance "${ARGS[@]}" \
                    --Tag.1.Key supportConcurrencyAttach --Tag.1.Value true
                echo "finished nodes $(( (PAGE-1)*50+IDX ))/$TOTAL"
            fi
    
            if [[ $(( PAGE*50 )) -ge $TOTAL ]]; then
                break
            fi
            PAGE=$((PAGE+1))
        done
    }
    
    update_addon() {
        local ADDON=$1
        shift
        local CONFIG STATE
        CONFIG=$(aliyun cs GET "/clusters/${CLUSTER_ID}/addon_instances/${ADDON}" | \
            jq -c '.config | fromjson | (.FeatureGate // "" | split(",")) as $fg | .FeatureGate = ($fg + $ARGS.positional | unique | join(",")) | {config: . | tojson}' --args "$@")
    
        aliyun cs POST "/clusters/${CLUSTER_ID}/components/${ADDON}/config" --header "Content-Type=application/json" --body "$CONFIG"
    
        echo "Waiting for $ADDON config to complete"
        while true; do
            STATE=$(aliyun --secure cs GET "/clusters/${CLUSTER_ID}/addon_instances/${ADDON}" | jq -r '.state')
            echo "state: $STATE"
            if [ "$STATE" != "updating" ]; then
                break
            fi
            sleep 5
        done
        if [ "$STATE" != "active" ]; then
            echo "Failed to update $ADDON config"
            return 1
        fi
    }
    
    check_version
    
    aliyun cs GET "/clusters/${CLUSTER_ID}/nodepools" | jq -r '.nodepools[]|.nodepool_info|"\(.nodepool_id)\t\(.name)"' | \
    while read -r NODE_POOL_ID NODE_POOL_NAME; do
        echo "Updating tags for node pool $NODE_POOL_NAME ($NODE_POOL_ID)"
        update_node_pool "$NODE_POOL_ID"
    done
    
    ALIBABA_CLOUD_REGION_ID=$(aliyun cs GET "/clusters/${CLUSTER_ID}" | jq -r .region_id)
    
    update_nodes
    
    update_addon $PROVISIONER DiskADController=true DiskParallelAttach=true
    update_addon csi-plugin DiskADController=true
    
    echo "All done! Now the disks can be attached concurrently to the same node."
    ```
    
2.  Run the script to enable parallel cloud disk attachment.
    
    ```
    bash enable_parallel_attach.sh <cluster ID>
    ```
    

## Manual Configuration

1.  Add an **ECS Label** in the cluster node pool configuration. Set its key to `supportConcurrencyAttach` and its value to `true`. Ensure all new ECS instances include this tag.
    
    1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
        
    2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Nodes** > **Node Pools**.
        
    3.  On the Node Pools page, click **Actions** for the target node pool, and then click **Edit**.
        
    4.  On the Edit Node Pool page, in the Advanced Options section at the bottom, add an **ECS Label** with the key `supportConcurrencyAttach` and the value `true`.
        
2.  Add a tag with the key `supportConcurrencyAttach` and the value `true` to the ECS instances of all existing nodes in the cluster. For more information, see [Create and attach custom tags](/help/en/resource-management/add-a-custom-tag).
    
3.  In the left navigation pane, select **Operations** > **Add-ons**. Click the **Volumes** tab, locate the csi-provisioner component, and click Configure in the lower-right corner. Set FeatureGate to `DiskADController=true,DiskParallelAttach=true`.
    
    **Note**
    
    When you set `DiskADController=true`, csi-provisioner handles cloud disk `attach` and `detach` operations. When you set `DiskParallelAttach=true`, parallel cloud disk attachment is enabled.
    
4.  After configuring csi-provisioner, set the FeatureGate of the csi-plugin component to `DiskADController=true`.
    

## Verify cloud disk parallel attach performance

This example creates multiple pods that mount cloud disks on the same node to verify that enabling parallel attachment improves pod startup speed.

**Important**

The test data in this topic is for reference only. Actual results may vary depending on your environment.

1.  Add a node that supports attaching multiple cloud disks to your ACK cluster. For example, an ecs.g7se.16xlarge instance supports up to 56 attached cloud disks.
    
2.  Create a file named attach-stress.yaml with the following content. Replace `<YOUR-HOSTNAME>` with your actual node name.
    
    **Expand to view the attach-stress.yaml file**
    
    ```
    ---
    apiVersion: storage.k8s.io/v1
    kind: StorageClass
    metadata:
      name: alibabacloud-disk
    provisioner: diskplugin.csi.alibabacloud.com
    parameters:
      type: cloud_auto
    volumeBindingMode: WaitForFirstConsumer
    reclaimPolicy: Delete
    allowVolumeExpansion: true
    ---
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: attach-stress
    spec:
      selector:
        matchLabels:
          app: attach-stress
      serviceName: attach-stress
      replicas: 1
      podManagementPolicy: Parallel
      persistentVolumeClaimRetentionPolicy:
        whenScaled: Retain
        whenDeleted: Delete
      template:
        metadata:
          labels:
            app: attach-stress
        spec:
          affinity:
            nodeAffinity:
              requiredDuringSchedulingIgnoredDuringExecution:
                nodeSelectorTerms:
                - matchExpressions:
                  - key: kubernetes.io/hostname
                    operator: In
                    values:
                    - <YOUR-HOSTNAME>  # Replace with the actual node name.
          hostNetwork: true
          containers:
          - name: attach-stress
            image: registry-cn-hangzhou.ack.aliyuncs.com/acs/busybox
            command: ["/bin/sh", "-c", "trap exit TERM; while true; do date > /mnt/0/data; sleep 1; done"]
            volumeMounts:
            - name: volume-0
              mountPath: /mnt/0
            - name: volume-1
              mountPath: /mnt/1
      volumeClaimTemplates:
      - metadata:
          name: volume-0
        spec:
          accessModes: [ "ReadWriteOnce" ]
          storageClassName: alibabacloud-disk
          resources:
            requests:
              storage: 1Gi
      - metadata:
          name: volume-1
        spec:
          accessModes: [ "ReadWriteOnce" ]
          storageClassName: alibabacloud-disk
          resources:
            requests:
              storage: 1Gi
    ```
    
3.  Run the following commands to confirm that the application starts normally. Then, scale the number of replicas down to 0 to prepare for the batch attach test.
    
    ```
    kubectl apply -f attach-stress.yaml
    kubectl rollout status sts attach-stress
    kubectl scale sts attach-stress --replicas 0
    ```
    
    Expected output:
    
    ```
    storageclass.storage.k8s.io/alibabacloud-disk created
    statefulset.apps/attach-stress created
    partitioned roll out complete: 1 new pods have been updated...
    statefulset.apps/attach-stress scaled
    ```
    
4.  Run the following command to start the batch attach test and record the time it takes for the pods to start.
    
    **Note**
    
    The parallel attach feature is not yet enabled for the cluster. Adjust the number of replicas for the test based on the maximum number of cloud disks your node supports.
    
    ```
    date && \
      kubectl scale sts attach-stress --replicas 28 && \
      kubectl rollout status sts attach-stress && \
      date
    ```
    
    Expected output:
    
    ```
    Tue Oct 15 19:21:36 CST 2024
    statefulset.apps/attach-stress scaled
    Waiting for 28 pods to be ready...
    Waiting for 27 pods to be ready...
    ...
    Waiting for 3 pods to be ready...
    Waiting for 2 pods to be ready...
    Waiting for 1 pods to be ready...
    partitioned roll out complete: 28 new pods have been updated...
    Tue Oct 15 19:24:55 CST 2024
    ```
    
    The output shows that without parallel attach enabled, it took more than 3 minutes for all 28 pods to start.
    
5.  Enable the parallel attach feature for this cluster by following the steps in [Enable the feature](#53961ecbc3950).
    
6.  Run the following command to clean up the previously created pods and prepare for the next test.
    
    **Note**
    
    During cleanup, monitor the `volumeattachments` resources in the cluster. The cloud disks are detached after these resources are deleted. This process takes a few minutes.
    
    ```
    kubectl scale sts attach-stress --replicas 0
    ```
    
7.  Run the test command again to record the pod startup time with parallel attach enabled. The startup is expected to take about 40 seconds, a significant improvement over the previous 3 minutes.
    
    ```
    date && \
      kubectl scale sts attach-stress --replicas 28 && \
      kubectl rollout status sts attach-stress && \
      date
    ```
    
    Expected output:
    
    ```
    Tue Oct 15 20:02:54 CST 2024
    statefulset.apps/attach-stress scaled
    Waiting for 28 pods to be ready...
    Waiting for 27 pods to be ready...
    ...
    Waiting for 3 pods to be ready...
    Waiting for 2 pods to be ready...
    Waiting for 1 pods to be ready...
    partitioned roll out complete: 28 new pods have been updated...
    Tue Oct 15 20:03:31 CST 2024
    ```
    

8.  Run the following command to remove the test application from the cluster.
    
    ```
    kubectl delete -f attach-stress.yaml
    ```
