You can change or reset the password of a Tair (Redis OSS-Compatible) instance through the console or by calling an API operation. Change the password if you want to update it periodically for security purposes. Reset the password if you have forgotten the current one.

## Prerequisites

If your instance is compatible with Redis 4.0 or later and the **Account Management** feature is not available, [update the minor version of the instance](/help/en/redis/user-guide/update-the-minor-version#concept-itn-f44-tdb) before you proceed.

## Password requirements

New passwords must meet the following requirements:

-   8 to 32 characters in length.
    
-   Contains at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The supported special characters are `! @ # $ % ^ & * ( ) _ + - =`
    

## Change the password

Use this procedure when you know the current password and want to set a new one.

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Account Management**.
    
3.  In the upper-right corner of the page that appears, click **Change Password**.
    
4.  In the panel that appears, select the account for which you want to change the password and enter the current password and a new password.
    
5.  Click **OK**.
    

## Reset the password

Use this procedure if you have forgotten the current password. Resetting the password does not require the old password.

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Account Management**.
    
3.  Find the desired account, and then click **Reset Password** in the **Actions** column.
    
4.  In the panel that appears, enter a new password. You do not need to enter the old password.
    
5.  Click **OK**.
    

## Effect of a password change

After you change or reset the password, the new password takes effect immediately. You do not need to restart the instance. Existing connections that have already passed authentication are not affected. New connections must use the new password.

**Important**

After you reset or change the password, update the password in all clients and applications that connect to the instance.

## FAQ

**Can I connect to a Tair (Redis OSS-Compatible) instance without a password?**

Yes, if [password-free access](/help/en/redis/user-guide/enable-password-free-access) is enabled for an instance deployed in a VPC. In this case, clients in the same VPC as the instance can connect without a password. For all other scenarios, you must provide an account and a password for authentication.

**Why does the "WRONGPASS invalid username-password pair" error appear in Data Management (DMS) after I change the password?**

After you change the password, DMS still uses the old credentials. To resolve this issue, right-click the desired instance in the **database list**, select **Edit**, and then enter the new password.

## Related API operations

**API operation**

**Description**

[ResetAccountPassword](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-resetaccountpassword-redis)

Resets the password of an account for an instance.
