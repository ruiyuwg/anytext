This topic describes the In-Memory Column Index (IMCI) feature of PolarDB for MySQL.

## Background information

PolarDB for MySQL is intended for online transaction processing (OLTP) scenarios that involve online business which produces large amounts of data. However, row store-based PolarDB for MySQL cannot easily meet the query performance requirements of all scenarios. In most cases, to perform complex analytic queries, you need to export data from PolarDB for MySQL and then import the data to an online analytical processing (OLAP) system for analysis and queries. This requires two database systems and increases costs, architectural complexity, and O&M loads.

PolarDB for MySQL provides the IMCI feature for OLAP scenarios that involve complex queries on large amounts of data. With the IMCI feature, PolarDB for MySQL can offer a one-stop hybrid transaction/analytical processing (HTAP) solution, integrating real-time transaction processing and real-time data analysis. As a result, you can meet the requirements of OLTP and OLAP scenarios with only one database system.

## How it works

The following figure shows how the IMCI feature works in PolarDB for MySQL.![Multi-zone architecture](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9249713461/p384351.png)

Three layers are involved: storage engine, operator, and optimizer.

-   Storage engine layer: supports the hybrid row-column storage that ensures real-time transactional consistency.
    
-   Operator layer: uses the vectorized parallel operator that is oriented to column store. Single-table queries and multi-table queries can be implemented with minimal latency.
    
-   SQL parser and optimizer layer: uses the cost-based optimizer (CBO) that is oriented to hybrid row-column storage. The optimizer automatically selects row store or column store based on the cost threshold to execute query requests.
    

This architecture helps PolarDB for MySQL accelerate queries by several orders of magnitude while PolarDB for MySQL is completely compatible with the MySQL protocol.

## Implementation

