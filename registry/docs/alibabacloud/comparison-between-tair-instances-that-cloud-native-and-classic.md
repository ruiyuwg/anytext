When you purchase a Tair instance, we recommend that you select a cloud-native edition instance. This topic describes the main differences between cloud-native and classic edition instances to help you make an informed decision.

## Feature comparison

**Item**

**Cloud-native instance (Recommended)**

**Classic instance**

Architecture and scaling

Built on a new-generation control architecture that provides greater flexibility and scalability. You can quickly scale out an instance without migration if local resources are sufficient. This process is faster and has a minimal impact on your services. For more information, see [Change instance configurations](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#0acbc18f6baf1).

Uses a traditional control architecture. Cluster instances have defined specifications and cannot be customized. Scaling out is time-consuming.

[Standard architecture](/help/en/redis/product-overview/standard-master-replica-instances)

The standard architecture lets you create multi-replica instances with up to 1 primary node and 9 secondary nodes.

Supports only one secondary node.

[Cluster architecture](/help/en/redis/product-overview/cluster-master-replica-instances)

-   Eliminates the `-ASK` and `-TRYAGAIN` errors that can occur in native Redis clusters during scaling. This provides a seamless scaling experience.
    
-   The cluster architecture lets you adjust the number of shards from 2 to 256, with a minimum granularity of a single shard. You can also adjust the specifications of shards to meet different performance and capacity requirements.
    
-   The cluster architecture lets you create multi-replica instances. Each shard can have up to 1 primary node and 4 secondary nodes.
    

-   Transient connections occur during scale-out.
    
-   The number of shards for cluster instances is fixed, such as 2, 4, or 8 shards.
    

[Read/write splitting](/help/en/redis/product-overview/read-or-write-splitting-instances-1)

-   Standard Edition (read/write splitting) instances allow you to adjust the number of read-only nodes from 1 to 9.
    
-   Supports proximity-based access when read/write splitting is enabled in a multi-zone deployment.
    
-   The cluster architecture (in proxy mode) lets you enable read/write splitting. Each shard can have up to 1 primary node and 4 read-only nodes.
    

-   Read/write splitting architecture (discontinued) instances have a fixed number of read-only nodes: 1, 3, or 5.
    

Disaster recovery

If an instance is deployed across multiple zones, it supports high-availability (HA) failover within the primary zone. This prevents an increase in service access latency caused by a failover to the secondary zone. For more information, see [Avoid cross-zone failovers by customizing the number of nodes](/help/en/redis/use-cases/prevent-cross-zone-switchover-by-specifying-the-number-of-nodes).

Multi-zone instances can only fail over to the secondary zone. You must then [manually switch](/help/en/redis/user-guide/manually-switch-workloads-from-a-master-node-to-a-replica-node) back to the primary zone.

## Feature support comparison

Cloud-native instances use a cloud-native infrastructure. The cloud-native cluster architecture supports seamless scaling. Tair will continue to evolve based on this architecture.

The following table compares feature support. ✔️ means the feature is supported. ❌ means the feature is not supported. ➖ means the concept is not applicable.

## View only features with differences

**Category**

**Feature**

**Cloud-native instance**

**Classic instance**

**Standard architecture**

**Cluster architecture**

**Read/write splitting architecture**

**Standard architecture**

**Cluster architecture**

**Read/write splitting architecture**

Lifecycle management

[Fast scale-out](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#0acbc18f6baf1)

✔️

✔️

✔️

❌

❌

❌

[Seamless cluster scaling](/help/en/redis/product-overview/imperceptible-scaling)

➖

✔️

➖

➖

❌

➖

[Custom number of shards](/help/en/redis/user-guide/adjust-the-number-of-cluster-shards#task-2022112)

➖

✔️

➖

➖

❌

➖

[Custom number of nodes](/help/en/redis/user-guide/node-management)

✔️

✔️

✔️

❌

❌

❌

[Custom number of read-only nodes for read/write splitting](/help/en/redis/user-guide/node-management#section-evj-t3t-xwn)

➖

➖

✔️

➖

➖

❌

[Proximity-based access in multi-zone deployments](/help/en/redis/product-overview/read-or-write-splitting-instances-1)

➖

➖

✔️

➖

➖

❌

Backup and recovery

[Custom backup policies for manual backups](/help/en/redis/user-guide/automatic-or-manual-backup)

✔️

✔️

✔️

❌

❌

❌

[Delete manual backups](/help/en/redis/user-guide/automatic-or-manual-backup)

✔️

✔️

✔️

❌

❌

❌

Extensions

[Semi-synchronous mode](/help/en/redis/user-guide/modify-the-synchronization-mode-of-a-persistent-memory-optimized-instance)

✔️

✔️

✔️

❌

❌

❌

## View all features

**Category**

**Feature**

**Cloud-native instance**

**Classic instance**

**Standard architecture**

**Cluster architecture**

**Read/write splitting architecture**

**Standard architecture**

**Cluster architecture**

**Read/write splitting architecture**

Lifecycle management

[Change instance configurations](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb)

✔️

✔️

✔️

✔️

✔️

✔️

[Fast scale-out](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#0acbc18f6baf1)

✔️

✔️

✔️

❌

❌

❌

[Seamless cluster scaling](/help/en/redis/product-overview/imperceptible-scaling)

➖

✔️

➖

➖

❌

➖

[Restart an instance](/help/en/redis/user-guide/restart-one-or-more-apsaradb-for-redis-instances#task-rpc-4sw-kgb)

✔️

✔️

✔️

✔️

✔️

✔️

[Convert to subscription](/help/en/redis/product-overview/change-the-billing-method-to-subscription#concept-t2l-cmg-tdb)

✔️

✔️

✔️

✔️

✔️

✔️

[Convert to pay-as-you-go](/help/en/redis/product-overview/change-the-billing-method-to-pay-as-you-go#task-2068956)

✔️

✔️

✔️

✔️

✔️

✔️

[Renew an instance](/help/en/redis/product-overview/renewal#concept-fl3-rn4-tdb)

✔️

✔️

✔️

✔️

✔️

✔️

[Custom number of shards](/help/en/redis/user-guide/adjust-the-number-of-cluster-shards#task-2022112)

➖

✔️

➖

➖

❌

➖

[Custom number of nodes](/help/en/redis/user-guide/node-management)

✔️

✔️

✔️

❌

❌

❌

[Custom number of read-only nodes for read/write splitting](/help/en/redis/user-guide/node-management#section-evj-t3t-xwn)

➖

➖

✔️

➖

➖

❌

[Proximity-based access for read/write splitting architecture in multi-zone deployments](/help/en/redis/product-overview/read-or-write-splitting-instances-1)

➖

➖

✔️

➖

➖

❌

[Upgrade the major version](/help/en/redis/user-guide/upgrade-the-major-version-1)

✔️

✔️

✔️

✔️

✔️

✔️

[Update the minor version and proxy version](/help/en/redis/user-guide/update-the-minor-version#concept-itn-f44-tdb)

✔️

✔️

✔️

✔️

✔️

✔️

[Release a pay-as-you-go instance](/help/en/redis/user-guide/release-pay-as-you-go-instances#concept-vyy-bgg-vdb)

✔️

✔️

✔️

✔️

✔️

✔️

Cancel a subscription instance

❌

❌

❌

❌

❌

❌

[Recycle bin](/help/en/redis/user-guide/manage-instances-in-the-recycle-bin#concept-l4n-pl4-m2b)

✔️

✔️

✔️

✔️

✔️

✔️

Manage network connectivity

[Change the VPC or vSwitch](/help/en/redis/user-guide/change-the-vpc-or-vswitch-of-an-instance#task-2038839)

✔️

✔️

✔️

✔️

✔️

✔️

[Request a public endpoint](/help/en/redis/user-guide/apply-for-a-public-endpoint-for-an-apsaradb-for-redis-instance#concept-1096127)

✔️

✔️

✔️

✔️

✔️

✔️

[Direct connection mode for cluster architecture](/help/en/redis/user-guide/enable-the-direct-connection-mode#task-2362225)

➖

✔️

➖

➖

✔️

➖

[Modify the endpoint or port](/help/en/redis/user-guide/change-the-endpoint-or-port-number-of-an-instance#concept-yyt-svt-j2b)

✔️

✔️

✔️

✔️

✔️

✔️

Manage bandwidth

[Enable Auto Scaling for bandwidth](/help/en/redis/user-guide/enable-bandwidth-auto-scaling#task-2084887)

✔️

✔️

✔️

✔️

✔️

✔️

[Manually increase instance bandwidth](/help/en/redis/user-guide/adjust-the-bandwidth-of-an-apsaradb-for-redis-instance#task-s5f-jy4-kgb)

✔️

✔️

✔️

✔️

✔️

✔️

Manage high availability

[Manually perform a primary/secondary failover](/help/en/redis/user-guide/manually-switch-workloads-from-a-master-node-to-a-replica-node#task-2488873)

✔️

✔️

✔️

✔️

✔️

✔️

[Restart or rebuild a proxy node](/help/en/redis/user-guide/restart-or-rebuild-a-proxy-node#task-2488885)

➖

✔️

✔️

➖

✔️

✔️

[Upgrade a proxy node](/help/en/redis/user-guide/upgrade-proxy-nodes#task-2488874)

➖

✔️

✔️

➖

✔️

✔️

Manage parameters

[Set parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/#concept-q1w-kxn-tdb)

✔️

✔️

✔️

✔️

✔️

✔️

Manage tags

[Manage tags](/help/en/redis/create-tags#concept-265322)

✔️

✔️

✔️

✔️

✔️

✔️

Other management features

[Set a maintenance window](/help/en/redis/user-guide/set-a-maintenance-window#concept-sjv-kpl-vdb)

✔️

✔️

✔️

✔️

✔️

✔️

[Change the zone of an instance](/help/en/redis/user-guide/migrate-an-instance-across-zones#concept-kpz-c5v-4gb)

✔️

✔️

✔️

✔️

✔️

✔️

[Export the instance list](/help/en/redis/user-guide/export-the-instance-list#concept-cnn-bl2-qgb)

✔️

✔️

✔️

✔️

✔️

✔️

Accounts and security

[Create and manage accounts](/help/en/redis/user-guide/create-and-manage-database-accounts#task-kth-pr4-hfb)

✔️

✔️

✔️

✔️

✔️

✔️

[Modify or reset a password](/help/en/redis/user-guide/change-or-reset-the-password#concept-xqd-p2z-5db)

✔️

✔️

✔️

✔️

✔️

✔️

[Configure an IP address whitelist](/help/en/redis/getting-started/step-2-configure-whitelists#section-op5-3jf-vdb)

✔️

✔️

✔️

✔️

✔️

✔️

[Configure an IP address whitelist template](/help/en/redis/user-guide/configure-a-whitelist-template)

✔️

✔️

✔️

✔️

✔️

✔️

[Enable TLS encryption](/help/en/redis/user-guide/enable-tls-encryption#task-2314850)

✔️

✔️

✔️

✔️

✔️

✔️

[Enable password-free access in a VPC](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b)

✔️

✔️

✔️

✔️

✔️

✔️

[Enable release protection for an instance](/help/en/redis/user-guide/enable-the-release-protection-feature#task-2495422)

✔️

✔️

✔️

✔️

✔️

✔️

Performance and monitoring

[View monitoring data](/help/en/redis/user-guide/view-monitoring-data#task-645669)

✔️

✔️

✔️

✔️

✔️

✔️

[Configure alert rules](/help/en/redis/user-guide/alert-settings#concept-sj5-m2z-5db)

✔️

✔️

✔️

✔️

✔️

✔️

[Performance trends](/help/en/redis/user-guide/performance-trends#task-2490921)

✔️

✔️

✔️

✔️

✔️

✔️

[Real-time performance](/help/en/redis/user-guide/view-performance-metrics-in-real-time#task-2490929)

✔️

✔️

✔️

✔️

✔️

✔️

[Instance sessions](/help/en/redis/user-guide/instance-sessions#task-2490861)

✔️

✔️

✔️

✔️

✔️

✔️

[Slow requests](/help/en/redis/user-guide/slow-queries#task-2490919)

✔️

✔️

✔️

✔️

✔️

✔️

[Latency analysis](/help/en/redis/user-guide/latency-insights#task-2202504)

✔️

✔️

✔️

✔️

✔️

✔️

[Offline full key analysis](/help/en/redis/user-guide/offline-key-analysis#concept-ufz-byl-jgb)

✔️

✔️

✔️

✔️

✔️

✔️

[Top key analytics](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature#task-2096542)

✔️

✔️

✔️

✔️

✔️

✔️

[Diagnose an instance](/help/en/redis/user-guide/create-a-diagnostic-report/#concept-2045851)

✔️

✔️

✔️

✔️

✔️

✔️

Auditing and logs

[Audit logs](/help/en/redis/user-guide/enable-the-new-audit-log-feature/)

✔️

✔️

✔️

✔️

✔️

✔️

[Query slow query logs](/help/en/redis/user-guide/view-slow-logs#concept-nw5-xmv-rfb)

✔️

✔️

✔️

✔️

✔️

✔️

[Query running logs](/help/en/redis/user-guide/view-active-logs#concept-eqy-xgd-3gb)

✔️

✔️

✔️

✔️

✔️

✔️

Backup and recovery

[Automatic or manual backup](/help/en/redis/user-guide/automatic-or-manual-backup#task-2066397)

✔️

✔️

✔️

✔️

✔️

✔️

[Custom backup policies for manual backups](/help/en/redis/user-guide/automatic-or-manual-backup)

✔️

✔️

✔️

❌

❌

❌

[Delete manual backups](/help/en/redis/user-guide/automatic-or-manual-backup)

✔️

✔️

✔️

❌

❌

❌

[Download a backup set](/help/en/redis/user-guide/download-a-backup-file#concept-2066205)

✔️

✔️

✔️

✔️

✔️

✔️

[Use data flashback to restore data to a point in time](/help/en/redis/user-guide/use-data-flashback-to-restore-data-by-point-in-time#task-2337807)

✔️

✔️

✔️

✔️

✔️

✔️

[Restore data from a backup set to a new instance](/help/en/redis/user-guide/restore-data-from-a-backup-set-to-a-new-instance#task-2489089)

✔️

✔️

✔️

✔️

✔️️️️

✔️

Extensions

[Global Distributed Cache](/help/en/redis/user-guide/overview-of-global-distributed-cache-for-tair/#concept-qf1-mdk-zdb)

✔️

✔️

✔️

✔️

✔️

✔️

[Semi-synchronous mode](/help/en/redis/user-guide/modify-the-synchronization-mode-of-a-persistent-memory-optimized-instance)

✔️

✔️

✔️

❌

❌

❌

Proxy query cache

➖

✔️

✔️

➖

✔️

✔️

[Overview of Tair extended data structures](/help/en/redis/developer-reference/extended-data-structures-of-apsaradb-for-redis-enhanced-edition/#concept-2360176)

✔️

✔️

✔️

✔️

✔️

✔️

[Multi-threaded](/help/en/redis/product-overview/dram-based-instances#section-vlh-rn3-gb1)

✔️

✔️

✔️

✔️

✔️

✔️

## Product support

**Instance and creation method**

**Supported instance types**

**Supported engine versions**

**Supported architectures**

Cloud-native edition instance

[Step 1: Create an instance](/help/en/redis/getting-started/step-1-create-an-apsaradb-for-redis-instance#section-tb5-my5-tdb)

Redis Open-Source Edition

7.0

6.0

5.0

Standard architecture

Cluster architecture

Read/write splitting architecture

Tair (Enterprise Edition) [Memory-optimized](/help/en/redis/product-overview/dram-based-instances#concept-1254543)

Compatible with Redis 7.0

Compatible with Redis 6.0

Compatible with Redis 5.0

Standard architecture

Cluster architecture

Read/write splitting architecture

Tair (Enterprise Edition) [Persistent Memory-optimized](/help/en/redis/product-overview/persistent-memory-optimized-instances-1#concept-1952913)

Compatible with Redis 6.0

Standard architecture

Cluster architecture

Read/write splitting architecture

Tair (Enterprise Edition) [Disk-based](/help/en/redis/product-overview/essd-based-instances-1#concept-1952915)

Compatible with Redis 6.0

Standard architecture

Cluster architecture

Classic edition instance

[Step 1: Create an instance](/help/en/redis/getting-started/step-1-create-an-apsaradb-for-redis-instance#section-tb5-my5-tdb)

Redis Open-Source Edition

5.0

Cluster architecture

Standard architecture

Read/write splitting architecture

Tair (Enterprise Edition) [Memory-optimized](/help/en/redis/product-overview/dram-based-instances#concept-1254543)

5.0

Cluster architecture

Standard architecture

Read/write splitting architecture

## **FAQ**

-   Q: How do I convert a classic instance to a cloud-native instance?
    
    A: On the instance details page in the console, you can click **Convert To Cloud-native**. For more information, see [Convert to the cloud-native deployment mode](/help/en/redis/user-guide/change-to-the-cloud-native-deployment-mode).
