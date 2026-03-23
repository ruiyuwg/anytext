Alibaba Cloud allows you to view and manage quotas of your Alibaba Cloud services. You can obtain usage information, apply for increases on quotas, and create alert rules for quotas. This topic describes how to request quota increases and configure quota alerts for Classic Load Balancer (CLB).

## Background Information

Quota Center allows you to manage the quotas of various Alibaba Cloud services in a centralized manner. **CLB** and many other Alibaba Cloud services work with Quota Center. If you are using multiple Alibaba Cloud services and want to manage the quotas of all your cloud services in one console, you can use [Quota Center](https://quotas.console.alibabacloud.com/products).

Alternatively, you can individually manage **CLB** quotas by using the quota management feature provided in the CLB console.

## Prerequisite

By default, only Alibaba Cloud accounts are authorized to manage quotas in Quota Center. For RAM users to manage quotas, you must [grant RAM users the AliyunQuotasFullAccess permission](/help/en/quota-center/user-guide/authorize-a-ram-user#task-1962367).

## View quotas

You can view the quotas of **CLB** by using one of the following methods:

-   View quotas in the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
-   View quotas on the [Quota Center page](https://slb.console.alibabacloud.com/slb/quota) of the SLB console.
    
-   To view the quota items and their default values, see [CLB quotas](/help/en/slb/classic-load-balancer/user-guide/quotas/#concept-2273341).
    

### View quotas in the Quota Center console

1.  Log on to the [Quota Center](https://quotas.console.alibabacloud.com/products) console.
    
2.  In the left-side navigation pane, choose **Products** > **General Quotas**.
    
3.  Click **Server Load Balancer** in the **Networking** section.
    
4.  On the **General Quotas** page, view the quota information, such as the name, description, and usage of each quota.
    

### View quotas on the Quota Center page of the SLB console

1.  Log on to the SLB console. In the left-side navigation pane, click [Quota Center](https://slb.console.alibabacloud.com/slb/quota).
    
2.  On the **Quota Center** page, view the quota information, such as the name, description, and usage of each quota.
    

## Request a quota increase

Most of the quotas provided are adjustable. If the default quota is unable to meet your business requirements, you can apply for a quota increase by using one of the following methods:

-   Request a quota increase in the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
-   Request a quota increase on the [Quota Center page](https://slb.console.alibabacloud.com/slb/quota) of the SLB console.
    

The quotas that can be adjusted in the Quota Center console are the same as those on the Quota Center page of the SLB console. If your application is approved, the same quota increase is displayed in both consoles.

### Request a quota increase in the Quota Center console

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  In the left-side navigation pane, choose **Products** > **General Quotas**.
    
3.  Click **Server Load Balancer** in the **Networking** section.
    
4.  On the **General Quotas** page, find the quota that you want to manage and click **Apply** in the **Actions** column.
    
5.  In the **Apply for Quotas** dialog box, configure the **Applied Quotas** and **Reason** parameters and click **OK**.
    
    **Note**
    
    -   Quota increase applications are approved by the technical support team for each cloud service. To increase the success rate of your application, specify a reasonable quota value and describe your application reason as thoroughly as possible when you submit the application.
        
    -   When you apply for a quota increase, provide as much information as possible. The more justification provided, the more likely your application will be approved. Application results are sent to you by text message and email.
        
    
6.  In the left-side navigation pane, click **Application Records**. On the Application Records page, view the status of the application.
    
    If the application is in the **Approved** state, the quota is increased.
    

### Request a quota increase on the Quota Center page of the SLB console

1.  Log on to the SLB console. In the left-side navigation pane, click [Quota Center](https://slb.console.alibabacloud.com/slb/quota).
    
2.  On the **Quota Center** page, find the quota that you want to manage and click **Apply** in the **Actions** column.
    
3.  In the **Apply for Quotas** dialog box, configure the **Applied Quotas** and **Reason** parameters and click **OK**.
    
    **Note**
    
    -   Quota increase applications are approved by the technical support team for each cloud service. To increase the success rate of your application, specify a reasonable quota value and describe your application reason as thoroughly as possible when you submit the application.
        
    -   When you apply for a quota increase, provide as much information as possible. The more justification provided, the more likely your application will be approved. Application results are sent to you by text message and email.
        
    
4.  To view the status of your application, click **Application Records** in the **Actions** column or choose **![ellipsis-v2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5303350071/p718682.png)** > **Application Records** in the **Actions** column.
    
    If the application is in the **Approved** state, the quota is increased.
    

## Create a quota alert

You can create alert rules for some quota items by specifying a threshold for quota usage or available quota. If the usage of a quota reaches the specified threshold, the system sends an alert notification to the callback URL that you specified in the alert rule through an HTTP POST request. We recommend that you take the alerts into consideration and apply for a quota increase in advance to avoid unexpected business interruptions.

### **CLB** **quotas that support alerts**

**Quota**

**Description**

**Link**

slb\_quota\_instances\_num

Maximum number of CLB instances that you can create within an Alibaba Cloud account

[Create an alert rule](https://quotas.console.alibabacloud.com/products/slb/quotas?query=slb_quota_instances_num)

slb\_quota\_backendservers\_num

Maximum number of backend servers that can be added to a CLB instance

[Create an alert rule](https://quotas.console.alibabacloud.com/products/slb/quotas?query=slb_quota_backendservers_num)

slb\_quota\_listeners\_num

Maximum number of listeners that can be added to a CLB instance

[Create an alert rule](https://quotas.console.alibabacloud.com/products/slb/quotas?query=slb_quota_listeners_num)

slb\_quota\_domain\_extensions\_num

Maximum number of additional domain names that can be created for an HTTPS listener

[Create an alert rule](https://quotas.console.alibabacloud.com/products/slb/quotas?query=slb_quota_domain_extensions_num)

slb\_quota\_rules\_num

Maximum number of domain name-based and URL-based forwarding rules that can be added to an HTTP or HTTPS listener

[Create an alert rule](https://quotas.console.alibabacloud.com/products/slb/quotas?query=slb_quota_rules_num)

slb\_quota\_backendserver\_attached\_num

Maximum number of times that a server can be added as a CLB backend server

[Create an alert rule](https://quotas.console.alibabacloud.com/products/slb/quotas?query=slb_quota_backendserver_attached_num)

slb\_quota\_certs\_num

Maximum number of server certificates that can be uploaded in a region

[Create an alert rule](https://quotas.console.alibabacloud.com/products/slb/quotas?query=slb_quota_certs_num)

slb\_quota\_ca\_certs\_num

Maximum number of client certificate authority (CA) certificates that can be uploaded in a region

[Create an alert rule](https://quotas.console.alibabacloud.com/products/slb/quotas?query=slb_quota_ca_certs_num)

slb\_quota\_acls\_num

Maximum number of network access control lists (ACLs) that can be configured for each Alibaba Cloud account

[Create an alert rule](https://quotas.console.alibabacloud.com/products/slb/quotas?query=slb_quota_acls_num)

slb\_quota\_acl\_entries\_num

Maximum number of entries that can be added to an ACL

[Create an alert rule](https://quotas.console.alibabacloud.com/products/slb/quotas?query=slb_quota_acl_entries_num)

slb\_quota\_acl\_attached\_num

Maximum number of times that each ACL can be associated with different listeners

[Create an alert rule](https://quotas.console.alibabacloud.com/products/slb/quotas?query=slb_quota_acl_attached_num)

### Create a quota alert in the Quota Center console

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  In the left-side navigation pane, choose **Alarm Rules**.
    
3.  On the **Alarm Rules** page, on the **General Quotas** tab (or click the **API Rate Limits** tab), click **Create Quota Alarm Rule**.
    
4.  On the **Create Alarm Rule** page, configure the parameters and click **Confirm**.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Alarm Rule Name**
    
    The name of the alert rule.
    
    Maximum number of vCPUs for preemptible instances for limited purchase
    
    **Alarm Metric**
    
    The metric used by the alert rule. Valid values:
    
    -   **Quotas**
        
    -   **Used Quotas**
        
    -   **Percentage of Used Quotas(%)**
        
    -   **Percentage of Available Quotas(%)**
        
    
    Percentage of Used Quotas(%)
    
    **Threshold and Alert Level**
    
    The alert level and the threshold corresponding to this level.
    
    The following default notification methods are set for different alert levels:
    
    -   Critical: Email and Callback
        
    -   Warning: Email and Callback
        
    -   Info: Email and Callback
        
    
    You also need to select the number of times that the threshold is reached before an alert is triggered. Valid values: 1 Consecutive Cycle, 3 Consecutive Cycles, 5 Consecutive Cycles, 10 Consecutive Cycles, 15 Consecutive Cycles, 30 Consecutive Cycles, 60 Consecutive Cycles, 70 Consecutive Cycles, 90 Consecutive Cycles, 120 Consecutive Cycles, and 180 Consecutive Cycles.
    
    You can configure settings for different alert levels. This way, CloudMonitor generates alerts at a specific level based on the threshold corresponding to the level and sends alert notifications by using the specified methods.
    
    -   Alert level: Info. The default notification method for this alert level is Email and Callback.
        
    -   Threshold: ≥ 80%.
        
    
    **Mute For**
    
    The interval at which alert notifications are sent if the generated alert is not cleared. The value also indicates the silence period. Valid values: 5 minutes, 15 minutes, 30 minutes, 60 minutes, 3 hours, 6 hours, 12 hours, and 24 hours.
    
    An alert notification is sent when a metric reaches the alert threshold. During the silence period, if the metric repeatedly exceeds the alert threshold, no new alert notification is sent. After the silence period ends, if the metric does not return to the normal state, a new alert notification is sent.
    
    For example, if you set the **Mute For** parameter to **24 hours**, CloudMonitor sends an alert notification for a generated alert, and the alert remains unresolved, CloudMonitor sends a new alert notification after 24 hours.
    
    5 minutes
    
    **Effective Time**
    
    The period during which the alert rule takes effect. The alert rule takes effect and generates alerts only at the specified time on the specified days of a week.
    
    -   Cycle: Monday to Sunday
        
    -   Time: 00:00 to 23:59
        
    
    **Alarm Contact Group**
    
    The contact group to which alert notifications are sent.
    
    Alert notifications for an application group are sent to the alert contact in the alert contact group. An alert contact group is a group of alert contacts, containing one or more alert contacts.
    
    For more information about how to create an alert contact or an alert contact group, see [Create an alert contact or alert contact group](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-contact-or-alert-contact-group#task-2514452).
    
    Quota Administrators of ECS Instance Types
    
    **Alarm Callback**
    
    The URL that is accessible over the Internet to receive the alert information pushed by CloudMonitor by using HTTP POST requests. Only the HTTP protocol is supported.
    
    To test the connectivity of the callback URL, perform the following operations:
    
    1.  Click **Test** next to the callback URL.
        
        On the **Test Result** page, you can check the connectivity of the callback URL based on the returned status code and test result details.
        
        **Note**
        
        You can also set the **Language** parameter and then click **Test** again to obtain test result details of the specified language.
        
    2.  Click **Close**.
        
    
    http://alert.aliyun.com:8080/callback
    
    **Labels**
    
    The tags of the alert rule. A tag consists of a tag key and a tag value. You can specify up to six tags for an alert rule.
    
    `k1,v1`
    
    **Push Channel**
    
    The Alibaba Cloud service used to deliver alert information. Valid values:
    
    -   **Simple Log Service**
        
        If you turn on **Simple Log Service**, when an alert is generated, alert information is sent to a Logstore in Simple Log Service. In this case, you must configure the **Region**, **ProjectName**, and **Logstore** parameters.
        
        For information about how to create a project and a Logstore, see [Getting Started](/help/en/sls/getting-started#concept-gpw-x2w-ydb).
        
    -   **Message Service - topic**
        
        If you turn on **Message Service - topic**, when an alert is generated, alert information is sent to a topic in Simple Message Queue (formerly MNS). In this case, you must specify a region and a topic.Simple Message Queue (formerly MNS)
        
        For more information about how to create a topic, see [Create a topic](/help/en/mns/create-a-topic#task141).
        
    -   **Function Compute**
        
        If you turn on **Function Compute**, when an alert is generated, alert information is sent to Function Compute to be formatted. In this case, you must specify a region, a service, and a function.
        
        For information about how to create a service and a function, see [Quickly create a function](/help/en/functioncompute/fc-2-0/create-a-function-in-the-function-compute-console).
        
    
    Turn off all switches
    
    **Recovery Notification**
    
    Specifies whether to send notifications when alerts are cleared. The switch is turned on by default.
    
    Turn on the switch
    
    **Method to handle alarms when no monitoring data is found**
    
    The method that is used to handle alerts when no monitoring data is available. Valid values:
    
    -   **Do not do anything** (default)
        
    -   **Send alarm notifications**
        
    -   **Treated as normal**
        
    
    Do not do anything
    
5.  Optional. View the alert callback results.
    
    If alert callbacks are configured for quotas, you can view the alert callback records and the quota increase applications that were automatically submitted.
    
    1.  In the left-side navigation pane, click **Alarm History**. On the **Alarm History** page, view the alert callback records.
        
        If **Alert callback** is displayed in the **Notification Methods** column of a record, the alert callback is successful.
        
    2.  In the left-side navigation pane, click **Application Records**. On th **Appliation Records** page, view the applications that were automatically submitted to increase quotas.
        

### **Create a quota alert on the Quota Center page of the SLB console**

1.  Log on to the SLB console. In the left-side navigation pane, click [Quota Center](https://slb.console.alibabacloud.com/slb/quota).
    
2.  On the **Quota Center** page, find the quota that you want to manage and click **Create Alarm Rule** in the **Actions** column.
    
3.  In the **Create Quota Alarm Rule** panel, configure the parameters and click **OK**.
    
    1.  **Basic Information:** Enter the name of the alarm.
        
    2.  **Alarm Object:** Quota details.
        
    3.  **Alarm Rule**:
        
        1.  **Alarm Metric**: Choose a metric from among quota, quota usage, percentage of used quotas, and percentage of available quotas.
            
        2.  **Threshold and Alarm Level**: Choose a level from among critical, warn, and info. Each level has a different notification method.
            
    4.  **Notification Type**: When the alarm is triggered, CloudMonitor sends a notification to your specified URL.
        
4.  In the **Actions** column of the quota that you want to manage, click **![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9031494071/p736591.png)** > **Alarm Settings**.
    
5.  In the **Alerts** dialog box, you can view the created alert rules. You can also click **View**, **Modify**, or **Delete** in the **Actions** column.
    

## Add a quota to a quota template

### Prerequisites

Before you use a quota template, make sure that the following requirements are met:

-   An enterprise management account is used.
    
-   [Resource directory](/help/en/resource-management/resource-directory/user-guide/enable-a-resource-directory#task-2152699) and [the quota template feature](/help/en/quota-center/user-guide/enable-the-quota-template-feature) are enabled.
    

### Add a quota to a quota template in the Quota Center console

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  In the left-side navigation pane, click **Quota Templates**. On the **Quota Templates** page, click **Enable Quota Template**.
    
3.  In the **Enable Quota Template** message, click **OK**.
    
4.  In the left-side navigation pane, choose **Products** > **General Quotas**.
    
5.  Click **Server Load Balancer** in the **Networking** section.
    
6.  On the **General Quotas** page, find the quota that you want to manage and click **Create Quota Template** in the **Actions** column.
    
7.  In the **Create Quota Template** dialog box, configure the **Applied Quotas** parameter and click **OK**.
    

### Add a quota to a quota template on the Quota Center page of the SLB console

1.  Log on to the SLB console. In the left-side navigation pane, click [Quota Center](https://slb.console.alibabacloud.com/slb/quota).
    
2.  On the **Quota Center** page, find the quota that you want to manage and click **Create Quota Template** in the **Actions** column.
    
3.  In the **Create Quota Template** dialog box, configure the **Applied Quotas** parameter and click **OK**.
