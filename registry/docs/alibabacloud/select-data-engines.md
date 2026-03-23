Lindorm includes the LindormTable engine, LindormTSDB engine, search engine, , compute engine, and stream engine. It is compatible with multiple open standard interfaces, such as HBase, Cassandra, S3, OpenTSDB, Solr, HDFS. It also supports SQL queries, time series processing, and text retrieval and analysis.

The computing and storage resources of each Lindorm engine can be separately scaled to adapt to dynamic workloads in your business. The wide table engine and the time series engine provide high concurrency and high throughput.

## Select an engine

Each engine type is designed for specific scenarios. You can select one or more engines based on your requirements. For more information, see the following table.

**Engine Type**

**Compatibility**

**Scenario**

**Description**

Wide table engine (LindormTable)

Compatible with SQL, the HBase API, Cassandra Query Language (CQL), and the Amazon S3 API.

Suitable for managing and analyzing metadata, orders, bills, user personas, social information, feeds, logs, trajectories.

A distributed wide-column engine designed for massive volumes of semi-structured and structured data. It supports global secondary indexes, multi-dimensional retrieval, dynamic columns, TTL, throughput of tens of millions of high-concurrency operations, and storage capacity of hundreds of petabytes. Its throughput performance is 3 to 7 times higher than that of open-source HBase. Its P99 latency is one-tenth that of open-source HBase. It supports hot and cold data separation. Its compression ratio is twice that of open-source HBase. Its overall storage cost is half that of open-source HBase. It includes built-in GanosBase spatio-temporal service, which is designed for various types of spatial or spatio-temporal data and supports large-scale historical trajectory query and analysis scenarios.

Time series engine (LindormTSDB)

Provides an HTTP API and is compatible with the OpenTSDB API.

Suitable for storing and processing time series data such as measurement data and operational data of devices in scenarios such as IoT and monitoring.

The time series engine is a distributed storage engine that is used to process large amounts of time series data. It supports SQL queries. The time series engine provides a dedicated compression algorithm for time series data. This helps improve the data compression ratio. The time series engine lets you use multiple dimensions to query and aggregate large amounts of time series data by timeline. The engine also supports downsampling and elastic scaling.

Search engine

Compatible with SQL, Apache Solr, and Elasticsearch APIs.

Suitable for querying large amounts of data, such as logs, text, and documents. For example, you can use the search engine to search for logs, bills, and user personas.

Lindorm provides a distributed search engine. The search engine uses an architecture in which storage is decoupled from computing. The search engine can be seamlessly used to store the indexes of the wide table engine and the time series engine to accelerate data retrieval. The search engine provides various capabilities, including full-text searches, aggregation, and complex multi-dimensional queries. It also supports an architecture that consists of one write replica and multiple read-only replicas and provides features such as horizontal scaling, cross-zone disaster recovery, and TTL to meet the requirements of efficient retrieval of large amounts of data.

Compute Engine

Compatible with the Apache Spark API.

Suitable for scenarios such as the production of large amounts of data, interactive analytics, computational learning, and graph computing.

The compute engine provides distributed computing services based on a cloud native architecture. It supports Community Edition computing models and programming interfaces. The compute engine also integrates the features of the Lindorm storage engine and uses the underlying data storage features and indexing capabilities to efficiently complete distributed jobs.

Streaming engine

Compatible with SQL and the Apache Kafka API.

Suitable for scenarios such as IoT data processing, application log processing, logistics aging analysis, travel data processing, and real-time trajectory processing.

The Lindorm streaming engine is used to store and process streaming data. It provides lightweight computing capabilities. You can use the stream computing engine to store streaming data to Lindorm to meet the requirements for the processing and application of streaming data. You can use the Lindorm GanosBase service provided by the wide table together with the Lindorm streaming engine to implement real-time trajectory analysis features, such as electronic geofencing and regional statistic collection.

## Select the number and specification of nodes

Lindorm supports the horizontal scaling of nodes. When nodes experience high load, increased latency, or instability, you can resolve these issues by increasing the number of nodes. However, simply increasing the number of nodes cannot resolve single-node hot-spot issues on low-specification nodes. Upgrading to higher node specifications can prevent hot-spot issues. In other words, node specifications determine the **single-node hot-spot resistance capability**. Node specifications also affect stability. During hot-spot traffic or sudden spikes in request volume, low-specification nodes may experience high load or out-of-memory (OOM) errors.

