This rule uses the latest ACK cluster inspection report to check for the 'Node pool scaling configuration unavailable' threat. A resource is considered compliant if it is free of this threat. This rule is not applicable to clusters for which cluster inspection is disabled.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   This rule uses the latest ACK cluster inspection report to check for the 'Node pool scaling configuration unavailable' threat. A resource is considered compliant if it is free of this threat. This rule is not applicable to clusters for which cluster inspection is disabled.
    

## **Rule details**

**Parameter**

**Description**

Rule name

ACK cluster node pool scaling configuration availability check

Rule identifier

[ack-cluster-inspect-node-pool-scaling-config-unavailable-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-node-pool-scaling-config-unavailable-check)

Tag

ACK

Automated remediation

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

For instructions on how to fix non-compliant resources, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
