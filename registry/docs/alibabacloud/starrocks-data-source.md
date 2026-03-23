The StarRocks data source lets you read data from and write data to StarRocks. This topic describes the capabilities that DataWorks supports for StarRocks data synchronization.

## Supported versions

-   All versions of EMR Serverless StarRocks are supported.
    
-   E-MapReduce on ECS: [StarRocks 2.1](/help/en/emr/emr-on-ecs/user-guide/starrocks/).
    
-   [StarRocks Community Edition](https://www.starrocks.io/) is supported.
    
    **Note**
    
    -   DataWorks connects to StarRocks only over an internal network. Therefore, the Community Edition of StarRocks must be deployed on E-MapReduce on ECS.
        
    -   If you encounter compatibility issues with this data source, submit a ticket.
        
    

## Limitations

-   For real-time synchronization of an entire database from MySQL to StarRocks, the destination StarRocks table must use a primary key model.
    
-   When you perform real-time synchronization of an entire database from MySQL to StarRocks, DDL operations other than TRUNCATE are not supported. You can either ignore these DDL operations or configure the task to report an error.
    

## Supported data types

Only numeric, string, and date data types are supported.

## Network connectivity

### **EMR Serverless StarRocks**

To ensure network connectivity, you must add the IP addresses of the DataWorks resource group to the IP address allowlist of the EMR Serverless StarRocks instance.

-   For the IP addresses of DataWorks resource groups, see [General configurations: Add IP addresses to an allowlist](/help/en/dataworks/user-guide/add-whitelist).
    
-   You can add IP addresses to the allowlist of an EMR Serverless StarRocks instance in the EMR console.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8472926271/p723079.png)
    

### **Self-managed StarRocks**

Ensure that the DataWorks resource group can access the **query port**, **FE port**, and **BE port** of your StarRocks instance. The default ports are 9030, 8030, and 8040.

## **Add a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

Select a connection mode for StarRocks based on your network environment:

#### **Use case 1: Internal network connection (recommended)**

An internal network connection provides low latency and high security without requiring public network access.

-   **Use case**: Your StarRocks instance and the Serverless resource group are in the same VPC.
    
-   **Both Alibaba Cloud instance mode and Connection string mode are supported**:
    
    -   Select **ApsaraDB for RDS**: Directly select a StarRocks instance in the same VPC. The system automatically obtains the connection information.
        
    -   Select **User-created Data Store with Public IP Addresses**: Manually enter the internal address or IP address, port, and Load URL of the instance.
        

#### **Use case 2: Public network connection**

Data transfer over the public network has security risks. Use security controls such as IP allowlists and IP-based authentication.

-   **Use case**: You need to access the StarRocks instance over the public network, for example, for cross-region access or from an on-premises environment.
    
-   **Only Connection string mode is supported. Ensure that public network access is enabled for your StarRocks instance**:
    
    -   Select **User-created Data Store with Public IP Addresses**: Manually enter the public address or IP address, port, and Load URL of the instance.
        

**Note**

By default, Serverless resource groups cannot access the public network. To connect to a StarRocks instance by using a public endpoint, you must configure a [NAT Gateway](/help/en/nat-gateway/getting-started/use-the-snat-feature-of-an-internet-nat-gateway-to-access-the-internet) and an Elastic IP address (EIP) for the bound VPC to enable public network access. You must also ensure that the Serverless resource group can access the **query port**, **FE port**, and **BE port** of your StarRocks instance. The default ports are 9030, 8030, and 8040.

If you are using Alibaba Cloud EMR StarRocks Serverless, set **Host Address/IP Address** to **Internal Endpoint** or **Public network address**, and the port to **a query port**.

-   **FE**: You can obtain the FE information on the instance details page.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0397975371/p723450.png)
    
-   **Database**: After connecting to the instance by using **EMR StarRocks Manager**, you can view the corresponding databases in the **SQL Editor** or **Metadata Management**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0397975371/p723457.png)
    
    **Note**
    
    To create a database, run SQL commands directly in the SQL editor.
    

## Data synchronization task development

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### Batch synchronization for a single table

-   Supported data sources: All data source types supported by the Data Integration module.
    
