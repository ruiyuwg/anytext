Checks whether an ApsaraDB for Redis instance uses the cluster architecture.

## Scenario

The cluster architecture provides larger memory size and higher read and write performance. In scenarios that require high performance, we recommend that you use the cluster architecture.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the ApsaraDB for Redis instance uses the cluster architecture, the configuration is considered compliant.
-   If the ApsaraDB for Redis instance does not use the cluster architecture, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

redis-architecturetype-cluster-check

Rule ID

redis-architecturetype-cluster-check

Tag

Redis and VPC

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for Redis instance

Input parameter

None

## Non-compliance remediation

Change the architecture type of the ApsaraDB for Redis instance to cluster. For more information, see [Change instance configurations](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb).
