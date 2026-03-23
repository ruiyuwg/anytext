Queries the monitoring data of a metric for a cloud service.

## Operation description

### [](#)Limits

-   The total free quota is 1 million calls per month for the DescribeMetricLast, DescribeMetricList, DescribeMetricData, and DescribeMetricTop operations. If the free quota is used up and CloudMonitor Basic (pay-as-you-go) is not activated, these API operations can no longer be called as expected. If you have activated CloudMonitor Basic (pay-as-you-go), these API operations can still be called even if the free quota is used up. If the free quota is used up, you are automatically charged for the excess usage based on the pay-as-you-go billing method. For more information about how to activate CloudMonitor Basic (pay-as-you-go), see [Enable the pay-as-you-go billing method](https://common-buy-intl.alibabacloud.com/?spm=a2c4g.11186623.0.0.6c8f3481IbSHgG&commodityCode=cms_basic_public_cn&from_biz_channel=help_bill).
    
-   Each API operation can be called up to 10 times per second. An Alibaba Cloud account and the Resource Access Management (RAM) users within the account share the quota.
    

### [](#)Description

**Note**

Different from [DescribeMetricList](/help/en/cms/cloudmonitor-1-0/api-describemetriclist-new), the DescribeMetricData operation provides statistical features. You can set the Dimension parameter to `{"instanceId": "i-abcdefgh12****"}` to aggregate all data of your Alibaba Cloud account.

This topic provides an example on how to query the monitoring data of the `cpu_idle` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMetricData)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMetricData)

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

cms:QueryMetricData

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

For more information about the metrics of cloud services, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

cpu\_idle

Period

string

No

The statistical period of the metric.

Valid values: 15, 60, 900, and 3600.

Unit: seconds.

**Note**

-   If this parameter is not specified, monitoring data is queried based on the period in which metric values are reported.
    
-   For more information about the statistical period of a metric that is specified by the `MetricName` parameter, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).
    

60

StartTime

string

No

The start of the time range to query monitoring data.

