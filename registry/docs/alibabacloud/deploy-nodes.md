This topic describes how to deploy nodes in a workspace that is in standard mode.

## Prerequisites

The node that you want to deploy is committed.

## Background information

After you commit a node in a workspace that is in basic mode, the system automatically schedules the node in the production environment. After you commit a node in a workspace that is in standard mode, the node takes effect only in the development environment, and the system does not automatically schedule the node in the development environment. You must deploy the node to the production environment before the node can be scheduled to run periodically.

**Note**

All operations that are committed on the DataStudio page enter the to-be-deployed state on the Create Deploy Task page. On the Create Deploy Task page, you can deploy the operations that are related to files to the production environment.

1.  DataWorks provides the following types of built-in checks that can be performed before a node is deployed:
    
    -   Code review: If you enable the forcible code review feature for the workspace to which the node belongs, the node can be deployed only after the node passes the code review. For more information, see [Code review](/help/en/dataworks/user-guide/code-review#task-1961915).
        
    -   Smoke testing: If you enable the forcible smoke testing feature for the workspace to which the node belongs, the node can be deployed only after the node passes the smoke testing. For more information, see [Perform smoke testing](/help/en/dataworks/user-guide/perform-smoke-testing#task-2230073).
        
    -   Extension-based check: If you enable the extension-based check feature for the workspace to which the node belongs, the node can be deployed only after the node passes the extension-based check. For more information, see [Overview](/help/en/dataworks/overview-9#task-2118742).
        
    -   Check item-based check: If you enable a check item for the node in Data Governance Center, the node can be deployed only after the node passes the check. For more information, see [Configure check items](/help/en/dataworks/user-guide/create-and-configure-check-items#task-2113004).
        
2.  DataWorks supports the following scenarios for node deployment:
    
    -   Deploy nodes in a workspace that is in standard mode: DataWorks allows you to deploy a node in a workspace that is in standard mode from the development environment to the production environment.
        
    -   Deploy nodes across workspaces: DataWorks allows you to deploy a node across workspaces that are in basic mode, belong to the same Alibaba Cloud account, and reside in the same region.
        
    -   Deploy nodes across clouds: DataWorks allows you to deploy a node across Alibaba Cloud accounts, regions, or cloud platforms. For example, you can deploy a node across Alibaba Finance Cloud and Alibaba Gov Cloud.
        

**Note**

This topic describes the deployment process of nodes in a workspace in standard mode.

## Usage notes

-   The time when a node is deployed affects the time when the instances that are generated for the node take effect. If you deploy a node during the period from 23:30 to 24:00 on the current day, instances that are generated for the node take effect on the third day after the deployment regardless of whether the Instance Generation Mode parameter for the node is set to Next Day or Immediately After Deployment. For more information about the instance generation mode, see [Configure immediate instance generation for a task](/help/en/dataworks/user-guide/configure-immediate-instance-generation-for-a-node#concept-w3k-fkw-tfb).
    
-   Users who want to deploy nodes must be grant the required permissions. Developers can create deployment tasks for nodes that need to be deployed, but only users who are granted the O&M permissions can deploy the nodes.
    
-   You can manage a node deployment process. Whether the deployment operation is successful depends on the permissions of the role that is used to perform the operation and the specified deployment process. If the deployment operation fails, you can check the status of the deployment task on the **Deploy Tasks** page.
    
-   You can deploy a node only after the node is committed. A node can enter the to-be-deployed state on the Create Deploy Task page only if the node is committed.
    

## Deploy a node in a workspace that is in standard mode

1.  Go to the **DataStudio** page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Development**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Development**.
    
2.  Deploy a node.
    
    After a node passes the built-in checks, you can go to the **Create Deploy Task** page and deploy the node on which a change operation is performed to the production environment. The following deployment methods are supported:
    
    -   To deploy a node, click **Deploy** in the Actions column of the node.
        
    -   To deploy multiple nodes at a time, select the nodes and click **Add to List** in the lower part of the Create Deploy Task page.
        
    
    **Note**
    
    -   Developers can create deployment tasks for nodes that need to be deployed, but only users who are granted the O&M permissions can deploy the nodes on the **Deploy Tasks** page.
        
    -   If you enable a check for a node, the node can be deployed only after the node passes the check.
        
    
3.  View the deployment result.
    
    After you click **Deploy**, you can view the deployment result on the **Deploy Tasks** page.
    
    **Note**
    
    Whether the deployment operation is successful depends on the permissions of the role that is used to perform the operation and the specified deployment process. If the deployment operation fails, you can check the status of the deployment task on the Deploy Tasks page.
    
4.  Cancel the deployment.
    
    If a node does not need to be deployed or fails to be deployed, you can perform the following operations to cancel the deployment:
    
    -   To cancel the deployment of a node that waits to be deployed, click Cancel Deployment in the Actions column of the node on the **Create Deploy Task** page.
        
    -   To cancel the deployment of a node that fails to be deployed, click View Details in the Actions column of the node on the **Deploy Tasks** page, and then click **Cancel Deployment**.
        
    
5.  View the version details of the node to be deployed.
    
    You can go to the **Create Deploy Task** page, find the node whose version details you want to view, and then click View in the Actions column to go to the Compare Versions page. On the Compare Versions page, you can compare the version of the node to be deployed with the version of the node that is already run in the production environment, and you can view the differences between the code or scheduling configurations of the versions of the node. You can switch between different versions of the node for comparison.
    
    For more information about the parameters that are related to version comparison, see [Compare the versions of a node](/help/en/dataworks/user-guide/view-version-information-about-a-node#section-84o-9te-b4m).
