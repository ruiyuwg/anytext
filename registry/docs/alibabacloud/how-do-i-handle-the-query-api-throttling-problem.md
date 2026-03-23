If the `Throttling.User` or `Request was denied due to user flow control` message is returned after you call the [DescribeMetricLast](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetriclast) or [DescribeMetricList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetriclist) operation, the API requests that you can send are throttled. This topic describes the cause and solution of API throttling.

## **Cause**

The maximum queries per second (QPS) of the [DescribeMetricLast](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetriclast) and [DescribeMetricList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetriclist) operations are 50. If the QPS exceeds 50, the API requests that you can send are throttled.

## **Query the peak QPS**

-   For information about how to query API rate limits, visit the [API Rate Limits](https://quotas.console.alibabacloud.com/flow-control-products/cms/quotas) page of the Quota Center console.
    
    On the **API Rate Limits** page, you can view the API rate limits and peak QPS of the [DescribeMetricLast](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetriclast) and [DescribeMetricList](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-describemetriclist) operations.
    
-   For information about how to query the usage of API rate limits and calculate the peak usage, visit the [OpenApi](https://cloudmonitor.console.alibabacloud.com/productMonitorChart?category=openapi&dimension=productName%3ACms&region=all) page of the CloudMonitor console.
    
    In the **QuotaUsage(%)** chart, find the peak usage and calculate the peak QPS. Assume that the API rate limit is 50 and the peak usage is 5%. The peak QPS is calculated based on the following formula: 50 × 0.05 = 2.5.
    

## **Solution**

1.  Query multiple metrics at a time.
    
    Assume that you want to query the metrics of 50 Elastic Compute Service (ECS) instances. We recommend that you set the request parameter `Dimensions` to `[{"instanceId":"Instance A"},{"instanceId":"Instance B"}]`.
    
    **Note**
    
    You can query a maximum of 50 instances in a single request.
    
2.  You can averagely call API operations to reduce the peak QPS.
    
    Assume that you want to query the metrics of 10 cloud services every 10 seconds. Each service has 10 metrics. If all metrics are queried at the same time, the QPS is 100. If the metrics are averagely queried within 10 seconds, the QPS is 10.
    
3.  If you want to export real-time monitoring data, we recommend that you call the BatchExport operation.
    
    The [BatchExport](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-batchexport) operation provides low cost, low latency, and high reliability. The QPS is 1,000.
    
4.  If the issue persists, [submit a ticket](https://smartservice.console.alibabacloud.com) to CloudMonitor.
