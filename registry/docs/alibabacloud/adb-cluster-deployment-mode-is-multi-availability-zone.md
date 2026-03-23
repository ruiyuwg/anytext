An AnalyticDB for MySQL cluster is compliant if it is deployed in multiple zones.

## **Scenarios**

Use this rule to check whether an AnalyticDB for MySQL cluster is deployed across multiple zones. This practice ensures high availability and disaster recovery for the database.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   An AnalyticDB for MySQL cluster is compliant if it is deployed in multiple zones.
    

## **Rule details**

**Parameter**

**Description**

Rule name

The AnalyticDB for MySQL cluster is deployed in multiple zones

Rule identifier

[adb-cluster-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=adb-cluster-multi-zone)

Tags

ADB, Cluster

Automatic remediation

Not supported

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::ADB::DBClusterLakeVersion

Input parameters

None

## **Remediation**

To remediate a non-compliant resource, see [Multi-zone deployment](/help/en/analyticdb/analyticdb-for-mysql/product-overview/2025#392766130bneo).
