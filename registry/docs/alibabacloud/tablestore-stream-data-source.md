Tablestore is a NoSQL data storage service built on the Alibaba Cloud Apsara Distributed File System. The Tablestore data source provides a bidirectional channel to read data from and write data to Tablestore. This topic describes the data synchronization capabilities that DataWorks provides for Tablestore.

## Limits

-   The Tablestore Reader and Writer plugins enable you to read data from and write data to Tablestore. These plugins provide two data access methods, **row mode** and **column mode**, for wide tables and time series tables.
    
    -   **Column mode**: In the Tablestore multi-version model, data in a table is organized into a three-level model: **Row** > **Column** > **Version**. A row can have any number of columns, and the column names are not fixed. Each column can have multiple versions, and each version has a specific timestamp (version number). In column mode, data to be read is in a four-tuple format that consists of the primary key value, column name, timestamp, and column value. Data to be written is also in a four-tuple format that consists of the primary key value, column name, timestamp, and column value.
        
    -   **Row mode**: In this mode, each updated record is exported as a row in the (primary key value, column value) format.
        
        In row mode, each row of data corresponds to a record in the Tablestore table. Data written in row mode includes primary key column values and attribute column values.
        
-   Tablestore columns consist of primary key columns (primaryKey) and attribute columns (column). The order of the source columns must match the order of the primary key columns and attribute columns in the destination Tablestore table. Otherwise, a column mapping error occurs.
    
-   The Tablestore Reader divides the data range to be read from a table into N tasks, where N is the concurrency level for data synchronization. Each task is executed by a Tablestore Reader thread.
    

## Supported field types

The Tablestore Reader and Tablestore Writer support all Tablestore data types. The following table lists the data type mappings.

**Type category**

**Tablestore data type**

Integer

INTEGER

Floating-point

DOUBLE

String

STRING

Boolean

BOOLEAN

Binary

BINARY

**Note**

-   Tablestore does not support date types. The application layer typically uses the Long type to store UNIX timestamps.
    
-   You must configure data of the INTEGER type as INT in the code editor. DataWorks then converts it to the INTEGER type. If you configure the type as INTEGER directly, an error is reported in the log and the task fails.
    

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

## Develop a data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Single-table offline synchronization task configuration guide

