You can view the error logs of an instance in the ApsaraDB for MongoDB console.

## Prerequisites

The instance is a replica set instance or a sharded cluster instance.

**Important**

You can find standalone instances in the replica set instance list, but you cannot view the error logs of standalone instances.

## Usage notes

-   The retention period of error logs is seven days.
    
-   The log management feature is unavailable in some regions. You can log on to the ApsaraDB for MongoDB console to check whether the feature is supported in a specified region.
    

## Procedure

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Replica Set Instances** or **Sharded Cluster Instances**.
    
3.  In the upper-left corner of the page that appears, select the resource group and region to which the desired instance belongs.
    
4.  Click the ID of the instance that you want to manage or click **Manage** in the **Actions** column.
    
5.  In the left-side navigation pane of the instance details page, choose **Logs** > **Error Logs**.
    
6.  Perform operations to view error logs based on the instance architecture.
    
    -   Replica set instances
        
        Specify the node role and time range to view error logs.
        
    -   Sharded cluster instances
        
        View the error logs of a mongos or shard node.
        
        **Note**
        
        The ID of a mongos node is prefixed with `s-`. The ID of a shard node is prefixed with `d-`.
        
        -   View the error logs of a mongos node
            
            Specify the mongos node ID and time range to view error logs.
            
        -   View the error logs of a shard node
            
            Specify the shard node ID, node role, and time range to view error logs.
            
        
    
    **Note**
    
    Click **Export** to download the error logs to your local computer.
