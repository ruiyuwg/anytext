Hologres supports vector computation to represent unstructured data features as vectors and perform high-performance vector search. This topic describes the features and benefits of vector computation in Hologres.

## **Background**

Hologres is a real-time data warehouse engine compatible with PostgreSQL. Before V4.0, Hologres used the Proxima library, an approximate nearest neighbor search library developed by DAMO Academy, to provide Vector Computation.

Hologres V4.0 fully upgrades its Vector Search capabilities with support for the HGraph vector search algorithm, which provides these enhancements:

-   Supports hybrid memory and disk indexes, letting you customize query strategies for different performance and precision needs.
    
-   Supports ingestion and recall for hundreds of billions of vectors.
    
-   On a Massively Parallel Processing (MPP) architecture, the HGraph algorithm significantly improves both read and write performance.
    

Hologres offers the following advantages in Vector Computation:

-   Powerful vector computation
    
    -   **Real-time capability:** Supports real-time ingestion and updates of vector data, and is queryable immediately after being written.
        
    -   **Query capabilities:** Supports hybrid queries that combine Vector Search with other complex filter conditions. It also supports the concurrent use of vector indexes and other structured indexes.
        
    -   **High performance:** Supports vector data ingestion at very high Queries Per Second (QPS), efficient index construction, and low-latency Vector Search at high QPS.
        
    -   **Low cost:** Compresses vector index data using the `Float2` data type to reduce storage costs.
        
-   **Integration with real-time data warehouse features**
    
    -   **Ease of use:** Supports creating and using vector indexes with standard SQL syntax.
        
    -   **Transactional support:** Supports multi-statement DDL transactions and mixed DML transactions.
        
    -   **Binary log:** Supports Binary Log, which enables subscribing to vector data change events.
        
    -   **Multiple scenarios:** Supports three table storage formats: row storage, column storage, and hybrid row-columnar storage. This enables a single vector table to simultaneously handle high-performance OLAP analysis, key-value lookups, and vector queries.
        
-   **High availability and elasticity**
    
    -   **Support for compute group instances:** Supports a multi-compute group architecture with shared storage that enables flexible read/write splitting and isolation between read and write operations. For more information, see [Quick Start for compute group instances](/help/en/hologres/user-guide/getting-started-with-virtual-warehouses).
        
    -   **Flexible resource elasticity:** Supports flexible resource elasticity. For more information, see [Best practices for compute resource management](/help/en/hologres/use-cases/best-practices-for-managing-computing-resources).
        
-   **Ecosystem integration**
    
    -   Integrates with MaxCompute to support accelerated queries on MaxCompute's vector data using an external table and high-performance bulk ingestion.
        
    -   Integrates with Flink to support real-time ingestion and updates of vector data. It supports various use cases involving source tables, result tables, and dimension tables, and complex operations like multi-stream joins for vector data.
        
    -   Integrates with DataWorks to support data integration from numerous sources and provides capabilities like Data Asset management, Data Lineage, and data services.
        

## Concepts

### **Glossary**

-   **Feature vector:** A vector is an algebraic representation of an entity. It represents the relationships between entities as distances in a vector space, where proximity indicates similarity. For example, features like height, age, gender, and region can be encoded into a vector.
    
-   **Vector search:** A method for quickly searching and matching within a set of feature vectors. It typically addresses problems like K-Nearest Neighbor (KNN) and Radius Nearest Neighbor (RNN) search.
    
-   **KNN (K-Nearest Neighbor):** Finds the K points closest to a query point.
    
-   **RNN (Radius Nearest Neighbor):** Finds all points within a specific radius of a query point.
    

### **Concept mapping**

**Proxima concept**

**Concept in Hologres**

Feature vector

The `Array` data type. Only fixed-length arrays are supported.

Vector index

A special type of index. Currently, only graph indexes for KNN/RNN are supported.

Distance calculation

-   A type of user-defined function (UDF): `proxima_distance()`
    
-   Each distance metric corresponds to a specific UDF.
    

KNN query

order by distance(x, \[x1, x2\]) asc limit k

RNN query

where distance(x, \[x1,x2\]) < r

**Note**

RNN queries are not accelerated by vector indexes.

## **References**

-   To learn how to use Vector Computation in Hologres, see [HGraph index user guide](/help/en/hologres/user-guide/hgraph-index-usage-guide).
    
-   For memory requirements when performing high-performance Vector Search, see [Recommended instance types for vector computing](/help/en/hologres/user-guide/recommended-instance-specifications-for-vector-processing).
