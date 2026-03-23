This topic describes the Database Backup feature for self-managed databases on Elastic Compute Service (ECS) instances in Cloud Backup. It also covers the advantages of this feature, how it works, its procedures, pricing, and supported database versions.

## Introduction

The Database Backup feature for ECS is a data protection solution provided by Cloud Backup for self-managed databases on ECS instances. This feature backs up database data to a Cloud Backup backup vault in a simple, secure, and reliable manner. This ensures that data can be fully recovered from the Cloud Backup backup vault in the event of a database system failure, an ECS instance failure, a logic error, or a ransomware attack.

**Important**

-   Cloud Backup does not support backing up databases that are deployed in containers.
    
-   The MySQL backup feature does not support backing up multiple MySQL instances on a single machine, such as a local server or an ECS instance.
    

## Key advantages

-   Low cost
    
    Cloud Backup does not charge instance configuration fees. You are charged only for the backup storage capacity that is used after deduplication and compression.
    
-   Excellent performance
    
    Backup jobs consume minimal resources, typically less than 0.5 cores and 100 MB of memory. This feature provides high backup performance and can achieve a near-zero Recovery Point Objective (RPO) with real-time backups for MySQL and Oracle.
    
-   Wide support
    
    This feature supports major versions of MySQL, Oracle, and SQL Server.
    
-   Simple configuration
    
    After authorization is granted, Cloud Backup automatically detects databases on ECS instances, and then pushes and installs the backup client.
    
-   Automatic alerts
    
    You can configure alert settings for failed tasks in the Cloud Backup console. You can receive notifications by email, text message, or phone call.
    
-   Backup locking to prevent accidental deletion
    
    Cloud Backup provides a backup locking feature for backup vaults. This feature prevents backup data from being deleted by any account or method before the configured retention period expires.
    

## How it works

You can specify the ECS instances that you want to back up in the Cloud Backup console. Cloud Backup automatically pushes the backup client to the ECS instances. Ensure that Cloud Assistant is installed on the ECS instances. The backup client then backs up the specified databases on the instances according to the backup plan configuration.

When a backup job runs, the Cloud Backup client calls the native backup component for the specified database instance. The client reads the backup data, performs deduplication and compression, and then uploads the data to the Cloud Backup backup vault to complete the backup.

## Procedure

The following procedure shows how to back up an ECS-hosted database in the Cloud Backup console.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7938966671/CAEQFxiBgICgjK7i6xgiIDdlMmNkM2MyNjYwNDRkMjFhOWFiY2VmNmZiODI4NDZl4148523_20240103152716.818.svg)

**Note**

-   The procedures for backing up MySQL, Oracle, and SQL Server databases that are hosted on ECS instances are basically the same. In this example, a MySQL database is backed up.
    
-   Cloud Backup registers databases based on username and password. To back up a MySQL or SQL Server database, you must obtain the username and password from the database administrator. Oracle databases can be registered without passwords.
    

