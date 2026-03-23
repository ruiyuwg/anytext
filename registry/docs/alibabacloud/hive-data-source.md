The Hive data source provides a bidirectional channel for reading data from and writing data to Hive. This topic describes the data synchronization capabilities that DataWorks supports for Hive.

## Features

Apache Hive is a data warehouse tool built on Hadoop that is used for the statistical analysis of massive structured logs. Hive can map structured data files to a table and provides SQL query capabilities. Hive is an SQL parsing engine that uses MapReduce for data analysis, stores processed data in the Hadoop Distributed File System (HDFS), converts HiveQL into MapReduce programs, and runs them on Yet Another Resource Negotiator (YARN).

The Hive Reader plugin accesses the Hive Metastore service to obtain the metadata of your configured data tables. You can read data in two ways: using HDFS files or using Hive Java Database Connectivity (JDBC).

-   Read data using HDFS files
    
    The Hive Reader plugin accesses the Hive Metastore service to parse information about your configured data table, such as the HDFS file storage path, file format, and separator. Then, the plugin reads the table data from Hive by reading the HDFS files.
    
-   Read data using Hive JDBC
    
    The Hive Reader plugin connects to the HiveServer2 service through a Hive JDBC client to read data. The Hive Reader plugin supports data filtering using where clauses and lets you read data directly using SQL statements.
    

The Hive Writer plugin accesses the Hive Metastore service to parse information about your configured data table, such as the HDFS file storage path, file format, and separator. The plugin writes data to HDFS files and then runs the `LOAD DATA SQL` statement through a Hive JDBC client to load the data from the HDFS files into the Hive table.

The underlying logic of the Hive Writer plugin is the same as that of the HDFS Writer plugin. You can configure HDFS Writer-related parameters in the Hive Writer plugin. These parameters are passed to the HDFS Writer plugin.

## Supported versions

The Hive plugin supports the following versions:

