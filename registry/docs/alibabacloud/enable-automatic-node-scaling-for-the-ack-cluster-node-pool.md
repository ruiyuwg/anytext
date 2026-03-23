Checks whether auto scaling is enabled for the node pools of each Container Service for Kubernetes (ACK) cluster. This rule does not apply to ACK clusters for which no node pool is configured.

## Scenario

ACK provides the auto scaling component to automatically scale nodes. Regular instances, GPU-accelerated instances, and preemptible instances can be automatically added to or removed from an ACK cluster to meet your business requirements. This component supports multiple scaling modes, various instance types, and instances that are deployed across zones. This component is applicable to diverse scenarios.

## Risk level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If auto scaling is enabled for the node pools of each ACK cluster, the evaluation result is compliant. This rule does not apply to clusters for which no node pool is configured.

## **Rule details**

**Item**

**Description**

Rule name

ack-cluster-node-pools-auto-scaling-enabled

Rule ID

[ack-cluster-node-pools-auto-scaling-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-node-pools-auto-scaling-enabled)

Tag

ACK and Cluster

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

ACS::ACK::Cluster

Input parameter

None

## **Non-compliance remediation**

Enable auto scaling for the node pools of all ACK clusters. For more information, see [Auto scaling of nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/auto-scaling-of-nodes).
