You can create a manually triggered workflow if your workflow does not need to run periodically but must be published to the production environment. This topic describes how to create a manually triggered workflow and publish it to the production environment.

## **Usage notes**

-   Manually triggered workflows must be triggered manually. Automatic scheduling is not supported.
    
-   The lines between nodes in a manually triggered workflow only indicate the execution order. They do not set scheduling dependencies.
    
-   Manually triggered workflows differ from scheduled workflows in some ways. For more information, see [Functional differences](/help/en/dataworks/user-guide/workflow-orchestration/#4281ed619a2lw).
    

## **Design a manually triggered workflow**

1.  **Create a workflow**
    
    1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
        
    2.  In the left navigation pane, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2628787371/p852358.png). To the right of Manually Triggered Workflow, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4653191571/p980923.png)** > **Create Manually Triggered Workflow**. Enter a name for the workflow and click **Confirm** to open the workflow editing page.
        
2.  **Orchestrate nodes**
    
    1.  At the top of the workflow editing page, click **Create Internal Node**. Select an inner node **Type**, enter a **Name**, and click **OK** to add the node to the canvas.
        
    2.  Plan the manually triggered workflow as needed.
        
        The number of nodes in a workflow can affect runtime performance. For optimal performance, a single workflow should contain no more than 100 nodes. The maximum number of nodes allowed in a workflow is 200.
        
3.  **Configure workflow parameters**
    
    To share parameters among all nodes in a workflow, go to the **Scheduling** > **Scheduling Parameters** pane on the right side of the canvas. Click **Add Parameter** to set your parameters. Reference a parameter in the node code using the `${**Parameter Name**}` format.
    
    **Note**
    
    If an inner node has a scheduling parameter with the same name as a workflow parameter, the workflow parameter takes precedence. This differs from the priority rules for scheduling.
    
4.  **Priority and concurrency** (Advanced Configuration)
    
    When multiple workflows or tasks are triggered simultaneously and create a system resource bottleneck, you can use the **Priority** and **Priority Weighting Policy** settings to manage resource scheduling. This ensures that the most important tasks are executed first.
    
    -   **Ensure core business continuity**: You can set a higher priority for core business workflows. This ensures they always run before non-core business workflows.
        
    -   **Reduce runtime for critical flows**: Within a single workflow instance, you can use the **Priority Weighting Policy** to influence the execution order of nodes. For example, using the **Downward Weighting** policy assigns a higher dynamic weight to nodes on the critical path that have more upstream dependencies. This prioritizes the execution of these nodes, which shortens the total runtime of the workflow.
        
        **Configuration item**
        
        **Description**
        
        **Priority**
        
        Defines the absolute priority level of a workflow instance in the scheduling queue. Available levels are 1, 3, 5, 7, and 8. A higher number indicates a higher priority. High-priority tasks or workflows always get scheduling resources before low-priority ones.
        
        **Priority Weighting Policy**
        
        Defines how the dynamic weight of each node (Task) is calculated within the same priority level. Nodes with higher weights are executed first.
        
        -   No Weighting: All nodes have a fixed base weight.
            
        -   Downward Weighting: The weight of a node is dynamically adjusted. The more upstream dependencies a node has, the higher its weight. This policy helps nodes on the critical path of a directed acyclic graph (DAG) to be executed first. The weight is calculated as: `Initial Weight + Sum of Priorities of All Upstream Nodes`.
            
        
        **Maximum Number of Concurrent Instances**
        
        Controls the maximum number of instances of this workflow that can run at the same time. This is used for concurrency control and resource protection. When the number of running instances reaches the limit, new instances that are triggered will enter a waiting state. You can set this to **Unlimited** or a custom maximum value (up to 100,000).
        
        **Note**
        
        If the set limit exceeds the maximum capacity of the resource group, the actual concurrency bottleneck is determined by the physical limit of the resource group.
        
        The DataWorks priority system follows a hierarchical override rule: `Runtime Specification` > `Node-level Configuration` > `Workflow-level Configuration`.
        
        1.  Workflow-level configuration (Baseline): This configuration is set in the **Scheduling Policy** of the workflow and serves as the default for all nodes.
            
        2.  Node-level (local) configuration: Applies to a single inner node and is set in **Scheduling Configuration** > **Scheduling Policies**. A higher **Priority** for a specific node overrides the workflow-level setting.
            
        3.  Runtime specification (Temporary): This configuration is set when running a task manually in the **Operation Center** with the **Runtime Priority Reset**switch. It has the highest priority, applies only to the current run, and does not change any permanent configurations.
            

## **Develop business logic**

DataWorks encapsulates engine capabilities, allowing you to develop data processing tasks using engine nodes without managing complex engine command lines. You can also use the platform's general-purpose nodes to handle complex logic.

