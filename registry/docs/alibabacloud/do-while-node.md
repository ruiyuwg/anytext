DataWorks provides do-while nodes. You can configure the workflow within a do-while node, define the logic to be executed in a loop, and then edit the end node to control the loop's exit condition. You can also use a do-while node with an assignment node to iterate through the result set passed by the assignment node.

## **Node introduction**

In a do-while node, you can configure the inner workflow as needed. You can place the business logic to be executed in a loop inside the node and then use the End node to define the loop's exit condition. You can use a do-while node by itself or with an assignment node to iterate through the result set from the assignment node.

## **Prerequisites**

-   The RAM user that you want to use is added to your workspace.
    
    If you want to use a RAM user to develop tasks, you must add the RAM user to your workspace as a member and assign the **Develop** or **Workspace Administrator** role to the RAM user. The Workspace Administrator role has more permissions than necessary. Exercise caution when you assign the Workspace Administrator role. For more information about how to add a member and assign roles to the member, see [Add members to a workspace](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
-   A serverless resource group is associated with your workspace. For more information, see the topics in the [Use serverless resource groups](/help/en/dataworks/user-guide/using-serverless-resource-groups) directory.
    
-   Before you can develop a do-while node, you must first create it. For more information, see [Create a node for a scheduling workflow](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).
    

## **Limits**

-   Do-while nodes are supported only in DataWorks Standard Edition and later. For more information, see [Features of DataWorks editions](/help/en/dataworks/user-guide/differences-among-dataworks-editions#concept-265336).
    
-   Concurrent execution is not supported. A loop can start only after the previous loop is complete.
    

## **Precautions**

Dimension

Classification

Description

Support for loops

Maximum number of loops

A do-while node supports a maximum of 128 loops. If the number of loops controlled by the **End** node exceeds 128, an error is reported during runtime.

Inner nodes

Flow orchestration

-   When you customize a loop task node, you can delete the dependencies between inner nodes and rearrange the inner workflow. However, you must set the **Start** and **End** nodes as the first and last nodes of the inner workflow.
    
-   If you use a branch node within the inner nodes of a do-while node for logical judgment or to traverse results, you must also use a [merge node](/help/en/dataworks/user-guide/merge-node).
    
-   You cannot add comments when you develop the code for the **End** node of a do-while node.
    

Value retrieval

Use the [built-in variables](#a0a63e9245gwi) to get the output value from an upstream assignment node.

Debugging

Task debugging

In standard mode, DataWorks does not support testing and running do-while nodes directly in the DataStudio interface.

To test and verify the results of a do-while node, you must publish and submit the task that contains the do-while node to Operation Center in the development environment. Then, run the do-while node task on the Operation Center page.

View logs

To view the execution logs of a do-while node in Operation Center, right-click the instance and select **View Internal Nodes** to see the logs of the inner nodes.

Upstream and downstream dependencies

Dependency settings

You can use a loop node alone or with an assignment node. When you run a task in Operation Center, use the data backfill feature and select both the assignment node and the loop node for execution. If you run only the loop node, it cannot get the value passed from the assignment node.

## **Built-in variables**

A do-while node typically uses the ${dag.variable\_name} format to retrieve variables. DataWorks provides two built-in system variables: ${dag.loopTimes} and ${dag.offset}. You can also use a do-while node with an assignment node to retrieve assignment parameter values using the ${dag.variable\_name} format.

-   System built-in variables
    
    Each time a task loop runs, you can use built-in variables to retrieve the current number of completed loops and the offset.
    
    **Built-in variable**
    
    **Meaning**
    
    **Value**
    
    `${dag.loopTimes}`
    
    The current number of loops that have been completed.
    
    1 for the first loop, 2 for the second, 3 for the third, and so on, up to n for the nth loop.
    
    `${dag.offset}`
    
    The offset.
    
    0 for the first loop, 1 for the second, 2 for the third, and so on, up to n-1 for the nth loop.
    
-   Retrieve the result of an assignment node
    
    If you use an [assignment node](/help/en/dataworks/user-guide/assignment-node), you can also retrieve the assignment parameter values and loop variable parameters in the following ways.
    
    **Note**
    
    If a do-while node depends on an assignment node, you can set the output parameter of the assignment node as an **Input Parameter** for the do-while node. In the do-while node, you can then retrieve the result set from the assignment node and specific nodes within that result set. The format is ${dag.variable\_name}, where variable\_name must be configured as an **Input Parameter** for the do-while node. This topic uses the `input` parameter (the **Input Parameter**) in the do-while node as an example to accept the result set from the assignment node. When you use this feature, replace \`input\` with your actual parameter name.
    
    **Built-in variable**
    
    **Meaning**
    
    `${dag.input}`
    
    The dataset passed from the upstream assignment node.
    
    `${dag.input[${dag.offset}]}`
    
    The data row for the current loop, obtained from within the loop node.
    
    `${dag.input.length}`
    
    The length of the dataset, obtained from within the loop node.
    

## **Step 1: Develop a do-while node**

### do-while node development description

A do-while node consists of three parts by default: a ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246592471/p855438.png) start node, an ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246592471/p855439.png) end node, and a do-while loop body.

-   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246592471/p855438.png)**Start**: A marker for the beginning of a loop. It has no business function and cannot be deleted.
    
-   **do-while loop body**: You can add different nodes for business processing.
    
-   ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246592471/p855439.png)**End**: Marks the end of a loop and determines whether to start the next one. It is used to define the exit condition for the do-while node and cannot be deleted.
    

**Note**

You can also customize the inner workflow of the do-while node as needed by adding more nodes to the **do-while loop body**.

### Configure a do-while node

Go to the do-while node. By default, it contains a ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246592471/p855438.png) start node, an ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246592471/p855439.png) end node, and a do-while loop body. You can then configure the do-while node.

1.  In the loop body, click Create Internal Node, select Shell from the drop-down list, and then name the Shell node.
    
    **Important**
    
    This example uses only a Shell node. You can create and orchestrate multiple nodes into a workflow as needed.
    
2.  Edit the Shell node.
    
    1.  In the loop body, right-click the created Shell node and select Open Node to open the editor page for the node.
        
    2.  Develop the Shell node:
        
        ```
        echo ${dag.loopTimes} ----Print the number of loops.
        ```
        
        **Note**
        
        -   The logic of the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246592471/p855438.png) start node of a do-while node is fixed and cannot be edited.
            
        -   After you modify the code in the Shell node, you must save it. The system does not prompt you to save your changes when you submit the node. If you do not save the changes, the latest code is not used.
            
        -   The `**${dag.loopTimes}**` variable is a reserved system variable that represents the current loop count, starting from 1. Inner nodes of the do-while node can directly reference this variable. For more information about built-in variables, see [Built-in variables](#a0a63e9245gwi).
            
        
3.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246592471/p855443.png) icon in the toolbar to save the Shell node.
    

## **Define the exit condition for the loop**

Go to the do-while node. It contains a ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246592471/p855438.png) start node, an ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246592471/p855439.png) end node, and a do-while loop body by default. Configure the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246592471/p855439.png) end node to exit the loop on the fifth iteration.

1.  Right-click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246592471/p855439.png) node, select **Open Node**, and then click the icon in the toolbar in the lower-right corner to switch the language to **Python**.
    
2.  Edit the following code to define the exit condition for the do-while node.
    
    ```
    if ${dag.loopTimes}<5: 
     print True; 
    else: 
     print False;
    ```
    
    -   The **${dag.loopTimes}** variable is a system-reserved variable. It represents the current loop count, starting from 1. Inner nodes of the do-while node can directly reference this variable. For more information about built-in variables, see [Built-in variables](#a0a63e9245gwi).
        
    -   The code compares `dag.loopTimes` with 5 to limit the total number of loops. The value of `**dag.loopTimes**` is 1 for the first loop, 2 for the second, and so on. In the fifth loop, the value is 5. At this point, the expression **${dag.loopTimes}<5** evaluates to False, and the loop exits.
        
3.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246592471/p855443.png) icon in the toolbar to save the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2246592471/p855439.png) end node.
    

### Save and publish the do-while workflow

After you configure the Shell node in the do-while loop body and define the exit condition, return to the workflow. Click Publish to publish the upstream assignment node and the do-while node. For more information, see [Publish a node or workflow](/help/en/dataworks/user-guide/task-release/).

## **Test the node and view the results**

1.  After the task is published, it runs periodically based on your scheduling configuration. You can go to **Operation Center** > **Task O&M** > **Auto Triggered Task O&M** > **Auto Triggered Task** to view the published auto triggered task and perform O&M operations.
    
2.  On the Auto Triggered Task page, backfill data for the do-while node and its upstream assignment node by choosing **Backfill Data** > **Current And Descendant Nodes**. For more information, see [Run a data backfill task and view the data backfill instance (new)](/help/en/dataworks/user-guide/backfill-data-for-an-auto-triggered-node-and-view-data-backfill-instances-of-the-node).
    

## **Appendix: Comparison and description of do-while features**

-   Comparison of the do-while node with while, for-each, and do-while loop types:
    
    -   A do-while node can implement a loop body that executes first and then checks the condition, which is similar to a do...while statement. It can also indirectly implement a foreach statement using the system variable dag.offset combined with the node context.
        
    -   A do-while node cannot implement a structure that checks the condition before looping, which is similar to a while statement.
        
-   do-while execution flow:
    
    -   The tasks in the loop body run sequentially from the Start node based on their dependencies.
        
    -   The code that you defined in the End node runs.
        
        -   If the End node outputs True, the next loop continues.
            
        -   If the End node outputs False, the loop stops.
            
-   Context dependencies: Inner nodes of a do-while node can reference the context defined for the do-while node using the **${dag.context\_variable\_name}** format.
    
-   System parameters: DataWorks automatically provides two system variables to the inner nodes of a do-while node.
    
    -   **dag.loopTimes**: Identifies the number of times the loop has run, starting from 1.
        
    -   **dag.offset**: Identifies the offset of the current loop relative to the first loop, starting from 0.
