Checks whether a disaster recovery instance is created for each ApsaraDB RDS instance. If so, the evaluation result is Compliant. If a fault occurs in the region where an ApsaraDB RDS instance resides, the disaster recovery instance can be used to recover services in a timely manner.

## Scenarios

Creating a disaster recovery instance for an ApsaraDB RDS instance can provide data backup and disaster recovery guarantees for the primary instance. If the primary instance fails or becomes unavailable, the disaster recovery instance automatically takes over data services to ensure business continuity and availability.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If a disaster recovery instance is created for each ApsaraDB RDS instance, the evaluation result is Compliant.
    
-   If no disaster recovery instance is created for an ApsaraDB RDS instance, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

rds-instance-has-guard-instance

Rule ID

[rds-instance-has-guard-instance](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-has-guard-instance)

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

Create a disaster recovery instance for each ApsaraDB RDS instance. For more information, see [Create a disaster recovery ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-a-disaster-recovery-apsaradb-rds-for-mysql-instance).
