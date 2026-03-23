Amazon S3 (Simple Storage Service) is an object storage service that lets you store and retrieve any amount of data from anywhere. DataWorks Data Integration supports reading data from and writing data to Amazon S3. This topic describes the features of the Amazon S3 data source.

## Limitations

### **Batch Read**

Amazon S3 is an unstructured data storage service. The Amazon S3 Reader in Data Integration supports the following features.

**Supported**

**Unsupported**

-   Supports reading files in `TXT` format only. The file must contain a schema that represents a two-dimensional table.
    
-   Supports CSV-like files with custom delimiters.
    
-   Supports `ORC` and `PARQUET` formats.
    
-   Supports reading multiple data types as strings, column pruning, and constant columns.
    
-   Supports recursive reading and filename filtering.
    
-   Supports text compression by using `gzip`, `bzip2`, and `zip`.
    
    **Note**
    
    Compressed archives that contain multiple files are not supported.
    
-   Supports concurrent reading of multiple `Objects`.
    

-   Multi-threading for reading a single `Object` is not supported.
    
-   Multi-threading for reading a single compressed `Object` is not supported.
    
-   A single `Object` cannot exceed 100 GB.
    

### **Batch Write**

The Amazon S3 Writer converts data from the Data Synchronization protocol into text files in Amazon S3. Since Amazon S3 is an unstructured data storage service, the Amazon S3 Writer supports the following features.

Supported

Unsupported

-   Supports writing only text files. BLOB data such as videos and images is not supported. The text file must contain a schema that represents a two-dimensional table.
    
-   Supports CSV-like files with custom delimiters.
    
-   Supports ORC and PARQUET formats.
    
    **Note**
    
    In Script Mode, the SNAPPY compression format is supported.
    
-   Supports multi-threading for writing, where each thread writes to a different sub-file.
    
-   When a file exceeds a specified size, the writer creates a new file.
    

-   Concurrent writing to a single file is not supported.
    
-   Amazon S3 does not have native data types. The Amazon S3 Writer writes all data as the `STRING` type to Amazon S3 Objects.
    
-   Writing to Amazon S3 buckets that use the **Glacier Deep Archive** storage class is not supported.
    
-   A single Object cannot exceed 100 GB.
    

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

## Develop a data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Configure a single-table batch synchronization task

