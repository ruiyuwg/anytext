-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Monitoring v3 API - Class AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition (3.13.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.13.0keyboard\_arrow\_down

-   [3.16.0 (latest)](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/latest/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.15.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.14.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.12.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.11.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.10.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.9.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.8.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.7.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.6.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.4.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.3.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.1.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.5.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.4.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.3.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)

```
public sealed class AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition : IMessage<AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition>, IEquatable<AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition>, IDeepCloneable<AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Monitoring v3 API class AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition.

A condition type that allows alerting policies to be defined using [Prometheus Query Language (PromQL)](https://prometheus.io/docs/prometheus/latest/querying/basics/).

The PrometheusQueryLanguageCondition message contains information from a Prometheus alerting rule and its associated rule group.

A Prometheus alerting rule is described [here](https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/). The semantics of a Prometheus alerting rule is described [here](https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/#rule).

A Prometheus rule group is described [here](https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/). The semantics of a Prometheus rule group is described [here](https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/#rule_group).

Because Cloud Alerting has no representation of a Prometheus rule group resource, we must embed the information of the parent rule group inside each of the conditions that refer to it. We must also update the contents of all Prometheus alerts in case the information of their rule group changes.

The PrometheusQueryLanguageCondition protocol buffer combines the information of the corresponding rule group and alerting rule. The structure of the PrometheusQueryLanguageCondition protocol buffer does NOT mimic the structure of the Prometheus rule group and alerting rule YAML declarations. The PrometheusQueryLanguageCondition protocol buffer may change in the future to support future rule group and/or alerting rule features. There are no new such features at the present time (2023-06-26).

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types)[Condition](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types)[PrometheusQueryLanguageCondition](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types)[Condition](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types)[PrometheusQueryLanguageCondition](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types)[Condition](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types)[PrometheusQueryLanguageCondition](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Monitoring.V3](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3)

## Assembly

Google.Cloud.Monitoring.V3.dll

## Constructors

### PrometheusQueryLanguageCondition()

```
public PrometheusQueryLanguageCondition()
```

### PrometheusQueryLanguageCondition(PrometheusQueryLanguageCondition)

```
public PrometheusQueryLanguageCondition(AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition other)
```

**Parameter**

**Name**

**Description**

`other`

`[AlertPolicy](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types)[Condition](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)[Types](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types)[PrometheusQueryLanguageCondition](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.PrometheusQueryLanguageCondition)`  

## Properties

### AlertRule

```
public string AlertRule { get; set; }
```

Optional. The alerting rule name of this alert in the corresponding Prometheus configuration file.

Some external tools may require this field to be populated correctly in order to refer to the original Prometheus configuration file. The rule group name and the alert name are necessary to update the relevant AlertPolicies in case the definition of the rule group changes in the future.

This field is optional. If this field is not empty, then it must be a [valid Prometheus label name](https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels). This field may not exceed 2048 Unicode characters in length.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### DisableMetricValidation

```
public bool DisableMetricValidation { get; set; }
```

Optional. Whether to disable metric existence validation for this condition.

This allows alerting policies to be defined on metrics that do not yet exist, improving advanced customer workflows such as configuring alerting policies using Terraform.

Users with the `monitoring.alertPolicyViewer` role are able to see the name of the non-existent metric in the alerting policy condition.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Duration

```
public Duration Duration { get; set; }
```

Optional. Alerts are considered firing once their PromQL expression was evaluated to be "true" for this long. Alerts whose PromQL expression was not evaluated to be "true" for long enough are considered pending. Must be a non-negative duration or missing. This field is optional. Its default value is zero.

**Property Value**

**Type**

**Description**

`[Duration](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Duration.html)`

### EvaluationInterval

```
public Duration EvaluationInterval { get; set; }
```

Optional. How often this rule should be evaluated. Must be a positive multiple of 30 seconds or missing. This field is optional. Its default value is 30 seconds. If this PrometheusQueryLanguageCondition was generated from a Prometheus alerting rule, then this value should be taken from the enclosing rule group.

**Property Value**

**Type**

**Description**

`[Duration](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Duration.html)`

### Labels

```
public MapField<string, string> Labels { get; }
```

Optional. Labels to add to or overwrite in the PromQL query result. Label names [must be valid](https://prometheus.io/docs/concepts/data_model/#metric-names-and-labels). Label values can be [templatized by using variables](https://cloud.google.com/monitoring/alerts/doc-variables#doc-vars). The only available variable names are the names of the labels in the PromQL result, including "**name**" and "value". "labels" may be empty.

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)[string](https://learn.microsoft.com/dotnet/api/system.string)[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Query

```
public string Query { get; set; }
```

Required. The PromQL expression to evaluate. Every evaluation cycle this expression is evaluated at the current time, and all resultant time series become pending/firing alerts. This field must not be empty.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### RuleGroup

```
public string RuleGroup { get; set; }
```

Optional. The rule group name of this alert in the corresponding Prometheus configuration file.

Some external tools may require this field to be populated correctly in order to refer to the original Prometheus configuration file. The rule group name and the alert name are necessary to update the relevant AlertPolicies in case the definition of the rule group changes in the future.

This field is optional. If this field is not empty, then it must contain a valid UTF-8 string. This field may not exceed 2048 Unicode characters in length.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
