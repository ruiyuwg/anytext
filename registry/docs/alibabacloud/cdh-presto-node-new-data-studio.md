In DataWorks, a CDH Presto node is a distributed SQL query engine used for real-time data analytics on your CDH cluster. This topic explains how to configure and use a CDH Presto node.

## Prerequisites

-   You have created an Alibaba Cloud CDH cluster and bound it to a DataWorks workspace. For more information, see [Data Studio: Associate a CDH computing resource](/help/en/dataworks/user-guide/bind-cdh-computing-resources).
    
    **Important**
    
    Ensure the Presto component is installed on your CDH cluster and that you configured its settings when you bound the cluster.
    
-   (Optional) If you are using a RAM user, you must add the user to the workspace and grant them the **Developer** or **Workspace Administrator** role. The Workspace Administrator role has extensive permissions and must be granted with caution. For more information about how to add members to a workspace, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
    **Note**
    
    If you are using your root account, you can skip this step.
    
-   You have configured a Hive data source in DataWorks and passed the connectivity test. For more information, see [Data Source Management](/help/en/dataworks/user-guide/add-and-manage-data-sources/).
    

## **Create a node**

For instructions, see [Create a node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).

## **Node development**

Develop your task code in the SQL editor. You can define variables in the code using the **${variable\_name}** format and assign values to them in **Scheduling configuration** > **Scheduling parameters** on the right side of the node editor. This allows you to dynamically pass parameters for scheduled runs. To learn more about scheduling parameters, see [Sources and expressions of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters). For example:

```
SHOW TABLES;

SELECT * FROM userinfo ;
-- You can use scheduling parameters.
SELECT '${var}'; 
```

## **Debug the node**

1.  In **Run Configuration** > **Compute resource**, set the **Compute resource** and **Resource group**.
    
    1.  For **Compute resource**, select your registered CDH cluster.
        
    2.  For **Resource group**, select a scheduling resource group that passed the data source connectivity test. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
        
2.  On the node editor's toolbar, click **Run**.
    

## Next steps

-   [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/): To run a node on a recurring schedule, configure its **Time Property** and related scheduling properties in the **Scheduling configuration** panel on the right side of the page.
    
-   [Publish a node](/help/en/dataworks/user-guide/task-release/): To publish a node to the production environment, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2728034471/p932965.png) icon. Only nodes that are published to the production environment are scheduled.
    
-   **Task O&M**: After you publish a node, you can monitor its scheduled runs in the O&M Center. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
