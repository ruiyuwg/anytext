## Backup

For data integrity and reliability purposes, databases require regular automatic backups to ensure that the data in the databases can be restored in the event of exceptions.

ApsaraDB RDS provides two backup features. For more information, see [Automatic and manual backups](/help/en/rds/apsaradb-rds-for-mysql/enable-the-automatic-backup-feature-for-an-apsaradb-rds-for-mysql-instance#concept-l1m-xgn-ydb).

-   Data backup: You must enable the data backup feature. You must also configure your RDS instance to perform at least two physical backups per week. In addition, you can create a temporary backup by using the ApsaraDB RDS console or by calling an API operation based on your operations and maintenance (O&M) requirements. Data backup files can be retained for 7 days to 730 days.
-   Log backup: You can enable or disable the log backup feature. If you disable the log backup feature, you can restore data only to the point in time when the most recent data backup file is generated. The data and log backup files are retained based on the same retention policy.

## Restoration

For data reliability purposes, databases must be restorable.

ApsaraDB RDS provides two restoration features. For more information, see [Restore the data of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/restore-full-data-of-an-apsaradb-rds-for-mysql-instance#concept-vrh-qp4-ydb).

-   Restoration from a data backup file: You can restore the data of your RDS instance from a specified data backup file to a temporary or cloned RDS instance. Then, you can check whether the data is intact on the temporary or cloned RDS instance.
-   Restoration to a point in time: You can select a near point in time. Then, ApsaraDB RDS finds the full backup file that is generated closest to the selected point in time. In addition, ApsaraDB RDS restores the data of your RDS instance to a temporary or cloned RDS instance by using the full backup file and the log backup file that is generated later than the full backup file.

## References

The backup and restoration methods that are supported vary based on the configuration of your RDS instance. To understand the backup and restoration methods that are supported by RDS instances, see the following topics:

-   [MySQL](/help/en/doc-detail/281778.html#concept-2098780)
-   [SQL Server](/help/en/rds/apsaradb-rds-for-sql-server/features#concept-2350232)
-   [PostgreSQL](/help/en/rds/rds-postgresql-database-features/)
-   [MariaDB](/help/en/rds/apsaradb-rds-for-mariadb/features-1#concept-2350238)
