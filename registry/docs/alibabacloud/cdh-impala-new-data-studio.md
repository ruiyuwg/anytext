In DataWorks, a CDH Impala Node lets you write and run Impala SQL scripts. It offers faster query performance than CDH Hive. This topic explains how to configure and use a CDH Impala Node.

## Prerequisites

-   You have created an Alibaba Cloud CDH cluster and bound it to a DataWorks workspace. For more information, see [Data Studio: Associate a CDH computing resource](/help/en/dataworks/user-guide/bind-cdh-computing-resources).
    
    **Important**
    
    The Impala component is installed on your CDH cluster, and its connection information is configured during cluster binding.
    
-   (Optional) If you are using a RAM user, you must add the user to the workspace and grant them the **Developer** or **Workspace Administrator** role. The Workspace Administrator role has extensive permissions and must be granted with caution. For more information about how to add members to a workspace, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
    **Note**
    
    If you are using your root account, you can skip this step.
    
-   You have configured a Hive data source in DataWorks and passed the connectivity test. For more information, see [Data Source Management](/help/en/dataworks/user-guide/add-and-manage-data-sources/).
    

## **Create a node**

For instructions, see [Create a node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).

## **Develop a node**

Write task code in the SQL editor. You can define variables in your code by using the **${VariableName}** format, and then assign values to them in **Scheduling Configuration** > **Scheduling Parameters** on the right side of the node editor page. This enables dynamic parameter passing for scheduled runs. For more information about Scheduling Parameters, see [Sources and expressions of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters). Example:

```
SHOW TABLES;

SELECT * FROM userinfo ;
-- You can use this with Scheduling Parameters.
SELECT '${var}'; 
```

## **Debug a node**

1.  In **Run Configuration** > **Compute Resource**, configure the **Compute Resource** and **Resource Group**.
    
    1.  For **Compute Resource**, select the CDH Cluster that you registered in DataWorks.
        
    2.  For **Resource Group**, select a Scheduling Resource Group that has a successful connection to your data source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
        
2.  On the toolbar at the top of the node editor page, click **Run**.
    

## Next steps

-   [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/): To run a node on a recurring schedule, configure its **Time Property** and related scheduling properties in the **Scheduling configuration** panel on the right side of the page.
    
-   [Publish a node](/help/en/dataworks/user-guide/task-release/): To publish a node to the production environment, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2728034471/p932965.png) icon. Only nodes that are published to the production environment are scheduled.
    
-   **Task O&M**: After you publish a node, you can monitor its scheduled runs in the O&M Center. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
