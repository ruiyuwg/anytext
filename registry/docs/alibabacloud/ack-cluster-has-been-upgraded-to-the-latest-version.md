Checks whether each Container Service for Kubernetes (ACK) cluster is upgraded to the latest version. If so, the evaluation result is Compliant.

## Scenarios

It is suitable for the ACK clusters that have earlier versions and experience stability issues. Such clusters have high risks of upgrade failures.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If each ACK cluster is upgraded to the latest version, the evaluation result is Compliant.
    
-   If an ACK cluster is not upgraded to the latest version, the evaluation result is Non-compliant.
    

## Rule details

**Item**

**Description**

Rule name

ack-cluster-upgrade-latest-version

Rule ID

[ack-cluster-upgrade-latest-version](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-upgrade-latest-version)

Tag

ACK and Cluster

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ACK cluster

Input parameter

None

## Non-compliance remediation

Upgrade each ACK cluster to the latest version to prevent security and stability risks caused by earlier versions. For more information, see [Update an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
