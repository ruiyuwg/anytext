Before you configure a DTS task that uses a self-managed MySQL database as the source, create a database account and enable binary logging. DTS requires both to pass the precheck and run incremental data migration, data synchronization, or change tracking tasks.

## Prerequisites

-   MySQL 5.6 or later
    
-   Access to the MySQL configuration file (`my.cnf` on Linux, `my.ini` on Windows)
    
-   Root or administrative privileges to create accounts and grant permissions
    
-   Ability to restart the MySQL service (binary logging changes require a restart)
    

## Required permissions

All three task types (incremental data migration, data synchronization, and change tracking) require the same permissions:

 

**Permission**

**Purpose**

SELECT

Read data from objects to be migrated, synchronized, or tracked

REPLICATION CLIENT

Read the binary log position

REPLICATION SLAVE

Read binary log events

SHOW VIEW

Read view definitions

CREATE on `*.*`

Allow DTS to create a database named `test` to advance the binary log position

## Step 1: Create the database account

1.  Log on to the self-managed MySQL database.
    
2.  Create a dedicated account for DTS.
    
    ```
    CREATE USER 'username'@'host' IDENTIFIED BY 'password';
    ```
    
     
    
    **Parameter**
    
    **Description**
    
    `username`
    
    Account name to create
    
    `host`
    
    Host from which this account can log on. Use `%` for any host.
    
    `password`
    
    Password for the account
    
3.  Grant the required permissions.
    
    Grant object-level permissions on the databases and tables to migrate:
    
    ```
    GRANT privileges ON databasename.tablename TO 'username'@'host' WITH GRANT OPTION;
    ```
    
    Grant the permission to create databases and tables:
    
    ```
    GRANT CREATE ON *.* TO 'username'@'host' WITH GRANT OPTION;
    ```
    
     
    
    **Parameter**
    
    **Description**
    
    `privileges`
    
    Permissions to grant: SELECT, INSERT, UPDATE, or ALL
    
    `databasename`
    
    Database name. Use `*` for all databases.
    
    `tablename`
    
    Table name. Use `*` for all tables.
    
    `username`
    
    Account to grant permissions to
    
    `host`
    
    Host from which the account can log on. Use `%` for any host.
    
    `WITH GRANT OPTION`
    
    Optional. Allows the account to run GRANT commands.
    
    **Example:** Create an account named `dtsmigration` and grant all permissions:
    
    ```
    CREATE USER 'dtsmigration'@'%' IDENTIFIED BY 'Dts123456';
    GRANT ALL ON *.* TO 'dtsmigration'@'%';
    ```
    
4.  Verify the account permissions.
    
    ```
    SHOW GRANTS FOR 'dtsmigration'@'%';
    ```
    
    The output should include `GRANT ALL PRIVILEGES ON *.* TO 'dtsmigration'@'%'`.
    

## Step 2: Configure binary logging

**Important**

Enabling or modifying binary logging requires a MySQL service restart. Perform this step during off-peak hours.

### Binary logging parameters

  

**Parameter**

**Required value**

**Description**

`log_bin`

`mysql_bin`

Enables binary logging and sets the log file name prefix. DTS reads binary logs to capture incremental changes.

`binlog_format`

`row`

Records actual row data for each change. STATEMENT and MIXED formats can cause data inconsistencies.

`server_id`

Integer greater than 1 (example: `2`)

Uniquely identifies the MySQL server in a replication topology.

`binlog_row_image`

`full`

Logs complete before-and-after images of each row. Required for MySQL versions later than 5.6.

`expire_logs_days`

`7` or more

Binary log retention in days. For MySQL versions earlier than 8.0 only. Default: `0` (never expire). Deprecated in MySQL 8.0.

`binlog_expire_logs_seconds`

`604800` or more

Binary log retention in seconds. For MySQL 8.0 and later only. Default: `2592000` (30 days).

`log_slave_updates`

`ON`

Logs replicated events to the local binary log. Required only for dual-primary cluster deployments.

### Edit the configuration file

1.  Open the MySQL configuration file.
    
    -   **Linux:** Use the `vim` command to modify the my.cnf configuration file.
        
        ```
        vim /path/to/my.cnf
        ```
        
        **Note**
        
        The default location of `my.cnf` varies by distribution. Common paths include `/etc/my.cnf`, `/etc/mysql/my.cnf`, and `/etc/mysql/mysql.conf.d/mysqld.cnf`.
        
    -   **Windows:** Open the my.ini configuration file in a text editor.
        
2.  Add or modify the following parameters under the `[mysqld]` section.
    
    ```
    log_bin=mysql_bin
    binlog_format=row
    server_id=2
    binlog_row_image=full
    ```
    
3.  Set the binary log retention period based on your MySQL version.
    
    **MySQL 5.7 and earlier:**
    
    ```
    expire_logs_days=7
    ```
    
    **Note**
    
    `expire_logs_days` is deprecated in MySQL 8.0. Do not use it on MySQL 8.0 and later.
    
    **MySQL 8.0 and later:**
    
    ```
    binlog_expire_logs_seconds=604800
    ```
    
4.  (Optional) For dual-primary cluster deployments, add:
    
    ```
    log_slave_updates=ON
    ```
    
5.  Restart the MySQL service.
    
    -   **Linux:**
        
        ```
        /etc/init.d/mysqld restart
        ```
        
    -   **Windows:** Use the Windows Services Manager, or run:
        
        ```
        net stop mysql
        net start mysql
        ```
        

### Verify binary logging

After the service restarts, log on to MySQL and run the following commands:

```
SHOW VARIABLES LIKE 'log_bin';
-- Expected: log_bin | ON

SHOW VARIABLES LIKE 'binlog_format';
-- Expected: binlog_format | ROW

SHOW VARIABLES LIKE 'binlog_row_image';
-- Expected: binlog_row_image | FULL

SHOW VARIABLES LIKE 'server_id';
-- Expected: server_id | <integer greater than 1>
```
