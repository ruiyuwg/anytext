ACK supports automatic expansion of cloud disk volumes. Define an automatic expansion policy using a CRD to automatically expand the volume when its usage exceeds a specified threshold. This topic describes how to configure an automatic cloud disk expansion policy and verify that the volume expands automatically.

## Applicability

In this topic, a CRD is used to create an automatic expansion policy (StorageAutoScalerPolicy) to automatically expand a disk volume. The following section describes the scenarios in which you can use this method:

-   The PVC bound to the persistent volume (PV) of the disk is associated with a StorageClass, and the `allowVolumeExpansion: true` parameter is specified in the StorageClass.
    
    **Note**
    
    By default, the `allowVolumeExpansion: true` parameter is specified in StorageClass provided by ACK. You must specify this parameter for the StorageClass that you create. You cannot modify the properties of a StorageClass. You can only create a StorageClass.
    
-   The application pod to which the disk is attached must be in the Running state.
    
-   If the disk is a basic disk, you cannot expand the disk volumes by using this method.
    
-   If the Kubernetes version of the cluster is earlier than 1.16, you cannot use this method to expand the disk volumes. For more information about how to upgrade the Kubernetes version of a cluster, see [Upgrade clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-clusters/).
    
-   You can expand only the disk volume of disks that can be resized. For more information, see [ResizeDisk](/help/en/ecs/api-resizedisk#doc-api-Ecs-ResizeDisk).
    

## **Important notes**

The maximum interval between expansion triggers is 2 minutes, and disk expansion takes about 1 minute. Do not fill the disk within 3 minutes.

## **Preparations**

Before you begin, check the status of storage-operator and enable automatic expansion as needed based on your version.

1.  You can confirm the component is installed.
    
    > storage-operator is installed by default in your cluster. In the cluster management console, go to **Operations** > **Add-ons** and check the installation status and version under the **Volumes** tab. To upgrade, see [Upgrade add-ons](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-storage-operator-to-deploy-and-upgrade-storage-components#98e81e54c4aj5).
    
2.  You can enable automatic expansion based on your version.
    
    The storage-auto-expander module in storage-operator handles automatic expansion of storage resources.
    
    -   [v1.33.1](/help/en/ack/product-overview/storage-operator#20b13ee26c4ta) and later: Enabled by default. No action required.
        
    -   [Earlier than v1.33.1](/help/en/ack/product-overview/storage-operator#20b13ee26c4ta): Manually enable by updating the storage-operator ConfigMap.
        
        Run the following command:
        
        ```
        kubectl patch configmap/storage-operator \
          -n kube-system \
          --type merge \
          -p '{"data":{"storage-auto-expander":"{\"imageRep\":\"acs/storage-auto-expander\",\"imageTag\":\"\",\"install\":\"true\",\"template\":\"/acs/templates/storage-auto-expander/install.yaml\",\"type\":\"deployment\"}"}}'
        ```
        

## Step 1: Configure an automatic cloud disk expansion policy

1.  Check your StorageClass to confirm volume expansion is enabled.
    
    ```
    kubectl get sc
    ```
    
    **Note**
    
    We recommend using the default StorageClass named `alicloud-disk-topology-alltype` in your ACK cluster. This StorageClass automatically selects the appropriate disk type based on your instance type and zone availability, helping avoid failures due to instance limitations or insufficient disk inventory. For details on creating a StorageClass, see [Use dynamically provisioned volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-dynamically-provisioned-disk-volumes).
    
    The expected output appears below. A value of `true` for `ALLOWVOLUMEEXPANSION` means expansion is enabled.
    
    ```
    NAME                                    PROVISIONER                       RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
    alicloud-disk-efficiency                diskplugin.csi.alibabacloud.com   Delete          Immediate              true                   26h
    alicloud-disk-essd                      diskplugin.csi.alibabacloud.com   Delete          Immediate              true                   26h
    alicloud-disk-ssd                       diskplugin.csi.alibabacloud.com   Delete          Immediate              true                   26h
    alicloud-disk-topology-alltype          diskplugin.csi.alibabacloud.com   Delete          WaitForFirstConsumer   true                   26h
    ```
    
2.  Create an automatic expansion policy using a CRD.
    
    1.  Create a file named StorageAutoScalerPolicy.yaml with the following YAML content.
        
        ```
        apiVersion: storage.alibabacloud.com/v1alpha1
        kind: StorageAutoScalerPolicy
        metadata:
          name: hybrid-expand-policy
        spec:
          pvcSelector:
            matchLabels:
              app: nginx
          namespaces:
            - default
            - nginx
          conditions:
            - name: condition1
              key: volume-capacity-used-percentage
              operator: Gt
              values:
                - "80"
          actions:
            - name: action1
              type: volume-expand
              params:
                scale: 50Gi
                limits: 100Gi
            - name: action2
              type: volume-expand
              params:
                scale: 50%
                limits: 300Gi
        ```
        
        Adjust the configuration based on your application and PVC setup. The following table explains the parameters:
        
        **Parameter**
        
        **Description**
        
        `pvcSelector`
        
        Selects target PVCs by label. This example uses `app: nginx`.
        
        `namespaces`
        
        Namespaces where the target PVCs reside. Multiple namespaces use OR logic. If omitted, defaults to default.
        
        `conditions`
        
        Conditions that trigger the rule. Multiple conditions use AND logic. Each condition includes:
        
        -   `name`: Custom name for the condition.
            
        -   `key`: Metric type. `volume-capacity-used-percentage` represents capacity usage percentage.
            
        -   `operator`: Comparison operator. Supported values include `Gt` (greater than), `Lt` (less than), `Eq` (equal), and `Ne` (not equal). Case insensitive.
            
        -   `values`: The specific numerical value for the rule.
            
        
        This example triggers an action when PVC usage exceeds 80%.
        
        `actions`
        
        Actions to perform when conditions are met. Multiple actions are allowed. Each action includes:
        
        -   `name`: Custom name for the action.
            
        -   `type`: Action type. Currently only `volume-expand` is supported.
            
        -   `params`: Action parameters. `scale` specifies the expansion amount in GiB or as a percentage. `limits` sets the maximum size for the PVC under this action.
            
        
        If multiple actions exist, the system executes the first matching action and skips the rest.
        
        In this example, if action1 matches, it runs and action2 is skipped. If action1 does not match, action2 runs.
        
        -   Action1 expands the disk by 50 GiB (up to 100 GiB total) when the current size is less than 100 GiB.
            
        -   Action2 increases the disk by 50% of its current size (resulting in 150% of the original size) when the current size is between 100 GiB and 300 GiB, up to a maximum of 300 GiB.
            
        
    2.  Create the automatic expansion policy.
        
        ```
        kubectl create -f StorageAutoScalerPolicy.yaml
        ```
        

## Step 2: Verify automatic cloud disk expansion

1.  Create a StatefulSet to test automatic expansion.
    
    1.  Create a file named StatefulSet.yaml with the following content.
        
        This YAML creates a StatefulSet with one pod that mounts a 25 GiB cloud disk at `/data`.
        
        ```
        apiVersion: apps/v1
        kind: StatefulSet
        metadata:
          name: nginx
        spec:
          selector:
            matchLabels:
              app: nginx
          serviceName: nginx
          replicas: 1
          template:
            metadata:
              labels:
                app: nginx
            spec:
              containers:
              - name: nginx
                image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
                ports:
                - containerPort: 80
                volumeMounts:
                - name: pvc-disk
                  mountPath: /data
              volumes:
                - name: pvc-disk
                  persistentVolumeClaim:
                    claimName: disk-pvc
          volumeClaimTemplates:
            - metadata:
                name: pvc-disk
                labels:
                  app: nginx
              spec:
                accessModes: [ "ReadWriteOnce" ]
                storageClassName: "alicloud-disk-topology-alltype"
                resources:
                  requests:
                    storage: 25Gi    
        ```
        
    2.  Create the StatefulSet.
        
        ```
        kubectl create -f StatefulSet.yaml
        ```
        
    3.  Check pod deployment status.
        
        ```
        kubectl get pod -l app=nginx
        ```
        
        Expected output:
        
        ```
        NAME      READY   STATUS    RESTARTS   AGE
        nginx-0   1/1     Running   0          99s
        ```
        
    4.  Check disk capacity.
        
        ```
        kubectl exec -it nginx-0 -- df -h /data
        ```
        
        Expected output:
        
        ```
        Filesystem      Size  Used Avail Use% Mounted on
        /dev/vdb         25G   24K   25G   1% /data
        ```
        
2.  Write data to the mount path to exceed 80% usage and trigger the first expansion.
    
    1.  Write data to the mount path.
        
        The following command allocates 22 GB to `/data/test1`, pushing usage above 80%.
        
        ```
        kubectl exec -it nginx-0 -- fallocate -l 22G /data/test1
        ```
        
    2.  Check expansion events.
        
        ```
        kubectl get events
        ```
        
        Because the cloud disk usage is higher than 80% and the disk capacity is 25 GiB, action1 is automatically executed to scale out the disk by 50 GiB. You can view the related events in the event list.
        
        ```
        2m1s   Warning   StartExpand                  persistentvolumeclaim/pvc-disk-nginx-0    Start to expand of pvc pvc-disk-nginx-0 from 25Gi to 75Gi, usedCapacityPercentage:90%, freeSize:2498MB.
        2m1s   Normal    ExternalExpanding            persistentvolumeclaim/pvc-disk-nginx-0    waiting for an external controller to expand this PVC
        2m1s   Normal    Resizing                     persistentvolumeclaim/pvc-disk-nginx-0    External resizer is resizing volume d-uf66kkzltnq6xgi9****
        118s   Normal    FileSystemResizeRequired     persistentvolumeclaim/pvc-disk-nginx-0    Require file system resize of volume on node
        116s   Warning   SkipExpand                   persistentvolumeclaim/pvc-disk-nginx-0    Pvc pvc-disk-nginx-0 is expanding status from 25Gi to 75Gi, this action action2 will skip.
        ```
        
    3.  Check PVC capacity.
        
        ```
        kubectl get pvc
        ```
        
        Expected output shows the disk expanded from 25 GiB to 75 GiB:
        
        ```
        NAME               STATUS   VOLUME                   CAPACITY   ACCESS MODES   STORAGECLASS                     VOLUMEATTRIBUTESCLASS   AGE
        pvc-disk-nginx-0   Bound    d-uf66kkzltnq6xgi9****   75Gi       RWO            alicloud-disk-topology-alltype   <unset>                 26m
        ```
        
3.  Write more data to exceed 80% usage again and trigger a second expansion.
    
    1.  Write data to the mount path.
        
        The following command allocates 40 GB of data to `/data/test2`, causing the cloud disk usage to exceed 80%.
        
        ```
        kubectl exec -it nginx-0 -- fallocate -l 40G /data/test2
        ```
        
    2.  Check expansion events.
        
        ```
        kubectl get events
        ```
        
        When the usage of the 75 GiB cloud disk exceeds 80%, action1 is automatically executed to perform a 50 GiB scale-out. However, action1 has a capacity limit of 100 GiB, so the cloud disk is scaled out from 75 GiB to 100 GiB. You can view the related events in the event list.
        
        ```
        7m4s   Warning   StartExpand                  persistentvolumeclaim/pvc-disk-nginx-0      Start to expand of pvc pvc-disk-nginx-0 from 75Gi to 100Gi, usedCapacityPercentage:84%, freeSize:11927MB.
        7m4s   Normal    ExternalExpanding            persistentvolumeclaim/pvc-disk-nginx-0      waiting for an external controller to expand this PVC
        7m4s   Normal    Resizing                     persistentvolumeclaim/pvc-disk-nginx-0      External resizer is resizing volume d-uf66kkzltnq6xgi9****
        7m1s   Normal    FileSystemResizeRequired     persistentvolumeclaim/pvc-disk-nginx-0      Require file system resize of volume on node
        5m59s  Warning   SkipExpand                   persistentvolumeclaim/pvc-disk-nginx-0      Pvc pvc-disk-nginx-0 is expanding status from 75Gi to 100Gi, this action action2 will skip.
        ```
        
4.  Write more data to exceed 80% usage again and trigger a third expansion.
    
    1.  Write data to the mount path.
        
        The following command example allocates 20 GB of data to `/data/test3`, resulting in cloud disk usage exceeding 80%.
        
        ```
        kubectl exec -it nginx-0 -- fallocate -l 20G /data/test3
        ```
        
    2.  Check expansion events.
        
        ```
        kubectl get events
        ```
        
        When a 100 GiB cloud disk's capacity utilization exceeds 80%, action2 is automatically executed to scale the disk from 100 GiB to 150 GiB. You can view the related events in the event list.
        
        ```
        2m40s   Warning   StartExpand                  persistentvolumeclaim/pvc-disk-nginx-0    Start to expand of pvc pvc-disk-nginx-0 from 100Gi to 150Gi, usedCapacityPercentage:83%, freeSize:16637MB.
        2m40s   Normal    ExternalExpanding            persistentvolumeclaim/pvc-disk-nginx-0    waiting for an external controller to expand this PVC
        2m40s   Normal    Resizing                     persistentvolumeclaim/pvc-disk-nginx-0    External resizer is resizing volume d-uf66kkzltnq6xgi9****
        2m37s   Normal    FileSystemResizeRequired     persistentvolumeclaim/pvc-disk-nginx-0    Require file system resize of volume on node
        109s    Warning   SkipExpand                   persistentvolumeclaim/pvc-disk-nginx-0    Pvc pvc-disk-nginx-0 is expanding status from 100Gi to 150Gi, this action action2 will skip.
        ```
        
5.  Write more data to exceed 80% usage again and trigger a fourth expansion.
    
    1.  Write data to the mount path.
        
        The following command allocates 50 GB of data to `/data/test4`, which causes the cloud disk capacity utilization to exceed 80%.
        
        ```
        kubectl exec -it nginx-0 -- fallocate -l 50G /data/test4
        ```
        
    2.  Check expansion events.
        
        ```
        kubectl get events
        ```
        
        At 150 GiB and over 80% usage, action2 triggered again, expanding the disk by 50% (from 150 GiB to 225 GiB). Events show:
        
        ```
        2m42s   Warning   StartExpand                  persistentvolumeclaim/pvc-disk-nginx-0    Start to expand of pvc pvc-disk-nginx-0 from 150Gi to 225Gi, usedCapacityPercentage:87%, freeSize:19621MB.
        2m42s   Normal    ExternalExpanding            persistentvolumeclaim/pvc-disk-nginx-0    waiting for an external controller to expand this PVC
        2m42s   Normal    Resizing                     persistentvolumeclaim/pvc-disk-nginx-0    External resizer is resizing volume d-uf66kkzltnq6xgi9****
        2m38s   Normal    FileSystemResizeRequired     persistentvolumeclaim/pvc-disk-nginx-0    Require file system resize of volume on node
        114s    Warning   SkipExpand                   persistentvolumeclaim/pvc-disk-nginx-0    Pvc pvc-disk-nginx-0 is expanding status from 150Gi to 225Gi, this action action2 will skip.
        ```
        
6.  Write more data to exceed 80% usage again and trigger a fifth expansion.
    
    1.  Write data to the mount path.
        
        The following command allocates 50 GB of data to `/data/test5`, resulting in cloud disk capacity utilization exceeding 80%.
        
        ```
        kubectl exec -it nginx-0 -- fallocate -l 50G /data/test5
        ```
        
    2.  Check expansion events.
        
        ```
        kubectl get events
        ```
        
        At 225 GiB and over 80% usage, action2 triggered again. Because its limit is 300 GiB, the disk expanded from 225 GiB to 300 GiB. Events show:
        
        ```
        17m     Warning   StartExpand                  persistentvolumeclaim/pvc-disk-nginx-0    Start to expand of pvc pvc-disk-nginx-0 from 225Gi to 300Gi, usedCapacityPercentage:82%, freeSize:40351MB.
        17m     Normal    ExternalExpanding            persistentvolumeclaim/pvc-disk-nginx-0    waiting for an external controller to expand this PVC
        17m     Normal    Resizing                     persistentvolumeclaim/pvc-disk-nginx-0    External resizer is resizing volume d-uf66kkzltnq6xgi9****
        17m     Normal    FileSystemResizeRequired     persistentvolumeclaim/pvc-disk-nginx-0    Require file system resize of volume on node
        ```
        
        At this point, both action1 and action2 have been executed. If disk capacity again exceeds 80%, the conditions for triggering these actions are no longer met, so scale-out is not triggered.
        

## **References**

If you encounter issues while using cloud disk volumes, see [Cloud disk volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes).
