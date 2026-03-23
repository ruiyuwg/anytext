Trino is an open-source, distributed SQL query engine for interactive analytics queries across multiple data sources. You can develop and configure E-MapReduce (EMR) Trino nodes to perform large-scale multidimensional data aggregation or report analysis.

## Prerequisites

-   You have created an Alibaba Cloud EMR cluster and bound it to DataWorks. For more information, see [Data Studio: Associate an EMR computing resource](/help/en/dataworks/user-guide/bind-emr-computing-resources).
    
-   (Optional) If you are a Resource Access Management (RAM) user, ensure that you have been added to the workspace for task development and have been assigned the **Developer** or **Workspace Administrator** role. The Workspace Administrator role has extensive permissions. Grant this role with caution. For more information about adding members, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
    > If you use an Alibaba Cloud account, you can skip this step.
    

## Limitations

-   This type of task can be run only on a serverless resource group.
    
-   To manage metadata for DataLake or custom clusters in DataWorks, you must first configure EMR-HOOK on the cluster. For more information, see [Configure EMR-HOOK for Hive](/help/en/emr/emr-on-ecs/user-guide/hive-uses-the-extension-to-record-data-consanguinity-and-access).
    
    **Note**
    
    If EMR-HOOK is not configured on the cluster, DataWorks cannot display metadata in real time, generate audit logs, display data lineage, or perform EMR-related administration tasks.
    
-   If LDAP authentication is enabled for Trino, log on to the EMR Master node and download the keystore file from the /etc/taihao-apps/trino-conf directory. Then, log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, switch to the destination region. Find your workspace and click **Management** in the **Actions** column to go to the **Management Center**. In the navigation pane on the left, choose **Computing Resources**. Find your EMR cluster and click **Account Mapping**. Click **Edit Account Mapping**. On the edit page, click **Upload Keystore File** to upload the file.
    

## Procedure

1.  On the EMR Trino node editing page, perform the following steps.
    
    #### **Connector configuration**
    
    -   Before you can query MySQL tables, you must configure the built-in EMR Trino connector. For more information, see [MySQL connector](/help/en/emr/emr-on-ecs/user-guide/mysql-connector#task-2109853).
        
    -   Before you can query Hive tables, you must configure the built-in EMR Trino connector. For more information, see [Hive connector](/help/en/emr/emr-on-ecs/user-guide/hive-connector-1).
        
    -   To query data from other data sources, see [Configure connectors](/help/en/emr/emr-on-ecs/user-guide/configure-a-connector) for information about how to configure the built-in connectors.
        
    
    #### **Edit the SQL code**
    
    In the SQL editing area, write the code for the task. You can define variables in the \`${variable\_name}\` format. You can assign values to these variables in the **Schedule Parameter** section of the **Schedule Configuration** pane on the right. This lets you dynamically pass parameters when the node is scheduled. For more information about scheduling parameters, see [Supported formats for scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters). The following is an example.
    
    ```
    -- Usage
    -- SELECT * FROM <catalog>.<schema>.<table>;
    -- Parameter description
    -- <catalog> is the name of the data source to connect to.
    -- <schema> is the name of the database to use.
    -- <table> is the data table to query.
    -- For example, to view data in the hive_table table in the default database of a Hive data source
    -- Query a Hive table
    SELECT * FROM hive.default.hive_table;
    
    -- For example, to view data in the rt_user table in the self-managed rt_data database of a MySQL data source 
    -- Query a MySQL table  
    SELECT * FROM mysql.rt_data.rt_user;
    
    -- Join a Hive table and a MySQL table
    SELECT DISTINCT a.id, a.name,b.rt_name FROM hive.default.hive_table a INNER JOIN mysql.rt_data.rt_user b ON a.id = b.id;
    
    -- Query a Hive table using scheduling parameters
    SELECT * FROM hive.default.${table_name};
    ```
    
    #### **(Optional) Configure advanced parameters**
    
    In the **Schedule Configuration** pane on the right, choose **EMR Node Parameters** > **DataWorks Parameters** and configure the properties in the following table.
    
    **Note**
    
    For more open-source Spark properties, you can configure them in the **EMR Node Parameters** > **Spark Parameters** section of the **Schedule Configuration** pane on the right. For more information, see [Configuration](https://spark.apache.org/docs/latest/configuration.html).
    
    **Parameter**
    
    **Description**
    
    **FLOW\_SKIP\_SQL\_ANALYZE**
    
    The execution method for SQL statements. Valid values:
    
    -   `true`: Executes multiple SQL statements at a time.
        
    -   `false` (default): Executes one SQL statement at a time.
        
    
    **DATAWORKS\_SESSION\_DISABLE**
    
    Applies to scenarios where you directly run tests in the development environment. Valid values:
    
    -   `true`: Creates a new Java Database Connectivity (JDBC) connection each time an SQL statement is run.
        
    -   `false` (default): Reuses the same JDBC connection when a user runs different SQL statements within the same node.
        
    
    #### **Execute the SQL task**
    
    1.  In the **Computing Resource** section of the **Run Configuration** pane, configure the **Computing Resource** and **Resource Group** parameters.
        
        **Note**
        
        -   You can also configure **Schedule CUs** based on the resources that are required for the task. The default CU value is `0.25`.
            
        -   To access data sources over the public internet or in a VPC, you must use a schedule resource group that has passed the connectivity test with the data source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
            
        
    2.  In the toolbar, select the data source in the parameter dialog box and click **Run**.
        
        **Note**
        
        When you use an EMR Trino node to query data, the query result can contain a maximum of 10,000 rows, and the total data size cannot exceed 10 MB.
        
    
2.  To run the node task on a schedule, you can configure its scheduling properties as needed. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).
    
3.  After you configure the node, you must publish it. For more information, see [Publish nodes and workflows](/help/en/dataworks/user-guide/task-release/).
    
4.  After the task is published, you can view the running status of the auto triggered task in Operation Center. For more information, see [Get started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    

## FAQ

-   **Q: The node run fails due to a connection timeout.**
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4886690671/p1017662.png)
    
    A: Ensure network connectivity between the **resource group** and the **cluster**. Go to the computing resource list page to initialize the resource. In the dialog box that appears, click **Re-initialize** and verify that the initialization is successful.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4566690671/p1017622.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4566690671/p1017643.png)