Within a workflow, you can develop specific business processes using synchronization nodes, compute nodes, and other node types.

-   You can edit a synchronization node to configure the data source and destination. This lets you synchronize data from one database to another.
    
-   You can use a data development node, such as a MaxCompute SQL node, to perform specific data cleansing tasks. To use resources or functions during code development, DataWorks also supports creating resource and function nodes through a visual interface. For more information about data development, see [Node development](/help/en/dataworks/user-guide/node-development-of-data-studio/). For more information about creating resources and functions, see [Resource Management](/help/en/dataworks/user-guide/resource-management-of-data-studio/).
    

## **Publish a manually triggered workflow**

In a standard mode workspace, you can use the Data Studio interface only to develop and test task nodes. To publish code to the production environment, you can publish the workflow directly. This action publishes all nodes within the workflow as a batch.

1.  At the top of the manually triggered workflow, click **Run** to navigate to the workflow running page and test whether each node runs successfully.
    
2.  On the workflow running page, click **Back** at the top. Then, click **Publish**.
    
3.  After you click **Start Deployment to Production Environment**, choose **Incremental Publish** or **Full Publish**.
    
    -   **Incremental Deployment**: Publishes selected inner node tasks.
        
    -   **Full Deployment**: Publishes the entire manually triggered workflow and all its inner node tasks.
        
4.  The publishing process consists of the following sequential steps: **Build Package**, **Dev Online Check**, **Dev Online**, **Prod Online Check**, and **Prod Online**.
    

## **Run a manually triggered workflow in the production environment**

1.  After the task is published, you can click **Perform O&M** to view it in the Operation Center.
    
    **Note**
    
    Alternatively, go to the [DataWorks Workspace Management page](https://dataworks.console.aliyun.com/workspace/list). Switch to the destination region in the top navigation bar. Find your workspace. In the **Operation** column, click **Shortcuts** > **Operation Center**. In the navigation pane on the left, click **Manually Triggered Node O&M**.
    
2.  In the **Operation** column for the target one-time task, click **Run** to start the manually triggered workflow.
    

## **Other operations**

### **Clone a manually triggered workflow**

You can use the clone feature to quickly create a new workflow by cloning an existing one. The cloned workflow includes its inner nodes (including **Code**, **Debugging Configurations**, and **Scheduling**), the dependencies between nodes, and the workflow's own **Scheduling**.

1.  In the **Manually Triggered Workflow** list on the left, right-click the workflow you want to clone.
    
2.  In the pop-up menu, select **Clone**, which opens the clone dialog box.
    
3.  In the dialog box, either change the **Name** and **Path** of the manually triggered workflow or keep the default values. Click **Confirm** to start cloning.
    
4.  During the cloning process, you can view details such as **Current Progress**, **Duration**, and **Number of Completed Nodes** in the dialog box.
    
5.  After the workflow is cloned, you can view the new manually triggered workflow in the **Manually Triggered Workflow** list.
    

### **Version management**

You can use the version management feature to revert a manually triggered workflow to a specific historical version. This feature also provides version viewing and comparison functions to help you analyze differences and make adjustments.

1.  From the **Manually Triggered Workflow** list on the left, double-click the target workflow to open its canvas.
    
2.  On the right side of the workflow canvas, click **Version**. On the **Version** page, you can view and manage the **Development Record** and **Publish Record**.
    
    -   **View** **version**:
        
        1.  On the Development History or **Publish History** tab, you can find the desired workflow version.
            
        2.  In the **Actions** column, click **View**. On the details page, you can view the workflow's **Code** and **Scheduling Configuration**.
            
            **Note**
            
            You can view the **Scheduling Settings** in **Code Editor** or **Visual** **Mode**. You can switch between these modes in the upper-right corner of the **Scheduling** **Settings** tab.
            
    -   **Compare** **versions**:
        
        On the **Development History** or **Deployment History** tab, you can compare different versions of a workflow. The following example shows how to compare versions using development records.
        
        -   **Compare versions in the development or publishing environment**: On the **Development History** tab, select two versions and click the **Select Versions to Compare** button at the top. You can then compare the code and scheduling configurations between the two workflow versions.
            
        -   **Compare between development, publishing, or build environments**:
            
            1.  On the **Development History** tab, find a specific workflow version.
                
            2.  In the **Actions** column, click the **Compare** button. In the **Select the content to compare** window that opens, select a version from the Publish History or **Build Records**.
                
    -   **Restore to a version**:
        
        You can revert a manually triggered workflow to a specific historical version only from the **Development History** page. On the **Development History** tab, find the target version and click the **Restore** button in the **Actions** column to restore the workflow to that version.
        
        **Note**
        
        When you revert a workflow, the system restores it to the target version and generates a new version record.
