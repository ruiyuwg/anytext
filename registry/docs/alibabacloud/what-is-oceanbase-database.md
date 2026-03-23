OceanBase Database is a distributed relational database developed fully in-house by Ant Group and Alibaba Group in 2010.

OceanBase Database features strong data consistency, high availability, high performance, online scaling, high compatibility with SQL standards and mainstream relational databases, as well as low costs. So far, OceanBase Database has been applied to all the core businesses of Alipay, including the transaction, payment, membership, and accounting systems, as well as Taobao and Tmall favorites and Pay for Performance (P4P) advertising reports. In addition to its wide application in Ant Group and Alibaba business systems, OceanBase Database has been serving external customers including Bank of Nanjing, China Zheshang Bank, and PICC Health since 2017.

## Features and benefits

-   **High performance**: OceanBase Database adopts a read/write splitting architecture. Data is divided into baseline data and incremental data. The incremental data is stored in the memory (MemTables), and the baseline data is stored on SSDs (SSTables). All data modifications are incremental data and written only to MemTables. All DML operations are performed on MemTables with high performance.
    
-   **Low costs**: OceanBase Database achieves a high compression ratio through data encoding and compression. Data encoding provides a series of encoding methods based on the value range and type of different fields in the database relational tables. Data encoding "knows" data better than general compression algorithms and therefore achieves a higher compression ratio.
    
-   **High compatibility**: OceanBase Database is compatible with common MySQL/Oracle features and frontend/backend MySQL/Oracle protocols. You can migrate businesses from MySQL/Oracle databases to OceanBase Database with zero or a few modifications.
    
-   **High availability**: OceanBase Database adopts a multi-replica storage strategy, where the failure of a few replicas does not affect the data availability. The deployment architecture of five Internet data centers (IDCs) across three regions achieves city-wide lossless disaster recovery.
    

## Product Introduction
