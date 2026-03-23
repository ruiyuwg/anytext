This rule checks for the 'Abnormal Elastic Component Status' risk item identified by ACK cluster inspections. A resource is compliant if this inspection item has no risks. The check is based on the latest inspection report. The rule is not applicable if cluster inspection is disabled.

## **Risk level**

Default risk level: Medium.

You can change the risk level as needed.

## **Detection logic**

-   This rule checks for the 'Abnormal Elastic Component Status' risk item identified by ACK cluster inspections. A resource is compliant if this inspection item has no risks. The check is based on the latest inspection report. The rule is not applicable if cluster inspection is disabled.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Check the status of elastic components in an ACK cluster

Rule identifier

[ack-cluster-inspect-autoscaler-abnormal-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-inspect-autoscaler-abnormal-check)

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

To remediate a resource that is non-compliant with this rule, see [Use cluster inspection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
