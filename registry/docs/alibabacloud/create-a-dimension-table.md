Dimensions are the foundation of dimensional modeling. In this modeling approach, measures are known as facts, and the context that describes these facts is called a dimension. A Dimension Table contains detailed information about the attributes referenced by a Fact Table, such as date or city. This topic describes how to create a Dimension Table.

## Overview

Extract all the dimensions that possibly exist in each data domain, and store the dimensions and attributes of the dimensions in dimension tables. For example, when you analyze e-commerce business data, possible dimensions (attributes of each dimension) include order (order ID, order creation time, buyer ID, and seller ID), user (gender and birthdate), and commodity (commodity ID, commodity name, and commodity put-on-shelf time). You can create the following dimension tables: order dimension table, user dimension table, and commodity dimension table. The attributes of each dimension are used as the fields in the dimension table. You can deploy the dimension tables in a data warehouse and perform extract, transform, and load (ETL) operations to store dimension data in the format defined in the dimension table. This allows business personnel to access the data for subsequent data analysis.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0618342771/CAEQVBiBgID4s7ay5RkiIDdmZmEwMmViYTM3YzRmZDQ5NmYzYmE2NWUyYjJlMDg55973813_20251215171406.593.svg)

The diagram above illustrates the following concepts:

-   When you create a Dimension Table:
    
    -   You can specify the data warehouse layer that stores the Dimension Table's data. Typically, Dimension Tables are stored in the Common Layer (DIM), but they can also be stored in the Application Layer. By default, the Application Layer only allows you to create application tables. To create a Dimension Table in the Application Layer, you must create a new application layer and set its model type to **Dimension** or **Dimension Table, Dimension**. For more information, see [Define data warehouse layers](/help/en/dataworks/user-guide/data-warehouse-layering#da57313b59lyu).
        
    -   Depending on the selected data warehouse layer, you can associate the Dimension Table with a specific Data Domain under a Business Category, or with a Data Mart and Subject Area. This simplifies management by organizing tables from either a data domain or a data mart perspective.
        
-   After you create the Dimension Table, you can add dimensions as attributes to the table, configure associations and partitions, and use a consistent Field Standard or Lookup Table for field definitions. This ensures that dimension data attributes are consistent across all Data Domains.
    
-   After configuring the Dimension Table:
    
    -   You can materialize it to a storage engine for data analysis in a compute engine.
        
    -   When you design derived metrics and summary tables, you can directly reference and use fields from the Dimension Table.
        

## Prerequisites

The Common Layer processes and integrates shared data to establish unified, enterprise-wide Dimension Tables. The Application Layer uses data from the Common Layer to build business-specific Dimension Tables based on application needs, supporting custom data development. You can create Dimension Tables in either the Common Layer or Application Layer.

**Data layer**

**Prerequisite**

**References**

**Common Layer**

You have created a data warehouse layer in the Common Layer. This determines the layer to which the Dimension Table belongs.

