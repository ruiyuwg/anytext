Cloud disks provided by Alibaba Cloud provide persistent storage for Elastic Compute Service (ECS) instances. A cloud disk can be attached to an ECS instance as the system disk or a data disk. Cloud disks are essential for running ECS instances.

## **System disk**

A system disk is used to store operating system-related data. You can create a system disk only when you create an instance. The system disk contains images used to start the instance. Each instance has a separate and unique system disk. The system disk of one instance cannot be used as the system disk of another instance. For information about how to create and use a system disk, see [Create and use a system disk](/help/en/ecs/user-guide/create-and-use-a-system-disk).

## **Data disk**

A data disk is used to store application-related data. You can create a data disk together with an instance or create and attach a data disk to an instance after the instance is started. The maximum number of data disks that can be attached to an instance varies based on the instance type. For more information, see [Instance families available for purchase](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb). For more information about how to create and use a data disk, see [Create and use a data disk](/help/en/ecs/user-guide/create-and-use-a-data-disk).

## **Common operations on system disks and data disks**

**Lifecycle**

**System disk**

**Data disk**

Creation phase

Separately create a cloud disk.

Not supported.

**Note**

The system disk can be created only when you create an instance. After the system disk is created, the disk is automatically attached to the instance and initialized. No additional operations are required.

Supported.

Attach a cloud disk to an ECS instance.

You do not need to manually attach a system disk to an ECS instance.

You must attach a data disk to an ECS instance.

Initialize a cloud disk.

You do not need to manually initialize a system disk.

You must initialize a data disk.

O&M phase

Replace the operating system of an ECS instance.

Supported.

Not supported.

**Note**

The system disk contains the images used to start the instance to which the system disk is attached. A data disk does not involve the replacement of the operating system.

Others

Supported.

Supported.

Release phase

Separately release a cloud disk.

Not supported.

**Note**

The system disk can be released when the instance to which the system disk is attached is released. The system disk cannot be separately released. The Release Disk with Instance feature can be disabled for the system and data disks. In this case, after an instance is released, the system disk is retained as a data disk.

Supported.

## **Related operations**

For information about disk categories, see [Overview of Block Storage](/help/en/ecs/user-guide/elastic-block-storage-devices).

To query the maximum number of cloud disks that can be attached to an instance of an instance type, call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes#doc-api-Ecs-DescribeInstanceTypes) operation.
