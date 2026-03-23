Checks whether subscription SLB instances meet all of the following conditions: (1) No subscription SLB instances are in the Stopped state. (2) Listeners are configured for each subscription SLB instance. (3) Not all listeners are stopped. (4) Backend servers are added for each subscription SLB instance, and the weight of any backend server is not 0. If so, the evaluation result is Compliant. If subscription SLB instances do not meet all of these conditions, they are idle instances.

## **Scenarios**

Paying attention to and managing instances that are not in use during idle periods help enterprises better manage costs.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   The evaluation result is Compliant if subscription SLB instances meet all of the following conditions:
    
    -   No subscription SLB instances are in the Stopped state.
        
    -   Listeners are configured for each subscription SLB instance.
        
    -   Not all listeners are stopped.
        
    -   Backend servers are added for each subscription SLB instance, and the weight of any backend server is not 0.
        
-   The evaluation result is Non-compliant if a subscription SLB instance meets any of the following conditions:
    
    -   The subscription SLB instance is in the Stopped state.
        
    -   No listeners are configured for the subscription SLB instance.
        
    -   All listeners are stopped.
        
    -   No backend servers are added for the subscription SLB instance.
        
    -   The weights of all backend servers are 0.
        
-   If SLB instances are pay-as-you-go instances, the evaluation result is Not Applicable.
    

## Rule details

**Item**

**Description**

Rule name

clb-prepaid-instance-idle-check

Rule ID

[clb-prepaid-instance-idle-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=clb-prepaid-instance-idle-check)

Tag

SLB and LoadBalancer

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

SLB instance

Input parameter

allocateDays. Default value: 7, in days

## Non-compliance remediation

Ensure that subscription SLB instances meet all of the following conditions: (1) No subscription SLB instances are in the Stopped state. (2) Listeners are configured for each subscription SLB instance. (3) Not all listeners are stopped. (4) Backend servers are added for each subscription SLB instance, and the weight of any backend server is not 0. For more information, see [SLB overview](/help/en/slb/product-overview/slb-overview).
