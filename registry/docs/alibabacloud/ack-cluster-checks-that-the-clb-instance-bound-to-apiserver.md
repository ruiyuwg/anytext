A resource is considered compliant if the ACK cluster inspection finds no threats for the 'Abnormal status of the CLB instance attached to the API server' check item. This rule evaluates resources based on the latest inspection report. If cluster inspection is disabled for a cluster, the evaluation result is "Not Applicable". If cluster inspection is enabled but no inspection task exists or the most recent task has not completed, the evaluation result is "No Data".

## **Risk level**

Default risk level: High.

You can change the risk level as needed.

## **Detection logic**

-   A resource is considered compliant if the ACK cluster inspection finds no threats for the 'Abnormal status of the CLB instance attached to the API server' check item. This rule evaluates resources based on the latest inspection report. If cluster inspection is disabled for a cluster, the evaluation result is "Not Applicable". If cluster inspection is enabled but no inspection task exists or the most recent task has not completed, the evaluation result is "No Data".
    

## **Rule details**

**Parameter**

**Description**

Rule name

The status of the CLB instance attached to the API server of an ACK cluster is normal

Rule identifier

[ack-cluster-inspect-apiserver-clb-instance-status-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-apiserver-clb-instance-status-check)

Tag

ACK

Automatic remediation

Not supported

Rule trigger

Configuration changes

Supported resource types

ACS::ACK::Cluster

Input parameters

None

## **Remediation guide**

To remediate a resource that is non-compliant with the 'The status of the CLB instance attached to the API server of an ACK cluster is normal' rule, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
