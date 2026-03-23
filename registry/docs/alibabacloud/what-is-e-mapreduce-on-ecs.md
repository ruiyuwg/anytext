EMR on ECS allows you to deploy E-MapReduce (EMR) clusters on Elastic Compute Service (ECS) instances. EMR on ECS combines the big data processing capabilities of EMR with the scalability and flexibility of ECS instances. This allows you to flexibly configure and manage EMR clusters. EMR on ECS also provides various open source and self-developed components to allow you to process and analyze massive data in complex scenarios.

## **Architecture**

EMR integrates Alibaba Cloud services and open source components and provides self-developed components and the cluster management feature. For information about the types and use scenarios of components, see [Components](/help/en/emr/emr-on-ecs/user-guide/component-operation-guide/) and [Use scenarios](/help/en/emr/emr-on-ecs/product-overview/application-scenarios).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8224622471/CAEQORiBgMCM.Ja7rBkiIDczYjcwNzAzZGZmZjQxNDM4MzhlOGQ2ZjVjOTcwYTg44886482_20250115111141.016.svg)

-   Alibaba Cloud services
    
    -   Clusters are deployed based on ECS instances.
        
    -   Data can be stored in Alibaba Cloud Object Storage Service (OSS).
        
    -   EMR is integrated with DataWorks. You can use EMR as a job computing and data storage engine in DataWorks.
        
    -   EMR Workflow is a fully managed service that you can use to schedule workflows and tasks.
        
-   Open source components
    
    Open source big data components related to data integration, data storage, resource management, compute engines, data development, and data service are integrated into EMR to help you process and manage data in an efficient manner.
    
-   Self-developed components
    
    EMR provides the following self-developed components to ensure that open source components and services can better run on the Alibaba Cloud infrastructure:
    
    -   OSS-HDFS: an object storage solution that is compatible with Hadoop Distributed File System (HDFS) APIs. OSS-HDFS enables big data computing tasks to directly access data stored in OSS based on a standard HDFS protocol.
        
    -   JindoCache: a distributed cache solution. JindoCache caches data blocks in memory to improve data read performance and reduce pressure on the underlying storage system.
        
    -   DLF-Auth: a component provided by Data Lake Formation (DLF). You can use DLF-Auth to enable the data permission management feature of DLF.
        
-   Cluster management
    
    -   You can quickly create or scale out clusters and configure auto scaling rules for clusters.
        
    -   You can manage configurations of a cluster and the services that are deployed in the cluster. You can also perform O&M operations on nodes and services.
        
    -   EMR provides the multi-dimensional metric monitoring, cluster report analysis, and monitoring and alerting capabilities.
        

## Benefits

EMR provides enterprise-level, open source big data components that are flexible and easy to manage. For information about the comparison between EMR clusters and self-managed Hadoop clusters, see [Comparison between EMR clusters and self-managed Hadoop clusters](/help/en/emr/emr-on-ecs/product-overview/comparison-between-emr-clusters-and-self-managed-hadoop-clusters).

-   Stable and reliable open source components
    
    -   Open source components are used. Each EMR version provides the latest versions of open source components. For more information about the services that are supported by EMR clusters of different versions, see [Release version](/help/en/emr/emr-on-ecs/product-overview/emr-on-ecs-release-version/).
        
    -   EMR is fully adapted to open source components and has eliminated the version compatibility issues among open source components.
        
    -   EMR provides an enhanced Alibaba Cloud deployment environment for open source components. The enhanced deployment environment delivers much higher performance than that in the open source community.
        
-   Ease of use
    
    -   You can create a big data computing environment within minutes and adjust the computing resource scale with a few clicks. You do not need to manually deploy or start services.
        
    -   EMR provides a comprehensive monitoring and alerting system that supports intelligent diagnosis and analysis. This greatly reduces the difficulty of troubleshooting issues and improves O&M efficiency.
        
-   Cost-effectiveness
    
    -   Computing resources are used on demand to help reduce costs.
        
    -   Hot and cold data is stored at different layers to help reduce the unit storage cost.
        
    -   EMR provides various O&M tools, the intelligent diagnosis and analysis feature, and big data platforms to help you reduce O&M costs.
        
-   Scalability
    
    -   Cluster resources can be dynamically adjusted by cluster load or in the specified period of time.
        
    -   Auto scaling for clusters can be completed within minutes, and multiple elastic resource types are supported.
        
-   Deep integration
    
    -   You can deploy EMR clusters based on ECS and Container Service for Kubernetes (ACK). Various ECS instance types are supported. For more information, see [ECS instances](/help/en/emr/ecs-instances#concept-axl-5m3-y2b).
        
    -   EMR is integrated with DataWorks. You can use EMR as a job computing and data storage engine in DataWorks.
        
    -   DLF is integrated with EMR. In data lake scenarios, EMR allows you to manage metadata for multiple engines in a centralized manner.
        

## Billing

Fees of an EMR on ECS cluster consist of fees for the EMR service and ECS instances. For information about the fees for other Alibaba Cloud services that are involved in an EMR on ECS cluster, such as OSS, DLF, and Workflow, see the documentation about the billing rules of the related Alibaba Cloud services.

EMR on ECS supports the following billing methods:

-   [Subscription](/help/en/emr/emr-on-ecs/product-overview/subscription): You pay for resources based on a specific subscription duration before you can use the resources. The subscription billing method allows you to reserve resources in advance and reduce costs with discounted rates.
    
-   [Pay-as-you-go](/help/en/emr/emr-on-ecs/product-overview/pay-by-volume): You can use resources before you pay for the resources. You can purchase and release resources based on your business requirements. You do not need to purchase a large number of resources in advance.
    

By default, you are charged for the Internet traffic generated by using the nodes in a cluster based on the pay-as-you-go billing method instead of the billing method of the cluster.

For more information, see [Billing](/help/en/emr/emr-on-ecs/product-overview/billing-overview/).

## **Quick Start**

-   For information about how to create a cluster in the EMR console and run jobs in the cluster, see [Getting started with EMR](/help/en/emr/emr-on-ecs/getting-started/quick-start-for-emr).
    
-   For information about how to use an EMR cluster in DataWorks and develop and govern data lakes in a centralized manner, see [Getting started with DataWorks on EMR](/help/en/emr/emr-on-ecs/getting-started/getting-started-with-dataworks-on-emr/).
    

## **References**

-   For information about the use scenarios of EMR, see [Use scenarios](/help/en/emr/emr-on-ecs/product-overview/application-scenarios).
    
-   For information about the services and service versions supported by EMR clusters of different versions, see [Services supported by EMR clusters of different versions](/help/en/emr/components-supported-by-versions).
    
-   For information about the O&M and monitoring capabilities of EMR clusters, see the topics in the [Cluster O&M](/help/en/emr/emr-on-ecs/user-guide/cluster-maintenance/) and [Cluster monitoring](/help/en/emr/emr-on-ecs/user-guide/cluster-monitoring/) directories.
