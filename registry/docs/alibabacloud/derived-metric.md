A derived metric measures a specific business activity over a set period and within a target scope. For example, you can use a derived metric to track the total sales amount in Shanghai over the last week. This topic describes how to create a derived metric and perform other operations, such as managing versions, viewing associated tables, and exporting or deleting derived metrics.

## Prerequisites

Complete the following prerequisites.

**Item**

**Description**

[atomic metric](/help/en/dataworks/user-guide/atomic-metric#task-2090818)

Defines the business definition and calculation logic for a statistical value.

[modifier](/help/en/dataworks/user-guide/modifier#task-2090830)

Defines the business scope for a statistical value.

[period](/help/en/dataworks/user-guide/period#task-2090831)

Defines the time range for a statistical value.

[Create a logical model: dimension table](/help/en/dataworks/user-guide/create-a-dimension-table#task-2090825)

Defines the analytical dimensions for the business activity.

[Create a Data Warehouse Layer](/help/en/dataworks/user-guide/data-warehouse-layering#a08bfd8742cky)

Select the appropriate layer.

-   **DWS**: Hosts derived metrics in the common layer.
    
-   **Application data service (ADS) layer**: Hosts derived metrics in the application layer.
    

Create as needed:

-   [data domain](/help/en/dataworks/user-guide/business-planning#0325b13dbd1hy) or [business process](/help/en/dataworks/user-guide/business-planning#88bfddccc3ibq)
    
-   [data mart](/help/en/dataworks/user-guide/business-planning#e6023f7defrj3) or [subject area](/help/en/dataworks/user-guide/business-planning#eb4fd0bd6ecbk)
    

-   For derived metrics in the common layer, create a data domain or business process to categorize business data.
    
-   For derived metrics in the application layer, create a data mart or subject area to categorize data for a specific scenario or product.
    

## Overview

A derived metric is a numerical indicator of business performance for a specific activity. It consists of an **atomic metric, a period, and one or more modifiers**. Each derived metric is **uniquely** associated with one atomic metric and reflects that metric's value within a specific time and business context.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3165022771/CAEQUxiBgIDz.9b.5BkiIDRiMTM5ZjYzZTYyMzQwMTg5MzMyNmUzMmFkNmQ5YjI15914107_20251127175137.647.svg)

-   **atomic metric**: Defines the business definition and calculation logic. For example, total number of orders.
    
-   **period**: Defines the time range for the statistics. For example, a calendar day.
    
-   **modifier**: Narrows the business scope. For example, online grocery stores or offline grocery stores. A derived metric can include one or more modifiers.
    
-   **derived metric**: Combines an atomic metric, modifiers, and a period to measure business performance under specific conditions. For example, you can calculate the `total number of orders from online grocery stores within a single calendar day` or the `total number of orders from both online and offline grocery stores within a single calendar day`.
    

## Go to the Derived Metric page

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Modeling**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Modeling**.
    
2.  On the **Data Modeling** page, click **Data Metrics** in the top navigation bar to open the **Derived Metric** page.
    
    On this page, you can create derived metrics in the **Common Layer** or the **Application Layer** as needed. You can create a single derived metric or multiple derived metrics in a batch.
    
    Business activities are often complex. You may need to analyze multiple activities across different time frames and scopes within a defined data domain. Use the batch creation feature to quickly generate multiple derived metrics for a specific type of business activity. For more information, see [Create multiple derived metrics](#section-evv-ee5-tvs) and [Create a single derived metric](#section-w4r-heb-6jx).
    

## Create multiple derived metrics

1.  Start the creation process.
    
    On the **Derived Metric** page, hover over the ![新建](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2897207361/p289518.png) icon and click **Multiple Derived Metrics**.
    
2.  Build the derived metric model.
    
    1.  Select the atomic metrics, modifiers, and periods for the derived metrics.
        
        **Number**
        
        **Description**
        
        1
        
        In the left pane of the canvas, select the **Atomic Metric**, **Period**, and **Modifier** components for your derived metrics.
        
        **Note**
        
        -   If no existing **Atomic Metric**, **Period**, or **Modifier** meets your business needs, click **Create** to create one.
            
        -   Each derived metric consists of one **Atomic Metric**, one **Period**, and one or more **Modifier**.
            
        
        2
        
        In the right pane, a tree displays the derived metrics that will be generated. The metric statuses are as follows:
        
        -   ![派生指标状态](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6738037361/p289854.png): The derived metric does not exist and will be created.
            
        -   ![成功](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7738037361/p289862.png): The derived metric already exists and will be skipped during generation.
            
        -   ![复制](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9619072661/p477289.png): Copies the current metric.
            
        
        3
        
        In the upper-right corner of the canvas, you can use the toolbar to zoom in, zoom out, center the view, or switch to full-screen mode.
        
    2.  Click **Generate Derived Metrics**.
        
3.  Configure and generate the derived metrics.
    
    1.  Select the data layer and checker.
        
        In the Generate Derived Metrics dialog box, select either the common layer or application layer for the derived metrics. Also, select a checker to validate the naming conventions for the metrics.
        
        **Note**
        
        If no checker is available, you can create one in Data Warehouse Layer. For more information, see [Configure a checker for a data warehouse layer](/help/en/dataworks/user-guide/data-warehouse-layering#ac1f1059e2xm8).
        
    2.  Click **Next Step**.
        
    3.  Select the derived metrics to generate.
        
        1.  Select the derived metrics you want to create from the model based on your business requirements. By default, all metrics in the model are selected.
            
        2.  Click **Create** or **Create and Submit** to create the derived metrics in a batch.
            
            -   **Create**: Creates the selected metrics. You must then go to the edit page for each metric to submit it individually.
                
            -   **Create and Submit**: Creates and submits the selected metrics. Only submitted metrics can be referenced by model tables.
                
            
            After a derived metric is created, its status in the tree changes from ![派生指标状态](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6738037361/p289854.png) to ![成功](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7738037361/p289862.png).![已创建状态](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9619072661/p289857.png)
            
        
    4.  View the created derived metrics.
        
        You can find the created derived metrics in the derived metric list.
        

## Create a single derived metric

1.  Start the creation process.
    
    On the **Derived Metric** page, hover over the ![新建](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2897207361/p289518.png) icon and click **Derived Metric**.
    
2.  Configure the new derived metric.
    
    1.  Configure the **Business Logic**.
        
        Select the period, modifiers, and atomic metric based on your business requirements. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Period**
        
        The time range for the business activity statistics, such as Last Day or Last Week.
        
        **Modifier**
        
        The scope constraint for the business activity statistics, such as Online or Offline.
        
        **Atomic Metric**
        
        Defines the calculation logic for the target business activity and its statistical value, such as Order Amount.
        
    2.  Configure the **Basic Information**.
        
        You can choose to create a metric in either the Data warehouse summary (DWS) layer or the Application data service (ADS) layer. The following table describes the basic information parameters for a derived metric.
        
        **Parameter**
        
        **Description**
        
        **Data Layer**
        
        Select the layer where the derived metric belongs.
        
        **Business Category**
        
        Specifies the business category to which the derived metric belongs. A business category can be associated with data domains and data marts.
        
        This parameter is required when **Data Layer** is set to Data warehouse summary (DWS) layer.
        
        **Business Process**
        
        Specifies the type of business activity.
        
        This parameter is required when **Data Layer** is set to Data warehouse summary (DWS) layer.
        
        **Mart/Subject**
        
        Specifies the business activity category for a specific scenario or product.
        
        This parameter is required when **Data Layer** is set to Application data service (ADS) layer.
        
        **Display Name**
        
        The display name of the derived metric. Click **Intelligent Recommendation** to automatically generate a name in the format of `Period + Modifier + Atomic Metric`. This helps you quickly understand what the metric measures.
        
        **Note**
        
        -   The **Intelligent Recommendation** button appears only after you select an **Atomic Metric** and a **Period** in the **Business Logic** section.
            
        -   You can also click the drop-down icon next to Intelligent Recommendation to select a checker to validate the naming convention. If no suitable checker is available, you can create one in Data Warehouse Layer. For more information, see [Configure a checker for a data warehouse layer](/help/en/dataworks/user-guide/data-warehouse-layering#ac1f1059e2xm8).
            
        
        **Abbreviation**
        
        An abbreviation for the derived metric. Click **Intelligent Recommendation** to automatically generate an abbreviation in the format of `Atomic Metric + Period + Modifier`. This format helps you quickly understand what the metric measures.
        
        **Note**
        
        -   The **Intelligent Recommendation** button appears only after you select an **Atomic Metric** and a **Period** in the **Business Logic** section.
            
        -   You can also click the drop-down icon next to Intelligent Recommendation to select a checker to validate the naming convention. If no suitable checker is available, you can create one in Data Warehouse Layer. For more information, see [Configure a checker for a data warehouse layer](/help/en/dataworks/user-guide/data-warehouse-layering#ac1f1059e2xm8).
            
        
        **Name**
        
        The name of the derived metric, in English.
        
        **Owner**
        
        The owner of the derived metric. Defaults to the user who created it.
        
        **Description**
        
        A description of the derived metric.
        
3.  Click **Save** to save the configuration.
    
4.  Click **Submit** to publish the current version of the derived metric. Only submitted derived metrics can be referenced by model tables.
    
    **Note**
    
    -   You must save a derived metric before you can submit it.
        
    -   Each submission creates a new version. A submitted version cannot be resubmitted.
        
    

## Version management and associated tables

On the metric editing page, use the right-side panel to manage versions or view associated tables.

**Actions**

**Description**

**Version Management**

View the version history of the metric. You can perform the following actions:

-   **Version Comparison**
    
    Compare the configurations of two selected versions. If you select only one version, the system compares it with the currently saved content of the metric.
    
    **Note**
    
    You can select a maximum of two versions to compare.
    
-   **Roll Back**
    
    Revert the metric to a previous version. This action overwrites the content on the editing page with the content of the selected version.
    
    **Note**
    
    Rolling back only updates the configuration on the page. You must save and submit the metric again for the changes to take effect and be referenceable by model tables.
    

**Associated Tables**

View the model table columns that are associated with the metric. Click **View Details** next to a column to go to the table details page.

## Export derived metrics

Use the batch export feature to export many derived metrics at once.

1.  Go to the derived metric list.
    
    Click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6657180071/p710077.png) icon to go to the derived metric list. On this page, you can view all created derived metrics.
    
2.  Select the metrics to export.
    
    **Note**
    
    This step is not required if you choose to **Export All**.
    
    You can select metrics in one of the following ways:
    
    -   **Search by keyword**: Enter a keyword in the search box to find the desired metrics.
        
        **Note**
        
        The search supports fuzzy matching. All derived metrics whose names contain the keyword are returned.
        
    -   **Select manually**: Select the checkboxes of the desired metrics.
        
    
3.  Export the metrics.
    
    You can export metrics in one of the following ways:
    
    -   **Export All**: Exports all derived metrics that have been created in the current Workspace.
        
    -   **Export Searched Objects**: Exports all metrics that match the search keyword. You must first search for the desired metrics.
        
    -   **Export Selected Objects**: Exports only the metrics you have selected. You must first select the desired metrics.
        
    
4.  View and download the exported file.
    
    After you start an export task, the **Derived Metric Export Status** page opens, where you can view the export status. When the export is complete, click **Download File** to save the file to your local computer.
    

## Batch delete and submit metrics

You can batch delete obsolete metrics or batch submit unsubmitted metrics from the derived metric list.

1.  Go to the derived metric list.
    
    Click the ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6657180071/p710077.png) icon to go to the derived metric list. On this page, you can view all created derived metrics.
    
2.  Select the metrics for the batch operation.
    
    **Note**
    
    For batch submissions, you can select only saved, unsubmitted metrics.
    
3.  Choose whether to delete or submit the selected metrics based on your business requirements.
    
    -   **Batch Delete**: Deletes the selected metrics. Deleted metrics can no longer be associated with or referenced by model tables.
        
        **Note**
        
        You cannot delete a derived metric that is referenced by a model table. You must first remove the reference.
        
    -   **Batch Submit**: Submits the selected metrics so they can be associated with and referenced by model tables. This action creates a new version record for each metric. For more information about versions, see [Version management and associated tables](#section-1bh-aif-el6).
        
    

## Next steps

After you create a derived metric, you can reference it in summary tables or application tables. These tables can then be used for business queries, online analytical processing (OLAP) analysis, and data distribution. To learn how to reference a derived metric, see [Materialize a logical model](/help/en/dataworks/user-guide/publish-and-materialize-a-table#task-2090839).
