This topic describes how to use the deployment process to publish new, updated, or deleted tasks to the production environment.

## **Function introduction**

The deployment panel is used to manage how production tasks are published and unpublished. Its pre-deployment check process lets you specify [custom check items](/help/en/dataworks/user-guide/operation-check-process-control) to enhance task management in the scheduling system. You can use the deployment process to publish new scheduling nodes to the production scheduling system, which enables automatic, recurring scheduling. To ensure the stability of production tasks, you must first update the task code in the Data Studio interface. Then, you can publish the updates to the production environment using the deployment process. This process standardizes updates and prevents unauthorized modifications to production tasks.

Two deployment modes are supported: **incremental deployment** and **full deployment**.

-   **Incremental deployment**: Deploys only the modified nodes. This mode is fast and suitable for scenarios in which you deploy one or a few nodes.
    
-   **Full deployment**: Deploys all nodes in the current workflow. This mode ensures the integrity and consistency of the entire workflow and is suitable for scenarios in which the entire workflow is changed.
    

## Prerequisites

Before you deploy a task, confirm that all nodes and workflows have been successfully debugged and run. You must also confirm that scheduling is configured for recurring workflows and tasks.

-   To create and develop manually triggered tasks and workflows, see [Create a node for a manually triggered workflow](/help/en/dataworks/user-guide/node-development-of-data-studio/#6a6847e43dqmu) and [Create a manually triggered workflow](/help/en/dataworks/user-guide/manual-workflow/).
    
-   To create and develop recurring tasks and workflows, see [Create a node for a scheduling workflow](/help/en/dataworks/user-guide/node-development-of-data-studio/#0f84404ea9o3b) and [Create a recurring workflow](/help/en/dataworks/user-guide/workflow#72baefd23b0ws).
    
-   To configure scheduling for recurring tasks and workflows, see [Node scheduling](/help/en/dataworks/user-guide/node-scheduling/).
    

## **Precautions**

-   The deployment time affects when task instances take effect. Changes made during the full instance generation period, from **23:30 to 24:00** daily, take effect on the **third day** after the operation.
    
-   Task deployment is subject to access control. Only users with O&M permissions can deploy a deployment package.
    
-   Task deployment is subject to process control. In addition to role-based permission limits, task deployment is also restricted by various check items in the deployment process. A deployment may not always succeed. You must make sure that the task is successfully deployed. If the deployment fails, you can check the deployment status on the **Deployment** panel.
    

## **Deploy a task**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  Go to the task details page.
    
    In Data Studio, find the node or workflow that you want to deploy and click it to open its details page.
    
3.  Deploy the task.
    
    On the node's toolbar, click the **Deploy** button to open the deployment process panel. You can choose to deploy the task to the development environment or also deploy it to the production environment.
    
    -   When the deployment process reaches the step of deploying to the development environment, a node ID is generated. You can then go to the Operation Center for the development environment to debug and run the node.
        
        **Important**
        
        The Operation Center for the development environment does not automatically schedule tasks to run. This means that tasks on the **Auto Triggered Nodes** page in the Operation Center for the development environment do not generate automatically scheduled recurring instances.
        
    -   When the deployment process reaches the step of deploying to the production environment, the node enters the production scheduling system for recurring scheduling. You can go to the Operation Center to view and manage the node.
        

## **Undeploy a task**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  Undeploy or delete the task.
    
    In Data Studio, find the node or workflow that you want to undeploy, right-click it, and select **Delete**. One of the following two situations occurs:
    
    -   If the task that you want to delete is **not deployed to production**: In the confirmation dialog box that appears, click **Confirm**. The task is removed from the directory tree and moved to the [recycle bin](/help/en/dataworks/user-guide/recycle-bin-for-data-studio).
        
    -   If the task that you want to delete is deployed to production: Clicking **Delete** opens the deployment panel. You must use the deployment process to publish the deletion operation to the corresponding environment for the operation to take effect.
        
        1.  When the deployment process reaches the **Dev Offline** step, the node is kept in the Data Development directory tree, but its node ID is removed. A version record for **Dev Offline** is generated.
            
        2.  When the deployment process reaches the **Prod Offline** step, the node deletion is published to the production environment, and the task in the production environment is also unpublished. After the task is unpublished from the production environment, you can decide whether to delete the node from the directory tree.
            

## **View deployment history**

On the deployment panel, you can click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2628787371/p852341.png) to view the historical deployment records of the task.

## What to do next: Node O&M

After a workflow or task node is published, you can click **Backfill Data** or **Perform O&M** in the deployment process.

-   **Backfill Data**: You can backfill data only for the current node. For more complex data backfill features, you can go to the Operation Center. For more information, see [Backfill data and view data backfill instances (new version)](/help/en/dataworks/user-guide/backfill-data-for-an-auto-triggered-node-and-view-data-backfill-instances-of-the-node).
    
-   Perform O&M: After a task is published, it automatically appears in the Operation Center. In the Operation Center, you can view the task's running status or manually trigger it to run. For more information, see [Operation Center](/help/en/dataworks/user-guide/operation-center-1/).
