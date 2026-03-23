This rule checks for the "Unavailable vSwitch for Node Pool" threat in Alibaba Cloud Container Service for Kubernetes (ACK) cluster inspections. A resource is considered compliant if no threats are found for this inspection item. The rule uses the latest inspection report. If cluster inspection is not enabled for the cluster, the resource is marked as Not Applicable.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   This rule checks for the "Unavailable vSwitch for Node Pool" threat in ACK cluster inspections. A resource is considered compliant if no threats are found for this inspection item. The rule uses the latest inspection report. If cluster inspection is not enabled for the cluster, the resource is marked as Not Applicable.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check the vSwitch availability for ACK cluster node pools

Rule identifier

[ack-cluster-inspect-node-pool-vswitch-unavailable-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-node-pool-vswitch-unavailable-check)

Tag

ACK

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

To remediate a non-compliant resource, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
