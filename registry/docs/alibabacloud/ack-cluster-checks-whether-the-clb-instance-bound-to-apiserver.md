A resource is considered compliant if the 'The CLB instance attached to the API server does not exist' check item does not return a threat during an ACK cluster inspection. The rule uses the latest inspection report for evaluation. If cluster inspection is not configured, the result is 'Not Applicable'. If inspection is configured but no task is running or the latest task is incomplete, the result is 'No Data'.

## **Risk level**

Default risk level: High.

You can change the risk level of this rule as needed.

## **Detection logic**

-   A resource is considered compliant if the 'The CLB instance attached to the API server does not exist' check item does not return a threat during an ACK cluster inspection. The rule uses the latest inspection report for evaluation. If cluster inspection is not configured, the result is 'Not Applicable'. If inspection is configured but no task is running or the latest task is incomplete, the result is 'No Data'.
    

## **Rule details**

**Parameter**

**Description**

Rule name

The CLB instance attached to the API server of an ACK cluster exists

Rule identifier

[ack-cluster-inspect-apiserver-clb-instance-not-exist-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-apiserver-clb-instance-not-exist-check)

Tag

ACK

Automatic remediation

Not supported

Rule trigger

Configuration changes

Supported resource types

ACS::ACK::Cluster

Rule parameters

None

## **Remediation**

For instructions on how to remediate a non-compliant resource, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
