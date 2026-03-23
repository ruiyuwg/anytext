A fact table stores the quantitative measures for a specific business event. It is the result of aggregating data based on specific dimensions. For example, to analyze product sales, you can create a sales fact table. This table stores foreign keys to dimension tables, such as product and time, along with measures like total sales. This topic describes how to create a fact table.

## Prerequisites

-   You have defined a Data Warehouse Layer. Data Warehouse Layers organize tables with different functions into a unified layer to simplify access and management. Fact tables are typically placed in the Data Warehouse Detail (DWD) layer, but you can assign them to other layers based on your business requirements. For more information, see [Define a Data Warehouse Layer](/help/en/dataworks/user-guide/data-warehouse-layering#a08bfd8742cky).
    
-   You have created a Business Process. This defines the business activity data that the fact table will store. For more information, see [Business Process](/help/en/dataworks/user-guide/business-planning#88bfddccc3ibq).
    

## Overview

Sort and analyze data that is generated in each business process, and store the data in fact tables as fields. For example, you can create a fact table for the business process of placing an order, and record the following information as fields in the fact table: order ID, order creation time, commodity ID, number of commodities, and sales amount. You can deploy the fact tables in a data warehouse and perform ETL operations to summarize and store data in the format defined in the fact table. This allows business personnel to access the data for subsequent data analysis.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4151522771/CAEQUxiBgMD_7.L.5BkiIDU1NDI0YmFhZTlkOTRkMjFiNTc3ZTZjMjgzMDMyZDNh5973813_20251215171406.593.svg)

As shown in the preceding figure:

-   When you create a fact table:
    
    -   You can specify the Data Warehouse Layer where the fact table's data is stored.
        
    -   You can associate the fact table with a specific Business Category and Business Process. This makes it easier to find all fact tables related to a particular category or process.
        
-   After creating the fact table, you can add fields, configure associations and partitions, and apply unified data standards to ensure data consistency across your data domain.
    
-   After configuration, you can publish and materialize the fact table to a computing engine for data analysis.
    

## Create a fact table

1.  Go to the Data Modeling page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Modeling**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Modeling**.
    
2.  In the top menu bar of the **Data Modeling** page, click **Dimensional Modeling** to open the **Dimensional Modeling** page.
    
3.  Create the fact table.
    
    1.  On the **Dimensional Modeling** page, hover over the ![加号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3367251371/p289535.png) icon and click **Logical Model** > **Create Fact Table**.
        
    2.  Configure the basic parameters for the fact table.
        
        ![事实表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0120351371/p289653.png)
        
        **Parameter**
        
        **Description**
        
        **Data Layer**
        
        Select an existing Data Warehouse Layer. Only the **DWD** of the Public Layer is supported. For more information, see [Define a Data Warehouse Layer](/help/en/dataworks/user-guide/data-warehouse-layering#a08bfd8742cky).
        
        **Business Category**
        
        Select an existing business category. For more information, see [Business Category](/help/en/dataworks/user-guide/business-planning#e6a7bf2128tr5).
        
        **Business Process**
        
        Select an existing business process. For more information, see [Business Process](/help/en/dataworks/user-guide/business-planning#88bfddccc3ibq).
        
        **Storage Policy**
        
        Specifies the storage policy for the fact table. Options include **Daily Incremental Data** and **Daily Full Data**.
        
        **Naming Rule**
        
        Select a pre-configured checker to verify that the table name complies with the specified naming conventions. For more information about how to configure and use checkers, see [Configure Data Warehouse Layer checkers](/help/en/dataworks/user-guide/data-warehouse-layering#ac1f1059e2xm8) and [Use checkers](/help/en/dataworks/user-guide/data-warehouse-layering#8a4cee1c78dzu).
        
        **Name**
        
        The internal name of the table. If a naming rule checker is configured, the table name must comply with the rules.
        
        **Display Name**
        
        The display name of the table.
        
        **Lifecycle**
        
        The retention period for the fact table, up to a maximum of 36,000 days.
        
        **Owner**
        
        The person responsible for the fact table. By default, this is the user who creates the table.
        
        **Description**
        
        A description of the fact table.
        
4.  After you complete the configuration, click **Save**. The new table appears in the directory tree on the left.
    

## Add fields to the table

After creating the model, you must add fields.

You can add fields to the table in **Shortcut Mode** or **Script Mode**. In **Shortcut Mode**, you can use the **Import from Table/View** feature to import fields from an existing physical table or view in your computing engine. Search for and select the table or view from the **Search For Existing Table/View** drop-down list to import its fields.

## **Shortcut mode**

**Note**

Currently, you can only import fields from tables or views in [MaxCompute](/help/en/dataworks/user-guide/create-a-maxcompute-data-source), [Hologres](/help/en/dataworks/user-guide/create-a-hologres-data-source), and [EMR Hive](/help/en/dataworks/user-guide/bind-emr-computing-resources).

![PixPin_2025-12-15_19-38-48](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7333458671/p1035013.png)

![PixPin_2025-12-15_19-37-12](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7333458671/p1035012.png)

1.  In **Shortcut Mode**, click **Expand** next to **Import from Table/View**.
    
2.  In the **Search For Existing Table/View** input box, enter a name to search for the table or view. From the search results, select the table or view and import either all or a selection of its fields.
    
    **Note**
    
    -   Fuzzy search is supported. You can enter a keyword to find all tables or views that contain the keyword in their names.
        
    -   You can search only for tables in the production environment. Tables in the development environment are not supported.
        
    
    -   The ![导入全部字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5939402371/p451903.png) icon imports all fields.
        
    -   The ![部分字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5939402371/p451911.png) icon imports a selection of fields.
        
3.  If you choose to import a selection of fields, a dialog box appears that displays all fields from the selected table. Select the fields you want to add to the model, and then click **Import**.
    
4.  If any imported fields have an empty **Field Display Name**, you can follow on-screen prompts to set the display name from the field's description.
    

## **Script mode**

**Note**

You can also use FML statements to create fields, associations, and partitions. For more information, see [Model in Script Mode](/help/en/dataworks/user-guide/use-fml-statements-to-configure-and-manage-data-tables#task-2091320).

**Script Mode** lets you define the model with code. When you click **Script Mode**, a dialog box opens with modeling language auto-generated from the current configuration. You can edit this language and then click **OK**.![代码模式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3646485671/p327972.png)

## Configure field information

After adding fields to the model, you can configure their properties, such as **Associated Field**, **Redundant Field**, and **Associated Granularity/Metric**.

1.  Configure field properties.
    
    By default, the basic properties are displayed, including **Field Name**, **Data Type**, **Field Display Name**, **Description**, **Primary Key**, **Not Null**, and **Actions**. To display and modify other properties, click **Field Display Settings** in the upper-right corner of the field list.
    
2.  Set the **Field Standard to Associate** and **Lookup Table to Associate** for the fields. This helps standardize the content and value range of the fields.
    
    -   **Field Standard to Associate**: Standardizes fields that have the same meaning but different names by defining consistent value ranges, units of measure, and more.
        
    -   **Lookup Table to Associate**: Defines the set of valid values for a specific field.
        
3.  Set the **Redundant Field**.
    
    In the **Actions** column for a field, click **Redundant Field** to configure its associated fields.
    
    In a traditional star schema, dimensions are stored in dimension tables and accessed through foreign keys in the fact table to reduce storage consumption. In dimensional modeling design, to improve downstream query efficiency and simplify data retrieval by reducing the number of joins, frequently used dimensions are often added redundantly to the fact table. For example, the "create order detail table" redundantly includes the "shipping address" dimension from the "shipping address dimension table", which contains dimension attributes such as "recipient address" and "recipient phone number".
    
    ![冗余字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5939402371/p328004.png)
    
4.  After completing the settings, click **Save** in the upper-left corner.
    

## Next steps

After creating the fact table, you also need to manage its fields, configure associations, and set up partitions. You must then publish and materialize the table to the target environment. For more information, see [Materialize a logical model](/help/en/dataworks/user-guide/publish-and-materialize-a-table#task-2090839).
