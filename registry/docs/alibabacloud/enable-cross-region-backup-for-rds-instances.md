An RDS instance is considered compliant if cross-region backup is enabled.

## **Risk level**

Default risk level: High.

You can change the risk level as needed.

## **Detection logic**

-   An RDS instance is considered compliant if cross-region backup is enabled.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Cross-region backup is enabled for RDS instances

Rule identifier

[rds-instance-cross-backup-enable](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-cross-backup-enable)

Tags

RDS, Backup

Automatic remediation

Not supported

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::RDS::DBInstance

Input parameters

None

## **Remediation guide**

For remediation instructions, see [Cross-region backup](/help/en/rds/apsaradb-rds-for-mysql/use-the-cross-region-backup-feature-of-an-apsaradb-rds-for-mysql-instance).
