This topic describes how to use Flink and Blink to consume Hologres binary logs in real time.

## Precautions

Note the following items when consuming Hologres binary logs:

-   You can consume binary logs only in Hologres V0.9 and later. You can configure engine whitelists only in Hologres V1.3.21 and later because earlier versions do not support this feature. If you enable the whitelist in an unsupported version, binary log consumption fails. If your instance version is earlier than the required version, join the Hologres DingTalk group to provide feedback. For more information, see [Online support](/help/en/hologres/support/obtain-online-support-for-hologres#uicontrol-f45-pb4-6n1).
    
-   Hologres supports the binary logging feature at the table level for both row-oriented and column-oriented tables. Starting from Hologres V1.1, row-column hybrid storage tables are also supported. After you enable binary logging, column-oriented tables have a higher theoretical overhead than row-oriented tables. Therefore, for scenarios that involve frequent data updates, we recommend that you enable binary logging for row-oriented tables.
    
-   For more information about binary logging support and how to enable and configure it, see [Subscribe to Hologres binary logs](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs#concept-2037122).
    
-   Only Realtime Compute for Apache Flink supports consuming Hologres binary logs. In Holohub mode, Flink supports consuming only simple data types from Hologres binary logs. Starting from Flink 6.0.3, you can consume Hologres binary logs in Java Database Connectivity (JDBC) mode. Compared to Holohub mode, JDBC mode supports more data types. For more information, see [Data type mapping between Blink/Flink and Hologres](/help/en/hologres/developer-reference/data-types#section-x29-ngb-txf). This mode also has additional permission requirements. For more information, see [Permissions](#99123e40e46rd).
    
-   You cannot consume binary logs from parent partitioned tables.
    
-   Hologres V2.0 and later provide limited support for Holohub mode. Starting from Hologres V2.1, Holohub mode is deprecated and fully replaced by JDBC mode. Before you upgrade your Hologres version, check your Flink tasks that use Holohub mode, upgrade the Flink Ververica Runtime (VVR) job version, and then upgrade the Hologres instance. For more information, see [Switch from Holohub mode to JDBC mode](#yRC6q).
    

## **Permissions**

-   Flink supports custom Hologres accounts when consuming binary logs in JDBC mode, but not in Holohub mode.
    
-   To consume Hologres binary logs in Holohub mode using Flink, you need read and write permissions on the table.
    
-   Consuming Hologres binary logs in JDBC mode using Flink has the following prerequisites. For more information, see [Consume Hologres binary logs using JDBC](/help/en/hologres/user-guide/use-jdbc-to-consume-hologres-binary-logs).
    
    1.  The `hg_binlog` extension is created. This extension is created by default in Hologres V2.0 and later.
        
    2.  The user must be a superuser of the instance or have both the Owner permission on the target table and the Replication Role permission for the instance.
        
    

## Use Flink to consume binary logs in real time

VVP 2.4 and later support real-time consumption of binary logs using the Hologres connector. The following sections describe how to use it.

### Source table DDL (non-CDC mode)

In this mode, the binary log data consumed by the source is passed to descendant nodes as regular Flink data. All data is of the Insert type. You can choose how to process data of a specific `hg_binlog_event_type` type based on your business needs. After you enable binary logging for a Hologres table, use the following DDL for the source table (non-CDC mode) in Flink to consume binary logs in real time.

```
create table test_message_src_binlog_table(
  hg_binlog_lsn BIGINT,
  hg_binlog_event_type BIGINT,
  hg_binlog_timestamp_us BIGINT,
  id INTEGER,
  title VARCHAR,
  body VARCHAR
) with (
  'connector'='hologres',
  'dbname'='<yourDbname>',
  'tablename'='<yourTablename>',
  'username'='<yourAccessID>',
  'password'='<yourAccessSecret>',
  'endpoint'='<yourEndpoint>',
  'binlog' = 'true',
  'binlogMaxRetryTimes' = '10',
  'binlogRetryIntervalMs' = '500',
  'binlogBatchReadSize' = '100'
);
```

-   The three `binlogxxx` parameters are binary log system fields. Their names and types are fixed and cannot be modified.
    
-   Other fields correspond to user fields and must be in lowercase.
    

### Source table DDL (CDC mode)

In this mode, an accurate Flink RowKind type, such as INSERT, DELETE, UPDATE\_BEFORE, or UPDATE\_AFTER, is automatically set for each row of the binary log data based on the `hg_binlog_event_type`. This lets you mirror the table data, which is similar to the change data capture (CDC) feature in MySQL and PostgreSQL.

**Note**

Hologres binary log source tables (CDC mode) do not support watermark definitions. To perform window aggregation, you can use a non-window aggregation method. For more information, see [MySQL/Hologres CDC source tables do not support window functions. How can I implement minute-level aggregation statistics?](/help/en/flink/realtime-flink/support/faq-about-cdc#section-e72-p90-qm7).

After you enable binary logging for a Hologres table, use the following DDL for the source table (CDC mode) in Flink to consume binary logs in real time.

```
create table test_message_src_binlog_table(
  id INTEGER,
  title VARCHAR,
  body VARCHAR
) with (
  'connector'='hologres',
  'dbname'='<yourDbname>',// The name of the Hologres database.
  'tablename'='<yourTablename>',// The name of the Hologres table.
  'username'='<yourAccessID>',// The AccessKey ID of your account.
  'password'='<yourAccessSecret>',// The AccessKey secret of your account.
  'endpoint'='<yourEndpoint>',// The VPC endpoint of your Hologres instance.
  'binlog' = 'true',
  'cdcMode' = 'true',
  'binlogMaxRetryTimes' = '10',
  'binlogRetryIntervalMs' = '500',
  'binlogBatchReadSize' = '100'
);
```

### Source table for both full and incremental data

Starting from VVR engine 1.13-vvr-4.0.13 and Hologres V0.10, Hologres binary log CDC source tables support the consumption of both full and incremental data. This method first reads the historical full data from the database and then smoothly switches to reading incremental data from binary logs. For more information, see [Hologres](/help/en/flink/realtime-flink/developer-reference/hologres-connector/).

### JDBC mode binary log source table

Starting from Flink 6.0.3, you can consume Hologres binary logs in JDBC mode. Compared to Holohub mode, JDBC mode supports more data types and custom accounts. For more information, see [Hologres](/help/en/flink/realtime-flink/developer-reference/hologres-connector/).

### Switch from Holohub mode to JDBC mode

Hologres has been gradually phasing out Holohub mode since V2.0. To upgrade your Hologres version, you must switch your jobs from Holohub mode to JDBC mode. Follow these instructions.

## Upgrade a Hologres instance to V2.1

Before you upgrade your Hologres instance to V2.1, choose one of the following solutions to check the Flink task and Hologres instance to ensure that the Flink task runs properly.

-   (Solution 1) (Recommended) Upgrade the Flink VVR version to 8.0.7 or later. Flink automatically switches from Holohub mode to JDBC mode.
    
-   (Solution 2) Upgrade the Flink VVR version to a version from 6.0.7 to 8.0.5. Add the `'sdkMode'='jdbc'` parameter to the source table and restart the job. You must also grant the user **one of the following sets of permissions**. After you confirm that the job runs properly, upgrade the Hologres instance.
    
    -   (Option 1) Superuser permission on the instance.
        
    -   (Option 2) Owner permission on the target table, CREATE DATABASE permission, and Replication Role permission for the instance.
        
    
-   (Solution 3) (Not recommended) Upgrade the Flink VVR version to 8.0.6. Flink automatically switches from Holohub mode to JDBC mode. However, VVR 8.0.6 has a known bug. If a dimension table has too many fields, the VVR job may time out during deployment. For more information, see [Hologres Connector Release Note](/help/en/hologres/user-guide/import-using-flink/#section-y35-bdv-cc9).
    
-   (Optional) If you have many Flink VVR jobs, see the following content to obtain information about the jobs and tables that need to be upgraded.
    

## Upgrade a Hologres instance to V2.0

-   (Solution 1) (Recommended) Upgrade the Flink VVR version to 8.0.6 or later. Flink automatically switches from Holohub mode to JDBC mode. VVR 8.0.6 has a known bug. If a dimension table has too many fields, the VVR job may time out during deployment. For more information, see [Hologres Connector Release Note](/help/en/hologres/user-guide/import-using-flink/#section-y35-bdv-cc9). We recommend that you choose VVR 8.0.7.
    
-   (Solution 2) Upgrade the Flink VVR version to 8.0.4 or 8.0.5 and restart the Flink job. You must also grant the user **one of the following sets of permissions**. After you confirm that the job runs properly, upgrade the Hologres instance.
    
    -   (Option 1) Superuser permission on the instance.
        
    -   (Option 2) Owner permission on the target table, CREATE DATABASE permission, and Replication Role permission for the instance.
        
-   (Solution 3) Upgrade the Flink VVR version to a version from 6.0.7 to 8.0.3. Flink will continue to use Holohub mode to consume binary logs.
    

If you have too many Flink VVR jobs that consume Hologres binary logs, use the following method to obtain information about the jobs and tables that need to be upgraded.

**Note**

This tool supports obtaining information only for the following types of jobs:

-   SQL jobs that use DDL statements to define tables.
    
-   Catalog jobs that use hints to specify parameters.
    

The tool does not support obtaining information for JAR jobs or for Catalog tables that do not have hint parameters.

1.  Download the open source tool [find-incompatible-flink-jobs-1.0-SNAPSHOT-jar-with-dependencies.jar](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20240709/tasszu/find-incompatible-flink-jobs-1.0-SNAPSHOT-jar-with-dependencies.jar).
    
2.  Use the command line to go to the open source tool directory. Then, run the following command to view all jobs and tables that require an upgrade.
    
    **Note**
    
    To run the following command, you must have a Java environment with JDK 8 or later installed.
    
    ```
    java -cp find-incompatible-flink-jobs-1.0-SNAPSHOT-jar-with-dependencies.jar com.alibaba.hologres.FindIncompatibleFlinkJobs <region> <url> <AccessKeyID> <AccessKeySecret> <binlog/rpc>
    
    # Example
    java -cp find-incompatible-flink-jobs-1.0-SNAPSHOT-jar-with-dependencies.jar com.alibaba.hologres.FindIncompatibleFlinkJobs Beijing https://vvp.console.aliyun.com/web/xxxxxx/zh/#/workspaces/xxxx/namespaces/xxxx/operations/stream/xxxx my-access-key-id my-access-key-secret binlog
    ```
    
    The following describes the parameters.
    
    **Parameter**
    
    **Description**
    
    region
    
    The value for the region where the target Realtime Compute for Apache Flink project is located. For the values, see [Region value mapping table](#9dbbee5fc0swu).
    
    url
    
    The URL of any job in the target Realtime Compute for Apache Flink project.
    
    AccessKeyID
    
    The AccessKey ID of an account that can access the Realtime Compute for Apache Flink project.
    
    AccessKeySecret
    
    The AccessKey secret of an account that can access the Realtime Compute for Apache Flink project.
    
    binlog/rpc
    
    The content to check in the jobs. Valid values:
    
    -   `binlog`: Checks the Hologres binary log source tables of all jobs in the project.
        
    -   `rpc`: Checks the dimension tables or sink tables that use `rpc` mode in all jobs in the project.
        
    
    Region value mapping table (click to expand)
    
    **Region**
    
    **Value**
    
    China (Beijing)
    
    Beijing
    
    China (Shanghai)
    
    Shanghai
    
    China (Hangzhou)
    
    Hangzhou
    
    China (Shenzhen)
    
    Shenzhen
    
    China (Zhangjiakou)
    
    Zhangjiakou
    
    China (Hong Kong)
    
    Hong Kong
    
    Singapore
    
    Singapore
    
    Germany (Frankfurt)
    
    Germany
    
    Indonesia (Jakarta)
    
    Indonesia
    
    Malaysia (Kuala Lumpur)
    
    Malaysia
    
    US (Silicon Valley)
    
    US
    
    Shanghai Finance Cloud
    
    Shanghai Finance Cloud
    
3.  The following is a sample result.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5098310171/p765808.png)
