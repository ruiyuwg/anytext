Checks whether the duration between the expiration date and the check date of each subscription ApsaraDB for MongoDB cluster is greater than a specified number of days. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to renew a subscription ApsaraDB for MongoDB cluster at the earliest opportunity. This prevents your business from being interrupted due to an expired cluster.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the duration between the expiration date and the check date of each subscription ApsaraDB for MongoDB cluster is greater than a specified number of days, the evaluation result is Compliant.
-   If the duration between the expiration date and the check date of each subscription ApsaraDB for MongoDB cluster is less than or equal to a specified number of days, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-s1q-ehk-7se).

## Rule details

**Item**

**Description**

Rule name

mongodb-cluster-expired-check

Rule identifier

mongodb-cluster-expired-check

Tag

MongoDB and ResourceExpired

Automatic remediation

Not supported

Trigger type

Configuration change and periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

ApsaraDB for MongoDB instance

Input parameter

`days`. Default value: 30. Unit: days.

## Incompliance remediation

Renew a subscription ApsaraDB for MongoDB cluster before it expires. For more information, see [Manually renew a subscription instance](/help/en/mongodb/user-guide/manually-renew-an-apsaradb-for-mongodb-subscription-instance#task-yxb-fmy-32b).
