Simple Log Service provides the data shipping feature. This feature allows you to ship data to other Alibaba Cloud services, such as Object Storage Service (OSS) and MaxCompute, in the Simple Log Service console. This topic describes the concept, benefits, scenarios, and billing of the data shipping feature. This topic also describes the shipping destinations supported by the data shipping feature.

## Data shipping

After you use Simple Log Service to collect data, you can use the data shipping feature to ship the data to other Alibaba Cloud services in the Simple Log Service console. This way, you can store data or use other systems to consume data. After the data shipping feature is enabled, Simple Log Service regularly ships collected data to specified Alibaba Cloud services.

![Data shipping at the international site (alibabacloud.com)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6990098261/p286401.png)

## Scenarios

Data shipping is suitable for scenarios such as data storage and offline data analysis. Data is shipped at an interval of 5 to 30 minutes. The data retention periods vary based on the storage system that is used.

## Benefits

Data shipping provides the following benefits:

-   Ease of use
    
    You need only to complete simple configurations in the Simple Log Service console before you can ship data to other Alibaba Cloud services such as OSS.
    
-   Centralized data storage
    
    Simple Log Service stores log data that is collected from different machines. This way, you can ship log data to other Alibaba Cloud services such as OSS in a more efficient manner.
    
-   Data classification and management
    
    Simple Log Service supports data classification and management, which allows you to ship various types of data in different projects to other Alibaba Cloud services such as OSS and MaxCompute.
    

## Billing

-   If the billing mode of the related Logstore is pay-by-ingested-data, you are not charged for data shipping. For more information, see [Pay-by-ingested-data billing mode](/help/en/sls/billing-per-amount-of-data-written#main-2351526).
    
-   If the billing mode of the related Logstore is pay-by-feature, you are charged when you ship data based on multiple billable items, such as read and write traffic, data shipping, and requests. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    

## Shipping destinations

The following table describes the shipping destinations supported by Simple Log Service.

**Destination**

**Description**

OSS

Simple Log Service can ship data to OSS. For more information, see [Ship log data from Simple Log Service to OSS](/help/en/sls/ship-log-data-from-log-service-to-oss#task-1958310).

**Note**

We recommend that you use E-MapReduce to convert the data types of shipped data into data types supported by OSS. For more information, see [What is E-MapReduce?](/help/en/emr/emr-on-ecs/product-overview/what-is-e-mapreduce-on-ecs#concept-hcj-lgy-w2b).

MaxCompute

Simple Log Service allows you to ship data to MaxCompute by using the following methods:

-   Simple Log Service
    
    Use Simple Log Service to ship logs to MaxCompute. For more information, see [Ship logs to MaxCompute](/help/en/sls/ship-logs-to-maxcompute#t13184.html).
    
-   DataWorks
    
    Use Data Integration of DataWorks to ship data to Maxcompute. For more information, see [Use Data Integration to ship data collected by Simple Log Service to destinations](/help/en/dataworks/user-guide/use-data-integration-to-synchronize-data-from-loghub-to-a-destination#task-2353708).
    

Tablestore

Simple Log Service can use LogHub Shipper for Tablestore to ship data to Tablestore. For more information, see [Use LogHub Shipper for Tablestore to ship data collected by Simple Log Service to destinations](/help/en/tablestore/overview-7#concept-urh-1tt-lgb).
