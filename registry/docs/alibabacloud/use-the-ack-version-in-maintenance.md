Checks whether the Kubernetes versions of Container Service for Kubernetes (ACK) clusters are no longer supported. If the Kubernetes versions of ACK clusters are supported, the evaluation result is Compliant.

## Scenarios

Alibaba Cloud periodically updates the list of Kubernetes versions supported by ACK and stops providing technical support for outdated versions. Security and stability risks exist in outdated Kubernetes versions. We recommend that you update your clusters that use outdated Kubernetes versions at the earliest opportunity.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

Checks whether the Kubernetes versions of ACK clusters are no longer supported. If the Kubernetes versions of ACK clusters are supported, the evaluation result is Compliant.

## **Rule details**

**Parameter**

**Description**

Rule Template Name

ack-cluster-supported-version

Rule Template Identifier

[ack-cluster-supported-version](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-supported-version)

Tag

ACK

Automatic remediation

Not supported

Invoke Type

Configuration Change

Supported resource type

ACK cluster (ACS::ACK::Cluster)

Input parameter

N/A

## **Non-compliance remediation**

Update the Kubernetes version of ACK clusters to a version in the Released state. For more information, see [Support for Kubernetes versions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/).
