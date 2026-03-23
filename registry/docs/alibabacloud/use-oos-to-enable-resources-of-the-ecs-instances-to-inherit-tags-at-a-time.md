You can create an execution by using a public template provided by CloudOps Orchestration Service (OOS) to enable the disks, elastic network interfaces (ENIs), elastic IP addresses (EIPs), snapshots, or custom images of Elastic Compute Service (ECS) instances to inherit tags from the ECS instances at a time. This improves O&M efficiency.

## Background information

In this example, the tag `team:dev` is added to multiple ECS instances and is expected to be automatically added to the resources of the ECS instances. However, after you add the tag to the ECS instances, you may find that the tag is not added to some resources of the ECS instances. This does not meet the requirements. In this case, you can execute the public template **ACS-TAG-ExtendEcsInstanceTagsByInputParams** provided by OOS to quickly find the resources to which the tag is not added and add the tag to them at a time.

## Procedure

1.  Log on to the [OOS console](https://oos.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Automated Task** > **Public Template**.
    
3.  In the top navigation bar, select the desired region.
    
    **Note**
    
    By default, OOS deployed in a region can be used to manage resources only in this region. For example, OOS deployed in the China (Hangzhou) region can be used to manage ECS instances only in this region. However, OOS provides a method to manage resources deployed in other regions. If you want to call API operations in other regions, specify the region ID in the ACS::ExecuteAPI action. We recommend that you do not use this method. Therefore, in this example, you must make sure that the region in which OOS is deployed is the same as the region in which the ECS instances you want to manage reside. For more information about the limits on OOS, see [Limits](/help/en/oos/product-overview/limits#topic817).
    
4.  On the **Public Template** page, find the **ACS-TAG-ExtendEcsInstanceTagsByInputParams** template and click **Create Execution**.
    
5.  In the **Basic Information** step, configure the parameters and click **Next Step: Parameter Settings**.
    
    In this example, default values are retained for the parameters in the **Basic Information** step.
    
    **Note**
    
    The default value of **Execution Mode** is **Automatic**, which indicates that all tasks defined in the template are automatically run in sequence.
    
6.  In the **Parameter Settings** step, configure the parameters and click **Next Step: OK**.
    
    1.  Set the **RegionId** parameter to the region where the desired ECS instances reside.
        
    2.  For the **TargetInstance** parameter, select the ECS instances.
        
        Multiple methods are provided to select the ECS instances. You can select a method based on your business requirements. In this example, the **Specify Instance Tags** method is used to select the ECS instances to which the tag `team:dev` is added.
        
    3.  In the **TagKeys** field, enter the tag key that you want to inherit from the ECS instances.
        
        In this example, the tag key `team` is entered. You can enter multiple tag keys.
        
    4.  Set the **ResourceTypes** parameter to the desired resource type.
        
        Supported resource types include disk, snapshot, eni, eip, and image. You can select multiple resource types. In this example, all resource types are selected.
        
    5.  Choose whether to turn on the switch **Whether to overwrite the tag value if the tag key is the same**.
        
        In this example, the switch is turned on. This way, if the tag keys are the same but the tag values are different, the new tag value overwrites the original tag value.
        
    6.  Keep the default settings for the **RateControl** and **OOSAssumeRole** parameters.
        
7.  In the OK step, confirm the settings and click **Create**.
    

## Result

If the execution status that is displayed for the execution on the Task Execution Management page is Success, the tag `team:dev` is inherited for the resources of the ECS instances. You can also check whether the tag is added to the resources in the ECS console.
