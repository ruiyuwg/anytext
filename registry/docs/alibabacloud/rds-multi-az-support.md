Checks whether an ApsaraDB RDS instance is deployed across multiple zones.

## Scenario

To ensure strong disaster recovery capacities and prevent business system interruption, you can deploy ApsaraDB RDS instances across multiple zones.

**Note** Zones are isolated locations in regions. Each zone has its own independent power supply and network.

## Risk level

Default risk level: low.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the ApsaraDB RDS instance is deployed across multiple zones, the configuration is considered compliant.
-   If the ApsaraDB RDS instance is deployed in only one zone, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

rds-multi-az-support

Rule ID

rds-multi-az-support

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

Migrate the ApsaraDB RDS instance across zones in the same region. For more information, see [Perform cross-zone migration](/help/en/rds/apsaradb-rds-for-mysql/migrate-an-apsaradb-rds-for-mysql-instance-across-zones-in-the-same-region#concept-zwp-gdj-wdb).
