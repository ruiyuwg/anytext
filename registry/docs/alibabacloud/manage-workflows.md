A workflow consists of a series of jobs with clarified dependencies and specified running sequence. If you want to run jobs at specific points in time, you can create a workflow, add nodes in the workflow, and then configure scheduling policies in the workflow. This topic describes how to create and run a workflow.

## Prerequisites

-   A workspace is created. For more information, see [Manage workspaces](/help/en/emr/emr-serverless-spark/user-guide/manage-workspaces).
    
-   Jobs are developed and published.
    

## **Create a workflow**

1.  Go to the Workflows page.
    
    1.  Log on to the [E-MapReduce (EMR) console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, choose **EMR Serverless** > **Spark**.
        
    3.  On the **Spark** page, find the desired workspace and click the name of the workspace.
        
    4.  In the left-side navigation pane of the **EMR Serverless Spark** page, choose Operation Center > **Workflows**.
        
2.  On the **Workflows** tab, click **Create Workflow**.
    
3.  In the **Create Workflow** panel, configure the parameters and click **Next**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Name**
    
    The name of the workflow. The name must be unique in a workspace.
    
    **Resource Queue**
    
    The default resource queue for the workflow.
    
    **Note**
    
    The resource queue specified for workflow nodes can override the default resource queue.
    
    **Other Settings**
    
    **Scheduling Type**
    
    The mode in which the workflow is run in the production environment. Valid values:
    
    -   None (Manual): The workflow is manually run. This is the default value.
        
    -   Scheduler: The workflow runs based on the settings of the scheduler. The workflow can be scheduled to run by minute, hour, or day.
        
        If you set the **Scheduling Type** parameter to **Scheduler**, you must configure the **Scheduling Time** and **Scheduling Started At** parameters.
        
    
    **Scheduling Time**
    
    The scheduling cycle of the workflow. This parameter determines the scheduling frequency of the workflow in the production environment. Workflow runs are generated based on the scheduling frequency of a workflow. This parameter is required only if the **Scheduling Type** parameter is set to **Scheduler**.
    
    Valid values:
    
    -   Days: Nodes run once a day at the specified point in time.
        
    -   Hours: Nodes run once `every N hours` within the specified period every day.
        
    -   Minutes: Nodes run once `every N minutes` within the specified period every day.
        
    
    **Scheduling Started At**
    
    The date and time when the workflow is scheduled to run. The default value is the current time. This parameter is required only if the Scheduling Type parameter is set to **Scheduler**.
    
    **Important**
    
    If you create a workflow whose Scheduling Type is set to **Scheduler**, you must turn on the **Scheduling Status** switch for the workflow on the **Workflows** tab of the Workflows page. Otherwise, the workflow cannot be triggered at the scheduling time.
    
    **Retries After Failure**
    
    The number of retries after a workflow node fails to run. By default, no retry is performed.
    
    **Note**
    
    The number of retries specified for a workflow node can override the value of this parameter.
    
    **Failure Notification**
    
    The email address to which a notification is sent after the workflow fails to run.
    
    **Tags**
    
    The tags that are used to identify the workflow. You can specify the key and value of each tag.
    
4.  Add a node in the workflow.
    
    1.  On the page that appears, click **Add Node** in the lower part of the canvas.
        
    2.  In the **Add Node** panel, configure the parameters. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Source File Path**
        
        The job path that corresponds to the node. The job in the path must be published.
        
        **Node Type**
        
        The type of the node. By default, the system infers the type of the node based on the job in the corresponding path.
        
        **Node Name**
        
        The name of the node. The system automatically enters a node name based on the value of Source File Path. You can also specify a name based on your business requirements.
        
        **Upstream Node**
        
        The upstream node of the current node. The upstream node must be a node that is created in the current workflow.
        
        You do not need to specify an upstream node for the first node in the workflow.
        
        **Number of Retries**
        
        The number of retries defined in the workflow is used. By default, no retry is performed.
        
        **Timeout (Seconds)**
        
        The timeout period for a single run of the node. By default, no limit is imposed.
        
        **Subscription**
        
        The email address to which a notification is sent when the node is in the specified state.
        
        **Tags**
        
        The tags of the node. By default, the workflow\_name and task\_name tags are provided for each node.
        
        **Resource Queue**
        
        The resource queue that is used to run the node. By default, the resource queue that you specify for the workflow is used. You can configure a resource queue for the node to override the resource queue that you specified for the workflow.
        
        **Important**
        
        After you specify a resource queue for the workflow node, the specified resource queue prevails even if you modify the resource queue configured for the workflow.
        
        **Note**
        
        If you use an SQL job, you can configure the parameters in the Task Configuration section based on your business requirements. By default, the values of the parameters in the Task Configuration section are the same as the values of the parameters that you configure for the job. For more information, see [Manage default configurations](/help/en/emr/emr-serverless-spark/user-guide/configurations-manage/).
        
    3.  Click **Save**.
        
        You can continue to click **Add Node** to add nodes based on your business requirements.
        
5.  Publish the workflow.
    
    1.  In the upper-right corner, click **Publish Workflow**.
        
    2.  In the **Publish** dialog box, configure the Remarks parameter and click **OK**.
        

## **Run a workflow**

Each time a workflow runs, a workflow run is generated. You can view workflow runs on the **Workflow Runs** tab of the workflow details page.

### **Debugging**

When you edit a workflow, you can debug the workflow of the latest version.

1.  Find the desired workflow and click **Edit** in the **Actions** column. On the page that appears, click **Debug** to the right of the workflow name.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7293735471/p781425.png)
    
