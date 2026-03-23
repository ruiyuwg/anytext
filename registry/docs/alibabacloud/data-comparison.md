The DataWorks Data Comparison node lets you compare data between tables in various ways and add it to a workflow. This document explains how to create a task with this node.

## **Overview**

The Data Comparison node supports direct table-to-table comparisons, not just those within data integration. You can customize the comparison scope and define custom metrics, enabling more versatile data analysis.

## **Limitations**

This node supports only the Serverless resource group. For more information about how to use a Serverless resource group, see [Use a Serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).

## **Step 1: Create a data comparison node**

1.  1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
        
2.  In the navigation pane on the left, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7335458471/p960533.png) to go to **Data Development**. To the right of the **Project Directory**, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7335458471/p960534.png) and select **Create Node** > **Data Quality** > **Data Comparison**. Follow the on-screen instructions to enter a path and name for the node to create it.
    

## **Step 2: Configure the data comparison node**

### **1\. Configure table information**

You can configure the Data Comparison node by specifying the tables to compare. The following table describes the parameters.

**Parameter**

**Description**

**Resource Group**

Select an existing Resource Group from the drop-down list.

**Task resource usage**

Adjust the amount of resources consumed by the Data Comparison node when it runs.

**Data Source Type**

Select the data source types for the Source and Destination tables you want to compare.

**Data Source Name**

Select the data sources for the Source and Destination tables.

**Connectivity**

After configuration, click **Test** to verify the connection to the Resource Group.

**Table name**

Select the Source and Destination tables to compare from the drop-down list.

**Note**

For a MaxCompute Data Source, you can also select a schema.

**Where filter**

Filter the data in the Source and Destination tables for comparison.

**Note**

-   You do not need to enter the `WHERE` keyword.
    
-   For partitioned tables, you must specify partitions to avoid a full table scan. Otherwise, the task fails with the following error: `Semantic analysis exception - physical plan generation failed: Table(<MaxCompute Project Name>,<Table Name>) is full scan with all partitions, please specify partition predicates`.
    

**Shard Key**

Configure a Shard Key for the Source table. The node uses this column to split the data. We recommend using a primary key or an indexed column as the Shard Key.

### **2\. Configure comparison rules**

You can choose either **Metric-based Comparison** or **Full-text Comparison** to compare data between the Source and Destination tables.

#### **Metric comparison**

-   **Table-level Comparison**:
    
    **Table Row Count Comparison**: Compares the total number of rows between tables. The comparison passes if the difference is within the specified error threshold.
    
    **Note**
    
    The **Error Threshold** can be set as a **Percentage**, an **Absolute Value**, or an **Exact Match**.
    
-   **Column-level Comparison**:
    
    By default, columns with the same name are compared. If the Source and Destination column names are different, click **Add Comparison Field** to manually map a **Source Field** to a **Destination Field**.
    
    -   **Source Field**: Select a column from the **Source** table to compare.
        
    -   **Destination Field**: Select a column from the **Destination** table to compare.
        
    -   **Comparison Metric**: Includes common metrics such as **MAX**, **AVG**, **MIN**, and **SUM**.
        
        -   You can configure multiple comparison metrics for a single pair of Source and Destination columns.
            
        -   Each comparison metric can have a different error threshold and ignore options.
            
    -   **Error Threshold**: The comparison passes if the calculated difference is within this threshold. You can set the threshold as a **Percentage**, an **Absolute Value**, or an **Exact Match**.
        
        **Note**
        
        -   `**Error Threshold Absolute Value = |Source Metric Value - Destination Metric Value|**`
            
        -   `**Error Threshold** Percentage = (|Source Metric Value - Destination Metric Value|) / Source Metric Value × 100%`
            
        
    -   **Ignore Options**: The available ignore options vary based on the data types of the columns being compared:
        
        **Column type**
        
        **Supported ignore options**
        
        Integer types (such as `INT`, `BIGINT`)
        
        You can ignore the **Difference Between Null Value and Value 0**.
        
        String types (such as `STRING`, `VARCHAR`, `TEXT`)
        
        You can ignore the **Difference Between Null Value and Empty String**.
        
        Numeric types (including integer and floating-point)
        
        -   You can set the **Floating Precision** for the comparison.
            
        -   You can ignore the **Difference Between Null Value and Value 0**.
            
        -   You can **Ignore trailing zeros in the decimal part**.
            
        
        Integer compared with string
        
        You can **Ignore trailing zeros in the decimal part**.
        
        Integer compared with floating-point
        
        -   You can **Ignore trailing zeros in the decimal part**.
            
        -   You can ignore the **Difference Between Null Value and Value 0**.
            
        
        Floating-point compared with string
        
        You can **Ignore trailing zeros in the decimal part**.
        
    -   **Operation**: You can delete unnecessary column mappings.
        
-   **Custom Comparison**:
    
    You can add a custom SQL comparison metric to compare the Source and Destination tables. Follow these steps:
    
    1.  Click **Add Custom SQL Comparison Metric** to add a metric. You can rename the metric.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7335458471/p960551.png)
        
    2.  Configure the **Error Threshold** as needed. You can set it as a **Percentage**, an **Absolute Value**, or an **Exact Match**.
        
    3.  After setting the threshold, click Configure in the **Custom SQL** column to write SQL queries that calculate the custom metric for the Source and Destination tables.
        
    4.  After you finish the configuration, click **OK**.
        

