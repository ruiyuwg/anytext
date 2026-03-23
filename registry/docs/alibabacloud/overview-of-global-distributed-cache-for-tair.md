Tair (Redis OSS-compatible) provides a Global Distributed Cache database system with geo-replication. This system synchronizes data across multiple off-site instances to support active geo-redundancy and data disaster recovery. A Global Distributed Cache instance consists of up to three child instances that automatically synchronize data with each other in real time. By reducing the physical distance between data and users, this feature lowers access latency and improves application response speed.

## Background information

If your business is geographically distributed, a long-distance, cross-region access architecture can significantly increase access latency and affect the user experience. The **Global Live More** feature of Tair (Enterprise Edition) helps you resolve high-latency issues caused by cross-region access. The **Global Live More** feature offers the following benefits:

**Benefit**

**Description**

High reliability

-   Supports resumable transfers from breakpoints. It can tolerate synchronization interruptions that last for days. This overcomes the limitations of the native Redis architecture for incremental synchronization across data centers or regions.
    
-   Automatically handles anomalous activity, such as primary/secondary failovers and backup-based reconstruction of child instances.
    

High performance

-   High throughput: A synchronization channel in a standard architecture instance can achieve up to 50,000 queries per second (QPS) in one direction. For a cluster architecture instance, the throughput scales linearly with the number of shards or nodes.
    
-   Low latency: For synchronization between regions on the same continent, the latency is less than 1 second if the physical network quality is stable. The average latency for cross-continent synchronization is about 1 to 5 seconds. This value is determined by the link throughput and the round-trip time (RT).
    

High correctness

-   Binary logging data is synchronized to the peer node in the order it is generated.
    
-   Supports loopback control to prevent binary logging data from being synchronized in a loop.
    
-   Supports exactly-once processing to ensure that synchronized binary logging data is executed only once.
    

**Scenarios**

This feature can be used for cross-region data synchronization and global business deployments in industries such as multimedia, gaming, and e-commerce.

**Scenario**

**Description**

Active geo-redundancy

Active geo-redundancy is a business scenario where multiple sites in different locations provide services at the same time. It is a type of high availability (HA) architecture design. All sites can provide services simultaneously, which enables scenarios such as nearest-site access for applications.

Data Disaster Recovery

The two-way data synchronization feature between child instances enables various data disaster recovery scenarios. These include intra-city disaster recovery, three data centers across two regions, and three-region disaster recovery.

Load distribution

In some scenarios, such as large-scale promotions, you may predict extremely high QPS requests and access traffic. You can distribute the traffic to multiple child instances to break the load limit of a single instance.

Data synchronization

Achieve two-way data synchronization between child instances within a Global Distributed Cache instance. This can be used for scenarios such as data analytics or testing.

## Features

A **Global Live More** instance of Tair (Enterprise Edition) is a logical collection of its child instances and the links between them. All child instances use synchronization channels to maintain real-time data synchronization. Synchronization occurs at the instance level, which means that all data in a child instance is synchronized. The following figure shows the architecture.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8387445671/CAEQUBiBgMC8mMez2BkiIGQ3OGY2MzY0OThkZDQzZjA5ZGE1MjViZjRmMjU2OGVk4197134_20240130160135.951.svg)

The following table describes the components.

**Component**

**Description**

**Child instance**

A child instance is an independent instance that makes up a Global Distributed Cache instance. It is the basic service unit of a Global Distributed Cache instance. All child instances support both read and write operations. Each provides an independent endpoint. Child instances maintain data consistency through real-time, two-way synchronization. The data consistency level is eventual consistency.

**Note**

Child instances must be [memory-optimized](/help/en/redis/product-overview/dram-based-instances) Tair (Enterprise Edition) instances. The Redis Open-Source Edition does not support this feature.

**Synchronization channel**

This is the link responsible for real-time data synchronization between child instances. It is a one-way link. Bidirectional replication between child instances is composed of two synchronization channels in opposite directions.

The **Global Live More** feature of Tair (Enterprise Edition) adds information such as server-id and opid to the native Redis append-only file (AOF) logs. The synchronization channel achieves data synchronization by obtaining binary logging data.

**Channel Manager**

Manages the lifecycle of synchronization channels. It is responsible for handling anomalous activity on child instances, such as primary/secondary failovers and backup-based reconstruction.

**Note**

Cross-border synchronization between the Chinese mainland and other regions is not supported. In a Global Distributed Cache instance, all child instances must be located either entirely within the Chinese mainland or entirely in other regions. For more information, see [Limits of Global Distributed Cache](/help/en/redis/user-guide/limits-of-global-distributed-cache-for-redis).

## **Billing**

This feature is free of charge. You are charged only for the memory-optimized Tair (Enterprise Edition) child instances. For more information, see [Billing items](/help/en/redis/product-overview/billable-items#concept-gsb-5q5-tdb).

## **Instructions**

1.  You can [create](/help/en/redis/user-guide/create-a-distributed-instance) the first child instance for a Global Distributed Cache instance. You can convert an existing memory-optimized Tair (Enterprise Edition) instance or create a new one.
    
    After you create the first child instance, the Global Distributed Cache instance is also automatically created.
    
2.  In the Global Distributed Cache instance, you can [add](/help/en/redis/user-guide/add-a-child-instance-to-a-distributed-instance) a second or third child instance by creating a new instance.
    
3.  In your application code, you can direct requests from different regions to the endpoints of the nearest child instances to provide users with an optimal nearest-site access experience.
    

## **FAQ**

-   Q: Can I upgrade the minor versions of all child instances in a Global Distributed Cache instance at the same time?
    
    A: No, you cannot. To ensure business continuity and stability, you should stagger the upgrade times of the child instances by at least half an hour. This prevents all instances from experiencing service interruptions at the same time and reduces the impact on your business.
    
-   Q: Can I change the architecture of a child instance, such as from standard to cluster?
    
    A: No, you cannot. You must plan your architecture in advance.
    
-   Q: Can I change the instance type of a child instance, such as upgrading a standard architecture instance from 8 GB to 16 GB?
    
    A: Yes, you can. However, you must ensure that all child instances have the same instance type. You must apply the same upgrade or downgrade to all child instances. If the instance types are inconsistent, performance or capacity issues may occur.
    
-   Q: Does a Global Distributed Cache instance support multi-write?
    
    A: Yes, it does. You can write data to different child instances. However, your application should avoid modifying the same key on multiple child instances at the same time or in close succession. This can cause data inconsistency. For more information, see [Data consistency limits](/help/en/redis/user-guide/limits-of-global-distributed-cache-for-redis#section-ryc-vh5-rfr).
    

## References

-   [Create a distributed instance](/help/en/redis/user-guide/create-a-distributed-instance#task-oyb-thk-bfb)
    
-   [Create a distributed child instance](/help/en/redis/user-guide/add-a-child-instance-to-a-distributed-instance#concept-cqf-lmf-qgb)
    
-   [Limits of Global Distributed Cache](/help/en/redis/user-guide/limits-of-global-distributed-cache-for-redis#concept-cbs-dfk-zdb)
