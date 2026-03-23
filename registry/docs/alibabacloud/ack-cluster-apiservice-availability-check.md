This rule checks for the 'APIService Unavailable' risk item during ACK cluster inspections. A cluster is considered compliant if this risk is not found. The rule's evaluation is based on the latest inspection report. If cluster inspection is not enabled for a cluster, this rule does not apply.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   This rule checks for the 'APIService Unavailable' risk item during ACK cluster inspections. A cluster is considered compliant if this risk is not found. The rule's evaluation is based on the latest inspection report. If cluster inspection is not enabled for a cluster, this rule does not apply.
    

## **Rule details**

**Parameter**

**Description**

Rule name

ACK cluster APIService availability check

Rule identifier

[ack-cluster-inspect-apiservice-not-available-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-apiservice-not-available-check)

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

To remediate non-compliant resources, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
