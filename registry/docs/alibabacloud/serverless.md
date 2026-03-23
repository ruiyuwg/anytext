Serverless is a dynamic scaling feature of the cloud-native database PolarDB. It allows nodes in a cluster to scale elastically within seconds to handle sudden workload surges. This scaling process occurs without affecting your business operations. During periods of low workloads, resources are automatically scaled down to reduce costs.

## **Background**

Databases are a vital component of modern IT systems. When you create a database, you must carefully configure its resources, such as CPU, memory, storage, and connections. This configuration is intended to ensure that your business runs smoothly during both peak and off-peak hours. However, this approach often wastes resources and increases costs during periods of low demand. Conversely, during periods of high demand, the cluster may lack sufficient resources to handle the increased load. Serverless databases address this issue. They automatically scale resources up or down based on the current workload, which eliminates the need for complex resource planning and Operations and Maintenance (O&M) tasks.

The following figure compares the resource usage and specification changes of common clusters and Serverless clusters in scenarios with fluctuating workloads.

![p550765.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0293247371/p775882.png)

The figure shows the following differences in scenarios with fluctuating workloads:

-   Common clusters: Waste resources during off-peak periods and have insufficient resources during peak periods. This can negatively impact your business.
    
-   Serverless clusters:
    
    -   Adjust specifications based on business demand. This reduces resource waste, improves resource utilization, and lowers overall resource usage.
        
    -   Quickly scale cluster resources to meet business needs during peak hours. This ensures business continuity and improves system stability.
        
    -   Break the fixed-resource payment model. The pay-as-you-go model dynamically matches resources with workloads, which can lead to significant cost savings.
        
    -   Are optimized for high-throughput write and high-concurrency scenarios and provide elastic scaling. This makes them suitable for scenarios that involve large data volumes and fluctuating business access patterns.
        
    -   Do not require manual configuration adjustments. This improves O&M efficiency and saves on labor and time costs.
        

## **Overview**

The Serverless feature provides real-time elasticity for CPU, memory, storage, and network resources. It offers vertical resource isolation for network resources, namespaces, and storage space. It also provides on-demand billing for compute and storage resources. This lets you flexibly allocate, and independently and quickly adjust, compute and storage capacity to respond to business changes. This helps optimize costs, reduce expenses, and improve enterprise efficiency.

**Item**

**Description**

**Implementation model**

-   **Serverless clusters**: clusters whose billing method is Serverless.
    
-   **Serverless feature of clusters with defined specifications**: clusters whose billing method is subscription or pay-as-you-go when created and later have the serverless feature manually enabled.
    
    > Defined specifications refer to the specifications of compute nodes you select after you set Billing Method to Subscription or Pay-as-you-go.
    

**Scaling method**

-   **Scale-up/down**: the change of the CPU and memory of compute nodes in a cluster.
    
-   **Scale-in/out**: the change of the number of read-only nodes in a cluster.
    

**PCU** **(PolarDB Capacity Unit)**

PCUs are the unit for second-level billing and resource scaling for the serverless feature. One PCU is approximately equal to 1 core and 2 GB of memory. The PCUs of a node is dynamically adjusted within the specified range based on the workloads. The minimum granularity for scaling is 0.5 PCUs.

### **Presentation**

**Serverless cluster**

**Serverless feature of a cluster with defined specifications**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7478258671/CAEQNRiBgMDS2f7dqRkiIDU4NWY0MTg1NGQ1MzQ4YmJhOWY4OTllY2Q1MGYyOWRi4577196_20240806153837.916.svg)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7478258671/CAEQUBiBgICogLis2RkiIDE0ZWM1Y2UyN2Q0YjQ5MGRhMDRkY2NkNzExZTcxMTE04577196_20240806161152.160.svg)

-   **Database Proxy**
    
    -   The database proxy is Serverless. Its resources are independent of the compute nodes and scale elastically and automatically.
        
    -   By default, scaling occurs in increments of 0.5 PCU. The scaling increment is dynamically adjusted based on current PolarDB Capacity Unit (PCU) usage. A higher PCU usage results in a larger scaling increment.
        
