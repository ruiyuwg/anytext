If an Elastic Compute Service (ECS) instance is deployed in a classic network and an ApsaraDB for MongoDB instance is deployed in a virtual private cloud (VPC), or if the ApsaraDB for MongoDB instance is deployed in a classic network and the ECS instance is deployed in a VPC, you can use the methods described in this topic to connect the ECS instance to the ApsaraDB for MongoDB instance.

## Prerequisites

-   The ECS instance and the ApsaraDB for MongoDB instance belong to the same Alibaba Cloud account and are deployed in the same region.
    
-   The IP address of the ECS instance is added to all IP address whitelists of the ApsaraDB for MongoDB instance. For more information, see [Modify an IP address whitelist of an ApsaraDB for MongoDB instance](/help/en/mongodb/user-guide/configure-a-whitelist-for-an-apsaradb-for-mongodb-instance-1#concept-xpy-wcx-w2b).
    
    **Note**
    
    For more information about how to obtain the IP address of an ECS instance, see [View instance information](/help/en/ecs/user-guide/view-instance-information#concept-ump-jcd-xdb).
    

## Connection methods

**ECS instance network type**

**ApsaraDB for MongoDB instance network type**

**Connection method**

Classic network

VPC

-   Migrate the ECS instance to the VPC to which the ApsaraDB for MongoDB instance belongs. For more information, see [Migrate an ECS instance from a classic network to a VPC](/help/en/vpc/use-cases/migrate-ecs-instances-from-classic-network-to-vpc).
    
-   Use ClassicLink to enable communication. For more information, see [Use ClassicLink to connect a classic network to a VPC](/help/en/vpc/using-classiclink).
    
    **Note**
    
    -   Before you establish a ClassicLink-based interconnection, make sure that you are familiar with the limits of the ClassicLink feature. For more information, see [Overview](/help/en/vpc/overview-2#concept-q5z-kwb-sdb).
        
    -   The ClassicLink-based interconnection is a temporary solution in specific conditions. To achieve high-speed connection in the production environment, we recommend that you deploy the ECS instance and the ApsaraDB for MongoDB instance in the same VPC.
        
    

VPC

Classic network

**Note**

You cannot deploy ApsaraDB for MongoDB replica set and sharded cluster instances that are purchased on and after February 21, 2022 in classic networks. You can deploy the instances only in VPCs. For more information, see [\[Notice\] Classic network unavailability for new ApsaraDB for MongoDB instances](/help/en/mongodb/product-overview/notice-new-apsaradb-for-mongodb-instances-no-longer-support-classic-networks#concept-2186680).

Migrate the ApsaraDB for MongoDB instance to the VPC to which the ECS instance belongs. For more information, see [Switch the network type of an ApsaraDB for MongoDB instance from classic network to VPC](/help/en/mongodb/user-guide/switch-the-network-type-of-an-apsaradb-for-mongodb-instance-from-classic-network-to-vpc#section-tp1-1sl-2fb).

**Note**

-   You cannot change the network type of standalone instances.
    
-   A transient disconnection occurs when you switch the network type of the ApsaraDB for MongoDB instance. To prevent negative impacts on your business, we recommend that you perform this operation during off-peak hours or make sure that your application can automatically reconnect to the ApsaraDB for MongoDB instance.
