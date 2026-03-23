AliSQL optimizes the Binlog Parallel Flush feature during the commit phase of binary logs to improve write performance. If you enable the feature after the optimization, the write performance of your ApsaraDB RDS instance is significantly improved.

## Prerequisites

-   Your RDS instance runs MySQL 8.0.
    
-   Your RDS instance runs a minor engine version of 20230930 or later.
    
    **Note**
    
    To view the minor engine version of your RDS instance, you can log on to the ApsaraDB RDS console and go to the **Basic Information** page. In the **Configuration Information** section, check whether the **Upgrade Minor Engine Version** button is displayed. If the button is displayed, you can click the button to view and update the minor engine version of your RDS instance. If the button is not displayed, your RDS instance runs the latest minor engine version. For more information, see [Update the minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance#concept-gnx-vgj-wdb11).
    
-   The sync\_binlog parameter of your RDS instance is not set to 1.
    

## **Background information**

![13ca93f432f146db197ded0b18b3023042978ae3ee7812bef3267aa4ca532dedQzpcVXNlcnNccWl5aW5ndGFuXEFwcERhdGFcUm9hbWluZ1xpRGluZ1RhbGtcNDI5ODE1NTU5N192MlxJbWFnZUZpbGVzXDE3MTEwMTA5NTg1MTRfMjVEODNBODItRjNCMi00OGYxLUE1RDMtNzkzNkU5REIxNjQ5LnBuZw==.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9704323171/p782173.png)

In MySQL, the system writes data to binary logs each time a transaction is committed. The writes are performed in sequence. The system writes data to the binary logs of one transaction after another.

The write process is time-consuming. Before the system writes data to binary logs, the system must parse all events stored in the binary log cache, assign values to the Checksum and log\_pos parameters, and then generate global transaction identifier (GTID) events. The write process poses a significant bottleneck to the write performance of the RDS instance. To address the bottleneck, AliSQL optimizes the Binlog Parallel Flush feature.

## **Optimization details**

### **Binary log buffer**

![7d62745838385a745eefff4a18d6f6ae712c7f429c11d5456c9288e66c0685d9QzpcVXNlcnNccWl5aW5ndGFuXEFwcERhdGFcUm9hbWluZ1xpRGluZ1RhbGtcNDI5ODE1NTU5N192MlxJbWFnZUZpbGVzXDE3MTEwMTEwNTY5ODBfRkE0RTZEOEYtMTg0NC00NzFiLTg0RTYtRjIxQTYyNjk4OEQwLnBuZw==.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9704323171/p782175.png)

AliSQL introduces a binary log buffer to implement the optimization. After multiple threads are allocated, the system can write binary log events to the binary log buffer in a parallel manner. Then, backend threads write the data in the binary log buffer to binary log files. This way, the system can perform the operations that must be completed in sequence in a parallel manner. The operations include assigning values to the Checksum and log\_pos parameters and generating GTID events. This significantly improves the write performance when events are written to binary log files.

### **Group commit**

In MySQL, the system writes data to binary log files and redo log files of different groups of transactions during the transaction commit. This helps merge I/O operations to the greatest extent and improve performance. After the optimization, the idea of group commit is retained. The following figure shows the Binlog Parallel Flush feature with group commit.

![49080702daa3a9709047732fbb09ebe2c40954015a22dc572926f5f706cdec34QzpcVXNlcnNccWl5aW5ndGFuXEFwcERhdGFcUm9hbWluZ1xpRGluZ1RhbGtcNDI5ODE1NTU5N192MlxJbWFnZUZpbGVzXDE3MTEwMTEzMzE1ODZfRUVEQUNGMkEtMTE4RS00YmU4LUE0RDItQjZGRDg2NjEzMDE0LnBuZw==.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9704323171/p782177.png)

After the optimization, the system allocates GTIDs and binary log buffers for transactions one after another. Then, the system writes the binary log events of the group of transactions to the binary log buffers. After the redo log files are stored and the backend thread writes the data in the binary log buffers to binary log files, the group of transactions can be committed.

### **Persistence of binary logs**

![f8acb0a238e8f535995bc410175c5b167240ab1ee31b97091d438c41812720b7QzpcVXNlcnNccWl5aW5ndGFuXEFwcERhdGFcUm9hbWluZ1xpRGluZ1RhbGtcNDI5ODE1NTU5N192MlxJbWFnZUZpbGVzXDE3MTEwMTExMTgzOTBfOUMxQTkzNjktRTczNi00ZjIwLUFGNzktRUFCNERBOENBNDcwLnBuZw==.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9704323171/p782178.png)After the optimization, binary log files are persisted by a backend thread at regular intervals. By default, a binary log file is persisted once per second.

## **Parameter description**

loose\_binlog\_parallel\_flush

This parameter specifies whether to enable the Binlog Parallel Flush feature. This parameter is a global system variable. Valid values: on and off. If you change the value of this parameter, the change immediately takes effect. You do not need to restart your RDS instance.

## **Optimization effect**

### **Test environment**

The following table describes the feature optimization effect on ApsaraDB RDS for MySQLRDS instances that use different specifications.

**Service**

**Version**

**CPU and memory**

**Storage type**

**Storage capacity**

ApsaraDB RDS for MySQL

MySQL 8.0 (minor engine version: 20230930)

16 cores, 32 GB

ESSD PL1

1,000 GB

16 cores, 32 GB

SSD

1,000 GB

64 cores, 128 GB

ESSD PL1

1,000 GB

64 cores, 128 GB

SSD

1,000 GB

### **Parameter configuration**

The RDS instance in the test uses a high-performance parameter template. In the template, the following performance-related parameter configuration is used: `sync_binlog = 1000` and `innodB_flush_log_at_trx_commit = 2`.

### **Test script**

The oltp\_update\_non\_index script of Sysbench is used for the performance test. The test data contains 100 tables, and each table contains 100,000 rows.

### **Test results**

The following figure shows the test results. Compared with native MySQL Normal Flush, Binlog Parallel Flush significantly improves the write performance of an RDS instance. The maximum improvement can reach 10% to 30%.

![5387087b82ed9e5a496a96425aee3abbe3cd103f9e53f63b92eae933526933a3QzpcVXNlcnNccWl5aW5ndGFuXEFwcERhdGFcUm9hbWluZ1xpRGluZ1RhbGtcNDI5ODE1NTU5N192MlxJbWFnZUZpbGVzXDE3MTA0ODMyODY1NTlfOTdCMkI0NTktNTYzMi00ZmU2LUJEMTMtOEQwMjg5QTYwQTVCLnBuZw==.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4801582371/p779500.png)
