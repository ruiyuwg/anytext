Checks whether each ApsaraDB RDS instance uses enhanced whitelists. If so, the evaluation result is Compliant.

## Scenarios

Enhanced whitelists improve the security and reliability of database access, thereby ensuring the security and integrity of enterprise data.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If each ApsaraDB RDS instance uses enhanced whitelists, the evaluation result is Compliant.
    
-   If an ApsaraDB RDS instance does not use enhanced whitelists, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

rds-instance-enabled-safety-security-ip

Rule ID

[rds-instance-enabled-safety-security-ip](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-enabled-safety-security-ip)

Tag

RDS

Automatic remediation

Support for [ACS-RDS-BulkyMigrateSecurityIPMode](https://oos.console.alibabacloud.com/ap-southeast-1/template/public/detail/ACS-RDS-BulkyMigrateSecurityIPMode)

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

None

## **Non-compliance remediation**

Ensure that each ApsaraDB RDS instance uses enhanced whitelists. For more information, see [Change to the enhanced whitelist mode](/help/en/rds/apsaradb-rds-for-mysql/change-the-network-isolation-mode-of-an-apsaradb-rds-for-mysql-instance-to-the-enhanced-whitelist-mode).
