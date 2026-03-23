The AnalyticDB for MySQL 2.0 data source provides a bidirectional channel for reading data from and writing data to AnalyticDB for MySQL 2.0. This topic describes the data synchronization capabilities that DataWorks provides for AnalyticDB for MySQL 2.0.

## Limits

-   You can read data from views using offline synchronization.
    
-   The AnalyticDB for MySQL 2.0 Reader does not support multivalue types. If you use multivalue types, the sync task fails.
    

## Supported field types

### **Offline read**

The following table lists the data type mappings for the AnalyticDB for MySQL 2.0 Reader.

**AnalyticDB for MySQL 2.0 type**

**DataX type**

**MaxCompute type**

BIGINT

LONG

BIGINT

TINYINT

LONG

INT

TIMESTAMP

DATE

DATETIME

VARCHAR

STRING

STRING

SMALLINT

LONG

INT

INT

LONG

INT

FLOAT

STRING

DOUBLE

DOUBLE

STRING

DOUBLE

DATE

DATE

DATETIME

TIME

DATE

DATETIME

### **Offline write**

The following table lists the data type mappings for the AnalyticDB for MySQL 2.0 Writer.

**Type**

**AnalyticDB for MySQL 2.0 data type**

Integer

INT, TINYINT, SMALLINT, BIGINT

Floating-point

FLOAT and DOUBLE

String

VARCHAR

Date and time

DATE and TIMESTAMP

Boolean

BOOLEAN

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

## Develop a data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Configure an offline synchronization task for a single table

