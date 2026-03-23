By default, append-only file (AOF) is enabled for Tair (Redis OSS-compatible) instances. This topic describes how to configure the appendonly parameter to enable or disable AOF.

## AOF overview

Tair (Redis OSS-compatible) provides two data persistence options: AOF persistence and Redis Database (RDB) persistence. After AOF persistence is enabled for an instance, the instance logs all write operations received, such as SET. If an AOF file is larger than required, the AOF file is automatically rewritten to reduce its disk usage.

> An AOF rewrite is triggered when the size of the AOF exceeds 25% of the instance memory and increases by more than 200% since the most recent rewrite (known as base rewrite). For empty instances, the size of the AOF during the base rewrite is 1 byte.

The AOF persistence policy for Tair (Redis OSS-compatible) instances is AOF\_FSYNC\_EVERYSEC, which asynchronously writes the commands in the AOF buffer to disks every second. This policy helps reduce the performance impact of enabling AOF on the instance.

## Scenarios

Enabling AOF can introduce some performance overhead. You can follow the procedure in this topic to disable AOF if your instance experiences request latency or jitter or timeouts due to AOF.

**Warning**

If you use Tair (Enterprise Edition) and have enabled Global Distributed Cache or data flashback (data restoration at any point in time), you cannot disable AOF.

## Status and impacts of AOF persistence

-   By default, AOF persistence is enabled when you create a Tair or Redis Open-Source Edition instance, unless the instance is a Tair persistent memory-optimized instance.
    
-   If you change the value of the appendonly parameter from yes to no, the system immediately disables AOF without the need to restart the instance.
    
-   If you change the value of the appendonly parameter from no to yes, take note of the following impacts:
    
    -   The system immediately enables AOF without the need to restart the instance.
        
    -   After AOF is enabled, the system periodically performs a rewrite to compress the generated AOF file. During the rewrite process, there may be a slight increase in latency on the order of milliseconds.
        

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane, click **Parameter Settings**.
    
3.  On the System Parameters page, click **Modify** in the **Actions** column corresponding to the appendonly parameter.
4.  In the dialog box that appears, perform the following steps:
    
    1.  Set the appendonly parameter.
        
        Valid values:
        
        -   yes: enables AOF persistence.
        -   no: disables AOF persistence.
        
    2.  Click **OK**.
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1439842461/p73486.png)
    

## FAQ

Can I restore data that I accidentally deleted after disabling AOF?

Disabling AOF does not affect the full backup of the instance. You can restore your data using the [full backup](/help/en/redis/user-guide/restore-data-from-a-backup-set-to-a-new-instance).

## Related API operations

**API operation**

**Description**

[DescribeParameters](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeparameters-redis)

Queries the configuration and operational parameters of an instance.

[ModifyInstanceConfig](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstanceconfig-redis)

Modifies the parameter settings of an instance.
