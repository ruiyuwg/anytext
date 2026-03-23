Log Service and Classic Load Balancer (CLB) jointly launch the Layer 7 access log management feature to record the details of all requests that are sent to CLB. The details include the request time, client IP address, latency, request path, and server response. You can use the Layer 7 access log management feature to analyze the behavior and geographical distribution of client users and troubleshoot issues.

## Assets

-   Custom project and Logstore
    
    -   The indexing feature is automatically enabled for the Logstore. Indexes are automatically configured for specific fields.
        
        You can modify the indexes. New indexes take effect only on data that is generated after the modification. You can also reindex historical data. For more information, see [Reindex logs for a Logstore](/help/en/sls/reindex-logs-for-a-logstore#task-2424026).
        
    -   By default, logs are permanently stored in the Logstore. You can change the log retention period. For more information, see [Manage a Logstore](/help/en/sls/manage-a-logstore#concept-xkb-zh5-vdb).
        
    
    **Important**
    
    -   Before you disable the Layer 7 access log management feature, do not delete the project or Logstore that is related to Layer 7 access logs. Otherwise, Layer 7 access logs cannot be delivered to Log Service.
        
    -   When you create a custom Logstore, note that billable items that are involved vary based on the billing mode of the Logstore. For more information, see [Billable items](/help/en/sls/billing-item/#main-2351612).
        
    
-   Dedicated dashboards
    
    By default, Log Service generates two dashboards after you enable the feature.
    
    **Note**
    
    We recommend that you do not make changes to the dedicated dashboards because the dashboards may be upgraded or updated at any time. You can create a custom dashboard to visualize query results. For more information, see [Create a dashboard](/help/en/sls/create-a-dashboard#concept-osm-1nq-zdb).
    
    **Dashboard**
    
    **Description**
    
    slb\_layer7\_operation\_center\_cn
    
    Displays the overall operational statistics of CLB, including the page views (PVs), unique visitors (UVs), request success rate, request traffic, and response traffic.
    
    slb\_layer7\_access\_center\_cn
    
    Displays the details of requests that are sent to CLB, including the PV distribution by client, PV trend of request methods, PV trend of status codes, top clients, and topology of request traffic.
    

## Billing

-   You are not charged for the Layer 7 access log management feature.
    
-   If the custom Logstore uses the pay-by-feature billing mode, you are charged for storage, read traffic, number of requests, data transformation, and data shipping after the Layer 7 access logs are collected from CLB to Log Service. The fees are included in the bills of Log Service. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   If the custom Logstore uses the pay-by-ingested-data billing mode, you are charged for storage and read traffic over the Internet after the Layer 7 access logs are collected from CLB to Log Service. The fees are included in the bills of Log Service. For more information, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode#main-2351620).
    

## Limits

-   The Layer 7 access log management feature is available only in CLB instances for which a Layer 7 listener is configured.
    
-   The CLB instance that you use must reside in the same region as the project that you specify in Log Service.
    

## Benefits

-   Ease of use: The feature unburdens developers and O&M personnel from tedious and time-consuming log processing and allows them to focus on business development and technical research.
    
-   Immense processing capabilities: The number of CLB access logs increases with the number of PVs for CLB instances. In this case, a large number of access logs are accumulated. When you process the large number of access logs, you must balance performance and costs. Log Service allows you to analyze 100 million logs within 1 second and is more cost-effective compared with open source solutions.
    
-   Real-time processing capabilities: Real-time logs are required in scenarios such as DevOps, monitoring, and alerting. CLB integrates with the big data computing capabilities of Log Service to analyze and process real-time logs in seconds.
    
-   Elasticity: You can enable or disable the Layer 7 access log management feature for each of your CLB instances. You can specify a custom retention period for logs. The storage capacity of a Logstore can be dynamically scaled to meet service requirements.