Therefore, we recommend that you select the specification of nodes in your instance based on the requirements of your business. You can upgrade the specifications of nodes in your Lindorm instance in the Lindorm console. For more information, see [Change the engine specification of an instance](/help/en/lindorm/user-guide/change-the-engine-specification-of-an-instance#task-2222910). If you do not know how to select the node specification or need help when you upgrade the node specification, contact the technical support of Lindorm (DingTalk ID: s0s3eg3).

### **Wide table engine (LindormTable)**

LindormTable nodes support specifications that range from 4 CPU cores and 8 GB of memory to 32 CPU cores and 256 GB of memory. The number of LindormTable nodes in a Lindorm instance can be increased. You can select a node specification based on the number of requests per second and the number of regions on a single node in your business.

**Note**

-   **Commodity Type**: If you select Lindorm when creating the instance, the minimum LindormTable node specification is 4 CPU cores and 16 GB of memory.
    
-   Some performance optimization features of LindormTable may not work properly when the memory of each LindormTable node is less than 16 GB. Some write optimization features of LindormTable may not work properly when the LindormTable contains only two or less nodes. Therefore, select three or more nodes each with at least 8 cores and 32 GB of memory for LindormTable. We recommend that you select a specification that contains 16 cores and 64 GB of memory for each LindormTable node.
    

We recommend the following selections:

-   If the number of requests sent to access a single node per second is less than 1,000 and the number of regions on a single node is less than 500, select the specification with 4 CPU cores and 16 GB of memory.
    
-   If a single node handles fewer than 20,000 requests and supports fewer than 1,000 shards, you can use an instance with 8 vCPUs and 32 GB of memory or higher.
    
-   If the number of requests sent to access a single node per second is larger than 20,000, and the number of regions on a single node is larger than 1,000, select the specification with 16 CPU cores and 64 GB of memory.
    
    **Important**
    
    When you select a node specification, you must consider other factors rather than the number of requests per second and the number of regions on a single node.
    
    -   If you select the node specification for a complex business exactly based on the preceding rules, the business may not run stably and the latency may increase. Therefore, if your business meets one of the following conditions, we recommend that you select a node specification that is higher than the specifications described in the preceding rules.
        
        -   The row that may be accessed contains kilobytes or even megabytes of data.
            
        -   Complex filter conditions are specified in SCAN requests.
            
        -   The request cache hit ratio is low, forcing every request to access the disk.
            
        -   The instance contains multiple tables.
            
    -   If your business provides online services, select a node specification with large memory to cache more data for better query performance.
        
    -   If your business needs to run heavy-load tasks offline, such as MapReduce tasks and Spark tasks, or the TPS and QPS of your business are very high, we recommend that you select a node specification with more CPU cores.
        
    -   If the CPU utilization of the nodes remains 70% or higher, we recommend that you upgrade the node specification.
        
    

### **Time series engine (LindormTSDB)**

LindormTSDB nodes support specifications that range from 4 CPU cores and 8 GB of memory to 32 CPU cores and 256 GB of memory. You can select the number and specification of LindormTSDB nodes based on the TPS in your business. You can select the number and specification of LindormTSDB nodes based on the TPS in your business.

**Note**

**Commodity Type**: If you select Lindorm when creating the instance, the minimum LindormTSDB node specification is 4 CPU cores and 16 GB of memory.

We recommend the following selections:

-   If the TPS is less than 1,900,000, you can select three nodes each with 4 CPU cores and 16 GB of memory.
    
-   If the Transaction Per Second (TPS) is less than 3.9 million, you can select a 3-node specification with 8 vCPUs and 32 GB.
    
-   If the Transactions Per Second (TPS) is less than 7.8 million, you can select a 3-node configuration with 16 vCPUs and 64 GB of memory.
    
-   If the Transactions Per Second (TPS) is less than 11 million, you can choose 3 nodes, 32 cores, and 128 GB memory.
    

**Note**

You can select the number and specification of LindormTSDB nodes based on the preceding rules when you want to maximize the data processing performance in your business. You must also consider other factors when you select the number and specification of LindormTSDB nodes, such as the business model type, the data size of a batch, and the number of concurrent requests. For more information, see [Write test results](/help/en/lindorm/user-guide/results-of-write-tests#70db4ae095vz4) and [Query test results](/help/en/lindorm/user-guide/results-of-query-tests#topic-2192396).
