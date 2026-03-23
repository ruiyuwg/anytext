Synchronizing data from DataHub to Hologres is ideal for scenarios that require real-time data analytics, real-time monitoring, real-time reports, and complex data structure processing. Combining the capabilities of DataHub and Hologres improves the efficiency and accuracy of data processing and analysis. This topic describes how to create a DataHub data synchronization task and provides answers to frequently asked questions (FAQs).

## Background information

DataHub provides a data synchronization feature with data sink and source capabilities. You can use this feature to synchronize data from a topic to other Alibaba Cloud products in `real-time or Near Real-Time`, which enables data flow between the products. For more information about the DataHub data synchronization feature, see [Overview](/help/en/datahub/user-guide/overview).

The following table describes the data type mapping between DataHub and Hologres.

**DataHub**

**Hologres**

Project

Database

Topic

Table

## Synchronization Scenarios and Strategies

### Synchronization Scenarios

**Synchronization Scenario**

**Description**

Row-by-row insertion

Insert data from the source database into the target database row by row. This applies to scenarios where you synchronize all DataHub data to Hologres.

Playback

Analyze and re-execute binary logging (Binlog) database operation logs to apply source database changes to the target database, ensuring data consistency. This applies to scenarios where DTS synchronizes data to DataHub, and then DataHub data synchronizes to Hologres, with DataHub acting as the Binlog.

**Note**

When DTS synchronizes data to DataHub, it adds auxiliary columns to the data columns to record operation information. The naming of these auxiliary columns in DTS synchronization to DataHub varies between old and new rules. For more information, see [Modify Auxiliary Column Rules for Data Synchronization](/help/en/dts/user-guide/modify-the-naming-rules-for-additional-columns).

### Synchronization Strategies

**Synchronization Strategy**

**Description**

Overwrite (replace)

If a primary key conflict occurs during data write, new data overwrites old data and is written, ensuring data consistency between the target and source databases.

Ignore (ignore)

If a primary key conflict occurs during data write, ignore new data. This means data is not updated, preventing duplicate data import and overwrite, and maintaining data integrity in the target database.

## Notes

-   You can only synchronize data of the TUPLE type from DataHub to Hologres.
    
