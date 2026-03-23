This topic describes the differences among logical backup, physical backup, and snapshot.

Logical backup, physical backup, and snapshot are common data backup methods.

-   Logical backup: backs up database objects such as tables, indexes, and stored procedures. Commonly used tools include MySQL mysqldump and Oracle exp and imp.
    
-   Physical backup: backs up database files in operating systems. Commonly used tools include MySQL XtraBackup and Oracle RMAN.
    
-   Snapshot: creates a fully usable copy of the specified dataset by using the snapshot technology. You can choose to maintain snapshots only on the local server or perform cross-server backup for the snapshots. Commonly used tools include VERITAS File System, Linux LVM, and NetApp NAS.
    
    **Note**
    
    Data Disaster Recovery does not support snapshot-based backup.
    

Data Disaster Recovery supports logical backup and physical backup. The following table describes the differences between the two backup methods.

**Item**

**Logical backup**

**Physical backup**

Full backup

Data Disaster Recovery splits the data of all tables in a database and executes SQL statements on the database to read the data in multiple threads in parallel.

A Data Disaster Recovery backup gateway is installed on a database server to back up database files. For more information, see [Install a backup gateway](/help/en/dbs/user-guide/add-a-backup-gateway).

Incremental backup

Data Disaster Recovery reads logs stored in the memory of a database and performs incremental backup based on the logs in real time. This prevents an I/O performance drop that may occur when a full backup is performed. The speed at which database logs are read is adjusted based on the rate at which the logs are generated.

Feature

-   Finer-grained backup can be performed on databases and tables.
    
-   Databases are not locked during data backup. This minimizes the impact of data backup on database performance.
    

-   A database instance can be backed up only as a whole.
    
-   Data is read from the disks of a database, which affects the I/O performance of the database.
    
-   In most cases, physical backup and restoration are faster than logical backup and restoration.
    
    **Note**
    
    You can create sandbox instances to use your backup data with ease. For more information, see [Data Disaster Recovery sandbox overview](/help/en/dbs/user-guide/overview-5#task-1960102).
    

Recommended database size

1 MB to 1 TB

Larger than 1 TB

  

## **References**

-   For more information about the backup methods supported by different database engines, see [Database engines and features](/help/en/dbs/product-overview/db-engines-and-features).
    
-   Data Disaster Recovery allows you to store backup data in Object Storage Service (OSS) buckets or Data Disaster Recovery built-in storage. For more information, see [Built-in storage and OSS](/help/en/dbs/product-overview/built-in-storage-and-oss).
    
-   For more information about how to create a Data Disaster Recovery backup schedule, see [Create a backup schedule](/help/en/dbs/getting-started/create-backup-plans).
