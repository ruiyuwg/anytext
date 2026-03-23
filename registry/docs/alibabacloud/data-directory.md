Data Catalog is a unified metadata workbench for your development preparation. It integrates metadata from various data sources, such as MaxCompute, Hologres, and DLF. This lets you complete all preparatory tasks, such as creating tables and managing views, without leaving DataWorks, so you can focus on core development.

## **Core features**

-   **Unified management:** Centrally manage and search tables, views, functions, and resources from multiple data sources.
    
-   **Quick table creation**: Create table schemas directly in DataWorks without switching to another console.
    
    -   **DDL-based creation**: Use native Data Definition Language (DDL) SQL statements for flexible control.
        
    -   **Visual creation**: Fill out a form for a simple and intuitive process.
        
    -   **Copilot-assisted creation**: Describe your requirements in natural language and allow AI to generate the table.
        
-   **One-click synchronization**: Quickly start data synchronization tasks between data sources such as MaxCompute and Hologres to simplify the process.
    
-   **Quick exploration**: Preview table schema details to quickly understand your data.
    

## **Supported data catalogs**

The following table lists the data source types supported by Data Catalog and how to add them.

**Data Catalog**

**Add from data sources attached to the workspace**

**Add from existing data sources in your account**

MaxCompute (internal and external projects)

支持

支持

Hologres (internal and external databases)

支持

支持

DLF Catalog (DLF 1.0 and DLF 2.0)

支持

支持

Hive (EMR Hive)

支持

不支持

Lindorm

支持

不支持

AnalyticDB MySQL

支持

不支持

AnalyticDB PostgreSQL

支持

不支持

StarRocks

支持

不支持

AI Catalog (AI datasets and AI models)

The system automatically reads data from the AI workspace that has the same name as the current DataWorks workspace.

不支持

## **Authentication and authorization**

Data Catalog's ability to read data from a data source depends on how the data source was added. The following rules apply:

-   When you add a data source instance that is attached to a workspace, Data Catalog uses the **identity information from the data source configuration** to read its data.
    
-   When you add an existing data source instance from your personal account, Data Catalog uses your **personal identity information** to read its data.
    
-   If you use a Resource Access Management (RAM) user or RAM role to view MaxCompute data in Data Catalog, you must first obtain the required MaxCompute permissions. If the Layer 3 model is enabled for the added MaxCompute data source or project, you must also grant the RAM user or RAM role permission to view schema metadata.
    
    **Note**
    
    If a MaxCompute project contains multiple schemas, you must grant metadata permissions for all schemas to view the complete schema list on the project details page in Data Catalog.
    
    -   **Grant permissions to a RAM user**:
        
        ```
        GRANT DESCRIBE ON SCHEMA <schema_name> TO USER RAM$<alibaba_cloud_account_name>:<ram_user_name>;
        ```
        
    -   **Grant permissions to a RAM role**:
        
        ```
        GRANT DESCRIBE ON SCHEMA <schema_name> TO USER `RAM$<alibaba_cloud_account_name>:role/<ram_role_name>`;
        ```
        

## **Access Data Catalog**

**Important**

This feature is available only in workspaces that use the **Use Data Studio (New Version)**.

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the navigation pane on the left, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7618107371/p840002.png) icon to go to Data Catalog.
    

## **Add a data catalog**

You can create a custom directory tree for better organization. Perform the following steps:

1.  In Data Catalog, find the data source type that you want to add and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1748453471/p847686.png) icon next to its name to open the add page.
    
2.  Find the instance or data source that you want to add, and click **Add** in the **Actions** column.
    

**Note**

-   Data catalogs added from existing data sources in a DataWorks workspace are **visible to all workspace members**.
    
-   Data catalogs added from existing data sources in your account are **visible only to you**.
    
-   When you add a data catalog from an existing data source in your account, the list page shows only the data source instances that are in the same region as the DataWorks project and for which you have access permission.
    

## **Manage data catalogs**

### **Hide a data catalog**

During development, you can hide data catalogs that are unrelated to your current task.

1.  Find the data catalog in the directory tree on the left and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4659994471/p943523.png) icon in the upper-right corner.
    
2.  In the dialog box that appears, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4659994471/p943527.png) icon next to an engine name to hide all data catalogs for that engine.
    
    **Note**
    
    To make the data catalogs for an engine visible again, click the space next to the engine name in the dialog box.
    

### **Remove a data catalog**

If you no longer need an added data catalog, you can remove it.

In the directory tree on the left, find the data catalog that you want to remove. In the **Actions** column, click **Remove** or **Detach Data Catalog**.

## **Create and manage data objects**

On the Data Catalog page, you can find and expand an added catalog to create or manage its data objects. For more information, see the documents in the following table.

**Data Catalog**

**Description**

**References**

MaxCompute

Create and manage data objects such as tables, views, external tables, resources, and functions.

[MaxCompute data management](/help/en/dataworks/user-guide/maxcompute-data-management/)

Hologres

Create and manage data objects such as tables and views.

[Hologres data management](/help/en/dataworks/user-guide/hologres-data-management/)

DLF Catalog

Create and manage database table metadata.

[DLF Catalog data management](/help/en/dataworks/user-guide/dlf-catalog-data-management)

Hive

Create and manage table data objects.

[Hive data management](/help/en/dataworks/user-guide/hive-data-management)

AnalyticDB MySQL

Create and manage table data objects.

[AnalyticDB MySQL data management](/help/en/dataworks/user-guide/analyticdb-for-mysql-data-management)

AnalyticDB PostgreSQL

Create and manage table data objects.

[AnalyticDB PostgreSQL data management](/help/en/dataworks/user-guide/analyticdb-for-postgresql-data-management)

StarRocks

Create and manage table and view data objects.

[StarRocks data management](/help/en/dataworks/user-guide/starrocks-data-management)

AI Catalog

Manage AI Catalog dataset and model metadata.

[AI Catalog data management](/help/en/dataworks/user-guide/ai-catalog-management)
