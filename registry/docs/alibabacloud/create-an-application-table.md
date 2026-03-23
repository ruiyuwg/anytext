An `Application Table` organizes statistical data for specific business scenarios. It consolidates multiple `Atomic Metric`s, `Derived Metric`s, or `Statistic Granularity`s that share the same dimensions and `Period`. This table serves as a foundation for business queries, Online Analytical Processing (OLAP) analysis, and data distribution. This topic describes how to create an `Application Table`.

## Overview

An `Application Table` consolidates business data from multiple metrics that share the same dimensions and time context. It uses a defined `Period` and associated dimensions to generate statistical `Field`s. These `Field`s help you create reports and perform analysis.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3571522771/CAEQUxiBgIC_.JX_5BkiIDEzZGI4ZGU0ZmM1NjQ2ODA5NzlhZTAzOGQ0ODQ2ZmU35973813_20251215171406.593.svg)

## Before you begin

-   You have created a `Data Layer`. `Data Layer`s group tables with similar functions for easier access and management. `Application Table`s are typically placed in the `Application Data Service (ADS) Layer`. This layer aggregates multiple metrics under a specific `Statistic Granularity`, such as a dimension or a combination of dimensions, for business queries and data distribution. You can also place `Application Table`s in other data layers based on your business requirements. For more information about how to create a `Data Layer`, see [Define a data layer](/help/en/dataworks/user-guide/data-warehouse-layering#a08bfd8742cky).
    
-   You have created a `Data Mart` or `Subject Area` to define the business context for the statistical data. For more information, see [Data Mart](/help/en/dataworks/user-guide/business-planning#e6023f7defrj3) and [Subject Area](/help/en/dataworks/user-guide/business-planning#eb4fd0bd6ecbk).
    
-   You have created a `Period` to define the time range for the statistical data. For more information, see [Period](/help/en/dataworks/user-guide/period#task-2090831).
    

## Create an application table

1.  Go to the Data Modeling page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Modeling**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Modeling**.
    
2.  On the **Data Modeling** page, click **Dimensional Modeling** in the top menu bar to go to the **Dimensional Modeling** page.
    
3.  Create the `Application Table`.
    
    1.  On the **Dimensional Modeling** page, hover over the ![加号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3367251371/p289535.png) icon and click **Logical Model** > **Create Application Table**.
        
    2.  Configure the basic information for the `Application Table`.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3367251371/p697524.png)
        
        **Parameter**
        
        **Description**
        
        **Data Layer**
        
        The `Data Layer` where the `Application Table` resides. By default, the **Application Data Service (ADS) Layer** of the **Application Layer** is selected. You can also place the `Application Table` in other data layers based on your business requirements. For more information about how to create a `Data Layer`, see [Define a data layer](/help/en/dataworks/user-guide/data-warehouse-layering#a08bfd8742cky).
        
        **Mart/Subject**
        
        Select a created `Data Mart` or `Subject Area`. For more information, see [Data Mart](/help/en/dataworks/user-guide/business-planning#e6023f7defrj3) and [Subject Area](/help/en/dataworks/user-guide/business-planning#eb4fd0bd6ecbk).
        
        **Granularity**
        
        Select a dimension that defines the table's `Granularity`. For more information, see [Create a conceptual model: Dimension](/help/en/dataworks/user-guide/create-a-dimension).
        
        **Period**
        
        Specifies the time range for the statistical data to be consolidated in the `Application Table`, such as `Last 1 Day` or `Last 7 Days`.
        
        You must select from existing `Period`s. If no existing `Period` meets your business requirements, you can create one. For more information, see [Period](/help/en/dataworks/user-guide/period#task-2090831).
        
        **Modifier**
        
        Specifies the business scope of the statistical data.
        
        You must select from existing `Modifier`s. If no existing `Modifier` meets your business requirements, you can create one. For more information, see [Modifier](/help/en/dataworks/user-guide/modifier#task-2090830).
        
        **Naming Rule**
        
        A checker that enforces the table naming conventions. You can select a checker that you created for a `Data Layer` during data warehouse planning. For more information, see [Configure a data layer checker](/help/en/dataworks/user-guide/data-warehouse-layering#ac1f1059e2xm8) and [Use a checker](/help/en/dataworks/user-guide/data-warehouse-layering#8a4cee1c78dzu).
        
        **Name**
        
        The name of the `Application Table`. If a `Naming Rule` is configured, the table name must comply with the rule.
        
        **Display Name**
        
        The display name of the table.
        
        **Lifecycle**
        
        The retention period of the table in days. An `Application Table` can be retained for up to 36,000 days.
        
        **Owner**
        
        The `Owner` of the `Application Table`. By default, this is the user who created the table.
        
        **Description**
        
        The description of the table.
        
4.  Click **Save** in the upper-left corner to save the `Application Table` configuration.
    

## Add fields to the table

You can add `Field`s to the table in **Shortcut Mode** or **Script Mode**. **Shortcut Mode** supports the following import methods:

-   **Import from Table/View**: Import `Field`s from an existing physical table or view in a compute engine. Search for and select an existing physical table or view from the **Search for Existing Table/View** drop-down list.
    
    **Note**
    
    Currently, you can only import `Field`s from tables or views in MaxCompute, Hologres, and E-MapReduce (EMR) Hive engines.
    
-   **Import from Metrics**: Select `Derived Metric`s to add as `Field`s to the model.
    

## **Shortcut Mode**: **Import from Table/View**

![PixPin_2025-12-15_19-38-48](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7333458671/p1035013.png)

![PixPin_2025-12-15_19-37-12](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7333458671/p1035012.png)

1.  In **Shortcut Mode**, click **Import from Table/View** next to **Expand**.
    
2.  In the **Search for Existing Table/View** box, enter a name to search for a table or view. After selecting a table, choose to import all or some of its `Field`s.
    
    **Note**
    
    -   The search supports fuzzy matching. You can enter a keyword to find all tables or views that contain the keyword in their names.
        
    -   The search does not include tables in the development environment.
        
    
    -   The ![导入全部字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5939402371/p451903.png) icon indicates importing all `Field`s.
        
    -   The ![部分字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5939402371/p451911.png) icon indicates importing a selection of `Field`s.
        
3.  If you choose to import a selection of `Field`s, a window appears showing all `Field`s from the selected table. Select the `Field`s you want to add to the model and click **Import**.
    
4.  If any imported `Field` has an empty **Field Display Name**, you can populate the display name with the `Field`'s description.
    

## **Shortcut Mode**: **Import from Metrics**

![PixPin_2025-12-17_19-29-35](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7433458671/p1036086.png)

1.  In **Shortcut Mode**, click **Import from Metrics** next to **Quick Import**.
    
2.  The window that appears displays all created `Derived Metric`s. You can select the metrics you want to add as `Field`s to the `Application Table`. You can also filter for specific `Derived Metric`s by **Period**, **Business Process**, **Modifier**, or **Atomic Metric**.
    
3.  After you finish, click **Import**.
    

## **Script Mode**

**Script Mode** allows you to define the model using code. After you click **Script Mode**, a window appears with auto-generated modeling code based on the information you have configured. Modify the model information in this window as needed and click **OK**.![代码模式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3646485671/p327972.png)

## Configure field information

After adding `Field`s, you can configure the **Associated Field**, **Redundant Field**, and **Associated Granularity/Metric** for each `Field` based on your business requirements.

1.  Configure `Field` properties.
    
    By default, the `Field` list displays basic properties such as **Field Name**, **Data Type**, **Field Display Name**, **Description**, **Primary Key**, **Not Null**, **Measurement Unit**, and **Actions**. In the upper-right corner of the `Field` list, click **Field Display Settings** to select which properties to display and modify them as needed.
    
2.  Set the **Associated Field Standard** for the `Field`s.
    
    Associating `Field`s with a `Field Standard` normalizes their value content and range.
    
    A **Field Standard** unifies data that shares the same meaning but has different `Field` names by defining common value ranges, units of measure, and other attributes.
    
3.  Set the **Redundant Field**.
    
    In a traditional star schema for `Dimensional Modeling`, dimensions are stored in dimension tables and accessed through foreign keys in the fact table to reduce storage consumption. In `Intelligent Data Modeling`, you can designate frequently used `Field`s, such as user IDs or common analytical dimensions, as `Redundant Field`s. This practice improves downstream query efficiency, simplifies data access, and reduces table joins.
    
    In the **Actions** column for a `Field`, click **Redundant Field** to configure its associated `Field`s.
    
    ![冗余字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5939402371/p328004.png)
    
4.  Set the **Associated Granularity/Metric**.
    
    For `Aggregate Table`s and `Application Table`s, for each `Field`, you can set an **Association Type** to specify the statistical type of its value. The available types are **Statistical Granularity**, **Derived Metric**, and **Atomic Metric**.
    
    -   **Statistical Granularity**: Used to associate with dimension tables and `Field`s within those tables, such as product dimension or seller dimension.
        
    -   **Derived Metric**: Specifies the `Derived Metric` for the statistical value that the `Field` represents. For example, the total payment amount for orders placed on the Hema App in the last 7 days.
        
    -   **Atomic Metric**: Specifies the `Atomic Metric` for the statistical value that the `Field` represents. For example, the total payment amount.
        
    
    **Note**
    
    For `Field`s imported from a table or added in `Script Mode`, no default association type is set. You must set the association type manually.
    
    After configuration, you can specify the exact object to associate with the `Field` in the **Field Association** column of the `Field` list.
    
5.  When you finish the settings, click **Save** in the upper-left corner.
    

## Next steps

After creating the table, you still need to configure `Field` management, associations, and partition settings. Then, publish the table to the corresponding environment. For more information, see the following topics:

-   [Materialize a Logical Model](/help/en/dataworks/user-guide/publish-and-materialize-a-table#task-2090839)
    
-   [Generate ETL code based on a model](/help/en/dataworks/user-guide/develop-a-model)
    
-   [Model management and application](/help/en/dataworks/user-guide/view-and-manage-models)
