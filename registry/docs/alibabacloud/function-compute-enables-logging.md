Checks whether the logging feature is enabled for Function Compute. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to use the logging feature to achieve the objectives of operation monitoring, fault diagnostics, performance tuning, and security audit in Function Compute. The logging feature can effectively improve the management and O&M efficiency for Function Compute.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the logging feature is enabled for Function Compute, the evaluation result is Compliant.
    
-   If the logging feature is not enabled for Function Compute, the evaluation result is Non-compliant.
    

## **Rule details**

**Item**

**Description**

Rule name

fc-service-log-enable

Rule identifier

[fc-service-log-enable](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=fc-service-log-enable)

Tag

FC and Log

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

Function Compute

Input parameter

None

## **Non-compliance remediation**

Enable the logging feature for Function Compute and store the function invocation logs to Simple Log Service. For more information, see [Configure the logging feature](/help/en/functioncompute/fc-2-0/user-guide/configure-the-logging-feature).
