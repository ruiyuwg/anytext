A resource is compliant if the \`synchronous\_commit\` parameter is enabled. If this parameter is disabled, data may be lost if the database crashes, which puts data persistence at risk. This rule applies only to the PostgreSQL engine.

## **Threat level**

Default threat level: Medium.

You can change the threat level as needed.

## **Detection logic**

-   A resource is compliant if the \`synchronous\_commit\` parameter is enabled. If this parameter is disabled, data may be lost if the database crashes, which puts data persistence at risk. This rule applies only to the PostgreSQL engine.
    

## **Rule details**

**Parameter**

**Description**

Rule name

RDS for PostgreSQL data persistence check

Rule identifier

[rds-instance-synchronous-commit-enable](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-synchronous-commit-enable)

Tags

RDS,Instance

Automatic remediation

Supported

[ACS-RDS-BulkyModifyParameter](https://confignew.console.alibabacloud.com/library/remediation-templates/ACS-RDS-BulkyModifyParameter)

Rule trigger

Configuration changes

Supported resource types

ACS::RDS::DBInstance

Input parameters

None

## **Remediation**

To fix resources that are non-compliant with the 'RDS for PostgreSQL data persistence check' rule, see [Configure instance parameters](/help/en/rds/apsaradb-rds-for-mysql/modify-the-parameters-of-an-apsaradb-rds-for-mysql-instance).
