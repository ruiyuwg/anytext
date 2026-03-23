The Amazon Redshift data source provides a bidirectional channel to read from and write to Amazon Redshift. This lets you configure data sync tasks using the codeless UI or the code editor. This topic describes the data synchronization capabilities for Amazon Redshift.

## **Supported Amazon Redshift versions**

Amazon Redshift uses the redshift-jdbc4.2 Driver 2.1.0.1. For more information about the driver's capabilities, see [Configure a JDBC driver for Amazon Redshift](https://docs.aws.amazon.com/zh_cn/redshift/latest/mgmt/jdbc20-download-driver.html).

## **Supported field types**

For information about Amazon Redshift field types, see the [official Amazon Redshift documentation](https://docs.aws.amazon.com/zh_cn/redshift/latest/mgmt/jdbc20-data-type-mapping.html). The following table lists the supported primary field types.

**Amazon Redshift type**

**SQL type**

**Java type**

BIGINT

SQL\_BIGINT

Long

BOOLEAN

SQL\_BIT

Boolean

CHAR

SQL\_CHAR

String

DATE

SQL\_TYPE\_DATE

java.sql.Date

DECIMAL

SQL\_NUMERIC

BigDecimal

DOUBLE PRECISION

SQL\_DOUBLE

Double

GEOMETRY

SQL\_ LONGVARBINARY

byte\[\]

INTEGER

SQL\_INTEGER

Integer

OID

SQL\_BIGINT

Long

SUPER

SQL\_LONGVARCHAR

String

REAL

SQL\_REAL

Float

SMALLINT

SQL\_SMALLINT

Short

TEXT

SQL\_VARCHAR

String

TIME

SQL\_TYPE\_TIME

java.sql.Time

TIMETZ

SQL\_TYPE\_TIME

java.sql.Time

TIMESTAMP

SQL\_TYPE\_ TIMESTAMP

java.sql.Timestamp

TIMESTAMPTZ

SQL\_TYPE\_ TIMESTAMP

java.sql.Timestamp

VARCHAR

SQL\_VARCHAR

String

## **Preparations for data synchronization**

Before you synchronize data in DataWorks, you must establish network connections between your data sources and a [serverless resource group](/help/en/dataworks/user-guide/adding-and-using-serverless-resource-groups) or an exclusive resource group for Data Integration to enable the resource group to access the data sources over an internal network. We recommend that you use a serverless resource group for data synchronization. For information about how to establish network connections, see [Network connectivity solutions](/help/en/dataworks/user-guide/establish-a-network-connection-between-a-resource-group-and-a-data-source).

## **Create a data source**

Before you develop a synchronization task in DataWorks, you must add the required data source to DataWorks by following the instructions in [Data source management](/help/en/dataworks/user-guide/add-and-manage-data-sources/#concept-gpt-dn4-1fb). **You can view** **parameter descriptions** **in the DataWorks console to understand the meanings of the parameters when you add a data source**.

The following list describes some of the parameters for an Amazon Redshift data source.

-   **JDBC URL**: Enter the Java Database Connectivity (JDBC) connection string. The string must include the IP address, port number, database, and connection parameters. Both public and private IP addresses are supported. If you use a public IP address, ensure that the Data Integration resource group can access the Amazon Redshift host.
    
-   **Username**: Enter the username for the Amazon Redshift database.
    
-   **Password**: Enter the password for the specified username.
    

## **Develop a data sync task**

For information about the entry point for and the procedure of configuring a synchronization task, see the following configuration guides.

### **Guide to configuring an offline sync task for a single table**

-   For instructions, see [Configure a sync task in the codeless UI](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-codeless-ui#task-2364386) and [Configure a sync task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029).
    
-   For a complete list of parameters and a script example for the code editor, see [Appendix: Script examples and parameter descriptions](#a9df2b5035tof).
    

## **Appendix: Script examples and parameter descriptions**

### Configure a batch synchronization task by using the code editor

If you want to configure a batch synchronization task by using the code editor, you must configure the related parameters in the script based on the unified script format requirements. For more information, see [Configure a task in the code editor](/help/en/dataworks/user-guide/configure-a-batch-synchronization-node-by-using-the-code-editor#task-2351029). The following information describes the parameters that you must configure for data sources when you configure a batch synchronization task by using the code editor.

### **Reader script example**

```
{
  "stepType": "redshift"
  "parameter":
  {
    "datasource":"redshift_datasource",
    "table": "redshift_table_name",
    "where": "xxx=3",
    "splitPk": "id",
    "column":
    [
      "id",
      "table_id",
      "table_no",
      "table_name",
      "table_status"
    ]
  },
  "name": "Reader",
  "category": "reader"
}
```

### **Reader script parameters**

**Script parameter**

**Description**

**Required**

**Default value**

**datasource**

The name of the data source. In the code editor, the value of this parameter must match the name of the data source that you add.

Yes

None

**table**

The name of the source table.

Yes

None

**column**

The list of fields to sync. Separate fields with commas. Example: **"column":\["id","name","age"\]**.

To sync all columns, use an asterisk (\*). Example: **"column":\["\*"\]**.

Yes

None

**where**

The filter condition. An SQL statement is built from the specified **column**, **table**, and **where** parameters to extract data. For example, during testing, you can set the **where** condition to limit 10.

In a typical business scenario, you might sync data from the current day. To do this, set the **where** condition to **gmt\_create>$bizdate**.

-   The **where** condition enables efficient incremental data synchronization.
    
-   If you do not set this parameter or leave it empty, all data from the table is synchronized.
    

No

None

**splitPk**

If you specify **splitPk**, the system uses the specified field for data partitioning. This starts concurrent tasks to improve data sync efficiency.

No

None

### **Writer script example**

```
{
  "stepType": "redshift",// The plug-in name.
  "parameter":
  {
    "postSql":["delete from XXX;"],
    "preSql":["delete from XXX;"],
    "datasource":"redshift_datasource",// The data source name.
    "table": "redshift_table_name",// The table name.
    "writeMode": "insert",
    "batchSize": 2048,
    "column":
    [
      "id",
      "table_id",
      "table_no",
      "table_name",
      "table_status"
    ]
  },
  "name": "Writer",
  "category": "writer"
}
```

### **Writer script parameters**

**Script parameter**

**Description**

**Required**

**Default value**

**datasource**

The name of the data source. In the code editor, the value of this parameter must match the name of the data source that you add.

Yes

None

**table**

The name of the destination table.

Yes

None

**column**

The fields in the destination table to which you want to write data. Separate fields with commas. Example: **"column":\["id","name","age"\]**.

To write to all columns in order, use an asterisk (\*). Example: **"column":\["\*"\]**.

Yes

None

**preSql**

The SQL statement to execute before the data sync task starts. The codeless UI supports only one SQL statement. The code editor supports multiple SQL statements, such as a statement to purge old data.

No

None

**postSql**

The SQL statement to execute after the data sync task is complete. The codeless UI supports only one SQL statement. The code editor supports multiple SQL statements, such as a statement to add a timestamp.

No

None

**batchSize**

The maximum number of data entries to import in each batch.

No

2048

**writeMode**

Only insert is supported.

No

insert
