A running, non-Serverless AnalyticDB for PostgreSQL storage instance is considered compliant if it has an available data backup set created within a specified period. The default period is 7 days (168 hours).

## **Risk level**

Default risk level: Medium.

You can change the risk level for this rule as needed.

## **Detection logic**

-   A running, non-Serverless AnalyticDB for PostgreSQL storage instance is considered compliant if it has an available data backup set created within a specified period. The default period is 7 days (168 hours).
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check for available data backups of AnalyticDB for PostgreSQL instances

Rule identifier

[gpdb-has-backup-set](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=gpdb-has-backup-set)

Tag

GPDB

Auto-remediation

Not supported

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::GPDB::DBInstance

Input parameters

relativeTime (Default value: 168)

## **Remediation**

For instructions on how to remediate non-compliant resources, see [Feature overview](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/overview-backup-and-restoration).
