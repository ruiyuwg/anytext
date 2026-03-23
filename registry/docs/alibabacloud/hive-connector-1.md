You can use a Hive connector to query and analyze data in a Hive data warehouse.

## Background information

A Hive data warehouse system consists of the following parts:

-   Data files in various formats. In most cases, the data files are stored in Hadoop Distributed File System (HDFS) or an object storage system, such as Alibaba Cloud Object Storage Service (OSS).
    
-   Metadata about how the data files are mapped to schemas and tables. The metadata is stored in a database such as a MySQL database. You can access the metadata by using a Hive metastore.
    
-   A query language called HiveQL. This query language is executed on a distributed computing framework, such as MapReduce or Tez.
    

This topic describes the following information about Hive connectors:

-   [Modify the configurations of a Hive connector](#section-chu-knq-rd8)
    
-   [Supported file types](#section-oax-6cp-57f)
    
-   [Supported table types](#section-eov-eqw-hoe)
    
-   [Hive views](#section-gxh-uxm-m8f)
    
-   [Configuration properties](#section-rme-8uw-buw)
    

## Prerequisites

A data lake cluster or Hadoop cluster is created, and the Presto service is selected. For more information, see [Create a cluster](/help/en/emr/emr-on-ecs/user-guide/create-a-cluster-on-the-emr-on-ecs-page#task-2136630).

## Limits

-   To configure a Hive connector, you must first configure a Hive metastore.
    
-   Hive connectors support a variety of distributed storage systems, such as HDFS, Alibaba Cloud OSS, and OSS compatible systems. You can use a Hive connector to query data from the distributed storage systems. Make sure that the coordinator node and all the worker nodes of Presto can access the Hive metastore that you configured and the distributed storage system whose data you want to query. By default, you can use the Thrift protocol to access the Hive metastore over port 9083.
    

## Modify the configurations of a Hive connector

This section describes how to modify the configurations of a Hive connector. For more information, see [Configure connectors](/help/en/emr/configure-connectors#task-2113112).

### Default configurations of a Hive connector

Go to the Presto service page in the EMR console, click the **Configure** tab, and then click the **hive.properties** tab. The parameters described in the following table are displayed. Modify these parameters based on your business requirements.

**Parameter**

**Description**

hive.recursive-directories

Specifies whether data can be read from the subdirectories for a table or a partition. This parameter is similar to the `hive.mapred.supports.subdirectories` property of Hive.

hive.metastore.uri

The uniform resource identifier (URI) that is used to access the Hive metastore based on the Thrift protocol.

By default, this parameter is set to a value in the format of `thrift://<Name of the master node>.cluster-24****:9083`.

hive.config.resources

The HDFS configuration file. If you want to specify multiple configuration files, separate the file names with commas (,). Make sure that the configuration files exist on all the hosts where Presto is running.

**Important**

Set this parameter only if you need to access HDFS.

hive.delta-table-enabled

Specifies whether Presto can read data from a Delta Lake table. Valid values:

-   true: Presto can read data from a Delta Lake table. This is the default value.
    
-   false: Presto cannot read data from a Delta Lake table.
    

hive.delta-compatible-mode-enabled

Specifies whether the compatibility mode is enabled for a Delta Lake table. Valid values:

-   true: The compatibility mode is enabled for a Delta Lake table. This is the default value.
    
-   false: The compatibility mode is disabled for a Delta Lake table.
    

hive.hdfs.impersonation.enabled

Specifies whether to enable user impersonation. Valid values:

-   true: User impersonation is enabled.
    
-   false: User impersonation is disabled.
    

### Configurations for multiple Hive clusters

If you have multiple Hive clusters, you can create multiple configuration files in the etc/catalog directory. Make sure that the file name extension is .properties.

For example, if you create a configuration file named sales.properties, Presto uses the connector configured in the file to create a catalog named sales.

### HDFS configuration

In most cases, the HDFS client is automatically configured for Presto, and you do not need to specify a configuration file. However, in some special scenarios, you must specify the HDFS client if you want to access an HDFS cluster. For example, if you enable HDFS federation or deploy NameNode in high-availability mode, you must add the `hive.config.resources` property to reference the required HDFS configuration file.

**Important**

-   We recommend that you specify a configuration file only if it is necessary. This way, the number of configuration files is reduced, and the number of included properties is minimized, which reduces the possibility of property incompatibilities.
    
-   Make sure that the configuration files exist on all the hosts where Presto is running. If you want to reference an existing Hadoop configuration file, make sure that the configuration file is copied to all the Presto nodes on which Hadoop is not running.
    

### HDFS username and permissions

Before you execute the `CREATE TABLE` or `CREATE TABLE AS` statement in Presto to create a Hive table, check whether the account that you use to access HDFS from Presto has permissions to access the warehouse directory of Hive. The Hive warehouse directory is specified by the configuration variable `hive.metastore.warehouse.dir` in the hive-site.xml file. The default value is `/user/hive/warehouse`.

## Supported file types

Hive connectors support the file types that are described in the following table.

**File type**

**Remarks**

ORC

N/A

Parquet

N/A

Avro

N/A

RCText

Refers to RCFile that uses the `ColumnarSerDe` class.

RCBinary

Refers to RCFile that uses the `LazyBinaryColumnarSerDe` class.

SequenceFile

N/A

JSON

The `org.apache.hive.hcatalog.data.JsonSerDe` class is used.

CSV

The `org.apache.hadoop.hive.serde2.OpenCSVSerde` class is used.

TextFile

N/A

## Supported table types

Hive connectors support the table types that are described in the following table.

**Table type**

**Description**

Atomicity, consistency, isolation, durability (ACID) table

If a Hive metastore of the 3.X version is used, you can use a Hive connector to read data from or write data to insert-only and ACID tables. In this case, partitioning and bucketing are fully supported.

You can perform row-level DELETE and UPDATE operations on ACID tables. You are not allowed to perform UPDATE operations on partition key columns or bucket columns or use Hive Streaming Ingest to create ACID tables. For more information, see [Streaming Data Ingest](https://cwiki.apache.org/confluence/display/Hive/Streaming+Data+Ingest).

Materialized view

You can use a Hive connector to read data from materialized views of Hive. In Presto, materialized views are presented as regular, read-only tables.

## Hive views

Hive views are defined in HiveQL and stored in a Hive metastore.

A Hive connector supports Hive views in the following modes: Disabled, Legacy, and Experimental.

**Mode**

**Description**

Disabled

In this mode, the business logic and data encoded in the views are invisible in Presto.

Hive views are ignored by default.

Legacy

In this mode, Hive views are simple, and you can read data in Presto.

To enable this mode, you can specify `hive.translate-hive-views=true` and `hive.legacy-hive-view-translation=true`.

If you want to temporarily enable this traditional access mode for a specific catalog, you can set the catalog session property `legacy_hive_view_translation` to true.

HiveQL is similar to SQL. A HiveQL query that defines a view is interpreted as if the query is written in SQL. No translation is required.

This mode is suitable for simple Hive views but may cause problems for complex queries. For example, if a HiveQL function has the same signature as SQL but has different behavior, the returned results may differ. In extreme scenarios, the query may fail or may not be parsed and executed.

Experimental

In this mode, you can analyze, process, and rewrite Hive views, including the expressions and statements that the views contain.

To enable this mode, you can specify `hive.translate-hive-views=true`.

If you use this mode, the following features are not supported:

-   `current_date`, `current_timestamp`, and some other similar HiveQL functions
    
-   `translate()`, window functions, and some other similar Hive functions
    
-   Common table expressions and simple case expressions
    
-   Timestamp precision setting
    
-   Correct mapping between Hive data types and Presto data types
    
-   Processing of user-defined functions (UDFs)
    

## Configuration properties

### Hive configuration properties

Hive connectors support query acceleration based on JindoTable. Each EMR cluster has two built-in Hive connectors, which are `hive.properties` and `hive-acc.properties`. The native engine of JindoTable is built in the `hive-acc.properties` connector. The native engine accelerates queries of ORC or Parquet files. For more information about query acceleration based on JindoTable, see the related topic for your SmartData version. For example, if you use SmartData 3.6.X, see [Enable query acceleration based on a native engine](/help/en/emr/emr-on-ecs/user-guide/enable-query-acceleration-based-on-a-native-engine#task-2087082).

The following table describes the configuration properties of a Hive connector.

**Property**

**Description**

hive.config.resources

The HDFS configuration file. If you want to specify multiple configuration files, separate the file names with commas (,). Make sure that the configuration files exist on all the hosts where Presto is running.

**Note**

Configure this property only if you need to access HDFS.

hive.recursive-directories

Specifies whether data can be read from the subdirectories for a table or a partition. This property is similar to the `hive.mapred.supports.subdirectories` property of Hive.

hive.ignore-absent-partitions

Specifies whether to ignore a partition rather than report a query failure if the system file path specified for the partition does not exist. If a partition is ignored, some data in the table may be skipped.

Default value: false.

hive.storage-format

The default file format that is used when you create a table.

Default value: ORC.

hive.compression-codec

The file encoding method that is used when you write data to files. Valid values: NONE, SNAPPY, LZ4, ZSTD, and GZIP.

Default value: GZIP.

hive.force-local-scheduling

Specifies whether to forcefully schedule splits on the node on which Hadoop DataNode processes data of the splits. This improves the installation efficiency in scenarios where Presto is collocated with each DataNode.

Default value: false.

hive.respect-table-format

Specifies whether data in new partitions is written in the existing table format or the default Presto format. Valid values:

-   true: the existing table format. This is the default value.
    
-   false: the default Presto format.
    

hive.immutable-partitions

Specifies whether new data can be inserted into an existing partition.

If you set this property to true, the `hive.insert-existing-partitions-behavior` property cannot be set to `APPEND`.

Default value: false.

hive.insert-existing-partitions-behavior

The mode in which data is inserted into an existing partition. Valid values:

-   APPEND: Data is appended to an existing partition. This is the default value.
    
-   OVERWRITE: Data in the existing partition is overwritten.
    
-   ERROR: You are not allowed to modify data in the existing partition.
    

hive.create-empty-bucket-files

Specifies whether to create an empty file for a bucket that stores no data. Valid values:

-   true: An empty file is created.
    
-   false: No empty file is created. This is the default value.
    

hive.max-partitions-per-writers

The maximum number of partitions per writer.

Default value: 100.

hive.max-partitions-per-scan

The maximum number of partitions for a single table scan.

Default value: 100000.

hive.hdfs.authentication.type

The HDFS authentication mode. Valid values:

-   NONE: common mode. Kerberos authentication is disabled. This is the default value.
    
-   KERBEROS: security mode. Kerberos authentication is enabled.
    

hive.hdfs.impersonation.enabled

Specifies whether to enable HDFS user impersonation. Valid values:

-   true: Impersonation is enabled.
    
-   false: Impersonation is disabled. This is the default value.
    

hive.hdfs.trino.principal

The Kerberos principal that is used when Presto connects to HDFS.

hive.hdfs.trino.keytab

The path of the key file for the HDFS client.

hive.dfs.replication

The HDFS replication factor.

hive.security

The security property. Default value: legacy. For more information, see [Hive connector security configuration](https://trino.io/docs/358/connector/hive-security.html).

security.config-file

The path of the configuration file. This property is required if you set the `hive.security` property to file.

hive.non-managed-table-writes-enabled

Specifies whether to enable data writes to unmanaged (external) Hive tables.

Default value: false.

hive.non-managed-table-creates-enabled

Specifies whether to enable the creation of unmanaged (external) Hive tables.

Default value: true.

hive.collect-column-statistics-on-write

Specifies whether to enable the automatic collection of column-level statistics during data writes. For more information, see [Configuration properties](#section-rme-8uw-buw).

Default value: true.

hive.file-status-cache-tables

Specifies the tables that are cached.

For example, `fruit.apple,fruit.orange` indicates that only the apple and orange tables in the fruit schema are cached. `fruit.*,vegetable.*` indicates that all tables in the fruit schema and the vegetable schema are cached. `*` indicates that all tables in all schemas are cached.

hive.file-status-cache-size

The maximum number of cached file status entries.

Default value: 1000000.

hive.file-status-cache-expire-time

The validity period of a cached directory list.

Default value: 1. Unit: minutes.

hive.rcfile.time-zone

The time zone to which binary-encoded timestamp values are adjusted.

Default value: JVM default.

**Note**

If you use Hive 3.1 or a later version, you must set this property to UTC.

hive.timestamp-precision

The precision of a Hive column of the TIMESTAMP type. Valid values:

-   MILLISECONDS
    
-   MICROSECONDS
    
-   NANOSECONDS
    

Default value: MILLISECONDS.

**Note**

Values with higher precision are rounded.

hive.temporary-staging-directory-enabled

Specifies whether to use the temporary staging directory that is specified by the `hive.temporary-staging-directory-path` property to support data writes. Temporary staging directories cannot be used if you write data to unsorted tables in OSS, encrypted HDFS, or external systems. If you set this property to true, the temporary staging directory is used to store temporary files during the sort operation when you write data to sorted tables. If you set this property to false, the destination storage is used to store temporary files during the sort operation. This results in low efficiency of data writing to sorted tables in an object storage system.

Default value: true.

hive.temporary-staging-directory-path

The path of the temporary staging directory that is used for data writes.

Default value: `/tmp/presto-${USER}`.

**Note**

You can use the _${USER}_ placeholder to specify a unique location for each user.

hive.translate-hive-views

Specifies whether to enable translation for Hive views.

Default value: false.

hive.legacy-hive-view-translation

Specifies whether to use a traditional algorithm to translate Hive views. You can specify the catalog session property `legacy_hive_view_translation` for a specific catalog.

Default value: false.

hive.parallel-partitioned-bucketed-writes

Specifies whether to improve the parallelism of data writes to partitioned tables and bucketed tables.

Default value: true.

**Note**

If you set this property to false, the number of write threads cannot exceed the number of buckets.

### Configuration properties for ORC files

The following table describes the properties that are configured when you use a Hive connector to read data from or write data to ORC files.

**Property**

**Description**

hive.orc.time-zone

The default time zone for an ORC file that is of an early ORC version and does not declare a time zone.

Default value: JVM default.

hive.orc.use-columns-names

Specifies whether to access the columns of an ORC file by name.

By default, the columns in an ORC file are accessed based on their sequential positions in the Hive table definition. The equivalent catalog session property is `orc_use_column_names`.

Default value: false.

### Configuration properties for Parquet files

The following table describes the properties that are configured when you use a Hive connector to read data from or write data to Parquet files.

**Property**

**Description**

hive.parquet.time-zone

The time zone to which timestamp values are adjusted.

Default value: JVM default.

**Note**

If you use Hive 3.1 or a later version, you must set this property to UTC.

hive.parquet.use-columns-names

Specifies whether to access the columns of a Parquet file by name. Valid values:

-   true: The columns in a Parquet file are accessed by name. The column sequence that you define does not need to be consistent with the column sequence in the Parquet file.
    
-   false: The columns in a Parquet file are accessed based on their sequential positions in the Hive table definition.
    

The equivalent catalog session property is `parquet_use_column_names`.

### Configuration properties for a Hive metastore

The following table describes the configuration properties for a Hive metastore. You can use dedicated properties to configure a Hive metastore that is connected based on the Thrift protocol. For more information, see [Configuration properties for a Thrift-based Hive metastore](#section-rme-8uw-buw).

**Property**

**Description**

hive.metastore

The type of the Hive metastore that is used. Presto supports the default Thrift-based Hive metastore (thrift) and its derivatives.

Default value: thrift.

hive.metastore-cache-ttl

The validity period of the metastore data cached in the Hive metastore.

Default value: 0. Unit: seconds.

hive.metastore-cache-maximum-size

The maximum number of metastore data objects cached in the Hive metastore.

Default value: 10000.

hive.metastore-refresh-interval

The interval at which the cached metastore data is asynchronously refreshed after a data access operation. Only unexpired data is refreshed. The data refresh feature ensures that the latest data is obtained in subsequent accesses.

hive.metastore-refresh-max-threads

The maximum number of threads that are used to refresh the cached metastore data.

Default value: 10.

hive.metastore-timeout

The timeout period of a Hive metastore request.

Default value: 10. Unit: seconds.

### Configuration properties for a Thrift-based Hive metastore

The following table describes the configuration properties for a Thrift-based Hive metastore of a Hive connector.

**Property**

**Description**

hive.metastore.uri

The URI that is used to access the Hive metastore based on the Thrift protocol.

If multiple URIs are configured, the first URI is used by default. The Hive metastores that correspond to the other URIs are considered secondary metastores. This property is required. Example: `thrift://192.0.**.**:9083` or `thrift://192.0.**.**:9083,thrift://192.0.**.**:9083`.

hive.metastore.username

The username used by Presto to access the Hive metastore.

hive.metastore.authentication.type

The authentication mode of the Hive metastore. Valid values:

-   NONE: common mode. Kerberos authentication is disabled. This is the default value.
    
-   KERBEROS: security mode. Kerberos authentication is enabled.
    

hive.metastore.thrift.impersonation.enabled

Specifies whether to enable user impersonation for the Hive metastore.

hive.metastore.thrift.delegation-token.cache-ttl

The validity period of the delegation token cache for the Hive metastore.

Default value: 1. Unit: hours.

hive.metastore.thrift.delegation-token.cache-maximum-size

The maximum size of the delegation token cache.

Default value: 1000.

hive.metastore.thrift.client.ssl.enabled

Specifies whether to enable SSL when the Hive metastore is connected. Valid values:

-   true: SSL is enabled.
    
-   false: SSL is disabled. This is the default value.
    

hive.metastore.thrift.client.ssl.key

The path of the private key and client certificate in the key store.

hive.metastore.thrift.client.ssl.key-password

The password of the private key.

hive.metastore.thrift.client.ssl.trust-certificate

The path of the server certificate chain in the trust store.

**Note**

This property is required when SSL is enabled.

hive.metastore.thrift.client.ssl.trust-certificate-password

The password of the server certificate chain.

hive.metastore.service.principal

The Kerberos principal of the Hive metastore.

hive.metastore.client.principal

The Kerberos principal that is used when Presto connects to the Hive metastore.

hive.metastore.client.keytab

The path of the keytab file on the Hive metastore client.

### Configuration properties for performance tuning

The following table describes the configuration properties for performance tuning of a Hive connector.

**Important**

If you modify the default settings of the properties in the following table, the performance of the Hive connector may become unstable or deteriorate. Proceed with caution.

**Property**

**Description**

hive.max-outstanding-splits

The maximum number of cached splits for each table scan in a query before the scheduler tries to pause.

Default value: 1000.

hive.max-splits-per-second

The maximum number of splits generated per second in each table scan. This property can be used to reduce the load on the storage system. By default, no limit is specified, and Presto maximizes the data access parallelism.

hive.max-initial-splits

The maximum number of initial splits. For each table scan, the coordinator node first assigns the initial splits, each of which cannot exceed the value of max-initial-split-size in size. After the coordinator node assigns initial splits, the maximum number of splits that the coordinator code can continue to assign is determined by the max-split-size property.

Default value: 200.

hive.max-initial-split-size

The maximum size of each split that is assigned to a worker node if the number of splits that have been assigned is less than or equal to the value of the max-initial-splits property. If the split size is small, the data access parallelism is high. This accelerates the speed of small queries.

Default value: 32. Unit: MB.

hive.max-split-size

The maximum size of a single split that is assigned to a worker node. If the split size is small, the data access parallelism is high. This reduces the latency but increases the overheads and system loads.

Default value: 64. Unit: MB.

### Table statistics

You can use a Hive connector to collect and manage table statistics. Then, you can improve the query performance based on the statistics.

When you use a Hive connector to write data, the connector collects basic information, such as the number of files, the number of rows, the size of raw data, and the total data size. The connector also collects the column-level statistics described in the following table.

**Column type**

**Collectable information**

TINYINT

Number of null values, number of distinct values, and maximum or minimum values

SMALLINT

Number of null values, number of distinct values, and maximum or minimum values

INTEGER

Number of null values, number of distinct values, and maximum or minimum values

BIGINT

Number of null values, number of distinct values, and maximum or minimum values

DOUBLE

Number of null values, number of distinct values, and maximum or minimum values

REAL

Number of null values, number of distinct values, and maximum or minimum values

DECIMAL

Number of null values, number of distinct values, and maximum or minimum values

DATE

Number of null values, number of distinct values, and maximum or minimum values

TIMESTAMP

Number of null values, number of distinct values, and maximum or minimum values

VARCHAR

Number of null values and number of distinct values

CHAR

Number of null values and number of distinct values

VARBINARY

Number of null values

BOOLEAN

Number of null values and number of true or false values
