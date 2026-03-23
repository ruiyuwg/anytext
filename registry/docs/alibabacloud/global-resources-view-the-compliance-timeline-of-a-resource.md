In Cloud Config, each resource has a compliance detection history. When a rule evaluates a resource, Cloud Config generates a compliance evaluation record. The collection of these records forms the compliance detection history for the resource.

## Background information

A resource's compliance detection history consists of a set of compliance evaluation records. The following table describes the elements of the compliance detection history.

**Element**

**Description**

Key points of the compliance detection history

-   Start point: the time when a resource is evaluated based on a rule for the first time. You can configure Cloud Config to run a rule to evaluate a resource on a regular basis or each time you change the resource configuration. You can also manually run a rule to evaluate a resource.
    
-   Node: A node is generated in the compliance detection history of a resource every time the resource is evaluated. One or more rules can be used to evaluate a resource at the same time.
    
-   Breakpoint: If you remove a resource type from the monitoring scope, Cloud Config stops monitoring resources of that type and stops adding to the compliance detection history. If you add the resource type back to the monitoring scope, Cloud Config resumes monitoring. Changes to the resource that occurred while monitoring was stopped are not recorded.
    

Content of the compliance detection history

-   Time: the time when a compliance evaluation is performed.
    
-   Trigger type: the reason that triggers the compliance evaluation on a resource. A compliance evaluation can be manually or periodically triggered, and can also be triggered based on real-time configuration changes.
    
-   Compliance evaluation results: The evaluation result for each node is displayed in the navigation pane on the left side of the **Compliance Detection History** tab. This helps you quickly locate non-compliant resources.
    
-   Evaluation details of each node: You can view the **basic information** about the resource and the **current evaluation result**. If the evaluation is periodically triggered, or triggered based on real-time configuration changes, the **change details of the core resource configuration** are also displayed for you to find non-compliant configuration items.
    

## Procedure

1.  Log on to the [Cloud Config console](https://confignew.console.alibabacloud.com).
    
2.  Optional. In the upper-left corner, select an account group.
    
    This operation is required only if you are using a management account of a resource directory. Otherwise, you do not need to perform the operation.
    
3.  In the left-side navigation pane, choose **Resources** > **Global Resources**.
    
4.  On the **Global Resources** page, enter a resource ID or set filter conditions to query the specified resource.
    
    -   You can enter a resource ID to query the specified resource.
        
    -   You can also efficiently query a resource by resource type, region and resource status.
        
    
5.  Click the resource ID in the Resource ID / Name column.
    
6.  Click the **Compliance Check History** tab to view the details of the resource's compliance detection history.
    
    -   In the **Basic Info After Change** section, you can view the ID, name, type, and tags of the resource, the time when the resource was created, and the region and zone in which the resource resides.
        
    -   In the **Evaluation Result** section, you can view the latest compliance evaluation result of the resource.
        
    -   In the **Change Details** section, you can view the relevant resource configurations before and after the current configuration change in the JSON format.
