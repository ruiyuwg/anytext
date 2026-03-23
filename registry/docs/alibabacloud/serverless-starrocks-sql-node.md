You can create an E-MapReduce (EMR) StarRocks SQL node. This node uses a distributed SQL query engine that is based on **EMR Serverless StarRocks computing resources** to process structured data and improve job execution efficiency.

## Applicability

-   **Computing resource**: Only [EMR Serverless StarRocks computing resources](/help/en/dataworks/user-guide/binding-serverless-starrocks-computing-resources) are supported. Ensure that the resource group and the computing resources can connect to each other over the network.
    
-   **Resource group**: Only [Serverless resource groups](/help/en/dataworks/dataworks-resource-group-overview#c47e4feb45n5u) can be used to run this type of task.
    
-   (Optional) If you are a Resource Access Management (RAM) user, ensure that you have been added to the workspace for task development and have been assigned the **Developer** or **Workspace Administrator** role. The Workspace Administrator role has extensive permissions. Grant this role with caution. For more information about adding members, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
    > If you use an Alibaba Cloud account, you can skip this step.
    

## **Create a node**

For more information, see [Create a node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).

## Develop the node

When you develop the code for a node in the SQL editing area, you can define variables using the **${variable\_name}** format and assign a value to each variable in the **Scheduling Parameters** section under **Scheduling** on the right side of the node editing page. This lets you dynamically pass parameters to the code in scheduling scenarios. For more information about how to use scheduling parameters, see [Supported formats for scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters). The following is an example.

```
SHOW TABLES; 
-- Use ${var} to define a variable named var. If you assign the value ${yyyymmdd} to this variable, you can create a table with the data timestamp as a suffix.
CREATE TABLE IF NOT EXISTS userinfo_new_${var} (
  ip STRING COMMENT'IP address',
  uid STRING COMMENT'User ID'
)PARTITIONED BY(
    dt STRING
); -- You can use this with scheduling parameters.
```

**Note**

The maximum size of an SQL statement is 130 KB.

## Test the node

1.  Configure test properties.
    
    In the ****Run Configuration**** section on the right side of the node, configure **Computing Resource** and **Resource Group**. The parameters are described as follows.
    
    **Parameter**
    
    **Description**
    
    **Computing Resource**
    
    Select the associated **EMR Serverless StarRocks computing resource**. If no computing resources are available, select **Create Computing Resource** from the drop-down list.
    
    **Important**
    
    Ensure that the computing resource and the resource group can connect to each other over the network. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
    
    **Resource Group**
    
    Select the resource group that passed the connectivity test when you attached the computing resource.
    
    **Script Parameters**
    
    When you configure the node content, you can define variables using the `${Parameter Name}` format. You must then configure the **Parameter Name** and **Parameter Value** in the **Script Parameters** section. At runtime, the variable is dynamically replaced with its actual value. For more information, see [Supported formats for scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters).
    
2.  Run the node for testing.
    
    To run the node task, click **Save** and then click **Run**.
    

## Next steps

-   [Schedule a node](/help/en/dataworks/user-guide/node-scheduling/): If a node in the project folder needs to run periodically, you can set the **Scheduling Policies** and configure scheduling properties in the **Scheduling** section on the right side of the node page.
    
-   [Publish a node](/help/en/dataworks/user-guide/task-release/): If the task needs to run in the production environment, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2728034471/p932965.png) icon to publish the task. A node in the project folder runs on a schedule only after it is published to the production environment.
    
-   **Node O&M**: After you publish the task, you can view the status of the auto triggered task in the Operation Center. For more information, see [Get started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
