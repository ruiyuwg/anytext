You can create an execution to add tags to multiple Elastic Compute Service (ECS) instances that reside in the same region by using a public template provided by CloudOps Orchestration Service (OOS). This helps improve O&M efficiency.

## Background information

In this example, the public template **ACS-ECS-BulkyTagInstances** provided by OOS is used to add the tag `CostCenter:Hangzhou` to ECS instances that reside in the China (Hangzhou) region.

## Procedure

1.  Log on to the [OOS console](https://oos.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Automated Task** > **Public Template**.
    
3.  In the top navigation bar, select the desired region.
    
    **Note**
    
    By default, OOS deployed in a region can be used to manage resources only in this region. For example, OOS deployed in the China (Hangzhou) region can be used to manage ECS instances only in this region. However, OOS provides a method to manage resources deployed in other regions. If you want to call API operations in other regions, specify the region ID in the ACS::ExecuteAPI action. We recommend that you do not use this method. Therefore, in this example, you must make sure that the region in which OOS is deployed is the same as the region in which the ECS instances you want to manage reside. For more information about the limits on OOS, see [Limits](/help/en/oos/product-overview/limits#topic817).
    
4.  On the **Public Template** page, find **ACS-ECS-BulkyTagInstances** and click **Create Execution**.
    
5.  In the **Basic Information** step, configure the parameters and click **Next Step: Parameter Settings**.
    
    In this example, default values are retained for the parameters in the **Basic Information** step.
    
    **Note**
    
    The default value of **Execution Mode** is **Automatic**, which indicates that all tasks defined in the template are automatically run in sequence.
    
6.  In the **Parameter Settings** step, configure the parameters and click **Next Step: OK**.
    
    1.  In the **Configure Parameters** section, specify the tags that you want to add to ECS instances. In this example, the tag `CostCenter`:`Hangzhou` is specified.
        
    2.  In the **Select Ecs Instances** section, select the region in which the desired ECS instances reside and select the ECS instances to which you want to add the tag.
        
        In this example, all ECS instances in the China (Hangzhou) region are selected.
        
    3.  In the **Control Options** section, retain default values for all parameters in **RateControl** and the default value for the **OOSAssumeRole** parameter.
        
7.  In the OK step, confirm the settings and click **Create**.
    

## View the result

If the execution status that is displayed for the execution on the Executions page is Success, the tag `CostCenter:Hangzhou` is added to the ECS instances. You can also check whether the tag is added to a specific ECS instance on the Instances page in the ECS console.
