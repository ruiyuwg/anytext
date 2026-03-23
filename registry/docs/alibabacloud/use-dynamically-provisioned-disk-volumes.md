Dynamic volume provisioning automatically creates and mounts an independent disk for each application replica. This suits databases, middleware, and other workloads that require high I/O and low latency, and simplifies storage lifecycle management.

## How it works

Dynamic disk provisioning with a StatefulSet follows three steps:

1.  **Define a template.** Create a new StorageClass or use a default one. The template defines parameters such as disk type, performance level, and reclaim policy.
    
2.  **Declare storage requirements.** Define `volumeClaimTemplates` in the StatefulSet and reference the StorageClass. This declares the PVC specifications each pod uses, such as storage capacity and access mode.
    
3.  **Automatic volume creation and mounting.** When the StatefulSet creates a pod, the system generates a unique PVC for the pod based on the template. The Container Storage Interface (CSI) component creates a persistent volume (PV) based on the StorageClass rules, binds the PV to the PVC, and mounts the disk to the pod.
    

## Scope and limitations

-   **Zone restrictions:** All disk types except regional Enterprise SSDs (ESSDs) cannot be mounted across zones. They can be mounted only to pods in the same zone.
    
-   **Instance family restrictions:** Some disk types can be attached only to specific [instance families](/help/en/ecs/user-guide/overview-of-instance-families).
    
-   **CSI component requirements:** The csi-plugin and csi-provisioner components must be installed. > **Note:** CSI components are installed by default. Make sure that you have not manually uninstalled them. Check the installation status on the **Add-ons** page. For the best experience, [upgrade the CSI components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in) to the latest version.
    
-   **Virtual node requirements:** To use disks on virtual nodes, your cluster and kube-scheduler versions must meet the following requirements:
    
    **Cluster version**
    
    **kube-scheduler version**
    
    1.28 or later
    
    6.9.3 or later
    
    1.26
    
    6.8.7
    
    1.24
    
    6.4.7
    
    1.22
    
    6.4.5
    

## Select a StorageClass

