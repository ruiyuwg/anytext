This topic provides an overview of the features that are supported by ApsaraDB RDS instances that run different PostgreSQL versions. You can purchase an ApsaraDB RDS for PostgreSQL instance that provides the required features. You can also query the features that are provided by an existing ApsaraDB RDS for PostgreSQL instance. In the following tables, ticks (️️️✔️) indicate that a feature is supported and crosses (❌) indicate that a feature is not supported.

## **Features of available PostgreSQL versions**

## PostgreSQL 17

**Feature**

**RDS Cluster Edition**

**RDS High-availability Edition**

**RDS Basic Edition**

**Subscription/Pay-as-you-go**

**Subscription/Pay-as-you-go**

**Serverless**

**Subscription/Pay-as-you-go**

**Serverless**

[Migration to the cloud](/help/en/rds/apsaradb-rds-for-postgresql/cloud-migration/)

✔️

✔️

✔️

✔️

✔️

[Data migration](/help/en/rds/apsaradb-rds-for-postgresql/data-migration-2/)

✔️

✔️

✔️

✔️

✔️

[Data synchronization](/help/en/rds/apsaradb-rds-for-postgresql/manage-dataconnectors/)

✔️

✔️

✔️

✔️

✔️

[Change tracking](/help/en/rds/apsaradb-rds-for-postgresql/change-tracking/)

✔️

✔️

✔️

✔️

✔️

[Upgrade of the major engine version](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/)

N/A

N/A

N/A

N/A

N/A

[Minor engine version update](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Instance creation](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance-1)

✔️

✔️

✔️

✔️

✔️

