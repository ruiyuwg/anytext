Hologres serverless instances are a type of instance developed based on the cloud-native serverless architecture. You can enjoy flexible, elastic, and easy-to-use Hologres computing and storage services without purchasing exclusive computing resources in advance. This topic describes the architecture of Hologres serverless instances.

## **Background**

When using Hologres general-purpose instances or virtual warehouse instances, users need to estimate their business workload and purchase exclusive computing resources in advance, which may lead to the following issues:

-   **Resource issues:** The pre-purchased exclusive computing resources may be insufficient during peak business hours and wasted during off-peak hours.
    
-   **Stability issues:** It is difficult to reserve sufficient resources for unexpected traffic spikes, which may lead to stability issues.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4347222571/p969121.png)

Based on the [Serverless computing](/help/en/hologres/user-guide/serverless-computing-overview/) feature, Hologres has launched Hologres serverless instances. The computing resources of serverless instances have no holding costs. They can schedule remote serverless computing resources based on the actual workload to meet the constantly fluctuating business needs. This effectively solves the problems of resource shortage, resource waste, and stability issues that may exist with exclusive computing resources.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4347222571/p969110.png)

## **Billing**

Resource billing is as follows:

-   **Computing resources:** Serverless instances have no holding costs for computing resources. You only need to pay for the actual resource usage of data write and query requests on a pay-as-you-go basis.
    
-   **Storage resources:** Standard storage (locally redundant storage) is supported with pay-as-you-go billing.
    

For more information about billing, see [Billing](/help/en/hologres/user-guide/serverless-instance-billing).

## **Benefits**

Hologres serverless instances offer the following benefits:

-   **Elastic computing:** No need to pre-purchase exclusive computing resources. Serverless computing resources are available on demand.
    
-   **Flexible storage:** Uses Hologres internal tables for storage and supports flexible index construction to achieve excellent query performance. MaxCompute data can be queried through foreign tables without the need for data import or export operations. You can flexibly select storage types based on your needs.
    
-   **High stability:** Resources are requested at the query level, and resources are physically isolated between queries to ensure stable execution of each query.
    
-   **Low cost:** No need to pre-purchase exclusive computing resources, avoiding resource waste. You pay for resources only based on the actual resource usage and duration of queries.
    
-   **O&M free:** No need to worry about cluster deployment or scaling.
    

## **Scenarios**

Hologres serverless instances are suitable for the following production scenarios. They can also be used in development or testing environments.

-   Reads and writes of small datasets.
    
-   High-performance, infrequent reads and writes of large datasets.
    
-   Scenarios with significant workload fluctuations where it is difficult to predict peak loads and reserve exclusive computing resources in advance.
    
-   Serverless instances schedule resources by query. They are not recommended for high-QPS performance stress testing but can be used to test query latency with fixed resource amounts.
    

The following scenarios are not suitable for serverless instances. Virtual warehouse instances are recommended instead:

Serverless instances do not support [accelerating the execution of SQL statements by using fixed plans](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans) (they will automatically use the HQE for execution). Therefore, serverless instances are not suitable for real-time streaming data write scenarios. However, they support near-real-time and offline refresh based on [dynamic tables](/help/en/hologres/user-guide/dynamic-table-overview/). This indicates that you can use serverless instances to build offline and near-real-time data warehouses.

## **Instance type comparison**

For a detailed comparison between serverless instances and other instance types (such as virtual warehouse instances and Shared Cluster instances), see [Instance types](/help/en/hologres/product-overview/product-type).

## Comparison between serverless instances and Serverless Computing

-   Serverless instances:
    
    -   A type of pay-as-you-go exclusive instance. A serverless instance has its unique instance ID and independent storage.
        
    -   All reads and writes in a serverless instance are handled by [Serverless computing](/help/en/hologres/user-guide/serverless-computing-overview/).
        
-   Serverless Computing:
    
    -   A feature that provides fully managed computing resources.
        
    -   It handles reads and writes in a Hologres instance, whether it is a general-purpose, serverless, or virtual warehouse instance.
        

## **Serverless instance architecture**

The following figure shows the service architecture.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9288721571/p970830.png)

Serverless instances have the following core components:

-   **Computing layer**
    
    -   Frontend (FE) nodes: Free of charge. Responsible for connecting to instances, estimating the required resources for requests, and sending requests to the serverless resource pool.
        
    -   Serverless computing resources: Zone-level shared computing resource pool. Responsible for executing user requests and scheduling resources separately for each request.
        
-   **Storage layer**
    
    -   Supports Hologres dedicated storage, built on Apsara Distributed File System (Pangu). The storage provides high performance, high reliability, high availability, low cost, elastic storage space, and powerful, stable, and secure services.
        
    -   Supports accessing MaxCompute storage through foreign tables without additional storage costs.
