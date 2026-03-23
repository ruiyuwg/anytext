Creates multiple alert rules for the specified metric of a specified resource.

## Operation description

This topic provides an example on how to create a threshold-triggered alert rule for the `cpu_total` metric of an Elastic Compute Service (ECS) instance whose ID is `i-uf6j91r34rnwawoo****`. The namespace of ECS metrics is `acs_ecs_dashboard`. The alert contact group of the alert rule is `ECS_Group`. The name of the alert rule is `test123`. The ID of the alert rule is `a151cd6023eacee2f0978e03863cc1697c89508****`. The statistical method for Critical-level alerts is `Average`. The comparison operator for Critical-level alerts is `GreaterThanOrEqualToThreshold`. The threshold for Critical-level alerts is `90`. The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered is `3`.

**Note** Statistics verification was added on August 15, 2024. Only the statistical value of the corresponding metric can be set for the Statistics parameter. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](https://www.alibabacloud.com/help/en/cms/support/appendix-1-metrics).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cms/2019-01-01/PutResourceMetricRules)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cms/2019-01-01/PutResourceMetricRules)

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

cms:PutResourceMetricRules

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

Rules

array<object>

Yes

The threshold-triggered alert rules.

Valid values of N: 1 to 500.

object

Yes

The statistical methods for Warn-level alerts. Valid values:

-   Maximum: the maximum value
-   Minimum: the minimum value
-   Average: the average value
-   Availability: the availability rate

Valid values of N: 1 to 500.

**Note** You must set a collection of the Rules.N.Escalations.Critical.Statistics, Rules.N.Escalations.Critical.ComparisonOperator, Rules.N.Escalations.Critical.Threshold, and Rules.N.Escalations.Critical.Times parameters, a collection of the Rules.N.Escalations.Warn.Statistics, Rules.N.Escalations.Warn.ComparisonOperator, Rules.N.Escalations.Warn.Threshold, and Rules.N.Escalations.Warn.Times parameters, or a collection of the Rules.N.Escalations.Info.Statistics, Rules.N.Escalations.Info.ComparisonOperator, Rules.N.Escalations.Info.Threshold, and Rules.N.Escalations.Info.Times parameters.

Escalations.Info.Threshold

string

No

The threshold for Info-level alerts.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

90

MetricName

string

No

The metric name.

Valid values of N: 1 to 500.

For information about how to query the name of a metric, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

cpu\_total

Escalations.Warn.Threshold

string

No

The threshold for Warn-level alerts.

Valid values of N: 1 to 500.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

90

EffectiveInterval

string

No

The time period during which the alert rule is effective.

Valid values of N: 1 to 500.

00:00-23:59

NoEffectiveInterval

string

No

The time period during which the alert rule is ineffective.

Valid values of N: 1 to 500.

00:00-06:00

RuleId

string

Yes

The ID of the alert rule.

Valid values of N: 1 to 500.

You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see [DescribeMetricRuleList](/help/en/cms/cloudmonitor-1-0/api-describemetricrulelist) .

**Note** If you specify a new ID, a threshold-triggered alert rule is created.

a151cd6023eacee2f0978e03863cc1697c89508\*\*\*\*

Escalations.Critical.Times

integer

No

The consecutive number of times for which the metric value meets the alert condition before a Critical-level alert is triggered.

Valid values of N: 1 to 500.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

3

Escalations.Critical.Threshold

string

No

The threshold for Critical-level alerts.

Valid values of N: 1 to 500.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

90

Escalations.Critical.Statistics

string

No

The statistical methods for Critical-level alerts.

Valid values of N: 1 to 500.

The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

Average

Escalations.Warn.ComparisonOperator

string

No

The operator that is used to compare the metric value with the threshold for Warn-level alerts. Valid values:

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

Valid values of N: 1 to 500.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

GreaterThanOrEqualToThreshold

Escalations.Info.Times

integer

No

The consecutive number of times for which the metric value meets the alert condition before an Info-level alert is triggered.

Valid values of N: 1 to 500.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

3

Resources

string

Yes

The information about the resource. Example: `[{"instanceId":"i-uf6j91r34rnwawoo****"}]` or `[{"userId":"100931896542****"}]`.

Valid values of N: 1 to 500.

For more information about the supported dimensions that are used to query resources, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

\[{"instanceId":"i-uf6j91r34rnwawoo\*\*\*\*"}\]

SilenceTime

integer

No

The mute period during which new alert notifications are not sent even if the trigger conditions are met.

Unit: seconds. Default value: 86400.

Valid values of N: 1 to 500.

**Note** If an alert is not cleared after the mute period ends, CloudMonitor resends an alert notification.

86400

Webhook

string

No

The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.

Valid values of N: 1 to 500.

https://alert.aliyun.com.com:8080/callback

ContactGroups

string

Yes

The alert contact groups. The alert notifications are sent to the alert contacts in the alert contact group.

Valid values of N: 1 to 500.

**Note** An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see [PutContact](/help/en/cms/cloudmonitor-1-0/api-putcontact) and [PutContactGroup](/help/en/cms/cloudmonitor-1-0/api-putcontactgroup) .

ECS\_Group

Namespace

string

Yes

The namespace of the cloud service.

Valid values of N: 1 to 500.

For information about how to query the namespace of a cloud service, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

acs\_ecs\_dashboard

EmailSubject

string

No

The subject of the alert notification email.

Valid values of N: 1 to 500.

Period

string

No

The statistical period of the metric.

Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.

Valid values of N: 1 to 500.

**Note** For information about how to query the statistical period of a metric, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

60

RuleName

string

Yes

The name of the alert rule.

Valid values of N: 1 to 500.

You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see [DescribeMetricRuleList](/help/en/cms/cloudmonitor-1-0/api-describemetricrulelist) .

**Note** If you specify a new name, a threshold-triggered alert rule is created.

test123

Escalations.Info.Statistics

string

No

The statistical methods for Info-level alerts.

Valid values of N: 1 to 500.

The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

Average

Escalations.Warn.Times

integer

No

The consecutive number of times for which the metric value meets the alert condition before a Warn-level alert is triggered.

Valid values of N: 1 to 500.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

3

Escalations.Info.ComparisonOperator

string

No

The operator that is used to compare the metric value with the threshold for Info-level alerts. Valid values:

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

Valid values of N: 1 to 500.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

GreaterThanOrEqualToThreshold

Interval

string

No

The interval at which alerts are triggered based on the alert rule.

Unit: seconds.

Valid values of N: 1 to 500.

**Note** For information about how to query the statistical period of a metric, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

60

Escalations.Critical.ComparisonOperator

string

No

The operator that is used to compare the metric value with the threshold for Critical-level alerts. Valid values:

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

Valid values of N: 1 to 500.

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

GreaterThanOrEqualToThreshold

Escalations.Warn.Statistics

string

No

The statistical methods for Warn-level alerts.

Valid values of N: 1 to 500.

The value of this parameter is determined by the `Statistics` column corresponding to the `MetricName` parameter of the specified cloud service. The value of this parameter can be Maximum, Minimum, or Average. For more information about how to obtain the value of this parameter, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

**Note** You must select at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times parameters for each alert level.

Average

NoDataPolicy

string

No

The method that is used to handle alerts when no monitoring data is found. Valid values:

-   KEEP\_LAST\_STATE (default): No operation is performed.
-   INSUFFICIENT\_DATA: An alert whose content is "Insufficient data" is triggered.
-   OK: The status is considered normal.

Valid values of N: 1 to 500.

KEEP\_LAST\_STATE

Labels

array<object>

No

If the metric meets the specified condition in the alert rule and CloudMonitor sends an alert notification, the tag is also written to the metric and displayed in the alert notification.

object

No

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

The response code.

**Note** The status code 200 indicates that the request was successful.

200

Message

string

The error message returned.

The request processing has failed due to some unknown error.

RequestId

string

The request ID.

15D1440E-BF24-5A41-93E4-36864635179E

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

FailedListResult

array<object>

The alert rules that failed to be created for the resource.

Target

object

RuleId

string

The ID of the alert rule.

a151cd6023eacee2f0978e03863cc1697c89508\*\*\*\*

Result

object

The alert rule that failed to be created.

Code

string

The response code.

404

Message

string

The error message returned.

The request processing has failed due to some unknown error.

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

false

## Examples

Sample success responses

`JSON`format

```
{
  "Code": 200,
  "Message": "The request processing has failed due to some unknown error.",
  "RequestId": "15D1440E-BF24-5A41-93E4-36864635179E",
  "Success": true,
  "FailedListResult": {
    "Target": [
      {
        "RuleId": "a151cd6023eacee2f0978e03863cc1697c89508****",
        "Result": {
          "Code": 404,
          "Message": "The request processing has failed due to some unknown error.",
          "Success": false
        }
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

204

%s

%s

500

InternalError

The request processing has failed due to some unknown error.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2021-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cms/2019-01-01/PutResourceMetricRules?updateTime=2021-10-28#workbench-doc-change-demo)
