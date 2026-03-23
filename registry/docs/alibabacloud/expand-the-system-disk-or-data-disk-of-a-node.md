If the system disk usage or data disk usage of a node is high or the system disk specification of a node does not meet your business requirements, you can resize the system disk or data disk to ensure the stability of the node. We recommend that you resize system disks online, which does not require you to restart the nodes. This allows you to resize system disks without interrupting your businesses in the cluster.

## **Before you begin**

Before you resize system disks or data disks, read the [Overview](/help/en/ecs/user-guide/overview-19) topic to learn about the following information:

-   The procedure for resizing a system disk or data disk includes partition extension and file system extension.
    
-   The maximum capacity to which a system disk or data disk can be resized is limited. You are charged for resizing a system disk or data disk.
    

> If you use ContainerOS as the operating system, read the [Resize the system disk of a ContainerOS node online](/help/en/ack/how-to-expand-a-system-disk-for-containeros) topic to resize the system disk.

## **Resize a system disk**

### **Step 1: Check the disk capacity and disk partitions on the node**

Before you resize the system disk of a node, log on to the node and check the capacity of the disk and the partitions on the disk.

1.  Log on to the node. For more information, see [Use Workbench to connect to a Linux instance over SSH](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key#task-2367667).
    
2.  Run the following command to query the space to which the current container process is attached:
    
    ```
    df -hl
    ```
    
3.  Run the following command to query the disk partitions on the node:
    
    ```
    sudo fdisk -lu
    ```
    
    Expected output:
    
    ```
    Disk /dev/vda: 20 GiB, 21474836480 bytes, 41943040 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: gpt
    Disk identifier: FD47CD2F-8911-47B3-94A7-76CAE693CF78
    
    Device      Start      End  Sectors  Size Type
    /dev/vda1    2048     6143     4096    2M BIOS boot
    /dev/vda2    6144   415743   409600  200M EFI System
    /dev/vda3  415744 41940991 41525248 19.8G Linux filesystem
    ```
    
    The output shows that the node has one disk partition `/dev/vda3`.
    

### **Step 2: Extend the capacity of the disk**

Refer to [Resize a disk to extend the disk capacity](/help/en/ecs/user-guide/step-1-resize-a-disk-to-extend-its-capacity) for usage notes. Then, log on to the [ECS console](https://ecs.console.alibabacloud.com) and configure a expanded system disk capacity. We recommend that you use online resizing, which takes effect immediately without instance reboot.

### **Step 3: Resize the disk and verify the resizing**

In this example, the `/dev/vda3` partition queried in [Step 1](#9f0232ecfenfq) is used. For more information about how to extend partitions and file systems and the relevant usage notes, see [Extend the partitions and file systems of disks on a Linux instance](/help/en/ecs/user-guide/extend-the-partitions-and-file-systems-of-disks-on-a-linux-instance).

1.  Run the following command on the node to extend the partition:
    
    ```
    sudo LC_ALL=en_US.UTF-8 growpart /dev/vda 3
    ```
    
2.  Run the following command on the node to extend the file system:
    
    ```
    sudo resize2fs /dev/vda3 
    ```
    
3.  Run the following command to check whether the disk is resized:
    
    ```
    df -hl
    ```
    
    Expected output:
    
    ```
    Filesystem      Size  Used Avail Use% Mounted on
    devtmpfs        3.7G     0  3.7G   0% /dev
    tmpfs           3.7G     0  3.7G   0% /dev/shm
    tmpfs           3.7G   20M  3.7G   1% /run
    tmpfs           3.7G     0  3.7G   0% /sys/fs/cgroup
    /dev/vda3       197G  4.5G  184G   3% /
    ...
    ```
    
    The output shows that the new capacity of the file system of the `/dev/vda3` partition is close to 200 GiB, which indicates that the disk is successfully resized.
    
4.  Run the following command to restart the kubelet on the node:
    
    ```
    systemctl restart kubelet
    ```
    
    **Important**
    
    Restarting the kubelet on a node may affect the node and the workloads on the node. We recommend that you restart the kubelet during off-peak hours.
    
5.  Run the following command to check whether the capacity of ephemeral storage on the node is extended. Replace `cn-qingdao.192.XX.XX.88` with the actual node name.
    
    ```
    kubectl get node cn-qingdao.192.XX.XX.88 -o yaml |grep ephemeral-storage
    ```
    
    Check whether the value of `ephemeral-storage` in the output is close to 200 GiB.
    

## Resize a data disk

### **Step 1: Check the disk capacity and disk partitions on a node**

Before you resize the data disk of a node, log on to the node and check the capacity of the disk and the partitions on the disk.

1.  Log on to the node. For more information, see [Use Workbench to connect to a Linux instance over SSH](/help/en/ecs/user-guide/connect-to-a-linux-instance-by-using-a-password-or-key#task-2367667).
    
2.  Run the following command to query the disk partitions on the node:
    
    ```
     sudo fdisk -lu
    ```
    
    Expected output:
    
    ```
    Disk /dev/vda: 20 GiB, 21474836480 bytes, 41943040 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    Disklabel type: gpt
    Disk identifier: FD47CD2F-8911-47B3-94A7-76CAE693CF78
    
    Device      Start      End  Sectors  Size Type
    /dev/vda1    2048     6143     4096    2M BIOS boot
    /dev/vda2    6144   415743   409600  200M EFI System
    /dev/vda3  415744 41940991 41525248 19.8G Linux filesystem
    
    
    Disk /dev/vdb: 45 GiB, 48318382080 bytes, 94371840 sectors
    Units: sectors of 1 * 512 = 512 bytes
    Sector size (logical/physical): 512 bytes / 512 bytes
    I/O size (minimum/optimal): 512 bytes / 512 bytes
    ```
    
    The output shows that the disk has one disk partition `/dev/vdb`.
    

### **Step 2: Extend the capacity of the disk**

Refer to [Step 1: Resize a disk to extend the disk capacity](/help/en/ecs/user-guide/step-1-resize-a-disk-to-extend-its-capacity) to learn about the usage notes. Then, log on to the [ECS console](https://ecs.console.alibabacloud.com) to specify a new capacity, such as 50 GiB. We recommend that you use the online resizing method, which does not require you to restart the node for the resize operation to take effect.

### **Step 3: Resize the disk and verify the resizing**

1.  Run the following command on the node to extend the file system:
    
    ```
    sudo resize2fs /dev/vdb
    ```
    
2.  Run the following command to restart the kubelet on the node:
    
    ```
    systemctl restart kubelet
    ```
    
    **Important**
    
    Restarting the kubelet on a node may affect the node and the workloads on the node. We recommend that you restart the kubelet during off-peak hours.
    
3.  Run the following command to check whether the disk is resized:
    
    ```
    df -hl
    ```
    
    Expected output:
    
    ```
    Filesystem     Type      Size  Used Avail Use% Mounted on
    devtmpfs       devtmpfs  3.7G     0  3.7G   0% /dev
    tmpfs          tmpfs     3.7G     0  3.7G   0% /dev/shm
    tmpfs          tmpfs     3.7G   20M  3.7G   1% /run
    tmpfs          tmpfs     3.7G     0  3.7G   0% /sys/fs/cgroup
    /dev/vda3      ext4      197G  4.5G  184G   3% /
    /dev/vda2      vfat      200M  5.8M  195M   3% /boot/efi
    /dev/vdb       ext4       49G  2.7G   44G   6% /var/lib/container
    ...
    ```
    
    The output shows that the new capacity of the file system on the `vdb` partition is close to 50 GiB, which indicates that the disk is successfully resized.
