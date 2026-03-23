You are separately charged for the billable items of Simple Log Service (SLS) pay-by-ingested-data. For example, if you upload and store logs, you are charged a log write fee and a log storage fee. This topic describes the billable items of pay-by-ingested-data and the fee calculation for each item.

## Usage notes

-   You can log on to the [Simple Log Service console](https://sls.console.alibabacloud.com) to view the write traffic, read traffic, and storage usage of the previous day.
    
-   In the SAU (Riyadh - Partner Region) region, you cannot use resource plans to offset the fees of billable items of pay-by-ingested-data.
    

## Introduction to OCUs

Observability Capacity Units (OCUs) are a new billing unit used on Alibaba Cloud Cloud Native Observability Platform. The number of OCUs is automatically calculated based on the resource usage per hour.

Alibaba Cloud plans to gradually implement metered billing on the compute-intensive capabilities of Simple Log Service. The billing unit is OCUs, which measure the actual usage of computing resources. An OCU can be used to offset the fee of 0.5 CPU cores, 2 GB of memory, or 3,000 IOPS. During fee calculation, the system calculates the numbers of OCUs based on the number of consumed cores, size of consumed memory, and IOPS consumption. Then, the system uses the largest number for billing.

For example, a compute job consumes 1 core, 2 GB of memory, and 3,000 IOPS. In this example, 2 OCUs are consumed. In a billing cycle of 1 hour, approximately one-third of the OCUs are consumed when an ingest processor processes 1 GB of data. Then, about one-third of the OCUs are consumed when the new version of data transformation processes 1 GB of data. Approximately 0.3 OCUs are consumed when rule-based data consumption processes 1 GB of data.

## **Billable items**

The following table describes the billable items of pay-by-ingested-data. For more information, visit [Pricing of Simple Log Service](https://www.alibabacloud.com/product/log-service/pricing?spm=a3c0i.139163.9288850920.1.7690637avzyiqo).

**Billable item**

**Description**

**Fee calculation**

**Free quota**

Ingested raw data volume

When data is uploaded to SLS, the data is compressed. The ingested raw data volume is the size of raw data that is uploaded to SLS.

-   Pay-as-you-go: Daily fee of ingested raw data volume = Total volume of ingested raw data per day in GB × Price per GB of raw data.
    
-   Resource plan (Subscription Plan): Cost units (CUs) are used to offset the fee of the billable item.
    

None

Storage usage of the hot storage tier

The storage usage of the hot storage tier is the total size of compressed log data and indexes that are created on raw log data. You are charged for data storage 30 days after the data is stored.

For example, the size of raw log data that is uploaded to SLS is 1 GB, and indexes are created for two fields. The compression ratio is 5:1 when the raw log data is uploaded, and the size of the indexes is 0.5 GB. In this example, the storage usage of the hot storage tier is calculated by using the following formula: 0.2 GB + 0.5 GB = 0.7 GB.

-   Pay-as-you-go: Daily fee of the storage usage of the hot storage tier = Storage usage per day in GB × Price per GB of log data.
    
-   Resource plan (Subscription Plan): CUs are used to offset the fee of the billable item.
    

None

Storage usage of the IA storage tier

If you enable the intelligent tiered storage feature, logs are moved from the hot storage tier to the IA storage tier (formerly the cold storage tier) after the specified **data retention period for the hot storage tier** ends. In this case, you are charged based on the storage usage of the IA storage tier. The storage usage of the IA storage tier is the total size of compressed log data and indexes that are created on raw log data.

For example, the size of raw log data that is uploaded to SLS is 1 GB, and indexes are created for two fields. The compression ratio is 5:1 when the raw log data is uploaded, and the size of the indexes is 0.5 GB. In this example, the storage usage of the IA storage tier is calculated by using the following formula: 0.2 GB + 0.5 GB = 0.7 GB.

-   Pay-as-you-go: Daily fee of the storage usage of the IA storage tier = Storage usage per day in GB × Price per GB of log data.
    
-   Resource plan (Subscription Plan): CUs are used to offset the fee of the billable item.
    

None

Storage usage of the Archive storage tier

If you enable the intelligent tiered storage feature, logs are moved to the Archive storage tier after the specified **data retention period for the hot storage tier** or **data retention period for the IA storage tier** ends. In this case, you are charged based on the storage usage of the Archive storage tier. The storage usage of the Archive storage tier is the total size of compressed log data and indexes that are created on raw log data.

For example, the size of raw log data that is uploaded to SLS is 1 GB, and indexes are created for two fields. The compression ratio is 5:1 when the raw log data is uploaded, and the size of the indexes is 0.5 GB. In this example, the storage usage of the Archive storage tier is calculated by using the following formula: 0.2 GB + 0.5 GB = 0.7 GB.

-   Pay-as-you-go: Daily fee of the storage usage of the Archive storage tier = Storage usage per day × Price per GB of log data.
    
-   Resource plan (Subscription Plan): CUs are used to offset the fee of the billable item.
    

None

Read traffic over the Internet

If data is pulled over a public SLS endpoint, read traffic over the Internet is generated. The traffic is calculated based on the size of data after compression.

-   Pay-as-you-go: Daily fee of read traffic over the Internet = Read traffic over the Internet per day × Price per GB of read traffic over the Internet.
    
-   Resource plan (Subscription Plan): CUs are used to offset the fee of the billable item.
    

None

Transfer acceleration

The fee is calculated based on the inbound and outbound traffic generated through the transfer acceleration domain. Transfer acceleration is measured based on the actual amount of data transmitted. In data upload scenarios where data compression is applied, the traffic is calculated based on the compressed data volume.

For more information, see [Use the transfer acceleration feature](/help/en/sls/transmission-acceleration).

-   Pay-as-you-go: Transfer acceleration fee = Inbound and outbound traffic generated by transfer acceleration × Price per GB
    

None

Ingest processor

To process data (such as data filtering, field extraction, field extension, and data masking) before writing it into a logstore, use an ingest processor. The ingest processor is billed based on the amount of computational resources consumed during data processing. The billing unit is OCU.

You can estimate the average OCU consumption during a 1-hour measurement period as follows: processing 1 GB of data with the ingest processor consumes about 1/3 of an OCU.

-   Pay-as-you-go: Ingest processor fee = OCUs consumed by ingest processor × Price per OCU
    

None
