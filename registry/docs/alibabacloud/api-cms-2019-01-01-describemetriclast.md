Queries the latest monitoring data of a metric.

## Operation description

### [](#)Limits

-   The total free quota is 1 million calls per month for the DescribeMetricLast, DescribeMetricList, DescribeMetricData, and DescribeMetricTop operations. If the free quota is used up and CloudMonitor Basic (pay-as-you-go) is not activated, these API operations can no longer be called as expected. If you have activated CloudMonitor Basic (pay-as-you-go), these API operations can still be called even if the free quota is used up. After the free quota is used up, you are charged for the excess usage based on the pay-as-you-go billing method. For more information about how to activate CloudMonitor Basic (pay-as-you-go), see [Enable the pay-as-you-go billing method](https://common-buy-intl.alibabacloud.com/?spm=a2c4g.11186623.0.0.6c8f3481IbSHgG&commodityCode=cms_basic_public_cn&from_biz_channel=help_bill).
    
-   Each API operation can be called up to 50 times per second. An Alibaba Cloud account and the Resource Access Management (RAM) users within the account share the quota.
    

**Note**

If `Throttling.User` or `Request was denied due to user flow control` is returned when you call an API operation, the API operation is throttled. For more information about how to handle the issue, see [How do I handle the throttling of a query API?](/help/en/cms/cloudmonitor-1-0/support/how-do-i-handle-the-query-api-throttling-problem)

### [](#)Precautions

The storage duration of the monitoring data of each cloud service is related to the `Period` parameter (statistical period). A larger value of the `Period` parameter indicates that the monitoring data is distributed in a larger time range and the storage duration of the monitoring data is longer. The following list describes the specific relationships:

-   The storage duration is 7 days if the value of the `Period` parameter is less than 60 seconds.
    
-   The storage duration is 31 days if the value of the `Period` parameter is 60 seconds.
    
-   The storage duration is 91 days if the value of the `Period` parameter is greater than or equal to 300 seconds.
    

### [](#)Operation description

This topic provides an example on how to query the latest monitoring data of the `CPUUtilization` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The returned result indicates that the monitoring data for the instance `i-abcdefgh12****` of the account `123456789876****` is queried at an interval of 60 seconds. The maximum, minimum, and average values of the metric are 100, 93.1, and 99.52.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMetricLast)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMetricLast)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cms:QueryMetricLast

get

\*All Resource

`*`

None

None

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

For more information about the namespaces of cloud services, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

acs\_ecs\_dashboard

MetricName

string

Yes

The metric that is used to monitor the cloud service.

For more information about metric names, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

CPUUtilization

Period

string

No

The statistical period of the monitoring data.

Valid values: 15, 60, 900, and 3600.

Unit: seconds.

**Note**

-   If this parameter is not specified, monitoring data is queried based on the period in which metric values are reported. The statistical period of metrics (`MetricName`) varies for each cloud service. The statistical period of metrics is displayed in the `MinPeriods` column on the **Metrics** page for each cloud service. For more information, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).
    

60

StartTime

string

No

The start of the time range to query monitoring data.

2019-01-31 10:00:00

EndTime

string

No

The end of the time range to query monitoring data.

-   For second-level data, the start time is obtained by comparing the time that is specified by the StartTime parameter and 20 minutes earlier of the time that is specified by the EndTime parameter. The earlier one of the compared points in time is used as the start time.
    
-   For minute-level data, the start time is obtained by comparing the time that is specified by the StartTime parameter and 2 hours earlier of the time that is specified by the EndTime parameter. The earlier one of the compared points in time is used as the start time.
    
-   For hour-level data, the start time is obtained by comparing the time that is specified by the StartTime parameter and two days earlier of the time that is specified by the EndTime parameter. The earlier one of the compared points in time is used as the start time.
    

2019-01-31 10:10:00

Dimensions

string

No

The monitoring dimensions of the specified resource.

Set the value to a collection of `key:value` pairs. Example: `{"userId":"120886317861****"}` or `{"instanceId":"i-2ze2d6j5uhg20x47****"}`.

**Note**

You can query a maximum of 50 instances in each request.

\[{"instanceId":"i-2ze2d6j5uhg20x47\*\*\*\*"}\]

NextToken

string

No

The pagination token.

-   If the number of results exceeds the maximum number of entries allowed on a single page, a pagination token is returned.
    
-   This token can be used as an input parameter to obtain the next page of results. If all results are obtained, no token is returned.
    

15761432850009dd70bb64cff1f0fff6c0b08ffff073be5fb1e785e2b020f7fed9b5e137bd810a6d6cff5ae\*\*\*\*

Length

string

No

The number of entries per page.

Default value: 1000. This value indicates that a maximum of 1,000 entries of monitoring data can be returned on each page.

**Note**

The maximum value of the Length parameter for each request is 1440.

1000

Express

string

No

The expression that is used to calculate the query results in real time.

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

The pagination token.

xxxxxx

RequestId

string

The request ID.

021472A6-25E3-4094-8D00-BA4B6A5486C3

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
    
-   false
    

true

Datapoints

string

The monitoring data.

\[{"timestamp":1548777660000,"userId":"123456789876\*\*\*\*","instanceId":"i-abcdefgh12\*\*\*\*","Minimum":93.1,"Average":99.52,"Maximum":100}\]

Code

string

The HTTP status code.

**Note**

The status code 200 indicates that the request was successful.

200

Message

string

The error message.

The specified resource is not found.

Period

string

The time interval.

Unit: seconds.

60

## Examples

Success response

`JSON` format

```
{
  "NextToken": "xxxxxx",
  "RequestId": "021472A6-25E3-4094-8D00-BA4B6A5486C3",
  "Success": true,
  "Datapoints": "[{\"timestamp\":1548777660000,\"userId\":\"123456789876****\",\"instanceId\":\"i-abcdefgh12****\",\"Minimum\":93.1,\"Average\":99.52,\"Maximum\":100}]",
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

ParameterInvalid

Illegal parameters.

500

InternalError

The request processing has failed due to some unknown error.

403

AccessForbidden

User not authorized to operate on the specified resource.

404

ResourceNotFound

The specified resource is not found.

The specified resource is not found.

See [Error Codes](https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/DescribeMetricLast#workbench-doc-change-demo) for a complete list.
