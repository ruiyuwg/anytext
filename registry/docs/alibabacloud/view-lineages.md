In DataWorks Data Map, you can view detailed lineage information for tables and DataService Studio APIs on their details pages. This information helps you trace and manage data. This topic describes how to view lineages in Data Map.

## **Table lineages**

### **Access**

Find a table and go to its details page. Click the **Lineage** tab to view table-level and field-level lineage details. You can also analyze impacts, retrieve a list of descendant tables, download the list as a local file, or send change notifications by email.

**Note**

Data Map displays lineages between tables and between fields that are parsed from scheduling jobs and data forwarding information. Lineages from manual operations, such as temporary queries, are not included. The lineage of offline data is updated on a T+1 basis.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6846239961/p714918.png)

### **Limits on different types of data sources**

#### **E-MapReduce**

-   To manage metadata for a DataLake or custom cluster in DataWorks, you must first configure EMR-HOOK in the cluster. If EMR-HOOK is not configured, data lineages cannot be displayed in DataWorks. For more information about how to configure EMR-HOOK, see [Configure EMR-HOOK for Hive](/help/en/emr/emr-on-ecs/user-guide/hive-uses-the-extension-to-record-data-consanguinity-and-access).
    
-   You cannot view the data lineage of a Spark cluster that is created on the EMR on ACK page. However, you can view the data lineage of an EMR Serverless Spark cluster.
    
-   You cannot view the data lineage of a task that is developed using an EMR Presto node.
    

#### AnalyticDB for MySQL

**Note**

