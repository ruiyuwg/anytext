Checks whether the log backup feature is enabled for each ApsaraDB RDS instance. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to enable the log backup feature for each ApsaraDB RDS instance. This helps you meet security and regulatory requirements. ApsaraDB RDS supports data backups and log backups.

If you enable the log backup feature for an ApsaraDB RDS instance, the binary log files of the ApsaraDB RDS instance are uploaded to dedicated backup space in real time. The binary log files in the dedicated backup storage are called log backup files. You can use log backup files to restore data to a specific point in time within the specified retention period of backup data.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the log backup feature is enabled for each ApsaraDB RDS instance, the evaluation result is Compliant.
-   If the log backup feature is disabled for each ApsaraDB RDS instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-sxe-uid-uzx).

## Rule details

**Item**

**Description**

Rule name

rds-instance-enabled-log-backup

Rule identifier

rds-instance-enabled-log-backup

Tag

RDS and Backup

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

ApsaraDB RDS instance

Input parameter

None.

## Incompliance remediation

Enable the log backup feature for an ApsaraDB RDS instance. For more information, see [Manage binary log files](/help/en/rds/apsaradb-rds-for-mysql/view-and-delete-the-binary-log-files-of-an-apsaradb-rds-for-mysql-instance#concept-2101409).
