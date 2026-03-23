LindormDFS (LDFS) provides a distributed file storage system shared by all other Lindorm engines to store a large amount of unstructured data. LindormDFS integrates the benefits of object storage and block storage benefits to offer cost-effective, reliable, and high performance storage services. In addition, LindormDFS leverages a variety of features such as tiered storage with different performance, shared-replica deduplication, and intelligent data tiering. This way, LindormDFS offers an elastic, cost-effective, and cloud native storage service that is fully compatible with Hadoop Distributed File System (HDFS). You can use open source HDFS clients to access LindormDFS.

In scenarios such as data computing and analysis, data backup and archiving, and data import, LindormDFS allows you to access the files of different Lindorm engines that are stored in the underlying storage from external systems. This significantly improves the efficiency of data reading and writing operations. For example, you can create physical files in the data format that is used in an offline computing system. This reduces the negative impact of file creation on online services in LindormDFS.

## Benefits

-   **Cost-effectiveness:** The lowest unit price is CNY 0.12/GB/month. The unit price may vary by region. If the unit price is different, the unit price on the buy page prevails. The price will be reduced in the future.
    
-   **Fundamental file system capabilities:** LindormDFS supports high-performance read and write operations on metadata. This way, files can be moved in batches by directory.
    
-   **HDFS protocol compatibility:** You can use open source HDFS clients to access LindormDFS without the need to worry about vendor lock-in issues. LindormDFS is compatible with a range of open source and Alibaba Cloud services, such as Hive, Spark, Impala, Presto, Flink, Yarn, Kylin, E-MapReduce (EMR), and MaxCompute.
    
-   **Compute-storage separation:** You can individually purchase storage capacity based on your business requirements. The computing resources are decoupled from storage resources in a Lindorm instance based on LindormDFS. You do not need to worry about the resource waste that is caused when storage is coupled to computing.
    
-   **Tiered storage of hot and cold data:** Hot data and cold data can be stored in the same system. You can specify your data as hot data or cold data by file or directory and store hot data and cold data in different types of storage media to reduce storage costs.
