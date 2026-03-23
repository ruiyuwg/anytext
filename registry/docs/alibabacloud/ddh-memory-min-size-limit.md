Checks whether the memory size of a dedicated host is greater than or equal to a specified value.

## Scenario

Make sure that the memory size of a dedicated host meets your business expansion requirements. Otherwise, your business system may be interrupted.

## Risk level

Default risk level: low.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the memory size of the dedicated host is larger than or equal to the specified value, the configuration is considered compliant.
-   If the memory size of the dedicated host is less than the specified value, the configuration is considered non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-12h-rba-oio).

## Rule details

 

Item

Description

Rule name

ddh-memory-min-size-limit

Rule ID

ddh-memory-min-size-limit

Tag

DedicatedHost, DDH, and Memory

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

Dedicated host

Input parameter

`memorySize`

## Non-compliance remediation

Create a dedicated host whose memory size meets your business expansion requirements. For more information, see [Create a dedicated host](/help/en/dedicated-host/getting-started/create-a-dedicated-host#task-fbz-5mn-tdb "This topic describes how to create a subscription dedicated host in the Elastic Compute Service (ECS) console.").
