Checks whether an ApsaraDB for MongoDB instance is locked. If not, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to check whether an ApsaraDB for MongoDB instance is locked. This prevents your business from being interrupted due to a locked ApsaraDB for MongoDB instance. An ApsaraDB for MongoDB instance may be locked when the instance expires or does not have sufficient storage space.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If no ApsaraDB for MongoDB instance is not locked, the evaluation result is Compliant.
-   If an ApsaraDB for MongoDB instance is locked, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-9ee-cml-xcc).

## Rule details

 

Item

Description

Rule name

mongodb-instance-lock-mode

Rule identifier

mongodb-instance-lock-mode

Tag

MongoDB

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for MongoDB instance

Input parameter

None.

## Incompliance remediation

Unlock an ApsaraDB for MongoDB instance that is locked. For more information, see [Recycle bin](/help/en/mongodb/user-guide/recycle-bin#task-v1m-r15-j2b "ApsaraDB for MongoDB provides a recycle bin to store expired, overdue, and released instances. You can unlock, recreate, or instantly delete instances in the recycle bin.").
