ApsaraDB for MongoDB deploys the three nodes of a replica set instance across two or three zones in the same region. The nodes replicate data over an internal network, providing zone-disaster recovery for high reliability and availability.

## Prerequisites

-   An Alibaba Cloud account. For more information, see [Sign up with Alibaba Cloud](/help/en/account/sign-up-with-alibaba-cloud).
    
-   Dual-zone deployment is in private preview. To use this feature, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex).
    

## Network requirements

If your application runs on an Elastic Compute Service (ECS) instance, ensure the following for network connectivity between the ECS instance and the ApsaraDB for MongoDB instance. For details on viewing ECS instance properties, see [View instance information](/help/en/ecs/user-guide/view-instance-information#concept-ump-jcd-xdb).

**Requirement**

**Details**

Same region

Both instances must be deployed in the same region.

Same network type

Both instances must use the same network type.

Same virtual private cloud (VPC)

If the network type is **VPC**, both instances must belong to the same VPC.

**Note**

-   Deploy both instances in the same zone to reduce network latency.
    
-   VPC is recommended for higher security.
    
-   If your ECS instance uses **classic network**, you can migrate it to VPC. For more information, see [Migrate ECS instances from the classic network to a VPC](/help/en/ecs/user-guide/migrate-ecs-instances-from-the-classic-network-to-a-vpc).
    

## Dual-zone considerations

-   If the `{w: "majority"}` write concern is set on a replica set instance, write operations are not considered successful until a majority of nodes confirm them. In a disaster recovery scenario where a fault occurs in the zone that contains two nodes, data loss may occur due to replication lag between the primary node and the node in the other zone.
    
-   Dual-zone switchover supports manual and automatic modes. Specify the switchover mode on the instance details page. The default mode is manual switchover.
    

## Limits

-   Multi-zone replica set instances that use cloud disks are available only in specific regions. For supported regions, see the [Cloud disk-based instances (three-zone deployment)](/help/en/mongodb/user-guide/region-and-zone-restrictions#ffc44bf01eq62) and [Cloud disk-based instances (dual-zone deployment)](/help/en/mongodb/user-guide/region-and-zone-restrictions#ea754e2671hqc) sections in "Available regions and zones."
    
-   For instances that use local disks, select **Single-zone** and configure the **Zone** parameter to deploy across zones. Select a region with a combined zone format such as `Shenzhen Zones (C + D + E)`. For supported regions, see the [Local disk-based instances](/help/en/mongodb/user-guide/region-and-zone-restrictions#a2f9aff51bisf) section in "Available regions and zones."
    

## Node deployment policies

### Single zone

The primary, secondary, and hidden nodes are all deployed in the same zone.

![Single-zone deployment](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0772416371/CAEQMhiBgMCqpoeuoRkiIGZmNDI2MjYyYTYxZDRhNjM4Zjg1MzdhOTJhYjRhNTU34809717_20241205150243.196.svg)

### Dual-zone

The primary, secondary, and hidden nodes are deployed across two zones. If a zone becomes unavailable due to power outages or network failures, the system restores instance availability based on the switchover mode:

-   **Manual switchover**: The high availability (HA) system does not automatically switch over. It starts a dual-zone instance to restore availability. You must manually confirm that switchover occurs only after you accept potential data loss.
    
-   **Automatic switchover**: The HA system automatically starts the remaining nodes as a single node to restore availability. Data loss may occur due to replication lag.
    

![Dual-zone deployment](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0772416371/CAEQMhiBgIC2qYeuoRkiIDc0MGZiZmU1MjNiZTQ3YmI5ZWI4OWEzOTVhZDVlOWEz4809717_20241205150243.196.svg)

### Three-zone

The primary, secondary, and hidden nodes are deployed across three zones. If a zone becomes unavailable due to power outages or network failures, the HA system automatically switches services to another zone.

![Three-zone deployment](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0772416371/CAEQMhiBgMCKqoeuoRkiIGRiNmRlMTJkMTNhZDQ1MWRhYzU0NmM2YjQxZmIwYzhm4809717_20241205150243.196.svg)

## Procedure

For instructions on creating a multi-zone replica set instance, see [Create a replica set instance](/help/en/mongodb/user-guide/create-a-replica-set-instance).

## Related information

Use the service availability feature to view how nodes are deployed across zones. You can switch node roles based on your business deployment so applications connect to the nearest nodes. For more information, see [Switch node roles](/help/en/mongodb/user-guide/switch-node-roles#concept-943865).
