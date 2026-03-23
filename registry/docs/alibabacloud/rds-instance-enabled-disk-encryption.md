Checks whether the disk encryption feature is enabled for each ApsaraDB RDS instance. If so, the evaluation result is Compliant.

## Scenarios

You can use the disk encryption feature provided by Alibaba Cloud on ApsaraDB RDS instances free of charge. The disk encryption feature helps you encrypt the data in the disks of your ApsaraDB RDS instances based on block storage. This way, backup data cannot be decrypted even if the data is leaked. This ensures data security.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the disk encryption feature is enabled for each ApsaraDB RDS instances, the evaluation result is Compliant.
-   If the disk encryption feature is disabled for an ApsaraDB RDS instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-vge-m2q-91g).

## Rule details

**Item**

**Description**

Rule name

rds-instance-enabled-disk-encryption

Rule identifier

rds-instance-enabled-disk-encryption

Tag

RDS

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

Enable the disk encryption feature for an ApsaraDB RDS instance. For more information, see [Disk encryption](/help/en/rds/apsaradb-rds-for-mysql/configure-the-disk-encryption-feature-for-an-apsaradb-rds-for-mysql-instance#concept-2054727).
