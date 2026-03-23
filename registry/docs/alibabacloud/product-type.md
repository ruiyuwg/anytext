Hologres offers five instance types, each designed for different data volume, concurrency, and resource isolation requirements. This topic describes each instance type and the scenarios it supports.

## Overview

Use the following guidance to determine which instance type fits your requirements. Virtual warehouse instances cover the broadest range of production scenarios and are the default recommendation.

### Hologres Virtual Warehouse (recommended)

A virtual warehouse instance provides dedicated computing and storage resources. A single instance supports a read/write splitting architecture through virtual warehouses, without requiring separate instances.

**Choose this when:**

-   Data volumes are in the terabyte (TB) or petabyte (PB) range and you run frequent complex queries.
    
-   You run high-concurrency online services with millisecond-level responses (over 1,000 QPS).
    
-   You need payload isolation between workloads, such as separating Online Analytical Processing (OLAP) queries from real-time writes, or isolating resources across lines-of-business.
    
-   Traffic fluctuates significantly with periodic peaks that require rapid scaling.
    

For more information, see [Hologres Virtual Warehouse](/help/en/hologres/user-guide/virtual-warehouses/).

### Hologres Serverless

A serverless instance uses shared computing resources with dedicated storage resources for high-performance, large-scale, and low-frequency data manipulation and queries. You do not need to reserve computing capacity in advance.

**Choose this when:**

-   You are running development or staging environments.
    
-   You have low-frequency queries that still require high performance when they run.
    
-   Business payloads fluctuate significantly, peaks are hard to predict, and you cannot reserve dedicated computing resources in advance.
    

For more information, see [Hologres Serverless](/help/en/hologres/user-guide/serverless-instance/).

### Hologres General-purpose

A general-purpose instance provides dedicated computing and storage resources for cost control and lightweight analytics. General-purpose instances can be [upgraded to virtual warehouse instances](/help/en/hologres/user-guide/generic-instance-converted-to-compute-group-instance) as requirements grow.

**Choose this when:**

-   Data volume is less than 1 TB.
    
-   You run lightweight analytics such as low-frequency ad hoc queries or small- to medium-scale business intelligence (BI) report generation.
    
-   You have limited budgets and need a cost-effective solution, or you are in a trial phase for non-core services.
    
-   Concurrency requirements are low, such as internal data service platforms or scheduled task processing.
    

## Comparing Hologres offerings

The following table compares the active instance types across five capability dimensions.

**Feature**

**Hologres Virtual Warehouse**

**Hologres Serverless**

**Hologres General-purpose**

Resizing

Supported

N/A

Not supported

Scheduled scaling

Supported

N/A

Not supported

Workload isolation

Supported

Supported

Not supported

Automatic throttling

Supported

Supported

Not supported

Serverless computing

Supported

Supported

Supported

## Legacy offerings (deprecating)

The following instance types are scheduled for discontinuation. If you currently use one of these types, migrate to Hologres Virtual Warehouse.

### Read-only secondary instance

A read-only secondary instance provides dedicated computing and storage resources and operates by [attaching to a general-purpose instance](/help/en/hologres/user-guide/instance-list#section-1p8-ej4-l9e) to create a multi-instance read/write splitting architecture. The general-purpose primary instance handles data writes and data manipulation, while the read-only replica instance handles data analytics.

**Note**

Hologres Read-only Secondary is phasing out. Migrate to Hologres Virtual Warehouse as soon as possible.

**Legacy comparison attributes:**

**Feature**

**Read-only secondary instance**

Resizing

Not supported

Scheduled scaling

Not supported

Payload isolation

Supported

Automatic throttling

Not supported

Serverless computing

General-purpose instance: Supported / Read-only secondary instance: Not supported

### Hologres Shared Cluster

Hologres Shared Cluster uses shared computing resources and does not provide storage resources. No need to read from or write to Hologres internal tables.

**Previous use cases:**

-   Accelerating queries on data stored in OSS or MaxCompute through Hologres.
    
-   Running large burst queries that exceed the resources of reserved dedicated instances.
    
-   Connecting BI tools such as Tableau, Quick BI, and FineReport to accelerate queries on data lakehouse data.
    

**Note**

Hologres Shared Cluster is phasing out. Use Hologres Virtual Warehouse instead.

For more information, see [Hologres Shared Cluster](/help/en/hologres/user-guide/shared-cluster-lake-warehouse/).
