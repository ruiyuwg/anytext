You can delete database accounts, such as privileged and standard accounts, from an ApsaraDB RDS for MySQL instance if they are no longer needed. You can delete accounts in the ApsaraDB RDS console or by calling an API operation. You can also run SQL commands to delete standard accounts.

## Delete a privileged or standard account in the ApsaraDB RDS console

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the navigation pane on the left, click **Accounts**.
    
3.  Find the account that you want to delete and click **Delete** in the **Actions** column.
    
4.  In the dialog box that appears, click **OK**.
    

## Delete a standard account using SQL statements

**Note**

You can run SQL commands to delete standard accounts for specific instance types only. You cannot use SQL commands to delete privileged accounts.

1.  [Log on to an RDS instance using DMS](/help/en/rds/apsaradb-rds-for-mysql/use-dms-to-log-on-to-an-apsaradb-rds-for-mysql-instance-1#concept-cml-x4v-ydb).
    
2.  In the top navigation bar, choose **SQL Console**.
    
3.  Run the following SQL command to delete the account:
    
    ```
    DROP USER 'username';
    ```
    
4.  Click **Execute**.
    

## FAQ

### **Why do I receive an error when I delete an account in the ApsaraDB RDS console?**

## Problem description

When you delete a user on the **Account Management** page of the ApsaraDB RDS for MySQL console, the following error message is displayed:`Failed to delete the account. Check the request or the input parameters. Other threads in the instance may be waiting for the lock or the host value of the current database account is not set to % (allows logins from all hosts).`

## Solution

By default, the host whitelist for a user account created in the ApsaraDB RDS for MySQL console is set to `%`, which allows access from any host. If an account is manually created using an SQL command and is configured to allow logons only from a specific IP address or network segment, such as `'username'@'10.10.10.1'` or `'username'@'10.%.%.%'`, the account cannot be deleted from the RDS console.

Run the following SQL statement to check if the host for the account is configured with a value other than %. If the host value is not `%`, you cannot delete the account in the RDS console. You must use the `DROP USER` command to delete the account.

```
-- Check if the host for the account to be deleted is configured with a value other than % (for example, 192.168.1.1 or 192.168.1.%).
SELECT user,host FROM mysql.user WHERE user='username_to_delete';

-- If the host value is not %, you must delete the account using the DROP USER command.
DROP USER 'username_to_delete'@'target_host_IP_or_network_segment';
```

## References

-   For more information, see the [DeleteAccount](/help/en/rds/api-delete-an-account#doc-api-1064578) API operation.
    
-   For more information, see [Create an account in the ApsaraDB RDS console](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance) and the [CreateAccount](/help/en/rds/apsaradb-rds-for-mysql/api-rds-2014-08-15-createaccount-mysql) API operation.
