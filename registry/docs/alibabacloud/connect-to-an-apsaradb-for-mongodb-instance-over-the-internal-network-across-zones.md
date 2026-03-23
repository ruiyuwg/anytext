Alibaba Cloud provides two types of internal networks: classic network and Virtual Private Cloud (VPC). An Elastic Compute Service (ECS) instance and an ApsaraDB for MongoDB instance that use the same classic network or are deployed in the same VPC can be interconnected across zones over the internal network.

An ECS instance can be connected to a new or an existing ApsaraDB for MongoDB instance across zones.

## Connect an ECS instance to a new ApsaraDB for MongoDB instance

-   If the network type of the ECS instance is VPC and you purchase an ApsaraDB for MongoDB instance in a different zone of the same region as the ECS instance, make sure that the two instances are in the same VPC. You must also create a vSwitch in the zone where the ApsaraDB for MongoDB instance is deployed. This way, the two instances can be interconnected over the internal network.
    
-   If the network type of the ECS instance is classic network and you purchase an ApsaraDB for MongoDB instance in a different zone of the same region as the ECS instance, make sure the two instances are in the classic network of the same region. This way, the two instances can be interconnected over the internal network.
    

## Connect an ECS instance to an existing ApsaraDB for MongoDB instance

The ECS instance and ApsaraDB for MongoDB instance must be in the same region.

-   If the network types of the ECS instance and ApsaraDB for MongoDB instance are the same, the two instances can be interconnected over the internal network.
    
    **Note**
    
    The network types of the two instances are both classic network or VPC. If the network types of the two instances are both VPC, they must be deployed in the same VPC.
    
-   If the two instances have different network types, you can change the network type of the ApsaraDB for MongoDB instance to the same type as that of the ECS instance before connection. For more information, see [Switch the network type of an ApsaraDB for MongoDB instance from classic network to VPC](/help/en/mongodb/user-guide/switch-the-network-type-of-an-apsaradb-for-mongodb-instance-from-classic-network-to-vpc#concept-f3s-fys-2fb).
    
    **Note**
    
    You cannot switch the network type of an ApsaraDB for MongoDB standalone instance.
