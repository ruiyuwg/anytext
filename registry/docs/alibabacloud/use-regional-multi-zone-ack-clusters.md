A region-level ACK cluster is considered compliant if its nodes are distributed across three or more zones.

## **Threat level**

Default threat level: High.

You can change the risk level as needed.

## **Detection logic**

-   A region-level ACK cluster is considered compliant if its nodes are distributed across three or more zones.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Use region-level multi-zone ACK clusters

Rule identifier

[ack-cluster-node-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-node-multi-zone)

Tags

ACK,Cluster

Automatic remediation

Not supported

Rule trigger

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::ACK::Cluster

Input parameters

None

## **Remediation**

For more information about remediating non-compliant resources, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).
