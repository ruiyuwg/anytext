If you can access the custom domain name that is bound to a function in Function Compute over the Internet, and the function uses the specified version of the transport layer security (TLS) protocol, the evaluation result is Compliant.

## Scenarios

To enhance data security, you can specify a version of the TLS protocol for functions in Function Compute.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If you can access the custom domain name that is bound to a function in Function Compute over the Internet, and the function uses the specified version of the TLS protocol, the evaluation result is Compliant.
-   If the function in Function Compute is not bound to a custom domain name, the evaluation result is Non-compliant. If you can access the custom domain name that is bound to the function in Function Compute over the Internet, but the function does not use the specified TLS protocol version, the evaluation result is Non-compliant. For more information about how to remediate a non-compliant configuration, see [Non-compliance remediation](#section-mab-0ar-5nv).

## Rule details

Item

Description

Rule name

fc-function-custom-domain-and-tls-enable

Rule identifier

fc-function-custom-domain-and-tls-enable

Tag

FC and Log

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

Function Compute services

Input parameter

`minVersion` (Default value: TLSv1.2)

## Non-compliance remediation

Make sure that you can access the custom domain name that is bound to a function in Function Compute over the Internet, and that the function uses the specified TLS protocol version. For more information, see [Configure a custom domain name](/help/en/functioncompute/fc-2-0/user-guide/configure-a-custom-domain-name#multiTask145).
