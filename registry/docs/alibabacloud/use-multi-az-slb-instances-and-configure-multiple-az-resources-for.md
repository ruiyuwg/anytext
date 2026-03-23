Checks whether the Server Load Balancer (SLB) instance that you use is of the multi-zone architecture and the resources of multiple zones are added to the server groups used by the listeners of the SLB instance. If so, the evaluation result is Compliant.

## Scenarios

Using the multi-zone architecture for SLB instances and adding the resources in multiple zones to server groups can improve the disaster recovery capability of the system and reduce the risk of business interruption.

## **Risk level**

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the SLB instance that you use is of the multi-zone architecture and the resources of multiple zones are added to the server groups used by the listeners of the SLB instance, the evaluation result is Compliant.
    
-   If the SLB instance that you use is of the single-zone architecture or the resources of multiple zones are not added to the server groups used by the listeners of the SLB instance that you use, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

slb-all-listener-servers-multi-zone

Rule ID

[slb-all-listener-servers-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=slb-all-listener-servers-multi-zone)

Tag

SLB

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

SLB instance

Input parameter

None
