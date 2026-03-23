A key link for enterprises to implement automated operations and maintenance (O&M) is to quickly find multiple resources on which you want to perform O&M at a time. This can be achieved by using resource tags and CloudOps Orchestration Service (OOS). This topic describes how to use OOS to start multiple Elastic Compute Service (ECS) instances with specific tags at a time.

## Step 1: Create tags and add them to ECS instances

In the ECS console or on the Tag page of the Resource Management console, create the `business:bigdata` tag and add it to ECS instances. In this example, the Tag page of the Resource Management console is used.

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/tags).
    
2.  In the left-side navigation pane, choose **Tag** > **Tag**. On the Tag page, click **Create Tag**.
    
3.  In the **Create Tag** dialog box, enter the tag key`business` and the tag value `bigdata`, and click **Create**.
    
4.  On the **Tag** page, find the newly created tag and click **Add to Resources** in the **Actions** column to add the tag to existing ECS instances.
    
    For more information, see [Create a tag](/help/en/resource-management/tag/user-guide/create-a-tag) and [Add a tag](/help/en/resource-management/tag/user-guide/add-a-tag).
    

## Step 2: Start multiple ECS instances with specific tags at a time in the OOS console

Execute the ACS-ECS-BulkyStartInstances public template in the OOS console. In this step, set the template execution object to ECS instances to which the `business:bigdata` tag is added.

1.  Log on to the [OOS console](https://oos.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, choose **Automated Task** > **Public Template**.
    
3.  In the top navigation bar, select the desired region.
    
    **Note**
    
    By default, OOS deployed in a region can be used to manage resources only in this region. For example, OOS deployed in the China (Hangzhou) region can be used to manage ECS instances only in this region. However, OOS provides a method to manage resources deployed in other regions. If you want to call API operations in other regions, specify the region ID in the ACS::ExecuteAPI action. We recommend that you do not use this method. Therefore, in this example, you must make sure that the region of OOS is the same as the region of the ECS instances you specify in [Step 1: Create tags and add them to ECS instances](#section-hpb-tq1-yrm). For more information about the limits on OOS, see [Limits](/help/en/oos/product-overview/limits#topic817).
    
4.  On the **Public Template** page, find **ACS-ECS-BulkyStartInstances** and click **Create Execution**.
    
5.  On the **Create Task** page, perform the following steps:
    
    1.  In the **Basic Information** step, keep the default values and click **Next Step: Parameter Settings**.
        
        The default value of Execution Mode is **Automatic**. This value indicates that all tasks in the template will automatically run.
        
    2.  In the Parameter Settings step, set **TargetInstance** to **Specify Instance Tags**, select `business` from the Tag key drop-down list and `bigdata` from the Tag value drop-down list, and then set **OOSAssumeRole** to **Use Existing Permissions of Current Account**. Keep the default values for other parameters.
        
    3.  Click **Next Step: OK**.
        
    4.  In the OK step, confirm the settings and click **Create**.
        
6.  In the **Execution Steps and Results** section of the page that appears, click **Starts the ECS instances**.
    
7.  On the **Loop Tasks** tab, view the execution result.
    
    All ECS instances to which the `business:bigdata` tag is added are started.
