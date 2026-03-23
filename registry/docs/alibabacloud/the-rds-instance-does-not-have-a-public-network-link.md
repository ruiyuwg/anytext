Checks whether the whitelist feature and Internet access are enabled for each ApsaraDB RDS instance of your account. If the whitelist feature or Internet access is disabled for each ApsaraDB RDS instance of your account, the evaluation result is Compliant.

## Scenarios

Disabling Internet access for ApsaraDB RDS instances can improve data security, reduce network traffic and loads, comply with security compliance requirements, and simplify network configuration and management.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the whitelist feature or Internet access is disabled for each ApsaraDB RDS instance of your account, the evaluation result is Compliant.
    
-   If the whitelist feature and Internet access are enabled for an ApsaraDB RDS instance of your account, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

rds-public-connection-and-any-ip-access-check

Rule ID

[rds-public-connection-and-any-ip-access-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-public-connection-and-any-ip-access-check)

Tag

RDS and public

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

None

## **Non-compliance remediation**

Disable the whitelist feature or Internet access for each ApsaraDB RDS instance. For more information, see [Configure an IP address whitelist](/help/en/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance).
