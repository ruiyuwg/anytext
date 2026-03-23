Checks whether the value of the `default_time_zone` parameter of each PolarDB cluster is the same as the value of the `System` parameter. If not, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to configure the same time zone settings for the databases of a PolarDB cluster. This ensures that the time zone settings for all databases in a PolarDB cluster are consistent and prevents your business from being affected due to inconsistent time zone settings.

## Risk level

Default risk level: high.

When you configure this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the value of the `default_time_zone` parameter of each PolarDB cluster is different from the value of the `System` parameter, the evaluation result is Compliant.
-   If the value of the `default_time_zone` parameter of each PolarDB cluster is the same as the value of the `System` parameter, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-3z7-857-ivc).

## Rule details

**Item**

**Description**

Rule name

polardb-cluster-default-time-zone-not-system

Rule identifier

polardb-cluster-default-time-zone-not-system

Tag

PolarDB

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

PolarDB clusters

Input parameter

None

## Incompliance remediation

Set the `default_time_zone` parameter of a PolarDB cluster to a value that is different from the value of the `System` parameter. For more information, see [Configure cluster and node parameters](/help/en/polardb/polardb-for-mysql/user-guide/specify-cluster-and-node-parameters#task-1580301).
