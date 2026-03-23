A SUB\_PROCESS node is a special node type used in a workflow to reference another workflow. This node is ideal for splitting a complex task into multiple subtasks. Defining and managing each subtask independently improves the maintainability and reusability of the overall task.

## **Background**

You can use a SUB\_PROCESS node in a workflow to reference an existing workflow. This lets you create nested calls between workflows. You do not need to configure **scheduled tasks** or **dependencies** for the referenced workflow. The execution of the referenced workflow is controlled by the workflow that references it. Specifically:

-   A referencable workflow runs only when another workflow references it.
    
-   The runtime of a referencable workflow depends on the runtime of the workflow that references it.
    
    For example, if Workflow-E contains a SUB\_PROCESS node that references Workflow-D, Workflow-D is synchronously triggered to run when Workflow-E runs. In a multi-layer nested structure, this process continues down the chain of references.
    
-   The number of times a referencable workflow runs depends on the number of times it is referenced.
    
    For example, if multiple SUB\_PROCESS nodes in different workflows reference the same workflow, that referenced workflow runs for each reference.
    

You can build a simple, linear reference workflow, as shown in the left diagram, or a more complex workflow hierarchy with multiple parallel branches, as shown in the right diagram. Each structure has unique characteristics and is suited for different scenarios. You can choose the solution that best fits your business process.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6716288671/CAEQUxiBgICjo43T3hkiIDE4YWYzY2Q5NmYyYjQ3ZmY4Y2JjYmFlY2FkMjUwNzUz4820050_20241230180037.671.svg)

-   **Left diagram**: This diagram shows a linear workflow hierarchy. The workflow at each layer references the workflow at the next layer using an internal SUB\_PROCESS node. For example, Workflow-E references Workflow-D, which in turn references another workflow, and so on, until Workflow-B references Workflow-A.
    
-   **Right diagram**: This diagram shows a complex workflow hierarchy where a workflow can be referenced by multiple other workflows. For example, Workflow-A is referenced by both Workflow-B1 and Workflow-B2 through their respective internal SUB\_PROCESS nodes.
    

## **Prerequisites**

You have a workspace in which the **Use Data Studio (New Version)** is enabled and to which a resource group is attached. For more information, see [Create a workspace](/help/en/dataworks/user-guide/create-a-workspace).

## **Usage notes**

-   When you use SUB\_PROCESS nodes to implement multi-layer nesting, you can nest references up to `**5**` layers deep, including the root workflow. The total number of workflows cannot exceed `**200**`.
    
-   A SUB\_PROCESS node creates a trigger relationship, not an upstream or downstream dependency. When a workflow encounters a SUB\_PROCESS node during execution, it triggers the referenced workflow to run.
    
-   If a workflow is triggered by a reference, the values of its scheduling parameters are based on the scheduled time of the triggering workflow.
    
-   After you enable a workflow to be referenced, the workflow and its internal nodes cannot have dependencies on other tasks, and other tasks cannot depend on it. These other tasks include other workflows, nodes outside the current workflow, and the root node of the workspace.
    

## **Configure workflows**

This section provides an example of how to use a SUB\_PROCESS node to reference an existing workflow. In this example, a SUB\_PROCESS node in `Workflow2` references `Workflow1`.

### **Workflow 1: Enable referencing**

To allow a workflow to be referenced, you must remove its existing upstream and downstream node dependencies. A referenced workflow does not support a scheduled runtime. Follow the steps in this section to enable the referencing switch for a workflow. We recommend that you create a new workflow to test this feature.

Follow the steps below to create a workflow named `Workflow1` and enable the referable option for `Workflow1`.

1.  Create `Workflow1`.
    
    1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
        
    2.  In the left navigation pane, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2628787371/p852353.png). To the right of the **Workspace Directories**, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9003941571/p852270.png)** > **Create Workflow**. After you set a name for the workflow and save it, the workflow editor opens.
        
2.  Enable the referencing switch.
    
    On the configuration page for `Workflow1`, click **Property** on the right. In the properties dialog box, turn on the ****Referenceable**** switch.
    
    **Note**
    
    -   After you turn on this switch, the current workflow can be referenced by other workflows using a SUB\_PROCESS node. You do not need to configure properties such as scheduling time or scheduling dependencies.
        
    -   After you enable a workflow to be referenced, the workflow and its internal nodes cannot have dependencies on other tasks, and other tasks cannot depend on it. These other tasks include other workflows, nodes outside the current workflow, and the root node of the workspace.
        
    

### **Workflow 2: Reference Workflow 1**

You can create a `SUB_PROCESS` node in `Workflow2` to reference `Workflow1`.

1.  Create a workflow named `Workflow2`. For more information, see [Recurring workflows](/help/en/dataworks/user-guide/workflow).
    
2.  Create a `SUB_PROCESS` node.
    
    Click the `Workflow2` that you created to open its configuration page. Drag a **SUB\_PROCESS** node from **Logical Node** to the canvas.
    
3.  Configure the reference workflow.
    
    In the **Add Node** dialog box, set **Reference Workflow** to **Select Existing**. From the drop-down list under **Select Existing**, select the workflow to reference, `Workflow1`. For **Node Name**, use the system-generated name or enter a custom name. Click **Confirm**.
    
    **Note**
    
    -   To reference a workflow, you can enter a custom value for **Workflow Name** and click **Confirm**.
        
    -   After you confirm the new workflow reference, you can hover the mouse over the SUB\_PROCESS node and click **Open Referenced Workflow**. In the dialog box that appears, click **Save And Open** to open the new workflow's configuration page.
        
    -   On the configuration page for the new referenced workflow, the ****Referenceable**** switch in the **Property** configuration panel on the right is enabled by default.
        
    
4.  Save and view reference details.
    
    Go to the configuration page for `Workflow2` and click **Save** at the top of the page. On the **Change Check** page, click **Save** to confirm your changes.
    
    **Note**
    
    After the reference switch for a workflow is enabled, it can be referenced by multiple other workflows. You can view the number of times it is referenced in the **Property** panel on the right side of the workflow's page. You can also click **View Details** for more information.
    

## **Next steps**

After you configure references between workflows, you can publish the workflow task to the scheduling environment for periodic scheduling. Then, you can use data backfill to observe the running status of the overall workflow.

1.  Configure scheduling.
    
    To run a workflow task periodically, you must first configure its scheduling properties. For more information, see [Node scheduling](/help/en/dataworks/user-guide/node-scheduling/).
    
2.  Publish the workflow task.
    
    A workflow task is automatically scheduled only after it is published to the production environment. You must publish the workflow. For more information, see [Publish an auto triggered task](/help/en/dataworks/user-guide/workflow#title-l8n-ek5-ys2).
    
    **Important**
    
    Before you publish Workflow2, which contains the `SUB_PROCESS` node, you must first publish `Workflow1` because it is referenced by this node. Otherwise, `Workflow2` will fail to publish.
    
3.  Run and view the workflow task.
    
    After you publish the workflow task, we recommend that you use the [data backfill](/help/en/dataworks/user-guide/task-release/#34d31648f99az) feature to view the running status of the auto triggered task in the Operation Center. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
    
    To view the execution status of all internal nodes in the referenced workflow, find the running SUB\_PROCESS node, right-click it, and select **View Internal Tasks Of The Referenced Workflow**.
