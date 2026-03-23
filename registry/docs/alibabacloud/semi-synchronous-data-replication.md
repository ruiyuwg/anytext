This topic describes how PolarDB for MySQL improves the efficiency of semisynchronous replication based on physical replication and reduces the impact of semisynchronous replication on the performance of the primary database. This topic describes the background information of the semisynchronous replication feature based on physical replication, how the feature works, usage notes, and performance test result. This topic also provides answers to the frequently asked questions about this feature.

## **Background information**

By default, MySQL supports semisynchronous replication based on binary logs. In this replication mode, a transaction can be committed in the primary database only after a secondary database confirms that it has received and synchronized the binary logs generated for the transaction. However, this synchronization mode causes additional latency, which has a certain impact on the write performance of the primary database.

PolarDB for MySQL uses the physical replication architecture to synchronize data between the primary and secondary zones by using highly efficient redo logs. This improves the efficiency of semisynchronous replication and significantly reduces the performance loss of the primary database. Under heavy concurrent loads, semisynchronous replication based on physical replication degrades performance only by about 10% when compared with asynchronous replication.

Compared with MySQL semisynchronous replication based on binary logs, PolarDB for MySQL semisynchronous replication based on physical replication (redo stream) provides higher synchronization efficiency. During the execution of a transaction, the redo logs are generated and transmitted to the secondary zone in real time. Therefore, the transaction can be committed immediately after the redo log for commit is synchronized to the secondary zone. In MySQL semisynchronous replication based on binary logs, complete binary logs can be generated only when a transaction is to be committed. An operation success message can be returned to the client only after all the binary logs are synchronized.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1423495671/CAEQUBiBgMDn38qo2BkiIDczYjI5MjdmNGIzNDQ0NzM4OGNjMDUxNWYwOTYyODU14656868_20240902170559.924.svg)

## **Feature description**

The logic of semisynchronous replication provided by PolarDB for MySQL is easy to understand. This feature uses the physical replication architecture to synchronize data between the primary and secondary zones by using redo logs. Redo logs are generated for a write request issued by a business system when relevant data is modified in the primary zone. The redo logs are synchronized to the secondary zone over a physical replication link. Before the primary zone commits the write transaction for the write request and returns a success message to the business system, the primary zone must wait for confirmation of receipt of the redo log for commit from the secondary zone.

-   **Maximum waiting time before transaction commit**
    
    Write requests may fail to be committed in the primary zone due to unexpected factors of the secondary zone. Therefore, the maximum waiting time before transaction commit is specified at the kernel layer. If the primary zone does not receive the confirmation from the secondary zone within the specified maximum waiting time for a write transaction, the write transaction times out and the primary zone automatically commits the write transaction.
    
-   **Adaptive mechanism**
    
    In extreme cases, the secondary zone may become unable to confirm the synchronization information with the primary zone at the earliest opportunity. As a result, the primary zone commits each write request after a timeout period, which causes performance loss. To prevent this issue, PolarDB for MySQL implements the adaptive mechanism for semisynchronous replication. PolarDB for MySQL monitors the network connectivity between the primary and secondary zones, and automatically switches to asynchronous replication if timeout frequently occurs. This ensures that write requests in the primary zone are not affected by semisynchronous replication in extreme cases. PolarDB for MySQL automatically switches back to semisynchronous replication when the network connectivity between the primary and secondary zones recovers.
    

## **Usage notes**

**Note**

