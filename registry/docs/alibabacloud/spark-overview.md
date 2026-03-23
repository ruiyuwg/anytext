Spark is a general-purpose big data analytics engine that features high performance, ease of use, and high universality.

## Architecture

Spark provides four main programming libraries: Spark SQL, Spark Streaming, MLlib, and GraphX, which are built on top of Spark Core, as shown in the following figure. The libraries are used to support offline extract, transform, and load (ETL), online analytical processing (OLAP), stream processing, machine learning, and graph computing. For more information, visit the [Apache Spark official website](http://spark.apache.org/docs/2.4.7/).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3742892471/CAEQORiBgMDpyLPHrhkiIGJhNjEwMWEyNDI3ZDQ4NzhhNmIwMDFmNjE4M2UyZmYw4971098_20250312143021.370.svg)

## Scenarios

-   Offline ETL
    
    Offline ETL applies to data warehousing scenarios. It refers to the process of extracting, transforming, and loading large amounts of data. This process is time-consuming. In most cases, scheduled tasks are used to perform offline ETL.
    
-   OLAP
    
    OLAP applies to business intelligence (BI) scenarios. After an analyst submits an interactive query, Spark quickly returns results. In addition to Spark, common OLAP engines include Presto and Impala. The main features of Spark 3.0 are supported in E-MapReduce (EMR) Spark 2.4. For more information about the features of Spark, see [Spark SQL Guide](https://archive.apache.org/dist/spark/docs/2.4.7/sql-programming-guide.html).
    
-   Stream processing
    
    Stream processing applies to real-time data processing scenarios, such as real-time dashboard update, risk management, recommendation, monitoring, and alerting. Stream processing engines include Spark Streaming and Flink. Spark Streaming provides the DStream and Structured Streaming APIs. Structured Streaming can be used in a similar way to DataFrame and does not have high requirements for developers. Flink is suitable for scenarios in which low latency is required. Spark Streaming is suitable for scenarios in which high throughput is required. For more information, see [Structured Streaming Programming Guide](https://archive.apache.org/dist/spark/docs/2.4.7/structured-streaming-programming-guide.html).
    
-   Machine learning
    
    MLlib is a scalable machine learning library that contains classification, regression, collaborative filtering, and aggregation algorithms. MLlib provides tools such as model selection, automatic parameter tuning, and cross-validation to improve productivity. MLlib supports algorithm modules for non-deep learning. For more information, see [Machine Learning Library (MLlib) Guide](https://archive.apache.org/dist/spark/docs/2.4.7/ml-guide.html).
    
-   Graph computing
    
    GraphX is a graph computing library. It supports various graph computing operators, such as property operators, structural operators, join operators, and neighborhood aggregation operators. For more information, see [GraphX Programming Guide](https://archive.apache.org/dist/spark/docs/2.4.7/graphx-programming-guide.html).
