## Tair (Redis OSS-compatible)

**Category**

**Feature**

**Description**

**References**

Architecture

Master-replica architecture

A standard master-replica instance consists of one master node and one replica node.

[Standard master-replica instances](/help/en/redis/product-overview/standard-master-replica-instances)

Read/write splitting ️architecture

You can enable the read/write splitting feature. A read/write splitting instance consists of one master node and up to nine read replicas. You can change the number of read replicas at any time.

[Read/write splitting instances](/help/en/redis/product-overview/read-or-write-splitting-instances-1)

Cluster architecture

Tair (Redis OSS-compatible) supports the native Redis Cluster architecture and the cluster architecture in proxy mode. A cluster instance can contain 2 to 256 shards, with the memory of each shard ranging from 1 GB to 64 GB. The total memory capacity of shards ranges from 2 GB to 16 TB.

[Cluster instances](/help/en/redis/product-overview/cluster-master-replica-instances)

Standalone architecture

A standalone instance consists of only one node and its price is 50% that of a standard master-replica instance. The standalone architecture does not support backup and restoration, ensure data reliability, or provide service level agreement (SLA) guarantee. It is suitable for cache-only scenarios.

\-

Specification and architecture change

Configuration upgrade

You can upgrade the configurations of an instance by expanding the storage capacity of individual shards and increasing the number of shards.

[Change the configurations of an instance](/help/en/redis/user-guide/change-the-configurations-of-an-instance/)

Configuration downgrade

You can downgrade the configurations of an instance by reducing the storage capacity of individual shards and decreasing the number of shards.

[Change the configurations of an instance](/help/en/redis/user-guide/change-the-configurations-of-an-instance/)

Cross-architecture configuration change

Tair (Redis OSS-compatible) allows you to seamlessly migrate between the standalone, master-replica, read/write splitting, and cluster architectures without altering application code.

[Change the configurations of an instance](/help/en/redis/user-guide/change-the-configurations-of-an-instance/)

Version compatibility

Compatibility with Redis 4.0, 5.0, 6.0, and 7.0

Tair (Redis OSS-compatible) is compatible with Redis 4.0, 5.0, 6.0, and 7.0.

[New features and compatibility changes of major versions of Redis Open-Source Edition](/help/en/redis/support/new-features-of-apsaradb-for-redis)

Compatibility with Memcache

Tair (Redis OSS-compatible) is compatible with the Memcache API.

[What is ApsaraDB for Memcache?](/help/en/memcache/product-overview/product-overview)

Security

Dynamic masking of commands

High-risk commands can be dynamically disabled without the need to restart an instance.

[Disable high-risk commands](/help/en/redis/user-guide/disable-high-risk-commands)

Multi-account management

This feature allows you to create multiple accounts and grant permissions to each account.

[Create and manage database accounts](/help/en/redis/user-guide/create-and-manage-database-accounts)

IP address-based access control

This feature supports dynamic access control based on IP address whitelists.

[Configure whitelists](/help/en/redis/user-guide/configure-whitelists)

Associated security groups

Security groups can be used to dynamically control access.

