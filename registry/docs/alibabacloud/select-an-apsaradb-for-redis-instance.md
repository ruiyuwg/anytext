Before you create a Tair (Redis OSS-compatible) instance, consider factors such as product performance, price, business scenarios (such as use as a high-speed cache or an in-memory database), and workload to select the most cost-effective and stable option. This topic describes product types, disaster recovery plans, architecture types, and instance types to help you with your selection.

## Selection guide

### **Select product type**

Tair (Redis OSS-compatible) offers both Redis Open-Source Edition and Tair (Enterprise Edition). Tair (Enterprise Edition) is an enterprise-grade in-memory database developed based on Alibaba's business practices. It offers memory-optimized (DRAM), persistent memory (NVM), and disk-based (ESSD/SSD) instance types that are designed to balance access latency, persistence requirements, and overall cost. These instance types provide enhanced performance, additional data structures, and flexible storage options to meet various business needs.

**Important**

For information about the commands and parameters supported by each product type, see [Overview of supported Redis commands](/help/en/redis/developer-reference/overview-3/#concept-ztj-rpn-tdb) and [Set parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/#concept-q1w-kxn-tdb).

The following table describes the product types.

**Item**

**Redis Open-Source Edition**

**Tair (Enterprise Edition)**

[Deployment mode](/help/en/redis/product-overview/comparison-between-tair-instances-that-cloud-native-and-classic)

**Cloud-native (Recommended)**

Classic

**Cloud-native**

**Storage medium**

Memory

[Memory-optimized](/help/en/redis/product-overview/dram-based-instances#concept-1254543)

[Persistent memory](/help/en/redis/product-overview/persistent-memory-optimized-instances-1#concept-1952913)

[Disk-based](/help/en/redis/product-overview/essd-based-instances-1#concept-1952915)

**Compatible Redis versions**

5.0, 6.0, 7.0

5.0, 6.0, 7.0

6.0

6.0

**Performance**

100% (Baseline)

300%

90%

Up to 60%

**Cost**

100% (Baseline)

About 117% (calculated based on a 30% discount for monthly subscriptions)

About 70%

15% to 20%

**Features**

A cloud-based open-source Redis service.

-   Provides a rich set of self-developed [extended data structures](/help/en/redis/developer-reference/extended-data-structures-of-apsaradb-for-redis-enhanced-edition/) to help you streamline code and improve overall business performance.
    
-   Supports enterprise-grade features, such as [point-in-time restore using data flashback](/help/en/redis/user-guide/use-data-flashback-to-restore-data-by-point-in-time), proxy query cache, and [Global Distributed Cache](/help/en/redis/user-guide/overview-of-global-distributed-cache-for-tair/).
    
-   Supports advanced encryption, such as [Transport Layer Security (TLS) encrypted connections](/help/en/redis/user-guide/enable-tls-encryption) and [TDE](/help/en/redis/user-guide/enable-tde).
    

-   High cost-effectiveness: Up to 30% lower cost than Redis Open-Source Edition.
    
-   Higher reliability: Synchronous persistence. Each write operation returns only after it is successfully persisted on the primary node.
    

Data is persistently stored on disks, and memory is used to accelerate requests.

**Scenarios**

Scenarios that use open-source Redis.

-   Scenarios that require extremely low response times, such as ApsaraVideo Live, online education, online gaming, and real-time applications (RTAs).
    
-   Caching scenarios with tens of millions of QPS, such as online shopping and social networking.
    

Scenarios that require cost-effectiveness and data reliability for massive datasets, such as the Internet of Things.

Scenarios that require large storage space and high access performance for warm or cold data, with cost as the primary consideration. Examples include indexes for file storage and long-term storage of historical messages.

**Note**

For more information about the feature and performance differences between Redis Open-Source Edition and Tair (Enterprise Edition), see [Feature data and comparison](/help/en/redis/product-overview/comparison-between-apsaradb-for-redis-enhanced-edition-and-apsaradb-for-redis-community-edition#section-rek-ui2-6bs).

### **Choose a disaster recovery plan**

Tair (Redis OSS-compatible) offers three disaster recovery options: single-zone, zone-disaster recovery, and cross-region. You can select an option based on your requirements.

**Disaster recovery plan**

**Description**

**Instructions**

[Single-zone high availability plan](/help/en/redis/product-overview/disaster-recovery#section-u3t-f4t-2gb)

The primary and replica nodes are deployed on different machines in the same zone. This provides machine-level fault recovery.

On the purchase page, set **Zone Type** to **Single Zone**.

[Zone-disaster recovery (multi-zone) plan](/help/en/redis/product-overview/disaster-recovery#section-h5s-zxn-fgb)

The primary and replica nodes are deployed in different zones (data centers) within the same region. This provides data center-level fault recovery.

On the purchase page, set **Zone Type** to **Dual-zone Deployment**.

[Cross-region disaster recovery plan](/help/en/redis/product-overview/disaster-recovery#section-zhl-xdp-fgb)

A Global Distributed Cache instance consists of multiple child instances deployed in different regions. This provides region-level fault recovery from events such as natural disasters. For more information, see [Global Distributed Cache](/help/en/redis/user-guide/overview-of-global-distributed-cache-for-tair/#concept-qf1-mdk-zdb).

For specific instructions, see [Create a distributed instance](/help/en/redis/user-guide/create-a-distributed-instance).

### **Select Architecture Type**

Tair (Redis OSS-compatible) supports two architecture types: standard (cluster disabled) and cluster. It also offers an optional read/write splitting feature. These options meet different requirements for read/write capabilities, data volume, and performance across various business scenarios.

**Instance architecture**

**Architecture model**

**Data distribution**

**Scenarios**

**Read/write splitting**

[Standard architecture](/help/en/redis/product-overview/standard-master-replica-instances)

One shard that uses a primary-replica (master-replica) model.

All data is stored in a single shard.

-   A single node can handle the business data and traffic.
    
-   Commands are relatively simple, with few sorting or computation commands.
    

Optional. You can customize the number of read-only nodes. A maximum of one primary node and nine read-only nodes are supported.

[Cluster architecture](/help/en/redis/product-overview/cluster-master-replica-instances#concept-tds-4mm-tdb)

Consists of proxy nodes and multiple shards. Each shard uses a primary-replica model.

Data is distributed across the shards.

-   A single shard cannot handle all the business data and traffic.
    
-   Involves complex commands that take a long time to execute.
    

Optional. You can customize the number of read-only nodes. Each shard supports a maximum of one primary node and four read-only nodes.

### **Select an instance type**

You can select an appropriate instance type, including the shard specification and number of shards, based on your estimated business requirements for capacity, bandwidth, connections, and QPS. We recommend that you keep your usage below 80% of the purchased capacity: (Estimated requirement ÷ Purchased capacity) < 80%.

When you estimate capacity, you do not need to consider the memory overhead from persistence fork Copy on Write or from enhanced features such as security whitelists, auditing, large keys, and hot keys. Alibaba Cloud covers this overhead, and it does not consume the capacity of the instance type that you purchase.

**Important**

[Large keys](/help/en/redis/user-guide/identify-and-handle-large-keys-and-hotkeys/) are a common issue when using Redis. If the total cluster capacity is large but the capacity of a single shard is small, a large key is more likely to exhaust the capacity of the shard where it is located.

Recommended shard specifications for the cluster architecture:

**Total instance capacity**

**Recommended shard specification**

16 GB to 64 GB

2 GB or larger

64 GB to 256 GB

4 GB or larger

Larger than 256 GB

8 GB or larger

**Note**

After you purchase an instance, if your business needs change and the current specifications are no longer sufficient, you can [change the instance configuration](/help/en/redis/user-guide/change-the-configurations-of-an-instance/) at any time.

## **What to do next**

-   [Purchase Redis Open-Source Edition](https://common-buy-intl.alibabacloud.com/?commodityCode=kvstore_prepaid_public_intl&request={%22shard_class%22:%22redis.shard.small.2.ce%22}) or [Purchase Tair (Enterprise Edition)](https://common-buy-intl.alibabacloud.com/?enginetype=Tair&commodityCode=kvstore_prepaidtair_public_intl&request=%7B%22shard_class%22%3A%22redis.shard.small.2.ce%22%7D&regionId=cn-hangzhou)
    
-   [Redis data migration solutions](/help/en/redis/user-guide/overview-5/)
    
-   [Connect to an instance using redis-cli](/help/en/redis/user-guide/use-redis-cli-to-connect-to-an-apsaradb-for-redis-instance)
    
-   [Client connection tutorials](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance)
