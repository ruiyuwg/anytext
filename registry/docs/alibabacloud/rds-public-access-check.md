Checks whether an ApsaraDB RDS instance has a public endpoint in use.

## Scenarios

If clients cannot access an ApsaraDB RDS instance over a VPC, you can apply for a public endpoint for the ApsaraDB RDS instance. A public endpoint affects data security of the instance. We recommend that you apply for a public endpoint with caution. You may need to apply for a public endpoint in the following scenarios:

-   You need to access an ApsaraDB RDS instance from an Elastic Compute Service (ECS) instance that resides in a different region or has a different network type.
-   You need to access an ApsaraDB RDS instance from a device outside Alibaba Cloud.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the ApsaraDB RDS instance does not have a public endpoint in use, the configuration is considered compliant.
-   If the ApsaraDB RDS instance has a public endpoint in use, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

 

Item

Description

Rule name

rds-public-access-check

Rule ID

rds-public-access-check

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

Release the public endpoint of the ApsaraDB RDS instance. For more information, see [Apply for or release a public endpoint for an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/apply-for-or-release-a-public-endpoint-for-an-apsaradb-rds-for-mysql-instance#concept-nsl-hff-vdb "ApsaraDB RDS supports two types of endpoints: internal endpoints and public endpoints. By default, you are provided with an internal endpoint that is used to connect to your ApsaraDB RDS for MySQL instance. If you want to connect to your RDS instance over the Internet, you must apply for a public endpoint.").
