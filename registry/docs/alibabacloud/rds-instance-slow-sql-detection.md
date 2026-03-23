An RDS instance is considered compliant if it has fewer than 100 slow SQL statements in a single day.

## **Risk level**

The default risk level is High.

You can change the risk level as needed.

## **Detection logic**

-   An RDS instance is considered compliant if it has fewer than 100 slow SQL statements in a single day.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Slow SQL statement detection for RDS instances

Rule identifier

[rds-instance-slowlog-count-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-slowlog-count-check)

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

## **Remediation**

To remediate non-compliant resources, see [Manage local logs](/help/en/rds/apsaradb-rds-for-mysql/view-and-delete-the-binary-log-files-of-an-apsaradb-rds-for-mysql-instance).
