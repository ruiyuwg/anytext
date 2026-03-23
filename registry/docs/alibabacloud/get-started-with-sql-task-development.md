EMR Serverless Spark lets you edit and run jobs using SQL code. This topic describes how to create, start, and maintain SQL jobs.

## Prerequisites

-   You have an Alibaba Cloud account. For more information, see [Sign up for an account](https://account.alibabacloud.com/register/intl_register.htm).
    
-   The required roles have been granted. For more information, see [Grant roles to an Alibaba Cloud account](/help/en/emr/emr-serverless-spark/getting-started/assign-a-role-to-an-alibaba-cloud-account).
    
-   A workspace and a session instance have been created. For more information, see [Create a workspace](/help/en/emr/emr-serverless-spark/getting-started/create-a-workspace) and [Manage SQL sessions](/help/en/emr/emr-serverless-spark/user-guide/manage-sql-sessions).
    

## **Step 1: Create and publish development jobs**

**Important**

A job must be published before it can be used in a workflow.

1.  Go to the Data Development page.
    
    1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/overview).
        
    2.  In the left navigation pane, choose **EMR Serverless** > **Spark**.
        
    3.  On the **Spark** page, click the target workspace name.
        
    4.  On the EMR Serverless Spark page, in the navigation pane on the left, click **Development**.
        
2.  Create the users\_task job.
    
    1.  On the **Development** tab, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6035189371/p916811.png) icon.
        
    2.  In the **New** dialog box, enter a name, such as users\_task, leave the type as the default **SparkSQL**, and click **OK**.
        
    3.  Copy the following code to the new Spark SQL tab (users\_task).
        
        ```
        CREATE TABLE IF NOT EXISTS students (
          name VARCHAR(64),          
          address VARCHAR(64)       
        )
        USING PARQUET  
        PARTITIONED BY (data_date STRING)              
        OPTIONS (
          'path'='oss://<bucketname>/path/'
        );
        
        
        INSERT OVERWRITE TABLE students PARTITION (data_date = '${ds}') VALUES
          ('Ashua Hill', '456 Erica Ct, Cupertino'),
          ('Brian Reed', '723 Kern Ave, Palo Alto');
        ```
        
        The following table describes the supported date variables. The default value is the previous day.
        
        **Variable**
        
        **Data type**
        
        **Description**
        
        **{data\_date}**
        
        str
        
        A variable that indicates the date. The format is `YYYY-MM-DD`.
        
        Example: 2023-09-18.
        
        **{ds}**
        
        str
        
        **{dt}**
        
        str
        
        **{data\_date\_nodash}**
        
        str
        
        A variable that indicates the date. The format is `YYYYMMDD`.
        
        Example: 20230918.
        
        **{ds\_nodash}**
        
        str
        
        **{dt\_nodash}**
        
        str
        
        **{ts}**
        
        str
        
        A variable that indicates the timestamp. The format is `YYYY-MM-DDTHH:MM:SS`.
        
        Example: 2023-09-18T16:07:43.
        
        **{ts\_nodash}**
        
        str
        
        A variable that indicates the timestamp. The format is `YYYYMMDDHHMMSS`.
        
        Example: 20230918160743.
        
    4.  From the database and session drop-down lists, select a database and a running session instance.
        
        You can also select **Connect to SQL Session** from the drop-down list to create a new session. For more information, see [Manage SQL sessions](/help/en/emr/emr-serverless-spark/user-guide/manage-sql-sessions).
        
    5.  Click **Run** to execute the job.
        
        Results are displayed on the **Execution Results** tab. If an exception occurs, you can view the details on the **Execution Issues** tab.
        
3.  Publish the users\_task job.
    
    **Note**
    
    Parameters specified for a job are published with it and are used when the job runs in a pipeline. Session parameters are used when the job runs in the SQL editor.
    
    1.  On the new Spark SQL tab, click **Publish**.
        
    2.  In the dialog box, enter a description for the publication and click **OK**.
        
