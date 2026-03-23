This topic describes how to create a multi-zone sharded cluster instance. ApsaraDB for MongoDB provides a zone-disaster recovery solution to ensure the high reliability and availability of your sharded cluster instance. The solution deploys the nodes of a sharded cluster instance across two or three zones in the same region. These nodes exchange data with each other over an internal network.

## **Prerequisites**

-   An Alibaba Cloud account is created. For more information, see [Sign up with Alibaba Cloud](/help/en/account/sign-up-with-alibaba-cloud).
    
-   The dual-zone deployment feature is still in invitational preview. To use the feature, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex).
    

## Usage notes

### Three zones

If your application is deployed on an Elastic Compute Service (ECS) instance, make sure that your ApsaraDB for MongoDB instance and the ECS instance meet the following requirements to ensure network connectivity. For more information about how to view the information about ECS instances, see [View instance information](/help/en/ecs/user-guide/view-instance-information#concept-ump-jcd-xdb).

-   Your ApsaraDB for MongoDB instance and ECS instance are deployed in the same region.
    
-   Your ApsaraDB for MongoDB instance and ECS instance use the same network type.
    
    **Note**
    
    -   The same zone is recommended because the same zone reduces network latency.
        
    -   VPC is recommended because VPC provides higher security.
        
    -   If the network type is **VPC**, you must ensure that they use the same VPC ID.
        
    -   If you want to use the VPC network type, but the network type of the ECS instance is **classic network**, you can change the network type of the ECS instance to VPC. For more information, see [Migrate ECS instances from the classic network to a VPC](/help/en/ecs/user-guide/migrate-ecs-instances-from-the-classic-network-to-a-vpc#task-2009036).
        
    

### Double zones

-   If your application is deployed on an ECS instance, make sure that your ApsaraDB for MongoDB instance and the ECS instance meet the following requirements to ensure network connectivity. For more information about how to view the information about ECS instances, see [View instance information](/help/en/ecs/user-guide/view-instance-information#concept-ump-jcd-xdb).
    
    -   Your ApsaraDB for MongoDB instance and ECS instance are deployed in the same region.
        
    -   Your ApsaraDB for MongoDB instance and ECS instance use the same network type.
        
        **Note**
        
        -   The same zone is recommended because the same zone reduces network latency.
            
        -   VPC is recommended because VPC provides higher security.
            
        -   If the network type is **VPC**, you must ensure that they use the same VPC ID.
            
        -   If you want to use the VPC network type, but the network type of the ECS instance is **classic network**, you can change the network type of the ECS instance to VPC. For more information, see [Migrate ECS instances from the classic network to a VPC](/help/en/ecs/user-guide/migrate-ecs-instances-from-the-classic-network-to-a-vpc#task-2009036).
            
        
-   If the write security of an ApsaraDB for MongoDB replica set instance is set to `WriteConcer=majority`, write operations will not be considered successful until the operations have been confirmed to route a majority of nodes in the instance. Therefore, in a disaster recovery scenario where a fault occurs in a zone with two nodes deployed, data loss may occur within the window of synchronization latency between the primary node in one of the two zones and a node deployed in another zone.
    
-   Double-zone switchover is in manual or automatic mode. You can log on to the instance details page of an instance to specify the double-zone switchover mode. By default, the manual switchover mode is used.
    

## Limits

-   You can deploy multi-zone sharded cluster instances that use cloud disks only in specific regions. For more information about supported regions, see the [Cloud disk-based instances (three-zone deployment)](/help/en/mongodb/user-guide/region-and-zone-restrictions#3020aaf01ekpp) and [Cloud disk-based instances (double-zone deployment)](/help/en/mongodb/user-guide/region-and-zone-restrictions#eb283aa30cvxw) sections of the "Available regions and zones" topic.
    
-   You can select only Single-zone for ApsaraDB for MongoDB instances that use local disks. However, you can configure the Zone parameter to deploy replica set instances across zones. To deploy the instances across zones, you must select a region that includes a combination of multiple zones in the following format: Region Zones (1 + 2 + 3). Example: Shenzhen Zones (C + D + E). For more information about the supported regions, see the [Local disk-based instances](/help/en/mongodb/user-guide/region-and-zone-restrictions#a5c645911eg47) section of the "Available regions and zones" topic.
    

## Node deployment policies

**Zone**

**Deployment policy**

Single zone

The mongos, shard, and ConfigServer nodes of a sharded cluster instance are deployed in the same zone.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8872416371/CAEQMhiBgIDBoaqZoRkiIGNmMDVkMzU4ODkwYjQwNmNiZWZiNjZiOWViZTg2NzBh4821361_20241212103201.116.svg)

Double zones

The mongos, shard, and ConfigServer nodes of a sharded cluster instance are deployed across two zones.

-   Mongos component: All mongos components are evenly deployed across all data centers. A mongos component contains only one node. A sharded cluster instance contains at least two mongos nodes that are deployed across two zones. Subsequent nodes to be added are evenly deployed across the two zones.
    
-   Shard component: The primary, secondary, and hidden nodes of a shard component are deployed across two zones. Node zones may change due to a manual primary/secondary switchover or automatic high-availability (HA) switchover.
    
-   ConfigServer component: The primary, secondary, and hidden nodes of a ConfigServer component are deployed across two zones. Node zones may change due to a manual primary/secondary switchover or automatic HA switchover.
    

If one of the zones becomes unavailable due to force majeure factors such as a power or network failure, the system performs the required operations to ensure the instance availability based on the double-zone switchover solution that you specify. The following modes are available for troubleshooting the zone faults:

-   Manual switchover: If a zone is unavailable, the high-availability (HA) system does not automatically switch over the zone and starts a dual-zone instance to restore the instance availability. In this case, you can use the manual confirmation process provided by ApsaraDB for MongoDB to confirm that automatic switchover occurs only after you accept data loss.
    
-   Automatic switchover: If a zone is unavailable, the HA system automatically starts the remaining nodes as a single node to restore the instance availability. During this process, data loss may occur within a synchronization latency window.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8872416371/CAEQMhiBgIC1o6qZoRkiIGQ1MmJjNzA2ODQxZjQ5OTRhMjc0MmVhMjFkNWFiZDg04821361_20241212103201.116.svg)

Multiple zones

The mongos, shard, and ConfigServer nodes of a sharded cluster instance are deployed across three zones.

-   Mongos component: All mongos components are evenly deployed across all data centers. A sharded cluster instance contains at least two mongos components that are deployed across two zones. By default, when you add a third mongos node, the node is deployed in the third zone. Subsequent nodes to be added are deployed across the three zones in turn.
    
-   Shard component: The primary, secondary, and hidden nodes of a shard component are not deployed across the three zones in sequence. Node zones may change due to a manual primary/secondary switchover or automatic HA switchover.
    
-   ConfigServer component: The primary, secondary, and hidden nodes of a ConfigServer component are deployed across the three zones.
    

If one of the zones becomes unavailable due to force majeure factors such as a power or network failure, the HA system automatically switches services over to another zone.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8872416371/CAEQMhiBgIC2pKqZoRkiIDEyOGY3NTg4NDA4ZTRiMjE4MTZiNTY0ZGI0NTBhNmIw4821361_20241212103201.116.svg)

## Procedure

For more information about how to create a multi-zone sharded cluster instance, see [Create a sharded cluster instance](/help/en/mongodb/user-guide/create-a-sharded-cluster-instance).

## References

You can use the service availability feature to view the deployment of nodes in a multi-zone sharded cluster instance across zones. You can also switch the node roles of the instance based on your business deployment. This way, your applications can connect to the nearest nodes. For more information, see [Switch node roles](/help/en/mongodb/user-guide/switch-node-roles#concept-943865).
