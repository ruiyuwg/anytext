Alibaba Cloud CDN allows you to query resource usage so that you can monitor the status of resource consumption. Alibaba Cloud CDN supports multiple metrics. You can view and download resource usage data to check the performance of Alibaba Cloud CDN and resource plan capacity.

## Differences among resource usage query, resource monitoring, and real-time monitoring

-   Resource usage query: allows you to query metering data in billable regions by account or domain name.
-   Resource monitoring and real-time monitoring: collect data based on client IP addresses or Internet service providers (ISPs).

## How it works

You can use the following features to query usage data based on different filter conditions.

**Feature**

**Description**

**API operation**

[Query resource usage](/help/en/cdn/user-guide/query-resource-usage-1#task-2157363)

Queries the data transfer, bandwidth, number of HTTP requests, and the number of QUIC requests of domain names in specified regions based on filter conditions, including tags, time, domain names, and billable items.

**Note** If the metering method of Alibaba Cloud CDN is pay-by-95th-percentile-bandwidth, the system displays the estimated 95th percentile bandwidth values within the specified time range. The estimated 95th percentile bandwidth values are represented by a dotted line in the bandwidth chart. The estimated bandwidth values are for reference only. The actual bandwidth values in the bills that are issued on the first day of each month shall prevail. The bill of the current month is issued on the first day of the next month.

[DescribeDomainUsageData](/help/en/cdn/api-describedomainusagedata#doc-api-Cdn-DescribeDomainUsageData)

[Summarize resource usage](/help/en/cdn/user-guide/summarize-resource-usage#task-2152629)

Queries the resource usage data of all your accelerated domain names by day or by month. Usage data is categorized based on billable items.

-   [CreateUserUsageDataExportTask](/help/en/cdn/api-createuserusagedataexporttask#doc-api-Cdn-CreateUserUsageDataExportTask)
-   [DescribeUserUsageDataExportTask](/help/en/cdn/api-describeuserusagedataexporttask#doc-api-Cdn-DescribeUserUsageDataExportTask)
-   [DeleteUserUsageDataExportTask](/help/en/cdn/api-deleteuserusagedataexporttask#doc-api-Cdn-DeleteUserUsageDataExportTask)

[Export resource usage data](/help/en/cdn/user-guide/export-resource-usage-data#task-2152629)

Exports the resource usage data of all your accelerated domain names by day or by month to a PDF file. Usage data is categorized based on billable items.

-   [CreateUsageDetailDataExportTask](/help/en/cdn/api-createuserusagedataexporttask#doc-api-Cdn-CreateUserUsageDataExportTask)
-   [CreateUserUsageDataExportTask](/help/en/cdn/api-createusagedetaildataexporttask#doc-api-Cdn-CreateUsageDetailDataExportTask)

[Export billing details](/help/en/cdn/user-guide/export-billing-details#task-2157363)

Exports resource data based on filter conditions such as domain names, time, and accounts to an on-premises machine. You can check resource usage details in the exported file.

-   [CreateUserUsageDataExportTask](/help/en/cdn/api-createuserusagedataexporttask#doc-api-Cdn-CreateUserUsageDataExportTask)
-   [DescribeUserUsageDataExportTask](/help/en/cdn/api-describeuserusagedataexporttask#doc-api-Cdn-DescribeUserUsageDataExportTask)
-   [DeleteUserUsageDataExportTask](/help/en/cdn/api-deleteuserusagedataexporttask#doc-api-Cdn-DeleteUserUsageDataExportTask)

[Query the details of resource plans](/help/en/cdn/user-guide/query-the-details-of-resource-plans#task-2152632)

Queries resource plan details, including the resource plan name, total capacity, remaining capacity, effective time, expiration time, and status.

**Note** Data transfer plans cannot be used to offset request fees. If HTTPS is enabled, you must purchase resource plans for HTTPS requests to offset HTTPS request fees.

-   [DescribeCdnUserResourcePackage](/help/en/cdn/api-describecdnuserresourcepackage#doc-api-Cdn-DescribeCdnUserResourcePackage)
-   [DescribeDcdnUserResourcePackage](/help/en/doc-detail/131648.html#doc-api-dcdn-DescribeDcdnUserResourcePackage)
