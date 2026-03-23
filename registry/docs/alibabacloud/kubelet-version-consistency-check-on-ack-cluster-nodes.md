This rule checks ACK cluster inspection reports for the "Node Kubelet component version lags behind the control plane" risk. If this risk is not detected in the latest report, the resource is considered compliant. If cluster inspection is not enabled for the cluster, this rule is not applicable.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   This rule checks ACK cluster inspection reports for the "Node Kubelet component version lags behind the control plane" risk. If this risk is not detected in the latest report, the resource is considered compliant. If cluster inspection is not enabled for the cluster, this rule is not applicable.
    

## **Rule details**

**Parameter**

**Description**

Rule name

ACK cluster node Kubelet version consistency check

Rule identifier

[ack-cluster-inspect-kubelet-version-outdate-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-kubelet-version-outdate-check)

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

## **Remediation guide**

To fix non-compliant resources detected by the "ACK cluster node Kubelet version consistency check" rule, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
