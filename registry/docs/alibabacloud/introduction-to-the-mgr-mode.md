MySQL group replication (MGR) is a distributed replication mode that is provided by MySQL based on the existing binary logging mechanism. The MGR mode is implemented by using the Paxos protocol. ApsaraDB RDS for MySQL instances that run RDS Cluster Edition support MGR. This topic describes the advantages and implementation of the MGR mode. This topic also describes the optimizations that are made by AliSQL to improve the stability of the MGR mode.

## Advantages

The following table compares MGR, semi-synchronous replication, and asynchronous replication, in terms of data reliability, data consistency, and global transaction consistency.

**Item**

**MGR**

**Semi-synchronous replication**

**Asynchronous replication**

Data reliability

★★★★★

★★★

★

Data consistency

Ensured

Not ensured

Not ensured

Global transaction consistency

Supported

Not supported

Not supported

### **High data reliability**

The MGR mode uses the majority rule of the Paxos protocol to ensure data reliability. The majority rule specifies that a transaction can be committed only after most nodes in the RDS cluster receive the binary logs of the transaction. This prevents data loss when a minority of nodes in your RDS cluster becomes faulty.

For example, an RDS cluster contains five nodes. Three nodes receive the binary logs of a transaction, two nodes do not receive the binary logs, and two nodes are faulty.

-   If the faulty nodes receive the binary logs, at least one node that receives the binary logs is running as expected.
    
-   If the faulty nodes do not receive the binary logs, three nodes that receive the binary logs are running as expected.
    

### **Strong data** **consistency**

In MGR mode, transactions are transmitted to other nodes in an RDS cluster and then written to binary log files to ensure data consistency. If the original primary node becomes faulty and is restarted, the node is automatically added to the RDS cluster and the missing binary logs are automatically synchronized to the restarted node to obtain the latest data.

In traditional primary-secondary replication, if a primary node becomes faulty after the transactions are written to the binary log file but before the transactions are transmitted to secondary nodes, data inconsistency may occur.

### **Global transaction consistency**

MGR supports strong global transaction consistency for read and write operations. You can configure the `group_replication_consistency` parameter to adjust the consistency level.

-   Strong read consistency Use the `group_replication_consistency=BEFORE` setting on secondary nodes. This setting allows a query to be executed only after all transactions preceding the query are completed on the primary node. This ensures data consistency.
    
-   Strong write consistency Use the `group_replication_consistency=AFTER` setting on the primary node. This setting allows write transactions to be committed only after they are successfully applied on all nodes.
    

## **Deployment methods**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5764403471/CAEQORiBgMCsy5nWrhkiIGU3Mjg3MTFlODM4NTQ2MTNhNzUxZjcxNjYyNGFmMzA33963382_20230830144006.372.svg)

-   **Multiple leader**
    
    All nodes in your RDS cluster can process read and write requests. The multiple leader mode is used to increase the write capability of your RDS cluster. The multiple leader mode leverages the Paxos mechanisms to write multiple data records at the same time and to detect row-level conflicts to ensure that all nodes receive data in the same order.
    
    If a majority of nodes in your RDS cluster are available, faults on any node affect the availability of the RDS cluster for a short period of time.
    
-   **Single leader**
    
    Only one node in your RDS cluster can process write requests. Other nodes in the RDS cluster process only read requests. The single leader mode leverages the single leader replication strategy of the Paxos protocol to increase the read capability and maintain the high availability of your RDS cluster.
    
    -   If a majority of nodes in your RDS cluster are available and a secondary node in the RDS cluster becomes faulty, the availability of the RDS cluster is not affected.
        
    -   If the primary node is faulty, the RDS cluster automatically completes a primary/secondary switchover based on the Paxos protocol to ensure strong data consistency.
        
    
    ApsaraDB RDS for MySQL allows you to create an RDS cluster that uses the MGR mode in single leader mode. In the RDS cluster, read-only nodes are optimized to improve the performance of the RDS cluster and ensure high data reliability and strong data consistency.
    

