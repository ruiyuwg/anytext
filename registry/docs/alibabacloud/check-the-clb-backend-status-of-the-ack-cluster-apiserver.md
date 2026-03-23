This rule checks for the 'Abnormal backend status of the API Server CLB instance' risk item during ACK cluster inspections. The check is based on the latest inspection report. If no risks are found for this item, the resource is considered compliant. This rule does not apply if cluster inspection is disabled for the cluster.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   This rule checks for the 'Abnormal backend status of the API Server CLB instance' risk item during ACK cluster inspections. The check is based on the latest inspection report. If no risks are found for this item, the resource is considered compliant. This rule does not apply if cluster inspection is disabled for the cluster.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check the backend status of the CLB instance for an ACK cluster API server

Rule identifier

[ack-cluster-inspect-apiserver-clb-backend-abnormal-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-apiserver-clb-backend-abnormal-check)

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

To fix a non-compliant resource detected by this rule, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
