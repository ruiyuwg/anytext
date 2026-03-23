Using multi-zone HBase clusters is considered compliant.

## **Scenarios**

Multi-zone HBase clusters can be used to build a distributed storage system with high availability, strong fault tolerance, and support for large-scale concurrent read and write operations. These clusters are suitable for applications that require cross-region data replication and access.

## **Risk level**

Default risk level: medium.

You can change the risk level as needed.

## **Detection logic**

Using multi-zone HBase clusters is considered compliant.

## **Rule details**

**Parameter**

**Description**

Rule name

Using multi-zone HBase clusters

Rule template identity

[hbase-cluster-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=hbase-cluster-multi-zone)

Automatic remediation

Not supported

Trigger type

Periodic: Every 24 hours

Resource type evaluated by the rule

ACS::HBase::Cluster

Input parameter

None

## **Remediation guidance**

For more information, see [Multi-zone instance management](/help/en/hbase/developer-reference/multi-zone-instance-management/).
