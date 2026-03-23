The `timeout` parameter controls how long Tair (Redis OSS-Compatible) keeps an idle client connection open. When a connection remains idle for the specified duration, Tair closes it and reclaims the resources.

By default, `timeout` is set to `0`, meaning idle connections are never closed. In production, this is risky: if client-side exceptions prevent proper connection cleanup, idle connections accumulate and the connection pool may fill up, which can result in a service failure. Set a `timeout` value on instances that run core business workloads so that Tair can reclaim connection resources before the pool is exhausted.

## How idle connection cleanup works

Tair does not close a connection the instant it reaches the `timeout` threshold. Background tasks periodically scan for idle connections and close them. The scan frequency is controlled by the `hz` parameter.

When `hz` is set to a low value, scans run less often, which creates a delay between when a connection exceeds the timeout and when it is actually closed. For example, with `timeout` set to 10 seconds, a connection may remain open for up to 12 seconds.

To tighten this gap, increase the `hz` value so that background tasks run more frequently.

## Set the timeout parameter

1.  Make sure that you have a Tair (Redis OSS-Compatible) or Redis Open-Source Edition instance and the permissions to modify instance parameters.
    
2.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
3.  In the left-side navigation pane, click **Parameter Settings**.
    
4.  In the parameter list, find the `timeout` parameter and click **Modify** in the **Actions** column.
    
5.  In the dialog box that appears, set a new value for `timeout`. ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8780942461/p67135.png)
    
    **Property**
    
    **Detail**
    
    **Valid range**
    
    0–100000
    
    **Unit**
    
    Seconds
    
    **Default**
    
    0 (never close idle connections)
    
    **Takes effect**
    
    Immediately
    
6.  Click **OK**.
    

## Verify the result

After you save the change, the new `timeout` value takes effect immediately. Confirm the update by checking the current value on the **Parameter Settings** page.

## API reference

**API operation**

**Description**

[DescribeParameters](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeparameters-redis)

Query the configuration and operational parameters of an instance

[ModifyInstanceConfig](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstanceconfig-redis)

Modify the parameter settings of an instance
