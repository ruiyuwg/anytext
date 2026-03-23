ApsaraDB for RDS provides the Thread Pool feature to maximize performance. This feature separates threads from sessions. It allows sessions to share threads and complete more tasks with fewer threads.

## Benefits

By default, each session creates an exclusive thread in MySQL. If a large number of sessions are active, they will compete for resources. In addition, your database system needs to process a heavy workload of thread scheduling, and a large amount of data in the cache becomes invalid. This decreases your database performance.

The thread pool of ApsaraDB for RDS grants priorities to SQL statements based on the statement types. The thread pool also provides a concurrency control mechanism to limit the number of connections. This ensures high database performance in the event of a large number of highly concurrent connections. The benefits of the thread pool are as follows:

-   When a large number of threads are running concurrently, the thread pool automatically limits the number of concurrent threads to a proper range. Within this range, your database system processes a moderate workload of thread scheduling, and most of the data in the cache remains valid.
-   When a large number of transactions are executed concurrently, the thread pool automatically grants different priorities to SQL statements and transactions. Based on the priorities, the thread pool limits the number of concurrent statements and transactions separately. This mitigates resource competition.
-   The thread pool grants high priorities to SQL statements that are used to manage data and ensures that these statements are preferentially executed. This delivers stable execution of operations such as connection establishment, management, and monitoring even if your database system is heavily loaded.
-   The thread pool grants low priorities to complicated SQL statements that are used to query data and limits the maximum number of concurrent statements. This prevents a large number of complicated SQL statements from exhausting resources and making the database service unavailable.

## Prerequisites

Your RDS instance is running MySQL 5.6, 5.7, or 8.0.

## Use the thread pool

The following table describes the parameters of the thread pool. You can configure these parameters in the ApsaraDB for RDS console. For more information, see [Modify the parameters of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance#concept-lfl-xmn-wdb).

Parameter

Description

thread\_pool\_enabled

Specifies whether to enable the Thread Pool feature. Valid values:

-   ON
-   OFF

Default value: ON.

**Note**

-   You can enable or disable the Thread Pool feature only by using this parameter. The thread\_handling parameter has phased out.
-   Enabling or disabling the Thread Pool feature does not require an instance restart.

thread\_pool\_size

The number of groups in the thread pool. Default value: 4. Threads in the thread pool are evenly divided into groups and managed by group.

thread\_pool\_oversubscribe

The number of active threads allowed per group. Default value: 32. A thread is active if it is executing an SQL statement. However, if the SQL statement is in one of the following states, the thread is inactive:

-   The SQL statement is waiting for disk I/O.
-   The SQL statement is waiting for the involved transaction to be committed.

## Query the status of the thread pool

Run the following command to query the status of the thread pool:

```
show status like "thread_pool%";
```

Example:

```
mysql> show status like "thread_pool%";
+----------------------------+-------+
| Variable_name              | Value |
+----------------------------+-------+
| thread_pool_active_threads | 1     |
| thread_pool_big_threads    | 0     |
| thread_pool_dml_threads    | 0     |
| thread_pool_idle_threads   | 19    |
| thread_pool_qry_threads    | 0     |
| thread_pool_total_threads  | 20    |
| thread_pool_trx_threads    | 0     |
| thread_pool_wait_threads   | 0     |
+----------------------------+-------+
8 rows in set (0.00 sec)            
```

The following table describes the parameters that describe the status of the thread pool.

Parameter

Description

thread\_pool\_active\_threads

The number of active threads in the thread pool.

thread\_pool\_big\_threads

The number of threads that are executing complicated SQL statements in the thread pool. Complicated SQL statements contain subqueries, aggregate functions, and clauses such as GROUP BY and LIMIT.

thread\_pool\_dml\_threads

The number of threads that are executing data manipulation language (DML) statements in the thread pool.

thread\_pool\_idle\_threads

The number of idle threads in the thread pool.

thread\_pool\_qry\_threads

The number of threads that are executing simple SQL statements in the thread pool.

thread\_pool\_total\_threads

The total number of threads in the thread pool.

thread\_pool\_trx\_threads

The number of threads that are executing transactions in the thread pool.

thread\_pool\_wait\_threads

The number of threads that are waiting for disk I/O and those that are waiting for transactions to be committed in the thread pool.

## Use SysBench to test the thread pool

The following figures show comparisons of performance between business scenarios with the thread pool enabled and disabled. Based on the test results, the thread pool significantly increases your database performance in the event of a large number of highly concurrent sessions.

![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2630749951/p55473.png)![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2630749951/p55474.png)![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2630749951/p55475.png)![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3630749951/p55476.png)![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3630749951/p55479.png)
