Checks whether the Terway network plug-in is used in each Container Service for Kubernetes (ACK) cluster.

## Scenario

We recommend that you configure the Terway network plug-in when you create an ACK cluster. The Terway network plug-in enables internal communications within the ACK cluster.

## Risk level

Default risk level: medium.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the Terway network plug-in is used in each ACK cluster, the evaluation result is compliant.
-   If the Terway network plug-in is not used in an ACK cluster, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-5tw-fpf-4v4).

## Rule details

 

Item

Description

Rule name

ack-cluster-network-type-check

Rule ID

ack-cluster-network-type-check

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

Select the Terway network plug-in when you create an ACK cluster. For more information, see [Work with Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#task-1797447 "Terway is an open source Container Network Interface (CNI) plug-in developed by Alibaba Cloud. Terway works with Virtual Private Cloud (VPC) and allows you to use standard Kubernetes network policies to regulate how containers communicate with each other. You can use Terway to enable internal communication within a Kubernetes cluster. This topic describes how to use Terway in a Container Service for Kubernetes (ACK) cluster.").
