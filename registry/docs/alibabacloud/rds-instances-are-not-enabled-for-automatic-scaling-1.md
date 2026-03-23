An RDS instance is considered compliant if automatic storage expansion is enabled.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An RDS instance is considered compliant if automatic storage expansion is enabled.
    

## **Rule details**

**Parameter**

**Description**

Rule name

RDS instance automatic storage expansion check

Rule identifier

[rds-instance-storage-autoscale-enable](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-storage-autoscale-enable)

Tag

RDS

Automatic remediation

Supported

[ACS-RDS-BulkyModifyDasInstanceConfig](https://oos.console.alibabacloud.com/ap-southeast-1/template/public/detail/ACS-RDS-BulkyModifyDasInstanceConfig)

Rule trigger

Periodic execution

Trigger frequency

24 hours

Supported resource types

ACS::RDS::DBInstance

Input parameters

None

## **Remediation**

To remediate non-compliant resources, see [Set automatic storage expansion](/help/en/rds/apsaradb-rds-for-mysql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-mysql-instance).
