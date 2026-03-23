Hologres integrates seamlessly with MaxCompute. You can use a Hologres SQL node to run standard PostgreSQL queries on large-scale data in MaxCompute and get results quickly, without having to migrate your data.

## Prerequisites

Add a **Hologres** compute engine instance on the **Workspace Configurations** page. For details, see [Configure a workspace](/help/en/dataworks/user-guide/create-and-manage-workspaces/#section-evy-kkx-qhm).

## **Procedure**

1.  Complete the following steps in the Hologres SQL node editor.
    
    #### **Develop SQL code**
    
    Develop your task code in the SQL editor. You can define variables in your code by using the \`${variable\_name}\` format. Assign values to these variables in the **Schedule** panel on the right to enable dynamic parameter passing for scheduled jobs. For more information about scheduling parameters, see **Parameters**.
    
    ```
    SELECT col_1,col_2 FROM your_table_name WHERE pt>${pt_num} limit 500;
    ```
    
    **Note**
    
    To display more results, add a `limit` clause to your SELECT statement. You can display a maximum of `10000` query results. By default, queries without a limit clause return a maximum of `200` results.
    
    #### **Run the SQL task**
    
    1.  In the **Run Configuration** panel, configure the **compute engine** and **resource group**.
        
        **Note**
        
        To access data sources over the public network or in a Virtual Private Cloud (VPC) environment, you must use a scheduling resource group that can connect to the data source. For details, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
        
    2.  From the **Select Data Source** drop-down list in the toolbar, select your Hologres data source, and then click **Run**.
        
    3.  Click **Save**.
        
    
2.  To run the node task periodically, configure its scheduling settings. For details, see [Node scheduling configuration](/help/en/dataworks/user-guide/node-scheduling/).
    
3.  After configuring the node, publish it. For details, see [Node and workflow deployment](/help/en/dataworks/user-guide/task-release/).
    
4.  After publishing the node, you can view the status of the periodic task in the Operation Center. For details, see [Getting started with Operation Center](/help/en/dataworks/user-guide/getting-started-with-operation-center).
