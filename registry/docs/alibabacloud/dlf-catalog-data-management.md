DataWorks Data Catalog provides a unified interface for managing Data Lake Formation (DLF) Catalog metadata. You can add DLF Catalogs to Data Catalog, create and manage databases within them, and create and manage tables with support for both manual configuration and AI-assisted generation through Copilot.

## Open the DLF Catalog page

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a region. Find your workspace and choose **Shortcuts** > **Data Map** in the **Actions** column.
    
2.  In the left navigation pane, click **Data Catalog**. In the **Data Catalog** tree, click **DLF Catalog**.
    

## Add a DLF Catalog

You can add an existing DLF Catalog to the Data Catalog list. The steps differ depending on your DLF version.

1.  Click the ![Add](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon to the right of **DLF Catalog** to open the **Add DLF Catalog** page.
    
2.  Select the tab for your DLF version and add the catalog.
    

**DLF version**

**How to add**

**DLF 1.0**

On the **DLF 1.0** tab, click **Create DLF Catalog** to go to the [Data Lake Formation 1.0 console](https://dlf.console.alibabacloud.com/) and create a [DLF Catalog](/help/en/dlf/dlf-1-0/user-guide/catalog). After the catalog is created, return to the **DLF 1.0** tab to add it. To add a single catalog, find it in the list and click **Add** in the **Actions** column. To add multiple catalogs at once, select them in the list and click **Batch Add**.

**DLF 2.0**

Creating DLF Catalogs is not supported.

**(Recommended)** **DLF 2.5 And Later**

On the **DLF 2.5 And Later** tab, click **Create DLF Catalog** to go to the [Data Lake Formation 2.5 console](https://dlf-next.console.alibabacloud.com/) and create a [DLF Catalog](/help/en/dlf/dlf-2-0/user-guide/manage-catalogs). After the catalog is created, return to the **DLF 2.5** tab to add it. To add a single catalog, find it in the list and click **Add** in the **Actions** column. To add multiple catalogs at once, select them in the list and click **Batch Add**.

## Manage databases

**Create a database**

1.  Find the target DLF Catalog and click the ![Add](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon to its right.
    
2.  On the **Create Database** page, enter a **Database Name**.
    
3.  Click **Save** in the top toolbar.
    

**Manage a database**

### View a database

After a database is added, click the ![Expand](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the DLF Catalog to view its databases.

### Delete a database

Right-click the database and select **Delete**.

**Important**

-   This operation cannot be undone. Proceed with caution.
    
-   Before you delete a database, you must delete all tables in it.
    

## Manage tables

**Create a table**

1.  Click the ![Add](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p980334.png) icon to the right of the target database to open the **New Table** page.
    
2.  Generate the table definition by using one of the following methods: **Method 1: Create a table with Copilot** **Method 2: Create a table manually** Configure the following parameters:
    
    1.  In the top toolbar, click **Create Table With Copilot** to open the Copilot Chat interface.
        
    2.  Enter an instruction. For example: `Create a user table`.
        
    3.  Click **Generate And Replace**. The system generates a default table name and field information based on your instruction.
        
    4.  If the generated table definition meets your requirements, click **Accept**.
        
    
    **Note**
    
    You can manually edit the generated details after you click **Accept**.
    
    **Parameter**
    
    **Description**
    
    Basic Information
    
    Specify a **Table Name**, **Table Description**, and other basic details.
    
    Field Information
    
    Define the fields for the table. Click **Insert** above the field list, specify the number of rows to add, then edit the **Field Name**, **Field Type**, and other details for each field. You can also click **Generate Fields** or **Generate Field Descriptions** to have Copilot generate fields and descriptions based on the table name and description.
    
3.  (Optional) Configure partitions. To create a partitioned table, go to the **Partition Fields** section. Set the number of **Rows** to add and click **Insert**. You can add multiple partition fields. For each field, specify the **Field Name**, **Field Type**, and other required information.
    
4.  (Optional) Configure advanced settings. Advanced settings differ by DLF version:
    
    **DLF version**
    
    **Parameter**
    
    **Description**
    
    **DLF 2.5 and later** / **DLF 2.0**
    
    Custom Properties
    
    Configure custom property parameters to set the table storage location, storage format, and other properties. For details, see [Create a data table in Data Lake Formation](/help/en/dlf/dlf-2-0/user-guide/table/#5779e9f4d1mp5).
    
    **DLF 1.0**
    
    Storage Location
    
    Click **Change** next to Storage Location. In the **OSS Path** dialog box, select a storage location for the table. Storing metadata in OSS ensures data security, reliability, and simplified management.
    
    **DLF 1.0**
    
    Data Format
    
    Select a storage format. The system automatically defines the data input format, output format, and serialization and deserialization methods based on your selection.
    
    **DLF 1.0 data formats**
    
    **Format**
    
    **Description**
    
    **CSV**
    
    Comma-separated text file. Suitable for simple data structures.
    
    **PARQUET**
    
    Columnar storage format with a high compression ratio. Suitable for big data analysis.
    
    **ORC**
    
    Optimized columnar storage format with excellent performance. Supports complex data types.
    
    **AVRO**
    
    Binary format that supports schema evolution. Suitable for dynamic data structures.
    
    **JSON**
    
    Supports nested structures. Suitable for semi-structured data.
    
    **SELE\_DEFINE**
    
    Custom serialization and deserialization logic.
    
5.  Click **Publish** in the top toolbar to create the table.
    

**Manage a table**

### View a table

After you create a table, click the ![Expand](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of the database, then click **Tables** to view basic table information. Click a specific table name to view its **Details** and **Basic Information**.

### Delete a table

Right-click the table and select **Delete**.

**Important**

This operation cannot be undone. Proceed with caution.

## View and remove a DLF Catalog

### View catalog details

After a DLF Catalog is added, click the ![Expand](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8025062571/p981275.png) icon to the left of its entry to expand it. Hover over the DLF Catalog to view its **Version**, **Creation Time**, and other details.

### Remove a DLF Catalog

If you no longer need to manage a DLF Catalog in Data Catalog, right-click it and select **Remove**.
