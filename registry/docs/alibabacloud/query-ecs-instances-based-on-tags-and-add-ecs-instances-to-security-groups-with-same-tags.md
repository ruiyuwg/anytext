You can use a Public Template from CloudOps Orchestration Service (OOS) to create an Execution. This Execution finds ECS instances by a specific Tag and adds them to a Security Group with the same Tag.

## Background information

In this example, ECS instances tagged with `Team:Dev` are added to a Security Group that also has the same Tag.

## Procedure

1.  Log on to the [OOS console](https://oos.console.alibabacloud.com/).
    
2.  In the , choose **Automated Task** > **Public Template**.
    
3.  In the upper-left corner of the top navigation bar, select a region.
    
    **Note**
    
    By default, OOS in a Region manages resources within that same Region. For example, OOS in China (Hangzhou) manages ECS instances in China (Hangzhou). Although you can specify the `regionId` parameter in some templates to call API operations in other regions, this practice is not recommended. The Region you select for OOS must be the same as the Region where your ECS instances are located. For more information about OOS limitations, see [Limits](/help/en/oos/product-overview/limits#topic817).
    
4.  On the **Public Template** page, find **ACS-ECS-CorrectSecurityGroupInstancesByTags** and click **Create Execution**.
    
5.  On the **Basic Information** page, configure the basic settings for the Execution, and then click **Next Step: Parameter Settings**.
    
    In this example, the default settings on the **Basic Information** page are used.
    
    **Note**
    
    For **Execution Mode**, select **Automatic**. In this mode, the template runs all tasks sequentially without requiring manual confirmation for each step.
    
6.  On the **Parameter Settings** page, configure the parameters and then click **Next Step: OK**.
    
    1.  In the **Region ID** section, select the Region where the ECS instances are located.
        
    2.  In the **Tags** section, enter the Tag for the ECS instances.
        
        The system finds ECS instances based on this Tag and adds them to the Security Group with the same Tag.
        
        **Important**
        
        The ECS instances and the Security Group must be in the same Virtual Private Cloud (VPC). Otherwise, the Execution fails.
        
7.  Verify the information and click **Create**.
    

## Result

A Successful status for the Execution means the ECS instances with the Tag `Team:Dev` have been added to the Security Group with the same Tag. You can go to the instance list in the ECS console to verify that the instances are in the correct Security Group.