## **Architecture**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4764403471/p636172.png)

The architecture of MGR has the following layers under the server layer and replica layer of MySQL:

-   Group replication logic layer: interacts with the server layer of MySQL to send and receive transactions to and from the group communication system (GCS) layer and play back the transactions.
    
-   GCS layer: delivers messages, detects faults, and manages cluster members.
    
-   XCom layer: developed based on the Paxos protocol to ensure the data order consistency and availability of a majority of nodes.
    

### **Paxos protocol**

The following list describes the functionalities of the Paxos protocol in MGR mode:

-   Ensures that all nodes in a cluster receive the binary logs of a transaction in the same order, which is essential for the multiple leader mode.
    
-   Ensures that a transaction can be committed only after a majority of nodes in the cluster receive the binary logs of the transaction to improve data reliability.
    

In the Paxos protocol, locks are used to achieve consistency in data sending orders between nodes. This method is inefficient and causes unbalanced loads among nodes. The XCom layer of MySQL relies on the Mencius protocol, which is a Paxos-based variant protocol. The Mencius protocol uses a polling mechanism to implement load balancing and improve efficiency.

### **Implementation of multiple leader mode**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5764403471/CAEQORiBgIC.zJnWrhkiIDllYzVhN2U1MzRlYzRjYzZhMDU3YmIwZGI2OTI3M2U23963382_20230830144006.372.svg)

-   Data order: Data is serially sent within each group to ensure the consistency of data sending orders within a group. When data is sent from multiple Paxos groups, a polling mechanism is used to ensure the consistency of data sending orders. For example, data is sent in the order of (1,1), (1,2), and (1,3).
    
-   Noop mechanism: If data of the nodes that are listed after a node is received by a majority of nodes in the cluster and no data on the node needs to be sent, the node broadcasts the noop state to skip the node itself. A node can send data only after the node that is listed before the node sends its data or broadcasts the noop state.
    
-   Defects: When jitters or faults are detected on a node, the node cannot send data or broadcast the noop state. In this case, the nodes that are listed after the node cannot send data, and the cluster becomes unavailable. This is a critical defect of multiple leader mode.
    

**Note**

In the preceding figure, (m,n) indicates that Group n sends the mth data record. For example, (2,1) indicates Group 1 sends its second data record.

### **Implementation of single leader mode**

The defect of multiple leader mode can be optimized, but cannot be eliminated. Therefore, MySQL provides single leader mode for the MGR mode. This helps prevent a cluster from being unavailable when a minority of nodes in the cluster are faulty.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5764403471/CAEQORiBgMCXzZnWrhkiIGJkYmZmYmI1ZDc1ZjQ1MmZiYTU0ZjgzMmU3N2UwYWNi3963382_20230830144006.372.svg)

The preceding figure shows the XCom architecture in single leader mode in which only one node can process write requests. Therefore, you need to activate only one Paxos group. The receiver automatically ignores other Paxos groups when data is polled. This way, the Paxos protocol can be used to send data without affecting the availability of the cluster if a majority of nodes in the cluster are available.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5764403471/CAEQORiBgMCmzpnWrhkiIGU1OTQ4MThmMjgxMTRlYWFiMGI0ZjZkNDU2YTNlY2Ix3963382_20230830144006.372.svg)

In single leader mode, secondary nodes in a cluster do not send transactions. Secondary nodes send information about cluster management. Before a secondary node sends data, the secondary node must request a location for data sending from the primary node, and then send the data to all nodes in the cluster. For example, <3,1> in the preceding figure shows a location for data sending. Although data is sent at a high latency and low efficiency in single leader mode, the performance of the cluster is not affected because information about cluster management is sent at a relatively low frequency.

### **Group replication logic layer**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4764403471/p635516.png)

The group replication logic layer sends and receives transactions to and from a cluster, and plays back the transactions. The following list describes how the group replication logic layer works on the primary and secondary nodes:

