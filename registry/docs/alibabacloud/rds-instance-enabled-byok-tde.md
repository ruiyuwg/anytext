Checks whether the Transparent Data Encryption (TDE) feature is enabled for the custom keys of each ApsaraDB RDS instance. If so, the evaluation result is Compliant.

## Scenarios

You can use the custom keys of each ApsaraDB RDS instance to encrypt data. This helps you meet regulatory requirements and improve data security.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the TDE feature is enabled for the custom keys of each ApsaraDB RDS instance, the evaluation result is Compliant.
-   If the TDE feature is disabled for the custom keys of an ApsaraDB RDS instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-crg-d0z-483).

## Rule details

**Item**

**Description**

Rule name

rds-instance-enabled-byok-tde

Rule identifier

rds-instance-enabled-byok-tde

Tag

RDS and TDE

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

Enable the TDE feature for the custom keys of each ApsaraDB RDS instance. For more information, see [Configure Transparent Data Encryption (TDE)](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance#task-jrp-dw4-ydb).
