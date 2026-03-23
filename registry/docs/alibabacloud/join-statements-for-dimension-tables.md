In Realtime Compute for Apache Flink, each data stream can be associated with a dimension table of an external data source. This lets you perform associated queries in Realtime Compute for Apache Flink.

## **Background information**

Most connectors allow you to specify the cache policy for the JOIN operations on dimension tables. Different connectors support different cache policies. For more information, see the related connector documentation. The following cache policies are supported:

-   None: Data is not cached. This is the default value.
    
-   LRU: Only specific data in the dimension table is cached. Each time the system receives a data record, the system searches the cache. If the system does not find the record in the cache, the system searches for the data record in the physical dimension table.
    
-   ALL: All data in the dimension table is cached. Before a deployment runs, the system loads all data in the dimension table to the cache. This way, the cache is searched for all subsequent queries in the dimension table. If the data that meets the requirement cannot be found in the cache, the key does not exist. The system reloads all data in the cache after cache entries expire. If the amount of data in a remote table is small and many missing keys exist, we recommend that you set this parameter to ALL. The source table and dimension table cannot be associated based on the ON clause.
    

**Note**

-   You need to consider the balance between real-time performance and data processing performance as needed. If you want data to be updated in real time, you can allow the connector to directly read data from the dimension table without the need to use the cached data.
    
-   If you want to use a cache policy, you can set the cache policy to LRU and specify the time-to-live (TTL) to cache the latest data. You can set TTL to a small value, such as several seconds to tens of seconds. This way, data can be loaded from the source table at the specified interval.
    
-   If the cache policy is ALL, you must monitor the memory usage of the operator to prevent out of memory (OOM) errors.
    
-   If the cache policy is ALL, you must increase the memory of the operator for joining tables because the system asynchronously loads data from the dimension table. The increased memory size is twice that of the remote table.
    

## **Limits**

-   You can associate a data stream only with the dimension table snapshot that is taken at the current moment.
    
-   Dimension tables support INNER JOIN and LEFT JOIN operations, and do not support RIGHT JOIN or FULL JOIN operations.
    

## **Precautions**

-   If you want to perform a one-to-one table join, make sure that join conditions contain an equi-join that contains a unique field in the dimension table.
    
-   Each data stream is associated only with the latest data in the dimension table at the current time. This means that the JOIN operation is performed only at the processing time. Therefore, if the data in the dimension table is added, updated, or deleted after the JOIN operation is performed, the associated data remains unchanged. For more information about the behavior of specific dimension tables, see [Supported connectors](/help/en/flink/realtime-flink/developer-reference/supported-connectors).
    

## Dimension Table JOIN Syntax

```
SELECT column-names
FROM table1 [AS <alias1>]
[LEFT] JOIN table2 FOR SYSTEM_TIME AS OF PROCTIME() [AS <alias2>]
ON table1.column-name1 = table2.key-name1;
```

**Note**

-   You must append FOR SYSTEM\_TIME AS OF PROCTIME() to the end of the dimension table. This way, each data record in the dimension table that can be viewed at the current time is associated with the source data.
    
-   The ON condition must contain equivalent conditions for fields that can be randomly searched in the dimension table.
    
-   In the join conditions that are specified in the ON clause, the fields in the dimension table cannot use type conversion functions, such as CAST. If you want to convert data types, perform the conversion on the fields in the source table.
    

## Join hints for dimension tables

