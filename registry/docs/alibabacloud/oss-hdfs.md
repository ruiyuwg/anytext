OSS-HDFS Service (JindoFS Service) is a cloud-native data lake storage product. An OSS-HDFS data source provides a bidirectional channel to read from and write to OSS-HDFS. This topic describes the data synchronization capabilities that DataWorks provides for OSS-HDFS.

## Limits

### Offline read

-   When you use OSS-HDFS Reader, note the following:
    
    The network connection from a resource group to OSS-HDFS can be complex. To perform data synchronization tasks, use a [Serverless resource group (recommended)](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) or an [exclusive resource group for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration#task-2353828). Ensure that your resource group can access OSS-HDFS over the network.
    
-   OSS-HDFS Reader supports the following features:
    
    -   Supports files in text, csv, orc, and parquet formats. The file content must be a logical two-dimensional table.
        
    -   Supports reading multiple data types and column constants.
        
    -   Supports recursive reads and the wildcard characters `*` and `?`.
        
    -   Supports concurrent reads from multiple files.
        

**Important**

OSS-HDFS Reader does not support multi-threaded concurrent reads from a single file. This is due to the internal chunking algorithm for a single file.

### Offline write

When you use OSS-HDFS Writer, note the following:

-   OSS-HDFS Writer supports only files in text, orc, and parquet formats. The file content must be a logical two-dimensional table.
    
-   For text files, ensure that the separator used for writing to the OSS-HDFS file is the same as the separator used when you create the table in Hive. This ensures that the data written to OSS-HDFS is correctly associated with the fields in the Hive table.
    

### **Real-time write**

-   Supports real-time writes.
    
-   Supports real-time writes for Hudi format version 0.14.x.
    

## Implementation process

The implementation process of OSS-HDFS Writer is as follows:

1.  A temporary folder is created in the OSS-HDFS file system based on the specified path.
    
    The folder is named using the path\_random rule.
    
2.  You can write the read file to this temporary folder.
    
3.  After all data is written, the files are moved from the temporary folder to the specified destination folder. The system ensures that the file names are unique.
    
4.  The temporary folder is deleted. If the connection to OSS-HDFS is interrupted, you must manually delete the temporary folder and any files that were written.
    

## Supported field types

### Offline read

The data types in ParquetFile, ORCFile, TextFile, and CsvFile are converted to the internal data types that Data Integration supports, as shown in the following table.

**Type category**

**OSS-HDFS data type**

Integer

TINYINT, SMALLINT, INT, BIGINT

Floating-point

FLOAT, DOUBLE, DECIMAL

String

STRING, CHAR, VARCHAR

Date and time

DATE, TIMESTAMP

Boolean

BOOLEAN

**Note**

-   LONG: Integer data in an OSS-HDFS file, such as 123456789.
    
-   DOUBLE: Floating-point data in an OSS-HDFS file, such as 3.1415.
    
-   BOOLEAN: Boolean data in an OSS-HDFS file, such as true or false. The values are not case-sensitive.
    
-   DATE: Date and time data in an OSS-HDFS file, such as 2014-12-31 00:00:00.
    

### Offline write

OSS-HDFS Writer writes files in TextFile, ORCFile, and ParquetFile formats to a specified path in the OSS-HDFS file system.

The supported data types are shown in the following table.

**Type category**

**OSS-HDFS data type**

Integer

TINYINT, SMALLINT, INT, and BIGINT

Floating-point

FLOAT and DOUBLE

String

CHAR, VARCHAR, and STRING

Boolean

BOOLEAN

Date and time

DATE and TIMESTAMP

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

## Develop a data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Configure an offline synchronization task for a single table

-   For more information, see [Configure a task in the codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For a list of all parameters and a script demo for the code editor, see [Appendix: OSS-HDFS script demo and parameter descriptions](#section-cr0-dyw-dsc).
    

### Configure a real-time synchronization task for a single table

For more information, see [Configure real-time incremental synchronization for a single table](/help/en/dataworks/synchronize-data-in-a-single-table-configure-and-manage-a-real-time-data-sync-node#task-2473945) and [Configure a real-time synchronization task in DataStudio](/help/en/dataworks/user-guide/configure-a-real-time-synchronization-node-in-datastudio/#task-2231840).

### Configure a full and incremental real-time synchronization task for an entire database

For more information, see [Configure a real-time synchronization task for an entire database](/help/en/dataworks/user-guide/configure-a-data-synchronization-solution-in-data-integration#task-2234369).

## Appendix: OSS-HDFS script demo and parameter descriptions

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader script demo

```
{
    "type": "job",
    "version": "2.0",
    "steps": [
        {
            "stepType": "oss_hdfs",// Plugin name
            "parameter": {
                "path": "",// The path of the file to read.
                "datasource": "",// Data source
                "column": [
                    {
                        "index": 0,// The serial number. The index starts from 0. This indicates that data is read from the first column of the local text file.
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
                "fileFormat": ""// Text type
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
            "throttle": true, // If throttle is set to false, the mbps parameter does not take effect, and no rate limiting is applied. If throttle is set to true, rate limiting is applied.
            "mbps":"12"// Rate limit. 1 mbps = 1 MB/s.
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

### Reader script parameters

**Parameter**

**Description**

**Required**

**Default value**

path

The path of the file to read.

-   If you specify a single OSS-HDFS file, OSS-HDFS Reader can only use a single thread to extract data.
    
-   If you specify multiple OSS-HDFS files, OSS-HDFS Reader can use multiple threads to extract data. The number of concurrent threads is specified by the \`concurrent\` parameter. To read multiple files, you can use a simple regular expression for matching, such as `/hadoop/data_201704*`. If the files are named by time in a regular pattern, you can use scheduling parameters. The scheduling parameters are dynamically replaced based on the business time. For more information, see [Supported formats for scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#concept-2185254).
    
    **Note**
    
    The actual number of concurrent threads is the smaller value between the number of OSS-HDFS files to be read and the value you set for job concurrency.
    
-   If you specify a wildcard character, OSS-HDFS Reader traverses and identifies multiple files. For example, specifying / reads all files in the root directory, and specifying /oss-hdfs/ reads all files in the downstream oss-hdfs directory. OSS-HDFS Reader supports only `*` and `?` as file wildcard characters. The syntax is similar to the file wildcard characters in a typical Linux command line.
    

**Important**

-   Data Integration treats all files to be read in a synchronization job as a single data table. You must ensure that all files can be adapted to the same schema.
    
-   The AccessKey pair that you provide when you configure the OSS-HDFS data source must have the permissions to read from the corresponding OSS-HDFS.
    

Yes

None

fileFormat

The file type. You can set this parameter only to text, orc, or parquet.

OSS-HDFS Reader can automatically detect the file type and use the corresponding read policy. Before data synchronization, OSS-HDFS Reader checks whether the format of all files to be synchronized in the specified path is the same as the value of fileFormat. If the formats are different, the task fails.

The following list describes the valid values for fileFormat:

-   text: indicates the TEXT file format.
    
-   orc: indicates the ORC file format.
    
-   csv: indicates the normal OSS-HDFS file format (logical two-dimensional table).
    
-   parquet: indicates the normal Parquet file format.
    

Yes

None

column

The list of fields to read. By default, you can read all data as the STRING type by setting the parameter to `"column": ["*"]`.

You can also specify the column field information as follows. The parameters are described as follows:

-   type: Specifies the type of the source data.
    
-   index: Specifies the column number (starting from 0) in the text file from which the current column is sourced.
    
-   value: Specifies that the current type is a constant. Data is not read from the source file. Instead, a corresponding column is automatically generated based on the value.
    

**Note**

You can configure either the file data column (index) or the constant column (value).

```
{
  "type": "long",
  "index": 0
  // Obtains the LONG field from the first column (index starts from 0) of the local text file. index indicates that column data is obtained from the data file.
},
{
  "type": "string",
  "value": "alibaba"
  // HDFS Reader internally generates a string field named alibaba as the current field. value indicates a constant column.
}
```

Yes

None

fieldDelimiter

The field delimiter for reading data. When OSS-HDFS Reader reads TextFile data, you must specify a field delimiter. If you do not specify this parameter, the default value, a comma (,), is used. When OSS-HDFS Reader reads ORC or PARQUET data, you do not need to specify a field delimiter.

No

,

encoding

The encoding format for reading files.

No

utf-8

nullFormat

In a text file, you cannot use a standard string to define a null pointer. Data Integration provides the nullFormat parameter to define which strings can represent a null value.

For example, if you set `nullFormat:"null"`, Data Integration treats the source data \`null\` as a null field.

No

None

compress

Only gzip, bzip2, and snappy compression are supported.

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
            "stepType": "oss_hdfs",// Plugin name.
            "parameter": {
                "path": "",// The path to store the file in the OSS-HDFS file system.
                "fileName": "",// The name of the file to be written by OSS-HDFS Writer.
                "compress": "",// The compression type of the OSS-HDFS file.
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
                "fileFormat": "text"// Text type.
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
            "throttle": false // false indicates that no rate limiting is applied, and the rate limit speed below does not take effect. true indicates that rate limiting is applied.
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

fileFormat

The file type. You can set this parameter only to text, orc, or parquet.

-   text: indicates that the file is written in the text file format.
    
-   orc: indicates that the file is written in the ORC file format.
    
-   parquet: indicates that the file is written in the parquet file format.
    

Yes

None

path

The path in the OSS-HDFS file system where the data is stored. OSS-HDFS Writer writes multiple files to the directory specified by \`path\` based on the concurrency configuration.

When associating with a Hive table, specify the storage path of the Hive table on OSS-HDFS. For example, specify the storage path of the data warehouse set on Hive.

Yes

None

fileName

The name of the file to be written by OSS-HDFS Writer. During actual execution, a random suffix is appended to this file name to create the actual file name for each thread.

Yes

None

column

The fields to which data is written. Writing to a subset of columns is not supported.

When associating with a table in Hive, you must specify all field names and field types in the table. \`name\` specifies the field name, and \`type\` specifies the field type.

You can specify the column field information as follows.

```
{
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
}
```

Yes (If fileFormat is set to parquet, you do not need to specify this parameter.)

None

writeMode

The data cleanup mode before OSS-HDFS Writer writes data:

-   append: No processing is performed before writing. Data Integration OSS-HDFS Writer directly uses the file name to write data and ensures that there are no file name conflicts.
    
-   nonConflict: If a file with the \`fileName\` prefix exists in the directory, an error is reported.
    
-   `truncate`: Before writing, all files that match the \`fileName\` prefix are cleared. For example, if you set `"fileName": "abc"`, all files starting with \`abc\` in the corresponding directory are cleared.
    

Yes

None

fieldDelimiter

The field delimiter for OSS-HDFS Writer.

**Note**

Only single-character delimiters are supported. If you enter multiple characters, a runtime error occurs.

Yes (If fileFormat is set to parquet, you do not need to specify this parameter.)

None

compress

The compression type for the OSS-HDFS file. If you leave this parameter empty, no compression is used.

For text files, gzip and bzip2 compression types are supported.

No

None

encoding

The encoding format for writing files.

No

utf-8

parquetSchema

This parameter is required when you write Parquet files. It describes the structure of the object file. This parameter takes effect only when fileFormat is set to parquet. The format is as follows.

```
message MessageName {
RequiredOrOptional DataType FieldName;
.....................;
}
```

The configuration items are described as follows:

-   Message name: Enter a name.
    
-   Required: \`required\` indicates not null, and \`optional\` indicates nullable. We recommend that you set all fields to \`optional\`.
    
-   Data type: Parquet files support types such as BOOLEAN, INT32, INT64, INT96, FLOAT, DOUBLE, BINARY (use BINARY for string types), and FIXED\_LEN\_BYTE\_ARRAY.
    

**Note**

The setting for each row must end with a semicolon. The last row must also end with a semicolon.

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
