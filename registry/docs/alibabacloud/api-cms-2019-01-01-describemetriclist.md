The DescribeMetricList operation queries the monitoring data of a specific metric for a cloud service.

## Operation description

### Limits

-   You have a free quota of 1 million total API calls per month for the DescribeMetricLast, DescribeMetricList, DescribeMetricData, and DescribeMetricTop operations. If you use up the free quota and have not enabled the pay-as-you-go billing method for CloudMonitor Basic, you can no longer use these API operations. If you have enabled the pay-as-you-go billing method, you can continue to use the API operations after the free quota is used up. API calls that exceed the free quota are automatically charged on a pay-as-you-go basis. For more information, see [Enable pay-as-you-go](https://common-buy-intl.alibabacloud.com/?spm=a2c4g.11186623.0.0.6c8f3481IbSHgG&commodityCode=cms_basic_public_cn&from_biz_channel=help_bill).
    
-   You can call each API operation up to 50 times per second. This limit is shared between an Alibaba Cloud account and its RAM users.
    

**Note**

If you receive the `Throttling.User` or `Request was denied due to user flow control` error message when you call an API operation, the API call is throttled. For more information, see [How do I resolve an API call throttling issue?](/help/en/cms/cloudmonitor-1-0/support/how-do-i-handle-the-query-api-throttling-problem).

### Notes

The storage duration of monitoring data for a cloud service depends on the `Period` (statistical period). A larger `Period` value indicates that the monitoring data is less granular and is stored for a longer period. The relationship is as follows:

-   If the value of `Period` is less than 60 seconds, the storage duration is 7 days.
    
-   If the value of `Period` is 60 seconds, the storage duration is 31 days.
    
-   If the value of `Period` is 300 seconds or greater, the storage duration is 91 days.
    

### Usage notes

This topic provides an example of how to query the monitoring data of the `cpu_idle` metric for the `acs_ecs_dashboard` cloud service. The response shows the data for the instance `i-abcdefgh12****`, which belongs to the Alibaba Cloud account `120886317861****`. At a 60 second interval, the maximum, minimum, and average values of the metric are 100, 93.1, and 99.52, respectively.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMetricList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMetricList)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Namespace

string

Yes

The namespace of the cloud service.

For more information, see [Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

acs\_ecs\_dashboard

MetricName

string

Yes

The name of the metric.

For more information, see [Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

cpu\_idle

Period

string

No

The statistical period of the monitoring data.

Valid values: 15, 60, 900, and 3600.

Unit: seconds.

**Note**

-   If you do not set this parameter, the reporting period that was specified when the metric was registered is used.
    

-   The statistical period of each metric (`MetricName`) of a cloud service is different. For more information, see [Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).
    

60

StartTime

string

No

The beginning of the time range to query. The following formats are supported:

-   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970.
    
-   Format: YYYY-MM-DD hh:mm:ss.
    

**Note**

-   The time range is a left-open and right-closed interval. The value of \`StartTime\` must be earlier than the value of \`EndTime\`.
    

-   The interval between \`StartTime\` and \`EndTime\` must be less than or equal to 31 days.
    

2019-01-30 00:00:00

EndTime

string

No

The end of the time range to query. The following formats are supported:

-   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 UTC on January 1, 1970.
    
-   Format: YYYY-MM-DD hh:mm:ss.
    

**Note**

The interval between \`StartTime\` and \`EndTime\` must be less than or equal to 31 days.

2019-01-30 00:10:00

Dimensions

string

No

The dimensions that specify the resources to be monitored.

Format: a collection of key-value pairs, such as `{"userId":"120886317861****"}` and `{"instanceId":"i-2ze2d6j5uhg20x47****"}`.

**Note**

A single request can be used to query a maximum of 50 instances.

\[{"instanceId":"i-2ze2d6j5uhg20x47\*\*\*\*"}\]

NextToken

string

No

The pagination cursor.

**Note**

If you do not set this parameter, the first page of data is returned. If a value is returned for this parameter, it indicates that more data is available. To retrieve the next page, use the returned value as the \`NextToken\` in your next request. A null value indicates that all data has been retrieved.

15761485350009dd70bb64cff1f0fff750b08ffff073be5fb1e785e2b020f1a949d5ea14aea7fed82f01dd8\*\*\*\*

Length

string

No

The number of entries to return on each page for a paged query.

**Note**

The maximum value of \`Length\` in a single request is 1440.

1000

Express

string

No

The expression that is used for real-time computing based on the query results.

**Note**

Only the groupby expression is supported. This expression is similar to the GROUP BY statement in databases.

{"groupby":\["userId","instanceId"\]}

For more information about common request parameters, see [Common parameters](/help/en/cms/developer-reference/common-parameters).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

NextToken

string

The pagination cursor.

15761441850009dd70bb64cff1f0fff6d0b08ffff073be5fb1e785e2b020f7fed9b5e137bd810a6d6cff5ae\*\*\*\*

RequestId

string

The request ID.

3121AE7D-4AFF-4C25-8F1D-C8226EBB1F42

Success

boolean

Indicates whether the operation was successful. Valid values:

-   true: The operation was successful.
    
-   false: The operation failed.
    

true

Datapoints

string

The list of monitoring data.

\[{"timestamp":1548777660000,"userId":"120886317861\*\*\*\*","instanceId":"i-abc","Minimum":9.92,"Average":9.92,"Maximum":9.92}\]

Code

string

The status code.

**Note**

A value of 200 indicates that the call was successful.

200

Message

string

The error message.

The specified resource is not found.

Period

string

The statistical period. Unit: seconds. Valid values: 60, 300, and 900.

60

## Examples

Success response

`JSON` format

```
{
  "NextToken": "15761441850009dd70bb64cff1f0fff6d0b08ffff073be5fb1e785e2b020f7fed9b5e137bd810a6d6cff5ae****",
  "RequestId": "3121AE7D-4AFF-4C25-8F1D-C8226EBB1F42",
  "Success": true,
  "Datapoints": "[{\"timestamp\":1548777660000,\"userId\":\"120886317861****\",\"instanceId\":\"i-abc\",\"Minimum\":9.92,\"Average\":9.92,\"Maximum\":9.92}]",
  "Code": "200",
  "Message": "The specified resource is not found.",
  "Period": "60"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

%s

%s

500

InternalError

The request processing has failed due to some unknown error.

403

%s

%s

404

ResourceNotFound

The specified resource is not found.

The specified resource is not found.

See [Error Codes](https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/DescribeMetricList#workbench-doc-change-demo) for a complete list.
