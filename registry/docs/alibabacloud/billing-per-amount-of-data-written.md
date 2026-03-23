By default, Log Service uses a pay-as-you-go billing method, charging primarily for the volume of data ingested (raw size). The ingested data benefits from a 30-day free storage period, during which you can access features such as data transformation and data shipping at no extra cost. Additional charges apply only if the storage period exceeds 30 days or when data is read over the Internet.

## **Billing description**

The pay-as-you-go model, also known as postpaid, bills you for the actual resource usage. A bill is issued at the end of each billing cycle, with fees deducted from your account accordingly.

**Attribute**

**Description**

Billable items

The pay-by-ingested-data billing includes the following billable items:

-   [Ingested raw data volume](/help/en/sls/billing-items-in-the-pay-per-data-write-mode#5784f17001biq)
    
-   [Bucket - Log hot storage](/help/en/sls/billing-items-in-the-pay-per-data-write-mode#59bb8080019gw)
    
-   [Bucket - IA storage class](/help/en/sls/billing-items-in-the-pay-per-data-write-mode#5c5d7b9001i6y)
    
-   [Bucket - Archive Storage](/help/en/sls/billing-items-in-the-pay-per-data-write-mode#4f00b92c9b4zs)
    
-   [Internet read traffic](/help/en/sls/billing-items-in-the-pay-per-data-write-mode#5f12b08001mbt)
    
-   [Transfer acceleration](/help/en/sls/billing-items-in-the-pay-per-data-write-mode#21ad7b05bc6ei)
    
-   [Ingestion processor](/help/en/sls/billing-items-in-the-pay-per-data-write-mode#0b8c5e24225ul)
    

Billing cycle

The billing cycle of Log Service is **day**. The usage of each day is settled at midnight the next day, and the actual consumption amount is deducted from your account balance, while a bill is generated.

**Important**

If the total value of your account balance and the vouchers in your Alibaba Cloud account is less than the amount that you need to pay, you are notified by text message or email.

Pricing

For pricing information about the pay-by-ingested-data billing, see [Pricing](https://www.alibabacloud.com/product/log-service/pricing?spm=a3c0i.139163.9288850920.1.7690637avzyiqo).

Scenarios

The pay-by-ingested-data billing is mainly suitable for the following scenarios:

-   Scenarios where business usage frequently changes.
    
-   Scenarios where resource usage is temporary and bursty.
    
-   Scenarios with composite needs for long-term data retention, query analysis, traffic scrubbing, visualization, monitoring alert, and data flow.
    

Limits

The pay-by-ingested-data billing mode has certain [limits](/help/en/sls/logstore-quota).

-   The pay-by-ingested-data billing mode is effective at the **Logstore level**.
    
-   **Metricstore** and **Query specification Logstore** do not support the pay-by-ingested-data billing mode.
    
-   Switching from the [pay-by-feature billing](/help/en/sls/pay-as-you-go) mode to the pay-by-ingested-data billing mode is not supported.
    

## **Billing examples**

-   ### **Example 1**
    
    Customer A writes 10 TB of data to Simple Log Service daily, stores it for 30 days, and utilizes features like data transformation, query and analysis, Scheduled SQL, intelligent alerting, and data shipping. The table below details the billing:
    
    **Billable items**
    
    **Description**
    
    **Daily measurement**
    
    **Unit price**
    
    **Daily billing**
    
    Ingested raw data volume
    
    When data is uploaded to Simple Log Service, the ingested data volume is 10 TB.
    
    10 TB
    
    0.061 USD/GB
    
    624.64 USD
    
    Data storage
    
    The data retention period is 30 days.
    
    In pay-by-ingested-data billing mode, you are not charged for data storage within 30 days after the data is written to Simple Log Service.
    
    -   Hot storage: 0.002875 USD/GB/day
        
    -   IA storage class: 0.000762 USD/GB/day
        
    
    0 USD
    
-   ### **Example 2**
    
    Customer B writes 10 TB of data to Simple Log Service daily, generates 5 TB of storage, and stores it for 31 days, using features like data transformation, query and analysis, Scheduled SQL, intelligent alerting, and data shipping. Data stored beyond 30 days is transferred to the IA storage tier. The table below describes the billing:
    
    **Billable items**
    
    **Description**
    
    **Daily measurement**
    
    **Unit price**
    
    **Daily billing**
    
    Ingested raw data volume
    
    When data is uploaded to Simple Log Service, the ingested data volume is 10 TB.
    
    10 TB
    
    0.061 USD/GB
    
    624.64 USD
    
    Data storage
    
    The data retention period is 31 days, and 5 TB of data is stored in Log Service.
    
    In pay-by-ingested-data billing mode, you are not charged for data storage within 30 days after the data is written to Simple Log Service.
    
    On the 31st day, you are charged for the 5 TB of data that is moved to the IA storage tier.
    
    IA storage class: 0.000762 USD/GB/day
    
    3.90144 USD
