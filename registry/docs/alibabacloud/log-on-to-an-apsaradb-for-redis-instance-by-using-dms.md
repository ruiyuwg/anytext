You can use Data Management (DMS) to quickly connect to a Tair (Redis OSS-compatible) instance without installing a client. This lets you visually manage Tair and Redis Open-Source Edition databases.

## Background information

DMS is an all-in-one data management service that supports a variety of relational and NoSQL databases. The service offers features such as data management, schema management, user authorization, security audit, data trend analysis, and data tracking. For more information about DMS, see [What is DMS?](/help/en/dms/product-overview/what-is-dms#task-1919582) You can use DMS to manage databases with ease. This enhances data security, improves management efficiency, and maximizes data value.

## **Precautions**

-   DMS has limits on Redis commands. For more information, see [Supported Redis commands](/help/en/dms/syntax-support-for-redis).
    
-   If an instance has Transport Layer Security (TLS) enabled, you cannot directly log on to the instance using DMS. You must register the instance in the DMS console and enable **SSL** in the **Advanced Information** section. For more information, see [Register an ApsaraDB instance](/help/en/dms/register-an-apsaradb-instance-1).
    

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the upper-right corner of the page, click **Log On to Database**.
    
3.  In the DMS console, set the logon method.
    
    **Access mode**
    
    **Description**
    
    **Account + Password Logon**
    
    (Recommended)
    
    Enter the database account and its password. For information about how to create a database account, see [Create and manage accounts](/help/en/redis/user-guide/create-and-manage-database-accounts#task-kth-pr4-hfb).
    
    **Note**
    
    By default, an instance has a database account named after the instance ID, such as r-bp10noxlhcoim2\*\*\*\*. You can also use this account to log on. The password was set when you created the instance.
    
    **Passwordless Logon**
    
    If passwordless access is enabled for the instance, select this method to log on without a password. For more information, see [Enable passwordless access for a VPC](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b).
    
    **Password Logon**
    
    Log on with the password that you set when you created the instance. This is the password for the database account that is named after the instance ID.
    
    **Note**
    
    If you forget the password, you can reset it. For more information, see [Change or reset a password](/help/en/redis/user-guide/change-or-reset-the-password#concept-xqd-p2z-5db).
    
    You can keep the default values for other parameters.
    
4.  Click **Logon**.
    
    If you have not added the IP address of the DMS server to the instance's whitelist, a dialog box appears. Click **Set Whitelist**. The system creates a whitelist group named **ali\_dms\_group** for the instance and adds the IP address of the DMS server to this group.
    
5.  After you log on, enter and run commands in the text box on the **SQLConsole** tab. For example, run the DBSIZE command to query the number of keys in the current database.
    
    For information about the commands that Tair and Redis Open-Source Edition support, see [Command overview](/help/en/redis/developer-reference/overview-3/#concept-ztj-rpn-tdb).
    

## What to do next

[Basic data operations](/help/en/redis/user-guide/manage-apsaradb-for-redis-instances-by-using-dms/#concept-aw1-mtm-vdb)

## **FAQ**

-   Why am I receiving the `ERR invalid password.` error when I have successfully logged on in the past?
    
    After the first successful logon, DMS saves the account and password. This error occurs if you change the password for that account.
    
    Solution: In the DMS **Database Instance** list, right-click the target instance and select **Edit Instance**. In the **Database Password** text box, enter the new password and then retry the logon.
    
-   Why is the `java.net.SocketTimeoutException: Read timed out TraceId` error reported?
    
    When you log on to an instance using the **Instance ID** in DMS, DMS connects to the instance using the default virtual private cloud (VPC) and port (6379). This error occurs if you change the instance's VPC endpoint or port.
    
    Solution: In the DMS **Database Instance** list, right-click the target instance and select **Edit Instance**. Then, set **Registration Method** to **Connection String Address**, enter the updated instance endpoint in the **Connection String Address** text box, and then retry the logon.
    

## References

-   [Connect to an instance using redis-cli](/help/en/redis/user-guide/use-redis-cli-to-connect-to-an-apsaradb-for-redis-instance#concept-tzm-xdd-5db)
    
-   [Client connection tutorials](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance#concept-dys-yvb-5db)
