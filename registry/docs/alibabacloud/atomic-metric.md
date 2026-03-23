An atomic metric defines the statistical criteria and calculation logic for a business activity. You can create atomic metrics based on business processes to measure a specific business activity. For example, if the business activity is a purchase, the atomic metric can be the payment amount. This topic describes how to create atomic metrics.

## Prerequisites

A data domain and a business process must be created to define a specific business activity for statistical analysis. For more information, see [Business planning](/help/en/dataworks/user-guide/business-planning).

## Function introduction

An atomic metric is the smallest unit of measure in intelligent data modeling. It is used for the quantitative calculation of a business behavior. It defines "what to calculate" and "how to calculate".

An atomic metric consists of two parts:

-   Basic information: Defines the basic information and business definition of the metric. It is usually a numeric field in a fact table. For example, `amt` (amount).
    
-   Calculation logic (Aggregation Function): Defines the calculation method. For example, `SUM` (summation), `COUNT` (count), `AVG` (average), `MAX` (maximum), and `MIN` (minimum).
    

Its core feature is that it is indivisible. Its definition does not contain any business filters, such as periods or channel sources. It is the foundation for building derived metrics and compound indicators.

## Create an atomic metric

1.  Go to the **Atomic Metric** page.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Modeling**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Modeling**.
        
    2.  On the **Intelligent Data Modeling** page, click **Data Metric** in the top navigation bar.
        
    3.  In the navigation pane on the left of the **Data Metric** page, click **Atomic Metric** to open the **Atomic Metric** page.
        
2.  Create an atomic metric.
    
    1.  On the **Atomic Metric** page, click the ![新建](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2897207361/p289518.png) icon to create a new atomic metric.
        
3.  Configure the atomic metric.
    
    1.  Configure basic information.
        
        Configure the basic information for the atomic metric as described in the table below.
        
        **Parameter**
        
        **Description**
        
        **Abbreviation**
        
        The abbreviation of the atomic metric. It is the unique identifier of the metric and cannot be changed after creation.
        
        **Name**
        
        The English name of the atomic metric.
        
        Use the English term for the value that the metric measures. This helps you quickly understand the statistical type of the metric.
        
        **Display Name**
        
        The Chinese name of the atomic metric.
        
        Use the Chinese term for the value that the metric measures. This helps you quickly understand the statistical type of the metric.
        
        **Effective Scope**
        
        The statistical definition of the business activity measured by the atomic metric. This prevents ambiguity during statistical analysis.
        
        For example, the business definition of Actual Order Payment Amount can be `The total amount paid by users through payment channels after an order is generated. This amount is the total sum actually paid by the user after all coupon discounts are deducted.`
        
        **Business Category**
        
        A business category can be associated with a data domain or a data mart.
        
        **Business Process**
        
        The business process to which the atomic metric belongs. It specifies the business activity for statistical analysis.
        
        **Owner**
        
        The owner of the atomic metric. By default, this is the user who creates the atomic metric.
        
        **Description**
        
        The description of the atomic metric.
        
    2.  Configure the calculation logic.
        
        The calculation logic defines only the calculation method and unit for the atomic metric. In practice, you must write code based on the defined calculation logic to perform the actual calculation. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Function**
        
        Select the function to use for the metric calculation.
        
        **Decimal Places**
        
        The number of decimal places, determined by the selected measurement unit. For example, if you measure the payment amount in yuan, set the number of decimal places to 2.
        
        **Data Unit**
        
        Select a suitable measurement unit based on the statistical data type of the atomic metric. For example, to measure the payment amount, you can select **Currency Unit**.
        
        **Note**
        
        If no existing unit types meet your business requirements, go to the measurement unit page to create one. For more information, see [Measurement unit](/help/en/dataworks/user-guide/data-standards#title-iw5-ung-j31).
        
        **Deduplicate**
        
        Specify whether to remove duplicates during statistical analysis based on your business needs. For example, if the atomic metric is the number of members, you must remove duplicates instead of simply summing them up.
        
4.  Click **Save**.
    
5.  Click **Submit** to publish the current version of the atomic metric. Atomic metrics must be submitted before they can be referenced by models or derived metrics.
    
    **Note**
    
    -   Only saved atomic metrics can be submitted.
        
    -   Each submission of an atomic metric generates a new version. A successfully submitted version cannot be submitted again.
        
    

## Manage versions and associated tables

In the right-side navigation pane of the metric editing page, you can also manage metric versions or view associated tables.

**Operation**

**Description**

**Version Management**

View all version information for the metric. You can also perform the following operations:

-   **Version Comparsion**
    
    Compare the content differences between the selected versions. You can select a maximum of two versions to compare. If you select only one version, it is compared with the currently saved metric content.
    
-   **Roll Back**
    
    Switch to a desired metric version. After you switch, the content on the metric editing page is overwritten by the content of the target version.
    
    **Note**
    
    The rollback operation only updates the interface configuration to the selected version. If you want models and derived metrics to reference the latest configuration, you must save and submit it again.
    

**Associate Tables**

View the model table fields associated with the metric. Click **View Details** next to a field to go to the model table details page for more information.

## Import atomic metrics

To create many atomic metrics, you can use the batch import feature. DataWorks provides an import template. You can fill in the template with the atomic metrics that you want to import and then upload the file.

1.  Go to the **Atomic Metric** page, hover over the ![导入](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0075072661/p389579.png) icon, and click **Import From Excel**.
    
    For instructions on how to go to the Atomic Metric page, see the steps in the "Create an atomic metric" section.
    
2.  Select an import type and download the template.
    
    On the **Confirm Import Type** tab, select an import type for the atomic metrics, download the corresponding template, and then fill in the template.
    
    **Note**
    
    After you select an import type, you can preview the corresponding template and prepare the field content.
    
    ![导入原子指标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8884942671/p668010.png)
    
3.  Import and confirm the data.
    
    On the **Data Import** tab, upload and preview the data file. You can choose to preview only the fields whose names already exist in DataWorks, and then delete or modify them as needed.
    
    -   The selected import type determines the **Import Mode** and **Import Status**.
        
        -   **Import Mode**: If an object in the imported file has the same name as an existing object in DataWorks, you can choose to skip the object or overwrite the existing object.
            
        -   **Import Status**:
            
            -   **Import And Save**: Imports and saves the data without creating a new version.
                
            -   **Import And Submit**: Imports the data and submits it as a new version.
                
    -   Batch import supports only .xlsx files. You can import up to 30,000 data records at a time, and the file size cannot exceed 10 MB.
        
    
    ![导入原子指标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8884942671/p668031.png)
    
4.  View the import result.
    
    On the **OK** tab, you can view the import details. In the list, click **View More Details** next to an atomic metric to open its editing page and perform additional operations. If the import fails, resolve the error based on the provided details and try the import again.
    

## Export atomic metrics

To export many atomic metrics, you can use the batch export feature.

1.  Go to the atomic metric list page.
    
    On the atomic metric page, double-click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8884942671/p1024302.png) icon above the left-side directory tree to open the atomic metric list. On this page, you can view all created atomic metrics.
    
