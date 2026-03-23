A database instance is considered compliant if geo-disaster recovery is enabled. An instance has geo-disaster recovery enabled if it is the source of a Data Transmission Service (DTS) task.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

A database instance is considered compliant if geo-disaster recovery is enabled. An instance has geo-disaster recovery enabled if it is the source of a DTS task.

## **Rule details**

**Parameter**

**Description**

Rule name

Enable geo-disaster recovery for a database instance using DTS synchronization

Rule identifier

[dts-job-source-instance-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=dts-job-source-instance-check)

Tags

RDS, Instance

Automatic remediation

Not supported

Rule trigger

Configuration change

Supported resource types

ACS::RDS::DBInstance, ACS::PolarDB::DBCluster, ACS::DRDS::DBInstance, ACS::DRDS::PolarDBXInstance

Input parameters

None
