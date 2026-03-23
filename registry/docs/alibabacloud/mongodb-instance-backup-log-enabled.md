Checks whether the log backup feature is enabled for each ApsaraDB for MongoDB instance. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to back up the data of a MongoDB instance and then download the backup file to an on-premises server for storage or restore the backup file to a self-managed database for business testing or data analysis.

## Risk level

Default risk level: low.

When you configure this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the log backup feature is enabled for each MongoDB instance, the evaluation result is Compliant.
-   If the log backup feature is disabled for a MongoDB instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-nft-6i7-7qi).

## Rule details

Item

Description

Rule name

mongodb-instance-backup-log-enabled

Rule identifier

mongodb-instance-backup-log-enabled

Tag

MongoDB

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

MongoDB instances

Input parameter

None

## Incompliance remediation

Enable the log backup feature for a MongoDB instance. For more information, see [Configure automatic backup for an instance](/help/en/mongodb/user-guide/configure-automatic-backup-for-an-instance#concept-gs1-qrp-dgb).
