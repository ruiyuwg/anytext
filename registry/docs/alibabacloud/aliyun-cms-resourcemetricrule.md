ALIYUN::CMS::ResourceMetricRule is used to create a threshold-triggered alert rule for a metric of a resource.

## Syntax

```
{
  "Type": "ALIYUN::CMS::ResourceMetricRule",
  "Properties": {
    "NoEffectiveInterval": String,
    "ContactGroups": List,
    "SilenceTime": Integer,
    "RuleId": String,
    "Period": Integer,
    "Prometheus": Map,
    "Labels": List,
    "EffectiveInterval": String,
    "NoDataPolicy": String,
    "Namespace": String,
    "MetricName": String,
    "DeletionForce": Boolean,
    "Escalations": Map,
    "EmailSubject": String,
    "CompositeExpression": Map,
    "Webhook": String,
    "Resources": List,
    "RuleName": String,
    "Interval": Integer
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ContactGroups

List

Yes

Yes

The alert contact groups.

CloudMonitor sends alert notifications to the alert contacts that belong to the alert contact groups.

**Note**

An alert contact group can contain one or more alert contacts. For more information about how to create an alert contact and an alert contact group, see [PutContact](/help/en/cms/cloudmonitor-1-0/api-putcontact#doc-api-Cms-PutContact) and [PutContactGroup](/help/en/cms/cloudmonitor-1-0/api-putcontactgroup#doc-api-Cms-PutContactGroup).

Escalations

Map

Yes

Yes

Details of the alerts.

For more information, see [Escalations properties](#section-6r9-4rb-47k).

MetricName

String

Yes

Yes

The metric name.

For more information about how to query a metric name, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).

**Note**

If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this property to a namespace name. For more information about how to query a namespace name, see [DescribeHybridMonitorNamespaceList](/help/en/cms/cloudmonitor-1-0/api-describehybridmonitornamespacelist#doc-api-Cms-DescribeHybridMonitorNamespaceList).

Namespace

String

Yes

Yes

The namespace of the cloud service.

For more information about how to query the namespace of a cloud service, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).

**Note**

You must set this property to acs\_prometheus when you create a Prometheus alert rule for Hybrid Cloud Monitoring.

Resources

List

Yes

Yes

The information about the resources.

Examples: `[{"instanceId":"i-uf6j91r34rnwawoo****"}]` and `[{"userId":"100931896542****"}]`. For more information about the supported dimensions that are used to query resources, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).

CompositeExpression

Map

No

Yes

The trigger conditions for multiple metrics.

For more information, see [CompositeExpression properties](#section-0tg-dr1-y9z).

**Note**

The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics in a request.

DeletionForce

Boolean

No

Yes

Specifies whether to forcefully delete the alert rule.

Valid values:

-   true
    
-   false
    

EffectiveInterval

String

No

Yes

The period of time during which the alert rule is effective.

Example: 00:00-23:59.

EmailSubject

String

No

Yes

The subject of the alert notification email.

None.

Interval

Integer

No

Yes

The interval at which alerts are triggered based on the alert rule.

Unit: seconds.

**Note**

For more information about how to query the statistical period of a metric, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).

Labels

List

No

Yes

The information about the tags.

For more information, see [Labels properties](#section-dhf-417-fma).

NoDataPolicy

String

No

Yes

The method that is used to handle alerts when no monitoring data is found.

Valid values:

-   KEEP\_LAST\_STATE (default): performs no operation.
    
-   INSUFFICIENT\_DATA: triggers an alert whose content is "Insufficient data".
    
-   OK: considers the status normal.
    

NoEffectiveInterval

String

No

Yes

The period of time during which the alert rule is ineffective.

Example: 00:00-23:59.

Period

Integer

No

Yes

The statistical period of the metric.

Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.

**Note**

For more information about how to query the statistical period of a metric, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).

Prometheus

Map

No

Yes

The information about the Prometheus alert rule.

For more information, see [Prometheus properties](#section-ekr-wjc-c11).

**Note**

You must specify this property when you create a Prometheus alert rule for Hybrid Cloud Monitoring.

RuleId

String

No

No

The ID of the alert rule.

You can specify a new ID or the ID of an existing alert rule. For more information about how to query the ID of an alert rule, see [DescribeMetricRuleList](/help/en/cms/cloudmonitor-1-0/api-describemetricrulelist#doc-api-Cms-DescribeMetricRuleList).

**Note**

If you specify a new ID, a threshold-triggered alert rule is created.

RuleName

String

No

Yes

The name of the alert rule.

You can specify a new name or the name of an existing alert rule in CloudMonitor. For more information about how to query the name of an alert rule, see [DescribeMetricRuleList](/help/en/cms/cloudmonitor-1-0/api-describemetricrulelist#doc-api-Cms-DescribeMetricRuleList).

**Note**

If you specify a new name, a threshold-triggered alert rule is created.

SilenceTime

Integer

No

Yes

The mute period during which new alert notifications are not sent even if the trigger conditions are met.

Unit: seconds. Default value: 86400.

**Note**

If an alert is not cleared after the mute period ends, CloudMonitor resends an alert notification.

Webhook

String

No

Yes

The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.

None.

## Prometheus syntax

```
"Prometheus": {
  "Annotations": List,
  "PromQL": String,
  "Times": Integer,
  "Level": String
}
```

## Prometheus properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Level

String

Yes

Yes

The alert level.

Valid values:

-   Critical
    
-   Warn
    
-   Info
    

PromQL

String

Yes

Yes

The PromQL query statement.

None.

Times

Integer

Yes

Yes

The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this property, CloudMonitor sends alert notifications.

None.

Annotations

List

No

Yes

The annotations of the Prometheus alert rule. When a Prometheus alert is triggered, the system renders the keys and values of the annotations.

For more information, see [Annotations properties](#section-wtv-blw-ojn).

**Note**

This property has the same effect as the Annotation property in the Prometheus property.

## Annotations syntax

```
"Annotations": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Annotations properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

