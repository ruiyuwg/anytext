You can view the operational logs of an instance in the ApsaraDB for MongoDB console to check its running status.

## Prerequisites

The instance must be a replica set instance or a sharded cluster instance.

**Important**

Standalone instances are listed under replica set instances. However, you cannot view operational logs for standalone instances.

## Usage notes

-   You can view operational logs from the last seven days.
    
-   The log management feature is unavailable in some regions. You can log on to the ApsaraDB for MongoDB console to check whether the feature is supported in a specific region.
    

## Procedure

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Replica Set Instances** or **Sharded Cluster Instances**, depending on the instance type.
    
3.  In the upper-left corner of the page, select the resource group and region where the instance is located.
    
4.  Click the instance ID, or click **Manage** in the **Actions** column for the instance.
    
5.  On the instance details page, in the navigation pane on the left, click **Logs** > **Running Logs**.
    
6.  The next steps vary depending on the instance type.
    
    -   Replica set instance
        
        Select a node role and a time range to query the operational logs.
        
    -   Sharded cluster instance
        
        Query the operational logs of a Mongos or shard node.
        
        **Note**
        
        The ID of a Mongos node is prefixed with `s-`, and the ID of a shard node is prefixed with `d-`.
        
        -   Query the operational logs of a Mongos node
            
            Select a Mongos node ID and a time range.
            
        -   Query the operational logs of a shard node
            
            Select a shard node ID, a node role, and a time range.
            
        
    
    **Note**
    
    Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0752205571/p995146.png) icon in the upper-right corner to download the currently displayed operation logs.
