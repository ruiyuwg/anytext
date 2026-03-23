A parameter node is a special type of virtual node. This type of node is used to manage parameters in workflows and pass parameters between nodes. Parameter nodes can be used to manage constant and variable parameters and transparently pass the parameters of ancestor nodes. Nodes that need to use parameters can obtain parameters from parameter nodes. This topic describes how to create a parameter node.

## **Node introduction**

Parameter nodes are virtual nodes that do not run computing tasks. Parameter nodes are used to pass parameters between nodes and manage parameters in workflows.

-   Parameter passing between nodes
    
    If Node A in a workflow needs to obtain the output parameters of its ancestor nodes, you can create a parameter node and use the parameter node as an ancestor node of Node A and a descendant node of the ancestor nodes of Node A. Then, add all parameters required by Node A to the parameter node. This way, Node A can obtain all required parameters from the parameter node.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6556592471/CAEQORiBgIDXn4u6qxkiIDViNWZlNGE1NDJjMzRjMTY5NmM4YjViMDczNDhkYmNk4683746_20240927103705.532.svg)
    
    In the preceding figure, the `Sq_MySQL_G` node needs to obtain the output parameters of the `Sq_MySQL_B` and `Sq_MySQL_E` nodes. A parameter node is created and used as the descendant node of the `Sq_MySQL_B` and `Sq_MySQL_E` nodes. All parameters required by the `Sq_MySQL_G` node are added to the parameter node. Then, the `Sq_MySQL_G` node is used as the descendant node to obtain the output parameters of the parameter node. The `Sq_MySQL_G` node can obtain all parameters of the `Sq_MySQL_B` and `Sq_MySQL_E` nodes by using the parameter node.
    
-   Parameter management
    
    If nodes in a workflow need to use specific constant and variable parameters, you can create a parameter node and use the parameter node as the ancestor node of the nodes. Then, add all parameters required by the nodes to the parameter node. This way, the nodes can obtain all required parameters from the parameter node. The parameter node facilitates the centralized management of all parameters used in the workflow.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6556592471/CAEQORiBgMCPoYu6qxkiIDAwYTg0MmVlNzI0MTRmOGQ4ZjE3MWE0OGIwZDliOTNl4683746_20240927110554.797.svg)
    
    In the preceding figure, the `Sq2_MySQL_A`, `Sq2_MySQL_C`, `Sq2_MySQL_D`, `Sq2_MySQL_E`, and `Sq2_MySQL_F` nodes need to use specific parameters. A parameter node is created and used as the ancestor node of the preceding nodes. You can use the parameter node to obtain the output parameters of the preceding nodes, and configure the corresponding variable parameters or constant parameters for the parameter node.
    

## **Prerequisites**

-   The RAM user that you want to use is added to your workspace.
    
    If you want to use a RAM user to develop tasks, you must add the RAM user to your workspace as a member and assign the **Develop** or **Workspace Administrator** role to the RAM user. The Workspace Administrator role has more permissions than necessary. Exercise caution when you assign the Workspace Administrator role. For more information about how to add a member and assign roles to the member, see [Add workspace members and assign roles to them](/help/en/dataworks/user-guide/add-workspace-members-and-assign-roles-to-them).
    
-   A serverless resource group is associated with your workspace. For more information, see the topics in the [Use serverless resource groups](/help/en/dataworks/user-guide/using-serverless-resource-groups) directory.
    
-   A parameter node is created before you develop a task on the parameter node. For more information, see [Create a task node](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).
    

## **Precautions**

If a node needs to use parameters in a parameter node, the node must be a direct descendant node of the parameter node.

## **Step 1: Use a parameter node to develop a task**

You can add a parameter of the Constant, Variable, or Pass-through Variable type in the parameter node. The following tabs describe how to add the preceding types of parameters.

## Add a constant parameter

The value of a constant parameter is fixed and can be directly configured in the parameter node.

1.  In the upper-left corner of the configuration tab of the parameter node, click Add to add a parameter.
    
2.  Configure the constant parameter. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    Parameter
    
    Specify a name for the parameter.
    
    **Note**
    
    This parameter is used when you add parameters to descendant nodes.
    
    Parameter Type
    
    Select Constant from the drop-down list.
    
    Value
    
    Specify the value of the parameter based on your business requirements.
    
    Description
    
    Enter a description for the parameter based on your business requirements.
    
