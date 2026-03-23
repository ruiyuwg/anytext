You can use Cloud Monitor Basic for free without activating the service.

The following table lists the free quotas provided by Cloud Monitor Basic.

**Item**

**Free quota**

**Description**

Alert text messages

1,000 messages/month

Sends an alert notification by text message when a metric meets its alert condition.

Only mobile numbers with the country code 86 support alert text messages.

**Important**

Alert text messages are supported starting from 10:00:00 on September 26, 2024 (UTC+8).

API calls to query metric data

1 million calls/month

The number of calls to the [DescribeMetricLast](/help/en/cms/cloudmonitor-1-0/api-describemetriclast-new#doc-api-Cms-DescribeMetricLast), [DescribeMetricList](/help/en/cms/cloudmonitor-1-0/api-describemetriclist-new#doc-api-Cms-DescribeMetricList), [DescribeMetricData](/help/en/cms/cloudmonitor-1-0/api-describemetricdata-ne#doc-api-Cms-DescribeMetricData), and [DescribeMetricTop](/help/en/cms/cloudmonitor-1-0/api-describemetrictop-new#doc-api-Cms-DescribeMetricTop) APIs. This does not include calls made from the console.

**Important**

-   If you use Cloud Monitor Basic for free, you cannot call these APIs after your free quota is used up.
    
-   Effective 00:00:00 on October 01, 2024 (UTC+8), the free quota is adjusted from 10 million calls per month to 1 million calls per month.
    

**Note**

If you have activated the [pay-as-you-go](/help/en/cms/cloudmonitor-1-0/product-overview/pay-as-you-go-1#concept-2243561) billing method for Cloud Monitor Basic and your usage exceeds the free quotas, the excess usage is automatically billed.