-   Before you write data to a partitioned table, you must create a child table in Hologres. For more information, see [CREATE PARTITION TABLE](/help/en/hologres/developer-reference/create-partition-table#concept-1941641).
    
-   Each sync task consumes a specific number of connections. The number of connections that a task consumes is equal to the number of shards in the DataHub topic.
    

## Preparations

1.  Enable the DataHub service and prepare the DataHub data. For more information, see [Quick Start (Synchronization Example)](/help/en/datahub/getting-started/quick-start).
    
2.  Purchase a Hologres instance and create a table. This topic uses the `lineitem` table as an example. For more information, see [Purchase a Hologres Instance](/help/en/hologres/getting-started/purchase-a-hologres-instance) and [Create a Table in Hologres Using HoloWeb](/help/en/hologres/getting-started/connect-to-holoweb).
    
    The following table describes the data type mapping between DataHub and Hologres.
    
    **DataHub**
    
    **Hologres**
    
    TINYINT
    
    SMALLINT
    
    SMALLINT
    
    SMALLINT
    
    INTEGER
    
    INTEGER
    
    BIGINT
    
    BIGINT
    
    FLOAT
    
    REAL
    
    DOUBLE
    
    DOUBLE PRECISION
    
    DECIMAL
    
    DECIMAL
    
    STRING
    
    TEXT
    
    BOOLEAN
    
    BOOLEAN
    
    TIMESTAMP
    
    TIMESTAMPTZ
    
    The following is an example of a table creation statement.
    
    ```
    BEGIN;
    CREATE TABLE lineitem ( 
    L_ORDERKEY BIGINT NOT NULL,
    L_PARTKEY BIGINT NOT NULL,
    L_SUPPKEY BIGINT NOT NULL,
    L_LINENUMBER BIGINT NOT NULL,
    L_QUANTITY DECIMAL(20,10),
    L_EXTENDEDPRICE DECIMAL(20,10),
    L_DISCOUNT DECIMAL(20,10),
    L_TAX DECIMAL(20,10),
    L_RETURNFLAG TEXT,
    L_LINESTATUS TEXT,
    L_SHIPDATE TIMESTAMPTZ,
    L_COMMITDATE TIMESTAMPTZ,
    L_RECEIPTDATE TIMESTAMPTZ,
    L_SHIPINSTRUCT TEXT,
    L_SHIPMODE TEXT,
    L_COMMENT TEXT
    );
    CALL set_table_property('lineitem', 'orientation', 'column');
    COMMIT;
    ```
    

## Create a Synchronization Task

1.  Log on to the [DataHub service console](https://dhs.console.alibabacloud.com/). Click the topic that you created to go to the topic details page.
    
2.  In the upper-right corner of the topic details page, click **+Sync**.
    
3.  Click **Hologres** and configure the parameters on the **Create Connector** page.
    
    **Parameter**
    
    **Description**
    
    **Instance**
    
    The instance ID of Hologres. Go to the [Hologres Management Console](https://hologram.console.alibabacloud.com/#/instance) to get the **Instance ID**.
    
    **Database**
    
    The name of the Hologres database that receives DataHub data.
    
    **Table**
    
    The name of the Hologres table, `lineitem`, that receives DataHub data.
    
    **Primary Key Conflict Policy**
    
    The data update policy when a primary key conflict occurs. Values:
    
    -   **replace** (default): If a primary key conflict occurs during data write, new data overwrites old data.
        
    -   **ignore**: If a primary key conflict occurs during data write, ignore new data. This means data is not updated, and old data is retained.
        
    
    For more information about data synchronization strategies, see [Synchronization Strategies](#421df860fckki).
    
    **Synchronization Scenario**
    
    The usage scenario for data synchronization. Values:
    
    -   **default** (default): Row-by-row insertion.
        
    -   **dts:** Select this parameter if you enable new auxiliary column rules when DTS synchronizes data to DataHub.
        
    -   **dts\_old**: Select this parameter if you do not enable new auxiliary column rules when DTS synchronizes data to DataHub.
        
    
    For more information about data synchronization scenarios, see [Synchronization Scenarios](#21217d1a37pt9).
    
    **Import Fields**
    
    The fields to import into Hologres. Import some or all fields as needed.
    
    **Authentication Mode**
    
    Default is AccessKey.
    
    **AccessKey ID**
    
    The AccessKey ID to access the Hologres instance. Click [AccessKey Management](https://usercenter2-intl.console.alibabacloud.com/?spm=5176.2020520153.nav-right.dak.3bcf415dCWGUBj#/manage/ak) to get the user's AccessKey ID.
    
    **AccessKey Secret**
    
    The AccessKey Secret to access the Hologres instance. Click [AccessKey Management](https://usercenter2-intl.console.alibabacloud.com/?spm=5176.2020520153.nav-right.dak.3bcf415dCWGUBj#/manage/ak) to get the AccessKey Secret.
    
    **Timestamp Unit**
    
    The synchronization time unit. Values:
    
    -   **MICROSECOND**: Microsecond, default value.
        
    -   **MILLISECOND**: Millisecond.
        
    -   **SECOND**: Second.
        
    
4.  Click **Create** to synchronize data from DataHub to Hologres.
    
    After you create the connector, you can view the real-time data synchronization status on the **Sync Tasks** tab of the topic details page.
    
5.  Query the data in Hologres.
    
    Connect to a development tool for the Hologres instance to query the data that is synchronized to Hologres in real-time. For more information about how to connect to Hologres, see [Connect to Hologres](/help/en/hologres/user-guide/connect-hologres-tools/#concept-1664384). You can execute the following sample query statement.
    
    ```
    SELECT COUNT(*) FROM lineitem;
    ```
    

## FAQ

This section describes common errors that may occur when you use Hologres and provides solutions to help you troubleshoot and resolve the issues.

-   Question 1
    
    -   Error message
        
        ```
        ErrorMessage: Import field not found in dest schema.
        ```
        
    -   Cause
        
        -   The import fields specified in the sync task do not exist in the Hologres table.
            
        -   The sync scenario for the task is set to default, but the import fields include auxiliary columns that are generated when DTS synchronizes data to DataHub.
            
    -   Solution
        
        -   Recreate the Hologres table and add the missing import fields. Alternatively, you can modify the sync task to remove the import fields that do not exist in the Hologres table.
            
        -   Recreate the sync task and set the synchronization scenario to **dts** or **dts\_old**.
            

-   Question 2
    
    -   Error message
        
        ```
        ErrorMessage: Column type not match with Holo column.
        ```
        
    -   Cause
        
        The data type of a field in the DataHub topic does not match the data type of the corresponding field in the Hologres table.
        
    -   Solution
        
        Based on the data type mapping, recreate the Hologres table with the correct field types.
        
-   Question 3
    
    -   Error message
        
        ```
        ErrorMessage: Not import column xxx not allow null and no default value.
        ```
        
    -   Cause
        
        Some fields in the Hologres table are not included in the import fields of the sync task. However, these fields are configured with the \`NOT NULL\` property and do not have a default value.
        
    -   Solution
        
        Recreate the Hologres table. For fields that are not included in the import fields of the sync task, do not configure the \`NOT NULL\` property or set a default value for them.
