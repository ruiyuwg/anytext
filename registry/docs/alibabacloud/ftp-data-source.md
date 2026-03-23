The FTP data source provides a bidirectional channel for reading data from and writing data to FTP servers. This topic describes the data synchronization capabilities of the FTP data source in DataWorks.

## Limits

FTP Reader reads data from remote FTP files and converts the data into the format required by the data synchronization protocol. Because remote FTP files are inherently unstructured, FTP Reader supports the following features for data synchronization:

**Support**

**Unsupported**

-   Reads only TXT files. The schema in the TXT files must be a two-dimensional table.
    
-   Supports CSV-like files with custom separators.
    
-   Supports reading multiple data types (represented as STRING), column pruning, and column constants.
    
-   Supports recursive reads and file name filtering.
    
-   Supports text compression. The supported compression formats are gzip, bzip2, zip, lzo, and lzo\_deflate.
    
-   Supports concurrent reads from multiple files.
    

-   Multi-threaded concurrent reads from a single file. This involves an internal chunking algorithm for a single file.
    
-   Multi-threaded concurrent reads from a single compressed file are not technically supported.
    

FTP Writer converts data from the format required by the data integration protocol and writes the data to FTP files. Because FTP files are inherently unstructured, FTP Writer supports the following features:

**Support**

**Unsupported**

-   Writes only text files. BLOB data, such as video data, is not supported. The schema in the text files must be a two-dimensional table.
    
-   Supports CSV-like and TEXT file formats with custom separators.
    
-   Supports multi-threaded writes. Each thread writes to a different sub-file.
    

-   Concurrent writes to a single file are not supported.
    
-   FTP does not provide data types. FTP Writer writes all data to FTP files as the STRING type.
    
-   Text compression is not supported when writing data.
    

## Supported field types

Remote FTP files do not have native data types. Therefore, the field types listed in this section are defined by DataX FtpReader.

**DataX internal type**

**Remote FTP file data type**

LONG

LONG

DOUBLE

DOUBLE

STRING

STRING

BOOLEAN

BOOLEAN

DATE

DATE

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

## Develop a data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Configuration guide for a single-table offline synchronization task

