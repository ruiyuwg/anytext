Cloud Config records each configuration change and relationship change of the resources that it monitors in detail, and displays the changes over time in a configuration change history. After you activate Cloud Config, Cloud Config starts to record your resource configuration changes and resource relationship changes. By default, Cloud Config keeps the data for 10 years.

## Background information

The configuration change history of a resource indicates the configuration change history and relationship change history of the resource. The following table describes the elements included in the configuration change history.

**Element**

**Description**

Points on a configuration change history

-   Start point: If a resource is created before you activate Cloud Config, the start point of the configuration change history is the time when you activate Cloud Config. If a resource is created after you activate Cloud Config, the start point of the configuration change history is the time when the resource is created.
    
-   Node: Cloud Config checks the configuration and relationship of a resource at intervals of 10 minutes. If the new configuration or relationship is different from that detected 10 minutes ago, Cloud Config generates a record. This record is displayed as a node on the configuration change history.
    
-   Breakpoint: If you remove a resource type from the monitoring scope of Cloud Config, Cloud Config stops monitoring this type of resource and does not update the configuration change history of each resource of this type.
    

Information of a node on a configuration change history

Each node on a configuration change history records a configuration change or a relationship change of the relevant resource. The node may contain one of the following groups of information:

-   Resource configuration change: the basic information, detailed change in the core configuration, associated resources, and corresponding ActionTrail events of the resource.
    
-   Resource relationship change: the basic information, detailed change in the relationship, associated resources, and corresponding ActionTrail events of the resource.
    

**Note**

Cloud Config detects configuration and relationship changes at regular intervals of 10 minutes. If you change the configuration or relationship of a resource and then restore the resource to the previous configuration or relationship within the same 10-minute interval, Cloud Config cannot identify the change or display the change on the configuration change history.

## Procedure

1.  Log on to the [Cloud Config console](https://confignew.console.alibabacloud.com).
    
2.  Optional. In the upper-left corner, select an account group.
    
    This operation is required only if you are using a management account of a resource directory. Otherwise, you do not need to perform the operation.
    
3.  In the left-side navigation pane, choose **Resources** > **Global Resources**.
    
4.  On the **Global Resources** page, enter a resource ID or configure filter conditions to search for a specific resource.
    
    -   You can enter a resource ID to search for the specified resource.
        
    -   Filter: You can query the resource by resource type, region, or resource status.
        
5.  Click the ID of the resource.
    
6.  Click the **Configuration change history** tab to view the configuration and relationship changes of the resource.
    
    -   Resource configuration change
        
        -   In the **Basic Info After Change** section, you can view the ID, name, type, and tags of the resource, the time when the resource was created, and the region and zone in which the resource resides.
            
        -   In the **Resource Change Diff Details** section, you can view the relevant resource configurations before and after the current configuration change in the JSON format.
            
        -   In the **Resource Relationship** section, you can view the resources that are associated with the current resource.
            
        -   In the **Operation Log** section, you can view the ActionTrail events that correspond to the current configuration change.
            
    -   Resource relationship change
        
        -   In the **Basic Info After Change** section, you can view the ID, name, type, and tags of the resource, the time when the resource was created, and the region and zone in which the resource resides.
            
        -   In the **Resource Relation Change Diff Details** section, you can view the association with or dissociation from other resources in the JSON format.
            
        -   In the **Resource Relationship** section, you can view the resources that are associated with the current resource.
            
        -   In the **Operation Log** section, you can view the ActionTrail events that correspond to the current configuration change.
            
        
        **Note**
        
        For information about the Alibaba Cloud services and resource types supported by Cloud Config, see [Alibaba Cloud services and resource types supported by Cloud Config](/help/en/cloud-config/latest/alibaba-cloud-services-that-are-supported-by-cloud-config#concept-127411-zh).
