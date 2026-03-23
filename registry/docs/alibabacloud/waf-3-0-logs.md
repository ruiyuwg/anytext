Web Application Firewall (WAF) is integrated with Simple Log Service to provide the Simple Log Service for WAF feature. The feature collects and stores the access logs and protection logs of protected objects, such as cloud service instances and domain names, in WAF. You can use the feature to query and analyze logs, configure charts, configure alert rules, and deliver logs to downstream services for consumption. The feature allows you to focus more on log analysis.

## Assets

**Warning**

We recommend that you do not delete the projects or Logstores that are related to WAF logs. If you delete the projects or Logstores, existing logs are deleted, and new logs cannot be delivered to Simple Log Service.

-   Subscription WAF instances
    
    When you enable the Simple Log Service for WAF feature, you can specify a Simple Log Service region. Then, WAF creates a project named `wafng-project-<Alibaba Cloud account ID>-<Region ID>` in the specified region and creates a dedicated Logstore named `wafng-logstore` in the project.
    
    **Important**
    
    If you enabled the pay-by-ingested-data billing mode, Simple Log Service automatically creates a dedicated Logstore that uses the pay-by-ingested-data billing mode. If you want to switch the billing mode from pay-by-ingested-data to pay-by-feature, you can modify the configuration of the Logstore. For more information, see [Modify the configurations of a Logstore](/help/en/sls/manage-a-logstore#section-evc-rjx-ndb).
    
-   Pay-as-you-go WAF instances
    
    When you enable the Simple Log Service for WAF feature, you can specify a Simple Log Service region. Then, WAF creates a project named `wafnew-project-<Alibaba Cloud account ID>-<Region ID>` in the specified region and creates a dedicated Logstore named `wafnew-logstore` in the project.
    

## Billing

-   Subscription WAF instances
    
    The fees of the Simple Log Service for WAF feature are included in the bills of WAF. You are charged based on the log retention period and log storage capacity. For more information, see [Billing overview](/help/en/waf/web-application-firewall-3-0/billing-description#task-2230251).
    

-   Pay-as-you-go WAF instances
    
    -   The fees of the Simple Log Service for WAF feature are not included in the bills of WAF but are included in the bills of Simple Log Service.
        
    -   If your Logstore uses the pay-by-feature billing mode, you are charged for log storage, read traffic, number of requests, data transformation, and data shipping. after the logs are collected from WAF to Simple Log Service. The fees are included in the bills of Simple Log Service. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items).
        
    -   If your Logstore uses the pay-by-ingested-data billing mode, you are charged for the ingested raw data volume after the logs are collected from WAF to Simple Log Service. The fees are included in the bills of Simple Log Service. For more information, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode).
        

## Limits

-   If you have overdue payments for your Simple Log Service resources, the Simple Log Service for WAF feature becomes unavailable.
    
-   You can write only WAF logs to the dedicated Logstores. No limits are imposed on features such as query, analysis, alerting, and consumption.
    
-   The available storage capacity for WAF logs must be sufficient. If the log storage capacity is exhausted, new logs cannot be stored.
    
    **Note**
    
    The log storage capacity that is displayed in the Simple Log Service console is not updated in real time.
    

## Benefits

-   Classified protection compliance: The Simple Log Service for WAF feature can retain website access logs for more than six months and help your website meet the requirements for classified protection.
    
-   Simple configuration: You need to only perform simple operations to enable the feature to collect access logs and attack protection logs from the domain name of your website in real time. You can specify a custom log retention period and a custom log storage capacity. You can also select a website for log collection based on your business requirements.
    
-   Real-time analysis: The feature provides real-time log analysis and out-of-the-box dashboards. The dashboards provide insights into the attacks that target your website and user access details.
    
-   Real-time alerting: The feature supports custom monitoring and alerting for specific metrics in near real time. You can respond to critical business exceptions at the earliest opportunity.
    
-   High compatibility: The feature is compatible with solutions such as stream computing, cloud storage, and visualization. You can extract more value from your business data.
    

## Scenarios

-   Trace web attack logs to identify the source of security threats.
    
-   Monitor web requests in real time and view traffic trends.
    
-   Obtain information about the efficiency of security operations and resolve issues at the earliest opportunity.
    
-   Generate security network logs and deliver the logs to self-managed data and computing centers.
