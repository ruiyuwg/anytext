An RDS instance is considered compliant if its remaining storage space is greater than 10%.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An RDS instance is considered compliant if its remaining storage space is greater than 10%.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check the remaining storage space of an RDS instance

Rule identifier

[rds-instance-used-ratio-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-used-ratio-check)

Tag

RDS,Instance

Automatic remediation

Not supported

Rule trigger

Configuration change

Supported resource types

ACS::RDS::DBInstance

Input parameters

relativeTime (Default value: 168)  
utilization (Default value: 90)

## **Remediation**

For instructions on fixing non-compliant resources, see [Major version lifecycle](/help/en/rds/apsaradb-rds-for-mysql/major-version-lifecycle-description).
