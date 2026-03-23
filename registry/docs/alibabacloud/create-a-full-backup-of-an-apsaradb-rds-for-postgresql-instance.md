This topic describes how to use the pg\_basebackup utility provided by open source PostgreSQL to create a full backup of your ApsaraDB RDS for PostgreSQL instance and export the backup files to your computer.

## Prerequisites

-   The IP address of your ECS instance or local host is added to a whitelist of your RDS instance. For more information, see [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-postgresql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-postgresql-instance#concept-sfx-kdg-wdb).
    
-   Your ECS instance or local host runs the same version of PostgreSQL as your RDS instance.
    

## Background information

pg\_basebackup backs up all data of a PostgreSQL instance. The backup files can be used for point-in-time recovery. For more information, see [pg\_basebackup](https://www.postgresql.org/docs/12/app-pgbasebackup.html).

In this topic, CentOS 7 and PostgreSQL 15 are used as examples of how to create a full backup.

## Usage notes

We recommend that you use the privileged account of your RDS instance or an account that has the REPLICATION permission. Otherwise, you may have permission issues during creation.

## Procedure

**Note**

pg\_basebackup cannot back up a single database or database object. For more information about how to back up a single database or database object, see [Create a logical backup for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-a-logical-backup-for-an-apsaradb-rds-for-postgresql-instance#task-2336329).

1.  Log on to your ECS instance or local host. Then, run the following command to back up a database from your RDS instance:
    
    ```
    pg_basebackup -Ft -Pv -Xs -z -D <backupdir> -Z5 -h '<hostname>' -p <port> -U <username> -W
    ```
    
    The following table describes parameters in this command. For more information, see [pg\_basebackup](https://www.postgresql.org/docs/12/app-pgbasebackup.html).
    
    **Parameter**
    
    **Description**
    
    backupdir
    
    The directory of backup files that are exported. The system automatically creates this directory. However, if this directory already exists and is not empty, the system reports an error.
    
    hostname
    
    The endpoint that you use to connect to your RDS instance.
    
    If your ECS and RDS instances are deployed in the same region under the same Alibaba Cloud account and have the same network type, we recommend that you use an internal endpoint. If both network types are VPC, the two instances must be in the same VPC.
    
    Use a public endpoint in other scenarios.
    
    **Note**
    
    If you want to use a public endpoint to access your RDS instance, make sure that you have applied for the public endpoint. For more information, see [Apply for or release a public endpoint](/help/en/rds/apsaradb-rds-for-postgresql/apply-for-or-release-a-public-endpoint-on-an-apsaradb-rds-for-postgresql-instance#concept-nsl-hff-vdb).
    
    port
    
    The port that you use to connect to your RDS instance.
    
    username
    
    A username of your RDS instance.
    
    Example:
    
    ```
    pg_basebackup -Ft -Pv -Xs -z -D /pg15/backup1/ -Z5 -h pgm-bp****.pg.rds.aliyuncs.com -p 5432 -U test1 -W
    ```
    
2.  When `Password:` appears, enter the password of the username of your RDS instance and press Enter.
    
    If `base backup completed` is displayed, the backup is successful.
    

## References

If you want to use the backup files to restore data, follow the instructions provided in [Recovering Using a Continuous Archive Backup](https://www.postgresql.org/docs/12/continuous-archiving.html#BACKUP-BASE-BACKUP).
