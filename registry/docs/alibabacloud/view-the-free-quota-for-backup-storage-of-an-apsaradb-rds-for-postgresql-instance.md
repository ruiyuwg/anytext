This topic describes how to view the free quota on backup storage of an ApsaraDB RDS for PostgreSQL instance and how to calculate the amount of excess backup storage that you use. The free quota varies based on the instance configuration.

## Background information

Backup files occupy backup storage. Each RDS instance is allocated a free quota on backup storage. If the amount of backup storage that you use exceeds the free quota, you are charged for the excess backup storage that you use.

## Formula

RDS instances that are equipped with cloud disks support only snapshot backups. The free quota that is provided to store snapshot backup files is calculated by using the following formula: Free quota = 200% × Purchased storage capacity. Unit: GB. The calculation result is rounded only up to the next integer.

RDS instances that are equipped with Premium Local SSDs support only physical backups. The free quota that is provided to store physical backup files is calculated by using the following formula: Free quota = 50% × Purchased storage capacity. Unit: GB. The calculation result is rounded only up to the next integer.

The amount of excess backup storage for which you must pay an hourly rate is calculated by using the following formula: Excess backup storage = Size of data backup files + Size of log backup files - Free quota.

For example, your RDS instance is equipped with Premium Local SSDs. If the size of data backup files is 30 GB, the size of log backup files is 10 GB, and the purchased storage capacity is 60 GB, the amount of excess backup storage for which you must pay an hourly rate is 10 GB based on the following calculation: `Excess backup storage = 30 + 10 - 50% × 60 = 10 (GB).`

**Note**

-   For more information about the hourly rate for excess backup storage, see [Backup storage fees](/help/en/rds/apsaradb-rds-for-postgresql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-postgresql-instance#concept-ipg-lm4-ydb).
    
-   When you use RDS Basic Edition, some database engines support a seven-day retention period during which you can retain backup files free of charge. For more information, visit the ApsaraDB RDS console.
    

## View the free quota on backup storage of an RDS instance in the ApsaraDB RDS console

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the Usage Statistics section of the page that appears, view the free quota that is displayed to the right of the Backup Usage parameter.
    
    **Note**
    
    The free quota on backup storage varies based on the instance configuration.
    

## FAQ

-   Do backup files occupy the storage that I purchased when I created my RDS instance?
    
    No, backup files do not occupy the storage that you purchased when you created your RDS instance. The storage that you purchased when you created your RDS instance is isolated from the storage that is provided to store backup files.
    
-   Can I purchase backup storage based on the subscription billing method?
    
    No, you cannot purchase backup storage.
