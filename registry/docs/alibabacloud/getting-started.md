This topic describes how to get started with Data Lake Formation (DLF).

## Prerequisites

All the data in data lakes that are created by using DLF is stored in Object Storage Service (OSS). You must specify an OSS bucket or an OSS path to store the lake data. For more information, see [Create a bucket](/help/en/oss/user-guide/create-a-bucket-4).

## Homepage

The homepage of the [DLF](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc) console consists of the left-side navigation pane and the DLF information section. The DLF console provides quick links for you to use the major features of DLF. This helps you get started with DLF with ease.

## **Feature introduction**

DLF is integrated with the metadata service, permission management, lake management, and data exploration features to provide unified metadata, permission management, security management, and one-click data exploration capabilities.

## **Metadata management**

Metadata management is a key feature for efficiently building a data lake. You can manage metadata in a centralized and systematic manner. This can significantly increase the value and availability of data assets. You can use the metadata management feature to manage catalogs, databases, and tables in the data lake.

### **Create a catalog**

1.  Log on to the [DLF console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
2.  In the left-side navigation pane, choose **Metadata** > **Metadata**.
    
3.  Click the **Catalog List** tab, and click **New Catalog**.
    
4.  Enter the following information in the input box, and click **OK**.
    
    -   **Catalog ID**: Required. It is a unique identifier and cannot be duplicated.
        
    -   **Description**: Optional. Enter description information.
        
    -   **Location**: Optional. Enter the default storage path. Only Object Storage Service (OSS) paths are supported.
        

For more information about operations you can perform on catalogs, see [Data Catalog](/help/en/dlf/dlf-1-0/user-guide/catalog).

### **Create a database**

1.  Log on to the [Data Lake Formation console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc).
    
2.  In the left-side navigation pane, select **Metadata** > **Metadata**.
    
3.  Click the **Database** tab, select the target **Catalog List**, and click **Create Database**.
    
4.  Configure the following database information and click **OK**.
    
    -   **Catalog**: Select the data catalog.
        
    -   **Database Name**: Enter the database name.
        
    -   **Database Description**: Optional, enter the database description.
        
    -   **Select Path**: Enter the location of the database.
        

### **Create a table**

1.  After creating a database, click the **Table** tab, select the target **Catalog List** and **Database Name**, and click **Create Table**.
    
2.  Configure the following data table information and click **OK**.
    
    -   **Table Name**: Enter the name of the table.
        
    -   **Catalog**: Select the data catalog.
        
    -   **Database**: Select the database under the data catalog.
        
    -   **Table Description**: Optional, enter the table description.
        
    -   **Data Storage Location**: Select the location where the data in the table is stored.
        
    -   **Format and Serialization**: Select the data format and output format of the table.
        
    -   **Delimiter**: Optional, when the data format is CSV, select the separator for the table.
        
    -   Manually define the common columns and partition key columns of the table. Specify the column name, data type, description, and other information.
        

For more information about operations you can perform on databases and tables, see [Database tables and functions](/help/en/dlf/dlf-1-0/user-guide/manage-metadata).

### **Extract metadata**

Metadata extraction can help you analyze data in a data lake in a specific format and automatically generate metadata information. For more information, see [Metadata discovery](/help/en/dlf/dlf-1-0/user-guide/implement-metadata-discovery).

### **Migrate metadata**

DLF allows you to quickly migrate metadata from a Hive metastore to a data lake. For more information, see [Migrate metadata](/help/en/dlf/dlf-1-0/user-guide/migrate-metadata).

## **Permission management**

The permissions of DLF are divided into two main categories: RAM permissions and DLF data permissions. You need to pass the two levels of permission verification before you can access pages or data.

-   RAM permissions: control the access to all DLF API operations and determine whether RAM users can access specific DLF API operations or pages. For more information, see [Permission description](/help/en/dlf/dlf-1-0/user-guide/permission-description).
    
-   DLF data permissions: control the access and use of DLF internal resources, including databases, tables, columns, functions, and catalogs.
    
    -   For more information about data permissions, see [Data permissions](/help/en/dlf/dlf-1-0/user-guide/data-permissions-1/).
        
    -   For more information about authorization, see [Data authorization](/help/en/dlf/dlf-1-0/user-guide/data-authorization).
        

## **Lake management**

Lake management capabilities include location hosting, storage overview, lifecycle management, lake format management, and storage permissions. After location hosting is implemented, you can use DLF to perform comprehensive data lake management.

-   Location hosting allows you to manage and analyze data stored in OSS. For more information, see [Location hosting](/help/en/dlf/dlf-1-0/user-guide/location-hosting).
    
-   Storage overview allows you to perform source data analysis and location analysis. This helps you quickly obtain the current usage of storage resources, identify potential issues, and take optimization measures at the earliest opportunity. For more information, see [Storage overview](/help/en/dlf/dlf-1-0/user-guide/storage-overview).
    
-   Lifecycle management allows you to configure rules to manage data in data lakes. For more information, see [Lifecycle management](/help/en/dlf/dlf-1-0/user-guide/overview-of-lifecycle-management).
    
-   Lake format management allows you to configure policies to optimize lake formats. For more information, see [Lake format management](/help/en/dlf/dlf-1-0/user-guide/data-lake-format-management).
    

## **Best practices**

DLF allows you to manage metadata and permissions in a data lake. DLF can work together with E-MapReduce (EMR), Realtime Compute for Apache Flink, and MaxCompute to efficiently extract and migrate metadata, and ingest data to a data lake.

-   [EMR and DLF data lake solution](/help/en/dlf/dlf-1-0/use-cases/emr-dlf-data-lake-solution)
    
-   [Getting started with DLF metadata extraction and data exploration - Taobao user behavior analysis](/help/en/dlf/dlf-1-0/use-cases/dlf-data-exploration-taobao-user-behavior-analysis)
    
-   [Migrate EMR metadata to DLF](/help/en/dlf/dlf-1-0/use-cases/best-practices-for-migrating-emr-metadata-to-dlf)
    
-   [Use Realtime Compute for Apache Flink and DLF to ingest data into data lakes and analyze the data](/help/en/dlf/dlf-1-0/use-cases/use-flink-and-dlf-to-import-data-to-data-lakes-and-analyze-the-data)
    
-   [MaxCompute lakehouse solution](/help/en/dlf/dlf-1-0/use-cases/best-practices-of-integration-of-maxcompute-data-lakehouse-and-dlf)
    
-   [Use DLF and EMR to manage permissions](/help/en/dlf/dlf-1-0/use-cases/use-dlf-and-emr-to-perform-centralized-permission-management-on-data-lakes)
