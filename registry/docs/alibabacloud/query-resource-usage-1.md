Dynamic Route for CDN (DCDN) allows you to query the resource usage data of all your accelerated domain names by day or by month. Usage data is categorized based on billable items.

## Usage notes

The traffic usage of accelerated domain names that is queried by using the monitoring or resource usage feature available in the Alibaba Cloud DCDN console or by calling API operations differs from that collected in logs. Typically, the traffic usage of accelerated domain names that is queried by using the monitoring or resource usage feature is 1.1 times that collected in logs. For more information, see [Why is the actual billed network traffic different from the network traffic reported by the logging feature?](/help/en/edge-security-acceleration/dcdn/support/why-is-the-traffic-amount-found-by-using-the-monitoring-and-usage-analytics-feature-different-from-the-traffic-amount-that-is-logged#trouble-2320953)

## Query usage data by day or by month

**Note** You can query usage data up to the last 12 months.

-   Summarize usage data by day: You can query usage data of the current day or a day over the last 355 days.
-   Summarize usage data by month: You can query usage data of the current month or a month over the last 11 months.

1.  Log on to the [DCDN console](https://dcdn.console.alibabacloud.com/overview).
2.  In the left-side navigation pane, choose Data Center > Usage .
3.  Click the Usage Details tab.
4.  Select Query By Date or Query By Month from the drop-down list, set a time range to query, and then click Query.
    
    ![Query bills](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7805376461/p70280.png)
    

## Related API operations

 

Operation

Description

[DescribeDcdnUserBillHistory](/help/en/doc-detail/185023.html#doc-api-dcdn-DescribeDcdnUserBillHistory)

Queries the billing history of your Alibaba Cloud account.

[DescribeDcdnDomainUsageData](/help/en/doc-detail/284628.html#doc-api-dcdn-DescribeDcdnDomainUsageData)

Queries resource usage of specified domain names in a specified billable region.
