Checks whether the audit log feature is enabled for each ApsaraDB for MongoDB instance. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to enable the audit log feature for an ApsaraDB for MongoDB instance. You can use this feature to query, analyze, and export the logs of the instance. This way, you can obtain the statistics of the instance in real time and ensure data security.

## Risk level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the audit log feature is enabled for each ApsaraDB for MongoDB instance, the evaluation result is Compliant.
-   If the audit log feature is disabled for an ApsaraDB for MongoDB cluster, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-t3e-7oi-whh).

## Rule details

 

Item

Description

Rule name

mongodb-instance-log-audit

Rule identifier

mongodb-instance-log-audit

Tag

MongoDB and AuditBaseline

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for MongoDB instance

Input parameter

None.

## Incompliance remediation

Enable the audit log feature for an ApsaraDB for MongoDB instance. For more information, see [Enable the audit log feature](/help/en/mongodb/user-guide/enable-the-audit-log-feature#task-2488775).
