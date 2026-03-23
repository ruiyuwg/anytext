ApsaraDB RDS generates backups called default backups. When default backups do not meet your requirements, you can use Data Disaster Recovery to implement advanced backup features.

**Scenario**

**Comparison item**

**RDS default backup**

**(Physical backup or snapshot)**

[Data Disaster Recovery](/help/en/dms/data-disaster-recovery-dbs-document-navigation/)

**(Logical backup)**

**Tutorials**

Perform backups

Scheduled backup

✔️ (Automatically enabled, cannot be disabled)

✔️ (Must be manually enabled)

[Automatic backup](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#concept-l1m-xgn-ydb)

Incremental backup (log backup)

✔️

✔️

Back up individual databases and tables

-   High-performance local disk: ✔️; Disk: ❌
    
-   Manual: ✔️; Scheduled: ❌
    
-   Incremental: ❌
    

✔️

[Database and table level backup](/help/en/rds/apsaradb-rds-for-mysql/back-up-the-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance#concept-2043541)

**Geo-redundancy (cross-region backup)**

✔️

✔️

[Cross-region backup](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance#concept-405443)

**Cross-account backup**

❌

✔️

[Back up and restore data across Alibaba Cloud accounts](/help/en/dbs/use-cases/back-up-and-restore-data-across-alibaba-cloud-accounts#multiTask1428)

Store backup files

Store backup files to your Object Storage Service (OSS) bucket

❌

✔️

[Logical backup for RDS MySQL or self-managed MySQL](/help/en/dbs/user-guide/back-up-apsaradb-rds-for-mysql-or-self-managed-mysql-instances-by-using-logical-backup#task-1964148)

Download backup files

Manually download backup files

✔️

✔️

[Download backup files](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-yjb-pn4-ydb)

Automatically download backup files

❌

✔️

Encrypt backup files

Encrypt backup files at rest

✔️

✔️

[Backup encryption](/help/en/rds/apsaradb-rds-for-mysql/encrypt-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-2085563)

Encrypt backup files in transit by using SSL

❌

✔️

Restore data

**Restoration within seconds**

✔️

❌

[Emergency recovery for RDS MySQL](/help/en/dbs/user-guide/use-the-emergency-recovery-feature-for-an-apsaradb-rds-for-mysql-instance#task-2042301)

Restore individual databases and tables

✔️

✔️

[Restore RDS default backup (database and table level)](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance#concept-ocr-swk-ngb)

[Restore Data Disaster Recovery backup (database and table level)](/help/en/dms/rds-mysql-logical-backup-and-recovery/)

Restore data to an RDS instance by using backup files

✔️

✔️

**Restore data to a new instance**

-   [Restore full data](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance)
    
-   [Restore individual databases and tables](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance#section-6tt-4rh-lkw)
    

**Restore data to the original instance**

-   Method 1: First [restore data to a new instance](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance#section-7se-ns2-8uh), verify the data, and then [migrate some or all databases and tables to the original instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances#concept-fxm-bhp-ydb).
    
-   Method 2: Use the [database and table restoration](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance#concept-ocr-swk-ngb) feature to restore full data to the original instance.
    
-   Method 3: Use the logical backup created by Data Disaster Recovery to [restore data to the original instance](/help/en/dbs/user-guide/restore-a-mysql-database-from-a-logical-backup#task-2044257).
    

**Restore data to another existing instance**

-   Method 1: First [restore data to a new instance](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance#section-7se-ns2-8uh), verify the data, and then [migrate the data to another existing instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances#concept-fxm-bhp-ydb).
    
-   Method 2: Use the logical backup created by Data Disaster Recovery to [restore data to another existing instance](/help/en/dbs/user-guide/restore-a-mysql-database-from-a-logical-backup#task-2044257).
    

**Restore data to a self-managed database**

-   Method 1: First [restore data to a new instance](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance#section-7se-ns2-8uh), verify the data, and then [migrate the data to a self-managed database](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-between-apsaradb-rds-for-mysql-instances#concept-fxm-bhp-ydb).
    
-   Method 2: Use the logical backup created by Data Disaster Recovery to [restore data to a self-managed database](/help/en/dbs/user-guide/restore-a-mysql-database-from-a-logical-backup#task-2044257).
    
-   Method 3: First [download backup files](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-yjb-pn4-ydb), and then restore the backup files to a self-managed database. For more information, see [Restore physical backup files of an RDS MySQL instance to a self-managed MySQL database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-physical-backup-file-to-a-self-managed-mysql-database#concept-41817-zh), [Restore logical backup files of an RDS MySQL instance to a self-managed MySQL database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-logical-backup-file-to-a-self-managed-mysql-instance#concept-zql-2c5-vfb), or [Restore snapshot backup files of an RDS MySQL instance to a self-managed MySQL database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-to-a-self-managed-mysql-instance-by-using-a-csv-file-or-an-sql-file#task-2221514).
