Checks whether the duration between the expiration date of each AnalyticDB for MySQL instance and the current date is greater than the specified period of time. If so, the evaluation result is Compliant. Default value: 30, in days. If the auto-renewal feature is enabled for each AnalyticDB for MySQL instance, the evaluation result is Compliant. This rule applies only to subscription instances. For pay-as-you-go instances, the evaluation result is Not Applicable.

## Scenarios

To ensure business continuity, you must renew each subscription instance before it expires.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the duration between the expiration date of each AnalyticDB for MySQL instance and the current date is greater than the specified period of time, the evaluation result is Compliant. Default value: 30, in days. If the auto-renewal feature is enabled for each AnalyticDB for MySQL instance, the evaluation result is Compliant.
    
-   If the duration between the expiration date of an AnalyticDB for MySQL instance and the current date is less than or equal to the specified period of time, the evaluation result is Non-compliant. Default value: 30, in days. If the auto-renewal feature is disabled for an AnalyticDB for MySQL instance, the evaluation result is Non-compliant.
    
-   For pay-as-you-go instances, the evaluation result is Not Applicable.
    

## Rule details

**Item**

**Description**

Rule name

adb-cluster-expired-check

Rule ID

[adb-cluster-expired-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=adb-cluster-expired-check)

Tag

ADB

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

AnalyticDB for MySQL cluster

Input parameter

days. Default value: 30, in days
