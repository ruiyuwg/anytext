A Hologres dynamic table is a powerful feature that automatically performs incremental data updates and accelerates queries. The DataWorks **data catalog** provides an intuitive visual interface for managing Hologres dynamic tables. You can use DataWorks to create, configure, monitor, and manage dynamic tables without writing complex Data Definition Language (DDL) statements. This simplifies the process of building real-time and near-real-time data applications.

## **Limits**

-   The Hologres instance must be **V3.1 or later**.
    
-   For more information about the features and limits of Hologres dynamic tables, see [Dynamic table supported features and limits](/help/en/hologres/user-guide/dynamic-table-support-ranges-and-limits).
    

## **Preparations**

-   Create a DataWorks workspace with **Use Data Studio (New Version)** selected, and attach a computing resource group that includes the Hologres engine. For more information, see [Configure a workspace](/help/en/dataworks/user-guide/create-and-manage-workspaces/) and [Resource Management](/help/en/dataworks/user-guide/create-and-manage-compute-resources/).
    
-   Create a Hologres data source in DataWorks and ensure that it passes the connectivity test. For more information, see [Attach a Hologres computing resource](/help/en/dataworks/user-guide/create-a-hologres-data-source).
    

## **Quick start: Create an auto-refreshing dynamic table**

This quick start shows you how to create a **non-partitioned** dynamic table. The table automatically and incrementally aggregates order data from the source table `orders` and ensures the data is refreshed within five minutes.

#### **Step 1: Prepare data**

Before you begin, prepare a source table in your Hologres database. To enable incremental refresh, the source table must have binary logging (binlog) enabled. Run the following SQL statement in a DataWorks Hologres SQL node or any Hologres client to create an order table named `orders`:

```
-- Create the source table and enable Binlog to support incremental refresh
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    user_id INT,
    user_name TEXT,
    price FLOAT,
    order_time TIMESTAMPTZ
) WITH (
    binlog_level = 'replica', -- Key: Enable Binlog
    binlog_ttl = '86400'      -- Binlog retention period in seconds, for example, one day
);

-- Insert some initial data
INSERT INTO orders VALUES 
(1, 101, 'Alice', 99.9, NOW()),
(2, 102, 'Bob', 19.5, NOW()),
(3, 101, 'Alice', 25.0, NOW());
```

#### **Step 2: Go to the dynamic table creation wizard**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the navigation pane on the left, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7618107371/p840002.png) icon to open the **Data Catalog** module.
    
3.  In the **Data Catalog** area, find the target Hologres instance, expand the folders, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7618107371/p888101.png) icon next to **Dynamic Table**, and open the create dynamic table page.
    
    **Note**
    
    -   If you use a workspace in standard mode, a **Development** database instance and a **Production** database instance are listed under the Hologres **Data Catalog**. Create and test the Hologres dynamic table in the development database first. After you confirm that the table works as expected, create it in the production environment.
        
    -   In a workspace in standard mode, dynamic tables that you create in the development database are not automatically synchronized to the production database. To query and use these tables in the production database, you must create the same Hologres dynamic tables in the production database.
        
    

#### **Step 3: Define the query logic and precompile (key step)**

After you open the dynamic table creation page, enter the query logic and precompile it.

1.  **Enter basic information**:
    
    -   **Dynamic Table Name**: Enter a unique table name, such as `dt_user_orders_agg`.
        
    -   **Description**: Enter the purpose of the table, such as "Aggregated order statistics by user".
        
2.  **Write the data generation SQL**: On the **Data Generation SQL** tab in the **Field Information** area, write the `SELECT` query that defines the data logic of the dynamic table.
    
    **Important**
    
    Enter only the `SELECT` statement itself. Do not include the `CREATE DYNAMIC TABLE` DDL command. The system automatically parses the configurations and displays the complete DDL statement on the right.
    
    ```
    SELECT 
        user_id,
        user_name,
        COUNT(*) AS order_count,
        SUM(price) AS total_price
    FROM public.orders
    GROUP BY user_id, user_name;
    ```
    
