After you create a workflow, you can perform operations on existing workflow runs and workflow node runs. This topic describes how to view a workflow run and the logs of a workflow node run.

## **Prerequisites**

A workflow is created and run. For more information, see [Manage workflows](/help/en/emr/emr-serverless-spark/user-guide/manage-workflows).

## View the information about a workflow run

1.  Go to the Workflows page.
    
    1.  Log on to the [E-MapReduce (EMR) console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, choose **EMR Serverless** > **Spark**.
        
    3.  On the **Spark** page, find the desired workspace and click the name of the workspace.
        
    4.  In the left-side navigation pane of the **EMR Serverless Spark** page, click **Workflows**.
        
2.  On the **Workflows** page, find the desired workflow and click the name of the workflow.
    
    The **Workflow Runs** tab appears.
    
    -   On the tab, you can view all workflow runs and the details of each workflow run, such as the running duration and running status.
        
    -   Click the ID of a workflow run in the **Workflow Run ID** column in the **Workflow Runs** section of the tab or click the **Workflow Run Graph** tab to view the diagram of the related workflow run. The color of a node run indicates the node running status. For more information, see the [Check the status of workflow runs and workflow nodes](/help/en/emr/emr-serverless-spark/user-guide/manage-workflows#1ce0d956adtfg) section in the "Manage workflows" topic.
        

## View workflow node runs

1.  Go to the Workflows page.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left-side navigation pane, choose **EMR Serverless** > **Spark**.
        
    3.  On the **Spark** page, find the desired workflow and click the name of the workspace.
        
    4.  In the left-side navigation pane of the **EMR Serverless Spark** page, click **Workflows**.
        
2.  On the **Workflows** page, find the desired workflow and click the name of the workflow.
    
3.  Click the **Workflow Run Graph** tab.
    
4.  Click a node in the diagram. In the dialog box that appears, perform operations or view information based on your business requirements.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5971201271/p746395.png)
    
    **Parameter**
    
    **Description**
    
    **Details**
    
    You can click Details to view the information on the following tabs:
    
    -   **Node Instance Information**: This tab displays the details of a workflow node run, such as the job ID, start time, and job run ID.
        
    -   **Code**: This tab displays the code of a workflow node run.
        
    -   **Logs**: This tab displays the logs of a node run.
        
    
    **Spark UI**
    
    You can click Spark UI to go to the Spark Jobs page to view the real-time information about a Spark job, such as the status, progress, and resource usage.
    
    **Rerun**
    
    You can click Rerun to rerun the current job.
    
    If you select **Downstream Nodes** and then click **Rerun**, the system reruns all jobs, including those on the downstream nodes, based on the logical sequence defined in the workflow.
    
    **Stop**
    
    You can click Stop to stop the running node. The stopped node enters the Failed state.
    
    **Set to Successful**
    
    You can click Set to Successful to change the node status from Failed to Succeeded.
    
    If you select **Downstream Nodes** and then click **Set to Successful**, the system changes the status of selected failed nodes to Succeeded based on the logical sequence defined in the workflow.
    
    **Job Run ID**
    
    You can click the link to the right of Job Run ID to go to the Overview tab of the Job History page to view the basic information and configurations of a job.
    

## **References**

-   For more information about workflows, see [Terms](/help/en/emr/emr-serverless-spark/product-overview/terms).
    
-   For information about how to create and run workflows, see [Manage workflows](/help/en/emr/emr-serverless-spark/user-guide/manage-workflows).
