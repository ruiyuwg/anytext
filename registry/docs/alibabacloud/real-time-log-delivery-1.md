The real-time log delivery feature allows you to collect logs of accelerated domain names in a region in real time and deliver the logs to Simple Log Service (SLS) for analysis. This helps you monitor your business and identify service issues efficiently.

## Prerequisites

[SLS](https://sls.console.alibabacloud.com/lognext/open) is activated.

## Limits

-   For the same domain name and the same log type, each collection region corresponds to a delivery region. For example, if the region from which real-time logs are collected is the Chinese mainland, EdgeRoutine logs of example.com cannot be delivered to the China (Hangzhou) and China (Beijing) regions at the same time. You can associate only one delivery project with a region.
    

**Note**

However, you can deliver access logs of example.com to the China (Hangzhou) region and EdgeRoutine logs of example.com to the China (Beijing) region, because the logs are of different types.

-   You can associate an SLS region to which real-time logs of the same type are delivered with only one delivery project. For example, if Project A delivers EdgeRoutine logs of example.com to the China (Hangzhou) region, Project B fails to deliver EdgeRoutine logs of aliyundoc.com to the China (Hangzhou) region because an EdgeRoutine log delivery project is already associated with the region.
    
    To resolve the preceding issue, you need to add the delivery of EdgeRoutine logs that are collected from aliyundoc.com to Project A.
    
-   If real-time logs that you collect are of the same type, all log delivery projects share a set of fields. Field modifications that are made for a project take effect globally. For example, the domain field is selected by default for access logs. If a user removes the domain field for a project, the field is immediately removed from other delivery projects of access logs.
    

## Enable real-time logs

Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview) and choose **Logs** > **Real-time Logs**. Then, follow the on-screen instructions in the console to enable real-time logs.

![开通服务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9289085961/p336650.png)

## Enable real-time log delivery

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left-side navigation pane, choose **Logs** > **Real-time Logs**.
    
3.  Click **Create Delivery Project**.
    
4.  Create a delivery project.
    
    1.  In the **Create Real-time Log Delivery Project** dialog box, configure the parameters for the project according to the following table.
        
        ![创建实时日志项目](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3762715561/p336479.png)
        
        **Parameter**
        
        **Description**
        
        **Project Name**
        
        The project name is used to identify the delivery project and must be unique.
        
        The project name can be up to 24 characters in length and can contain letters, digits, and underscores (\_).
        
        **Log Type**
        
        The type of real-time logs that you want to deliver. Valid values:
        
        -   **Access Log** (excluding WAF Interception Log)
            
        -   **WAF Interception Log**
            
        -   **EdgeRoutine Log**
            
        
        **Log Field**
        
        The log fields that you want to include in real-time logs of different types. For more information, see [Log fields](/help/en/edge-security-acceleration/dcdn/user-guide/log-fields#concept-2119968).
        
        **Sampling Rate**
        
        The percentage of log entries that you want to deliver to SLS. Valid values: 0% to 100%.
        
        **Note**
        
        Number of log entries delivered to SLS = Total number of log entries × Sampling rate. If you want to deliver all log entries, set the value to 100%.
        
    2.  Click **Next**. Select the country or region from which real-time logs are collected and the SLS region where real-time logs are delivered. The SLS region is the region where the logs are stored.
        
        **Important**
        
        -   After you create a delivery project, you cannot change the region from which logs are collected and the region to which logs are delivered. You can delete a delivery project that you no longer use and create a delivery project that meets your expectations. For more information, see [Disable real-time log delivery](#section-zpl-m3w-qku).
            
        -   The first time you create a delivery project, you need to grant DCDN the permissions to access SLS to ensure that logs can be delivered to SLS.
            
        
        ![投递区域](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2639385361/p336497.png)
        
        After logs are collected, the logs can be delivered only to the SLS region that you specified for storage. The following table describes the mapping between the regions from which logs are collected and regions to which logs are delivered.
        
        **Collected From**
        
        **Delivered To**
        
        Chinese Mainland
        
        China (Hangzhou)
        
        China (Shanghai)
        
        China (Qingdao)
        
        China (Beijing)
        
        China (Zhangjiakou)
        
        China (Shenzhen)
        
        Europe
        
        Germany (Frankfurt)
        
        US
        
        US (Silicon Valley)
        
        Other Country/Region
        
        Singapore (Singapore)
        
    3.  Click **Next** and select one or more domain names.
        
        ![投递域名](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2639385361/p336496.png)
        
5.  Click **Next**. The delivery project is created.
    
    After you create a delivery project, real-time log delivery settings immediately take effect. The system automatically collects logs of the specified domain names in the selected region and delivers the collected logs to SLS.
    

## Disable real-time log delivery

You can disable real-time log delivery for specific domain names in a delivery project or for all of them at one time.

**Scenario**

**Description**

**Disable real-time log delivery for a domain name in a delivery project**

After you remove a domain name from a delivery project, real-time logs of the domain name are no longer delivered to SLS. Perform the following steps:

1.  In the list of delivery projects, select the delivery project from which you want to remove a domain name and click **Modify**.
    
2.  Click **Next** to go to the **Domain Names** step.
    
3.  In the Selected Domain section, remove the domain name for which you want to disable real-time log delivery.
    
4.  Click **Next**. The real-time log delivery feature is disabled for the domain name.
    

**Disable real-time log delivery for all domain names in a delivery project**

After you delete a delivery project, real-time logs of all domain names that are associated with the delivery project are no longer delivered to SLS. Perform the following steps:

1.  In the list of delivery projects, select the delivery project that you want to delete and click **Delete**.
    
2.  Click **OK**.
    

## References

[Access log analysis report](/help/en/edge-security-acceleration/dcdn/user-guide/access-log-analysis-report#task-2120049)
