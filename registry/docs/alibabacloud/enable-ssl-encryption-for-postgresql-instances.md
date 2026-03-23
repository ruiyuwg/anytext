A PostgreSQL instance with Secure Sockets Layer (SSL) encryption enabled is considered compliant.

## **Threat level**

The default threat level is Medium.

You can change the risk level as needed.

## **Detection logic**

-   A PostgreSQL instance with SSL encryption enabled is considered compliant.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Enable SSL encryption for PostgreSQL instances

Rule identifier

[gpdb-instance-ssl-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=gpdb-instance-ssl-enabled)

Tag

GPDB

Automatic remediation

Not supported

Rule trigger

Configuration changes

Supported resource types

ACS::GPDB::DBInstance

Input parameters

None

## **Remediation**

For instructions on how to remediate a non-compliant resource, see [Set SSL encryption](/help/en/analyticdb/analyticdb-for-postgresql/user-guide/configure-ssl-encryption).
