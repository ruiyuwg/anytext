The HBase Data Source supports both reading from and writing to HBase. This Topic describes the Data Synchronization Capabilities for HBase data sources in DataWorks.

## Supported versions

HBase plugins are divided into two types: HBase and HBase{xx}xsql. The HBase{xx}xsql plugins require both HBase and Phoenix.

1.  **HBase Plugins:**
    
    HBase Plugins support `HBase 0.94.x`, `HBase 1.1.x`, and `HBase 2.x` and work with both the codeless UI and the code editor. You can use the `hbaseVersion` parameter to specify the version.
    
    -   If you use `HBase 0.94.x`, set the hbaseVersion parameter to 094x for the reader and writer.
        
        ```
        "reader": {
                "hbaseVersion": "094x"
            }
        ```
        
        ```
        "writer": {
                "hbaseVersion": "094x"
            }
        ```
        
    -   If you use HBase 1.1.x or HBase 2.x, set the hbaseVersion parameter to 11x for the reader and writer.
        
        ```
        "reader": {
                "hbaseVersion": "11x"
            }
        ```
        
        ```
        "writer": {
                "hbaseVersion": "11x"
            }
        ```
        
        > The HBase 1.1.x Plugin is compatible with HBase 2.0.
        
2.  **HBase{xx}xsql Plugins**
    
    1.  The HBase20xsql Plugin supports `HBase 2.x` and `Phoenix 5.x`. **Only the code editor is supported.**
        
        The HBase11xsql Plugin supports `HBase 1.1.x` and `Phoenix 5.x`. **Only the code editor is supported.**
        
    2.  The HBase{xx}xsql Writer Plugin lets you import data in batches to SQL tables (Phoenix) in HBase. Phoenix encodes the rowkey. Writing data directly using the HBase API requires manual data conversion, which is a complex and error-prone process.
        
        **Note**
        
        The Plugin uses the Phoenix Java Database Connectivity (JDBC) driver to execute UPSERT statements and write data to the table in batches. Because the Plugin uses a high-level API, it also synchronously updates any associated index tables.
        

## Limitations

**HBase Reader**

**HBase20xsql Reader**

**HBase11xsql Writer**

-   HBase Reader cannot read data from Phoenix tables due to Phoenix's unique data handling.
    
