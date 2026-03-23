This topic describes how to enable X-Engine. This topic also describes the conditions and precautions for enabling X-Engine.

## Prerequisites

-   The revision version of your cluster meets one of the following requirements:
    
    -   8.0.1.1.31 or later.
        
    -   8.0.2.2.12 or later.
        
    
    For information about how to check the cluster version, see [Query an engine version](/help/en/polardb/polardb-for-mysql/engine-versions#section-zpr-kam-8wb).
    

-   X-Engine cannot be enabled for clusters of [Multi-master Cluster (Limitless) Edition](/help/en/polardb/polardb-for-mysql/user-guide/multi-master-cluster-database-or-table/).
    
-   The primary node of the cluster has at least 8 GB of memory. The specifications of the read-only nodes in the cluster must be higher than or the same as those of the primary node.
    
-   The cluster has not joined a global database network (GDN).
    

## Usage notes

-   X-Engine imposes limits on features and large transactions.
    
    Limits
    
    ### Limits on features
    
    **Category**
    
    **Feature**
    
    **Description**
    
    SQL features
    
    Foreign keys
    
    Not supported
    
    Temporary tables
    
    Not supported
    
    Generated Column
    
    Not supported
    
    Handler API
    
    Not supported
    
    Column properties
    
    Maximum column length (longblob/longtext/json)
    
    32 MB
    
    GIS data types
    
    X-Engine does not support GIS data types, including GEOMETRY, POINT, LINESTRING, POLYGON, MULTIPOINT, MULTILINESTRING, MULTIPOLYGON, and GEMOMETRYCOLLECTION.
    
    Indexes
    
    Hash indexes
    
    Not supported
    
    Spatial indexes
    
    Not supported. X-Engine does not support the creation or use of full-text indexes.
    
    Transactions
    
    Transaction isolation level
    
    X-Engine supports the following isolation levels:
    
    -   Read Committed (RC)
        
    -   Repeatable Read (RR)
        
    
    Maximum amount of data supported by a transaction
    
    32 MB
    
    Savepoint
    
    Not supported
    
    XA transactions
    
    X-Engine supports internal XA transactions.
    
    Locks
    
    Lock granularity
    
    -   X-Engine supports table-level and row-level locks.
        
    -   X-Engine does not support gap locks.
        
    
    Skip Locked
    
    Not supported
    
    Lock Nowait
    
    Not supported
    
    Character sets
    
    Character sets supported by non-indexed columns
    
    All
    
    Character sets supported by indexed columns
    
    -   Latin1 (latin1\_bin)
        
    -   GBK (gbk\_chinese\_ci and gbk\_bin)
        
    -   UTF-8 (utf8\_general\_ci and utf8\_bin)
        
    -   UTF-8MB4 (utf8mb4\_0900\_ai\_ci, utf8mb4\_general\_ci, and utf8mb4\_bin)
        
    
    Primary/secondary replication
    
    Binary log formats
    
    X-Engine supports the following formats:
    
    -   stmt
        
    -   row
        
    -   mixed
        
    
    **Note**
    
    By default, binary logs use the row format. The stmt and mixed log formats may cause data security issues in specific concurrency scenarios.
    
    **Note**
    
    By default, the features of X-Engine that are not described in the preceding table are the same as the features of InnoDB.
    
    ### **Limits on large transactions**
    
    X-Engine does not support large transactions. If the number of rows modified in a transaction is greater than or equal to 10,000, X-Engine enables the `commit in middle` feature. This way, X-Engine can internally commit the transaction and start a sub-transaction to continue to perform the transaction. However, the `commit in middle` feature may not ensure the atomicity of transactions. Take note of the following items when you use the commit in middle feature:
    
    -   Assume that you want to start a transaction to insert a large amount of data. During the insertion, part of the data is committed because of the `commit in middle` feature. The inserted data can be queried by other requests.
        
    -   Assume that you want to start a transaction to modify a large amount of data. The data that has been committed by the `commit in middle` feature cannot be rolled back.
        
        ```
        DROP TABLE t1;
        CREATE TABLE t1(c1 int primary key , c2 int)ENGINE=xengine;
        BEGIN;
        call insert_data(12000);// 12,000 rows are inserted and a commit in middle operation is triggered. As a result, the first 10,000 rows of data are committed. 
        rollback;// You can roll back only the last 2,000 rows. 
        SELECT COUNT(*) FROM t1;// The committed 10,000 rows of data can be queried. 
        +----------+
        | COUNT(*) |
        +----------+
        |    10000 |
        +----------+
        1 row in set (0.00 sec)
        ```
        
    -   Assume that you want to modify and delete a large amount of data in a transaction. The DELETE operation cannot read the committed rows in this transaction because of the `commit in middle` feature. As a result, you cannot delete the newly committed data.
        
        ```
        DROP TABLE t1;
        CREATE TABLE t1(c1 int primary key , c2 int)ENGINE=xengine;
        call insert_data(10000);
        BEGIN;
        INSERT INTO t1 VALUES(10001,10001), (10002,10002);
        DELETE FROM t1 WHERE c1 >= 0;// The deletion operation triggers a commit in middle operation, and the two rows of data inserted by the current transaction are not deleted. 
        commit;
        SELECT * FROM t1;
        +-------+-------+
        | c1    | c2    |
        +-------+-------+
        | 10001 | 10001 |
        | 10002 | 10002 |
        +-------+-------+
        2 rows in set (0.00 sec)
        ```
        
    
-   The system automatically restarts the cluster after you enable X-Engine. During the restart, the cluster encounters 30-second transient disconnections. We recommend that you perform this operation during off-peak hours and make sure that your application can automatically reconnect to the cluster.
    
-   After you enable X-Engine, take note of the following items:
    
    -   To avoid unexpected access to tables stored in X-Engine, you cannot disable X-Engine.
        
    -   The cluster cannot join a GDN.
        

## Procedure

You can use one of the following methods to enable X-Engine:

### **Method 1:** Enable X-Engine for an existing cluster

1.  Log on to the [**PolarDB console**](https://polardb.console.alibabacloud.com/). Click **Clusters** in the left-side navigation pane. Select a region in the upper-left corner and click the ID of the cluster that you want to manage to go to the Basic Information page.
    
2.  In the left-side navigation pane, choose **Settings and Management** > **Data Lifecycle**, click the **X-Engine (Warm Data)** tab, and then click **Enable**.
    
    **Note**
    
    If you do not view the **X-Engine (Warm Data)** tab, check whether your cluster meets the preceding prerequisites. For more information, see [Prerequisites](#title-t5m-op1-jl6).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1270819371/p901949.png)
    
3.  In the **Set X-Engine Proportion** dialog box, configure the data and memory usage proportion for X-Engine based on your actual business scenarios and then click **Enable Now**.
    
    The following table provides the recommended proportion for three typical scenarios. You can set your proportion based on your business requirements.
    
    **Scenario**
    
    **InnoDB (%)**
    
    **X-Engine (%)**
    
    Use InnoDB for hot data and X-Engine for cold data. The cold data is classified as seldom accessed data.
    
    80
    
    20
    
    Use InnoDB for hot data and X-Engine for cold data. The cold data is still updated and can be queried.
    
    50
    
    50
    
    Use InnoDB for small amounts of data and X-Engine for large amounts of data that require to be updated or queried.
    
    20
    
    80
    
    **Note**
    
    -   After you enable X-Engine, you can adjust the proportion based on your actual business scenarios on the **X-Engine (Warm Data)** tab. To access this tab, you must log on to the PolarDB console and then choose **Settings and Management** > **Data Lifecycle**.
        
    -   The X-Engine (%) value ranges from 10% to 90% If you use the X-Engine engine to store all tables and no InnoDB tables exist, you can set X-Engine (%) to 90%.
        
    

### **Method 2:** Select X-Engine as the storage engine when you purchase a cluster

When you purchase a PolarDB for MySQL cluster, you can set the Storage Engine parameter to **InnoDB & X-Engine** and adjust the X-Engine (%) value. For more information, see the **Storage Engine** parameter described in [Purchase clusters](/help/en/polardb/polardb-for-mysql/user-guide/purchasing-clusters/).

**Note**

After you enable X-Engine, you can adjust the proportion based on your actual business scenarios on the **X-Engine (Warm Data)** tab. To access this tab, you must log on to the PolarDB console and then choose **Settings and Management** > **Data Lifecycle**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1270819371/p901870.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1270819371/p901896.png)