3.  After you configure the constant parameter, click **Save** in the Actions column to save the parameter.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6556592471/p854801.png)
    

## Add a variable parameter

The value of a variable parameter is a variable. If you want to use a variable such as the system time, set the Parameter Type parameter to Variable.

1.  In the upper-left corner of the configuration tab of the parameter node, click Add to add a parameter.
    
2.  Configure a variable parameter. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    Parameter
    
    Specify a name for the parameter.
    
    **Note**
    
    This parameter is used when you add parameters to descendant nodes.
    
    Parameter Type
    
    Select Variable from the drop-down list.
    
    Value
    
    Specify the value of the parameter based on your business requirements.
    
    **Note**
    
    For more information about variable parameters, see [Supported formats of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#concept-t2q-jmq-p2b).
    
    Description
    
    Enter a description for the parameter based on your business requirements.
    
3.  After you configure the variable parameter, click **Save** in the Actions column to save the parameter.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6556592471/p854810.png)
    

## Add a pass-through variable parameter

Pass-through variables are used to transparently pass the output parameters of ancestor nodes of the parameter node to descendant nodes of the parameter node. If you add a parameter of the pass-through variable type, you can set the Value parameter to an output parameter of an ancestor node of the parameter node.

1.  In the right-side navigation of the configuration tab of the parameter node, click **Properties**. On the Properties tab, click **Scheduling Dependencies**. In the **Node Dependencies** section of the Scheduling Dependencies tab, click Add Dependency to configure the node to which you want to pass parameters as an upstream dependency.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6556592471/p854823.png)
    
2.  After you configure the dependency, go to the **Scheduling Parameters** section and click **Add Parameter** to add a parameter. The following table describes the parameters.
    
    1.  Specify a name for the parameter.
        
    2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6556592471/p854841.png) icon to search for the output parameters of the ancestor nodes of the parameter node and associate the output parameters with the custom parameters of the descendant nodes.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6556592471/p854845.png)
        
3.  After you configure the parameters, close the Properties tab and go to the configuration tab of the parameter node. On the configuration tab of the parameter node, click **Add** to add a pass-through variable parameter. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    Parameter
    
    Specify a name for the parameter.
    
    **Note**
    
    This parameter is used when you add parameters to descendant nodes.
    
    Parameter Type
    
    Select Pass-through Variable from the drop-down list.
    
    Value
    
    Select the parameter of the ancestor node that you associate on the Properties tab.
    
    Description
    
    Enter a description for the parameter based on your business requirements.
    
4.  After you configure the pass-through variable parameter, click **Save** in the Actions column to save the parameter.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6556592471/p854861.png)
    

After you configure parameters for the parameter node, configure scheduling properties for the node. For more information.

## **Step 2: Use the parameters in the parameter node**

After you configure the parameter node, the descendant nodes of the parameter node can directly use the parameters in the parameter node. This facilitates the centralized management of parameters and improves the task development efficiency of descendant nodes.

**Note**

Before the descendant nodes of the parameter node can use the parameters in the parameter node, you must add parameters to the scheduling parameter of the descendant nodes to associate the parameters with the parameter node.

1.  Associate the parameters of the ancestor node with the parameter node.
    
    1.  In the right-side navigation of the configuration tab of the parameter node, click **Properties**. On the Properties tab, click **Scheduling Dependencies**. In the **Node Dependencies** section of the Scheduling Dependencies tab, click Add Dependency to configure the parameter node as an upstream dependency.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6556592471/p854823.png)
        
    2.  After you configure the dependency, go to the **Scheduling Parameters** section and click **Add Parameter** to add a parameter. The following table describes the parameters.
        
        1.  Specify a name for the parameter.
            
        2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6556592471/p854841.png) icon to search for the output parameters of the ancestor nodes of the parameter node and associate the output parameters with the parameter node.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6556592471/p854879.png)
            
2.  After you configure the parameters, you can use `${Parameter name}` to obtain and use the parameters passed from the parameter node when you modify the node script.
    

## **Step 2: Deploy the parameter node and perform O&M operations**

1.  After the node code and scheduling properties are configured, deploy the parameter node and its ancestor and descendant nodes to the production environment. For more information, see [Node or workflow deployment](/help/en/dataworks/user-guide/task-release/).
    
2.  After the deployment is complete, go to the **Auto Triggered Nodes** page in **Operation Center** to view the node that is deployed and perform O&M operations on the node. The system periodically runs the node based on the scheduling properties that you configure. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