4.  Create the users\_count job.
    
    1.  On the **Development** tab, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6035189371/p916811.png) icon.
        
    2.  In the **New** dialog box, enter a name such as users\_count, accept the default type, SparkSQL, and click **OK**.
        
    3.  Copy the following code to the new Spark SQL job tab (users\_count).
        
        ```
        SELECT COUNT(1) FROM students;
        ```
        
    4.  From the database and session drop-down lists, select a database and a running session instance.
        
        You can also select **Connect to SQL Session** from the drop-down list to create a new session. For more information about session management, see [Manage SQL sessions](/help/en/emr/emr-serverless-spark/user-guide/manage-sql-sessions).
        
    5.  Click **Run** to execute the job.
        
        The **Execution Results** tab displays the results. If an exception occurs, you can view it on the **Execution Issues** tab.
        
5.  Publish the users\_count job.
    
    **Note**
    
    Parameters specified for a job are published with it and are used when the job runs in a pipeline. Session parameters are used when the job runs in the SQL editor.
    
    1.  On the new Spark SQL job tab, click **Publish**.
        
    2.  In the dialog box that appears, enter a description for the publication and click **OK**.
        

## **Step 2: Create a workflow and its nodes**

1.  In the left navigation pane, click **Workflows**.
    
2.  On the **Workflows** page, click **Create Workflow**.
    
3.  In the **Create Workflow** panel, enter a **Name** such as spark\_workflow\_task, and then click **Next**.
    
    You can configure the parameters in the **Other Settings** section as needed. For more information about the parameters, see [Manage workflows](/help/en/emr/emr-serverless-spark/user-guide/manage-workflows).
    
4.  Add the users\_task node.
    
    1.  On the new node canvas, you can click **Add Node**.
        
    2.  In the **Add Node** panel, select the published users\_task job from the **Source Path** drop-down list, and then click **Save**.
        
5.  Add the users\_count node.
    
    1.  Click **Add Node**.
        
    2.  In the **Add Node** panel, select the published users\_count job from the **Source Path** drop-down list and users\_task from the **Upstream Nodes** drop-down list, and then click **Save**.
        
6.  On the new node canvas, click **Publish Workflow**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7271201271/p775223.png)
    
7.  In the **Publish** dialog box, enter a description for the publication and click **OK**.
    

## **Step 3: Run the workflow**

1.  On the **Workflows** page, in the **Name** column, click the name of the new workflow (for example, spark\_workflow\_task).
    
2.  On the **Workflow Runs** page, click **Run**.
    
    **Note**
    
    After you configure a scheduling cycle, you can also start the schedule on the **Workflows** page by turning on the switch on the left.
    
3.  In the **Start Workflow** dialog box, click **OK**.
    

## **Step 4: View the instance status**

1.  On the **Workflows** page, click the target workflow, such as spark\_workflow\_task.
    
2.  On the **Workflow Runs** page, you can view all workflow instances and the runtime and status of each.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7271201271/p752793.png)
    
3.  Click the **Workflow Run ID** in the **Workflow Runs** section or the **Workflow Runs Diagram** tab to view the workflow instance graph.
    
4.  Click a target node instance. In the node information dialog box that appears, you can perform operations or view information as needed.
    
    For more information about related operations and details, see [View node instances](/help/en/emr/emr-serverless-spark/user-guide/manage-workflow-instances-and-nodes#d523e29d1exxv).
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7271201271/p752794.png)
    
    For example, click **Spark UI** to open the Spark Jobs page, where you can view real-time information about Spark tasks.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7271201271/p808761.png)
    
5.  Click the **Name** to open the **Job History** page. On this page, you can view metrics, diagnostics, and logs.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6052228571/p1008038.png)
    

## **Step 5: Workflow O&M**

On the **Workflows** page, click the name of the target workflow to open the **Workflow Runs** page. You can:

-   In the **Workflow Information** section, you can edit some parameters.
    
-   The **Workflow Runs** section lists all workflow instances. Click a **Workflow Run ID** to open the corresponding workflow instance graph.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7271201271/p753237.png)
    

## **Step 6: View data**

1.  In the left navigation pane, click **Development**.
    
2.  Create a SparkSQL development job. Then, enter and run the following command to view the table details:
    
    ```
    SELECT * FROM students;
    ```
    
    The following information is returned:
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7271201271/p752974.png)
    

## **References**

-   For more information about how to create a resource queue, see [Manage resource queues](/help/en/emr/emr-serverless-spark/user-guide/queue-management).
    
-   For more information about how to create an SQL session, see [Manage SQL sessions](/help/en/emr/emr-serverless-spark/user-guide/manage-sql-sessions).
