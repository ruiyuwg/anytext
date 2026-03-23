Checks whether the audit logging feature is enabled for each ApsaraDB for Redis instance and the retention period of logs is greater than or equal to a specified value. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to specify an appropriate retention period for an ApsaraDB for Redis instance. This helps you meet security and regulatory requirements.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the audit logging feature is enabled for each ApsaraDB for Redis instance and the retention period of logs is greater than or equal to a specified value, the evaluation result is Compliant.
-   If the audit logging feature is disabled for an ApsaraDB for Redis instance, the evaluation result is Incompliant. If the retention period of logs is less than a specified value, the evaluation result is also Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-idk-1bf-v9u).

## Rule details

**Item**

**Description**

Rule name

redis-instance-audit-log-retention

Rule identifier

redis-instance-audit-log-retention

Tag

Redis and AuditBaseline

Automatic remediation

Supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

ApsaraDB for Redis instance

Input parameter

`days`. Default value: 180. Unit: days.

## Incompliance remediation

Enable the audit logging feature for an ApsaraDB for Redis instance and specify a retention period for logs. For more information, see [Audit logs](/help/en/redis/user-guide/enable-the-new-audit-log-feature/#concept-ddc-ydr-3gb).
