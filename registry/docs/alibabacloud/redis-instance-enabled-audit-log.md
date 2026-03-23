Checks whether the audit logging feature is enabled for each ApsaraDB for Redis instance. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to enable the audit logging feature for an ApsaraDB for Redis instance. This feature allows you to query logs, perform online analysis, and export data in real time. You can use the feature to ensure data security for each ApsaraDB for Redis instance.

## Risk level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the audit logging feature is enabled for each ApsaraDB for Redis instance, the evaluation result is Compliant.
-   If the audit logging feature is disabled for each ApsaraDB for Redis instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-7eu-gj1-sk6).

## Rule details

**Item**

**Description**

Rule name

redis-instance-enabled-audit-log

Rule identifier

redis-instance-enabled-audit-log

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

None.

## Incompliance remediation

Enable the audit logging feature for an ApsaraDB for Redis instance. For more information, see [Audit logs](/help/en/redis/user-guide/enable-the-new-audit-log-feature/#concept-ddc-ydr-3gb).