ACK provides multiple default StorageClasses. A StorageClass cannot be modified after creation. If the defaults do not meet your requirements, create a new one. See [Create a StorageClass manually](#h3-a7a7333f).

### Default StorageClasses

Select a default StorageClass and reference its name in the `storageClassName` field of your application.

**StorageClass name**

**Dynamically created disk type**

`alicloud-disk-topology-alltype` (Recommended)

Schedules pods before creating disks to prevent mount failures caused by zone mismatches (`volumeBindingMode: WaitForFirstConsumer`). The system attempts to create a disk in the order of ESSD, standard SSD, and ultra disk, based on the zone and instance type of the node where the pod is scheduled, along with disk inventory. By default, it prioritizes creating a PL1 ESSD with a minimum capacity of 20 GiB.

`alicloud-disk-essd`

Enterprise SSD (ESSD). The default performance level is PL1, and the minimum disk capacity is 20 GiB.

**Important**

ESSDs in [CloudBox](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-cloud-box-resources-in-ack-dedicated-clusters) only support the PL0 performance level. You must manually create a StorageClass and specify `performanceLevel` as `PL0`.

`alicloud-disk-ssd`

Standard SSD. The minimum disk capacity is 20 GiB.

`alicloud-disk-efficiency`

Ultra disk. The minimum disk capacity is 20 GiB.

> Run `kubectl describe sc <storageclass-name>` to view the detailed configuration of a StorageClass.

### Create a StorageClass manually

#### kubectl

1.  Create a file named `disk-sc.yaml`. The following example shows a StorageClass that uses `volumeBindingMode: WaitForFirstConsumer` to delay PV binding. **StorageClass parameters** > **Note:** If you schedule pods to virtual nodes using specific scheduling methods or adding specific Annotations, you cannot use StorageClasses of the `WaitForFirstConsumer` type. For more information, see [What do I do if a PVC is stuck in the Pending state when a pod with a mounted disk is scheduled to a virtual node?](#h3-02c42a37)
    
    **Parameter**
    
    **Description**
    
    `provisioner`
    
    The driver type. Required. Set to `diskplugin.csi.alibabacloud.com` for the Alibaba Cloud disk CSI plugin.
    
    `parameters.type`
    
    The disk type. Required. Valid values:
    
    -   `cloud_essd` (default): [enterprise SSD (ESSD)](/help/en/ecs/user-guide/essds)
        
    -   `cloud_auto`: [ESSD AutoPL disk](/help/en/ecs/user-guide/essd-autopl-disks)
        
    -   `cloud_essd_entry`: [ESSD Entry disk](/help/en/ecs/user-guide/elastic-block-storage-devices)
        
    -   `cloud_ssd`: [standard SSD](/help/en/ecs/user-guide/elastic-block-storage-devices)
        
    -   `cloud_efficiency`: [ultra disk](/help/en/ecs/user-guide/elastic-block-storage-devices)
        
    -   `elastic_ephemeral_disk_standard`: [Standard Edition elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks)
        
    -   `elastic_ephemeral_disk_premium`: [premium elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks)
        
    -   `cloud_regional_disk_auto`: [regional Enterprise SSD (ESSD)](/help/en/ecs/user-guide/regional-essd-disks)
        
    
    You can specify any combination of these values, such as `type: cloud_ssd,cloud_essd,cloud_auto`. The system attempts to create a disk in the specified order. The final disk type depends on factors such as the node instance and the disk types supported in the zone.
    
    `parameters.resourceGroupId`
    
    The resource group to which the disk belongs. Default: `""`.
    
    `parameters.regionId`
    
    The region where the disk is located. Must match the cluster's region.
    
    `parameters.fstype`
    
    The file system type. Valid values: `ext4` (default) and `xfs`.
    
    `parameters.mkfsOptions`
    
    Parameters for formatting the disk. Example: `mkfsOptions: "-O project,quota"`.
    
    `parameters.diskTags`
    
    Tags for the disk. Example: `diskTags: "a:b,b:c"`. You can also specify tags in the `diskTags/a: b` format. Requires CSI v1.30.3 or later.
    
    `parameters.encrypted`
    
    Whether to encrypt the disk. Default: `false` (not encrypted).
    
    `parameters.performanceLevel`
    
    The [ESSD performance level](/help/en/ecs/user-guide/essds). Valid values: `PL0`, `PL1` (default), `PL2`, `PL3`. When used with CloudBox, set to `PL0`.
    
    `parameters.volumeExpandAutoSnapshot` \[Deprecated\]
    
    Deprecated since CSI v1.31.4.
    
    `parameters.provisionedIops`
    
    The [provisioned performance (IOPS)](/help/en/ecs/user-guide/essd-autopl-disks) for an ESSD AutoPL disk.
    
    `parameters.burstingEnabled`
    
    Whether to enable [Burst (performance burst)](/help/en/ecs/user-guide/essd-autopl-disks) for an ESSD AutoPL disk. Default: `false`.
    
    `parameters.multiAttach`
    
    Whether to enable the [disk multi-attach feature](/help/en/ecs/user-guide/enable-multi-attach). Default: `false`.
    
    `volumeBindingMode`
    
    The binding mode. Valid values:
    
    -   `Immediate` (default): Creates the disk before creating the pod.
        
    -   `WaitForFirstConsumer`: Delays binding. The pod is scheduled first, and then the disk is created in the same zone as the pod.
        
    
    In multi-zone scenarios, use `WaitForFirstConsumer` to prevent mount failures caused by the disk and ECS node being in different zones.
    
    `reclaimPolicy`
    
    The reclaim policy. Valid values:
    
    -   `Delete` (default): When the PVC is deleted, the PV and the disk are also deleted.
        
    -   `Retain`: When the PVC is deleted, the PV and the disk data are not deleted. You must delete them manually.
        
    
    If data security is a priority, use `Retain` to prevent accidental data deletion.
    
    `allowVolumeExpansion`
    
    Set to `true` to allow [online disk volume expansion](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-disk-volume-without-service-interruptions).
    
    `allowedTopologies`
    
    Restricts disk creation to specific topology domains.
    
    -   `key`: The topology domain label. Supported values:
        
        -   `topology.diskplugin.csi.alibabacloud.com/zone`: A dedicated topology key provided by the Alibaba Cloud CSI plugin.
            
        -   `alibabacloud.com/ecs-instance-id`: Use this to specify a node when using elastic ephemeral disks.
            
    -   `values`: A list of zone or node IDs.
        
    
    ```
       apiVersion: storage.k8s.io/v1
       kind: StorageClass
       metadata:
         # Name of the StorageClass
         name: alicloud-disk-wait-for-first-consumer
       # Driver type. This value is fixed when using the Alibaba Cloud disk CSI plugin.
       provisioner: diskplugin.csi.alibabacloud.com
       parameters:
         # Disk type. The system selects a type based on priority.
         type: cloud_auto,cloud_essd,cloud_ssd
         # File system type
         fstype: ext4
         diskTags: "a:b,b:c"
         encrypted: "false"
         # Performance level of the ESSD
         performanceLevel: PL1
         provisionedIops: "40000"
         burstingEnabled: "false"
       # Binding mode. Use WaitForFirstConsumer in multi-zone scenarios.
       volumeBindingMode: WaitForFirstConsumer
       # Reclaim policy
       reclaimPolicy: Retain
       # Specifies whether to allow volume expansion
       allowVolumeExpansion: true
       # Topology constraint: Restricts disk creation to specified zones
       allowedTopologies:
       - matchLabelExpressions:
         - key: topology.diskplugin.csi.alibabacloud.com/zone
           values:
           # Replace with your actual zones
           - cn-hangzhou-i
           - cn-hangzhou-k
    ```
    
2.  Create the StorageClass:
    
    ```
       kubectl create -f disk-sc.yaml
    ```
    
3.  View the StorageClass: The output shows that the StorageClass is created in `WaitForFirstConsumer` binding mode:
    
    ```
       kubectl get sc
    ```
    
    ```
       NAME                                    PROVISIONER                       RECLAIMPOLICY   VOLUMEBINDINGMODE      ALLOWVOLUMEEXPANSION   AGE
       alicloud-disk-wait-for-first-consumer   diskplugin.csi.alibabacloud.com   Retain          WaitForFirstConsumer   true                   10s
    ```
    

#### Console

1.  On the **Clusters** page, click the name of the target cluster. In the left navigation pane, choose **Storage** > **StorageClasses**.
    
2.  Click **Create**, select **Cloud Disk** as the PV type, set the parameters, and click **OK**. > **Note:** If you schedule pods to virtual nodes using specific scheduling methods or adding specific Annotations, you cannot use StorageClasses of the `WaitForFirstConsumer` type. For more information, see [What do I do if a PVC is stuck in the Pending state when a pod with a mounted disk is scheduled to a virtual node?](#h3-02c42a37) After the StorageClass is created, you can view it on the **StorageClasses** page.
    
    **Parameter**
    
    **Description**
    
    **Parameters**
    
    Default parameter: `type`. The disk type. Required. Valid values:
    
    -   `cloud_essd` (default): [enterprise SSD (ESSD)](/help/en/ecs/user-guide/essds)
        
    -   `cloud_auto`: [ESSD AutoPL disk](/help/en/ecs/user-guide/essd-autopl-disks)
        
    -   `cloud_essd_entry`: [ESSD Entry disk](/help/en/ecs/user-guide/elastic-block-storage-devices)
        
    -   `cloud_ssd`: [standard SSD](/help/en/ecs/user-guide/elastic-block-storage-devices)
        
    -   `cloud_efficiency`: [ultra disk](/help/en/ecs/user-guide/elastic-block-storage-devices)
        
    -   `elastic_ephemeral_disk_standard`: [Standard Edition elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks)
        
    -   `elastic_ephemeral_disk_premium`: [premium elastic ephemeral disk](/help/en/ecs/user-guide/elastic-ephemeral-disks)
        
    -   `cloud_regional_disk_auto`: [regional Enterprise SSD (ESSD)](/help/en/ecs/user-guide/regional-essd-disks)
        
    
    You can specify any combination of these values, such as `type: cloud_ssd,cloud_essd,cloud_auto`. The system creates a disk in the specified order. The final disk type depends on factors such as the node instance and the disk types supported in the zone.  
      
    Optional parameters:
    
    -   `resourceGroupId`: The resource group to which the disk belongs. Default: `""`.
        
    -   `regionId`: The region where the disk is located. Must match the cluster's region.
        
    -   `fstype`: The file system type. Valid values: `ext4` (default) and `xfs`.
        
    -   `mkfsOptions`: Parameters for formatting the disk. Example: `mkfsOptions: "-O project,quota"`.
        
    -   `diskTags`: Tags for the disk. Example: `diskTags: "a:b,b:c"`. Also supports `diskTags/a: b` format. Requires CSI v1.30.3 or later.
        
    -   `encrypted`: Whether to encrypt the disk. Default: `false`.
        
    -   `performanceLevel`: The [ESSD performance level](/help/en/ecs/user-guide/essds). Valid values: `PL0`, `PL1` (default), `PL2`, `PL3`. When used with CloudBox, set to `PL0`.
        
    -   `provisionedIops`: The [provisioned performance (IOPS)](/help/en/ecs/user-guide/essd-autopl-disks) for an ESSD AutoPL disk.
        
    -   `burstingEnabled`: Whether to enable [Burst (performance burst)](/help/en/ecs/user-guide/essd-autopl-disks) for an ESSD AutoPL disk. Default: `false`.
        
    -   `multiAttach`: Whether to enable the [disk multi-attach feature](/help/en/ecs/user-guide/enable-multi-attach). Default: `false`.
        
    
    **Reclaim Policy**
    
    The reclaim policy. Valid values:
    
    -   `Delete` (default): When the PVC is deleted, the PV and the disk are also deleted.
        
    -   `Retain`: When the PVC is deleted, the PV and the disk data are not deleted. You must delete them manually.
        
    
    If data security is a priority, use `Retain` to prevent accidental data deletion.
    
    **Binding Mode**
    
    The binding mode. Valid values:
    
    -   `Immediate` (default): Creates the disk before creating the pod.
        
    -   `WaitForFirstConsumer`: Delays binding. The pod is scheduled first, and then the disk is created in the same zone as the pod.
        
    
    In multi-zone scenarios, use `WaitForFirstConsumer` to prevent mount failures caused by the disk and ECS node being in different zones.
    

## Mount a disk to a StatefulSet

Use a StatefulSet when each pod replica needs its own independent disk.

**Important**

Disks are non-shared storage. If multi-attach is not enabled, a disk can be mounted to only one pod at a time. Sharing a PVC in a multi-replica deployment causes new pods to fail because they cannot mount the disk that is in use by an existing pod. Use a StatefulSet or mount a separate disk for each pod. To use a cloud disk in a Deployment, see [Use a cloud disk as a temporary storage volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-using-deployment-for-temporary-storage). To enable multi-attach, see [Use NVMe cloud disks with multi-attach and Reservation](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/multi-attach-and-reservation-of-nvme-cloud-disks).

1.  Create a file named `statefulset.yaml`. The following example creates a StatefulSet with two pods. It uses `volumeClaimTemplates` to automatically create and bind independent persistent storage for each pod. > **Important:** Configuring `securityContext.fsGroup` in a pod causes the kubelet to recursively change file permissions (`chmod`/`chown`) when the volume is mounted. If the volume contains many files, this significantly increases the mount time. > > For clusters running Kubernetes 1.20 or later, set `fsGroupChangePolicy` to `OnRootMismatch`. This performs a recursive permission change only on the first mount and only if the permissions of the volume's root directory do not match the required permissions. If you need further performance tuning or more granular permission control, use an `initContainer` to run permission adjustment commands before the main application container starts.
    
    ```
       apiVersion: apps/v1
       kind: StatefulSet
       metadata:
         name: web
       spec:
         serviceName: "nginx"
         replicas: 2
         selector:
           matchLabels:
             app: nginx
         template:
           metadata:
             labels:
               app: nginx
           spec:
             # Configure the following securityContext to optimize mount performance
             securityContext:
               fsGroup: 1000
               fsGroupChangePolicy: "OnRootMismatch"
             containers:
             - name: nginx
               image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
               ports:
               - containerPort: 80
               volumeMounts:
               # Mount the data volume to the /data directory of the container
               # The name must be the same as metadata.name defined in volumeClaimTemplates
               - name: pvc-disk
                 mountPath: /data
         # Define the PVC template
         volumeClaimTemplates:
         - metadata:
             name: pvc-disk
           spec:
             # Access mode
             accessModes: [ "ReadWriteOnce" ]
             # Associate the previously created StorageClass
             storageClassName: "alicloud-disk-wait-for-first-consumer"
             resources:
               requests:
                 # Requested storage capacity, which is the disk size
                 storage: 20Gi
    ```
    
2.  Create the StatefulSet:
    
    ```
       kubectl create -f statefulset.yaml
    ```
    
3.  Confirm that the pods are in the Running state:
    
    ```
       kubectl get pod -l app=nginx
    ```
    
4.  Check the mount path and confirm that the disk is mounted. > **Note:** In this example, the pod name is `web-1`. Replace it with your actual pod name. Expected output:
    
    ```
       kubectl exec web-1 -- df -h /data
    ```
    
    ```
       Filesystem      Size  Used Avail Use% Mounted on
       /dev/vdb         20G   24K   20G   1% /data
    ```
    

## Verify persistent storage

To verify that data persists after a pod is recreated, write data to the pod, delete the pod, and check whether the data remains.

1.  Write test data to the pod. For the pod `web-1`, create a `test` file in the mounted disk path `/data`: Expected output:
    
    ```
       kubectl exec web-1 -- touch /data/test
       kubectl exec web-1 -- ls /data
    ```
    
    ```
       lost+found
       test
    ```
    
2.  Simulate a pod failure by deleting the pod: Run `kubectl get pod -l app=nginx` again. A new pod named `web-1` is automatically created.
    
    ```
       kubectl delete pod web-1
    ```
    
3.  Verify the data in the new pod. Check the `/data` folder in the new pod `web-1`: The `test` file still exists, confirming that data persists after the pod is deleted and recreated.
    
    ```
       kubectl exec web-1 -- ls /data
    ```
    
    ```
       lost+found
       test
    ```
    

## Mount a disk to a single pod or single-replica Deployment

For applications that do not require multi-replica scaling or a stable Network ID, manually create a PVC and mount it to a pod or Deployment.

The process: select a StorageClass, create a PVC, and mount the PVC in the application.

1.  Prepare a StorageClass.
    
2.  Create a PVC to request storage resources.
    
    #### kubectl
    
    1.  Create a file named `disk-pvc.yaml`.
        
        ```
           apiVersion: v1
           kind: PersistentVolumeClaim
           metadata:
             name: disk-pvc
           spec:
             # Access mode
             accessModes:
             - ReadWriteOnce
             volumeMode: Filesystem
             resources:
               requests:
                 # Requested storage capacity, which is the disk size
                 storage: 20Gi
             # Associate with the previously created StorageClass
             storageClassName: alicloud-disk-topology-alltype
        ```
        
        The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        `accessModes`
        
        The [access mode](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/storage-basics) of the volume. Valid values: `ReadWriteOnce`, `ReadOnlyMany`, `ReadWriteMany`. The supported values depend on the `multiAttach` setting in the StorageClass and the `volumeMode` setting in the PVC. `multiAttach` specifies whether to enable [multi-attach for disks](/help/en/ecs/user-guide/enable-multi-attach). Default: `false`.
        
        -   If `multiAttach` is `false` and `volumeMode` is set to any value, only `ReadWriteOnce` is supported.
            
        -   If `multiAttach` is `true` and `volumeMode` is `Filesystem`, only `ReadWriteOnce` and `ReadOnlyMany` are supported.
            
        -   If `multiAttach` is `true` and `volumeMode` is `Block`, all three access modes are supported.
            
        
        **Important:** In this scenario, the access mode is typically `ReadWriteOnce` (RWO), which means the volume can be mounted by only one pod at a time. The number of Deployment replicas cannot be greater than 1. If you scale out the Deployment, the new pods will be stuck in the `Pending` state because they cannot mount the disk that is already in use.
        
        `volumeMode`
        
        The mode of the persistent volume. Valid values:
        
        -   `Filesystem` (default): The volume is formatted and mounted as a directory.
            
        -   `Block`: The volume is provided to the pod as an unformatted block device.
            
        
        `storage`
        
        The requested storage capacity. The [capacity range](/help/en/ecs/user-guide/block-storage-performance) varies by disk type. Make sure the value of `storage` complies with the capacity limits of the disk type corresponding to the referenced StorageClass to prevent disk creation failures.
        
        `storageClassName`
        
        The StorageClass to bind.
        
    2.  Create the PVC:
        
        ```
           kubectl create -f disk-pvc.yaml
        ```
        
    3.  View the PVC:
        
        ```
           kubectl get pvc
        ```
        
        Because the StorageClass uses the `WaitForFirstConsumer` mode, the PVC is in the `Pending` state until the first pod that uses it is successfully scheduled.
        
        ```
           NAME       STATUS    VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS                            VOLUMEATTRIBUTESCLASS   AGE
           disk-pvc   Pending                                      alicloud-disk-topology-alltype           <unset>                 14s
        ```
        
    
    #### Console
    
    1.  In the navigation pane on the left of the cluster management page, choose **Storage** > **Persistent Volume Claims**.
        
    2.  On the **Persistent Volume Claims** page, click **Create**. Set **PVC Type** to **Cloud Disk** and configure the parameters as prompted.
        
        **Parameter**
        
        **Description**
        
        **Allocation Mode**
        
        Select **Use StorageClass**.
        
        **Existing StorageClass**
        
        A default or manually created StorageClass.
        
        **Capacity**
        
        The requested storage capacity. The [capacity range](/help/en/ecs/user-guide/block-storage-performance) varies by disk type. Make sure the value of `storage` complies with the capacity limits of the disk type corresponding to the referenced StorageClass to prevent disk creation failures.
        
        **Access Mode**
        
        Only **ReadWriteOnce** is supported. This means the volume can be mounted as read-write by a single pod.
        
        After the PVC is created, you can view it on the **Persistent Volume Claims** page.
        
    
3.  Mount the PVC in an application.
    
    1.  Create a file named `disk-deployment.yaml`.
        
        ```
           apiVersion: apps/v1
           kind: Deployment
           metadata:
             name: single-pod-app
           spec:
             # Make sure the number of replicas is 1
             replicas: 1
             selector:
               matchLabels:
                 app: nginx-single
             template:
               metadata:
                 labels:
                   app: nginx-single
               spec:
                 containers:
                 - name: nginx
                   image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
                   ports:
                   - containerPort: 80
                   # Define the mount point in the container
                   volumeMounts:
                   - name: my-persistent-storage  # Must match the name defined in volumes below
                     mountPath: /data  # Mount to the /data directory in the container
                 # Declare and reference the PVC at the pod level
                 volumes:
                 - name: my-persistent-storage # The volume to be referenced by the container
                   persistentVolumeClaim:
                     claimName: disk-pvc # Reference the previously created PVC
        ```
        
    2.  Deploy the Deployment:
        
        ```
           kubectl create -f disk-deployment.yaml
        ```
        
4.  Verify the mount result.
    
    1.  Verify that the pod is running:
        
        ```
           kubectl get pods -l app=nginx-single
        ```
        
    2.  Log on to the pod and check whether the disk is mounted to the `/data` directory:
        
        ```
           # Get the pod name
           POD_NAME=$(kubectl get pods -l app=nginx-single -o jsonpath='{.items[0].metadata.name}')
           # Run the df -h command
           kubectl exec $POD_NAME -- df -h /data
        ```
        
        The following output indicates that the 20 GiB disk is successfully mounted:
        
        ```
           Filesystem      Size  Used Avail Use% Mounted on
           /dev/vdb         20G   24K   20G   1% /data
        ```
        

## Going live

### High availability

**Disk selection**

Evaluate the disk's [performance](/help/en/ecs/user-guide/block-storage-performance), [billing](https://www.alibabacloud.com/product/ecs) method, the node's zone, and the [instance family](/help/en/ecs/user-guide/overview-of-instance-families). This ensures that pods can be scheduled to compatible nodes.

When selecting a [disk type](/help/en/ecs/user-guide/elastic-block-storage-devices), note that standard SSDs and ultra disks are being phased out. Replace ultra disks with PL0 ESSDs or ESSD Entry disks, and replace standard SSDs with ESSD AutoPL disks.

**Cross-zone disaster recovery**

-   **Application-level disaster recovery:** For critical services such as databases, deploy application instances in multiple zones. Use the application's data synchronization mechanism to achieve high availability.
    
-   **Storage-level disaster recovery:** Select a disk type that supports multi-zone disaster recovery. Write data in real time to different zones within the same region to enable cross-zone fault recovery. For more information, see [Use regional Enterprise SSDs (ESSDs)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-regional-essd-disks).
    

### Data security and backup

-   **Prevent accidental data deletion:** Set the StorageClass `reclaimPolicy` to `Retain`. When a PVC is deleted, the backend disk is not deleted. This simplifies data restoration.
    
-   **Regular backups:** Dynamic volumes simplify resource provisioning but are not a substitute for data backup. For core services, use [Backup Center](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/backup-center-overview/) to back up and restore data.
    
-   **At-rest encryption:** For applications with sensitive data, configure `encrypted: "true"` in the StorageClass to [encrypt disks](/help/en/ecs/user-guide/encryption-overview).
    

### Performance and cost optimization

-   **Parallel attachment:** By default, disk operations on a single node are serial. [Use parallel disk attachment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/attach-cloud-disks-in-parallel) to accelerate pod startup.
    
-   **Online volume expansion:** Set `allowVolumeExpansion: true` in the StorageClass. This lets you [expand disk volumes online](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-disk-volume-without-service-interruptions) as storage needs grow.
    
-   **Storage monitoring and alerting:** Configure alerts based on [container storage monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-plugin-to-monitor-storage-resources-at-the-node-side) to detect volume abnormalities or performance bottlenecks.
    

## Billing

Disks dynamically created using a StorageClass are billed on a pay-as-you-go basis. For more information, see [Elastic Block Storage billing](/help/en/ecs/block-storage-devices) and [Elastic Block Storage pricing](https://www.alibabacloud.com/product/ecs).

## FAQ

### What do I do if a PVC is stuck in the Pending state when a pod with a mounted disk is scheduled to a virtual node?

This issue can occur if you use a StorageClass that does not support scheduling to virtual nodes. When you schedule a pod to a virtual node using specific labels or annotations, StorageClasses with `volumeBindingMode: WaitForFirstConsumer` are not supported.

**Cause:** The `WaitForFirstConsumer` mode relies on the kube-scheduler to select a physical node for the pod. This determines the pod's zone, which is then used to create the disk. However, some scheduling mechanisms for virtual nodes do not follow this process, preventing the CSI from obtaining zone information. As a result, the PV cannot be created and the PVC remains in the Pending state.

**Diagnosis:** Check whether the pod or its namespace contains any of the following configurations:

-   **Labels:**
    
    -   `alibabacloud.com/eci: "true"`: Schedules the pod to an ECI pod.
        
    -   `alibabacloud.com/acs: "true"`: Schedules the pod to an ACS pod.
        
-   **Node specification:**
    
    -   The pod directly specifies a node using `spec.nodeName`. The node name has the prefix `virtual-kubelet`.
        
-   **Annotations:**
    
    -   `k8s.aliyun.com/eci-vswitch`: Specifies the vSwitch for the ECI pod.
        
    -   `k8s.aliyun.com/eci-fail-strategy: "fail-fast"`: Sets the failure handling policy for the ECI pod to fail-fast.
        

## References

-   If you encounter issues when you use disk volumes, see [Disk volume FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes).
    
-   For optimization suggestions for multi-zone disk deployments, see [Recommended configurations for high availability of disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/recommended-storage-settings-for-cross-zone-deployment).
    
-   If your cluster still uses the deprecated FlexVolume component, [migrate FlexVolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-from-flexvolume-to-csi/).
    
-   For more information about how to create a workload, see [Create a StatefulSet](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-a-statefulset-to-create-a-stateful-application-1) and [Create a Deployment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment).
    
-   If you no longer use a disk and want to stop billing for it, [release the disk](/help/en/ecs/user-guide/release-a-disk). Releasing a disk deletes the disk and its data, and stops billing.
