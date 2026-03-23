Checks whether a backup plan is created for each File Storage NAS file system. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to back up the files of a NAS file system on a regular basis. This way, you can restore files at the earliest opportunity if data is lost or damaged.

## Risk level

Default risk level: medium.

When you configure this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If a backup plan is created for each NAS file system, the evaluation result is Compliant.
    
-   If a backup plan is not created for a NAS file system, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-f64-woa-sxl).
    

## Rule details

**Item**

**Description**

Rule name

nas-filesystem-enable-backup-plan

Rule identifier

nas-filesystem-enable-backup-plan

Tag

NAS and FileSystem

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

NAS file systems

Input parameter

None

## Incompliance remediation

Create a backup plan for a NAS file system. For more information, see [Back up a General-purpose NAS file system](/help/en/nas/user-guide/back-up-files-from-a-general-purpose-nas-file-system#task-73045-zh).
