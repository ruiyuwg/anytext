Spark SQL is a distributed SQL query engine for processing structured data and improving job execution efficiency. The CDH Spark SQL node in DataWorks lets you develop CDH Spark SQL tasks, configure periodic scheduling, and integrate them with other jobs.

## Prerequisites

-   You have created an Alibaba Cloud CDH cluster and bound it to a DataWorks workspace. For more information, see [Data Studio: Associate a CDH computing resource](/help/en/dataworks/user-guide/bind-cdh-computing-resources).
    
    **Important**
    
    Ensure the Spark component is installed on your CDH cluster and that you set the Spark-related configurations when binding the cluster.
    
-   (Optional) If you are using a RAM user, you must add the user to the workspace and grant them the **Developer** or **Workspace Administrator** role. The Workspace Administrator role has extensive permissions and must be granted with caution. For more information about how to add members to a workspace, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
    **Note**
    
    If you are using your root account, you can skip this step.
    
-   You have configured a Hive data source in DataWorks and passed the connectivity test. For more information, see [Data Source Management](/help/en/dataworks/user-guide/add-and-manage-data-sources/).
    

## **Create a node**

For instructions, see [Create a node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).

## **Develop node**

Develop task code in the SQL editor. You can define variables using the **${variable\_name}** format and then assign their values on the right side of the node editor under **Scheduling configuration** > **Scheduling parameter**. This enables dynamic parameters for scheduled tasks. For more information, see [Sources and expressions of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters).

```
CREATE TABLE IF NOT EXISTS test_spark.test_lineage_table_f1 (`id` BIGINT, `name` STRING)
PARTITIONED BY (`ds` STRING);
CREATE TABLE IF NOT EXISTS test_spark.test_lineage_table_t2 AS SELECT * FROM test_spark.test_lineage_table_f1;
INSERT INTO test_spark.test_lineage_table_t2 SELECT id,${var} FROM test_spark.test_lineage_table_f1;
```

**Note**

-   The example creates the `test_lineage_table_f1` and `test_lineage_table_t2` tables in the `test_spark` database and copies data from the `test_lineage_table_f1` table to the `test_lineage_table_t2` table. This is an example. Adapt it to your database environment.
    
-   The `${var}` parameter provides the value for the `name` field.
    

## **Debug node**

1.  In the **Run Configuration** **Compute resources** section, configure the **Compute resources** and **Resource group**.
    
    1.  Compute resources: Select the name of the CDH cluster registered in DataWorks.
        
    2.  Resource group: Select the scheduling resource group that passed the data source connectivity test. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
        
2.  On the toolbar, click **Run**.
    

## Next steps

-   [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/): To run a node on a recurring schedule, configure its **Time Property** and related scheduling properties in the **Scheduling configuration** panel on the right side of the page.
    
-   [Publish a node](/help/en/dataworks/user-guide/task-release/): To publish a node to the production environment, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2728034471/p932965.png) icon. Only nodes that are published to the production environment are scheduled.
    
-   **Task O&M**: After you publish a node, you can monitor its scheduled runs in the O&M Center. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