3.  **Precompile the code**:
    
    After you write the code, click the **Precompile** button above the SQL editor. **Precompilation** is a core feature that interacts with the Hologres engine in real time to perform the following tasks:
    
    -   **Validate syntax**: Checks if your `SELECT` statement complies with SQL standards.
        
    -   **Infer refresh mode**: Analyzes the query logic and source table properties to determine which refresh modes (auto, incremental, or full) are supported.
        
    -   **Parse fields**: If the syntax is correct, automatically parses the output fields, data types, and other details of the dynamic table.
        
    
    **Precompilation feedback**:
    
    -   **Success**: The system indicates that the syntax is correct and lists the supported refresh modes. You can then proceed with the configuration.
        
    -   **Failure**: If the SQL is incorrect or the logic does not meet the requirements for a dynamic table, the system provides a clear error message. Modify the SQL based on the message and precompile it again.
        
4.  **(Optional) View and edit field details**:
    
    -   After the precompilation succeeds, click the **Field Details** tab.
        
    -   Here, you can view all the fields, data types, and non-null properties parsed by the system. You can also add comments for each field in the **Description** column to improve metadata readability.
        

> You do not need to configure partitions or advanced parameters here. For parameter descriptions, see [Appendix: Configuration descriptions](#d3b8ddad0c7mb).

#### **Step 4: Configure the data refresh policy**

After the precompilation is successful, you can configure the settings in the **Refresh Policy** panel on the right side of the page.

**Note**

For more information about the parameters, see [Hologres refresh modes and resources](/help/en/hologres/user-guide/create-dynamic-table#1e9e2f42b3r0p).

1.  **Basic Parameters**:
    
    -   **Table Type**: Because no partition field is selected, the system automatically identifies the table as a **Non-partitioned Table**.
        
    -   **Refresh Policy**: Select **Incremental Refresh** to achieve low-latency data synchronization.
        
    -   **Refresh Trigger Method**: Select **Hologres Auto-refresh**.
        
    -   **Automatically Refresh Data**: Keep the default value, **Yes**.
        
    -   **Data Freshness**: Set this to **5 minutes**. This parameter defines the maximum data latency. The system dynamically triggers refreshes based on incoming data to ensure that the latency between the dynamic table and the source table is always within 5 minutes.
        
    -   **Incremental Refresh Consumption Mode for Base Table**: Select **stream**. This is the recommended low-latency stream consumption mode.
        
    -   **Hologres Computing Resource**: Select **Serverless Resources**. This prevents refresh tasks from occupying your valuable instance resources and achieves resource isolation.
        
2.  **Advanced Parameters** (Optional): This section is used to set special GUC parameters. You can typically keep the default settings. For more information, see [GUC parameters](/help/en/hologres/developer-reference/guc-parameters).
    

#### **Step 5: Publish**

1.  After you confirm that all configurations are correct, click the **Publish** button at the top of the page.
    
2.  In the confirmation dialog box that appears, click **Publish** again.
    

You have now successfully created and published a Hologres dynamic table. When new data is inserted into or updated in the source table `orders`, the aggregated results in the dynamic table `dt_user_orders_agg` are automatically updated within approximately five minutes.

## **Advanced example: Create a daily partitioned dynamic table**

This example shows you how to create a **partitioned dynamic table**. The table aggregates new users daily from a user registration table and automatically creates and manages partitions.

#### **Step 1: Prepare data**

First, you need a source table named `users` that records user registration information. This table must contain a timestamp field for partitioning and must also have binlog enabled.

```
-- Create the user registration table and enable Binlog
CREATE TABLE users (
    user_id INT PRIMARY KEY,
    user_name TEXT,
    region TEXT,
    registration_time TIMESTAMPTZ  -- User registration time, TIMESTAMPTZ type
) WITH (
    binlog_level = 'replica',
    binlog_ttl = '86400'
);

-- Insert some test data. Replace the date with the current data timestamp.
INSERT INTO users VALUES 
(1, 'Alice', 'CN-Hangzhou', '2026-02-27 10:00:00+08'),
(2, 'Bob', 'CN-Shanghai', '2026-02-27 14:30:00+08'),
(3, 'Charlie', 'CN-Beijing', (NOW() - INTERVAL '1 day')::TIMESTAMPTZ);
```

#### **Step 2: Go to the dynamic table creation wizard**

1.  Go to the [Workspaces](https://dataworks.console.aliyun.com/workspace/list) page in the DataWorks console. In the top navigation bar, select a desired region. Find the desired workspace and choose **Shortcuts** > **Data Studio** in the **Actions** column.
    
2.  In the navigation pane on the left, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7618107371/p840002.png) icon to open the **Data Catalog** module.
    
3.  In the **Data Catalog** area, find the target Hologres instance, expand the folders, and click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7618107371/p888101.png) icon next to **Dynamic Table** to open the Create Dynamic Table page.
    

#### **Step 3: Define the query logic and precompile**

1.  **Enter basic information**:
    
    -   **Dynamic Table Name**: `dwd_user_new_user_detail_di`
        
    -   **Description**: Daily new user detail statistics
        
2.  **Write the data generation SQL**:
    
    Write an SQL statement that extracts all user records from the `users` table. **You do not need to manually filter by time in the** `**WHERE**` **clause because the dynamic table's partitioning mechanism handles this automatically.**
    
    ```
    SELECT 
        user_id,
        user_name,
        region,
        registration_time, -- The original, precise time field can be kept for queries
        CAST(registration_time AS DATE) AS ds -- [Core] Convert the timestamp to the DATE type to use as the partition key
    FROM public.users;
    ```
    
3.  **Precompile the code**: Click the **Precompile** button. After the precompilation succeeds, the system parses the field information.
    

#### **Step 4: Select the partition field (key step)**

This is the key step to create a partitioned table.

-   In the **Partition Field Information** area, click the **Partition Field** drop-down list.
    
-   Select the new field `**ds**` as the partition field.
    

After you select a partition field, DataWorks automatically identifies this as a partitioned table and displays the partition-related configuration items.

#### **Step 5: Configure partitions and the refresh policy**

**Note**

For more information about the parameters, see [Hologres partition properties](/help/en/hologres/user-guide/create-dynamic-table#aecbea052ff4n).

1.  **Partition Configurations**:
    
    -   **Partition Property**: Automatically displayed as **Logical Partition**.
        
    -   **Partition Format**: Select `yyyy-mm-dd`. This format matches the format of the partition key `ds`, which is of the `DATE` type.
        
    -   **Partition Refresh Scope**: Set to `7 day`.
        
    -   **Partition Management** **>** **Partition Expiration**: Set to `30 day`.
        
2.  **Refresh Policy Configurations**:
    
    -   **Refresh Policy**: Select **Auto-refresh**.
        
    -   **Refresh Trigger Method**: Select **Hologres Auto-refresh**.
        
    -   **Data Freshness**: Set to `10 minutes`.
        
    -   **Hologres Computing Resource**: Select **Serverless Resources**.
        

#### **Step 6: Publish**

Click the **Publish** button at the top of the page.

#### **What to do next and validation**

1.  **View partitions**: After the table is published, expand the `dwd_user_new_user_detail_di` table. You will see partition sub-tables created based on the date, such as `2026-02-27`.
    
2.  **Validate data**:
    
    -   Create a Hologres SQL node and insert new data for the current day into the `users` table:
        
        ```
        INSERT INTO users VALUES (4, 'David', 'CN-Shenzhen', '2026-02-27 18:00:00+08');
        ```
        
    -   Wait approximately 10 minutes, then use the new partition key `ds` to run a more efficient query:
        
        ```
        -- Efficient query method: Filter directly on the partition key
        -- To verify immediately, you can manually refresh the table: REFRESH DYNAMIC TABLE dwd_user_new_user_detail_di PARTITION (ds = '2026-02-27');
        SELECT * FROM dwd_user_new_user_detail_di WHERE ds = '2026-02-27';
        ```
        
        You will see that the new user 'David' has been successfully added to the partition for the current day.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5258833771/p1055504.png)
        

## **View, monitor, and manage a dynamic table**

Dynamic tables are active, so monitoring their operational status is crucial.

1.  **Open the details page**: In the dynamic table list in the data catalog, click the `dt_user_orders_agg` table that you created.
    
2.  **View static information**
    
    -   **Details**: View the table's schema information, such as the field list, data types, and primary key.
        
    -   **Basic Information**: Review the table's core configurations, such as the owner, data refresh logic (SQL), and refresh policy.
        
    -   **DDL**: View and copy the complete DDL statement used to create the dynamic table. This is useful for migration or replication.
        
3.  **Monitor output information (core operations and maintenance page)**
    
    Switch to the **Output Information** tab. This is the key page for monitoring the operational status of the dynamic table.
    
    -   **Action buttons**:
        
        -   **Convert to Full Table**: Permanently changes the table's refresh mode to `Full Refresh` and stops automatic refreshes. This is visible only in `Auto` or `Incremental` refresh mode.
            
        -   **Pause Refresh** **/** **Resume Refresh**: Temporarily stops or resumes automatic refreshes by Hologres.
            
        -   **Manual Refresh**: Manually triggers a refresh task to update the data immediately.
            
    -   **Data Refresh in Progress**: If a refresh task is currently running, its real-time information is displayed here, such as the PID, Query ID, status, and duration.
        
    -   **Output History**: Records the history of every refresh task. This is invaluable for troubleshooting.
        
        -   **Query ID**: The unique ID of a historical refresh task. You can use it for in-depth troubleshooting in Hologres.
            
        -   **Refresh Mode**: For example, `Incremental Refresh`.
            
        -   **Status**: The final status of the task (**Success**/**Failed**).
            
        -   **Duration (s)**: The total time taken by the task.
            
        -   **Data Consumption Latency (s)**: (Incremental only) Measures the data processing latency of the dynamic table.
            
        -   **Computing Resources...**: Records the resources consumed by the task, which is useful for cost analysis and performance optimization.
            

