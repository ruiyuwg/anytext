DataWorks Data Integration allows you to write data to Alibaba Cloud SelectDB via single-table or Entire-Database Offline Synchronization. This topic outlines the supported features and configuration process.

## Supported SelectDB versions

SelectDB Writer uses MySQL Driver 5.1.47. For more information about the capabilities of the driver, see [MySQL Connectors](https://www.mysql.com/cn/products/connector/). The driver supports the following versions:

-   Standard SelectDB versions: 2.2.31 and 2.2.22.
    
-   Alibaba Cloud SelectDB versions: 2.4, 3.0, and 4.0.
    

## Limitations

Writing data to fields of the BITMAP, HLL (HyperLogLog), or QUANTILE\_STATE type is not supported.

## Supported field types

For a complete list of field types for each SelectDB version, see the **official SelectDB documentation**. The following table lists the supported field types for SelectDB 2.2.22 as an example.

**SelectDB field type**

**Offline write (SelectDB Writer)**

INT

Supported

BIGINT

Supported

LARGEINT

Supported

SMALLINT

Supported

TINYINT

Supported

BOOLEAN

Supported

DECIMAL

Supported

DOUBLE

Supported

FLOAT

Supported

CHAR

Supported

VARCHAR

Supported

STRING

Supported

DATE

Supported

DATEV2

Supported

DATETIME

Supported

DATETIMEV2

Supported

ARRAY

Supported

JSONB

Supported

BITMAP

Not supported

HLL (HyperLogLog)

Not supported

QUANTILE\_STATE

Not supported

## Preparations

Before you synchronize data in DataWorks, you must prepare the SelectDB environment as described in this topic. This ensures that the service runs as expected when you configure and run the SelectDB data synchronization task. The following sections describe the required preparations.

### Preparation 1: Confirm the SelectDB version

Data Integration has version requirements for SelectDB. For more information, see [Supported SelectDB versions](#section-koy-gjt-nid). You can check whether your SelectDB version meets the requirements in the [SelectDB console](https://cn.selectdb.com/).

### Preparation 2: Create an account and configure permissions

You must create a dedicated SelectDB account for DataWorks to access the data source. If you use the default admin user of the SelectDB data warehouse to log on, you must set a password for the admin user.

### Preparation 3: Configure network connectivity for SelectDB

SelectDB supports connections over a private network or the Internet. Data Integration lets you connect to SelectDB over either network type.

1.  Using a private network connection: We recommend that you use a private network connection because it provides higher bandwidth and a more stable connection. Before you use a private network connection, you must create an endpoint by following the instructions in the [Network Configuration](https://docs.selectdb.com/cloud/4.x/management-guide/connections/network-setting/) documentation. After the endpoint is created and its status changes from **Creating** to **Available**, and the connection status changes from **Connecting** to **Connected**, you must also bind the endpoint's VPC to the resource group's VPC. For more information about this operation, see [Network Connectivity Solution](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source#concept-ovl-zgv-42b).
    
2.  Connect over the Internet: You must add the EIPs of the resource group to the SelectDB whitelist. For more information about the configuration, see [Add a whitelist](/help/en/dataworks/user-guide/add-whitelist).
    

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

The following section describes several configuration items for a SelectDB data source:

-   **MySQL Connection Address**: Enter the Java Database Connectivity (JDBC) connection string. You can copy the **JDBC Connection String** from the **Connection Method** > **Other Methods** section in the SelectDB console. Both public and private IPs are supported.
    
-   **HTTP Connection Address**: Enter the HTTP protocol endpoint. You can copy the **HTTP Protocol Endpoint** from the **Connection Method** > **Other Methods** section in the SelectDB console. Both public and private IPs are supported.
    
-   **Username**: Enter the username for the SelectDB data warehouse.
    
-   **Password**: Enter the password for the specified username of the SelectDB data warehouse.
    

## Develop a data synchronization task

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Guide to configuring an offline synchronization task for a single table

-   For the procedure, see [Configure an offline synchronization task using the codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Configure an offline synchronization task using the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For a complete list of parameters and a script demo for the code editor, see [Appendix: SelectDB script demo and parameter description](#section-c9g-1dr-2c8).
    

### Configure an entire-database offline synchronization task

-   Supported data sources: MySQL and PostgreSQL.
    
-   For the procedure, see [Configure an Entire-Database Offline Synchronization task](/help/en/dataworks/user-guide/configure-a-database-wide-offline-synchronization-task).
    

## Appendix: SelectDB script demo and parameter description

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Use the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Writer script demo

```
{
  "stepType": "selectdb",// The plug-in name.
  "parameter":
  {
    "postSql":// The SQL statement to be executed after the data synchronization task runs.
    [],
    "preSql":
    [],// The SQL statement to be executed before the data synchronization task runs.
    "datasource":"selectdb_datasource",// The data source name.
    "table": "selectdb_table_name",// The table name.
    "column":
    [
      "id",
      "table_id",
      "table_no",
      "table_name",
      "table_status"
    ],
    "loadProps":{
      "format":"csv",// Specifies the CSV format.
      "column_separator": "\\x01",// Specifies the column delimiter.
      "line_delimiter": "\\x02"// Specifies the row delimiter.
    }
  },
  "name": "Writer",
  "category": "writer"
}
```

### Writer script parameters

**Parameter**

**Description**

**Required**

**Default value**

**datasource**

The name of the data source. The code editor supports adding data sources. The value of this parameter must be the same as the name of the added data source.

Yes

None

**table**

The name of the table that you want to synchronize.

Yes

None

**column**

The columns in the target table to which you want to write data. Separate the column names with commas (,). For example, `"column":["id","name","age"]`. If you want to write data to all columns in order, use `(*)`. For example, `"column":["*"]`.

Yes

None

**preSql**

The SQL statement to be executed before the data synchronization task runs. The codeless UI supports only one SQL statement. The code editor supports multiple SQL statements. For example, you can clear old data from a table before the task runs.

No

None

**postSql**

The SQL statement to be executed after the data synchronization task runs. The codeless UI supports only one SQL statement. The code editor supports multiple SQL statements. For example, you can add a timestamp after the task runs.

No

None

**maxBatchRows**

The maximum number of rows in each data batch to be imported. This parameter and the batchSize parameter control the import size of each batch. When the data in a batch reaches either of the thresholds, the import of that batch starts.

No

500000

**batchSize**

The maximum data volume of each data batch to be imported. This parameter and the maxBatchRows parameter control the import size of each batch. When the data in a batch reaches either of the thresholds, the import of that batch starts.

No

94371840

**maxRetries**

The number of retries after a data batch fails to be imported.

No

3

**labelPrefix**

The label prefix for each uploaded file. The final label is composed of `labelPrefix + UUID` to form a globally unique label. This ensures that data is not repeatedly imported.

No

datax\_selectdb\_writer\_

**loadProps**

The request parameters for COPY INTO are primarily used to configure the data import format. By default, data is imported in JSON format. If the loadProps parameter is not specified or is set to `"loadProps":{}`, the default JSON format is used. The configuration is as follows. (Currently, SelectDB supports only `strip_outer_array=true`).

```
"loadProps": {
    "format": "json",
    "strip_outer_array":true
}
```

To import data in CSV format, you can specify the format as CSV and configure the row and column delimiters, as shown in the following example. If you do not specify the row and column delimiters, all imported data is converted to strings. The tab character (`\t`) is used as the column delimiter, and the newline character (`\n`) is used as the row delimiter. This data is then combined into a CSV file for import into SelectDB.

```
"loadProps": {
    "format":"csv",
    "column_separator": "\\x01",
    "line_delimiter": "\\x02"
}
```

No

None

**clusterName**

The name of the SelectDB Cloud cluster. You can view the name in the [SelectDB console](https://cn.selectdb.com/).

No

None

**flushInterval**

The time interval for writing data batches, in milliseconds. If the values of the maxBatchRows and batchSize parameters are large, the system may import the data based on the write interval before the specified data volume is reached.

No

30000
