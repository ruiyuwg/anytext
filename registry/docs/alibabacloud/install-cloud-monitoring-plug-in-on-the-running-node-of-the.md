Checks whether the CloudMonitor agent is installed on all nodes in each Container Service for Kubernetes (ACK) cluster and whether the CloudMonitor agent runs as expected. If so, the evaluation result is Compliant.

## Scenarios

When you create, change, or delete an application that is deployed on a node in an ACK cluster, the agent automatically synchronizes the application metadata to CloudMonitor to implement container monitoring and alerting for the application.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the CloudMonitor agent is installed on all nodes in each ACK cluster and the CloudMonitor agent runs as expected, the evaluation result is Compliant.
    
-   If the CloudMonitor agent is not installed on a node in an ACK cluster or the CloudMonitor agent does not run as expected, the evaluation result is Non-compliant.
    

## Rule details

**Item**

**Description**

Rule name

ack-running-cluster-node-monitorenabled

Rule ID

[ack-running-cluster-node-monitorenabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ack-running-cluster-node-monitorenabled)

Tag

ACK and CMS

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

## Non-compliance remediation

Install the CloudMonitor agent on all nodes in each ACK cluster and ensure that the CloudMonitor agent runs as expected. For more information, see [alicloud-monitor-controller](/help/en/ack/product-overview/alicloud-monitor-controller).
