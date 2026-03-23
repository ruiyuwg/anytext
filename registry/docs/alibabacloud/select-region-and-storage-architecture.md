In Alibaba Cloud E-MapReduce (EMR), the region and storage configurations of an EMR cluster directly affect the cluster performance and cost. An appropriate region helps you reduce network latency, meet data localization requirements, and reduce resource costs. Proper storage configurations, such as use of HDFS, Object Storage Service (OSS), or OSS-HDFS, help you improve data read and write efficiency, reduce storage costs, and ensure data reliability. This topic provides strategies and key factors to help you quickly select a region and plan storage configurations.

## **Region selection strategy**

You can select a region based on the core factors described in the following table to ensure an optimal match between your business and required resources.

**Factor**

**Description**

Data localization (higher priority)

-   We recommend that the region of your cluster is the same as the region of the data source in which you want to store data. For example, the data source can be OSS or ApsaraDB RDS.
    
-   Reasons for the recommendation:
    
    -   Reduce network costs: Cross-region data transmission incurs additional fees.
        
    -   Reduce latency: Local deployment of clusters can improve data read and write efficiency.
        

EMR service availability

-   Check whether EMR is available in the desired region in the EMR console.
    
-   Check whether required cloud services are available in the desired region. For example, OSS-HDFS or Data Lake Formation (DLF) are not available in specific regions.
    
-   Check whether the required instance type is available in the desired region. For example, instance types with local SSDs are only available in specific regions.
    

Price differences of ECS instances

The pricing of Elastic Computing Service (ECS) instances varies based on the region that you select. For more information, see [ECS Price Calculator](https://www.alibabacloud.com/zh/pricing-calculator?_p_lc=1#/commodity/vm_intl).

Service topology optimization

-   Hybrid cloud scenarios: We recommend that you select a region that is closest to the access point of your data center to reduce network latency.
    
-   Multi-service collaboration: Make sure that EMR is deployed in the same region as specific services, such as Virtual Private Cloud (VPC), Server Load Balancer (SLB), database service, or other services, to reduce fees caused by cross-region operations.
    

**Regions that** **s****upport EMR:**

-   **Asia Pacific - China**
    
    China (Hangzhou), China (Shanghai), China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Shenzhen), China (Chengdu), and China (Hong Kong)
    
-   **Asia Pacific - Others**
    
    Japan (Tokyo), Singapore, Malaysia (Kuala Lumpur), and Indonesia (Jakarta)
    
-   **Europe and America**
    
    Germany (Frankfurt), UK (London), US (Silicon Valley), and US (Virginia)
    
-   **Middle East**
    
    UAE (Dubai)
    

## **Storage planning**

### **Storage architecture selection**

EMR supports the compute-storage separation and compute-storage integration architectures. OSS-HDFS and OSS adopt the compute-storage separation architecture, and HDFS adopts the compute-storage integration architecture. You can select a storage architecture based on your data requirements and cost budget. The following table describes the differences between the architectures.

**Comparison item**

**Compute-storage separation (OSS-HDFS or OSS)**

**Compute-storage integration (HDFS)**

Characteristic

-   Computing and storage resources can be scaled independently, and data is persistently stored in OSS-HDFS or OSS.
    
-   OSS-HDFS and OSS are fully compatible with the HDFS API. This allows you to seamlessly migrate and use data.
    

Computing and storage resources are integrated, and data is stored in HDFS deployed in an EMR cluster.

Scenario

-   The data lake architecture is used.
    
-   Cold data analysis is required.
    

Low-latency reads and writes are required.

Data reliability

-   OSS supports locally redundant storage (LRS) and zone-redundant storage (ZRS), and provides cross-zone high reliability.
    
-   Cloud storage can greatly reduce the risk of data loss.
    

-   This architecture relies on the replica mechanism. By default, three replicas are configured for local disks, and two replicas are configured for cloud disks. Replicas can be configured only inside the cluster, and cross-region disaster recovery capabilities are not provided.
    
-   Data loss may occur due to hardware failures.
    

Data durability

-   99.9999999999% (twelve nines) data durability is provided.
    
-   Data is retained for a long period of time after an EMR cluster is released.
    

Data is deleted after an EMR cluster is released.

Scaling flexibility

Computing and storage resources are separated. This allows you to independently add compute nodes (CNs).

Computing and storage resources are integrated. This way, you must adjust the computing and storage resources at the same time.

-   Nodes need to be removed one by one, which takes a long period of time.
    
-   Rebalancing is required when you scale our an EMR cluster, which consumes resources and time.
    

Storage cost (example)

USD 0.0170 per GB-month (OSS Standard storage)

**Note**

-   In addition to user data, OSS-HDFS also generates auxiliary data, which incurs additional OSS storage fees. For more information, see [Storage capacity usage of OSS-HDFS](/help/en/oss/user-guide/oss-hdfs-service-storage-space-usage-instructions).
    
-   For information about the billable items of OSS, see [Billing](/help/en/oss/billing-overview).
    
