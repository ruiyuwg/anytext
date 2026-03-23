Disk volumes are suitable for applications that have high I/O and low latency requirements but do not require data sharing. You can mount existing disks to pods as statically provisioned volumes for persistent storage. This topic describes how to use a statically provisioned disk volume and verify that the storage is persistent.

## **Scenarios**

Disks are suitable for the following scenarios:

-   You want to create applications that require high disk I/O throughput and do not require data sharing. The applications can use storage services such as MySQL and Redis.
    
-   You want to write logs at high speeds.
    
-   You want to persist data in a way that is independent of the pod lifecycle.
    

If you have an existing disk, you can mount it to a pod as a statically provisioned volume. This method requires you to manually create a persistent volume (PV) and a persistent volume claim (PVC). This ensures that the PV is ready before the container starts. For more information, see [Block storage volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/disk-volume-overview-3/).

## **Prerequisites**

-   The Container Storage Interface (CSI) plugin is installed in the cluster.
    
    **Note**
    
    -   In the navigation pane on the left of the cluster management page, click **Add-ons**. On the **Storage** tab, check the installation status of the csi-plugin and csi-provisioner components. To upgrade the CSI plugin to use specific features, see [Upgrade the CSI plugin](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-and-upgrade-the-csi-plug-in#section-csv-gvs-vdb).
        
    -   If your cluster uses the FlexVolume component, you must migrate to the CSI plugin because FlexVolume is deprecated. For more information, see [Migrate from FlexVolume to CSI](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-from-flexvolume-to-csi/).
        
    
-   The disk that you want to mount meets the following requirements:
    
    -   The billing method of the disk is pay-as-you-go and the disk is in the **Available** state.
        
    -   The disk is in the same zone as the ECS node, and the disk type is compatible with the ECS instance type.
        
        **Important**
        
        Disks cannot be mounted across zones. Some disk types cannot be attached to certain ECS instance types. Make sure that the zone and instance type of the ECS node where the pod is scheduled are compatible with the existing disk. Otherwise, the disk mount fails. For more information about the compatibility between disk types and ECS instance types, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).
        

## **Usage notes**

-   Disks are non-shared storage. If multi-attach is not enabled for a disk, it can be mounted to only one pod at a time. For more information about multi-attach, see [Use the multi-attach and reservation features of NVMe disks](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/multi-attach-and-reservation-of-nvme-cloud-disks).
    
-   You can mount a disk only to a pod that resides in the same zone as the disk. Cross-zone mounting is not supported.
    
-   When a pod is rebuilt, the original disk is remounted. If the pod cannot be scheduled to the original zone due to other constraints, the pod remains in the Pending state because the disk cannot be mounted.
    
-   We recommend that you mount disks to StatefulSets or individual pods, not to deployments.
    
    **Note**
    
    If multi-attach is disabled, a disk can be mounted to only one pod. If you mount a disk to a deployment, you must set the number of replicas to 1. You cannot configure a separate volume for each pod or guarantee the priority of mounting and unmounting. In addition, due to the deployment upgrade policy, the new pod may fail to mount the disk when it is restarted. Therefore, we do not recommend mounting disks to deployments.
    
-   When you use a disk volume, if you configure `securityContext.fsgroup` in the application's YAML file, kubelet runs the `chmod` and `chown` commands after the mount is complete. This increases the mount time.
    
    **Note**
    
    After you configure `securityContext.fsgroup`, the owner of the files in the volume is automatically changed when the disk is mounted. This may increase the preparation time, depending on the number of files. For Kubernetes clusters of version 1.20 or later, you can set `fsGroupChangePolicy` to `OnRootMismatch`. This ensures that the file owner is changed only when the container starts for the first time. For subsequent pod upgrades or rebuilds, the mount time is not affected. If this does not meet your needs, we recommend that you use an initContainer to adjust the permissions.
    

## Mount a statically provisioned disk volume using kubectl

### **Step 1: Create a PV**

1.  Connect to the cluster. For more information, see [Connect to a cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-ubf-lhg-vdb) or [Use kubectl in CloudShell or Workbench to connect to a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kubectl-on-cloud-shell-to-manage-ack-clusters-1690962464408).
    
