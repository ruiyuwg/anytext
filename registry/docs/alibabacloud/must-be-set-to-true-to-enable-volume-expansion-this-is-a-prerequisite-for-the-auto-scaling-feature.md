Manually scaling out NAS persistent volumes requires human intervention. The auto-scaling feature of Container Network File System (CNFS) is more efficient. You can set a policy to automatically trigger a scale-out when storage usage reaches a threshold. This provides elastic capacity management.

## How it works

The auto-scaling of NAS persistent volumes is handled by the storage-operator component and requires no changes to your business code. The core workflow is as follows.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2079470771/CAEQUxiBgID5o9Cj4hkiIDdhMjQ3NTM4ZGIyNTQ0NmFhOTBmOTkwZjhmODFmNTlk5657021_20250903105226.320.svg)

1.  Define a policy: Create a StorageAutoScalerPolicy resource to provide scale-out instructions for the storage-operator. The policy includes the target PersistentVolumeClaim (PVC), trigger conditions, and scale-out actions.
    
    > The StorageClass used by the PVC must have `allowVolumeExpansion: true` configured.
    
2.  Continuous monitoring: The storage-operator continuously monitors the real-time storage usage of the target PVC based on the policy.
    
3.  Trigger scale-out: When the trigger conditions are met, the storage-operator automatically sends a scale-out request to the PVC.
    
4.  Execute scale-out: The request is processed by the Container Storage Interface (CSI) driver. The underlying Alibaba Cloud NAS service then performs the actual file system scale-out operation.
    
5.  Synchronize status: After the scale-out is complete, the status of the PVC is automatically updated to reflect the new capacity.
    

## Applicability