[Define data warehouse layers](/help/en/dataworks/user-guide/data-warehouse-layering#a08bfd8742cky)

You have created a Data Domain. This determines the business data perspective for the Dimension Table.

[Data Domain](/help/en/dataworks/user-guide/business-planning#0325b13dbd1hy)

**Application Layer**

You have created a data warehouse layer in the Application Layer. This determines the layer to which the Dimension Table belongs.

[Define data warehouse layers](/help/en/dataworks/user-guide/data-warehouse-layering#a08bfd8742cky)

You have created a Data Mart. This determines the data category that the Dimension Table serves for a specific application or product.

[Data Mart](/help/en/dataworks/user-guide/business-planning#e6023f7defrj3)

## Create a Dimension Table

1.  Go to the Data Modeling page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Modeling**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Modeling**.
    
2.  On the **Data Modeling** page, click **Dimensional Modeling** to open the **Dimensional Modeling** page.
    
3.  Create the Dimension Table.
    
    1.  On the **Dimensional Modeling** page, hover over the ![加号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3367251371/p289535.png) icon and choose **Logical Model** > **Create Dimension Table**.
        
    2.  Configure the basic information for the Dimension Table.
        
        You can select the layer, Data Domain, Business Category, and Data Mart for the Dimension Table based on your requirements. After you make these selections, you can view the created Dimension Table in the corresponding object list. This topic uses a Dimension Table in the Common Layer as an example.![创建维度表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9020351371/p289539.png) The following table describes the key parameters.
        
        **Parameter**
        
        **Description**
        
        **Data Layer**
        
        Select the data warehouse layer for the Dimension Table. Different layers serve different business scenarios:
        
        -   **Common Layer**: Processes and integrates shared data to create unified, enterprise-wide Dimension Tables. If you select this layer, you must also specify a Data Domain. For more information about how to create a Data Domain, see [Data Domain](/help/en/dataworks/user-guide/business-planning#0325b13dbd1hy).
            
        -   **Application Layer**: Builds business-specific Dimension Tables for specific applications. If you select this layer, you must also specify a Data Mart. For more information about how to create a Data Mart, see [Data Mart](/help/en/dataworks/user-guide/business-planning#e6023f7defrj3).
            
        
        **Note**
        
        By default, the Application Layer only allows you to create application tables. To create a Dimension Table in the Application Layer, you must create a new application layer and set its model type to **Dimension** or **Dimension Table, Dimension**. For more information, see [Define data warehouse layers](/help/en/dataworks/user-guide/data-warehouse-layering#da57313b59lyu).
        
        **Business Category**
        
        If you select **Common Layer** for **Data layer category**, you can select a Business Category for the Dimension Table.
        
        **Data Domain**
        
        If you select **Common Layer** for **Data layer category**, you can select a Data Domain for the Dimension Table.
        
        **Category/Mart/Subject**
        
        If you select **Application Layer** for **Data layer category**, you must select a Data Mart or Subject Area under a Business Category.
        
        **Storage Policy**
        
        The policy that defines the data retention period and data volume for the Dimension Table.
        
        **Dimension**
        
        The dimension associated with the Dimension Table. This is used to define the perspective for data analysis.
        
        **Note**
        
        For more information about how to create a dimension, see [Conceptual model: Dimension](/help/en/dataworks/user-guide/create-a-dimension#task-2248264).
        
        **Naming Rule**
        
        A checker that enforces naming conventions. If you select a checker, the table's **Table Name** must comply with its rules.
        
        **Note**
        
        For more information about how to configure a checker, see [Configure data warehouse layer checkers](/help/en/dataworks/user-guide/data-warehouse-layering#ac1f1059e2xm8).
        
        **Table Name**
        
        The name of the Dimension Table. If you have configured a naming rule, the table name must follow that rule.
        
        **Table Display Name**
        
        The display name of the Dimension Table.
        
        **Lifecycle**
        
        The retention period for the Dimension Table. The maximum retention period is 36,000 days.
        
        **Owner**
        
        The person responsible for the Dimension Table. By default, this is the user who created the table.
        
        **Description**
        
        A description of the Dimension Table.
        
4.  After you configure the parameters, click **Save** to create the Dimension Table.
    
    You can find and manage the Dimension Table under the corresponding Data Domain or Business Category in the left-side navigation tree of the Dimensional Modeling page.
    

## Add fields to the table

After creating the model, add fields to it.

You can add fields to the table in **Shortcut Mode** or **Script Mode**. In **Shortcut Mode**, you can use the **Import from Table/View** feature to import fields from existing physical tables or views in a compute engine. Select a table or view from the **Search For Existing Table/View** drop-down list to import its fields.

## **Shortcut mode**

**Note**

Fields can be imported only from tables or views in MaxCompute, Hologres, and E-MapReduce (EMR) Hive engines.

![PixPin_2025-12-15_19-38-48](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7333458671/p1035013.png)

![PixPin_2025-12-15_19-37-12](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7333458671/p1035012.png)

1.  In **Shortcut Mode**, click **Expand** next to **Import from Table/View**.
    
2.  In the **Search For Existing Table/View** search box, enter a name to find and select the target table or view. Once the table is referenced, you can choose to import all fields or specific fields from the table or view.
    
    **Note**
    
    -   Fuzzy search is supported. You can enter a keyword to search for all tables or views whose names contain the keyword.
        
    -   You can search for tables in the production environment only. Tables in the development environment are not supported.
        
    
    -   The ![导入全部字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5939402371/p451903.png) icon indicates that all fields are imported.
        
    -   The ![部分字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5939402371/p451911.png) icon indicates that specific fields are imported.
        
3.  If you choose to import specific fields, a dialog box appears displaying the fields of the selected table. Select the fields you want to add to the model and click **Import** at the bottom of the dialog box.
    
4.  If any imported fields have an empty **Field Display Name**, you can follow the on-screen prompts to populate the display name with the field description.
    

## **Script mode**

**Note**

You can also use FML statements to create fields, associations, and partitions. For more information, see [Script Mode modeling](/help/en/dataworks/user-guide/use-fml-statements-to-configure-and-manage-data-tables#task-2091320).

**Code Mode** allows you to create a Dimension Table by writing code. After you fill in the basic information for the Dimension Table and save it, click **Script Mode**. A dialog box appears with auto-generated modeling language based on the configured model information. You can modify the model information here and then click **OK**.![代码模式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3646485671/p327972.png)

## Configure field information

After you add fields to the model, you can configure **Associated Field**, **Redundant Field**, and **Associated Granularity/Metric** for each field.

1.  Set field attributes.
    
    By default, the field attributes displayed include **Field Name**, **Type**, **Field Display Name**, **Description**, **Primary Key**, **Not Null**, **Measurement Unit**, and **Actions**. In the upper-right corner of the field list, click **Field Display Settings** to select which attributes to display and modify them as needed.
    
2.  Associate fields with a **Field Standard to Associate** and a **Lookup Table to Associate**. This allows you to associate the added fields with a Field Standard and a Lookup Table to standardize the content and range of field values.
    
    Alternatively, after configuring the fields, you can click the association button in the upper-right corner of the field list to set the **Atomic Metric**, **Lookup Table**, and **Field Standard** for all fields at once.
    
    -   **Field Standard to Associate**: Standardizes and manages data that has the same meaning but different field names. It defines the value range, unit of measurement, and other properties of a field.
        
    -   **Lookup Table to Associate**: Defines the content and range of selectable data for a specific Field Standard.
        
3.  Set **Redundant Field**.
    
    In a traditional star schema for dimensional modeling, dimensions are stored in Dimension Tables and accessed through foreign keys in a Fact Table. This design helps reduce storage consumption. In contrast, the dimensional model in DataWorks Intelligent Data Modeling often uses redundant fields for frequently accessed attributes, such as user IDs or common analysis dimensions. This practice, a form of denormalization, improves downstream query performance, simplifies data retrieval, and reduces the need for table joins.
    
    Example 1: The \`order\_creation\_details\` table can include redundant dimension attributes from the \`shipping\_address\_dimension\` table, such as \`shipping\_address\` and \`recipient\_phone\_number\`.
    
    Example 2: The \`product\_dimension\` table can include redundant attributes from the \`product\_information\` table, such as \`procurement\_information\` and \`brand\_information\`.
    
    In the **Actions** column for a field, click **Redundant Field** to configure its associated fields.
    
    ![冗余字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5939402371/p328004.png)
    
4.  After you complete the configuration, click **Save** in the upper-left corner.
    

## Next steps

After creating the Dimension Table, you must also configure field management, associations, and partition settings. You must also publish the table to the appropriate environment. For more information, see the following topics:

-   [Materialize a logical model](/help/en/dataworks/user-guide/publish-and-materialize-a-table#task-2090839)
    
-   [Generate ETL code based on a model](/help/en/dataworks/user-guide/develop-a-model)
    
-   [Model management and application](/help/en/dataworks/user-guide/view-and-manage-models)