PolarDB for MySQL semisynchronous replication based on physical replication greatly improves data consistency across zones. For more information about how to enable this feature, see [Enable cross-zone automatic switchover](/help/en/polardb/polardb-for-mysql/user-guide/automatic-zone-switching#a05e264125fem).

-   Only PolarDB for MySQL Enterprise Edition clusters whose major version is 8.0.1 and revision version is 8.0.1.35.1 or later support semisynchronous replication across zones.
    
    -   PolarDB for MySQL Enterprise Edition clusters whose major version is 8.0.1 and revision version is 8.0.1.1.40 or later support the adaptive mechanism for semisynchronous replication.
        
    -   PolarDB for MySQL Enterprise Edition clusters whose major version is 8.0.1 and revision version is 8.0.1.1.44.2 or later support the `innodb_polar_wait_slave_reply_max_time` parameter. You can configure this parameter to specify the maximum waiting time before commit of write transactions in the primary zone after semisynchronous replication is enabled. The default value of this parameter is 500 ms.
        
-   Recovery Point Objective (RPO) and Recovery Time Objective (RTO)
    
    -   In asynchronous replication, cross-zone automatic switchover causes losses. In most cases, the RPO is less than 100 ms. In the worst case, the RPO is less than 60s. Evaluate the impact on your business before you use this feature.
        
    -   In semisynchronous replication, cluster performance is compromised by about 10% after you enable the cross-zone automatic switchover feature. By default, the waiting time before transaction commit is 500 ms. If the waiting time exceeds 500 ms, the replication mode falls back to asynchronous replication. The RPO is 0 if no fallback occurs.
        
    -   In asynchronous and semisynchronous replication, the RTO is less than 30s.
        

## **Performance test result**

**Note**

The test result in this topic only reflects the performance of the current version but not the latest version.

Test method: Compare the queries per second (QPS) performance of PolarDB for MySQL clusters that use asynchronous replication, PolarDB for MySQL semisynchronous replication, and MySQL semisynchronous replication. The clusters have the same specifications.

Test tool: oltp\_write\_only mode of Sysbench

Cluster specifications: 16 cores 64 GB

Tested version: PolarDB for MySQL 8.0.1 with the revision version of 8.0.1.35.1, which may be slightly different from the latest version

Data volume: 10 data tables, 10 million rows of data per table

![semi-sync](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4717717271/p843701.png)

In high-concurrency scenarios, the performance degradation is about 10% after semisynchronous replication is enabled. The semisynchronous replication performance of PolarDB for MySQL based on redo logs is higher than that of MySQL semisynchronous replication based on binary logs.

## **FAQ**

Q1: Why is the performance degraded by more than 10% after semisynchronous replication is enabled?

A1: In high-concurrency scenarios, the optimal performance degradation is about 10%. This is because multiple redo logs are processed in batches. This effectively reduces the overhead caused by network latency. In low-concurrency scenarios, performance improvement by batch processing is not obvious, so the performance may be seriously degraded. The redo I/O cannot be processed in batches if only one thread is used to write data. After semisynchronous replication is enabled, the network round-trip latency greatly downgrades the performance.

Q2: Why is the `innodb_polar_wait_slave_reply_max_time` parameter not displayed in the console? How do I adjust this parameter to a proper value?

A2: This parameter is available only for PolarDB for MySQL Enterprise Edition clusters whose major version is 8.0.1 and revision version is 8.0.1.1.44.2 or later. If you cannot find the parameter in the console, check whether the cluster version meets the requirements. If not, update the cluster version. For more information, see [Revision version management](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version).

Generally, you do not need to manually modify this parameter. The default value is 500 ms. If you have special requirements, you can adjust this parameter. For example, if you want to wait until relevant information is synchronized to the secondary zone before you commit a transaction, you can increase the value of this parameter. The default value of 500 ms is proper for most cases. If you want to limit the waiting time before transaction commit, you can set this parameter to a smaller value. Generally, the network latency between the primary and secondary zones is within 1 ms. In semisynchronous replication, the system must wait for at least one network round trip. If this parameter is set to a small value, such as 0 or 1 ms, the system may switch from semisynchronous replication to asynchronous replication. Therefore, you must consider the actual situation when you modify this parameter.

Q3: When does the adaptive mechanism of semisynchronous replication take effect? Can I enable semisynchronous replication but disable the adaptive mechanism?

A3: After semisynchronous replication is enabled, the adaptive mechanism automatically takes effect. The system automatically monitors the synchronization status of the primary and secondary zones and adjusts the replication mode in real time. The adaptive mechanism cannot be separately disabled. If you want to keep semisynchronous replication effective, set the `innodb_polar_wait_slave_reply_max_time` parameter to a large value. The adaptive mechanism determines the timeout status based on the parameter value.

Q4: The RPO is 0 if fallback does not occur. Does fallback mean dynamic disabling of semisynchronous replication by the adaptive mechanism?

A4: No, fallback and dynamic disabling of semisynchronous replication by the adaptive mechanism are not the same. If fallback does not occur, the redo information must be synchronized to the secondary zone before any transaction can be committed. In this case, the RPO value of 0 can be guaranteed. However, the adaptive mechanism does not monitor transactions but the communication of network packets. If the adaptive mechanism disables semisynchronous replication, multiple transactions may have been committed in case of synchronization timeout. In other words, the RPO may not be 0 even if semisynchronous replication is not disabled by the adaptive mechanism. There is a low probability that a few transactions may be committed in case of synchronization timeout. The semisynchronous replication feature ensures that the RPO is infinitely close to 0.
