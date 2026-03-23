Checks whether a specified number of backend servers are added for all listeners of each Server Load Balancer (SLB) instance. If so, the evaluation result is Compliant. Default value: 1. If the listeners of each SLB instance are HTTP listeners and the forwarding feature is enabled for each SLB instance, the evaluation result is Compliant.

## Scenarios

Adding multiple servers for the listeners of an SLB instance can form a server group with high performance and high availability. This can improve business stability.

## **Risk level**

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If a specified number of backend servers are added for all listeners of each SLB instance, the evaluation result is Compliant. Default value: 1. If the listeners of each SLB instance are HTTP listeners and the forwarding feature is enabled for each SLB instance, the evaluation result is Compliant.
    
-   If a specified number of backend servers are not added for all listeners of an SLB instance, the evaluation result is Non-compliant. If no backend server is added for an SLB instance, the evaluation result is Non-compliant. If the listeners of an SLB instance are not HTTP listeners or the forwarding feature is not enabled for an SLB instance, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

slb-all-listenter-has-server

Rule ID

[slb-all-listenter-has-server](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=slb-all-listenter-has-server)

Tag

SLB and LoadBalancer

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

SLB instance

Input parameter

serverCount. Default value: 1

## **Non-compliance remediation**

Ensure that a specified number of backend servers are added for all listeners of each SLB instance, that the listeners of each SLB instance are HTTP listeners, and that the forwarding feature is enabled for each SLB instance. For more information, see [Listener overview](/help/en/slb/classic-load-balancer/user-guide/listener-overview/).
