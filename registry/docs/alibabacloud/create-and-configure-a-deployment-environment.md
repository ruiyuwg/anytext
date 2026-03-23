The Deploy Center in DataWorks is an enhancement of the task publishing feature in Data Development. It is used to publish objects, such as nodes, functions, resources, and widgets, across multiple environments. You can use this feature to sync objects from a source workspace to a target workspace with a single click. This topic describes the common scenarios, logic, and publishing process of the Deploy Center.

## Function introduction

In the Deploy Center, a publishing operation treats objects such as nodes, functions, resources, and widgets as the minimum execution units. Associated business flows and node dependencies are deployed to the target workspace at the same time. For more information, see [Publishing logic](#section-3qk-b23-3ln).

Based on different publishing environments, the Deploy Center in DataWorks supports [same-workspace publishing](/help/en/dataworks/user-guide/publish-with-workspace), [cross-workspace publishing](/help/en/dataworks/user-guide/create-a-deployment-task-to-deploy-the-objects-across-workspaces), and [cross-cloud publishing](/help/en/dataworks/user-guide/create-a-deployment-task-to-deploy-the-objects-across-clouds).

-   [Same-workspace publishing](/help/en/dataworks/user-guide/publish-with-workspace)
    
    This feature is available only for workspaces using the **standard mode with the new Data Studio**. It allows you to batch publish objects like nodes, functions, resources, and widgets from the development environment to the production environment within the same workspace.
    
-   [Cross-workspace publishing](/help/en/dataworks/user-guide/create-a-deployment-task-to-deploy-the-objects-across-workspaces)
    
    Cross-workspace deployment is mainly used to deploy objects such as nodes, functions, resources, and components from one basic-mode workspace to another within the same Alibaba Cloud account and region. This feature also allows you to implement development and production environment isolation for basic-mode workspaces. For more information, see [Achieve environment isolation in basic mode](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#section-kgg-njx-68t).
    
-   [Cross-cloud publishing](/help/en/dataworks/user-guide/create-a-deployment-task-to-deploy-the-objects-across-clouds)
    
    This feature supports the deployment of objects, such as nodes, functions, resources, and components, across accounts, regions, or cloud platforms. It is available only for workspaces that use the **legacy DataStudio**. In essence, this feature migrates and deploys nodes from a source workspace to a target workspace that resides in a different region, account, or cloud platform.
    

## Publishing change logic

If a node has dependencies, its ancestor nodes must be published to the target workspace before the descendant node can be published. The changes to a published node are as follows:

-   When you publish a node, the system replaces the source workspace name prefix with the target workspace name in the inputs and outputs of all related nodes. If the node has cross-workspace dependencies, you can also configure the **Dependency Mappings** parameter for the publishing environment. The ancestor dependencies, descendant dependencies, and input and output names of the node change after publishing based on your configuration. For more information, see:
    
    -   [No cross-workspace dependencies](#fae3056ece07s)
        
    -   [Cross-workspace dependencies exist, but no cross-workspace dependency mapping is set](#fe5afafc95wh3)
        
    -   [Cross-workspace dependencies exist, and cross-workspace dependency mapping is set](#c846fbefbfz1y)
        
-   When you publish a task that uses a MaxCompute engine, the system modifies the task code. It replaces any mention of the source workspace name with the target workspace name. For more information, see [Code changes for tasks that use a MaxCompute engine](#section-5si-o1l-aht).
    

**Note**

-   To configure dependency mappings, see [Configure a publishing environment](/help/en/dataworks/user-guide/create-and-configure-a-deployment-environment#section-ypg-m92-ord). To configure scheduling dependencies, see [Configure scheduling dependencies](/help/en/dataworks/user-guide/scheduling-dependency-configuration-guide#concept-2371025).
    
-   This topic uses output names in the `Workspace Name.Node Name` format as examples. The actual output names may vary.
    

### **No cross-workspace dependencies**

The nodes in `project1` have no cross-workspace dependencies. All nodes from `project1` are published to `project2`.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7766206671/CAEQUBiBgICWmMyX2RkiIDI4ODNmNDdkNWVmMDQyM2NhNDZhMWEyZGM1YWIzNDM55138010_20250506113514.195.svg)

After publishing, the `project1` prefix in all node input and output names is changed to `project2`. For example:

-   The input name of task\_A changes from `project1_root` to `project2_root`.
    
-   The output name of task\_A changes from `project1.task_A` to `project2.task_A`.
    

### **Cross-workspace dependencies exist, but no cross-workspace dependency mapping is set**

`project1.task_A` has a cross-workspace dependency on `project2.task_A`. All nodes from `project1` are published to `project3`.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7766206671/CAEQUBiBgMDLv8WX2RkiIGQ0NGQ3YTZhY2I5NDQ0OGQ4NWI0NDZiMGM5ZWNjODYx5138010_20250506131324.593.svg)

After publishing, the node changes are as follows:

-   Node inputs and outputs: The `project1` prefix in all node input and output names is changed to `project3`.
    
-   Node cross-workspace dependencies: `project1.task_A` originally had a cross-workspace dependency on `project2.task_A`. After publishing, `project3.task_A` still has a cross-workspace dependency on `project2.task_A`.
    

### **Cross-workspace dependencies exist, and cross-workspace dependency mapping is set**

`project1.task_A` has a cross-workspace dependency on `project2.task_A`. All nodes from `project1` are published to `project4`, and a dependency mapping is set from `project2` to `project3`.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7766206671/CAEQUBiBgIDJ9sWX2RkiIDJhOTVlNWJmNjFlOTQ5YmI4MzI0ZjI1MDY1NmI5MzYx5138010_20250506132619.545.svg)

After publishing, the node changes are as follows:

-   Node inputs and outputs: The `project1` prefix in all node input and output names is changed to `project4`.
    
-   Node cross-workspace dependencies: `project1.task_A` originally had a cross-workspace dependency on `project2.task_A`. After publishing, the cross-workspace dependency of `project4.task_A` is changed to `project3.task_A`.
    

**Important**

If a node in the source workspace uses a **system output name** for a cross-workspace dependency, the publish operation may fail. This occurs if the **Scheduling** > **Output Name of Ancestor Node** list in the node's configuration includes a system output name from another workspace. To resolve this, modify the dependency to use a non-system output name.

-   **Do not** reference system-generated output names:
    
    In workspaces where the **Use Data Studio (New Version)** option is **not** enabled, the **system output name** is in the format `Workspace Name.File ID_out`, such as `shanghai_simple02.504822000_out`.
    
-   Reference output names in the following formats:
    
    -   `Workspace Name.Output Table Name` (Recommended)
        
    -   `Workspace Name.Node Name`
        

### **Code changes for tasks that use a MaxCompute engine**

When you publish a task that uses a MaxCompute engine, such as an ODPS SQL or ODPS Spark task, to the target workspace, the system replaces the source workspace name in the task code with the target workspace name during execution.

For example, `task_A` is an ODPS SQL or MaxCompute SQL node. In `project1`, the code to query `table_A` is `SELECT * FROM project1.tableA`. All nodes from `project1` are then published to `project2`.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8766206671/CAEQUBiBgIDP1MCX2RkiIDRiNzdiZGQ3YzVkODQzMDNhZTNhMWY0NDJhOGQ0YjY55138010_20250506133949.491.svg)

After the node is published to `project2`, the code to query `table_A` is changed to `SELECT * FROM project2.tableA`.