[Step 2: Configure whitelists](/help/en/redis/getting-started/step-2-configure-whitelists#section-op5-3jf-vdb)

Write operation audit

This feature enables the logging of each write request, capturing details such as the exact time of the operation, client IP address, user account, and associated keys. This information is essential for analyzing data anomalies.

[Audit log feature](/help/en/redis/audit-logs)

Transparent data encryption (TDE)

TDE is supported.

[Enable TDE](/help/en/redis/user-guide/enable-tde)

IP whitelist template

An IP whitelist template can be associated with multiple instances to easily maintain the IP address whitelists of multiple instances.

[Configure an IP whitelist template](/help/en/redis/user-guide/configure-a-whitelist-template)

Transport Layer Security (TLS) and Secure Sockets Layer (SSL)

TLS and SSL encryption is supported.

[Enable TLS encryption](/help/en/redis/user-guide/enable-tls-encryption)

Recycle bin

The recycle bin feature is supported.

[Manage instances in the recycle bin](/help/en/redis/user-guide/manage-instances-in-the-recycle-bin)

Observability

Multiple metrics

Tair (Redis OSS-compatible) supports multiple metrics, such as Memory, Stats, CPU, and Keyspace. This allows you to monitor the status of instances from multiple perspectives.

[View performance monitoring data](/help/en/redis/user-guide/view-monitoring-data)

Latency insights

This feature offers a multi-dimensional, precise display of latency statistics for various Redis commands and special events to improve the efficiency of database troubleshooting.

[Use the latency insights feature](/help/en/redis/user-guide/latency-insights)

Analysis of large keys and hotkeys

Tair (Redis OSS-compatible) provides both offline analysis of large keys across the entire dataset and real-time analysis of requested keys. This allows for quick identification of large keys and hotkeys.

[Large keys and hotkeys](/help/en/redis/big-keys-and-hotkeys)

Slow query log analysis

This feature allows you to view and analyze slow query logs, giving you clues about how to optimize requests.

[Query slow query logs](/help/en/redis/user-guide/view-slow-logs)

Lifecycle management

Lifecycle management

This feature allows you to manage an instance throughout its lifecycle, including creating, releasing or unsubscribing from, changing the billing method of, upgrading the version of, and restarting the instance.

[Lifecycle management](/help/en/redis/lifecycle-management)

Backup and restoration

Manual backup

Manual backup is supported. Up to 15 backup data copies can be retained per day.

[Automatic or manual backup](/help/en/redis/user-guide/automatic-or-manual-backup)

Automatic backup

The system automatically performs backups based on the backup policy that you define.

[Automatic or manual backup](/help/en/redis/user-guide/automatic-or-manual-backup)

Full data restoration

Data can be restored from a backup set to a new instance.

[Restore data from a backup set to a new instance](/help/en/redis/user-guide/restore-data-from-a-backup-set-to-a-new-instance)

Data flashback

This feature allows you to restore an entire instance or specific keys of the instance to a point in time accurate to the second.

[Use data flashback to restore data by point in time](/help/en/redis/user-guide/use-data-flashback-to-restore-data-by-point-in-time)

High availability

Automatic and manual master-replica switchover

Tair (Redis OSS-compatible) supports both automatic high-availability failover and manual master-replica switchover. This facilitates real-time disaster recovery drills.

[Manually switch workloads from a master node to a replica node](/help/en/redis/user-guide/manually-switch-workloads-from-a-master-node-to-a-replica-node)

Restart or rebuild of proxy nodes

Tair (Redis OSS-compatible) allows you to manually restart or rebuild proxy nodes. This facilitates real-time disaster recovery drills and allows for proactive O&M in the event of service anomalies or elevated latency.

[Restart or rebuild proxy nodes](/help/en/redis/user-guide/restart-or-rebuild-a-proxy-node)

Connection management

Virtual private cloud (VPC) or vSwitch change

The VPC or vSwitch of an instance can be changed.

[Change the VPC or vSwitch of an instance](/help/en/redis/user-guide/change-the-vpc-or-vswitch-of-an-instance)

Applying for or releasing public endpoints

By default, Tair (Redis OSS-compatible) provides only VPC endpoints. If you want to connect to a Tair (Redis OSS-compatible) instance over the Internet, you can apply for a public endpoint for the instance.

[Apply for a public endpoint](/help/en/redis/user-guide/apply-for-a-public-endpoint-for-an-apsaradb-for-redis-instance)

Enabling or releasing private endpoints

Tair (Redis OSS-compatible) allows you to enable the direct connection mode, providing compatibility with the native Redis Cluster protocol.

[Enable the direct connection mode](/help/en/redis/user-guide/enable-the-direct-connection-mode)

Scalability

Manual and automatic activation of bandwidth plans

Tair (Redis OSS-compatible) provides the flexibility to manually or dynamically increase the bandwidth of an instance without adjusting the instance type to easily cope with traffic spikes.

[Enable bandwidth auto scaling](/help/en/redis/user-guide/enable-bandwidth-auto-scaling)

Imperceptible scaling

Instance scaling is completely imperceptible to clients. It does not cause service interruptions or put the instance into a read-only state. This feature meets the requirements for on-demand elastic resource scaling.

[Imperceptible scaling](/help/en/redis/product-overview/imperceptible-scaling)

Performance optimization

Proxy query cache

After proxy query cache is enabled, proxy nodes cache requests for hotkeys and their associated query results.

[Use proxy query cache to address issues caused by hotkeys](/help/en/redis/user-guide/use-read-write-splitting-to-mitigate-issues-caused-by-hotkeys)

Log management

Audit log

Tair (Redis OSS-compatible) allows you to enable the audit log feature and query and download audit logs.

[Audit log feature](/help/en/redis/audit-logs)

Query of slow query logs

Tair (Redis OSS-compatible) allows you to query the slow query logs of data nodes and proxy nodes.

[Query slow query logs](/help/en/redis/user-guide/view-slow-logs#8bf88ea11awb9)

Query of active logs

Tair (Redis OSS-compatible) allows you to query the active logs of an instance.

[Query active logs](/help/en/redis/user-guide/view-active-logs)

Event management

Change of the scheduled maintenance window of O&M events

Tair (Redis OSS-compatible) allows you to schedule O&M events to be performed during the maintenance window and change the maintenance window based on your business requirements.

[ModifyActiveOperationTasks](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyactiveoperationtasks-redis)

Query of O&M event progress

The progress of O&M events can be queried.

[DescribeActiveOperationTasks](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeactiveoperationtasks-redis)

Parameter management

Instance parameter configuration

Instance parameters can be configured.

[Configure instance parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/)

Parameter query

The parameter list can be queried.

[Parameters that can be configured for Redis Open-Source Edition instances](/help/en/redis/user-guide/supported-parameters)
