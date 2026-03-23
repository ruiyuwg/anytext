## Background information

If your ApsaraDB RDS instance runs MySQL or PostgreSQL on RDS High-availability Edition and uses cloud disks, the following rule is used to automatically expand the storage capacity of the RDS instance: If a read-only RDS instance is attached to the primary RDS instance for which automatic storage expansion is enabled, the storage capacity of the read-only RDS instance is not expanded when automatic storage expansion is triggered for the primary RDS instance. This may cause the following issues:

-   If the RDS instance runs MySQL, the storage capacity of the read-only RDS instance is smaller than the new storage capacity of the primary RDS instance. As a result, data synchronization fails.
    
-   If the RDS instance runs PostgreSQL, the storage capacity of the read-only RDS instance is smaller than the desired storage capacity of the primary RDS instance. As a result, the automatic storage expansion of the primary RDS instance fails.
    

**Note**

For more information about how to configure automatic storage expansion, see [Configure automatic storage expansion for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-mysql-instance#task-2559889) and [Configure automatic storage expansion for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-postgresql-instance#task-2220199).

## Content

The rule for automatic storage expansion is optimized. If you use the new rule for automatic storage expansion, the system checks the storage capacity of each read-only RDS instance that is attached to the primary RDS instance when automatic storage expansion is triggered for the primary RDS instance.

-   If the storage capacity of a read-only RDS instance is greater than or equal to the desired storage capacity of the primary RDS instance, the storage capacity of the read-only RDS instance is not automatically expanded.
    
-   If the storage capacity of a read-only RDS instance is smaller than the desired storage capacity of the primary RDS instance, the storage capacity of the read-only RDS instance is preferentially expanded. After the storage capacity of each read-only RDS instance is expanded, the system automatically expands the storage capacity of the primary RDS instance.
    

## Effective date

Starting February 28, 2023, the optimized rule for automatic storage expansion is used in Alibaba Cloud regions in phases.

## Optimization effects

-   For ApsaraDB RDS for MySQL instances, the optimized rule prevents the data synchronization failure that is caused by smaller storage capacity of the read-only RDS instance compared with the storage capacity of the primary RDS instance.
    
-   For ApsaraDB RDS for PostgreSQL instances, the optimized rule prevents the failure in the storage capacity expansion of the primary RDS instance that is caused by smaller storage capacity of the read-only RDS instance compared with the desired storage capacity of the primary RDS instance.
