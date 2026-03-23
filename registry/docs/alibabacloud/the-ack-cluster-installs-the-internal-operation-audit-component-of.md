Checks whether the container auditing feature is enabled for each Container Service for Kubernetes (ACK) cluster.

## Scenario

The container auditing feature allows you to audit the commands and operations that are run and performed by different users in containers.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If the container auditing feature is enabled for each ACK cluster, the evaluation result is compliant.

## **Rule details**

**Item**

**Description**

Rule name

ack-cluster-advanced-audit-enabled

Rule ID

[ack-cluster-advanced-audit-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-advanced-audit-enabled)

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

Enable the container auditing feature for all ACK clusters. For more information, see [Use the container auditing feature](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-container-auditing).
