This rule checks for the 'Mismatched certificate instance ID for LoadBalancer Service' risk item in ACK cluster inspections. If this inspection item reports no risk, the resource is considered compliant. The rule uses the latest inspection report for evaluation. If cluster inspection is not enabled, this rule does not apply to the cluster.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   This rule checks for the 'Mismatched certificate instance ID for LoadBalancer Service' risk item in ACK cluster inspections. If this inspection item reports no risk, the resource is considered compliant. The rule uses the latest inspection report for evaluation. If cluster inspection is not enabled, this rule does not apply to the cluster.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check for certificate ID consistency for LoadBalancer Services in ACK clusters

Rule identifier

[ack-cluster-inspect-loadbalancer-service-cert-id-mismatched-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-loadbalancer-service-cert-id-mismatched-check)

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

For instructions on how to fix non-compliant resources, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
