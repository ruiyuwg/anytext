A PostgreSQL instance is considered compliant if disk encryption is enabled.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   A PostgreSQL instance is considered compliant if disk encryption is enabled.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Enable disk encryption for PostgreSQL instances

Rule identifier

[gpdb-instance-disk-encryption-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=gpdb-instance-disk-encryption-enabled)

Tag

GPDB

Automatic remediation

Not supported

Rule trigger

Configuration change

Supported resource types

ACS::GPDB::DBInstance

Input parameters

None

## **Remediation**

To remediate a non-compliant resource, see [Disk encryption](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/configure-disk-encryption-for-an-analyticdb-for-postgresql-instance).
