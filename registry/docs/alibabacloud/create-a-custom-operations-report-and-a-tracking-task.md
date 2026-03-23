You can use the operations report feature to query offline analytical data for your accelerated domain names over different time periods. This data helps you understand the operational status of your domain names and analyze your business performance.

## Prerequisites

You have successfully added an accelerated domain name. If you have not done so, see [Add a service domain name](/help/en/edge-security-acceleration/dcdn/getting-started/add-a-domain-name#task-alv-1fk-xdb).

## Features

By default, operation reports provide user access data, such as **PV/UV**, **Regions and ISPs**, **Domain Names**, **Popular Referer Headers**, **Popular URLs**, and **Top Client IPs**. You can customize and subscribe to reports as needed. After a successful subscription, the system sends the reports to your specified email address. You can analyze the reports to understand the operational status of your accelerated domain names.

**Report content**

**Description**

**PV/UV**

Query PV and UV for domain names by time.

**Regions and ISPs**

View the distribution of user access regions and carriers for a specified time range. This includes the Chinese mainland, Hong Kong (China), Macao (China), Taiwan (China), and regions outside China.

**Domain Names**

Displays the access ranking of each accelerated domain name. The ranking includes percentage, traffic or peak bandwidth, peak time, and number of visits.

**Note**

The minimum granularity for querying domain name rankings is one day. For example, after you select a date to query, the system displays the top 200 results for that date.

**Popular Referer Headers**

Displays the traffic, traffic percentage, access count, and access percentage for popular Referers used in hotlink protection.

**Note**

When the operations report feature analyzes user logs, it collects statistics on the **http\_referer** field in user request logs. The statistical results fall into two cases:

-   If the Referer in a user request is a standard URL, the operations report collects statistics and records the domain name. For example, the following cases are all counted as `example.com`.
    
    -   `http://example.com/aliyundoc/`
        
    -   `https://example.com/aliyundoc/image`
        
-   If the Referer in a user request is not a standard URL, the operations report counts it as a hyphen (-).
    

**Popular URLs**

Query popular URLs for a specified domain name, status code, and date. The query results include traffic, traffic percentage, access count, and access percentage.

**Note**

The minimum granularity for querying popular URLs is one day. For example, after you select a date to query, the system displays the top 3,000 results for that date.

**Top Client IPs**

Query the top client IPs for a specified domain name, region, and date. You can rank the results by traffic or number of requests.

**Note**

The minimum granularity for top client IPs is one day. After you select a date to query, the system displays the top 200 results for that date if you query all regions. If you query a single region, the system displays the top 20 results for that date.

**Note**

After you subscribe to operations reports, Alibaba Cloud DCDN periodically sends reports to your mailbox. The traffic data in these reports is measured in bytes.

## Customize operations reports

Before you use the operations report feature, you must customize a report to start data collection. Data generation can be slow because of delays from log integrity checks. Customized reports are usually generated at 6 pm of the next day.

**Note**

-   After you customize the following reports, you can query the data directly in the console by the next day. You can also subscribe to the reports to have them sent to a specified email address, and items take different time to generate:
    
    -   Popular URLs (sort by number of requests or traffic): 6 hours
        
    -   Popular Referers (sort by number of requests or traffic): 1 hour
        
    -   Popular Origin Fetch URLs (sort by number of requests or traffic): 1 hour
        
    -   Top Client IPs (sort by number of requests or traffic): 6 hours
        
    -   Domain Name Ranking (sort by traffic only): 1 hour
        
    -   PV/UV: 1 hour
        
    -   Access Region Distribution: 1 hour
        
    -   Carrier Distribution: 1 hour
        
-   Data for other reports is not displayed in the console by default. You can subscribe to these reports to have them sent to a specified email address.
    

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left navigation pane, choose **Analytics** > **Operations Reports**.
    
3.  On the **Operations Reports** tab, click **Customize Operations Report**.
    
4.  In the **Customize Operations Report** dialog box, you can configure the domain names and report content.
    
    ![定制报表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2262334161/p242173.png)
    
    **Parameter**
    
    **Description**
    
    **Domain Names**
    
    Select the accelerated domain names for which you want to customize operations reports. You can select multiple domain names.
    
    **Report Content**
    
    Select the report content that you want to customize. You can select multiple content types.
    
5.  Click **OK** to finish the report customization.
    
    **Note**
    
    If you remove a domain name or a report type from a **Customized Operations Report**, the subscription task stops generating data for that item. You must do this by removing the domain name or report type from the **Subscription Task**. For more information, see [Step 6](#step-pwh-j76-ss6).
    
6.  **Optional:** You can modify the **Customize Operations Report**.
    
    Repeat the preceding steps to add or remove report content.
    

## Subscribe to operations reports

Before you subscribe to an operations report, you must customize it. Otherwise, the subscription fails. After you subscribe to an operations report, the system sends the report to your specified email address.

**Note**

-   This subscription feature is in a trial phase. An Alibaba Cloud account, including its Resource Access Management (RAM) users, can create a maximum of five subscription tasks.
    
-   Because of delays from log integrity checks, data generation takes a long time. The system sends the report only after all data is collected.
    

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left navigation pane, choose **Analytics** > **Operations Reports**.
    
3.  On the **Operations Reports** page, click the Tracking Tasks tab.
    
4.  Click **Create Task** and enter the subscription details.
    
    ![订阅任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7642754671/p242177.png)
    
    **Parameter**
    
    **Description**
    
    **Task Name**
    
    Enter a name for the subscription task.
    
    **Report Type**
    
    The supported report types are Daily Report, Weekly Report, and Monthly Report.
    
    -   Daily Report: The system sends the report to your email address after the log data from the previous day is fully collected and calculated.
        
    -   Weekly Report: Calculated by calendar week. The system sends the report to your email address after the log data for a week is fully collected and calculated. The report for the previous week is typically sent on Monday morning of the next week.
        
    -   Monthly Report: Calculated by calendar month. The system sends the report to your email address after the log data for a month is fully collected and calculated.
        
    
    **Email Address**
    
    The email addresses to receive the operations reports. You can enter multiple email addresses separated by commas (,).
    
    **Domain Names**
    
    Select the accelerated domain names for which you want to subscribe to operations reports.
    
    **Report Content**
    
    Select the report content to which you want to subscribe.
    
5.  Click **OK** to finish the creation of the tracking task.
    
    **Note**
    
    -   After you subscribe to a customized operations report, if you delete a content type from it, the deleted content type is marked as abnormal and displayed as a report ID when you click **Edit** to view the subscription task. This indicates that the subscription to this content is no longer valid. For the mappings between report IDs and report names, see [Report mappings](#section-bbb-xee-37b).
        
    -   The traffic data in the reports is measured in bytes.
        
    
6.  **Optional:** Modify the **Tracking Task**.
    
    Select the subscription task to modify and click **Edit**. Modify the configuration as described in Step [4](#step-6g8-qmt-i9m) and click **OK**.
    

## Report mappings

The following table describes the mappings between report IDs and report names.

**Report ID**

**English Name**

**Chinese Name**

**Calculation method**

2

TopUrlByAcc

Popular URLs (sort by number of requests or traffic)

Statistics are collected based on the number of URLs.

4

TopUrlByTraf

URLs are sorted by traffic. The traffic value includes the TCP packet header coefficient.

6

TopReferByAcc

Popular Referers (sort by number of requests or traffic)

Statistics are collected based on the number of visits.

8

TopReferByTraf

URLs are sorted by traffic. The traffic value includes the TCP packet header coefficient.

10

OriginTopUrlByAcc

Popular Origin Fetch URLs (sort by number of requests or traffic)

Statistics are collected based on the number of URLs.

12

OriginTopUrlByTraf

URLs are sorted by traffic. The traffic value includes the TCP packet header coefficient.

14

TopIpByAcc

Top Client IPs (sort by number of requests or traffic)

IPs are sorted by the number of visits.

16

TopIpByTraf

URLs are sorted by traffic. The traffic value includes the TCP packet header coefficient.

18

DomainByTraf

Domain Name Ranking (sort by traffic)

Domain names are sorted by traffic.

20

DomainPvUv

PV/UV

-   PV: calculated based on the number of daily terminal visits.
    
-   UV: calculated based on the number of unique IP address visits. Each IP address is counted only once.
    

22

AreaTrafStat

Access Region Distribution

Collects statistics on the distribution of a domain name in a specific region.

24

IspTrafStat

Carrier Distribution

Collects statistics on the distribution of a domain name with a specific carrier.

## Turn off customized operations reports

If you disable a **Customized Operations Report**, all related subscription tasks stop generating data but are retained. If you no longer need a **Tracking Task**, you can manually delete it from the **Tracking Tasks** tab. For more information, see [Delete a tracking task](#section-b9f-2cr-u1f).

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left navigation pane, choose **Analytics** > **Operations Reports**.
    
3.  On the **Operations Reports** page, click **Disable Operations Report**.
    
4.  Click **OK** to turn off the customized operations report.
    

## Delete a tracking task

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
    
2.  In the left navigation pane, choose **Analytics** > **Operations Reports**.
    
3.  On the **Tracking Tasks** page, select the subscription task to delete and click **Delete**.
    
    ![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3000472761/p392863.png)
    
4.  Click **OK** to delete the subscription task.
