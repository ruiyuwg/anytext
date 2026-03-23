A resource is considered compliant if the ACK cluster inspection finds no risks for the check item: 'The listener configuration for port 6443 of the Classic Load Balancer (CLB) for the API server is abnormal'. The rule evaluates compliance based on the latest inspection report. If cluster inspection is not enabled for a cluster, its compliance state is 'Not Applicable'. If cluster inspection is enabled but no inspection task exists or the latest task has not been completed, its compliance state is 'No Data'.

## **Risk level**

Default risk level: High.

u can change the risk level as needed.

## **Detection logic**

-   A resource is considered compliant if the ACK cluster inspection finds no risks for the check item: 'The listener configuration for port 6443 of the CLB for the API server is abnormal'. The rule evaluates compliance based on the latest inspection report. If cluster inspection is not enabled for a cluster, its compliance state is 'Not Applicable'. If cluster inspection is enabled but no inspection task exists or the latest task has not been completed, its compliance state is 'No Data'.
    

## **Rule details**

**Parameter**

**Description**

Rule name

The CLB port listener for the API server is configured correctly

Rule identifier

[ack-cluster-inspect-apiserver-clb-listener-abnormal-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-apiserver-clb-listener-abnormal-check)

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

To fix a non-compliant resource, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
