Checks whether 0.0.0.0/0 is added to the whitelist of each ApsaraDB RDS instance. If 0.0.0.0/0 is not added to the whitelist of each ApsaraDB RDS instance, the evaluation result is Compliant.

## Scenarios

If 0.0.0.0/0 is added to the whitelist of an ApsaraDB RDS instance, the instance allows access from all CIDR blocks over the Internet. This exposes the data of the instance to high security risks. Proceed with caution.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If 0.0.0.0/0 is not added to the whitelist of each ApsaraDB RDS instance, the evaluation result is Compliant.
-   If 0.0.0.0/0 is added to the whitelist of an ApsaraDB RDS instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-12h-rba-oio).

**Note** If 127.0.0.1 is added to the whitelist of an ApsaraDB RDS instance, the instance denies access from all IP addresses. Proceed with caution.

## Rule details

**Item**

**Description**

Rule name

rds-instance-enabled-security-ip-list

Rule identifier

rds-instance-enabled-security-ip-list

Tag

RDS

Automatic remediation

Supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

None.

## Incompliance remediation

Remove 0.0.0.0/0 from the whitelist of an ApsaraDB RDS instance. For more information, see [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance#concept-rpj-hs4-ydb).
