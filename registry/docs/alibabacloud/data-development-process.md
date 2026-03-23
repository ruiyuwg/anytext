DataWorks, combined with MaxCompute and Hologres, delivers an integrated data platform on the Data Lakehouse architecture. By consolidating batch and real-time workloads into a single environment, you can reduce data analysis cycles from days to minutes or seconds.

## What is a Data Lakehouse?

Traditional data architectures force a choice between two models:

**Architecture**

**Strengths**

**Limitations**

**Data warehouse**

Structured data, fast SQL queries, strong governance

Expensive at scale, rigid schema, no streaming support

**Data lake**

Low-cost storage, flexible formats, supports ML workloads

Poor query performance, weak governance, no ACID guarantees

Data Lakehouse combines the strengths of both: structured query performance and governance from data warehouses, with the cost efficiency and flexibility of data lakes. A single storage layer serves both batch and real-time workloads, eliminating the need for separate systems.

## Challenges of a dual-stack approach

Most enterprises run two separate technology stacks -- one for batch processing (Hive, Spark) and another for real-time streams (Flink, Kafka). This dual-stack approach creates four problems:

**Challenge**

**Description**

**Architecture fragmentation**

Maintaining two separate stacks increases development and operational costs. Keeping data consistent across both systems is difficult.

**Delayed insights**

Offline warehouse data is not immediately available for ad hoc queries. Business users often wait hours or a full day before they can explore new data. Correlating real-time events with large historical datasets is particularly difficult.

**Low resource efficiency**

Reserving capacity for peak batch workloads and real-time traffic spikes results in low utilization and high Total Cost of Ownership (TCO).

**Staffing overhead**

Operating two separate big data systems requires a large, highly skilled team.

## Architecture

The platform follows a four-stage data flow, from ingestion through unified analytics.

![Architecture diagram](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4304121671/CAEQThiBgMCB0ZLC0BkiIDAxYzExZTIxM2MyYjRhNWY4ZjM0MjI5OTY1YTc1NDEy5733830_20250917135649.563.svg)

### Stage 1: Unified data ingestion and layering

Data Integration ingests data from multiple source types into a unified cloud data lake or data warehouse:

**Source type**

**Examples**

Structured databases

MySQL, PostgreSQL, Oracle

Log files

Application logs, access logs

Real-time message queues

Kafka, other streaming sources

Ingested data follows a standard layering model -- ODS, DWD, DWS, and ADS -- so a single copy of the data serves both batch and real-time computing. This eliminates data silos at the source.

### Stage 2: Batch processing

MaxCompute SQL nodes in Data Studio handle large-scale data processing. The scheduling system automatically runs Extract, Transform, Load (ETL) tasks daily after midnight, processing terabytes to petabytes of historical data for:

-   Decision analysis
    
-   User profiling
    
-   Machine learning
    

### Stage 3: Real-time and near-real-time computing

The platform supports two latency tiers:

**Processing mode**

**Engine**

**Latency**

**Use cases**

**Real-time**

Realtime Compute for Apache Flink (Flink SQL nodes)

Milliseconds

Real-time risk control, live dashboards, real-time recommendations

**Near-real-time (ad hoc)**

Hologres

Seconds

Interactive drill-downs, self-service exploration via BI tools

Hologres runs interactive queries on massive datasets in the data lake or data warehouse. Business analysts and operations staff can perform multi-dimensional drill-downs directly on the latest data, without waiting for scheduled reports.

### Stage 4: Integrated analytics and unified services

Hologres directly accelerates queries on MaxCompute data, enabling federated analysis across real-time and historical datasets without duplicating data between systems.

DataService Studio packages analysis results into standard APIs, providing a single data service endpoint for:

-   Business applications
    
-   BI reports and dashboards
    
-   Downstream systems
    

### Component summary

**Component**

**Role**

**Connects to**

**Data Integration**

Ingests batch and streaming data from external sources

MaxCompute, Hologres

**MaxCompute**

Stores and batch-processes historical data (TB/PB scale)

Hologres (for accelerated queries)

**Hologres**

Runs real-time interactive queries on both live and historical data

MaxCompute, DataService Studio

**Flink SQL**

Processes data streams with millisecond latency

Hologres, MaxCompute

**Data Studio**

Development environment for authoring and scheduling SQL nodes

MaxCompute, Flink SQL

**DataService Studio**

Exposes query results as standard APIs

Business applications, BI tools

## Benefits

**Benefit**

**Details**

**Lower TCO**

A single storage layer, one development platform, and multiple compute engines reduce development and operational complexity, lowering TCO by over 50%.

**Faster time to insight**

Data analysis cycles drop from days to minutes or seconds, shifting decisions from periodic reviews to real-time insights.

**Self-service analytics**

High-performance interactive queries let business users explore data independently, reducing manual ad hoc data requests for analysts.

**Data-driven innovation**

A unified, real-time data foundation supports user behavior analysis, precision marketing, financial risk control, and intelligent supply chains.

## Customer case study

[Financial services: A data lakehouse implementation at an Internet finance company](/help/en/dataworks/user-guide/customer-user-cases#section-gga-9cj-dyc)
