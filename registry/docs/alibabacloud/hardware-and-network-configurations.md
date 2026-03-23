Appropriate hardware configuration and network environment design are key factors to ensure cluster performance, cost-effectiveness, and reliability when creating an Alibaba Cloud EMR cluster. This topic describes how to select high availability services, node specifications, and network configuration solutions based on big data processing requirements.

## **High availability service selection**

You can choose whether to enable the high availability feature based on business scenarios and actual requirements. When high availability service is enabled, the cluster uses a multi-master node mode to eliminate failure risks of single node and ensure service continuity through distributed and failover mechanisms.

**Dimension**

**Single-master node cluster**

**Multi-master node cluster**

**Scenarios**

-   Test environments
    
-   Low availability needs
    

-   Production environments
    
-   High availability needs
    

**Core features**

Single node architecture, simple deployment. Failure risks of single node.

-   **Eliminate failure risk of single node**: Multi-node cluster architecture ensures service continuity by switching to other available master nodes.
    
-   **High cluster reliability**: Supports high availability configuration for core components, such as HDFS NameNode and YARN ResourceManager.
    
-   **Hardware isolation**: [ECS deployment sets](/help/en/emr/emr-on-ecs/user-guide/add-nodes-to-the-deployment-set) distribute multiple master nodes across separate physical hardware. This protects multiple master nodes from failing simultaneously when underlying hardware failure.
    

**Failback**

**No automatic recovery**: Requires manual intervention for troubleshooting and restart.

**Automatic failback**: EMR service automatically replaces failed master node. It configures same environment and bootstrap actions as the original node.

**Cost**

**Low cost**: Only 1 master node needs configuration.

**Higher cost**: 3 master nodes require configuration. They implement majority decision-making mechanisms through consensus algorithms in distributed systems, meet the strong consistency requirements of open-source components (such as ZooKeeper and HDFS) and tolerate single node failures, and avoiding split brain.

## **Node specification selection**

The cluster configuration process is as follows:

1.  [Determine the business scenario](/help/en/emr/emr-on-ecs/user-guide/select-a-business-scenario): Complete the selection (for example: data lake, data analysis, real-time data stream, data service, or custom cluster scenario) based on scenarios.
    
