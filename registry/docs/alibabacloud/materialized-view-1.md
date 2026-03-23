Data Asset Governance supports materialized views based on automated governance and intelligent recommendations. This is an intelligent and automated solution for big data computing tasks that need to frequently handle a large number of similar subqueries. After you enable materialized views, Data Asset Governance can automatically identify and classify similar subqueries in MaxCompute and generate recommendations for creating materialized views. You can create materialized views based on the recommendations with a few clicks. This greatly improves the computing efficiency and saves computing resources.

## Introduction to materialized views

The materialized view feature provided by the Automated Governance module of DataWorks relies on the materialized view recommendation and management capability of MaxCompute. For more information, see [Recommendations and management of materialized views](/help/en/maxcompute/user-guide/materialized-views). In DataWorks scheduling scenarios, this feature can quickly identify similar subqueries in MaxCompute SQL statements and provide recommended view generation SQL statements to help you quickly create materialized views.

When DataWorks creates a materialized view, it synchronously creates a node that generates view data and deploys the node to the production environment. Nodes that have similar subqueries are specified as the descendant nodes of the materialized view refresh node. DataWorks preferentially schedules the materialized view refresh node based on the scheduling dependencies. When the descendant nodes use a public subquery, the nodes query data from the materialized view, which has already generated the queried data. This reduces the computing frequency.

**The feature of materialized views is available in the following regions**: China (Hangzhou), China (Shanghai), China (Shenzhen), China (Beijing), and China (Chengdu).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0137206671/CAEQUBiBgIDn5feY2RkiIGQzOWI0ZTJjNmEzNTQxY2U4MjE1MjVmMmU4MzQ1OWI14426550_20240524094118.448.svg)

## **Prerequisites**

-   A MaxCompute data source is added. For more information, see [Associate a MaxCompute computing resource](/help/en/dataworks/user-guide/create-a-maxcompute-data-source).
    
-   The materialized view intelligent analysis feature is enabled in MaxCompute. For more information, see [Recommendations and management of materialized views](/help/en/maxcompute/user-guide/materialized-views).
    

## **Procedure**

1.  Enable the materialized view intelligent recommendation feature.
    
    After you enable the materialized view intelligent recommendation feature for a MaxCompute project that is associated with DataWorks DataStudio, recommendations for creating materialized views are generated and displayed on the Materialized View Recommendation tab if the following conditions are met:
    
    -   An auto triggered task is run for more than three consecutive days.
        
    -   The number of input rows in a public subquery is greater than 1,000,000.
        
    -   The public subquery contains operators that are related to data reorganization, such as join or aggregation operators.
        
2.  View recommendations and create a materialized view.
    
    You can check whether the recommendations are appropriate and conduct materialized view creation governance.
    
    If you configure the parameters in the **Create Materialized View Refresh Node** and **Add Materialized View Refresh Node as Ancestor Node** sections when you create a materialized view, the materialized view takes effect in DataWorks scheduling scenarios.
    
    A materialized view refresh node is automatically added as an ancestor node of the nodes that have similar computing logic. When an ancestor node or the node that generates the source table generates new output, the materialized view is refreshed to produce the latest data for descendant nodes.
    
3.  Manage materialized views.
    
    You can view the usage of materialized views created based on recommendations in the current workspace and analyze or delete materialized views whose output data does not meet your requirements.
    

## **Procedure**

### **Step 1: Enable or disable the materialized view intelligent recommendation feature**

**Note**

Only users who are assigned the Workspace Administrator role can enable or disable the materialized view intelligent recommendation feature.

1.  Go to the Data Asset Governance page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Asset Governance**. On the page that appears, click **Go to Data Asset Governance**.
    
2.  In the left-side navigation pane, choose **Governance** > **Automation** > **MV**.
    
3.  On the MV page, select a workspace from the **Workspace** drop-down list and click **Settings for Materialized View Recommendation**. In the Settings for Materialized View Recommendation dialog box, turn on the switches in the Intelligent Materialized View Recommendation column for the projects for which you want to enable materialized view intelligent recommendation.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0251734371/p784038.png)
    

### Step 2: View materialized view recommendations

The materialized view intelligent recommendation module can automatically identify materialized views that can be created and the associated computing tasks. The related owners can determine whether the materialized views are appropriate and conduct materialized view creation governance.

**Important**

To improve the accuracy of recommendations, the system generates and displays relevant recommendations on the Materialized View Recommendation tab only when the following conditions are met after you enable materialized view intelligent recommendation:

-   An auto triggered task is run for more than three consecutive days.
    
-   The number of input rows in a public subquery is greater than 1,000,000.
    
-   The public subquery contains operators that are related to data reorganization, such as join or aggregation operators.
    

1.  Select a workspace from the **Workspace** drop-down list in the top navigation bar and click the **Materialized View Recommendation** tab.
    
