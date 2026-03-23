Alibaba Cloud's open big data platform, E-MapReduce (EMR), offers several product forms to meet various business needs. These forms, categorized by deployment mode, include EMR Serverless Spark, EMR Serverless StarRocks, EMR on ECS, and EMR on ACK. This topic describes the main features, use cases, and selection recommendations for each product form to help you choose the right one.

## EMR Serverless Spark

EMR Serverless Spark is a high-performance lakehouse product for Data+AI applications. It leverages Fusion Engine, a Spark-native engine, and Alibaba Cloud's serverless foundation to provide a one-stop service for job development, debugging, publishing, scheduling, and operations and maintenance (O&M).

### **Key features**

-   **Enterprise-grade fully managed data platform**: You can start job development without building your own infrastructure. It provides a full range of features, from task development and debugging to O&M.
    
-   **High-performance compute engine**: The built-in Fusion Engine delivers performance up to four times higher than open source Spark. It supports the Remote Shuffle Service Celeborn, which provides petabyte-level shuffle capabilities and reduces computing costs.
    
-   **High scalability and elasticity**: Built on Alibaba Cloud's serverless foundation, it provides automatic scaling of resources in seconds. You are billed for the computing resources you use, which reduces costs.
    
-   **Resource observability and security**: Provides job-level and resource-level monitoring and alerts. It is deployed based on a VPC and supports fine-grained access control.
    
-   **Open architecture and ecosystem integration**: Seamlessly integrates with OSS-HDFS, Data Lake Formation (DLF), and DataWorks. It supports the separation of computing and storage and lets you share centralized metadata.
    
-   **One-stop development experience**: Provides built-in version management and isolation between development and production environments. It supports job development, debugging, publishing, and scheduling.
    

### **Scenarios**

-   Running Spark jobs using a fully managed service without having to manage cluster resources.
    
-   Scenarios that require high elasticity and on-demand billing to quickly obtain computing resources during sudden job peaks.
    
-   Scenarios that require a high-performance Spark and a data lakehouse platform to support data lakes for data lakehouse or AI workloads.
    

## EMR Serverless StarRocks

EMR Serverless StarRocks is a cloud-native, fully managed lakehouse analytics service. It is 100% compatible with open source StarRocks and provides enterprise-grade core features. The service is suitable for various scenarios, such as OLAP, real-time data warehousing, lakehouse analytics, and building lightweight data warehouses. It helps enterprises implement real-time data analytics services in a data lakehouse architecture.

### Key features

-   **Fully managed and O&M-free**: Ready to use out of the box. It provides visual instance management, intelligent monitoring, and health diagnostics to significantly reduce O&M costs.
    
-   **Enterprise-grade cloud-native kernel (Stella)**: Based on a decoupled storage and compute architecture, it is deeply optimized for performance and stability in this architecture and for lakehouse analytics. It supports isolation for multiple compute groups to ensure resource isolation for critical services.
    
-   **One-stop data management platform**: Integrates features such as an SQL editor, permission control, materialized views, import tasks, and SQL diagnostics to improve development and management efficiency.
    
-   **High-speed query performance**: The Massively Parallel Processing (MPP) distributed architecture and fully vectorized execution engine improve query performance by 3 to 10 times.
    
-   **Intelligent query optimization**: The cost-based optimizer (CBO) automatically selects the optimal execution plan to improve the efficiency of complex queries.
    
-   **Real-time data updates**: Columnar storage supports data import in seconds, atomicity, consistency, isolation, and durability (ACID) transactions, and efficient upserts to meet real-time analytics needs.
    
-   **Data lakehouse analytics**: Intelligent materialized views are automatically synchronized to simplify the extract, transform, and load (ETL) process. It natively supports efficient queries on data lake formats such as Paimon, Iceberg, Hudi, Delta Lake, and Hive.
    

### **Scenarios**

-   **Multidimensional OLAP analysis**: Supports flexible multidimensional analysis and ad hoc queries. It is widely used in scenarios such as operations reports, user personas, metric platforms, and BI analytics to help you make data-driven decisions.
    
-   **Real-time data warehouse**: Provides data ingestion and updates in seconds. It is suitable for business scenarios that require low latency, such as real-time inventory monitoring, order tracking, user behavior analysis, and real-time risk control.
    
-   **Lakehouse processing and analytics**: Seamlessly connects to data lake storage such as OSS and HDFS. It lets you directly query formats like Paimon and Iceberg, breaking down data silos and enabling efficient, unified analytics.
    

## EMR on ECS

EMR on ECS is a deployment mode where E-MapReduce runs on Alibaba Cloud Elastic Compute Service (ECS) instances. In this mode, EMR uses elastic ECS instances to install and deploy the open source Hadoop ecosystem on cloud servers. It also provides management features such as cluster creation, scaling, service configuration, and monitoring.

### **Key features**

-   **Rich components**: Integrates open source components such as Hadoop, Spark, Hive, Flink, and Presto, along with proprietary components such as OSS-HDFS, JindoCache, and DLF-Auth. It is suitable for various scenarios, including batch processing, stream processing, and data lakes.
    
-   **Flexible and controllable**: You can log on to ECS instances to perform custom operations. It provides capabilities for rapid cluster creation, automatic scaling, configuration management, and visual O&M.
    
-   **Stable and easy to use**: Uses 100% community open source components optimized for the cloud environment to improve performance and avoid version compatibility issues. You can set up a big data computing environment in minutes and adjust the resource scale with a single click.
    
