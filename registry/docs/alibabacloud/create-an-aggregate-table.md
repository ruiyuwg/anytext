An Aggregate Table organizes statistical data from multiple Derived Metrics within a single Data Domain, using a consistent period and shared dimensions. It supports business queries, OLAP Analysis, and data distribution. This topic explains how to create an aggregate table.

## How it works

An Aggregate Table consolidates multiple Derived Metrics from a Data Domain using a period and associated dimensions. The associated dimensions, period, and Derived Metrics generate statistical fields in the aggregate table for reporting and analysis.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7171522771/CAEQUxiBgMCZ.dj.5BkiIDk3NGQ0MTc1YTFhOTQ2NTNiOGIyYThlMWQ3YjhhY2Y05973813_20251215171406.593.svg)

## Prerequisites

-   You have created data layers. Data layering groups tables with similar functions into a unified layer for easier access. Aggregate tables are typically placed in the Data Warehouse Summary (DWS) layer to consolidate and output multiple Derived Metrics under a specific Statistical Granularity (such as a dimension or a combination of dimensions) to support subsequent business queries and data distribution. You can also place the aggregate table in other data layers based on your business needs. For more information about how to create data layers, see [Define data warehouse layers](/help/en/dataworks/user-guide/data-warehouse-layering#a08bfd8742cky).
    
-   You have created a Data Domain. An aggregate table is based on a **Data Domain** that defines the business process you need to model. For more information, see [Data Domain](/help/en/dataworks/user-guide/business-planning#0325b13dbd1hy).
    
-   You have created a [Period](/help/en/dataworks/user-guide/period#task-2090831) to define the time range for statistical data.
    

## Create an aggregate table

1.  Go to the Data Modeling page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Modeling**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Modeling**.
    
2.  In the top menu bar of the **Data Modeling** page, click **Dimensional Modeling** to go to the **Dimensional Modeling** page.
    
3.  Create the aggregate table.
    
    1.  On the **Dimensional Modeling** page, hover over the ![加号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3367251371/p289535.png) icon and click **Logical Model** > **Create Aggregate Table**.
        
    2.  Configure the basic information for the aggregate table.
        
        ![汇总表-基础信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0120351371/p327896.png)
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Data Layer**
        
        The data layer of the aggregate table. By default, the **DWS** layer in the **Common Layer** is selected. You can also place the aggregate table in other data layers based on your business needs. For more information about how to create data layers, see [Define data warehouse layers](/help/en/dataworks/user-guide/data-warehouse-layering#a08bfd8742cky).
        
        DWS
        
        **Business Category**
        
        Select a business category. For more information, see [Business Category](/help/en/dataworks/user-guide/business-planning#e6a7bf2128tr5).
        
        Sales
        
        **Data Domain**
        
        The data domain of the aggregate table, which determines the subject of the consolidated statistical data. For more information, see [Data Domain](/help/en/dataworks/user-guide/business-planning#0325b13dbd1hy).
        
        **Note**
        
        Each aggregate table can belong to only one data domain.
        
        Trade
        
        **Granularity**
        
        Select an existing dimension. For information about how to create a dimension, see [Create a conceptual model: Dimension](/help/en/dataworks/user-guide/create-a-dimension).
        
        Order Type
        
        **Period**
        
        The time range for the consolidated statistical data, such as the last day or the last week.
        
        You must select from existing periods. If no existing period meets your needs, you can create one. For more information, see [Period](/help/en/dataworks/user-guide/period#task-2090831).
        
        1w (Last 7 Days)
        
        **Modifiers**
        
        The business scope of the statistical data.
        
        You must select from existing modifiers. If no existing modifier meets your needs, you can create one. For more information, see [Modifiers](/help/en/dataworks/user-guide/modifier#task-2090830).
        
        Online Store
        
        **Naming Rule**
        
        Select a checker to enforce table naming conventions. You can select a checker that you created in a data layer during data warehouse planning. For more information, see [Configure a data layer checker](/help/en/dataworks/user-guide/data-warehouse-layering#ac1f1059e2xm8) and [Use a checker](/help/en/dataworks/user-guide/data-warehouse-layering#8a4cee1c78dzu).
        
        \-
        
        **Table Name**
        
        The name of the aggregate table. If a naming rule is configured, the table name must comply with the rule.
        
        `dws_trade_buyer_subpay_1d`
        
        **Display Name**
        
        The display name of the table.
        
        Buyer Trade Installment Payment Aggregate Table
        
        **Lifecycle**
        
        The lifecycle of the table, in days.
        
        90 days
        
        **Owner**
        
        The owner of the aggregate table. By default, this is the user who created the table.
        
        \-
        
        **Description**
        
        The description of the table.
        
        \-
        
4.  In the upper-left corner, click **Save**.
    

## Add fields to the table

You can add fields to the table using **Shortcut Mode** or **Script Mode**. In **Shortcut Mode**, you can use the following import methods:

-   **Import from Table/View**: Import fields from an existing physical table or view in the compute engine. From the **Search For Existing Table/View** drop-down list, search for and select a table or view to import its fields.
    
    **Note**
    
    Only tables or views from MaxCompute, Hologres, or E-MapReduce (EMR) Hive engines are supported.
    
-   **Import from Metrics**: Select metrics from Data Metrics to add them as model fields.
    

## **Shortcut mode**: **Import from table/view**

1.  In the **Shortcut Mode** section, click **Expand** next to **Import from Table/View**.
    
2.  In the **Search For Existing Table/View** search box, enter a name to find and select the corresponding table or view. After you select a table or view, you can import all its fields or a selection of them.
    
    **Note**
    
    -   Fuzzy matching is supported. You can enter a keyword to search for all tables or views that contain the keyword in their names.
        
    -   You can search for tables only in the production environment. Tables in the development environment are not supported.
        
    
    -   The ![导入全部字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5939402371/p451903.png) icon imports all fields.
        
    -   The ![部分字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5939402371/p451911.png) icon imports a selection of fields.
        
3.  If you import a selection of fields, a dialog box opens with the fields from the selected table. Select the fields that you want to add and click **Import**.
    
4.  If any imported fields have an empty **Field Display Name**, you can follow the prompts to populate it with the field description.
    

## **Shortcut mode****:** **Import from metrics**

![PixPin_2025-12-17_19-29-35](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7433458671/p1036086.png)

1.  In the **Shortcut Mode** section, click **Quick Import** next to **Import from Metrics**.
    
2.  A dialog box opens, displaying all submitted **Derived Metric**s and **Composite Metric**s. You can select the metrics to add as fields to the aggregate table.
    
3.  Click **Import** at the bottom of the dialog box.
    

## **Script mode**

**Note**

You can also create fields, associations, and partitions using FML statements. For more information, see [Model with Script Mode](/help/en/dataworks/user-guide/use-fml-statements-to-configure-and-manage-data-tables#task-2091320).

**Script Mode** lets you define the model using code. When you click **Script Mode**, a dialog box opens with auto-generated modeling language based on your configuration. You can modify the model information in the dialog box. When you are finished, click **OK**.![代码模式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3646485671/p327972.png)

## Configure field information

After adding fields to the model, you can configure their properties, such as **Associated Field**, **Redundant Field**, and **Associated Granularity/Metric**.

1.  Configure field properties.
    
    By default, the field list displays basic properties such as **Field Name**, **Type**, **Field Display Name**, **Description**, **Primary Key**, **Not Empty**, **Measurement Unit**, and **Actions**. In the upper-right corner of the field list, click **Field Display Settings** to select which field properties to display and modify them as needed.
    
2.  Associate fields with a **field standard**.
    
    You can associate a field with a field standard to standardize its content and value range.
    
    A **Field Standard** uniformly manages data that has the same meaning but different field names, and defines value ranges, measurement units, and more.
    
3.  Configure **Redundant Field**.
    
    In a traditional star schema for dimensional modeling, dimensions are stored in dimension tables and accessed through foreign keys in the fact table to reduce storage consumption. In DataWorks smart data modeling, you can add frequently used fields (such as user IDs or common analytical dimensions) as redundant fields. This approach improves query performance, simplifies data retrieval, and reduces table joins.
    
    In the **Actions** column of a field, click **Redundant Field** to set the field's associated fields.
    
    ![冗余字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5939402371/p328004.png)
    
4.  Configure the **Association Type**.
    
    You can set the **Association Type** for each field to specify the statistical type for its values in aggregate and application tables. The available types are **Statistical Granularity**, **Derived/Composite Metric**, and **Atomic Metric**.
    
    -   **Statistical Granularity**: Associates the field with a dimension table and fields within that dimension table, such as a product dimension or a seller dimension.
        
    -   **Derived/Composite Metric**: Specifies the metric for the statistical value to be consolidated in the field. For example, the total payment amount for orders placed on the Freshippo app in the last 7 days.
        
    -   **Atomic Metric**: Specifies the atomic metric for the statistical value to be consolidated in the field. For example, the payment amount for an order.
        
    
    **Note**
    
    Fields imported from tables or added in Script Mode do not have a default association type. You can manually set the association type for these fields.
    
    After you set the association type, you can specify the associated object in the **Field Association** section in the upper-right corner of the field list.
    
5.  After you finish the configuration, click **Save** in the upper-left corner.
    

## Next steps

After creating the table, configure its field management, associations, and partition settings, then publish the table to the corresponding environment. For more information, see the following topics:

-   [Materialize a logical model](/help/en/dataworks/user-guide/publish-and-materialize-a-table#task-2090839)
    
-   [Generate ETL code from a model](/help/en/dataworks/user-guide/develop-a-model)
    
-   [Model management and application](/help/en/dataworks/user-guide/view-and-manage-models)