-   HBase Reader supports only [serverless resource groups for Data Integration (recommended)](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) and [exclusive resource groups for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration#task-2353828) and does not support default resource groups or [custom resource groups](/help/en/dataworks/create-a-custom-resource-group-for-data-integration#concept-wfz-j45-q2b).
    

-   A table can only be sharded on a single primary key column.
    
-   For even sharding based on job concurrency, the shard column must be an integer or string.
    
-   Table, schema, and column names are case-sensitive and must match the casing used in the Phoenix table.
    
-   HBase20xsql Reader reads data only through Phoenix QueryServer. You must start the QueryServer service in Phoenix before using this plugin.
    

-   The plugin supports only [serverless resource groups for Data Integration (recommended)](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups).
    
-   The plugin does not support importing data with timestamps.
    
-   The plugin writes data only to tables created with Phoenix and does not support native HBase tables.
    
-   The reader's column order defines the output row structure, while the writer's column order defines the expected input sequence. For example:
    
    -   The column order in the reader is c1, c2, c3, and c4.
        
    -   The column order in the writer is x1, x2, x3, and x4.
        
    
    In this case, the value from the reader's column c1 is written to the writer's column x1. If the writer's column order is x1, x2, x4, and x3, the value from c3 is written to x4, and the value from c4 is written to x3.
    
-   The plugin supports importing data into indexed tables and synchronously updates all associated index tables.
    

## Features

### HBase Reader

The `normal` and `multiVersionFixedColumn` modes are supported. For configuration instructions, see [HBase Field Mapping Configuration Guide.](#76804b362cf0v)

-   `normal` mode: Reads an HBase table as a regular two-dimensional table (wide table) to retrieve the latest version of the data.
    
    ```
    hbase:007:0> scan 'student'
    ROW                                   COLUMN+CELL
    s001                                 column=basic:age, timestamp=2026-03-09T14:41:40.240, value=20
    s001                                 column=basic:name, timestamp=2026-03-09T14:41:40.214, value=Tom
    s001                                 column=score:english, timestamp=2026-03-09T14:41:40.333, value=90
    s001                                 column=score:math, timestamp=2026-03-09T14:41:40.277, value=85
    1 row(s) in 0.0580 seconds 
    ```
    
    The following table shows an example of the read data.
    
    **Rowkey**
    
    **basic:age**
    
    **basic:name**
    
    **score:english**
    
    **score:math**
    
    s001
    
    20
    
    Tom
    
    90
    
    85
    
-   The `multiVersionFixedColumn` mode reads an HBase table as a narrow table. Each returned record consists of four columns: `rowKey`, `family:qualifier`, `timestamp`, and `value`. You must explicitly specify the columns to read. The value of each cell is returned as a separate record. If a cell has multiple versions, multiple records are returned.
    
    ```
    hbase:007:0> scan 'student',{VERSIONS=>5}
    ROW                                   COLUMN+CELL
    s001                                 column=basic:age, timestamp=2026-03-09T14:41:40.240, value=20
    s001                                 column=basic:age, timestamp=2026-03-09T14:30:00.100, value=19
    s001                                 column=basic:name, timestamp=2026-03-09T14:41:40.214, value=Tom
    s001                                 column=score:english, timestamp=2026-03-09T14:41:40.333, value=90
    s001                                 column=score:math, timestamp=2026-03-09T14:41:40.277, value=85
    1 row(s) in 0.0260 seconds }
    ```
    
    The following table shows an example of the resulting four-column data.
    
    **Rowkey**
    
    **column:qualifier**
    
    **Timestamp**
    
    **Value**
    
    s001
    
    basic:age
    
    2026-03-09T14:41:40.240
    
    20
    
    s001
    
    basic:age
    
    2026-03-09T14:30:00.100
    
    19
    
    s001
    
    basic:name
    
    2026-03-09T14:41:40.214
    
    Tom
    
    s001
    
    score:english
    
    2026-03-09T14:41:40.333
    
    90
    
    s001
    
    score:math
    
    2026-03-09T14:41:40.277
    
    85
    

### HBase Writer

-   `rowkey` generation rule: Currently, HBase Writer supports concatenating multiple fields from the source to generate the HBase table's `rowkey`.
    
-   The following timestamp (`version`) options are available for writing data to HBase:
    
    -   Use the current time as the version.
        
    -   Use a value from a source column as the version.
        
    -   Specify a fixed time as the version.
        

## Supported data types

### Batch read

-   The following table lists the data type mappings for HBase Reader.
    
    **Category**
    
    **Data integration column type**
    
    **Database type**
    
    Integer
    
    long
    
    short, int, and long
    
    Floating-point
    
    double
    
    float and double
    
    String
    
    string
    
    binary\_string and string
    
    Date and Time
    
    date
    
    date
    
    Byte
    
    bytes
    
    bytes
    
    Boolean
    
    boolean
    
    boolean
    
-   HBase20xsql Reader supports most, but not all, Phoenix data types. Verify that your data types are supported.
    
-   The following table lists the data type mappings for HBase20xsql Reader.
    
    **DataX internal type**
    
    **Phoenix data type**
    
    long
    
    INTEGER, TINYINT, SMALLINT, BIGINT
    
    double
    
    FLOAT, DECIMAL, DOUBLE
    
    string
    
    CHAR, VARCHAR
    
    date
    
    DATE, TIME, TIMESTAMP
    
    bytes
    
    BINARY, VARBINARY
    
    boolean
    
    BOOLEAN
    

### Batch write

The following table lists the data type mappings for HBase Writer.

**Note**

-   The column configuration must match the column types in the HBase table.
    
-   Only the data types listed in the following table are supported.
    

**Category**

**Database type**

Integer

INT, LONG, and SHORT

Floating-point

FLOAT and DOUBLE

Boolean

BOOLEAN

String

STRING

## **Precautions**

If you encounter the `"tried to access method com.google.common.base.Stopwatch"` error message when testing connectivity, add the `hbaseVersion` parameter to the data source configuration.

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

## Data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Single-table batch synchronization

-   For instructions, see [Use the codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Use the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
    When you use the Codeless UI, Field Mapping is not displayed by default because HBase has a flexible schema. You must manually configure the mapping.
    
    When using HBase as a source, you must first select an **Output Mode**: **Wide table (normal mode) or Narrow table (multiVersionFixedColumn mode).**
    
    The field mapping configuration differs between the two modes:
    
    -   **Wide table (normal mode)**: This is the default mode. It reads an HBase table as a standard two-dimensional table and retrieves the latest version of the data. When HBase is the source, you must configure the mapping between **Source Fields** and **Target Fields**. As shown in the figure, there is a one-to-one mapping between source and target fields. Because the source table has no fixed fields, fields are mapped by row by default. To change this mapping, you must manually edit the field order.
        
        ## New data development
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9053733771/p1058163.png)
        
        ## Old data development
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9053733771/p1058219.png)
        
        Results in the target table:
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9053733771/p1058233.png)
        
    -   **Narrow table (multiVersionFixedColumn mode)**: Each output record consists of four columns (rowKey, family:qualifier, timestamp, and value), which allows you to read multiple data versions. Configure the **Source Field** with the format `ColumnFamily:Qualifier` (for example, `basic:age`). The target is a fixed table with four columns (row\_key, cf, timestamp\_col, and value). No field mapping is required for this mode.
        
        ## New data development
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9053733771/p1058226.png)
        
        ## Old data development
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9053733771/p1058220.png)
        
        Results in the target table:
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9053733771/p1058232.png)
        
    -   When HBase is used as the data destination (only normal mode is supported), you need to configure the **Target Fields** and the **rowkey** separately. The **rowkey** field can be a concatenation of multiple source fields.
        
