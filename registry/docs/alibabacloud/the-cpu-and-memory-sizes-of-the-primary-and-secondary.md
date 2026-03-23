For an RDS cluster to be compliant, its primary and secondary nodes must have the same instance size.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   For an RDS cluster to be compliant, its primary and secondary nodes must have the same instance size.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Primary and secondary nodes in an RDS cluster have inconsistent CPU and memory configurations

Rule identifier

[rds-instance-secondary-node-size-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-secondary-node-size-check)

Tags

RDS,Instance

Automatic remediation

Not supported

Rule trigger

Configuration change

Supported resource types

ACS::RDS::DBInstance

Input parameters

None

## **Remediation**

To resolve this issue on a non-compliant resource, see [Manage primary/secondary failover](/help/en/rds/apsaradb-rds-for-mysql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-mysql-instances).
