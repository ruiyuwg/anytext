Tair persistent memory-optimized instances use persistent memory to provide large-capacity in-memory database services that are compatible with open source Redis. A persistent memory-optimized instance persists each operation without the need to rely on traditional disk storage for data persistence. Compared with a Redis Open-Source Edition instance, a persistent memory-optimized instance reduces costs by up to 30% and delivers almost the same throughput and latency. This improves the reliability of business data.

## Purchase method

[Step 1: Create a Tair instance](/help/en/redis/getting-started/step-1-create-an-apsaradb-for-redis-instance#concept-kqh-vv5-tdb)

## Background information

The high price and low capacity of memory limit the large-scale use of memory in specific scenarios. Alibaba Cloud began to invest in the research and implementation of persistent memory in 2018. Persistent memory was applied to the core cluster of e-commerce products with remarkably reduced costs during Double 11 that year. The cluster became the first product in China that officially deployed persistent memory in a production environment.

Mature cloud environments and improved persistent memory technologies help Alibaba Cloud develop a new engine for data persistence implementation. Alibaba Cloud integrates the new engine with [Elastic Compute Service (ECS) bare metal instances](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#concept-lnh-hv2-5db) to introduce Tair persistent memory-optimized instances. These instances replace the traditional volatile memory of Redis with PMEM to significantly reduce the risk of data loss.

Persistent memory-optimized instances provide not only memory-level access latency and throughput but also data persistence. In addition to reducing costs, persistent memory-optimized instances can simplify the application architecture. The popular architecture that consists of applications, cache, and persistent storage can be simplified to an architecture that consists of applications and persistent memory-optimized instances, as shown in the following figure.

![持久内存型架构演进](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9818737261/p167112.png)

## Benefits

Persistent memory-optimized instances use persistent memory to provide large-capacity in-memory databases that are compatible with open source Redis. A persistent memory-optimized instance persists each operation without using disks, and provides almost the same performance as a Redis Open-Source Edition instance in terms of throughput and latency. This helps improve the reliability of business data. Persistent memory-optimized instances are suitable for scenarios that store large amounts of hot and warm data, have high requirements for data persistence and service stability, and require compatibility with Redis.

**Benefit**

**Description**

Ultra-high cost performance

-   A persistent memory-optimized instance costs approximately 30% less than a Redis Open-Source Edition instance.
    
-   Persistent memory-optimized instances can provide 90% of the performance of Redis.
    

Integration of multiple data modules

[exString](/help/en/redis/developer-reference/tairsting-command) (including [commands that enhance Redis string functionality](/help/en/redis/developer-reference/cas-cad-command) ), [exHash](/help/en/redis/developer-reference/the-tairhash-command), and [TairCpc](/help/en/redis/developer-reference/taircpc-command) are supported.

Optimization for high specifications

-   Persistent memory-optimized instances resolve issues such as high latency, high network jitter, and slow service data loading during fork operations triggered by append-only file (AOF) rewrites in scenarios where advanced memory specifications are used. You do not need to choose between performance and persistence.
    

Higher reliability

Persistent memory-optimized instances support command-level persistence. A response is returned for each write operation after data persistence is completed on the master node.

High compatibility

-   Persistent memory-optimized instances are compatible with Redis Open-Source Edition and provide high availability, auto scaling, logging, intelligent diagnostics, and flexible backup and restoration.
    
-   Persistent memory-optimized instances are compatible with most data structures and interfaces of Redis 6.0 or earlier.
    

## Scenarios

-   Scenarios that require high performance and reduced costs for processing a large amount of data
    
    Intermediate data computing requires high performance. If you use Redis Open-Source Edition for intermediate data computing, the costs are high. Other database types such as HBase cannot meet the performance requirements. Persistent memory-optimized instances not only ensure data persistence but also provide almost the same performance as Redis Open-Source Edition instances in terms of throughput and latency. This helps you strike a balance between performance and costs.
    
-   Scenarios that have high requirements for data persistence
    
    For gaming services, persistent memory-optimized instances are used for data storage. Compared with a combination of Redis and MySQL, persistent memory-optimized instances provide a more streamlined architecture, and offer higher performance, cost-effectiveness, and data reliability.
    

## Instance specifications

[Persistent memory-optimized instances](/help/en/redis/product-overview/persistent-memory-type)

## References

-   [Performance white paper of persistent memory-optimized instances](/help/en/redis/support/performance-white-paper-of-persistent-memory-optimized-instances#concept-1956282)
