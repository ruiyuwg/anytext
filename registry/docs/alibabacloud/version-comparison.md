This topic describes the features available in PolarDB for MySQL 5.6, 5.7, and 8.0.

**Note**

Some features require specific prerequisites to be met, such as requiring a specific database engine revision version or later. For more information, see the prerequisites for each feature.

The following table describes the compatibility of features with various PolarDB for MySQL versions and editions, where ✔️ means compatible and ❌ means incompatible.

Feature

PolarDB for MySQL

PolarDB for MySQL 5.6

PolarDB for MySQL 5.7

PolarDB for MySQL 8.0.1

PolarDB for MySQL 8.0.2

Enterprise Edition

Enterprise Edition

Standard Edition

Enterprise Edition

Standard Edition

Enterprise Edition

Standard Edition

Cluster Edition

Cluster Edition

Cluster Edition

Multi-master Cluster (Limitless) Edition

Cluster Edition

Multi-master Cluster (Limitless) Edition

[Serverless](/help/en/polardb/polardb-for-mysql/user-guide/serverless-overview)

❌

✔️

✔️

✔️

❌

✔️

✔️

❌

❌

Cluster management

[Custom purchase](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-pay-as-you-go-cluster#task-1580301) and [Purchase a subscription cluster](/help/en/polardb/polardb-for-mysql/user-guide/purchase-a-subscription-cluster#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Release a cluster](/help/en/polardb/polardb-for-mysql/user-guide/release-a-cluster#task-1580309)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Clone a cluster](/help/en/polardb/polardb-for-mysql/user-guide/clone-a-cluster#task-2066650)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Enable binary logging](/help/en/polardb/polardb-for-mysql/user-guide/enable-binary-logging#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Set a maintenance window](/help/en/polardb/polardb-for-mysql/user-guide/set-a-maintenance-window#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Manage nodes](/help/en/polardb/polardb-for-mysql/user-guide/node-management#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[View or cancel a scheduled task](/help/en/polardb/polardb-for-mysql/user-guide/view-or-cancel-a-scheduled-task#task-2067266)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[View the database storage usage](/help/en/polardb/polardb-for-mysql/user-guide/view-the-database-storage-usage#task-1988903)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Cluster lock feature](/help/en/polardb/polardb-for-mysql/user-guide/cluster-lock-feature-1#task-2216393)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Add tags](/help/en/polardb/polardb-for-mysql/user-guide/bind-a-tag#task-2371693)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Filter clusters by tag](/help/en/polardb/polardb-for-mysql/user-guide/filter-clusters-by-tag#task-2372612)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[View tags bound to a cluster](/help/en/polardb/polardb-for-mysql/user-guide/view-tags-bound-to-a-cluster#task-2372623)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Unbind a tag](/help/en/polardb/polardb-for-mysql/user-guide/unbind-a-tag#task-2372593)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[View and manage scheduled events](/help/en/polardb/polardb-for-mysql/user-guide/view-and-manage-scheduled-events#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Data migration](/help/en/polardb/polardb-for-mysql/user-guide/overview-32#concept-nvg-y1z-zgb)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Data synchronization](/help/en/polardb/polardb-for-mysql/user-guide/overview-36#concept-2224772)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

Account management

[Register and log on to an Alibaba Cloud account](/help/en/polardb/polardb-for-mysql/user-guide/register-and-log-on-to-an-alibaba-cloud-account#concept-k5l-p4q-tdb)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Create and grant permissions to a RAM user](/help/en/polardb/polardb-for-mysql/user-guide/create-and-authorize-a-ram-user#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Create and manage a database account](/help/en/polardb/polardb-for-mysql/user-guide/create-and-manage-database-accounts#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Manage the password of a database account](/help/en/polardb/polardb-for-mysql/user-guide/manage-database-account-password#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

Data security and encryption

[Configure an IP whitelist](/help/en/polardb/polardb-for-mysql/user-guide/configure-an-ip-whitelist#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Configure SSL encryption](/help/en/polardb/polardb-for-mysql/user-guide/configure-ssl-encryption#task-2407132)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

[Configure TDE for a PolarDB cluster](/help/en/polardb/polardb-for-mysql/user-guide/configure-tde-for-a-polardb-for-mysql-cluster#task-2462076)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

[SQL firewalls](/help/en/polardb/polardb-for-mysql/user-guide/overview-47#concept-2218345)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

[Dynamic data masking](/help/en/polardb/polardb-for-mysql/user-guide/overview-55#task-2069406)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

[PolarDB Always-confidential](/help/en/polardb/polardb-for-mysql/user-guide/overview-6)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

PolarProxy

[Manage the endpoints of a cluster](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Connect to a cluster](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-a-cluster#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Private domain names](/help/en/polardb/polardb-for-mysql/user-guide/private-domain-names#task-2473542)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Read/write splitting](/help/en/polardb/polardb-for-mysql/user-guide/read-or-write-splitting-2#concept-hbh-m45-j2b)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Configure PolarProxy](/help/en/polardb/polardb-for-mysql/user-guide/configure-polarproxy#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Overload protection](/help/en/polardb/polardb-for-mysql/user-guide/overload-protection#concept-2268433)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

[Database management](/help/en/polardb/polardb-for-mysql/user-guide/database-management-4#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

Change of cluster configurations

[Manually change the specifications of a cluster](/help/en/polardb/polardb-for-mysql/user-guide/manually-upgrade-or-downgrade-a-polardb-cluster#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Auto scaling for clusters that do not support serverless](/help/en/polardb/polardb-for-mysql/user-guide/automatic-configuration-changes-auto-scaling#task-2085804)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

[Auto scaling by using DAS](/help/en/polardb/polardb-for-mysql/user-guide/configure-the-auto-scaling-feature-of-das#task-2085800)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

[Add or remove read-only nodes](/help/en/polardb/polardb-for-mysql/user-guide/add-or-remove-read-only-nodes#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Perform a temporary cluster upgrade](/help/en/polardb/polardb-for-mysql/user-guide/temporary-upgrade#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Upgrade an Archive Database Standalone Edition cluster to an Archive Database Cluster Edition cluster](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-an-archive-database-standalone-edition-cluster-to-an-archive-database-cluster-edition-cluster#task-2148630)

❌

❌

❌

✔️

❌

✔️

✔️

❌

✔️

Cold data archiving

[Enable cold data archiving](/help/en/polardb/polardb-for-mysql/user-guide/enable-cold-data-archiving#task-2274745)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

[Manually archive cold data in the CSV format](/help/en/polardb/polardb-for-mysql/user-guide/manage-cold-data-lifecycle-on-oss#task-2274746)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

[Data lifecycle management (DLM)](/help/en/polardb/polardb-for-mysql/user-guide/usage-4#task-2283597)

❌

❌

❌

✔️

❌

✔️

✔️

❌

✔️

[OSS foreign tables](/help/en/polardb/polardb-for-mysql/user-guide/oss-foreign-tables/)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

High availability

[Multi-zone deployment architecture](/help/en/polardb/polardb-for-mysql/user-guide/multi-zone-deployment#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Manually change the primary or secondary zone](/help/en/polardb/polardb-for-mysql/user-guide/change-the-primary-zone-and-vswitch-of-a-cluster#task-2093061)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

[Use the cross-zone automatic switchover feature](/help/en/polardb/polardb-for-mysql/user-guide/automatic-zone-switching)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

[Multi-node deployment architecture](/help/en/polardb/polardb-for-mysql/user-guide/multi-node-deployment#concept-2093121) and [Automatic failover and manual failover](/help/en/polardb/polardb-for-mysql/user-guide/automatic-failover-and-manual-failover#task-2317735)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

Multi-master Cluster (Limitless) Edition

[Multi-master Cluster (Limitless)](/help/en/polardb/polardb-for-mysql/user-guide/usage-1#concept-2165890)

❌

❌

❌

❌

✔️

❌

❌

✔️

❌

[Add or delete a global read-only node](/help/en/polardb/polardb-for-mysql/user-guide/add-or-delete-the-global-read-only-node#main-2266804)

❌

❌

❌

❌

✔️

❌

❌

✔️

❌

[X-Engine](/help/en/polardb/polardb-for-mysql/user-guide/instructions-for-use-x-engine#concept-2010742)

❌

❌

❌

✔️

❌

❌

✔️

❌

❌

Global database networks (GDNs)

[Create and release a GDN](/help/en/polardb/polardb-for-mysql/user-guide/create-and-release-a-gdn#task-2449685)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

[Manage a secondary cluster](/help/en/polardb/polardb-for-mysql/user-guide/manage-a-secondary-cluster#task-2451693)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

[Connect to a GDN](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-a-gdn#task-2451585)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

Backup and restoration

[Backup method 1: Automatic backup](/help/en/polardb/polardb-for-mysql/user-guide/backup-method-1-automatic-backup#task-2066823)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Backup method 2: Manual backup](/help/en/polardb/polardb-for-mysql/user-guide/backup-method-2-manual-backup#task-2066865)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Method 1 for full restoration: Restore data from a backup set](/help/en/polardb/polardb-for-mysql/user-guide/method-1-for-cluster-restoration-restore-from-a-backup-set#task-2066874)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Method 2 for full restoration: Restore data to an earlier point in time](/help/en/polardb/polardb-for-mysql/user-guide/method-2-for-full-restoration-point-in-time-restoration#task-2066967)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Method 1 for database and table restoration: Restore data from a backup set](/help/en/polardb/polardb-for-mysql/user-guide/method-1-for-database-and-table-restoration-restore-data-from-a-backup-set#task-2070994)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

[Method 2 for database and table restoration: Restore data to an earlier point in time](/help/en/polardb/polardb-for-mysql/user-guide/method-2-for-database-and-table-restoration-restore-data-to-a-point-in-time#task-2070997)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

[Flashback queries](/help/en/polardb/polardb-for-mysql/user-guide/flashback-queries#concept-2108825)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Failover with hot replica](/help/en/polardb/polardb-for-mysql/user-guide/overview-28#concept-2188988)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

[Elastic parallel query](/help/en/polardb/polardb-for-mysql/user-guide/overview-22#concept-1563422)

❌

❌

❌

✔️

❌

✔️

✔️

❌

✔️

Parallel queries

[Hash joins in parallel queries](/help/en/polardb/polardb-for-mysql/user-guide/hash-joins-in-parallel-queries#concept-2567762)

❌

❌

❌

❌

❌

✔️

✔️

❌

✔️

[Use Semijoins to accelerate parallel queries](/help/en/polardb/polardb-for-mysql/user-guide/semijoins-in-parallel-queries#concept-2567760)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

[Use window functions to accelerate parallel queries](/help/en/polardb/polardb-for-mysql/user-guide/parallel-execution-of-window-functions#concept-2184944)

❌

❌

❌

✔️

❌

✔️

✔️

❌

✔️

[Use the ROLLUP syntax to accelerate parallel queries](/help/en/polardb/polardb-for-mysql/user-guide/use-rollup-to-improve-performance#concept-2567757)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

[IMCIs](/help/en/polardb/polardb-for-mysql/user-guide/overview-29#topic-2175614)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

[PolarDB for AI](/help/en/polardb/polardb-for-mysql/user-guide/overview-41#concept-2227826)

❌

❌

❌

✔️

❌

❌

✔️

❌

❌

Cluster recycle bin

[Restore a released cluster](/help/en/polardb/polardb-for-mysql/user-guide/restore-a-released-cluster#task-2065860)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Delete a released cluster](/help/en/polardb/polardb-for-mysql/user-guide/delete-a-released-cluster#task-2065860)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Autonomy center](/help/en/polardb/polardb-for-mysql/user-guide/autonomy-center#task-2499309)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Session management](/help/en/polardb/polardb-for-mysql/user-guide/session-management#task-2499331)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Real-time Monitoring](/help/en/polardb/polardb-for-mysql/user-guide/real-time-monitoring#task-2499587)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

Monitoring and optimization

[Storage analysis](/help/en/polardb/polardb-for-mysql/user-guide/storage-analysis#task-2499598)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Deadlock analysis](/help/en/polardb/polardb-for-mysql/user-guide/deadlock-analysis#task-2499431)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Diagnostic reports](/help/en/polardb/polardb-for-mysql/user-guide/diagnostic-reports#task-2499591)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Performance Insight (original version)](/help/en/polardb/polardb-for-mysql/user-guide/performance-insight#task-1580351)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Performance insight (new)](/help/en/polardb/polardb-for-mysql/user-guide/performance-insight-new#task-2280285)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Performance monitoring](/help/en/polardb/polardb-for-mysql/user-guide/performance-monitoring/)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Slow SQL queries](/help/en/polardb/polardb-for-mysql/user-guide/slow-sql-query#task-1580361)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[️SQL Explorer and Audit](/help/en/polardb/polardb-for-mysql/user-guide/sql-explorer-and-audit#task-1580371)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

Version management

[Revision version](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-the-cluster-version#task-2449714)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Major version upgrades](/help/en/polardb/polardb-for-mysql/user-guide/overview-3#main-2251079)

✔️

✔️

✔️

✔️

❌

✔️

✔️

❌

✔️

Cluster parameters

[Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Apply a parameter template](/help/en/polardb/polardb-for-mysql/user-guide/apply-a-parameter-template#task-2056643)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[High-performance parameter templates](/help/en/polardb/polardb-for-mysql/user-guide/high-performance-parameter-templates#concept-2185273)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

Transaction system optimization

[CTS](/help/en/polardb/polardb-for-mysql/user-guide/cts#concept-2200030)

❌

❌

❌

✔️

❌

✔️

✔️

❌

❌

[PolarDB-SCC](/help/en/polardb/polardb-for-mysql/user-guide/global-consistency-high-performance-mode/)

❌

✔️

✔️

✔️

❌

✔️

✔️

❌

❌

DDL performance optimization

[Instant ADD COLUMN](/help/en/polardb/polardb-for-mysql/user-guide/instant-add-column#concept-2021980)

❌

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Parallel DDL](/help/en/polardb/polardb-for-mysql/user-guide/parallel-ddl#concept-1998449)

❌

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[DDL read-ahead](/help/en/polardb/polardb-for-mysql/user-guide/ddl-read-ahead#concept-2223379)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[DDL multi-way merging and sorting](/help/en/polardb/polardb-for-mysql/user-guide/ddl-multi-way-merging-and-sorting#concept-2237483)

❌

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[DDL asynchronous I/O](/help/en/polardb/polardb-for-mysql/user-guide/ddl-asynchronous-i-or-o#concept-2237483)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

[Faster TRUNCATE/DROP TABLE](/help/en/polardb/polardb-for-mysql/user-guide/faster-truncate-or-drop-table#concept-2242146)

❌

✔️

✔️

❌

❌

❌

❌

❌

❌

DDL stability optimization

[Nonblocking DDL statements](/help/en/polardb/polardb-for-mysql/user-guide/nonblocking-ddl-statements#concept-2223849)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

[DDL physical replication optimization](/help/en/polardb/polardb-for-mysql/user-guide/ddl-physical-replication-optimization#concept-2021978)

❌

✔️

✔️

✔️

✔️

✔️

❌

✔️

❌

[Async metadata lock replication](/help/en/polardb/polardb-for-mysql/user-guide/async-metadata-lock-replication#concept-2021981)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Prevent long-running transactions on read-only nodes from blocking DDL operations](/help/en/polardb/polardb-for-mysql/user-guide/prevent-long-running-transactions-on-read-only-nodes-from-blocking-ddl-operations#task-1580301)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

DDL ease of use optimization

[Preemptive DDL](/help/en/polardb/polardb-for-mysql/user-guide/preemptible-ddl)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

[View the DDL statement execution status and MDL status](/help/en/polardb/polardb-for-mysql/user-guide/view-the-execution-status-of-ddl-statements-and-metadata-locks#concept-2167094)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

DDL security optimization

[Table recycle bin](/help/en/polardb/polardb-for-mysql/user-guide/table-recycle-bin)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

Partitioned tables

[Modify a partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/modify-a-partitioned-table/)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Interval range partitioning](/help/en/polardb/polardb-for-mysql/user-guide/overview-64#concept-2042828)

❌

❌

❌

✔️

❌

✔️

✔️

❌

✔️

[Partial indexes](/help/en/polardb/polardb-for-mysql/user-guide/overview-5#main-2275322)

❌

❌

❌

✔️

❌

✔️

✔️

❌

✔️

[GSIs](/help/en/polardb/polardb-for-mysql/user-guide/global-secondary-index#main-2261525)

❌

❌

❌

✔️

❌

✔️

✔️

❌

✔️

[Online partition maintenance](/help/en/polardb/polardb-for-mysql/user-guide/online-partition-maintenance#concept-2182330)

❌

❌

❌

✔️

❌

✔️

✔️

❌

✔️

[Create a read-only partition](/help/en/polardb/polardb-for-mysql/user-guide/create-a-read-only-partition#concept-2209385)

❌

❌

❌

✔️

❌

✔️

✔️

❌

✔️

[Create a hybrid partitioned table](/help/en/polardb/polardb-for-mysql/user-guide/create-a-hybrid-partitioned-table#concept-2234558)

❌

❌

❌

✔️

❌

✔️

✔️

❌

✔️

[Automated management of partitions](/help/en/polardb/polardb-for-mysql/user-guide/automated-management-of-partitions#concept-2222401)

❌

❌

❌

✔️

❌

✔️

✔️

❌

✔️

Query optimizers

[Subquery folding](/help/en/polardb/polardb-for-mysql/user-guide/subquery-collapse)

❌

❌

❌

❌

❌

❌

✔️

❌

✔️

[Convert IN predicates into joins](/help/en/polardb/polardb-for-mysql/user-guide/in-predicate-conversion)

❌

❌

❌

❌

❌

❌

✔️

❌

✔️

[Subquery unnesting](/help/en/polardb/polardb-for-mysql/user-guide/subquery-decorrelation#concept-2182698)

❌

❌

❌

❌

❌

❌

✔️

❌

✔️

[Left join elimination](/help/en/polardb/polardb-for-mysql/user-guide/left-join-elimination)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

[Push down a condition from the HAVING clause to the WHERE clause](/help/en/polardb/polardb-for-mysql/user-guide/condition-pushdown)

❌

❌

❌

❌

❌

❌

✔️

❌

✔️

[Push down a condition from the WHERE clause to derived tables](/help/en/polardb/polardb-for-mysql/user-guide/where-to-derived-tables)

❌

❌

❌

❌

❌

❌

✔️

❌

✔️

[Join condition pushdown](/help/en/polardb/polardb-for-mysql/user-guide/join-condition-pushdown)

❌

❌

❌

❌

❌

❌

✔️

❌

✔️

[Cost-based query transformation](/help/en/polardb/polardb-for-mysql/user-guide/cost-based-query-transformation)

❌

❌

❌

❌

❌

❌

✔️

❌

✔️

[Statement outline](/help/en/polardb/polardb-for-mysql/user-guide/statement-outline)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Auto plan cache](/help/en/polardb/polardb-for-mysql/user-guide/auto-plan-cache)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

[Adaptive execution plan switching](/help/en/polardb/polardb-for-mysql/user-guide/adaptive-execution-capability)

❌

❌

❌

✔️

✔️

✔️

❌

✔️

❌

[LIMIT OFFSET pushdown](/help/en/polardb/polardb-for-mysql/user-guide/limit-offset-pushdown)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

[Full predicate pushdown](/help/en/polardb/polardb-for-mysql/user-guide/full-predicate-pushdown)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

[Fast traverse](/help/en/polardb/polardb-for-mysql/user-guide/fast-traverse)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

[Bloom filter pushdown](/help/en/polardb/polardb-for-mysql/user-guide/bloom-filter-pushdown)

❌

❌

❌

❌

❌

❌

✔️

❌

✔️

High concurrency optimization

[Concurrency control](/help/en/polardb/polardb-for-mysql/user-guide/concurrency-control#concept-1663731)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Inventory hints](/help/en/polardb/polardb-for-mysql/user-guide/inventory-hints#concept-2381921)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Statement queue](/help/en/polardb/polardb-for-mysql/user-guide/statement-queue#task-2315487)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Hot row update optimization](/help/en/polardb/polardb-for-mysql/user-guide/hot-row-optimization#concept-2567754)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Thread pool](/help/en/polardb/polardb-for-mysql/user-guide/thread-pool#concept-2473266)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[B-tree concurrency control optimization](/help/en/polardb/polardb-for-mysql/user-guide/b-tree-concurrency-control-optimization)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

Performance monitoring

[Performance Agent](/help/en/polardb/polardb-for-mysql/user-guide/performance-agent#concept-2567756)

❌

❌

❌

❌

❌

❌

✔️

❌

✔️

[SQL Trace](/help/en/polardb/polardb-for-mysql/user-guide/usage-2#main-2270206)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

[SQL detail](/help/en/polardb/polardb-for-mysql/user-guide/sql-detail)

❌

❌

❌

✔️

✔️

✔️

✔️

✔️

✔️

Other features

[Tenant management and resource isolation](/help/en/polardb/polardb-for-mysql/user-guide/multi-tenant-management/)

❌

❌

❌

❌

❌

❌

✔️

❌

✔️

[RDMA-based log shipment](/help/en/polardb/polardb-for-mysql/user-guide/rdma-log-transfer)

❌

❌

❌

✔️

✔️

✔️

❌

✔️

❌

[Warm Buffer Pool](/help/en/polardb/polardb-for-mysql/user-guide/persistent-cache-pool-warm-buffer-pool)

❌

❌

❌

❌

❌

❌

✔️

❌

✔️

[Fast Query Cache](/help/en/polardb/polardb-for-mysql/user-guide/fast-query-cache#concept-1955745)

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

✔️

[Returning](/help/en/polardb/polardb-for-mysql/user-guide/returning#concept-2042118)

❌

✔️

✔️

❌

❌

❌

❌

❌

❌

[Partial Result Cache](/help/en/polardb/polardb-for-mysql/user-guide/partial-result-cache)

❌

❌

❌

❌

❌

❌

✔️

❌

✔️

[Readable Protobuf](/help/en/polardb/polardb-for-mysql/user-guide/readable-protobuf#concept-2252665)

❌

❌

❌

❌

❌

❌

✔️

❌

✔️
