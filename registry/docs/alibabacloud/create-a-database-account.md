This topic describes how to create a database account. This topic also explains the difference between a privileged account and a standard account.

## Background information

You can create privileged and standard database accounts in PolarDB. You can manage all accounts in the console.

## Account types

**Account type**

**Description**

**Privileged account**

-   You can create and manage privileged accounts only in the console or by using APIs.
    
-   You can create multiple privileged accounts for each cluster. You can use privileged accounts to manage all standard accounts and databases of the cluster.
    
-   A privileged account has more permissions than before. This allows you to implement fine-grained control over user permissions based on your business requirements. For example, you can grant different users the permissions to query different tables.
    
-   A privileged account has full permissions on all databases in the cluster.
    
-   A privileged account has permissions to disconnect any account from the cluster.
    

**Standard account**

-   You can create and manage standard accounts in the console or by using SQL statements.
    
-   You can create multiple standard accounts for each cluster. The maximum number of standard accounts that you can create depends on the database engine.
    
-   You must manually grant permissions on specific databases to each standard account.
    
-   A standard account does not have permissions to create, manage, or disconnect other accounts of the cluster.
    

## Create an account

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com).
    
2.  In the upper-left corner of the page, select a region.
    
3.  On the Clusters page, find the cluster and click the cluster ID.
    
4.  In the left-side navigation pane, choose **Settings and Management** > **Accounts**.
    
5.  On the page that appears, click **Create Account**.
    
6.  In the Create Account panel, set the following parameters.
    
    **Parameter**
    
    **Description**
    
    **Account Name**
    
    Enter an account name. The username of the account must follow these rules:
    
    -   It must start with a lowercase letter and end with a letter or a digit.
        
    -   It can contain lowercase letters, digits, and underscores (\_).
        
    -   It must be 2 to 16 characters in length.
        
    -   It cannot be a system reserved username, such as root or admin.
        
    
    **Account Type**
    
    -   Select **Privileged Account** to create a privileged account.
        
    -   Select **Standard Account** to create a standard account.
        
    
    **Password**
    
    Enter a password for the account. The password must follow these rules:
    
    -   It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
        
    -   It must be 8 to 32 characters in length.
        
    -   It can contain the following special characters:
        
        -   !
            
        -   @
            
        -   #
            
        -   $
            
        -   %
            
        -   ^
            
        -   &
            
        -   \*
            
        -   (
            
        -   )
            
        -   \_
            
        -   +
            
        -   \-
            
        -   \=
            
    
    **Confirm Password**
    
    Enter the password again.
    
    **Description**
    
    Enter the information about the account to facilitate subsequent account management. The description must follow these rules:
    
    -   It cannot start with http:// or https://.
        
    -   It must be 2 to 256 characters in length.
        
    
7.  Click **Create**.
    

## Connect to a PolarDB for PostgreSQL cluster

[View or apply for an endpoint](/help/en/polardb/polardb-for-postgresql/view-or-apply-for-an-endpoint#task-1580381)

## Related API operations

**API**

**Description**

[CreateAccount](/help/en/polardb/polardb-for-mysql/api-createaccount#doc-api-polardb-CreateAccount)

Creates an account.

[DescribeAccounts](/help/en/polardb/polardb-for-mysql/api-describeaccounts#doc-api-polardb-DescribeAccounts)

Queries the accounts of a specified cluster.

[ModifyAccountDescription](/help/en/polardb/polardb-for-mysql/api-modifyaccountdescription#doc-api-polardb-ModifyAccountDescription)

Modifies the description of a database account for a PolarDB cluster.

[ModifyAccountPassword](/help/en/polardb/polardb-for-mysql/api-modifyaccountpassword#doc-api-polardb-ModifyAccountPassword)

Changes the password of a database account.

[DeleteAccount](/help/en/polardb/polardb-for-mysql/api-deleteaccount#doc-api-polardb-DeleteAccount)

Deletes an account.
