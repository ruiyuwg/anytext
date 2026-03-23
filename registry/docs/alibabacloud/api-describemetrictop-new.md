Queries the latest monitoring data of a metric for a cloud service. The data can be sorted by a specified order.

## Operation description

### [](#)Limits

-   The total free quota is 1 million calls per month for the DescribeMetricLast, DescribeMetricList, DescribeMetricData, and DescribeMetricTop operations. If the free quota is used up and CloudMonitor Basic (pay-as-you-go) is not activated, these API operations can no longer be called as expected. If you have activated CloudMonitor Basic (pay-as-you-go), these API operations can still be called even if the free quota is used up. After the free quota is used up, you are charged for the excess usage based on the pay-as-you-go billing method. For more information about how to activate CloudMonitor Basic (pay-as-you-go), see [Enable the pay-as-you-go billing method](https://common-buy-intl.alibabacloud.com/?spm=a2c4g.11186623.0.0.6c8f3481IbSHgG&commodityCode=cms_basic_public_cn&from_biz_channel=help_bill).
    
-   Each API operation can be called up to 10 times per second. An Alibaba Cloud account and the Resource Access Management (RAM) users within the account share the quota.
    

### [](#)Precautions

The storage duration of the monitoring data of each cloud service is related to the `Period` parameter (statistical period). A larger value of the `Period` parameter indicates that the monitoring data is distributed in a larger time range and the storage duration of the monitoring data is longer. The following list describes the specific relationships:

-   The storage duration is 7 days if the value of the `Period` parameter is less than 60 seconds.
    
-   The storage duration is 31 days if the value of the `Period` parameter is 60 seconds.
    
-   The storage duration is 91 days if the value of the `Period` is greater than or equal to 300 seconds.
    

### [](#)Operation description

This topic provides an example on how to query the monitoring data of the `cpu_idle` metric in the last 60 seconds for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The monitoring data is sorted in descending order based on the `Average` field.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMetricTop)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMetricTop)

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

cms:QueryMetricTop

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

Period

string

No

The statistical period of the monitoring data.

Valid values: 15, 60, 900, and 3600.

Unit: seconds.

**Note**

-   If this parameter is not specified, monitoring data is queried based on the period in which metric values are reported.
    
-   Statistical periods vary based on the metrics that are specified by `MetricName`. For more information, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).
    

60

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

cpu\_idle

StartTime

string

No

The start of the time range to query monitoring data.

