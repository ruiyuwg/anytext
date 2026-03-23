Checks whether each ApsaraDB for Redis instance is upgraded to the latest minor version. If so, the evaluation result is considered compliant.

## Scenarios

Enabling automatic minor version upgrades for an ApsaraDB RDS instance improves its security, reliability, and compatibility. This feature ensures your instance stays updated with the latest features and patches without manual effort.

## **Risk level**

Default risk level: Low.

You can change the risk level as needed.

## **Compliance evaluation logic**

An ApsaraDB RDS instance is considered compliant if automatic minor version upgrades are enabled.

## **Rule details**

**Parameter**

**Description**

Rule name

Enable automatic minor version upgrades for RDS instances

Rule identifier

[rds-instance-upgrade-latest-version](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-upgrade-latest-version)

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource types

ACS::RDS::DBInstance

Input parameters

None

## **Remediation**

For more information, see [Upgrade the minor engine version](/help/en/rds/apsaradb-rds-for-mysql/update-the-minor-engine-version-of-an-apsaradb-rds-for-mysql-instance).
