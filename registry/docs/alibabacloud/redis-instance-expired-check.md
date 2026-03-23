Checks whether the duration between the expiration date of each subscription ApsaraDB for Redis instance and the check date is greater than a specified number of days. If so, the evaluation result is Compliant.

## Scenarios

To ensure business continuity, we recommend that you renew each subscription ApsaraDB for Redis instance before it expires.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the duration between the expiration date of each subscription ApsaraDB for Redis instance and the check date is greater than a specified number of days, the evaluation result is Compliant.
-   If the duration between the expiration date of each subscription ApsaraDB for Redis instance and the check date is less than or equal to a specified number of days, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-em7-5qi-yvl).

## Rule details

**Item**

**Description**

Rule name

redis-instance-expired-check

Rule identifier

redis-instance-expired-check

Tag

Redis and ResourceExpired

Automatic remediation

Not supported

Trigger type

Configuration change and periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

ApsaraDB for Redis instance

Input parameter

`days`. Default value: 30. Unit: days.

## Incompliance remediation

Renew a subscription ApsaraDB for Redis instance before the instance expires or enable auto renewal for an ApsaraDB for Redis instance. For more information, see [Instance renewal](/help/en/redis/product-overview/renewal#concept-fl3-rn4-tdb).
