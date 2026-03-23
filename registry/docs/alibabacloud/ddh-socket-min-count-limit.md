Checks whether the number of physical CPUs on a dedicated host is greater than or equal to a specified value.

## Scenario

A greater number of physical CPUs bring greater computing capabilities. Make sure that the number of physical CPUs on a dedicated host meets your business requirements.

## Risk level

Default risk level: low.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the number of physical CPUs on the dedicated host is greater than or equal to the specified value, the configuration is considered compliant.
-   If the number of physical CPUs on the dedicated host is less than the specified value, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

Item

Description

Rule name

ddh-socket-min-count-limit

Rule ID

ddh-socket-min-count-limit

Tag

DedicatedHost, DDH, CPU, and Socket

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

Dedicated host

Input parameter

`socketCount`. Default value. 2.

## Non-compliance remediation

Create a dedicated host whose number of physical CPUs meets your business requirements. For more information, see [Create a dedicated host](/help/en/dedicated-host/getting-started/create-a-dedicated-host#task-fbz-5mn-tdb).
