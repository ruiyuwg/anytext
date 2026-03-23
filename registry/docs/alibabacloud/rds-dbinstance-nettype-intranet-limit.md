Checks whether the network type of an ApsaraDB RDS instance is virtual private cloud (VPC).

## Scenario

A VPC provides a private network environment. A VPC isolates network packets by using underlying network protocols and implements Layer 2 access control. This ensures data security for an ApsaraDB RDS instance.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the network type of the ApsaraDB RDS instance is VPC, the configuration is considered compliant.
-   If the network type of the ApsaraDB RDS instance is classic network, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

rds-dbinstance-nettype-intranet-limit

Rule ID

rds-dbinstance-nettype-intranet-limit

Tag

RDS and VPC

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

None

## Non-compliance remediation

Change the network type of the ApsaraDB RDS instance to VPC. For more information, see [Change the network type](/help/en/rds/apsaradb-rds-for-mysql/change-the-network-type-of-an-apsaradb-rds-for-mysql-instance#concept-zqv-gxx-wdb).