-   **Cost-effective**: It lets you use computing resources on demand and supports subscription or pay-as-you-go billing methods. It provides automatic tiered storage of hot and cold data and a rich set of O&M tools to reduce total costs.
    
-   **Automatic scaling**: You can dynamically adjust the cluster size based on time or workload. It supports multiple types of elastic resources.
    
-   **Deep integration**: Deeply integrates with Alibaba Cloud services such as OSS, DataWorks, and DLF. You can use EMR as the compute engine for jobs in DataWorks.
    

### **Scenarios**

-   Enterprise-grade big data platforms that require full control over computing and storage resources.
    
-   Customization requirements for deployment environments and configurations, such as installing specific open source components or adjusting kernel parameters.
    
-   Scenarios that require a balance between cost and performance, and support for long-running batch jobs or mixed workloads.
    

## EMR on ACK

EMR on ACK is a deployment architecture where open source big data services are deployed on Alibaba Cloud Container Service for Kubernetes (ACK). You must first have an ACK cluster. Then, you can use EMR to install and run big data services on the ACK resources.

### **Key features**

-   **Shared Kubernetes cluster resources**: You can run jobs such as Spark and Presto on an existing ACK cluster. You can share container resources with online services and share computing resources across zones.
    
-   **Cost-saving**: You do not need to purchase a separate ACK cluster. You can reuse idle resources of the ACK cluster to run EMR jobs with a single click. This is suitable for hybrid deployments of online and offline services.
    
-   **Simplified O&M**: You can manage online applications and big data tasks through a unified O&M system. You can use the capabilities of ACK and Elastic Container Instance (ECI) to obtain elastic computing resources more quickly.
    
-   **Optimized experience**: It supports adjusting the Spark version at the job level to quickly experiment with new features. It supports seamless switching between ECS and ACK resource models.
    
-   **Deep integration with data lake architecture**: Adopts a cloud-native data lake architecture. It uses ACK for computing and OSS for storage to achieve separation of storage and computing. Metadata is managed by DLF.
    

### **Scenarios**

-   You already have an ACK cluster and want to run big data tasks and online applications on the same cluster to achieve resource pooling and elastic scheduling.
    
-   Scenarios with high demand for containerized management, requiring a combination of Kubernetes elasticity and the cloud-native ecosystem (such as CI/CD, service mesh, and microservices).
    
-   Scenarios where you want to quickly build a data lake architecture and use DLF to manage metadata.
    

## Selection recommendations

**Business need**

**Recommended product form**

**Reason**

**Product O&M scope**

**Large-scale Spark jobs, AI training, and inference**

> Requires elasticity in seconds, pay-as-you-go billing, and data lakehouse capabilities.

**EMR Serverless Spark**

-   The Fusion Engine delivers performance up to four times higher than open source Spark, making it suitable for complex data lakehouse and AI tasks.
    
-   The serverless foundation provides automatic scaling in seconds and bills based on actual usage.
    
-   No cluster O&M is required. It provides a one-stop experience for job development, debugging, publishing, and scheduling.
    
-   Deeply integrated with OSS-HDFS, DLF, and DataWorks.
    

-   Alibaba Cloud is responsible for the availability and reliability of the underlying computing and storage resources, and job scheduling services.
    
-   You only need to focus on job logic and data development.
    

**OLAP, lakehouse processing, and analytics**

> Requires high-concurrency queries, multidimensional analysis, and compatibility with the MySQL protocol.

**EMR Serverless StarRocks**

-   Provides an optimal data analytics service using technologies such as vectorization, an MPP architecture, and a new CBO.
    
-   Cross-engine federated queries, compatibility with multiple data lake formats, and intelligent materialized views provide a unified engine for lakehouse processing and analytics.
    
-   The cloud-native and fully managed service form improves usability and O&M efficiency.
    

-   Stability and service assurance for the StarRocks console and OpenAPI.
    
-   Stability and service assurance for the nodes running in StarRocks instances.
    
-   Stability and service assurance for the services within the StarRocks software stack.
    

**Custom environments and long-running offline jobs**

> Requires full control over cluster resources and configurations.

**EMR on ECS**

-   Provides comprehensive management and control capabilities for clusters and component services, including but not limited to ECS fault compensation, automatic scaling, and intelligent diagnostics.
    
-   Integrates rich components such as Hadoop, Spark, Flink, and Presto to support scenarios such as batch processing, stream processing, and data lakes.
    
-   Flexible costs. It supports subscription or pay-as-you-go billing methods.
    
-   High stability. You can set up a big data environment in minutes.
    

-   The EMR service provides cluster and component management features and big data component version management, but you are responsible for the O&M of big data components.
    
-   Suitable for enterprises with knowledge and capabilities in big data component O&M.
    

**Reuse container resources, hybrid deployment of online and offline services**

> You already have a Kubernetes (ACK) cluster.

**EMR on ACK**

-   Reuses existing ACK resources, so you do not need to purchase additional clusters.
    
-   Supports the hybrid operation of online services and big data tasks to reduce costs.
    
-   Uses ACK elasticity and ECI for faster scaling.
    
-   Suitable for enterprises that have established a containerized architecture, but it is not recommended as the first choice.
    

-   The stability of big data components (such as Spark and Presto) depends more on your own management.
    
-   Suitable for enterprises with knowledge and capabilities in big data component O&M.