No

Yes

The key of the annotation.

None.

Value

String

No

Yes

The value of the annotation.

None.

## Labels syntax

```
"Labels": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Labels properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

Yes

Yes

The tag key.

None.

Value

String

No

Yes

The tag value.

None.

## Escalations syntax

```
"Escalations": {
  "Critical": Map,
  "Info": Map,
  "Warn": Map
}
```

## Escalations properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Critical

Map

No

Yes

Details of the Critical-level alerts.

For more information, see [Critical properties](#section-jw5-9rs-dy9).

Info

Map

No

Yes

Details of the Info-level alerts.

For more information, see [Info properties](#section-px4-e4c-g6r).

Warn

Map

No

Yes

Details of the Warn-level alerts.

For more information, see [Warn properties](#section-r7i-dht-ffi).

## Critical syntax

```
"Critical": {
  "ComparisonOperator": String,
  "Times": Integer,
  "Statistics": String,
  "Threshold": String
}
```

## Critical properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ComparisonOperator

String

Yes

Yes

The operator that is used to compare the metric value with the threshold for the Critical-level alert.

Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
    
-   GreaterThanThreshold: greater than the threshold
    
-   LessThanOrEqualToThreshold: less than or equal to the threshold
    
-   LessThanThreshold: less than the threshold
    
-   NotEqualToThreshold: not equal to the threshold
    
-   GreaterThanYesterday: greater than the metric value at the same time yesterday
    
-   LessThanYesterday: less than the metric value at the same time yesterday
    
-   GreaterThanLastWeek: greater than the metric value at the same time last week
    
-   LessThanLastWeek: less than the metric value at the same time last week
    
-   GreaterThanLastPeriod: greater than the metric value in the previous monitoring cycle
    
-   LessThanLastPeriod: less than the metric value in the previous monitoring cycle
    

**Note**

You must configure at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times properties for the alert level.

Statistics

String

Yes

Yes

The statistical method for the Critical-level alert.

Valid values:

-   Maximum: maximum value
    
-   Minimum: minimum value
    
-   Average: average value
    
-   Availability: availability rate
    

**Note**

You must configure at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times properties for the alert level.

Threshold

String

Yes

Yes

The threshold for the Critical-level alert.

**Note**

You must configure at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times properties for the alert level.

Times

Integer

Yes

Yes

The number of consecutive times for which the metric value must meet the trigger condition before the Critical-level alert is triggered.

**Note**

You must configure at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times properties for the alert level.

## Info syntax

```
"Info": {
  "ComparisonOperator": String,
  "Times": Integer,
  "Statistics": String,
  "Threshold": String
}
```

## Info properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ComparisonOperator

String

Yes

Yes

The operator that is used to compare the metric value with the threshold for the Info-level alert.

Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
    
-   GreaterThanThreshold: greater than the threshold
    
-   LessThanOrEqualToThreshold: less than or equal to the threshold
    
-   LessThanThreshold: less than the threshold
    
-   NotEqualToThreshold: not equal to the threshold
    
-   GreaterThanYesterday: greater than the metric value at the same time yesterday
    
-   LessThanYesterday: less than the metric value at the same time yesterday
    
-   GreaterThanLastWeek: greater than the metric value at the same time last week
    
-   LessThanLastWeek: less than the metric value at the same time last week
    
-   GreaterThanLastPeriod: greater than the metric value in the previous monitoring cycle
    
-   LessThanLastPeriod: less than the metric value in the previous monitoring cycle
    

**Note**

You must configure at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times properties for the alert level.

Statistics

String

Yes

Yes

The statistical method for the Info-level alert.

Valid values:

-   Maximum: maximum value
    
-   Minimum: minimum value
    
-   Average: average value
    
-   Availability: availability rate
    

**Note**

You must configure at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times properties for the alert level.

Threshold

String

Yes

Yes

The threshold for the Info-level alert.

**Note**

You must configure at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times properties for the alert level.

Times

Integer

Yes

Yes

The number of consecutive times for which the metric value must meet the trigger condition before the Info-level alert is triggered.

**Note**

You must configure at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times properties for the alert level.

## Warn syntax

```
"Warn": {
  "ComparisonOperator": String,
  "Times": Integer,
  "Statistics": String,
  "Threshold": String
}
```

## Warn properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ComparisonOperator

String

Yes

Yes

The operator that is used to compare the metric value with the threshold for the Warn-level alert.

Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
    
-   GreaterThanThreshold: greater than the threshold
    
-   LessThanOrEqualToThreshold: less than or equal to the threshold
    
-   LessThanThreshold: less than the threshold
    
-   NotEqualToThreshold: not equal to the threshold
    
-   GreaterThanYesterday: greater than the metric value at the same time yesterday
    
-   LessThanYesterday: less than the metric value at the same time yesterday
    
-   GreaterThanLastWeek: greater than the metric value at the same time last week
    
-   LessThanLastWeek: less than the metric value at the same time last week
    
-   GreaterThanLastPeriod: greater than the metric value in the previous monitoring cycle
    
-   LessThanLastPeriod: less than the metric value in the previous monitoring cycle
    

**Note**

You must configure at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times properties for the alert level.

Statistics

String

Yes

Yes

The statistical method for the Warn-level alert.

Valid values:

-   Maximum: maximum value
    
-   Minimum: minimum value
    
-   Average: average value
    
-   Availability: availability rate
    

**Note**

You must configure at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times properties for the alert level.

Threshold

String

Yes

Yes

The threshold for the Warn-level alert.

**Note**

You must configure at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times properties for the alert level.

Times

Integer

Yes

Yes

The number of consecutive times for which the metric value must meet the trigger condition before the Warn-level alert is triggered.

**Note**

You must configure at least one of the Critical, Warn, and Info alert levels and specify the Statistics, ComparisonOperator, Threshold, and Times properties for the alert level.

## CompositeExpression syntax

```
"CompositeExpression": {
  "Times": Integer,
  "ExpressionRaw": String,
  "ExpressionListJoin": String,
  "Level": String,
  "ExpressionList": List
}
```

## CompositeExpression properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Level

String

Yes

Yes

The alert level.

Valid values:

-   Critical
    
-   Warn
    
-   Info
    

Times

Integer

Yes

Yes

The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this property, CloudMonitor sends alert notifications.

None.

ExpressionList

List

No

Yes

The trigger conditions created in standard mode.

For more information, see [ExpressionList properties](#section-hfe-iky-cji).

ExpressionListJoin

String

No

Yes

The relationship between the trigger conditions for multiple metrics.

Valid values:

-   &&: An alert is triggered only if all metrics meet the trigger conditions.
    
-   ||: An alert is triggered if one of the metrics meets the trigger conditions.
    

ExpressionRaw

String

No

Yes

The trigger conditions created by using expressions.

You can use expressions to create trigger conditions in the following scenarios:

-   Configure an alert blacklist for a specific resource. For example, if you specify `$instanceId != 'i-io8kfvcpp7x5****' && $Average > 50`, no alert is triggered when the average metric value of the `i-io8kfvcpp7x5****` instance exceeds 50.
    
-   Specify a special alert threshold for a specified instance in the alert rule. For example, if you specify `$Average > ($instanceId == 'i-io8kfvcpp7x5****'? 80: 50)`, an alert is triggered when the average metric value of the `i-io8kfvcpp7x5****` instance exceeds 80 or the average metric value of other instances exceeds 50.
    
-   Limit the number of instances whose metric values exceed the threshold. For example, if you specify `count($Average > 20) > 3`, an alert is triggered only when the average metric value of more than three instances exceeds 20.
    

## ExpressionList syntax

```
"ExpressionList": [
  {
    "MetricName": String,
    "ComparisonOperator": String,
    "Period": Integer,
    "Statistics": String,
    "Threshold": String
  }
]
```

## ExpressionList properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ComparisonOperator

String

Yes

Yes

The operator that is used to compare the metric value with the threshold.

Valid values:

-   GreaterThanOrEqualToThreshold: greater than or equal to the threshold
    
-   GreaterThanThreshold: greater than the threshold
    
-   LessThanOrEqualToThreshold: less than or equal to the threshold
    
-   LessThanThreshold: less than the threshold
    
-   NotEqualToThreshold: not equal to the threshold
    
-   GreaterThanYesterday: greater than the metric value at the same time yesterday
    
-   LessThanYesterday: less than the metric value at the same time yesterday
    
-   GreaterThanLastWeek: greater than the metric value at the same time last week
    
-   LessThanLastWeek: less than the metric value at the same time last week
    
-   GreaterThanLastPeriod: greater than the metric value in the previous monitoring cycle
    
-   LessThanLastPeriod: less than the metric value in the previous monitoring cycle
    

MetricName

String

Yes

Yes

The metric name of the cloud service.

None.

Period

Integer

Yes

Yes

The aggregation period of the metric.

Unit: seconds.

Statistics

String

Yes

Yes

The statistical method of the metric.

Valid values:

-   $Maximum: maximum value.
    
-   $Minimum: minimum value.
    
-   $Average: average value.
    
-   $Availability: availability rate. In most cases, the availability rate is used for site monitoring.
    

**Note**

$ is the prefix of the metric. For more information about the cloud services that are supported by CloudMonitor, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).

Threshold

String

Yes

Yes

The alert threshold.

None.

## Return values

Fn::GetAtt

-   RuleId: the ID of the alert rule.
    
-   RuleName: the name of the alert rule.
    

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ContactGroups": {
      "Type": "Json",
      "Description": "The alert contact group.\nThe alert notifications are sent to the contacts that belong to the alert contact group.\nNote: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.",
      "MinLength": 1
    },
    "Namespace": {
      "Type": "String",
      "Description": "The namespace of the cloud service.\nFor information about how to query the namespace of a cloud service, Appendix 1: Metrics.\nNote: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus."
    },
    "MetricName": {
      "Type": "String",
      "Description": "The name of the metric.\nFor information about how to query the name of a metric, see Appendix 1: Metrics.\nNote: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList."
    },
    "Escalations": {
      "Type": "Json",
      "Description": "You must select at least one of the Critical, Warn, and Info alert levels.",
      "MinLength": 1
    },
    "Resources": {
      "Type": "Json",
      "Description": "The information about the resource.\nExamples: [{\"instanceId\":\"i-uf6j91r34rnwawoo****\"}] and [{\"userId\":\"100931896542****\"}].\nFor information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.",
      "MinLength": 1
    }
  },
  "Resources": {
    "ResourceMetricRule": {
      "Type": "ALIYUN::CMS::ResourceMetricRule",
      "Properties": {
        "ContactGroups": {
          "Ref": "ContactGroups"
        },
        "Namespace": {
          "Ref": "Namespace"
        },
        "MetricName": {
          "Ref": "MetricName"
        },
        "Resources": {
          "Ref": "Resources"
        },
        "Escalations": {
          "Ref": "Escalations"
        }
      }
    }
  },
  "Outputs": {
    "RuleId": {
      "Description": "The ID of the alert rule.",
      "Value": {
        "Fn::GetAtt": [
          "ResourceMetricRule",
          "RuleId"
        ]
      }
    },
    "RuleName": {
      "Description": "The name of the alert rule.",
      "Value": {
        "Fn::GetAtt": [
          "ResourceMetricRule",
          "RuleName"
        ]
      }
    }
  }
}
```