#### **Full-text comparison**

1.  When you set the comparison method to Full-text Comparison, you can adjust the **Full-text Comparison Method** to achieve different results.
    
    -   **Destination Data Contains Source Data**: The comparison passes if every row from the Source table exists in the Destination table. In this case, the Destination table may contain more rows than the Source table.
        
    -   **Row-by-Row Comparison**: Compares the Source and Destination tables row by row to check for differences in row count and content.
        
        When you configure a row-by-row comparison, you must set an **Error Threshold**. The threshold can be a **Percentage**, an **Absolute Value**, or an **Exact Match**.
        
        **Note**
        
        -   `**Error Threshold Absolute Value = |Source Metric Value - Destination Metric Value|**`
            
        -   `**Error Threshold** Percentage = (|Source Metric Value - Destination Metric Value|) / Source Metric Value × 100%`
            
        
2.  After you configure the **Full-text Comparison Method**, select the columns to compare. By default, columns with the same name are automatically mapped. If you need to compare columns with different names, click Add Comparison Field to manually select the **Source Field** and **Destination Field**.
    
    -   **Source Field**: Select a column from the Source table to compare.
        
    -   **Destination Field**: Select a column from the Destination table to compare.
        
    -   **Comparison Primary Key**: For a full-text comparison, a primary key is required to match rows before comparing the content of other columns.
        
    -   **Ignore Options**: The available ignore options vary based on the data types of the columns being compared:
        
        **Column type**
        
        **Supported ignore options**
        
        Integer types (such as `INT`, `BIGINT`)
        
        You can ignore the **Difference Between Null Value and Value 0**.
        
        String types (such as `STRING`, `VARCHAR`, `TEXT`)
        
        You can ignore the **Difference Between Null Value and Empty String**.
        
        Numeric types (including integer and floating-point)
        
        -   You can set the **Floating Precision** for the comparison.
            
        -   You can ignore the **Difference Between Null Value and Value 0**.
            
        -   You can **Ignore trailing zeros in the decimal part**.
            
        
        Integer compared with string
        
        You can **Ignore trailing zeros in the decimal part**.
        
        Integer compared with floating-point
        
        -   You can **Ignore trailing zeros in the decimal part**.
            
        -   You can ignore the **Difference Between Null Value and Value 0**.
            
        
        Floating-point compared with string
        
        You can **Ignore trailing zeros in the decimal part**.
        
    -   **Operation**: You can **Delete** unnecessary column mappings.
        
3.  The results of a Full-text Comparison are stored in a Data Source that you configure. This allows you to view detailed row-level differences after the task completes.
    
    -   **Data Source Type**: Only MaxCompute data sources are supported.
        
    -   **Data Source Name**: From the drop-down list, select a MaxCompute Data Source that is bound to the workspace.
        
    -   **Connectivity**: Ensure that the selected MaxCompute Data Source can connect to the Resource Group that you configured for the table comparison.
        
    -   **Storage Table**: Click **Generate Storage Table** to create a table in the format `data_comparison_xxxxxx`.
        
    -   **Tunnel Quota**: Select a MaxCompute data transmission resource. For more information, see [Purchase and use exclusive data transmission service resource groups](/help/en/maxcompute/user-guide/purchase-and-use-exclusive-resource-groups-for-dts).
        

### **3\. Scheduling configuration**

After you configure the rules, click **Scheduling Configuration** on the right side of the page to set the node's scheduling properties. For more information, see [Node scheduling configuration](/help/en/dataworks/user-guide/schedule/).

## **Step 3: Deploy and maintain**

### **1\. Deploy the node**

After configuring the node, commit and deploy it. Once deployed, the node runs periodically based on its scheduling configuration.

1.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7335458471/p960575.png) icon in the top toolbar to **Save** the node.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7335458471/p960577.png) icon in the top toolbar to **Deploy** the node.
    

For detailed instructions on deploying nodes, see [Deploy a node or workflow](/help/en/dataworks/user-guide/task-release/).

### **2\. Maintain the node**

Once the Data Comparison node is deployed, you can perform O&M tasks on it in the Operation Center. For more information, see [Operation Center](/help/en/dataworks/user-guide/operation-center-1/).

### **3\. View the validation report**

You can view the data validation report in the task's run log. You can access it in the following ways:

-   In the Operation Center:
    
    1.  In the upper-left corner, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7335458471/p960584.png) icon and navigate to **All Products** > **Data Development And Operations** > **Operation Center (Workflow)**.
        
    2.  In the navigation pane on the left of the Operation Center, choose **Cycle Task Maintenance** > **Cycle Instance**. Find the instance for your Data Comparison node, click **More** in the **Operation** column, and select **View Running Log**.
        
    3.  On the log page, click the **Data Comparison** tab to view the report.
        
-   From the run log:
    
    When you run the Data Comparison node from the Data Development page, click the link in the run log, as shown in the figure, to open the data validation report.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7335458471/p960727.png)
