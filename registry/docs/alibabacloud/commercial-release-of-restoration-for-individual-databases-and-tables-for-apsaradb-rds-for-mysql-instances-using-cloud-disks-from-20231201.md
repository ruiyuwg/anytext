Starting December 01, 2023, the public preview of the restoration feature for individual databases and tables for ApsaraDB RDS for MySQL instances that use cloud disks ends. After you enable the feature for your RDS instance, the backup architecture is upgraded, the amount of backup data is increased by 30% to 80%, and backup fees are generated.

## **Commercial release dates and regions**

**Effective date**

**Involved instance**

**Region**

Commercially released in phases from December 01, 2023

RDS instances that run MySQL and use cloud disks

The regions that are displayed in the ApsaraDB RDS console prevail.

## **Billing rules**

After you enable the restoration feature for individual databases and tables for an RDS instance that uses cloud disks, the backup architecture is upgraded, and the amount of backup data is increased by 30% to 80%. If the total amount of backup data does not exceed the free quota, no fees are generated. If the total amount exceeds the free quota, you are charged for the excess backup storage that you use. For more information, see [View and manage the size of backup files](/help/en/rds/apsaradb-rds-for-mysql/view-and-manage-the-size-of-backup-files-of-an-apsaradb-rds-for-mysql-instance#concept-2045428). For more information about billing rules, see [Backup storage fees](/help/en/rds/apsaradb-rds-for-mysql/billable-items-and-pricing-for-the-backup-storage-of-an-apsaradb-rds-for-mysql-instance).

## **Usage notes**

-   The restoration feature for individual databases and tables is automatically enabled for RDS instances that are created on and after December 01, 2023 and cannot be disabled.
    
-   The restoration feature for individual databases and tables is forcefully disabled for RDS instances that are created before December 01, 2023. In this case, you can go to the **Backup Strategy** tab of the **Backup and Restoration** page of your RDS instance to enable the feature again. After the feature is enabled, you can use all valid backup sets to immediately restore individual databases and tables. After the feature is enabled, you cannot disable the feature.
    

**Note**

After the feature is enabled, you can restore the backup data to the original RDS instance by backup set or to a point in time. If your RDS instance uses cloud disks, you cannot use the feature to restore the data to a new RDS instance. For more information, see [Restore individual databases and tables of an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/restore-individual-databases-and-tables-of-an-apsaradb-rds-for-mysql-instance).

## **References**

-   After you restore the data to the original RDS instance, you can execute the `RENAME TABLE` statement to rename the table that is restored.
    
-   ApsaraDB RDS for MySQL also supports other restoration methods, such as full data restoration, emergency restoration, and data restoration to the cloud or to an on-premises device by using backup files. For more information, see [Overview of data restoration methods](/help/en/doc-detail/157519.html).
