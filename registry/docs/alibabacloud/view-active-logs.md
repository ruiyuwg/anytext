This topic describes how to query the active logs of an instance. In the **Logs** module of the console, you can view the active logs that were generated in the last 72 hours to troubleshoot O&M issues.

## **Precautions**

You cannot query active logs for Redis Open-Source Edition 2.8 instances or Tair (Enterprise Edition) DRAM-based instances that are compatible with Redis 6.0 or ESSD/SSD-based instances.

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane, choose **Logs** > **Active Logs**.
    
3.  On the **Active Logs** page, select a time range to query and click **Search**.
    
    **Note**
    
    If the instance is a cluster instance, you can specify the required node to query its active logs.
    
4.  Click **Search**.
    

## Related API operations

**API operation**

**Description**

[DescribeRunningLogRecords](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describerunninglogrecords-redis)

Queries the active logs of an instance.
