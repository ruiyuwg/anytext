Checks whether a namespace and an image repository are created for each Container Registry instance. If so, the evaluation result is Compliant.

## Scenarios

Paying attention to and managing instances that are not in use during idle periods can help enterprises better manage costs.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If a namespace and an image repository are created for each Container Registry instance, the evaluation result is Compliant.
    
-   If no namespace or image repository is created for a Container Registry instance, the evaluation result is Non-compliant.
    
-   If the creation time of a Container Registry instance is within the specified number of days, the evaluation result is Not Applicable. The default number of days is 7.
    

## Rule details

**Item**

**Description**

Rule name

cr-instance-idle-check

Rule ID

[cr-instance-idle-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=cr-instance-idle-check)

Tag

CR and Repository

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

Container Registry instance

Input parameter

allocateDays. Default value: 7, in days

## Non-compliance remediation

Create a namespace and an image repository for each Container Registry instance. For more information, see [Configure access over the Internet](/help/en/acr/user-guide/configure-access-over-the-internet).
