This topic describes how to use the OSSOUTFILE feature of PolarDB to export database tables into a CSV file in an Object Storage Service (OSS) bucket.

## Prerequisites

Your PolarDB cluster runs one of the following database engine versions:

-   PolarDB for MySQL 8.0.1 with a revision version of 8.0.1.1.30 or later.
    
-   PolarDB for MySQL 8.0.2 with a revision version of 8.0.2.2.8 or later.
    

For information about how to query the engine version of a PolarDB cluster, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).

## Precautions

-   You cannot access a PolarDB cluster by using Data Management (DMS) to export data files to OSS. Otherwise, the following error message appears:
    
    ```
    Can not issue executeUpdate() or executeLargeUpdate() for SELECTs
    ```
    
    You can access a PolarDB cluster by using a **client** or the **MySQL command-line client MySQL** to export data files to OSS. For more information, see [Connect to a cluster](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-a-cluster#task-1580301).
    
-   If you want to perform incremental backups of data to OSS, you can create and configure a backup schedule. For more information, see [Create a backup schedule](/help/en/dbs/getting-started/create-backup-plans) and [Configure a backup schedule](/help/en/dbs/getting-started/set-backup-plans).
    
-   We recommend performing export tasks on a read-only node. You can use the `/*FORCE_SALVE*/` hint in the SQL statement or directly connect to a read-only node to export data.
    

## Parameters

**Parameter**

**Description**

loose\_oss\_outfile\_buffer\_size

The maximum memory size allowed for each OSSOUTFILE thread. Valid values: 102400 to 536870912. Default value: 134217728. Unit: bytes. The larger the memory size, the faster the export.

loose\_max\_oss\_outfile\_threads

The maximum number of OSSOUTFILE threads that can be simultaneously started in PolarDB. Valid values: 1 to 100. Default value: 1.

You can execute the `SHOW STATUS LIKE "Oss_outfile_threads_running";` statement to view the number of running OSSOUTFILE threads in the current cluster.

**Note**

This parameter does not take effect for PolarDB for MySQL 8.0.1.1.38 or later.

**Note**

You can calculate the maximum total memory used by the OSSOUTFILE feature by using the following formula:

```
loose_max_oss_outfile_threads * loose_oss_outfile_buffer_size
```

The total memory used by the OSSOUTFILE feature must not exceed 5% of the node memory. Otherwise, other services on the current node may be affected.

## Usage notes

**Syntax**

```
SELECT * FROM table_name INTO OSSOUTFILE 'outfile_path' COLUMNS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' NULL_MARKER BY 'NULL' LINES TERMINATED BY '\n';
```

**Note**

-   `COLUMNS TERMINATED BY`: the delimiter between fields.
    
-   `OPTIONALLY ENCLOSED BY`: the identifiers at both ends of a field. After OPTIONALLY is added, identifiers are added only to both ends of a string-type field. Otherwise, identifiers are added to both ends of all field types.
    
-   `NULL_MARKER BY`: specifies how NULL values in the database tables are represented in the exported text file. NULL values can be represented in the exported data file by using the following methods (listed from the highest to lowest priority):
    
    -   **NULL\_MARKER**: directly defines the output representation of NULL values in the exported text file. `NULL_MARKER` allows you to use any arbitrary string as the representation of the NULL value. This method has the highest priority.
        
    -   **ESCAPED BY**: specifies a single escape character that prefixes the N character to represent the NULL value. For example, if you specify `ESCAPED BY '\'`, NULL values are represented as \\N in the exported data file.
        
    -   **NULL** (default): If you do not use one of the preceding methods, the NULL values are represented by using the string "NULL". This method has the lowest priority. NULL does not have `ENCLOSED` identifiers at both ends.
        
-   `LINES TERMINATED BY`: the delimiter between rows.
    

For more information, see [MySQL documentation](https://dev.mysql.com/doc/refman/8.0/en/select-into.html).

**Parameters**

**Parameter**

**Description**

outfile\_path

The path in the OSS bucket that stores the exported data file. It contains the following parts:

-   The OSS server information, which includes the current OSS bucket name and the basic path. For more information, see [Use OSS foreign tables to access OSS data](/help/en/polardb/polardb-for-mysql/user-guide/use-oss-foreign-tables-to-access-oss-data#task-2187356).
    
-   (Optional) The path of the current export task.
    
-   The name of the file to be created in the OSS bucket.
    

The parts are separated with forward slashes (`/`). If a single path of the current export task contains multiple forward slashes (`/`), a multi-level path is used. After a file is uploaded to OSS, the complete path is: the OSS server path + the path of the current task. The name of the exported data file must be included in the `outfile_path`.

table\_name

The name of the database table from which you want to export data to OSS.

## **Procedure**

### **Create an OSS server**

```
CREATE SERVER outserver FOREIGN DATA WRAPPER oss OPTIONS ( EXTRA_SERVER_INFO '{"oss_endpoint": "oss-cn-zhangjiakou-internal.aliyuncs.com", "oss_bucket": "polardb", "oss_access_key_id": "*******", "oss_access_key_secret": "********", "oss_prefix":"B_outfile"}');                 
```

**Note**

-   In this example, the preceding statement is used to [create an OSS server for a cluster of later versions](/help/en/polardb/polardb-for-mysql/user-guide/use-oss-foreign-tables-to-access-oss-data#5e7338d1f8tjy). In actual operations, modify the statement based on the engine version of your cluster.
    
-   Set the `oss_endpoint` parameter to an internal endpoint in the `oss-{xxx}-internal.aliyuncs.com` format.
    

### **Export data to OSS**

For example, you can execute the following statement to export data to `oss://polardb/B_outfile/tpch/1t/parallel-lineitem.CSV`.

-   polardb is the bucket name.
    
-   `B_outfile/tpch/1t/parallel-lineitem.CSV` is the file path and name.
    

```
SELECT * FROM lineitem INTO OSSOUTFILE 'outserver/tpch/1t/parallel-lineitem.CSV' COLUMNS TERMINATED BY ',' OPTIONALLY ENCLOSED BY '"' NULL_MARKER BY 'NULL' LINES TERMINATED BY '\n';
```

### **Monitor the resource usage of data export tasks**

If your cluster runs PolarDB for MySQL 8.0.1.1.38 or later, you can execute the following statement to view the total memory size and total number of threads used by the current export task in real time:

-   polardb is the bucket name
    
    ```
    SHOW STATUS LIKE "%Oss_outfile_memory_used%";
    ```
    
-   View the total memory size (in bytes) used by the export task in real time.
    
    ```
    SHOW STATUS LIKE "%Oss_outfile_threads_running%";
    ```
    

**Note**

If you run an export task on a node by using the **cluster endpoint**, you can query information about the memory resources used by the task only if you execute the `SHOW STATUS` and export statements on the same node.

### **What to do next**

-   [Use OSS foreign tables to access OSS data](/help/en/polardb/polardb-for-mysql/user-guide/use-oss-foreign-tables-to-access-oss-data#395ef5c7c3ltj)
    
-   [Query data](/help/en/polardb/polardb-for-mysql/user-guide/use-oss-foreign-tables-to-access-oss-data#8962121013tz6)
    

## **Troubleshoot**

### The "`**ERROR 1086 (HY000): File 'xxxx' already exists**`" error message appears when I export data to OSS.

This error occurs because a file with the same name as the file that you want to upload already exists in OSS. You can use one of the following solutions to resolve the issue:

-   Manually delete the existing file from OSS and then execute the `SELECT ... INTO OSSOUTFILE ...` statement again.
    
-   Use the `OSS_REPLACE_EXISTED_FILE()` hint to forcibly overwrite the existing file. Format:
    
    ```
    SELECT /*+ OSS_REPLACE_EXISTED_FILE() */ * FROM lineitem INTO OSSOUTFILE 'outserver/tpch/1t/parallel-lineitem.CSV' COLUMNS TERMINATED BY '|@|' OPTIONALLY ENCLOSED BY '"' NULL_MARKER BY "" LINES TERMINATED BY '\n';
    ```
    
    **Note**
    
    -   If you use this `hint`, the existing file on OSS is forcibly overwritten. If the OSS versioning feature is disabled, you cannot restore the overwritten file. Proceed with caution. Before you perform this operation, you can enable the OSS [version control](/help/en/oss/user-guide/overview-78/#concept-jdg-4rx-bgb) feature.
        
    -   To use `hints`, your PolarDB cluster must run one of the following database engine versions:
        
        -   PolarDB for MySQL 8.0.1 with a revision version of 8.0.1.1.31 or later.
            
        -   PolarDB for MySQL 8.0.2 with a revision version of 8.0.2.2.9 or later.
            
    

### The "`OSS error: error message: The bucket you access does not belong to you., error code: AccessDenied`" error message appears when I export data to OSS.

This error occurs because the RAM user or the [AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#task-2245479) of your Alibaba Cloud account does not have permissions on the OSS bucket. Check the permissions of your AccessKey pair.
