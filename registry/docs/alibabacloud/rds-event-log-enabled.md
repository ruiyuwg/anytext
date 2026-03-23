Checks whether the event history feature is enabled for each ApsaraDB RDS instance. If so, the evaluation result is Compliant.

## Scenarios

You can enable the event history feature to view operation logs. This helps you troubleshoot issues and meet compliance auditing requirements.

## Risk level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the event history feature is enabled for each ApsaraDB RDS instance, the evaluation result is Compliant.
-   If the event history feature is disabled for an ApsaraDB RDS instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-q2r-alv-nw6).

## Rule details

 

Item

Description

Rule name

rds-event-log-enabled

Rule identifier

rds-event-log-enabled

Tag

RDS and AuditBaseline

Automatic remediation

Supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

ApsaraDB RDS instance

Input parameter

None.

## Incompliance remediation

Enable the event history feature For more information, see [View the event history of an ApsaraDB RDS instance](/help/en/rds/view-the-event-history-of-an-apsaradb-rds-instance-3#task-1614645 "This topic describes how to view the operation and maintenance (O&M) events that are performed by users and Alibaba Cloud on an ApsaraDB RDS for SQL Server instance. These events include instance creation and parameter reconfiguration.").
