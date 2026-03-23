Checks whether the File Storage NAS (NAS) file systems that you create are in the specified states.

## Scenarios

You can check whether the NAS file systems that you create are run as expected. This ensures business continuity.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the NAS file systems that you create are in the specified states, the evaluation result of the rule is Compliant.
    
-   If a NAS file system that you create is not in any of the specified states, the evaluation result of the rule is Non-compliant.
    

## Rule details

**Item**

**Description**

Rule name

nas-filesystem-status-check

Rule identifier

nas-filesystem-status-check

Tag

NAS and FileSystem

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

NAS file system

Input parameter

`statusArray`. Default value: `Running`.
