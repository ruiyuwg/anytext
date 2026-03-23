fully managed flink, development, sql job

This topic provides a guide to job development.

## Understand upstream and downstream systems

-   **Upstream (Source)**: The source system from which data is read.
    
    -   Examples include Kafka, MySQL CDC, Hologres, and Simple Log Service (SLS).
        
-   **Downstream (Sink)**: The destination system to write the processed results.
    
    -   Examples include databases (MySQL, PostgreSQL), data warehouses (ClickHouse, Doris, StarRocks), message queues, and data lakes (Paimon, OSS).
        

Realtime Compute for Apache Flink supports over 30 upstream and downstream connectors, including databases, message queues, and data lakes. This enables fast data pipeline development. For more information, see [Supported connectors](/help/en/flink/realtime-flink/developer-reference/supported-connectors).

## Define job types according to your use cases

**Job type**

**Use cases**

**Flink SQL**

Real-time extract, transform, and load (ETL), real-time metric computation, multi-stream joins, streaming warehousing and lakehousing.

**Data ingestion with Flink CDC**

Real-time database synchronization, data migration, and automatic table synchronization.

**Datastream API**

Complex event processing (CEP), high-frequency external calls, complex window logic, and custom sources or sinks.

## Job development

**Flink SQL**

ETL, data aggregations, and lookup joins.

-   [Quick start with Flink SQL jobs](/help/en/flink/realtime-flink/getting-started/getting-started-for-a-flink-sql-deployment)
    
-   [Quick start with Flink SQL JOIN](/help/en/flink/realtime-flink/getting-started/flink-sql-join-quickstart)
    
-   [Quick start with dynamic Flink CEP](/help/en/flink/realtime-flink/getting-started/getting-started-with-dynamic-flink-cep)
    

**Data ingestion with Flink CDC**

Real-time database synchronization and batch table ingestion.

-   [Get started with Flink CDC-powered data ingestion](/help/en/flink/realtime-flink/getting-started/quick-start-for-data-ingestion-yaml-jobs)
    
-   [Best practices for data ingestion with Flink CDC](/help/en/flink/realtime-flink/use-cases/best-practices-for-configuring-data-ingestion-in-yaml-files/)
    
-   [Development reference for data ingestion with Flink CDC](/help/en/flink/realtime-flink/developer-reference/data-ingestion-development-reference/)
    

**Datastream API**

CEP, custom states, and complex job logic.

-   [Develop a JAR job](/help/en/flink/realtime-flink/user-guide/develop-a-jar-draft)
    
-   [Quick start with Flink JAR jobs](/help/en/flink/realtime-flink/getting-started/getting-started-for-a-flink-jar-deployment)
    
-   [Quick start with PyFlink jobs](/help/en/flink/realtime-flink/getting-started/getting-started-for-a-flink-python-deployment)
    

**Typical scenarios**

-   [Build a real-time data warehouse with Flink and Hologres](/help/en/flink/realtime-flink/use-cases/build-real-time-data-warehouse-based-on-flink-hologres)
    
-   [Build a streaming data lakehouse with Paimon and StarRocks](/help/en/flink/realtime-flink/use-cases/build-a-streaming-data-warehouse-based-on-flink-and-apache-paimon)
    
-   [Sync an entire MySQL database to Kafka using Flink CDC](/help/en/flink/realtime-flink/use-cases/synchronize-data-from-all-tables-in-a-mysql-database-to-kafka)
    

**Query and test**

-   [Scripts](/help/en/flink/realtime-flink/user-guide/sql-scripts)
    
-   [Debug a job](/help/en/flink/realtime-flink/user-guide/debug-a-deployment)
    
-   [Run and debug jobs that contain connectors locally](/help/en/flink/realtime-flink/developer-reference/run-or-debug-a-flink-deployment-that-includes-a-connector-in-an-on-premises-environment)
    

**Advanced usage**

-   [Catalogs](/help/en/flink/realtime-flink/user-guide/manage-catalogs/)
    
-   [Window functions](/help/en/flink/realtime-flink/developer-reference/window-functions-1/)
    
-   [Built-in functions](/help/en/flink/realtime-flink/developer-reference/built-in-functions/)
    

**Ecosystem integration**

-   [Quick start with AI-driven real-time analytics](/help/en/flink/realtime-flink/getting-started/integrate-with-alibaba-cloud-model-studio)
    
-   [Quick start with materialized tables](/help/en/flink/realtime-flink/getting-started/get-started-with-materialized-tables)
    
-   [Quick start with Hive dialect jobs](/help/en/flink/realtime-flink/getting-started/get-started-with-hive-sql-deployments)
    
-   [LLM integration](/help/en/flink/realtime-flink/developer-reference/llm-integration/)
    

**O&M and optimization**

-   [Job management](/help/en/flink/realtime-flink/user-guide/job-management/)
    
-   [Configure alert rules](/help/en/flink/realtime-flink/user-guide/configure-alert-rules)
    
-   [Task orchestration (Public preview)](/help/en/flink/realtime-flink/user-guide/workflow/)
    
-   [Optimize Flink SQL](/help/en/flink/realtime-flink/user-guide/optimize-flink-sql)
    

**Troubleshooting**

-   [Network connectivity](/help/en/flink/realtime-flink/support/faq-about-network-connectivity)
    
-   [FAQ about connectors](/help/en/flink/realtime-flink/support/faq-about-upstream-and-downstream-storage)
    
-   [Operations and maintenance](/help/en/flink/realtime-flink/support/troubleshooting-during-o-and-m/)
    
-   [FAQ about CDC](/help/en/flink/realtime-flink/support/faq-about-cdc)
