Checks whether the SSL feature is enabled for each ApsaraDB RDS instance and the Transport Layer Security (TLS) version that is used on the instances is within a specified version range. If so, the evaluation result is Compliant.

## Scenarios

TLS of a later version has better security, privacy, and performance, and better protection and encryption performance than TLS of an earlier version. If you enable the SSL feature for an ApsaraDB RDS instance and select a TLS version for the instance, you must consider compatibility and application requirements.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the SSL feature is enabled for each ApsaraDB RDS instance and the TLS version that is used on the instances is within a specified version range, the evaluation result is Compliant.
    
-   If the SSL feature is not enabled for an ApsaraDB RDS instance or the TLS version that is used on an ApsaraDB RDS instance is not within a specified version range, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

rds-instance-tls-version-check

Rule ID

[rds-instance-tls-version-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-tls-version-check)

Tag

RDS and Instance

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

tlsVersion. Default value: TLSv1.2

## **Non-compliance remediation**

Enable the SSL feature for each ApsaraDB RDS instance and set the TLS version that is used on the instances to a version within a specified version range. For more information, see [Modify instance parameters](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance).
