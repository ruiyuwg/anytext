Checks whether a container security policy is enabled and configured for each Container Service for Kubernetes (ACK) cluster.

## Scenario

The configurations of container security policies help O&M engineers of enterprises better use the policy governance feature.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If a container security policy is enabled and configured for each ACK cluster, the evaluation result is compliant.

## **Rule details**

**Item**

**Description**

Rule name

ack-cluster-has-policy-check

Rule ID

[ack-cluster-has-policy-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-has-policy-check)

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

Enable and configure a container security policy for all ACK clusters. For more information, see [Configure and enforce ACK pod security policies](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/configure-and-enforce-ack-pod-security-policies).
