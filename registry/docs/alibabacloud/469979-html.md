As your business develops and application data grows, your disk space may become insufficient. To resolve this issue, you can expand your disk volume. This topic describes how to expand disk volumes in various scenarios.

## **Expansion methods**

To expand a disk volume, you need to resize the disk and extend the file system. Container Service for Kubernetes (ACK) provides the following expansion methods: online expansion or offline expansion.

-   **Online expansion**: resizes the disk and extends the file system without interrupting the business pod to which the disk volume is mounted. The disk volume remains mounted during the expansion.
    
-   **Offline expansion**: stop the application pod, unmount the disk volume, and then expand the volume. After the disk is resized and the file system is extended, the system restarts the application pod and remounts the disk volume.
    

**Note**

Compared with online expansion, offline expansion provides enhanced data consistency and reliability. In scenarios where service continuity is required or your service is not tolerant to interruptions, we recommend that you use online expansion.

We recommend that you select a suitable expansion method based on the actual Kubernetes version, disk type, and business scenario.

-   **Kubernetes 1.16 and later**
    
    If your cluster runs Kubernetes 1.16 or later, you can perform online disk volume expansion by updating the persistent volume claim (PVC) that is used to mount the disk volume. In this case, you do not need to manually resize the disk or extend the file system. For more information, see [Expand a disk volume without service interruptions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-disk-volume-without-service-interruptions#task-2483522).
    
    If you require automatic expansion, you can configure an auto expansion policy. You can specify a capacity utilization threshold for the disk volume. For more information, see [Configure a disk automatic expansion policy to achieve automatic expansion](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-expand-a-disk-volume#task-2088486).
    
-   **Kubernetes versions earlier than 1.16 (not recommended)**
    
    If your cluster runs a Kubernetes version earlier than 1.16, we recommend that you first [upgrade your cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/upgrade-clusters/).
    
    If the Kubernetes version of your cluster is earlier than 1.16, you cannot perform online disk volume expansion by updating the PVC that is used to mount the disk volume. In addition, if your disk volume does not meet the requirements for [online disk volume expansion](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/expand-a-disk-volume-without-service-interruptions), for example, the disk is a basic disk, you cannot perform online disk volume expansion by updating the PVC that is used to mount the disk volume. In this case, you need to manually resize the disk and extend the file system on the Elastic Compute Service (ECS) side. Online expansion and offline expansion are supported. For more information, see [Expand disk volumes (Kubernetes versions earlier than 1.16)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manually-expand-a-disk-volume).
    

## **Extend the disk capacity**

When you resize a disk, the new capacity must be greater than the existing capacity but cannot exceed the maximum capacity allowed for the disk. For more information about the capacity range supported by different disk categories, see [block storage](/help/en/ecs/user-guide/limitations#BlockStorageQuota).

## Expansion fees

When you resize a disk, you are charged for the incremental capacity based on the billing method of the disk.

Disks mounted to ACK clusters use the pay-as-you-go billing method. The new capacity takes effect immediately after the disk is resized, and the disk is billed on a pay-as-you-go basis based on the new capacity.

-   For more information about the billing rules of cloud disks, see [Block storage devices](/help/en/ecs/block-storage-devices).
    
-   For more information about the prices of disks, see [Prices of block storage devices](https://www.alibabacloud.com/product/ecs).
    

## **References**

If errors occur when you use disk volumes, refer to [FAQ about disk volumes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-disk-volumes).