```
0.8.0
0.8.1
0.9.0
0.10.0
0.11.0
0.12.0
0.13.0
0.13.1
0.14.0
1.0.0
1.0.1
1.1.0
1.1.1
1.2.0
1.2.1
1.2.2
2.0.0
2.0.1
2.1.0
2.1.1
2.2.0
2.3.0
2.3.1
2.3.2
2.3.3
2.3.4
2.3.5
2.3.6
2.3.7
3.0.0
3.1.0
3.1.1
3.1.2
3.1.3
0.8.1-cdh4.0.0
0.8.1-cdh4.0.1
0.9.0-cdh4.1.0
0.9.0-cdh4.1.1
0.9.0-cdh4.1.2
0.9.0-cdh4.1.3
0.9.0-cdh4.1.4
0.9.0-cdh4.1.5
0.10.0-cdh4.2.0
0.10.0-cdh4.2.1
0.10.0-cdh4.2.2
0.10.0-cdh4.3.0
0.10.0-cdh4.3.1
0.10.0-cdh4.3.2
0.10.0-cdh4.4.0
0.10.0-cdh4.5.0
0.10.0-cdh4.5.0.1
0.10.0-cdh4.5.0.2
0.10.0-cdh4.6.0
0.10.0-cdh4.7.0
0.10.0-cdh4.7.1
0.12.0-cdh5.0.0
0.12.0-cdh5.0.1
0.12.0-cdh5.0.2
0.12.0-cdh5.0.3
0.12.0-cdh5.0.4
0.12.0-cdh5.0.5
0.12.0-cdh5.0.6
0.12.0-cdh5.1.0
0.12.0-cdh5.1.2
0.12.0-cdh5.1.3
0.12.0-cdh5.1.4
0.12.0-cdh5.1.5
0.13.1-cdh5.2.0
0.13.1-cdh5.2.1
0.13.1-cdh5.2.2
0.13.1-cdh5.2.3
0.13.1-cdh5.2.4
0.13.1-cdh5.2.5
0.13.1-cdh5.2.6
0.13.1-cdh5.3.0
0.13.1-cdh5.3.1
0.13.1-cdh5.3.2
0.13.1-cdh5.3.3
0.13.1-cdh5.3.4
0.13.1-cdh5.3.5
0.13.1-cdh5.3.6
0.13.1-cdh5.3.8
0.13.1-cdh5.3.9
0.13.1-cdh5.3.10
1.1.0-cdh5.3.6
1.1.0-cdh5.4.0
1.1.0-cdh5.4.1
1.1.0-cdh5.4.2
1.1.0-cdh5.4.3
1.1.0-cdh5.4.4
1.1.0-cdh5.4.5
1.1.0-cdh5.4.7
1.1.0-cdh5.4.8
1.1.0-cdh5.4.9
1.1.0-cdh5.4.10
1.1.0-cdh5.4.11
1.1.0-cdh5.5.0
1.1.0-cdh5.5.1
1.1.0-cdh5.5.2
1.1.0-cdh5.5.4
1.1.0-cdh5.5.5
1.1.0-cdh5.5.6
1.1.0-cdh5.6.0
1.1.0-cdh5.6.1
1.1.0-cdh5.7.0
1.1.0-cdh5.7.1
1.1.0-cdh5.7.2
1.1.0-cdh5.7.3
1.1.0-cdh5.7.4
1.1.0-cdh5.7.5
1.1.0-cdh5.7.6
1.1.0-cdh5.8.0
1.1.0-cdh5.8.2
1.1.0-cdh5.8.3
1.1.0-cdh5.8.4
1.1.0-cdh5.8.5
1.1.0-cdh5.9.0
1.1.0-cdh5.9.1
1.1.0-cdh5.9.2
1.1.0-cdh5.9.3
1.1.0-cdh5.10.0
1.1.0-cdh5.10.1
1.1.0-cdh5.10.2
1.1.0-cdh5.11.0
1.1.0-cdh5.11.1
1.1.0-cdh5.11.2
1.1.0-cdh5.12.0
1.1.0-cdh5.12.1
1.1.0-cdh5.12.2
1.1.0-cdh5.13.0
1.1.0-cdh5.13.1
1.1.0-cdh5.13.2
1.1.0-cdh5.13.3
1.1.0-cdh5.14.0
1.1.0-cdh5.14.2
1.1.0-cdh5.14.4
1.1.0-cdh5.15.0
1.1.0-cdh5.16.0
1.1.0-cdh5.16.2
1.1.0-cdh5.16.99
2.1.1-cdh6.1.1
2.1.1-cdh6.2.0
2.1.1-cdh6.2.1
2.1.1-cdh6.3.0
2.1.1-cdh6.3.1
2.1.1-cdh6.3.2
2.1.1-cdh6.3.3
3.1.1-cdh7.1.1
```

## Limits

