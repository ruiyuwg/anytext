This rule checks for the 'Node pool or scaling group unavailable' risk item in ACK cluster inspections. A resource is considered compliant if this risk is not detected. The check is based on the latest inspection report. If cluster inspection is not enabled, this rule is not applicable.

## **Risk level**

The default risk level is Medium.

You can change the risk level as needed.

## **Detection logic**

-   This rule checks for the 'Node pool or scaling group unavailable' risk item in ACK cluster inspections. A resource is considered compliant if this risk is not detected. The check is based on the latest inspection report. If cluster inspection is not enabled, this rule is not applicable.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Availability check for node pools and scaling groups in ACK clusters

Rule identifier

[ack-cluster-inspect-nodepool-scaling-group-unavailable-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-nodepool-scaling-group-unavailable-check)

Tag

ACK

Automatic remediation

Not supported

Rule trigger

Periodic execution

Trigger frequency

24 hours

Supported resource types

ACS::ACK::Cluster

Input parameters

None

## **Remediation guide**

For instructions on how to fix a non-compliant resource detected by this rule, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
