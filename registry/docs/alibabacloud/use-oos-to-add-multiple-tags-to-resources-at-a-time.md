You can use a public template provided by CloudOps Orchestration Service (OOS) to create an execution to add multiple tags to multiple resources of the same type in the same region at a time. This helps improve O&M efficiency.

## Background information

In this example, the public template **ACS-TAG-TagResourcesIgnoreCaseSensitive** provided by OOS is used to add the tags `CostCenter:Hangzhou` and `Team:Dev` to two Elastic Compute Service (ECS) instances that reside in the China (Hangzhou) region. You can view the types of resources to which you can use an OOS public template to add tags at a time in the OOS console.

## Procedure

1.  Log on to the [OOS console](https://oos.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Automated Task** > **Public Template**.
    
3.  In the top navigation bar, select the desired region.
    
    **Note**
    
    By default, OOS deployed in a region can be used to manage resources only in this region. For example, OOS deployed in the China (Hangzhou) region can be used to manage ECS instances only in this region. However, OOS provides a method to manage resources deployed in other regions. If you want to call API operations in other regions, specify the region ID in the ACS::ExecuteAPI action. We recommend that you do not use this method. Therefore, in this example, you must make sure that the region in which OOS is deployed is the same as the region in which the ECS instances you want to manage reside. For more information about the limits on OOS, see [Limits](/help/en/oos/product-overview/limits#topic817).
    
4.  On the **Public Template** page, find **ACS-TAG-TagResourcesIgnoreCaseSensitive** and click **Create Execution**.
    
5.  In the **Basic Information** step, configure the parameters and click **Next Step: Parameter Settings**.
    
    In this example, default values are retained for the parameters in the **Basic Information** step.
    
    **Note**
    
    The default value of **Execution Mode** is **Automatic**, which indicates that all tasks defined in the template are automatically run in sequence.
    
6.  In the **Parameter Settings** step, configure the parameters and click **Next Step: OK**.
    
    1.  In the **Select Tags** section, specify the tag that you want to add to the ECS instances. You can specify multiple tags. In this example, the tags `CostCenter:Hangzhou` and `Team:Dev` are specified.
        
    2.  In the **Select Resources** section, select the region in which the desired resources reside from the RegionId drop-down list, select the resource type from the ResourceType drop-down list, and then enter the ID of the resource in the ResourceIds field.
        
        You can enter multiple resource IDs. In this example, the IDs of two ECS instances are entered.
        
    3.  In the **Control Options** section, retain default values for all parameters in **RateControl** and the default value for the **OOSAssumeRole** parameter.
        
7.  In the OK step, confirm the settings and click **Create**.
    

## View the result

If the status of the execution is Success on the Executions page, the tags `CostCenter:Hangzhou` and `Team:Dev` are added to the specified ECS instances at a time. You can also check whether the tags are added to an ECS instance on the Instances page in the ECS console.
