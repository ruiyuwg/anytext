LindormTable is a wide table engine service provided by Lindorm to allow you to store large amounts of semi-structured and structured data in distributed storage. LindormTable can store various types of data, such as metadata, orders, bills, profiles, social networking information, feeds, and logs. LindormTable is compatible with standard APIs of open source software and services, such as Apache HBase, Apache Phoenix (SQL), and Apache Cassandra. LindormTable supports hundreds of trillions of rows in a single table, tens of millions of concurrent queries per second (QPS), responses to queries within milliseconds, and disaster recovery that ensures strong consistency across data centers. LindormTable can meet the business requirements for the storage and query of large amounts of data.

## Core features

-   **Cost-effectiveness**
    
    LindormTable uses technologies such as cost-effective high-density storage media, intelligent separation of cold data and hot data, adaptive encoding, and a compression algorithm that provides a high compression ratio. The cost of storing large amounts of data on a Lindorm database is 20% of the cost of storing the same volume of data on a self-managed database.
    
-   **Cloud native architecture that supports instance scaling**
    
    LindormTable uses a serverless architecture in which storage is decoupled from computing. This architecture enables Lindorm to support instant resource scaling for computing and storage on demand.
    
-   **Support on large-scale wide tables**
    
    LindormTable supports wide tables that contain more than 10,000 columns and real-time data writing to these tables through multiple concurrent threads.
    
-   **Enterprise-grade stability**
    
    LindormTable is built on top of a high-availability architecture and provides enterprise-grade stability. This architecture has demonstrated high stability and reliability in the production environment of Alibaba Group for more than a decade.
    
-   **High compatibility**
    
    LindormTable is compatible with various open standard interfaces, such as the Apache HBase API and Cassandra Query Language (CQL). LindormTable can also connect to compute engines such as Spark and Flink. This way, LindormTable can be seamlessly integrated into major data ecosystems.
    

For more information about LindormTable, see [Functions and features](/help/en/doc-detail/174641.html#concept-2555215) and [Lindorm VS HBase VS Cassandra](/help/en/lindorm/lindorm-vs-hbase-vs-cassandra#concept-1941643).

## Common scenarios

-   [Big data: Storage and analysis of large amounts of data](/help/en/lindorm/product-overview/scenarios#section-txp-8cp-x1g)
    
-   [Advertising: Real-time storage of large amounts of advertising and marketing data](/help/en/lindorm/product-overview/scenarios#section-fz5-9ii-ib1)
    
-   [Finance and retail: Real-time storage of transaction records and risk control data](/help/en/lindorm/product-overview/scenarios#section-tj5-zvx-gnt)
    
-   [Internet of Vehicles (IoV): Efficient storage processing of vehicle trajectory and status data](/help/en/lindorm/product-overview/scenarios#section-ma6-svz-633)
    
-   [Online social networking: Efficient and stable Storage of feeds](/help/en/lindorm/product-overview/scenarios#section-tj5-7lb-c7f)
    

## Connection methods

LindormTable allows you to use the following connection methods to access a wide table at the same time:

-   **Lindorm SQL** (recommended): Lindorm SQL provides an excellent developer experience.
    
-   **Apache HBase API**: This method is suitable for applications that are developed based on Apache HBase.
    
-   **CQL**: This method is suitable for applications that are developed based on Apache Cassandra.
