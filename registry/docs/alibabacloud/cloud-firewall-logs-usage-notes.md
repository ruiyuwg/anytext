Simple Log Service and Cloud Firewall jointly launch the log analysis feature that allows you to collect, query, analyze, transform, and consume Internet traffic logs in real time. This helps you meet classified protection requirements. This topic describes the assets, billing, and limits of the log analysis feature.

## Assets

-   Dedicated project and Logstore
    
    After you enable the log analysis feature, Simple Log Service creates a project named cloudfirewall-project-Alibaba Cloud account ID-ap-southeast-1 and a dedicated Logstore named cloudfirewall-logstore by default.
    
    **Important**
    
    -   Do not delete the project or Logstore that is related to Cloud Firewall logs. Otherwise, Cloud Firewall logs cannot be delivered to Simple Log Service.
        
    -   If you have enabled the pay-by-ingested-data billing mode, Simple Log Service creates a dedicated Logstore that uses the pay-by-ingested-data billing mode by default. If you want to switch the billing mode from pay-by-ingested-data to pay-by-feature, you can modify the configuration of the Logstore. For more information, see [Modify the configuration of a Logstore](/help/en/sls/manage-a-logstore#section-evc-rjx-ndb).
        
    
-   Dedicated dashboard
    
    By default, Simple Log Service generates a dashboard after you enable the feature.
    
    **Important**
    
    We recommend that you do not make changes to the dedicated dashboard because the dashboard may be upgraded or updated at any time. You can create a custom dashboard to visualize query results. For more information, see [Create a dashboard](/help/en/sls/create-a-dashboard#concept-osm-1nq-zdb).
    
    **Dashboard**
    
    **Description**
    
    Report
    
    Displays the statistics of Cloud Firewall, including the basic metrics, inbound traffic sources, outbound traffic distribution, and system stability.
    

## Billing

-   You are charged based on the log retention period and log storage. For more information, see [Billing](/help/en/cloud-firewall/user-guide/billing-of-log-analysis#concept-187712). If the dedicated Logstore uses the pay-by-feature billing mode, you are charged for data transformation and data shipping when you transform or ship logs after the logs are collected from Cloud Firewall to Simple Log Service. In addition, you are charged for read traffic over the Internet when you read logs in stream mode. The fees are included in the bills of Simple Log Service. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   If the dedicated Logstore uses the pay-by-ingested-data billing mode, you are not charged for data transformation or data shipping. You are charged only for read traffic over the Internet. The fees are included in the bills of Simple Log Service. For more information, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode#main-2351620).
    

## Limits

-   You can write only Cloud Firewall logs to the dedicated Logstore. No limits are imposed for features such as query, analysis, alerting, and consumption.
    
-   You cannot change the log retention period of the dedicated Logstore in the Simple Log Service console. You can change the log retention period in the Cloud Firewall console.
    
-   If you have overdue payments for your Simple Log Service resources, the log analysis feature is automatically stopped. To ensure business continuity, you must settle your overdue payments within the prescribed time limit.
    
-   The available storage of logs must be sufficient. If the log storage is exhausted, new logs cannot be stored.
    
    **Note**
    
    The usage of log storage that is displayed in the Cloud Firewall console is not updated in real time. The displayed usage does not include the usage from the previous two hours.
    

## Benefits

-   Classified protection compliance: The feature allows you to store website access logs for more than six months. The feature helps your websites meet the requirements of classified protection.
    
-   Ease of use: The feature allows you to collect Internet traffic logs in real time after simple configuration.
    
-   Real-time analysis: The feature uses the capabilities of Simple Log Service to provide real-time analysis capabilities and an out-of-the-box report center. You can obtain information about the Internet traffic that passes through Cloud Firewall and user access details.
    
-   Real-time alerting: The feature supports custom monitoring and alerting for specific metrics in near real time. You can respond to exceptions in critical workloads at the earliest opportunity.
