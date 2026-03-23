Configuring Transparent Data Encryption (TDE) for MongoDB with a custom key is considered compliant.

## **Scenarios**

By configuring Transparent Data Encryption (TDE) for MongoDB with a custom key, you can meet compliance requirements for data storage security while ensuring that the encryption process remains transparent and efficient for your business.

## **Risk level**

Default risk level: medium.

You can change the risk level as needed.

## **Detection logic**

Configuring Transparent Data Encryption (TDE) for MongoDB with a custom key is considered compliant. Serverless instances are considered not applicable.

## **Rule details**

**Parameter**

**Description**

Rule name

Configure transparent data encryption (TDE) for MongoDB with a custom key

Rule template identity

[mongodb-instance-encryption-byok-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=mongodb-instance-encryption-byok-check)

Automatic remediation

Not supported

Trigger type

Periodic: Every 24 hours

Resource type evaluated by the rule

ACS::MongoDB::DBInstance

Input parameter

None

## **Remediation guidance**

For more information, see [Configure transparent data encryption (TDE)](/help/en/mongodb/user-guide/configure-tde-for-an-apsaradb-for-mongodb-instance).
