If Internet access is disabled for the ApsaraDB for Redis instance, or if the instance can access the Internet but its whitelists do not contain 0.0.0.0/0, the evaluation result is Compliant.

## Scenarios

If 0.0.0.0/0 is added to the IP address whitelist of an ApsaraDB for Redis instance, the instance allows access from all CIDR blocks. This exposes the instance to high security risks. Proceed with caution.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If Internet access is disabled for the ApsaraDB for Redis instance, or if the instance can access the Internet but its whitelists do not contain 0.0.0.0/0, the evaluation result is Compliant.
-   If Internet access is enabled for the ApsaraDB for Redis instance and its whitelists contain 0.0.0.0/0, the evaluation result is Incompliant. For information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-eql-swa-vmo)" section of this topic.

## Rule details

**Item**

**Description**

Rule name

redis-public-and-any-ip-access-check

Rule identifier

redis-public-and-any-ip-access-check

Tag

Redis and Public

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for Redis instance

Input parameter

None

## Incompliance remediation

Disable Internet access for the instance, or delete 0.0.0.0/0 from its whitelists. For more information, see [Configure an IP address whitelist](/help/en/redis/user-guide/configure-whitelists#concept-lmv-qhf-vdb).
