Checks whether Secret encryption is configured for each Container Service for Kubernetes (ACK) Pro cluster. This rule does not apply to clusters that are not ACK Pro clusters.

## Scenario

In ACK Pro clusters, you can use keys that are created in Key Management Service (KMS) to encrypt Kubernetes Secrets. This ensures data security.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If Secret encryption is configured for each ACK Pro cluster, the evaluation result is compliant. This rule does not apply to clusters that are not ACK Pro clusters.

## **Rule details**

**Item**

**Description**

Rule name

ack-cluster-encryption-enabled

Rule ID

[ack-cluster-encryption-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-encryption-enabled)

Tag

ACK and Cluster

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ACS::ACK::Cluster

Input parameter

None

## **Non-compliance remediation**

Configure Secret encryption for all ACK Pro clusters. For more information, see [Use KMS to encrypt Kubernetes Secrets](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-kms-to-encrypt-kubernetes-secrets-2).
