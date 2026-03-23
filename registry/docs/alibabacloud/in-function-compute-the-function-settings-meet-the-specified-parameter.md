Checks whether the functions of Function Compute 2.0 meet the specified requirements. If so, the evaluation result is Compliant.

## Scenarios

You can perform a check on function settings. This helps you manage functions in a centralized manner.

## **Risk level**

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

Checks whether the functions of Function Compute 2.0 meet the specified requirements. If so, the evaluation result is Compliant.

## **Rule details**

**Parameter**

**Description**

Rule Template Name

fc-function-settings-check

Rule Template Identifier

[fc-function-settings-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=fc-function-settings-check)

Tag

Function

Automatic remediation

Not supported

Invoke Type

Configuration Change

Supported resource type

Function Compute function (ACS::FC::Function)

Input parameter

-   minTimeout: The timeout period of the function must be greater than or equal to the value of this parameter. Default value: 1. Unit: seconds.
    
-   runtimes: The runtime environment of the function. Separate multiple runtime environments with commas (,). Default value: Python3.10 or Python3.
    
-   maxTimeout: The timeout period of the function must be less than or equal to the value of this parameter. Default value: 300. Unit: seconds.
    
-   maxMemorySize: The memory size of the function must be less than or equal to the value of this parameter. Default value: 512. Unit: MB.
    
-   minMemorySize: The memory size of the function must be greater than or equal to the value of this parameter. Default value: 64. Unit: MB.
    

## **Non-compliance remediation**

Configure the functions of Function Compute 2.0 to meet the specified requirements. For more information, see [Manage functions](/help/en/functioncompute/fc-2-0/user-guide/manage-functions).