-   For information about the pricing of OSS, see [Object Storage Service (OSS)](https://www.alibabacloud.com/product/oss/pricing).
    

USD 0.051 per GiB-month

**Note**

-   For information about the billable items of Elastic Block Storage (EBS) devices, see [Block storage devices](/help/en/ecs/block-storage-devices#title-9mt-h9r-xvh).
    
-   For information about the pricing of EBS devices, see [Elastic Compute Service](https://www.alibabacloud.com/product/ecs).
    

O&M complexity

-   CNs are stateless and can be quickly replaced in case of failures.
    
-   Storage capacity can be infinitely expanded without the need to manually adjust the cluster size as the data scale increases.
    

-   When a DataNode fails, you need to manually rebalance data.
    
-   Manual adjustment of cluster size is required during scaling.
    

Access method

You can access OSS or OSS-HDFS by using `oss://bucket-name.endpoint/path/to/data`.

For more information, see [Getting started](/help/en/emr/emr-on-ecs/user-guide/getting-started-4).

-   You can access HDFS in a high-availability (HA) cluster by using `hdfs://namespace/path`.
    
-   You can access HDFS in a non-HA cluster by using `hdfs://namenode-host:port/path`.
    

### **Disk selection**

EMR provides system disks and data disks for nodes in an EMR cluster.

**Disk type**

**Description**

[Supported disk type](#e615b52805wgj)

System disk

System disks are used to install operating systems and do not store business data.

[Cloud disks](#b4b822a54fllm)

Data disk

Data disks are used to store data, local logs, and shuffled data. You can evaluate the capacity based on the storage architecture that you select. For more information, see [Storage capacity evaluation](#14ab5190d5ux9).

**Note**

With the same storage capacity, you can configure multiple data disks to improve service availability. If you configure multiple data disks, specific services can provide the fault tolerance capability, and the overall functionality of data disks is not affected in case of a disk failure.

-   [Cloud disks](#b4b822a54fllm)
    
-   [Local disks](#2ff97dc84e3hf)
    

**Disk types**

EMR provides the following types of disks for you to store data.

## Cloud disks

Cloud disks are block-level data storage devices provided by Alibaba Cloud for ECS. Cloud disks use a distributed triplicate mechanism to achieve 99.9999999% (nine nines) data reliability for ECS instances.

Cloud disks are classified into standard SSDs, ultra disks, and enhanced SSDs (ESSDs) based on the disk performance.

**Disk type**

**Characteristic**

**Scenario**

[ESSD](/help/en/ecs/user-guide/essds#concept-727754)

-   High IOPS and throughput
    
-   Millisecond-level latency (0.2 ms)
    
-   High reliability
    
-   Support of multiple performance levels from PL0 to PL3
    
    **Note**
    
    For more information about the performance levels of an ESSD, see [ESSDs](/help/en/ecs/user-guide/essds).
    

Latency-sensitive applications or I/O-intensive business scenarios:

-   Large-scale online transaction processing (OLTP) databases
    
-   NoSQL databases
    
-   Elasticsearch distributed logs
    

Standard SSD

-   Relatively high IOPS and throughput
    
-   Millisecond-level latency that ranges from 0.5 to 2 ms
    
-   High reliability
    

-   I/O-intensive applications
    
-   Small and medium-sized relational databases and NoSQL databases
    

Ultra disk

-   Medium IOPS and throughput
    
-   Millisecond-level latency from 1 to 3 ms
    
-   High reliability
    

-   Development and testing
    
-   Used as system disks
    

**Note**

For information about the performance of cloud disks and local disks, see [Block storage performance](/help/en/ecs/user-guide/block-storage-performance#section-0hu-6dh-p6f).

## Local disks

[Local disks](/help/en/ecs/user-guide/local-disks#section-hdp-m2w-ydb) provide local storage for ECS instances and reside on the physical machines that host the instances. Local disks are suitable for scenarios that require high storage I/O performance and high cost-effectiveness for massive data storage.

### **Scenarios**

When you configure a node group in the EMR console, if you set the **Type** parameter to **Big Data** or **Local SSD**, the data disks are the physically connected local disks that are directly attached to the server and provide extremely low latency and high throughput.

**Note**

-   Local disks are only suitable for core and task nodes.
    
-   If you use local disks as data disks, data loss may occur. We recommend that you configure backup policies when you use local disks to store big data.
    

**Storage capacity evaluation**

After you select the storage architecture, you must evaluate the required storage capacity based on the scale and growth trend of your business data. This helps you ensure that disk configuration meets your business requirements.

**Data type**

**Description**

**Calculation rule**

Raw data

Initial data directly generated by your business, such as logs

Required storage space = Raw data volume

Intermediate data

Temporary data generated during processing, such as the result of extract, transform, load (ETL) operations

Required storage space = Raw data volume × 1.5 (adjust based on your business complexity)

Result data

Final output data that needs to be stored

Required storage space = Raw data volume × A value that ranges from 10% to 50% (adjust based on your business requirements)

When you evaluate the required storage capacity, you must consider the data growth at least in the subsequent 6 months.

-   **Compute-storage integration (HDFS)**
    
    You need to evaluate the data disk capacity based on raw data, intermediate data, result data, and replica redundancy (3 replicas by default).
    
-   **Compute-storage separation (OSS-HDFS or OSS)**
    
    Business data is persistently stored in OSS. Data disks are only used to store temporary computing results, local logs, and shuffled data of tasks.
