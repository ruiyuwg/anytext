Presto, also known as PrestoDB, is a flexible and scalable distributed SQL query engine that supports interactive analysis and queries of big data using standard SQL. DataWorks provides the EMR Presto node, which you can use to develop and periodically schedule Presto tasks. This topic describes how to develop tasks using an EMR Presto node and lists important considerations.

## Prerequisites

-   You have created an Alibaba Cloud EMR cluster and bound it to DataWorks. For more information, see [Data Studio: Associate an EMR computing resource](/help/en/dataworks/user-guide/bind-emr-computing-resources).
    
-   (Optional) If you are a Resource Access Management (RAM) user, ensure that you have been added to the workspace for task development and have been assigned the **Developer** or **Workspace Administrator** role. The Workspace Administrator role has extensive permissions. Grant this role with caution. For more information about adding members, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
    > If you use an Alibaba Cloud account, you can skip this step.
    

## Limitations

-   Only earlier versions of Hadoop-based data lake clusters are supported. DataLake clusters and custom clusters are not supported.
    
-   You can run this type of task only on [Serverless resource groups](/help/en/dataworks/dataworks-resource-group-overview#c47e4feb45n5u) (recommended) or exclusive resource groups for scheduling.
    
-   Data lineage: Data lineage is not supported for tasks that run on EMR Presto nodes.
    

## **Procedure**

1.  On the edit page of the EMR Presto node, develop the node as follows.
    
    #### **Develop SQL code**
    
    You can develop the task code in the SQL editor. In your code, you can define variables using the **${variable\_name}** format. Then, you can assign values to these variables in the **Scheduling Parameters** section of the **Scheduling Configuration** tab on the right. This lets you dynamically pass parameters for scheduled tasks. For more information about scheduling parameters, see [Sources and expressions of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters). The following code is an example.
    
    ```
    select '${var}'; -- Use with scheduling parameters.
    
    select * from userinfo ;
    ```
    
    **Note**
    
    -   An SQL statement cannot exceed 130 KB in size.
        
    -   When you use an EMR Presto node to query data, the query can return a maximum of 10,000 data entries. The total size of the returned data cannot exceed 10 MB.
        
    
    #### **(Optional) Configure advanced parameters**
    
    On the **Scheduling Configuration** tab on the right side of the node, you can configure the following unique parameters in the **EMR Node Parameters** > **DataWorks Parameters** section.
    
    **Note**
    
    You can configure additional open source Spark property parameters in the **EMR Node Parameters** > **Spark Parameters** section on the **Scheduling Configuration** tab. For more information, see [open source Spark property parameters](https://spark.apache.org/docs/latest/configuration.html).
    
    ##### **Hadoop cluster: EMR on ECS**
    
    **Advanced parameter**
    
    **Description**
    
    **DATAWORKS\_SESSION\_DISABLE**
    
    This parameter applies to scenarios where you run tests directly in the development environment. Valid values:
    
    -   `true`: A new Java Database Connectivity (JDBC) connection is created each time an SQL statement is run.
        
    -   `false` (default): The same JDBC connection is reused when a user runs different SQL statements in a node.
        
    
    **Note**
    
    If this parameter is set to `false`, the `yarn applicationId` of Hive is not printed. To print the `yarn applicationId`, set this parameter to `true`.
    
    **FLOW\_SKIP\_SQL\_ANALYZE**
    
    The method used to execute SQL statements. Valid values:
    
    -   `true`: Multiple SQL statements are executed each time.
        
    -   `false` (default): One SQL statement is executed each time.
        
    
    **Note**
    
    This parameter can be used only for test runs in the development environment.
    
    **priority**
    
    The priority. The default value is 1.
    
    **queue**
    
    The scheduling queue to which jobs are submitted. The default queue is `default`. For more information about EMR YARN, see [Basic queue configurations](/help/en/emr/emr-on-ecs/user-guide/yarn-schedulers#section-4sc-0ej-keo).
    
    #### **Execute the SQL task**
    
    1.  In the **Computing Resource** section of **Run Configuration**, configure the **Computing Resource** and **Resource Group**.
        
        **Note**
        
        -   You can also configure **Scheduling CUs** based on the resources that are required for task execution. The default value is `0.25`.
            
        -   To access data sources in a public network or a VPC, you must use a scheduling resource group that has passed the connectivity test with the data source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
            
        
    2.  In the parameter dialog box on the toolbar, select the data source and click **Run** to run the SQL task.
        
    
2.  To run the node task on a schedule, configure the scheduling properties as required. For more information, see [Configure node scheduling](/help/en/dataworks/user-guide/node-scheduling/).
    
3.  After you configure the node task, publish the node. For more information, see [Publish nodes and workflows](/help/en/dataworks/user-guide/task-release/).
    
4.  After the task is published, you can view the running status of the auto triggered task in the Operation Center. For more information, see [Get started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    

## FAQ

-   **Q: Why does the "Error executing query" message appear?**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4566690671/p1017658.png)
    
    A: Ensure that the cluster is an earlier version of a Hadoop-based data lake cluster.
    
-   **Q: Why does a connection timeout occur when the node runs?**
    
    A: Ensure network connectivity between the **resource group** and the **cluster**. Go to the computing resource list page to initialize the resource. In the dialog box that appears, click **Re-initialize** and verify that the initialization is successful.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4566690671/p1017622.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4566690671/p1017643.png)
