This topic describes the methods that you can use to restore data of an ApsaraDB RDS for PostgreSQL instance.

## Scenario 1: Restore the data of an RDS instance that is released

**Recycle Bin**: Log on to the ApsaraDB RDS console and go to the [Recycle Bin](https://rds.console.alibabacloud.com/recyclelist/cn-hangzhou/lock) page. In the top navigation bar, **select the region in which the RDS instance resides**. If you can find the RDS instance on the Recycle Bin page, you can rebuild the RDS instance.

**Note**

-   If your RDS instance is manually released, expires, or is refunded, the RDS instance is moved to the recycle bin. An RDS instance is not moved to the recycle bin in the following situations:
    
    -   The payment for the RDS instance is refunded or the RDS instance is manually released within seven days after the instance is created.
        
    -   The RDS instance is a pay-as-you-go instance and is automatically released due to overdue payments.
        
    -   The RDS instance is a read-only RDS instance.
        
-   RDS instances that run PostgreSQL 9.4 are no longer available for purchase. Therefore, you cannot rebuild RDS instances that run PostgreSQL 9.4 from the recycle bin.
    

## Scenario 2: Restore data that is deleted or modified on an RDS instance

**Solution**

**Restoration time**

**Restoration range**

**Restoration destination**

**Restore speed**

**Any point in time**

**Point in time when the backup set is generated**

**All databases and tables**

**Individual databases**

**Individual tables**

**To a new RDS instance**

**To the original RDS instance**

**To an existing RDS instance**

[Instance restoration](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-of-an-apsaradb-rds-for-postgresql-instance#concept-rxd-d5g-2fb)

✔️

✔️

✔️

❌

❌

✔️

❌

❌

Slow

[Restoration for individual databases and tables](/help/en/rds/apsaradb-rds-for-postgresql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-postgresql-instance)

✔️

✔️

✔️

✔️

❌

❌

✔️

✔️

Fast

**Note**

-   Restore data to a new RDS instance: If you want to temporarily use the new RDS instance, you can create a pay-as-you-go RDS instance. Restore data to the pay-as-you-go RDS instance, migrate the data to the original RDS instance, and then release the pay-as-you-go RDS instance to reduce costs.
    
-   Restore data to the original RDS instance: Data restoration does not overwrite the data of the original RDS instance.
    
-   You can also use pg\_restore to restore specific individual tables from logical backup files. For more information, see [Restore data from a logical backup file](/help/en/rds/apsaradb-rds-for-postgresql/restore-data-from-a-logical-backup-file#task-2336730).
    

## **Other scenarios**

-   If you want to restore data across regions, follow the instructions provided in [Restore the data of an ApsaraDB RDS for PostgreSQL instance across regions](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-across-regions#task-2056360).
    
-   If you want to restore data to a self-managed database, follow the instructions provided in [Restore the data of an ApsaraDB RDS for PostgreSQL instance to a self-managed PostgreSQL instance by using a CSV file or an SQL file](/help/en/rds/apsaradb-rds-for-postgresql/restore-the-data-of-an-apsaradb-rds-for-postgresql-instance-to-a-self-managed-postgresql-instance-by-using-a-csv-file-or-an-sql-file).
