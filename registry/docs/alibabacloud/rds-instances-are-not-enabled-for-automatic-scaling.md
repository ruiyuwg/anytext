An RDS instance is considered compliant if auto scaling is enabled.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An RDS instance is considered compliant if auto scaling is enabled.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check whether auto scaling is enabled for an RDS instance

Rule identifier

[rds-instance-serverlessconfig-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-serverlessconfig-check)

Tags

RDS,Instance

Automatic remediation

Not supported

Rule trigger

Configuration change

Supported resource types

ACS::RDS::DBInstance

Input parameters

None

## **Remediation**

For instructions on how to remediate non-compliant resources, see [Major version lifecycle](/help/en/rds/apsaradb-rds-for-mysql/major-version-lifecycle-description).