-   For more information, see [Configure a sync task in codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Configure a sync task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For a script demo and parameter descriptions for configuring a task in the code editor, see [Appendix: Script demo and parameter description](#section-9xh-37k-nvq).
    

## Appendix: Script demo and parameter description

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader script demo

```
{
    "type":"job",
    "version":"2.0",// The version number.
    "steps":[
        {
            "stepType":"ftp",// The plugin name.
            "parameter":{
                "path":[],// The file path.
                "nullFormat":"",// The null value.
                "compress":"",// The compression format.
                "datasource":"",// The data source.
                "column":[// The fields.
                    {
                        "index":0,// The serial number.
                        "type":""// The field type.
                    }
                ],
                "skipHeader":"",// Specifies whether the file contains a table header.
                "fieldDelimiter":",",// The column delimiter.
                "encoding":"UTF-8",// The encoding format.
                "fileFormat":"csv"// The text file type.
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
            "record":"0"// The number of error records.
        },
        "speed":{
        "throttle":true,// If you set throttle to false, the mbps parameter does not take effect and no rate limit is imposed. If you set throttle to true, a rate limit is imposed.
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

### Reader script parameters

**Parameter**

**Description**

**Required**

**Default value**

datasource

The name of the data source. The code editor supports adding data sources. The value of this parameter must be the same as the name of the added data source.

Yes

None

path

The path and name of the file in the remote FTP file system. Specify the full path that includes the file name and extension. You can specify multiple paths.

-   If you specify a single remote FTP file, FTP Reader can only use a single thread to extract data. In later versions, multi-threaded concurrent reads from a single uncompressed file will be supported.
    
-   If you specify multiple remote FTP files, FTP Reader supports multi-threaded data extraction. The number of concurrent threads is specified by the number of channels.
    
-   If you specify a wildcard character, FTP Reader traverses and finds multiple files. For example, if you specify \`/\`, all files in the root directory are read. If you specify \`/bazhen/\`, all files in the downstream bazhen directory are read. FTP Reader supports only the asterisk (\*) as a file wildcard character. You can use [scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters#concept-t2q-jmq-p2b) to flexibly configure file names and paths.
    

**Note**

-   We recommend that you do not use the asterisk (\*) because it may cause a Java Virtual Machine (JVM) memory overflow error.
    
-   Data synchronization treats all text files that are synchronized in a job as a single data table. You must make sure that all files can be adapted to the same schema.
    
-   You must make sure that the files to be read are in a CSV-like format and that the data synchronization system has read permissions on the files.
    
-   If no matching files are found in the path specified by the path parameter, the synchronization task reports an error.
    

Yes

None

column

The list of fields to read. type specifies the type of the source data. index specifies the column number of the field in the text file. The value of index starts from 0. value specifies that the current field is a constant. Data is not read from the source file. Instead, the corresponding column is automatically generated based on the value of value.

By default, you can read all data as the STRING type by setting the parameter to `"column":["*"]`. You can also specify the column field information. The following code shows an example.

```
{
    "type": "long",
    "index": 0    // Obtains a LONG field from the first column of the remote FTP text file.
  },
  {
    "type": "string",
    "value": "alibaba"  // Generates a string field named alibaba from within FTP Reader to use as the current field.
  }
```

For the column information that you specify, type is required. You must specify either index or value.

Yes

None

fieldDelimiter

The field separator for reading data.

**Note**

When FTP Reader reads data, you must specify a field separator. If you do not specify this parameter, the default value (,) is used. The UI also uses (,) as the default value.

Yes

,

skipHeader

CSV-like files may have a header row that needs to be skipped. By default, the header row is not skipped. skipHeader is not supported for compressed files.

No

false

encoding

The encoding format of the files to be read.

No

utf-8

nullFormat

In text files, you cannot use a standard string to define a null pointer. Data synchronization provides the nullFormat parameter to define which strings can represent null. For example:

-   If you set nullFormat:"null", which is equivalent to a printable character, and the source data is `null`, data synchronization treats it as a null field.
    
-   If you set `nullFormat:"\u0001"`, which is equivalent to a non-printable character, and the source data is the string \`"\\u0001"\`, data synchronization treats it as a null field.
    
-   If you do not specify the `"nullFormat"` parameter, which is equivalent to not configuring it, the source data is written to the destination as is without any conversion.
    

No

None

markDoneFileName

The name of the mark file. Before data synchronization, the system checks for the mark file. If the mark file does not exist, the system waits for a period of time and then checks again. If the mark file is found, the synchronization task starts.

No

None

maxRetryTime

The number of retries to check for the mark file. The default value is 60. The retry interval is 1 minute. The total duration is 60 minutes.

No

60

csvReaderConfig

The parameter settings for reading CSV files. This parameter is of the Map type. CsvReader is used to read CSV files and has many configuration options. If you do not configure this parameter, the default values are used.

No

None

fileFormat

The type of file to read. By default, files are read as CSV files, and the content is parsed into a logical two-dimensional table structure. If you set this parameter to binary, the file is copied and transferred in a pure binary format.

This parameter is typically used for peer-to-peer replication of directory structures between storage systems such as FTP and OSS. You usually do not need to configure this parameter.

No

None

### Writer script demo

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
            "stepType":"ftp",// The plugin name.
            "parameter":{
                "path":"",// The file path.
                "fileName":"",// The file name.
                "nullFormat":"null",// The null value.
                "dateFormat":"yyyy-MM-dd HH:mm:ss",// The time format.
                "datasource":"",// The data source.
                "writeMode":"",// The write mode.
                "fieldDelimiter":",",// The column delimiter.
                "encoding":"",// The encoding format.
                "fileFormat":""// The text file type.
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
            "throttle":true,// If you set throttle to false, the mbps parameter does not take effect and no rate limit is imposed. If you set throttle to true, a rate limit is imposed.
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

### Writer script parameters

**Parameter**

**Description**

**Required**

**Default value**

datasource

The name of the data source. The code editor supports adding data sources. The value of this parameter must be the same as the name of the added data source.

Yes

None

timeout

The connection timeout period for connecting to the FTP server. Unit: milliseconds.

No

60,000 (1 minute)

path

The path in the FTP file system. FTP Writer writes multiple files to the directory specified by path.

Yes

None

fileName

The name of the file to be written by FTP Writer. A random suffix is added to this file name to create the actual file name for each write thread.

Yes

None

**singleFileOutput**

The file name written by FtpWriter is controlled by fileName. By default, a random suffix is added to create the actual file name for each write thread. If you do not want the random suffix to be added, you can set singleFileOutput to true. The output file name will be the complete file name that you specify.

No

false

writeMode

The data cleanup mode before FTP Writer writes data:

-   truncate: If singleFileOutput is true, files with the same name in the directory are cleared before writing. If singleFileOutput is false, all files with the fileName prefix in the directory are cleared before writing.
    
-   append: No processing is performed before writing. Data Integration FTP Writer directly writes data using fileName and ensures that file names do not conflict.
    
-   nonConflict: If a file with the fileName prefix exists in the directory, an error is reported.
    

Yes

None

fieldDelimiter

The field separator for writing data.

Yes, single character

None

skipHeader

CSV-like files may have a header row that needs to be skipped. By default, the header row is not skipped. skipHeader is not supported for compressed files.

No

false

compress

Supports gzip and bzip2 compression formats.

No

No compression

encoding

You can read the encoding configuration of the file.

No

utf-8

nullFormat

In text files, you cannot use a standard string to define a null pointer. Data Integration provides the nullFormat parameter to define how null values are represented.

For example, if you set nullFormat="null" and the source data is a null pointer, Data Integration serializes it into the literal string `null` (four characters).

No

None

dateFormat

The format used to serialize date-type data into a file. Example: "dateFormat":"yyyy-MM-dd".

No

None

fileFormat

The format for writing the file. Valid values are CSV and TEXT. CSV is a strict CSV format. If the data to be written contains the column delimiter, it is escaped according to CSV escape syntax. The escape character is a double quotation mark ("). TEXT format simply separates the data to be written with the column delimiter and does not perform escaping if the data contains the delimiter.

No

TEXT

header

header: The header of the text file (including CSV, TEXT, etc.) to be written. The code editor supports configuring header information. For example, "header":\["id","name","age"\] specifies that id, name, and age are written as the header in the first row of the FTP file.

No

None

markDoneFileName

-   The name of the mark file. After the synchronization task is complete, a mark file is generated. This file indicates whether the synchronization task was successful. You must configure this parameter with an absolute path.
    
-   In an offline auto triggered task scenario, we recommend that you include [scheduling parameters](/help/en/dataworks/user-guide/supported-formats-of-scheduling-parameters) in the mark file name. For example, you can set the mark file name to \`/user/ftp/markDone\_${bizdate}.txt\`, where \`${bizdate}\` is a scheduling parameter.
    

No

None
