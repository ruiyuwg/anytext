Checks whether the cost insights feature is enabled for each Container Service for Kubernetes (ACK) cluster.

## Scenario

The cost insights feature of ACK helps IT cost administrators of enterprises trace the resource usage and cost distribution of clusters from multiple dimensions and provides cost-saving suggestions.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If the cost insights feature is enabled for each ACK cluster, the evaluation result is compliant.

## **Rule details**

**Item**

**Description**

Rule name

ack-cluster-cost-exporter-enabled

Rule ID

[ack-cluster-cost-exporter-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-cost-exporter-enabled)

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

Enable the cost insights feature for all ACK clusters. For more information, see [Enable the cost insights feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights).
