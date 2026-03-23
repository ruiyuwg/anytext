If the maintenance window of the AnalyticDB for MySQL cluster is within a specified time range, the evaluation result is Compliant.

## Scenarios

We recommend that you set maintenance windows to off-peak hours to avoid impacts on your business.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the maintenance window of the AnalyticDB for MySQL cluster is within a specified time range, the evaluation result is Compliant.
-   If the maintenance window of the AnalyticDB for MySQL cluster is not within any specified time range, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-out-5rt-736)" section of this topic.

## Rule details

**Item**

**Description**

Rule name

adb-cluster-maintain-time-check

Rule identifier

adb-cluster-maintain-time-check

Tag

ADB and DBCluster

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

AnalyticDB for MySQL clusters

Input parameter

`maintainTimes`: The default value is `02:00-04:00,06:00-10:00`

## Incompliance remediation

Set the maintenance windows of AnalyticDB for MySQL clusters to the specified time ranges. For more information, see [Configure a maintenance window](/help/en/analyticdb/analyticdb-for-mysql/user-guide/configure-a-maintenance-window#multiTask548).
