A resource is compliant if the maximum latency between an RDS read-only instance and its primary instance does not exceed a specified threshold in seconds during a specified period in hours.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   A resource is considered compliant if the maximum latency between an RDS read-only instance and its primary instance does not exceed a specified threshold in seconds during a specified period in hours.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Latency check for an RDS read/write instance

Rule identifier

[rds-instance-secondary-node-data-delay](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-secondary-node-data-delay)

Tags

RDS,Instance

Automatic remediation

Not supported

Rule trigger

Configuration change

Supported resource types

ACS::RDS::DBInstance

Input parameters

relativeTime (Default: 168)  
utilization (Default: 60)

## **Remediation**

To remediate a non-compliant resource, see [Major version lifecycle](/help/en/rds/apsaradb-rds-for-mysql/major-version-lifecycle-description).