-   Procedure: For more information, see [Use the Codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Use the Code Editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For the full list of parameters and a code example for the Code Editor, see [Appendix: Code and parameters](#section-tq1-13l-tod).
    

### **Real-time synchronization for a single table**

-   Supported data sources: Kafka
    
-   Guide: [Configure a full-database real-time synchronization task](/help/en/dataworks/user-guide/configure-a-data-synchronization-solution-in-data-integration)
    

### **Batch synchronization for a full database**

-   Supported data sources: MySQL
    
-   Guide: [Configure a full-database real-time synchronization task](/help/en/dataworks/user-guide/configure-a-data-synchronization-solution-in-data-integration)
    

### **Real-time synchronization for a full database**

-   Supported data sources: MySQL, Oracle, and PolarDB
    
-   Guide: [Configure a full-database real-time synchronization task](/help/en/dataworks/user-guide/configure-a-data-synchronization-solution-in-data-integration)
    

## Appendix: Code and parameters

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Use the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### Reader code example

```
{
    "stepType": "starrocks",
    "parameter": {
        "selectedDatabase": "didb1",
        "datasource": "starrocks_datasource",
        "column": [
            "id",
            "name"
        ],
        "where": "id>100",
        "table": "table1",
        "splitPk": "id"
    },
    "name": "Reader",
    "category": "reader"
}
```

### Reader parameters

**Parameter**

**Description**

**Required**

**Default**

**datasource**

The name of the StarRocks data source.

Yes

None

**selectedDatabase**

The name of the StarRocks database.

No

The database name that you specified when you configured the StarRocks data source.

**column**

The collection of column names in the configured table to be synchronized. If you want to add a SET\_VAR hint when you read data from StarRocks, you can add the hint before the first column name in column. For example, if the column to be synchronized is id and you want to add `SET_VAR(enable_spill = true)`, configure column as `[ "/*+ SET_VAR(enable_spill = true)*/ id"]`.

Yes

None

**where**

In real-world business scenarios, a common filter for synchronizing data of the current day is to specify the where clause as `gmt_create>${bizdate}`.

-   You can use the where clause to effectively synchronize incremental business data.
    
-   If you do not provide a where clause, or a key or value for where, the data synchronization is treated as a full data synchronization.
    

No

None

**table**

The source table.

Yes

None

**splitPk**

When StarRocks Reader extracts data, you can specify the splitPk parameter to shard data based on the field provided for splitPk. This starts concurrent data synchronization tasks and improves efficiency. We recommend using the table's primary key as the split key because primary keys are typically evenly distributed, which helps prevent data hot spots in the resulting shards.

No

None

### Writer code example

```
{
    "stepType": "starrocks",
    "parameter": {
        "selectedDatabase": "didb1",
        "loadProps": {
            "row_delimiter": "",
            "column_separator": ""
        },
        "datasource": "starrocks_public",
        "column": [
            "id",
            "name"
        ],
        "loadUrl": [
            "1.1.X.X:8030"
        ],
        "table": "table1",
        "preSql": [
            "truncate table table1"
        ],
        "postSql": [
        ],
        "maxBatchRows": 500000,
        "maxBatchSize": 5242880,
        "strategyOnError": "exit"
    },
    "name": "Writer",
    "category": "writer"
}
```

### Writer parameters

**Parameter**

**Description**

**Required**

**Default**

**datasource**

The name of the StarRocks data source.

Yes

None

**selectedDatabase**

The name of the StarRocks database.

No

The database name that you specified when you configured the StarRocks data source.

**loadProps**

The request parameters for a StarRocks StreamLoad job. You can configure import parameters for importing data in the CSV format. If no special configurations are required, set this parameter to `{}`. The following parameters are available:

-   column\_separator: The column separator for CSV imports. The default value is .
    
-   row\_delimiter: The row delimiter for CSV import. Default: .
    

If your data contains or , you must specify other characters as delimiters. The following example shows how to use special characters:

```
{"column_separator":"","row_delimiter":""}
```

StreamLoad also supports data import in the JSON format. You can set the format parameter to json:

```
{
  "format": "json"
}
```

The following parameters can be configured for the JSON format:

-   **strip\_outer\_array**: Specifies whether to strip the outermost array structure. Valid values: `true` and `false`. Default value: `false`.
    
    In real-world scenarios, the JSON data to be imported may be enclosed in an outer array structure `[]`. In this situation, we recommend that you set this parameter to `true`. StarRocks then strips the outer square brackets `[]` and imports each element within the brackets as a separate row of data. If you set this parameter to `false`, StarRocks parses the entire JSON data as a single array and imports it as a single row of data.
    
    For example, the JSON data to import is as follows:
    
    ```
    [{"category":1,"author":2},{"category":3,"author":4}]
    ```
    
    -   If you set this parameter to `true`, StarRocks will parse `{"category":1,"author":2}` and `{"category":3,"author":4}` into two separate rows and import them into the target StarRocks table.
        
    -   If you set this parameter to `false`, StarRocks will parse the entire JSON array into a single row of data and import it into the target StarRocks table.
        
-   **ignore\_json\_size**: Specifies whether to check the size of the JSON body in an HTTP request.
    
    **Note**
    
    By default, the size of a JSON body in an HTTP request cannot exceed `100 MB`. If the JSON body size exceeds `100 MB`, the error `The size of this batch exceed the max size [104857600] of json type data data [8617627793].Set ignore_json_size to skip check,although it may lead huge memory consuming.` is reported. To prevent this error, you can add the `ignore_json_size: true` setting to the `HTTP` request header to bypass the JSON body size check.
    
-   **compression**: Specifies the compression algorithm to use during the StreamLoad data transmission process. The supported algorithms are `GZIP`, `BZIP2`, `LZ4_FRAME`, and `ZSTD`.
    
-   **strict\_mode**: Specifies whether to enable strict mode.
    
    Valid values:
    
    -   `true`: Enables strict mode. StarRocks filters out incorrect data rows, imports only the correct data rows, and returns details about the incorrect data.
        
    -   `false`: Disables strict mode. StarRocks converts fields that fail the conversion to `NULL` values, and imports the error rows that contain `NULL` values along with the valid data rows.
        
    
    Default value: `false`.
    

Yes

None

**column**

The destination columns to write data to.

Yes

None

**loadUrl**

Enter the StarRocks FrontEnd IP and HTTP port (the default is `8030`). If you have multiple FrontEnd nodes, you can enter all of them and separate the entries with a comma (,).

Yes

None

**table**

The destination table.

Yes

None

**preSql**

An SQL statement to execute before the synchronization task starts. For example, you can use TRUNCATE TABLE tablename to clear the existing data in the table.

No

None

**postSql**

An SQL statement to execute after the synchronization task finishes.

No

None

**maxBatchRows**

The maximum number of rows per write batch.

No

500000

**maxBatchSize**

The maximum data size per write batch, in bytes.

No

5242880

**strategyOnError**

The policy for handling exceptions during batch writes.

Valid values:

-   `exit`: If an exception occurs while writing data to StarRocks, the synchronization task fails and exits.
    
-   `batchDirtyData`. If an exception occurs when writing data to StarRocks, the current batch of data is recorded as dirty data.
    

Default value: `exit`.

No

exit
