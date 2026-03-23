You can use the Event Center in ApsaraDB for MongoDB to view completed scheduled events, such as instance migrations and minor version upgrades.

## Procedure

1.  Log on to the [MongoDB console](https://mongodb.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Event Center**.
    
3.  In the upper-left corner of the page, select the resource group and region where the instance is located.
    
4.  On the **Event Center** page, click an event type tab to view alert information and details for each historical event, such as the database type, running status, start time, scheduled switchover time, and latest operation time.
    
    **Note**
    
    ApsaraDB for MongoDB supports historical events such as instance migrations and minor version upgrades. For more information about the impacts of these events, see [Causes and impacts of events](/help/en/mongodb/user-guide/view-and-manage-scheduled-events#section-ghg-9p3-tr1).
    

## Related API operations

**API operation**

**Description**

[DescribeActiveOperationTaskType](/help/en/mongodb/api-describeactiveoperationtasktype#doc-api-Dds-DescribeActiveOperationTaskType)

Queries the types of O&M tasks and the number of tasks of each type for an ApsaraDB for MongoDB instance.