## **Modify and delete a dynamic table**

-   **Modify a dynamic table**: Find the dynamic table in the data catalog and click the **Edit** button in the upper-right corner of the details page to open the edit page. Most configuration items can be modified. For information about which parameters can be modified, see [Alter dynamic table](/help/en/hologres/user-guide/alter-dynamic-table).
    
-   **Delete a dynamic table**: In the dynamic table list in the data catalog, right-click the target table and select **Delete**.
    

## **Appendix: Configuration descriptions**

#### **1\. Basic information, field information, and partition fields**

-   **Field Information (SQL)**: Defines the `SELECT` query for the dynamic table's data source. **Precompilation** is a required step.
    
-   **Partition Field**:
    
    -   **Not selected**: Creates a **non-partitioned table**.
        
    -   **Select a time/date type field**: Creates a **partitioned table**. The system automatically switches to the partitioned table configuration mode.
        

#### **2\. Data refresh configurations (Core)**

##### **General configurations**

-   **Refresh Policy**
    
    -   **Auto-refresh**: **(Recommended)** Hologres automatically decides whether to use incremental or full refresh, balancing performance and ease of use.
        
    -   **Incremental Refresh**: Forces only incremental refreshes. This is suitable for scenarios that require high data freshness.
        
    -   **Full Refresh**: Completely recalculates the data on every refresh. This is suitable for source tables without a primary key or Binlog, or for complex query logic.
        

