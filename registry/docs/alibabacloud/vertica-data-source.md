Vertica is a column-oriented database that uses a massively parallel processing (MPP) architecture. The Vertica data source provides bidirectional channels to read from and write to Vertica. This topic describes the data synchronization capabilities of the Vertica data source in DataWorks.

## Supported versions

Vertica Reader accesses Vertica using the Vertica database driver. You must ensure that the driver is compatible with your Vertica service. DataWorks uses the following driver version.

```
<dependency>
<groupId>com.vertica</groupId>
<artifactId>vertica-jdbc</artifactId>
<version>7.1.2</version>
</dependency>
```

## Limits

-   You can use Vertica data sources only with [Serverless resource groups (recommended)](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) and [exclusive resource groups for Data Integration](/help/en/dataworks/user-guide/create-and-use-an-exclusive-resource-group-for-data-integration#task-2353828).
    
-   Vertica Writer does not support the writeMode parameter.
    
-   Tasks can be configured only in the code editor.
    

## Supported field types

Common Vertica data types, such as integer, float, string, and time, are supported. Support for advanced data types is limited.

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

## Develop a data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Guide to configuring an offline sync task for a single table

-   For the procedure, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For all parameters and a script example for the code editor, see the [Appendix: Script examples and parameter descriptions](#section-it8-0cj-pm6) section in this topic.
    

## Appendix: Script examples and parameter descriptions

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader script example

```
{
"type": "job",
"steps": [
{
"stepType": "vertica", // The plugin name.
"parameter": {
"datasource": "", // The data source name.
"where": "",
"column": [ // The columns.
"id",
"name"
],
"splitPk": "id",
"connection": [
{
"table": [ // The table name.
"table"
]
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
"throttle": true, // If throttle is set to false, the mbps parameter does not take effect, and throttling is disabled. If throttle is set to true, throttling is enabled.
"concurrent": 1, // The number of concurrent jobs.
                        "mbps":"12"// The maximum transmission rate. 1 mbps equals 1 MB/s.
}
}
}
```

### Reader script parameters

**Parameter**

**Description**

**Required**

**Default Value**

datasource

The name of the data source. The value must be the same as the name of the data source that you add in the code editor.

Yes

None

table

The tables from which to sync data. Use a JSON array to list the tables. You can read data from multiple tables at the same time.

If you configure multiple tables, ensure that they have the same schema. Vertica Reader does not check whether the table logic is consistent.

**Note**

The table parameter must be included in the connection configuration block.

Yes

None

column

The columns to sync from the source tables. Use a JSON array to describe the columns. By default, all columns are used, for example, \`\["\*"\]\`.

-   Column pruning is supported. You can export a subset of columns.
    
-   Column reordering is supported. You can export columns in an order different from the table schema.
    
-   Constants are supported.
    
-   The column parameter must explicitly specify the columns to sync and cannot be empty.
    

Yes

None

splitPk

When Vertica Reader extracts data, specifying the splitPk parameter partitions the data based on the field that splitPk represents. This allows data synchronization to start concurrent tasks and improves synchronization efficiency.

-   Use the primary key of the table for the splitPk parameter. Primary keys are usually distributed evenly, which helps prevent data hot spots in the partitioned shards.
    
-   Currently, splitPk supports data partitioning only for integer columns. Other data types such as string, float, and date are not supported. If you specify an unsupported data type, Vertica Reader reports an error.
    
-   If you leave splitPk empty, the table is not partitioned. Data is extracted through a single channel.
    

No

None

where

The filter condition. Vertica Reader constructs an SQL statement from the column, table, and where parameters to extract data.

For example, you can specify a where condition during testing. In a real-world business scenario, to synchronize data from the current day, you can set the where condition to `gmt_create > $bizdate`.

-   The where condition enables efficient incremental synchronization.
    
-   If you do not configure the where condition or leave it empty, all data from the table is synchronized.
    

No

None

querySql

In some business scenarios, the where parameter is not sufficient to describe the filter conditions. You can use this parameter to define a custom SQL statement for filtering. If you configure this parameter, the data synchronization system ignores the tables, columns, and splitPk parameters and uses the custom SQL statement to filter data.

When you configure querySql, Vertica Reader ignores the table, column, and where parameters.

No

None

fetchSize

This parameter specifies the number of records to retrieve from the database server in each batch. This value determines the number of network interactions between Data Integration and the server and can significantly improve data extraction performance.

**Note**

Setting fetchSize to a large value (> 2048) may cause an out-of-memory (OOM) error in the data synchronization process.

No

1024

### Writer script example

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
"stepType":"vertica",// The plugin name.
"parameter":{
"datasource": "data_source_name",
"column": [// The columns.
"id",
"name"
],
"connection": [
{
"table": [// The table name.
"vertica_table"
]
}
],
"preSql": [ // The SQL statement to execute before the data sync task runs.
"delete from @table where db_id = -1"
],
"postSql": [// The SQL statement to execute after the data sync task runs.
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
                    "throttle":true,// If throttle is set to false, the mbps parameter does not take effect, and throttling is disabled. If throttle is set to true, throttling is enabled.
                    "concurrent":1, // The number of concurrent jobs.
                    "mbps":"12"// The maximum transmission rate. 1 mbps equals 1 MB/s.
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

**Default Value**

datasource

The name of the data source. The value must be the same as the name of the data source that you add in the code editor.

Yes

None

jdbcUrl

The Java Database Connectivity (JDBC) URL of the destination database. The jdbcUrl parameter is included in the connection configuration block:

-   You can specify only one value for a database. Multiple primary databases for the same database are not supported, such as in a bidirectional data import scenario.
    
-   The format of jdbcUrl is the same as the official Vertica format and can include additional connection parameters. For example, `jdbc:vertica://127.0.0.1:3306/database`.
    

Yes

None

username

The username for the data source.

Yes

None

password

The password for the specified username.

Yes

None

table

The JSON array specifies the names of the tables to sync.

**Note**

The table parameter must be included in the connection configuration block.

Yes

None

column

The columns in the destination table to which data is written. Separate columns with commas. For example, `"column": ["id", "name", "age"]`.

Yes

None

preSql

A standard SQL statement that is executed before data is written to the destination table. If the SQL statement operates on a table, use `@table` to represent the table name. The variable is replaced with the actual table name when the SQL statement is executed.

No

None

postSql

A standard SQL statement that is executed after data is written to the destination table.

No

None

batchSize

The number of records to commit in a single batch. This value can significantly reduce network interactions between the data synchronization system and Vertica and improve overall throughput. If this value is set too high, an OOM error may occur in the data synchronization process.

No

1024
