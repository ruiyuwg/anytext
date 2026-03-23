Call the PutGroupMetricRule operation to create or modify an alert rule in a specified application group.

## Operation description

This topic provides an example of how to create an alert rule for the `cpu_total` metric of Elastic Compute Service (ECS) in the application group `17285****`. The ID of the alert rule is `123456`, the name of the alert rule is `Rule_test`, the alert level is `Critical`, the statistical method is `Average`, the comparison operator is `GreaterThanOrEqualToThreshold`, the threshold is `90`, and the number of retries is `3`. The response shows that the alert rule with the ID `123456` is created.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/PutGroupMetricRule)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/PutGroupMetricRule)

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

cms:PutGroupMetricRule

create

\*GroupMetricRule

`acs:cms::{#accountId}:group/{#groupId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

GroupId

string

Yes

The ID of the application group.

For more information about how to obtain the ID of an application group, see [DescribeMonitorGroups](/help/en/cms/cloudmonitor-1-0/api-describemonitorgroups).

17285\*\*\*\*

RuleId

string

Yes

The ID of the alert rule.

-   If you create an alert rule for the application group, enter an ID for the alert rule.
    
-   If you modify an alert rule for the application group, you must obtain the ID of the alert rule. For more information about how to obtain the ID of an alert rule, see [DescribeMetricRuleList](/help/en/cms/cloudmonitor-1-0/api-describemetricrulelist).
    

123456

Category

string

No

The abbreviation of the cloud service name.

For more information about how to obtain the abbreviation of a cloud service name, see the `metricCategory` field in the `Labels` parameter that is returned by the [DescribeProjectMeta](/help/en/cms/cloudmonitor-1-0/api-describeprojectmeta) operation.

ECS

RuleName

string

Yes

The name of the alert rule.

-   If you create an alert rule for the application group, enter a name for the alert rule.
    
-   If you modify an alert rule for the application group, you must obtain the name of the alert rule. For more information about how to obtain the name of an alert rule, see [DescribeMetricRuleList](/help/en/cms/cloudmonitor-1-0/api-describemetricrulelist).
    

Rule\_01

Namespace

string

Yes

The namespace of the cloud service.

For more information about how to obtain the namespace of a cloud service, see [DescribeMetricMetaList](/help/en/cms/cloudmonitor-1-0/api-describemetricmetalist) or [Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

acs\_ecs\_dashboard

MetricName

string

Yes

The name of the metric.

For more information about how to obtain the name of a metric, see [DescribeMetricMetaList](/help/en/cms/cloudmonitor-1-0/api-describemetricmetalist) or [Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

cpu\_total

Dimensions

string

No

The primary dimension of the alert rule.

The value is a JSON string that represents a collection of key-value pairs. For example, `{"userId":"120886317861****"}` and `{"instanceId":"i-m5e1qg6uo38rztr4****"}`.

\[{"instanceId":"i-m5e1qg6uo38rztr4\*\*\*\*"}\]

ExtraDimensionJson

string

No

The secondary or tertiary dimension of the alert rule.

The value is a collection of key-value pairs. For example, `{"port":"80"}` or `{"/dev/xvda":"d-m5e6yphgzn3aprwu****"}`.

If the primary dimension of the alert rule is `{"instanceId":"i-m5e1qg6uo38rztr4****"}`, the secondary dimension can be the disk `{"/dev/xvda":"d-m5e6yphgzn3aprwu****"}` of the instance.

{"/dev/xvda":"d-m5e6yphgzn3aprwu\*\*\*\*"}

EffectiveInterval

string

No

The time period when the alert rule is effective.

05:31-23:59

NoEffectiveInterval

string

No

The time period when the alert rule is ineffective.

00:00-05:30

SilenceTime

integer

No

The mute period.

Unit: seconds. Default value: 86400.

86400

Period

string

No

The statistical period of the metric.

The value of `Period` must be an integral multiple of 60. Unit: seconds. Default value: 300.

60

Interval

string

No

The interval at which the alert rule is triggered. Unit: seconds.

**Note**

Set the alert detection interval to the same value as the data reporting interval. If the alert detection interval is shorter than the data reporting interval, alerts may not be triggered due to insufficient data.

60

Webhook

string

No

The callback URL to which alert notifications are sent.

Enter a URL that is accessible over the Internet. CloudMonitor sends alert notifications to the URL using POST requests. Only the HTTP protocol is supported.

https://www.aliyun.com

EmailSubject

string

No

The subject of the alert notification email.

ECS实例

ContactGroups

string

No

The alert contact group.

ECS\_Group

Escalations.Critical.Statistics

string

No

The statistical method for alerts of the Critical level. Separate multiple statistical methods with a comma (,).

The value of this parameter is determined by the `Statistics` column that corresponds to the `MetricName` parameter of the specified cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the value of this parameter, see [Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

Average

Escalations.Critical.ComparisonOperator

string

No

The comparison operator for the threshold of the Critical-level alert. Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to
    
-   GreaterThanThreshold: greater than
    
-   LessThanOrEqualToThreshold: less than or equal to
    
-   LessThanThreshold: less than
    
-   NotEqualToThreshold: not equal to
    
-   GreaterThanYesterday: greater than the value at the same time yesterday
    
-   LessThanYesterday: less than the value at the same time yesterday
    
-   GreaterThanLastWeek: greater than the value at the same time last week
    
-   LessThanLastWeek: less than the value at the same time last week
    
-   GreaterThanLastPeriod: greater than the value in the last monitoring cycle
    
-   LessThanLastPeriod: less than the value in the last monitoring cycle
    

GreaterThanOrEqualToThreshold

Escalations.Critical.Threshold

string

No

The threshold of the Critical-level alert.

90

Escalations.Critical.Times

integer

No

The number of consecutive times the alert condition must be met to trigger a Critical-level alert.

3

Escalations.Warn.Statistics

string

No

The statistical method for alerts of the Warn level. Separate multiple statistical methods with a comma (,).

The value of this parameter is determined by the `Statistics` column that corresponds to the `MetricName` parameter of the specified cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the value of this parameter, see [Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

Average

Escalations.Warn.ComparisonOperator

string

No

The comparison operator for the threshold of the Warn-level alert. Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to
    
-   GreaterThanThreshold: greater than
    
-   LessThanOrEqualToThreshold: less than or equal to
    
-   LessThanThreshold: less than
    
-   NotEqualToThreshold: not equal to
    
-   GreaterThanYesterday: greater than the value at the same time yesterday
    
-   LessThanYesterday: less than the value at the same time yesterday
    
-   GreaterThanLastWeek: greater than the value at the same time last week
    
-   LessThanLastWeek: less than the value at the same time last week
    
-   GreaterThanLastPeriod: greater than the value in the last monitoring cycle
    
-   LessThanLastPeriod: less than the value in the last monitoring cycle
    

GreaterThanOrEqualToThreshold

Escalations.Warn.Threshold

string

No

The threshold of the Warn-level alert.

90

Escalations.Warn.Times

integer

No

The number of consecutive times the alert condition must be met to trigger a Warn-level alert.

3

Escalations.Info.Statistics

string

No

The statistical method for alerts of the Info level. Separate multiple statistical methods with a comma (,).

The value of this parameter is determined by the `Statistics` column that corresponds to the `MetricName` parameter of the specified cloud service. Examples: Maximum, Minimum, and Average. For more information about how to obtain the value of this parameter, see [Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

Average

Escalations.Info.ComparisonOperator

string

No

The comparison operator for the threshold of the Info-level alert. Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to
    
-   GreaterThanThreshold: greater than
    
-   LessThanOrEqualToThreshold: less than or equal to
    
-   LessThanThreshold: less than
    
-   NotEqualToThreshold: not equal to
    
-   GreaterThanYesterday: greater than the value at the same time yesterday
    
-   LessThanYesterday: less than the value at the same time yesterday
    
-   GreaterThanLastWeek: greater than the value at the same time last week
    
-   LessThanLastWeek: less than the value at the same time last week
    
-   GreaterThanLastPeriod: greater than the value in the last monitoring cycle
    
-   LessThanLastPeriod: less than the value in the last monitoring cycle
    

GreaterThanOrEqualToThreshold

Escalations.Info.Threshold

string

No

The threshold of the Info-level alert.

90

Escalations.Info.Times

integer

No

The number of consecutive times the alert condition must be met to trigger an Info-level alert.

3

NoDataPolicy

string

No

The method to handle alerts when no monitoring data is found. Valid values:

-   KEEP\_LAST\_STATE (default): No action is taken.
    
-   INSUFFICIENT\_DATA: An alert whose content is "Inadequate data" is triggered.
    
-   OK: The alert rule has a status of Normal.
    

KEEP\_LAST\_STATE

Labels

array<object>

No

The tags of the alert rule.

The tags are included in alert notifications.

object

No

None.

Key

string

No

The key of the tag for the alert rule.

key1

Value

string

No

The value of the tag for the alert rule.

value1

Options

string

No

The advanced settings.

Format: {"key1":"value1","key2":"value2"}. For example, {"NotSendOK":true} indicates whether to send a notification when an alert is cleared. The key is NotSendOK, and the value can be true (do not send) or false (send by default).

{"NotSendOK":true}

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

The status code.

**Note**

A status code of 200 indicates that the request was successful.

200

Message

string

The error message.

The Request is not authorization.

RequestId

string

The request ID.

461CF2CD-2FC3-4B26-8645-7BD27E7D0F1D

Success

boolean

Indicates whether the operation was successful. Valid values:

-   true: The operation was successful.
    
-   false: The operation failed.
    

true

Result

object

The result of creating or modifying the alert rule.

RuleId

string

The ID of the alert rule.

123456

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
  "Message": "The Request is not authorization.",
  "RequestId": "461CF2CD-2FC3-4B26-8645-7BD27E7D0F1D",
  "Success": true,
  "Result": {
    "RuleId": "123456"
  }
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

499

%s

%s

500

%s

%s

204

%s

%s

403

%s

%s

206

%s

%s

404

%s

%s

503

%s

%s

406

%s

%s

See [Error Codes](https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/PutGroupMetricRule#workbench-doc-change-demo) for a complete list.
