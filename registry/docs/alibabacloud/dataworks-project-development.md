A Workspace Directory is an organizational structure designed for team collaboration. It helps you manage assets like Node code and resources within your Workspace. You can use it to collaboratively develop Periodically Scheduled Tasks with a user experience that mimics a local file system. This document explains how to use the Workspace Directory.

## **Directory type comparison**

Data Studio provides Workspace Directories and Personal Directories to meet different development needs, helping you efficiently develop and manage data in various business scenarios. Choose the directory type that best fits your requirements.

**Type**

**Permission scope**

**Features**

**Use cases**

**Workspace Directory**

Workspace-level

-   Supports team-based collaborative development.
    
-   Supports creating Periodically Scheduled Tasks (Workflows/Nodes).
    
-   Nodes in this Directory belong to the Workspace.
    

For creating Periodically Scheduled Tasks in a Production Environment.

**Personal Directory**

User account-level

-   Supports individual code debugging.
    
-   Does not support creating Periodically Scheduled Tasks.
    
-   Files in this Directory are visible only to you.
    

Individual code development and debugging.

## **Go to the workspace directory**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the left-side navigation pane of the Data Studio page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2208852471/p854101.png), and then choose **Data Development** > **Workspace Directories**.
    

## **Directory management**

### **Create a directory structure**

You can design a Directory structure according to your Workspace standards and configure it in the Workspace Directory by following the steps below.

1.  On the **Workspace Directories** page, click **Create Directory...** on the right.
    
2.  In the **Create Directory** dialog box, configure its basic information.
    
    **Parameter**
    
    **Description**
    
    **Path**
    
    Specify the storage path for the Directory.
    
    **Name**
    
    Define the name of the Directory.
    

### **Manage directory tags**

The Workspace Directory allows you to categorize Directories using tags. These tags help distinguish between different Directory types and quickly filter for specific categories, improving management efficiency. For example, you can mark a Directory as a **Workflow** and then use that tag to quickly filter all Directories marked as **Workflow**.

1.  **Tag a directory**
    
    [In the Workspace Directory](#03409bbddcgnn), find the Directory you want to tag, right-click the Directory name, and select **Mark As** > **Workflow** from the context menu to mark the Directory as a **Workflow**. Similarly, you can mark a Directory as **Data Integration**, **MaxCompute**, **Hologres**, **Flink**, **Algorithm**, **General**, or **Custom**. This feature is mainly for compatibility with the Directory structure of the previous Data Development version, allowing you to quickly replicate the same structure.
    
2.  **Untag a directory**
    
    [In the Workspace Directory](#03409bbddcgnn), find a tagged Directory, right-click its name, and select **Untag** from the context menu to remove its tag.
    
3.  **Filter by tag**
    
    To filter Directories by a specific tag type, click the **...** > **Filter by Tag** icon to the right of **Workspace Directories**, select the desired tag types, and then click **OK**.
    

### **Focus mode**

Focus Mode is a feature in the Workspace Directory that reduces visual clutter. By pinning a specific Directory and hiding all others, it helps you concentrate, minimize distractions, and reduce the cognitive load of multitasking. You can enter and exit Focus Mode as described below.

1.  **Enter Focus Mode**.
    
    [In the Workspace Directory](#03409bbddcgnn), find the Directory you want to focus on, right-click its name, and select **Enter Focus Mode** from the context menu. The Workspace Directory will then display only the selected Directory.
    
2.  **Exit Focus Mode**.
    
    [In the Workspace Directory](#03409bbddcgnn), you can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057070471/p841062.png) icon or right-click the focused Directory and select **Exit Focus Mode**.
    

### **Create and find workflows and nodes**

#### **Create a workflow or node**

Within the Directory structure defined for the Workspace, members can create [Nodes](/help/en/dataworks/user-guide/node-development-of-data-studio/) or [Workflows](/help/en/dataworks/user-guide/workflow-orchestration/) for periodic scheduling.

1.  **Create a Workflow/Node**
    
    On the **Workspace Directories** page, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057070471/p841016.png)** > **Create Node...** or **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057070471/p841016.png)** > **Create Workflow...** on the right, and then select the type of Node or Workflow you need to develop.
    
2.  **Develop the Workflow/Node**
    
    Configuration varies for different task types. For detailed configuration instructions, see [Nodes](/help/en/dataworks/user-guide/node-development-of-data-studio/) or [Workflows](/help/en/dataworks/user-guide/workflow-orchestration/).
    

#### **Find a workflow or node**

The Workspace Directory provides several features to help you quickly find Nodes. These features improve search efficiency, allowing you to manage and develop data more effectively.

**1\. Filter by owner**

Click the **...** > **Show...** icon to the right of **Workspace Directories** and select **Show all** or **Show managed by me** to filter and display the desired Workflows or Nodes.

**2\. Find the currently open Workflow/Node**

Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5771174471/p917722.png) icon to the right of **Workspace Directories** to quickly find the currently open Workflow or Node in the Workspace Directory.

**3\. Search for a Workflow/Node**

Use the search box above the **Workspace Directories** to find a specific Workflow or Node by criteria such as name, Node ID, or Owner.

> A maximum of 2,048 search results can be displayed.

**4\. Search for a Node by code snippet**

Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6057070471/p841035.png) icon to the right of **Workspace Directories** to search for Nodes that contain a specific code snippet. For more information, see [Code search](/help/en/dataworks/user-guide/code-search-of-new-ide).

