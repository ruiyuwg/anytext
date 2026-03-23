Checks whether Internet access is disabled for each Container Registry instance. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to access Container Registry instances over the Internet. Network security cannot be ensured when you access Container Registry instances over the Internet. We recommend that you access Container Registry instances over virtual private clouds (VPCs).

## Risk level

Default risk level: high.

When you configure this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If Internet access is disabled for each Container Registry instance, the evaluation result is Compliant.
-   If Internet access is enabled for a Container Registry instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-abw-orr-0lh).

## Rule details

Item

Description

Rule name

cr-instance-public-access-check

Rule identifier

cr-instance-public-access-check

Tag

CR and Repository

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

Container Registry instances

Input parameter

None

## Incompliance remediation

Disable Internet access for a Container Registry instance. For more information, see [Configure access over the Internet](/help/en/acr/user-guide/configure-access-over-the-internet#task484).
