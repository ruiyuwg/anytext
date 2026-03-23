If an Elastic Compute Service (ECS) instance and an ApsaraDB for MongoDB instance do not belong to the same Alibaba Cloud account, you can use the methods in this topic to connect the ECS instance to the ApsaraDB for MongoDB instance over an internal network.

## Method 1: Migrate the ApsaraDB for MongoDB instance to the Alibaba Cloud account to which the ECS instance belongs

This method uses the data migration feature of Data Transmission Service (DTS) to migrate the ApsaraDB for MongoDB database to the Alibaba Cloud account to which the ECS instance belongs. For more information about DTS, see [What is DTS?](/help/en/dts/product-overview/what-is-dts#concept-26592-zh)

### **Procedure**

1.  Create an ApsaraDB for MongoDB instance within the Alibaba Cloud account to which the ECS instance belongs. The ApsaraDB for MongoDB instance must reside in the same region, zone, and virtual private cloud (VPC) as the ECS instance. For more information, see [Create an instance](/help/en/mongodb/user-guide/create-an-instance/).
    
    **Note**
    
    -   When you create an ApsaraDB for MongoDB instance, select the same VPC as the ECS instance.
        
    -   If you have created such an ApsaraDB for MongoDB instance, skip this step.
        
    
2.  Migrate the ApsaraDB for MongoDB instance from the Alibaba Cloud account to which the instance belongs to the Alibaba Cloud account to which the ECS instance belongs. For more information, see [Migrate data between ApsaraDB for MongoDB instances of different Alibaba Cloud accounts](/help/en/mongodb/user-guide/migrate-data-between-apsaradb-for-mongodb-instances-of-different-alibaba-cloud-accounts#concept-rzc-lrl-qgb).
    
3.  Add the IP address of the ECS instance to all IP address whitelists of the ApsaraDB for MongoDB instance. For more information, see [Modify an IP address whitelist of an ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b).
    
    **Note**
    
    For more information about how to obtain the IP address of an ECS instance, see [View instance information](/help/en/ecs/user-guide/view-instance-information#concept-ump-jcd-xdb).
    

## Method 2: Migrate the ECS instance to the Alibaba Cloud account to which the ApsaraDB for MongoDB instance belongs

This method migrates the ECS instance to the Alibaba Cloud account to which the ApsaraDB for MongoDB instance belongs by sharing the ECS instance as a custom image.

### **Prerequisites**

An ECS instance within Alibaba Cloud account A and an ApsaraDB for MongoDB instance within Alibaba Cloud account B reside in the same region.

**Note**

If the ECS instance and the ApsaraDB for MongoDB instance do not reside in the same region, you can copy the custom image to the destination region and share the custom image, or share the custom image and copy the custom image across regions. For more information, see [Copy a custom image](/help/en/ecs/user-guide/copy-an-image#concept-a3m-5dm-xdb).

### **Procedure**

1.  Create a custom image from an ECS instance. For more information, see [Create a custom image from an instance](/help/en/ecs/user-guide/create-a-custom-image-from-an-instance#concept-ech-5bm-xdb).
    
2.  Share the created custom image to the Alibaba Cloud account to which the ApsaraDB for MongoDB instance belongs (Alibaba Cloud account B). For more information, see [Procedure](/help/en/ecs/user-guide/share-a-custom-image/#section-2o8-24w-t8e).
    
3.  Create an ECS instance from the created custom image. For more information, see [Create an ECS instance from a custom image](/help/en/ecs/user-guide/create-an-ecs-instance-by-using-a-custom-image#task-w5v-sgv-xdb).
    
    **Note**
    
    When you create the ECS instance, select the same VPC as the ApsaraDB for MongoDB instance.
    
4.  Add the IP address of the ECS instance to all IP address whitelists of the ApsaraDB for MongoDB instance. For more information, see [Modify an IP address whitelist of an ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b).
    
    **Note**
    
    For more information about how to obtain the IP address of an ECS instance, see [View instance information](/help/en/ecs/user-guide/view-instance-information#concept-ump-jcd-xdb).
    

## Method 3: Establish a connection between the ECS instance and the ApsaraDB for MongoDB instance by using CEN

This method uses Cloud Enterprise Network (CEN) to establish a connection between VPCs that belong to different Alibaba Cloud accounts to connect the ECS instance to the ApsaraDB for MongoDB instance. For more information about CEN, see [What is CEN?](/help/en/cen/user-guide/what-is-cen-1#concept-jjt-3lz-sdb)

**Note**

Make sure that the CIDR blocks of the involved VPCs or vSwitches do not conflict with each other.

### **Procedure**

1.  Switch the network type of the ApsaraDB for MongoDB instance to VPC. For more information, see [Switch the network type of an ApsaraDB for MongoDB instance from classic network to VPC](/help/en/mongodb/user-guide/switch-the-network-type-of-an-apsaradb-for-mongodb-instance-from-classic-network-to-vpc#concept-f3s-fys-2fb). If the network type of the instance is VPC, skip this step.
    
2.  Switch the network type of the ECS instance to VPC. For more information, see [Migrate ECS instances from a classic network to a VPC](/help/en/vpc/use-cases/migrate-ecs-instances-from-classic-network-to-vpc#task-1512598). If the network type of the instance is VPC, skip this step.
    
3.  Select one of the following CEN-based connections over an internal network based on the running environment. For more information, see the following topics:
    
    -   [Use CEN and Basic Edition transit routers to connect VPCs in the same region](/help/en/cen/use-basic-edition-transit-routers-to-connect-vpcs-in-the-same-region#task-2512294)
        
    -   [Use CEN and Basic Edition transit routers to connect VPCs in different regions and Alibaba Cloud accounts](/help/en/cen/use-basic-edition-transit-routers-to-connect-vpcs-across-regions#task-2293645)
        
4.  Add the IP address of the ECS instance to all IP address whitelists of the ApsaraDB for MongoDB instance. For more information, see [Modify an IP address whitelist of an ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b).
    
    **Note**
    
    For more information about how to obtain the IP address of an ECS instance, see [View instance information](/help/en/ecs/user-guide/view-instance-information#concept-ump-jcd-xdb).
