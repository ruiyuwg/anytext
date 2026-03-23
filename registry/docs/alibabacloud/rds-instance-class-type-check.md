If the ApsaraDB RDS instance is a dedicated RDS instance, the evaluation result is Compliant.

## Scenarios

Dedicated instances enjoy dedicated CPU and memory resources. The performance of a dedicated RDS instance is guaranteed and is not affected by the other instances that are deployed on the same physical host.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the ApsaraDB RDS instance is a dedicated RDS instance, the evaluation result is Compliant.
-   If the ApsaraDB RDS instance is not a dedicated RDS instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-twy-1w1-g2d)" section of this topic.

## Rule details

**Item**

**Description**

Rule name

rds-instance-class-type-check

Rule identifier

rds-instance-class-type-check

Tag

RDS and Instance

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instances

Input parameter

None

## Incompliance remediation

Change the instance families of ApsaraDB RDS instances to the dedicated instance family. For more information, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-mysql/change-the-specifications-of-an-apsaradb-rds-for-mysql-instance#concept-efl-pln-wdb).
