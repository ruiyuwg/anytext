In a Tair (Redis OSS-compatible) instance, the keys that are frequently accessed are called hotkeys. Improper management of hotkeys may cause congestion and degrade service performance. You can use the audit log feature to query and analyze historical hotkeys. This allows you to further optimize your instance.

## Prerequisites

-   The audit log feature is enabled for the instance. For more information, see [Enable the audit log feature](/help/en/redis/user-guide/enable-the-new-audit-log-feature/#concept-ddc-ydr-3gb).
    
-   To enable the audit log feature, a Resource Access Management (RAM) user must have the permissions to manage Simple Log Service.
    
    -   You can attach the **AliyunLogFullAccess** system policy to a RAM user. After the RAM user is granted the permissions defined in the system policy, the RAM user can manage all Logstores. For more information, see [Grant permissions to a RAM user](/help/en/ram/grant-permissions-to-a-ram-user).
        
    -   You can also customize a policy to restrict the RAM user to only manage the audit logs of Tair (Redis OSS-compatible) instances.
        
        **Examples of custom policies**
        
        ```
        {
         "Version": "1",
         "Statement": [
          {
           "Action": "log:*",
           "Resource": "acs:log:*:*:project/nosql-*",
           "Effect": "Allow"
          }
         ]
        }
        ```
        
    

## Background information

Tair (Redis OSS-compatible) uses efficient sorting and statistical algorithms on top of the Least Frequently Used (LFU) algorithm to identify hotkeys in an instance. For Redis Open-Source Edition 7.0.18, 6.0.2.9, or 5.5.2.9 instances or Tair DRAM-based instances of version 5.0.50, 24.5.1.0, or later, the hotkey query feature uses a more direct and accurate statistical algorithm to provide more precise queries per second (QPS).

**Note**

A key is considered a hotkey if its QPS exceeds 5,000. In earlier versions, a key is considered a hotkey if its QPS exceeds 3,000.

In this topic, audit logs are used to query historical hotkeys. For information about how to display hotkey information in real time, see [Use the real-time key statistics feature](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature#task-2096542).

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the left-side navigation pane, choose **Logs** > **Audit Logs**.
    
3.  On the **Audit Logs** page, click the Official Version tab. In the upper-right corner, click **Time Range**. In the panel that appears, specify a time range that you want to query. In this example, **1 Week** is selected, which specifies the previous week.
    
4.  Clear the default filter conditions in the **Keyword** field, enter type:7, and then press the Enter key. The type:7 filter condition is used to query hotkeys.
    
5.  In the **Audit log detail** section, view the details of the historical hotkeys.
    
    ![历史热点Key详情](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6489510061/p142809.png)
    
    **Note**
    
    The **Client ip** column displays 127.0.0.1, which is the IP address of the local host of the Tair instance.
    
    In the **Command** column, view the details of the hotkeys. The following table describes the fields in the hotkey details.
    
    **Field**
    
    **Example value**
    
    **Description**
    
    `dbid`
    
    `"dbid":0`
    
    The database in which the hotkey resides.
    
    `type`
    
    `"type":"string"`
    
    The type of data structure that the hotkey uses.
    
    `lfu`
    
    `"lfu":241`
    
    The LFU value of the hotkey.
    
    **Note**
    
    For Redis Open-Source Edition 7.0.18, 6.0.2.9, or 5.5.2.9 instances or Tair DRAM-based instances of version 5.0.50 or later, this field is no longer used and is fixed to 0.
    
    `qps`
    
    `"qps":"6000"`
    
    -   For Redis Open-Source Edition 7.0.18, 6.0.2.9, or 5.5.2.9 instances or Tair DRAM-based instances of version 5.0.50 or later, this field indicates the exact QPS of a hotkey.
        
    -   In earlier versions, the approximate QPS range can be displayed only if the QPS of a hotkey is less than 6,000. For example, `"qps":"4500-5000"` is a rough estimate of the QPS range, and **6000** is the maximum value in the approximate range.
        
    
    `key`
    
    `"key":"key:000000000008"`
    
    The hotkey.
