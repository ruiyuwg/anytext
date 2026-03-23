A data lake solution based on the combination of E-MapReduce (EMR) and Data Lake Formation (DLF) (EMR+DLF data lake solution) allows enterprises to manage the metadata and permissions of data lakes in a centralized manner. This solution also supports data lake management, such as data lifecycle management, automatic optimization of lake formats, and storage analysis. You can use the EMR+DLF data lake solution to write data from various sources to data lakes and implement one-stop data exploration. This topic describes how to use the EMR+DLF data lake solution.

## Background information

The EMR+DLF data lake solution takes the following advantages over the traditional EMR data lake solution:

-   DLF provides a unified, fully managed, and O&M-free metadata service for data lakes across engines.
    
    -   Visualized metadata management and multi-version management and rollback.
        
    -   Visualized metadata migration with ease.
        
    -   Full-text retrieval of metadata.
        
    -   Data profiling for metadata. For example, data profiling can be used to examine file sizes, the number of rows in files, access frequency, the number of small files, file popularity, and the number of valid files.
        
    -   Support for more compute engines in addition to the open source engines in EMR, such as MaxCompute, Flink, and Hologres.
        
-   DLF supports fine-grained data permission management.
    
    -   Visualized and fine-grained permission management on resources such as data catalogs, databases, data columns, and functions.
        
    -   Integration with multiple compute engines in EMR, such as integration with Spark, Hive, Presto, and Impala.
        
-   Rich data lake management capabilities are provided.
    
    -   Data lifecycle management in multiple dimensions. Data can be automatically archived based on file popularity and update time to reduce storage costs.
        
    -   Automatic storage optimization policies for the Delta Lake format to reduce storage costs.
        

## Additional information

-   For information about the regions in which DLF is supported, see [Supported regions and endpoints](/help/en/dlf/dlf-1-0/product-overview/regions-and-endpoints).
    
-   For information about the billing of DLF, see [Billing](/help/en/dlf/dlf-1-0/product-overview/billing-1).
    

## Procedure

### Step 1: Create an EMR DataLake cluster

When you create an EMR DataLake cluster, you must select **DLF Unified Metadata** for **Metadata**.

1.  Log on to the [EMR console](https://emr.console.alibabacloud.com/). In the left-side navigation pane, click **EMR on ECS**.
    
2.  On the **EMR on ECS** page, click **Create Cluster**. On the **E-MapReduce on ECS** page, configure the following parameters.
    
    -   **Business Scenario**: Select **Data Lake**.
        
    -   **Optional Services (Select One At Least)**: **Hive** is required. You can select other services based on your business requirements.
        
    -   **Metadata**: Select **DLF Unified Metadata**.
        
    -   **DLF Catalog**: Use the default DLF catalog or create a catalog. If you have not activated DLF, you are prompted to activate DLF first.
        
3.  Complete the subsequent operations as prompted. For more information, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page).
    

### **Step 2: Initialize metadata**

You can use different methods to initialize metadata in different scenarios.

-   If the metadata of an EMR cluster is stored in a built-in MySQL database or a self-managed ApsaraDB RDS database, you need to migrate metadata to DLF. For more information, see [Migrate EMR metadata to DLF](/help/en/dlf/dlf-1-0/use-cases/best-practices-for-migrating-emr-metadata-to-dlf).
    
-   If no historical metadata is available in a newly created EMR cluster, you can use DLF to create metadata in a visualized manner, or use Hive or Spark SQL to create databases and data tables.
    
    1.  Log on to the [DLF console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc). In the top navigation bar, select the region in which Object Storage Service (OSS) is activated, such as China (Hangzhou).
        
    2.  In the left-side navigation pane, choose **Metadata** > **Metadata**.
        
    3.  Click the **Database** tab. On the tab, click **Create Database**.
        
    4.  On the **Create Database** page, configure parameters and click **OK**.
        
-   If data of a newly created EMR cluster is stored in OSS, and no metadata is available, you can use the [metadata discovery](/help/en/dlf/dlf-1-0/user-guide/implement-metadata-discovery) feature of DLF to extract metadata from OSS to DLF. For more information, see [DLF data exploration - Taobao user behavior analysis](/help/en/dlf/dlf-1-0/use-cases/dlf-data-exploration-taobao-user-behavior-analysis).
    

### Step 3: Initialize data

You can use different methods to initialize data in the following scenarios:

1.  If you want to migrate data of an existing EMR cluster, you can use [Jindo DistCp](/help/en/emr/emr-on-ecs/user-guide/use-jindo-distcp-6) to migrate data from the cluster to OSS.
    
2.  If you want to import data from service systems such as RDS, MySQL, and Kafka, you can use Realtime Compute for Apache Flink to import data to DLF. For more information, see [Manage DLF catalogs](/help/en/flink/realtime-flink/user-guide/manage-dlf-catalogs).
    

### Step 4: Query data in a specific DLF table by using Spark or Presto

Log on to the master node -1-1 of the EMR cluster in SSH mode. For more information, see [Log on to a cluster](/help/en/emr/emr-on-ecs/user-guide/log-on-to-an-emr-cluster#task-2508490).

1.  Use Spark SQL to query data of a specific table.
    
    1.  Run the following command to start Spark SQL:
        
        ```
        spark-sql
        ```
        
    2.  Execute the following statement to query data in the table:
        
        ```
        SELECT * FROM <database>.<table>;
        ```
        
2.  Use Presto to query data in a specific table.
    
    1.  Run the following command to start Presto CLI:
        
        ```
        presto --server master-1-1:8889
        ```
        
    2.  Execute the following statement to query data in the table:
        
        ```
        SELECT * FROM <catalog>.<database>.<table>;
        ```
        
        Parameters in the preceding statement
        
        **Parameter**
        
        **Description**
        
        `<catalog>`
        
        The name of the data source to which you want to connect.
        
        You can run the `show catalogs;` command to view all catalogs. You can also view all catalogs on the **Configure** tab of the Presto service page in the EMR console.
        
        `<database>`
        
        The name of the database that you want to query.
        
        `<table>`
        
        The name of the table that you want to query.
        
        For example, if you want to query data from the `test` table in the default database of Hive, you can execute the `SELECT * FROM hive.default.test;` statement.
        

### **(Optional) Step 5: Enable data permission management**

Specific business scenarios require high data security and proper data permission management of data lakes. To enable data permission management, perform the following steps:

1.  Enable DLF permission management for your EMR cluster. For more information, see [DLF-Auth](/help/en/emr/emr-on-ecs/user-guide/dlf-auth).
    
2.  Enable permission management for your data catalogs in DLF. For more information, see [Configure permissions](/help/en/dlf/dlf-1-0/user-guide/configure-permissions).
    

The configured permission management applies to all the data in your EMR cluster. To access data in the EMR cluster, users must be granted the required permissions.

For information about how to grant permissions to users, see [Data authorization](/help/en/dlf/dlf-1-0/user-guide/data-authorization). For more information, see [Use DLF and EMR to manage permissions](/help/en/dlf/dlf-1-0/use-cases/use-dlf-and-emr-to-perform-centralized-permission-management-on-data-lakes).

### **(Optional) Step 6: Implement lifecycle management**

You can use the lifecycle management feature to configure data management rules for databases and data tables in a data lake. You can convert the storage class of data in OSS on a regular basis based on the following three types of rules: partition and table creation time, last modification time of partitions and tables, and partition value. This reduces data storage costs. For more information, see [Lifecycle management](/help/en/dlf/dlf-1-0/user-guide/overview-of-lifecycle-management).
