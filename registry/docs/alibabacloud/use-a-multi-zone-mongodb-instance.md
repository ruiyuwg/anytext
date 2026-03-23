Checks whether each ApsaraDB for MongoDB instance is of the multi-zone architecture. If so, the evaluation result is Compliant.

## Scenarios

Using the multi-zone architecture for each ApsaraDB for MongoDB instance can improve the disaster recovery capabilities of the system and reduce the risk of business interruption.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If each ApsaraDB for MongoDB instance is of the multi-zone architecture, the evaluation result is Compliant.
    
-   If an ApsaraDB for MongoDB instance is of the single-zone architecture, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

mongodb-instance-multi-zone

Rule ID

[mongodb-instance-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=mongodb-instance-multi-zone)

Tag

MongoDB and Instance

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

ApsaraDB for MongoDB instance

Input parameter

None

## **Non-compliance remediation**

Ensure that each ApsaraDB for MongoDB instance is of the multi-zone architecture. For more information, see [Migrate an instance across zones](/help/en/redis/user-guide/migrate-an-instance-across-zones).
