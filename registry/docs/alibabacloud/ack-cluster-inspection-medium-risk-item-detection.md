The 'Medium-risk item check' for ACK cluster inspections is compliant if no risks are found. This rule is evaluated based on the most recent inspection report. If cluster inspection is not enabled for a cluster, the cluster is evaluated as 'Not Applicable'. If cluster inspection is enabled but no inspection task exists or the most recent task has not finished, the cluster is evaluated as 'No Data'.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   The 'Medium-risk item check' for ACK cluster inspections is compliant if no risks are found. This rule is evaluated based on the most recent inspection report. If cluster inspection is not enabled for a cluster, the cluster is evaluated as 'Not Applicable'. If cluster inspection is enabled but no inspection task exists or the most recent task has not finished, the cluster is evaluated as 'No Data'.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Medium-risk item check for ACK cluster inspections

Rule identifier

[ack-cluster-inspect-error-items-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-error-items-check)

Tag

ACK

Automatic remediation

Not supported

Rule trigger

Configuration changes

Supported resource types

ACS::ACK::Cluster

Input parameters

checkItemUid (Default value: LoadBalancerServiceCertIdMismatched)

## **Remediation guide**

To remediate non-compliant resources that fail the 'Medium-risk item check for ACK cluster inspections', see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
