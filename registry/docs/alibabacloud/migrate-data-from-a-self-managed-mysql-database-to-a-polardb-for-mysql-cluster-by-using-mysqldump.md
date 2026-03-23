This topic describes how to migrate data from a self-managed MySQL database to a PolarDB for MySQL cluster by using mysqldump.

## Prerequisites

The following operations have been completed for the destination PolarDB for MySQL cluster:

-   Create a database. For information about how to create a database, see [Database management](/help/en/polardb/polardb-for-mysql/user-guide/database-management-4#section-efz-yt5-q2b).
    
-   [Create and manage a database account](/help/en/polardb/polardb-for-mysql/user-guide/create-and-manage-database-accounts#task-1580301).
    
-   [Configure an IP whitelist](/help/en/polardb/polardb-for-mysql/user-guide/configure-an-ip-whitelist#task-1580301).
    
-   Apply for a public endpoint. For information about how to apply for a public endpoint, see [Manage the endpoints of a cluster](/help/en/polardb/polardb-for-mysql/user-guide/apply-for-a-cluster-endpoint-or-a-primary-endpoint#section-riw-i95-90u).
    

## Differences between the data migration methods

You can use mysqldump or Data Transmission Service (DTS) to migrate data from a self-managed MySQL database to PolarDB for MySQL cluster. The following table describes the differences between the two data migration methods.

**Item**

**mysqldump**

**DTS**

Self-managed MySQL database version

No limits

5.1, 5.5, 5.6, 5.7, or 8.0

Schema migration and full data migration

Supported

Supported

Incremental data migration

Not supported

Supported

Hot migration

Not supported

Supported

**Note**

For information about how to migrate data by using DTS, see [Migrate data from a self-managed MySQL database to a PolarDB for MySQL cluster](/help/en/polardb/polardb-for-mysql/user-guide/migrate-data-from-a-self-managed-mysql-database-to-a-polardb-for-mysql-cluster).

## Usage notes

The names of the tables that are migrated to the destination PolarDB for MySQL cluster are case-insensitive and uniformly converted into lowercase.

## Procedure

**Note**

In this example, a self-managed MySQL 8.0 database that runs on a Linux operating system is used.

1.  Use mysqldump to export the data, stored procedures, triggers, and functions of the self-managed MySQL database.
    
    **Note**
    
    Do not update data when data is being exported.
    
    1.  In the Linux CLI, run the following command to export the data of the self-managed MySQL database.
        
        **Note**
        
        When you enter the endpoint of the self-managed MySQL database, take note of the following points:
        
        -   If the self-managed MySQL database is deployed on an Elastic Compute Service (ECS) instance, enter 127.0.0.1.
            
        -   If the self-managed MySQL database is an on-premises database, enter the public endpoint of the database.
            
        
        ```
        mysqldump -h <Endpoint of the self-managed MySQL database>  -u user -p --opt --default-character-set=utf8 --hex-blob <Name of the self-managed MySQL database> --skip-triggers --skip-lock-tables > /tmp/<Name of the self-managed MySQL database>.sql
        ```
        
        Example
        
        ```
        mysqldump -h 127.0.0.1 -u user -p --opt --default-character-set=utf8 --hex-blob testdb --skip-triggers --skip-lock-tables > /tmp/testdb.sql
        ```
        
    2.  (Optional) In the Linux CLI, run the following command to export the stored procedures, triggers, and functions of the self-managed MySQL database.
        
        **Note**
        
        If the database does not have stored procedures, triggers, or functions, skip this step.
        
        ```
        mysqldump -h 127.0.0.1 -u user -p --opt --default-character-set=utf8 --hex-blob <Name of the self-managed MySQL database> -R | sed -e 's/DEFINER[ ]*=[ ]*[^*]*\*/*/' > /tmp/<Name of the self-managed MySQL database> Trigger.sql
        ```
        
        Example
        
        ```
        mysqldump -h 127.0.0.1 -u user -p --opt --default-character-set=utf8 --hex-blob testdb -R | sed -e 's/DEFINER[ ]*=[ ]*[^*]*\*/\*/' > /tmp/testdbTrigger.sql
        ```
        
2.  Run the following commands to import the exported files to the destination PolarDB cluster:
    
    ```
    mysql -h <Endpoint of the PolarDB cluster> -P <Port of the PolarDB cluster> -u <Account of the PolarDB cluster> -p <PolarDB database name> < /tmp/<Name of the self-managed MySQL database>.sql
    mysql -h <Endpoint of the PolarDB cluster> -P <Port of the PolarDB cluster> -u <Account of the PolarDB cluster> -p <PolarDB database name> < /tmp/<Name of the self-managed MySQL database>Trigger.sql
    ```
    
    Example
    
    ```
    mysql -h polardbtest.mysql.polardb.rds.aliyuncs.com -P 3306 -u testuser -p testdb  < /tmp/testdb.sql
    mysql -h polardbtest.mysql.polardb.rds.aliyuncs.com -P 3306 -u testuser -p testdb  < /tmp/testdbTrigger.sql
    ```
    
    **Note**
    
    -   The PolarDB database name must be the name of an existing database on the PolarDB cluster. For information about how to create a database, see [Database management](/help/en/polardb/polardb-for-mysql/user-guide/database-management-4#section-efz-yt5-q2b).
        
    -   The account of the PolarDB cluster must be a privileged account or an account that has read and write permissions.
        
    
3.  After you import the files, you can log on to the PolarDB cluster database to check whether the data is normal. For information about how to log on to the PolarDB cluster database, see [Connect to a cluster](/help/en/polardb/polardb-for-mysql/user-guide/connect-to-a-cluster#task-1580301).
    

## FAQ

What do I do if the error message `Access denied; you need (at least one of) the SUPER privilege(s) for this operation` appears?

Delete the statements in the script that require the SUPER privileges, and then run the script.
