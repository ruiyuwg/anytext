If the function in a Function Compute service can access the Internet and has a custom domain attached, the evaluation result is Compliant.

## Scenarios

You can configure a fixed domain name for an application, so that users can access the application as normal after the application is migrated or after the IP address of the application is changed.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the function in a Function Compute service can access the Internet and has a custom domain attached, the evaluation result is Compliant.
-   If the function in a Function Compute service can access the Internet but does not have a custom domain attached, the evaluation result is Compliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-asm-w82-ose)" section of this topic.

## Rule details

 

Item

Description

Rule name

fc-function-internet-and-custom-domain-enable

Rule identifier

fc-function-internet-and-custom-domain-enable

Tag

FC and Log

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

Function Compute functions

Input parameter

None

## Incompliance remediation

Attach custom domain names to Function Compute functions that can access the Internet. For more information, see [Configure a custom domain name](/help/en/functioncompute/fc-2-0/user-guide/configure-a-custom-domain-name#multiTask145).
