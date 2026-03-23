PolarDB provides the Polar performance schema feature to monitor the DDL statement execution status and metadata lock (MDL) status. Compared with the Performance Schema feature of MySQL, the Polar performance schema feature is more lightweight, uses fewer memory resources, and has lower performance overhead. This topic describes how to use this feature to view the DDL statement execution status and MDL status.

## Supported versions

Your PolarDB for MySQL cluster must run one of the following database engine versions:

-   A cluster of PolarDB for MySQL 5.7 (revision version 5.7.1.0.35 or later).
    
-   A cluster of PolarDB for MySQL 8.0.1 (revision version 8.0.1.1.21 or later).
    
-   A cluster of PolarDB for MySQL 8.0.2 (revision version 8.0.2.2.8 or later).
    

For information about how to view the database engine version of a cluster, see [Query the engine version](/help/en/polardb/polardb-for-mysql/engine-versions#section-zpr-kam-8wb).

## Issues

DDL statements are executed on the primary node of a cluster. Therefore, you must query the execution status of DDL statements on the primary node.

-   If you connect to the cluster by using the primary endpoint, you can directly query the execution status of DDL statements on the primary node. For information about how to query the primary endpoint, see [View the endpoint and port number](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint#section-7nv-xxd-hd6).
    
-   If you connect to the cluster using a cluster endpoint, you can use hints in SQL statements to query the execution status of DDL statements on the primary node. For more information, see [Read/write splitting](/help/en/polardb/polardb-for-mysql/user-guide/read-or-write-splitting-2#section-dj2-3a7-q7q).
    

After you enable the Performance Schema feature, the Polar performance schema feature is automatically disabled.

## Procedure

**Note**

The method introduced in this topic only applies to tables that use the InnoDB storage engine.

1.  Enable the Polar performance schema feature.
    
    To enable the Polar performance schema feature, set the loose\_polar\_performance\_schema parameter to `ON` in the PolarDB console. This parameter takes effect only after you restart the cluster. For more information, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).
    
    The following table describes the parameters of the Polar performance schema feature.
    
    **Parameter**
    
    **Description**
    
    loose\_polar\_performance\_schema
    
    Specifies whether to enable the Polar performance schema feature. Valid values:
    
    -   **ON**
        
    -   **OFF**
        
    
    loose\_polar\_performance\_schema\_enable\_row\_locks
    
    Specifies whether the Polar performance schema collects and exposes row-level lock monitoring data.
    
    -   **OFF** (default)
        
    -   **ON**
        
    
    **Note**
    
    This parameter is available only in PolarDB for MySQL 8.0.1 and 8.0.2.
    
    performance\_schema\_max\_thread\_instances
    
    The maximum number of threads tracked by the Polar performance schema feature. Valid values: -1 to 65536. A value of -1 specifies that the number of MDLs is automatically adjusted to adapt to business changes.
    
    **Note**
    
    This parameter is fine-tuned. We recommend that you do not modify it.
    
    performance\_schema\_max\_metadata\_locks
    
    The maximum number of MDLs monitored by the Polar performance schema feature. Valid values: -1 to 1048576. A value of -1 specifies that the number of MDLs is automatically adjusted to adapt to business changes.
    
    **Note**
    
    This parameter is fine-tuned. We recommend that you do not modify it.
    
    After your cluster is started, you can execute the following statement to check whether the Polar performance schema feature is enabled:
    
    ```
    SHOW VARIABLES LIKE 'polar_performance_schema';
    ```
    
    A similar result is returned:
    
    ```
    +--------------------------+-------+
    | Variable_name            | Value |
    +--------------------------+-------+
    | polar_performance_schema | ON    |
    +--------------------------+-------+
    1 row in set (0.00 sec)
    ```
    
2.  View the DDL statement execution status and MDL status.
    
    -   View the execution status of the current event from the `performance_schema.events_stages_current` table. Sample statement:
        
        ```
        SELECT THREAD_ID,EVENT_ID, EVENT_NAME, WORK_COMPLETED, WORK_ESTIMATED,(WORK_COMPLETED/WORK_ESTIMATED)*100 as PROGRESS FROM performance_schema.events_stages_current;
        ```
        
        Sample result:
        
        ```
        +-----------+----------+------------------------------------------------------+----------------+----------------+----------+
        | THREAD_ID | EVENT_ID | EVENT_NAME                                           | WORK_COMPLETED | WORK_ESTIMATED | PROGRESS |
        +-----------+----------+------------------------------------------------------+----------------+----------------+----------+
        |   3057989 |       13 | stage/innodb/alter table (read PK and internal sort) |          56634 |         330135 |  17.1548 |
        +-----------+----------+------------------------------------------------------+----------------+----------------+----------+
        1 row in set (0.00 sec)
        ```
        
        View the SQL statements of the current event from the `performance_schema.threads` and `information_schema.PROCESSLIST` table. Sample statement:
        
        ```
        SELECT esc.THREAD_ID, esc.EVENT_NAME, esc.WORK_COMPLETED, esc.WORK_ESTIMATED, pl.INFO FROM performance_schema.events_stages_current esc LEFT JOIN performance_schema.threads th ON esc.thread_id = th.thread_id LEFT JOIN information_schema.PROCESSLIST pl ON th.PROCESSLIST_ID = pl.ID;
        ```
        
        Sample result:
        
        ```
        +-----------+------------------------------------------------------+----------------+----------------+-----------------------------------------------------------------------------------------+
        | THREAD_ID | EVENT_NAME                                           | WORK_COMPLETED | WORK_ESTIMATED | INFO                                                                                    |
        +-----------+------------------------------------------------------+----------------+----------------+-----------------------------------------------------------------------------------------+
        |   3057989 | stage/innodb/alter table (read PK and internal sort) |          77034 |         330519 | ALTER TABLE test.test ALGORITHM=INPLACE, ADD testA VARCHAR(20) NOT NULL DEFAULT 'testA' |
        +-----------+------------------------------------------------------+----------------+----------------+-----------------------------------------------------------------------------------------+
        1 row in set (0.00 sec)
        ```
        
    -   View information about the MDLs in the cluster from the `performance_schema.metadata_locks` table. Sample statement:
        
        ```
        SELECT * FROM performance_schema.metadata_locks;
        ```
        
        Sample result:
        
        ```
        +-------------+--------------------+------------------+-------------+-----------------------+---------------------+---------------+-------------+------------------------+-----------------+----------------+
        | OBJECT_TYPE | OBJECT_SCHEMA      | OBJECT_NAME      | COLUMN_NAME | OBJECT_INSTANCE_BEGIN | LOCK_TYPE           | LOCK_DURATION | LOCK_STATUS | SOURCE                 | OWNER_THREAD_ID | OWNER_EVENT_ID |
        +-------------+--------------------+------------------+-------------+-----------------------+---------------------+---------------+-------------+------------------------+-----------------+----------------+
        | GLOBAL      | NULL               | NULL             | NULL        |       139949462878336 | INTENTION_EXCLUSIVE | STATEMENT     | GRANTED     | sql_base.cc:3103       |         3055785 |              1 |
        | TABLE       | test               | test             | NULL        |       139931318980224 | SHARED_WRITE        | TRANSACTION   | GRANTED     | sql_parse.cc:6479      |         3055785 |              1 |
        | COMMIT      | NULL               | NULL             | NULL        |       139931318980480 | INTENTION_EXCLUSIVE | EXPLICIT      | GRANTED     | handler.cc:1669        |         3055785 |              1 |
        | TABLE       | performance_schema | metadata_locks   | NULL        |       139934227366144 | SHARED_READ         | TRANSACTION   | GRANTED     | sql_parse.cc:6479      |         3057612 |              1 |
        | GLOBAL      | NULL               | NULL             | NULL        |       139934216849664 | INTENTION_EXCLUSIVE | STATEMENT     | GRANTED     | sql_base.cc:5519       |         3057989 |             13 |
        | SCHEMA      | test               | NULL             | NULL        |       139934216849408 | INTENTION_EXCLUSIVE | TRANSACTION   | GRANTED     | sql_base.cc:5506       |         3057989 |             13 |
        | TABLE       | test               | test             | NULL        |       139934216848640 | SHARED_UPGRADABLE   | TRANSACTION   | GRANTED     | sql_parse.cc:6479      |         3057989 |             13 |
        | BACKUP LOCK | NULL               | NULL             | NULL        |       139934216849280 | INTENTION_EXCLUSIVE | TRANSACTION   | GRANTED     | sql_base.cc:5526       |         3057989 |             13 |
        | TABLESPACE  | NULL               | test/test        | NULL        |       139934216848384 | INTENTION_EXCLUSIVE | TRANSACTION   | GRANTED     | lock.cc:815            |         3057989 |             13 |
        | TABLE       | test               | #sql-17d9_2ea89a | NULL        |       139934216848896 | EXCLUSIVE           | STATEMENT     | GRANTED     | sql_table.cc:15054     |         3057989 |             13 |
        | GLOBAL      | NULL               | NULL             | NULL        |       139934216850176 | INTENTION_EXCLUSIVE | TRANSACTION   | GRANTED     | dictionary_impl.cc:416 |         3057989 |             13 |
        | TABLESPACE  | NULL               | test/test        | NULL        |       139934216849920 | EXCLUSIVE           | TRANSACTION   | GRANTED     | dictionary_impl.cc:397 |         3057989 |             13 |
        +-------------+--------------------+------------------+-------------+-----------------------+---------------------+---------------+-------------+------------------------+-----------------+----------------+
        12 rows in set (0.00 sec)
        ```
        
        View information about the threads that hold the MDLs from the `performance_schema.threads` table based on the value of `OWNER_THREAD_ID`.
        
        ```
        SELECT * FROM performance_schema.threads WHERE THREAD_ID = "OWNER_THREAD_ID in performance_schema.metadata_locks table ";
        ```
        

## Best practices

-   **Waiting for table metadata lock**
    
    In most cases, DDL operations are blocked due to a failure to acquire the MDL. When this happens, the DDL operations enter the `Waiting for table metadata lock` state. You can query the `metadata_lock` table to quickly identify the reason for the blockage of the DDL operation.
    
    Sample command:
    
    Execute the `SHOW PROCESSLIST` statement to query the execution status of the `ALTER TABLE t1 ADD COLUMN d VARCHAR(10), ALGORITHM = INPLACE` statement. Sample result:
    
    ```
    /*force_node='pi-bp10k7631d6k3****'*/ SHOW PROCESSLIST;
    +-----------+-----------------+-----------------------+--------------------+----------------+---------+---------------------------------+-------------------------------------------------------------+
    | Id        | User            | Host                  | db                 | Command        | Time    | State                           | Info                                                        |
    +-----------+-----------------+-----------------------+--------------------+----------------+---------+---------------------------------+-------------------------------------------------------------+
    |        98 | event_scheduler | localhost             | NULL               | Daemon         | 1306586 | Waiting on empty queue          | NULL                                                        |
    |       109 | replicator      | 11.111.XX.XX:62549    | NULL               | Polar Log Dump |       1 | Reading log from innodb         | NULL                                                        |
    |       113 | replicator      | 11.111.XX.XX:62560    | NULL               | Polar Log Ack  |       1 | Receiving from client           | NULL                                                        |
    |       133 | replicator      | 10.13.64.70:42712     | NULL               | Polar Log Dump |       1 | Reading log from innodb         | NULL                                                        |
    |       138 | replicator      | 10.13.64.70:42723     | NULL               | Polar Log Ack  |       0 | Receiving from client           | NULL                                                        |
    |       369 | aurora          | 10.111.211.209:33334  | NULL               | Sleep          |       0 |                                 | NULL                                                        |
    |       370 | aurora          | 10.111.211.209:33336  | NULL               | RDS Push LSN   | 1306413 | starting                        | NULL                                                        |
    |       372 | aurora          | 10.111.204.224:37010  | NULL               | Sleep          |       0 |                                 | NULL                                                        |
    |       373 | aurora          | 10.111.204.224:37019  | NULL               | RDS Push LSN   | 1306413 | starting                        | NULL                                                        |
    |   3064011 | root            | 127.0.0.1:59703       | NULL               | Sleep          |     716 |                                 | NULL                                                        |
    |   3064013 | root            | 127.0.0.1:59710       | NULL               | Sleep          |      25 |                                 | NULL                                                        |
    |   3064015 | root            | 127.0.0.1:59713       | NULL               | Sleep          |      55 |                                 | NULL                                                        |
    |   3064018 | root            | 127.0.0.1:59716       | NULL               | Sleep          |       1 |                                 | NULL                                                        |
    |   3067041 | zyg_root        | 172.17.XX.XX:48594    | test               | Query          |      22 | Waiting for table metadata lock | alter table t1 add column d varchar(10),algorithm = inplace |
    |   3067443 | zyg_root        | 172.17.XX.XX:48602    | test               | Sleep          |      27 |                                 | NULL                                                        |
    |   3069716 | aurora          | 100.104.XX.XX:33017   | information_schema | Sleep          |      30 |                                 | NULL                                                        |
    |   3069859 | aurora          | 100.104.XX.XX:41872   | information_schema | Sleep          |      30 |                                 | NULL                                                        |
    |   3069925 | aurora          | 10.111.204.224:20916  | NULL               | Sleep          |       2 |                                 | NULL                                                        |
    |   3069932 | aurora          | 10.111.211.209:51263  | NULL               | Sleep          |       2 |                                 | NULL                                                        |
    | 270526156 | zyg_root        | 172.17.28.253:46272   | test               | Query          |       0 | starting                        | /*force_node='pi-bp10k7631d6k3****'*/ show processlist      |
    +-----------+-----------------+-----------------------+--------------------+----------------+---------+---------------------------------+-------------------------------------------------------------+
    20 rows in set (0.00 sec)
    ```
    
    The result shows that the DDL operation is in the `Waiting for table metadata lock` state.
    
    Query the `performance_schema.metadata_locks` table to view the MDL status of the DDL operation. Sample result:
    
    ```
    /*force_node='pi-bp10k7631d6k3****'*/ SELECT * FROM performance_schema.metadata_locks;
    +-------------+--------------------+------------------+-------------+-----------------------+---------------------+---------------+-------------+--------------------+-----------------+----------------+
    | OBJECT_TYPE | OBJECT_SCHEMA      | OBJECT_NAME      | COLUMN_NAME | OBJECT_INSTANCE_BEGIN | LOCK_TYPE           | LOCK_DURATION | LOCK_STATUS | SOURCE             | OWNER_THREAD_ID | OWNER_EVENT_ID |
    +-------------+--------------------+------------------+-------------+-----------------------+---------------------+---------------+-------------+--------------------+-----------------+----------------+
    | TABLE       | performance_schema | metadata_locks   | NULL        |       139742994307712 | SHARED_READ         | TRANSACTION   | GRANTED     | sql_parse.cc:7688  |         3810041 |              1 |
    | TABLE       | test               | t1               | NULL        |       139742992122240 | SHARED_READ         | TRANSACTION   | GRANTED     | sql_parse.cc:7688  |         3810574 |              1 |
    | GLOBAL      | NULL               | NULL             | NULL        |       139742992172544 | INTENTION_EXCLUSIVE | STATEMENT     | GRANTED     | sql_base.cc:5637   |         3810086 |              3 |
    | SCHEMA      | test               | NULL             | NULL        |       139742993150592 | INTENTION_EXCLUSIVE | TRANSACTION   | GRANTED     | sql_base.cc:5624   |         3810086 |              3 |
    | TABLE       | test               | t1               | NULL        |       139742993150848 | SHARED_UPGRADABLE   | TRANSACTION   | GRANTED     | sql_parse.cc:7688  |         3810086 |              3 |
    | BACKUP LOCK | NULL               | NULL             | NULL        |       139742993844096 | INTENTION_EXCLUSIVE | TRANSACTION   | GRANTED     | sql_base.cc:5644   |         3810086 |              3 |
    | TABLESPACE  | NULL               | test/t1          | NULL        |       139742991805696 | INTENTION_EXCLUSIVE | TRANSACTION   | GRANTED     | lock.cc:815        |         3810086 |              3 |
    | TABLE       | test               | #sql-1b34_2ecca1 | NULL        |       139742992091136 | EXCLUSIVE           | STATEMENT     | GRANTED     | sql_table.cc:15532 |         3810086 |              3 |
    | TABLE       | test               | t1               | NULL        |       140266021234688 | EXCLUSIVE           | TRANSACTION   | PENDING     | mdl.cc:4124        |         3810086 |              3 |
    +-------------+--------------------+------------------+-------------+-----------------------+---------------------+---------------+-------------+--------------------+-----------------+----------------+
    9 rows in set (0.00 sec)
    ```
    
    The result shows that the `3810574` thread holds the `SHARED_READ` lock of the `test/t1` table. Consequently, the `3810086` thread cannot obtain the `EXCLUSIVE` lock. Query the `performance_schema.threads` table to view the details of the threads. Sample result:
    
    ```
    /*force_node='pi-bp10k7631d6k3****'*/ SELECT * FROM performance_schema.threads WHERE THREAD_ID IN (3810086,3810574)\G
    *************************** 1. row ***************************
              THREAD_ID: 3810086
                   NAME: thread/sql/one_connection
                   TYPE: FOREGROUND
         PROCESSLIST_ID: 3067041
       PROCESSLIST_USER: zyg_root
       PROCESSLIST_HOST: 172.17.28.253
         PROCESSLIST_DB: test
    PROCESSLIST_COMMAND: Query
       PROCESSLIST_TIME: 41
      PROCESSLIST_STATE: Waiting for table metadata lock
       PROCESSLIST_INFO: alter table t1 add column d varchar(10),algorithm = inplace
       PARENT_THREAD_ID: NULL
                   ROLE: NULL
           INSTRUMENTED: YES
                HISTORY: YES
        CONNECTION_TYPE: TCP/IP
           THREAD_OS_ID: 64852
         RESOURCE_GROUP: NULL
    *************************** 2. row ***************************
              THREAD_ID: 3810574
                   NAME: thread/sql/one_connection
                   TYPE: FOREGROUND
         PROCESSLIST_ID: 3067443
       PROCESSLIST_USER: zyg_root
       PROCESSLIST_HOST: 172.17.28.253
         PROCESSLIST_DB: test
    PROCESSLIST_COMMAND: Sleep
       PROCESSLIST_TIME: 46
      PROCESSLIST_STATE: NULL
       PROCESSLIST_INFO: NULL
       PARENT_THREAD_ID: NULL
                   ROLE: NULL
           INSTRUMENTED: YES
                HISTORY: YES
        CONNECTION_TYPE: TCP/IP
           THREAD_OS_ID: 65845
         RESOURCE_GROUP: NULL
    2 rows in set (0.01 sec)
    ```
    
    The result shows that the blocked DDL operation runs on the `3810086` thread, and a slow query runs on the `3810574` thread. The `3810574` thread holds the lock. Consequently, the `alter table t1 add column d varchar(10),algorithm = inplace` statement fails to acquire the MDL and is blocked. Wait for the statement to be committed or use the `KILL processlist_id` statement to terminate the statement. Then, re-execute the `ALTER TABLE t1 ADD COLUMN d VARCHAR(10), ALGORITHM = INPLACE` statement based on your business requirements.
    
-   **Wait for syncing with replicas**
    
    PolarDB uses a cluster architecture. When you perform DDL operations on the primary node, you must wait for all read-only nodes to release the corresponding MDLs. If a DDL operation is in the `Wait for syncing with replicas` state in the output of the `SHOW PROCESSLIST` statement, a read-only node holds the corresponding MDL. You can quickly identify the thread on the read-only node that holds the MDL based on the preceding information.
    
    Sample command:
    
    Execute the `SHOW PROCESSLIST` statement on the primary node of the cluster to query the execution status of the `ALTER TABLE t1 ADD COLUMN d VARCHAR(10), ALGORITHM = INPLACE` statement. Sample result:
    
    ```
    /*force_node='pi-bp10k7631d6k3****'*/ SHOW PROCESSLIST;
    +-----------+-----------------+-----------------------+--------------------+----------------+---------+--------------------------------+-------------------------------------------------------------+
    | Id        | User            | Host                  | db                 | Command        | Time    | State                          | Info                                                        |
    +-----------+-----------------+-----------------------+--------------------+----------------+---------+--------------------------------+-------------------------------------------------------------+
    |        98 | event_scheduler | localhost             | NULL               | Daemon         | 1307512 | Waiting on empty queue         | NULL                                                        |
    |       109 | replicator      | 11.111.XX.XX:62549    | NULL               | Polar Log Dump |       1 | Reading log from innodb        | NULL                                                        |
    |       113 | replicator      | 11.111.XX.XX:62560    | NULL               | Polar Log Ack  |       1 | Receiving from client          | NULL                                                        |
    |       133 | replicator      | 10.13.64.70:42712     | NULL               | Polar Log Dump |       1 | Reading log from innodb        | NULL                                                        |
    |       138 | replicator      | 10.13.64.70:42723     | NULL               | Polar Log Ack  |       0 | Receiving from client          | NULL                                                        |
    |       369 | aurora          | 10.111.211.209:33334  | NULL               | Sleep          |       0 |                                | NULL                                                        |
    |       370 | aurora          | 10.111.211.209:33336  | NULL               | RDS Push LSN   | 1307339 | starting                       | NULL                                                        |
    |       372 | aurora          | 10.111.204.224:37010  | NULL               | Sleep          |       0 |                                | NULL                                                        |
    |       373 | aurora          | 10.111.204.224:37019  | NULL               | RDS Push LSN   | 1307339 | starting                       | NULL                                                        |
    |   3064011 | root            | 127.0.0.1:59703       | NULL               | Sleep          |     742 |                                | NULL                                                        |
    |   3064013 | root            | 127.0.0.1:59710       | NULL               | Sleep          |      21 |                                | NULL                                                        |
    |   3064015 | root            | 127.0.0.1:59713       | NULL               | Sleep          |      21 |                                | NULL                                                        |
    |   3064018 | root            | 127.0.0.1:59716       | NULL               | Sleep          |       1 |                                | NULL                                                        |
    |   3067041 | zyg_root        | 172.17.28.253:48594   | test               | Query          |       6 | Wait for syncing with replicas | alter table t1 add column d varchar(10),algorithm = inplace |
    |   3067443 | zyg_root        | 172.17.28.253:48602   | test               | Sleep          |     751 |                                | NULL                                                        |
    |   3071863 | aurora          | 100.104.XX.XX:32615   | information_schema | Sleep          |      56 |                                | NULL                                                        |
    |   3072000 | aurora          | 100.104.XX.XX:41585   | information_schema | Sleep          |      56 |                                | NULL                                                        |
    |   3072126 | aurora          | 10.111.204.224:47050  | NULL               | Sleep          |       2 |                                | NULL                                                        |
    |   3072127 | aurora          | 10.111.211.209:41026  | NULL               | Sleep          |       1 |                                | NULL                                                        |
    | 270526156 | zyg_root        | 172.17.28.253:46272   | test               | Sleep          |     362 |                                | NULL                                                        |
    | 270530026 | zyg_root        | 172.17.28.253:46390   | test               | Query          |       0 | starting                       | /*force_node='pi-bp10k7631d6k3****'*/ show processlist      |
    +-----------+-----------------+-----------------------+--------------------+----------------+---------+--------------------------------+-------------------------------------------------------------+
    21 rows in set (0.00 sec)
    ```
    
    The result shows that the DDL operation is in the `Wait for syncing with replicas` state.
    
    Query the status of the MDL on a specific read-only node from the `performance_schema.metadata_locks` table by using hints. Sample result:
    
    ```
    /*force_node='pi-bp186ko4o21wl****'*/ SELECT * FROM performance_schema.metadata_locks;
    +-------------+--------------------+----------------+-------------+-----------------------+---------------------+---------------+-------------+--------------------+-----------------+----------------+
    | OBJECT_TYPE | OBJECT_SCHEMA      | OBJECT_NAME    | COLUMN_NAME | OBJECT_INSTANCE_BEGIN | LOCK_TYPE           | LOCK_DURATION | LOCK_STATUS | SOURCE             | OWNER_THREAD_ID | OWNER_EVENT_ID |
    +-------------+--------------------+----------------+-------------+-----------------------+---------------------+---------------+-------------+--------------------+-----------------+----------------+
    | TABLE       | test               | t1             | NULL        |       139394298895872 | SHARED_READ         | TRANSACTION   | GRANTED     | sql_parse.cc:7688  |         3513381 |              1 |
    | TABLE       | test               | t1             | NULL        |       139394298602240 | SHARED_READ         | TRANSACTION   | GRANTED     | sql_parse.cc:7688  |         3519277 |              1 |
    | TABLE       | test               | t1             | NULL        |       139917548369664 | SHARED_READ         | TRANSACTION   | GRANTED     | sql_parse.cc:7688  |         3519279 |              1 |
    | TABLE       | test               | t1             | NULL        |       139394296661888 | SHARED_READ         | TRANSACTION   | GRANTED     | sql_parse.cc:7688  |         3519278 |              1 |
    | TABLE       | test               | t1             | NULL        |       139394297595520 | SHARED_READ         | TRANSACTION   | GRANTED     | sql_parse.cc:7688  |         3519276 |              1 |
    | SCHEMA      | test               | NULL           | NULL        |       139464322084864 | INTENTION_EXCLUSIVE | EXPLICIT      | GRANTED     | sql_table.cc:17404 |              57 |              1 |
    | TABLE       | test               | t1             | NULL        |       139464322084992 | EXCLUSIVE           | EXPLICIT      | PENDING     | sql_table.cc:17410 |              57 |              1 |
    | TABLE       | performance_schema | metadata_locks | NULL        |       139394296038784 | SHARED_READ         | TRANSACTION   | GRANTED     | sql_parse.cc:7688  |         3518506 |              1 |
    +-------------+--------------------+----------------+-------------+-----------------------+---------------------+---------------+-------------+--------------------+-----------------+----------------+
    8 rows in set (0.00 sec)
    ```
    
    The result shows that the `3513381`, `3519277`, `3519279`, `3519278`, and `3519276` threads on the read-only node hold the `SHARED_READ` lock on the `test/t1` table. Query the detailed information of the threads from the `performance_schema.threads` table. Sample result:
    
    ```
    /*force_node='pi-bp186ko4o21wl****'*/SELECT * FROM performance_schema.threads WHERE THREAD_ID IN (3519278,3513381,3519279,3519276,3519277)\G
    *************************** 1. row ***************************
              THREAD_ID: 3513381
                   NAME: thread/sql/one_connection
                   TYPE: FOREGROUND
         PROCESSLIST_ID: 538961413
       PROCESSLIST_USER: zyg_root
       PROCESSLIST_HOST: 172.17.28.253
         PROCESSLIST_DB: test
    PROCESSLIST_COMMAND: Connect
       PROCESSLIST_TIME: 103
      PROCESSLIST_STATE: User sleep
       PROCESSLIST_INFO: select *,sleep(60) from t1
       PARENT_THREAD_ID: NULL
                   ROLE: NULL
           INSTRUMENTED: YES
                HISTORY: YES
        CONNECTION_TYPE: TCP/IP
           THREAD_OS_ID: 63826
         RESOURCE_GROUP: NULL
    *************************** 2. row ***************************
              THREAD_ID: 3519276
                   NAME: thread/sql/parallel_worker
                   TYPE: FOREGROUND
         PROCESSLIST_ID: 1855915
       PROCESSLIST_USER: zyg_root
       PROCESSLIST_HOST: 172.17.28.253
         PROCESSLIST_DB: test
    PROCESSLIST_COMMAND: Sleep
       PROCESSLIST_TIME: 103
      PROCESSLIST_STATE: Sending data
       PROCESSLIST_INFO: select *,sleep(60) from t1
       PARENT_THREAD_ID: 3513381
                   ROLE: NULL
           INSTRUMENTED: NO
                HISTORY: YES
        CONNECTION_TYPE: NULL
           THREAD_OS_ID: 7117
         RESOURCE_GROUP: NULL
    *************************** 3. row ***************************
              THREAD_ID: 3519277
                   NAME: thread/sql/parallel_worker
                   TYPE: FOREGROUND
         PROCESSLIST_ID: 1855917
       PROCESSLIST_USER: zyg_root
       PROCESSLIST_HOST: 172.17.28.253
         PROCESSLIST_DB: test
    PROCESSLIST_COMMAND: Sleep
       PROCESSLIST_TIME: 103
      PROCESSLIST_STATE: Sending data
       PROCESSLIST_INFO: select *,sleep(60) from t1
       PARENT_THREAD_ID: 3513381
                   ROLE: NULL
           INSTRUMENTED: NO
                HISTORY: YES
        CONNECTION_TYPE: NULL
           THREAD_OS_ID: 7116
         RESOURCE_GROUP: NULL
    *************************** 4. row ***************************
              THREAD_ID: 3519278
                   NAME: thread/sql/parallel_worker
                   TYPE: FOREGROUND
         PROCESSLIST_ID: 1855916
       PROCESSLIST_USER: zyg_root
       PROCESSLIST_HOST: 172.17.28.253
         PROCESSLIST_DB: test
    PROCESSLIST_COMMAND: Sleep
       PROCESSLIST_TIME: 103
      PROCESSLIST_STATE: Sending data
       PROCESSLIST_INFO: select *,sleep(60) from t1
       PARENT_THREAD_ID: 3513381
                   ROLE: NULL
           INSTRUMENTED: NO
                HISTORY: YES
        CONNECTION_TYPE: NULL
           THREAD_OS_ID: 7119
         RESOURCE_GROUP: NULL
    *************************** 5. row ***************************
              THREAD_ID: 3519279
                   NAME: thread/sql/parallel_worker
                   TYPE: FOREGROUND
         PROCESSLIST_ID: 1855918
       PROCESSLIST_USER: zyg_root
       PROCESSLIST_HOST: 172.17.28.253
         PROCESSLIST_DB: test
    PROCESSLIST_COMMAND: Sleep
       PROCESSLIST_TIME: 103
      PROCESSLIST_STATE: Sending data
       PROCESSLIST_INFO: select *,sleep(60) from t1
       PARENT_THREAD_ID: 3513381
                   ROLE: NULL
           INSTRUMENTED: NO
                HISTORY: YES
        CONNECTION_TYPE: NULL
           THREAD_OS_ID: 7118
         RESOURCE_GROUP: NULL
    5 rows in set (0.00 sec)
    ```
    
    The query operations on the read-only node hold the lock for an extended period of time, and do not release it. Multiple `parallel_worker` threads concurrently hold the MDL because the parallel query feature is enabled. Wait for the statement to be committed or use the `KILL processlist_id` statement to terminate the process. Then, re-execute the `ALTER TABLE t1 ADD COLUMN d VARCHAR(10), ALGORITHM = INPLACE` statement based on your business requirements.
    

## Contact us

If you have any questions about DDL operations, [contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us).
