This topic describes the Elastic Compute Service (ECS) instance families supported by E-MapReduce (EMR) and their use scenarios.

## ECS instance families supported by EMR

-   General purpose
    
    This instance family uses cloud disks for storage. The ratio of vCPUs to memory is 1:4, for example, 8 vCPUs and 32 GiB of memory.
    
-   Compute optimized
    
    This instance family uses cloud disks for storage and provides more computing resources. The ratio of vCPUs to memory is 1:2, for example, 8 vCPUs and 16 GiB of memory.
    
-   Memory optimized
    
    This instance family uses cloud disks for storage and provides more memory resources. The ratio of vCPUs to memory is 1:8, for example, 8 vCPUs and 64 GiB of memory.
    
-   Big data
    
    This instance family uses local SATA disks for storage, which is highly cost-effective. If you want to store large volumes of data (terabytes), we recommend that you use this instance family.
    
    **Note** Core nodes can be created only in Hadoop, Data Science, Dataflow, and Druid clusters.
    
-   Local SSD type
    
    This instance family uses local SSDs for storage, which provide high random IOPS and high throughput.
    
-   Shared type (entry level)
    
    Instances in this instance family share CPUs, so they are not stable in scenarios that require large volumes of computing. This instance family is suitable for entry-level users, but not enterprise customers.
    
-   GPU
    
    This instance family is a heterogeneous GPU-based model and applies to scenarios such as machine learning.
    

## Use scenarios of instance families

-   Master nodes
    
    Instances in general-purpose and memory-optimized instance families can serve as master nodes for EMR. They are suitable for scenarios in which data is stored on cloud disks to ensure high data reliability.
    
-   Core nodes
    -   Instances in general-purpose, compute-optimized, and memory-optimized instance families can serve as core nodes for EMR. They are suitable for small volumes of data (below terabytes) and scenarios in which OSS is used as primary data storage.
    -   If the volume of data is 10 terabytes or more, we recommend that you use the big data type because it is more cost-effective.
        
        **Important** If local disks are used, HDFS data is stored in local disks, which cannot ensure data reliability.
        
-   Task nodes
    
    All instance families except big data families can be used for task nodes to improve the computing capabilities of a cluster.
