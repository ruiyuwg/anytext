The quota management feature of Alibaba Cloud Dynamic Route for CDN (DCDN) is integrated with Quota Center. You can query and manage the quotas of DCDN and create quota alert rules in the Quota Center console. This topic describes how to manage the quotas of DCDN.

## Features

Due to the growth of your business, you may want to adjust the number of URLs or directories that can be refreshed, the number of URLs that can be prefetched, and the number of domain names that can be accelerated. If you want to adjust these quotas, you can log on to the [Quota Center](https://www.alibabacloud.com/product/quota_center) console and adjust the quotas based on your business requirements.

Quota Center provides the following features:

-   Quota query: allows you to query the quotas of services, query whether you can apply for quota increases, and query the upper limit on quota increases.
    
-   Quota applications: allows you to submit applications and view application records to obtain the progress of each application.
    
-   Quota alerts: allows you to configure quota alert rules based on percentage values or absolute values. Quota alerts notify you of quota status at the earliest opportunity. This way, you can adjust quotas based on your business requirements.
    
-   API operations: facilitates and automates O&M and helps improve O&M efficiency.
    

## Benefits

-   All-in-one: Quota Center provides a suite of quota management features.
    
-   Transparent: Quota Center provides the default quotas of services and quotas after increases.
    
-   Automated: Quota Center supports quota alerts, which can notify you of quota status at the earliest opportunity.
    
-   Efficient: Quota Center allows you to submit applications, which are more efficient than tickets.
    

## Usage notes

-   If you require a higher quota than the quota that is described in [Limits](/help/en/edge-security-acceleration/dcdn/product-overview/before-you-start#concept-nc4-qbf-xdb), you can submit an application to request a quota increase. Alibaba Cloud reviews your application based on your business requirements. For more information, see [Submit an application to increase a quota](/help/en/quota-center/user-guide/submit-an-application-to-increase-a-quota#task-2035549).
    
    -   The system allocates quotas on the number of URLs or directories that can be refreshed and the number of URLs that can be prefetched on a daily basis. After the quota for the current day is exhausted, the quota for the next day is automatically allocated at 00:00:00 (UTC+8) on the next day.
        
    -   The number of domain names that can be accelerated is a one-off allocation. If you want to increase the quota, you must submit an application in Quota Center.
        
-   You must use your Alibaba Cloud account to manage quotas. If you want to manage quotas by using a RAM user, the RAM user must be granted the required permissions. For more information, see [Authorize a RAM user](/help/en/quota-center/user-guide/authorize-a-ram-user#task-1962367).
    

## Procedure

1.  Log on to the [Quota Center console](https://quotas.console.alibabacloud.com/products).
    
2.  In the left-side navigation pane, choose **Products** > **General Quota**.
    
3.  On the **Products with General Quotas** page, select **Media Service & CDN** from the **Category** drop-down list.
    
4.  Click **dcdn** to go to the quota management page. Then, you can perform the following operations:
    
    -   Click **Apply** in the Actions column to request a quota increase. For more information, see [Submit an application to increase a quota](/help/en/quota-center/user-guide/submit-an-application-to-increase-a-quota#task-2035549).
        
    -   Click **Application Records** in the Actions column to query application records. For more information, see [Query applications and view application details](/help/en/quota-center/user-guide/submit-an-application-to-increase-a-quota#task-2035549).
        
    -   Click **Create Alert** in the Actions column to configure quota alert rules. For more information, see [Create an alert rule for a quota item](/help/en/quota-center/user-guide/create-an-alert-rule-for-a-quota-item#task-1957284).
        
    -   Click the More icon and select **View Alerts** in the Actions column to view quota alerts. For more information, see [View alert rules created for quota items and rule details](/help/en/quota-center/user-guide/query-quota-alerts-and-view-alert-details#task-1989365).