You can configure the dimension table join strategy using dimension table hints. For more information about the hint feature, see [Flink SQL Hints](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/table/sql/queries/hints/#sql-hints). Dimension table hints include LOOKUP hints and other join hints.

**Note**

-   Only Realtime Compute for Apache Flink that uses Ververica Runtime (VVR) 8.0 or later supports LOOKUP hints.
    
-   Only Realtime Compute for Apache Flink that uses VVR 8.0.8 or later lets you configure shuffle strategies using LOOKUP hints.
    
-   In Realtime Compute for Apache Flink that uses VVR 8.0 or later, an alias can be specified in a join hint for a dimension table. If an alias is specified for a dimension table, the alias of the dimension table must be used in the join hint.
    
-   Only Realtime Compute for Apache Flink that uses VVR 4.0 or later supports other join hints.
    

### **LOOKUP hints**

The LOOKUP hint feature of Realtime Compute for Apache Flink is consistent with the LOOKUP hint feature provided by the open source community. You can configure synchronous, asynchronous, and retry lookup strategies for a dimension table. For more information, see [LOOKUP hints](https://nightlies.apache.org/flink/flink-docs-master/zh/docs/dev/table/sql/queries/hints/#lookup). In Realtime Compute for Apache Flink that uses VVR 8.0.8 or later, the [LOOKUP hint](https://nightlies.apache.org/flink/flink-docs-master/zh/docs/dev/table/sql/queries/hints/#lookup) feature is extended to allow you to configure `'shuffle' = 'true'`. This way, you can specify a shuffle strategy for JOIN operations on dimension tables. The following table describes shuffle strategies in different scenarios.

**Scenario**

Join policy

The 'shuffle' = 'true' option is not configured.

The default shuffle strategy of the engine is used.

The 'shuffle' = 'true' option is not configured, and the dimension table connector does not provide a custom join policy.

The 'shuffle' = 'true' option is configured, and the dimension table connector does not provide a custom join policy.

By default, the SHUFFLE\_HASH strategy is used. For more information, see [SHUFFLE\_HASH](#72da98f067hp7).

The 'shuffle' = 'true' option is configured, and the dimension table connector provides a custom join policy.

The custom shuffle strategy of the dimension table connector is used.

**Note**

Only the [Streaming data lakehouse Paimon](/help/en/flink/realtime-flink/developer-reference/apache-paimon-connector) provides custom shuffle strategies. If the join columns of a dimension table include all bucket fields, the dimension table is shuffled based on the buckets.

The following sample code provides an example on how to configure shuffle strategies when you perform JOIN operations on dimension tables:

```
-- Configure the shuffle policy for the dimension table join on only the dim1 dimension table.
SELECT /*+ LOOKUP('table'='dim1', 'shuffle' = 'true') */
FROM src AS T 
LEFT JOIN dim1 FOR SYSTEM_TIME AS OF PROCTIME() ON T.a = dim1.a
LEFT JOIN dim2 FOR SYSTEM_TIME AS OF PROCTIME() ON T.b = dim2.b

-- Configure the shuffle policy for the dimension table join on both the dim1 and dim2 dimension tables.
SELECT /*+ LOOKUP('table'='dim1', 'shuffle' = 'true'),LOOKUP('table'='dim2', 'shuffle' = 'true') */
FROM src AS T 
LEFT JOIN dim1 FOR SYSTEM_TIME AS OF PROCTIME() ON T.a = dim1.a
LEFT JOIN dim2 FOR SYSTEM_TIME AS OF PROCTIME() ON T.b = dim2.b

-- You must use the alias D1 to configure the shuffle policy for the dimension table join on the dim1 dimension table.
SELECT /*+ LOOKUP('table'='D1', 'shuffle' = 'true') */
FROM src AS T 
LEFT JOIN dim1 FOR SYSTEM_TIME AS OF PROCTIME() AS D1 ON T.a = D1.a
LEFT JOIN dim2 FOR SYSTEM_TIME AS OF PROCTIME() AS D2 ON T.b = D2.b

-- Use aliases to configure the shuffle policy for the dimension table join on both the dim1 and dim2 dimension tables.
SELECT /*+ LOOKUP('table'='D1', 'shuffle' = 'true'),LOOKUP('table'='D2', 'shuffle' = 'true') */
FROM src AS T 
LEFT JOIN dim1 FOR SYSTEM_TIME AS OF PROCTIME() AS D1 ON T.a = D1.a
LEFT JOIN dim2 FOR SYSTEM_TIME AS OF PROCTIME() AS D2 ON T.b = D2.b
```

### Other join hints

Other join hints for dimension tables are used only to configure join strategies for dimension tables, including the SHUFFLE\_HASH, REPLICATED\_SHUFFLE\_HASH, and SKEW strategies. The following table describes the usage scenarios of join strategies based on the configuration of the cache policy for dimension tables.

**Cache policy**

**SHUFFLE\_HASH**

**REPLICATED\_SHUFFLE\_HASH**

**(Equivalent to SKEW)**

None

We recommend that you do not use this join strategy. If this join strategy is used, mainstream data introduces additional network overheads.

We recommend that you do not use this join strategy. If this join strategy is used, mainstream data introduces additional network overheads.

LRU

If the lookup I/O of dimension tables becomes a bottleneck, we recommend that you use this join strategy. If mainstream data has temporal locality on join keys, this join strategy can increase the cache hit ratio and reduce the number of I/O requests. This improves the total throughput.

**Important**

Mainstream data introduces additional network overheads. If mainstream data is skewed on join keys and a performance bottleneck exists, we recommend that you use the **REPLICATED\_SHUFFLE\_HASH** join strategy.

If the lookup I/O of dimension tables becomes a bottleneck and mainstream data is skewed on join keys, we recommend that you use this join strategy. If mainstream data has temporal locality on join keys, this join strategy can increase the cache hit ratio and reduce the number of I/O requests. This improves the total throughput.

ALL

If the memory usage of a dimension table becomes a bottleneck, we recommend that you use this join strategy. This way, the memory usage can be reduced to the value of **1**/**Parallelism**.

**Important**

Mainstream data introduces additional network overheads. If mainstream data is skewed on join keys and a performance bottleneck exists, we recommend that you use the **REPLICATED\_SHUFFLE\_HASH** join strategy.

If the memory usage of a dimension table becomes a bottleneck and mainstream data is skewed on join keys, we recommend that you use this join strategy. This way, the memory usage can be reduced to the value of **Number of buckets**/**Parallelism**.

#### **SHUFFLE\_HASH**

-   Effect
    
    The SHUFFLE\_HASH join strategy allows mainstream data to be shuffled based on join keys before the JOIN operation is performed. If the cache policy is LRU, the cache hit ratio is increased and the number of I/O requests is reduced. If the cache policy is ALL, the memory usage is reduced. You can specify multiple dimension tables in each SHUFFLE\_HASH join hint.
    
-   Limits
    
    If you use the SHUFFLE\_HASH join strategy, the memory overhead is reduced. However, additional network overheads are introduced because upstream data needs to be shuffled based on join keys. Therefore, the SHUFFLE\_HASH join strategy is not suitable for the following scenarios:
    
    -   The mainstream data has severe data skew on join keys. If you use the SHUFFLE\_HASH join strategy to join data, the join operator may cause a performance bottleneck due to data skew. This may cause severe backpressure in streaming deployments or severe long tails in batch deployments. In this scenario, we recommend that you use the REPLICATED\_SHUFFLE\_HASH join strategy.
        
    -   If a dimension table contains a small amount of data and does not have a memory bottleneck during table loading when the cache policy is ALL, the memory overheads saved using the SHUFFLE\_HASH join strategy may not be cost-effective, compared with the additional network overheads introduced using the SHUFFLE\_HASH join strategy.
        
-   Sample code
    
    ```
    -- Enable the SHUFFLE_HASH join strategy only for the dimension table dim1. 
    SELECT /*+ SHUFFLE_HASH(dim1) */
    FROM src AS T 
    LEFT JOIN dim1 FOR SYSTEM_TIME AS OF PROCTIME() ON T.a = dim1.a
    LEFT JOIN dim2 FOR SYSTEM_TIME AS OF PROCTIME() ON T.b = dim2.b
    
    -- Enable the SHUFFLE_HASH join strategy for dimension tables dim1 and dim2. 
    SELECT /*+ SHUFFLE_HASH(dim1, dim2) */
    FROM src AS T 
    LEFT JOIN dim1 FOR SYSTEM_TIME AS OF PROCTIME() ON T.a = dim1.a
    LEFT JOIN dim2 FOR SYSTEM_TIME AS OF PROCTIME() ON T.b = dim2.b
    
    -- Use the alias D1 for the dimension table dim1 in the hint to enable the SHUFFLE_HASH join strategy. 
    SELECT /*+ SHUFFLE_HASH(D1) */
    FROM src AS T 
    LEFT JOIN dim1 FOR SYSTEM_TIME AS OF PROCTIME() AS D1 ON T.a = D1.a
    LEFT JOIN dim2 FOR SYSTEM_TIME AS OF PROCTIME() AS D2 ON T.b = D2.b
    
    -- Use aliases for dimension tables dim1 and dim2 in the hint to enable the SHUFFLE_HASH join strategy. 
    SELECT /*+ SHUFFLE_HASH(D1, D2) */
    FROM src AS T 
    LEFT JOIN dim1 FOR SYSTEM_TIME AS OF PROCTIME() AS D1 ON T.a = D1.a
    LEFT JOIN dim2 FOR SYSTEM_TIME AS OF PROCTIME() AS D2 ON T.b = D2.b
    ```
    

#### **REPLICATED\_SHUFFLE\_HASH**

-   Effect
    
    The effect of REPLICATED\_SHUFFLE\_HASH is basically the same as the effect of SHUFFLE\_HASH. However, REPLICATED\_SHUFFLE\_HASH randomly scatters the mainstream data that has the same key to the specified number of concurrent threads to resolve the performance bottleneck caused by data skew. You can specify multiple dimension tables in each REPLICATED\_SHUFFLE\_HASH join hint.
    
-   Limits
    
    -   You must configure the `table.exec.skew-join.replicate-num` parameter to specify the number of buckets that contain skewed data. The default value of this parameter is 16. The value of this parameter cannot be greater than the number of concurrent threads on the join operator of the dimension table. For more information about how to configure this parameter, see [How do I configure custom running parameters for a job?](/help/en/flink/realtime-flink/support/reference#124381f0300jp)
        
    -   Update streams are not supported. If the mainstream is an update stream and you use the REPLICATED\_SHUFFLE\_HASH join strategy, an error is returned.
        
-   Sample code
    
    ```
    -- Enable the REPLICATED_SHUFFLE_HASH join strategy for the dimension table dim1.
    SELECT /*+ REPLICATED_SHUFFLE_HASH(dim1) */ 
    FROM src AS T 
    LEFT JOIN dim1 FOR SYSTEM_TIME AS OF PROCTIME() AS D1 ON T.a = D1.a
    
    -- Use the alias for the dimension table dim1 in the hint to enable the REPLICATED_SHUFFLE_HASH join strategy.
    SELECT /*+ REPLICATED_SHUFFLE_HASH(D1) */ 
    FROM src AS T 
    LEFT JOIN dim1 FOR SYSTEM_TIME AS OF PROCTIME() AS D1 ON T.a = D1.a
    ```
    

#### **SKEW**

-   Effect
    
    If the specified table has data skew, the optimizer uses the REPLICATED\_SHUFFLE\_HASH join strategy for the JOIN operation on the dimension table. SKEW is only a syntactic sugar and the REPLICATED\_SHUFFLE\_HASH join strategy is actually used at the underlying layer.
    
-   Limits
    
    -   You can specify only one table in each SKEW hint.
        
    -   The name of the table must be the name of the primary table that has data skew instead of a dimension table.
        
    -   Update streams are not supported. If the mainstream is an update stream and you use the SKEW join strategy, an error is returned.
        
-   Sample code
    
    ```
    SELECT /*+ SKEW(src) */  
    FROM src AS T 
    LEFT JOIN dim1 FOR SYSTEM_TIME AS OF PROCTIME() AS D1 ON T.a = D1.a
    ```
    

**Important**

-   The shuffle strategy of the LOOKUP hint provides the capabilities of the SHUFFLE\_HASH hint. If you use the two types of hints, the shuffle strategy of the LOOKUP hint takes precedence over the SHUFFLE\_HASH hint.
    
-   The shuffle strategy of the LOOKUP hint cannot resolve data skew issues. If you use the LOOKUP hint together with the REPLICATED\_SHUFFLE\_HASH or SKEW hint, the shuffle strategy of the REPLICATED\_SHUFFLE\_HASH or SKEW hint takes precedence over the LOOKUP hint.
    

## Examples

-   Test data
    
    -   Table 1 kafka\_input
        
        **id (bigint)**
        
        **name (varchar)**
        
        **age (bigint)**
        
        1
        
        lilei
        
        22
        
        2
        
        hanmeimei
        
        20
        
        3
        
        libai
        
        28
        
    -   Table 2 phoneNumber
        
        **name (varchar)**
        
        **phoneNumber (bigint)**
        
        dufu
        
        1390000111
        
        baijuyi
        
        1390000222
        
        libai
        
        1390000333
        
        lilei
        
        1390000444
        
-   Test statements
    
    ```
    CREATE TEMPORARY TABLE kafka_input (
      id   BIGINT,
      name VARCHAR,
      age  BIGINT
    ) WITH (
      'connector' = 'kafka',
      'topic' = '<yourTopic>',
      'properties.bootstrap.servers' = '<yourKafkaBrokers>',
      'properties.group.id' = '<yourKafkaConsumerGroupId>',
      'format' = 'csv'
    );
    
    CREATE TEMPORARY TABLE phoneNumber(
      name VARCHAR,
      phoneNumber BIGINT,
      PRIMARY KEY(name) NOT ENFORCED
    ) WITH (
      'connector' = 'mysql',
      'hostname' = '<yourHostname>',
      'port' = '3306',
      'username' = '<yourUsername>',
      'password' = '<yourPassword>',
      'database-name' = '<yourDatabaseName>',
      'table-name' = '<yourTableName>'
    );
    
    CREATE TEMPORARY TABLE result_infor(
      id BIGINT,
      phoneNumber BIGINT,
      name VARCHAR
    ) WITH (
      'connector' = 'blackhole'
    );
    
    INSERT INTO result_infor
    SELECT
      t.id,
      w.phoneNumber,
      t.name
    FROM kafka_input as t
    JOIN phoneNumber FOR SYSTEM_TIME AS OF PROCTIME() as w
    ON t.name = w.name;
    ```
    
-   Test results
    
    **id (bigint)**
    
    **phoneNumber (bigint)**
    
    **name (varchar)**
    
    1
    
    1390000444
    
    lilei
    
    3
    
    1390000333
    
    libai