2.  [Select storage architecture](/help/en/emr/emr-on-ecs/user-guide/select-region-and-storage-architecture#17c3dce8839z6): Determine whether to choose coupled storage and compute (HDFS) or decoupled storage and compute (OSS-HDFS/OSS) architecture based on scenarios.
    
3.  Configure node specifications and disk size:
    
    1.  [Configure node specifications](#f283795aeaank): Select appropriate ECS instance types (such as general-purpose, compute-optimized, memory-optimized, big data, etc.) for different node types (such as Master, Core, Task) based on the selected storage architecture, cluster scale, business characteristics, and other factors.
        
    2.  Configure disk size: [Calculate storage capacity](/help/en/emr/emr-on-ecs/user-guide/select-region-and-storage-architecture#ad43727e93qv9) and configure the appropriate disk size based on data volume and growth expectations.
        

### **Data lake scenario**

## Coupled storage and compute (HDFS)

**Node type**

**Recommended specification**

Master

> Manage the cluster and coordinating tasks.

> Services deployed: NameNode, ResourceManager, HiveServer, HiveMetastore, SparkHistoryServer.

-   Regular: General-purpose instances, select cloud disks.
    
-   Small clusters (≤ 8 instances): 8 cores and 32 GiB.
    
-   Medium to large clusters: ≥ 16 cores and 64 GiB.
    
-   Massive HDFS file counts (≥ 10 million): Specifications must meet NameNode memory requirements.
    

Core

> Provides computing power and storage resources.

> Services deployed: DataNode, NodeManager.

Core node instance specifications are based on resources requirements.

-   Business type matching: Select instance type based on the CPU-to-memory ratio requirements of Yarn tasks.
    
    -   Default scenario: General-purpose instances.
        
    -   CPU-intensive tasks (such as AI inference training): Compute-optimized instances.
        
    -   Memory-intensive tasks (such as offline report analysis): Memory-optimized instances.
        
-   HDFS storage requirements (> 10 TB/node): Big data instance family. This instance type uses local disks for storage, reducing storage costs, but requires self-maintenance of local disks.
    
-   Memory capacity constraint: Node memory specification > Yarn task single container peak memory.
    

Task

> Only provides computing power, does not store data. Mainly used to supply CPU and memory requirements of Core nodes.

> Services deployed: NodeManager.

Recommendations for peak-valley scenarios:

-   Configure fixed Core node specifications based on low valley computing requirements.
    
-   Elastic Task node specifications ≥ Core node specifications to handle peak demands.
    

## Decoupled storage and compute (OSS-HDFS/OSS)

**Node type**

**Recommended specification**

Master

> Manage the cluster and coordinating tasks.

> Services deployed: ResourceManager, HiveServer, HiveMetastore, SparkHistoryServer.

-   Regular: General-purpose instances, select cloud disks.
    
-   Small clusters (≤ 8 instances): 8 cores and 32 GiB.
    
-   Medium to large clusters: ≥ 16 cores and 64 GiB.
    

Core

> Similar function to Task nodes, does not store data.

> Services deployed: NodeManager.

Core nodes do not support elastic scaling capability. We recommend you to use only Task nodes, not configure Core nodes.

Task

> Provides computing power.

> Services deployed: NodeManager.

-   Business type matching: Select instance type based on the CPU to memory ratio required by Yarn tasks.
    
    -   Default scenario: General-purpose instances.
        
    -   CPU-intensive tasks (such as AI inference training): Compute-optimized instances.
        
    -   Memory-intensive tasks (such as offline report analysis): Memory-optimized instances.
        
-   Memory capacity constraint: Node memory specification > Yarn task single Container peak memory.
    

### **Data analysis scenario**

## Coupled storage and compute

**Node type**

**Recommended specifications**

Master

> Manage the cluster and coordinating tasks.

> Services deployed: StarRocks FE, Doris FE, Zookeeper.

-   Regular scenarios: General-purpose instances, select cloud disks.
    
-   Small clusters (≤ 8 instances): 8 cores and 32 GiB.
    
-   Medium to large clusters: ≥ 16 cores and 64 GiB.
    

Core

> Provides computing power and storage resources.

> Services deployed: StarRocks BE, Doris BE, ClickhouseKeeper, ClickhouseServer.

Core node instance specifications are related to business computing requirements and data storage volume.

-   Storage volume ≤ 10 TB/node: Instance specifications are related to actual business computing requirements.
    
    -   Default: General-purpose instances, select cloud disks.
        
    -   CPU-intensive tasks (involving many computational operations): Compute-optimized instances.
        
    -   Memory-intensive tasks (requiring larger cache to improve performance): Memory-optimized instances.
        
-   Storage volume > 10 TB/node: Big data instance families. This instance type uses local disks for storage, reducing storage costs, but requires self-maintenance of local disks.
    

Task

> Provides computing power.

> Services deployed: StarRocks CN.

Only StarRocks Compute Node supports deployment on Task nodes. If you are not using StarRocks components, you do not need to use Task nodes.

Recommendations for peak-valley scenarios:

-   Configure fixed Core node specifications based on low valley computing requirements.
    
-   Elastic Task node specifications ≥ Core node specifications to handle peak demands.
    

## Decoupled storage and compute

Only StarRocks 3.x version supports decoupled storage and compute.

**Node type**

**Recommended specifications**

Master

> Manage the cluster and coordinating tasks.

> Services deployed: StarRocks FE, Zookeeper.

-   Regular scenarios: General-purpose instances, select cloud disks.
    
-   Small clusters (≤ 8 instances): 8 cores and 32 GiB.
    
-   Medium to large clusters: ≥ 16 cores and 64 GiB.
    

Task

> Provides computing power.

> Services deployed: StarRocks CN.

In StarRocks decoupled storage and compute architecture, there are no Core nodes, only Task nodes.

-   Default: General-purpose instances, select cloud disks.
    
-   CPU-intensive tasks (involving many computational operations): Compute-optimized instances.
    
-   Memory-intensive tasks (requiring larger cache to improve performance): Memory-optimized instances.
    

Instance specifications should be evaluated based on actual business computing requirements, generally selecting ≥16 cores 64 GiB. The number of nodes can be elastically scaled according to business requirements.

### **Real-time data stream scenario**

## Coupled storage and compute (HDFS)

**Node type**

**Recommended specifications**

Master

> Manage the cluster and coordinating tasks.

> Services deployed: NameNode, ResourceManager, FlinkHistoryServer, Zookeeper.

-   Regular: General-purpose instances, select cloud disks.
    
-   Small clusters (≤ 8 instances): 8 cores and 32 GiB.
    
-   Medium to large clusters: ≥ 16 cores and 64 GiB.
    
-   Massive HDFS file counts (≥1 million): Specifications must meet NameNode memory requirements.
    

Core

> Provides computing power and storage resources.

> Serviced deployed: DataNode, NodeManager.

Core node instance specifications are related to business type and resource requirements.

-   Business type matching: Select instance type based on the CPU to memory ratio required by Flink tasks.
    
    -   Default: General-purpose instances.
        
    -   CPU-intensive tasks: Compute-optimized instances.
        
    -   Memory-intensive tasks: Memory-optimized instances.
        
-   HDFS storage requirements (> 10 TB/node): Big data instance families. This instance type uses local disks for storage, reducing storage costs, but requires self-maintenance of local disks.
    
-   Memory capacity constraint: Node memory specification > Peak memory of a single JobManager or TaskManager in Flink tasks.
    

Task

> Only provides computing power, does not store data, mainly used to supplement CPU and memory requirements of Core nodes.

> Services deployed: NodeManager.

Recommendations for peak-valley:

-   Configure fixed Core node specifications based on low valley computing requirements.
    
-   Elastic Task node specifications ≥ Core node specifications to handle peak demands.
    

## Decoupled storage and compute (OSS-HDFS/OSS)

**Node type**

**Recommended specifications**

Master

> Manage the cluster and coordinating tasks.

> Services deployed: ResourceManager, FlinkHistoryServer, Zookeeper.

-   Regular: General-purpose instances, select cloud disks.
    
-   Small clusters (≤ 8 instances): 8 cores and 32 GiB.
    
-   Medium to large clusters: ≥ 16 cores and 64 GiB.
    

Core

> Similar function to Task nodes, does not store data.

> Services deployed: NodeManager.

Core nodes do not support elastic scaling capability. It is recommended to use only Task nodes and not configure Core nodes.

Task

> Provides computing power.

> Services deployed: NodeManager.

-   Business type matching: Select instance type based on the CPU-to-memory ratio required by Flink tasks.
    
    -   Default: General-purpose instances.
        
    -   CPU-intensive tasks: Compute-optimized instances.
        
    -   Memory-intensive tasks: Memory-optimized instances.
        
-   Memory capacity constraint: Node memory specification > Peak memory of a single JobManager or TaskManager in Flink tasks.
    

### **Data service scenario**

## Coupled storage and compute (HDFS)

**Node type**

**Recommended specifications**

Master

> Manage the cluster and coordinating tasks.

> Services deployed: NameNode, HMaster, Zookeeper.

-   Regular: General-purpose instances, select cloud disks.
    
-   Small to medium clusters (≤ 16 instances): 8 cores and 32 GiB.
    
-   Large clusters: ≥ 16 cores and 64 GiB.
    
-   Massive HDFS file counts (≥ 10 million): Specifications must meet NameNode memory requirements.
    

Core

> Provides computing power and storage resources.

> Services deployed: DataNode, HRegionServer.

Core node instance specifications are related to business request volume and storage volume.

-   Business request volume: General-purpose instances, select cloud disks.
    
    -   Small clusters (≤ 8 instances): 8 cores 32 GiB, number of Core nodes ≤ 8, QPS per node ≤ 10000.
        
    -   Medium to large clusters: ≥ 16 cores 64 GiB, number of Core nodes determined based on actual situation.
        
-   HDFS storage volume (> 10 TB/node): Big data instance families. This instance type uses local disks for storage, reducing storage costs, but requires self-maintenance of local disks.
    

Task

> Only provides computing power, does not store data, mainly used to supplement CPU and memory requirements of Core nodes.

> Services deployed: HRegionServer.

In data service, since data is stored on Core nodes, Task nodes are typically not recommended to ensure data locality.

## Decoupled storage and compute (OSS-HDFS/OSS)

**Node type**

**Recommended specifications**

Master

> Manage the cluster and coordinating tasks.

> Services deployed: NameNode, HMaster, Zookeeper.

-   Regular: General-purpose instances, select cloud disks.
    
-   Small to medium clusters (≤ 16 instances): 8 cores and 32 GiB.
    
-   Large clusters: ≥ 16 cores and 64 GiB.
    

Core

> Provides computing power and storage resources.

> Services deployed: DataNode, HRegionServer.

Using OSS-HDFS/OSS to store HBase HLog has a significant impact on write performance. It is recommended to save HBase HLog on HDFS.

Core node instance specifications are related to business request volume. General-purpose instances are recommended, with disk space ≥ 500 GiB.

-   Small clusters (≤ 8 instances): 8 cores 32 GiB, number of Core nodes ≤ 8, QPS per node ≤ 10000.
    
-   Medium to large clusters: ≥ 16 cores 64 GiB, number of Core nodes determined based on actual situation.
    

Task

> Provides computing power.

> Services deployed: HRegionServer.

Recommendations for peak-valley scenarios:

-   Fixed Core nodes + elastic Task nodes mode.
    
-   Task node specifications should be consistent with Core node specifications.
    

## Custom cluster scenario

When business involves multiple mixed scenarios such as offline ETL, real-time ETL, complex aggregation analysis, and high-concurrency query services:

-   **Recommended approach: Multiple cluster type combination solution**. By independently deploying clusters with different characteristics (such as offline batch processing clusters, real-time stream processing clusters, analytical clusters, and query acceleration clusters), you can achieve resource isolation and scenario adaptation. This ensures the performance and stability of various tasks.
    
-   **If your business scale is small and there are no resource conflicts between scenarios, choose a custom cluster**: Reduce deployment complexity and improve resource utilization through flexible configuration.
    

## Coupled storage and compute (HDFS)

**Node type**

**Recommended specifications**

Master

> Responsible for managing the cluster and coordinating tasks.

-   Small clusters (≤ 8 instances): General-purpose instances 8 cores 32 GiB, select cloud disks.
    
-   Large number of HDFS files (≥1 million): Specifications must meet NameNode memory requirements.
    

Core

> Provides computing power and storage resources.

Core node instance specifications are related to business type and resource requirements.

-   Business type matching: Select instance type based on the CPU to memory ratio required by cluster tasks.
    
    -   Default scenario: General-purpose instances.
        
    -   CPU-intensive tasks: Compute-optimized instances.
        
    -   Memory-intensive tasks: Memory-optimized instances.
        
-   Storage requirements (> 10 TB/node): Big data instance families. This instance type uses local disks for storage, reducing storage costs, but requires self-maintenance of local disks.
    
-   Memory capacity constraint: Node memory specification > Max(Yarn task single Container peak memory, Flink task single JobManager or TaskManager peak memory).
    

Task

> Only provides computing power, does not store data, mainly used to supplement CPU and memory requirements of Core nodes.

Recommendations for peak-valley scenarios:

-   Configure fixed Core node specifications based on low valley computing requirements.
    
-   Elastic Task node specifications ≥ Core node specifications to handle peak demands.
    

## Decoupled storage and compute (OSS-HDFS/OSS)

**Node type**

**Recommended specifications**

Master

> Manage the cluster and coordinating tasks.

Small clusters (≤ 8 instances): General-purpose instances 8 cores and 32 GiB, select cloud disks.

Core

> Similar function to Task nodes, does not store data.

-   If you do not need data storage, we recommend you to use only elastic Task nodes, not configure Core nodes.
    
-   When you require HBase service:
    
    -   To ensure write performance, we recommend you to save HBase HLog on HDFS.
        
    -   Specifications: General-purpose instances 16 cores and 64 GiB, disk space ≥ 500 GiB.
        

Task

> Provides computing power.

When only to configure Task nodes:

-   Business type matching: Select instance type based on the CPU to memory ratio required by Flink tasks.
    
    -   Default: General-purpose instances.
        
    -   CPU-intensive tasks: Compute-optimized instances.
        
    -   Memory-intensive tasks: Memory-optimized instances.
        
-   Memory capacity constraint: Node memory specification > Max(Yarn task single Container peak memory, Flink task single JobManager or TaskManager peak memory).
    

When both Core nodes and Task nodes are configured, peak-valley scenarios need to be considered:

-   Fixed Core nodes + elastic Task nodes mode.
    
-   Task node specifications should be consistent with Core node specifications.
    

## **Network configuration recommendations**

**Key dimension**

**Configuration recommendations**

VPC network configuration

-   Reserve sufficient IP address resources: Select appropriate VPC and switches. Reserve expansion space when planning network segments.
    
-   Network connectivity: Plan network connectivity paths with other cloud services.
    

Security group configuration

-   Principle of least privilege: Configure security group rules reasonably. Only open necessary ports, set inbound rules to allow access only from trusted IP addresses or network segments. This is to prevent attacks such as crypto mining.
    
-   Strictly control of management ports: Set strict access controls for management ports such as SSH to ensure cluster security.
    

Network connectivity configuration

-   Improve network performance: Consider using instances with large internal bandwidth for large data volumes.
    
-   Reduce cross-zone traffic: Orchestrate the network topology between clusters and data sources.
    
-   External access control: If you require external access capability, use NAT Gateway or elastic IP.
    

## **Appendix: ECS instance types**

Please refer to [Instance family](/help/en/ecs/user-guide/overview-of-instance-families) to view the characteristics, specifications, and applicable scenarios of available ECS instance families. It provides reference for configuring node instance specifications in the EMR console.

**Instance type**

**Features**

General-purpose

vCPU:Memory=1:4. Abbreviated as g series.

Compute-optimized

vCPU:Memory=1:2, provide more computing resources. Abbreviated as c series.

Memory-optimized

vCPU:Memory=1:8, provide more memory resources. Abbreviated as r series.

Local SSD

vCPU:Memory=1:4, uses local SSD disks, has high random IOPS and high throughput capabilities, but there is a risk of data loss. This instance type is not available for master nodes. Abbreviated as i series.

Big data

vCPU:Memory=1:4, uses local SATA disks, has high storage cost-effectiveness, the recommended instance type for big data volume (TB-level data volume) scenarios. Abbreviated as d series.

Sharing

Instance type with shared CPU, not stable enough for large computational loads, only suitable for entry-level learning. Not recommended for enterprise customers. This instance type is only available for task nodes.