-   **Compute nodes**
    
    -   The primary node (RW node) and read-only nodes (RO nodes) are fully serverless. They scale elastically with business workloads and use shared storage in a single availability zone.
        
    -   When the primary node or read-only nodes scale out or in, the number of PCUs for the node increases or decreases accordingly.
        
    -   By default, scaling occurs in increments of 0.5 PCU. The scaling increment is dynamically adjusted based on current PCU usage. A higher PCU usage results in a larger scaling increment.
        
    -   You can set the elastic scaling range for a single node in PCUs. The system monitors the PCU of a compute node every second.
        

-   **Storage space**
    
    Storage is pay-as-you-go. You do not need to specify a capacity when you purchase the cluster. The storage space scales automatically as your data volume increases. You are charged only for the storage space that you use. You can view the **Database Storage Usage** on the **Basic Information** page of the cluster. For more information, see [View database storage usage](/help/en/polardb/polardb-for-postgresql/view-the-database-storage-usage-of-a-cluster).
    

**Note**

A serverless cluster supports a maximum of 100,000 connections and a maximum IOPS of 84,000.

-   **Database proxy**
    
    -   The database proxy consists of two parts: defined specifications and Serverless. The defined specifications part is the default, while the Serverless part scales elastically based on the service workload.
        
    -   By default, scaling occurs in increments of 0.5 PCU. The scaling increment is dynamically adjusted based on current PCU usage. A higher PCU usage results in a larger scaling increment.
        
-   **Compute nodes**
    
    -   The primary node (RW node) and read-only nodes (RO nodes) include resources with defined specifications and serverless resources. The resources with defined specifications do not scale, whereas the serverless resources scale based on workloads.
        
    -   When the primary node or read-only nodes scale out or in, the number of PCUs for the node increases or decreases accordingly.
        
    -   By default, scaling occurs in increments of 0.5 PCU. The scaling increment is dynamically adjusted based on current PCU usage. A higher PCU usage results in a larger scaling increment.
        
    -   You can set the elastic scaling range for a single node in PCUs. The system monitors the PCU of a compute node every second.
        

-   **Storage space**
    
    The storage of the cluster with defined specifications is used. For more information, see [Storage space](/help/en/polardb/polardb-for-oracle/billing-methods-for-storage-1/).
    

**Note**

After you enable the serverless feature for a cluster with defined specifications, the maximum number of connections and the maximum IOPS for the cluster are proportional to the value of the serverless **Maximum Resources for a Single Node** parameter.

### **Auto scaling**

#### **Triggers for scaling up and scaling out**

-   **Scale-up (upgrading nodes)**
    
    PolarDB monitors the CPU usage, memory usage, and other kernel metrics of the primary and read-only nodes. A scale-up is triggered for a node during a monitoring period if one of the following conditions is met:
    
    -   The CPU usage is higher than the preset threshold (default: 85%).
        
    -   The memory usage is higher than 85%.
        
    -   The specifications of a read-only node are less than half of the primary node's specifications.
        
        For example, if a read-only node is 4 PolarDB Compute Units (PCUs) and the primary node is 10 PCUs, the read-only node is scaled up to at least 5 PCUs.
        
-   **Scale-out (adding nodes)**
    
    If a read-only node in a cluster is scaled up to its configured limit but still meets the conditions for a scale-up, such as CPU usage higher than the preset threshold, a scale-out is triggered to add more read-only nodes.
    

#### **Triggers for scaling down and scaling in**

-   **Scale-down (downgrading nodes)**
    
    A scale-down is triggered for a node when its CPU usage is lower than the preset threshold (default: 55%) and its memory usage is lower than 40%.
    
-   **Scale-in (removing nodes)**
    
    A scale-in is triggered to remove a read-only node if its CPU usage stays below 15% and the CPU usage of all other read-only nodes stays below 60% for 15 to 30 minutes.
    
    **Note**
    
    -   To prevent node jitter, only one read-only node is removed at a time. The cool-down period between consecutive scale-in events is 15 to 30 minutes.
        
    -   To immediately remove all read-only nodes, modify the **Serverless Configuration**. Set both the **Maximum Read-only Nodes** and **Minimum Read-only Nodes** to 0. This action immediately triggers the removal of all read-only nodes.
        
    

**Note**

The thresholds described are default values. They may vary depending on the cluster's kernel parameters and Serverless configuration policies.

## **Benefits**

Serverless dynamically scales cluster resources in seconds based on the business workload. Its core benefits are as follows:

-   **High availability**
    
    The multi-node architecture ensures the high availability and stability of Serverless clusters.
    
