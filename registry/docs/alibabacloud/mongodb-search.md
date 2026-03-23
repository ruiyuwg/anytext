When implementing complex full-text search or AI-driven vector search in MongoDB, you often need a separate search engine, such as Elasticsearch. This adds architectural complexity, data synchronization challenges, and operational overhead.

The MongoDB Search feature integrates dedicated search nodes (`mongot`) into your MongoDB instance, providing seamless full-text and vector search capabilities. This lets you perform multimodal search tasks using the familiar MongoDB Query Language (MQL) without managing external systems, simplifying development and reducing the operational burden.

## Billing **(Free Trial)**

The MongoDB Search feature is currently in invitational preview. You can apply for a free trial by [filling out a form](https://page.aliyun.com/form/act1389573681/index.htm?utm_content=g_1000405765). During the free trial, you will **not be charged** for the `**mongot**` **search nodes**. You only need to pay for the primary MongoDB instance.

## Scope

-   Available only for MongoDB 8.0 replica set dedicated instances. Sharded clusters are not currently supported.
    
-   Available only in public cloud regions.
    

## How it works

MongoDB Search isolates search workloads by adding dedicated `mongot` search nodes to an instance. This architectural separation prevents intensive search tasks from impacting the performance of the core database (`mongod` nodes).

-   **Core architecture**: `mongot` nodes are independent computing resources dedicated to processing `$search` (full-text search) and `$vectorSearch` (vector search) requests.
    
-   **Data synchronization**: mongot nodes asynchronously replicate the oplog from mongod nodes using Change Streams to keep search indexes updated. This ensures eventual consistency.
    
-   **Query routing**: When an aggregate query includes `$search` or `$vectorSearch`, `mongos` routes the search part to the `mongot` nodes for execution. The search results are then merged with the results of regular queries from the `mongod` nodes, returning a unified result set.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3641472671/CAEQThiDgICJ6aXg0RkiIGRhZGJlMjE1MWYyNjQ5M2E5MGU2YmNhYjRiYWFlMWEz5834661_20251029162223.791.svg)

## Enable MongoDB Search

### Objective

You can enable MongoDB Search for an existing MongoDB instance to create dedicated `mongot` search nodes.

### Procedure