-   For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For all parameters and a script demo for the code editor, see [Appendix II: Writer script demo and parameter description](#section-sqo-4my-lkx).
    

## Appendix I: Reader script demo and parameter description

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader script demo

#### **Row mode read configuration for wide tables**

```
{
    "type":"job",
    "version":"2.0",// The version number.
    "steps":[
        {
            "stepType":"ots",// The plugin name.
            "parameter":{
                "datasource":"",// The data source.
                "newVersion":"true",// Use the new version of otsreader.
                "mode": "normal",// Read data in row mode.
                "isTimeseriesTable":"false",// Configure the table as a wide table (not a time series table).
                "column":[// The fields.
                    {
                        "name":"column1"// The field name.
                    },
                    {
                        "name":"column2"
                    },
                    {
                        "name":"column3"
                    },
                    {
                        "name":"column4"
                    },
                    {
                        "name":"column5"
                    }
                ],
                "range":{
                    "split":[
                        {
                            "type":"STRING",
                            "value":"beginValue"
                        },
                        {
                            "type":"STRING",
                            "value":"splitPoint1"
                        },
                        {
                            "type":"STRING",
                            "value":"splitPoint2"
                        },
                        {
                            "type":"STRING",
                            "value":"splitPoint3"
                        },
                        {
                            "type":"STRING",
                            "value":"endValue"
                        }
                    ],
                    "end":[
                        {
                            "type":"STRING",
                            "value":"endValue"
                        },
                        {
                            "type":"INT",
                            "value":"100"
                        },
                        {
                            "type":"INF_MAX"
                        },
                        {
                            "type":"INF_MAX"
                        }
                    ],
                    "begin":[
                        {
                            "type":"STRING",
                            "value":"beginValue"
                        },
                        {
                            "type":"INT",
                            "value":"0"
                        },
                        {
                            "type":"INF_MIN"
                        },
                        {
                            "type":"INF_MIN"
                        }
                    ]
                },
                "table":""// The table name.
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
            "throttle":true,// false indicates no throttling. The throttling speed below does not take effect. true indicates throttling.
            "concurrent":1, // The job concurrency.
            "mbps":"12"// The throttling speed.
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

#### **Row mode read configuration for time series tables**

```
{
    "type":"job",
    "version":"2.0",// The version number.
    "steps":[
        {
            "stepType":"ots",// The plugin name.
            "parameter":{
                "datasource":"",// The data source.
                "table": "",// The table name.
                // To read time series data, mode must be set to normal.
                "mode": "normal",
                // To read time series data, newVersion must be set to true.
                "newVersion": "true",
                // Configure the table as a time series table.
                "isTimeseriesTable":"true",
                // measurementName: The name of the measurement from which to read time series data. This parameter is optional. If left empty, data is read from the entire table.
                "measurementName":"measurement_1",
                "column": [
                  {
                    "name": "_m_name"
                  },
                  {
                    "name": "tagA",
                    "is_timeseries_tag":"true"
                  },
                  {
                    "name": "double_0",
                    "type":"DOUBLE"
                  },
                  {
                    "name": "string_0",
                    "type":"STRING"
                  },
                  {
                    "name": "long_0",
                    "type":"INT"
                  },
                  {
                    "name": "binary_0",
                    "type":"BINARY"
                  },
                  {
                    "name": "bool_0",
                    "type":"BOOL"
                  },
                  {
                    "type":"STRING",
                    "value":"testString"
                  }
                ]
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
            "throttle":true,// false indicates no throttling. The throttling speed below does not take effect. true indicates throttling.
            "concurrent":1, // The job concurrency.
            "mbps":"12"// The throttling speed.
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

#### **Column mode read configuration for wide tables**

```
{
    "type":"job",
    "version":"2.0",// The version number.
    "steps":[
        {
            "stepType":"ots",// The plugin name.
            "parameter":{
                "datasource":"",// The data source.
                "table":"",// The table name.
                "newVersion":"true",// The new version of otsreader.
                "mode": "multiversion",// The multi-version mode.
                "column":[// The names of the columns to export. They must be attribute columns.
                    {"name":"mobile"},
                    {"name":"name"},
                    {"name":"age"},
                    {"name":"salary"},
                    {"name":"marry"}
                ],
                "range":{// The range to export.
                    "begin":[
                        {"type":"INF_MIN"},
                        {"type":"INF_MAX"}
                    ],
                    "end":[
                        {"type":"INF_MAX"},
                        {"type":"INF_MIN"}
                    ],
                    "split":[
                    ]
                },

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
            "throttle":true,// false indicates no throttling. The throttling speed below does not take effect. true indicates throttling.
            "concurrent":1, // The job concurrency.
            "mbps":"12"// The throttling speed.
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

### Reader script general parameter configuration

**Parameter**

**Description**

**Required**

**Default value**

endpoint

The endpoint of the Tablestore server. For more information, see [Endpoints](/help/en/tablestore/product-overview/endpoints).

Yes

None

accessId

The AccessKey ID for Tablestore.

Yes

None

accessKey

The AccessKey secret for Tablestore.

Yes

None

instanceName

The name of the Tablestore instance. An instance is an entity that you use to manage Tablestore services.

After you activate Tablestore, you must create an instance in the console. Then, you can create and manage tables in the instance.

An instance is the basic unit for resource management in Tablestore. Access control and resource metering for applications are performed at the instance level.

Yes

None

table

The name of the table from which to read data. You can specify only one table. Tablestore does not support synchronizing multiple tables.

Yes

None

newVersion

The version of the Tablestore Reader plugin to use.

-   false: Uses the legacy Tablestore Reader, which only supports **row mode** for reading **wide tables**.
    
-   true: The new version of the Tablestore Reader supports **row mode**, **column mode**, **time series tables**, and **wide tables**.
    

The new version of Tablestore Reader supports new features and consumes fewer system resources. We recommend that you use the new version of Tablestore Reader.

The new plugin is compatible with the configuration of the old plugin. This means that an old task can run as expected after you add the newVersion=true configuration.

No

false

mode

The mode for reading data. The following modes are supported:

-   normal: Reads data in row mode. The data format is {primary key column value, attribute column value}.
    
-   multiVersion: Reads data in column mode. The data format is {primary key column, attribute column name, timestamp, value of the attribute column}.
    

This parameter takes effect only when newVersion:true is configured.

The old version of Tablestore Reader ignores the mode configuration and supports only row mode.

No

normal

isTimeseriesTable

Specifies whether the data table is a time series data table.

-   false: The data table is a normal wide table.
    
-   true: The data table is a time series data table.
    

This parameter takes effect only when newVersion:true & mode:normal is configured.

The old version of Tablestore Reader does not support time series tables. Time series tables cannot be read in column mode.

No

false

### Reader script additional parameter configuration

Tablestore Reader supports reading from wide tables in row mode, reading from time series tables in row mode, and reading from wide tables in column mode. The following sections describe the additional configurations for each mode.

#### **Row mode read parameters for wide tables**

**Parameter**

**Description**

**Required**

**Default value**

column

The set of column names to synchronize from the configured table. Use a JSON array to describe the field information. Because Tablestore is a NoSQL system, you must specify the field names when Tablestore Reader reads data.

-   Supports reading normal columns, such as {"name":"col1"}.
    
-   Supports reading a subset of columns. If you do not configure a column, Tablestore Reader does not read it.
    
-   Supports reading constant columns, such as {"type":"STRING", "value":"DataX"}. Use \`type\` to describe the constant type. Supported types are String, Int, Double, Bool, Binary (use Base64 encoding), INF\_MIN (the system-defined minimum value in Tablestore; if you use this value, do not specify the \`value\` property, or an error occurs), and INF\_MAX (the system-defined maximum value in Tablestore; if you use this value, do not specify the \`value\` property, or an error occurs).
    
-   Does not support functions or custom expressions. Because Tablestore does not provide SQL-like functions or expressions, Tablestore Reader cannot provide function or expression column features.
    

Yes

None

begin and end

The begin and end parameters specify the range of data to read from the Tablestore table.

begin and end describe the interval distribution of the Tablestore primary key. For an infinite interval, you can use `{"type":"INF_MIN"}` and `{"type":"INF_MAX"}` to represent begin and end, respectively. type indicates the data type to read.

**Note**

-   The default value for the begin and end parameters is `[INF_MIN, INF_MAX)`, which means all data is read.
    
-   When the number of configured begin and end values is less than the number of primary keys, according to the [leftmost primary key matching principle](/help/en/tablestore/read-data#section-ov0-iyb-cg2), the range for unconfigured primary keys defaults to `[INF_MIN, INF_MAX)`.
    
-   If you configure only begin or end, the data range is `[begin, INF_MAX)` or `[INF_MIN, end)`.
    
-   If there is only one primary key column, the begin and end configuration follows a left-closed, right-open interval.
    
-   If there are multiple primary key columns, the last primary key column follows a left-closed, right-open interval. The other primary key columns follow a closed interval.
    

For example, consider reading data from a Tablestore table with three primary key columns: `[Hundreds, Tens,Ones]`. The table contains 1,000 columns with primary keys from (0,0,0), (0,0,1), ... to (9,9,8), (9,9,9). The begin and end parameters are configured as follows.

-   Example 1: Read data where Hundreds is in the range of `[3, 5]` and Tens is in the range of `[4, 6]`. The primary keys of the read data include `(3,4,0), (3,4,1), ..., (4,4,0), (4,0,1), ..., (5,6,8), (5,6,9)`. The configuration is as follows:
    
    ```
    "range": {
          "begin": [
            {"type":"INT", "value":"3"},  // Specify the minimum value of Hundreds to read.
            {"type":"INT", "value":"4"}  // Specify the minimum value of Tens to read.
          ],
          "end": [
            {"type":"INT", "value":"5"}, // Specify the maximum value of Hundreds to read.
            {"type":"INT", "value":"6"} // Specify the maximum value of Tens to read.
          ]
        }
    ```
    
-   Example 2: Read data where Hundreds is in the range of `[3, 5]`, Tens is in the range of `[4, 6]`, and Ones is in the range of `[5, 7)`. The primary keys of the read data include `(3,4,5), (3,4,6), ..., (4,4,5), (4,4,6), ..., (5,6,5), (5,6,6)`. The configuration is as follows:
    
    ```
    "range": {
          "begin": [
            {"type":"INT", "value":"3"},  // Specify the minimum value of Hundreds to read.
            {"type":"INT", "value":"4"},  // Specify the minimum value of Tens to read.
            {"type":"INT", "value":"5"}  // Specify the minimum value of Ones to read.
          ],
          "end": [
            {"type":"INT", "value":"5"}, // Specify the maximum value of Hundreds to read.
            {"type":"INT", "value":"6"}, // Specify the maximum value of Tens to read.
            {"type":"INT", "value":"7"}  // Specify the maximum value of Ones to read.
          ]
        }
    ```
    

No

(INF\_MIN, INF\_MAX)

split

This is an advanced configuration item. We do not recommend using it in normal cases.

You can configure the split parameter to define the data range for sharding. You can use custom splitting rules if hot spots occur in Tablestore data storage. Take the following task configuration as an example:

```
{
  "range": {
    "begin": [{"type": "INF_MIN"}],
    "end":   [{"type": "INF_MAX"}],
    "split": [
      {"type": "STRING","value": "1"},
      {"type": "STRING","value": "2"},
      {"type": "STRING","value": "3"},
      {"type": "STRING","value": "4"},
      {"type": "STRING","value": "5"}
    ]
  }
```

When the task runs, the data is split into six segments and read concurrently. We recommend that the number of segments is greater than the task concurrency.

```
// Segment 1
[minimum value, 1)
// Segment 2
[1, 2)
// Segment 3
[2, 3)
// Segment 4
[3, 4)
// Segment 5
[4, 5)
// Segment 6
[5, maximum value)
```

No

If the split parameter is not configured, an automatic splitting logic is used.

The automatic splitting logic finds the maximum and minimum values of the partition key and splits the data into even segments.

The partition key supports integer and string types. Integer types are split by integer division. String types are split by the Unicode code of the first character.

#### **Row mode read parameters for time series tables**

**Parameter**

**Description**

**Required**

**Default value**

column

column is an array. Each element represents a column. You can configure constant columns and normal columns.

For a constant column, configure the following fields:

-   type: The field value type. This parameter is required. Supported types are string, int, double, bool, and binary.
    
-   value: The field value. This parameter is required.
    

For a normal column, configure the following fields:

-   name: The column name. This parameter is required. The following fields are predefined.
    
    -   The 'measurement name' of the timeline is identified by `_m_name`. The data type is String.
        
    -   The 'data source' of the timeline is identified by `_data_source`. The data type is String.
        
    -   The 'tags' of the timeline are identified by `_tags`. The data type is String.
        
    -   The 'timestamp' of the timeline is identified by `_time`. The data type is Long.
        
-   is\_timeseries\_tag: Specifies whether the column is a key-value pair within the tags field. This parameter is optional. The default value is false.
    
-   type: The field value type. This parameter is optional. The default value is string. Supported types are string, int, double, bool, and binary.
    

The following script is an example of reading four columns of data:

```
"column": [
  {
    "name": "_m_name"               // The measurement name field of the timeline.
  },
  {
    "name": "tag_key",                // The value corresponding to tag_key in the tags field of the timeline.
    "is_timeseries_tag":"true"
  },
  {
    "name": "string_column",        // The column named string_column in fields.
    "type":"string"                    // The data type is string.
  },
  {
    "value": "constant_value",        // A constant column. The value is fixed at "constant_value".
    "type":"string"
  }
],
```

Yes

None

measurementName

The measurement name of the timeline to read. If you do not configure this parameter, data is read from the entire table.

No

None

timeRange

The time range of the requested data. The read range is \[begin,end), which is a left-closed, right-open interval. \`begin\` must be less than \`end\`. The timestamp unit is microseconds. The format is as follows:

```
"timeRange":{
    // begin: Optional. Default value: 0. Value range: 0 to LONG_MAX.
    "begin":1400000000000,
    // end: Optional. Default value: Long Max (9223372036854775807L). Value range: 0 to LONG_MAX.
    "end"  :1600000000000
},
```

No

All versions

#### **Column mode read parameters for wide tables**

**Parameter**

**Description**

**Required**

**Default value**

column

Specifies the columns to export. Only attribute columns are supported in column mode.

Format:

```
"column": [
    {"name1":"{your column name1}"},
    {"name2":"{your column name2}"}
],
```

**Note**

-   Constant columns are not supported in column mode.
    
-   You cannot specify primary key columns. The exported 4-element tuple includes the complete primary key by default.
    
-   You cannot specify the same column multiple times.
    

Yes

All columns

range

The range of data to read. The read range is \[begin, end), which is a left-closed, right-open interval. In addition:

-   If \`begin\` is less than \`end\`, data is read in ascending order.
    
-   If \`begin\` is greater than \`end\`, data is read in descending order.
    
-   \`begin\` and \`end\` cannot be equal.
    

The supported types for \`type\` are:

-   string
    
-   int
    
-   binary: The input is a Base64 string of the binary data.
    
-   INF\_MIN: Represents negative infinity.
    
-   INF\_MAX: Represents positive infinity.
    

Format:

```
"range":{
    // Optional. By default, reading starts from negative infinity.
    // The value can be an empty array, a primary key prefix, or a complete primary key. When reading in ascending order, the primary key suffix defaults to INF_MIN. When reading in descending order, it defaults to INF_MAX.
    // Examples:
    // If your table has two primary key columns of types string and int, the following three inputs are valid:
    // 1. Read from the beginning of the table to the end of the table:
    // "begin":[],"end":[],
    // 2. Start reading from the minimum value of the second primary key where the first primary key value is "a". Stop reading at the maximum value of the second primary key where the first primary key value is "b":
    // "begin":[{"type":"string", "value":"a"}],"end":[{"type":"string", "value":"b"}],
    // 3. Start reading from the minimum value of the second primary key where the first primary key value is "a". Stop reading at the end of the table:
    // "begin":[{"type":"string", "value":"a"},{"type":"INF_MIN"}],"end":[],    
    //
    // The binary type for primary key columns is special. Because JSON does not directly support binary input, the system requires that you
    // use the (Java) Base64.encodeBase64String method to convert the binary data into a visible string, and then enter this string into the value.
    // Example (Java):
    //   byte[] bytes = "hello".getBytes();  // Construct binary data, here using the byte value of the string "hello".
    //   String inputValue = Base64.encodeBase64String(bytes) // Call the Base64 method to convert the binary data to a visible string.
    //   After the preceding code is executed, inputValue is "aGVsbG8=".
    //   The final configuration is: {"type":"binary","value" : "aGVsbG8="}

    "begin":[{"type":"string", "value":"a"},{"type":"INF_MIN"}],

    // By default, reading stops at positive infinity.
    // The value can be an empty array, a primary key prefix, or a complete primary key. When reading in ascending order, the primary key suffix defaults to INF_MAX. When reading in descending order, it defaults to INF_MIN.
    // Optional.
    "end":[{"type":"string", "value":"g"},{"type":"INF_MAX"}],

    // When you have a large amount of data, you need to enable concurrent export. Split can divide the data in the current range into multiple concurrent tasks based on split points.
    // Optional.
    //   1. The input value in split can only be the first column of the primary key (partition key), and its type must be the same as the partition key.
    //   2. The value must be between begin and end.
    //   3. The values within split must be in ascending or descending order, corresponding to the order of begin and end.
    "split":[{"type":"string", "value":"b"}, {"type":"string", "value":"c"}]
},
```

No

All data

timeRange

The time range of the requested data. The read range is \[begin, end), which is a left-closed, right-open interval. \`begin\` must be less than \`end\`. The timestamp unit is microseconds.

Format:

```
"timeRange":{
    // begin: Optional. Default value: 0. Value range: 0 to LONG_MAX.
    "begin":1400000000000,
    // end: Optional. Default value: Long Max (9223372036854775807L). Value range: 0 to LONG_MAX.
    "end"  :1600000000000
},
```

No

All versions

maxVersion

The maximum number of data versions to request. The value range is 1 to INT32\_MAX.

No

All versions

## Appendix II: Writer script demo and parameter description

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Writer script demo

#### **Row mode write configuration for wide tables**

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
            "stepType":"ots",// The plugin name.
            "parameter":{
                "datasource":"",// The data source.
                "table":"",// The table name.
                "newVersion":"true",// Use the new version of otswriter.
                "mode": "normal",// Write data in row mode.
                "isTimeseriesTable":"false",// Configure the table as a wide table (not a time series table).
                "primaryKey" : [// The primary key information of Tablestore.
                    {"name":"gid", "type":"INT"},
                    {"name":"uid", "type":"STRING"}
                 ],
                "column" : [// The fields.
                      {"name":"col1", "type":"INT"},
                      {"name":"col2", "type":"DOUBLE"},
                      {"name":"col3", "type":"STRING"},
                      {"name":"col4", "type":"STRING"},
                      {"name":"col5", "type":"BOOL"}
                  ],
                "writeMode" : "PutRow"    // The write mode.
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
            "throttle":true,// When throttle is false, the mbps parameter does not take effect, indicating no throttling. When throttle is true, it indicates throttling.
            "concurrent":1, // The job concurrency.
            "mbps":"12"// The throttling speed. 1 mbps = 1 MB/s.
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

#### **Row mode write configuration for time series tables**

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
            "stepType":"ots",// The plugin name.
            "parameter":{
                "datasource":"",// The data source.
                "table": "testTimeseriesTableName01",
                "mode": "normal",
                "newVersion": "true",
                "isTimeseriesTable":"true",
                "timeunit":"microseconds",
                "column": [
                      {
                        "name": "_m_name"
                      },
                      {
                        "name": "_data_source",
                      },
                      {
                        "name": "_tags",
                      },
                      {
                        "name": "_time",
                      },
                      {
                        "name": "string_1",
                        "type":"string"
                      },
                      {
                        "name":"tag3",
                        "is_timeseries_tag":"true",
                      }
                    ]
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
            "throttle":true,// When throttle is false, the mbps parameter does not take effect, indicating no throttling. When throttle is true, it indicates throttling.
            "concurrent":1, // The job concurrency.
            "mbps":"12"// The throttling speed. 1 mbps = 1 MB/s.
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

#### **Column mode write configuration for wide tables**

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
            "stepType":"ots",// The plugin name.
            "parameter":{
                "datasource":"",// The data source.
                "table":"",
                "newVersion":"true",
                "mode":"multiVersion",
                "primaryKey" : [
                    "gid",
                    "uid"
                    ]
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
            "throttle":true,// When throttle is false, the mbps parameter does not take effect, indicating no throttling. When throttle is true, it indicates throttling.
            "concurrent":1, // The job concurrency.
            "mbps":"12"// The throttling speed. 1 mbps = 1 MB/s.
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

### Writer script general parameter configuration

**Parameter**

**Description**

**Required**

**Default value**

datasource

The data source name. The code editor supports adding data sources. The value of this parameter must be the same as the name of the added data source.

Yes

None

endPoint

The endpoint of the Tablestore server. For more information, see [Endpoints](/help/en/tablestore/product-overview/endpoints#concept-bsx-btj-bfb).

Yes

None

accessId

The AccessKey ID for Tablestore.

Yes

None

accessKey

The AccessKey secret for Tablestore.

Yes

None

instanceName

The name of the Tablestore instance. An instance is an entity that you use to manage Tablestore services.

After you activate Tablestore, you must create an instance in the console. Then, you can create and manage tables in the instance. An instance is the basic unit for resource management in Tablestore. Access control and resource metering for applications are performed at the instance level.

Yes

None

table

The name of the table to which to write data. You can specify only one table. Tablestore does not support synchronizing multiple tables.

Yes

None

newVersion

The version of the Tablestore Writer plugin to use.

-   false: The old version of Tablestore Writer. It supports only writing to wide tables in row mode.
    
-   true: The new version of Tablestore Writer, which supports **row mode**, **column mode**, **time series tables**, **wide tables**, and the auto-incrementing primary key column feature.
    

The new version of Tablestore Writer supports new features and consumes fewer system resources. We recommend that you use the new version of Tablestore Writer.

The new plugin is compatible with the configuration of the old plugin. This means that an old task can run as expected after you add the newVersion=true configuration.

Yes

false

mode

The mode for writing data. The following two modes are supported:

-   normal: Writes data in the normal format (**row mode**).
    
-   multiVersion: Writes data in multi-version format (**column mode**).
    

This parameter takes effect only when newVersion:true is configured.

The old version of Tablestore Writer ignores the mode configuration and supports only row mode.

No

normal

isTimeseriesTable

Specifies whether the data table is a time series data table.

-   false: The data table is a normal wide table.
    
-   true: The data table is a time series data table.
    

This parameter takes effect only when newVersion:true & mode:normal is configured. Column mode is not compatible with time series tables.

No

false

### Writer script additional parameter configuration

Tablestore Writer supports writing to wide tables in row mode, writing to time series tables in row mode, and writing to wide tables in column mode. The following sections describe the additional configurations for each mode.

#### **Row mode write parameters for wide tables**

**Parameter**

**Description**

**Required**

**Default value**

primaryKey

The primary key information of Tablestore. Use a JSON array to describe the field information. Because Tablestore is a NoSQL system, you must specify the field names when Tablestore Writer imports data.

The data synchronization system supports type conversion. Therefore, if the source data is not of the STRING or INT type, Tablestore Writer performs data type conversion. The following code provides a configuration example.

```
"primaryKey" : [
    {"name":"gid", "type":"INT"},
    {"name":"uid", "type":"STRING"}
                 ],
```

**Note**

The primary key in Tablestore supports only the STRING and INT types. Therefore, the Tablestore Writer also limits the types to STRING and INT.

Yes

None

column

The set of column names to synchronize in the configured table. Use a JSON array to describe the field information.

Configuration example:

```
"column" : [
     {"name":"col1", "type":"INT"},
     {"name":"col2", "type":"DOUBLE"},
     {"name":"col3", "type":"STRING"},
     {"name":"col4", "type":"BINARY"},
     {"name":"col5", "type":"BOOL"}
              ],
```

\`name\` is the name of the Tablestore column to write to, and \`type\` is the type to write. Tablestore supports STRING, INT, DOUBLE, BOOL, and BINARY types.

**Note**

Constants, functions, or custom expressions are not supported during the write process.

Yes

None

writeMode

The mode for writing data to Tablestore. The following two modes are supported:

-   PutRow: Corresponds to the Tablestore API PutRow. It inserts data into a specified row. If the row does not exist, a new row is added. If the row exists, the original row is overwritten.
    
-   UpdateRow: Corresponds to the Tablestore API UpdateRow. It updates the data in a specified row. If the row does not exist, a new row is added. If the row exists, it adds, modifies, or deletes the values of specified columns in this row based on the request content.
    

Yes

None

enableAutoIncrement

Specifies whether to allow writing data to a Tablestore table that contains an auto-increment primary key column.

-   true: The plugin automatically scans the auto-increment column information of the destination table and adds the auto-increment column when writing data. You do not need to configure the auto-increment column name.
    
-   false: An error is reported when writing to a table with an auto-increment primary key column.
    

No

false

requestTotalSizeLimitation

This parameter limits the size of a single row of data when writing to Tablestore. The configuration type is numeric.

No

1 MB

attributeColumnSizeLimitation

This parameter limits the size of a single attribute column when writing to Tablestore. The configuration type is numeric.

No

2 MB

primaryKeyColumnSizeLimitation

This parameter limits the size of a single primary key column when writing to Tablestore. The configuration type is numeric.

No

1 KB

attributeColumnMaxCount

This parameter limits the number of attribute columns when writing to Tablestore. The configuration type is numeric.

No

1,024

#### **Row mode write parameters for time series tables**

**Parameter**

**Description**

**Required**

**Default value**

column

Each element in \`column\` corresponds to a field in the time series data. You can configure the following parameters for each element.

-   name: The column name. This parameter is required. The following fields are predefined:
    
    -   The 'measurement name' of the timeline is identified by `_m_name`. The data type is String.
        
    -   The 'data source' of the timeline is identified by `_data_source`. The data type is String.
        
    -   The 'tags' of the timeline are identified by `_tags`. The data type is String. The string format is \["tagKey1=value1","tagKey2=value2"\].
        
    -   The 'timestamp' of the timeline is identified by `_time`. The data type is Long. The default unit is microseconds.
        
-   is\_timeseries\_tag: Specifies whether the column is a key-value pair within the tags field. This parameter is optional. The default value is false.
    
-   type: The field value type. This parameter is optional. The default value is string. Supported types are string, int, double, bool, and binary.
    

Because the measurement name and timestamp of time series data cannot be empty, you must configure the `_m_name` and `_time` fields.

Example: A record to be written contains the following six fields:

```
mName1    source1    ["tag1=A","tag2=B"]    1677763080000000    field_value     C
```

Use the following configuration:

```
"column": [
      {
        "name": "_m_name"
      },
      {
        "name": "_data_source",
      },
      {
        "name": "_tags",
      },
      {
        "name": "_time",
      },
      {
        "name": "string_1",
        "type":"string"
      },
      {
        "name":"tag3",
        "is_timeseries_tag":"true",
      }
    ],
```

Yes

None

timeunit

The unit of the configured \`\_time\` timestamp field. Supported units are NANOSECONDS, MICROSECONDS, MILLISECONDS, SECONDS, and MINUTES.

No

MICROSECONDS

#### **Column mode write parameters for wide tables**

**Parameter**

**Description**

**Required**

**Default value**

primaryKey

The primary key columns of the table.

To reduce configuration costs, you do not need to configure the position of the primaryKey in a Record (Line). However, the Record format must be fixed: the primaryKey must be at the start of the record, and the primaryKey must be followed by the columnName. The record format is: `{pk0,pk1...}, {columnName}, {timestamp}, {value}`.

For example, assume you have the following nine records:

```
1,pk1,row1,1677699863871,value_0_0
1,pk1,row2,1677699863871,value_0_1
1,pk1,row3,1677699863871,value_0_2
2,pk2,row1,1677699863871,value_1_0
2,pk2,row2,1677699863871,value_1_1
2,pk2,row3,1677699863871,value_1_2
3,pk3,row1,1677699863871,value_2_0
3,pk3,row2,1677699863871,value_2_1
3,pk3,row3,1677699863871,value_2_2
```

Configuration example:

```
"primaryKey" : [
    "gid",
    "uid"
    ],
```

Result of writing to the wide table:

```
gid     uid     row1        row2        row3
1        pk1        value_0_0    value_0_1    value_0_2
2        pk2        value_1_0    value_1_1    value_1_2
3        pk3        value_2_0    value_2_1    value_2_2
```

Yes

None

columnNamePrefixFilter

Column name prefix filter.

For data imported from Hbase, cf and qulifier together form the columnName. However, Tablestore does not support cf, so you need to filter out cf.

Configuration example: `"columnNamePrefixFilter":"cf:"`

**Note**

-   This parameter is optional. If it is not specified or its value is an empty string, column names are not filtered.
    
-   If the columnName of the data added through Data Integration does not start with the prefix, the record is sent to the dirty data collector.
    

No

None

## FAQ

-   **Q: How do I configure Tablestore Writer to write data to a destination table that contains an auto-increment primary key column?**
    
    1.  The Tablestore Writer configuration must include the following two lines:
        
        ```
        "newVersion": "true",
        "enableAutoIncrement": "true",
        ```
        
    2.  You do not need to configure the name of the auto-increment primary key column in Tablestore Writer.
        
    3.  In Tablestore Writer, the number of primaryKey entries plus the number of column entries must equal the number of columns in the upstream Tablestore Reader data.
        
-   **Q: In the time series model configuration, what is the difference between the** `**_tag**` **and** `**is_timeseries_tag**` **fields?**
    
    Example: A record has three tags: \[Phone=Xiaomi, Memory=8G, Camera=Leica\].![数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2234867861/p675267.png)
    
    -   **Data export example (Tablestore Reader)**
        
        -   If you want to merge the preceding tags and export them as a single column, use the following configuration:
            
            ```
            "column": [
                  {
                    "name": "_tags",
                  }
                ],
            ```
            
            DataWorks exports the tags as a single column of data, in the following format:
            
            ```
            ["phone=xiaomi","camera=LEICA","RAM=8G"]
            ```
            
        -   If you want to export the `phone` and `camera` tags as separate columns, use the following configuration:
            
            ```
            "column": [
                  {
                    "name": "phone",
                    "is_timeseries_tag":"true",
                  },
                  {
                    "name": "camera",
                    "is_timeseries_tag":"true",
                  }
                ],
            ```
            
            DataWorks exports two columns of data, in the following format:
            
            ```
            xiaomi, LEICA
            ```
            
    -   **Data import example (Tablestore Writer)**
        
        Assume the upstream data source (Reader) has two columns of data:
        
        -   One column of data is: `["phone=xiaomi","camera=LEICA","RAM=8G"]`.
            
        -   The other column of data is: 6499.
            
        
        You want to add both columns to the tags. The expected format of the tag field after writing is as follows:![格式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2234867861/p675271.png)Use the following configuration:
        
        ```
        "column": [
              {
                "name": "_tags",
              },
              {
                "name": "price",
                "is_timeseries_tag":"true",
              },
            ],
        ```
        
        -   The first column configuration imports `["phone=xiaomi","camera=LEICA","RAM=8G"]` as a whole into the tag field.
            
        -   The second column configuration imports `price=6499` separately into the tag field.
