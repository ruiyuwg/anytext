ApsaraDB RDS for MySQL provides the following consistency levels for the database proxy in [read/write (read/write splitting) mode](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint#e2d61fe581l5u): eventual consistency, session consistency, and global consistency. This topic describes the consistency levels and the scenarios of the consistency levels. You can specify a consistency level for your ApsaraDB RDS for MySQL instance based on your business requirements.

## **Background information**

ApsaraDB RDS for MySQL uses binary log replication to synchronize data between the primary RDS instance and read-only RDS instances. When a transaction is committed on the primary RDS instance, the generated binlog event is sent to the read-only RDS instances. The read-only RDS instances receive and apply the binlog event to synchronize data with the primary RDS instance. Binary log replication ensures eventual consistency. However, in high-concurrency or high-load scenarios, a replication latency may occur on the read-only RDS instances. As a result, data read from the read-only RDS instances is different from the data on the primary RDS instance.

To resolve data inconsistency, ApsaraDB RDS for MySQL provides the following consistency levels for the database proxy: eventual consistency, session consistency, and global consistency. You can select a consistency level based on your business requirements.

## **Consistency introduction**

## **Eventual consistency (default)**

#### **Description**

By default, the database proxy of the RDS instance uses eventual consistency. This allows read requests to be directly sent to read-only RDS instances if binary log replication is uninterrupted. If binary log replication is used, the data on the read-only RDS instances is eventually consistent, and the read requests of the database proxy are also eventually consistent. You can specify a latency threshold for the database proxy of your RDS instance to limit the maximum latency of a read-only RDS instance. For more information, see [Configure access policies for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-mysql/configure-access-policies-for-a-database-proxy-endpoint#e2d6bc2481xsr). If the latency of a read-only RDS instance exceeds the latency threshold, read requests are no longer sent to the read-only RDS instance.

A replication latency may cause data inconsistency on different read-only RDS instances. For example, if you start a session to continuously run the following query, the query results may be different:

```
SET AUTOCOMMIT = 1;INSERT INTO t1(id, price) VALUES (111, 96);UPDATE t1 SET price = 100 WHERE id = 111;SELECT price FROM t1;
```

The query results may vary due to the replication latency.

#### **Scenarios**

Your workloads are insensitive to consistency. You want to reduce loads on the primary RDS instance for more read requests to be forwarded to read-only RDS instances.

## Session consistency

#### **Description**

To prevent inaccurate query results due to eventual consistency, the business system forwards read requests based on the consistency requirements. The business system forwards the read requests that require high consistency to the primary RDS instance and the read requests that require low consistency to read-only RDS instances. This increases application complexity and causes the primary RDS instance to process more read requests, which affects the effectiveness of read/write splitting.

To resolve the issue, ApsaraDB RDS for MySQL provides session consistency. Compared with eventual consistency, session consistency allows the database proxy to record the position of the data that is previously updated on the primary RDS instance. The data position is determined based on the global transaction identifier (GTID). The database proxy sends read requests only to the read-only RDS instances on which data at the required position is synchronized. This ensures that the read requests can query the updated data in the current session to ensure data consistency in the session.

#### **Scenarios**

Consistency dependencies exist within a session. In this case, we recommend that you use session consistency. This consistency level slightly affects performance and is suitable for most scenarios.

## Global consistency

#### **Description**

In some scenarios, causal dependencies exist within sessions, dependencies exist between different sessions, and data that is read by each session must be identical. In this case, session consistency cannot meet the requirements. ApsaraDB RDS for MySQL provides global consistency to meet the requirements. Compared with session consistency, global consistency allows the database proxy to record the position of the data on the primary RDS instance before each read operation and to send read requests to the read-only RDS instances on which data at the required position is synchronized. This ensures that the read requests can query the updated data in all sessions to ensure global data consistency. The data position is determined based on the GTID.

#### **Scenarios**

Consistency dependencies exist between sessions, and more read requests and less write requests need to be processed.

For more information about how to implement session consistency and global consistency, see [Appendix: Implementation of session consistency and global consistency](#6b1b0fc56a9x5).

## **Select a consistency level**

-   A high consistency level indicates low read/write splitting performance. The following consistency levels are sorted in descending order: global consistency, session consistency, and eventual consistency.
    
-   In most cases, we recommend that you use session consistency. This consistency level slightly affects performance and is suitable for most scenarios.
    
-   If you require high consistency between different sessions and a small number of write operations need to be processed, you can select global consistency.
    

**Consistency level**

**Impact on read/write splitting performance**

**Data consistency strength**

**Data consistency scope**

Eventual consistency

None

Low

Consistency of the final results

Session consistency

Medium

Medium

Consistency within a session

Global consistency

High

High

Consistency across sessions

## **Configure a consistency level**

### **Prerequisites**

-   The database proxy feature is enabled and the version of the database proxy is 2.25.1 or later. For more information, see [Enable the database proxy feature](/help/en/rds/apsaradb-rds-for-mysql/enable-and-configure-the-dedicated-proxy-feature-for-an-apsaradb-rds-for-mysql-instance) and [Release notes for the database proxy version](/help/en/rds/apsaradb-rds-for-mysql/release-notes-of-dedicated-proxy-versions#section-b2w-iby-b9c).
    
-   The attribute of the database proxy is **Read/Write (Read/Write Splitting)**. For more information, see [Configure the read and write attributes and the read weight](/help/en/rds/apsaradb-rds-for-mysql/configure-read-write-attributes-and-read-weights).
    
-   The RDS instance runs MySQL 5.7 or MySQL 8.0 with the following minor engine versions:
    
    -   MySQL 5.7: 20210630 or later.
        
    -   MySQL 8.0: 20210930 or later.
        

### **Usage notes**

-   If you use session consistency or global consistency, the database proxy needs to wait for the synchronization of the data at the required position. This may increase the service latency. The maximum waiting time for the database proxy equals the read consistency timeout period.
    
-   If a replication latency occurs on a read-only RDS instance and global consistency is used, more read requests may be forwarded to the primary RDS instance. This increases the load on the primary RDS instance and further increases the service latency.
    
-   The default consistency level is eventual consistency.
    

### **Procedure**

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Database Proxy**.
    
3.  In the **Connection Information** section, find the database proxy endpoint that you want to modify and click **Modify Configuration** in the **Actions** column.
    
4.  Select a consistency level based on your requirements.
    
    **Note**
    
    -   If you select eventual consistency or session consistency, you can specify a latency threshold. The default latency threshold is 30 seconds.
        
    -   If you select session consistency or global consistency, you can specify a **read consistency timeout period**. If you do not specify a timeout period, the default value is 10 ms.
        
    

## Appendix: **Implementation** of session consistency and global consistency

To achieve session consistency and global consistency, the database proxy of your RDS instance records the value of `Executed_Gtid_Set` on each read-only RDS instance to determine the data position on each read-only RDS instance. Executed\_Gtid\_Set specifies the set of committed transactions. The data position is determined based on the GTID. Before a read request starts, the database proxy specifies the GTID required for the read request and forwards the read request to the read-only RDS instance that has reached the GTID position. If the read-only RDS instance does not meet the GTID requirements, the database proxy forwards the read request until data at the required GTID position is synchronized to the read-only RDS instance. ApsaraDB RDS for MySQL allows you to specify a **read consistency timeout period** to limit the maximum wait time. If no read-only RDS instance meets the GTID requirement within the timeout period, the request is sent to the primary RDS instance.

The GTID for a read request varies based on the consistency level.

-   Session consistency: The GTID for a read request is the same as the GTID that corresponds to the most recent executed transaction in the current session.
    
-   Global consistency: The GTID for a read request is the same as the GTID that corresponds to the most recent executed transaction in the current cluster.
    

## Related operations

Operation

Description

[DescribeDBProxy](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describedbproxy-mysql)

Queries the detailed database proxy settings of an RDS instance.

[DescribeDBProxyEndpoint](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-describedbproxyendpoint-mysql)

Queries information about a database proxy endpoint.

[ModifyDBProxyEndpoint](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-modifydbproxyendpoint-mysql)

Modifies the connection settings for a database proxy endpoint.
