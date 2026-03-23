E-MapReduce (EMR) is a big data processing solution provided by Alibaba Cloud. EMR is developed based on open source Apache Hadoop and Apache Spark. EMR allows you to use peripheral systems in the Hadoop and Spark ecosystems to analyze and process data with ease. EMR can also read data from or write data to other Alibaba Cloud storage systems and database systems, such as Object Storage Service (OSS) and ApsaraDB RDS.

## Product introduction

Alibaba Cloud provides EMR on ECS, EMR on ACK, and EMR Serverless StarRocks to meet the business requirements of different users.

**Item**

**Description**

EMR on ECS

When you create an EMR cluster, the EMR system deploys components of the open source Hadoop ecosystem on Elastic Compute Service (ECS) instances based on your configurations and starts the components as services in the cluster. You can perform O&M operations on the services and ECS instances of the EMR cluster in the EMR console.

For more information about EMR on ECS, see [What is EMR on ECS?](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs)

EMR on ACK

Before you use EMR on ACK, make sure that an ACK cluster is deployed. After the ACK cluster is deployed, you can create an EMR cluster to deploy big data components based on ACK resources and run the components in related containers. For more information about EMR on ACK, see [What is EMR on ACK?](/help/en/emr/emr-on-ack/product-overview/what-is-emr-on-ack#concept-2097538)

EMR Serverless Spark

E-MapReduce (EMR) Serverless Spark is a high-performance lakehouse service for data and AI scenarios. It provides end-to-end data platform services for enterprises, such as job development, debugging, scheduling, and O&M. This significantly simplifies data processing and model training workflows. EMR Serverless Spark is also fully compatible with the open source Spark ecosystem and can be seamlessly integrated with an existing customer-side data platform. EMR Serverless Spark helps enterprises improve efficiency by focusing on data processing and analysis and optimization of model training.

For more information about EMR Serverless Spark, see [What is a EMR Serverless Spark?](/help/en/emr/emr-serverless-spark/product-overview/what-is-emr-serverless-spark).

## **Benefits**

### **EMR on ECS**

EMR allows you to easily deploy enterprise-level open source big data services, such as Hadoop, Spark, Flink, Kafka, and HBase.

-   All components in EMR are open source. EMR adapts to and optimizes open source components and provides higher performance than the open source versions of the components.
    
-   Preemptible instances can help reduce costs based on the time-based auto scaling capability.
    
-   Computing and storage are decoupled to support the elastic use of resources.
    
-   You can create or scale out a cluster within minutes. You do not need to manually deploy or start services.
    

### **EMR on ACK**

-   Cost-effectiveness: You do not need to purchase ACK clusters.
    
-   Simplified O&M: An O&M system and a cluster management system are provided for both big data and online business.
    
-   Optimized user experience: The EMR console provides the following Infrastructure as a Service (IaaS) models: EMR on ECS and EMR on ACK. You can seamlessly switch between the two models.
    
-   Deep integration: EMR on ACK adopts a cloud-native data lake architecture. The architecture integrates ACK to scale out computing resources without a limit.
    

### EMR Serverless Spark

-   Cloud-native compute engines that compute data at an ultra-high speed
    
    -   Built-in Fusion Engine (formerly Spark Native Engine) enables 300% higher performance than open source Spark.
        
    -   Built-in Celeborn (formerly Remote Shuffle Service) supports petabytes of shuffled data. This reduces the total costs of computing resources by up to 30%.
        
-   Open data lake architecture
    
    -   Compute-storage separation, scalable computing resources, and pay-as-you-go storage are supported.
        
    -   This service is integrated with OSS-HDFS and is fully compatible with the cloud storage of HDFS. This allows you to seamlessly migrate business to the cloud.
        
    -   The centralized DLF metadata service is provided to integrate metadata in data lakes and data warehouses.
        
-   End-to-end development
    
    -   End-to-end data development is supported, covering the development, debugging, publishing, and scheduling of jobs.
        
    -   Built-in version management and isolation between the development and production environments are supported to meet enterprise standards for development and publishing.
        
-   Serverless resource platform
    
    -   The out-of-the-box service frees you from the need to manually manage and maintain cloud infrastructure.
        
    -   Resources are automatically scaled and provided within seconds.
        
    -   Computing resources are billed based on the pay-as-you-go method. This reduces the total costs of resources.
