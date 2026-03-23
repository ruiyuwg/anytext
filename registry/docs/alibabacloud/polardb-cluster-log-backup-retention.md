If the retention period of the log backups of the PolarDB cluster is longer than or equal to the specified number of days, the evaluation result is Compliant.

## Scenarios

Log backups can be used to restore data and implement disaster recovery. We recommend that you set an appropriate retention period and control the size of backup files to reduce cost.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the retention period of the log backups of the PolarDB cluster is longer than or equal to the specified number of days, the evaluation result is Compliant.
-   If the log backup feature is disabled for the PolarDB cluster, the evaluation result is Incompliant. If the log backup feature is enabled for the PolarDB cluster but the retention period of the log backups is shorter than the specified number of days, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-29w-h7l-8xj)" section of this topic.

## Rule details

**Parameter**

**Description**

Rule name

polardb-cluster-log-backup-retention

Rule identifier

polardb-cluster-log-backup-retention

Tag

PolarDB

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

PolarDB cluster

Input parameter

`days`: The default value is 30.

## Incompliance remediation

Enable the log backup feature for the PolarDB cluster and make sure that the retention period is longer than or equal to the specified number of days. For more information, see [Configure backup policy settings](/help/en/polardb/polardb-for-mysql/user-guide/configure-backup-settings#task-2122812).
