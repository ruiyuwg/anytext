This topic describes the background information, scenarios, and features of Hologres Shared Cluster (Lakehouse Acceleration Edition) and the comparison of service types.

## Background information

Hologres Shared Cluster (Lakehouse Acceleration Edition) is an upgraded version of Hologres Shared Cluster (BI-based MaxCompute Acceleration Edition). Hologres Shared Cluster (Lakehouse Acceleration Edition) supports both BI-based MaxCompute acceleration and OSS data lake acceleration. Hologres Shared Cluster (Lakehouse Acceleration Edition) adopts a cloud-native architecture that separates storage from computing. Hologres Shared Cluster (Lakehouse Acceleration Edition) instances have exclusive frontend nodes with 4 cores and 16 GB of memory, and the frontend nodes authenticate, parse, and optimize SQL statements. Hologres Shared Cluster (Lakehouse Acceleration Edition) shares the resources in a computing resource pool to obtain ultra-high computing power at a low cost. This helps you flexibly implement interactive analysis of data lakehouses and analysis of data lake and data warehouse integration in serverless mode at a low cost.

## Scenarios

Hologres Shared Cluster (Lakehouse Acceleration Edition) is applicable to the following scenarios:

-   Data stored in Object Storage Service (OSS) or MaxCompute is infrequently queried, and the query latency is low.
    
-   A large amount of data in foreign tables is queried by using complex queries, and exclusive Hologres instances with low specifications cannot be used to perform the complex queries.
    
-   Queries of data in data lakes and data warehouses are accelerated, and business intelligence (BI) tools are connected to Hologres Shared Cluster (Lakehouse Acceleration Edition) for data analytics. For example, you can connect Tableau, Quick BI, and FineBI to Hologres Shared Cluster (Lakehouse Acceleration Edition).
    

## **Limits**

Hologres Shared Cluster (Lakehouse Acceleration Edition) is supported in the following regions: China (Beijing), China (Shanghai), China (Hangzhou), China (Shenzhen), and Singapore.

**Note**

If a Hologres Shared Cluster instance does not receive any query request within 90 consecutive days, it is suspended at **12:00** on the 90th day. This helps optimize resource allocation and improve user experience. After the suspension, metadata and endpoint of the Hologres Shared Cluster instance remain unchanged, but the computing service is suspended. Therefore, no fees will be generated for the computing service. If you want to use this instance, you can restore the instance on the Instances page.

## Features

Hologres Shared Cluster (Lakehouse Acceleration Edition) instances share computing resources. As individual objects, these instances have rich features as exclusive Hologres instances. Each Hologres Shared Cluster (Lakehouse Acceleration Edition) instance has the following features:

-   Built-in query engine:
    
    -   Hologres Shared Cluster (Lakehouse Acceleration Edition) allows you to create foreign tables to accelerate queries of data stored in MaxCompute and OSS. When you query data in this way, the data is still stored in the external system.
        
    -   You cannot create Hologres internal tables or import data to Hologres Shared Cluster (Lakehouse Acceleration Edition) instances for queries. If you need to import data to a Hologres internal table for queries, you can purchase an exclusive Hologres instance.
        
-   Standard SQL statements: Compatible with PostgreSQL 11, Hologres Shared Cluster (Lakehouse Acceleration Edition) provides standard PostgreSQL statements to query data.
    
-   Permission management: You can manage permissions separately for each Hologres Shared Cluster (Lakehouse Acceleration Edition) instance in the same way as you manage permissions for exclusive Hologres instances. You can add or remove users of the current instance, or grant different access permissions to different users based on your business requirements.
    

**Note**

Hologres Shared Cluster (Lakehouse Acceleration Edition) instances support the features of exclusive Hologres instances except for features related to Hologres internal tables and the data import feature.

## Comparison of service types

The following table compares the features of an exclusive Hologres instance and a Hologres Shared Cluster (Lakehouse Acceleration Edition) instance. This helps you better understand Hologres Shared Cluster instances.

**Item**

**Exclusive Hologres instance**

**Hologres Shared Cluster (Lakehouse Acceleration Edition) instance**

Feature

Category

PostgreSQL 11 is supported. More operators can be obtained.

PostgreSQL 11 is supported.

Parameter optimization

Parameter optimization

Supported. For example, you can modify parameters related to databases or users based on your business requirements.

Supported. For example, you can modify parameters related to databases or users based on your business requirements.

Number of SQL connections or queries per second (QPS)

The number varies based on the instance type. You can execute the `show max_connections` statement to query the number of SQL connections.

The default number of SQL connections is 100.

Data query based on foreign tables

Meta module loading

Data queries can be accelerated to respond within milliseconds.

Data queries can be accelerated to respond within sub-seconds.

Data type

The basic data types, DECIMAL type in MaxCompute V2.0, DATETIME type, and ARRAY type are supported.

The basic data types, DECIMAL type in MaxCompute V2.0, DATETIME type, and ARRAY type are supported.

Engine optimization

N/A.

N/A.

Data query based on internal tables

Supported indexes

Bitmap indexes and clustering keys are supported.

None.

Specified distribution keys

The distribution keys are specified to perform the Local Join or Local Group By operation.

None.

Resources

Computing resources and storage resources that you have purchased are exclusive to you.

Computing resources are shared, and storage resources are exclusive to you.