-   You must [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to enable the data lineage feature for your AnalyticDB for MySQL instance.
    
-   If the metadata source is AnalyticDB for Spark, data is collected automatically.
    
-   If the metadata source is AnalyticDB for Spark, you can configure the Spark parameter `spark.sql.queryExecutionListeners = com.aliyun.dataworks.meta.lineage.LineageListener` to enable real-time lineage.
    

For AnalyticDB for MySQL tables, specific SQL commands do not support the generation of lineage information in Data Map. The limitations are as follows.

-   **SQL commands that do not support lineage display:**
    
    **Unsupported SQL**
    
    **Example**
    
    SQL statements that contain keywords such as `join` or `union`, or that use the asterisk wildcard (`*`).
    
    For example, Data Map cannot display the lineage for the following SQL statement because it contains an asterisk (`*`).
    
    ```
    INSERT INTO test SELECT * FROM test1, test2 WHERE test1.id = test2.id
    ```
    
    Subqueries are not supported.
    
    For example, Data Map cannot display the lineage for the following SQL statement because it contains a subquery.
    
    ```
    SELECT column1, column2 FROM table1 WHERE column3 IN (SELECT column4 FROM table2 WHERE column5 = 'value')
    ```
    
-   **Sample SQL commands that support lineage display:**
    
    -   Example 1: Create a table named A and populate it by selecting specific columns (not \`\*\`) from table B. For example:
        
        ```
        CREATE TABLE test AS SELECT id,name FROM test1;
        ```
        
    -   Example 2: Insert data into table B by selecting specific columns (not \`\*\`) from table A that meet the condition \`column1 = value1\`. For example:
        
        ```
        INSERT INTO test SELECT id,name FROM test1 WHERE name='test';
        ```
        
    -   Example 3: Overwrite data in table B with data from specific columns (not \`\*\`) from table A. For example:
        
        ```
        INSERT OVERWRITE INTO db_name.test SELECT id,name FROM test1;
        ```
        

#### **CDH**

To display the table lineage for data transformation processes that use CDH Spark SQL and CDH Spark nodes in Data Map, configure the Spark parameters for the relevant data transformation module in **Management Center** > **Cluster Management**.

1.  Go to the SettingCenter page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
    
2.  In the navigation pane on the left, click **Cluster Management** and find the target CDH cluster.
    
3.  Click **Edit Spark-related Parameter**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0356871271/p818277.png)
    
4.  Add Spark parameters for the data transformation module.
    
    For example, to display the table lineage of data transformation processes for CDH Spark SQL and CDH Spark nodes in the **Operation Center** > **Auto Triggered Instances** module, add the following parameters in the corresponding module:
    
    -   **Spark Property Name**: `spark.sql.queryExecutionListeners`
        
    -   **Spark Property Value**: `com.aliyun.dataworks.meta.lineage.LineageListener`
        
5.  Click **OK** to complete the configuration.
    

## Lindorm

**Note**

Lineage information can be collected only in instance mode. It cannot be collected in connection string mode.

To display the table lineage for data transformation processes that use Lindorm Spark and Lindorm Spark SQL nodes in Data Map, configure the Spark parameters for the relevant data transformation module in **Management Center** > **Computing Resources**.

1.  Go to the SettingCenter page.
    
    Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
    
2.  In the navigation pane on the left, click **Computing Resource** and find your Lindorm computing resource.
    
3.  Click **Edit Spark-related Parameter**.
    
4.  Add Spark parameters for the data transformation module.
    
    For example, to display the table lineage of data transformation processes for Lindorm Spark and Lindorm Spark SQL nodes in the ****Operation Center** > **Auto Triggered Instances**** module, add the following parameters in the corresponding module:
    
    -   **Spark Property Name**: `spark.sql.queryExecutionListeners`.
        
    -   **Spark Property Value**: `com.aliyun.dataworks.meta.lineage.LineageListener`.
        
5.  Click **OK** to complete the Spark parameter configuration.
    

### **Lineage display for diffe****rent data sources**

**Data source**

**Data Integration**

**Data Studio**

**Table-level lineage**

**Field-level lineage**

**Table-level lineage**

**Field-level lineage**

**AnalyticDB for MySQL**

支持Product page

支持Product page - Lineage

支持Batch sync

不支持Real-time sync

支持Batch sync

不支持Real-time sync

支持insert into /insert overwrite table

支持create as select from table

不支持create external table

支持insert into /insert overwrite table

支持create as select from table

不支持create external table

**AnalyticDB for PostgreSQL**

支持Product page

支持Product page - Lineage

支持Offline Sync

不支持Real-time sync

支持Batch sync

不支持Real-time sync

支持insert into /insert overwrite table

支持create as select from table

不支持create external table

支持insert into /insert overwrite table

支持create as select from table

不支持create external table

**ClickHouse**

支持Product page

不支持Product page - Lineage

不支持Batch sync

不支持Real-time sync

不支持Batch sync

不支持Real-time sync

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

**CDH/CDP**

支持Product page

支持Product page - Lineage

不支持Batch sync

不支持Real-time sync

不支持Batch sync

不支持Real-time sync

Hive, Impala, Spark, Spark SQL

支持insert into /insert overwrite table

支持create as select from table

不支持create external table

Hive, Impala, Spark, Spark SQL

支持insert into /insert overwrite table

支持create as select from table

不支持create external table

**E-MapReduce**

支持Product page

支持Product page - Lineage

支持Batch sync

(OSS, Hive)

不支持Real-time sync

支持Batch sync

(OSS, Hive)

不支持Real-time sync

Hive, Spark (spark-submit), Spark SQL (Hudi format supported), Shell (Hive SQL submitted using beeline)

支持insert into /insert overwrite table

支持create as select from table

不支持create external table

Hive, Spark (spark-submit), Spark SQL (Hudi format supported), Shell (Hive SQL submitted using beeline)

支持insert into /insert overwrite table

支持create as select from table

不支持create external table

**Hologres**

支持Product page

支持Product page - Lineage

支持Batch sync

支持Real-time sync (Sync data from MySQL, Kafka, or Log Service to Hologres)

支持Batch sync

不支持Real-time sync

支持insert into /insert overwrite table

支持create as select from table

支持create external table

支持insert into /insert overwrite table

支持create as select from table

支持create external table

**Kafka**

不支持Product page

不支持Product page - Lineage

支持 Offline sync

支持Real-time sync

(Sync data from Kafka to MaxCompute or Hologres)

不支持 Offline Sync

不支持Real-time sync

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

**Lindorm**

支持Product page

支持Product page - Lineage

不支持Offline Sync

不支持Real-time sync

不支持Batch sync

不支持Real-time sync

支持insert into /insert overwrite table

支持create as select from table

支持create table

支持create table like

支持insert into /insert overwrite table

支持create as select from table

支持create table

支持create table like

**MaxCompute**

支持Product page

支持Product page - Lineage

支持Batch sync

支持Real-time sync (Sync data from MySQL, Kafka, PolarDB for MySQL, or Log Service to MaxCompute)

支持Batch sync

不支持Real-time sync

支持insert into /insert overwrite table

支持create as select from table

支持create external table

支持insert into /insert overwrite table

支持create as select from table

支持create external table

**MySQL**

支持Product page

不支持Product page - Lineage

支持Batch sync

支持Real-time sync

(Sync data from MySQL to MaxCompute or Hologres)

支持Batch sync

不支持Real-time sync

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

**Oracle**

支持Product page

不支持Product page - Lineage

支持Batch sync

不支持Real-time sync

支持Batch sync

不支持Real-time sync

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

**OceanBase**

不支持Product page

不支持Product page - Lineage

支持 Offline sync

不支持Real-time sync

支持Batch sync

不支持Real-time sync

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

**OSS**

不支持Product page

不支持Product page - Lineage

支持Batch sync

不支持Real-time sync

不支持Batch sync

不支持Real-time sync

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

**PolarDB for MySQL**

不支持Product page

不支持Product page - Lineage

支持Batch sync

支持Real-time sync (Sync data from PolarDB for MySQL to MaxCompute)

支持Batch sync

不支持Real-time sync

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

**PolarDB for PostgreSQL**

不支持Product page

不支持Product page - Lineage

支持Batch sync

不支持Real-time sync

支持Batch sync

不支持Real-time sync

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

**PostgreSQL**

支持Product page

不支持Product page - Lineage

支持Batch sync

不支持Real-time sync

支持Batch sync

不支持Real-time sync

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

**StarRocks**

支持Product page

支持Product page - Lineage

不支持Batch sync

不支持Real-time sync

不支持 Offline sync

不支持Real-time sync

支持insert into /insert overwrite table

支持create as select from table

不支持create external table

支持insert into /insert overwrite table

支持create as select from table

不支持create external table

**SQL Server**

支持Product page

不支持Product page - Lineage

支持Batch sync

不支持Real-time sync

支持 Offline Sync

不支持Real-time sync

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

**Tablestore (OTS)**

支持Product page

不支持Product page - Lineage

支持 Offline sync

不支持Real-time sync

支持Batch sync

不支持Real-time sync

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

不支持insert into /insert overwrite table

不支持create as select from table

不支持create external table

## **DataService Studio API lineages**

Find a DataService Studio API and go to its details page. Click the **Lineage** tab to view the lineage details of the API.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4891461371/p714950.png)
