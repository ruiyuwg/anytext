Impala is an SQL query engine that performs fast, real-time, and interactive queries on petabyte-scale data. This topic describes how to create an EMR Impala node in DataWorks for data development.

## Prerequisites

-   You have created an Alibaba Cloud EMR cluster and bound it to DataWorks. For more information, see [Data Studio: Associate an EMR computing resource](/help/en/dataworks/user-guide/bind-emr-computing-resources).
    
-   (Optional) If you are a Resource Access Management (RAM) user, ensure that you have been added to the workspace for task development and have been assigned the **Developer** or **Workspace Administrator** role. The Workspace Administrator role has extensive permissions. Grant this role with caution. For more information about adding members, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
    > If you use an Alibaba Cloud account, you can skip this step.
    
-   You have configured a Hive data source in DataWorks and verified its connectivity. For more information, see [Data Source Management](/help/en/dataworks/user-guide/add-and-manage-data-sources/).
    

## Limitations

-   This type of node can run only on [serverless resource groups](/help/en/dataworks/dataworks-resource-group-overview#c47e4feb45n5u) (recommended) or exclusive resource groups for scheduling.
    
-   EMR Impala nodes can run only on compute resources of the **legacy Data Lake (Hadoop)** cluster type. DataWorks **no longer supports** binding new Hadoop-type clusters. However, you can continue to use Hadoop clusters that are already bound.
    

## **Procedure**

1.  On the editor page of the EMR Impala node, you can develop the node as follows.
    
    #### **Develop SQL code**
    
    You can develop your task code in the SQL editing area. In your code, use the **${variable name}** format to define variables. Then, in the **Scheduling Parameters** section under **Scheduling Configuration** on the right side of the node editing page, assign a value to each variable. This lets you dynamically pass parameters to the code in scheduling scenarios. For more information, see [Supported formats for scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters). The following is an example.
    
    ```
    SHOW  TABLES;
    CREATE TABLE IF NOT EXISTS userinfo (
    ip STRING COMMENT 'IP address',
    uid STRING COMMENT 'User ID'
    )PARTITIONED BY(
    dt STRING
    ); 
    ALTER TABLE userinfo ADD IF NOT EXISTS PARTITION(dt='${bizdate}'); -- You can use scheduling parameters.
    SELECT * FROM userinfo;
    ```
    
    **Note**
    
    The maximum size of an SQL statement is 130 KB.
    
    #### **(Optional) Configure advanced parameters**
    
    You can configure the specific property parameters in the following table under **EMR Node Parameters** > **DataWorks Parameters** in the **Scheduling Configuration** section on the right side of the node.
    
    **Note**
    
    -   The advanced parameters vary based on the EMR cluster type, as shown in the following tables.
        
    -   For more information about [open-source Spark properties](https://spark.apache.org/docs/latest/configuration.html), you can configure them under **EMR Node Parameters** > **Spark Parameters** in the **Scheduling Configuration** section on the right side of the node.
        
    
    ##### **DataLake/Custom clusters: EMR on ECS**
    
    **Advanced parameter**
    
    **Description**
    
    **FLOW\_SKIP\_SQL\_ANALYZE**
    
    The method used to execute SQL statements. Valid values:
    
    -   `true`: Executes multiple SQL statements at a time.
        
    -   `false` (default): Executes one SQL statement at a time.
        
    
    **Note**
    
    This parameter is supported only for test runs in the development environment.
    
    **DATAWORKS\_SESSION\_DISABLE**
    
    This parameter applies to test runs in the development environment. Valid values:
    
    -   `true`: A new Java Database Connectivity (JDBC) connection is created each time an SQL statement is run.
        
    -   `false` (default): The same JDBC connection is reused when a user runs different SQL statements in a node.
        
    
    **Note**
    
    If this parameter is set to `false`, the Hive `yarn applicationId` is not printed. To print the `yarn applicationId`, set this parameter to `true`.
    
    **priority**
    
    The priority. The default value is 1.
    
    **queue**
    
    The scheduling queue to which jobs are submitted. The default queue is default. For more information about EMR YARN, see [Basic queue configurations](/help/en/emr/emr-on-ecs/user-guide/yarn-schedulers#section-4sc-0ej-keo).
    
    ##### **Hadoop clusters: EMR on ECS**
    
    **Advanced parameter**
    
    **Description**
    
    **FLOW\_SKIP\_SQL\_ANALYZE**
    
    The method used to execute SQL statements. Valid values:
    
    -   `true`: Executes multiple SQL statements at a time.
        
    -   `false` (default): Executes one SQL statement at a time.
        
    
    **Note**
    
    This parameter is supported only for test runs in the development environment.
    
    **USE\_GATEWAY**
    
    Specifies whether to submit jobs from this node through a gateway cluster. Valid values:
    
    -   `true`: Submits jobs through a gateway cluster.
        
    -   `false` (default): Submits jobs to the header node instead of through a gateway cluster.
        
    
    **Note**
    
    If the cluster where this node resides is not associated with a gateway cluster and you set this parameter to `true`, subsequent EMR job submissions will fail.
    
    #### **Execute the SQL node**
    
    1.  In **Run Configuration**, within the **Computing Resource** section, you can configure the **Computing Resource** and **Resource Group**.
        
        **Note**
        
        -   You can also **Schedule CUs** based on the resource requirements for task execution. The default CU is `0.25`.
            
        -   To access a data source over the public network or in a VPC, you must use the scheduling resource group that passed the connectivity test for the data source. For more information, see [Network connection solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
            
        
    2.  In the Parameters dialog box, select your Hive data source and click **Run** to execute the SQL task.
        
        **Note**
        
        When you query data using an EMR Impala node, a maximum of 10,000 data records can be returned. The total data size cannot exceed 10 MB.
        
    3.  Click **Save**.
        
    
2.  To run the node on a regular basis, you can configure its scheduling properties as needed. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).
    
3.  After you configure the node, you must publish it. For more information, see [Publish nodes or workflows](/help/en/dataworks/user-guide/task-release/).
    
4.  After the node is published, you can view the status of the auto triggered task in Operation Center. For more information, see [Get started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    

## FAQ

-   **Q: Why does the "Impala JDBC Url is Empty" error occur?**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6847690671/p1017651.png)
    
    A: Make sure that the Impala service is added to your cluster. The Impala service is available only to existing users.
    
-   **Q: Why does a connection timeout error occur when I run a node?**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6847690671/p1017654.png)
    
    A: Ensure network connectivity between the **resource group** and the **cluster**. Go to the computing resource list page to initialize the resource. In the dialog box that appears, click **Re-initialize** and verify that the initialization is successful.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4566690671/p1017622.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4566690671/p1017643.png)
