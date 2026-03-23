Checks whether the data replication mode of each ApsaraDB RDS instance is non-asynchronous. If so, the evaluation result is Compliant. The data of the primary node may be inconsistent with the data of the secondary node when the data replication mode is asynchronous. We recommend that you use the semi-synchronous or synchronous mode.

## Scenarios

Asynchronous replication of ApsaraDB RDS instance data features good performance but may cause data inconsistency. Synchronous replication of ApsaraDB RDS instance data ensures data consistency between the primary and secondary instances. It also guarantees high availability and disaster recovery.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the data replication mode of each ApsaraDB RDS instance is non-asynchronous, the evaluation result is Compliant.
    
-   If the data replication mode of an ApsaraDB RDS instance is asynchronous, the evaluation result is Non-compliant.
    
-   If ApsaraDB RDS instances are ApsaraDB RDS for MySQL Basic Edition instances or non-MySQL instances, the evaluation result is Not Applicable.
    

## **Rule details**

**Item**

**Description**

Rule name

rds-instance-sync-mode-check

Rule ID

[rds-instance-sync-mode-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-sync-mode-check)

Tag

RDS and Instance

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

ApsaraDB RDS instance

Input parameter

None

## **Non-compliance remediation**

Set the data replication mode of each ApsaraDB RDS instance to non-asynchronous. For more information, see [Query and change the data replication mode](/help/en/rds/apsaradb-rds-for-mysql/change-the-data-replication-mode-of-an-apsaradb-rds-for-mysql-instance).