-   If the `StartTime` and `EndTime` parameters are not specified, the monitoring data of the last statistical period is queried.\`\`
    
-   If the `StartTime` and `EndTime` parameters are specified, the monitoring data of the last statistical period in the specified time range is queried.\`\`\`\`
    
    -   If you set the `Period` parameter to 15, the specified time range must be less than or equal to 20 minutes. For example, if you set the StartTime parameter to 2021-05-08 08:10:00 and the EndTime parameter to 2021-05-08 08:30:00, the monitoring data of the last 15 seconds in the time range is queried.
        
    -   If you set the `Period` parameter to 60 or 900, the specified time range must be less than or equal to 2 hours. For example, if you set the Period parameter to 60, the StartTime parameter to 2021-05-08 08:00:00, and the EndTime parameter to 2021-05-08 10:00:00, the monitoring data of the last 60 seconds in the time range is queried.
        
    -   If you set the `Period` parameter to 3600, the specified time range must be less than or equal to two days. For example, if you set the StartTime parameter to 2021-05-08 08:00:00 and the EndTime parameter to 2021-05-10 08:00:00, the monitoring data of the last 3,600 seconds in the time range is queried.
        

The following formats are supported:

-   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 Thursday, January 1, 1970
    
-   Time format: YYYY-MM-DDThh:mm:ssZ
    

**Note**

-   You must set the `StartTime` parameter to a point in time that is later than 00:00:00 Thursday, January 1, 1970. Otherwise, this parameter is invalid.
    
-   We recommend that you use UNIX timestamps to prevent time zone-related issues.
    

2021-05-08 08:00:00

EndTime

string

No

The end of the time range to query monitoring data.

-   If the `StartTime` and `EndTime` parameters are not specified, the monitoring data of the last statistical period is queried.\`\`
    
-   If the `StartTime` and `EndTime` parameters are specified, the monitoring data of the last statistical period in the specified time range is queried.\`\`\`\`
    
    -   If you set the `Period` parameter to 15, the specified time range must be less than or equal to 20 minutes. For example, if you set the StartTime parameter to 2021-05-08 08:10:00 and the EndTime parameter to 2021-05-08 08:30:00, the monitoring data of the last 15 seconds in the time range is queried.
        
    -   If you set the `Period` parameter to 60 or 900, the specified time range must be less than or equal to 2 hours. For example, if you set the Period parameter to 60, the StartTime parameter to 2021-05-08 08:00:00, and the EndTime parameter to 2021-05-08 10:00:00, the monitoring data of the last 60 seconds in the time range is queried.
        
    -   If you set the `Period` parameter to 3600, the specified time range must be less than or equal to two days. For example, if you set the StartTime parameter to 2021-05-08 08:00:00 and the EndTime parameter to 2021-05-10 08:00:00, the monitoring data of the last 3,600 seconds in the time range is queried.
        

The following formats are supported:

-   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 Thursday, January 1, 1970
    
-   Time format: YYYY-MM-DDThh:mm:ssZ
    

**Note**

We recommend that you use UNIX timestamps to prevent time zone-related issues.

2021-05-08 10:00:00

Dimensions

string

No

The monitoring dimensions of the specified resource.

Set the value to a collection of `key:value` pairs. Example: `{"userId":"120886317861****"}` or `{"instanceId":"i-2ze2d6j5uhg20x47****"}`.

**Note**

You can query a maximum of 50 instances in each request.

\[{"instanceId": "i-2ze2d6j5uhg20x47\*\*\*\*"}\]

Orderby

string

Yes

The field based on which data is sorted. Valid values:

-   Average
    
-   Minimum
    
-   Maximum
    

Average

OrderDesc

string

No

The order in which data is sorted. Valid values:

-   True: sorts data in ascending order.
    
-   False (default): sorts data in descending order.
    

false

Length

string

No

The number of entries per page.

Default value: 10.

**Note**

The maximum value of the Length parameter in a request is 1440.

10

Express

string

No

The expression that is used to compute the query results in real time.

**Note**

Only the `groupby` expression is supported. This expression is similar to the GROUP BY statement used in databases.

{"groupby":\["userId","instanceId"\]}

For more information about common request parameters, see [Common parameters](/help/en/cms/developer-reference/common-parameters).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

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

RequestId

string

The request ID.

3121AE7D-4AFF-4C25-8F1D-C8226EBB1F42

Datapoints

string

The monitoring data.

\[{\\"order\\":1,\\"timestamp\\":1620287520000,\\"userId\\":\\"120886317861\*\*\*\*\\",\\"instanceId\\":\\"i-j6ccf7d5fn335qpo\*\*\*\*\\",\\"Average\\":99.92,\\"Minimum\\":99.5,\\"Maximum\\":100.0,\\"\_count\\":1.0},{\\"order\\":2,\\"timestamp\\":1620287520000,\\"userId\\":\\"120886317861\*\*\*\*\\",\\"instanceId\\":\\"i-0xii2bvf42iqvxbp\*\*\*\*\\",\\"Average\\":99.91,\\"Minimum\\":99.0,\\"Maximum\\":100.0,\\"\_count\\":1.0}\]

Period

string

The statistical period of the monitoring data. Unit: seconds. Valid values: 15, 60, 900, and 3600.

60

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
  "Message": "The specified resource is not found.",
  "RequestId": "3121AE7D-4AFF-4C25-8F1D-C8226EBB1F42",
  "Datapoints": "[{\\\"order\\\":1,\\\"timestamp\\\":1620287520000,\\\"userId\\\":\\\"120886317861****\\\",\\\"instanceId\\\":\\\"i-j6ccf7d5fn335qpo****\\\",\\\"Average\\\":99.92,\\\"Minimum\\\":99.5,\\\"Maximum\\\":100.0,\\\"_count\\\":1.0},{\\\"order\\\":2,\\\"timestamp\\\":1620287520000,\\\"userId\\\":\\\"120886317861****\\\",\\\"instanceId\\\":\\\"i-0xii2bvf42iqvxbp****\\\",\\\"Average\\\":99.91,\\\"Minimum\\\":99.0,\\\"Maximum\\\":100.0,\\\"_count\\\":1.0}]",
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

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/DescribeMetricTop#workbench-doc-change-demo) for a complete list.
