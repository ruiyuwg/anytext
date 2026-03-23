After you enable the hybrid access mode for an ApsaraDB for MongoDB instance, you can change the retention period of the internal endpoints on the classic network for the instance before the endpoints expire.

## Prerequisites

The instance is in hybrid network access mode. For more information, see [Configure a hybrid access solution to switch the network type of an instance from classic network to VPC](/help/en/mongodb/user-guide/configure-a-hybrid-access-solution-to-switch-the-network-type-of-an-apsaradb-for-mongodb-instance-from-classic-network-to-vpc#concept-ysg-ngz-lgb).

## Procedure

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/instances) page. In the top navigation bar, select the region in which the instance resides and the resource group to which the instance belongs. Then, find the instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the instance details page, click **Database Connections**.
    
3.  In the **Retained Classic Network Endpoint** section, click **Modify Expiration Time**.
    
4.  In the **Modify Expiration Time** panel, specify the retention period of internal endpoints on the classic network of the instance.
    
    **Note**
    
    -   You can set the retention period to 14, 30, 60, or 120 days.
        
    -   You can also click **Release** to release the classic network.
        
    
5.  Click **OK**.
