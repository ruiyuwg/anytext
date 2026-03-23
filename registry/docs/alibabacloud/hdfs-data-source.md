Hadoop Distributed File System (HDFS) is a distributed file system that provides a bidirectional channel for reading from and writing to HDFS. This topic describes the data synchronization capabilities that DataWorks provides for HDFS.

## Supported versions

Apsara File Storage for HDFS is not supported.

## Limits

### Offline read

-   Keep the following points in mind when you use HDFS Reader:
    
    -   Because the network link from the default resource group to HDFS is complex, we recommend that you use a [serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) or an [exclusive resource group for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration#task-2353828) to perform data synchronization tasks. Ensure that your resource group has network access to the HDFS namenode and datanode.
        
    -   By default, HDFS uses a network whitelist for data security. Therefore, we recommend that you use a [serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) or an [exclusive resource group for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration#task-2353828) to perform data synchronization tasks with HDFS.
        
    -   When you configure an HDFS sync job in the code editor, the job does not require a successful network connectivity test for the HDFS data source. You can temporarily ignore any resulting errors.
        
    -   The Data Integration sync process runs under the admin account. Ensure that the admin account of the operating system has read and write permissions on the corresponding HDFS files. If the account does not have the required permissions, switch to the code editor and add `"hdfsUsername": "user_with_permissions"`.
        
-   HDFS Reader supports the following features:
    
    -   Supports files in TextFile, ORCFile, RCFile, SequenceFile, CSV, and Parquet formats. The file content must represent a logical two-dimensional table.
        
    -   Supports reading multiple data types that are represented as strings, column pruning, and column constants.
        
    -   Supports recursive reading and the regular expression wildcard characters `*` and `?`.
        
    -   Supports ORCFile data compression. The SNAPPY and ZLIB compression algorithms are supported.
        
    -   Supports SequenceFile data compression. The lZO compression algorithm is supported.
        
    -   Supports concurrent reading of multiple files.
        
    -   For the CSV type, supported compression formats include gzip, bz2, zip, lzo, lzo\_deflate, and snappy.
        
    -   The current plugin uses Hive 1.1.1 and Hadoop 2.7.1 (an Apache version adapted for JDK 1.6). The plugin has been successfully tested for writing in staging environments that use Hadoop 2.5.0, Hadoop 2.6.0, or Hive 1.2.0.
        
    
    **Important**
    
    HDFS Reader does not support multi-threaded concurrent reading of a single file. This is due to its internal chunking algorithm.
    

### Offline write

Keep the following points in mind when you use HDFS Writer:

-   HDFS Writer supports only the TextFile, ORCFile, and ParquetFile formats. The file content must represent a logical two-dimensional table.
    
-   Because HDFS is a file system and does not have schemas, writing to a subset of columns is not supported.
    
-   The DECIMAL, BINARY, ARRAY, MAP, STRUCT, and UNION Hive data types are not supported.
    
-   For Hive partitioned tables, only writing to a single partition at a time is supported.
    
-   For TextFile, ensure that the separator used to write to the HDFS file is the same as the separator used to create the table in Hive. This ensures that the data written to HDFS can be associated with the Hive table fields.
    
-   The current plugin uses Hive 1.1.1 and Hadoop 2.7.1 (an Apache version adapted for JDK 1.7). The plugin has been successfully tested for writing in staging environments that use Hadoop 2.5.0, Hadoop 2.6.0, or Hive 1.2.0.
    
-   HDFS Writer can be used only with an [exclusive resource group for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration#task-2353828).
    

## Implementation

HDFS Writer follows this procedure:

1.  Creates a temporary folder in the HDFS file system based on the specified path.
    
    Create the path\_random rule.
    
2.  Writes the files that are read to this temporary folder.
    
3.  After all files are written, it moves the files from the temporary folder to the specified destination folder. This process avoids file name conflicts.
    
4.  Deletes the temporary folder. If a network interruption or another issue interrupts the connection to HDFS, you must manually delete the temporary folder and any files that were written.
    

**Note**

Data synchronization requires an admin account that has read and write permissions on the relevant files.

## Supported field types

### Offline read

The metadata for file tables is stored in a metadatabase, such as MySQL, that is maintained by Hive. HDFS Reader cannot access and query Hive's metadatabase. Therefore, you must specify the data types during type conversion.

By default, the data types in RCFile, ParquetFile, ORCFile, TextFile, and SequenceFile are converted to internal Data Integration types as shown in the following table.

**Type category**

**Data Integration column type**

**Hive data type**

Integer

long

tinyint, smallint, int, and bigint

Floating-point

double

float and double

String

string

string, char, varchar, struct, map, array, union, and binary

Date/Time

date

date and timestamp

Boolean

boolean

boolean

**Note**

-   long: Integer data in an HDFS file, such as 123456789.
    
-   double: Floating-point data in an HDFS file, such as 3.1415.
    
-   bool: Boolean data in an HDFS file, such as true or false. The value is case-insensitive.
    
-   date: Time-type data in an HDFS file, such as 2014-12-31 00:00:00.
    

The TIMESTAMP data type that is supported by Hive is precise to the nanosecond. Therefore, TIMESTAMP data stored in TextFile and ORCFile may appear as `2015-08-21 22:40:47.397898389`. If you convert the data to the DATE type in Data Integration, the nanosecond part is lost. To preserve the nanosecond part, convert the data to the string type in Data Integration.

### Offline write

HDFS Writer lets you write files in TextFile, ORCFile, and ParquetFile formats to a specified path in the HDFS file system. The file content can be associated with tables in Hive. HDFS Writer supports most Hive types. Verify your data types.

The following table lists the Hive data type conversions for HDFS Writer.

**Note**

The column configuration must match the corresponding column types in the Hive table.

**Type category**

**Database data type**

Integer

TINYINT, SMALLINT, INT, and BIGINT

Floating-point

FLOAT and DOUBLE

String

CHAR, VARCHAR, and STRING

Boolean

BOOLEAN

Date/Time

DATE and TIMESTAMP

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

## Develop a data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Configure a single-table offline sync task

-   For more information, see [Configure a task in the codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For all parameters and a script example for configuring a task in the code editor, see [Appendix: Script demo and parameter descriptions](#section-tll-waa-o92) in this topic.
    

## Appendix: Script demo and parameter descriptions

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader script demo

```
{
    "type": "job",
    "version": "2.0",
    "steps": [
        {
            "stepType": "hdfs",// Plugin name
            "parameter": {
                "path": "",// The path of the file to read
                "datasource": "",// Data source
                "hadoopConfig":{
                "dfs.data.transfer.protection": "integrity",
               "dfs.datanode.use.datanode.hostname" :"true",
                "dfs.client.use.datanode.hostname":"true"
                 },
                "column": [
                    {
                        "index": 0,// Serial number. The index starts from 0, indicating that data is read from the first column of the local text file.
                        "type": "string"// Field type
                    },
                    {
                        "index": 1,
                        "type": "long"
                    },
                    {
                        "index": 2,
                        "type": "double"
                    },
                    {
                        "index": 3,
                        "type": "boolean"
                    },
                    {
                        "format": "yyyy-MM-dd HH:mm:ss", // Date format
                        "index": 4,
                        "type": "date"
                    }
                ],
                "fieldDelimiter": ",",// Column delimiter
                "encoding": "UTF-8",// Encoding format
                "fileType": ""// Text type
            },
            "name": "Reader",
            "category": "reader"
        },
        { 
            "stepType": "stream",
            "parameter": {},
            "name": "Writer",
            "category": "writer"
        }
    ],
    "setting": {
        "errorLimit": {
            "record": ""// Number of error records
        },
        "speed": {
            "concurrent": 3,// Job concurrency
            "throttle": true, // If throttle is false, the mbps parameter is ignored, and there is no throttling. If throttle is true, throttling is enabled.
            "mbps":"12"// Throttling in Mbps
        }
    },
    "order": {
        "hops": [
            {
                "from": "Reader",
                "to": "Writer"
            }
        ]
    }
}
```

The following code provides an example of how to configure HDFS Reader with parquetSchema.

**Note**

-   The fileType parameter must be set to parquet.
    
-   If you want to read a subset of columns from a Parquet file, specify the complete schema in the parquetSchema parameter. Then, use the index in the column parameter to select and map the required columns for synchronization.
    

```
"reader":  {
    "name": "hdfsreader",
    "parameter": {
        "path": "/user/hive/warehouse/addata.db/dw_ads_rtb_monitor_minute/thedate=20170103/hour_id=22/*",
        "defaultFS": "h10s010.07100.149:8020",
        "column": [
            {
                "index": 0,
                "type": "string"
            },
            {
                "index": 1,
                "type": "long"
            },
            {
                "index": 2,
                "type": "double"
            }
        ],
        "fileType": "parquet",
        "encoding": "UTF-8",
        "parquetSchema": "message m { optional int32 minute_id; optional int32 dsp_id; optional int32 adx_pid; optional int64 req; optional int64 res; optional int64 suc; optional int64 imp; optional double revenue; }"
    }
}
```

### Reader script parameters

**Parameter**

**Description**

**Required**

**Default value**

path

The path of the files to read. To read multiple files, you can use a simple regular expression, such as `/hadoop/data_201704*`. If the filenames are based on a regular time pattern, you can use scheduling parameters. Scheduling parameters are dynamically replaced based on the business time. For more information, see [Supported scheduling parameter formats](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#concept-2185254).

-   When a single HDFS file is specified, HDFS Reader can only use a single thread for data extraction.
    
-   When multiple HDFS files are specified, HDFS Reader supports multi-threaded data extraction. The number of concurrent threads is specified by the job concurrency parameter \`concurrent\`.
    
    **Note**
    
    The actual number of concurrent threads that are started is the smaller of the number of HDFS files to be read and the job concurrency you configured.
    
-   When you specify a wildcard character, HDFS Reader attempts to traverse multiple files. For example, specifying / means reading all files in the / directory, and specifying /bazhen/ means reading all files in the bazhen directory. HDFS Reader currently supports only `*` and `?` as file wildcard characters, with syntax similar to common Linux command-line file wildcards.
    

Note the following:

-   Data Integration treats all files to be read in a sync job as a single data table. You must ensure that all files can adapt to the same schema and that Data Integration has read permissions for them.
    
-   Note on partition reading: When creating a table in Hive, you can specify partitions. For example, creating a partition `partition(day="20150820", hour="09")` results in the creation of /20150820 and /09 directories under the corresponding table's directory in the HDFS file system, where /20150820 is the parent directory of /09.
    
    Partitions are listed as a corresponding directory structure. To read all data from a table in a specific partition, simply configure the path value in the JSON. For example, to read all data for the day 20150820 from the partition \`day\` in the table \`mytable01\`, configure the path as follows.
    
    ```
    "path": "/user/hive/warehouse/mytable01/20150820/*"
    ```
    

Yes

None

defaultFS

The address of the Hadoop HDFS namenode. The public resource group does not support the configuration of Hadoop high-availability (HA) advanced parameters.

Yes

None

fileType

The file type. Currently, you can only set this to TEXT, ORC, RC, SEQ, CSV, or parquet. HDFS Reader can automatically detect the file type and use the corresponding reading strategy. Before data synchronization, HDFS Reader checks whether the format of all files to be synchronized in the configured path matches the fileType. If they do not match, the task fails.

The following are the valid values for the fileType parameter:

-   TEXT: TextFile format.
    
-   ORC: ORCFile format.
    
-   RC: RCFile format.
    
-   SEQ: SequenceFile format.
    
-   CSV: Regular HDFS file format (logical two-dimensional table).
    
-   PARQUET: Regular Parquet file format.
    

Because TextFile and ORCFile are different file formats, HDFS Reader parses them differently. This difference causes a slight variation in the result format when complex Hive types (such as map, array, struct, and union) are converted to the STRING type supported by Data Integration. Take the map type as an example:

-   An ORCFile map type, after being parsed by HDFS Reader and converted to the STRING type supported by Data Integration, results in `{job=80, team=60, person=70}`.
    
-   A TextFile map type, after being parsed by HDFS Reader and converted to the STRING type supported by Data Integration, results in `{job:80, team:60, person:70}`.
    

As shown in the conversion results, the data itself is unchanged, but the format is slightly different. Therefore, if the fields to be synchronized in your configured file path are complex types in Hive, use a consistent file format.

Best practices:

-   To unify the format parsed from complex types, export tables from TextFile format to ORCFile format in the Hive client.
    
-   If the file format is Parquet, the parquetSchema parameter is required. This property describes the structure of the Parquet file to be read.
    

For the column information you specify, type is required, and you must choose either index or value.

Yes

None

column

The list of fields to read. \`type\` specifies the source data type. \`index\` specifies which column of the text the current column comes from (starting from 0). \`value\` specifies that the current type is a constant. Data is not read from the source file but is automatically generated based on the \`value\`. By default, you can read all data as the STRING type by setting `"column": ["*"]`.

You can also specify column field information (choose between configuring data file columns or constant columns) as follows.

```
{
  "type": "long",
  "index": 0
  // Get an INT field from the first column (index 0) of the local text file. `index` indicates getting column data from the data file.
},
{
  "type": "string",
  "value": "alibaba"
  // HDFS Reader internally generates a string field "alibaba" as the current field. `value` indicates a constant column.
}
```

**Note**

-   The index starts from 0, indicating that data is read from the first column of the local text file.
    
-   Specify the index and type for each column to be read. Avoid using the `column *` wildcard.
    

Yes

None

fieldDelimiter

The field delimiter for reading. When HDFS Reader reads TextFile data, you need to specify a field delimiter. If not specified, the default is a comma (,). When HDFS Reader reads ORCFile data, you do not need to specify a field delimiter. Hive's default delimiter is \\u0001.

**Note**

-   If you want to treat each row as a single column at the destination, use a character that does not exist in the row content as the delimiter. For example, use a non-printable character such as \\u0001.
    
-   The delimiter cannot be \\n.
    

No

,

encoding

The encoding format for reading files.

No

utf-8

nullFormat

In a text file, a null pointer cannot be defined with a standard string. Data Integration provides \`nullFormat\` to define which strings can represent null.

For example, if you set `nullFormat:"null"`, Data Integration will treat the source data \`null\` as a null field.

**Note**

The string "null" (the four characters n, u, l, l) is different from an actual null value.

No

None

compress

The compression method for files when fileType is csv. Currently, only gzip, bz2, zip, lzo, lzo\_deflate, hadoop-snappy, and framing-snappy compression are supported.

**Note**

-   LZO has two compression formats: lzo and lzo\_deflate. Ensure you configure the correct one.
    
-   Because there is no unified stream format for snappy, Data Integration currently supports only the most mainstream formats: hadoop-snappy (the snappy stream format on Hadoop) and framing-snappy (the snappy stream format recommended by Google).
    
-   This parameter is not required for the ORC file type.
    

No

None

parquetSchema

If the file format is Parquet, configure parquetSchema in addition to the column configuration. The parquetSchema defines the storage types for Parquet. Ensure the entire configuration is valid JSON after you define the schema.

```
message MessageTypeName {
    RequiredStatus DataType ColumnName;
    ......................;
}
```

The format for parquetSchema is as follows:

-   MessageTypeName: Enter a name for the message type.
    
-   RequiredStatus: Use required for non-null columns and optional for nullable columns. Set all columns to optional.
    
-   DataType: Parquet files support the following data types: BOOLEAN, Int32, Int64, Int96, FLOAT, DOUBLE, BINARY, and fixed\_len\_byte\_array. Use BINARY for string types.
    
-   End each column definition with a semicolon, including the last one.
    

The following is a configuration example.

```
"parquetSchema": "message m { optional int32 minute_id; optional int32 dsp_id; optional int32 adx_pid; optional int64 req; optional int64 res; optional int64 suc; optional int64 imp; optional double revenue; }"
```

No

None

csvReaderConfig

Parameter configuration for reading CSV files. This is a Map type. CSV files are read using CsvReader, which has many configurations. If not configured, default values are used.

The following is a common configuration.

```
"csvReaderConfig":{
  "safetySwitch": false,
  "skipEmptyRecords": false,
  "useTextQualifier": false
}
```

For all configuration items and their default values, strictly use the following field names in the \`csvReaderConfig\` map.

```
boolean caseSensitive = true;
char textQualifier = 34;
boolean trimWhitespace = true;
boolean useTextQualifier = true;// Specifies whether to use a CSV escape character.
char delimiter = 44;// Separator
char recordDelimiter = 0;
char comment = 35;
boolean useComments = false;
int escapeMode = 1;
boolean safetySwitch = true;// Specifies whether to limit a single column's length to 100,000 characters.
boolean skipEmptyRecords = true;// Specifies whether to skip empty rows.
boolean captureRawRecord = true;
```

No

None

hadoopConfig

You can configure some Hadoop-related advanced parameters in \`hadoopConfig\`, such as HA configuration. The public resource group does not support the configuration of Hadoop HA advanced parameters.

```
"hadoopConfig":{
"dfs.nameservices": "testDfs",
"dfs.ha.namenodes.testDfs": "namenode1,namenode2",
"dfs.namenode.rpc-address.youkuDfs.namenode1": "",
"dfs.namenode.rpc-address.youkuDfs.namenode2": "",
"dfs.client.failover.proxy.provider.testDfs": "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider",
"dfs.data.transfer.protection": "integrity",
"dfs.datanode.use.datanode.hostname" :"true",
"dfs.client.use.datanode.hostname":"true"
}
```

**Note**

```
"hadoopConfig":{ "dfs.data.transfer.protection": "integrity", "dfs.datanode.use.datanode.hostname" :"true", "dfs.client.use.datanode.hostname":"true" }
```

The preceding parameters are for Kerberos authentication configured in the HDFS Reader plugin. If you have already configured Kerberos authentication in the HDFS data source, you do not need to configure it again in the HDFS Reader plugin. For more information about configuring an HDFS data source, see [Configure an HDFS data source](/help/en/dataworks/add-an-hdfs-data-source#task-2477807).

No

None

haveKerberos

Specifies whether Kerberos authentication is enabled. Default value: false. If you set this to true, the \`kerberosKeytabFilePath\` and \`kerberosPrincipal\` parameters are required.

No

false

kerberosKeytabFilePath

The absolute path of the Kerberos authentication keytab file. This is required if \`haveKerberos\` is true.

No

None

kerberosPrincipal

The Kerberos authentication principal name, such as \`\*\*\*\*/hadoopclient@\*\*.\*\*\*\`. This is required if \`haveKerberos\` is true.

**Note**

Because Kerberos requires configuring the absolute path of the keytab authentication file, you need to use this feature on a resource group. The following is a configuration example.

```
"haveKerberos":true,
"kerberosKeytabFilePath":"/opt/datax/**.keytab",
"kerberosPrincipal":"**/hadoopclient@**.**"
```

No

None

### Writer script demo

```
{
    "type": "job",
    "version": "2.0",// Version number.
    "steps": [
        { 
            "stepType": "stream",
            "parameter": {},
            "name": "Reader",
            "category": "reader"
        },
        {
            "stepType": "hdfs",// Plugin name.
            "parameter": {
                "path": "",// The path to store the file in the Hadoop HDFS file system.
                "fileName": "",// The filename for the HDFS Writer.
                "compress": "",// The HDFS file compression type.
                "datasource": "",// Data source.
                "column": [
                    {
                        "name": "col1",// Field name.
                        "type": "string"// Field type.
                    },
                    {
                        "name": "col2",
                        "type": "int"
                    },
                    {
                        "name": "col3",
                        "type": "double"
                    },
                    {
                        "name": "col4",
                        "type": "boolean"
                    },
                    {
                        "name": "col5",
                        "type": "date"
                    }
                ],
                "writeMode": "",// Write mode.
                "fieldDelimiter": ",",// Column delimiter.
                "encoding": "",// Encoding format.
                "fileType": "text"// Text type.
            },
            "name": "Writer",
            "category": "writer"
        }
    ],
    "setting": {
        "errorLimit": {
            "record": ""// Number of error records.
        },
        "speed": {
            "concurrent": 3,// Job concurrency.
            "throttle": false // false indicates no throttling, and the speed limit below is ignored. true indicates throttling is enabled.
        }
    },
    "order": {
        "hops": [
            {
                "from": "Reader",
                "to": "Writer"
            }
        ]
    }
}
```

### Writer script parameters

**Parameter**

**Description**

**Required**

**Default value**

defaultFS

The address of the NameNode for the Hadoop Distributed File System (HDFS). For example, `hdfs://127.0.0.1:9000`.

Yes

None

fileType

The file type. Currently, you can only set this to text, orc, or parquet:

-   text: A storage table in Hive, TextFile format.
    
-   orc: A compressed table in Hive, ORCFile format.
    
-   parquet: Regular Parquet file format.
    

Yes

None

path

The path to store files in the Hadoop HDFS file system. HDFS Writer writes multiple files to the path directory based on the concurrency configuration.

To associate with a Hive table, enter the storage path of the Hive table on HDFS. For example, if the data warehouse storage path set on Hive is `/user/hive/warehouse/`, and a table named \`hello\` has been created in the \`test\` database, the corresponding storage path is `/user/hive/warehouse/test.db/hello`.

Yes

None

fileName

The filename for the HDFS Writer. During execution, a random suffix is appended to this filename to create the actual filename for each thread.

Yes

None

column

The fields to write data to. Writing to a subset of columns is not supported.

To associate with a table in Hive, you need to specify all field names and types in the table, where \`name\` specifies the field name and \`type\` specifies the field type.

You can specify column field information as follows.

```
"column": 
[
    {
        "name": "userName",
        "type": "string"
    },
    {
        "name": "age",
        "type": "long"
    }
]
```

Yes (This parameter is not required if filetype is parquet)

None

writeMode

The data cleanup mode for HDFS Writer before writing:

-   append: No processing is done before writing. Data Integration HDFS Writer writes directly using the filename and ensures no filename conflicts.
    
-   nonConflict: If a file with the \`fileName\` prefix exists in the directory, an error is reported.
    
-   `truncate`: Cleans up all files matching the \`fileName\` prefix before writing. For example, if `"fileName": "abc"`, all files starting with \`abc\` in the corresponding directory will be cleaned up.
    

**Note**

Parquet format files do not support Append, so the mode can only be noConflict.

Yes

None

fieldDelimiter

The field delimiter for HDFS Writer. You need to ensure it is consistent with the field delimiter of the created Hive table, otherwise data cannot be queried in the Hive table.

**Note**

Only single-character delimiters are supported. Entering multiple characters will cause a runtime error.

Yes (This parameter is not required if filetype is parquet)

None

compress

The HDFS file compression type. If left empty, no compression is used.

Text files support gzip and bzip2 compression types.

No

None

encoding

The encoding format for writing files.

No

No compression

parquetSchema

A required parameter for writing Parquet files. It describes the structure of the object file. This parameter is effective only when fileType is parquet. The format is as follows.

```
message MessageTypeName {
Required/Optional, DataType, ColumnName;
......................;
}
```

The configuration items are as follows:

-   MessageTypeName: Enter a name.
    
-   Required/Optional: \`required\` indicates non-null, and \`optional\` indicates nullable. We recommend setting all to \`optional\`.
    
-   DataType: Parquet files support BOOLEAN, INT32, INT64, INT96, FLOAT, DOUBLE, BINARY (use BINARY for string types), and FIXED\_LEN\_BYTE\_ARRAY types.
    

**Note**

Each row setting must end with a semicolon, including the last row.

The following is an example.

```
message m {
optional int64 id;
optional int64 date_id;
optional binary datetimestring;
optional int32 dspId;
optional int32 advertiserId;
optional int32 status;
optional int64 bidding_req_num;
optional int64 imp;
optional int64 click_num;
}
```

No

None

hadoopConfig

The hadoopConfig parameter is used to configure advanced Hadoop parameters, such as the high availability (HA) configuration.

```
"hadoopConfig":{
"dfs.nameservices": "testDfs",
"dfs.ha.namenodes.testDfs": "namenode1,namenode2",
"dfs.namenode.rpc-address.youkuDfs.namenode1": "",
"dfs.namenode.rpc-address.youkuDfs.namenode2": "",
"dfs.client.failover.proxy.provider.testDfs": "org.apache.hadoop.hdfs.server.namenode.ha.ConfiguredFailoverProxyProvider"
}
```

No

None

dataxParquetMode

The mode for synchronizing Parquet files. Use \`fields\` to support complex types such as array, map, and struct. Optional values are \`fields\` and \`columns\`.

When \`dataxParquetMode\` is set to \`fields\`, HDFS over OSS is supported, meaning the HDFS storage is OSS, and the data storage format in OSS is Parquet. In this case, you can add OSS-related parameters to \`hadoopConfig\`, as follows:

-   fs.oss.accessKeyId: The AccessKey ID for accessing OSS.
    
-   fs.oss.accessKeySecret: The AccessKey secret for accessing OSS.
    
-   fs.oss.endpoint: The endpoint for accessing OSS.
    

The following is an example of accessing OSS.

````
```json
    "writer": {
    "name": "hdfswriter",
    "parameter": {
        "defaultFS": "oss://test-bucket",
        "fileType": "parquet",
        "path": "/datasets/oss_demo/kpt",
        "fileName": "test",
        "writeMode": "truncate",
        "encoding": "UTF-8",
        "hadoopConfig": {
            "fs.oss.accessKeyId": "the-access-id",
            "fs.oss.accessKeySecret": "the-access-key",
            "fs.oss.endpoint": "oss-cn-hangzhou.aliyuncs.com"
            },
            "parquetSchema": "message test {\n    required int64 id;\n    optional binary name (UTF8);\n    optional int64 gmt_create;\n    required group map_col (MAP) {\n        repeated group key_value {\n            required binary key (UTF8);\n            required binary value (UTF8);\n        }\n    }\n    required group array_col (LIST) {\n        repeated group list {\n            required binary element (UTF8);\n        }\n    }\n    required group struct_col {\n        required int64 id;\n        required binary name (UTF8);\n    }    \n}",
            "dataxParquetMode": "fields"
            }
        }
    ```
````

No

columns

haveKerberos

Specifies whether Kerberos authentication is enabled. Default value: false. If you set this to true, the kerberosKeytabFilePath and kerberosPrincipal parameters are required.

No

false

kerberosKeytabFilePath

The absolute path of the Kerberos authentication keytab file.

Required if haveKerberos is true.

None

kerberosPrincipal

The Kerberos authentication principal name, such as \`\*\*\*\*/hadoopclient@\*\*.\*\*\*\`. Required if haveKerberos is true.

Because Kerberos requires configuring the absolute path of the keytab authentication file, you need to use this feature on a custom resource group. The following is a configuration example.

```
"haveKerberos":true,
"kerberosKeytabFilePath":"/opt/datax/**.keytab",
"kerberosPrincipal":"**/hadoopclient@**.**"
```

No

None
