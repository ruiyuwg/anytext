This topic explains how integrating MaxCompute with Data Lake Formation (DLF) enables you to query data lake storage directly — without ETL pipelines, without duplicating data, and without sacrificing governance or query performance.

## Background: The Problem with Separate Lake and Warehouse Systems

Large-scale data platforms typically evolve into two separate tiers: a data lake for raw, flexible storage and a data warehouse for governed, high-performance analytics. Each tier serves a distinct purpose, but running both creates compounding costs.

Data warehouses provide strong governance and query optimization, but they are engine-specific and require data to be ingested and transformed before it can be queried. Data teams must build and maintain ETL pipelines to move data from the lake into the warehouse. The result is a set of persistent operational problems:

-   **Duplicated storage**: The same datasets exist in both the lake and the warehouse, increasing storage costs.
-   **Consistency risk**: Pipelines introduce latency and potential divergence between the lake copy and the warehouse copy.
-   **Engine lock-in**: Data loaded into a warehouse is typically accessible only to that warehouse's query engine.

Data lakes eliminate these rigidities — they store any format and support multiple engines — but they lack the governance and optimization controls that enterprises require for production analytics.

The MaxCompute lakehouse solution addresses both sides of this trade-off. It lets MaxCompute (formerly known as ODPS), a fully managed platform capable of processing exabytes of data, operate directly on lake storage through a shared metadata layer provided by DLF.

## How the Integration Works

The integration mechanism is metadata sharing. Instead of copying data from the lake into MaxCompute's native storage, the lakehouse solution connects MaxCompute to the same metadata catalog that governs your data lake. DLF serves as this unified metadata layer, providing enterprise-level metadata capabilities that both MaxCompute and other catalog-compatible engines can use.

The three components work together as follows:

Component

Role

**Data Lake Formation (DLF)**

Maintains the enterprise-level metadata catalog: table definitions, schema information, and access policies for data in lake storage.

**Lake storage (for example, OSS)**

Holds the actual data files in open formats. Data stays in place — it is not duplicated into a separate store.

**MaxCompute**

The compute engine. Reads table definitions from DLF and executes queries directly against lake storage.

When a user runs a MaxCompute query against a lakehouse table, MaxCompute resolves the table definition from DLF — including the storage location and schema — and reads the data files from lake storage. No prior data loading or transformation is required.

Because the catalog is shared, other engines that have access to the same DLF catalog can also read the same underlying data. This enables cross-engine interoperability within a single governance boundary.

## Solution Architecture

The lakehouse solution separates storage, metadata, and compute into three distinct layers:

1.  **Storage layer**: Data files reside in lake storage in open formats. This layer is engine-agnostic and shared across all consumers.
2.  **Metadata layer**: DLF maintains the catalog of databases, tables, and schemas that describe the storage layer. MaxCompute registers lakehouse databases against this catalog instead of maintaining isolated metadata.
3.  **Compute layer**: MaxCompute reads from the DLF catalog to resolve queries, then accesses the storage layer directly. Other catalog-compatible engines can operate on the same data simultaneously.

Governance policies applied in DLF propagate to all engines through the shared catalog, so access control and schema management remain consistent regardless of which engine a user runs.

## Key Capabilities

The MaxCompute lakehouse solution gives your data platform the following capabilities:

-   **Unified metadata management**: DLF acts as the single source of truth for table definitions and schema. You define a table once and query it from MaxCompute or any other catalog-compatible engine.
-   **Direct lake queries without ETL**: MaxCompute queries data files in lake storage directly. The ingestion pipelines normally required to load lake data into a warehouse are no longer needed.
-   **Consistent governance across engines**: Because DLF manages the metadata catalog, access policies defined in DLF apply uniformly across all engines. You do not need to configure governance separately for each system.
-   **Reduced storage costs**: One copy of data in lake storage serves multiple compute engines, removing the cost and overhead of maintaining warehouse-side copies.
-   **Exabyte-scale compute**: MaxCompute is built for large-scale data warehousing and processes exabytes of data. The lakehouse model does not require you to trade query performance for storage flexibility.

## When to Use the MaxCompute Lakehouse

This solution fits your architecture when:

-   You have data in lake storage that you want to query with MaxCompute without running a full ingestion pipeline.
-   Multiple teams or engines need access to the same data and you want a single governance layer to manage permissions.
-   You want to eliminate warehouse-side copies of data that already exists in lake storage.
-   You are building a unified data platform that supports both lake-native workloads and MaxCompute-powered analytics against a common catalog.

## Get Started

For configuration steps and tutorials on setting up the MaxCompute lakehouse solution, see [Lakehouse of MaxCompute](/help/en/maxcompute/user-guide/lakehouse-of-maxcompute).
