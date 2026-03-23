Checks whether the RAM Roles for Service Accounts (RRSA) feature is enabled for each Container Service for Kubernetes (ACK) cluster. If so, the evaluation result is Compliant.

## Scenarios

RRSA enforces access control on different pods that are deployed in an ACK cluster. This achieves fine-grained API permission control on pods and reduces security risks.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the RRSA feature is enabled for each ACK cluster, the evaluation result is Compliant.
    
-   If the RRSA feature is not enabled for an ACK cluster, the evaluation result is Non-compliant.
    

## Rule details

**Item**

**Description**

Rule name

ack-cluster-rrsa-enabled

Rule ID

[ack-cluster-rrsa-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-rrsa-enabled)

Tag

ACK

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ACK cluster

Input parameter

None

## Non-compliance remediation

Enable the RRSA feature for each ACK cluster to enforce access control on different pods. For more information, see [Use RRSA to authorize different pods to access different cloud services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services).
