Realtime Compute for Apache Flink is an end-to-end, real-time big data analytics platform. It processes data with sub-second latency and supports standard SQL-compatible syntax. This helps enterprises go real-time and intelligent easily.

## Overview

Realtime Compute for Apache Flink is a fully managed, serverless service. It supports multiple billing methods and requires no setup. The service provides an end-to-end platform for development, operations, and management. It delivers powerful capabilities for entire project lifecycles, including draft development, debugging, operations, monitoring, and diagnostics. Fully compatible with Apache Flink, Realtime Compute for Apache Flink enables seamless cloud migration and features an enhanced engine with twice the performance. The service also provides value-added features, such as Flink Change Data Capture (CDC) and complex event processing (CEP), along with various built-in upstream and downstream connectors to help enterprises build efficient, stable, and powerful real-time data applications.

## **Comparison with Apache Flink**

Compared with Apache Flink, Realtime Compute for Apache Flink offers significant advantages in functionality, performance, and support for enterprise applications.

**Item**

**Apache Flink**

**Realtime Compute for Apache Flink**

**Why us?**

Performance and cost

-   No built-in elastic scalability.
    
-   Resource utilization depends on manual tuning.
    

-   Higher performance: Through SQL operator optimization and the self-developed GeminiStateBackend, Realtime Compute for Apache Flink offers performance twice as high as Apache Flink in Nexmark benchmark tests.
    
-   Intelligent performance tuning: Features [Autopilot](/help/en/flink/realtime-flink/user-guide/configure-autopilot-and-scheduled-tuning), which automatically monitors and adjusts job resource allocation, solving various performance issues like insufficient job throughput, backpressure in the entire pipeline, and resource waste without manual intervention.
    
-   Higher resource utilization: Supports fine-grained resource (CPU/Mem) configuration at the operator level, improving resource utilization by up to 100% for large-scale jobs.
    
