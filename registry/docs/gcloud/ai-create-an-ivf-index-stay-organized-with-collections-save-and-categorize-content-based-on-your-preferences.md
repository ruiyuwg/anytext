-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Databases](https://docs.cloud.google.com/docs/databases)
-   [AlloyDB for PostgreSQL](https://docs.cloud.google.com/alloydb/docs)
-   [Guides](https://docs.cloud.google.com/alloydb/docs/overview)

Send feedback

# Create an IVF index Stay organized with collections Save and categorize content based on your preferences.

This page describes how to use stored embeddings to generate indexes and query embeddings using an `IVF` index with AlloyDB for PostgreSQL. For more information about storing embedding, see [Store vector embeddings](/alloydb/docs/ai/store-embeddings).

**Note:** Before you create an index, verify that you add embedding vectors to a table in your AlloyDB database.

## Before you begin

Before you can start creating indexes, you must complete the following prerequisites.

-   [Embedding vectors are added to a table](/alloydb/docs/ai/store-embeddings) in your AlloyDB database.
    
-   The `vector` extension version `0.5.0` or later that is based on `pgvector`, extended by Google for AlloyDB is installed.
    
    ```
    CREATE EXTENSION IF NOT EXISTS vector;
    ```
    

## Create an `IVF` index

Stock [`pgvector` supports approximate nearest-neighbor searching](https://github.com/pgvector/pgvector#indexing) through indexing. AlloyDB adds to this support with a scalar quantization feature that you can specify when you create an index. When enabled, scalar quantization can significantly speed up queries that have larger dimensional vectors, and lets you store vectors with up to 8,000 dimensions.

To enable scalar quantization on a `pgvector`\-based index, specify `IVF` as the index method, and `SQ8` as the quantizer:

```
CREATE INDEX INDEX_NAME ON TABLE
  USING ivf (EMBEDDING_COLUMN DISTANCE_FUNCTION)
  WITH (lists = LIST_COUNT, quantizer = 'QUANTIZER');
```

Replace the following:

-   `INDEX_NAME`: the name of the index you want to create—for example, `my-ivf-index`. The index names are shared across your database. Ensure that each index name is unique to each table in your database.
    
-   `TABLE`: the table to add the index to.
    
-   `EMBEDDING_COLUMN`: a column that stores `vector` data.
    
-   `DISTANCE_FUNCTION`: the distance function to use with this index. Choose one of the following:
    
    -   **L2 distance:** `vector_l2_ops`
        
    -   **Inner product:** `vector_ip_ops`
        
    -   **Cosine distance:** `vector_cosine_ops`
        
-   `LIST_COUNT`: the number of lists to use with this index. For more information about how to decide this value, see [Tune an IVF index](/alloydb/docs/ai/tune-indexes).
    
-   `QUANTIZER`: the type of quantizer that you want to use.
    
    Set to either of the following:
    
    -   `SQ8`: Recommended. Faster query response but results in some recall loss, which doesn't impact production scenarios.
    -   `FLAT`: slower query response and higher memory usage, but can attain negligible recall loss.
    
    To create this index on an embedding column that uses the `real[]` data type instead of `vector`, cast the column into the `vector` data type:
    

```
CREATE INDEX INDEX_NAME ON TABLE
  USING ivf (CAST(EMBEDDING_COLUMN AS vector(DIMENSIONS)))'}} DISTANCE_FUNCTION)
  WITH (lists = LIST_COUNT, quantizer = 'SQ8');
```

Replace `DIMENSIONS` with the dimensional width of the embedding column. For more information about how to find the dimensions, see the `vector_dims` function in [Vector functions](https://github.com/pgvector/pgvector?tab=readme-ov-file#vector-functions).

To view the indexing progress, use the `pg_stat_progress_create_index` view:

```
SELECT * FROM pg_stat_progress_create_index;
```

The `phase` column shows the current state of your index creation, and the `building postings` phase indicates that the index creation is nearing completion.

To tune your index for a target recall and QPS balance, see [Tune an `IVF` index](/alloydb/docs/ai/tune-indexes).

## Run a query

After you store and index the embeddings in your database, you can start querying using the [`pgvector` query functionality](https://github.com/pgvector/pgvector#querying).

To find the nearest semantic neighbors for an embedding vector, you can run the following example query, where you set the same distance function that you used during the index creation.

  ```
  SELECT * FROM TABLE
    ORDER BY EMBEDDING_COLUMN DISTANCE_FUNCTION_QUERY ['EMBEDDING']
    LIMIT ROW_COUNT
```

Replace the following:

-   `TABLE`: the table containing the embedding to compare the text to.
    
-   `INDEX_NAME`: the name of the index you want to use—for example, `my-scann-index`.
    
-   `EMBEDDING_COLUMN`: the column containing the stored embeddings.
    
-   `DISTANCE_FUNCTION_QUERY`: the distance function to use with this query. Choose one of the following based on the distance function used while creating the index:
    
    -   **L2 distance:** `<->`
        
    -   **Inner product:** `<#>`
        
    -   **Cosine distance:** `<=>`
        
-   `EMBEDDING`: the embedding vector you want to find the nearest stored semantic neighbors of.
    
-   `ROW_COUNT`: the number of rows to return.
    
    Specify `1` if you want only the single best match.
    

For more information about other query examples, see [Querying](https://github.com/pgvector/pgvector?tab=readme-ov-file#querying).

You can also use the [`embedding()`](/alloydb/docs/ai/work-with-embeddings) function to translate the text into a vector. You apply the vector to one of the `pgvector` nearest-neighbor operators, `<->` for L2 distance, to find the database rows with the most semantically similar embeddings.

Because `embedding()` returns a `real` array, you must explicitly cast the `embedding()` call to `vector` in order to use these values with `pgvector` operators.

## What's next

-   [Create a ScaNN index](/alloydb/docs/ai/create-scann-index#before-you-begin)
-   [Run vector similarity searches](/alloydb/docs/ai/run-vector-similarity-search)
-   [Tune vector query performance](/alloydb/docs/ai/tune-indexes)
-   [Vector index metrics](/alloydb/docs/reference/vector-index-metrics)
-   [Learn how to build a smart shopping assistant with AlloyDB, pgvector, and model endpoint management](https://codelabs.developers.google.com/smart-shop-agent-alloydb#0).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