1.  [Activate Cloud Backup](/help/en/cloud-backup/product-overview/activate-hbr#task-2259775)
    
    You are not charged for activating Cloud Backup. You are charged for the rental and storage usage of backup vaults. **You are not charged for using a vault in the first 30 days. You are charged after the free-trial period ends.** You are charged for the backup storage based on the storage space occupied by the data that is deduplicated and compressed. A free capacity of 100 GB is provided for each backup vault per month. After the free quota is used up, you are charged based on tiered pricing. For more information, see [Billing methods and billable items](/help/en/cloud-backup/product-overview/billing-methods-and-billable-items#concept-89062-zh).
    
2.  [Register a database](/help/en/cloud-backup/user-guide/register-an-ecs-hosted-mysql-database#task-2038198)
    
    Register a database in the Cloud Backup console. Cloud Backup automatically installs a backup client on the ECS instance that hosts the database. Cloud Backup can discover the database that you want to back up only after you register the database. You are not charged for using Cloud Backup if you only register a database in the Cloud Backup console.
    
3.  [Precheck a database](/help/en/cloud-backup/user-guide/precheck-a-mysql-database-deployed-on-an-ecs-instance#task-2056379)
    
    To ensure that your database can be backed up as expected, Cloud Backup provides the precheck feature to identify issues that may cause backup failure.
    
4.  [Back up a database](/help/en/cloud-backup/user-guide/back-up-a-mysql-database#task-2038199)
    
    When you create a backup plan, configure the backup vault, data source, backup cycle, retention period, and backup policies (such as full backup and incremental backup). Cloud Backup starts the backup plan and continuously backs up data from the specified database.
    
5.  [Restore a database](/help/en/cloud-backup/user-guide/restore-a-mysql-database#task-2038200)
    
    You are not charged for restoring a database. If a database exception occurs, you can restore the data of the database to **the source database** or **another registered database** within the same account in the same region based on recovery points.
    

## Supported database versions

-   **Oracle**
    
    The following table describes the supported versions and features for Oracle.
    
    **Database type**
    
    **Supported versions**
    
    **Supported operating systems**
    
    **Minimum backup granularity**
    
    **Backup features**
    
    **Full backup**
    
    **Incremental backup**
    
    **Log backup (periodic backup)**
    
    **Real-time backup**
    
    Oracle
    
    9i
    
    -   RHEL 4, 5
        
    -   SLES 9
        
    -   SUSE 9.3
        
    -   CentOS 4.5
        
    
    Instance
    
    Supported
    
    Support
    
    Support
    
    Support
    
    10g
    
    -   RHEL 4, 5, 6.5, 9
        
    -   CentOS 4.6
        
    -   SUSE 11 SP4
        
    
    Instance
    
    Support
    
    Support
    
    Supported
    
    Supported
    
    11g
    
    -   RHEL 5, 6, 6.5, 7
        
    -   CentOS 6.4, 6.5
        
    -   Oracle Enterprise Linux 6.7
        
    -   Windows Server 2008 R2, Windows Server 2012 R2
        
    -   Alibaba Cloud Linux 2
        
    
    Instance
    
    Support
    
    Support
    
    Support
    
    Support
    
    12c
    
    -   Windows Server 2008 R2
        
    -   RHEL 6.5, 7.5
        
    
    Instance
    
    Support
    
    Support
    
    Supported
    
    Support
    
    18c
    
    -   RHEL 7
        
    -   Windows Server 2008 R2
        
    
    Instance
    
    Support
    
    Support
    
    Support
    
    Supported
    
    19c (≤19.24)
    
    Oracle Enterprise Linux 7.0
    
    Instance
    
    Supported
    
    Supported
    
    Supported
    
    Support
    
-   **Oracle RAC**
    
    The following table describes the supported versions and features for Oracle Real Application Clusters (RAC).
    
    **Database type**
    
    **Supported versions**
    
    **Supported operating systems**
    
    **Minimum backup granularity**
    
    **Backup features**
    
    **Full backup**
    
    **Incremental backup**
    
    **Log backup (periodic backup)**
    
    **Real-time backup**
    
    Oracle RAC
    
    9i
    
    -   SUSE 9.3
        
    -   RHEL 4
        
    
    Instance
    
    Supported
    
    Support
    
    Support
    
    Support
    
    10g
    
    -   RHEL 5
        
    -   Windows Server 2008 R2
        
    
    Instance
    
    Support
    
    Support
    
    Supported
    
    Support
    
    11g
    
    -   Windows Server 2008 R2
        
    -   Oracle Linux 6.4
        
    -   RHEL 5, 6.5
        
    -   iSoft Server 3
        
    
    Instance
    
    Support
    
    Support
    
    Supported
    
    Support
    
    12c
    
    -   CentOS 6, 6.7
        
    -   RHEL 6.5
        
    -   Windows Server 2008 R2
        
    -   Oracle Enterprise Linux 6
        
    
    Instance
    
    Supported
    
    Supported
    
    Supported
    
    Support
    
    18c
    
    Windows Server 2008 R2
    
    Instance
    
    Support
    
    Support
    
    Support
    
    Support
    
    19c (≤19.24)
    
    RHEL 7.6
    
    Instance
    
    Supported
    
    Support
    
    Support
    
    Support
    
-   **Oracle Data Guard**
    
    The following table describes the supported versions and features for Oracle Data Guard.
    
    **Database type**
    
    **Supported versions**
    
    **Supported operating systems**
    
    **Minimum backup granularity**
    
    **Backup features**
    
    **Full backup**
    
    **Incremental backup**
    
    **Log backup (periodic backup)**
    
    **Real-time backup**
    
    Oracle Data Guard
    
    11g
    
    -   CentOS 6.4, 6.5, 7.6
        
    -   RHEL 6
        
    -   Windows Server 2008 R2
        
    -   Alibaba Cloud Linux 2
        
    
    Instance
    
    Supported
    
    Support
    
    Support
    
    Supported
    
    12c
    
    Oracle Enterprise Linux 6
    
    Instance
    
    Supported
    
    Support
    
    Supported
    
    Support
    
-   **MySQL**
    
    The following table describes the supported versions and features for MySQL.
    
    **Database type**
    
    **Supported versions**
    
    **Supported operating systems**
    
    **Minimum backup granularity**
    
    **Backup features**
    
    **Full backup**
    
    **Incremental backup**
    
    **Log backup (periodic backup)**
    
    **Real-time backup**
    
    MySQL
    
    5.1.38 and later
    
    -   RHEL 6, 6.5
        
    -   SUSE 11 SP4
        
    
    Instance
    
    Support
    
    Supported
    
    Supported
    
    Supported
    
    5.4
    
    -   RHEL 6.5
        
    -   SUSE 11 SP4
        
    
    Instance
    
    Supported
    
    Supported
    
    Support
    
    Supported
    
    5.5
    
    -   Ubuntu 12.04, 14.04
        
    -   Debian 7.8, 8.3
        
    -   CentOS 6.0
        
    -   RHEL 6.5
        
    
    Instance
    
    Support
    
    Support
    
    Supported
    
    Support
    
    5.6
    
    -   RHEL 5, 6, 6.5
        
    -   Ubuntu 14.04
        
    -   CentOS 6.0, 7.2
        
    
    Instance
    
    Supported
    
    Support
    
    Supported
    
    Support
    
    5.7
    
    -   RHEL 6, 6.5, 7
        
    -   CentOS 7.0, 7.2
        
    -   Ubuntu 16.04
        
    -   Neokylin 7.0
        
    -   Alibaba Cloud Linux 2, 3
        
    
    Instance
    
    Supported
    
    Supported
    
    Support
    
    Support
    
    8.0 to 8.0.32
    
    -   CentOS 6.7, 7.0, 7.9
        
    -   Ubuntu 20.04
        
    -   RHEL 6.5
        
    
    Only for backup clients of version 8.0.42518 and later
    
    Instance
    
    Support
    
    Support
    
    Support
    
    Support
    
-   **MariaDB**
    
    The following table lists the supported versions and features of MariaDB.
    
    **Database type**
    
    **Supported versions**
    
    **Supported operating systems**
    
    **Minimum backup granularity**
    
    **Backup features**
    
    **Full backup**
    
    **Incremental backup**
    
    **Log backup (periodic backup)**
    
    **Real-time backup**
    
    MariaDB
    
    5.5, 10.0, 10.1, 10.2, 10.3
    
    -   CentOS 7.0
        
    -   Ubuntu 18.04
        
    
    Instance
    
    Support
    
    Support
    
    Support
    
    Support
    
-   **SQL Server**
    
    The following table describes the supported versions and features of SQL Server.
    
    **Database type**
    
    **Supported versions**
    
    **Supported operating systems**
    
    **Minimum backup granularity**
    
    **Backup features**
    
    **Full backup**
    
    **Incremental backup**
    
    **Log backup (periodic backup)**
    
    SQL Server
    
    2005
    
    Windows Server 2008 R2 SP1
    
    Instance
    
    Support
    
    Support
    
    Support
    
    2008
    
    -   Windows Server 2008 R2
        
    -   Windows Server 2008 R2 SP1
        
    
    Instance
    
    Support
    
    Support
    
    Support
    
    2008 R2
    
    Windows Server 2008 R2
    
    Instance
    
    Supported
    
    Supported
    
    Support
    
    2012
    
    Windows Server 2012 RC
    
    Instance
    
    Support
    
    Help and support
    
    Support
    
    2014
    
    -   Windows Server 2008 R2 SP1
        
    -   Windows Server 2016
        
    
    Instance
    
    Support
    
    Support
    
    Support
    
    2016 (RTM)
    
    Windows Server 2012 R2
    
    Instance
    
    Support
    
    Supported
    
    Support
    
    2017
    
    Windows Server 2012, 2016
    
    Instance
    
    Supported
    
    Support
    
    Supported
    
    2019
    
    Windows Server 2016
    
    Instance
    
    Support
    
    Support
    
    Support
    
    2022
    
    Windows Server 2016
    
    Only for backup clients of version 8.0.42518 and later
    
    Instance
    
    Support
    
    Support
    
    Help and Support
    
-   **SQL Server Always On**
    
    The following table lists the supported versions and features of SQL Server Always On.
    
    **Database type**
    
    **Supported versions**
    
    **Supported operating systems**
    
    **Minimum backup granularity**
    
    **Backup features**
    
    **Full backup**
    
    **Incremental backup**
    
    **Log backup (periodic backup)**
    
    SQL Server Always On
    
    2012, 2016, 2017
    
    Windows Server 2012 R2
    
    Instance
    
    Supported
    
    Supported
    
    Support
    

## Pricing

The Database Backup feature for ECS in Cloud Backup incurs the following two types of fees:

-   Database backup vault rental fee
    
    You must create a database backup vault for database backups. Multiple databases in the same region can share a backup vault. Each vault includes a specific amount of free storage. For pricing details, see [Pricing](https://www.alibabacloud.com/product/hybrid-backup-recovery/pricing).
    
-   Database backup storage fee
    
    You are charged a database backup storage fee for usage that exceeds the 100 GB free quota for each database backup vault. Storage usage is calculated based on the actual amount of data stored after deduplication and compression. For pricing details, see [Pricing](https://www.alibabacloud.com/product/hybrid-backup-recovery/pricing).
    

## What to do next

-   Learn how to register your ECS databases for backup. For more information, see [Register a MySQL database (ECS)](/help/en/cloud-backup/user-guide/register-an-ecs-hosted-mysql-database#task-2038198), [Register an Oracle database (ECS)](/help/en/cloud-backup/user-guide/register-an-ecs-hosted-oracle-database#task-2038192), and [Register a SQL Server database (ECS)](/help/en/cloud-backup/user-guide/register-an-ecs-hosted-sql-server-database#task-2035666).
    
-   Find answers to common questions. For more information, see [FAQ](/help/en/cloud-backup/user-guide/faq-about-database-backup#reference-2251841).
    
-   Learn about the best practices for using Cloud Backup. For more information, see [Best practices](/help/en/cloud-backup/use-cases/create-a-ram-user-and-authorize-the-ram-user-to-access-hbr#concept-64817-zh).
