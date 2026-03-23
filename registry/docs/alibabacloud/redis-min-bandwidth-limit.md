Checks whether the available bandwidth of an ApsaraDB for Redis instance is greater than or equal to the specified value.

## Scenario

Make sure that the available bandwidth of an ApsaraDB for Redis instance meets your business requirements. Otherwise, your business system may be interrupted.

## Risk level

Default risk level: low.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the available bandwidth of the ApsaraDB for Redis instance is greater than or equal to the specified value, the configuration is considered compliant.
-   If the available bandwidth of the ApsaraDB for Redis instance is less than the specified value, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

**Item**

**Description**

Rule name

redis-min-bandwidth-limit

Rule ID

redis-min-bandwidth-limit

Tag

Redis and Bandwidth

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for Redis instance

Input parameter

`bandwidth`. Default value: 1000. Unit: MB/s.

## Non-compliance remediation

Change the bandwidth of the ApsaraDB for Redis instance. For more information, see [Change instance configurations](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb).
