Checks whether the release protection feature is enabled for each ApsaraDB for Redis instance. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to enable the release protection feature for an ApsaraDB for Redis instance. This prevents your business from being interrupted if you accidentally release an ApsaraDB for Redis instance.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the release protection feature is enabled for each ApsaraDB for Redis instance, the evaluation result is Compliant.
-   If the release protection feature is disabled for an ApsaraDB for Redis instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-5ng-qe6-0v0).

## Rule details

**Item**

**Description**

Rule name

redis-instance-release-protection

Rule identifier

redis-instance-release-protection

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

## Incompliance remediation

Enable the release protection feature for an ApsaraDB for Redis instance. For more information, see [Enable the release protection feature for an instance](/help/en/redis/user-guide/enable-the-release-protection-feature#task-2495422).
