This rule checks ACK cluster inspection reports for the 'Inconsistent billing method between LoadBalancer Service and actual instance' risk item. A resource is considered compliant if no risk is found. The rule uses the latest inspection report for evaluation. This rule is not applicable if cluster inspection is disabled for the cluster.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   This rule checks ACK cluster inspection reports for the 'Inconsistent billing method between LoadBalancer Service and actual instance' risk item. A resource is considered compliant if no risk is found. The rule uses the latest inspection report for evaluation. This rule is not applicable if cluster inspection is disabled for the cluster.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check for billing method consistency of LoadBalancer Services in ACK clusters

Rule identifier

[ack-cluster-inspect-loadbalancer-service-instance-charge-type-mismatched-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-loadbalancer-service-instance-charge-type-mismatched-check)

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

For more information about remediating non-compliant resources, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
