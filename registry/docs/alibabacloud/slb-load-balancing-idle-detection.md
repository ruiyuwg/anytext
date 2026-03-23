Checks whether at least one listener is running on each Server Load Balancer (SLB) instance. If so, the evaluation result is Compliant.

## Scenarios

Paying attention to and managing SLB instances that are not in use during idle periods help enterprises better manage costs.

## **Risk level**

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If at least one listener is running on each SLB instance, the evaluation result is Compliant.
    
-   If no listener is running on an SLB instance, the evaluation result is Non-compliant.
    
-   If the creation time of an SLB instance is within the specified number of days, the evaluation result is Not Applicable. The default number of days is 7.
    

## **Rule details**

**Item**

**Description**

Rule name

slb-instance-idle-check

Rule ID

[slb-instance-idle-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=slb-instance-idle-check)

Tag

SLB and LoadBalancer

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

SLB instance

Input parameter

allocateDays. Default value: 7

## **Non-compliance remediation**

Ensure that at least one listener is running on each SLB instance. For more information, see [SLB overview](/help/en/slb/product-overview/slb-overview).
