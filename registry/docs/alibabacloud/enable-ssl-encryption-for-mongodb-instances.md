Enabling SSL encryption for MongoDB instances is considered compliant.

## **Scenarios**

Enabling SSL Encryption for MongoDB instances effectively protects data security during transmission and prevents sensitive information from being stolen or tampered with.

## **Risk level**

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## **Detection logic**

Enabling SSL encryption for MongoDB instances is considered compliant. Instances that do not support SSL encryption, such as Serverless type, are considered not applicable.

## **Rule details**

**Parameter**

**Description**

Rule name

Enable SSL encryption for MongoDB instances

Rule template identity

[mongodb-instance-enabled-ssl](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=mongodb-instance-enabled-ssl)

Automatic remediation

Not supported

Trigger Type

Configuration change, 24-hour cycle

Resource type evaluated by the rule

ACS::MongoDB::DBInstance

Input parameter

None

## **Remediation guidance**

For more information, see [Configure SSL encryption](/help/en/mongodb/user-guide/configure-ssl-encryption-for-an-apsaradb-for-mongodb-instance).