-   The storage components meet the following requirements:
    
    -   csi-plugin and csi-provisioner: Version v1.20.5-ff6490f-aliyun or later.
        
        > To upgrade the components, see [Upgrade CSI components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
        
    -   storage-operator: Version v1.18.8.56-2aa33ba-aliyun or later.
        
        > To upgrade the component, see [Manage the storage-operator component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-storage-operator-to-deploy-and-upgrade-storage-components).
        
        If you use a storage-operator version earlier than [v1.33.1](/help/en/ack/product-overview/storage-operator#20b13ee26c4ta), you must also manually modify the ConfigMap to enable the auto-scaling feature.
        
        **Show details**
        
        Run the following command to modify the ConfigMap of the storage-operator to deploy and enable this feature.
        
        ```
        kubectl patch configmap/storage-operator \
          -n kube-system \
          --type merge \
          -p '{"data":{"storage-auto-expander":"{\"imageRep\":\"acs/storage-auto-expander\",\"imageTag\":\"\",\"install\":\"true\",\"template\":\"/acs/templates/storage-auto-expander/install.yaml\",\"type\":\"deployment\"}"}}'
        ```
        
    -   cnfs-controller: The component is installed.
        
        > This is a managed component that is installed by default. Make sure it has not been uninstalled.
        
-   A CNFS is created and its status is Available. For more information, see the section about creating a CNFS in [Manage NAS file systems with CNFS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-nas-file-systems).
    
    **Query the CNFS status**
    
    1.  View the CNFS object.
        
        ```
        kubectl get cnfs
        ```
        
        Expected output:
        
        ```
        NAME                                      AGE
        default-cnfs-nas-837d6ea-20210819155623   14d
        ```
        
    2.  View the status of the CNFS object.
        
        ```
        kubectl get cnfs <CNFS_NAME> -o yaml | grep Available
        ```
        
        Expected output:
        
        ```
        status: Available
        ```
        
    

## Step 1: Define the NAS persistent volume scale-out policy

Defining a scale-out policy is central to auto-scaling. In this step, you create a policy that specifies the trigger conditions and the scale-out behavior.

Use the following YAML template to create a `StorageAutoScalerPolicy`.

> This policy triggers an auto-scaling operation when the capacity usage of a PVC labeled `app: nginx` in the `default` or `nginx` namespace exceeds 80%. Each scale-out increases the current capacity by 100%, up to a maximum of 200 GiB.

```
cat << EOF | kubectl apply -f -
apiVersion: storage.alibabacloud.com/v1alpha1
kind: StorageAutoScalerPolicy
metadata:
  name: hybrid-expand-policy
spec:
   # Apply this policy to matching PVCs using a label selector.
  pvcSelector:
    matchLabels:
      app: nginx  # Must be the same as the labels configured for the PVC and deployment.
   # The namespaces where the policy takes effect.
  namespaces:
    - default
    - nginx
   # The conditions that trigger a scale-out.
  conditions:
    - name: condition1
      key: volume-capacity-used-percentage  # Monitoring metric: capacity usage percentage.
      operator: Gt  # Comparison operator: Gt (Greater than).
      values:
        - "80"   # Threshold: 80%.
   # The actions to perform when the conditions are met.
  actions:
    - name: action1
      type: volume-expand  # Action type: scale out.
      params:
        scale: 100%   # Scaling step size: Increase by 100% of the current capacity.
        limits: 200Gi   # Capacity limit: The total capacity after scaling out cannot exceed 200 GiB.
EOF
```

**Parameter**

**Description**

`pvcSelector`

Matches the PVCs to which this scale-out policy applies using a label selector.

`namespaces`

A list of namespaces where the policy takes effect. An OR logic is applied to multiple namespaces. If this parameter is not configured, the default value is default.

`conditions`

A trigger rule that consists of one or more conditional statements (`condition`). An AND logic is applied to multiple `condition` statements. The rule is triggered only when all `condition` statements are met.

-   `key`: The type of monitoring metric.
    
    -   `volume-capacity-used-percentage`: The percentage of used capacity. This condition is met when the percentage of the actual used capacity of the persistent volume exceeds the specified threshold.
        
    -   `volume-capacity-free-size`: The amount of free space. This condition is met when the free space of the persistent volume is less than the specified threshold.
        
    -   `volume-capacity-pvc-size`: The requested capacity of the PVC. This condition is met when the original requested capacity of the PVC (`pvc.spec.resources.requests.storage`) is less than the specified threshold.
        
-   `operator`: The comparison operator. Supported values are `Gt` (greater than), `Lt` (less than), `Eq` (equal to), and `Ne` (not equal to). The values are not case-sensitive.
    
-   `values`: The specific values for the rule.
    

`actions`

A list of actions to perform when the `conditions` are met. The system performs the first `action` that meets the conditions.

-   `type`: The type of operation. Currently, only `volume-expand` (scale-out) is supported.
    
-   `scale`: The scaling step size. The value can be a static field, such as `100Gi`, or a percentage, such as `50%`.
    
-   `limits`: The capacity limit. The total capacity of the PVC after scaling out cannot exceed this value. We recommend that you set this parameter to control costs.
    

## **Step 2: Create a StorageClass**

Create a StorageClass to define a storage template for dynamically creating persistent volumes based on an existing NAS file system. The `allowVolumeExpansion` parameter must be set to `true` to provide a clear capacity baseline for the persistent volume (PV). The auto-scaling policy relies on this baseline to calculate usage.

```
cat << EOF | kubectl apply -f -
apiVersion: storage.k8s.io/v1
kind: StorageClass
metadata:
  name: alibabacloud-cnfs-nas  # The name of the StorageClass. It will be referenced in the PVC later.
mountOptions:
- nolock,tcp,noresvport
- vers=3
parameters:
  volumeAs: subpath
  # The server field format is <nas-server-address>:/<path>.
  server: "0cd8b4a576-g****.cn-hangzhou.nas.aliyuncs.com:/k8s"
  archiveOnDelete: "true"
provisioner: nasplugin.csi.alibabacloud.com
reclaimPolicy: Retain
# Must be set to true to enable volume expansion. This is a prerequisite for the auto-scaling feature.
allowVolumeExpansion: true
EOF
```

> For more information about the parameters, see [Manage NAS file systems with CNFS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cnfs-to-manage-nas-file-systems).

## **Step 3: Deploy the application and its associated PVC**

After you create a policy, you must deploy an application with matching labels to associate the policy with the corresponding PVC.

Use the following YAML template to create a PVC and a deployment. Make sure that the `labels` (`app: nginx`) for both objects exactly match the `pvcSelector.matchLabels` configuration in the policy.

```
cat << EOF | kubectl apply -f -
kind: PersistentVolumeClaim
apiVersion: v1
metadata:
  name: cnfs-nas-pvc
  labels:
    app: nginx   # Must be the same as the pvcSelector.matchLabels configuration in the scale-out policy.
spec:
  accessModes:
    - ReadWriteMany
  # Reference the StorageClass created earlier.
  storageClassName: alibabacloud-cnfs-nas
  resources:
    requests:
      storage: 20Gi
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: cnfs-nas-deployment
  labels:
    app: nginx
spec:
  selector:
    matchLabels:
      app: nginx  # Must be the same as the pvcSelector.matchLabels configuration in the scale-out policy.
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
        volumeMounts:
        - mountPath: "/data"
          name: cnfs-nas-pvc
      volumes:
      - name: cnfs-nas-pvc
        persistentVolumeClaim:
          claimName: cnfs-nas-pvc
EOF
```

## Step 4: Verify the auto-scaling result

After the policy is deployed, write analog data to trigger a scale-out. Then, observe the related events and monitoring metrics to verify that the policy is effective.

1.  View all pods in the **default** namespace.
    
    ```
    kubectl get pods -l app=nginx
    ```
    
    Expected output:
    
    ```
    NAME                                                            READY   STATUS    RESTARTS   AGE
    cnfs-nas-deployment-56dbcc7fb7-wh79z   1/1      Running            0          20m
    ```
    
2.  Log on to the application pod and write 20 GiB of test data to the mounted directory. This makes the storage usage exceed the 80% threshold.
    
    > The write operation may take a long time, depending on factors such as network throughput and backend storage performance.
    
    ```
    kubectl exec -it <POD_NAME> -- dd if=/dev/zero of=/data/testfile bs=1G count=20
    ```
    
3.  View the events that triggered the scale-out.
    
    ```
    kubectl get events | grep cnfs-nas-pvc
    ```
    
    After the scale-out is triggered, the system generates related events. The expected output should include events such as `StartExpand` and `VolumeResizeSuccessful`. These events indicate that the scale-out was successfully triggered and completed, and the capacity was scaled out from 20 GiB to 40 GiB.
    
    ```
    12s         Warning   StartExpand                  persistentvolumeclaim/cnfs-nas-pvc          Start to expand of pvc cnfs-nas-pvc from 20Gi to 40Gi, usedCapacityPercentage:99%, freeSize:204MB.
    12s         Normal    ExternalExpanding            persistentvolumeclaim/cnfs-nas-pvc          waiting for an external controller to expand this PVC
    12s         Normal    Resizing                     persistentvolumeclaim/cnfs-nas-pvc          External resizer is resizing volume nas-462db2b2-717d-44fe-b0b6-fb4db03a****
    12s         Normal    VolumeResizeSuccessful       persistentvolumeclaim/cnfs-nas-pvc          Resize volume succeeded
    ```
    
    You can also run `kubectl get pvc` to check whether the capacity of the PVC has been updated.
    
4.  View the persistent volume usage information on the CSI NAS monitoring dashboard.
    
    > You must enable [Alibaba Cloud Prometheus Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster).
    
    1.  On the **Clusters** page, click the name of the destination cluster. In the navigation pane on the left, choose **Operations** > **Prometheus Monitoring**.
        
    2.  On the **Prometheus Monitoring** page, click the **Storage Monitoring** tab, and then click the **CSI NAS** tab.
        
    3.  On the **CSI NAS** dashboard, select the **Namespace** and **PVC Name** where the NAS persistent volume is located. Then, you can view the current capacity of the NAS persistent volume in the **Total Capacity** area.
        
        In this example, set **Namespace** to **default** and **PVC** to **cnfs-nas-pvc**.![NAS存储卷容量](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4142372361/p324034.png)
        
        The preceding figure shows that the scale-out was triggered at 10:23:30, and the capacity after the scale-out is 100 GiB.
        

## Recommendations for production environments

To better use the auto-scaling feature for NAS persistent volumes in a production environment, follow these best practices.

**Dimension**

**Description**

Cost optimization

-   Set a capacity limit: In the `actions` of the scale-out policy, set a reasonable value for `limits` to prevent unlimited capacity growth caused by business exceptions or configuration errors.
    
-   Set a reasonable scaling step size: The `scale` parameter supports a percentage or a static capacity value. For very large persistent volumes, using a static field, such as 200 Gi, may provide more precise cost control than using a percentage, such as 50%.
    

Policy and reliability

-   Reserve a safety buffer: Do not set the scale-out threshold in `conditions` too high, such as 95%. We recommend that you set it to a value between 75% and 80%. This reserves time and capacity for the system to complete the scale-out process and prevents application failures caused by insufficient space before the scale-out is complete.
    
-   Monitoring and alerting: Enable [container storage monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-plugin-to-monitor-storage-resources-at-the-node-side), view the monitoring dashboard based on metrics, and [connect to and configure Alibaba Cloud Prometheus Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster#5ebd6dd0308cy).
    
-   Fine-grained management: Create different StorageAutoScalerPolicy objects for different applications or environments to implement fine-grained, scenario-based capacity management.
    

Performance considerations

Balance capacity and performance: Auto-scaling solves capacity problems, not performance bottlenecks. If an application slows down due to input/output operations per second (IOPS) or many small file read and write operations, consider selecting a NAS type with higher performance.