-   The Hive data source supports [serverless resource groups (recommended)](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) and [exclusive resource groups for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration#task-2353828).
    
-   You can read only files in TextFile, ORCFile, or ParquetFile format.
    
-   When you use Data Integration to perform an offline synchronization to a Hive cluster, temporary files are generated on the server. These files are automatically deleted after the sync task is complete. To prevent the file system from becoming unavailable, monitor the file count limit in the server's HDFS directory. DataWorks does not guarantee that the number of files remains within the HDFS directory limit.
    
    **Note**
    
    On the server, you can modify the dfs.namenode.fs-limits.max-directory-items parameter to define the maximum number of directories or files that a single directory can contain. The default value is 1,048,576, and the value can range from 1 to 6,400,000. To prevent this issue, you can increase the value of the HDFS dfs.namenode.fs-limits.max-directory-items parameter or delete unnecessary files.
    
-   You can use Kerberos identity authentication or `SSL authentication` to access a Hive data source. If identity authentication is not required, select **No Authentication** for **Authentication Options** when you add a data source.
    
-   When you use Kerberos authentication to access a Hive data source in DataWorks, if both HiveServer2 and the metastore have Kerberos authentication enabled but use different principals, you must add the following configuration to the extended parameters:
    
    ```
     {
    "hive.metastore.kerberos.principal": "<your metastore principal>"
    }
    ```
    

## Supported field types

The following table lists the field types supported by the Hive data source for offline reads.

**Category**

**Hive data type**

String

CHAR, VARCHAR, STRING

Integer

TINYINT, SMALLINT, INT, INTEGER, BIGINT

Floating-point

FLOAT, DOUBLE, DECIMAL

Date and time

TIMESTAMP, DATE

Boolean

BOOLEAN

## Preparations

The required preparations vary based on the data source configuration mode.

### Alibaba Cloud instance mode

If you want to synchronize the OSS tables in this instance, select the corresponding **Access Identity**. The supported access identities are **Alibaba Cloud Account**, **RAM User**, and **RAM Role**. Make sure that the selected access identity has the required OSS permissions. Otherwise, the data synchronization fails due to insufficient read and write permissions.

**Important**

The connectivity test does not verify data read and write permissions.

### Connection string mode

#### DLF configuration

If your Hive data source is from EMR and uses DLF for metadata management, you must add the following content to the **Extension Parameters** field:

```
{"dlf.catalog.id" : "my_catalog_xxxx"}
```

In the code, `my_catalog_xxxx` is the name that corresponds to the `dlf.catalog.id` parameter in your EMR Hive configuration.

#### High availability (HA) configuration

If the EMR Hive cluster that you want to sync has **High Availability** enabled, you must enable **High-availability Mode** and configure the relevant HA information in the **Extended Parameters** section in the following format. You can go to the [EMR console](https://emr.console.alibabacloud.com/), find the target cluster, and then click **Cluster Services** in the **Actions** column to obtain the relevant configuration values.

```
{
// The following code provides an example of HA configurations.
"dfs.nameservices":"testDfs",
"dfs.ha.namenodes.testDfs":"namenode1,namenode2",
"dfs.namenode.rpc-address.testDfs.namenode1": "",
"dfs.namenode.rpc-address.testDfs.namenode2": "",
"dfs.client.failover.proxy.provider.testDfs":"org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"
// (Optional) If the underlying storage is OSS, you must configure the following parameters in the extended parameters to connect to the OSS service.
"fs.oss.accessKeyId":"<yourAccessKeyId>",
"fs.oss.accessKeySecret":"<yourAccessKeySecret>",
"fs.oss.endpoint":"oss-cn-<yourRegion>-internal.aliyuncs.com"
}
```

#### OSS external table configuration

If the underlying storage is OSS, note the following:

-   The **defaultFS** configuration must be prefixed with **oss://**, for example, `oss://bucketName`.
    
-   If the table that you want to sync is an OSS external table, you must enter the OSS-related information in the **Extension Parameters** field when you configure the Hive data source.
    
    ```
    {
        "fs.oss.accessKeyId":"<yourAccessKeyId>",
        "fs.oss.accessKeySecret":"<yourAccessKeySecret>",
        "fs.oss.endpoint":"oss-cn-<yourRegion>-internal.aliyuncs.com"
    }
    ```
    
-   If the table to sync is an OSS-HDFS external table, you must configure the related OSS-HDFS information in the **Extension Parameters** field when you configure the Hive data source.
    
    ```
    {
        "fs.oss.accessKeyId":"<yourAccessKeyId>",
        "fs.oss.accessKeySecret":"<yourAccessKeySecret>",
        "fs.oss.endpoint":"cn-<yourRegion>.oss-dls.aliyuncs.com"
    }
    ```
    

### **CDH mode**

To use the CDH mode to configure a Hive data source, you must [register the CDH cluster with DataWorks](/help/en/dataworks/user-guide/register-a-cdh-or-cdp-cluster-to-dataworks).

## Create a data source

When you develop a data synchronization task, you must create a corresponding data source in DataWorks. For more information about the procedure, see [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **For detailed explanations of the configuration parameters, see the text prompts for each parameter on the configuration page**.

The following describes the parameters for different **Authentication Options**:

## Kerberos authentication

**Parameter**

**Description**

keytab file

The .keytab file generated when a service principal is registered in the Kerberos environment.

conf file

The `conf` file is the Kerberos configuration file. It is used to define various settings for Kerberos clients and servers. The main configuration files are:

-   `krb5.conf`: The configuration file used by clients and libraries. It defines global default settings, realm configurations, domain name mappings, application default settings, and logging options.
    
-   `kdc.conf`: The configuration file for the Key Distribution Center (KDC) server. It defines the database location, log file location, and other KDC-specific settings.
    

principal

An identity entity, which can be a user or a service. It has a unique name and an associated encryption key.

-   User `principal` format: `username@REALM`.
    
-   Service `principal` format: `service/hostname@REALM`.
    

## SSL authentication

**Parameter**

**Description**

Truststore certificate file

The Truststore certificate file generated when SSL authentication is enabled, such as the `truststore.jks` file.

Truststore password

The password set for the Truststore certificate file when SSL authentication is enabled.

Keystore certificate file

The Keystore certificate file generated when SSL authentication is enabled, such as the `keystore.jks` file.

Keystore password

The password set for the Keystore certificate file when SSL authentication is enabled.

## Develop a data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Configure an offline sync task for a single table

-   For more information about the procedure, see [Configure a task in the codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For all parameters and a script demo for the code editor, see [Appendix: Script demo and parameters](#section-wum-9w3-iwn).
    

### Configure an offline read sync task for an entire database

For more information about the procedure, see [Offline sync task for an entire database](/help/en/dataworks/user-guide/database-wide-offline-synchronization/).

## Appendix: Script demo and parameters

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader script demo

You can read data using HDFS files or Hive JDBC:

-   Read data using HDFS files
    
    ```
    {
        "type": "job",
        "steps": [
            {
                "stepType": "hive",
                "parameter": {
                    "partition": "pt1=a,pt2=b,pt3=c", // Partition information
                    "datasource": "hive_not_ha_****", // Data source name
                    "column": [ // Columns to read
                        "id",
                        "pt2",
                        "pt1"
                    ],
                    "readMode": "hdfs", // Read mode
                    "table": "part_table_1",
                    "fileSystemUsername" : "hdfs",
                    "hivePartitionColumn": [
                        {
                          "type": "string",
                          "value": "partition name 1"
                        },
                        {
                          "type": "string",
                          "value": "partition name 2"
                         }
                     ],
                     "successOnNoFile":true
                },
                "name": "Reader",
                "category": "reader"
            },
            {
                "stepType": "hive",
                "parameter": {
                },
                "name": "Writer",
                "category": "writer"
            }
        ],
        "version": "2.0",
        "order": {
            "hops": [
                {
                    "from": "Reader",
                    "to": "Writer"
                }
            ]
        },
        "setting": {
            "errorLimit": {
                "record": "" // Number of error records
            },
            "speed": {
                "concurrent": 2, // Job concurrency
                "throttle": true,// If throttle is set to false, the mbps parameter does not take effect, which means that traffic is not throttled. If throttle is set to true, traffic is throttled.
                "mbps":"12"// Throttling
            }
        }
    }
    ```
    
-   Read data using Hive JDBC
    
    ```
    {
        "type": "job",
        "steps": [
            {
                "stepType": "hive",
                "parameter": {
                    "querySql": "select id,name,age from part_table_1 where pt2='B'",
                    "datasource": "hive_not_ha_****",  // Data source name
                     "session": [
                        "mapred.task.timeout=600000"
                    ],
                    "column": [ // Columns to read
                        "id",
                        "name",
                        "age"
                    ],
                    "where": "",
                    "table": "part_table_1",
                    "readMode": "jdbc" // Read mode
                },
                "name": "Reader",
                "category": "reader"
            },
            {
                "stepType": "hive",
                "parameter": {
                },
                "name": "Writer",
                "category": "writer"
            }
        ],
        "version": "2.0",
        "order": {
            "hops": [
                {
                    "from": "Reader",
                    "to": "Writer"
                }
            ]
        },
        "setting": {
            "errorLimit": {
                "record": ""
            },
            "speed": {
                "concurrent": 2,  // Job concurrency
                "throttle": true,// If throttle is set to false, the mbps parameter does not take effect, which means that traffic is not throttled. If throttle is set to true, traffic is throttled.
                "mbps":"12"// Throttling            
                
            }
        }
    }
    ```
    

### Reader script parameters

**Parameter**

**Description**

**Required**

**Default value**

datasource

The name of the data source. The name must be the same as the one you added.

Yes

None

table

The name of the table to synchronize.

**Note**

This is case-sensitive.

Yes

None

readMode

The read mode:

-   To read data using HDFS files, set this parameter to `"readMode":"hdfs"`.
    
-   To read data using Hive JDBC, set this parameter to `"readMode":"jdbc"`.
    

**Note**

-   When you read data using Hive JDBC, you can use a Where clause for data filtering. However, in this scenario, the Hive engine may generate a MapReduce task at the underlying layer, which is inefficient.
    
-   When you read data using HDFS files, you cannot use a Where clause for data filtering. In this scenario, the data files of the Hive table are directly accessed for reading, which is more efficient.
    
-   Reading data from a view is not supported when you use HDFS files.
    

No

None

partition

The partition information of the Hive table:

-   If you read data using Hive JDBC, you do not need to configure this parameter.
    
-   If you read data from a partitioned Hive table, you need to configure the partition information. The sync task reads the data from the partitions specified in the partition parameter.
    
    The Hive Reader plugin supports using an asterisk (\*) as a wildcard character for single-level partitions but not for multi-level partitions.
    
-   If your Hive table is a non-partitioned table, you do not need to configure the partition parameter.
    

No

None

session

The session-level configuration for Hive JDBC reads. You can set client parameters. For example, SET hive.exec.parallel=true

No

None

column

The columns to read. For example, `"column": ["id", "name"]`.

-   Column cropping is supported. You can export a subset of columns.
    
-   Column reordering is supported. You can export columns in an order different from the table schema.
    
-   You can specify partition key columns.
    
-   You can specify constants.
    
-   The column parameter must explicitly specify the set of columns to synchronize. It cannot be empty.
    

Yes

None

querySql

When you read data using Hive JDBC, you can directly configure the querySql parameter to read data.

No

None

where

When you read data using Hive JDBC, you can set the where parameter to filter data.

No

None

fileSystemUsername

When you read data using HDFS, the user configured on the [Hive data source](/help/en/dataworks/add-a-hive-data-source#task-2484248) page is used by default. If anonymous logon is configured on the data source page, the admin account is used by default. If a permission issue occurs during the sync task, you must switch to the code editor and configure the fileSystemUsername parameter.

No

None

hivePartitionColumn

If you want to synchronize the values of partition fields to a downstream destination, you can switch to the code editor and configure the hivePartitionColumn parameter.

No

None

successOnNoFile

When you read data in HDFS mode, this parameter specifies whether the sync task runs as normal if the directory is empty.

No

None

### Writer script demo

```
{
    "type": "job",
    "steps": [
        {
            "stepType": "hive",
            "parameter": {
            },
            "name": "Reader",
            "category": "reader"
        },
        {
            "stepType": "hive",
            "parameter": {
                "partition": "year=a,month=b,day=c", // Partition configuration
                "datasource": "hive_ha_shanghai", // Data source
                "table": "partitiontable2", // Destination table
                "column": [ // Column configuration
                    "id",
                    "name",
                    "age"
                ],
                "writeMode": "append" ,// Write mode
                "fileSystemUsername" : "hdfs"
            },
            "name": "Writer",
            "category": "writer"
        }
    ],
    "version": "2.0",
    "order": {
        "hops": [
            {
                "from": "Reader",
                "to": "Writer"
            }
        ]
    },
    "setting": {
        "errorLimit": {
            "record": ""
        },
        "speed": {
            "throttle":true,// If throttle is set to false, the mbps parameter does not take effect, which means that traffic is not throttled. If throttle is set to true, traffic is throttled.
            "concurrent":2, // Job concurrency.
            "mbps":"12"// Throttling
        }
    }
}
```

### Writer script parameters

**Parameter**

**Description**

**Required**

**Default value**

datasource

The name of the data source. The name must be the same as the one you added.

Yes

None

column

The columns to write. For example, `"column": ["id", "name"]`.

-   Column cropping is supported. You can export a subset of columns.
    
-   The column parameter must explicitly specify the set of columns to synchronize. It cannot be empty.
    
-   Column reordering is not supported.
    

Yes

None

table

The name of the Hive table to write to.

**Note**

This is case-sensitive.

Yes

None

partition

The partition information of the Hive table:

-   If the Hive table that you write to is a partitioned table, you need to configure the partition information. The sync task writes the partition data that corresponds to the partition setting.
    
-   If your Hive table is a non-partitioned table, you do not need to configure the partition parameter.
    

No

None

writeMode

The mode for writing data to the Hive table. After data is written to an HDFS file, the Hive Writer plugin runs `LOAD DATA INPATH (overwrite) INTO TABLE` to load the data into the Hive table.

The writeMode parameter specifies the data loading behavior:

-   If writeMode is set to truncate, existing data is cleared before new data is loaded.
    
-   If writeMode is set to append, existing data is retained.
    
-   If writeMode is set to another value, data is written to the HDFS file, and no data is loaded into the Hive table.
    

**Note**

The writeMode parameter is a high-risk parameter. Pay attention to the write directory and the behavior of the writeMode parameter to prevent accidental data deletion.

The data loading behavior must be used with the hiveConfig parameter. Pay attention to your configuration.

Yes

None

hiveConfig

You can configure advanced Hive extension parameters in hiveConfig, including hiveCommand, jdbcUrl, username, and password:

-   hiveCommand: The full path of the Hive client tool. After `hive -e` is run, the `LOAD DATA INPATH` data loading operation associated with writeMode is performed.
    
    The Hive access information is ensured by the client corresponding to hiveCommand.
    
-   jdbcUrl, username, and password specify the Hive JDBC access information. The HiveWriter plugin accesses Hive through the Hive JDBC driver and then runs the `LOAD DATA INPATH` data loading operation associated with writeMode.
    
    ```
    "hiveConfig": {
        "hiveCommand": "",
        "jdbcUrl": "",
        "username": "",
        "password": ""
            }
    ```
    
-   The Hive Writer plugin uses an HDFS client to write data to HDFS files at the underlying layer. You can also configure advanced parameters for the HDFS client in hiveConfig.
    

Yes

None

fileSystemUsername

When you write data to a Hive table, the user configured on the [Hive data source](/help/en/dataworks/add-a-hive-data-source#task-2484248) page is used by default. If anonymous logon is configured on the data source page, the admin account is used by default. If a permission issue occurs during the sync task, you must switch to the code editor and configure the fileSystemUsername parameter.

No

None

enableColumnExchange

If this parameter is set to True, column reordering is enabled.

**Note**

Only the Text format is supported.

No

None

nullFormat

Data Integration provides the nullFormat parameter to define which strings can be interpreted as null.

For example, if you configure `nullFormat:"null"`, Data Integration treats the source data \`null\` as a null field.

**Note**

The string "null" (the four characters n, u, l, l) is different from an actual null value.

No

None
