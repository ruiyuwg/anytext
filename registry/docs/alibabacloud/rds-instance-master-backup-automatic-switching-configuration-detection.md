An RDS instance is considered compliant if automatic primary/secondary failover is enabled. This rule does not apply to general-purpose instances of the Basic Edition, non-high-availability read-only instances, or instances that do not use cloud disks.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An RDS instance is considered compliant if automatic primary/secondary failover is enabled. This rule does not apply to general-purpose instances of the Basic Edition, non-high-availability read-only instances, or instances that do not use cloud disks.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check for automatic primary/secondary failover on RDS instances

Rule identifier

[rds-haconfig-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-haconfig-enabled)

Tag

RDS

Automatic remediation

Supported

[ACS-RDS-BulkyModifyHASwitchConfig](https://oos.console.alibabacloud.com/ap-southeast-1/template/public/detail/ACS-RDS-BulkyModifyHASwitchConfig)

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::RDS::DBInstance

Input parameters

None

## **Remediation**

To remediate a non-compliant resource, see [Manage primary/secondary failover](/help/en/rds/apsaradb-rds-for-mysql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-mysql-instances).
