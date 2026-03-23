Simple Log Service and ActionTrail jointly launch the Inner-ActionTrail feature that allows you to collect, query, analyze, transform, and consume platform operation logs in real time. You can analyze and audit platform operation logs based on your business requirements. This topic describes the assets, billing, and limits of the Inner-ActionTrail feature.

**Note**

The Inner-ActionTrail feature allows you to collect platform operation logs from Object Storage Service (OSS), Elastic Compute Service (ECS), ApsaraDB RDS, Container Service for Kubernetes (ACK), and E-MapReduce.

## Assets

-   Custom project and Logstore
    
    -   The indexing feature is automatically enabled for the Logstore. Indexes are automatically configured for specific fields.
        
    -   By default, logs are permanently stored in the Logstore. You can change the log retention period. For more information, see [Manage a Logstore](/help/en/sls/manage-a-logstore#concept-xkb-zh5-vdb).
        
    
    **Important**
    
    -   Do not delete the project or Logstore that is related to platform operation logs. Otherwise, platform operation logs cannot be sent to Simple Log Service.
        
    -   When you create a custom Logstore, note that billable items that are involved vary based on the billing mode of the Logstore. For more information, see [Billable items](/help/en/sls/billing-item/).
        
    
-   Dedicated dashboard
    
    By default, Simple Log Service generates a dashboard after you enable the feature.
    
    **Note**
    
    We recommend that you do not make changes to the dedicated dashboard because the dashboard may be upgraded or updated at any time. You can create a custom dashboard to visualize query results. For more information, see [Create a dashboard](/help/en/sls/create-a-dashboard#concept-osm-1nq-zdb).
    
    **Dashboard**
    
    **Description**
    
    innertrail\__Trail name_\_audit\_center\_cn
    
    Displays the details of operations on cloud resources in real time. The details include page views (PVs), unique visitors (UVs), number of source services, distribution of event sources, and trends of PVs and UVs.
    

## Billing

-   You are not charged for the Inner-ActionTrail feature on the ActionTrail side.
    
-   If the custom Logstore uses the pay-by-feature billing mode, you are charged for storage, read traffic, number of requests, data transformation, and data shipping after the platform operation logs are collected from ActionTrail to Simple Log Service. The fees are included in the bills of Simple Log Service. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items).
    
-   If the custom Logstore uses the pay-by-ingested-data billing mode, you are charged for storage and read traffic over the Internet after the platform operation logs are collected from ActionTrail to Simple Log Service. The fees are included in the bills of Simple Log Service. For more information, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode).
    

## Limits

-   To use the Inner-ActionTrail feature, you must submit a ticket or contact your Alibaba Cloud sales manager to obtain the required permissions.
    
-   To use the Inner-ActionTrail feature, you must make sure that you do not have overdue payments for your Simple Log Service resources.
    
-   All platform operation logs are sent to only one Logstore.
    
-   You can write only platform operation logs to the custom Logstore. No limits are imposed for features such as query, analysis, alerting, and consumption.
    
-   You cannot change the log retention period.
    

## Benefits

-   Classified protection compliance: The feature allows you to store platform operation logs for more than six months. The feature helps your service meet the requirements of classified protection.
    
-   Ease of use: The feature allows you to collect platform operation logs in real time after simple configuration.
    
-   Real-time analysis: The feature provides real-time log analysis and out-of-the-box dashboards. You can obtain information about the distribution and details of platform operation logs.
    
-   Real-time alerting: The feature supports custom monitoring and alerting for specific metrics in near real time. You can respond to exceptions in critical workloads at the earliest opportunity.
    
-   High compatibility: The feature is compatible with solutions such as stream computing, cloud storage, and visualization. This allows you to extract more value from your business data.
    

## Scenarios

-   Trace platform operation logs and check the causes for resource changes.
    
-   View platform operation logs in near real time for auditing and evaluation purposes.
    
-   Export platform operation logs to on-premises data centers.
