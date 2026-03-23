If the tracing analysis feature is enabled for the Function Compute service, the evaluation result is Compliant.

## Scenarios

You can enable the tracing analysis feature for your Function Compute services to facilitate code debugging, fault diagnostics, and data analysis.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the tracing analysis feature is enabled for the Function Compute service, the evaluation result is Compliant.
-   If the tracing analysis feature is disabled for the Function Compute service, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-oqe-mze-fmn)" section of this topic.

## Rule details

**Item**

**Description**

Rule name

fc-service-tracing-enable

Rule identifier

fc-service-tracing-enable

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

Enable tracing analysis for Function Compute services. For more information, see [Configure logging](/help/en/functioncompute/fc-2-0/user-guide/configure-the-logging-feature#multiTask2691).
