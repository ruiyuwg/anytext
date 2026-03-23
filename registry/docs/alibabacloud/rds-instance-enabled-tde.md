Checks whether Transparent Data Encryption (TDE) encryption is enabled for an ApsaraBD RDS instance.

## Scenario

TDE can be used to perform real-time I/O encryption on data files. The data is encrypted before it is written to the disk. This way, all data files are stored in ciphertext. This ensures data security.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If TDE encryption is enabled for the ApsaraDB RDS instance, the configuration is considered compliant.
-   If TDE encryption is not enabled for the ApsaraDB RDS instance, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

rds-instance-enabled-tde

Rule ID

rds-instance-enabled-tde

Tag

RDS

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

None

## Non-compliance remediation

Configure TDE for the ApsaraDB RDS instance. For more information, see [Configure Transparent Data Encryption (TDE)](/help/en/rds/apsaradb-rds-for-mysql/configure-tde-for-an-apsaradb-rds-for-mysql-instance#task-jrp-dw4-ydb).
