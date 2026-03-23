This topic describes how to use Holo Client.

## Introduction to Holo Client

As your business grows, your data volume increases rapidly. Hologres developed Holo Client to efficiently write large amounts of data to Hologres in batches or in real time and to handle high queries-per-second (QPS) point queries for dimension table joins. Holo Client is a proprietary interface based on Java Database Connectivity (JDBC).

Holo Client provides the following features:

-   Automatically collects data in batches. This enables high-performance batch and real-time writes of large data volumes. It also supports high-QPS point queries, DELETE operations, and UPDATE operations based on primary keys. However, for online analytical processing (OLAP) queries, use the JDBC interface.
    
-   Holo Client automatically writes data to the corresponding partitions. This way, you do not need to create partitions in advance.
    
-   Similar to the JDBC interface, Holo Client supports subscribing to Hologres binary logging (Binlog) for real-time data consumption.
    
-   Supports multiple programming languages, such as Java, C, and Go, to simplify development.
    

Note that Holo Client does not replace the JDBC interface. It adds features for scenarios where JDBC is not a good fit. For analysis scenarios where JDBC is suitable, continue to use the JDBC interface to query data.

## Use Holo Client

-   Holo Client is open source.
    
-   Each Holo Client version is published to the public Maven repository. For version information, see [Holo Client Release](https://search.maven.org/artifact/com.alibaba.hologres/holo-client).
    

## **FAQ**

-   Problem description:
    
    High latency occurs when running the system SQL statement `select hologres.hg_internal_refresh_meta(xxx);`.
    
-   Cause:
    
    Holo Client uses the `hg_internal_refresh_meta` function to obtain the metadata of tables in the instance. If frequent Data Definition Language (DDL) operations are performed on the instance, the function waits until the metadata version of the current node is updated before it returns a result. This process can be time-consuming.
    
-   Solution:
    
    Typically, the execution time of this system SQL statement is not a concern. However, if many of these high-latency SQL statements are recorded in slow query logs, it indicates that DDL operations are frequent on the instance. In this case, reduce the frequency of DDL operations to prevent version inconsistencies between nodes.
