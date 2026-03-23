If 0.0.0.0/0 is not added to the IP address whitelist of each ApsaraDB for Redis instance, the evaluation result is Compliant.

## Scenarios

If 0.0.0.0/0 is added to the IP address whitelist of an ApsaraDB for Redis instance, the instance allows access from all CIDR blocks. This exposes the instance to high security risks. Proceed with caution.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If 0.0.0.0/0 is not added to the IP address whitelist of each ApsaraDB for Redis instance, the evaluation result is Compliant.
-   If 0.0.0.0/0 is added to the IP address whitelist of an ApsaraDB for Redis instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

redis-public-access-check

Rule identifier

redis-public-access-check

Tag

Redis and VPC

Automatic remediation

Supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for Redis instance

Input parameter

None.

## Incompliance remediation

Remove 0.0.0.0/0 from the whitelist of an ApsaraDB for Redis instance. For more information, see [Configure an IP address whitelist](/help/en/redis/user-guide/configure-whitelists#concept-lmv-qhf-vdb).
