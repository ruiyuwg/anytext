If your cluster runs a Kubernetes version earlier than 1.16 or uses basic disks, you cannot expand a disk volume online by updating its persistent volume claim (PVC). Instead, you must manually expand the disk and its file system.

## Applicable scope

This topic describes how to expand a disk volume by manually expanding the capacity of the storage medium without modifying the PVC. You can use this method if your cluster runs a Kubernetes version earlier than 1.16 or does not meet the requirements for [expanding a disk volume online](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-disk-volume-without-service-interruptions).

**Important**

This method requires you to expand the disk in the ECS console. The Kubernetes resource objects in the cluster are not affected. This means the capacity of the PVC and persistent volume (PV) objects in the cluster remains unchanged. To ensure that the PV and PVC objects in the cluster reflect the actual disk capacity, we recommend that you [expand a disk volume online](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-disk-volume-without-service-interruptions).

This method supports online and offline expansion. Select a method as needed.

-   [Online expansion](#section-2af-b1y-1n1): The application is not paused. However, if the I/O traffic is high during the online expansion of the file system, I/O errors may occur.
    
-   [Offline expansion](#section-lvh-9j1-5ar): Pausing the application also pauses disk I/O. This ensures data security during the offline expansion of the file system. However, this method requires application downtime.
    

**Important**

Basic disks do not support online expansion. Use offline expansion for basic disks.

The following sections use an application with a [statically provisioned disk volume](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-a-statically-provisioned-disk-volume) as an example to describe how to expand a disk volume.

## Online expansion

You can expand a disk online in the ECS console without pausing the application.

### **Step 1: View disk information**

1.  Connect to the cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-ubf-lhg-vdb) or [Use kubectl to connect to a Kubernetes cluster from Workbench or CloudShell](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kubectl-on-cloud-shell-to-manage-ack-clusters-1690962464408).
    
2.  View information about the pod to which the disk is attached and confirm that the pod is in the Running state.
    
    ```
    kubectl get pod 
    ```
    
    Sample output:
    
    ```
    NAME          READY   STATUS    RESTARTS   AGE
    disk-test-0   1/1     Running   0          38s
    ```
    
3.  View the PVC to obtain the disk ID.
    
    ```
    kubectl get pvc
    ```
    
    The sample output shows that the PV bound to the PVC is `d-uf628m33r5rsbi******` (the disk ID) and the capacity is 20 GiB.
    
    ```
    NAME       STATUS   VOLUME                   CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
    disk-pvc   Bound    d-uf628m33r5rsbi******   20Gi       RWO            disk           <unset>                 64s
    ```
    

### Step 2: Expand the disk and its file system

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Storage & Snapshots** > **Block Storage**.
    
3.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
4.  Find the disk to which the application is attached based on the disk ID. Select the disk and click **Resize** at the bottom of the page.
    
    > For more information about how to expand a disk, see [Expand a disk (Linux)](/help/en/ecs/user-guide/resize-linux-cloud-disks).
    
5.  In the wizard that appears, follow the on-screen instructions to complete the expansion.
    
    -   On the **Determine Disk and Read Notes** page, confirm the disk information, read the notes, and then click **I Understand Risks and Have Backed Up Data, Proceed**.
        
    -   On the **Configure Resizing Method and New Size** page, set the expansion parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **New Disk Size**
        
        Set the capacity after expansion. The new capacity cannot be smaller than the current capacity.
        
        30 GiB
        
        **Resizing Method**
        
        Select **Online Resizing**. After the expansion, you do not need to restart the instance. The new capacity takes effect immediately.
        
        **Online Resizing**
        
    -   On the **Confirm Resizing Results** page, confirm that the disk capacity is expanded, and then click **Next Step: Expand Partitions and File Systems**.
        
        **Note**
        
        After you expand the disk capacity, you must also expand the file system. Otherwise, the storage space available to the container remains unchanged.
        
    -   On the **Extend Partitions and File Systems** page, click **Use Cloud Assistant**, select **Authorize Cloud Assistant to Perform This Operation**, and then click **Authorize**.
        
        After the operation is complete, confirm that both the disk capacity and the file system are expanded.
        
        ![云盘扩容](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1248899371/p912491.png)
        

## Offline expansion

Pause the application by setting the number of replicas to 0. After the disk is expanded, you can restart the application.

### **Step 1: View disk information and pause the application**

1.  Connect to the cluster. For more information, see [Obtain the kubeconfig file of a cluster and use kubectl to connect to the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-ubf-lhg-vdb) or [Use kubectl to connect to a Kubernetes cluster from Workbench or CloudShell](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-kubectl-on-cloud-shell-to-manage-ack-clusters-1690962464408).
    
2.  View information about the pod to which the disk is attached and confirm that the pod is in the Running state.
    
    ```
    kubectl get pod 
    ```
    
    Sample output:
    
    ```
    NAME          READY   STATUS    RESTARTS   AGE
    disk-test-0   1/1     Running   0          38s
    ```
    
3.  View the PVC to obtain the disk ID.
    
    ```
    kubectl get pvc
    ```
    
    The sample output shows that the PV bound to the PVC is `d-uf628m33r5rsbi******` (the disk ID) and the capacity is 20 GiB.
    
    ```
    NAME       STATUS   VOLUME                   CAPACITY   ACCESS MODES   STORAGECLASS   VOLUMEATTRIBUTESCLASS   AGE
    disk-pvc   Bound    d-uf628m33r5rsbi******   20Gi       RWO            disk           <unset>                 64s
    ```
    
4.  Scale the number of replicas for the application to 0 to pause the application.
    
    ```
    kubectl scale sts disk-test --replicas=0
    ```
    
    Expected output:
    
    ```
    statefulset.apps/disk-test scaled
    ```
    

### **Step 2: Expand the disk**

1.  Log on to the [ECS console](https://ecs.console.alibabacloud.com).
    
2.  In the left-side navigation pane, choose **Storage & Snapshots** > **Block Storage**.
    
3.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![地域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
4.  Find the disk to which the application is attached based on the disk ID. Select the disk and click **Resize** at the bottom of the page.
    
5.  In the wizard that appears, follow the on-screen instructions to complete the expansion.
    
    -   On the **Determine Disk and Read Notes** page, confirm the disk information, read the notes, and then click **I Understand Risks and Have Backed Up Data, Proceed**.
        
    -   On the **Configure Resizing Method and New Size** page, set the expansion parameters and click **OK**.
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **New Disk Size**
        
        Set the capacity after expansion. The new capacity cannot be smaller than the current capacity.
        
        30 GiB
        
        **Resizing Method**
        
        After the application is paused, the disk is in the **Unattached** state. You can select only **Offline Resizing**.
        
        **Offline Resizing**
        
    -   On the **Confirm Resizing Results** page, confirm that the disk capacity is expanded, and then click **Next Step: Extend Partitions and File Systems**.
        
    -   On the **Extend Partitions and File Systems** page, select **Use Documentation** and refer to the document in the **Extend the partitions and file systems of disks on a Linux instance** section.
        
        **Note**
        
        -   After you expand the disk capacity, you must also expand the file system. Otherwise, the storage space available to the container remains unchanged.
            
        -   Because the disk is in the **Unattached** state, you cannot use Cloud Assistant. You must manually expand the file system.
            
        

### **Step 3: Expand the file system**

The following operations apply to unpartitioned disks.

**Important**

We do not recommend that you use partitioned disks in Kubernetes.

-   If a PV uses an unpartitioned disk, do not manually partition the disk. This may damage the current file system and cause data loss.
    
-   If a PV uses a partitioned disk, you must expand the partition device before you expand the file system. For more information, see [Expand partitions and file systems (Linux)](/help/en/ecs/user-guide/extend-the-partitions-and-file-systems-of-disks-on-a-linux-instance#concept-rjc-l5h-ydb) or [Expand partitions and file systems (Windows)](/help/en/ecs/user-guide/extend-the-partitions-and-file-systems-of-a-disk-on-a-windows-instance#task-1920103).
    

1.  Attach the disk to an ECS instance.
    
    1.  On the **Block Storage** page of the [ECS console](https://ecs.console.alibabacloud.com), find the target disk and click **Attach** in the **Actions** column.
        
    2.  In the **Attach Cloud Disk** step, select the ECS instance to which you want to attach the disk and click **Next**.
        
        **Important**
        
        Do not select any release options for the disk.
        
    3.  In the **Partition Disk and Create and Mount File Systems** step, click **Configure Later** in the **Initialization Method** section.
        
    4.  Confirm that the status of the disk changes to **In Use**.
        
2.  Connect to the ECS instance. For more information, see [Overview of methods for connecting to an ECS instance](/help/en/ecs/user-guide/connect-to-instance#concept-tmr-pgx-wdb).
    
3.  Obtain the disk device name.
    
    The following command is a sample. Replace `<serial>` with the serial number of the disk.
    
    You can quickly find the disk serial number from the disk ID (Disk ID = d-{Disk serial number}). For more information, see [View the serial number of a block storage device](/help/en/ecs/user-guide/query-the-serial-number-of-a-disk).
    
    **Important**
    
    If the disk was created before June 10, 2020, the serial number feature is not supported. You cannot run the following command to obtain the disk device name. Instead, you can run the `ls /dev/vd*` command before and after you attach the disk and compare the output to identify the device name of the target disk.
    
    ```
    realpath /dev/disk/by-id/virtio-<serial>
    ```
    
    The sample output indicates that the disk device name is `/dev/vdb`.
    
    ```
    /dev/vdb
    ```
    
4.  Expand the file system.
    
    The following command is a sample. Replace the placeholder with the actual disk device name.
    
    ```
    resize2fs /dev/vdb
    ```
    
    If the following error message is returned, run the `e2fsck -f /dev/vdb` command as prompted, and then run the `resize2fs /dev/vdb` command to expand the file system.
    
    ```
    resize2fs 1.46.0 (29-Jan-2020)
    Please run 'e2fsck -f /dev/vdb' first.
    ```
    
    After you expand the file system, the following output is expected:
    
    ```
    resize2fs 1.46.0 (29-Jan-2020)
    Resizing the filesystem on /dev/vdb to 7864320 (4k) blocks.
    The filesystem on /dev/vdb is now 7864320 (4k) blocks long.
    ```
    
5.  Confirm that the file system is expanded.
    
    1.  Create a temporary folder named `/mnt/disk/` and mount the disk to the temporary folder.
        
        ```
        mkdir /mnt/disk
        mount /dev/vdb /mnt/disk/
        ```
        
    2.  Check the size of the file system.
        
        ```
        df /mnt/disk/
        ```
        
        The expected output shows that the capacity of `/dev/vdb` is expanded to 30 GiB.
        
        ```
        Filesystem     1K-blocks  Used Available Use% Mounted on
        /dev/vdb        30787536    24  30771128   1% /mnt/disk
        ```
        
    3.  Unmount the disk from the temporary folder.
        
        ```
        umount /mnt/disk
        ```
        
6.  Detach the disk from the ECS instance. For more information, see [Detach a data disk](/help/en/ecs/user-guide/detach-a-data-disk#section-5ra-43x-p7y).
    

### Step 4: Restart the application

1.  Scale the number of replicas for the application to 1 to restart the application.
    
    ```
    kubectl scale sts disk-test --replicas=1
    ```
    
    Expected output:
    
    ```
    statefulset.apps/disk-test scaled
    ```
    
2.  Check whether the pod is restored.
    
    ```
    kubectl get pod
    ```
    
    Expected output:
    
    ```
    NAME          READY   STATUS    RESTARTS   AGE
    disk-test-0   1/1     Running   0          5s
    ```
    
3.  Check the size of the file system.
    
    ```
    kubectl exec -it disk-test-0 -- df /data
    ```
    
    The expected output shows that the file system corresponding to the mount path is expanded.
    
    ```
    Filesystem     1K-blocks  Used Available Use% Mounted on
    /dev/vdb        30787536    24  30771128   1% /data
    ```
