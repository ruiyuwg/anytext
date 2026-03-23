A database instance is considered compliant if the security audit feature of Database Autonomy Service (DAS) is enabled.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   A database instance is considered compliant if the security audit feature of DAS is enabled.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Enable security audit for a database instance

Rule identifier

[database-autonomy-service-audit-enable](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=database-autonomy-service-audit-enable)

Tag

RDS, Instance

Automatic remediation

Not supported

Rule trigger

Configuration change

Supported resource types

ACS::RDS::DBInstance, ACS::PolarDB::DBCluster, ACS::DRDS::DBInstance, ACS::DRDS::PolarDBXInstance

Input parameters

None

## **Remediation**

You can remediate a non-compliant resource by enabling the security audit feature. For more information, see [Enable the security audit feature (New version)](/help/en/das/user-guide/enable-security-audit-new-version).