-   Primary node: Before a transaction is committed on the primary node, the group replication logic layer sends the binary logs of the transaction to the XCom layer and then to other nodes in the cluster. After a majority of nodes in the cluster receive the transaction, conflict detection is performed.
    
    -   If the transaction passes the conflict detection, the transaction is written to the binary log file and committed on the primary node.
        
    -   If the transaction fails the conflict detection, the transaction is rolled back.
        
-   Secondary node: After a majority of nodes in the cluster receive the transaction, the XCom layer sends the transaction to the group replication logic layer to perform the conflict detection.
    
    -   If the transaction passes the conflict detection, the transaction is written to the relay log file and then applied by the applier thread.
        
    -   If the transaction fails the conflict detection, the data of the transaction is discarded.
        

#### Conflict detection

-   Scenarios
    
    In MGR mode, conflict detection must be performed in the following scenarios:
    
    -   Multiple leader mode: Conflict detection is required for all write operations.
        
    -   Single leader mode: If a primary/secondary switchover is performed and write transactions are executed before the relay logs of the original primary node are applied on the new primary node, conflict detection is required.
        
-   Implementation
    
    In MGR mode, row-level conflict detection is performed based on the hash value of the primary key of a data row. Each node maintains an array of transaction authentication information, which is a hash array. The hash array consists of the following elements:
    
    -   Key: the hash value of a data row.
        
    -   Value: the union of the global transaction identifier (GTID) of the current transaction that modifies the data row and `gtid_executed` obtained before the current transaction is committed on the source node. gtid\_executed specifies the GTID set of all transactions that have been committed on the source node.
        
    
    Before a transaction is committed, take note of the following items:
    
    -   The source node sends the data that is modified by the transaction and commitment set that contains the transactions that are committed before the current transaction is committed.
        
    -   All nodes in the cluster use the hash values of all data rows that are modified by the current transaction to read the required values from the authentication information array, and put these values into a dependency set. The dependency set indicates the transactions that must be completed before the current transaction is committed.
        
    
    Before the current transaction is committed or written to the relay log, the system compares the commitment set and dependency set from the following aspects:
    
    -   If the commitment set contains the dependency set, the current transaction passes the conflict detection. In this case, the system writes the current transaction to the binary log file and commits the transaction on the source node, and writes the current transaction to the relay log files on other nodes.
        
    -   If the commitment set does not contain the dependency set, the current transaction fails the conflict detection. In this case, the system rolls back the current transaction on the source node and discards the relay logs on other nodes.
        
    
    Deletion mechanism:
    
    To reduce memory utilization, redundant data in the authentication information array is deleted on a regular basis.
    
    -   When a transaction is executed on all nodes in a cluster, all data rows that are modified by the transaction can be deleted from the authentication information array.
        
    -   In MGR mode, the data of transactions that are executed is deleted every 60 seconds.
        

## **Optimizations made by AliSQL on the stability of the MGR mode**

The single leader mode improves the stability of the MGR mode. However, stability issues still exist in some scenarios. When a high latency occurs on a secondary node, a large number of transactions cannot be applied at the earliest opportunity. As a result, a large amount of authentication information is accumulated, which affects the system stability.

-   A large amount of memory is occupied, and an out-of-memory (OOM) error may occur.
    
-   The overheads for deleting the accumulated authentication information are high, which affects the cluster performance.
    

The following list describes how AliSQL optimizes the deletion of the accumulated authentication information on the primary and secondary nodes:

-   Primary node The authentication information array is not used in any cases. Therefore, the authentication information array can be deleted from the primary node to eliminate negative impacts on the resources and stability of the primary node.
    
-   Secondary node Authentication information must be retained only when the `group_replication_consistency` parameter is set to EVENTUAL. If the group\_replication\_consistency parameter is set to EVENTUAL, a secondary node immediately provides external services after the secondary node is elected as the primary node without the need to wait until the relay log is played back. This may cause data conflicts. This setting is not commonly used in the production environment. If this setting is disabled, the amount of authentication information retained on the secondary node is significantly reduced. This reduces the memory consumption of the secondary node and improves the stability of the cluster.
