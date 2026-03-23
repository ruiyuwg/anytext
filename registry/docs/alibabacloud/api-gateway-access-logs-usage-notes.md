Simple Log Service and API Gateway jointly launch the log management feature that allows you to collect, query, analyze, transform, and consume API Gateway access logs in real time. This topic describes the assets, billing, and limits of the log management feature.

API Gateway supports API hosting to facilitate micro-service aggregation, frontend-backend separation, and system integration. An access log is generated for each API request. The log contains information such as the IP address of the API caller, requested URL, response latency, returned status code, number of bytes in the request, and number of bytes in the response. The information helps you understand the status of your web services. ![API网关](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6207549951/p5402.png)

## Assets

-   Custom project and Logstore
    
    **Important**
    
    -   Do not delete the project or Logstore that is related to API Gateway access logs. Otherwise, API Gateway access logs cannot be sent to Simple Log Service.
        
    -   When you create a custom Logstore, note that billable items that are involved vary based on the billing mode of the Logstore. For more information, see [Billable items](/help/en/sls/billing-item/).
        
    
-   Dedicated dashboard
    
    By default, Simple Log Service generates a dashboard after you enable the feature.
    
    **Important**
    
    We recommend that you do not make changes to the dedicated dashboard because the dashboard may be upgraded or updated at any time. You can create a custom dashboard to visualize query results. For more information, see [Create a dashboard](/help/en/sls/create-a-dashboard#concept-osm-1nq-zdb).
    
    **Dashboard**
    
    **Description**
    
    _Logstore Name_\_apigateway access logs
    
    Displays the overall statistics of API Gateway, including the number of requests, success rate, error rate, latencies, number of apps that call API operations, number of errors, top API groups, top API operations, and top latencies.
    

## Billing

-   You are not charged for the log management feature on the API Gateway side.
    
-   If the custom Logstore uses the pay-by-feature billing mode, you are charged for storage, read traffic, number of requests, data transformation, and data shipping after the logs are collected from API Gateway to Simple Log Service. The fees are included in the bills of Simple Log Service. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   If the custom Logstore uses the pay-by-ingested-data billing mode, you are charged for storage and read traffic over the Internet after the logs are collected from API Gateway to Simple Log Service. The fees are included in the bills of Simple Log Service. For more information, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode).
    

## Limits

-   The API Gateway instance from which you want to collect access logs to Simple Log Service must reside in the same region as the project to which you want to send the logs.
    
-   You can specify only one Logtail configuration for a region. You can use the Logtail configuration to collect all API Gateway access logs from the region to the Logstore that you specify in the Logtail configuration.
