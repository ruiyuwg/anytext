Simple Log Service and Cloud Config jointly launch the log delivery feature. You can use this feature to push historical configuration changes, noncompliance resource events, and scheduled snapshots from Cloud Config to Simple Log Service for storage, query, and analysis. This topic describes the assets and billing of the log delivery feature.

## **Assets**

-   Custom project and custom Logstore
    
    **Important**
    
    -   Before you delete a log delivery, do not delete the related Simple Log Service project and Logstore. Otherwise, logs cannot be delivered to Simple Log Service.
        
    -   When you create a custom Logstore, note that the billable items vary depending on the billing mode of the Logstore. For more information, see [Billable items](/help/en/sls/billing-item/).
        
    
-   Dedicated dashboard
    
    After you enable the log delivery feature of Cloud Config, Simple Log Service does not generate a dedicated dashboard. You can create a custom dashboard.
    

## **Billing**

-   You are not charged for using the log delivery feature of Cloud Config.
    
-   If the billing mode of a Logstore is pay-by-feature, you are charged based on the storage space, read traffic, number of requests, data transformation, and data shipping after Cloud Config logs are collected to Simple Log Service. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items).
    
-   If the billing mode of a Logstore is pay-by-ingested-data, you are charged based on storage space and read traffic over the Internet after Cloud Config logs are collected to Simple Log Service. For more information, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode).
