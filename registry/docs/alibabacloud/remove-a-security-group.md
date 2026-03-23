When ECS instances in a security group no longer need to access an ApsaraDB for MongoDB instance, remove the security group to reduce the attack surface.

## Prerequisites

Before you begin, ensure that you have:

-   An ApsaraDB for MongoDB replica set instance or sharded cluster instance
    
-   At least one security group associated with the instance
    

**Important**

Removing a security group revokes network access for all ECS instances in that group. Before proceeding, confirm that no active workloads depend on the security group for connectivity.

## Procedure

1.  Go to the [Replica Set Instances](https://mongodb.console.alibabacloud.com/replicate/cn-hangzhou/instances) or [Sharded Cluster Instances](https://mongodb.console.alibabacloud.com/sharding/cn-hangzhou/instances) page. In the top navigation bar, select the region where your instance resides, then click the instance ID.
    
2.  In the left-side navigation pane, choose **Data Security** > **Whitelist Settings**.
    
3.  Remove security groups using one of the following methods:
    
    -   Remove specific security groups
        
        1.  In the upper-left corner of the security group list, click **Add Security Group**.
            
        2.  In the **Add Security Group** panel, clear the security groups you want to remove.
            
        3.  Click **OK**.
            
    -   Remove all security groups
        
        1.  In the upper-left corner of the security group list, click **Clear**.
            
        2.  In the **Clear Security Group** confirmation dialog, review the details and click **OK**.
            
    

## Result

After removing a security group, check the security group list under **Data Security** > **Whitelist Settings** to confirm the security group no longer appears. Verify that your applications still have the required network access through other whitelisted IP addresses or remaining security groups.