-   For a complete list of parameters and a sample script for the Code Editor, see [Appendix: Script Demo and Parameter Description](#section-zuf-jpd-uvs).
    

## FAQ

-   Q: What is a recommended Concurrency setting? Does increasing concurrency help with slow import speeds?
    
    A: The default heap size for a data import process in the Java Virtual Machine (JVM) is 2 GB. Concurrency is implemented using multi-threading. Using too many threads may not increase the import speed and can degrade performance due to frequent garbage collection (GC). We recommend a Concurrency setting of 5 to 10.
    
-   Q: `batchSize`—what is a suitable value?
    
    A: The default value is 256, but the optimal `batchSize` should be calculated based on the size of each row. A single operation typically processes 2 MB to 4 MB of data. You can calculate the batchSize by dividing this amount by the row size.
    
-   Q: When I use the `multiVersionFixedColumn` mode to read data from HBase, I encounter the `java.lang.StringIndexOutOfBoundsException: String index out of range: -1` error. How can I resolve this issue?
    
    A: This error usually occurs because the `name` field in the column configuration does not use the `Column Family:Column Qualifier` (`columnFamily:qualifier`) format. For example, you specified only the column qualifier `age` instead of `basic:age`. Make sure that the `name` of every column except `rowkey` includes a column family prefix in the `columnFamily:qualifier` format.
    

## Appendix: Script examples and parameters

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Use the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### HBase Reader script example

```
{
    "type":"job",
    "version":"2.0",// The version number.
    "steps":[
        {
            "stepType":"hbase",// The plugin name.
            "parameter":{
                "mode":"normal",// The mode for reading data from HBase. Valid values: normal and multiVersionFixedColumn.
                "scanCacheSize":"256",// The number of rows that the HBase client reads from the server in each remote procedure call (RPC).
                "scanBatchSize":"100",// The number of columns that the HBase client reads from the server in each RPC. 
                "hbaseVersion":"094x/11x",// The HBase version.
                "column":[// The columns to read.
                    {
                        "name":"rowkey",// The column name.
                        "type":"string"// The data type.
                    },
                    {
                        "name":"basic:age",
                        "type":"string"
                    },
                    {
                        "name":"basic:name",
                        "type":"string"
                    },
                    {
                        "name":"score:english",
                        "type":"string"
                    },
                    {
                        "name":"score:math",
                        "type":"string"
                    }
                ],
                "range":{// The rowkey range for the HBase Reader.
                    "endRowkey":"",// The end rowkey.
                    "isBinaryRowkey":true,// Specifies how to convert the configured startRowkey and endRowkey to byte arrays. Default value: false.
                    "startRowkey":""// The start rowkey.
                },
                "maxVersion":"",// The number of versions to read in multiVersionFixedColumn mode.
                "encoding":"UTF-8",// The encoding format.
                "table":"student",// The table name.
                "hbaseConfig":{// Connection configuration for the HBase cluster, in JSON format.
                    "hbase.zookeeper.quorum":"hostname",
                    "hbase.rootdir":"hdfs://ip:port/database",
                    "hbase.cluster.distributed":"true"
                }
            },
            "name":"Reader",
            "category":"reader"
        },
        {
            "stepType":"odps",// The name of the destination plugin. This example uses MaxCompute, but you can replace it with another writer plugin.
            "parameter":{
                "partition":"",// The partition information of the destination table. You do not need to configure this parameter for non-partitioned tables.
                "truncate":true,// Specifies whether to clear the existing data in the destination table or partition before the write operation. A value of true indicates that the data is cleared.
                "datasource":"odps_datasource",// The name of the MaxCompute data source.
                "column":[// The list of destination columns.
                    "rowkey",
                    "basic_age",
                    "basic_name",
                    "score_english",
                    "score_math"
                ],
                "table":"student_target"// The name of the destination MaxCompute table.
            },
            "name":"Writer",
            "category":"writer"
        }
    ],
    "setting":{
        "errorLimit":{
            "record":"0"// The maximum number of error records allowed.
        },
        "speed":{
            "throttle":true,// Specifies whether to enable throttling. If you set this to true, data is transferred at the rate specified by `mbps`. If you set this to false, the `mbps` parameter is ignored and no rate limit is applied.
            "concurrent":1,// The maximum number of concurrent threads.
            "mbps":"12"// The maximum transfer rate. Unit: MB/s.
        }
    },
    "order":{
        "hops":[
            {
                "from":"Reader",
                "to":"Writer"
            }
        ]
    }
}
```

### HBase Reader script example (multiVersionFixedColumn mode)

The following example shows a complete script configuration that reads data from HBase by using the `multiVersionFixedColumn` mode and writes the data to MaxCompute. In this mode, the value of each cell in HBase is converted into a separate record. Each record consists of four columns: `rowkey`, `family:qualifier`, `timestamp`, and `value`.

```
{
    "type":"job",
    "version":"2.0",
    "steps":[
        {
            "stepType":"hbase",// The plugin name.
            "parameter":{
                "mode":"multiVersionFixedColumn",// The mode for reading data from HBase. This example uses multiVersionFixedColumn mode.
                "scanCacheSize":"256",// The number of rows that the HBase client reads from the server in each RPC.
                "scanBatchSize":"100",// The number of columns that the HBase client reads from the server in each RPC.
                "hbaseVersion":"20x",// The HBase version.
                "datasource":"hbase_datasource",// The name of the HBase data source.
                "column":[// The columns to read. The first column must be rowkey. The name for all other columns must be in the "ColumnFamily:Qualifier" format.
                    {
                        "name":"rowkey",// The rowkey column.
                        "type":"string"
                    },
                    {
                        "name":"basic:age",// The age column in the basic column family.
                        "type":"string"
                    },
                    {
                        "name":"basic:name",// The name column in the basic column family.
                        "type":"string"
                    },
                    {
                        "name":"score:english",// The english column in the score column family.
                        "type":"string"
                    },
                    {
                        "name":"score:math",// The math column in the score column family.
                        "type":"string"
                    }
                ],
                "range":{
                    "isBinaryRowkey":false
                },
                "maxVersion":"-1",// Reads all versions of the data. This parameter is required in multiVersionFixedColumn mode. A value of -1 indicates that all versions are read.
                "encoding":"UTF-8",// The encoding format.
                "table":"student"// The name of the HBase table.
            },
            "name":"Reader",
            "category":"reader"
        },
        {
            "stepType":"odps",// The name of the destination plugin. This example uses MaxCompute.
            "parameter":{
                "partition":"",// The partition information of the destination table. You do not need to configure this parameter for non-partitioned tables.
                "truncate":true,// Specifies whether to clear the existing data in the destination table or partition before the write operation. A value of true indicates that the data is cleared.
                "datasource":"odps_datasource",// The name of the MaxCompute data source.
                "column":[// The four destination columns correspond to the rowkey, family:qualifier, timestamp, and value.
                    "rowkey",
                    "cf",
                    "timestamp_col",
                    "value"
                ],
                "table":"hbase_multiversion_target"// The name of the destination MaxCompute table.
            },
            "name":"Writer",
            "category":"writer"
        }
    ],
    "setting":{
        "errorLimit":{
            "record":"0"// The maximum number of error records allowed.
        },
        "speed":{
            "throttle":false,// Disables throttling.
            "concurrent":2// The maximum number of concurrent threads.
        }
    },
    "order":{
        "hops":[
            {
                "from":"Reader",
                "to":"Writer"
            }
        ]
    }
}
```

**Note**

The target MaxCompute table must be created in advance. The following is an example of a table creation statement:`CREATE TABLE IF NOT EXISTS hbase_multiversion_target (row_key STRING, cf STRING, timestamp_col STRING, value STRING);`

### HBase Reader parameters

**Parameter**

**Description**

**Required**

**Default**

**haveKerberos**

If haveKerberos is set to true, the HBase cluster requires Kerberos Authentication.

**Note**

-   If you set this parameter to `true`, you must also configure the following Kerberos Authentication parameters:
    
    -   kerberosKeytabFilePath
        
    -   kerberosPrincipal
        
    -   hbaseMasterKerberosPrincipal
        
    -   hbaseRegionserverKerberosPrincipal
        
    -   hbaseRpcProtection
        
-   If Kerberos Authentication is not enabled for the HBase cluster, you do not need to configure these parameters.
    

No

false

**hbaseConfig**

The configuration information required to connect to the HBase cluster. This information must be in JSON format. The required configuration is hbase.zookeeper.quorum, which specifies the ZooKeeper connection address for HBase. You can also add other HBase client configurations, such as the scan cache and batch size, to optimize interaction with the server.

**Note**

If you use an ApsaraDB for HBase database, you must connect using an Internal Network Endpoint.

Yes

None

**mode**

The read mode for HBase supports normal mode and multiVersionFixedColumn mode.

Yes

None

**table**

The name of the HBase table from which to read data. The name is case-sensitive.

Yes

None

**encoding**

The character encoding, such as UTF-8 or GBK, for converting the binary HBase byte\[\] data to a String.

No

utf-8

**column**

The HBase field to read. This field is required in normal mode and multiVersionFixedColumn mode.

-   In `normal` mode:
    
    `name` specifies the HBase column to read. Except for `**rowkey**`, it must be in the `**Column Family:Column Qualifier**` format. `type` specifies the type of the source data, and `format` specifies the format for date types. `value` specifies a constant. If you specify this parameter, data is not read from HBase. Instead, the corresponding column is automatically generated based on the specified value. The configuration format is as follows:
    
    ```
    "column": 
    [
    {
      "name": "rowkey",
      "type": "string"
    },
    {
      "value": "test",
      "type": "string"
    }
    ]
    ```
    
    In normal mode, for the Column information that you specify, the type parameter is required, and you must specify either name or value.
    
-   multiVersionFixedColumn mode
    
    The `name` parameter specifies the HBase column to read, which must be in the `**Column Family:Column Qualifier**` format, except for `**rowkey**`. The `type` parameter specifies the type of the source data, and `format` specifies the format for date types. Constant columns are not supported in multiVersionFixedColumn mode. The configuration format is as follows:
    
    ```
    "column": 
    [
    {
      "name": "rowkey",
      "type": "string"
    },
    {
      "name": "info:age",
      "type": "string"
    }
    ]
    ```
    

Yes

None

**maxVersion**

Specifies the number of versions to read in `multiVersionFixedColumn` mode. The value must be -1 or an integer greater than 1. A value of -1 indicates that all versions are read.

Required in `multiVersionFixedColumn` mode.

None

**range**

The rowkey range from which the HBase Reader reads data.

-   startRowkey: Specifies the start rowkey.
    
-   endRowkey: Specifies the end rowkey.
    
-   isBinaryRowkey: Specifies how `startRowkey` and `endRowkey` are converted to a `byte[]` array. The default value is false. If `true`, the `Bytes.toBytesBinary(rowkey)` method is called to perform the conversion. If `false`, the `Bytes.toBytes(rowkey)` method is called. The configuration format is as follows:
    
    ```
    "range": {
    "startRowkey": "aaa",
    "endRowkey": "ccc",
    "isBinaryRowkey":false
    }
    ```
    

No

None

**scanCacheSize**

The number of rows the HBase client fetches from the server per remote procedure call (RPC).

No

256

**scanBatchSize**

The number of columns the HBase client fetches from the server per remote procedure call (RPC). If you set this parameter to -1, all columns are returned.

**Note**

The value for scanBatchSize should be greater than the actual number of columns to prevent data quality risks.

No

100

### HBase Writer script example

```
{
    "type":"job",
    "version":"2.0",// The version number.
    "steps":[
        {
            "stepType":"stream",
            "parameter":{},
            "name":"Reader",
            "category":"reader"
        },
        {
            "stepType":"hbase",// The plugin name.
            "parameter":{
                "mode":"normal",// The mode for writing data to HBase.
                "walFlag":"false",// If set to false, the Write-Ahead Log (WAL) feature is disabled.
                "hbaseVersion":"094x",// The HBase version.
                "rowkeyColumn":[// Defines the source columns for the HBase rowkey.
                    {
                        "index":"0",// The index of the source column.
                        "type":"string"// The data type.
                    },
                    {
                        "index":"-1",// Use -1 for a constant value.
                        "type":"string",
                        "value":"_"
                    }
                ],
                "nullMode":"skip",// Specifies how to handle null values.
                "column":[// The HBase columns to which to write data.
                    {
                        "name":"columnFamilyName1:columnName1",// The column name.
                        "index":"0",// The index of the source column.
                        "type":"string"// The data type.
                    },
                    {
                        "name":"columnFamilyName2:columnName2",
                        "index":"1",
                        "type":"string"
                    },
                    {
                        "name":"columnFamilyName3:columnName3",
                        "index":"2",
                        "type":"string"
                    }
                ],
                "encoding":"UTF-8",// The encoding format.
                "table":"YOUR_TABLE_NAME",// The table name.
                "hbaseConfig":{// Connection configuration for the HBase cluster, in JSON format.
                    "hbase.zookeeper.quorum":"hostname",
                    "hbase.rootdir":"hdfs://ip:port/database",
                    "hbase.cluster.distributed":"true"
                }
            },
            "name":"Writer",
            "category":"writer"
        }
    ],
    "setting":{
        "errorLimit":{
            "record":"0"// The maximum number of error records allowed.
        },
        "speed":{
            "throttle":true,// Specifies whether to enable throttling. If you set this to true, data is transferred at the rate specified by `mbps`. If you set this to false, the `mbps` parameter is ignored and no rate limit is applied.
            "concurrent":1, // The maximum number of concurrent threads.
            "mbps":"12"// The maximum transfer rate. Unit: MB/s.
        }
    },
    "order":{
        "hops":[
            {
                "from":"Reader",
                "to":"Writer"
            }
        ]
    }
}
```

### HBase Writer parameters

**Parameter**

**Description**

**Required**

**Default**

**haveKerberos**

A value of true for haveKerberos indicates that the HBase cluster requires Kerberos Authentication.

**Note**

-   If you set this parameter to true, you must also configure the following Kerberos Authentication parameters:
    
    -   kerberosKeytabFilePath
        
    -   kerberosPrincipal
        
    -   hbaseMasterKerberosPrincipal
        
    -   hbaseRegionserverKerberosPrincipal
        
    -   hbaseRpcProtection
        
-   If Kerberos Authentication is not enabled for the HBase cluster, you do not need to configure these parameters.
    

No

false

**hbaseConfig**

The configuration information required to connect to the HBase cluster. This information must be in JSON format. The required parameter is hbase.zookeeper.quorum, which specifies the ZK connection address for HBase. You can also add other HBase client configurations, such as scan cache and batch settings, to optimize interaction with the server.

**Note**

If you use an ApsaraDB for HBase database, you must connect using an Internal Network Endpoint.

Yes

None

**mode**

The write mode for HBase is currently limited to the normal mode. Support for a dynamic column mode is planned for the future.

Yes

None

**table**

The name of the destination HBase table. The name is case-sensitive.

Yes

None

**encoding**

The encoding method, UTF-8 or GBK, used to convert a STRING to an HBase byte\[\].

No

utf-8

**column**

The HBase columns to which to write data:

-   index: Specifies the index of the corresponding column in the Reader. The index starts from 0.
    
-   name: Specifies the column in an HBase table. The format must be Column Family:Column Qualifier.
    
-   type: Specifies the data type of the data to be written, which is used for the conversion of HBase byte arrays.
    

Yes

None

**rowkeyColumn**

Defines the source columns used to construct the HBase rowkey.

-   index: Specifies the 0-based index of the corresponding column in the Reader. For a constant, the index is -1.
    
-   type: Specifies the data type of the data to be written, which is used to convert the HBase byte\[\].
    
-   value: A constant value, often used as a separator for multiple fields. HBase Writer concatenates all columns specified in `rowkeyColumn` in the configured order to generate the rowkey for data written to HBase. The rowkey cannot be composed entirely of constants.
    

The following code shows the format.

```
"rowkeyColumn": [
          {
            "index":0,
            "type":"string"
          },
          {
            "index":-1,
            "type":"string",
            "value":"_"
          }
      ]
```

Yes

None

**versionColumn**

The timestamp for writing data to HBase. You can use the current time, a specified time column, or a specified time. If you do not configure this parameter, the current time is used.

-   index: Specifies the 0-based index of the corresponding column in the Reader. The value must be convertible to the LONG data type.
    
-   type: If the value is of the Date type, the system attempts to parse it using yyyy-MM-dd HH:mm:ss and yyyy-MM-dd HH:mm:ss SSS. If a specific time is specified, the index is -1.
    
-   `value`: The value of the specified time, of the LONG type.
    

The following code shows the format.

-   ```
    "versionColumn":{
    "index":1
    }
    ```
    
-   ```
    "versionColumn":{
    "index":-1,
    "value":123456789
    }
    ```
    

No

None

**nullMode**

Specifies how to handle null values from the source when writing to HBase:

-   skip: Does not write the column to HBase.
    
-   empty: Writes HConstants.EMPTY\_BYTE\_ARRAY, that is, new byte \[0\].
    

No

skip

**walFlag**

The Write-Ahead Log (WAL) ensures data durability. Before writing to the MemStore, an HBase client first writes operations like Put and Delete to a WAL. A client is notified of a successful write only after the WAL entry is complete.

If the WAL write fails, the operation fails. To improve write performance at the cost of lower durability guarantees, you can disable the WAL by setting this parameter to `false`.

No

false

**writeBufferSize**

The size of the write buffer for the HBase client, in bytes. This parameter is used with the `autoflush` setting.

The `autoflush` setting is disabled by default.

-   `true`: The HBase client performs an update for each `put` operation during a write.
    
-   `false`: The HBase client sends a write request to the HBase server only when the client-side write buffer is full.
    

No

8M

**fileSystemUsername**

If you encounter a Ranger permission issue during a synchronization task, you can convert the task from wizard mode to Script Mode. Then, configure the **fileSystemUsername** parameter with a user that has the required permissions. DataWorks will then access HBase as the specified user.

No

None

### HBase20xsql Reader script example

```
{
    "type":"job",
    "version":"2.0",// The version number.
    "steps":[
        {
            "stepType":"hbase20xsql",// The plugin name.
            "parameter":{
                "queryServerAddress": "http://127.0.0.1:8765",  // The endpoint of the Phoenix QueryServer.
                "serialization": "PROTOBUF",  // The serialization format of the QueryServer.
                "table": "TEST",    // The name of the table to read.
                "column": ["ID", "NAME"],   // The names of the columns to read.
                "splitKey": "ID"    // The split key, which must be the primary key of the table.
            },
            "name":"Reader",
            "category":"reader"
        },
        {
            "stepType":"stream",
            "parameter":{},
            "name":"Writer",
            "category":"writer"
        }
    ],
    "setting":{
        "errorLimit":{
            "record":"0"// The maximum number of error records allowed.
        },
        "speed":{
            "throttle":true,// Specifies whether to enable throttling. If you set this to true, data is transferred at the rate specified by `mbps`. If you set this to false, the `mbps` parameter is ignored and no rate limit is applied.
            "concurrent":1,// The maximum number of concurrent threads.
            "mbps":"12"// The maximum transfer rate. Unit: MB/s.
        }
    },
    "order":{
        "hops":[
            {
                "from":"Reader",
                "to":"Writer"
            }
        ]
    }
}
```

### HBase20xsql Reader parameters

**Parameter**

**Description**

**Required**

**Default**

queryServerAddress

The HBase20xsql Reader plugin connects to a Phoenix QueryServer by using the Phoenix thin client. Therefore, you must enter the address of the QueryServer. If you use HBase Enhanced Edition (Lindorm) and need to pass the `user` and `password` parameters, you can append these optional properties to the queryServerAddress value. The format is: `http://127.0.0.1:8765;user=root;password=root`.

Yes

None

serialization

The serialization protocol used by the QueryServer.

No

PROTOBUF

table

The name of the table to read. The name is case-sensitive.

Yes

None

schema

The schema in which the table resides.

No

None

column

The set of column names in the configured table that you want to synchronize. Use a JSON array to specify the column information. An empty value indicates that all columns are read.

No

All columns

splitKey

A table is sharded when it is read. If you specify the splitKey parameter, the system uses the field that corresponds to splitKey to perform data sharding. This allows Data Synchronization to start concurrent tasks and improves synchronization performance. You can choose from two different sharding methods. If the splitPoint parameter is empty, the system defaults to automatic sharding based on Method 1.

-   Method 1: Find the maximum and minimum values based on the splitKey, and then evenly shard the data based on the specified concurrent value.
    
    **Note**
    
    Only integer and string type columns are supported as split keys.
    
-   Method 2: You can shard the data based on the configured splitPoint. Then, synchronize the data according to the specified concurrent.
    

Yes

None

splitPoints

Because sharding based on the maximum and minimum values of a sharding column cannot prevent data hot spots, we recommend that you set shard points based on the startkey and endkey of a Region to ensure that each query maps to a single Region.

No

None

where

The filter condition for a table query. HBase20xsql Reader constructs an SQL query based on the specified column, table, and where conditions to extract data.

No

None

querySql

In some business scenarios, the where parameter is insufficient to describe the filtering conditions. You can use this parameter to define a custom SQL query. If you configure this parameter, HBase20xsql Reader uses the specified query to filter data and ignores the column, table, where, and splitKey parameters. The queryserverAddress parameter is the only exception and must be set.

No

None

### HBase11xsql Writer script example

```
{
  "type": "job",
  "version": "1.0",
  "configuration": {
    "setting": {
      "errorLimit": {
        "record": "0" // The maximum number of error records allowed.
      },
      "speed": {
            "throttle":true, // Specifies whether to enable throttling.
            "concurrent":1, // The maximum number of concurrent threads.
            "mbps":"1" // The maximum transfer rate. Unit: MB/s.
      }
    },
    "reader": {
      "plugin": "odps",
      "parameter": {
        "datasource": "your_odps_datasource_name",
        "table": "your_source_table_name",
        "column": [],
        "partition": ""
      }
    },
    "writer": {
        "plugin": "hbase11xsql",
        "parameter": {
          "table": "PHOENIX_TABLE_NAME", // The name of the destination Phoenix table.
          "hbaseConfig": {
            "hbase.zookeeper.quorum": "zookeeper-ip1,zookeeper-ip2", // The ZooKeeper endpoint of the destination HBase cluster.
            "zookeeper.znode.parent": "/hbase" // The znode of the destination HBase cluster.
          },
          "column": [
            "ID",
            "NAME" // The list of destination column names.
          ],
          "batchSize": 256, // The maximum number of rows for a batch write.
          "nullMode": "skip" // Specifies how to handle null values.
        }
    }
  }
}
```

### HBase11xsql Writer parameters

**Parameter**

**Description**

**Required**

**Default**

plugin

The plugin name. The value must be `hbase11xsql`.

Yes

None

table

The name of the table to which to import data. The name is case-sensitive. Phoenix table names are typically in uppercase.

Yes

None

column

The column names. The names are case-sensitive. Phoenix column names are typically in uppercase.

**Note**

-   The column order must match the column order from the reader.
    
-   You do not need to specify the data type, as column metadata is automatically retrieved from Phoenix.
    

Yes

None

hbaseConfig

The configuration for the destination HBase cluster. The `hbase.zookeeper.quorum` parameter is required.

**Note**

-   Use commas (,) to separate multiple IP addresses in the ZooKeeper quorum.
    
-   The `zookeeper.znode.parent` parameter is optional. The default value is `/hbase`.
    

Yes

None

batchSize

The maximum number of rows for a batch write.

No

256

nullMode

Specifies how to handle null column values from the source:

-   skip: Does not insert the column. If the column already exists, it is deleted.
    
-   empty: Inserts an empty value. The value is 0 for numeric types and an empty string for varchar types.
    

No

skip
