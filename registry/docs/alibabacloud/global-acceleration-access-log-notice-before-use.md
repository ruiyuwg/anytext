Log Service and Global Accelerator (GA) jointly launch the access logging feature. You can use the feature to create access log instances to record the traffic information of endpoints. You can analyze the traffic information to verify Access Control List (ACL) rules and troubleshoot network errors. This topic describes the assets, billing, and limits of the access logging feature of GA.

## **Introduction**

You can create access log instances for one or more endpoint groups of a GA instance. The endpoint traffic information that is recorded by an access log instance is delivered to Log Service as logs.

![架构图.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1890311961/p676466.png)

## **Assets**

-   Custom project and custom Logstore
    
    **Important**
    
    -   Before you disable the access logging feature of GA, do not delete the related Log Service project and Logstore. Otherwise, logs cannot be delivered to Log Service.
        
    -   When you create a custom Logstore, note that the billable items vary depending on the billing mode of the Logstore. For more information, see [Billable items](/help/en/sls/billing-item/).
        
    
-   Dedicated dashboards
    
    None.
    

## **Scenarios**

-   Troubleshooting
    
    You can troubleshoot issues based on access logs. For example, you can check whether GA returns an expected response based on the `status` field in access logs and identify the cause.
    
-   Business planning
    
    You can analyze access logs to make informed business decisions. For example, you can upgrade bandwidth plans in advance to meet business requirements based on the traffic trend in an acceleration area. You can downgrade bandwidth plans to reduce costs. You can also view the hosts that access your application within a specified time period and prepare for application upgrades based on the `http_host` field in access logs.
    

## **Billing**

-   You are not charged for the access logging feature of GA.
    
-   If the billing mode of the related Logstore is pay-by-feature, you are charged based on the storage usage, read traffic, number of requests, data transformation, and data shipping after logs are delivered to Log Service. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items).
    
-   If the billing mode of the related Logstore is pay-by-ingested-data, you are charged for the storage usage and read traffic over the Internet after logs are delivered to Log Service. For more information, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode).
    

## **Limits**

-   The access logging feature is available only in regions that are supported by Log Service. For more information, see [Supported regions](/help/en/sls/sls-supported-regions1).
    
-   The access logging feature is available for only standard GA instances.
    
-   If an endpoint group is deployed on a point of presence (PoP) node of Alibaba Cloud, the access logs of the endpoint group cannot be collected.
    
-   You can directly enable the access logging feature only for GA instances that are created after January 8, 2022. If you want to enable the access logging feature for GA instances that are created before January 8, 2022, contact your sales manager.