2.  Modify the filter conditions, such as **Project** and **Analysis Time Interval**, to check whether recommendations for creating materialized views are generated.
    
    If recommendations for creating materialized views are available within the time period specified by the **Analysis Time Interval** parameter, you can view the recommendations.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8397029171/p784041.png)
    
    Parameters:
    
    -   **Materialized View Recommendation**: the identifier of a materialized view recommendation task. The identifier contains the summarized information about the public subquery. The identifier is in the `Aggregate: xx; Inputs: xx, xx;` format.
        
        -   Aggregate: indicates whether the recommended public subquery contains the aggregation operation.
            
        -   Inputs: lists the names of all source tables used by the public subquery.
            
    -   **Number of Possibly Affected SQL Statements**: the number of jobs that use the public subquery.
        
    -   **Possibly Affected Node**: the number of scheduling nodes that use the public subquery.
        
    -   **Recommendation Rating**: the extent of recommendation, which is determined by the repetition of subqueries, the subquery complexity, and the number of input data records.
        
3.  Click the identifier of a materialized view recommendation task in the **Materialized View Recommendation** column to view the details of the public subquery. The details include the **source table information**, **public subquery**, **jobs**, and **scheduling tasks**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8397029171/p784098.png)
    

### Step 3: Create a materialized view

1.  On the **Materialized View Recommendation** tab, determine whether to create a materialized view based on your business requirements and the recommendation details. To create a materialized view, find the recommendation based on which you want to create a materialized view and click **Create Materialized View** in the **Actions** column.
    
2.  On the **Create Materialized View** page, configure the parameters for the materialized view.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8397029171/p784586.png)
    
    1.  In the **Create Materialized View** section, create a materialized view refresh node and generate a materialized view based on the public subquery of input tasks.
        
        **Parameter**
        
        **Description**
        
        Input Table
        
        The input tables, which are automatically obtained. You do not need to modify the input tables.
        
        Create Materialized View or Not
        
        If this is the first time you create a materialized view, the default value **Create Materialized View** is used. You do not need to change the value.
        
        **Note**
        
        If a materialized view for which the same input tables are selected already exists, you can set the parameter to **Select Existing Materialized View**.
        
        Materialized View Name
        
        The name of the materialized view. You can specify a name based on your business requirements.
        
        Lifecycle
        
        The lifecycle of the materialized view. Valid values: **1 Day**, **7 Days**, and **Custom Days**.
        
        Refresh Type
        
        The refresh mode of the materialized view.
        
        -   **Refresh at Fixed Interval**
            
            If the table from which you want to read data is the output of a task in DataWorks, Time Management Cron Mode is selected by default. Otherwise, Refresh at Fixed Interval is selected.
            
        -   **Time Management Cron Mode**
            
            The materialized view is refreshed at the most recent output time of the node that generates the ancestor table from which you want to read data.
            
        -   **Do Not Refresh**
            
        
        Preview Statement
        
        The SQL statements of the materialized view.
        
    2.  Optional. In the **Create Materialized View Refresh Node** section, create a materialized view refresh node. When the node that generates the source table generates new output, the materialized view refresh node dynamically refreshes the materialized view to materialize the latest data.
        
        Configure the **Materialized View Refresh Node Name** and **Node Running Timeout Period** parameters.
        
    3.  Optional. In the **Add Materialized View Refresh Node as Ancestor Node** section, add the materialized view refresh node as an ancestor node of nodes that have similar computing logic to increase the query hit rate of incremental data.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5501829171/p803998.png)
        
        The computing tasks displayed in this section include tasks in the current workspace and tasks in other workspaces. You can click **View Details** to view the details of the computing tasks.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8397029171/p784905.png)
        
3.  Click **Create and Execute**. DataWorks starts to create a materialized view. You can view the status of the materialized view in the **Operation Status** column on the **Materialized View Recommendation** tab, or click **View Details** in the **Actions** column to view the progress.
    
    -   Valid values of the **Operation Status** parameter:
        
        -   To Be Created: The materialized view is not created by using DataWorks.
            
        -   Created: The materialized view is created.
            
        -   Creating: The process of creating the materialized view by using DataWorks is initiated but the creation is not finished.
            
        -   Create Failed: The process of creating the materialized view by using DataWorks is initiated but the creation failed.
            
    -   You can click **View Details** to view the details of the materialized view creation process.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0543475171/p785055.png)
        

If you configure the parameters in the **Create Materialized View Refresh Node** and **Add Materialized View Refresh Node as Ancestor Node** sections when you create a materialized view, a materialized view refresh node is added as an ancestor node of nodes that have similar computing logic. The owner of the materialized view refresh node is the account that is used to create the materialized view.

### Step 4: Manage materialized views

You can view the usage of materialized views in the current workspace and analyze or delete the materialized views whose output data does not meet your requirements.

1.  Select a workspace from the **Workspace** drop-down list in the top navigation bar and click the **Materialized View Management** tab.
    
2.  Specify the filter conditions, such as **Project**, to view the materialized views that are created based on recommendations.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8397029171/p785065.png)
    
    **Important**
    
    If the quota of your MaxCompute project uses the pay-as-you-go billing method, the total saved compute capacity is calculated by using the following formula: `Amount of input data × SQL complexity`. The fee for MaxCompute SQL jobs is calculated by using the following formula: `Compute capacity × Unit price`. For more information, see [Computing pricing (pay-as-you-go)](/help/en/maxcompute/product-overview/computing-pricing-pay-as-you-go).
    
    -   Click the name of a materialized view in the **MV** column to view the details of the materialized view.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6443195171/p785066.png)
        
    -   Find the materialized view that you want to manage and click **Delete** in the **Actions** column to delete the materialized view.
