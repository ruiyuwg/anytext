PolarDB supports the async metadata lock (MDL) replication feature to improve the execution efficiency of DDL operations. This topic describes this feature.

## Supported versions

-   PolarDB for MySQL 5.6 and 5.7 clusters of all the revision versions support this feature.
    
-   The revision version for a PolarDB for MySQL 8.0 cluster is 8.0.1.1.10 or later. For more information about how to view the cluster version, see [Query the engine version](/help/en/doc-detail/423885.html#section-7p8-757-iyh).
    

## Background

When you perform DDL operations on a database, you must synchronize MDL information between the primary node and read-only nodes to make data definitions consistent. However, DDL operations on the primary node often occupy MDLs. As a result, read-only nodes must wait a long time before they can obtain MDL information. Before the MDL information is synchronized, read-only nodes no longer parse redo logs. This severely affects the efficiency of DDL operations.

PolarDB decouples MDL synchronization from redo log parsing by using the async metadata lock replication feature. This way, read-only nodes can still parse and apply redo logs even when the read-only nodes wait for metadata lock information that is to be synchronized.

## Use the async metadata lock replication feature

-   This feature is provided out-of-the-box with supported clusters. No additional configuration is required.
    
-   You can execute the following statement on a read-only node to obtain the information that is related to MDL synchronization from the read-only node:
    
    ```
    SELECT * FROM INFORMATION_SCHEMA.INNODB_LOG_MDL_SLOT;
    ```
    
    **Note**
    
    -   PolarDB cluster must meet one of the following requirements:
        
        -   The PolarDB for MySQL cluster runs MySQL 8.0.1 and the revision version is 8.0.1.1.24 or later.
            
        -   The PolarDB for MySQL cluster runs MySQL 5.7 and the revision version is 5.7.1.0.20 or later.
            
        -   The PolarDB for MySQL cluster runs MySQL 5.6 and the revision version is 5.6.1.0.33 or later.
            
        -   If your cluster does not meet any of the preceding requirements, we recommend that you [Update the versions](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version#section-dsd-05e-ro1).
            
    -   For information about how to forcibly run a query on a specified node, see the "Hint" section of [Overview](/help/en/polardb/polardb-for-mysql/user-guide/read-or-write-splitting-2#section-268-4y3-g1u).
        
    
    The following result is returned:
    
    ```
    +---------+------------+-------------------+----------+-------------------+
    | slot_id | slot_state | slot_name         | slot_lsn | thread_id         |
    +---------+------------+-------------------+----------+-------------------+
    |       0 | SLOT_NONE  | no targeted table |        0 | no running thread |
    |       1 | SLOT_NONE  | no targeted table |        0 | no running thread |
    |       2 | SLOT_NONE  | no targeted table |        0 | no running thread |
    |       3 | SLOT_NONE  | no targeted table |        0 | no running thread |
    |       4 | SLOT_NONE  | no targeted table |        0 | no running thread |
    +---------+------------+-------------------+----------+-------------------+
    ```
    
    This table lists the details of the MDL information that is being synchronized. In this table, the `slot_name` column shows the relevant data table information and the `slot_state` column shows the information about the status of the current MDL synchronization, including:
    
    -   SLOT\_NONE: the initialization state.
        
    -   SLOT\_RESERVED: The read-only node has received the request for the MDL information and is waiting for a worker thread that is assigned by the scheduling system to process this request.
        
    -   SLOT\_ACQUIRING: The system has allocated worker thread resources and the read-only node is sending the MDL request.
        
        **Note**
        
        If the MDL required by the read-only node is held by other connections, MDL synchronization remains in this state.
        
    -   SLOT\_LOCKED: The MDL on the read-only node has been obtained and held.
        
    -   SLOT\_RELEASING: The read-only node has received an MDL release request and is waiting for a worker thread that is assigned by the scheduling system to process the request.
        
    
-   You can execute the following statement to query the status information about the worker thread that is used by the read-only node to process the MDL synchronization request:
    
    ```
    SELECT * FROM INFORMATION_SCHEMA.INNODB_LOG_MDL_THREAD;
    ```
    
    **Note**
    
    -   PolarDB cluster must meet one of the following requirements:
        
        -   The PolarDB for MySQL cluster runs MySQL 8.0.1 and the revision version is 8.0.1.1.24 or later.
            
        -   The PolarDB for MySQL cluster runs MySQL 5.7 and the revision version is 5.7.1.0.20 or later.
            
        -   The PolarDB for MySQL cluster runs MySQL 5.6 and the revision version is 5.6.1.0.33 or later.
            
        -   If your cluster does not meet any of the preceding requirements, we recommend that you [Update the versions](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version#section-dsd-05e-ro1).
            
    -   For information about how to forcibly run a query on a specified node, see the "Hint" section of [Overview](/help/en/polardb/polardb-for-mysql/user-guide/read-or-write-splitting-2#section-268-4y3-g1u).
        
    
    The following result is returned:
    
    ```
    +-----------+-----------+------------------+-------------------+----------+
    | thread_id | thr_state | slot_state       | slot_name         | slot_lsn |
    +-----------+-----------+------------------+-------------------+----------+
    |         0 | free      | not in acquiring | no targeted table |        0 |
    |         1 | free      | not in acquiring | no targeted table |        0 |
    |         2 | free      | not in acquiring | no targeted table |        0 |
    |         3 | free      | not in acquiring | no targeted table |        0 |
    +-----------+-----------+------------------+-------------------+----------+
    ```
    
    If an MDL synchronization request whose state is `SLOT_ACQUIRING` exists in the `INNODB_LOG_MDL_SLOT` table, a corresponding worker thread is available in the `INNODB_LOG_MDL_THREAD` table to process the request. This indicates that the value of the `thr_state` parameter is not `free`. This case shows that the read-only node waits for the MDL at a high probability. You can check whether an MDL is occupied based on whether the value of the `thr_state` parameter is `free`.
    

## **Contact Us**

If you have any questions about DDL operations, please feel free to reach out to [Contact us](/help/en/cloud-migration-guide-for-beginners/latest/contact-us).
