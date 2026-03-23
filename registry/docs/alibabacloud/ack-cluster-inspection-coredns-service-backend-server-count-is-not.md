A resource is considered compliant if the Alibaba Cloud Container Service for Kubernetes (ACK) cluster inspection check "The number of backend servers for the CoreDNS service is not zero" finds no risks. This rule evaluates resources based on the latest inspection report. If cluster inspection is not enabled for a cluster, the result is "Not Applicable". If inspection is enabled but no inspection task exists or the latest task has not finished, the result is "No Data".

## **Risk level**

Default risk level: High.

You can change the risk level as needed.

## **Detection logic**

-   A resource is considered compliant if the ACK cluster inspection check "The number of backend servers for the CoreDNS service is not zero" finds no risks. This rule evaluates resources based on the latest inspection report. If cluster inspection is not enabled for a cluster, the result is "Not Applicable". If inspection is enabled but no inspection task exists or the latest task has not finished, the result is "No Data".
    

## **Rule details**

**Parameter**

**Description**

Rule name

ACK cluster inspection: The number of backend servers for the CoreDNS service is not zero

Rule identifier

[ack-cluster-inspect-core-dns-no-endpoint-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-core-dns-no-endpoint-check)

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

## **Remediation**

To remediate this issue, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
