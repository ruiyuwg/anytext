Simple Log Service and Object Storage Service (OSS) jointly launch the real-time log query feature. You can use this feature to audit operations, analyze access requests, track anomaly events, and identify errors and exceptions on OSS. This topic describes the benefits, assets, billing, and limits of the real-time log query feature.

**Important**

Simple Log Service and OSS also jointly launch the CloudLens for OSS application. The application provides a bucket-level view for centralized management. You can use the application to analyze data such as resource usage, access, anomaly detection, and security data in a visualized manner. The application also provides scenario-based O&M management to achieve bucket asset observability. For more information, see [Usage notes of CloudLens for OSS](/help/en/sls/usage-notes-44#concept-2256078).

## Benefits

-   The feature can send logs to Simple Log Service within 3 minutes and allows you to view real-time logs in the OSS console.
    
-   The feature provides log analysis capabilities and common analysis reports to allow you to easily query data.
    
-   The feature allows you to query and analyze raw logs in real time and filter logs by bucket name, object name, API operation, or time.
    

## Assets

-   Dedicated project and dedicated logstore
    
    After you enable the real-time log query feature, Simple Log Service automatically creates a dedicated project named `oss-log-<Alibaba Cloud account ID>-<regionId>` and a dedicated logstore named `oss-log-store`.
    
    **Important**
    
    -   Do not delete the project or logstore that is related to OSS access logs. Otherwise, OSS access logs cannot be sent to Simple Log Service.
        
    -   If you have enabled the pay-by-ingested-data billing mode, Simple Log Service creates a dedicated logstore that uses the pay-by-ingested-data billing mode by default. If you want to switch the billing mode from pay-by-ingested-data to pay-by-feature, you can modify the configurations of the logstore. For more information, see [Modify the configurations of a logstore](/help/en/sls/manage-a-logstore#section-evc-rjx-ndb).
        
    
-   Dedicated dashboards
    
    By default, Simple Log Service generates four dashboards after you enable the feature.
    
    **Note**
    
    We recommend that you do not make changes to the dedicated dashboards because the dashboards may be upgraded or updated at any time. You can create a custom dashboard to visualize query results. For more information, see [Create a dashboard](/help/en/sls/create-a-dashboard#concept-osm-1nq-zdb).
    
    **Dashboard**
    
    **Description**
    
    Access Center
    
    Displays the overall operational statistics of OSS, including page views (PVs), unique visitors (UVs), traffic, and Internet access distribution.
    
    Audit Center
    
    Displays the statistics of operations that are performed on OSS objects, including the read, write, and delete operations.
    
    Operation Center
    
    Displays the statistics of OSS O&M, including the number of requests and distribution of failed operations.
    
    Performance Center
    
    Displays the statistics of OSS performance, including the performance of downloads and uploads over the Internet, transmission performance over different networks or of different object sizes, and list of differences between object downloads.
    

## Billing

-   If your logstore uses the pay-by-feature billing mode, you are not charged log storage or index traffic fees if OSS access logs are stored for no more than 7 days and the compressed write traffic or index traffic per day is no more than 900 GB. If the size of an OSS access log is 1 KB, 900 GB is equivalent to 900 million logs. If the limits are exceeded, you are charged log storage and index traffic fees for the excess logs. The fees are included in the bills of Simple Log Service. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   If your logstore uses the pay-by-feature billing mode, the real-time log query feature provides a free quota for shards per month. The free quota is calculated by using the following formula: 16 × 31. The unit of the free quota is shard-day. After the free quota is exhausted, you are charged fees, and the fees are included in the bills of Simple Log Service. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   If your logstore uses the pay-by-feature billing mode, you are charged for read traffic, Internet traffic, data transformation, and data shipping. The fees are included in the bills of Simple Log Service. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   If your logstore uses the pay-by-ingested-data billing mode, you are charged only for read traffic over the Internet when third-party cloud applications read Simple Log Service data. The fees are calculated based on the size of data after compression, and the fees are included in the bills of Simple Log Service. For more information, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode#main-2351620).
    

## Limits

-   You can write only OSS logs to a dedicated logstore. You cannot modify the indexes in a dedicated logstore.
    
-   If your Alibaba Cloud account has overdue payments, the real-time log query feature is unavailable.
    
-   If you use Anywhere Buckets, the real-time log query feature is unavailable.
    

## **References**

-   For more information about how to enable the real-time log query feature, see [Enable the real-time log query feature](/help/en/sls/enable-the-real-time-log-query-feature).
    
-   For more information about the formats of OSS access logs, see [Log fields](/help/en/sls/log-fields-13).
