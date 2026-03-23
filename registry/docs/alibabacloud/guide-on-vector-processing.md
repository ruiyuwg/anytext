Vector computation in Hologres is useful for applications such as similarity searches, image retrieval, and scene recognition. Using vector computation, you can process and analyze data more effectively and build more precise search and recommendation features. This topic explains how to use Proxima for vector computation in Hologres and provides a complete example.

## **Procedure**

1.  Connect to Hologres.
    
    Connect to Hologres using a development tool. For more information, see [Connect to a development tool](/help/en/hologres/user-guide/connect-hologres-tools/#concept-1664384). If you use a Java Database Connectivity (JDBC) connection, use the Prepare Statement mode.
    
2.  Install the Proxima extension.
    
    Proxima connects to Hologres as an extension. Before you use Proxima, a superuser must run the following command to install the Proxima extension.
    
    ```
    --Install the Proxima extension
    CREATE EXTENSION proxima;
    ```
    
    The Proxima extension is installed on a per-database basis. You only need to install it once for each database. To uninstall the extension, run the following command.
    
    ```
    DROP EXTENSION proxima;
    ```
    
    **Important**
    
    Do not run the `DROP EXTENSION <extension_name> CASCADE;` command to uninstall an extension. The \`CASCADE\` option deletes the specified extension and removes all extension data and dependent objects. Extension data can include PostGIS data, RoaringBitmap data, Proxima data, binary logging (Binlog) data, and BSI data. Dependent objects can include metadata, tables, views, and server data.
    
3.  Create a vector table and a vector index.
    
    In Hologres, vectors are typically represented as FLOAT4 arrays. The syntax for creating a vector table is as follows.
    
    **Note**
    
    -   Vector indexes are supported only for column-oriented tables and hybrid row-column tables. They are not supported for row-oriented tables.
        
    -   When you define a vector, the array dimension must be `1`. This means the second input parameter for `array_ndims` and `array_length` must be `1`.
        
    -   Starting from Hologres V2.0.11, you can import data before creating a vector index. This method avoids building a vector index for files during compaction and shortens the index creation time.
        
    
    -   Create a vector index before importing data: This method is suitable for real-time data scenarios.
        
        ```
        --Set a single index
        BEGIN;
        CREATE TABLE feature_tb (
            id BIGINT,
            feature_col FLOAT4[] CHECK(array_ndims(feature_col) = 1 AND array_length(feature_col, 1) = <value>) --Define a vector
        );
        CALL set_table_property(
        'feature_tb', 
        'proxima_vectors', 
        '{"<feature_col>":{"algorithm":"Graph",
        "distance_method":"<value>",
        "builder_params":{"min_flush_proxima_row_count" : 1000, 
        "min_compaction_proxima_row_count" : 1000, 
        "max_total_size_to_merge_mb" : 2000}}}'); --Build a vector index
        COMMIT;
        
        --Set multiple indexes
        BEGIN;
        CREATE TABLE t1 (
            f1 INT PRIMARY KEY,
            f2 FLOAT4[] NOT NULL CHECK(array_ndims(f2) = 1 AND array_length(f2, 1) = 4),
            f3 FLOAT4[] NOT NULL CHECK(array_ndims(f3) = 1 AND array_length(f3, 1) = 4)
        );
        CALL set_table_property(
        't1',  
        'proxima_vectors', 
        '{"f2":{"algorithm":"Graph",
        "distance_method":"InnerProduct",
        "builder_params":{"min_flush_proxima_row_count" : 1000, 
        "min_compaction_proxima_row_count" : 1000, 
        "max_total_size_to_merge_mb" : 2000}},
        "f3":{"algorithm":"Graph",
        "distance_method":"InnerProduct",
        "builder_params":{"min_flush_proxima_row_count" : 1000, 
        "min_compaction_proxima_row_count" : 1000, 
        "max_total_size_to_merge_mb" : 2000}}}');
        COMMIT;
        ```
        
    -   Import data before creating a vector index: This method is suitable for batch analytics scenarios.
        
        **Note**
        
        Starting from Hologres V2.1.17, Serverless Computing is supported. For scenarios that involve batch importing or querying large volumes of vector data, you can use Serverless Computing to run these tasks. This approach uses additional serverless resources instead of your instance's resources, so you do not need to reserve extra compute resources for your instance. This significantly improves instance stability and reduces the probability of out-of-memory (OOM) errors. You are charged only for the tasks. For more information about Serverless Computing, see [Serverless Computing](/help/en/hologres/user-guide/serverless-computing-overview/). For information about how to use Serverless Computing, see [A guide to using Serverless Computing](/help/en/hologres/user-guide/serverless-computing/).
        
        ```
        --Set a single index
        BEGIN;
        CREATE TABLE feature_tb (
            id BIGINT,
            feature_col FLOAT4[] CHECK(array_ndims(feature_col) = 1 AND array_length(feature_col, 1) = <value>) --Define a vector
        );
        COMMIT;
        
        -- (Optional) Use Serverless Computing to run large-volume batch import and ETL jobs
        SET hg_computing_resource = 'serverless';
        
        -- Import data
        INSERT INTO feature_tb ...;
        VACUUM feature_tb;
        
        -- Build a vector index
        CALL set_table_property(
        'feature_tb', 
        'proxima_vectors', 
        '{"<feature_col>":{"algorithm":"Graph",
        "distance_method":"<value>",
        "builder_params":{"min_flush_proxima_row_count" : 1000, 
        "min_compaction_proxima_row_count" : 1000, 
        "max_total_size_to_merge_mb" : 2000}}}'); 
        
        -- Reset the configuration to ensure that unnecessary SQL statements do not use serverless resources.
        RESET hg_computing_resource;
        ```
        
    
    The following table describes the parameters.
    
    **Category**
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    Basic vector properties
    
    feature\_col
    
    The name of the vector column.
    
    feature.
    
    array\_ndims
    
    The dimension of the vector. Only one-dimensional vectors are supported.
    
    The following example shows how to create a one-dimensional vector with a length of 4.
    
    ```
    feature float4[] check(array_ndims(feature) = 1 and array_length(feature, 1) = 4)
    ```
    
    array\_length
    
    The length of the vector. The maximum length is 1,000,000.
    
    Vector index
    
    proxima\_vectors
    
    Specifies that a vector index is built. It includes the following parameters:
    
    -   algorithm: Specifies the algorithm to build the vector index. Currently, only `Graph` is supported.
        
    -   distance\_method: Defines the distance calculation method used to build the vector index. The following distance functions are supported:
        
        -   (Recommended) SquaredEuclidean: Squared Euclidean distance. This provides the highest query efficiency. It is suitable for queries that use `pm_approx_squared_euclidean_distance`.
            
        -   Euclidean: Euclidean distance. It is suitable only for queries that use `pm_approx_euclidean_distance`. If you use other distance functions, the index is not used.
            
        -   (Not recommended) InnerProduct: Inner product distance. This is converted to a Euclidean distance calculation at the underlying layer. This adds extra computing overhead to both index building and index queries, making it inefficient. Avoid using this method unless it is a strong business requirement. It is suitable only for queries that use `pm_approx_inner_product_distance`.
            
    -   builder\_params: Controls the parameters for index building. This is a JSON-formatted string that contains the following parameters.
        
        -   min\_flush\_proxima\_row\_count: The minimum number of rows required to build an index when data is written to disk. The recommended value is 1000.
            
        -   min\_compaction\_proxima\_row\_count: The minimum number of rows required to build an index when data is merged on disk. The recommended value is 1000.
            
        -   max\_total\_size\_to\_merge\_mb: The maximum file size for data merging on disk. Unit: MB. The recommended value is 2000.
            
    -   proxima\_builder\_thread\_count: Controls the number of threads used to build the vector index during data writes. The default value is 4. You do not need to change this value in most scenarios.
        
    
    **Note**
    
    Indexes work best in specific scenarios.
    
    The following example shows how to build a vector index for queries that use squared Euclidean distance.
    
    ```
    call set_table_property(
    'feature_tb', 
    'proxima_vectors', 
    '{"feature":{"algorithm":"Graph",
    "distance_method":"SquaredEuclidean",
    "builder_params":{"min_flush_proxima_row_count" : 1000, 
    "min_compaction_proxima_row_count" : 1000, 
    "max_total_size_to_merge_mb" : 2000}}}');
    ```
    
4.  Import vector data.
    
    You can import data into the vector table in batch or real-time mode. Select a synchronization method based on your needs. After a batch import, run the \`VACUUM\` and \`ANALYZE\` commands to improve query efficiency.
    
    -   \`VACUUM\` compacts backend files into larger files to make queries more efficient. However, \`VACUUM\` consumes CPU resources. The larger the data volume of the table, the longer the \`VACUUM\` operation takes to run. If a \`VACUUM\` operation is running, wait for it to complete.
        
        ```
        VACUUM <tablename>;
        ```
        
    -   \`ANALYZE\` collects performance statistics. The Query Optimizer (QO) uses these statistics to generate better execution plans and improve query performance.
        
        ```
        analyze <tablename>;
        ```
        
    
5.  Query vector data.
    
    Hologres supports exact and approximate vector queries. User-defined functions (UDFs) that start with `pm_` are for exact queries, and UDFs that start with `pm_approx_` are for approximate queries. Only approximate queries that start with pm\_approx\_ can use the vector index. In scenarios where a vector index is built, use approximate queries for higher efficiency. The vector index can be used only in single-table queries. Therefore, use single-table vector queries and avoid join operations.
    
    -   Approximate query (uses the vector index)
        
        Approximate queries can use the vector index. They are suitable for scenarios that scan large amounts of data and require high execution efficiency. The default recall rate is over 99%. To use the vector index, add the `approx_` prefix to the corresponding distance function. The supported distance functions are as follows:
        
        **Note**
        
        -   For approximate queries that use squared Euclidean distance or Euclidean distance, the vector index can be used only when you specify `order by distance asc`. Descending order is not supported.
            
        -   For approximate queries that use inner product distance, the vector index can be used only when you specify `order by distance desc`. Ascending order is not supported.
            
        
        ```
        FLOAT4 pm_approx_squared_euclidean_distance(FLOAT4[], FLOAT4[])
        FLOAT4 pm_approx_euclidean_distance(FLOAT4[], FLOAT4[])
        FLOAT4 pm_approx_inner_product_distance(FLOAT4[], FLOAT4[])
        ```
        
        The function used in the query must correspond to the `distance_method` of the `proxima_vector` parameter that was specified when the table was created. The following example shows how to query the top N results. In an approximate query, the second parameter must be a constant value.
        
        **Note**
        
        Index queries are lossy and may cause some loss of precision. The default recall rate is typically over 99%.
        
        ```
        -- Calculate the TOP K for squared Euclidean distance. The distance_method in the proxima_vector parameter must be SquaredEuclidean when the table is created.
        SELECT pm_approx_squared_euclidean_distance(feature, '{0.1,0.2,0.3,0.4}') AS distance FROM feature_tb ORDER BY distance ASC limit 10 ;
        
        -- Calculate the TOP K for Euclidean distance. The distance_method in the proxima_vector parameter must be Euclidean when the table is created.
        SELECT pm_approx_euclidean_distance(feature, '{0.1,0.2,0.3,0.4}') AS distance FROM feature_tb ORDER BY distance ASC limit 10 ;
        
        -- Calculate the TOP K for inner product distance. The distance_method in the proxima_vector parameter must be InnerProduct when the table is created.
        SELECT pm_approx_inner_product_distance(feature, '{0.1,0.2,0.3,0.4}') AS distance FROM feature_tb ORDER BY distance DESC limit 10 ;
        ```
        
    -   Exact query (does not use the vector index)
        
        Exact queries are suitable for scenarios where the SQL statement scans a small amount of data and a high recall rate is required. The following three distance functions correspond to the Euclidean distance, squared Euclidean distance, and inner product distance calculation methods:
        
        ```
        FLOAT4 pm_squared_euclidean_distance(FLOAT4[], FLOAT4[])
        FLOAT4 pm_euclidean_distance(FLOAT4[], FLOAT4[])
        FLOAT4 pm_inner_product_distance(FLOAT4[], FLOAT4[])
        ```
        
        To retrieve the top K nearest neighbors for a target vector, use the following SQL statements.
        
        **Note**
        
        The example SQL statements perform exact recall calculations. The execution process is as follows: scan all vectors in the \`feature\` column to calculate the distance, sort the results, and then return the top 10 records. This type of SQL statement is suitable for scenarios that have small data volumes and require a very high recall rate.
        
        ```
        -- Retrieve the 10 nearest neighbors by squared Euclidean distance
        SELECT pm_squared_euclidean_distance(feature, '{0.1,0.2,0.3,0.4}') AS distance FROM feature_tb ORDER BY distance ASC limit 10 ;
        
        -- Retrieve the 10 nearest neighbors by Euclidean distance
        SELECT pm_euclidean_distance(feature, '{0.1,0.2,0.3,0.4}') AS distance FROM feature_tb ORDER BY distance ASC limit 10 ;
        
        -- Retrieve the 10 neighbors with the largest inner product distance
        SELECT pm_inner_product_distance(feature, '{0.1,0.2,0.3,0.4}') AS distance FROM feature_tb ORDER BY distance DESC limit 10 ;
        ```
        
    

## Complete example

This example demonstrates how to use a Proxima index to retrieve the 40 nearest vectors from a vector table of `100,000 4-dimensional` vectors based on squared Euclidean distance.

1.  Create a vector table.
    
    ```
    CREATE EXTENSION proxima;
    
    BEGIN;
    -- Create a table group with shard_count = 4
    CALL HG_CREATE_TABLE_GROUP ('test_tg_shard_4', 4);
    CREATE TABLE feature_tb (
        id BIGINT,
        feature FLOAT4[] CHECK (array_ndims(feature) = 1 AND array_length(feature, 1) = 4)
    );
    CALL set_table_property ('feature_tb', 'table_group', 'test_tg_shard_4');
    CALL set_table_property ('feature_tb', 'proxima_vectors', '{"feature":{"algorithm":"Graph","distance_method":"SquaredEuclidean","builder_params":
    												{"min_flush_proxima_row_count" : 1000, "min_compaction_proxima_row_count" : 1000, "max_total_size_to_merge_mb" : 2000}}}');
    COMMIT;
    ```
    
2.  Import data.
    
    ```
    -- (Optional) Use Serverless Computing to run large-volume batch import and ETL jobs
    SET hg_computing_resource = 'serverless';
    
    INSERT INTO feature_tb
    SELECT
        i,
        ARRAY[random(), random(), random(), random()]::FLOAT4[]
    FROM
        generate_series(1, 100000) i;
    
    ANALYZE feature_tb;
    
    VACUUM feature_tb;
    
    -- Reset the configuration to ensure that unnecessary SQL statements do not use serverless resources.
    RESET hg_computing_resource;
    ```
    
3.  Run a query.
    
    ```
    -- (Optional) Use Serverless Computing to run a large-volume vector query job
    SET hg_computing_resource = 'serverless';
    
    SELECT
        pm_approx_squared_euclidean_distance (feature, '{0.1,0.2,0.3,0.4}') AS distance
    FROM
        feature_tb
    ORDER BY
        distance
    LIMIT 40;
    
    -- Reset the configuration to ensure that unnecessary SQL statements do not use serverless resources.
    RESET hg_computing_resource;
    ```
    

## Performance tuning

-   Scenarios for setting a vector index
    
    If the data volume is small, such as tens of thousands of records, you can calculate the distance directly without setting an index. You can also perform direct calculations if your instance has sufficient resources and the amount of data to be queried is small. If direct calculation cannot meet your requirements for latency or throughput, consider using a Proxima index. However, be aware of the following:
    
    -   Proxima is a lossy index and does not guarantee the accuracy of the results. The calculated distance may have a bias.
        
    -   A Proxima index may cause an insufficient number of recalled records. For example, if you specify `limit 1000`, only 500 records might be returned.
        
    -   A Proxima index can be difficult to use.
        
    
-   Set an appropriate shard count
    
    The more shards you have, the more Proxima index files are built, which degrades query throughput. In practice, set a reasonable shard count based on your instance resources. You can typically set the shard count to the number of workers. For example, for a 64-core instance, you can set the shard count to 4. To reduce the latency of a single query, you can decrease the shard count, but this also reduces write performance.
    
    ```
    -- Create a vector table and place it in a table group with shard_count = 4
    BEGIN;
    CALL HG_CREATE_TABLE_GROUP ('test_tg_shard_4', 4);
    CREATE TABLE proxima_test (
        id BIGINT NOT NULL,
        vectors FLOAT4[] CHECK (array_ndims(vectors) = 1 AND array_length(vectors, 1) = 128),
        PRIMARY KEY (id)
    );
    CALL set_table_property ('proxima_test', 'proxima_vectors', '{"vectors":{"algorithm":"Graph","distance_method":"SquaredEuclidean","builder_params":{}, "searcher_init_params":{}}}');
    CALL set_table_property ('proxima_test', 'table_group', 'test_tg_shard_4');
    COMMIT;
    ```
    
-   (Recommended) Query scenarios without filter conditions
    
    A `where` filter condition can affect index usage and may result in worse performance. Therefore, we recommend using queries without filter conditions. For vector retrieval without filter conditions, the ideal state is to have only one vector index file on each shard. This way, a query can be processed on a single shard.
    
    For query scenarios without filter conditions, you can typically create the table as follows.
    
    ```
    BEGIN;
    CREATE TABLE feature_tb (
        uuid text,
        feature FLOAT4[] NOT NULL CHECK (array_ndims(feature) = 1 AND array_length(feature, 1) = N) --Define a vector
    );
    CALL set_table_property ('feature_tb', 'shard_count', '?'); --Specify the shard count. Set it reasonably based on your business needs. If not needed, you can omit this.
    CALL set_table_property ('feature_tb', 'proxima_vectors', '{"feature":{"algorithm":"Graph","distance_method":"InnerProduct"}'); --Build a vector index
    END;                 
    ```
    
-   Query scenarios with filter conditions
    
    For vector retrieval with filter conditions, the scenarios can be broken down into the following common filtering scenarios.
    
    -   Query scenario 1: A string column is used as a filter condition
        
        The following is a sample query. A common scenario is to find corresponding vector data within an organization, such as finding face data within a specific class.
        
        ```
        SELECT pm_xx_distance(feature, '{1,2,3,4}') AS d FROM feature_tb WHERE uuid = 'x' ORDER BY d limit 10;
        ```
        
        We recommend the following optimizations.
        
        -   Set \`uuid\` as the distribution key. This ensures that data with the same filter condition is stored on the same shard. A query is then processed on a single shard.
            
        -   Set \`uuid\` as the clustering key for the table. The data is then sorted within the file based on the clustering key.
            
    -   Query scenario 2: A time field is used as a filter condition
        
        The following is a sample query. Typically, a time field is used to filter the corresponding vector data. You can set the time field \`time\_field\` as the segment key for the table. This lets you quickly locate the file where the data is stored.
        
        ```
        SELECT pm_xx_distance(feature, '{1,2,3,4}') AS d FROM feature_tb WHERE time_field BETWEEN '2020-08-30 00:00:00' AND '2020-08-30 12:00:00' ORDER BY d limit 10;
        ```
        
    
    Therefore, for vector retrieval with filter conditions, you can typically create the table as follows.
    
    ```
    BEGIN;
    CREATE TABLE feature_tb (
        time_field timestamptz NOT NULL,
        uuid text,
        feature FLOAT4[] NOT NULL CHECK (array_ndims(feature) = 1 AND array_length(feature, 1) = N)
    );
    CALL set_table_property ('feature_tb', 'distribution_key', 'uuid');
    CALL set_table_property ('feature_tb', 'segment_key', 'time_field');
    CALL set_table_property ('feature_tb', 'clustering_key', 'uuid');
    CALL set_table_property ('feature_tb', 'proxima_vectors', '{"feature":{"algorithm":"Graph","distance_method":"InnerProduct"}}');
    COMMIT;
    
    -- If you do not filter by time, you can delete the index related to time_field.
    ```
    

## FAQ

-   Error: `ERROR: function pm_approx_inner_product_distance(real[], unknown) does not exist`.
    
    Cause: This error usually occurs because the `create extension proxima;` statement was not run in the database to initialize the Proxima extension.
    
    Solution: Run the `create extension proxima;` statement to initialize the Proxima extension.
    
-   Error: `Writing column: feature with array size: 5 violates fixed size list (4) constraint declared in schema`.
    
    Cause: This error occurs because the dimension of the data written to the feature vector column does not match the dimension defined in the table.
    
    Solution: Check for dirty data.
    
-   Error: `The size of two arrays must be the same in DistanceFunction, size of left array: 4, size of right array:`.
    
    Cause: The dimension of \`left\` does not match the dimension of \`right\` in `pm_xx_distance(left, right)`.
    
    Solution: Make sure the dimension of \`left\` matches the dimension of \`right\` in `pm_xx_distance(left, right)`.
    
-   Real-time write error: `BackPressure Exceed Reject Limit ctxId: XXXXXXXX, tableId: YY, shardId: ZZ`.
    
    Cause: The real-time write job has encountered a bottleneck, which causes a backpressure exception. This exception indicates that the write job has high overhead and is slow. This issue usually occurs because the min\_flush\_proxima\_row\_count value is small while the real-time write speed is high. This causes high overhead for real-time index building and blocks the real-time write process.
    
    Solution: Increase the value of min\_flush\_proxima\_row\_count.
    
-   How do I write vector data using Java?
    
    The following example shows how to write vector data using Java.
    
    ```
    private static void insertIntoVector(Connection conn) throws Exception {
        try (PreparedStatement stmt = conn.prepareStatement("insert into feature_tb values(?,?);")) {
            for (int i = 0; i < 100; ++i) {
               stmt.setInt(1, i);
               Float[] featureVector = {0.1f,0.2f,0.3f,0.4f};
               Array array = conn.createArrayOf("FLOAT4", featureVector);
               stmt.setArray(2, array);
               stmt.execute();
            }
        }
    }
    ```
    
-   How can I check whether the Proxima index is used by looking at the execution plan?
    
    If the execution plan contains `Proxima filter: xxxx`, the index is used, as shown in the following figure. If not, the index is not used. This issue usually occurs because the table creation statement does not match the query statement.![检查是否利用proxima索引](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2043642661/p466395.png)
    

## Distance function descriptions

Hologres supports the following three vector distance functions:

-   Squared Euclidean distance (SquaredEuclidean). The formula is as follows.![不开方的欧式距离](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2844123261/p175758.png)
    
-   Euclidean distance (Euclidean). The formula is as follows.![开方的欧氏距离](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2844123261/p175760.png)
    
-   Inner product distance (InnerProduct). The formula is as follows.![内积距离](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2844123261/p175762.png)
    

**Note**

When you use Euclidean distance for vector computation, the squared Euclidean distance requires one less square root calculation than the Euclidean distance but produces the same top K records. Therefore, the squared Euclidean distance offers better performance. If the squared Euclidean distance meets your functional requirements, we recommend that you use it.
