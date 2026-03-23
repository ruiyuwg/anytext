This rule uses the latest ACK cluster inspection report to check for the "Abnormal CoreDNS Pods Found" risks. A resource is considered compliant if no risks are found. This rule does not apply to clusters where cluster inspection is disabled.

## **Risk level**

Default risklevel: Medium.

You can change the risk level as needed.

## **Detection logic**

-   This rule uses the latest ACK cluster inspection report to check for the "Abnormal CoreDNS Pods Found" risk. A resource is considered compliant if no risks are found. This rule does not apply to clusters where cluster inspection is disabled.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Checks the pod status of CoreDNS in ACK clusters.

Rule identifier

[ack-cluster-inspect-some-coredns-pods-not-ready-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-some-coredns-pods-not-ready-check)

Tag

ACK

Automatic remediation

Not supported

Trigger type

Periodic

Trigger frequency

Every 24 hours

Supported resource types

ACS::ACK::Cluster

Input parameters

None

## **Remediation**

To remediate non-compliant resources, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
