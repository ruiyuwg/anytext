This topic outlines Lindorm.

## **What is Lindorm?**

Lindorm is a cloud-native, multi-modal, and hyperconverged database designed and optimized for scenarios such as the Internet of Things (IoT), the Internet, and the Internet of vehicles. It supports unified access and converged processing of various data types, including wide table, time series, text, object, stream, and spatial data. It is compatible with multiple standard interfaces, such as SQL, HBase, Cassandra, S3, TSDB, HDFS, Solr, and Kafka. It also seamlessly integrates with third-party ecosystem tools. Lindorm is suitable for scenarios such as logs, monitoring, bills, advertising, social networking, travel, and risk control. Lindorm also supports the core services of Alibaba.

## Why choose Lindorm?

### **Business background**

Traditional data storage solutions use separate databases, such as relational, time series, and object storage databases, for different data types such as structured and semi-structured data. This leads to severe technology fragmentation. This fragmentation results in complex technology stacks, difficult selection processes, and long data synchronization links. This not only increases the technical requirements for personnel and extends the service launch cycle but also increases the failure rate and maintenance costs. It also hinders architectural evolution. For example, implementing cross-zone high availability or global synchronization requires separate modifications for each component. The popularization of technologies such as 5G and IoT further intensifies the core conflict between diverse data requirements and complex storage architectures.

To solve this problem, Alibaba Cloud developed Lindorm to meet the needs for unified storage, query, and analysis of multi-modal data. As shown in the following figure, compared with traditional solutions, Lindorm greatly simplifies the design of the data storage architecture, significantly improves system stability, and reduces deployment costs.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5766345671/CAEQUBiBgIDqreuw2BkiIGYxN2UzMzE5ZWUzMjRlNjViMjhjOTZlNWNmMTEzODdl5631580_20250827151823.919.svg)

### **Core capabilities**

Lindorm is elastic, cost-effective, easy to use, open, and stable. It is suitable for storing and analyzing data such as metadata, logs, bills, tags, messages, reports, dimension tables, sink tables, feed streams, user personas, device data, monitoring data, sensor data, small files, and small images. Its core capabilities include the following:

**Core capability**

**Description**

**Multi-modal hyper-convergence**

Supports multiple data models, such as wide table, time series, object, text, queue, and spatial. Data can be shared and integrated across different models. Lindorm provides integrated services for data access, storage, retrieval, computing, and analysis. This helps make application development more agile, flexible, and efficient.

**High cost-effectiveness**

Supports tens of millions of concurrent throughput and millisecond-level access latency. It significantly reduces storage costs through multi-level storage media, intelligent hot and cold data separation, and adaptive feature compression.

**Cloud-native elasticity**

Supports independent elastic scaling of computing and storage resources.

**Open and compatible**

Compatible with multiple standard interfaces, such as SQL, HBase, Cassandra, S3, TSDB, HDFS, Solr, and Kafka. It seamlessly integrates with systems like Hadoop, Spark, Flink, and Kafka. It also provides easy-to-use capabilities for data exchange, processing, and subscription.

For more information, see [Features](/help/en/lindorm/product-overview/product-function-node-hitsdb) and [Benefits](/help/en/lindorm/product-overview/product-advantages).

## **Service architecture**

Lindorm uses an innovative cloud-native architecture that separates storage from compute and integrates shared multi-modal data. This architecture meets the demands for resource decoupling and elastic scaling in the cloud computing era. Lindorm uses the cloud-native distributed file system LindormDFS as its unified storage foundation. This foundation supports various dedicated multi-modal data engines, such as the wide table engine, time series engine, search engine, vector engine, and column store engine. On top of the multi-modal engines, Lindorm provides unified SQL access for cross-model federated queries. It also offers open standard interfaces such as HBase, Cassandra, OpenTSDB, Spark, and HDFS to ensure the seamless migration of existing services. Meanwhile, Lindorm Tunnel Service (LTS) processes data forwarding and change data capture between engines in real time. This enables data migration, real-time subscription, data lake dumping, data warehouse backflow, multi-active geo-redundancy, and backup and recovery.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5766345671/CAEQUBiBgMDg7fKw2BkiIGQ2ZWRkM2ZiYWIzNzQ2NWE5NDRjNmZjMTkxNTI2Mzcz5631580_20250827160531.746.svg)

## Multi-modal engines

Lindorm supports multiple data models, such as wide table, time series, object, file, queue, and spatial. It provides both standard SQL and open source interfaces. Data can be shared and integrated across different models. This makes application development more agile, flexible, and efficient. The core capabilities for multi-modal data are provided by the following data engines:

**Data engine**

**Core capabilities**

**Wide table engine**

Manages and serves wide table and object data. It provides features such as global secondary indexes, multi-dimensional retrieval, dynamic columns, and TTL. It is suitable for scenarios like metadata, orders, bills, user personas, social networking, feed streams, and logs. It is compatible with standard interfaces such as SQL, HBase, Cassandra (CQL), and S3.

It supports tens of millions of concurrent throughput and petabyte-scale storage. Its throughput performance is 3 to 7 times that of Apache HBase. Its P99 latency is one-tenth of that of Apache HBase. Its average fault recovery time is 10 times faster than Apache HBase. It supports hot and cold data separation, and its compression ratio is twice that of Apache HBase. The overall storage cost is half that of Apache HBase.

**Time series engine**

Manages and serves time series data. It provides SQL-based management, writing, and query capabilities for measurement data, monitoring data, and device operating data in fields such as industry, IoT, and monitoring. **The compression algorithm designed for time series data can achieve a compression ratio of up to 10:1.** It supports multi-dimensional queries and aggregate computing on massive data, provides native Prometheus Query Language (PromQL) query capabilities, and also supports pre-downsampling and continuous queries for time series data.

**Search engine**

Accelerates the retrieval and analysis of multi-modal data. Based on core technologies like column store and inverted indexes, it provides capabilities such as full-text search, aggregate computing, and complex multi-dimensional queries. It is suitable for scenarios like logs, bills, and user personas. It is compatible with standard interfaces such as SQL and open source Solr.

**Compute engine**

The compute engine is deeply integrated with the Lindorm storage engine. It is a distributed computing service based on a cloud-native architecture. The resources are owned by the user. It meets the computing needs for scenarios such as data production, interactive analysis, machine learning, and graph computing. It is compatible with the open source Spark standard interface.

**Vector engine**

The Lindorm vector engine provides storage, indexing, and retrieval services for massive amounts of vector data. It supports multiple index algorithms and distance functions, along with rich hybrid retrieval methods. The vector engine can provide the full-text and vector hybrid retrieval capabilities required for retrieval-augmented generation (RAG) systems, further improving the accuracy of large model responses. It is also suitable for various AI business scenarios, such as recommendation, NLP services, and AI chat.

**Column store engine**

The Lindorm column store engine is a high-performance, low-cost, stable, and reliable online column store database engine service. It is designed for scenarios such as IoT, the Internet of vehicles, and logs. It provides capabilities such as efficient reads and writes, high-compression storage, and high-performance online analysis.

**AI engine**

The resources of the Lindorm AI engine are owned by the user. It provides a one-stop integrated AI inference capability. You can use Lindorm SQL to flexibly import and deploy pre-trained models for intelligent analysis and processing of massive multi-modal data.
