Tair (Redis OSS-compatible) allows you to log on to an instance by using multiple methods. For example, you can log on to an instance by entering the account and password. If password-free access is enabled for an instance that is deployed in a virtual private cloud (VPC), you can log on to the instance from a client in the same VPC without providing the account or password.

## Prerequisites

The IP address of your client is added to a whitelist of the instance. For more information, see [Configure whitelists](/help/en/redis/getting-started/step-2-configure-whitelists#concept-lmv-qhf-vdb).

**Note**

The IP address or CIDR block of your client must be added to a whitelist of the instance regardless of what connection method you use. If you cannot connect to the instance, you can use the [connection diagnostics](/help/en/redis/user-guide/perform-diagnostics-on-connections#task-2272653) feature to check whether the IP address of your client is added to a whitelist of the instance.

## Password-only logon

-   Logon method: Connect to your instance by using a password instead of a username-password combination.
    
-   Limits: This method is applicable only to the **default account** of your instance. Typically, the username of the **default account** is the instance ID, such as `r-bp1jpghfglv6******` or `default`. You can view the default account on the **Account Management** page in the console.
    
    This method does not apply to standard accounts.
    
-   Benefits: This method is similar to the way you connect to open source Redis. This is a convenient and widely used method. In this case, the instance may connect to multiple applications by using the default account because an instance has only a single **default account**.
    
-   Example of using redis-cli to connect to an instance:
    
    ```
    # Use the default account whose username is r-bp1jpghfglv6****** and password is Rp829dlwa to connect to the instance. 
    redis-cli -h r-bp1zx****.redis.rds.aliyuncs.com -p 6379 -a Rp829dlwa
    ```
    

## Account and password logon (recommended)

-   Logon method: Use the username and password of an account to connect to your instance. Separate the username and password with colons (`:`). Example: `user:password`.
    
    **Note**
    
    -   If you use a third-party database management tool such as Redis Desktop Manager (RDM) to connect to an instance, enter the password in the `user:password` format.
        
    -   If you use Data Management (DMS) to connect to an instance, enter the username of the **database account** and the corresponding **password**.
        
    -   Tair instances that are compatible with Redis 6.0 or later also support the `AUTH user password` format and the features of Redis 6.0 or later.
        
    
-   Limits: No limits are imposed on this method. This method is applicable to both the **default account** and **standard accounts** of your instance.
    
-   Benefits: You can create multiple accounts for your instance and connect to your instance by using different accounts in different applications to ensure data security. For more information about how to create a database account, see [Create and manage database accounts](/help/en/redis/user-guide/create-and-manage-database-accounts#task-kth-pr4-hfb).
    
-   Example of using redis-cli to connect to an instance:
    
    ```
    # Use a custom account whose username is testaccount and password is Rp829dlwa to connect to the instance. 
    
    # Format 1: user:password. 
    # This format is applicable to all Tair and Redis Open-Source Edition instances. 
    redis-cli -h r-bp1zx****.redis.rds.aliyuncs.com -p 6379 -a testaccount:Rp829dlwa
    
    # Format 2: user password. 
    # This format is applicable to Tair and Redis Open-Source Edition instances that are compatible with Redis 6.0 and later. 
    redis-cli -h r-bp1zx****.redis.rds.aliyuncs.com -p 6379 
    AUTH testaccount Rp829dlwa
    ```
    

## Password-free logon

-   Logon method: Connect to your instance without using a username or password.
    
-   Limits:
    
    -   Client: The client must be deployed within the same VPC as the instance.
        
    -   Instance: The instance must have password-free access enabled. For more information, see [Enable password-free access](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b).
        
    
    This method is applicable only when you use the **default account** to connect to the instance over the internal endpoint of the instance. After you connect to the instance by using this method, you have read and write permissions on the instance.
    
-   Benefits: You can connect to the instance without using a password. By default, all clients that are deployed within the same VPC as the instance can connect to the instance by using this method. You can use the `#no_loose_check-whitelist-always` parameter to specify whether to check that the IP address of a client is added to a whitelist of the instance. For more information, see [Parameters that can be configured for Tair instances](/help/en/redis/user-guide/parameter-support) and [Parameters that can be configured for Redis Open-Source Edition instances](/help/en/redis/user-guide/supported-parameters#concept-2087327).
    
-   Example of using redis-cli to connect to an instance:
    
    ```
    # Connect to your instance in password-free mode. 
    redis-cli -h r-bp1zx****.redis.rds.aliyuncs.com -p 6379
    ```
    

If you forget your password, reset the password. If you have not set a password, set a password. For more information, see [Change or reset the password](/help/en/redis/user-guide/change-or-reset-the-password#concept-xqd-p2z-5db).

**Common errors**

**Error message**

**Cause and solution**

-   `(error) ERR invalid password`
    
-   `(error) WRONGPASS invalid username-password pair`
    

The specified password is invalid. Specify the username and password in the correct format as described in this topic.