2.  In the **Debug** dialog box, select a resource queue used in the development environment and click **Run**.
    

### **Scheduled run**

If you set the **Scheduling Type** parameter to **Scheduler** when you create the workflow and turn on the switch in the **Scheduling Status** column after the workflow is created, the workflow is scheduled to run at the specified point in time.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9871201271/p746306.png)

### **Manual run**

On the **Workflows** tab, click the name of the workflow that you want to run. In the upper-right corner of the page that appears, click **Run**. In the **Run** dialog box, configure the **Scheduling Method** parameter and click **OK**. Then, the workflow runs based on the selected scheduling method. Valid values of the **Scheduling Method** parameter:

-   **Manually Run**: Manually runs the workflow without the need to wait for the scheduling time to arrive. This is the default value.
    
-   **Backfill**: Backfills data for the workflow in a historical period of time. You can select this option for a workflow that does not run or fails to run. You can configure the parameters described in the following table based on your business requirements when you select this option.
    
    **Parameter**
    
    **Description**
    
    **Cycle**
    
    The system generates a workflow run when the workflow is run within the time range that you specify for the Cycle parameter.
    
    -   The specified time range can be earlier than the current time. When the actual time is later than the specified time range, a data backfill workflow run is generated and run.
        
    -   A data backfill workflow run is generated and run only if the scheduling time falls in the specified time range.
        
    -   If time variables, such as ${ds}, are configured for a workflow, the system automatically replaces the variables with the time included in the value of the Cycle parameter.
        
    
    **Resource Queue**
    
    By default, the resource queue that you configured for the workflow is used. You can also select another resource queue in the production environment from the drop-down list.
    
    **Remarks**
    
    Enter a description based on your business requirements. This helps you manage the workflow and troubleshoot issues.
    
    **More**
    
    **Failure Notification**: You can specify an email address to receive the notification when the data backfilling fails.
    

## **Check the status of workflow runs and workflow nodes**

You can check the status of workflow runs in the **Workflow Runs Status** column and the status of workflow nodes in the **Workflow Node Runs Status** column.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9871201271/p746341.png)

-   Status of workflow runs
    
    **Status**
    
    **Description**
    
    Blue
    
    Running
    
    Green
    
    Succeeded
    
    Red
    
    Failed
    
    Purple
    
    Pending
    
-   Status of workflow nodes
    
    **Status**
    
    **Description**
    
    Blue
    
    Running
    
    Green
    
    Succeeded
    
    Red
    
    Failed
    
    Yellow
    
    Retrying
    
    Purple
    
    Pending
    

## **References**

-   For more information about workflows, see [Terms](/help/en/emr/emr-serverless-spark/product-overview/terms).
    
-   For information about how to view information such as workflow runs and workflow node runs, see [Manage workflow runs and workflow node runs](/help/en/emr/emr-serverless-spark/user-guide/manage-workflow-instances-and-nodes).