##### **Refresh trigger methods**

Currently, only **Hologres Auto-refresh** is supported.

-   **Automatically Refresh Data**: The master switch.
    
-   **Data Freshness**: Defines the maximum acceptable data latency. This is the core trigger for automatic refreshes.
    
-   **Incremental Refresh Consumption Mode for Base Table**: Defines how Binlog is consumed. **stream** is the default and recommended mode.
    
-   **Hologres Computing Resource**:
    
    -   **Serverless Resources**: **(Recommended)** Uses Hologres Serverless resources to perform refreshes. This does not occupy the instance's own computing resources and achieves resource isolation.
        
    -   **This Instance's Resources (local)**: Uses the instance's own computing resources. If the instance is a virtual warehouse type (V4.0+), you can select a specific compute group.
        

#### **3\. Partition configurations (Visible only for partitioned tables)**

When you select a partition field, the following configuration items are added. All new dynamic tables are **logical partitions**.

-   **Partition Format**: **(Required)** Defines how to generate partitions based on the value of the partition field. For example, if the field type is `TIMESTAMPTZ` and the format is set to `yyyy-mm-dd`, daily partitions are created.
    
-   **Partition Refresh Scope**: Defines the active partition range for automatic refreshes. For example, if this is set to "the last 7 days", Hologres automatically refreshes only the partitions from the last seven days. Older partitions are no longer automatically refreshed, which saves resources.
    
