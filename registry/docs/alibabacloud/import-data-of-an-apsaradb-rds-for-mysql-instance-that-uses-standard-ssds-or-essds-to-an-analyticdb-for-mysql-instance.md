If you want to query and analyze data of an ApsaraDB RDS for MySQL instance that uses cloud disks, you can use the advanced download feature to download the data to an Object Storage Service (OSS) bucket. Then, you can import the downloaded data to an AnalyticDB for MySQL cluster for query and analysis.

## Prerequisites

-   The RDS instance uses **cloud disks** and supports the advanced download feature. For more information, see [Download backup](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#section-rd5-7jh-39i).
    
-   An AnalyticDB for MySQL cluster is created. For more information, see [Create a Data Warehouse Edition cluster](/help/en/analyticdb/analyticdb-for-mysql/getting-started/create-a-data-warehouse-edition-cluster) or [Create a Data Lakehouse Edition cluster](/help/en/analyticdb/analyticdb-for-mysql/getting-started/create-an-enterprise-or-lake-warehouse-cluster).
    
-   If the AnalyticDB for MySQL cluster is in elastic mode, you must turn on **ENI** in the **Network Information** section of the **Cluster Information** page.![启用ENI网络](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7473933261/p204377.jpg)
    

## **Usage notes**

AnalyticDB for MySQL allows you to import CSV and Parquet files. When you download the backup files of the RDS instance, you must set the download format to CSV or Parquet.

## **Preparations**

Create a directory that is used to store the data of the AnalyticDB for MySQL cluster in an OSS bucket. Then, use the backup download feature to download the required data to the OSS bucket. For more information, see [What is OSS?](/help/en/oss/user-guide/what-is-oss#concept-ybr-fg1-tdb)

1.  Activate OSS. For more information, see [Activate OSS](/help/en/oss/getting-started/activate-oss#task-njz-hf4-tdb).
    
2.  Create a bucket in the OSS console. For more information, see [Create buckets](/help/en/oss/getting-started/create-buckets-6#task-u3p-3n4-tdb).
    
    **Note**
    
    Make sure that the OSS bucket and the AnalyticDB for MySQL cluster reside in the same region.
    
3.  Create a directory in the OSS console. For more information, see [Manage directories](/help/en/oss/user-guide/manage-directories#section-l8o-x8m-ri6).
    
4.  Use the backup download feature to download the backup files of the RDS instance and set the Download Destination parameter to **OSS**. For more information, see [Download backup](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#section-o98-ral-xt0).
    
    **Note**
    
    If you select a different value for this parameter, you must upload the backup files to the OSS bucket. For more information, see [Upload objects](/help/en/oss/user-guide/upload-objects-to-oss/).
    
    In this example, the name of the source database on the RDS instance is `mydb`, and the `mytable` table is created in the database. Sample data in the table:
    
    ```
    INSERT INTO mytable (id, name)
    VALUES
        ("12", "hello_world_1"),
        ("27", "hello_world_2"),
        ("28", "hello_world_3"),
        ("33", "hello_world_4"),
        ("37", "hello_world_5"),
        ("40", "hello_world_6");
    ```
    
    Use the backup download feature to download data from the `mytable` table to the `/bucket/_export/mydb/mytable/data/0-1csv` directory in the OSS bucket.
    

## Import data from the OSS bucket to the AnalyticDB for MySQL cluster

In this example, data is imported from the `/bucket/_export/mydb/mytable/data/0-1csv` directory to the `adb_demo` database in the AnalyticDB for MySQL cluster.

1.  Connect to the AnalyticDB for MySQL cluster. For more information, see [Connect to an AnalyticDB for MySQL cluster](/help/en/analyticdb/analyticdb-for-mysql/getting-started/connect-to-an-analyticdb-for-mysql-cluster#multiTask1114).
    
2.  Create a database. For more information, see [Create a database](/help/en/analyticdb/analyticdb-for-mysql/getting-started/create-a-database#task827).
    
    In this example, a database named `adb_demo` is created in the AnalyticDB for MySQL cluster.
    
3.  Create an external mapping table.
    
    **Note**
    
    When you create an external mapping table, you can use the same table name as the original table or use a different table name.
    
    AnalyticDB for MySQL supports only table analysis. Make sure that a mapping table is created in the AnalyticDB for MySQL cluster before data analysis. You can execute the `CREATE TABLE` statement to create an OSS external mapping table in the CSV or Parquet format in the `adb_demo` database. In this example, an OSS external mapping table that has no partitions and is in the CSV format is created. For more information about the syntax, see [Use external tables to import data to Data Warehouse Edition](/help/en/analyticdb/analyticdb-for-mysql/user-guide/use-external-tables-to-import-data-to-data-warehouse-edition-3#section-kuj-h54-fc6).
    
    ```
    CREATE TABLE IF NOT EXISTS mytable
    (
        id string,
        name string
    )
    ENGINE='OSS'
    TABLE_PROPERTIES='{
        "endpoint":"oss-cn-hangzhou-internal.aliyuncs.com",
        "url":"oss://bucket/_export/mydb/mytable/data/0-1csv",
        "accessid":"LTAI****************",
        "accesskey":"yourAccessKeySecret",
        "delimiter":",",
        "format":"csv"
    }';
    ```
    
    **Parameter**
    
    **Description**
    
    ENGINE='OSS'
    
    The table engine. Set the value to OSS.
    
    TABLE\_PROPERTIES
    
    The connection information that is used by AnalyticDB for MySQL to access OSS.
    
    endpoint
    
    The **endpoint** of the OSS bucket. AnalyticDB for MySQL can access OSS only by using a virtual private cloud (VPC).
    
    **Note**
    
    You can log on to the [OSS console](https://oss.console.alibabacloud.com/), find the bucket, and then obtain the **endpoint** on the **Overview** page.
    
    url
    
    The absolute path of the source object or directory in OSS. We recommend that you use a forward slash (/) at the end of the absolute path of the directory.
    
    Examples:
    
    -   Object: `oss://<bucket-name>/adb/oss_import_test_data.csv`.
        
    -   Directory: `oss://<bucket-name>/adb_data/`.
        
    
    accessid
    
    The AccessKey ID that is used to access the object or directory in OSS.
    
    For more information about how to obtain an AccessKey ID and an AccessKey secret, see [Accounts and permissions](/help/en/analyticdb/analyticdb-for-mysql/support/accounts-and-permissions#multiTask302).
    
    accesskey
    
    The AccessKey secret that is used to access the object or directory in OSS.
    
    delimiter
    
    The column delimiter of the CSV object.
    
    format
    
    -   When you create an external table in the Parquet format, you must set this parameter to `parquet`.
        
    -   When you create an external table in the ORC format, you must set this parameter to `orc`.
        
    
    **Note**
    
    If the format parameter is not specified, the CSV format is used.
    
    **Note**
    
    If the table in the downloaded file is stored in multiple CSV files, such as `0-1csv` and `0-2csv`, you need only to change the URL to `"url":"oss://bucket/_export/mydb/mytable/data/"`. Then, AnalyticDB for MySQL merges the files in this directory into the `mytable` analysis table.
    
    This way, you can view the `mytable` table in the AnalyticDB for MySQL cluster. The content of this table is exactly the same as that of the original `mytable` table. You can query data in the mytable table.
    
4.  Execute the following statement to query the imported data:
    
    ```
    -- mytable is the name of the table in the database in the AnalyticDB for MySQL cluster.
    SELECT * FROM mytable;
    ```
    
    The data in the queried table is returned. The returned data is exactly the same as that of the original mytable table.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9793965961/p715692.png)
    

## What to do next

After the data of the RDS instance that uses cloud disks is imported to the AnalyticDB for MySQL cluster, use AnalyticDB for MySQL to perform business analysis on the data. If multiple tables are queried, follow the preceding steps to import multiple tables to the `adb_demo` database.
