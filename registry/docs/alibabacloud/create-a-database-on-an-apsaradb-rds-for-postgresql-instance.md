You can create databases on an ApsaraDB RDS for PostgreSQL instance by using the ApsaraDB RDS console, executing SQL statements, or calling API operations.

## **Terms**

-   instance: a virtualized database server. You can create and manage multiple databases on an RDS instance.
    
-   database: a set of data that is stored in an organized manner and can be shared by a number of users. A database provides the minimal redundancy and is independent of applications. In simple words, a database is a data warehouse that is used to store data.
    
-   character set: a collection of letters, special characters, and encoding rules that are used in a database.
    

## Prerequisites

[An RDS for PostgreSQL instance is created](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance-1).

## Usage notes

-   You cannot change the name of a database after it is created.
    
-   To migrate data from an on-premises database to an RDS for PostgreSQL instance, create a database and an account on the RDS instance in advance and make sure that the created database has the same properties as the on-premises database and the created account has the same permissions on the created database as the account that is authorized to manage the on-premises database.
    

## Procedure

## Create a database using the RDS console

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, click **Databases**.
    
3.  On the page that appears, click **Create Database**.
    
4.  Configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Database Name**
    
    The name of the database. It must comply to the following constraints:
    
    -   Be up to 63 characters in length.
        
    -   Contain only lowercase letters, digits, hyphens (-), and underscores (\_).
        
    -   Start with a lowercase letter and end with a lowercase letter or a digit.
        
    
    **Supported Character Set**
    
    The character set that is supported by the database.
    
    **Important**
    
    You cannot change the supported character set of the database after the database is created.
    
    **Collate**
    
    The rule based on which strings are sorted.
    
    **Ctype**
    
    The type of character supported by the database.
    
    **Authorized By**
    
    The owner of the database. The owner has all permissions on the database.
    
    **Description**
    
    The description of the database.
    
5.  Click **Create**.
    
    You can view information about the database that you create on the **Databases** page. ![创建的账号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8691345471/p561058.png)
    
    **Parameter**
    
    **Description**
    
    ConnLimit
    
    The maximum number of concurrent requests that is allowed by the database. By default, the number of concurrent requests is unlimited. If you want to change the value of this parameter, you can use a privileged account to log on to the database and execute the `ALTER DATABASE <Database name> CONNECTION LIMIT <Number of concurrent requests>;` statement.
    
    Tablespace
    
    The tablespace to which the database belongs. Default value: `pg_default`. The paths of tablespaces cannot be viewed and modified.
    
    If you use methods such as the cloud migration feature to migrate data from a self-managed database to the database on your RDS instance, the tablespace name of the self-managed database is the same as that of the database on your RDS instance. You can change the name of the tablespace to which a database or a table belongs to `pg_default`. For more information about the cloud migration feature, see [Use the cloud migration feature for an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/use-the-cloud-migration-feature-for-an-apsaradb-rds-for-postgresql-instance#task-2152223).
    

## Create a database by executing SQL statements

1.  [Connect to the RDS for PostgreSQL instance by using a CLI or client tool](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance).
    
2.  Execute the following SQL statement to create a database:
    
    ```
    CREATE DATABASE <database name>;
    ```
    

## Related API

**API operation**

**Description**

[CreateDatabase](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createdatabase-postgresql)

Creates an RDS for PostgreSQL database.

## **References**

-   [Connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance-1#concept-stt-3hg-wdb)
    
-   [Delete a database](/help/en/rds/apsaradb-rds-for-postgresql/delete-a-database-from-an-apsaradb-rds-for-postgresql-instance)
