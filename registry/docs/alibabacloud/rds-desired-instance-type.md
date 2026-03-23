Checks whether an ApsaraDB RDS instance is of the specified type.

## Scenario

You can specify one or more types of ApsaraDB RDS instances that meet your business expansion requirements and that you can afford. Then, you can use this rule to ensure that only the specified types of ApsaraDB RDS instances are used.

## Risk level

Default risk level: low.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the ApsaraDB RDS instance is of the specified type, the configuration is considered compliant.
-   If the ApsaraDB RDS instance is not of the specified type, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

rds-desired-instance-type

Rule ID

rds-desired-instance-type

Tag

RDS

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

`instanceTypes`

**Note** Separate multiple parameter values with commas (,).

## Non-compliance remediation

Change the specifications of the ApsaraDB RDS instance. For more information, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb).
