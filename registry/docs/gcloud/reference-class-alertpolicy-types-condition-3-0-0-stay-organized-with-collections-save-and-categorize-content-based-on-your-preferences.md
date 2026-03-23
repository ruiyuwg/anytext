-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class AlertPolicy.Types.Condition (3.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.0.0keyboard\_arrow\_down

-   [3.16.0 (latest)](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/latest/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.15.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.14.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.12.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.11.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.10.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.9.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.8.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.7.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.6.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.4.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.3.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.1.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.5.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.4.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.3.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)

```
public sealed class Condition : IMessage<AlertPolicy.Types.Condition>, IEquatable<AlertPolicy.Types.Condition>, IDeepCloneable<AlertPolicy.Types.Condition>, IBufferMessage, IMessage
```

A condition is a true/false test that determines when an alerting policy should open an incident. If a condition evaluates to true, it signifies that something is wrong.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> AlertPolicy.Types.Condition

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[AlertPolicy.Types.Condition](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[AlertPolicy.Types.Condition](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[AlertPolicy.Types.Condition](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Monitoring.V3](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3)

## Assembly

Google.Cloud.Monitoring.V3.dll

## Constructors

### Condition()

```
public Condition()
```

### Condition(AlertPolicy.Types.Condition)

```
public Condition(AlertPolicy.Types.Condition other)
```

**Parameter**

**Name**

**Description**

`other`

`[AlertPolicy.Types.Condition](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition)`  

## Properties

### ConditionAbsent

```
public AlertPolicy.Types.Condition.Types.MetricAbsence ConditionAbsent { get; set; }
```

A condition that checks that a time series continues to receive new data points.

**Property Value**

**Type**

**Description**

`[AlertPolicy.Types.Condition.Types.MetricAbsence](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.MetricAbsence)`

### ConditionCase

```
public AlertPolicy.Types.Condition.ConditionOneofCase ConditionCase { get; }
```

**Property Value**

**Type**

**Description**

`[AlertPolicy.Types.Condition.ConditionOneofCase](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.ConditionOneofCase)`

### ConditionMatchedLog

```
public AlertPolicy.Types.Condition.Types.LogMatch ConditionMatchedLog { get; set; }
```

A condition that checks for log messages matching given constraints. If set, no other conditions can be present.

**Property Value**

**Type**

**Description**

`[AlertPolicy.Types.Condition.Types.LogMatch](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.LogMatch)`

### ConditionMonitoringQueryLanguage

```
public AlertPolicy.Types.Condition.Types.MonitoringQueryLanguageCondition ConditionMonitoringQueryLanguage { get; set; }
```

A condition that uses the Monitoring Query Language to define alerts.

**Property Value**

**Type**

**Description**

`[AlertPolicy.Types.Condition.Types.MonitoringQueryLanguageCondition](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.MonitoringQueryLanguageCondition)`

### ConditionThreshold

```
public AlertPolicy.Types.Condition.Types.MetricThreshold ConditionThreshold { get; set; }
```

A condition that compares a time series against a threshold.

**Property Value**

**Type**

**Description**

`[AlertPolicy.Types.Condition.Types.MetricThreshold](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.AlertPolicy.Types.Condition.Types.MetricThreshold)`

### DisplayName

```
public string DisplayName { get; set; }
```

A short name or phrase used to identify the condition in dashboards, notifications, and incidents. To avoid confusion, don't use the same display name for multiple conditions in the same policy.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Name

```
public string Name { get; set; }
```

Required if the condition exists. The unique resource name for this condition. Its format is:

projects/\[PROJECT\_ID\_OR\_NUMBER\]/alertPolicies/\[POLICY\_ID\]/conditions/\[CONDITION\_ID\]

`[CONDITION_ID]` is assigned by Stackdriver Monitoring when the condition is created as part of a new or updated alerting policy.

When calling the \[alertPolicies.create\]\[google.monitoring.v3.AlertPolicyService.CreateAlertPolicy\] method, do not include the `name` field in the conditions of the requested alerting policy. Stackdriver Monitoring creates the condition identifiers and includes them in the new policy.

When calling the \[alertPolicies.update\]\[google.monitoring.v3.AlertPolicyService.UpdateAlertPolicy\] method to update a policy, including a condition `name` causes the existing condition to be updated. Conditions without names are added to the updated policy. Existing conditions are deleted if they are not updated.

Best practice is to preserve `[CONDITION_ID]` if you make only small changes, such as those to condition thresholds, durations, or trigger values. Otherwise, treat the change as a new condition and let the existing condition be deleted.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
