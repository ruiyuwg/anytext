Indexes can be used to accelerate database queries. The Lindorm wide table engine (LindormTable) supports a new index type that is called search index in addition to high-performance native secondary indexes. Search indexes are used in complex multi-dimensional query scenarios, including scenarios such as word segmentation, fuzzy queries, aggregate analysis, and sorting and paging. This topic describes the features and scenarios of search indexes.

## Introduction

The search index is a feature of LindormTable. The method in which search indexes are used is the same as the method in which high-performance native secondary indexes are used. You can also use SQL statements to create search indexes for Lindorm wide tables. In the following example, a search index named `idx` is created for the c1, c2, and c3 columns of the dt table. The order of c1, c2, and c3 columns in the statement does not affect the function of the created search index. The IK analyzer is used to perform word segmentation on the data in the c3 column.

```
CREATE INDEX idx USING SEARCH ON dt(c1, c2, c3(type=text, analyzer=ik));
```

Search indexes can be used to meet the following requirements:

-   Queries that contains multi-dimensional conditions: You can specify random combinations of the c1, c2, and c3 columns in queries. This way, query results can be quickly returned.
    
    ```
    SELECT * FROM dt WHERE c1=?;
    SELECT * FROM dt WHERE c2=? AND c3=?;
    ```
    
-   Queries based on word segmentation: In this example, the IK analyzer is configured for the c3 column to perform word segmentation. Therefore, you can query data related the word segmentation results of the condition specified for the c3 column. For example, you can execute the following statement to query data records that contains the 'Lindorm', 'Table', or 'LindormTable' string in the c3 column:
    
    ```
    SELECT * FROM dt WHERE c3='LindormTable';
    ```
    
-   Queries in which aggregate functions are used: Search indexes support aggregate functions such as COUNT, SUM, MIN, MAX, and AVG.
    
-   Sorting and paging: You can use the ORDER BY statement to sort values in an index key column.
    

## Architecture

Search indexes are a new type of indexes that are provided based on the integration of LindormTable and the Lindorm search engine (LindormSearch). The following figure shows the data flows between LindormTable and LindormSearch. In the architecture, LindormTable, Lindorm Tunnel Service (LTS), and LindormSearch act as independent services that you can separately manage. If the processing capability of LindormSearch cannot meet your business requirements, you need only to scale out LindormSearch. If the synchronization capability of LTS cannot meet your requirements, you can separately scale out LTS. LindormTable, LTS, and LindormSearch are independently deployed on servers. You can select servers that use different specifications for LindormTable, LTS, and LindormSearch in different scenarios. This way, system stability can be improved.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9538321471/CAEQJBiBgICRzuqd9hgiIGIxZGZmMDIyMjdhMDQzYWE5N2I0OWU4NDc4ZWI4ZDM44212577_20240219181853.182.svg)

Data is written in the following process:

1.  Data is written to LindormTable. The raw data is recorded in the write-ahead logging (WAL) file of the wide table. The write result is returned to the client.
    
2.  LTS listens to the WAL file of the wide table in real time, filters data that is related to the search index of the wide table from the WAL file of the wide table, and then writes the filtered data to LindormSearch.
    
3.  LindormSearch builds an inverted index in real time after LindormSearch receives the data.
    

Data is queried in the following process:

1.  A query request is sent to LindormTable. The computing layer automatically compiles the query request and selects a suitable search index based on the optimizer.
    
2.  The query request is redirected to LindormSearch to query data that matches the conditions.
    
3.  The data of LindormSearch is summarized. The data in the wide table is automatically queried again to make the query result complete if necessary. Then, the query result is returned to the client.
    

## Scenarios

After LindormTable is integrated with LindormSearch, key-value queries can be performed at high concurrency and low latency. Various features can also be provided, such as multi-dimensional queries, queries based on word segmentation, and aggregate analysis. If your business has the following requirements, we recommend that you use search indexes.

-   Architecture transformation
    
    If your current architecture uses Apache HBase, MySQL, or MongoDB and also uses Elasticsearch or Apache Solr, you can replace the architecture that combines multiple systems with the unified search index solution.
    
-   Business selection
    
    -   For more information about billing scenarios in the finance industry, see [Order queries and searches of Shouqianba](/help/en/lindorm/use-cases/order-queries-and-searches-of-shouqianba#topic-2058963).
        
    -   For more information about order scenarios in the logistics industry, see [Migrate the data of STO Express from Oracle to Lindorm](/help/en/lindorm/use-cases/migrate-the-data-of-sto-express-from-oracle-to-lindorm#topic-2069528).
