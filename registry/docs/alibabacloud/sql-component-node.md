A SQL component is a SQL code template with multiple input and output parameters. A SQL component processes data by filtering, joining, and aggregating tables from data sources to generate result tables. In Data Development, use SQL component nodes to build data processing nodes more efficiently. This topic explains how to reference and use SQL components.

## **Limitations**

-   This feature requires **DataWorks Standard Edition** or a later version.
    
-   **Permissions**: To create and use components, you must have the **Developer** role in your DataWorks Workspace. For more information about authorization, see [Workspace-level module permission control](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#section-m3s-ots-vl3).
    

## Prerequisites

-   A MaxCompute computing resource is [attached to the DataWorks workspace](/help/en/dataworks/user-guide/create-a-maxcompute-data-source#57c0eb6140ogu).
    
-   A component has been created. For more information, see [Component management](/help/en/dataworks/user-guide/component-management).
    
-   A SQL component node has been created. For more information, see [Create a node for a scheduled workflow](/help/en/dataworks/user-guide/node-development-of-data-studio/#13d1ad442e1tc).
    

## **Procedure**

1.  On the configuration page of the SQL component node, perform the following steps.
    
    #### **Component reference settings**
    
    1.  In the **Component Settings** panel on the right, in the **Referencing Settings** section, click **Select Component Code**.
        
        **Note**
        
        -   In the **Select Component Code** dialog box, click **Update Code Version** to use a newer version of the component.
            
        -   Click **Open Component** to view the Details of the referenced component.
            
        
    2.  After you select the component code, in the **The parameter values cannot be empty** dialog box, assign values to the auto-detected parameters.
        
    
    #### **Run the component task**
    
    1.  In the **Run Configuration** **Computing Resources** section, configure the **Computing Resources**, **Computing Quota**, and **Resource Group**.
        
        **Note**
        
        To access data sources in a public network or Virtual Private Cloud (VPC) environment, you must use a Scheduling Resource Group that has been successfully tested for connectivity to the data source. For more information, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
        
    2.  In the toolbar, click **Run** to execute the component task.
        
    
2.  To run the node task on a schedule, configure its scheduling properties. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).
    
3.  After configuring the node, **Publish** it. For more information, see [Node and workflow deployment](/help/en/dataworks/user-guide/task-release/).
    
4.  After the task is published, go to the **Operation Center** to monitor the status of Periodic Tasks. For more information, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
