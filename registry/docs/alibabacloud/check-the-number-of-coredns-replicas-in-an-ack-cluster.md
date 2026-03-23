This rule checks for the "CoreDNS has only one replica" risk in ACK cluster inspections. A resource is considered compliant if this risk is not detected in the latest inspection report. If cluster inspection is not enabled for the cluster, the resource is marked as "Not Applicable".

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   This rule checks for the "CoreDNS has only one replica" risk in ACK cluster inspections. A resource is considered compliant if this risk is not detected in the latest inspection report. If cluster inspection is not enabled for the cluster, the resource is marked as "Not Applicable".
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check the number of CoreDNS replicas in an ACK cluster

Rule identifier

[ack-cluster-inspect-coredns-has-only-one-replica-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-coredns-has-only-one-replica-check)

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

For remediation instructions, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