2.  Create a file named `disk-pv.yaml` based on the following template.
    
    Replace the following placeholders in the YAML file:
    
    -   `<YOUR-DISK-ID>`: The ID of your existing disk. For example, `d-uf628m33r5rsbi******`.
        
    -   `<YOUR-DISK-SIZE>`: The size of your existing disk. For example, `20Gi`.
        
    -   `<YOUR-DISK-ZONE-ID>`: The zone where your existing disk is located. For example, `cn-shanghai-f`.
        
    -   `<YOUR-DISK-CATEGORY>`: The type of the existing disk. For example, `cloud_essd`.
        
        The following list describes the values for different disk types.
        
        -   ESSD Entry disk: `cloud_essd_entry`
            
        -   ESSD AutoPL disk: `cloud_auto`
            
        -   ESSD: `cloud_essd`
            
        -   Standard SSD: `cloud_ssd`
            
        -   Ultra disk: `cloud_efficiency`
            
        -   Zone-redundant disk: `cloud_regional_disk_auto` (You must also adjust the configuration. For more information, see [the description of the nodeAffinity parameter](#257d90a917v74).)
            
    
    ```
    apiVersion: v1
    kind: PersistentVolume
    metadata:
      name: "<YOUR-DISK-ID>"
      annotations:
        csi.alibabacloud.com/volume-topology: '{"nodeSelectorTerms":[{"matchExpressions":[{"key":"node.csi.alibabacloud.com/disktype.<YOUR-DISK-CATEGORY>","operator":"In","values":["available"]}]}]}'
    spec:
      capacity:
        storage: "<YOUR-DISK-SIZE>"
      claimRef:
        apiVersion: v1
        kind: PersistentVolumeClaim
        namespace: default
        name: disk-pvc
      accessModes:
        - ReadWriteOnce
      persistentVolumeReclaimPolicy: Retain
      csi:
        driver: diskplugin.csi.alibabacloud.com
        volumeHandle: "<YOUR-DISK-ID>"
      nodeAffinity:
        required:
          nodeSelectorTerms:
          - matchExpressions:
            - key: topology.diskplugin.csi.alibabacloud.com/zone
              operator: In
              values:
              - "<YOUR-DISK-ZONE-ID>"
      storageClassName: alicloud-disk-topology-alltype
      volumeMode: Filesystem
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    `csi.alibabacloud.com/volume-topology`
    
    Annotation. Used to configure additional node constraints required to successfully mount the disk. We recommend that you specify the disk type to ensure that the pod is scheduled to an ECS node that supports this disk type.
    
    `claimRef`
    
    Specifies the PVC that can be bound to the PV. To allow the PV to be bound to any PVC, delete this configuration.
    
    `accessModes`
    
    Access mode. Only `ReadWriteOnce` is supported. This means the volume can be mounted as read-write by a single pod.
    
    `persistentVolumeReclaimPolicy`
    
    The reclaim policy of the PV.
    
    -   `Delete`: When the PVC is deleted, the PV and the disk are also deleted.
        
    -   `Retain`: When the PVC is deleted, the PV and the disk are not deleted. You must manually delete them.
        
    
    `driver`
    
    The value is `diskplugin.csi.alibabacloud.com`, which indicates that the Alibaba Cloud disk CSI plugin is used.
    
    `nodeAffinity`
    
    Node affinity configuration. Disks cannot be mounted across zones. This configuration ensures that the pod is scheduled to an ECS node in the same zone as the disk.
    
    For zone-redundant disks, change it to the following content to allow the disk to be mounted to any zone in the region.
    
    > In the code, `<YOUR-DISK-REGION-ID>` is the region where the disk is located, for example, `cn-shanghai`.
    
    ```
      nodeAffinity:
        required:
          nodeSelectorTerms:
          - matchExpressions:
            - key: topology.kubernetes.io/region
              operator: In
              values:
              - "<YOUR-DISK-REGION-ID>"
    ```
    
    `storageClassName`
    
    This configuration is not meaningful for statically provisioned volumes. You do not need to create the corresponding StorageClass in advance. However, you must make sure that the value of this configuration item is the same in the PV and the PVC.
    
3.  Create the PV.
    
    ```
    kubectl create -f disk-pv.yaml
    ```
    
4.  Verify that the PV is created.
    
    ```
    kubectl get pv
    ```
    
    Expected output:
    
    ```
    NAME                     CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS      CLAIM              STORAGECLASS   VOLUMEATTRIBUTESCLASS   REASON   AGE
    d-uf628m33r5rsbi******   20Gi       RWO            Retain           Available   default/disk-pvc   disk           <unset>                          1m36s
    ```
    

### **Step 2: Create a PVC**

1.  Create a file named `disk-pvc.yaml` based on the following template.
    
    ```
    apiVersion: v1
    kind: PersistentVolumeClaim
    metadata:
      name: disk-pvc
    spec:
      accessModes:
      - ReadWriteOnce
      resources:
        requests:
          storage: "<YOUR-DISK-SIZE>"
      storageClassName: alicloud-disk-topology-alltype
      volumeName: "<YOUR-DISK-ID>"
    ```
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    `accessModes`
    
    Access mode. Only `ReadWriteOnce` is supported. This means the volume can be mounted as read-write by a single pod.
    
    `storage`
    
    The storage capacity to allocate to the pod. The value cannot exceed the capacity of the disk.
    
    `storageClassName`
    
    This configuration is not meaningful for statically provisioned volumes. You do not need to create the corresponding StorageClass in advance. However, you must make sure that the value of this configuration item is the same in the PV and the PVC.
    
    `volumeName`
    
    Specifies the PV that can be bound to the PVC. To allow the PVC to be bound to any PV, delete this parameter.
    
2.  Create the PVC.
    
    ```
    kubectl create -f disk-pvc.yaml
    ```
    
3.  Verify that the PVC is created.
    
    ```
    kubectl get pvc
    ```
    
    The expected output shows that the PVC is associated with the PV.
    
    ```
    NAME       STATUS   VOLUME                   CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
    disk-pvc   Bound    d-uf628m33r5rsbi******   20Gi       RWO            disk           <unset>                 64s
    ```
    

### **Step 3: Create an application and mount the disk**

1.  Create a file named `disk-test.yaml` based on the following template.
    
    The following YAML example creates a StatefulSet with one pod. The pod requests storage resources using a PVC named `disk-pvc` and mounts the volume to the `/data` path.
    
    ```
    apiVersion: apps/v1
    kind: StatefulSet
    metadata:
      name: disk-test
    spec:
      replicas: 1
      selector:
        matchLabels:
          app: nginx
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
    ```
    
2.  Create the StatefulSet and mount the disk.
    
    ```
    kubectl create -f disk-test.yaml
    ```
    
3.  Check the status of the pod in the StatefulSet.
    
    ```
    kubectl get pod -l app=nginx
    ```
    
    The expected output shows that one pod is created because the number of replicas for the StatefulSet is 1.
    
    ```
    NAME          READY   STATUS    RESTARTS   AGE
    disk-test-0   1/1     Running   0          14s
    ```
    
4.  Verify that the disk is mounted by checking the mount path.
    
    ```
    kubectl exec disk-test-0 -- df -h /data
    ```
    
    Expected output:
    
    ```
    Filesystem      Size  Used Avail Use% Mounted on
    /dev/vdb         20G   24K   20G   1% /data
    ```
    

## Mount a statically provisioned disk volume in the console

### Step 1: Create a PV

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left navigation pane, choose **Volumes** > **Persistent Volumes**.
    
3.  On the **Persistent Volumes** page, click **Create**.
    
4.  In the dialog box that appears, set the parameters and click **Create**.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **PV Type**
    
    Select **Cloud Disk**.
    
    Cloud Disk
    
    **Access Mode**
    
    Only **ReadWriteOnce** is supported.
    
    ReadWriteOnce
    
    **Disk ID**
    
    Click **Select Disk** and select a disk to be mounted. The disk must be in the same region and zone as the node.
    
    d-uf628m33r5rsbi\*\*\*\*\*\*
    
    **File System Type**
    
    Select the file system type to use for storing data on the disk. Supported types include **ext4**, **ext3**, **xfs**, and **vfat**. The default value is **ext4**.
    
    ext4
    
    After the PV is created, you can view it on the **Persistent Volumes** page.
    

### Step 2: Create a PVC

1.  In the left-side navigation pane of the details page, choose **Volumes** > **Persistent Volume Claims**.
    
2.  On the **Persistent Volume Claims** page, click **Create**.
    
3.  In the dialog box that appears, set the parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **PVC Type**
    
    Select **Cloud Disk**.
    
    Disk
    
    **Name**
    
    Enter a custom name for the PVC. For the format requirements, see the prompt on the interface.
    
    diks-pvc
    
    **Allocation Mode**
    
    Select **Existing Volumes**.
    
    Existing Volume
    
    **Existing Volumes**
    
    Select the PV that you created in Step 1.
    
    d-uf690053kttkprgx\*\*\*\*, 20Gi
    
    **Capacity**
    
    The storage capacity to allocate to the pod. The value cannot exceed the capacity of the disk.
    
    20Gi
    
    After the PVC is created, you can view it on the **Persistent Volume Claims** page. The PVC is bound to the PV (the disk volume).
    

### **Step 3: Create an application and mount the disk**

1.  In the left-side navigation pane of the details page, choose **Workloads** > **StatefulSets**.
    
2.  In the upper-right corner of the **StatefulSets** page, click **Create from Image**.
    
3.  Set the parameters for the StatefulSet and click **Create from Image**.
    
    The following table describes the key parameters. Set other parameters as needed. For more information, see [Create a StatefulSet](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-a-statefulset-to-create-a-stateful-application-1).
    
    **Configuration Page**
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Basic Information**
    
    **Name**
    
    Enter a custom name for the StatefulSet. For the format requirements, see the prompt on the interface.
    
    disk-test
    
    **Replicas**
    
    Set the number of replicas for the StatefulSet.
    
    1
    
    **Container**
    
    **Image Name**
    
    Enter the address of the image used to deploy the application.
    
    anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
    
    **Required Resources**
    
    Set the required vCPU, memory, and ephemeral storage resources.
    
    -   CPU: 0.25 Core
        
    -   Memory: 512 MiB
        
    -   Ephemeral-Storage: Do not set
        
    
    **Volume**
    
    Click **Add PVC**. Then, set the parameters.
    
    -   **Mount Source**: Select the PVC that you created in Step 2.
        
    -   **Container Path**: Enter the container path to which you want to mount the disk.
        
    
    -   Mount Source: disk-pvc
        
    -   Container Path: /data
        
    
4.  Check the application status.
    
    1.  On the **StatefulSets** page, click the application name.
        
    2.  On the **Pods** tab, confirm that the pod is in the Running state.
        

## **Verify data persistence on the disk using kubectl**

The StatefulSet created in the preceding example contains one pod with a mounted disk. When this pod is deleted, a new pod is automatically created and the original disk is remounted to the new pod. The data on the disk is retained. You can verify the data persistence of the disk as follows:

1.  Check the data in the mount path of the disk.
    
    ```
    kubectl exec disk-test-0 -- ls /data
    ```
    
    Expected output:
    
    ```
    lost+found
    ```
    
2.  Write a file to the disk.
    
    ```
    kubectl exec disk-test-0 -- touch /data/test
    ```
    
3.  Delete the pod.
    
    ```
    kubectl delete pod disk-test-0
    ```
    
    **Note**
    
    After you delete the pod in the StatefulSet, the system automatically creates a new pod.
    
4.  Check the status of the new pod.
    
    ```
    kubectl get pod -l app=nginx
    ```
    
    The expected output shows that the new pod has the same name as the deleted pod. This is a feature of StatefulSets.
    
    ```
    NAME          READY   STATUS    RESTARTS   AGE
    disk-test-0   1/1     Running   0          27s
    ```
    
5.  Verify that the new pod has remounted the disk and that the data is intact.
    
    ```
    kubectl exec disk-test-0 -- ls /data
    ```
    
    The expected output shows that the `test` file remains on the disk.
    
    ```
    lost+found  
    test
    ```
    

## **References**

-   If you encounter issues when you use disk volumes, see [FAQ about disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes) for troubleshooting information.
    
-   If the disk size no longer meets your requirements or the disk is full, see [Expand disk persistent volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-disk-volume/).
    
-   To monitor disk usage in real time, see [Overview of container storage monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-plugin-to-monitor-storage-resources-at-the-node-side).
