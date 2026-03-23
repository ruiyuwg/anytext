A Simple Log Service Logstore is considered compliant when data encryption is enabled and the KMS master key used for encryption comes from the source specified by the parameter.

## **Scenarios**

A company has enabled data encryption for its Simple Log Service Logstore and uses a KMS master key from the source specified by the parameter (by default, EXTERNAL key material imported by users). This ensures secure data storage and compliance with security policy requirements. This configuration is considered "compliant" with a default risk level of medium.

## **Risk level**

Default risk level: medium.

You can change the risk level as needed.

## **Detection logic**

A Simple Log Service Logstore is considered compliant when data encryption is enabled and the KMS master key used for encryption comes from the source specified by the parameter. The default parameter value is EXTERNAL, which indicates key material imported by users.

## **Rule details**

**Parameter**

**Description**

Rule name

The key material source for Simple Log Service Logstore encryption is imported by users

Rule identifier

[sls-logstore-encrypt-key-origin-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=sls-logstore-encrypt-key-origin-check)

Automatic remediation

Not supported

Trigger type

Periodic: Every 24 hours

Supported resource types

ACS::SLS::LogStore

Input parameters

origin (default value: EXTERNAL)

## **Remediation guidance**

For more information, see [Data encryption](/help/en/sls/developer-reference/encrypt-data).