1.  Go to the [MongoDB ReplicaSet instances](https://mongodb.console.alibabacloud.com/replicate/instances) page. Select a resource group and region from the top bar, and then click the ID of the target instance.
    
2.  In the navigation pane on the left, click **MongoDB Search**.
    
3.  On the **MongoDB Search** page, click **Activate Now**.
    
4.  In the **Activate Search** panel, configure the **Search Node Specifications**.
    
    **Parameter**
    
    **Description**
    
    **Specifications**
    
    Select the appropriate computing specifications for the `mongot` search nodes. Choose based on the expected queries per second (QPS) and data complexity.
    
    **Storage**
    
    Allocate disk space for the `mongot` nodes to store Search indexes. This space is separate from the primary instance's storage. Estimate the required space based on the source data volume and index complexity, and leave some extra capacity.
    
    Set the search node specifications and storage size to be no less than those of the primary instance. You can change the configuration later based on the actual workload.
    
5.  Read and select the **Service Agreement**.
    
6.  Click **Pay Now**.
    

After the nodes are created, you can view the new search node information on the **MongoDB Search** page and perform **Upgrade/Downgrade**, **Restart**, and **Release** operations.

## Manage **MongoDB** Search nodes

On the **MongoDB Search** page, you can perform the following operations on the created search nodes:

-   **Upgrade/Downgrade**: You can adjust the computing specifications or storage space of the `mongot` nodes to accommodate business changes. The number of Search nodes is two and cannot be changed.
    
-   **Restart**: You can restart the `mongot` nodes to troubleshoot issues or apply certain configurations. The search service will be briefly unavailable during the restart.
    
-   **Release**: You can release the `mongot` nodes if you no longer need the Search feature.
    
    **Important**
    
    **The release operation permanently deletes all created search indexes and cannot be undone.**
    

## Create and use Search indexes

### Objective

You can enable full-text search or vector search by creating different types of Search indexes. All operations are performed using the MongoDB Shell (`mongosh`) or a compatible MongoDB driver.

### Prerequisites

You are connected to the target MongoDB instance via `mongosh` or an application.

### Example 1: Implement full-text search for product reviews

This example demonstrates how to create a full-text search index on a `reviews` collection and run a keyword query.

1.  **Create a search index with dynamic mapping.** `dynamic: true` configures MongoDB to automatically index all fields in the collection. This is ideal for rapid prototyping.
    
    ```
    // Create a Search index named 'reviews_full_text_index' on the 'reviews' collection
    db.reviews.createSearchIndex({
      name: "reviews_full_text_index",
      definition: {
        "mappings": {
          "dynamic": true
        }
      }
    });
    ```
    
2.  **Use the** `**$search**` **aggregation stage to query reviews that contain specific keywords.** The following query finds reviews where the `comment` field contains "good" and returns the comment, rating, and product ID.
    
    ```
    db.reviews.aggregate([
      {
        $search: {
          index: "reviews_full_text_index", // Specify the Search index to use
          text: {
            query: "good", // Query keyword
            path: "comment"      // Search in the 'comment' field
          }
        }
      },
      {
        $limit: 5
      },
      {
        $project: {
          _id: 0,
          productId: 1,
          rating: 1,
          comment: 1,
          score: { $meta: "searchScore" } // Return the search relevance score
        }
      }
    ]);
    ```
    

### Example 2: Implement search by image based on image features

This example demonstrates how to create a vector search index for an `images` collection and perform a similarity search on the image vector features.

1.  **Create a vector search index.** You must specify the vector field path, the number of dimensions (`numDimensions`), and the similarity method (`similarity`).
    
    ```
    // Create a vector index named 'vector_index' on the 'images' collection
    db.images.createSearchIndex(
      "vector_index", 
      "vectorSearch", 
      {
        "fields": [
          {
            "type": "vector",
            "path": "plot_embedding_voyage_3_large",// The field that stores the vector
            "numDimensions": 2048,// The number of dimensions of the vector
            "similarity": "dotProduct",// The similarity calculation method
            "quantization": "scalar"
          }
        ]
      }
    );
    ```
    
2.  **You can use the** `**$vectorSearch**` **aggregation stage to find images that are most similar to a given image.** You must provide a query vector (`queryVector`), which is typically generated by an AI model based on an input image.
    
    `numCandidates`: The size of the candidate set. This parameter represents a trade-off between performance and the recall rate. A higher value improves the recall rate but requires more resources and may increase latency.
    
    ```
    // Assume QUERY_EMBEDDING is a 1024-dimension vector generated by an AI model
    const QUERY_EMBEDDING = [0.12, 0.45, -0.23, ...]; // Example vector. Replace with your actual vector data.
    // Perform a search based on vector similarity.
    db.images.aggregate([
      {
        "$vectorSearch": {
          "index": "vector_index",
          "path": "plot_embedding_voyage_3_large",
          "queryVector": QUERY_EMBEDDING,
          "numCandidates": 150,
          "limit": 10,
          "quantization": "scalar"
        }
      },
      {
        "$project": {
          "_id": 0,
          "plot": 1,
          "title": 1,
          "score": { $meta: "vectorSearchScore" }
        }
      }
    ])
    ```
    

## Going live

### Monitoring and O&M

-   **Monitoring metrics**: `mongot` search nodes do not have dedicated monitoring metrics. You can gauge the impact of the search workload by observing the CPU, memory, I/O, and network metrics of the primary instance.
    
-   **Log Management**: You cannot currently view running logs, slow query logs, or audit logs on `mongot` nodes. For slow queries, you can use the `explain()` method to analyze the execution plan of the `$search` or `$vectorSearch` stage to identify performance bottlenecks.
    
-   **Index management**: You can use the `db.collection.getSearchIndexes()` command to view existing Search indexes and their status.
    

### High availability and failover

-   Search nodes are deployed in a 2-node architecture by default. If one node fails, the system automatically performs a failover and routes traffic to the healthy node. Ensure that your application has a retry mechanism.
    

### Backup, recovery, and data synchronization

-   **Backup and recovery**: A new instance restored from a backup file does **not include** the search indexes of the original instance. You must enable the search service and rebuild all search indexes on the new instance.
    
-   **Data migration**: When you use tools such as Data Transmission Service (DTS) for data migration or synchronization, search indexes are **not** synchronized. You must manually create the indexes on the destination instance.
    

## FAQ

-   **Q: How long after writing data can I search it?**
    
    A: Data synchronization is asynchronous. You can typically search the data within a few seconds. The latency is affected by factors such as the instance's write load, document size, and network conditions.
    
-   **Q: What triggers an index rebuild? Does upgrading or downgrading trigger an index rebuild?**
    
    A: When you change an index definition, mongot automatically rebuilds the new index in the background. During this process, the old index can still serve queries. Once the new index is built, the old index is no longer available. Upgrading or downgrading search nodes is not directly related to index rebuilding.
