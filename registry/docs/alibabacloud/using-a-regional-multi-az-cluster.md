Checks whether region-level Container Compute Service (ACS) clusters whose nodes are distributed across three or more zones are used. If so, the evaluation result is Compliant.

## Scenarios

If region-level ACS clusters whose nodes are distributed across multiple zones are used, high availability deployment across zones can be implemented. This ensures that your business remains stable and provides services even when a single point of failure (SPOF) occurs.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If region-level ACS clusters whose nodes are distributed across three or more zones are used, the evaluation result is Compliant.

## **Rule details**

**Parameter**

**Description**

Rule template name

acs-cluster-node-multi-zone

Rule template identifier

[acs-cluster-node-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=acs-cluster-node-multi-zone)

Automatic remediation

Not supported

Trigger type

Periodic: Every 24 hours

Supported resource type

ACS::ACK::Cluster

Input parameter

None

## **Non-compliance remediation**

For more information, see [Modify a node pool](/help/en/doc-detail/476521.html).
