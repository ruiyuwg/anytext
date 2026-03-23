The DataWorks E-MapReduce (EMR) Hive node supports batch analysis of large-scale data. It operates on data stored in distributed systems to simplify big data processing and improve development efficiency. In an EMR Hive node, you can use SQL-like statements to read, write, and manage large datasets. This helps you efficiently analyze and develop tasks that involve massive amounts of log data.

## Prerequisites

-   You have created an Alibaba Cloud EMR cluster and bound it to DataWorks. For more information, see [Data Studio: Associate an EMR computing resource](/help/en/dataworks/user-guide/bind-emr-computing-resources).
    
-   (Optional) If you are a Resource Access Management (RAM) user, ensure that you have been added to the workspace for task development and have been assigned the **Developer** or **Workspace Administrator** role. The Workspace Administrator role has extensive permissions. Grant this role with caution. For more information about adding members, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
    > If you use an Alibaba Cloud account, you can skip this step.
    
-   You have configured a Hive data source in DataWorks and verified its connectivity. For more information, see [Data Source Management](/help/en/dataworks/user-guide/add-and-manage-data-sources/).
    

## Limitations

-   This type of task can be scheduled only on [serverless resource groups](/help/en/dataworks/dataworks-resource-group-overview#c47e4feb45n5u) (Recommended) or exclusive resource groups.
    
-   To manage metadata for DataLake or custom clusters in DataWorks, you must first configure EMR-HOOK on the cluster. For more information about how to configure EMR-HOOK, see [Configure EMR-HOOK for Hive](/help/en/emr/emr-on-ecs/user-guide/hive-uses-the-extension-to-record-data-consanguinity-and-access).
    
    **Note**
    
    If EMR-HOOK is not configured on the cluster, DataWorks cannot display real-time metadata, generate audit logs, show data lineage, or perform EMR-related administration tasks.
    

## Step 1: Develop an EMR Hive node

You can develop the EMR Hive node on the node editing page.

### **Develop the SQL code**

You can develop the task code in the SQL editing area. In your code, you can use the **${variable\_name}** format to define variables and then assign a value to each variable in the **Scheduling Configuration** pane > **Scheduling Parameters** section on the right side of the node editing page. This lets you dynamically pass parameters to the code in scheduling scenarios. For more information about the supported formats for scheduling parameters, see [Supported formats for scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters). The following is an example.

```
SHOW  TABLES ; 
SELECT '${var}'; --Use with scheduling parameters.
SELECT * FROM userinfo ;
```

**Note**

The maximum size of an SQL statement is 130 KB.

## Step 2: Configure the EMR Hive node

### **(Optional) Configure advanced parameters**

You can configure the unique property parameters listed in the following table. These settings are located in the **EMR Node Parameters** > **DataWorks Parameters** section of the **Scheduling Configuration** pane on the right.

**Note**

-   The available advanced parameters vary depending on the EMR cluster type, as shown in the following tables.
    
-   You can configure more [open-source Spark property parameters](https://spark.apache.org/docs/latest/configuration.html) in the **EMR Node Parameters** > **Spark Parameters** section of the **Scheduling Configuration** pane on the right.
    

##### **DataLake clusters/Custom clusters: EMR on ECS**

**Advanced parameter**

**Description**

**queue**

The scheduling queue to which jobs are submitted. The default queue is default. For more information about EMR YARN, see [Basic queue configuration](/help/en/emr/emr-on-ecs/user-guide/yarn-schedulers#section-4sc-0ej-keo).

**priority**

The priority. The default value is 1.

**FLOW\_SKIP\_SQL\_ANALYZE**

The execution mode for SQL statements. Valid values:

-   `true`: Executes multiple SQL statements at a time.
    
-   `false` (Default): Executes one SQL statement at a time.
    

**Note**

This parameter is supported only for test runs in the development environment.

**DATAWORKS\_SESSION\_DISABLE**

Applies to direct test runs in the development environment. Valid values:

-   `true`: Creates a new Java Database Connectivity (JDBC) connection each time an SQL statement is run.
    
-   `false` (Default): Reuses the same JDBC connection when a user runs different SQL statements in the same node.
    

**Note**

If this parameter is set to `false`, the Hive `yarn applicationId` is not printed. To print the `yarn applicationId`, set this parameter to `true`.

**Other**

You can also append custom Hive connection parameters directly in the advanced configuration section.

##### **Hadoop clusters: EMR on ECS**

**Advanced parameter**

**Description**

**queue**

The scheduling queue to which jobs are submitted. The default queue is default. For more information about EMR YARN, see [Basic queue configuration](/help/en/emr/emr-on-ecs/user-guide/yarn-schedulers#section-4sc-0ej-keo).

**priority**

The priority. The default value is 1.

**FLOW\_SKIP\_SQL\_ANALYZE**

The execution mode for SQL statements. Valid values:

-   `true`: Executes multiple SQL statements at a time.
    
-   `false` (Default): Executes one SQL statement at a time.
    

**Note**

This parameter is supported only for test runs in the development environment.

**USE\_GATEWAY**

Specifies whether to submit jobs from this node through a gateway cluster. Valid values:

-   `true`: Submits jobs through a gateway cluster.
    
-   `false` (Default): Does not submit jobs through a gateway cluster. Jobs are submitted to the header node by default.
    

**Note**

If the cluster where this node resides is not associated with a gateway cluster, setting this parameter to `true` will cause subsequent EMR job submissions to fail.

To run the node task on a schedule, you can configure its scheduling properties. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).

## Step 3: Test and run the node

#### **Execute the SQL task**

1.  In ****Run Configuration****, under **Computing Resource**, configure **Computing Resource** and **Resource Group**.
    
    **Note**
    
    -   You can also set the **Scheduling CUs** based on the resources the task requires. The default value is `0.25`.
        
    -   To access data sources over the public internet or in a Virtual Private Cloud (VPC), you must use a scheduling resource group that has passed the connectivity test with the data source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
        
    
2.  On the toolbar, in the parameter dialog box, select your Hive data source and click **Run** to execute the SQL task.
    
    **Note**
    
    When you query data using an EMR Hive node, a query can return a maximum of `10,000` records. The total data size cannot exceed `10 MB`.
    
3.  Click the **Save** button.
    

## More operations

1.  After you configure the node task, you can publish the node. For more information, see [Publish nodes or workflows](/help/en/dataworks/user-guide/task-release/).
    
2.  After the task is published, you can view the status of the auto triggered task in the Operation Center. For more information, see [Get started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    

## FAQ

**Q: Why does a connection timeout (ConnectException) occur when I run a node?**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1376690671/p1017620.png)

A: Ensure network connectivity between the **resource group** and the **cluster**. Go to the computing resource list page to initialize the resource. In the dialog box that appears, click **Re-initialize** and verify that the initialization is successful.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4566690671/p1017622.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4566690671/p1017643.png)
