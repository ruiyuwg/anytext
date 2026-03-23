An RDS instance is considered compliant if it does not use an outdated version. This rule applies to RDS for MySQL instances. For instances that use other database engines, the evaluation result is Not Applicable. After April 21, 2025, RDS for MySQL versions 5.5 and 5.6 will no longer be supported.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An RDS instance is considered compliant if it does not use an outdated version. This rule applies to RDS for MySQL instances. For instances that use other database engines, the evaluation result is Not Applicable. After April 21, 2025, RDS for MySQL versions 5.5 and 5.6 will no longer be supported.
    

## **Rule details**

**Parameter**

**Description**

Rule name

There are no outdated RDS instances in use.

Rule identifier

[rds-instance-engine-version-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-engine-version-check)

Tags

RDS, Instance

Automatic remediation

Not supported

Rule trigger

Configuration changes

Supported resource types

ACS::RDS::DBInstance

Input parameters

None

## **Remediation**

To remediate a non-compliant resource that uses an outdated version, see [Major version lifecycle](/help/en/rds/apsaradb-rds-for-mysql/major-version-lifecycle-description).
