Checks whether a managed node pool is enabled for each Container Service for Kubernetes (ACK) cluster to automate O&M tasks for specific nodes. This rule does not apply to ACK clusters for which no node pool is configured.

## Scenario

ACK allows you to create managed node pools. Managed node pools can automate O&M tasks for specific nodes. For example, managed node pools can automatically patch high-risk Common Vulnerabilities and Exposures (CVE) vulnerabilities or fix specific anomalies. This improves the O&M efficiency.

## Risk level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If a managed node pool is enabled for each ACK cluster to automate O&M tasks for specific nodes, the evaluation result is compliant. This rule does not apply to clusters for which no node pool is configured.

## **Rule details**

**Item**

**Description**

Rule name

ack-cluster-node-pools-management-enabled

Rule ID

[ack-cluster-node-pools-management-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-node-pools-management-enabled)

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

Configure managed node pools for all ACK clusters. For more information, see [Overview of managed node pools](/help/en/ack/overview-of-managed-node-pools).