To achieve computing resource isolation between OLAP and OLTP services, the system allows the creation of IMCIs only on read-only nodes. OLAP queries are sent exclusively to read-only nodes. You can configure query distribution rules to specify whether OLAP queries are sent to read-only row store nodes or read-only column store nodes. For more information, see [Overview of HTAP-based request distribution among row store and column store nodes](/help/en/polardb/polardb-for-mysql/user-guide/request-distribution#concept-2177433).

## Benefits

Equipped with the IMCI feature, PolarDB for MySQL has the following benefits:

-   Complete compatibility with MySQL: A system is provided for column store. This system is consistent with the system provided for row store and supports flexible type conversion.
    
-   Ultimate HTAP performance: PolarDB provides ultimate performance in terms of OLTP. The IMCI feature provides OLAP with performance commensurate with that provided by the OLAP system.
    
-   Hybrid row-column storage: Both row store and column store are supported, which saves costs. Moreover, transactional consistency is ensured for row store and column store. Column store also has an advantage in lower costs.
    

## Scenarios

The IMCI feature of PolarDB for MySQL provides a one-stop HTAP experience that can be used in a variety of business scenarios.

-   Scenarios where real-time analysis of online data is required, such as real-time reports.
    
-   Data warehousing scenarios that depend on the large volume data storage capacity of PolarDB to aggregate multiple upstream data sources and use PolarDB as the dedicated data warehouse.
    
-   Extract, transform, load (ETL)-faced accelerated data computing scenarios that depend on the powerful and flexible computing capability of IMCI provided by PolarDB to implement ETL features by using SQL syntax.![Scenarios](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9249713461/p384350.png)
    

## Pricing

The IMCI feature is provided free of charge. However, you are charged for read-only column store nodes based on the pricing of common compute nodes. For more information, see [Pay-as-you-go prices of compute nodes](/help/en/polardb/polardb-for-mysql/billing-rules-of-pay-as-you-go-compute-nodes#concept-2035314) and [Subscription prices of compute nodes](/help/en/polardb/polardb-for-mysql/billing-rules-of-subscription-compute-nodes#concept-2035314). IMCIs also occupy billable storage space. For more information, see [Storage pricing](/help/en/polardb/polardb-for-mysql/overview-58#concept-2035316).

## Supported versions

-   An **Enterprise Edition** cluster that meets one of the following requirements:
    
    -   PolarDB for MySQL 8.0.1 whose revision version is 8.0.1.1.22 or later.
        
    -   PolarDB for MySQL 8.0.2 whose revision version is 8.0.2.2.12 or later.
        
-   A **Standard Edition** cluster that uses the **X86** **CPU architecture** and meets one of the following conditions:
    
    -   PolarDB for MySQL 8.0.1 whose revision version is 8.0.1.1.38 or later
        
    -   PolarDB for MySQL 8.0.2 whose revision version is 8.0.2.2.19 and later.
        

## Precautions

-   The In-Memory Column Index (IMCI) feature does not support Global Database Network (GDN).
    
-   IMCI can be used together with the Voting Disk Service (VDS) module of the [failover with hot replica](/help/en/polardb/polardb-for-mysql/user-guide/overview-28) feature only under these conditions:
    
    -   For a cluster whose revision version is **8.0.1.1.42 and later** or **8.0.2.2.23 and later**:
        
        -   If a cluster contains a read-only node where the failover with hot replica feature is enabled, you can add read-only column store nodes to the cluster.
            
        -   If a read-only column store node already exists in a cluster, you cannot enable the hot standby feature for any read-only node in the cluster.
            
    -   For a cluster whose revision version is **earlier than 8.0.1.1.42** or **earlier than 8.0.2.2.23**, the IMCI feature cannot be used together with failover with hot replica feature.
        
        -   If a cluster contains a read-only node for which the failover with hot replica feature is enabled, you cannot add read-only column store nodes to the cluster.
            
            **Note**
            
            If you want to add a read-only column store node to the cluster, contact the technical support to disable VDS. When VDS is being disabled, all nodes in the cluster are automatically restarted.
            
        -   If a read-only column store node already exists in a cluster, you cannot enable the hot standby feature for any read-only node in the cluster.
            

## Performance improvement

The IMCI feature notably accelerates queries executed by using SQL statements by up to one hundred folds. The following section provides a query test to verify the acceleration effects. The data tables and SQL statements contained in the standard TPC-H benchmark are used in the example.

-   **Test method**: TPC-H is a commonly used benchmark that is developed and released by the Transaction Processing Performance Council (TPC) to evaluate the analytic query capabilities of databases. The TPC-H benchmark contains eight tables and 22 complex SQL statements. Most of the queries contain JOIN clauses on several tables, subqueries, and GROUP BY clauses.
    

**Note**

In this example, a test based on the TPC-H benchmark is implemented, but it does not meet all the requirements of the TPC-H benchmark test. Therefore, the test results cannot be compared with the published results of the TPC-H benchmark test.

-   **Data size:** 100 GB.
    
-   **Test results**:
    
    -   Comparison between IMCI-enabled and IMCI-disabled scenarios
        
        The following figure shows the response time difference between IMCI-enabled and IMCI-disabled scenarios when 22 complex SQL statements of the TPC-H benchmark are executed.![Comparison between IMCI-enabled and IMCI-disabled scenarios](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5470813461/p384344.png)
        
    -   Comparison between ClickHouse and IMCI-enabled PolarDB for MySQL
        
        The following figure shows the response time difference between ClickHouse and IMCI-enabled PolarDB for MySQL when 21 complex SQL statements of the TPC-H benchmark are executed. The two databases have the same amount of data and the same data schema. Query Statement 21 is not executed because ClickHouse does not support Query Statement 21.![Comparison between ClickHouse and IMCI-enabled PolarDB for MySQL](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5470813461/p384341.png)
        
-   **Conclusions**:
    
    -   The IMCI feature notably accelerates most complex queries by up to one hundred folds.
        
    -   Each of the traditional OLAP database service ClickHouse and IMCI-enabled PolarDB for MySQL has their own advantages. IMCI-enabled PolarDB for MySQL excels in scenarios such as the SCAN and AGGREGATE operations on tables and the JOIN operation. In the future, the IMCI feature of PolarDB for MySQL will be tuned on an ongoing basis and make a breakthrough in terms of aggregation acceleration and window functions.
