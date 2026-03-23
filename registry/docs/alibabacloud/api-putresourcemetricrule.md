Configures an alert rule.

## Operation description

This topic provides an example on how to create a threshold-triggered alert rule for the `cpu_total` metric of an Elastic Compute Service (ECS) instance whose ID is `i-uf6j91r34rnwawoo****`. The namespace of ECS metrics is `acs_ecs_dashboard`. The alert contact group of the alert rule is `ECS_Group`. The name of the alert rule is `test123`. The ID of the alert rule is `a151cd6023eacee2f0978e03863cc1697c89508****`. The statistical method for Critical-level alerts is `Average`. The comparison operator for Critical-level alerts is `GreaterThanOrEqualToThreshold`. The threshold for Critical-level alerts is `90`. The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered is `3`.

**Note** Statistics verification was added on August 15, 2024. Only the statistical value of the corresponding metric can be set for the Statistics parameter. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](https://www.alibabacloud.com/help/en/cms/support/appendix-1-metrics).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cms/2019-01-01/PutResourceMetricRule)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cms/2019-01-01/PutResourceMetricRule)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cms:PutResourceMetricRule

create

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RuleId

string

Yes

The ID of the alert rule.

You can specify a new ID or the ID of an existing alert rule. For more information about how to query the IDs of alert rules, see [DescribeMetricRuleList](/help/en/cms/cloudmonitor-1-0/api-describemetricrulelist) .

**Note** If you specify a new ID, a threshold-triggered alert rule is created.

a151cd6023eacee2f0978e03863cc1697c89508\*\*\*\*

RuleName

string

Yes

The name of the alert rule.

You can specify a new name or the name of an existing alert rule. For more information about how to query the names of alert rules, see [DescribeMetricRuleList](/help/en/cms/cloudmonitor-1-0/api-describemetricrulelist) .

**Note** If you specify a new name, a threshold-triggered alert rule is created.

test123

Namespace

string

Yes

The namespace of the cloud service. For more information about how to query the namespaces of cloud services, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

**Note** If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to `acs_prometheus`.

acs\_ecs\_dashboard

MetricName

string

Yes

The metric name. For more information about how to query metric names, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

**Note** If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For more information about how to query the names of namespaces, see [DescribeHybridMonitorNamespaceList](/help/en/cms/cloudmonitor-1-0/api-describehybridmonitornamespacelist) .

cpu\_total

Resources

string

Yes

The resource information. Examples: `[{"instanceId":"i-uf6j91r34rnwawoo****"}]` and `[{"userId":"100931896542****"}]`.

For more information about the supported dimensions that are used to query resources, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

\[{"instanceId":"i-uf6j91r34rnwawoo\*\*\*\*"}\]

ContactGroups

string

Yes

The alert contact groups. Alert notifications are sent to the alert contacts in the alert contact group.

**Note** An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see [PutContact](/help/en/cms/cloudmonitor-1-0/api-putcontact) and [PutContactGroup](/help/en/cms/cloudmonitor-1-0/api-putcontactgroup) .

ECS\_Group

Webhook

string

No

The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.

https://alert.aliyun.com.com:8080/callback

EffectiveInterval

string

No

The period of time during which the alert rule is effective.

00:00-23:59

NoEffectiveInterval

string

No

The period of time during which the alert rule is ineffective.

00:00-06:00

SilenceTime

integer

No

The mute period during which new alert notifications are not sent even if the trigger conditions are met. Unit: seconds. Default value: 86400.

**Note** If an alert is not cleared after the mute period ends, CloudMonitor resends an alert notification.

86400

Period

string

No

The statistical period of the metric. Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.

**Note** For more information about how to query the statistical periods of metrics, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

60

Interval

string

No

The interval at which alerts are triggered based on the alert rule. Unit: seconds.

**Note** For more information about how to query the statistical periods of metrics, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

60

EmailSubject

string

No

The subject of the alert notification email.

Escalations.Critical.Statistics

string

No

The statistical methods for Critical-level alerts.

The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

Average

Escalations.Critical.ComparisonOperator

string

No

The operator that is used to compare the metric value with the threshold for Critical-level alerts. Valid value:

-   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
-   GreaterThanThreshold: greater than the threshold
-   LessThanOrEqualToThreshold: less than or equal to the threshold
-   LessThanThreshold: less than the threshold
-   NotEqualToThreshold: not equal to the threshold
-   EqualToThreshold: equal to the threshold
-   GreaterThanYesterday: greater than the metric value at the same time yesterday
-   LessThanYesterday: less than the metric value at the same time yesterday
-   GreaterThanLastWeek: greater than the metric value at the same time last week
-   LessThanLastWeek: less than the metric value at the same time last week
-   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
-   LessThanLastPeriod: less than the metric value in the last monitoring cycle

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

GreaterThanOrEqualToThreshold

Escalations.Critical.Threshold

string

No

The threshold for Critical-level alerts.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

90

Escalations.Critical.Times

integer

No

The consecutive number of times for which the metric value meets the alert condition before a Critical-level alert is triggered.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

3

Escalations.Warn.Statistics

string

No

The statistical methods for Warn-level alerts.

The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

Average

Escalations.Warn.ComparisonOperator

string

No

The operator that is used to compare the metric value with the threshold for Warn-level alerts. Valid value:

-   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
-   GreaterThanThreshold: greater than the threshold
-   LessThanOrEqualToThreshold: less than or equal to the threshold
-   LessThanThreshold: less than the threshold
-   NotEqualToThreshold: not equal to the threshold
-   EqualToThreshold: equal to the threshold
-   GreaterThanYesterday: greater than the metric value at the same time yesterday
-   LessThanYesterday: less than the metric value at the same time yesterday
-   GreaterThanLastWeek: greater than the metric value at the same time last week
-   LessThanLastWeek: less than the metric value at the same time last week
-   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
-   LessThanLastPeriod: less than the metric value in the last monitoring cycle

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

GreaterThanOrEqualToThreshold

Escalations.Warn.Threshold

string

No

The threshold for Warn-level alerts.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

90

Escalations.Warn.Times

integer

No

The consecutive number of times for which the metric value meets the alert condition before a Warn-level alert is triggered.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

3

Escalations.Info.Statistics

string

No

The statistical methods for Info-level alerts.

The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

Average

Escalations.Info.ComparisonOperator

string

No

The operator that is used to compare the metric value with the threshold for Info-level alerts. Valid value:

-   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
-   GreaterThanThreshold: greater than the threshold
-   LessThanOrEqualToThreshold: less than or equal to the threshold
-   LessThanThreshold: less than the threshold
-   NotEqualToThreshold: not equal to the threshold
-   EqualToThreshold: equal to the threshold
-   GreaterThanYesterday: greater than the metric value at the same time yesterday
-   LessThanYesterday: less than the metric value at the same time yesterday
-   GreaterThanLastWeek: greater than the metric value at the same time last week
-   LessThanLastWeek: less than the metric value at the same time last week
-   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
-   LessThanLastPeriod: less than the metric value in the last monitoring cycle

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

GreaterThanOrEqualToThreshold

Escalations.Info.Threshold

string

No

The threshold for Info-level alerts.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

90

Escalations.Info.Times

integer

No

The consecutive number of times for which the metric value meets the alert condition before an Info-level alert is triggered.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

3

NoDataPolicy

string

No

The method that is used to handle alerts when no monitoring data is found. Valid value:

-   KEEP\_LAST\_STATE (default): No operation is performed.
-   INSUFFICIENT\_DATA: An alert whose content is "Insufficient data" is triggered.
-   OK: The status is considered normal.

KEEP\_LAST\_STATE

CompositeExpression

object

No

The trigger conditions for multiple metrics.

**Note** The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.

ExpressionList

array<object>

No

The trigger conditions that are created in standard mode.

object

No

The trigger conditions that are created in standard mode.

MetricName

string

No

The metric that is used to monitor the cloud service.

cpu\_total

Period

long

No

The aggregation period of the metric.

Unit: seconds.

60

Statistics

string

No

The statistical method of the metric. Valid value:

-   $Maximum: the maximum value
-   $Minimum: the minimum value
-   $Average: the average value
-   $Availability: the availability rate (usually used for site monitoring)

**Note** `$` is the prefix of the metric. For information about the Alibaba Cloud services that are supported by CloudMonitor, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

$Maximum

ComparisonOperator

string

No

The operator that is used to compare the metric value with the threshold. Valid value:

-   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
-   GreaterThanThreshold: greater than the threshold
-   LessThanOrEqualToThreshold: less than or equal to the threshold
-   LessThanThreshold: less than the threshold
-   NotEqualToThreshold: not equal to the threshold
-   EqualToThreshold: equal to the threshold
-   GreaterThanYesterday: greater than the metric value at the same time yesterday
-   LessThanYesterday: less than the metric value at the same time yesterday
-   GreaterThanLastWeek: greater than the metric value at the same time last week
-   LessThanLastWeek: less than the metric value at the same time last week
-   GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
-   LessThanLastPeriod: less than the metric value in the last monitoring cycle

GreaterThanOrEqualToThreshold

Threshold

string

No

The alert threshold.

90

ExpressionListJoin

string

No

The relationship between the trigger conditions for multiple metrics. Valid value:

-   `&&`: An alert is triggered only if all metrics meet the trigger conditions. An alert is triggered only if the results of all expressions specified in the ExpressionList parameter are `true`.
-   `||`: An alert is triggered if one of the metrics meets the trigger conditions.

||

ExpressionRaw

string

No

The trigger conditions that are created by using expressions. You can use expressions to create trigger conditions in the following scenarios:

-   Set an alert blacklist for specific resources. For example, if you specify `$instanceId != 'i-io8kfvcpp7x5****' ``&&`` $Average > 50`, no alert is triggered when the `average metric value` of the `i-io8kfvcpp7x5****` instance exceeds 50.
-   Set a special alert threshold for a specified instance in the rule. For example, if you specify `$Average > ($instanceId == 'i-io8kfvcpp7x5****'? 80: 50)`, an alert is triggered when the `average metric value` of the `i-io8kfvcpp7x5****` instance exceeds 80 or the `average metric value` of other instances exceeds 50.
-   Limit the number of instances whose metric values exceed the threshold. For example, if you specify `count($Average > 20) > 3`, an alert is triggered only when the `average metric value` of more than three instances exceeds 20.

$Average > ($instanceId == 'i-io8kfvcpp7x5\*\*\*\*'? 80: 50)

Level

string

No

The alert level. Valid values:

-   Critical
-   Warn
-   Info

Critical

Times

integer

No

The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, CloudMonitor sends alert notifications.

3

Labels

array<object>

No

If the metric meets the specified condition in the alert rule and CloudMonitor sends an alert notification, the tag is also written to the metric and displayed in the alert notification.

**Note** This parameter is equivalent to the Label parameter of Prometheus alerts.

object

No

The key of the tag.

Key

string

No

The tag key.

tagKey1

Value

string

No

The tag value.

**Note** You can use a template parameter to specify a tag value. CloudMonitor replaces the value of the template parameter with an actual tag value.

ECS

Prometheus

object

No

Prometheus alerts.

**Note** This parameter is required only if you create a Prometheus alert rule for Hybrid Cloud Monitoring.

PromQL

string

No

PromQL statements are supported.

**Note** The data obtained by using the PromQL query statement is the monitoring data. You must include the alert threshold in this statement.

cpuUsage{instanceId="xxxx"}\[1m\]>90

Level

string

No

The alert level. Valid values:

-   Critical
-   Warn
-   Info

Critical

Times

integer

No

The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, CloudMonitor sends alert notifications.

3

Annotations

array<object>

No

The annotations of the Prometheus alert rule. When a Prometheus alert is triggered, the system renders the annotated keys and values to help you understand the metrics and alert rule.

**Note** This parameter is equivalent to the annotations parameter of open source Prometheus.

object

No

The annotations of the Prometheus alert rule. When a Prometheus alert is triggered, the system renders the annotated keys and values to help you understand the metrics and alert rule.

Key

string

No

The key of the annotation.

summary

Value

string

No

The value of the annotation.

{{ $labels.instance }} CPU usage above 10% {current value: {{ humanizePercentage $value }} }

For more information about common request parameters, see [Common parameters](/help/en/cms/developer-reference/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

None.

Code

string

The responses code.

**Note** The status code 200 indicates that the request was successful.

200

Message

string

The returned message.

The request processing has failed due to some unknown error.

RequestId

string

The request ID.

65D50468-ECEF-48F1-A6E1-D952E89D9436

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "The request processing has failed due to some unknown error.",
  "RequestId": "65D50468-ECEF-48F1-A6E1-D952E89D9436",
  "Success": true
}
```

## Error codes

HTTP status code

Error code

Error message

204

%s

%s

429

ResourceOverLimit

The resource has exceeded the limit. %s

500

InternalError

The request processing has failed due to some unknown error.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-04-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cms/2019-01-01/PutResourceMetricRule?updateTime=2024-04-01#workbench-doc-change-demo)

2022-12-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cms/2019-01-01/PutResourceMetricRule?updateTime=2022-12-26#workbench-doc-change-demo)

2022-08-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cms/2019-01-01/PutResourceMetricRule?updateTime=2022-08-05#workbench-doc-change-demo)
