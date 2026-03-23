This rule checks for the 'Unavailable security group for node pool' risk item in Alibaba Cloud Container Service for Kubernetes (ACK) cluster inspections. If no risks are found for this item, the resource is considered compliant. The check is based on the latest inspection report. If cluster inspection is not enabled for the cluster, the resource is considered not applicable.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   This rule checks for the 'Unavailable security group for node pool' risk item in ACK cluster inspections. If no risks are found for this item, the resource is considered compliant. The check is based on the latest inspection report. If cluster inspection is not enabled for the cluster, the resource is considered not applicable.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check the availability of security groups for ACK cluster node pools

Rule identifier

[ack-cluster-inspect-node-pool-security-group-unavailable-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-node-pool-security-group-unavailable-check)

Tag

ACK

Automatic remediation

Not supported

Rule trigger mechanism

Periodic

Trigger frequency

24 hours

Supported resource types

ACS::ACK::Cluster

Input parameters

None

## **Remediation**

To remediate non-compliant resources, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
