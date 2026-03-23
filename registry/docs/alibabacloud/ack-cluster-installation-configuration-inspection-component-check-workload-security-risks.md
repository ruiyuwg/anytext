Checks whether the inspection component is installed on each Container Service for Kubernetes (ACK) cluster to check the security risks in cluster workloads.

## Scenario

You can enable the inspection feature to scan security risks in cluster workloads. The inspection report is generated for you to check whether security risks exist in the applications of the current state in real time.

## **Risk level**

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

The inspection component checks the security risks in cluster workloads. If the component is installed on each ACK cluster, the evaluation result is compliant.

## **Rule details**

**Item**

**Description**

Rule name

ack-cluster-security-inspector-enabled

Rule ID

[ack-cluster-security-inspector-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-security-inspector-enabled)

Tag

ACK and Cluster

Automatic remediation

Not supported

Trigger type

Every 24 hours

Supported resource type

ACS::ACK::Cluster

Input parameter

None

## **Non-compliance remediation**

Install the inspection component on all ACK clusters. For more information, see [Use the inspection feature to detect security risks in the workloads of an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-the-inspection-feature-to-detect-security-risks-in-the-workloads-of-an-ack-cluster).