-   For more information, see [Configure a task in the codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For a complete list of parameters and a script demo for the code editor, see [Appendix: Script demo and parameter descriptions](#section-3fv-k6r-jns).
    

### Configure an offline read synchronization task for an entire database

For more information, see [Configure a real-time synchronization task for an entire database](/help/en/dataworks/user-guide/configure-a-data-synchronization-solution-in-data-integration#task-2234369).

## Appendix: Script demo and parameter descriptions

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader script demo

```
{
    "type": "job",
  "steps": [
    {
            "stepType": "ads",
      "parameter": {
        "datasource": "ads_demo",
        "table": "th_test",
        "column": [
          "id",
          "testtinyint",
          "testbigint",
          "testdate",
          "testtime",
          "testtimestamp",
          "testvarchar",
          "testdouble",
          "testfloat"
        ],
        "odps": {
          "accessId": "<yourAccessKeyId>",
          "accessKey": "<yourAccessKeySecret>",
          "account": "*********@aliyun.com",
          "odpsServer": " http://service.cn-shanghai-vpc.maxcompute.aliyun-inc.com/api",
          "tunnelServer": "http://dt.cn-shanghai-vpc.maxcompute.aliyun-inc.com",
          "accountType": "aliyun",
          "project": "odps_test"
        },
        "mode": "ODPS"
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
      "concurrent": 2,
      "throttle": true,// If throttle is set to false, the mbps parameter does not take effect, which means that traffic is not throttled. If throttle is set to true, traffic is throttled.
                  "mbps":"12"// Throttling. 1 mbps is equal to 1 MB/s.
    }
  }
}
```

### Reader script parameters

**Parameter**

**Description**

**Required**

**Default value**

table

The name of the table from which to export data.

Yes

None

column

The names of the columns. If you do not specify this parameter, all columns are selected.

No

\*

limit

The maximum number of records to export.

No

None

where

The WHERE clause to filter data. The string is directly appended to the query statement. Example: `where id < 100`.

No

None

mode

The import mode. Valid values are Select and ODPS.

-   Select: uses the LIMIT clause for paging.
    
-   ODPS: uses ODPS DUMP to export data. You must have the permissions to access ODPS.
    

No

Select

odps.accessKey

Required when \`mode\` is \`ODPS\`. The AccessKey secret of the Alibaba Cloud account that AnalyticDB for MySQL 2.0 uses to access ODPS. The account must have the Describe, Create, Select, Alter, Update, and Drop permissions.

No

None

odps.accessId

Required when \`mode\` is \`ODPS\`. The AccessKey ID of the Alibaba Cloud account that AnalyticDB for MySQL 2.0 uses to access ODPS. The account must have the Describe, Create, Select, Alter, Update, and Drop permissions.

No

None

odps.odpsServer

Required when \`mode\` is \`ODPS\`. The endpoint of the ODPS API.

No

None

odps.tunnelServer

Required when \`mode\` is \`ODPS\`. The endpoint of the ODPS Tunnel.

No

None

odps.project

Required when \`mode\` is \`ODPS\`. The name of the ODPS project.

No

None

odps.accountType

This parameter takes effect when \`mode\` is \`ODPS\`. The type of the account used to access ODPS.

No

aliyun

### Writer script demo

```
{
    "type":"job",
    "version":"2.0",
    "steps":[ 
        {
            "stepType":"stream",
            "parameter":{
            "name":"Reader",
            "category":"reader"
        },
        {
            "stepType":"ads",// The plugin name.
            "parameter":{
                "partition":"",// The name of the partition in the destination table.
                "datasource":"",// The data source.
                "column":[// The fields.
                     "id"
                ],
                "writeMode":"insert",// The write mode.
                "batchSize":"256",// The number of records to submit in a single batch.
                "table":"",// The table name.
                "overWrite":"true",// Specifies whether to overwrite the existing data in the destination table. Valid values: true and false. A value of true indicates that the system overwrites the existing data. A value of false indicates that the system appends the new data. This parameter takes effect only when writeMode is set to Load.
                "options.ignoreEmptySource":true// Specifies whether to ignore errors that are reported when the source file is empty. If this parameter is set to true, the task does not fail. Default value: true. If you do not configure this parameter, the default value true is used. If this parameter is set to false and the source data cannot be read, the task fails.
            },
            "name":"Writer",
            "category":"writer"
        }
    ],
    "setting":{
        "errorLimit":{
            "record":"0"// The number of error records allowed.
        },
        "speed":{
            "throttle":true,// If throttle is set to false, the mbps parameter does not take effect, which means that traffic is not throttled. If throttle is set to true, traffic is throttled.
            "concurrent":1, // The number of concurrent jobs.
            "mbps":"12"// Throttling. 1 mbps is equal to 1 MB/s.
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

Connection URL

The connection information for AnalyticDB for MySQL 2.0. Format: Address:Port.

Yes

None

Database

The name of the AnalyticDB for MySQL 2.0 database.

Yes

None

Access Id

The AccessKey ID for the AnalyticDB for MySQL 2.0 instance.

Yes

None

Access Key

The AccessKey secret for the AnalyticDB for MySQL 2.0 instance.

Yes

None

datasource

The name of the data source. The code editor supports adding data sources. The value of this parameter must be the same as the name of the added data source.

Yes

None

table

The name of the destination table.

Yes

None

partition

The name of the partition in the destination table. This parameter is required if the destination table is a standard table.

No

None

writeMode

AnalyticDB for MySQL 2.0 Writer supports two modes for importing data into AnalyticDB for MySQL 2.0.

-   Insert mode: If a primary key conflict occurs, the new record overwrites the old record.
    
-   Load mode: Data is imported through a third-party system.
    

Yes

None

column

The list of fields in the destination table. You can set this to \["\*"\] to include all fields, or specify a list of fields, such as \["a", "b", "c"\].

Yes

None

suffix

The format of the AnalyticDB for MySQL 2.0 URL is `ip:port`. This parameter specifies a custom connection string and is optional. When you access the AnalyticDB for MySQL 2.0 database, this string is converted into a Java Database Connectivity (JDBC) connection string. Example: `autoReconnect=true&failOverReadOnly=false&maxReconnects=10`.

No

None

batchSize

The number of records to write in a single batch. This parameter takes effect only when \`writeMode\` is set to \`insert\`.

Required when \`writeMode\` is \`insert\`.

None

bufferSize

The size of the DataX data collection buffer. Source data is first sorted in this buffer and then submitted to AnalyticDB for MySQL 2.0. Data is sorted based on the partition key columns of the destination table to improve performance on the AnalyticDB for MySQL 2.0 server.

Data in the buffer is submitted to AnalyticDB for MySQL 2.0 in batches specified by \`batchSize\`. We recommend that you set \`bufferSize\` to a value that is several times the value of \`batchSize\`. This parameter takes effect only when writeMode is set to \`insert\`.

Required when \`writeMode\` is \`insert\`.

This feature is disabled by default.
