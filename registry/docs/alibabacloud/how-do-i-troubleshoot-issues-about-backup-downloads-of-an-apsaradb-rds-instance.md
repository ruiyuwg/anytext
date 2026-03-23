This topic provides answers to some frequently asked questions about backup downloads of an ApsaraDB RDS instance.

## How do I restore the data of an ApsaraDB RDS for MySQL instance to a new RDS instance by using the downloaded backup files?

You cannot use the backup files that are downloaded from the ApsaraDB RDS console to directly restore data to a new RDS instance. You can perform the following operations to restore the data to a new RDS instance by using the downloaded backup files:

-   Restore the data of your RDS instance to a self-managed MySQL instance by using the backup files. For more information, see [Restore the data of an ApsaraDB RDS for MySQL instance from a physical backup file to a self-managed MySQL database](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-physical-backup-file-to-a-self-managed-mysql-database#concept-41817-zh), [Restore the data of an ApsaraDB RDS for MySQL instance from a logical backup file to a self-managed MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-from-a-logical-backup-file-to-a-self-managed-mysql-instance#concept-zql-2c5-vfb), or [Restore the data of an ApsaraDB RDS for MySQL instance to a self-managed MySQL instance by using snapshot backup files](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-an-apsaradb-rds-for-mysql-instance-to-a-self-managed-mysql-instance-by-using-a-csv-file-or-an-sql-file#task-2221514).
    
-   Use Data Transmission Service (DTS) to migrate data from the self-managed MySQL instance to a new RDS instance. Alternatively, perform a full backup on the self-managed MySQL instance, upload the full backup file to an Object Storage Service (OSS) bucket, import the full backup file from the OSS bucket into the original RDS instance, and then restore the data from the full backup file to the new RDS instance. For more information, see [Migrate data from a self-managed MySQL instance to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-data-from-a-self-managed-mysql-database-to-an-apsaradb-rds-for-mysql-instance#concept-268502) or [Migrate the data of a self-managed MySQL 5.7 or MySQL 8.0 instance to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-the-data-of-a-self-managed-mysql-5-7-or-mysql-8-0-instance-to-an-apsaradb-rds-for-mysql-instance#task-2082462).
    

## Why is the size of the downloaded backup files smaller than the storage capacity of the RDS instance?

In the ApsaraDB RDS console, the **Capacity** parameter displayed on the **Basic Information** page of the RDS instance indicates the sum of all instance data, system files, and backup data. The amount of data in the storage of an RDS instance is not equal to the size of downloaded backup files.

**Note**

For more information about how to expand or release the storage capacity of an RDS instance, see [FAQ about storage capacity](/help/en/rds/support/faq-about-storage-capacity#concept-ecy-fl4-hhb).

## How do I restore or import the backup files of a self-managed MySQL instance to an ApsaraDB RDS instance?

For more information, see [Restore the backup data of a self-managed instance that runs MySQL 5.7 or MySQL 8.0 to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/restore-the-data-of-a-self-managed-mysql-instance-to-an-apsaradb-rds-for-mysql-instance#task-2083308) or [Migrate the data of a self-managed instance that runs MySQL 5.7 or MySQL 8.0 to an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/migrate-the-data-of-a-self-managed-mysql-5-7-or-mysql-8-0-instance-to-an-apsaradb-rds-for-mysql-instance#task-2082462).

## Why am I unable to download the backup files of an RDS for MySQL instance that uses cloud disks?

If your RDS for MySQL instance uses cloud disks, you can download the backup files of the instance only when the instance meets the prerequisites described in [Download the backup files of an RDS instance that uses cloud disks](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#section-q94-s9j-5rb).

## References

-   [Download backup files](/help/en/rds/apsaradb-rds-for-mysql/download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance-download-the-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-yjb-pn4-ydb)
    
-   [Overview of backup methods](/help/en/doc-detail/281778.html#concept-2098780)
    
-   [Overview of restoration methods](/help/en/doc-detail/157519.html#concept-2445988)
