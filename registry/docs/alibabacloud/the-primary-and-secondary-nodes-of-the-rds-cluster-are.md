An RDS cluster is considered compliant if its primary and secondary nodes use the same instance type.

## **Risk level**

The default risk level is Medium.

You can change the risk level as needed.

## **Detection logic**

-   An RDS cluster is considered compliant if its primary and secondary nodes use the same instance type.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Primary and secondary nodes of an RDS cluster use different instance types

Rule identifier

[rds-instance-secondary-node-type-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-secondary-node-type-check)

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

To fix a non-compliant resource, see [Major version lifecycle](/help/en/rds/apsaradb-rds-for-mysql/major-version-lifecycle-description).
