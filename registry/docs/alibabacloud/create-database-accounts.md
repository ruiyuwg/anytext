This topic describes how to create a database account. This topic also explains the difference between a privileged account and a standard account.

## Background information

You can create two types of database accounts in ApsaraDB for PolarDB: privileged account and standard account. You can use the ApsaraDB for PolarDB console to manage all the database accounts.

**Note** You cannot create root accounts in ApsaraDB for PolarDB because of security reasons.

 

Account type

Description

Privileged account

-   You can use the ApsaraDB for PolarDB console or API operations to create and manage privileged accounts.
-   You can create multiple privileged accounts for each cluster. You can use the privileged accounts to manage all the standard accounts and databases of the corresponding cluster.
-   A privileged account has more permissions than before. This allows you to implement fine-grained control over user permissions based on your business requirements. For example, you can grant different users the permissions to query different tables.
-   A privileged account has all the permissions on the databases in the corresponding cluster.
-   You can use a privileged account to disconnect accounts from the corresponding databases.

Standard account

-   You can use the ApsaraDB for PolarDB console, API operations, or SQL statements to create and manage standard accounts.
-   You can create multiple standard accounts for each cluster. The maximum number of standard accounts that you can create depends on the database engine.
-   You must manually grant standard accounts the specific database permissions.
-   You cannot use a standard account to create, manage, or disconnect other accounts from databases.

## Create an account

1.  Log on to the [PolarDB console](https://polardb.console.alibabacloud.com/).
2.  In the upper-left corner of the console, select the region where the cluster that you want to manage is deployed.
3.  Find the cluster you want to manage and click the cluster ID.
4.  In the left-side navigation pane, choose Settings and Management > Accounts.
5.  On the page that appears, click Create Account.
6.  In the Create Account pane, configure the following parameters.
    
     
    
    Parameter
    
    Description
    
    Account Name
    
    Enter an account name. The account name must meet the following requirements:
    
    -   It must start with a lowercase letter and end with a letter or a digit.
    -   It can contain lowercase letters, digits, and underscores (\_).
    -   It must be 2 to 16 characters in length.
    -   It cannot be a system reserved username, such as root or admin.
    
    Account Type
    
    -   To create a privileged account, select Privileged Account.
    -   To create a standard account, select Standard Account.
    
    Password
    
    Enter an account password. The password must meet the following requirements:
    
    -   It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
    -   It must be 8 to 32 characters in length.
    -   It can contain the following special characters:
        
        !@#$%^&\*()\_+-=
        
    
    Confirm Password
    
    Enter the password again.
    
    Description
    
    Enter the information about the account to facilitate subsequent account management. The description must meet the following requirements:
    
    -   It cannot start with http:// or https://.
    -   It must start with a letter.
    -   It can contain letters, digits, underscores (\_), and hyphens (-).
    -   It must be 2 to 256 characters in length.
    
7.  Click OK.

## What to do next

[View or apply for an endpoint](/help/en/polardb/polardb-for-oracle/view-or-apply-for-an-endpoint#task-imd-wlq-tdb "To connect to a cluster, enter an endpoint of the cluster. supports cluster endpoints and primary endpoints. For each type of endpoints, you can apply for an internal endpoint or a public endpoint to connect to the cluster. This topic describes how to view or apply for an endpoint in the PolarDB console.")

## Related API operations

 

API

Description

[CreateAccount](/help/en/polardb/polardb-for-oracle/api-createaccount-2#doc-api-polardb-CreateAccount "Creates a database account for a PolarDB cluster.")

Creates a database account for a specified PolarDB cluster.

[DescribeAccounts](/help/en/polardb/polardb-for-oracle/api-describeaccounts-2#doc-api-polardb-DescribeAccounts "Queries the details of a database account of a PolarDB cluster.")

Queries the database accounts for a specified PolarDB cluster.

[ModifyAccountDescription](/help/en/polardb/polardb-for-oracle/api-modifyaccountdescription-2#doc-api-polardb-ModifyAccountDescription "Modifies the description of a database account for a PolarDB cluster.")

Changes the description of a database account for a specified PolarDB cluster.

[ModifyAccountPassword](/help/en/polardb/polardb-for-oracle/api-modifyaccountpassword-2#doc-api-polardb-ModifyAccountPassword "Changes the password of a database account for a specified PolarDB cluster.")

Changes the password of a database account for a specified PolarDB cluster.