-   **High elasticity**
    
    -   Wide scaling range: Supports automatic vertical and horizontal scaling.
        
    -   Scaling within seconds: Handles sudden workload spikes. Detection is completed in 5 seconds and a scale-out is completed in 1 second. When the workload decreases, cluster resources are automatically released in tiers.
        
-   **Strong data consistency**
    
    Supports [global consistency](/help/en/polardb/polardb-for-postgresql/global-consistency) to ensure strong data consistency within the cluster. Data written to the cluster is immediately readable on read-only nodes. The performance is nearly identical to that of weak consistency.
    
    **Note**
    
    The global consistency feature is disabled by default. You can manually enable the feature for the cluster endpoint. For more information, see [global consistency](/help/en/polardb/polardb-for-postgresql/global-consistency).
    
-   **Cost-effectiveness**
    
    Serverless clusters are billed in PCUs on a pay-as-you-go basis. This can reduce your costs by up to 80%.
    
-   **Fully managed**
    
    The Alibaba Cloud team handles all O&M work, such as version upgrades, system deployments, scaling, and alert processing. These operations run in the background without affecting your services and ensure continuous availability. This provides a fully managed experience, allowing you to focus on your business.
    

## **Scenarios**

### Serverless clusters

-   Workloads with significant fluctuations.
    
-   Infrequent database use, such as in development and staging environments.
    
-   Intermittent scheduled tasks, such as for school instruction and student experiments.
    
-   Unpredictable workloads, such as in Internet of Things (IoT) and edge computing.
    
-   The need to reduce O&M costs and improve O&M efficiency.
    

### Serverless feature for clusters with defined specifications

-   Workloads with significant fluctuations.
    
-   Unpredictable workloads, such as in Internet of Things (IoT) and edge computing.
    
-   The need to reduce O&M costs and improve O&M efficiency.
    
-   Handling fluctuating business needs for existing PolarDB clusters.
    

## **Prerequisites**

### Serverless clusters

The following versions of PolarDB for PostgreSQL are supported:

-   : Enterprise Edition and Standard Edition.
    
-   : Enterprise Edition.
    
-   : Enterprise Edition.
    

### Serverless feature for clusters with defined specifications

PolarDB for PostgreSQL supports the following versions:

-   Edition: Enterprise Edition.
    
-   Sub-family: Dedicated.
    
-   Database engine:
    
    -   with minor engine version 2.0.14.13.27.0 or later.
        
    -   with minor engine version 2.0.15.14.6.0 or later.
        
    -   with minor engine version 2.0.16.9.6.0 or later.
        

## **Limits**

### Serverless clusters

The following features are not supported:

-   Adding custom cluster endpoints.
    
-   Manually adding nodes or changing cluster specifications.
    

### Serverless feature for clusters with defined specifications

The serverless feature for clusters with defined specifications is not supported on PolarDB for PostgreSQL clusters with hot standby storage enabled.

**Note**

-   To enable the serverless feature for clusters with defined specifications, you must first disable the hot standby storage cluster. For more information, see [High-availability Mode](/help/en/polardb/polardb-for-postgresql/deploy-a-cluster-across-zones-and-change-the-primary-zone#1d2620d97akq8).
    
-   For other usage notes, see [Enable the serverless feature for a cluster with defined specifications](/help/en/polardb/polardb-for-postgresql/enable-the-serverless-function-for-fixed-specification-clusters).
    

## **Billing**

-   Serverless clusters
    
    The fees include compute node fees, storage fees, backup storage fees (charged only for usage that exceeds the free quota), and SQL Explorer fees (optional). For more information, see [Serverless billing](/help/en/polardb/polardb-for-postgresql/serverless-cost-description).
    
    **Note**
    
    Alibaba Cloud provides a 50% launch discount for serverless clusters. For more information, see [Launch of the PolarDB for PostgreSQL serverless cluster](/help/en/polardb/polardb-for-postgresql/the-public-preview-of-polardb-for-postgresql-serverless-ends-intl).
    
-   Serverless-enabled clusters with defined specifications
    
    The fees include charges for the cluster with defined specifications and for the serverless feature. For billing information about the cluster, see [Billable items](/help/en/polardb/polardb-for-postgresql/billable-items-3). For billing information about the serverless feature, see [Serverless billing](/help/en/polardb/polardb-for-postgresql/serverless-cost-description).
