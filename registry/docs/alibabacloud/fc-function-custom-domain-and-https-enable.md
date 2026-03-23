If you can access the custom domain name that is bound to a function in Function Compute over the Internet, and HTTPS is enabled for the function, the evaluation result is Compliant.

## Scenarios

To enhance data security, you can enable HTTPS for functions in Function Compute to encrypt transmitted website data.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If you can access the custom domain name that is bound to a function in Function Compute over the Internet, and HTTPS is enabled for the function, the evaluation result is Compliant.
-   If the function in Function Compute is not bound to a custom domain name, the evaluation result is Non-compliant. If you can access the custom domain name that is bound to a function in Function Compute over the Internet but HTTPS is disabled for the function, the evaluation result is Non-compliant. For more information about how to remediate a non-compliant configuration, see [Non-compliance remediation](#section-eko-t72-fe2).

## Rule details

Item

Description

Rule name

fc-function-custom-domain-and-https-enable

Rule identifier

fc-function-custom-domain-and-https-enable

Tag

FC and Log

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

Function Compute functions

Input parameter

None

## Non-compliance remediation

Make sure that you can access the custom domain name that is bound to a function in Function Compute over the Internet, and that you enable HTTPS for the function. For more information, see [Configure a custom domain name](/help/en/functioncompute/fc-2-0/user-guide/configure-a-custom-domain-name#multiTask145).
