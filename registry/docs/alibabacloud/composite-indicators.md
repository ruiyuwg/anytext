A derived metric collects statistics about a business activity within a specific period. This makes it unsuitable for data comparisons, such as calculating business growth rates or value differences. For example, you cannot use a derived metric to calculate the week-over-week growth rate for a business activity. To address this limitation, DataWorks provides composite metrics. Composite metrics are calculated from derived metrics using computation rules. They help you define business metrics more flexibly and with finer granularity. This topic describes how to create and use composite metrics.

## **Prerequisites**

-   You have created derived metrics. These metrics are the basis for calculating the composite metric. For more information, see [Create a derived metric](/help/en/dataworks/user-guide/derived-metric).
    
-   You have created a data layer to store composite metrics. You need to select the appropriate layer based on your requirements. For more information, see [Define data warehouse layers](/help/en/dataworks/user-guide/data-warehouse-layering#a08bfd8742cky).
    
    -   Data Warehouse Summary (DWS) layer: Stores composite metrics of the common layer.
        
    -   Application data layer: Stores composite metrics of the application layer.
        
-   You have created a business process, data mart, or subject area. This is required to categorize the composite metric for a specific scenario or product. The requirements vary based on the data layer of the composite metric:
    
    -   Composite metric (common layer): A business process is required. For more information, see [Business processes](/help/en/dataworks/user-guide/business-planning#88bfddccc3ibq).
        
    -   Composite metric (application layer): A data mart or subject area is required. For more information, see [Data marts](/help/en/dataworks/user-guide/business-planning#e6023f7defrj3) or [Subject areas](/help/en/dataworks/user-guide/business-planning#eb4fd0bd6ecbk).
        

## **Go to the Composite Metric page**

1.  Go to Data Modeling.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Modeling**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Modeling**.
    
2.  On the **Data Modeling** page, click **Data Metric** in the top navigation bar.
    

## **Create a composite metric**

In the upper-right corner of the Composite Metric list, click ![PixPin_2025-12-10_20-49-17](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3403255671/p1034166.png) to create a composite metric. The key parameters are described as follows:

-   Computing logic
    
    DataWorks provides two methods to define the computing logic for a composite metric:
    
    -   **Expression**: This method is flexible. You can define a custom calculation expression as needed. Use the at sign (@) to reference derived metrics or composite metrics in the expression.
        
    -   **Comparison**: This method is used only to calculate year-over-year changes for data in the same period or sequential changes between the current and previous periods. You can select the derived metric and comparison period.
        
-   Basic information
    
    You can create a composite metric for the common layer or application layer as needed. Follow the on-screen instructions to select the business scope for the metric. The specific parameters may vary based on the user interface (UI).
    

After you create the metric, you must **save** and **commit** the current version. Only committed composite metrics can be referenced by other metrics.

**Note**

-   Only saved composite metrics can be committed.
    
-   Each time you commit a composite metric, a new version is generated. A version cannot be committed again after it is committed.
    

## **Version management**

In the right-side navigation pane of the metric configuration page, you can view metric versions and perform the management operations described below.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6132245671/p692557.png)

-   **Version Comparison**
    
    You can compare the content of the selected versions.
    
    -   If you select only one version, the system compares the selected version with the currently saved metric content.
        
    -   You can select a maximum of two versions for comparison.
        
    
-   **Rollback**
    
    You can switch to a desired metric version. After you switch, the content on the metric configuration page is overwritten by the content of the target version.
    
    **Note**
    
    The rollback operation updates only the UI configuration to the selected version. If you want models and derived metrics to reference the latest configuration, you must save and commit the changes again.
    

## **Batch operations for composite metrics**

Click ![PixPin_2025-12-11_10-43-27](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3403255671/p1034233.png) in the upper-right corner of the Composite Metric tree to switch to the list view. You can select multiple metrics and perform the batch operations described below:

-   **Batch Export**: You can export metrics in one of the following three ways.
    
    -   **Export All**: Exports all composite metrics in the current workspace.
        
    -   **Export Searched Objects**: You can search for metrics by keyword. This operation exports all matching search results.
        
        **Note**
        
        Fuzzy search is supported. After you enter a keyword, all composite metrics whose names contain the keyword are returned.
        
    -   **Export Selected Objects**: Exports all selected metrics.
        
    
    After the export is complete, you can download the exported file to your local computer.
    
-   **Batch Delete or Submit**
    
    If you have multiple obsolete metrics or need to commit multiple newly created metrics in a batch, you can perform the operations in the Composite Metric list.
    
    -   **Batch Delete**: After a metric is deleted, it can no longer be associated with or referenced by model tables. If a metric is referenced by a model table, you must remove the reference relationship before you can delete the metric.
        
    -   **Batch Submit**: After a metric is committed, it can be associated with and referenced by model tables. A new version record is generated for each commit. For more information about metric versions, see [Version management](#2171ab601fjrv).