-   Flexible billing: Supports [Subscription](/help/en/flink/realtime-flink/product-overview/subscription#concept-2121904), [Pay-as-you-go](/help/en/flink/realtime-flink/product-overview/pay-as-you-go#task-2122870) and [Hybrid billing](/help/en/flink/realtime-flink/product-overview/hybrid-pricing) models for compute unit (CU) consumption.
    

-   Flexible billing models and better performance, helping enterprises reduce costs.
    
-   Intelligent CU scaling improves resource utilization.
    

Compatibility and integration capabilities

-   Native Flink SQL and DataStream APIs.
    
-   Requires manual integration with systems such as MySQL, Kafka, Paimon, with potential compatibility issues caused by frequent version updates.
    

-   Fully compatible with mainstream Flink APIs ([SQL](/help/en/flink/realtime-flink/user-guide/develop-an-sql-draft), [DataStream](/help/en/flink/realtime-flink/user-guide/develop-a-jar-draft), [PyFlink](/help/en/flink/realtime-flink/user-guide/develop-a-pyflink-job), and [Flink CDC](/help/en/flink/realtime-flink/user-guide/develop-a-yaml-draft)).
    
-   Provides over 30 built-in [connectors](/help/en/flink/realtime-flink/developer-reference/supported-connectors) (such as MySQL, Kafka, Hologres, and Paimon) of various storage types, including databases, message queues, data warehouses, data lakes, and file systems.
    
-   Supports [custom connectors](/help/en/flink/realtime-flink/user-guide/manage-custom-connectors) to integrate with external systems.
    

-   Lower entry barriers.
    
-   Improved ecosystem integration efficiency.
    
-   Smooth business migration.
    

Development efficiency and debugging experience

-   Lacks a one-stop development management platform.
    
-   Limited debugging tools.
    

-   Supports syncing an entire database, merging and syncing tables, schema evolution, and reading the snapshot from database replicas and incremental data from the master database ([CDAS](/help/en/flink/realtime-flink/developer-reference/create-database-as-statement)/[CTAS](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement)).
    
-   [Manages draft versions](/help/en/flink/realtime-flink/user-guide/manage-job-versions) (code comparison and rollback), supporting integration with remote [Git repositories](/help/en/flink/realtime-flink/user-guide/integrate-with-git-public-preview) (such as GitHub, GitLab, or Gitee).
    
-   Supports [native Apache Flink functions](/help/en/flink/realtime-flink/developer-reference/overview-7) and [custom functions](/help/en/flink/realtime-flink/user-guide/manage-udfs); provides over 20 Flink SQL script templates for common real-world use cases.
    
-   Supports test data management, quick debugging, intermediate result display, and development-production isolation; integrates with [Visual Studio Code's local development tool](/help/en/flink/realtime-flink/user-guide/vscode-extension-for-local-development).
    

-   Easier development.
    
-   Reduced debugging and testing costs.
    
-   Faster job deployment and higher quality.
    

Operations and management capabilities

-   No comprehensive built-in monitoring and alerting system.
    
-   Lacks Graphical User Interface (GUI).
    
-   Requires manually scaling resources; complex resource scheduling.
    

-   Provides a GUI for [job management](/help/en/flink/realtime-flink/user-guide/job-management/), [state monitoring](/help/en/flink/realtime-flink/user-guide/monitoring-and-alerting/), and [log tracking](/help/en/flink/realtime-flink/user-guide/job-logs/), improving O&M efficiency.
    
-   Supports [monitoring metrics in multiple dimensions](/help/en/flink/realtime-flink/user-guide/metrics) and intelligent metric aggregation, letting you quickly identify issues such as high latency, skew, and backpressure.
    
-   Offers built-in [real-time alerting mechanism](/help/en/flink/realtime-flink/user-guide/configure-alert-rules), supporting multiple notification methods, including DingTalk, emails, and text messages, and can integrate with [enterprise-level monitoring systems](/help/en/flink/realtime-flink/user-guide/feature-comparison-between-cloudmonitor-and-arms) like Prometheus.
    
-   Supports [dynamic configuration modification](/help/en/flink/realtime-flink/user-guide/dynamically-update-deployment-parameters) without the need for job restarts, and provides intelligent diagnostics to help quickly identify job abnormalities, such as TaskManager disconnections and log locationing and tuning suggestions.
    

-   Lower O&M overhead and optimization difficulty.
    
-   Fine-grained resource management and reduced costs.
    
-   Improved job observability and response efficiency.
    

Stability and reliability

-   Flink cluster deployment has regional limitations.
    
-   Fault tolerance must be manually configured.
    

-   Supports the [cross-zone high availability](/help/en/flink/realtime-flink/user-guide/high-availability-zone-disaster-recovery) feature in multiple [regions](/help/en/flink/realtime-flink/product-overview/regions-and-zones) to ensure business stability.
    
-   Supports automatic end-to-end fault tolerance, JobManager high availability, eliminating single-points-of-failure.
    
-   Supports checkpoint and savepoint management, state compatibility checks, and data migration to maximize the use of existing states.
    

Ensures stable operation of large-scale jobs, meeting enterprise-level production environment requirements.

Enterprise-level services

-   Users rely on the Apache Flink documentation, community, and other unofficial support.
    
-   No dedicated technical support team.
    

-   Provides 24/7 professional technical support, backed by Realtime Compute for Apache Flink engineers, with a 99.9% SLA.
    
-   Offers rapid response and supports customized features.
    
-   Provides continuous update, ongoing maintenance, and long-term version support.
    

Professional, trustworthy technical support to accelerate problem resolution and business deployment.

Security and access control

-   Basic authentication mechanisms like Kerberos.
    
-   Access control requires integration with external systems.
    

-   Implements Alibaba Cloud's [role-based access control](/help/en/flink/realtime-flink/user-guide/permission-management/).
    
-   Supports tenant-level and project-level isolation of resources and code files for cross-team collaboration.
    
-   Enhances credential security through [variable management](/help/en/flink/realtime-flink/user-guide/manage-keys).
    
-   Supports comprehensive action auditing, which tracks all changes in the production environment.
    

Offers a unified identity authentication system, ensuring data asset security and compliance.

Extensibility and ecosystem

-   Extends functionality through plug-ins.
    
-   Ecosystem depends on the Apache Flink community or developers.
    

-   Supports emerging use cases such as [AI and intelligent data analytics](/help/en/flink/realtime-flink/getting-started/integrate-with-alibaba-cloud-model-studio).
    
-   Supports integration with data lakes (Iceberg and Hudi) and data warehouses (ClickHouse, Hologres, and MaxCompute).
    
-   Provides [SDKs](/help/en/flink/realtime-flink/developer-reference/getting-started-with-alibaba-cloud-sdk-for-java) and [Restful APIs](/help/en/flink/realtime-flink/developer-reference/openapi-reference/) for secondary development.
    

Provides a flexible, extensible platform for diverse real-time use cases.

## Billing

Realtime Compute for Apache Flink has two billable items: management resources and computing resources.

It supports three billing methods:

-   [Subscription](/help/en/flink/realtime-flink/product-overview/subscription#concept-2121904): Secure dedicated resources for a fixed period.
    
-   [Pay-as-you-go](/help/en/flink/realtime-flink/product-overview/pay-as-you-go#task-2122870): Use resources on demand and pay for consumption.
    
-   [Hybrid billing](/help/en/flink/realtime-flink/product-overview/hybrid-pricing): Combine subscription resources with elastic, pay-as-you-go resources.
    

For more information, see [Billing](/help/en/flink/realtime-flink/product-overview/billing/).

## How to use the service

Log on to the [Realtime Compute for Apache Flink console](https://account.aliyun.com/login/login.htm?oauth_callback=https%3A%2F%2Frealtime-compute.console.alibabacloud.com%2F%3Fspm%3Da3c0i.20926439.3033916970.5.53a01a62uxWym5&lang=en) to use this service.

## References

-   [What is Realtime Compute for Apache Flink?](/help/en/flink/basic-information#section-arp-606-p0z)
    
-   [What is streaming data?](/help/en/flink/basic-information#section-9x5-3ui-1wy)
    
-   [What are the differences between real-time computing and batch processing?](/help/en/flink/basic-information#section-wmc-1s2-z2y)