-   If the `StartTime` and `EndTime` parameters are not specified, the monitoring data of the last statistical period is queried.\`\`
    
-   If the `StartTime` and `EndTime` parameters are specified, the monitoring data of the last statistical period in the specified time range is queried.\`\`\`\` The following examples demonstrate how to determine the period in which monitoring data is queried:
    
    -   If you set the `Period` parameter to 15, the specified time range must be less than or equal to 20 minutes. For example, if you set the StartTime parameter to 2021-05-08 08:10:00 and the EndTime parameter to 2021-05-08 08:30:00, the monitoring data of the last 15 seconds in the time range is queried.
        
    -   If you set the `Period` to 60 or 900, the specified time range must be less than or equal to 2 hours. For example, if you set the Period parameter to 60, the StartTime parameter to 2021-05-08 08:00:00, and the EndTime parameter to 2021-05-08 10:00:00, the monitoring data of the last 60 seconds in the time range is queried.
        
    -   If you set the `Period` parameter to 3600, the specified time range must be less than or equal to 2 days. For example, if you set the StartTime parameter to 2021-05-08 08:00:00 and the EndTime parameter to 2021-05-10 08:00:00, the monitoring data of the last 3,600 seconds in the time range is queried.
        

The following formats are supported:

-   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 UTC on Thursday, January 1, 1970.
    
-   UTC time: the UTC time that follows the YYYY-MM-DDThh:mm:ssZ format.
    

**Note**

-   You must set the `StartTime` parameter to a point in time that is later than 00:00:00 UTC on Thursday, January 1, 1970. Otherwise, this parameter is invalid.
    
-   We recommend that you use UNIX timestamps to prevent time zone-related issues.
    

1618368900000

EndTime

string

No

The end of the time range to query monitoring data.

-   If the `StartTime` and `EndTime` parameters are not specified, the monitoring data of the last statistical period is queried.\`\`
    
-   If the `StartTime` and `EndTime` parameters are specified, the monitoring data of the last statistical period in the specified time range is queried.\`\`\`\` The following examples demonstrate how to determine the period in which monitoring data is queried:
    
    -   If you set the `Period` parameter to 15, the specified time range must be less than or equal to 20 minutes. For example, if you set the StartTime parameter to 2021-05-08 08:10:00 and the EndTime parameter to 2021-05-08 08:30:00, the monitoring data of the last 15 seconds in the time range is queried.
        
    -   If you set the `Period` to 60 or 900, the specified time range must be less than or equal to 2 hours. For example, if you set the Period parameter to 60, the StartTime parameter to 2021-05-08 08:00:00, and the EndTime parameter to 2021-05-08 10:00:00, the monitoring data of the last 60 seconds in the time range is queried.
        
    -   If you set the `Period` parameter to 3600, the specified time range must be less than or equal to 2 days. For example, if you set the StartTime parameter to 2021-05-08 08:00:00 and the EndTime parameter to 2021-05-10 08:00:00, the monitoring data of the last 3,600 seconds in the time range is queried.
        

The following formats are supported:

-   UNIX timestamp: the number of milliseconds that have elapsed since 00:00:00 UTC on Thursday, January 1, 1970.
    
-   UTC time: the UTC time that follows the YYYY-MM-DDThh:mm:ssZ format.
    

**Note**

We recommend that you use UNIX timestamps to prevent time zone-related issues.

1618368960000

Dimensions

string

No

The dimensions based on which the resources are queried.

Set the value to a collection of key-value pairs. A typical key-value pair is `instanceId:i-2ze2d6j5uhg20x47****`.

**Note**

You can query a maximum of 50 instances in a single request.

\[{"instanceId": "i-abcdefgh12\*\*\*\*"}\]

Express

string

No

The expression that is used to compute the query results in real time.

**Note**

Only the `groupby` expression is supported. This expression is similar to the `GROUP BY` statement that is used in databases.

{"groupby":\["userId","instanceId"\]}

Length

string

No

The number of entries per page.

Default value: 1000.

**Note**

The maximum value of the Length parameter in a request is 1440.

1000

For more information about common request parameters, see [Common parameters](/help/en/cms/developer-reference/common-parameters).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

None.

Code

string

The HTTP status code.

**Note**

The status code 200 indicates that the request was successful.

200

Message

string

The returned message.

The specified resource is not found.

RequestId

string

The request ID.

6A5F022D-AC7C-460E-94AE-B9E75083D027

Datapoints

string

The monitoring data. The value includes the following fields:

-   `timestamp`: the time when the alert was triggered.
    
-   `userId`: the ID of the user for which the alert was triggered.
    
-   `instanceId`: the ID of the instance for which the alert was triggered.
    
-   `Minimum`, `Average`, and `Maximum`: the aggregation methods.
    

\[{\\"timestamp\\":1618368900000,\\"Average\\":95.8291666666667,\\"Minimum\\":65.48,\\"Maximum\\":100.0},{\\"timestamp\\":1618368960000,\\"Average\\":95.8683333333333,\\"Minimum\\":67.84,\\"Maximum\\":100.0}\]

Period

string

The statistical period of the monitoring data.

Valid values: 15, 60, 900, and 3600.

Unit: seconds.

60

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
  "Message": "The specified resource is not found.",
  "RequestId": "6A5F022D-AC7C-460E-94AE-B9E75083D027",
  "Datapoints": "[{\\\"timestamp\\\":1618368900000,\\\"Average\\\":95.8291666666667,\\\"Minimum\\\":65.48,\\\"Maximum\\\":100.0},{\\\"timestamp\\\":1618368960000,\\\"Average\\\":95.8683333333333,\\\"Minimum\\\":67.84,\\\"Maximum\\\":100.0}]",
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

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/DescribeMetricData#workbench-doc-change-demo) for a complete list.
