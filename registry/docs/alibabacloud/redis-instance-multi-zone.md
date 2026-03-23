Checks whether each ApsaraDB for Redis instance is of dual-zone deployment. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to use ApsaraDB for Redis instances of dual-zone deployment. This helps improve disaster recovery capabilities and ensure business continuity.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If each ApsaraDB for Redis instance is of dual-zone deployment, the evaluation result is Compliant.
-   If an ApsaraDB for Redis instance is not of dual-zone deployment, the evaluation result is Incompliant.

## Rule details

 

Item

Description

Rule name

redis-instance-multi-zone

Rule identifier

redis-instance-multi-zone

Tag

Redis

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for Redis instance

Input parameter

None.
