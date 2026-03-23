If descriptions are specified for all the accounts of the PolarDB cluster, the evaluation result is Compliant.

## Scenarios

Specifying descriptions for accounts of PolarDB clusters can enhance the efficiency of resource management.

## Risk level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If descriptions are specified for all the accounts of the PolarDB cluster, the evaluation result is Compliant.
-   If descriptions are not specified for all the account of the PolarDB cluster, the evaluation result is Compliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-lk0-1d2-oym)" section of this topic.

## Rule details

**Parameter**

**Description**

Rule name

polardb-cluster-accpunts-description-not-empty

Rule identifier

polardb-cluster-accpunts-description-not-empty

Tag

PolarDB

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

PolarDB cluster

Input parameter

None

## Incompliance remediation

Specify descriptions for all the accounts of the PolarDB cluster. For more information, see [Manage the password of a database account](/help/en/polardb/polardb-for-mysql/user-guide/manage-database-account-password#task-1580301).