-   For the procedure, see [Configure a task in the codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For all parameters and a script example for configuring a task in Script Mode, see [Appendix: Script examples and parameter descriptions](#section-xru-lsu-9gk) later in this topic.
    

## Appendix: Script examples and parameter descriptions

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader script example

```
{
    "type":"job",
    "version":"2.0",// The version number.
    "steps":[
        {
            "stepType":"s3",// The plugin name.
            "parameter":{
                "nullFormat":"",// Defines the string that represents a null value.
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
                "skipHeader":"",// Skips the header of a CSV-like file.
                "encoding":"",// The encoding format.
                "fieldDelimiter":",",// The field delimiter.
                "fileFormat": "",// The text file type.
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
            "record":""// The number of error records allowed.
        },
        "speed":{
            "throttle":true,// Specifies whether to enable rate limiting. If this parameter is set to false, the mbps parameter is ignored.
            "concurrent":1, // The number of concurrent jobs.
            "mbps":"12"// The maximum transfer rate in MB/s. Note: In this context, 1 mbps is equal to 1 MB/s.
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

**Default Value**

**datasource**

The name of the data source. In Script Mode, the value for this parameter must match the name of the data source that you add.

Yes

None

**object**

The S3 Object or Objects to read. You can specify multiple Objects. For example, if a bucket contains a folder named \`test\` with a file named ll.txt, set the object value to test/ll.txt.

-   When you specify a single S3 Object, the Amazon S3 Reader uses a single thread to extract data.
    
-   When you specify multiple S3 Objects, the Amazon S3 Reader uses multiple threads to extract data. The number of concurrent threads is determined by the concurrent parameter.
    
-   When you use a wildcard, the Amazon S3 Reader attempts to find and traverse multiple Objects. For example, \`abc\*\[0-9\]\` matches \`abc0\`, \`abc1\`, `abc2`, and \`abc3\`. We do not recommend that you use wildcards because this may cause memory overflow errors.
    

**Note**

-   The data synchronization system treats all Objects in a single job as one data table. You must ensure that all Objects share the same schema.
    
-   Limit the number of files in a single directory to prevent potential OutOfMemoryError issues. If you encounter this error, split the files into different directories and try again.
    

Yes

None

**column**

The list of fields to read. `type` specifies the data type in the source. `index` specifies the column position (starting from 0) in the text file. \`value\` specifies a constant value for the column. The value is automatically generated instead of being read from the source file.

By default, you can read all data as the string type. The configuration is as follows:

```
"column": ["*"]
```

You can also specify detailed column information. The configuration is as follows:

```
"column":    
{       
"type": "long",       
"index": 0 // Reads an integer from the first column of the S3 text file.
},    
{       
"type": "string",       
"value": "alibaba" // Generates a constant string "alibaba" as the value for this column.
}
```

**Note**

When you specify column information, the `type` parameter is required. You must specify either `index` or `value`.

Yes

All columns are read as the STRING type.

**fieldDelimiter**

The delimiter that is used to separate fields.

**Note**

You must specify a field delimiter for the Amazon S3 Reader. If a field delimiter is not specified, a comma (,) is used by default. This default value is also pre-filled in the UI.

If the delimiter is not a visible character, use its Unicode representation. For example, you can use \\u001b or \\u007c.

Yes

, (comma)

**compress**

The text compression type. By default, this parameter is empty, which indicates that no compression is used. The following compression types are supported: gzip, bzip2, and zip.

No

None

**encoding**

The encoding format of the source files.

No

UTF-8

**nullFormat**

A text file cannot use a standard string to represent a null value. You can use the nullFormat parameter to define a string that represents a null value. For example, if you set `nullFormat="null"`, the source data `"null"` is considered a null field.

No

None

**skipHeader**

For CSV-like files, you can use the **skipHeader** parameter to specify whether to skip the header row.

-   true: The header row is skipped during data synchronization.
    
-   false: The header row is read as a data row during data synchronization.
    

**Note**

You cannot use the **skipHeader** parameter for compressed files.

No

false

**csvReaderConfig**

The advanced settings for reading CSV files. This parameter is of the map type. If this parameter is not configured, the default settings of CsvReader are used.

No

None

### Writer script example

```
{
    "type": "job",
    "version": "2.0",
    "steps": [
        {
            "stepType": "stream",
            "parameter": {},
            "name": "Reader",
            "category": "reader"
        },
        {
            "stepType": "s3",
            "category": "writer",
            "name": "Writer",
            "parameter": {
                "datasource": "datasource1",
                "object": "test/csv_file.csv",
                "fileFormat": "csv",
                "encoding": "utf8/gbk/...",
                "fieldDelimiter": ",",
                "lineDelimiter": "\n",
                "column": [
                    "0",
                    "1"
                ],
                "header": [
                    "col_bigint",
                    "col_tinyint"
                ],
                "writeMode": "truncate",
                "writeSingleObject": true
            }
        }
    ],
    "setting": {
        "errorLimit": {
            "record": "" // The number of error records allowed.
        },
        "speed": {
            "throttle": true, // Specifies whether to enable rate limiting. If this parameter is set to false, the mbps parameter is ignored.
            "concurrent": 1, // The number of concurrent jobs.
            "mbps": "12" // The maximum transfer rate in MB/s. Note: In this context, 1 mbps is equal to 1 MB/s.
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

**Default Value**

**datasource**

The name of the data source. In Script Mode, the value for this parameter must be the same as the name of the data source that you add.

Yes

None

**object**

The name of the destination object.

Yes

None

**fileFormat**

The file format. The following formats are supported:

-   csv: Only the standard CSV format is supported. If the data to be written contains the column delimiter, the writer escapes the data with double quotation marks (").
    
-   text: a simple text format in which columns are separated by the specified delimiter. The writer does not use an escape character if the data contains the delimiter.
    
-   PARQUET
    
-   ORC
    

Yes

text

**writeMode**

-   truncate: Before writing data, the system deletes all existing Objects that have the specified object prefix. For example, if you set `"object":"abc"`, the writer deletes all Objects whose names start with \`abc\`.
    
-   append: Before writing data, the system does not process existing data. The S3 Writer directly writes data to the specified Object and appends a random universally unique identifier (UUID) suffix to ensure that the file name is unique. For example, if you specify \`dataintegration\` as the Object name, the actual file name is similar to \`DI\_xxxx\_xxxx\_xxxx\`.
    
-   nonConflict: If an Object with a matching prefix exists in the specified path, the job fails and an error is reported. For example, if you set `"object":"abc"` and an Object named \`abc123\` already exists, the job fails.
    

Yes

append

**fieldDelimiter**

The delimiter that is used to separate fields in the output file.

No

, (comma)

**lineDelimiter**

The delimiter that is used to separate lines in the output file.

No

\\n (newline character)

**compress**

The text compression type. By default, this parameter is empty, which indicates that no compression is used.

-   If you set \`fileFormat\` to \`text\` or \`csv\`, GZIP and BZIP2 are supported.
    
-   If you set \`fileFormat\` to \`PARQUET\` or \`ORC\`, you can use \`SNAPPY\` compression.
    

No

None

**nullFormat**

A text file cannot use a standard string to represent a null value. You can use the `nullFormat` parameter to define a string that represents a null value. For example, if you set `nullFormat="null"` and the source data is null, the system writes the string "null" to the file.

No

None

**header**

The header row to be written to the file. Example: `["id", "name", "age"]`.

No

None

**writeSingleObject**

Specifies whether to write data to a single file. Valid values: \`true\` and \`false\`.

**Note**

-   When you write data in the ORC or PARQUET format, the \`writeSingleObject\` parameter does not take effect. Even if you use this parameter, you cannot write data to a single ORC or PARQUET file in a high-concurrency scenario. To write data to a single file, you can set the number of concurrent threads to 1. However, the writer still adds a random suffix to the file name. Setting the number of concurrent threads to 1 also affects the synchronization speed.
    
-   In some scenarios, for example, when the source is a Hologres source, the reader reads data by shard. This may result in multiple output files even if the number of concurrent threads is 1.
    

No

false

**encoding**

The encoding format of the output file.

No

UTF-8

**column**

The column configuration of the output file.

-   If \`fileFormat\` is \`csv\` or \`text\`, \`column\` can be configured with numeric placeholders. Example:
    
    ```
    "column":[
     "0",
     "1"
     ]
    ```
    
-   If \`fileFormat\` is \`PARQUET\` or \`ORC\`, you must specify the \`name\` and \`type\` for each column. Example:
    
    ```
    "column": [
      {
        "name": "col1",
        "type": "BIGINT"
      },
      {
        "name": "col2",
        "type": "DOUBLE"
      }
    ]
    ```
    

Yes

None
