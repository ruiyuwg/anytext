Data transformation is a fully managed feature that provides high availability and scalability in Simple Log Service (SLS). Use the data transformation feature to standardize, enrich, transfer, mask, and filter data.

## Transformation process

SLS transforms data in three steps:

1.  A consumer group reads data from a source logstore.
    
2.  SLS transforms each data entry based on a transformation rule.
    
3.  SLS writes the transformed data to a destination logstore.
    
    After data is transformed, you can view the results in the destination logstore.
    

## Features

-   Data standardization: SLS can extract fields from logs in different formats and convert the log formats to obtain structured data for stream processing and computing in data warehouses.
    
-   Data enrichment: SLS can join the fields of logs and dimension tables to link logs with dimension information. For example, SLS can join the fields of order logs and a user information table. This facilitates data analysis.
    
-   Data transfer: SLS can transfer logs from regions outside the Chinese mainland to a central region by using the global acceleration feature. This helps you manage global logs in a centralized manner.
    
-   Data masking: SLS can mask sensitive information in data, such as passwords, mobile phone numbers, and addresses.
    
-   Data filtering: SLS can filter logs to obtain key service logs. This helps further analysis.
    

## Use cases

-   Data standardization: Log data is read from a source logstore, transformed, and then written to a destination logstore. ![数据规整](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5943749951/p51410.png)
    
-   Data transfer: Log data is read from a source logstore, transformed, and then written to multiple destination logstores.![数据分派](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5943749951/p51411.png)
    
-   Multi-source data aggregation: Log data is read from multiple source logstores, transformed, and then written to a destination logstore.![多源汇集](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5943749951/p51412.png)
    

## Transformation syntax

The domain-specific language (DSL) for SLS provides more than 200 built-in functions and more than 400 regular expressions. For more information, see [Syntax overview](/help/en/sls/user-guide/syntax-overview#concept-1130558).

## Benefits

-   Lets you use the DSL for SLS to orchestrate functions based on your business requirements. Use the orchestrated functions to filter, standardize, enrich, transfer, and mask data.
    
-   Processes data in real time and allows you to view data within seconds. The feature scales the computing capability based on the size of data and provides a high throughput.
    
-   Provides out-of-the-box functions, suitable for log analysis use cases.
    
-   Provides real-time dashboards, exception logs, and alerts.
    
-   Offers a fully-managed and maintenance-free service that can be integrated with big data services of Alibaba Cloud and open source ecosystems.
    

## Billing

-   If your logstores use the pay-by-ingested-data billing mode, you are not charged for data transformation. However, if data is pulled over a public SLS endpoint, you are charged for read traffic over the Internet. The traffic is calculated based on the size of data after compression. For more information, see [Billable items of pay-by-ingested-data](/help/en/sls/billing-items-in-the-pay-per-data-write-mode).
    

-   If your logstores use the pay-by-feature billing mode, you are charged for data transformation based on the machine and network resources that are consumed. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   You can disable the indexing feature for source logstores and shorten the data retention period of the logstores to reduce costs. For more information, see [Performance guide](/help/en/sls/performance-guide#concept-2055068) and [Cost optimization guide](/help/en/sls/cost-optimization-guide#concept-2055069).
