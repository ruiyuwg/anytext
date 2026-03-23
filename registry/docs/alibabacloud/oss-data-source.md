The OSS data source provides a bidirectional channel for reading data from and writing data to OSS. This topic describes the data synchronization capabilities of the OSS data source in DataWorks.

## Supported field types and limits

### Offline read

OSS Reader reads data from OSS and converts it to the data integration protocol. OSS is a storage service for unstructured data. For data integration, OSS Reader supports the following features.

**Support**

**Not supported**

-   Supports TXT files. The schema in the TXT file must be a two-dimensional table.
    
-   Supports CSV-like files with custom delimiters.
    
    **Note**
    
    Text files (TXT and CSV) support gzip, bzip2, and zip compression.
    
    When you compress files, a compressed package cannot contain multiple files.
    
-   Supports ORC and PARQUET formats.
    
-   Supports reading multiple data types (represented as strings), column pruning, and column constants.
    
-   Supports recursive reads and file name filtering.
    
-   Supports concurrent reads for multiple objects.
    

-   Does not support multi-threaded concurrent reads for a single object (file).
    
-   Does not support multi-threaded concurrent reads for a single compressed object.
    

**Important**

-   If you prepare data in OSS as a CSV file, the file must be in standard CSV format. For example, if a column contains a double quotation mark ("), you must replace it with two double quotation marks (""). Otherwise, the file is split incorrectly. If a file has multiple delimiters, we recommend that you use the text file type.
    
-   OSS is an unstructured data source that stores file-type data. Before you sync data, confirm that the field structure meets your expectations. Similarly, if the data structure in the unstructured data source changes, you must reconfirm the field structure in the task configuration. Otherwise, data may be garbled during synchronization.
    

### Offline write

OSS Writer converts data from the data synchronization protocol into text files in OSS. OSS is a storage service for unstructured data. OSS Writer supports the following features.

**Support**

**Not supported**

-   Supports writing only text files (not BLOBs such as videos and images). The schema in the text file must be a two-dimensional table.
    
-   Supports CSV-like files with custom delimiters.
    
-   Supports ORC and PARQUET formats.
    
    **Note**
    
    The SNAPPY compression format is supported in the code editor.
    
-   Supports multi-threaded writes. Each thread writes data to a different sub-file.
    
-   Supports file rollover. When a file exceeds a specified size, the system switches to a new file.
    

-   Does not support concurrent writes to a single file.
    
-   OSS does not provide data types. OSS Writer writes all data as the STRING type to OSS objects.
    
-   Does not support writing data if the storage class of the OSS bucket is **Cold Archive**.
    
-   A single object (file) cannot exceed 100 GB.
    

**Type classification**

**Data integration column configuration type**

Integer types

LONG

String types

STRING

Floating-point types

DOUBLE

Boolean types

BOOLEAN

Date and time types

DATE

### **Real-time write**

-   Supports real-time writes.
    
-   Supports real-time writes from a single table to data lakes, such as Hudi (0.12.x), Paimon, and Iceberg.
    

## **Create a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

**Note**

-   If you create a cross-account OSS data source, you must grant authorization to the corresponding account. For more information, see [Grant cross-account access to OSS using a bucket policy](/help/en/oss/tutorial-authorize-a-ram-user-under-another-alibaba-cloud-account-by-adding-a-bucket-policy#concept-kxn-fgs-2gb).
    
-   If you use a RAM role to authorize the OSS data source, see [Configure a data source using the RAM role authorization mode](/help/en/dataworks/user-guide/use-the-ram-role-based-authorization-mode-to-add-a-data-source).
    
-   If you create a cross-region OSS data source, use a public endpoint. For more information, see [Overview of endpoints and network connectivity](/help/en/oss/user-guide/access-and-network-overview).
    

## Develop a data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Configuration guide for single-table offline sync tasks

-   For more information about the configuration process, see [Codeless UI configuration](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Code editor configuration](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For all parameters and a script demo for the code editor, see [Appendix: Script demos and parameter descriptions](#section-fm1-ncw-6r8).
    

### Configuration guide for single-table real-time sync tasks

For more information about the configuration process, see [Configure a real-time sync task in Data Integration](/help/en/dataworks/user-guide/real-time-synchronization-task-configuration/) and [Configure a real-time sync task in DataStudio](/help/en/dataworks/user-guide/configure-a-real-time-synchronization-node-in-datastudio/#task-2231840).

### Configuration guide for whole-database synchronization

For more information about the configuration process, see [Whole-database offline sync task](/help/en/dataworks/user-guide/database-wide-offline-synchronization/) and [Whole-database real-time sync task](/help/en/dataworks/user-guide/database-wide-real-time-synchronization-task/).

## FAQ

[Is there a limit on the number of OSS files that can be read?](/help/en/dataworks/batch-synchronization#cd60e3c1c2idg)

[How do I handle dirty data when reading a CSV file with multiple delimiters?](/help/en/dataworks/batch-synchronization#4e384ef6edpj0)

## Appendix: Script demos and parameter descriptions

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader script demo: General example

```
{
    "type":"job",
    "version":"2.0",// The version number.
    "steps":[
        {
            "stepType":"oss",// The plugin name.
            "parameter":{
                "nullFormat":"",// Defines the string that represents null.
                "compress":"",// The text compression type.
                "datasource":"",// The data source.
                "column":[// The fields.
                    {
                        "index":0,// The column index.
                        "type":"string"// The data type.
                    },
                    {
                        "index":1,
                        "type":"long"
                    },
                    {
                        "index":2,
                        "type":"double"
                    },
                    {
                        "index":3,
                        "type":"boolean"
                    },
                    {
                        "format":"yyyy-MM-dd HH:mm:ss", // The time format.
                        "index":4,
                        "type":"date"
                    }
                ],
                "skipHeader":"",// Skips the header row if the CSV-like file has one.
                "encoding":"",// The encoding format.
                "fieldDelimiter":",",// The column delimiter.
                "fileFormat": "",// The text file format.
                "object":[]// The object prefix.
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
            "record":""// The number of error records.
        },
        "speed":{
            "throttle":true,// If throttle is set to false, the mbps parameter does not take effect, and the rate is not limited. If throttle is set to true, the rate is limited.
            "concurrent":1, // The number of concurrent jobs.
            "mbps":"12"// The rate limit. 1 mbps is equal to 1 MB/s.
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

### Reader script demo: Read ORC or Parquet files from OSS

You can read files in ORC or Parquet format from OSS by reusing the HDFS Reader. In addition to the existing OSS Reader parameters, extended configuration parameters such as Path (for ORC) and FileFormat (for ORC and Parquet) are also used.

-   The following example shows how to read an ORC file from OSS.
    
    ```
    {
    "stepType": "oss",
    "parameter": {
    "datasource": "",
    "fileFormat": "orc",
    "path": "/tests/case61/orc__691b6815_9260_4037_9899_****",
    "column": [
    {
    "index": 0,
    "type": "long"
    },
    {
    "index": "1",
    "type": "string"
    },
    {
    "index": "2",
    "type": "string"
    }
    ]
    }
    }
    ```
    
-   The following example shows how to read a Parquet file from OSS.
    
    ```
    {
      "type":"job",
        "version":"2.0",
        "steps":[
        {
          "stepType":"oss",
          "parameter":{
            "nullFormat":"",
            "compress":"",
            "fileFormat":"parquet",
            "path":"/*",
            "parquetSchema":"message m { optional BINARY registration_dttm (UTF8); optional Int64 id; optional BINARY first_name (UTF8); optional BINARY last_name (UTF8); optional BINARY email (UTF8); optional BINARY gender (UTF8); optional BINARY ip_address (UTF8); optional BINARY cc (UTF8); optional BINARY country (UTF8); optional BINARY birthdate (UTF8); optional DOUBLE salary; optional BINARY title (UTF8); optional BINARY comments (UTF8); }",
            "column":[
              {
                "index":"0",
                "type":"string"
              },
              {
                "index":"1",
                "type":"long"
              },
              {
                "index":"2",
                "type":"string"
              },
              {
                "index":"3",
                "type":"string"
              },
              {
                "index":"4",
                "type":"string"
              },
              {
                "index":"5",
                "type":"string"
              },
              {
                "index":"6",
                "type":"string"
              },
              {
                "index":"7",
                "type":"string"
              },
              {
                "index":"8",
                "type":"string"
              },
              {
                "index":"9",
                "type":"string"
              },
              {
                "index":"10",
                "type":"double"
              },
              {
                "index":"11",
                "type":"string"
              },
              {
                "index":"12",
                "type":"string"
              }
            ],
            "skipHeader":"false",
            "encoding":"UTF-8",
            "fieldDelimiter":",",
            "fieldDelimiterOrigin":",",
            "datasource":"wpw_demotest_oss",
            "envType":0,
            "object":[
              "wpw_demo/userdata1.parquet"
            ]
          },
          "name":"Reader",
          "category":"reader"
        },
        {
          "stepType":"odps",
          "parameter":{
            "partition":"dt=${bizdate}",
            "truncate":true,
            "datasource":"0_odps_wpw_demotest",
            "envType":0,
            "column":[
              "id"
            ],
            "emptyAsNull":false,
            "table":"wpw_0827"
          },
          "name":"Writer",
          "category":"writer"
        }
      ],
        "setting":{
        "errorLimit":{
          "record":""
        },
        "locale":"zh_CN",
          "speed":{
          "throttle":false,
            "concurrent":2
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
    

### Reader script parameters

**Parameter**

**Description**

**Required**

**Default value**

datasource

The name of the data source. The value of this parameter must be the same as the name of the data source that you add in the code editor.

Yes

None

Object

Specifies one or more objects to sync from OSS. You can specify the object using a full path, a path with wildcard characters, or a path with dynamic parameters.

**1\. Configuration methods**

-   Specify the path.
    
    -   Basic rule: The path starts from the root directory of the bucket and does not need to include the bucket name.
        
    -   To specify a single file, enter its full path. Example: `my_folder/my_file.txt`.
        
    -   To specify multiple objects, separate their paths with commas (`,`). Example: `folder_a/file1.txt`, `folder_a/file2.txt`.
        
-   Path with wildcard characters
    
    -   Use wildcard characters to match multiple files that follow a specific pattern.
        
    -   `*`: Matches zero or more characters.
        
    -   `?`: Matches one character.
        
    -   Examples:
        
        -   `abc*[0-9].txt` matches `abc0.txt`, `abc10,txt`, `abc_test_9.txt`, and more.
            
        -   `abc?.txt` matches `abc1.txt`, `abcX.txt`, and more.
            
-   Path with dynamic parameters
    
    -   Embed scheduling parameters in the path to automate synchronization. When the task runs, the parameters are replaced with their actual values.
        
    -   Example: If you set the path to `raw_data/${bizdate}/abc.txt`, the task dynamically syncs the folder for the corresponding data timestamp each day.
        
    -   _For more information about scheduling parameters, see_ [Sources and expressions of scheduling parameters](/help/en/dataworks/user-guide/supported-formats-for-scheduling-parameters)_._
        

**Important**

-   Use wildcard characters with caution. Using a wildcard character, especially `*`, triggers a scan of the OSS path. If there are many files, this scan can consume a large amount of memory and time, and may even cause the task to fail due to memory overflow. We recommend that you do not use broad wildcard characters in a production environment. If you encounter this issue, split the files into different folders and try the synchronization again.
    
-   The data synchronization system treats all objects in a single sync job as one data table. Ensure that all objects use the same schema.
    

**2\. Concurrent read mechanism and performance**

The way you configure the path determines the concurrency and performance of data extraction:

-   Single-threaded mode: The task runs in single-threaded mode if you specify a single, uncompressed file.
    
-   Multi-threaded mode: The task automatically enables multi-threaded concurrent reads if you specify multiple files or use wildcard characters that match multiple files. This significantly improves extraction efficiency. You can configure the number of concurrent threads in the **Channel Control** section.
    

Yes

None

**parquetSchema**

This parameter is required only when you read Parquet files from OSS. It takes effect only when **fileFormat** is set to **parquet**. This parameter describes the data types in the Parquet file. Ensure that the configuration is in valid JSON format.

```
message MessageTypeName {
Required/Optional, Data type, Column name;
......................;
}
```

The format of \`parquetSchema\` is as follows:

-   MessageTypeName: Enter a name.
    
-   Required/Optional: \`required\` indicates that the field cannot be null. \`optional\` indicates that the field can be null. We recommend that you set all fields to \`optional\`.
    
-   Data type: Parquet files support BOOLEAN, Int32, Int64, Int96, FLOAT, DOUBLE, BINARY (use BINARY for string types), and fixed\_len\_byte\_array types.
    
-   Each row setting must end with a semicolon, including the last row.
    

The following is a configuration example.

```
"parquetSchema": "message m { optional int32 minute_id; optional int32 dsp_id; optional int32 adx_pid; optional int64 req; optional int64 res; optional int64 suc; optional int64 imp; optional double revenue; }"
```

No

None

column

The list of fields to read. \`type\` specifies the data type of the source data. \`index\` specifies the column number (starting from 0) in the text file. \`value\` specifies that the current type is a constant. The data for this column is not read from the source file but is automatically generated based on the \`value\`.

By default, you can read all data as the String type. The configuration is as follows.

```
"column": ["*"]
```

You can also specify the column field information. The configuration is as follows.

```
"column":
    {
       "type": "long",
       "index": 0    // Gets an int field from the first column of the OSS text file.
    },
    {
       "type": "string",
       "value": "alibaba"  // Generates a string field "alibaba" from within OSS Reader as the current field.
    }
```

**Note**

For the column information you specify, \`type\` is required. You must specify either \`index\` or \`value\`.

Yes

All data is read as the STRING type.

fileFormat

The file format of the source object in OSS. Valid values are \`csv\` and \`text\`. Both formats support custom delimiters.

Yes

csv

fieldDelimiter

The column delimiter used to read the file.

**Note**

When OSS Reader reads data, you must specify a column delimiter. If you do not specify one, the default is a comma (,). The comma is also the default value on the configuration page.

If the delimiter is not a visible character, enter its Unicode encoding. For example, \\u001b or \\u007c.

Yes

,

lineDelimiter

The row delimiter.

**Note**

This parameter is valid only when \`fileFormat\` is set to \`text\`.

No

None

compress

The compression format of the text file. The default value is empty, which means no compression. Supported formats are gzip, bzip2, and zip.

No

No compression

encoding

The encoding format of the source file.

No

utf-8

nullFormat

A text file cannot use a standard string to define a null pointer. Use \`nullFormat\` to define which strings represent null. For example:

-   If you configure `nullFormat:"null"`, data synchronization treats the string \`null\` in the source as a null field.
    
-   If you set `nullFormat:"\u0001"`, which is an invisible character, and the source data is the string "\\u0001", the data is treated as a null field.
    
-   If you do not set the `"nullFormat"` parameter, the source data is written to the destination as is, without any conversion.
    

No

None

skipHeader

Skips the header row in a CSV-like file. The default value is false. The skipHeader parameter is not supported for compressed files.

No

false

csvReaderConfig

The parameters for reading a CSV file. This is a map. The CsvReader is used to read CSV files. If you do not configure these parameters, default values are used.

No

None

### Writer script demo: General example

```
{
    "type":"job",
    "version":"2.0",
    "steps":[
        {
            "stepType":"stream",
            "parameter":{},
            "name":"Reader",
            "category":"reader"
        },
        {
            "stepType":"oss",// The plugin name.
            "parameter":{
                "nullFormat":"",// Defines the string that represents null.
                "dateFormat":"",// The date format.
                "datasource":"",// The data source.
                "writeMode":"",// The write mode.
                "writeSingleObject":"false", // Specifies whether to write the synchronized data to a single OSS file.
                "encoding":"",// The encoding format.
                "fieldDelimiter":",",// The column delimiter.
                "fileFormat":"",// The text file format.
                "object":""// The object prefix.
            },
            "name":"Writer",
            "category":"writer"
        }
    ],
    "setting":{
        "errorLimit":{
            "record":"0"// The number of error records.
        },
        "speed":{
            "throttle":true,// If throttle is set to false, the mbps parameter does not take effect, and the rate is not limited. If throttle is set to true, the rate is limited.
            "concurrent":1, // The number of concurrent jobs.
            "mbps":"12"// The rate limit. 1 mbps is equal to 1 MB/s.
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

### Writer script demo: Write ORC or Parquet files to OSS

You can write ORC or Parquet files to OSS by reusing the HDFS Writer. In addition to the existing OSS Writer parameters, you can use extended parameters such as Path and FileFormat. For more information about these parameters, see [HDFS Writer](/help/en/dataworks/hdfs-writer#concept-q3n-hdm-q2b).

The following examples show how to write ORC or Parquet files to OSS:

**Important**

The following code is for reference only. Modify the parameters according to your column names and data types. Do not copy the code directly.

-   Write an ORC file to OSS
    
    To write an ORC file, you must use the code editor. Set fileFormat to `orc`, set path to the path of the file to be written, and configure column in the format `{"name": "your column name", "type": "your column type"}`.
    
    The following ORC types are supported for writing:
    
    **Field type**
    
    **Offline write to OSS (ORC format)**
    
    TINYINT
    
    Support
    
    SMALLINT
    
    Support
    
    INT
    
    Support
    
    BIGINT
    
    Support
    
    FLOAT
    
    Support
    
    DOUBLE
    
    Supported
    
    TIMESTAMP
    
    Supported
    
    DATE
    
    Supported
    
    VARCHAR
    
    Support
    
    STRING
    
    Support
    
    CHAR
    
    Support
    
    BOOLEAN
    
    Support
    
    DECIMAL
    
    Support
    
    BINARY
    
    Support
    
    ```
    {
    "stepType": "oss",
    "parameter": {
    "datasource": "",
    "fileFormat": "orc",
    "path": "/tests/case61",
    "fileName": "orc",
    "writeMode": "append",
    "column": [
    {
    "name": "col1",
    "type": "BIGINT"
    },
    {
    "name": "col2",
    "type": "DOUBLE"
    },
    {
    "name": "col3",
    "type": "STRING"
    }
    ],
    "writeMode": "append",
    "fieldDelimiter": "\t",
    "compress": "NONE",
    "encoding": "UTF-8"
    }
    }
    ```
    
-   Write a Parquet file to OSS
    
    ```
    {
    "stepType": "oss",
    "parameter": {
    "datasource": "",
    "fileFormat": "parquet",
    "path": "/tests/case61",
    "fileName": "test",
    "writeMode": "append",
    "fieldDelimiter": "\t",
    "compress": "SNAPPY",
    "encoding": "UTF-8",
    "parquetSchema": "message test { required int64 int64_col;\n required binary str_col (UTF8);\nrequired group params (MAP) {\nrepeated group key_value {\nrequired binary key (UTF8);\nrequired binary value (UTF8);\n}\n}\nrequired group params_arr (LIST) {\nrepeated group list {\nrequired binary element (UTF8);\n}\n}\nrequired group params_struct {\nrequired int64 id;\n required binary name (UTF8);\n }\nrequired group params_arr_complex (LIST) {\nrepeated group list {\nrequired group element {\n required int64 id;\n required binary name (UTF8);\n}\n}\n}\nrequired group params_complex (MAP) {\nrepeated group key_value {\nrequired binary key (UTF8);\nrequired group value {\nrequired int64 id;\n required binary name (UTF8);\n}\n}\n}\nrequired group params_struct_complex {\nrequired int64 id;\n required group detail {\nrequired int64 id;\n required binary name (UTF8);\n}\n}\n}",
    "dataxParquetMode": "fields"
    }
    }
    ```
    

### Writer script parameters

**Parameter**

**Description**

**Required**

**Default value**

datasource

The name of the data source. The value of this parameter must be the same as the name of the data source that you add in the code editor.

Yes

None

object

The name of the file to be written to OSS. OSS uses file names to simulate a directory structure. OSS has the following limits on object names:

-   If you set `"object": "datax"`, the written object name starts with \`datax\` and has a random string appended.
    
-   If you set `"object": "cdo/datax"`, the written object name starts with `/cdo/datax` and has a random string appended. The forward slash (/) is used as a directory separator in OSS.
    

If you do not want a random UUID appended, set `"writeSingleObject" : "true"`. For more information, see the description of writeSingleObject.

Yes

None

ossBlockSize

The size of each data block in MB. The default value is 16. This parameter is supported only when the \`fileFormat\` is parquet or ORC. You can configure this parameter at the same level as the object parameter.

Because multipart upload in OSS supports a maximum of 10,000 blocks, the default single file size is limited to 160 GB. If the number of blocks exceeds the limit, you can increase the block size to support larger file uploads.

No

16

writeMode

Specifies how to handle existing data before writing:

-   truncate: Clears all objects that match the object name prefix before writing. For example, if you set `"object":"abc"`, all objects starting with \`abc\` are cleared.
    
-   append: No processing is performed before writing. OSS Writer directly writes data using the object name and appends a random UUID to ensure that file names do not conflict. For example, if you specify the object name as \`DataIntegration\`, the actual written name is DI\_\*\*\*\*\_\*\*\*\*\_\*\*\*\*.
    
-   nonConflict: If an object with a matching prefix exists in the specified path, an error is reported. For example, if you set `"object":"abc"` and an object named \`abc123\` exists, an error is reported.
    

Yes

None

writeSingleObject

Specifies whether to write data to a single file:

-   true: Writes data to a single file. If no data is read, no empty file is created.
    
-   false: Writes data to multiple files. If no data is read and a file header is configured, an empty file containing only the header is created. Otherwise, only an empty file is created.
    

**Note**

-   When you write data in ORC or Parquet format, the \`writeSingleObject\` parameter does not take effect. This means you cannot use this parameter to write to a single ORC or Parquet file in a multi-concurrent scenario. To write to a single file, you can set the concurrency to 1. However, a random suffix will be added to the file name, and setting the concurrency to 1 will affect the speed of the sync task.
    
-   In some scenarios, such as when the source is Hologres, data is read by shard. Even with a single concurrency, multiple files may still be generated.
    

No

false

fileFormat

The format of the object file. The following formats are supported:

-   csv: Only strict csv format is supported. If the data to be written includes a column delimiter, it will be escaped according to the csv escape syntax. The escape character is a double quotation mark (").
    
-   text: Simply splits the data to be written using the column delimiter. No escaping is performed if the data includes the column delimiter.
    
-   parquet: If you use this file type, you must add the \`parquetSchema\` parameter to define the data types.
    
    **Important**
    
    -   To write data in Parquet format, you must switch to the code editor and configure \`parquetSchema\`. For a configuration example, see [Appendix: Script demos and parameter descriptions](#section-fm1-ncw-6r8).
        
    -   If you do not configure \`parquetSchema\`, DataWorks converts the data types based on the source field types according to a specific policy. For more information about the conversion policy, see [Appendix: Conversion policy for Parquet data types](#section-mpy-610-gdt).
        
    
-   ORC: If you use this format, you must switch to the code editor.
    

No

text

compress

The compression format of the object file written to OSS. This parameter must be configured in the code editor.

**Important**

CSV and TEXT file types do not support compression. Parquet and ORC files only support SNAPPY compression.

No

None

fieldDelimiter

The column delimiter.

No

,

encoding

Configure the file encoding.

No

utf-8

**parquetSchema**

This parameter is required when you write data to a Parquet file in OSS. It describes the structure of the object file. This parameter takes effect only when **fileFormat** is set to **parquet**. The format is as follows.

```
message MessageTypeName {
Required/Optional, Data type, Column name;
......................;
}
```

The configuration items are as follows:

-   MessageTypeName: Enter a name.
    
-   Required/Optional: \`required\` indicates that the field cannot be null. \`optional\` indicates that the field can be null. We recommend that you set all fields to \`optional\`.
    
-   Data type: Parquet files support BOOLEAN, INT32, INT64, INT96, FLOAT, DOUBLE, BINARY (use BINARY for string types), and FIXED\_LEN\_BYTE\_ARRAY types.
    

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

nullFormat

A text file cannot use a standard string to define a null pointer. Use nullFormat to define the string that represents null. For example, if you set `nullFormat="null"` and the source data is `null`, the data is treated as a null field.

No

None

header

The header of the object file. Example: `["id", "name", "age"]`.

No

None

maxFileSize (Advanced configuration. This parameter is not supported in the codeless UI.)

The maximum size of a single object file in MB. The default value is 10,000 × 10 MB. This is similar to controlling the size of log files in log4j. When using multipart upload in OSS, each block is 10 MB (which is also the minimum granularity for log file rotation, meaning a \`maxFileSize\` less than 10 MB is treated as 10 MB). Each OSS InitiateMultipartUploadRequest supports a maximum of 10,000 blocks.

When rotation occurs, the object name is formed by appending suffixes such as \_1, \_2, \_3 to the original object prefix with a random UUID.

**Note**

-   The default unit is MB.
    
-   Example configuration: "maxFileSize":300 sets the single file size to 300 MB.
    
-   `maxFileSize` is effective only for \`csv\` and \`text\` formats. It is calculated at the memory level of the sync task process and cannot precisely control the actual size of the destination file. The actual file size at the destination may exceed the expected size due to data bloat.
    

No

100,000

suffix (Advanced configuration. This parameter is not supported in the codeless UI.)

The suffix of the generated file name. For example, if you set suffix to .csv, the final file name will be fileName\*\*\*\*.csv.

No

None

## Appendix: Conversion policy for Parquet data types

If you do not configure the \`parquetSchema\` parameter, DataWorks converts the data types of source fields based on the following policy.

**Converted data type**

**Parquet type**

**Parquet logical type**

CHAR / VARCHAR / STRING

BINARY

UTF8

BOOLEAN

BOOLEAN

Not applicable

BINARY / VARBINARY

BINARY

Not applicable

DECIMAL

FIXED\_LEN\_BYTE\_ARRAY

DECIMAL

TINYINT

INT32

INT\_8

SMALLINT

INT32

INT\_16

INT/INTEGER

INT32

Not applicable

BIGINT

INT64

Not applicable

FLOAT

FLOAT

Not applicable

DOUBLE

DOUBLE

Not applicable

DATE

INT32

DATE

TIME

INT32

TIME\_MILLIS

TIMESTAMP/DATETIME

INT96

Not applicable
