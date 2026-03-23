You can create and attach a cloud disk as a data disk to an Elastic Compute Service (ECS) instance in the same zone. This topic describes how to create a data disk.

## **Considerations**

-   Except for Regional Enterprise SSDs (ESSDs), all data disks that you create can be attached only to ECS instances that reside in the same zones as the data disks.
    
-   The system disks that are created together with ECS instances and the data disks that are created together with Windows ECS instances are automatically initialized upon creation. You can use the disks without the need to perform additional operations.
    
-   You cannot merge cloud disks after you create them. Block storage devices are independent of each other. You cannot merge the storage space of multiple block storage devices by formatting the devices. Before you create block storage devices, we recommend that you determine the required number and capacity of block storage devices based on your business requirements.
    

## **Methods for creating data disks**

You can create data disks separately or together with ECS instances. After you create a data disk, you may need to attach the disk to an ECS instance and initialize the disk. The following table describes the methods for creating data disks.

Method

References

Create a subscription or pay-as-you-go data disk. Then, attach the disk to an ECS instance to use the disk.

[Create an empty data disk](/help/en/ecs/user-guide/create-a-disk)

Create a data disk from a snapshot. The data disk contains the same data as the snapshot.

[Create a data disk from a snapshot](/help/en/ecs/user-guide/create-a-disk-from-a-snapshot)

## References

You can call the CreateDisk operation to create a data disk. For more information, see [CreateDisk](/help/en/ecs/api-createdisk#doc-api-Ecs-CreateDisk).
