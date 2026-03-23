If Internet access is disabled for the ApsaraDB RDS instance, or if the instance can access the Internet but its whitelists do not contain 0.0.0.0/0, the evaluation result is Compliant.

## Scenarios

If 0.0.0.0/0 is added to the whitelist of an ApsaraDB RDS instance, the instance allows access from all IP addresses over the Internet. This causes high security risks to the instance. Proceed with caution.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If Internet access is disabled for the ApsaraDB RDS instance, or if the instance can access the Internet but its whitelists do not contain 0.0.0.0/0, the evaluation result is Compliant.
-   If Internet access is enabled for the ApsaraDB RDS instance and its whitelists contain 0.0.0.0/0, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-i9z-iiu-bge)" section of this topic.

## Rule details

**Item**

**Description**

Rule name

rds-public-and-any-ip-access-check

Rule identifier

rds-public-and-any-ip-access-check

Tag

RDS and Public

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instances

Input parameter

None

## Incompliance remediation

Disable Internet access for ApsaraDB RDS instances or delete 0.0.0.0/0 from the whitelists of the instances. For more information, see [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance#concept-rpj-hs4-ydb).
