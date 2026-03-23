Checks whether the logs of the control plane components are enabled for each Container Service for Kubernetes (ACK) managed cluster. If so, the evaluation result is Compliant. For unmanaged Kubernetes clusters, the evaluation result is Not Applicable.

## Scenarios

The logs of the control plane components can provide more comprehensive monitoring, troubleshooting, performance analysis, and security audit capabilities for clusters, and help you maintain and optimize the stability and reliability of your clusters.

## **Risk level**

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If the logs of the control plane components are enabled for each ACK managed cluster, the evaluation result is Compliant. For unmanaged Kubernetes clusters, the evaluation result is Not Applicable.

## **Rule details**

**Parameter**

**Description**

Rule name

ack-cluster-control-plane-log-enable

Rule identifier

[ack-cluster-control-plane-log-enable](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-cluster-control-plane-log-enable)

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
