Redis Sentinel provides high availability for Redis. Tair (Redis OSS-compatible) provides the Sentinel-compatible mode to support services that run Sentinel. This topic describes how to enable the Sentinel-compatible mode in the console.

## Prerequisites

-   The instance runs Redis 4.0 or later.
    
-   The instance uses a virtual private cloud (VPC) as the network type.
    
    **Note**
    
    If the instance uses the classic network, see [Switch to a VPC](/help/en/redis/user-guide/change-the-network-type-from-classic-network-to-vpc#concept-mtb-nz5-tdb) for the switching method.
    

## Overview of Redis Sentinel

Redis Sentinel provides Redis with features such as master and replica monitoring, fault alerting, and automatic failover. Redis Sentinel is suitable for many business scenarios that use self-managed Redis databases and require high reliability. To facilitate the migration of these self-managed Redis databases to the cloud, Alibaba Cloud provides the Sentinel-compatible mode.

**Note**

Tair (Redis OSS-compatible) uses the [high availability](/help/en/redis/features#concept-cmw-n4h-tdb) component developed by Alibaba Cloud instead of Redis Sentinel.

After you enable the Sentinel-compatible mode, you can use the following Sentinel commands (use `redis_master` as the Master name in the following commands):

**Command**

**Description**

SENTINEL sentinels

Queries Sentinel instances of a specified Master and the status of these Sentinel instances. The following syntax is used:

```
SENTINEL sentinels redis_master
```

SENTINEL get-master-addr-by-name

Queries the IP address and port number of a specified Master. The following syntax is used:

```
SENTINEL get-master-addr-by-name redis_master
```

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the navigation pane on the left of the **Instance Information** page, click **Parameter Settings**.
    
3.  Based on the instance architecture, enable the Sentinel-compatible mode by modifying the corresponding parameters. For more information, see [Set parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/#concept-q1w-kxn-tdb).
    
    -   If the instance uses the cluster architecture in proxy mode or the read/write splitting architecture: Change the value of the sentinel\_compat\_enable parameter to 1.
        
    -   If the instance uses the standard architecture: Change the value of the #no\_loose\_sentinel-enabled parameter to yes.
        
    
    **Note**
    
    -   You can check the architecture information on the instance details page.
        
    -   The cluster architecture in direct connection mode uses open source Redis Cluster for load balancing. It does not require the Sentinel component and does not support setting Sentinel parameters.
        
    
4.  (Optional) After enabling the mode, you can connect to the instance and run the `SENTINEL sentinels redis_master` command to test. If the command executes successfully, the Redis Sentinel-compatible mode is enabled for the instance.
    
    The Sentinel-compatible mode does not provide additional connection addresses. You can directly connect using the original connection address (such as `r-********.redis.rds.aliyuncs.com:6379`).
    
    **Note**
    
    -   To set password-free access for the **SENTINEL** command, you can set the **#no\_loose\_sentinel-password-free-access** parameter to **yes**. This lets you use the **SUBSCRIBE** and **SENTINEL** commands to subscribe to and monitor the `+switch-master` channel without a password**.**
        
    -   For more password-free commands, after enabling the above password-free parameter, you can add additional password-free commands through the **#no\_loose\_sentinel-password-free-commands** parameter.
        
    

## Related API operations

**API operation**

**Description**

[DescribeParameters](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeparameters-redis)

Queries the configuration and operational parameters of an instance.

[ModifyInstanceConfig](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstanceconfig-redis)

Modifies the parameter settings of an instance.
