Checks whether at least two servers are added to the default server group of the SLB instance that you use. If so, the evaluation result is Compliant.

## Scenarios

Adding servers to the default server group of the SLB instance that you use can form a server group with high performance and high availability. This can improve business stability.

## **Risk level**

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If at least two servers are added to the default server group of the SLB instance that you use, the evaluation result is Compliant.
    
-   If less than two servers are added to the default server group of the SLB instance that you use, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

slb-default-server-group-multi-server

Rule ID

[slb-default-server-group-multi-server](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=slb-default-server-group-multi-server)

Tag

SLB and LoadBalancer

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

SLB instance

Input parameter

None

## **Non-compliance remediation**

Add at least two servers to the default server group of the SLB instance that you use. For more information, see [Add an ECS instance to the default server group](/help/en/slb/classic-load-balancer/user-guide/add-an-ecs-instance-to-the-default-server-group).