-   **Partition Management** (collapsed by default):
    
    -   **Partition Expiration**: Sets the lifecycle (TTL) for partitions. Expired partitions are automatically deleted.
        
    -   **Hot data retention period for partitions**: In conjunction with tiered storage for hot and cold data, this defines the duration that partition data is retained in hot storage (SSD).
        

#### **4\. Advanced settings (Table properties)**

These are the physical properties applied to the dynamic table itself, similar to the settings for a standard Hologres table.

**Parameter**

**Description**

**Storage Mode**

Hologres supports three storage modes: **Column Store**, **Row Store**, and **Row-Column Hybrid Store**. The default mode is **Column Store**. For more information, see [Table storage formats: column store, row store, and row-column hybrid store](/help/en/hologres/user-guide/storage-models-of-tables).

-   Column store is suitable for complex queries in various OLAP scenarios.
    
-   Row store is suitable for key-value (KV) query scenarios based on primary keys.
    
-   Row-column hybrid store is suitable for scenarios where both column store and row store can be used.
    

**Table Group**

Select the name of the `Table Group` that is generated when you create an internal table in the Hologres data source. For more information, see [Manage table groups](/help/en/hologres/user-guide/table-group-management).

**Storage Policy**

Hologres supports two storage policies: Standard storage (**Hot Storage**) and Infrequent Access storage (**Cold Storage**).

-   Hot storage, also known as all-SSD hot storage, is the default storage policy in Hologres. It meets the requirements for low-latency, high-performance data access. For most scenarios, Standard storage is the most effective and cost-efficient choice.
    
-   Cold storage, also known as all-HDD cold storage, meets the requirement for low-cost storage of infrequently accessed data. It is suitable for very large datasets that are not sensitive to latency or are not frequently accessed.
    

For more information, see [Tiered Storage of Hot and Cold Data](/help/en/hologres/user-guide/tiered-storage-of-hot-data-and-cold-data).

**Table Data Lifecycle**

Set a custom maximum time to live for the dynamic table.

**Binlog**

Choose to enable (**replica**) or disable (**none**) subscription to Hologres binary logs. By default, this feature is disabled. For more information, see [Subscribe to Hologres Binlog](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs).

**Binlog Lifecycle**

You can set the maximum storage lifecycle for Hologres binary logs only after you enable subscription to them by setting Binlog to **replica**. For more information, see [Subscribe to Hologres Binlog](/help/en/hologres/user-guide/subscribe-to-hologres-binary-logs#concept-2037122).

**Field Properties**

Set the field properties. This includes selecting the **Distribution Column**, **Segment Column**, **Clustering Column**, **Bitmap Column**, and **Dictionary Encoding Column** for a **Field Name**. Configure the properties based on the descriptions on the page. For more information, see [Manage internal tables](/help/en/hologres/user-guide/manage-an-internal-table).
