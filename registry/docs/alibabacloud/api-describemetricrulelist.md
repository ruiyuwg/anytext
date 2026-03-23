Queries a list of alert rules.

## Operation description

This topic provides an example of how to query all alert rules for your Alibaba Cloud account. The response returns one alert rule named `Rule_01` with the ID `applyTemplate344cfd42-0f32-4fd6-805a-88d7908a****`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMetricRuleList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMetricRuleList)

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

cms:DescribeMetricRuleList

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

MetricName

string

No

The name of the metric.

For more information about how to obtain the name of a metric, see [DescribeMetricMetaList](/help/en/cms/cloudmonitor-1-0/api-describemetricmetalist) or [Cloud service metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

Note: For composite metrics, you can retrieve them only by the first metric.

cpu\_total

EnableState

boolean

No

The state of the alert rule. Valid values:

-   true: enabled.
    
-   false: disabled.
    

true

Namespace

string

No

The namespace of the Alibaba Cloud service.

For more information about how to obtain the namespace of an Alibaba Cloud service, see [DescribeMetricMetaList](/help/en/cms/cloudmonitor-1-0/api-describemetricmetalist) or [Cloud service metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

acs\_ecs\_dashboard

Page

integer

No

The page number.

Starts from 1. Default value: 1.

1

PageSize

integer

No

The number of entries to return on each page.

Starts from 1. Default value: 10.

10

AlertState

string

No

The state of the alert rule. Valid values:

-   OK: Normal.
    
-   ALARM: An alert is triggered.
    
-   INSUFFICIENT\_DATA: The data is insufficient.
    

OK

Dimensions

string

No

The dimensions that specify the resources to be monitored.

The value is a collection of key-value pairs. Format: `key:value`. For example, `{"userId":"120886317861****"}` and `{"instanceId":"i-2ze2d6j5uhg20x47****"}`.

{"instanceId":"i-2ze2d6j5uhg20x47\*\*\*\*"}

RuleName

string

No

The name of the alert rule.

Fuzzy search is supported.

Rule\_01

GroupId

string

No

The ID of the application group.

For more information about how to obtain the ID of an application group, see [DescribeMonitorGroups](/help/en/cms/cloudmonitor-1-0/api-describemonitorgroups).

7301\*\*\*\*

RuleIds

string

No

The ID of the alert rule. You can specify up to 20 IDs. Separate multiple IDs with commas (,).

applyTemplate344cfd42-0f32-4fd6-805a-88d7908a\*\*\*\*

For more information about common request parameters, see [Common parameters](/help/en/cms/developer-reference/common-parameters).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

None.

Code

integer

The status code.

**Note**

A value of 200 indicates that the request was successful.

200

Message

string

The error message.

The specified resource is not found.

RequestId

string

The request ID.

386C6712-335F-5054-930A-CC92B851ECBA

Total

string

The total number of entries.

1

Success

boolean

Indicates whether the operation was successful. Valid values:

-   true: The operation was successful.
    
-   false: The operation failed.
    

true

Alarms

object

Alarm

array<object>

The list of alert rules.

array<object>

None.

SilenceTime

integer

The mute period. Unit: seconds. Default value: 86400. Minimum value: 3600.

If the metric value continuously exceeds the alert threshold, an alert notification is sent only once during each mute period.

86400

MetricName

string

The name of the metric.

cpu\_total

Webhook

string

The callback URL to which alert notifications are sent. CloudMonitor pushes alert notifications to the specified URL through POST requests. Only HTTP is supported.

https://www.aliyun.com

ContactGroups

string

The contact group.

ECS\_Alarm

SourceType

string

The type of the alert rule. The value METRIC indicates a time series metric alert rule.

METRIC

Namespace

string

The namespace of the Alibaba Cloud service.

acs\_ecs\_dashboard

MailSubject

string

The subject of the alert notification email.

"${serviceType}-${metricName}-${levelDescription}通知（${dimensions}）"

NoEffectiveInterval

string

The time period during which the alert rule is ineffective.

00:00-05:30

EffectiveInterval

string

The time period during which the alert rule is effective.

05:31-23:59

RuleName

string

The name of the alert rule.

Rule\_01

AlertState

string

The state of the alert rule. Valid values:

-   OK: Normal.
    
-   ALARM: An alert is triggered.
    
-   INSUFFICIENT\_DATA: The data is insufficient.
    

OK

Period

string

The statistical period.

60

RuleId

string

The ID of the alert rule.

applyTemplate344cfd42-0f32-4fd6-805a-88d7908a\*\*\*\*

GroupName

string

The name of the application group.

**Note**

This parameter is displayed if the alert rule is associated with an application group.

ECS\_Group

GroupId

string

The ID of the application group.

7301\*\*\*\*

Dimensions

string

The dimensions of the alert rule.

\[{"instanceId":"i-2ze2d6j5uhg20x47\*\*\*\*"}\]

EnableState

boolean

The enabled state. Valid values:

-   true: enabled.
    
-   false: disabled.
    

true

Resources

string

The resources that are associated with the alert rule.

\[{\\"instanceId\\":\\"i-2ze2d6j5uhg20x47\*\*\*\*\\"}\]

Escalations

object

The conditions for triggering alerts at different levels.

Info

object

The conditions for triggering an Info-level alert.

ComparisonOperator

string

The comparison operator for the Info-level alert threshold. Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to.
    
-   GreaterThanThreshold: greater than.
    
-   LessThanOrEqualToThreshold: less than or equal to.
    
-   LessThanThreshold: less than.
    
-   NotEqualToThreshold: not equal to.
    
-   GreaterThanYesterday: greater than the value at the same time yesterday.
    
-   LessThanYesterday: less than the value at the same time yesterday.
    
-   GreaterThanLastWeek: greater than the value at the same time last week.
    
-   LessThanLastWeek: less than the value at the same time last week.
    
-   GreaterThanLastPeriod: greater than the value in the previous cycle.
    
-   LessThanLastPeriod: less than the value in the previous cycle.
    

GreaterThanOrEqualToThreshold

PreCondition

string

The precondition for an Info-level alert. This parameter is used with \`ComparisonOperator\` when \`ComparisonOperator\` is set to a value that indicates a day-over-day or week-over-week comparison.

For example, if you set this parameter to \`$Average>80\`, \`ComparisonOperator\` to \`GreaterThanYesterday\`, and \`Threshold\` to \`10\`, an alert is triggered when the average value is greater than 80 and the day-over-day increase is 10%.

**Note**

In \`$Average>0\`, \`$Average\` is a placeholder in the \`$metric-field-value\` format. CloudMonitor replaces it with the corresponding statistical value or the original metric value.

$Average>80

Times

integer

The number of consecutive times that the Info-level alert is triggered. An alert is triggered only if the metric value exceeds the threshold for the specified number of consecutive times.

3

Threshold

string

The threshold for the Info-level alert.

90

Statistics

string

The statistical method for the Info-level alert.

Average

Warn

object

The conditions for triggering a Warn-level alert.

ComparisonOperator

string

The comparison operator for the Warn-level alert threshold. Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to.
    
-   GreaterThanThreshold: greater than.
    
-   LessThanOrEqualToThreshold: less than or equal to.
    
-   LessThanThreshold: less than.
    
-   NotEqualToThreshold: not equal to.
    
-   GreaterThanYesterday: greater than the value at the same time yesterday.
    
-   LessThanYesterday: less than the value at the same time yesterday.
    
-   GreaterThanLastWeek: greater than the value at the same time last week.
    
-   LessThanLastWeek: less than the value at the same time last week.
    
-   GreaterThanLastPeriod: greater than the value in the previous cycle.
    
-   LessThanLastPeriod: less than the value in the previous cycle.
    

GreaterThanOrEqualToThreshold

PreCondition

string

The precondition for a Warn-level alert. This parameter is used with \`ComparisonOperator\` when \`ComparisonOperator\` is set to a value that indicates a day-over-day or week-over-week comparison.

For example, if you set this parameter to \`$Average>80\`, \`ComparisonOperator\` to \`GreaterThanYesterday\`, and \`Threshold\` to \`10\`, an alert is triggered when the average value is greater than 80 and the day-over-day increase is 10%.

**Note**

In \`$Average>0\`, \`$Average\` is a placeholder in the \`$metric-field-value\` format. CloudMonitor replaces it with the corresponding statistical value or the original metric value.

$Average>80

Times

integer

The number of consecutive times that the Warn-level alert is triggered. An alert is triggered only if the metric value exceeds the threshold for the specified number of consecutive times.

3

Threshold

string

The threshold for the Warn-level alert.

90

Statistics

string

The statistical method for the Warn-level alert.

Average

Critical

object

The conditions for triggering a Critical-level alert.

ComparisonOperator

string

The comparison operator for the Critical-level alert threshold. Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to.
    
-   GreaterThanThreshold: greater than.
    
-   LessThanOrEqualToThreshold: less than or equal to.
    
-   LessThanThreshold: less than.
    
-   NotEqualToThreshold: not equal to.
    
-   GreaterThanYesterday: greater than the value at the same time yesterday.
    
-   LessThanYesterday: less than the value at the same time yesterday.
    
-   GreaterThanLastWeek: greater than the value at the same time last week.
    
-   LessThanLastWeek: less than the value at the same time last week.
    
-   GreaterThanLastPeriod: greater than the value in the previous cycle.
    
-   LessThanLastPeriod: less than the value in the previous cycle.
    

GreaterThanOrEqualToThreshold

PreCondition

string

The precondition for a Critical-level alert. This parameter is used with \`ComparisonOperator\` when \`ComparisonOperator\` is set to a value that indicates a day-over-day or week-over-week comparison.

For example, if you set this parameter to \`$Average>80\`, \`ComparisonOperator\` to \`GreaterThanYesterday\`, and \`Threshold\` to \`10\`, an alert is triggered when the average value is greater than 80 and the day-over-day increase is 10%.

**Note**

In \`$Average>0\`, \`$Average\` is a placeholder in the `$metric-field-value` format. CloudMonitor replaces it with the corresponding statistical value or the original metric value.

$Average>80

Times

integer

The number of consecutive times that the Critical-level alert is triggered. An alert is triggered only if the metric value exceeds the threshold for the specified number of consecutive times.

3

Threshold

string

The threshold for the Critical-level alert.

90

Statistics

string

The statistical method for the Critical-level alert.

Average

NoDataPolicy

string

The method to handle alerts when no monitoring data is available. Valid values:

-   KEEP\_LAST\_STATE (default): No action is taken.
    
-   INSUFFICIENT\_DATA: An alert whose content is \`no data\` is triggered.
    
-   OK: The alert rule is considered normal.
    

KEEP\_LAST\_STATE

CompositeExpression

object

The alert conditions for multiple metrics.

**Note**

Single-metric and multi-metric alert conditions are mutually exclusive. You cannot specify both.

Level

string

The alert level. Valid values:

-   CRITICAL: critical.
    
-   WARN: warning.
    
-   INFO: info.
    

CRITICAL

ExpressionList

object

ExpressionList

array<object>

The list of alert conditions that are created in standard mode.

object

None.

MetricName

string

The name of the metric for the Alibaba Cloud service.

cpu\_total

Period

integer

The aggregation period of the metric.

Unit: seconds.

60

Statistics

string

The statistical method for the metric. Valid values:

-   $Maximum: the maximum value.
    
-   $Minimum: the minimum value.
    
-   $Average: the average value.
    
-   $Availability: the availability rate (usually used for site monitoring).
    

**Note**

The `$` sign is a unified prefix for metrics. For more information about the supported Alibaba Cloud services, see [Cloud service metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

$Maximum

ComparisonOperator

string

The comparison operator for the alert threshold. Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to.
    
-   GreaterThanThreshold: greater than.
    
-   LessThanOrEqualToThreshold: less than or equal to.
    
-   LessThanThreshold: less than.
    
-   NotEqualToThreshold: not equal to.
    
-   GreaterThanYesterday: greater than the value at the same time yesterday.
    
-   LessThanYesterday: less than the value at the same time yesterday.
    
-   GreaterThanLastWeek: greater than the value at the same time last week.
    
-   LessThanLastWeek: less than the value at the same time last week.
    
-   GreaterThanLastPeriod: greater than the value in the previous cycle.
    
-   LessThanLastPeriod: less than the value in the previous cycle.
    

GreaterThanOrEqualToThreshold

Threshold

string

The alert threshold.

90

ExpressionListJoin

string

The relationship between the alert conditions for multiple metrics. Valid values:

-   `&&`: An alert is triggered only if all metrics meet their alert conditions. An alert is triggered only if all expressions in \`ExpressionList\` are true.
    
-   `||`: An alert is triggered if one of the metrics meets its alert condition.
    

||

ExpressionRaw

string

The alert conditions that are created using an expression. Examples:

-   Set an alert blacklist for specific resources. Example: `$instanceId != 'i-io8kfvcpp7x5****' && $Average > 50`. This expression indicates that no alert is triggered when the \`Average\` value for the instance `i-io8kfvcpp7x5****` is greater than 50.
    
-   Set a special alert threshold for a specific instance in the rule. Example: `$Average > ($instanceId == 'i-io8kfvcpp7x5****'? 80: 50)`. This expression indicates that an alert is triggered for the instance `i-io8kfvcpp7x5****` only when its \`Average\` value is greater than 80. For other instances, an alert is triggered when their \`Average\` value is greater than 50.
    
-   Limit the number of instances that can have metric values exceeding the threshold. Example: `count($Average > 20) > 3`. This expression indicates that an alert is triggered only when the number of instances whose \`Average\` value is greater than 20 exceeds 3.
    

$Average > ($instanceId == 'i-io8kfvcpp7x5\*\*\*\*'? 80: 50)

Times

integer

The number of times that the alert condition must be met before an alert notification is sent.

3

Labels

object

Labels

array<object>

The tags of the alert rule.

object

None.

Key

string

The tag key of the alert rule.

cmsRuleKey

Value

string

The tag value of the alert rule.

cmsRuleValue

Prometheus

object

The Prometheus alert.

**Note**

You must set this parameter only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.

PromQL

string

The Prometheus Query Language (PromQL) query statement.

**Note**

The data that is queried using the PromQL statement is the alert data. Include the alert threshold in the statement.

CpuUsage{instanceId="xxxx"}\[1m\]>90

Level

string

The alert level. Valid values:

-   CRITICAL: critical.
    
-   WARN: warning.
    
-   INFO: info.
    

CRITICAL

Times

integer

The number of times that the alert condition must be met before an alert notification is sent.

3

Annotations

object

Annotations

array<object>

When a Prometheus alert is triggered, the keys and values of the annotations are rendered to help you understand the metrics or alert rules.

**Note**

This feature is equivalent to the Annotation feature of Prometheus.

object

None.

Key

string

The key of the annotation.

summary

Value

string

The value of the annotation.

{{ $labels.instance }} CPU usage above 10% {current value: {{ humanizePercentage $value }} }

ProductCategory

string

The type of the Alibaba Cloud service.

slb

GmtCreate

integer

The time when the rule was created. This value is a UNIX timestamp.

1760432061000

GmtUpdate

string

The time when the rule was updated. This value is a UNIX timestamp.

1760432061000

## Examples

Success response

`JSON` format

```
{
  "Code": 200,
  "Message": "The specified resource is not found.",
  "RequestId": "386C6712-335F-5054-930A-CC92B851ECBA",
  "Total": "1",
  "Success": true,
  "Alarms": {
    "Alarm": [
      {
        "SilenceTime": 86400,
        "MetricName": "cpu_total",
        "Webhook": "https://www.aliyun.com",
        "ContactGroups": "ECS_Alarm",
        "SourceType": "METRIC",
        "Namespace": "acs_ecs_dashboard",
        "MailSubject": "\"${serviceType}-${metricName}-${levelDescription}通知（${dimensions}）\"",
        "NoEffectiveInterval": "00:00-05:30",
        "EffectiveInterval": "05:31-23:59",
        "RuleName": "Rule_01",
        "AlertState": "OK",
        "Period": "60",
        "RuleId": "applyTemplate344cfd42-0f32-4fd6-805a-88d7908a****",
        "GroupName": "ECS_Group",
        "GroupId": "7301****",
        "Dimensions": "[{\"instanceId\":\"i-2ze2d6j5uhg20x47****\"}]",
        "EnableState": true,
        "Resources": "[{\\\"instanceId\\\":\\\"i-2ze2d6j5uhg20x47****\\\"}]",
        "Escalations": {
          "Info": {
            "ComparisonOperator": "GreaterThanOrEqualToThreshold",
            "PreCondition": "$Average>80",
            "Times": 3,
            "Threshold": "90",
            "Statistics": "Average"
          },
          "Warn": {
            "ComparisonOperator": "GreaterThanOrEqualToThreshold",
            "PreCondition": "$Average>80",
            "Times": 3,
            "Threshold": "90",
            "Statistics": "Average"
          },
          "Critical": {
            "ComparisonOperator": "GreaterThanOrEqualToThreshold",
            "PreCondition": "$Average>80",
            "Times": 3,
            "Threshold": "90",
            "Statistics": "Average"
          }
        },
        "NoDataPolicy": "KEEP_LAST_STATE",
        "CompositeExpression": {
          "Level": "CRITICAL",
          "ExpressionList": {
            "ExpressionList": [
              {
                "MetricName": "cpu_total",
                "Period": 60,
                "Statistics": "$Maximum",
                "ComparisonOperator": "GreaterThanOrEqualToThreshold",
                "Threshold": "90"
              }
            ]
          },
          "ExpressionListJoin": "||",
          "ExpressionRaw": "$Average > ($instanceId == 'i-io8kfvcpp7x5****'? 80: 50)",
          "Times": 3
        },
        "Labels": {
          "Labels": [
            {
              "Key": "cmsRuleKey",
              "Value": "cmsRuleValue"
            }
          ]
        },
        "Prometheus": {
          "PromQL": "CpuUsage{instanceId=\"xxxx\"}[1m]>90",
          "Level": "CRITICAL",
          "Times": 3,
          "Annotations": {
            "Annotations": [
              {
                "Key": "summary",
                "Value": "{{ $labels.instance }} CPU usage above 10% {current value: {{ humanizePercentage $value }} }"
              }
            ]
          }
        },
        "ProductCategory": "slb",
        "GmtCreate": 1760432061000,
        "GmtUpdate": "1760432061000"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidParameter

Invalid parameter.

Parameter error

500

InternalError

The request processing has failed due to some unknown error.

403

InvalidAuthorization

The Request is not authorization.

404

ResourceNotFound

The specified resource is not found.

The specified resource is not found.

See [Error Codes](https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/DescribeMetricRuleList#workbench-doc-change-demo) for a complete list.
