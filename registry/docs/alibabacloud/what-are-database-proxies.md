If your primary ApsaraDB RDS for PostgreSQL instance is heavily loaded due to an excessively large number of connections or your workloads require read/write splitting, you can use the database proxy feature of ApsaraDB RDS for PostgreSQL. This feature provides capabilities such as read/write splitting and transaction splitting to offload requests from the primary RDS instance. This feature is easy to use and maintain and provides high availability and high performance.

## **Overview**

A database proxy serves as a network proxy that resides between your database system and your application and receives all requests from your application. You can connect to your RDS instance by using a database proxy endpoint to use various capabilities of the database proxy feature. This simplifies the connection management of the RDS instance. For more information, see [Use a database proxy endpoint to connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-database-through-proxy-connection-address).

## Scenarios

-   The primary RDS instance is heavily loaded due to a large number of requests that are encapsulated in transactions.
    
-   The primary RDS instance is heavily loaded due to an excessively large number of connections.
    
-   Read/write splitting is required.
    
-   You need to process **read-only** workloads and **isolate** workloads.
    
    **Note**
    
    Assume that your database system consists of one primary RDS instance and four read-only RDS instances, and you have two applications, Application A and Application B. Application A initiates only read requests, and Application B initiates both read and write requests. You want to connect Application A and Application B to the database system. You can bind two read-only RDS instances to Proxy Terminal A that has the **Read-only** attribute to process the requests from Application A and bind the primary RDS instance and the other two read-only RDS instances to Proxy Terminal B that has the **Read/Write** attribute to process the requests from Application B. This way, Application A and Application B are physically isolated from each other in your database system.
    

## Terms

-   database proxy endpoint (formerly known as proxy terminal)
    
    Database proxy endpoints are the core of database proxies. You can configure connection settings for a database proxy endpoint based on your business requirements, the prefix of the database proxy endpoint, and the port that is associated with the database proxy endpoint. If you use a database proxy endpoint to connect to an RDS instance, you can use the advanced capabilities of the database proxy feature.
    
    Each RDS instance with the database proxy feature enabled supports up to seven database proxy endpoints. You can apply for one internal endpoint and one public endpoint for each database proxy endpoint. You can also configure connection settings for each database proxy endpoint to meet different business requirements and improve service flexibility. For more information, see [Configure the connection settings for a database proxy endpoint](/help/en/rds/apsaradb-rds-for-postgresql/configure-satabase-proxy-connection-address-access-policy) and [Use a database proxy endpoint to connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-database-through-proxy-connection-address).
    
-   read/write splitting
    
    Read/write splitting indicates that database proxy endpoints can be used to automatically forward read and write requests.
    
    If your database system receives a large number of read requests and a small number of write requests, the primary RDS instance may fail to efficiently process read requests and your workloads may be interrupted. The read/write splitting feature allows the system to forward write requests to the primary RDS instance and read requests to the read-only RDS instances. This reduces the loads on the primary RDS instance. For more information, see [What is read/write splitting?](/help/en/rds/apsaradb-rds-for-postgresql/what-is-read-write-separation)
    
-   transaction splitting
    
    The transaction splitting feature is automatically enabled for a database proxy. This feature allows the system to forward the read requests prior to write operations in a transaction to the read-only RDS instances of your database system. This reduces the loads on the primary RDS instance. For more information, see [Transaction splitting](/help/en/rds/apsaradb-rds-for-postgresql/transaction-split).
    
    **Note**
    
    -   Explicit transactions cannot be split. These explicit transactions include the transactions that are started by executing the BEGIN or START statement.
        
    -   If the transaction splitting feature is enabled, global consistency cannot be ensured. Before you use this feature, we recommend that you evaluate whether this feature is suitable for your workloads.
        
    -   The transaction splitting feature cannot be disabled.
        
    

## **Types of database proxies**

ApsaraDB RDS for PostgreSQL provides **general-purpose** and **dedicated** database proxies.

-   **General-purpose**: Database proxies share physical CPU resources and are provided free of charge. This type of database proxy is cost-effective.
    
-   **Dedicated**: Database proxies exclusively occupy the allocated physical CPU resources and are charged based on the pay-as-you-go billing method. This type of database proxy delivers stable performance.
    

The following table describes the differences between the two types of database proxies.

**Item**

**General-purpose database proxy**

**Dedicated database proxy**

Billing method

Free of charge.

Pay-as-you-go. For more information, see [Billing rules for database proxies](/help/en/rds/apsaradb-rds-for-postgresql/billing-rules-for-the-database-proxy-of-an-apsaradb-rds-for-postgresql-instance).

Resource type

Shares physical CPU resources.

Exclusively occupies physical CPU resources to deliver high performance and stability.

Proxy specifications

Highest: 16 cores (8 database proxies).

Highest: 32 cores (16 database proxies).

RDS edition

RDS High-availability Edition.

Architecture

High-availability redundant architecture.

Read/write splitting

Supported.

Transaction splitting

Supported.

Number of database proxy endpoints

One to seven. You can apply for one internal endpoint and one public endpoint for each database proxy endpoint.

**Note**

The following calculation describes the relationship between the specification of database proxies and the number of database proxies: `Specification of database proxies = Unit specification of a database proxy × Number of database proxies`. In this calculation, the unit specification of a database proxy is fixed as 2 CPU cores. For example, if the number of database proxies is 3, the specification of the database proxies is 6 CPU cores. The value is obtained based on the following calculation: `2 x 3 = 6`.

## **Usage notes**

For more information, see [Usage notes of database proxies](/help/en/rds/apsaradb-rds-for-postgresql/database-agent-considerations).

## **Billing rules**

For more information, see [Billing rules for database proxies](/help/en/rds/apsaradb-rds-for-postgresql/billing-rules-for-the-database-proxy-of-an-apsaradb-rds-for-postgresql-instance).

## **Usage**

For more information, see [Use the database proxy feature](/help/en/rds/apsaradb-rds-for-postgresql/use-the-database-proxy-feature/).
