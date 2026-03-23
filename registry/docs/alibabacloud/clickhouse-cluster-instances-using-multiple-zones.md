ApsaraDB for ClickHouse cluster instances that use multiple zones are considered compliant. This rule applies only to Community Edition clusters.

## **Scenarios**

You can use multi-zone ApsaraDB for ClickHouse cluster instances for cross-zone real-time data analytics and disaster recovery. This ensures that your data query and analytics services remain highly available if a zone fails.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

ApsaraDB for ClickHouse cluster instances that use multiple zones are considered compliant. This rule applies only to Community Edition clusters.

## **Rule details**

**Parameter**

**Description**

Rule name

Use multi-zone ApsaraDB for ClickHouse cluster instances

Rule identifier

[clickhouse-dbcluster-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=clickhouse-dbcluster-multi-zone)

Automatic remediation

Not supported

Rule trigger

24-hour cycle

Supported resource types

ACS::ClickHouse::DBCluster

Input parameters

None

## **Remediation**

For remediation steps, see [Data migration between Community Edition ApsaraDB for ClickHouse clusters](/help/en/clickhouse/user-guide/migrate-data-between-apsaradb-for-clickhouse-clusters).
