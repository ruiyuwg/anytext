Checks whether the cluster inspection feature is enabled for each Container Service for Kubernetes (ACK) cluster.

## Scenario

Container Intelligence Service provides the cluster inspection feature. You can use this feature to view the status of ACK clusters and identify potential risks in the clusters, such as insufficient quotas of cloud resources or high usage of key Kubernetes resources. You can troubleshoot issues based on the suggested solutions.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If the cluster inspection feature is enabled for each ACK cluster, the evaluation result is compliant.

## **Rule details**

**Item**

**Description**

Rule name

ack-cluster-configuation-inspect-enabled

Rule ID

[ack-cluster-configuation-inspect-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-configuation-inspect-enabled)

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

Enable the cluster inspection feature for all ACK clusters. For more information, see [Work with the cluster inspection feature](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-the-cluster-inspection-feature/).