[Specification change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

❌

✔️

❌

[Instance restart](/help/en/rds/apsaradb-rds-for-postgresql/restart-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Change of the scaling range of RDS Capacity Units (RCUs)](/help/en/rds/apsaradb-rds-for-postgresql/change-the-scaling-range-of-rcus-for-a-serverless-apsaradb-rds-for-postgresql-instance#main-2272489)

❌

❌

✔️

❌

✔️

[Automatic start and stop](/help/en/rds/apsaradb-rds-for-postgresql/configure-the-automatic-start-and-stop-feature-for-a-serverless-apsaradb-rds-for-postgresql-instance)

❌

❌

✔️

❌

✔️

[RCU scaling policy change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-scaling-policy-of-rcus-for-a-serverless-apsaradb-rds-for-postgresql-instance)

❌

❌

✔️

❌

✔️

[Automatic or manual primary/secondary switchover](/help/en/rds/apsaradb-rds-for-postgresql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-postgresql-instances)

✔️

✔️

✔️

❌

❌

[Maintenance window setting](/help/en/rds/apsaradb-rds-for-postgresql/set-the-maintenance-window-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Automatic storage expansion](/help/en/rds/apsaradb-rds-for-postgresql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Cross-zone migration](/help/en/rds/apsaradb-rds-for-postgresql/migrate-an-apsaradb-rds-for-postgresql-instance-across-zones-in-the-same-region)

❌

✔️

❌

✔️

❌

[Instance release](/help/en/rds/apsaradb-rds-for-postgresql/release-or-unsubscribe-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Release protection](/help/en/rds/apsaradb-rds-for-postgresql/enable-or-disable-the-release-protection-feature-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Parameter configuration](/help/en/rds/apsaradb-rds-for-postgresql/modify-the-parameters-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Query and change of the data replication mode](/help/en/rds/apsaradb-rds-for-postgresql/change-the-data-replication-mode-of-an-apsaradb-rds-for-postgresql-instance)

❌

✔️

✔️

❌

❌

[Recycle bin](/help/en/rds/apsaradb-rds-for-postgresql/manage-apsaradb-rds-for-postgresql-instances-in-the-recycle-bin)

✔️

✔️

✔️

✔️

✔️

[Babelfish for RDS PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/babelfish-for-apsaradb-rds-for-postgresql/)

❌

❌

❌

❌

❌

[Read-only instance](/help/en/rds/apsaradb-rds-for-postgresql/rds-for-postgresql-read-only-instances/)

❌

✔️

❌

❌

❌

[Database proxy (read/write splitting)](/help/en/rds/apsaradb-rds-for-postgresql/database-proxy/)

❌

✔️

❌

❌

❌

[Account creation](/help/en/rds/apsaradb-rds-for-postgresql/create-an-account-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Password reset](/help/en/rds/apsaradb-rds-for-postgresql/reset-the-password-of-an-account-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Connection to a self-managed domain](/help/en/rds/apsaradb-rds-for-postgresql/connect-an-apsaradb-rds-for-postgresql-instance-to-a-self-managed-ad-domain)

✔️

✔️

✔️

✔️

✔️

[Account locking or deletion](/help/en/rds/apsaradb-rds-for-postgresql/lock-or-delete-an-account-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Connection to an RDS instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Public endpoint enabling or disabling](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Viewing and change of the internal and public endpoints and port numbers](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Network type change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-network-type-of-an-apsaradb-rds-for-postgresql-instance)

❌

❌

❌

❌

❌

[vSwitch change](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-a-different-vswitch)

✔️

✔️

❌

✔️

❌

[Database creation](/help/en/rds/apsaradb-rds-for-postgresql/create-a-database-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Database deletion](/help/en/rds/apsaradb-rds-for-postgresql/delete-a-database-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Time zone change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-time-zone-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Extensions](/help/en/rds/apsaradb-rds-for-postgresql/extensions-supported-by-apsaradb-rds-for-postgresql)

✔️

✔️

✔️

✔️

✔️

[Enhanced Monitoring metric check](/help/en/rds/apsaradb-rds-for-postgresql/view-the-enhanced-monitoring-metrics-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Alert management](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-alert-rules-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Switching to the enhanced whitelist mode](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-the-enhanced-whitelist-mode#concept-vzw-gq2-x2b)

❌

❌

❌

❌

❌

[Whitelist configuration](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance-1)

✔️

✔️

✔️

✔️

✔️

[SSL encryption](/help/en/rds/apsaradb-rds-for-postgresql/ssl-encryption/)

✔️

✔️

❌

✔️

❌

[Cloud disk encryption](/help/en/rds/apsaradb-rds-for-postgresql/configure-disk-encryption-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

❌

✔️

❌

[Always-confidential database creation](/help/en/rds/apsaradb-rds-for-postgresql/fully-encrypted-database/)

✔️

-   Instance that does not use the Intel SGX-based security-enhanced instance type: ✔️
    
-   Instance that uses the Intel SGX-based security-enhanced instance type: ❌
    

❌

✔️

❌

[Transparent Data Encryption (TDE)](/help/en/doc-detail/465651.html#concept-2272850)

✔️

✔️

✔️

✔️

✔️

[SQL Audit (database audit)](/help/en/rds/use-the-sql-audit-feature-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Log management](/help/en/rds/apsaradb-rds-for-postgresql/view-the-logs-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Task Center](/help/en/rds/apsaradb-rds-for-postgresql/use-task-center-for-an-apsaradb-rds-instance-2)

✔️

✔️

✔️

✔️

✔️

[Backup data](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Cross-region backup](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

❌

✔️

❌

[High-frequency snapshot backup](/help/en/rds/apsaradb-rds-for-postgresql/use-the-high-frequency-snapshot-backup-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2232533)

❌

✔️

❌

✔️

❌

[Backup download](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance#concept-yjb-pn4-ydb)

✔️

✔️

✔️

❌

✔️

[Backup deletion](/help/en/rds/apsaradb-rds-for-postgresql/delete-backup-files-or-reduce-the-size-of-backup-files)

✔️

✔️

✔️

✔️

✔️

[Data restoration](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Restoration of individual databases and tables](/help/en/rds/apsaradb-rds-for-postgresql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-postgresql-instance#main-2318078)

✔️

✔️

❌

✔️

❌

[Cross-region restoration](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-across-regions)

✔️

✔️

❌

✔️

❌

[Database Autonomy Service (DAS)](/help/en/rds/apsaradb-rds-for-postgresql/performance-optimization-and-diagnosis-1/)

✔️

✔️

✔️

❌

❌

[Tag creation](/help/en/rds/apsaradb-rds-for-postgresql/add-tags-to-apsaradb-rds-instances-2)

✔️

✔️

✔️

✔️

✔️

[Tag deletion](/help/en/rds/apsaradb-rds-for-postgresql/remove-tags-from-an-apsaradb-rds-for-mysql-instance-2)

✔️

✔️

✔️

✔️

✔️

## PostgreSQL 16

**Feature**

**RDS Cluster Edition**

**RDS High-availability Edition**

**RDS Basic Edition**

**Subscription/Pay-as-you-go**

**Subscription/Pay-as-you-go**

**Serverless**

**Subscription/Pay-as-you-go**

**Serverless**

[Migration to the cloud](/help/en/rds/apsaradb-rds-for-postgresql/cloud-migration/)

✔️

✔️

✔️

✔️

✔️

[Data migration](/help/en/rds/apsaradb-rds-for-postgresql/data-migration-2/)

✔️

✔️

✔️

✔️

✔️

[Data synchronization](/help/en/rds/apsaradb-rds-for-postgresql/manage-dataconnectors/)

✔️

✔️

✔️

✔️

✔️

[Change tracking](/help/en/rds/apsaradb-rds-for-postgresql/change-tracking/)

✔️

✔️

✔️

✔️

✔️

[Major engine version upgrade](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/)

✔️

✔️

✔️

✔️

✔️

[Minor engine version update](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Instance creation](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance-1)

✔️

✔️

✔️

✔️

✔️

[Specification change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

❌

✔️

❌

[Instance restart](/help/en/rds/apsaradb-rds-for-postgresql/restart-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[RCU scaling range change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-scaling-range-of-rcus-for-a-serverless-apsaradb-rds-for-postgresql-instance#main-2272489)

❌

❌

✔️

❌

✔️

[Automatic start and stop](/help/en/rds/apsaradb-rds-for-postgresql/configure-the-automatic-start-and-stop-feature-for-a-serverless-apsaradb-rds-for-postgresql-instance)

❌

❌

✔️

❌

✔️

[RCU scaling policy change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-scaling-policy-of-rcus-for-a-serverless-apsaradb-rds-for-postgresql-instance)

❌

❌

✔️

❌

✔️

[Automatic or manual primary/secondary switchover](/help/en/rds/apsaradb-rds-for-postgresql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-postgresql-instances)

✔️

✔️

✔️

❌

❌

[Maintenance window setting](/help/en/rds/apsaradb-rds-for-postgresql/set-the-maintenance-window-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Automatic storage expansion](/help/en/rds/apsaradb-rds-for-postgresql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Cross-zone migration](/help/en/rds/apsaradb-rds-for-postgresql/migrate-an-apsaradb-rds-for-postgresql-instance-across-zones-in-the-same-region)

❌

✔️

❌

✔️

❌

[Instance release](/help/en/rds/apsaradb-rds-for-postgresql/release-or-unsubscribe-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Release protection](/help/en/rds/apsaradb-rds-for-postgresql/enable-or-disable-the-release-protection-feature-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Parameter configuration](/help/en/rds/apsaradb-rds-for-postgresql/modify-the-parameters-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Query and change of the data replication mode](/help/en/rds/apsaradb-rds-for-postgresql/change-the-data-replication-mode-of-an-apsaradb-rds-for-postgresql-instance)

❌

✔️

✔️

❌

❌

[Recycle bin](/help/en/rds/apsaradb-rds-for-postgresql/manage-apsaradb-rds-for-postgresql-instances-in-the-recycle-bin)

✔️

✔️

✔️

✔️

✔️

[Babelfish for RDS PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/babelfish-for-apsaradb-rds-for-postgresql/)

❌

❌

❌

❌

❌

[Read-only instance](/help/en/rds/apsaradb-rds-for-postgresql/rds-for-postgresql-read-only-instances/)

❌

✔️

❌

❌

❌

[Database proxy (read/write splitting)](/help/en/rds/apsaradb-rds-for-postgresql/database-proxy/)

❌

✔️

❌

❌

❌

[Account creation](/help/en/rds/apsaradb-rds-for-postgresql/create-an-account-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Password reset](/help/en/rds/apsaradb-rds-for-postgresql/reset-the-password-of-an-account-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Connection to a self-managed domain](/help/en/rds/apsaradb-rds-for-postgresql/connect-an-apsaradb-rds-for-postgresql-instance-to-a-self-managed-ad-domain)

✔️

✔️

✔️

✔️

✔️

[Account locking or deletion](/help/en/rds/apsaradb-rds-for-postgresql/lock-or-delete-an-account-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Connection to an RDS instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Public endpoint enabling or disabling](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Viewing and change of the internal and public endpoints and port numbers](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Network type change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-network-type-of-an-apsaradb-rds-for-postgresql-instance)

❌

❌

❌

❌

❌

[vSwitch change](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-a-different-vswitch)

✔️

✔️

❌

✔️

❌

[Database creation](/help/en/rds/apsaradb-rds-for-postgresql/create-a-database-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Database deletion](/help/en/rds/apsaradb-rds-for-postgresql/delete-a-database-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Time zone change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-time-zone-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Extensions](/help/en/rds/apsaradb-rds-for-postgresql/extensions-supported-by-apsaradb-rds-for-postgresql)

✔️

✔️

✔️

✔️

✔️

[Enhanced Monitoring metric check](/help/en/rds/apsaradb-rds-for-postgresql/view-the-enhanced-monitoring-metrics-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Alert management](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-alert-rules-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Switching to the enhanced whitelist mode](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-the-enhanced-whitelist-mode#concept-vzw-gq2-x2b)

❌

❌

❌

❌

❌

[Whitelist configuration](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance-1)

✔️

✔️

✔️

✔️

✔️

[SSL encryption](/help/en/rds/apsaradb-rds-for-postgresql/ssl-encryption/)

✔️

✔️

❌

✔️

❌

[Cloud disk encryption](/help/en/rds/apsaradb-rds-for-postgresql/configure-disk-encryption-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

❌

✔️

❌

[Always-confidential database creation](/help/en/rds/apsaradb-rds-for-postgresql/fully-encrypted-database/)

✔️

-   Instance that does not use the Intel SGX-based security-enhanced instance type: ✔️
    
-   Instance that uses the Intel SGX-based security-enhanced instance type: ❌
    

❌

✔️

❌

[Transparent Data Encryption (TDE)](/help/en/doc-detail/465651.html#concept-2272850)

✔️

✔️

✔️

✔️

✔️

[SQL Audit (database audit)](/help/en/rds/use-the-sql-audit-feature-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Log management](/help/en/rds/apsaradb-rds-for-postgresql/view-the-logs-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Task Center](/help/en/rds/apsaradb-rds-for-postgresql/use-task-center-for-an-apsaradb-rds-instance-2)

✔️

✔️

✔️

✔️

✔️

[Backup data](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Cross-region backup](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

❌

✔️

❌

[High-frequency snapshot backup](/help/en/rds/apsaradb-rds-for-postgresql/use-the-high-frequency-snapshot-backup-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2232533)

❌

✔️

❌

✔️

❌

[Backup download](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance#concept-yjb-pn4-ydb)

✔️

✔️

✔️

❌

✔️

[Backup deletion](/help/en/rds/apsaradb-rds-for-postgresql/delete-backup-files-or-reduce-the-size-of-backup-files)

✔️

✔️

✔️

✔️

✔️

[Data restoration](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Restoration of individual databases and tables](/help/en/rds/apsaradb-rds-for-postgresql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-postgresql-instance#main-2318078)

✔️

✔️

❌

✔️

❌

[Cross-region restoration](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-across-regions)

✔️

✔️

❌

✔️

❌

[Database Autonomy Service (DAS)](/help/en/rds/apsaradb-rds-for-postgresql/performance-optimization-and-diagnosis-1/)

✔️

✔️

✔️

❌

❌

[Tag creation](/help/en/rds/apsaradb-rds-for-postgresql/add-tags-to-apsaradb-rds-instances-2)

✔️

✔️

✔️

✔️

✔️

[Tag deletion](/help/en/rds/apsaradb-rds-for-postgresql/remove-tags-from-an-apsaradb-rds-for-mysql-instance-2)

✔️

✔️

✔️

✔️

✔️

## PostgreSQL 15

**Feature**

**RDS Cluster Edition**

**RDS High-availability Edition**

**RDS Basic Edition**

**Subscription/Pay-as-you-go**

**Subscription/Pay-as-you-go**

**Serverless**

**Subscription/Pay-as-you-go**

**Serverless**

[Migration to the cloud](/help/en/rds/apsaradb-rds-for-postgresql/cloud-migration/)

✔️

✔️

✔️

✔️

✔️

[Data migration](/help/en/rds/apsaradb-rds-for-postgresql/data-migration-2/)

✔️

✔️

✔️

✔️

✔️

[Data synchronization](/help/en/rds/apsaradb-rds-for-postgresql/manage-dataconnectors/)

✔️

✔️

✔️

✔️

✔️

[Change tracking](/help/en/rds/apsaradb-rds-for-postgresql/change-tracking/)

✔️

✔️

✔️

✔️

✔️

[Major engine version upgrade](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/)

✔️

✔️

✔️

✔️

✔️

[Minor engine version update](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Instance creation](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance-1)

✔️

✔️

✔️

✔️

✔️

[Specification change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

❌

✔️

❌

[Instance restart](/help/en/rds/apsaradb-rds-for-postgresql/restart-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Change of the scaling range of RDS Capacity Units (RCUs)](/help/en/rds/apsaradb-rds-for-postgresql/change-the-scaling-range-of-rcus-for-a-serverless-apsaradb-rds-for-postgresql-instance#main-2272489)

❌

❌

✔️

❌

✔️

[Automatic start and stop](/help/en/rds/apsaradb-rds-for-postgresql/configure-the-automatic-start-and-stop-feature-for-a-serverless-apsaradb-rds-for-postgresql-instance)

❌

❌

✔️

❌

✔️

[RCU scaling policy change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-scaling-policy-of-rcus-for-a-serverless-apsaradb-rds-for-postgresql-instance)

❌

❌

✔️

❌

✔️

[Automatic or manual primary/secondary switchover](/help/en/rds/apsaradb-rds-for-postgresql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-postgresql-instances)

✔️

✔️

✔️

❌

❌

[Maintenance window setting](/help/en/rds/apsaradb-rds-for-postgresql/set-the-maintenance-window-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Automatic storage expansion](/help/en/rds/apsaradb-rds-for-postgresql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Cross-zone migration](/help/en/rds/apsaradb-rds-for-postgresql/migrate-an-apsaradb-rds-for-postgresql-instance-across-zones-in-the-same-region)

❌

✔️

❌

✔️

❌

[Instance release](/help/en/rds/apsaradb-rds-for-postgresql/release-or-unsubscribe-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Release protection](/help/en/rds/apsaradb-rds-for-postgresql/enable-or-disable-the-release-protection-feature-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Parameter configuration](/help/en/rds/apsaradb-rds-for-postgresql/modify-the-parameters-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Query and change of the data replication mode](/help/en/rds/apsaradb-rds-for-postgresql/change-the-data-replication-mode-of-an-apsaradb-rds-for-postgresql-instance)

❌

✔️

✔️

❌

❌

[Recycle bin](/help/en/rds/apsaradb-rds-for-postgresql/manage-apsaradb-rds-for-postgresql-instances-in-the-recycle-bin)

✔️

✔️

✔️

✔️

✔️

[Babelfish for RDS PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/babelfish-for-apsaradb-rds-for-postgresql/)

❌

✔️

❌

✔️

❌

[Read-only instance](/help/en/rds/apsaradb-rds-for-postgresql/rds-for-postgresql-read-only-instances/)

❌

✔️

❌

❌

❌

[Database proxy (read/write splitting)](/help/en/rds/apsaradb-rds-for-postgresql/database-proxy/)

❌

✔️

❌

❌

❌

[Account creation](/help/en/rds/apsaradb-rds-for-postgresql/create-an-account-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Password reset](/help/en/rds/apsaradb-rds-for-postgresql/reset-the-password-of-an-account-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Connection to a self-managed domain](/help/en/rds/apsaradb-rds-for-postgresql/connect-an-apsaradb-rds-for-postgresql-instance-to-a-self-managed-ad-domain)

✔️

✔️

✔️

✔️

✔️

[Account locking or deletion](/help/en/rds/apsaradb-rds-for-postgresql/lock-or-delete-an-account-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Connection to an RDS instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Public endpoint enabling or disabling](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Viewing and change of the internal and public endpoints and port numbers](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Network type change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-network-type-of-an-apsaradb-rds-for-postgresql-instance)

❌

❌

❌

❌

❌

[vSwitch change](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-a-different-vswitch)

✔️

✔️

❌

✔️

❌

[Database creation](/help/en/rds/apsaradb-rds-for-postgresql/create-a-database-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Database deletion](/help/en/rds/apsaradb-rds-for-postgresql/delete-a-database-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Time zone change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-time-zone-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Extensions](/help/en/rds/apsaradb-rds-for-postgresql/extensions-supported-by-apsaradb-rds-for-postgresql)

✔️

✔️

✔️

✔️

✔️

[Enhanced Monitoring metric check](/help/en/rds/apsaradb-rds-for-postgresql/view-the-enhanced-monitoring-metrics-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Alert management](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-alert-rules-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Switching to the enhanced whitelist mode](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-the-enhanced-whitelist-mode#concept-vzw-gq2-x2b)

❌

❌

❌

❌

❌

[Whitelist configuration](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance-1)

✔️

✔️

✔️

✔️

✔️

[SSL encryption](/help/en/rds/apsaradb-rds-for-postgresql/ssl-encryption/)

✔️

✔️

❌

✔️

❌

[Cloud disk encryption](/help/en/rds/apsaradb-rds-for-postgresql/configure-disk-encryption-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

❌

✔️

❌

[Always-confidential database creation](/help/en/rds/apsaradb-rds-for-postgresql/fully-encrypted-database/)

✔️

✔️

❌

✔️

❌

[Transparent Data Encryption (TDE)](/help/en/doc-detail/465651.html#concept-2272850)

✔️

✔️

✔️

✔️

✔️

[SQL Audit (database audit)](/help/en/rds/use-the-sql-audit-feature-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Log management](/help/en/rds/apsaradb-rds-for-postgresql/view-the-logs-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Task Center](/help/en/rds/apsaradb-rds-for-postgresql/use-task-center-for-an-apsaradb-rds-instance-2)

✔️

✔️

✔️

✔️

✔️

[Backup data](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Cross-region backup](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

❌

✔️

❌

[High-frequency snapshot backup](/help/en/rds/apsaradb-rds-for-postgresql/use-the-high-frequency-snapshot-backup-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2232533)

❌

✔️

❌

✔️

❌

[Backup download](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance#concept-yjb-pn4-ydb)

✔️

✔️

✔️

✔️

✔️

[Backup deletion](/help/en/rds/apsaradb-rds-for-postgresql/delete-backup-files-or-reduce-the-size-of-backup-files)

✔️

✔️

✔️

✔️

✔️

[Data restoration](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Restoration of individual databases and tables](/help/en/rds/apsaradb-rds-for-postgresql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-postgresql-instance#main-2318078)

❌

✔️

❌

✔️

❌

[Cross-region restoration](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-across-regions)

✔️

✔️

❌

✔️

❌

[Database Autonomy Service (DAS)](/help/en/rds/apsaradb-rds-for-postgresql/performance-optimization-and-diagnosis-1/)

✔️

✔️

✔️

❌

❌

[Tag creation](/help/en/rds/apsaradb-rds-for-postgresql/add-tags-to-apsaradb-rds-instances-2)

✔️

✔️

✔️

✔️

✔️

[Tag deletion](/help/en/rds/apsaradb-rds-for-postgresql/remove-tags-from-an-apsaradb-rds-for-mysql-instance-2)

✔️

✔️

✔️

✔️

✔️

## PostgreSQL 14

**Feature**

**RDS Cluster Edition**

**RDS High-availability Edition**

**RDS Basic Edition**

**Subscription/Pay-as-you-go**

**Subscription/Pay-as-you-go**

**Serverless**

**Subscription/Pay-as-you-go**

**Serverless**

[Migration to the cloud](/help/en/rds/apsaradb-rds-for-postgresql/cloud-migration/)

✔️

✔️

✔️

✔️

✔️

[Data migration](/help/en/rds/apsaradb-rds-for-postgresql/data-migration-2/)

✔️

✔️

✔️

✔️

✔️

[Data synchronization](/help/en/rds/apsaradb-rds-for-postgresql/manage-dataconnectors/)

✔️

✔️

✔️

✔️

✔️

[Change tracking](/help/en/rds/apsaradb-rds-for-postgresql/change-tracking/)

✔️

✔️

✔️

✔️

✔️

[Major engine version upgrade](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/)

✔️

✔️

✔️

✔️

✔️

[Minor engine version update](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Instance creation](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance-1)

✔️

✔️

✔️

✔️

✔️

[Specification change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

❌

✔️

❌

[Instance restart](/help/en/rds/apsaradb-rds-for-postgresql/restart-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Change of the scaling range of RDS Capacity Units (RCUs)](/help/en/rds/apsaradb-rds-for-postgresql/change-the-scaling-range-of-rcus-for-a-serverless-apsaradb-rds-for-postgresql-instance#main-2272489)

❌

❌

✔️

❌

✔️

[Automatic start and stop](/help/en/rds/apsaradb-rds-for-postgresql/configure-the-automatic-start-and-stop-feature-for-a-serverless-apsaradb-rds-for-postgresql-instance)

❌

❌

✔️

❌

✔️

[RCU scaling policy change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-scaling-policy-of-rcus-for-a-serverless-apsaradb-rds-for-postgresql-instance)

❌

❌

✔️

❌

✔️

[Automatic or manual primary/secondary switchover](/help/en/rds/apsaradb-rds-for-postgresql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-postgresql-instances)

✔️

✔️

✔️

❌

❌

[Maintenance window setting](/help/en/rds/apsaradb-rds-for-postgresql/set-the-maintenance-window-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Automatic storage expansion](/help/en/rds/apsaradb-rds-for-postgresql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Cross-zone migration](/help/en/rds/apsaradb-rds-for-postgresql/migrate-an-apsaradb-rds-for-postgresql-instance-across-zones-in-the-same-region)

❌

✔️

❌

✔️

❌

[Instance release](/help/en/rds/apsaradb-rds-for-postgresql/release-or-unsubscribe-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Release protection](/help/en/rds/apsaradb-rds-for-postgresql/enable-or-disable-the-release-protection-feature-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Parameter configuration](/help/en/rds/apsaradb-rds-for-postgresql/modify-the-parameters-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Query and change of the data replication mode](/help/en/rds/apsaradb-rds-for-postgresql/change-the-data-replication-mode-of-an-apsaradb-rds-for-postgresql-instance)

❌

✔️

✔️

❌

❌

[Recycle bin](/help/en/rds/apsaradb-rds-for-postgresql/manage-apsaradb-rds-for-postgresql-instances-in-the-recycle-bin)

✔️

✔️

✔️

✔️

✔️

[Babelfish for RDS PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/babelfish-for-apsaradb-rds-for-postgresql/)

❌

✔️

❌

✔️

❌

[Read-only instance](/help/en/rds/apsaradb-rds-for-postgresql/rds-for-postgresql-read-only-instances/)

❌

✔️

❌

❌

❌

[Database proxy (read/write splitting)](/help/en/rds/apsaradb-rds-for-postgresql/database-proxy/)

❌

✔️

❌

❌

❌

[Account creation](/help/en/rds/apsaradb-rds-for-postgresql/create-an-account-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Password reset](/help/en/rds/apsaradb-rds-for-postgresql/reset-the-password-of-an-account-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Connection to a self-managed domain](/help/en/rds/apsaradb-rds-for-postgresql/connect-an-apsaradb-rds-for-postgresql-instance-to-a-self-managed-ad-domain)

✔️

✔️

✔️

✔️

✔️

[Account locking or deletion](/help/en/rds/apsaradb-rds-for-postgresql/lock-or-delete-an-account-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Connection to an RDS instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Public endpoint enabling or disabling](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Viewing and change of the internal and public endpoints and port numbers](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Network type change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-network-type-of-an-apsaradb-rds-for-postgresql-instance)

❌

❌

❌

❌

❌

[vSwitch change](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-a-different-vswitch)

✔️

✔️

❌

✔️

❌

[Database creation](/help/en/rds/apsaradb-rds-for-postgresql/create-a-database-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Database deletion](/help/en/rds/apsaradb-rds-for-postgresql/delete-a-database-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Time zone change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-time-zone-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Extensions](/help/en/rds/apsaradb-rds-for-postgresql/extensions-supported-by-apsaradb-rds-for-postgresql)

✔️

✔️

✔️

✔️

✔️

[Enhanced Monitoring metric check](/help/en/rds/apsaradb-rds-for-postgresql/view-the-enhanced-monitoring-metrics-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Alert management](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-alert-rules-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Switching to the enhanced whitelist mode](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-the-enhanced-whitelist-mode#concept-vzw-gq2-x2b)

❌

❌

❌

❌

❌

[Whitelist configuration](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance-1)

✔️

✔️

✔️

✔️

✔️

[SSL encryption](/help/en/rds/apsaradb-rds-for-postgresql/ssl-encryption/)

✔️

✔️

❌

✔️

❌

[Cloud disk encryption](/help/en/rds/apsaradb-rds-for-postgresql/configure-disk-encryption-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

❌

✔️

❌

[Always-confidential database creation](/help/en/rds/apsaradb-rds-for-postgresql/fully-encrypted-database/)

✔️

✔️

❌

✔️

❌

[Transparent Data Encryption (TDE)](/help/en/doc-detail/465651.html#concept-2272850)

✔️

✔️

✔️

✔️

✔️

[SQL Audit (database audit)](/help/en/rds/use-the-sql-audit-feature-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Log management](/help/en/rds/apsaradb-rds-for-postgresql/view-the-logs-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Task Center](/help/en/rds/apsaradb-rds-for-postgresql/use-task-center-for-an-apsaradb-rds-instance-2)

✔️

✔️

✔️

✔️

✔️

[Backup data](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Cross-region backup](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

❌

✔️

❌

[High-frequency snapshot backup](/help/en/rds/apsaradb-rds-for-postgresql/use-the-high-frequency-snapshot-backup-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2232533)

❌

✔️

❌

✔️

❌

[Backup download](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance#concept-yjb-pn4-ydb)

✔️

✔️

✔️

✔️

✔️

[Backup deletion](/help/en/rds/apsaradb-rds-for-postgresql/delete-backup-files-or-reduce-the-size-of-backup-files)

✔️

✔️

✔️

✔️

✔️

[Data restoration](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

✔️

[Restoration of individual databases and tables](/help/en/rds/apsaradb-rds-for-postgresql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-postgresql-instance#main-2318078)

❌

✔️

❌

✔️

❌

[Cross-region restoration](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-across-regions)

✔️

✔️

❌

✔️

❌

[Database Autonomy Service (DAS)](/help/en/rds/apsaradb-rds-for-postgresql/performance-optimization-and-diagnosis-1/)

✔️

✔️

✔️

❌

❌

[Tag creation](/help/en/rds/apsaradb-rds-for-postgresql/add-tags-to-apsaradb-rds-instances-2)

✔️

✔️

✔️

✔️

✔️

[Tag deletion](/help/en/rds/apsaradb-rds-for-postgresql/remove-tags-from-an-apsaradb-rds-for-mysql-instance-2)

✔️

✔️

✔️

✔️

✔️

## PostgreSQL 13

**Feature**

**RDS High-availability Edition**

**RDS Basic Edition**

[Migration to the cloud](/help/en/rds/apsaradb-rds-for-postgresql/cloud-migration/)

✔️

✔️

[Data migration](/help/en/rds/apsaradb-rds-for-postgresql/data-migration-2/)

✔️

✔️

[Data synchronization](/help/en/rds/apsaradb-rds-for-postgresql/manage-dataconnectors/)

✔️

✔️

[Change tracking](/help/en/rds/apsaradb-rds-for-postgresql/change-tracking/)

✔️

✔️

[Major engine version upgrade](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/)

✔️

✔️

[Minor engine version update](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Instance creation](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance-1)

✔️

✔️

[Specification change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Instance restart](/help/en/rds/apsaradb-rds-for-postgresql/restart-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Change of the scaling range of RDS Capacity Units (RCUs)](/help/en/rds/apsaradb-rds-for-postgresql/change-the-scaling-range-of-rcus-for-a-serverless-apsaradb-rds-for-postgresql-instance#main-2272489)

❌

❌

[Automatic start and stop](/help/en/rds/apsaradb-rds-for-postgresql/configure-the-automatic-start-and-stop-feature-for-a-serverless-apsaradb-rds-for-postgresql-instance)

❌

❌

[RCU scaling policy change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-scaling-policy-of-rcus-for-a-serverless-apsaradb-rds-for-postgresql-instance)

❌

❌

[Automatic or manual primary/secondary switchover](/help/en/rds/apsaradb-rds-for-postgresql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-postgresql-instances)

✔️

❌

[Maintenance window setting](/help/en/rds/apsaradb-rds-for-postgresql/set-the-maintenance-window-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Automatic storage expansion](/help/en/rds/apsaradb-rds-for-postgresql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Cross-zone migration](/help/en/rds/apsaradb-rds-for-postgresql/migrate-an-apsaradb-rds-for-postgresql-instance-across-zones-in-the-same-region)

✔️

✔️

[Instance release](/help/en/rds/apsaradb-rds-for-postgresql/release-or-unsubscribe-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Release protection](/help/en/rds/apsaradb-rds-for-postgresql/enable-or-disable-the-release-protection-feature-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Parameter configuration](/help/en/rds/apsaradb-rds-for-postgresql/modify-the-parameters-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Query and change of the data replication mode](/help/en/rds/apsaradb-rds-for-postgresql/change-the-data-replication-mode-of-an-apsaradb-rds-for-postgresql-instance)

✔️

❌

[Recycle bin](/help/en/rds/apsaradb-rds-for-postgresql/manage-apsaradb-rds-for-postgresql-instances-in-the-recycle-bin)

✔️

✔️

[Babelfish for RDS PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/babelfish-for-apsaradb-rds-for-postgresql/)

✔️

✔️

[Read-only instance](/help/en/rds/apsaradb-rds-for-postgresql/rds-for-postgresql-read-only-instances/)

✔️

❌

[Database proxy (read/write splitting)](/help/en/rds/apsaradb-rds-for-postgresql/database-proxy/)

✔️

❌

[Account creation](/help/en/rds/apsaradb-rds-for-postgresql/create-an-account-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Password reset](/help/en/rds/apsaradb-rds-for-postgresql/reset-the-password-of-an-account-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Connection to a self-managed domain](/help/en/rds/apsaradb-rds-for-postgresql/connect-an-apsaradb-rds-for-postgresql-instance-to-a-self-managed-ad-domain)

✔️

✔️

[Account locking or deletion](/help/en/rds/apsaradb-rds-for-postgresql/lock-or-delete-an-account-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Connection to an RDS instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Public endpoint enabling or disabling](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Viewing and change of the internal and public endpoints and port numbers](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Network type change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-network-type-of-an-apsaradb-rds-for-postgresql-instance)

❌

❌

[vSwitch change](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-a-different-vswitch)

✔️

✔️

[Database creation](/help/en/rds/apsaradb-rds-for-postgresql/create-a-database-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Database deletion](/help/en/rds/apsaradb-rds-for-postgresql/delete-a-database-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Time zone change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-time-zone-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Extensions](/help/en/rds/apsaradb-rds-for-postgresql/extensions-supported-by-apsaradb-rds-for-postgresql)

✔️

✔️

[Enhanced Monitoring metric check](/help/en/rds/apsaradb-rds-for-postgresql/view-the-enhanced-monitoring-metrics-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Alert management](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-alert-rules-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Switching to the enhanced whitelist mode](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-the-enhanced-whitelist-mode#concept-vzw-gq2-x2b)

❌

❌

[Whitelist configuration](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance-1)

✔️

✔️

[SSL encryption](/help/en/rds/apsaradb-rds-for-postgresql/ssl-encryption/)

✔️

✔️

[Cloud disk encryption](/help/en/rds/apsaradb-rds-for-postgresql/configure-disk-encryption-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Always-confidential database creation](/help/en/rds/apsaradb-rds-for-postgresql/fully-encrypted-database/)

✔️

✔️

[Transparent Data Encryption (TDE)](/help/en/doc-detail/465651.html#concept-2272850)

✔️

✔️

[SQL Audit (database audit)](/help/en/rds/use-the-sql-audit-feature-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Log management](/help/en/rds/apsaradb-rds-for-postgresql/view-the-logs-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Task Center](/help/en/rds/apsaradb-rds-for-postgresql/use-task-center-for-an-apsaradb-rds-instance-2)

✔️

✔️

[Backup data](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Cross-region backup](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[High-frequency snapshot backup](/help/en/rds/apsaradb-rds-for-postgresql/use-the-high-frequency-snapshot-backup-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2232533)

✔️

✔️

[Backup download](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance#concept-yjb-pn4-ydb)

✔️

✔️

[Backup deletion](/help/en/rds/apsaradb-rds-for-postgresql/delete-backup-files-or-reduce-the-size-of-backup-files)

✔️

✔️

[Data restoration](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Restoration of individual databases and tables](/help/en/rds/apsaradb-rds-for-postgresql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-postgresql-instance#main-2318078)

✔️

✔️

[Cross-region restoration](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-across-regions)

✔️

✔️

[Database Autonomy Service (DAS)](/help/en/rds/apsaradb-rds-for-postgresql/performance-optimization-and-diagnosis-1/)

✔️

❌

[Tag creation](/help/en/rds/apsaradb-rds-for-postgresql/add-tags-to-apsaradb-rds-instances-2)

✔️

✔️

[Tag deletion](/help/en/rds/apsaradb-rds-for-postgresql/remove-tags-from-an-apsaradb-rds-for-mysql-instance-2)

✔️

✔️

## PostgreSQL 12 and PostgreSQL 11

**Feature**

**RDS High-availability Edition**

**RDS Basic Edition**

[Migration to the cloud](/help/en/rds/apsaradb-rds-for-postgresql/cloud-migration/)

✔️

✔️

[Data migration](/help/en/rds/apsaradb-rds-for-postgresql/data-migration-2/)

✔️

✔️

[Data synchronization](/help/en/rds/apsaradb-rds-for-postgresql/manage-dataconnectors/)

✔️

✔️

[Change tracking](/help/en/rds/apsaradb-rds-for-postgresql/change-tracking/)

✔️

✔️

[Major engine version upgrade](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/)

✔️

✔️

[Minor engine version update](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Instance creation](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance-1)

✔️

✔️

[Specification change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Instance restart](/help/en/rds/apsaradb-rds-for-postgresql/restart-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Change of the scaling range of RDS Capacity Units (RCUs)](/help/en/rds/apsaradb-rds-for-postgresql/change-the-scaling-range-of-rcus-for-a-serverless-apsaradb-rds-for-postgresql-instance#main-2272489)

❌

❌

[Automatic start and stop](/help/en/rds/apsaradb-rds-for-postgresql/configure-the-automatic-start-and-stop-feature-for-a-serverless-apsaradb-rds-for-postgresql-instance)

❌

❌

[RCU scaling policy change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-scaling-policy-of-rcus-for-a-serverless-apsaradb-rds-for-postgresql-instance)

❌

❌

[Automatic or manual primary/secondary switchover](/help/en/rds/apsaradb-rds-for-postgresql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-postgresql-instances)

✔️

❌

[Maintenance window setting](/help/en/rds/apsaradb-rds-for-postgresql/set-the-maintenance-window-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Automatic storage expansion](/help/en/rds/apsaradb-rds-for-postgresql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Cross-zone migration](/help/en/rds/apsaradb-rds-for-postgresql/migrate-an-apsaradb-rds-for-postgresql-instance-across-zones-in-the-same-region)

✔️

✔️

[Instance release](/help/en/rds/apsaradb-rds-for-postgresql/release-or-unsubscribe-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Release protection](/help/en/rds/apsaradb-rds-for-postgresql/enable-or-disable-the-release-protection-feature-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Parameter configuration](/help/en/rds/apsaradb-rds-for-postgresql/modify-the-parameters-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Query and change of the data replication mode](/help/en/rds/apsaradb-rds-for-postgresql/change-the-data-replication-mode-of-an-apsaradb-rds-for-postgresql-instance)

✔️

❌

[Recycle bin](/help/en/rds/apsaradb-rds-for-postgresql/manage-apsaradb-rds-for-postgresql-instances-in-the-recycle-bin)

✔️

✔️

[Babelfish for RDS PostgreSQL](/help/en/rds/apsaradb-rds-for-postgresql/babelfish-for-apsaradb-rds-for-postgresql/)

❌

❌

[Read-only instance](/help/en/rds/apsaradb-rds-for-postgresql/rds-for-postgresql-read-only-instances/)

✔️

❌

[Database proxy (read/write splitting)](/help/en/rds/apsaradb-rds-for-postgresql/database-proxy/)

✔️

❌

[Account creation](/help/en/rds/apsaradb-rds-for-postgresql/create-an-account-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Password reset](/help/en/rds/apsaradb-rds-for-postgresql/reset-the-password-of-an-account-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Connection to a self-managed domain](/help/en/rds/apsaradb-rds-for-postgresql/connect-an-apsaradb-rds-for-postgresql-instance-to-a-self-managed-ad-domain)

✔️

✔️

[Account locking or deletion](/help/en/rds/apsaradb-rds-for-postgresql/lock-or-delete-an-account-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Connection to an RDS instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Public endpoint enabling or disabling](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Viewing and change of the internal and public endpoints and port numbers](/help/en/rds/apsaradb-rds-for-postgresql/view-and-change-the-endpoints-and-port-numbers-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Network type change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-network-type-of-an-apsaradb-rds-for-postgresql-instance)

❌

❌

[vSwitch change](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-a-different-vswitch)

✔️

✔️

[Database creation](/help/en/rds/apsaradb-rds-for-postgresql/create-a-database-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Database deletion](/help/en/rds/apsaradb-rds-for-postgresql/delete-a-database-from-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Time zone change](/help/en/rds/apsaradb-rds-for-postgresql/change-the-time-zone-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Extensions](/help/en/rds/apsaradb-rds-for-postgresql/extensions-supported-by-apsaradb-rds-for-postgresql)

✔️

✔️

[Enhanced Monitoring metric check](/help/en/rds/apsaradb-rds-for-postgresql/view-the-enhanced-monitoring-metrics-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Alert management](/help/en/rds/apsaradb-rds-for-postgresql/manage-the-alert-rules-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Switching to the enhanced whitelist mode](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-to-the-enhanced-whitelist-mode#concept-vzw-gq2-x2b)

❌

❌

[Whitelist configuration](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance-1)

✔️

✔️

[SSL encryption](/help/en/rds/apsaradb-rds-for-postgresql/ssl-encryption/)

✔️

✔️

[Cloud disk encryption](/help/en/rds/apsaradb-rds-for-postgresql/configure-disk-encryption-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Always-confidential database creation](/help/en/rds/apsaradb-rds-for-postgresql/fully-encrypted-database/)

✔️

✔️

[Transparent Data Encryption (TDE)](/help/en/doc-detail/465651.html#concept-2272850)

✔️

✔️

[SQL Audit (database audit)](/help/en/rds/use-the-sql-audit-feature-on-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Log management](/help/en/rds/apsaradb-rds-for-postgresql/view-the-logs-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Task Center](/help/en/rds/apsaradb-rds-for-postgresql/use-task-center-for-an-apsaradb-rds-instance-2)

✔️

✔️

[Backup data](/help/en/rds/apsaradb-rds-for-postgresql/back-up-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Cross-region backup](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cross-region-backup-feature-for-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[High-frequency snapshot backup](/help/en/rds/apsaradb-rds-for-postgresql/use-the-high-frequency-snapshot-backup-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2232533)

✔️

✔️

[Backup download](/help/en/rds/apsaradb-rds-for-postgresql/download-the-backup-files-of-an-apsaradb-rds-for-postgresql-instance#concept-yjb-pn4-ydb)

✔️

✔️

[Backup deletion](/help/en/rds/apsaradb-rds-for-postgresql/delete-backup-files-or-reduce-the-size-of-backup-files)

✔️

✔️

[Data restoration](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

[Restoration of individual databases and tables](/help/en/rds/apsaradb-rds-for-postgresql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-postgresql-instance#main-2318078)

✔️

✔️

[Cross-region restoration](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-across-regions)

✔️

✔️

[Database Autonomy Service (DAS)](/help/en/rds/apsaradb-rds-for-postgresql/performance-optimization-and-diagnosis-1/)

✔️

❌

[Tag creation](/help/en/rds/apsaradb-rds-for-postgresql/add-tags-to-apsaradb-rds-instances-2)

✔️

✔️

[Tag deletion](/help/en/rds/apsaradb-rds-for-postgresql/remove-tags-from-an-apsaradb-rds-for-mysql-instance-2)

✔️

✔️

## **Features of phased-out PostgreSQL versions**

**PostgreSQL 10**

**Feature**

**PostgreSQL 10**

**RDS High-availability Edition (with Premium Local SSDs)**

**RDS High-availability Edition (with cloud disks)**

**RDS Basic Edition (with cloud disks)**

Perform cloud migration with a few clicks

❌

✔️

✔️

Data migration

✔️

✔️

✔️

Data Synchronization

✔️

✔️

✔️

Change tracking

✔️

✔️

✔️

Upgrade of the major engine version

✔️

✔️

✔️

Update of the minor engine version

✔️

✔️

✔️

Instance creation

✔️

✔️

✔️

Specification change

✔️

✔️

✔️

Restart of an instance

✔️

✔️

✔️

Change of the scaling range of RCUs

❌

❌

❌

Automatic start and stop

❌

❌

❌

Change of the RCU scaling policy

❌

❌

❌

Automatic or manual primary/secondary switchover

✔️

✔️

❌

Maintenance window setting

✔️

✔️

✔️

Automatic storage expansion

❌

✔️

✔️

Migration across zones

✔️

✔️

✔️

Instance release

✔️

✔️

✔️

Release protection

✔️

✔️

✔️

Parameter configuration

✔️

✔️

✔️

Protection level configuration

❌

✔️

❌

Instance recycle bin

✔️

✔️

✔️

Babelfish for RDS PostgreSQL

❌

❌

❌

Read-only RDS instances

✔️

✔️

❌

Database proxy (read/write splitting)

❌

✔️

❌

Account creation

✔️

✔️

✔️

Reset the password of an account

✔️

✔️

✔️

Connection to a self-managed domain

❌

✔️

✔️

Account locking or deletion

✔️

✔️

✔️

Connection to an RDS instance

✔️

✔️

✔️

Public endpoint application or release

✔️

✔️

✔️

Viewing and change of the internal and public endpoints and port numbers

✔️

✔️

✔️

Network type change

✔️

❌

❌

vSwitch change

❌

✔️

✔️

Database creation

✔️

✔️

✔️

Database deletion

✔️

✔️

✔️

Time zone change

❌

✔️

✔️

Extensions

✔️

✔️

✔️

Viewing of the enhanced monitoring metrics

✔️

✔️

✔️

Alert management

✔️

✔️

✔️

Change to the enhanced whitelist mode

✔️

❌

❌

IP address whitelist configuration

✔️

✔️

✔️

SSL encryption

❌

✔️

✔️

Cloud disk encryption

❌

✔️

✔️

Always-confidential database

❌

✔️

❌

Transparent Data Encryption (TDE)

❌

✔️

✔️

SQL Audit

✔️

✔️

✔️

log management

✔️

✔️

✔️

Task Center

✔️

✔️

✔️

Backup data

✔️

✔️

✔️

Cross-region backup feature

✔️

✔️

✔️

Use the high-frequency snapshot backup feature

❌

✔️

✔️

Download of backup files

✔️

✔️

✔️

Backup deletion

✔️

✔️

✔️

Data restoration

✔️

✔️

✔️

Restoration of individual databases and tables

❌

✔️

✔️

Cross-region restoration

✔️

✔️

✔️

DAS

✔️

✔️

❌

Tag creation

✔️

✔️

✔️

Tag deletion

✔️

✔️

✔️

**PostgreSQL 9.4**

**Category**

**Feature**

**RDS High-availability Edition with Premium Local SSDs**

Instance management

Instance creation

✔️

Specification change

Supported

Parameter configuration

✔️

Query and change of the data replication mode

Supported

Migration across zones

✔️

Primary/secondary switchover

✔️

Instance restart

✔️

Maintenance window setting

✔️

Upgrade of the major engine version

✔️

Instance release

✔️

Instance recycle bin

✔️

Account management

Account creation

✔️

Password reset

✔️

Account locking

✔️

Account deletion

✔️

Database management

Database creation

✔️

Database deletion

✔️

Extensions

✔️

Database connection management

Connection to an RDS instance

✔️

Endpoint setting

✔️

Endpoint and port number viewing

✔️

Public endpoint application or release

✔️

Monitoring and alerting

Check on the resource metrics and engine metrics

✔️

Monitoring frequency configuration

✔️

Alert management

✔️

Network setting management

Network type change

✔️

vSwitch change

Supported

Read-only RDS instances

Read-only instance creation

Supported

Security management

IP address whitelist configuration

✔️

SSL encryption

Supported

Cloud disk encryption

Supported

Change to the enhanced whitelist mode

✔️

Always-confidential database

✔️

Log and event history management

Log management

✔️

Event history

✔️

Database backup

Data backup

✔️

Cross-region backup

✔️

Free quotas

✔️

Backup download

✔️

Database restoration

Data restoration

Supported

Cross-region restoration

Supported

Logical subscription

Logical subscription

Supported

Tag management

Tag creation

✔️

Tag deletion

✔️

Tag-based instance search

✔️
