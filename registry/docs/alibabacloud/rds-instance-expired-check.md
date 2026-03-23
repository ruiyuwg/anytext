Checks whether the interval between the expiration date of each subscription ApsaraDB RDS instance and the check date is longer than a specified number of days. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to check the expiration date of each subscription ApsaraDB RDS instance. You cannot use a subscription ApsaraDB RDS instance after the subscription expires. You must renew the subscription ApsaraDB RDS instance within a specified period of time to prevent your business from being interrupted.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the difference between the expiration date of each subscription ApsaraDB RDS instance and the check date is longer than a specified number of days, the evaluation result is Compliant.
-   If the interval between the expiration date of each subscription ApsaraDB RDS instance and the check date is less than or equal to a specified number of days, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-k8j-qky-kjl).

## Rule details

 

Item

Description

Rule name

rds-instance-expired-check

Rule identifier

rds-instance-expired-check

Tag

RDS and ResourceExpired

Automatic remediation

Not supported

Trigger type

Configuration change and periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

ApsaraDB RDS instance

Input parameter

`days`. Default value: 30. Unit: days.

**Note** Separate multiple values with commas (,).

## Incompliance remediation

Renew an ApsaraDB RDS instance. For more information, see [Manually renew an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/manually-renew-an-apsaradb-rds-for-mysql-instance#concept-fwh-phj-wdb "This topic describes how to manually renew an ApsaraDB RDS for MySQL instance that uses the subscription billing method. We recommend that you manually renew your RDS instance before the expiration date. This allows you to prevent service interruptions and data losses.").
