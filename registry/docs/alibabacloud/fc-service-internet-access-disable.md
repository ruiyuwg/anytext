If Internet access is disabled for the Function Compute service, the evaluation result is Compliant.

## Scenarios

Enabling Internet access for Function Compute services may cause higher security risks. We recommend that you access Function Compute through private networks.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If Internet access is disabled for the Function Compute service, the evaluation result is Compliant.
-   If Internet access is enabled for the Function Compute service, the evaluation result is Compliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-d8m-u36-kte)" section of this topic.

## Rule details

**Item**

**Description**

Rule name

fc-service-internet-access-disable

Rule identifier

fc-service-internet-access-disable

Tag

FC and Log

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

Function Compute services

Input parameter

None

## Incompliance remediation

Disable Internet access for Function Compute services and access them through private networks. For more information, see [Configure logging](/help/en/functioncompute/fc-2-0/user-guide/configure-the-logging-feature#multiTask2691).
