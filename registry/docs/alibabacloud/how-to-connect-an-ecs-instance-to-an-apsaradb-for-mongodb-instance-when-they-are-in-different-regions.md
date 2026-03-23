This topic describes how to connect an Elastic Compute Service (ECS) instance to an ApsaraDB for MongoDB instance in a different region over the internal network.

## **Prerequisites**

The ECS instance and ApsaraDB for MongoDB instance use the Virtual Private Cloud (VPC) network type.

If the two instances use different network types or are in the classic network, we recommend that you switch the network type of the ECS instance or ApsaraDB for MongoDB instance from classic network to VPC before you perform the operations described in this topic. You can use one of the following methods to switch the network type of the ECS instance or ApsaraDB for MongoDB instance from classic network to VPC:

-   [Migrate ECS instances from a classic network to a VPC](/help/en/vpc/use-cases/migrate-ecs-instances-from-classic-network-to-vpc)
    
-   [Switch the network type of an ApsaraDB for MongoDB instance from classic network to VPC](/help/en/mongodb/user-guide/switch-the-network-type-of-an-apsaradb-for-mongodb-instance-from-classic-network-to-vpc)
    

## Migrate the ApsaraDB for MongoDB instance to the region where the ECS instance is located

This method uses the data migration feature of Data Transmission Service (DTS) to migrate the ApsaraDB for MongoDB instance to the region where the ECS instance is located. For example, you can migrate an ApsaraDB for MongoDB instance from the China (Qingdao) region to the China (Hangzhou) region. For more information about DTS, see [What is DTS?](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)

1.  Create an ApsaraDB for MongoDB instance in the region where the ECS instance is located. For more information, see [Create a replica set instance](/help/en/mongodb/create-a-replica-set-instance-1#task-hwt-zlx-p2b). If you have already created an ApsaraDB for MongoDB instance, skip this step.
    
    **Note**
    
    When you create the ApsaraDB for MongoDB instance, select the same VPC as that of the ECS instance.
    
2.  Migrate MongoDB databases in the source region to the destination ApsaraDB for MongoDB instance. For more information, see [Migrate data between ApsaraDB for MongoDB instances across regions](/help/en/mongodb/user-guide/migrate-data-between-apsaradb-for-mongodb-instances-across-regions#concept-fly-23g-jhb).
    
3.  Add the private IP address of the ECS instance to a whitelist of the ApsaraDB for MongoDB instance. For more information, see [Modify an IP address whitelist of an ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b).
    
    **Note**
    
    For more information about how to obtain the IP address of an ECS instance, see [View instance information](/help/en/ecs/user-guide/view-instance-information#concept-ump-jcd-xdb).
    

## Migrate the ECS instance to the region where the ApsaraDB for MongoDB instance is located

You can use the custom image feature or the migration tool to migrate the ECS instance data to the region where the ApsaraDB for MongoDB instance is located. For example, you can migrate the ECS instance from the China (Qingdao) region to the China (Hangzhou) region.

-   Create a custom image from the ECS instance and then create an ECS instance in the region where the ApsaraDB for MongoDB instance is located from the custom image. (Recommended)
    
    1.  Create a custom image from the ECS instance. For more information, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance#concept-ech-5bm-xdb).
        
    2.  Copy the created custom image to the region where the ApsaraDB for MongoDB instance is located. For more information, see [Copy a custom image](/help/en/ecs/user-guide/copy-an-image#concept-a3m-5dm-xdb).
        
    3.  Create an ECS instance from the created custom image. For more information, see [Create an instance by using a custom image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image#task-w5v-sgv-xdb).
        
        **Note**
        
        When you create the ECS instance, select the same VPC as that of the ApsaraDB for MongoDB instance.
        
    4.  Add the private IP address of the ECS instance to a whitelist of the ApsaraDB for MongoDB instance. For more information, see [Modify an IP address whitelist of an ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b).
        
        **Note**
        
        For more information about how to obtain the IP address of an ECS instance, see [View instance information](/help/en/ecs/user-guide/view-instance-information#concept-ump-jcd-xdb).
        
-   Use the migration tool to migrate the ECS instance to the region where the ApsaraDB for MongoDB instance is located.
    
    1.  Migrate the ECS instance to the region where the ApsaraDB for MongoDB instance is located. For more information, see [Migrate servers between ECS instances](/help/en/smc/user-guide/migrate-servers-between-ecs-instances#task-2534321).
        
    2.  Add the private IP address of the ECS instance to a whitelist of the ApsaraDB for MongoDB instance. For more information, see [Modify an IP address whitelist of an ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b).