### **Batch operations on workflows and nodes**

**Important**

Batch Operations is available only in DataWorks Standard Edition and higher.

In daily development and O&M, you may encounter scenarios that require repetitive actions:

-   **Personnel changes**: When a project member changes, you need to reassign a large number of Nodes or resources to a new member.
    
-   **Environment migration or changes**: When underlying compute or storage resources (such as Data Sources or Scheduling Resource Groups) change, you need to update the configurations of all related Data Integration tasks.
    
-   **Uniform adjustment of scheduling properties**: Due to changes in business requirements, you need to uniformly modify the scheduling cycle, rerun properties, and other attributes for a group of tasks.
    
-   **Batch deployment and undeployment**: When a new module is launched, you need to Deploy dozens of related Nodes to the Production Environment at once.
    

The Batch Operations feature allows you to perform the same operation on multiple **Workflows**, **standalone Nodes**, and **Nodes within a Workflow** simultaneously, such as changing the Owner, modifying Scheduling Configuration, or Deploying in bulk.

1.  **Open the Batch Operations page**
    
    Click the **Batch Operations** icon ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8078591771/p1054572.png) to the right of **Workspace Directories** to open the Batch Operations page. If you select a Directory first, the **Directory** will be pre-filled.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8078591771/p1054618.png)
    
2.  **Filter and select target objects**
    
    On the **Batch Operations** page, you can quickly find the Nodes, resources, or functions you need to manage by filtering and selecting them.
    
    -   **Filter**: Use the search box at the top of the list and the **Filter** icon ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8078591771/p1054600.png) to its lower right to precisely filter the list of target objects based on criteria such as **Directory**, **Node Type**, **Owner**, and **Scheduling Resource Group**.
        
        > You can add favorite filters in the filter pop-up. These filters will then be displayed directly above the list.
        
    -   **Select**: In the list, select one or more objects you want to operate on.
        
        > **Note**: When you select a Workflow, you can click the drop-down icon to its left to quickly **Select parent Node and all sub-nodes**.
        
3.  **Execute a batch operation**
    
    After selecting the target objects, click the **Batch Operations** button in the lower-left corner of the page and choose a specific action from the menu.
    
    Depending on the operation you select, complete the configuration in the dialog box that appears and click OK. Common operations include:
    
    -   **Modify Owner** (requires **Workspace Administrator** permissions)
        
    -   **Modify Data Integration task** (you can modify the Data Source, data destination, and Scheduling Resource Group)
        
    -   **Modify Scheduling Configuration** (you can modify the scheduling cycle, dependencies, and Scheduling Resource Group)
        
    -   **Deploy****/****Undeploy**
        

#### Notes

-   **Effective Scope**: All modifications made on the Batch Operations page take effect only in the **Development Environment**. To apply changes to the Production Environment (such as modifying Scheduling Configuration), you must also Deploy them to the Operation Center.
    
-   **Forced modification**: If your selection includes Nodes locked by other users, the system will ask if you want to **Forcibly modify files locked by others**. Forcing a modification overwrites any unsaved changes from other users. **Use this option with caution and only after confirming with the affected users**.
    

#### Operation history

To review or audit the history of batch operations, click the **Batch Operation History** button in the upper-right corner of the page. You can view the details of each operation, including the operation type, object scope, execution status, and time.
