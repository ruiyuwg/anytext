EMR Serverless Spark is a high-performance lakehouse product for data and AI. It provides a fully managed, serverless Spark runtime that handles data processing and AI workloads without requiring you to manage clusters or infrastructure. The product is 100% compatible with the open-source Spark ecosystem -- run existing jobs directly with `spark-submit` and `spark-sql`, no code changes required.

Resources scale within seconds at a granularity as fine as one core and are released immediately after each job completes. Billing is based on actual resource consumption.

## Use cases

-   **Data warehousing and BI analytics**: Run SQL queries and build reports through the built-in SQL editor. Compatible with traditional data warehouse workflows.
    
-   **ETL and data engineering**: Orchestrate batch processing, stream computing, and data transformation pipelines in a single workflow.
    
-   **Machine learning and data science**: Develop and train models interactively in the built-in Notebook with Python environment management and SparkML.
    
-   **Lakehouse analytics**: Query and manage data stored in open lakehouse formats such as Apache Paimon, Apache Iceberg, Delta Lake, and Apache Hudi.
    

## Architecture

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5771032771/CAEQUBiBgMD1oZHI2BkiIDQ2NDlkOGY0OTRiMTQ5MjI5MDIyMmE1OWM2OTJhODNl3954475_20230922103052.849.svg)

The architecture has four layers:

**Application scenario layer**

The SQL editor supports data queries and report development. The Notebook supports interactive Python development and machine learning. Both tools are part of a unified platform, so you can move from data analytics to model training without switching tools.

**Platform capability layer**

Workflow orchestration enables mixed scheduling for batch processing, stream computing, and AI jobs in the same pipeline. Resource Access Management (RAM) provides fine-grained access control over resources, data, and features. The Notebook, Apache Kyuubi, and Apache Livy services provide developers with flexible programming interfaces and task submission capabilities.

**Core engine layer**

Two built-in engines accelerate performance:

**Engine**

**Description**

**Fusion Engine** (Spark Native Engine)

A C++-based vectorized SQL engine that leverages single instruction multiple data (SIMD) instructions. Compared to the Java Virtual Machine (JVM), Fusion Engine improves CPU utilization and reduces memory overhead, delivering a 300% performance improvement over open-source Spark.

**Celeborn** (Remote Shuffle Service)

An enterprise-grade shuffle service for I/O-intensive scenarios that handles petabyte-scale shuffle data with multi-tenant data isolation and elastic resource scaling. Celeborn eliminates the need for large disks on compute nodes and fully utilizes Spark's dynamic resource scaling, reducing total computing costs by up to 30%.

**Lakehouse storage layer**

Built on open data lake formats -- Apache Paimon and Apache Iceberg -- this layer combines data lake flexibility with traditional data warehouse capabilities: ACID transactions, efficient data upserts, and complete data lineage tracking.

## Elastic scaling and cost efficiency

-   **Compute-storage decoupled architecture**: Computing resources scale within seconds at a minimum granularity of one core. Storage uses pay-as-you-go pricing.
    
-   **Task-level metering**: Resources are metered at the task or queue level, with built-in cost estimation per task.
    
-   **HDFS-compatible cloud storage**: Integrates with OSS-HDFS for a smooth migration path from on-premises HDFS. Uses Data Lake Formation (DLF) for unified lakehouse metadata management and consistent data access permissions.
    

## Ecosystem compatibility

-   **Spark compatibility**: Fully compatible with open-source Spark. Run jobs without code modification using `spark-submit` and `spark-sql`.
    
-   **Lakehouse formats**: Supports Apache Paimon, Apache Iceberg, Delta Lake, and Apache Hudi.
    
-   **Scheduling integration**: Works with Apache Airflow and Apache DolphinScheduler.
    
-   **Security**: Connects to Kerberos or LDAP for authentication. Uses Apache Ranger for data authorization.
    
-   **Machine learning**: Includes a built-in SparkML environment and Notebook with full lifecycle management for third-party Python libraries.
    

## Development platform

-   **End-to-end workflow**: Covers task development, debugging, publishing, and scheduling in a single platform.
    
-   **Version management**: Records complete release history with source code and configuration diff comparisons. All changes are traceable.
    
-   **Environment isolation**: Development and production environments are strictly separated.
    

## Serverless operations

-   **No infrastructure setup**: Start developing immediately. No cluster management or infrastructure configuration required.
    
-   **Automatic resource management**: Resources are pulled and pods are started dynamically based on each Spark task's requirements. Resources are released immediately after computation finishes.
    
-   **Pay for what you use**: Billing is based on actual resource consumption.
    

## Billing

EMR Serverless Spark supports two billing methods:

**Billing method**

**Description**

[Subscription](/help/en/emr/emr-serverless-spark/product-overview/computing-resources-package-year-and-package-month)

Purchase resources for a specific period. Pay before you use the resources.

[Pay-as-you-go](/help/en/emr/emr-serverless-spark/product-overview/compute-resources-pay-as-you-go)

Activate and release resources as needed. Pay after you use the resources.

## Get started

-   **Console**: [EMR Serverless Spark console](https://emr.console.alibabacloud.com/#/region/cn-hangzhou/resource/all/serverless/spark/list)
    
-   **API**: RPC-style API operations using GET and POST requests. See the [API reference](/help/en/emr/emr-serverless-spark/developer-reference/api-emr-serverless-spark-2023-08-08-overview#undefined).
    
-   **OpenAPI Developer Portal**: [Try API calls online and generate SDK code](https://next.api.aliyun.com/api/emr-serverless-spark/2023-08-08/AddMembers).
    
-   **SDK**: Available for Java, Python, PHP, and other languages. [Download the SDK](https://next.api.aliyun.com/api-tools/sdk/emr-serverless-spark?version=2023-08-08&language=java-async-tea&tab=primer-doc).
