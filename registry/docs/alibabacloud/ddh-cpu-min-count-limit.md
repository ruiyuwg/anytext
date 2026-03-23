Checks whether the number of CPU cores for a dedicated host is greater than or equal to a specified value.

## Scenario

Make sure that the number of CPU cores for a dedicated host meets your business expansion requirements. Otherwise, your business system may be interrupted.

## Risk level

Default risk level: low.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the number of CPU cores for the dedicated host is greater than or equal to the specified value, the configuration is considered compliant.
-   If the number of CPU cores for the dedicated host is less than the specified value, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

Item

Description

Rule name

ddh-cpu-min-count-limit

Rule ID

ddh-cpu-min-count-limit

Tag

DedicatedHost, DDH, and CPU

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

Dedicated host

Input parameter

`cpuCount`. Default value: 24.

## Non-compliance remediation

Create a dedicated host whose number of CPU cores meets your business expansion requirements. For more information, see [Create a dedicated host](/help/en/dedicated-host/getting-started/create-a-dedicated-host#task-fbz-5mn-tdb).
