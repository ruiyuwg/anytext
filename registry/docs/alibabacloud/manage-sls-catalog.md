An SLS Catalog automatically parses logs in a Simple Log Service (SLS) Logstore to infer the table schema. After you configure an SLS Catalog, you can directly access the SLS Logstore in your Flink jobs without declaring the SLS table schema in Flink SQL. This enables you to retrieve field information seamlessly. This topic describes how to create, view, use, and delete an SLS Catalog.

## Context

This topic covers the following aspects of managing SLS Catalogs:

-   [Create an SLS Catalog](#section-f64-um5-5q7)
    
-   [View an SLS Catalog](#3296326000la0)
    
-   [View an SLS Logstore](#b6ed3d1051mec)
    
-   [Use an SLS Catalog](#section-6ob-zr6-c48)
    
-   [Delete an SLS Catalog](#section-bj2-yzb-kn6)
    

## Limits

-   All fields are parsed as the String type. If you require other data types, use Flink SQL to convert them.
    
-   Only Flink jobs that use Ververica Runtime (VVR) 6.0.7 or later support SLS Catalogs.
    
-   You cannot modify an existing SLS Catalog using DDL statements.
    
-   You can only query data tables. Creating, modifying, or deleting databases and tables is not supported.
    
-   Tables provided by an SLS Catalog can be used as source tables and sink tables in Flink SQL jobs. They cannot be used as lookup dimension tables.
    

## Notes

An SLS Catalog generates a table schema by parsing sample data. For a Logstore with inconsistent data formats, the catalog retains all columns by default to return the widest possible schema. If the data format of the Logstore changes, the table schema obtained by the SLS Catalog at different times can be inconsistent. If the inferred schema differs before and after a job restart, job execution issues can occur.

For example, a Flink SQL job references a table in an SLS Catalog. If the job restarts from a savepoint after running for a period, it might retrieve a schema that differs from the one used in the previous run. The execution plan of the SQL job uses the version generated with the previous schema. This can cause mismatches in downstream operations, such as filter conditions or field value retrieval. Therefore, create an SLS table using \`CREATE TEMPORARY TABLE\` in your Flink SQL job to use a fixed schema.

## Create an SLS Catalog

You can configure an SLS Catalog in the UI or by running an SQL command. We recommend using the UI.

### Use the UI

1.  Go to the Data Management page.
    
    1.  Log on to the [Realtime Compute console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai), and click **Actions** in the **Console** column of the target workspace.
        
    2.  Click **Data Management**.
        
2.  Click **Create Catalog**, select SLS, and then click **Next**.
    
3.  Configure the parameters.
    
    **Important**
    
    After you create a catalog, these settings cannot be changed. To change the settings, delete the catalog and create a new one.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3136405171/p787016.png)
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **Required**
    
    **Remarks**
    
    catalog name
    
    String
    
    The name of the SLS Catalog.
    
    Yes
    
    Enter a custom English name.
    
    endpoint
    
    String
    
    The endpoint address.
    
    Yes
    
    For more information, see [Endpoints](/help/en/sls/endpoints).
    
    project
    
    String
    
    The name of the SLS project.
    
    Yes
    
    None.
    
    accessId
    
    String
    
    The AccessKey ID of your Alibaba Cloud account.
    
    Yes
    
    For more information, see [How do I view the AccessKey ID and AccessKey secret?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe)
    
    **Important**
    
    To protect your AccessKey information, use variables to specify the AccessKey value. For more information, see [Project variables](/help/en/flink/realtime-flink/user-guide/manage-keys#c4662f9db50gb).
    
    accessKey
    
    String
    
    The AccessKey secret of your Alibaba Cloud account.
    
    Yes
    
4.  Click **Confirm**.
    
5.  You can view the created catalog in the left **Metadata** area.
    

### SQL commands

1.  In the [Data Query](/help/en/flink/realtime-flink/user-guide/sql-scripts) editor, enter the command to configure the SLS Catalog.
    
    ```
    CREATE CATALOG <catalogName> WITH(
      'type'='sls',
      'endpoint'='<brokers>',
      'project'='project',
      'accessId'='${secret_values.ak_id}',
      'accessKey'='${secret_values.ak_secret}'
    )
    ```
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **Required**
    
    **Remarks**
    
    catalogName
    
    String
    
    The name of the SLS Catalog.
    
    Yes
    
    Enter a custom English name.
    
    type
    
    String
    
    The type of the catalog.
    
    Yes
    
    The value is fixed to sls.
    
    endpoint
    
    String
    
    The endpoint address.
    
    Yes
    
    For more information, see [Endpoints](/help/en/sls/endpoints).
    
    project
    
    String
    
    The name of the SLS project.
    
    Yes
    
    None.
    
    accessId
    
    String
    
    The AccessKey ID of your Alibaba Cloud account.
    
    Yes
    
    For more information, see [How do I view the AccessKey ID and AccessKey secret?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe)
    
    **Important**
    
    To protect your AccessKey information, use secrets management to specify the AccessKey ID value. For more information, see [Manage variables](/help/en/flink/realtime-flink/user-guide/manage-keys).
    
    accessKey
    
    String
    
    The AccessKey secret of your Alibaba Cloud account.
    
    Yes
    
    For more information, see [How do I view the AccessKey ID and AccessKey secret?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe)
    
    **Important**
    
    To protect your AccessKey information, use secrets management to specify the AccessKey secret value. For more information, see [Manage variables](/help/en/flink/realtime-flink/user-guide/manage-keys).
    
2.  Select the code that is used to create a catalog and click **Run** on the left side of the line numbers. You can also position your cursor on the code that is used to create a catalog and right-click **Run**.
    
3.  In the left **Metadata** area, view the created catalog.
    

## View an SLS Catalog

After you configure an SLS Catalog, follow these steps to view the SLS metadata.

1.  Go to the Data Management page.
    
    1.  Log on to the [Realtime Computing for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
        
    2.  In the **Actions** column for the target workspace, click **Console**.
        
    3.  Click **Data Management**.
        
2.  On the **Catalog List** page, view the **Name** and **Type** columns.
    
    **Note**
    
    To view information about a Logstore in a catalog, click **View**.
    

## View an SLS Logstore

1.  In the [Data Query](/help/en/flink/realtime-flink/user-guide/sql-scripts) editor, enter the following command.
    
    ```
    DESCRIBE `${catalog_name}`.`${project_name}`.`${logstore_name}`;
    ```
    
    **Parameter**
    
    **Description**
    
    ${catalog\_name}
    
    The name of the SLS Catalog.
    
    ${project\_name}
    
    The name of the SLS project.
    
    ${logstore\_name}
    
    The name of the SLS Logstore.
    
2.  Select the code that is used to view a catalog and click **Run** next to the line numbers on the left side of the code.
    
    Upon successful execution, you can view the table details in the results.
    
    ![表信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5853484561/p436785.png)
    

## Use an SLS Catalog

-   As a source table to read data from an SLS Logstore.
    
    ```
    INSERT INTO ${other_sink_table}
    SELECT...
    FROM `${catalog_name}`.`${project_name}`.`${logstore_name}`/*+OPTIONS('startTime'='2023-06-01 00:00:00')*/;
    ```
    
    **Note**
    
    To specify additional \`WITH\` parameters when you use a table from the SLS Catalog, use [SQL Hints](https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/table/sql/queries/hints/) to add the parameters. For example, the preceding SQL statement uses SQL Hints to specify that data consumption starts from '2023-06-01 00:00:00'. For more information about other parameters, see [Simple Log Service connector](/help/en/flink/realtime-flink/developer-reference/log-service-connector).
    
-   As a sink table to write data to an SLS Logstore.
    
    ```
    INSERT INTO `${catalog_name}`.`${project_name}`.`${logstore_name}`
    SELECT ... 
    FROM ${other_source_table}
    ```
    

**Important**

Before reading from a source Logstore or writing to a destination Logstore, you must enable indexing for the Logstore. This is because the catalog reads data from the sink table to verify that the schema of the data to be written matches the schema of the destination SLS Logstore. For more information about how to enable indexing, see [Create an index](/help/en/sls/create-indexes).

## Delete an SLS Catalog

You can delete an SLS Catalog in the UI or by running an SQL command. We recommend using the UI.

**Warning**

Deleting an SLS Catalog does not affect running jobs. However, jobs that use a table from the deleted catalog will fail to find the table when they are published or restarted. Proceed with caution.

### UI method

1.  Go to the Data Management page.
    
    1.  Log on to the [Realtime Computing for Apache Flink console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
        
    2.  Click Console in the Actions column of the target workspace.
        
    3.  Click **Data Management**.
        
2.  On the **Catalog List** page, click **Delete** in the **Actions** column next to the target catalog name.
    
3.  In the message that appears, click **Delete**.
    
4.  In the **Metadata** area on the left, verify that the target catalog has been deleted.
    

### **SQL command**

1.  In the [Data Query](/help/en/flink/realtime-flink/user-guide/sql-scripts) editor, enter the following command.
    
    ```
    DROP CATALOG ${catalog_name};
    ```
    
    ${catalog\_name} is the name of the target SLS Catalog that you want to delete.
    
2.  Right-click the command that drops the catalog and select **Run**.
    
3.  In the **Metadata** area on the left, check if the target catalog has been deleted.
    

## Details of table information from an SLS Catalog

To make tables easier to use, an SLS Catalog adds default configuration parameters and metadata to the tables it derives. The following list describes the details of the tables obtained from an SLS Catalog:

-   Schema inference for SLS tables
    
    When an SLS Catalog parses logs to get a topic's schema, it consumes one message to parse the data schema. The SLS Catalog parses field names and types from the SLS logs. Because SLS stores all log data as strings, all fields are of the String type.
    
-   Default table parameters
    
    **Parameter**
    
    **Description**
    
    **Remarks**
    
    connector
    
    The type of the connector.
    
    The value is fixed to sls.
    
    endpoint
    
    The endpoint address.
    
    For more information, see [Endpoints](/help/en/sls/endpoints).
    
    project
    
    The name of the SLS project.
    
    None.
    
    logstore
    
    The name of the SLS Logstore or metricstore.
    
    None.
    
    accessId
    
    The AccessKey ID of your Alibaba Cloud account.
    
    For more information, see [How do I view the AccessKey ID and AccessKey secret?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe)
    
    **Important**
    
    To protect your AccessKey information, use secrets management to specify the AccessKey ID value. For more information, see [Manage variables](/help/en/flink/realtime-flink/user-guide/manage-keys).
    
    accessKey
    
    The AccessKey secret of your Alibaba Cloud account.
    
    For more information, see [How do I view the AccessKey ID and AccessKey secret?](/help/en/flink/realtime-flink/support/reference#24cde8802a8qe)
    
    **Important**
    
    To protect your AccessKey information, use secrets management to specify the AccessKey secret value. For more information, see [Manage variables](/help/en/flink/realtime-flink/user-guide/manage-keys).
