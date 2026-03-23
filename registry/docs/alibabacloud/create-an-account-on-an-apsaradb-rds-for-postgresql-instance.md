This topic describes how to create an account on an ApsaraDB RDS for PostgreSQL instance.

## Account types

RDS instances support two types of accounts: privileged accounts and standard accounts. The following table describes these types of accounts.

**Account type**

**Description**

**Privileged account**

-   You can create and manage privileged accounts in the ApsaraDB RDS console or by calling API operations.
    
-   You can create multiple privileged accounts for each RDS instance. The privileged accounts of an RDS instance have the permissions to manage all standard accounts and databases that are created on the instance.
    
-   A privileged account allows you to manage permissions at fine-grained levels based on your business requirements. For example, you can grant each standard account the permissions to query specific tables.
    
-   A privileged account has the permissions to log off all standard accounts on the instance on which the privileged account is created.
    

**Note**

-   The first privileged account that you create is the owner of the default public schema of a standard system database named template1.
    
-   By default, the CREATE DATABASE statement creates a database by replicating the template1 system database. The owners of all databases that are created by using this statement from the template1 system database are the first privileged account.
    
-   The comment of the first privileged account starts with "template1 public schema owner."
    

**Standard account**

-   You can create and manage standard accounts in the ApsaraDB RDS console, by calling API operations, or by using SQL statements.
    
-   You can create multiple standard accounts for each RDS instance.
    
-   You must grant the permissions on specified databases to standard accounts.
    
-   You cannot use a standard account to create, manage, or log off other accounts from the instance on which the standard account is created.
    

## Usage notes

-   You can create multiple privileged accounts and standard accounts in the ApsaraDB RDS console. You can also create and manage standard accounts by using SQL statements.
    
-   Before you migrate data from an on-premises database to an RDS instance, you must create a database with the same name and an account with the same username and password in the RDS instance.
    
-   We recommend that you follow the principle of least privilege (PoLP) and grant the read and write permissions to accounts based on your business requirements. You can create multiple accounts and grant each account only the permissions to access the data of specified databases. If an account does not need to write data to a database, we recommend that you grant only the read permissions on the database to the account.
    
-   For security purposes, we recommend that you specify strong passwords for the accounts and change the passwords on a regular basis.
    

## Procedure

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane of the page that appears, click **Accounts**.
    
3.  On the page that appears, click **Create Account**.
    
4.  Configure the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Database Account**
    
    -   The username of the account. It must be 2 to 63 characters in length.
        
    -   It can contain lowercase letters, digits, and underscores (\_).
        
    -   It must start with a letter and end with a letter or a digit.
        
    -   It cannot be the same as the username of an existing account.
        
    -   It cannot start with pg.
        
    -   It cannot contain SQL keywords. For more information, see [SQL Keywords](https://www.postgresql.org/docs/14/sql-keywords-appendix.html).
        
    
    **Account Type**
    
    The type of the account. Two types of accounts are supported: privileged accounts and standard accounts.
    
    -   A privileged account has all operation permissions on all databases.
        
    -   Standard accounts have all operation permissions only on their authorized databases.
        
    
    **Note**
    
    -   The permitted operations include SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, and TRIGGER.
        
    -   To perform fine-grained account permission management, such as create an account that only has the read permission, see [Manage permissions in an ApsaraDB RDS for PostgeSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/manage-permissions-in-an-apsaradb-rds-for-postgesql-instance).
        
    
    **New Password**
    
    -   The password of the account. It must be 8 to 32 characters in length.
        
    -   It must contain at least three types of the following characters: uppercase letters, lowercase letters, digits, and special characters.
        
    -   It can contain any of the following special characters: ! @ # $ % ^ & \* ( ) \_ + - =
        
    
    **Confirm Password**
    
    The password of the account.
    
    **Description**
    
    The description of the account.
    
5.  Click **OK**.
    

## **FAQ**

How do I manage multiple databases by using a **standard account**?

To manage multiple databases by using a **standard account**, you can execute the `GRANT` statement to grant required permissions to the account. For example, you can execute the `GRANT CONNECT, TEMPORARY, CREATE ON DATABASE database_name TO user_name;` statement to grant the account specified by user\_name permissions to connect to the database specified by database\_name and create temporary tables or objects in the database.

## Related operations

**Operation**

**Description**

[CreateAccount](/help/en/rds/api-create-an-account#doc-api-Rds-CreateAccount)

Creates an account that is used to manage the databases of an instance.
