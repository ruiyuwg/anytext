If the log backup feature is enabled for each AnalyticDB for MySQL cluster, the evaluation result is Compliant.

## Scenarios

In AnalyticDB for MySQL, you can use log backups to improve data security and minimize the impact of accidental operations.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the log backup feature is enabled for each AnalyticDB for MySQL cluster, the evaluation result is Compliant.
-   If the log backup feature is disabled for all AnalyticDB for MySQL clusters, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the [Incompliance remediation](#section-ih0-25n-vbr) section of this topic.

## Rule details

Parameter

Description

Rule name

adb-cluster-log-backup-enabled

Rule ID

adb-cluster-log-backup-enabled

Tag

ADB, Cluster, and Backup

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

AnalyticDB for MySQL clusters

Input parameter

None

## Incompliance remediation

Enable log backup for each AnalyticDB for MySQL cluster. For more information, see [Manage backups](/help/en/analyticdb/analyticdb-for-mysql/user-guide/manage-backups#task-2096742).