2.  Select the metrics to export.
    
    **Note**
    
    You can skip this step if you use **Export All**.
    
    You can select metrics in the following two ways:
    
    -   **Search by keyword**: Enter a keyword in the search box to find the required metrics.
        
        **Note**
        
        Fuzzy search is supported. After you enter a keyword, all atomic metrics whose names contain the keyword are displayed.
        
    -   **Select directly**: Select the required metrics from the list.
        
    
3.  Batch export the atomic metrics.
    
    You can export the metrics in one of the following three ways:
    
    -   **Export All**: Exports all atomic metrics in the current workspace.
        
    -   **Export Searched Objects**: Exports all metrics that match the keyword entered in the search box.
        
    -   **Export Selected Objects**: Exports the selected metrics.
        
    
4.  View and download the export result.
    
    After you start an atomic metric export task, you are automatically redirected to the **Details of Export Status of Atomic Metric** page, where you can monitor the export status. After the export is successful, click **Download File** to download the atomic metrics to your local computer.
    

## Batch delete and submit atomic metrics

If you have multiple obsolete atomic metrics or multiple metrics that have been created but not submitted, you can go to the atomic metric list to delete or submit them in a batch.

1.  Go to the atomic metric list page.
    
    On the atomic metric page, double-click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8884942671/p1024302.png) icon above the left-side directory tree to open the atomic metric list. On this page, you can view all created atomic metrics.
    
2.  Select the metrics for the batch operation.
    
    **Note**
    
    For batch submission, you can select only atomic metrics that are saved but not submitted.
    
3.  Choose to batch delete or submit the metrics as needed.
    
    -   **Batch Delete**: After metrics are deleted, they cannot be referenced by models or derived metrics.
        
        **Note**
        
        If an atomic metric is referenced by a model or derived metric, you must remove the reference before you can delete the metric.
        
    -   **Batch Submit**: Submits metrics so that they can be referenced by models and derived metrics. This action also generates a new version record. For more information about metric versions, see [Manage versions and associated tables](#section-hb7-vv0-hir).
        
    

## What to do next

After you create an atomic metric, it can be referenced by derived metrics and models to retrieve the value of a target metric for specific times, dimensions, and business conditions. For more information, see [Derived metrics](/help/en/dataworks/user-guide/derived-metric#task-2090832) and [Publish a model to a compute engine](/help/en/dataworks/user-guide/publish-and-materialize-a-table#section-zqu-70i-zcv).
