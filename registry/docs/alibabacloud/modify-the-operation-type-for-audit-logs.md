The audit log feature of ApsaraDB for MongoDB supports multiple types of audit operations. You can select the operation types that you want to audit based on your business requirements. The audit logs of the operation types that are not selected are not uploaded to save costs.

## Prerequisites

The audit log feature is enabled. For more information, see [Enable the audit log feature](/help/en/mongodb/user-guide/enable-the-audit-log-feature-1#task-2488775).

## Impacts

If you disable the audit log feature for specific operation types, ApsaraDB for MongoDB ignores the operations of these types during auditing. However, the audit logs that are generated for the operation types before the feature is disabled are retained. You can still query the logs to backtrack issues related to the corresponding feature. For more information, see [View audit logs](/help/en/mongodb/user-guide/view-audit-logs-1#task-2491602).

## Procedure

1.  Log on to the [ApsaraDB for MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Replica Set Instances** or **Sharded Cluster Instances**.
    
3.  In the upper-left corner of the page that appears, select the resource group and region to which the desired instance belongs.
    
4.  Click the ID of the instance or click **Manage** in the **Actions** column.
    
5.  In the left-side navigation pane of the instance details page, choose **Data Security** > **Audit Logs**.
    
6.  In the upper-right corner of the page that appears, click **Audit Log Filter Setting**.
    
7.  In the **Audit Log Filter Setting** panel, select the operation types that you want to audit.
    
    ## Sharded cluster instances
    
    -   db: records only the requests routed to the current node. It is suitable for scenarios such as analyzing slow queries and viewing business loads. The following table describes the supported operation types.
        
        **Operation type**
        
        **Description**
        
        admin
        
        The O&M operations.
        
        slow
        
        The slow query operations.
        
        query
        
        The query operations.
        
        insert
        
        The insert operations.
        
        update
        
        The update operations.
        
        delete
        
        The delete operations.
        
        command
        
        The protocol commands, such as the aggregation method.
        
    -   mongos: records requests sent to mongos nodes. The requests may eventually be executed on any database. It is suitable for scenarios such as traffic statistics collection and audit operations. The following table describes the supported operation types.
        
        **Operation type**
        
        **Description**
        
        admin
        
        The O&M operations.
        
        slow
        
        The slow query operations.
        
        insert
        
        The insert operations.
        
        update
        
        The update operations.
        
        delete
        
        The delete operations.
        
    
    ## Replica set instances
    
    The following table describes the supported operation types.
    
    **Operation type**
    
    **Description**
    
    admin
    
    The O&M operations.
    
    slow
    
    The slow query operations.
    
    query
    
    The query operations.
    
    insert
    
    The insert operations.
    
    update
    
    The update operations.
    
    delete
    
    The delete operations.
    
    command
    
    The protocol commands, such as the aggregation method.
    
8.  Click **Submit**.
    

## Related API operations

**Operation**

**Description**

[ModifyAuditLogFilter](/help/en/mongodb/api-modifyauditlogfilter#doc-api-Dds-ModifyAuditLogFilter)

Modifies the operation types for which the audit log feature is enabled on an ApsaraDB for MongoDB instance.

[DescribeAuditLogFilter](/help/en/mongodb/api-describeauditlogfilter#doc-api-Dds-DescribeAuditLogFilter)

Queries the operation types for which the audit log feature is enabled on an ApsaraDB for MongoDB instance.
