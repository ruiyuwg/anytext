Checks whether each Kubernetes cluster is a Container Service for Kubernetes (ACK) Edge Pro cluster. If so, the evaluation result is Compliant. For unmanaged Kubernetes clusters, the evaluation result is Not Applicable.

## Scenarios

It is suitable for enterprise customers who have large-scale business in production environments, have high requirements for stability and security, and attach great importance to security, privacy, and service level agreements (SLAs) with compensation clauses.

## Risk level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If each Kubernetes cluster is an ACK Edge Pro cluster, the evaluation result is Compliant.
    
-   If a Kubernetes cluster is not an ACK Edge Pro cluster, the evaluation result is Non-compliant.
    
-   For unmanaged Kubernetes clusters, the evaluation result is Not Applicable.
    

## Rule details

**Item**

**Description**

Rule name

ack-cluster-spec-check

Rule ID

[ack-cluster-spec-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-spec-check)

Tag

ACK and Cluster

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

ACK cluster

Input parameter

None
