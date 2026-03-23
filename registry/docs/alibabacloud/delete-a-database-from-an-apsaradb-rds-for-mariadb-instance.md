After you create an ApsaraDB RDS for MariaDB instance, you can create a database on the RDS instance based on your business requirements. ApsaraDB RDS for MariaDB allows you to create and delete databases by using the ApsaraDB RDS console, SQL statements, and API operations.

## **Background information**

### **Terms**

-   instance: a virtualized database server. You can create and manage multiple databases on an RDS instance.
    
-   database: a set of data that is stored in an organized manner and can be shared by a number of users. A database provides the minimal redundancy and is independent of applications. In simple words, a database is a data warehouse that is used to store data.
    
-   character set: a collection of letters, special characters, and encoding rules that are used in a database.
    

## Prerequisites

An RDS instance is created. For more information, see [Create an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/create-an-apsaradb-rds-for-mariadb-instance-1).

## **Usage notes**

The name of a database on an RDS instance cannot be modified.

## Create a database

### Use the ApsaraDB RDS console

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, click **Databases**.
    
3.  On the page that appears, click **Create Database**.
    
4.  In the panel that appears, configure the parameters that are described in the following table.
    
    **Parameter**
    
    **Description**
    
    **Database Name**
    
    -   The name of the database. It must be 2 to 64 characters in length.
        
    -   It must start with a letter and end with a letter or digit.
        
    -   It can contain lowercase letters, digits, underscores (\_), and hyphens (-).
        
    -   The name must be unique within the RDS instance.
        
    
    **Note**
    
    If the database name contains a hyphen (`-`), the system parses the hyphen (`-`) in the name of the folder in which the database resides as `@002d`.
    
    **Supported Character Set**
    
    The character set of the database. Select a character set based on your business requirements.
    
    **Authorized By**
    
    The authorized account of the database. You can leave this parameter empty. If you leave this parameter empty, you can specify the authorized account of the database after the database is created. For more information, see [Modify or reset account permissions](/help/en/rds/apsaradb-rds-for-mariadb/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mariadb-instance).
    
    **Note**
    
    The **Authorized By** drop-down list displays only the standard accounts that are created on your instance. The privileged account has all permissions on all databases and does not require authorization.
    
    **Description**
    
    The description of the database. This parameter is optional. You can configure this parameter to help you manage the database. The description can be up to 256 characters in length.
    
5.  Click **Create**.
    

### Use SQL statements

1.  [Connect to the RDS instance.](/help/en/rds/apsaradb-rds-for-mariadb/connect-to-an-apsaradb-rds-for-mariadb-instance-1)
    
2.  Execute the following statement to create a database:
    
    ```
    CREATE DATABASE <database name>;
    ```
    

## Delete a database

**Warning**

When you delete a database from an RDS instance, the database becomes unavailable. Proceed with caution.

### Use the ApsaraDB RDS console

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, click **Databases**.
    
3.  Find the database you want to delete and click **Delete** in the **Actions** column.
    
4.  In the message that appears, click **OK**.
    

### Use SQL statements

1.  [Connect to the RDS instance.](/help/en/rds/apsaradb-rds-for-mariadb/connect-to-an-apsaradb-rds-for-mariadb-instance-1)
    
2.  Execute the following statement to delete the database:
    
    ```
    DROP DATABASE <database name>;
    ```
    

## Related operations

**Operation**

**Description**

[CreateDatabase](/help/en/rds/apsaradb-rds-for-mariadb/api-rds-2014-08-15-createdatabase-mariadb)

Creates a database.

[DeleteDatabase](/help/en/rds/apsaradb-rds-for-mariadb/api-rds-2014-08-15-deletedatabase-mariadb)

Deletes a database.

## References

-   [Create an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/create-an-apsaradb-rds-for-mariadb-instance-1)
    
-   [Modify or reset account permissions](/help/en/rds/apsaradb-rds-for-mariadb/modify-the-permissions-of-a-standard-account-on-an-apsaradb-rds-for-mariadb-instance)
    
-   [Connect to an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/connect-to-an-apsaradb-rds-for-mariadb-instance-1)
