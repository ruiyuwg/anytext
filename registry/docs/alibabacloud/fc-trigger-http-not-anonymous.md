Checks whether the HTTP trigger of a function requires identity authentication.

## Scenarios

We recommend that you enable identity authentication for the HTTP trigger of a function to ensure system security.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the HTTP trigger of the function requires identity authentication, the evaluation result is compliant.
-   This rule does not apply to the non-HTTP triggers of the function.
-   If the HTTP trigger of the function does not require identity authentication, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-wom-u6t-4za).

## Rule details

 

Item

Description

Rule name

fc-trigger-http-not-anonymous

Rule ID

fc-trigger-http-not-anonymous

Tag

FC and Trigger

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

Function Compute trigger

Input parameter

None

## Non-compliance remediation

Enable identity authentication for the HTTP trigger of the function. For more information, see [Manage triggers](/help/en/functioncompute/fc-2-0/user-guide/manage-triggers#concept3804 "This topic describes how to create, update, and delete triggers in the Function Compute console.").
