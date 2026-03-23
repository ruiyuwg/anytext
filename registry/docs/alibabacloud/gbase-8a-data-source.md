The GBase8a data source lets you read data from and write data to GBase8a. This topic describes the data synchronization capabilities for GBase8a in DataWorks.

## Limits

-   GBase8a Reader and GBase8a Writer support [Serverless resource groups (recommended)](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) and [exclusive resource groups for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration#task-2353828).
    
-   When you use the `insert into...` statement, if a primary key or unique index conflict occurs, the conflicting rows are not written.
    
-   Data can be written only to a destination table in the primary database.
    
    **Note**
    
    The task requires at least the `insert into...` permission. Additional permissions may be required for the statements that you specify for the preSql and postSql parameters.
    
-   GBase8a Writer does not support the writeMode parameter.
    

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

## Develop a data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Guide to configuring an offline sync task for a single table

-   For instructions, see [Configure in codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Configure in code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For parameter descriptions and a script example for the code editor, see [Appendix: Script demo and parameter descriptions](#section-ug0-in6-x78).
    

## Appendix: Script demo and parameter descriptions

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader script demo

```
{
    "type": "job",
    "steps": [
        {
            "stepType": "gbase8a", // The plug-in name.
            "parameter": {
                "datasource": "", // The data source name.
                "username": "",
                "password": "",
                "where": "",
                "column": [ // The fields.
                    "id",
                    "name"
                ],
                "splitPk": "id",
                "connection": [
                    {
                        "table": [ // The table name.
                            "table"
                        ],
                        "datasource":""
                    }
                ]
            },
            "name": "Reader",
            "category": "reader"
        },
        {
            "stepType": "stream",
            "parameter": {
                "print": false,
                "fieldDelimiter": ","
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
            "record": "0" // The number of error records.
        },
        "speed": {
            "throttle": true, // If you set throttle to false, the mbps parameter does not take effect, and no rate limit is imposed. If you set throttle to true, a rate limit is imposed.
            "concurrent": 1, // The number of concurrent jobs.
            "mbps":"12"// The rate limit. 1 mbps = 1 MB/s.
        }
    }
}
```

**Parameter**

**Description**

**Required**

**Default value**

datasource

If your DataWorks version supports adding GBase8a data sources, you can reference the added GBase8a data source by its name.

No

None

table

The tables from which you want to synchronize data. Use a JSON array to specify the tables. You can read data from multiple tables at the same time.

If you configure multiple tables, make sure that they have the same schema. GBase8a Reader does not check whether the tables have a consistent logical structure.

**Note**

The table parameter must be included in the connection configuration unit.

Yes

None

column

The columns to be synchronized from the configured tables. Use a JSON array to describe the fields. By default, all columns are used, for example, \[\*\].

-   Column pruning: You can select specific columns to export.
    
-   Column reordering: You can export columns in an order different from the table schema.
    
-   Constant configuration: For example, `'123'`.
    
-   Function columns: For example, `date('now')`.
    
-   You must explicitly specify the columns to synchronize for the column parameter. This parameter cannot be empty.
    

Yes

None

splitPk

When GBase8a Reader extracts data, if you specify splitPk, the field represented by splitPk is used for data partitioning. The data synchronization task then starts concurrent subtasks to improve efficiency.

-   Use the primary key of the table for splitPk. Primary keys are usually distributed evenly, which helps prevent data hotspots in the resulting shards.
    
-   Currently, splitPk supports data partitioning only for integer data types. It does not support strings, floating-point numbers, dates, or other types. If you specify an unsupported data type, the splitPk feature is ignored, and data is synchronized through a single channel.
    
-   If you leave splitPk empty, the system assumes that you do not want to partition the table and extracts data through a single channel.
    

No

Empty

where

The filter condition. GBase8a Reader constructs an SQL statement based on the specified column, table, and where conditions, and then extracts data based on that SQL statement.

For example, for testing, you can set the where condition to limit 10. In a typical business scenario, you might synchronize the current day's data by setting the where condition to `gmt_create>$bizdate`.

-   The where condition enables efficient incremental business data synchronization.
    
-   If you do not configure the where condition or leave it empty, a full data synchronization is performed.
    

No

None

querySql

In some business scenarios, the where parameter is not sufficient to describe the filter conditions. You can use this parameter to define a custom filter SQL statement. If you configure this parameter, the data synchronization system ignores the tables, columns, and splitPk parameters and uses the content of this parameter to filter data.

When you configure querySql, GBase8a Reader ignores the table, column, where, and splitPk parameters.

No

None

fetchSize

This parameter specifies the number of records to retrieve in each batch from the database server. This value determines the number of network interactions between Data Integration and the server and can significantly improve data extraction performance.

**Note**

An excessively large fetchSize value (greater than 2048) may cause an out-of-memory (OOM) error in the data synchronization process.

No

1,024

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
            "stepType":"gbase8a",// The plug-in name.
            "parameter":{
                "datasource": "Data source name",
                "username": "",
                "password": "",
                "column": [// The fields.
                    "id",
                    "name"
                ],
                "connection": [
                    {
                        "table": [// The table name.
                            "Gbase8a_table"
                        ],
                        "datasource":""
                    }
                ],
                "preSql": [ // The SQL statement to execute before the data synchronization task runs.
                    "delete from @table where db_id = -1"
                ],
                "postSql": [// The SQL statement to execute after the data synchronization task runs.
                    "update @table set db_modify_time = now() where db_id = 1"
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
            "throttle":true,// If you set throttle to false, the mbps parameter does not take effect, and no rate limit is imposed. If you set throttle to true, a rate limit is imposed.
            "concurrent":1, // The number of concurrent jobs.
            "mbps":"12"// The rate limit. 1 mbps = 1 MB/s.
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

table

The name of the table to which you want to write data. Use a JSON array to specify the table.

**Note**

The table parameter must be included in the connection configuration unit.

Yes

None

column

The fields in the destination table to which you want to write data. Separate the fields with commas. For example, `"column": ["id", "name", "age"]`.

**Note**

You must specify the column parameter. It cannot be empty.

Yes

None

preSql

Before writing data to the destination table, the system executes the standard SQL statement specified here. If the SQL statement needs to operate on a table, use `@table` as a placeholder. The system replaces the variable with the actual table name when it executes the SQL statement.

No

None

postSql

After writing data to the destination table, the system executes the standard SQL statement specified here.

No

None

batchSize

The number of records to submit in a single batch. This value can significantly reduce the number of network interactions between the data synchronization system and GBase8a and improve overall throughput. If this value is too large, it may cause an out-of-memory (OOM) error in the data synchronization process.

No

1,024
