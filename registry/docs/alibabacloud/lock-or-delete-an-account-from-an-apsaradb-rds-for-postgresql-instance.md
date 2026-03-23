If an account of your ApsaraDB RDS for PostgreSQL instance is not in use, you can lock the account in the ApsaraDB RDS console. If the account is no longer required, you can delete the account.

## Lock an account

**Important**

After an account is locked, you cannot use the account to log on to your RDS instance.

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Accounts**.
    
3.  Find the account that you want to lock, and click **Lock** in the **Actions** column. In the message that appears, click **OK**. If **Locking** is displayed in the **Status** column of the account, the account is locked.
    
    **Note**
    
    You can click **Unlock** or **Delete** in the Actions column of a locked account based on your business requirements.
    

## **Delete an account**

**Note**

-   If the account that you want to delete is granted permissions on databases, tables, or other objects, the `Some objects depend on account` error message is displayed when you attempt to delete the account. You can delete the account only after you remove the permissions of the account.
    
-   You can delete privileged and standard accounts in the ApsaraDB RDS console.
    
-   You can delete only standard accounts by using SQL statements.
    

### **Delete** a privileged account or a standard account in the ApsaraDB RDS console

1.  Go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the ID of the instance.
    
2.  In the left-side navigation pane, click **Accounts**.
    
3.  Find the account that you want to delete, and click **Delete** in the **Actions** column.
    
4.  In the message that appears, click **OK**.
    

### **Delete a standard account by using SQL statements**

1.  Connect to your RDS instance. For more information, see [Connect to an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/connect-to-an-apsaradb-rds-for-postgresql-instance).
    
2.  Execute the following SQL statement to grant the permissions of the account to another account:
    
    ```
    REASSIGN OWNED BY <The username of the account that you want to delete> TO <The username of another account>;
    ```
    
3.  Execute the following SQL statement to delete the account:
    
    ```
    DROP USER <The username of the account that you want to delete>;
    ```
    

## **FAQ**

When I delete an account of an RDS instance in the ApsaraDB RDS console, an error message is displayed. The error message indicates that database objects depend on the account and the account can be deleted only after the dependency is removed. The error code is `AccountActionForbidden`. What do I do?

If you delete an account on which database objects of the RDS instance depend, the deletion fails. You must identify the objects that depend on the account and delete the objects.

## References

-   After the deletion, you can create an account again. For more information, see [Create an account](/help/en/rds/apsaradb-rds-for-postgresql/create-an-account-on-an-apsaradb-rds-for-postgresql-instance).
    
-   You can call API operations to lock and delete accounts.
    
    **Operation**
    
    **Description**
    
    [DeleteAccount](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deleteaccount-postgresql)
    
    Deletes an account.
    
    [LockAccount](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-lockaccount-postgresql)
    
    Locks an account.
    
    [UnlockAccount](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-unlockaccount-postgresql)
    
    Unlocks an account.
