Checks whether the duration between the last update date of each image version in a Container Registry repository and the current date is less than the specified number of days. If so, the evaluation result is Compliant. The default number of days is 180.

## Scenarios

To ensure business continuity, you must renew each subscription instance before it expires.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the duration between the last update date of each image version in a Container Registry repository and the current date is less than the specified number of days, the evaluation result is Compliant. The default number of days is 180.
    
-   If the duration between the last update date of an image version in a Container Registry repository and the current date is greater than or equal to the specified number of days, the evaluation result is Non-compliant.
    

## Rule details

**Item**

**Description**

Rule name

cr-repository-tag-expired-check

Rule ID

[cr-repository-tag-expired-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=cr-repository-tag-expired-check)

Tag

CR and Repository

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

Container Registry repository

Input parameter

days. Default value: 180, in days
