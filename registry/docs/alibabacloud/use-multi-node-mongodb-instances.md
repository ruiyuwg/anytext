Checks whether each ApsaraDB for MongoDB instance is of the multi-node architecture. If so, the evaluation result is Compliant.

## Scenarios

The multi-node architecture for ApsaraDB for MongoDB instances is a highly available, high-performance, scalable, secure, and reliable database solution. This solution meets the database storage and management requirements of large and medium-sized enterprises.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If each ApsaraDB for MongoDB instance is of the multi-node architecture, the evaluation result is Compliant.
    
-   If an ApsaraDB for MongoDB instance is of the singele-node architecture, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

mongodb-instance-multi-node

Rule ID

[mongodb-instance-multi-node](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=mongodb-instance-multi-node)

Tag

MongoDB and Instance

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for MongoDB instance

Input parameter

None

## **Non-compliance remediation**

Ensure that each ApsaraDB for MongoDB instance is of the multi-node architecture. For more information, see [Overview](/help/en/mongodb/user-guide/changing-the-configurations-of-an-instance/).
