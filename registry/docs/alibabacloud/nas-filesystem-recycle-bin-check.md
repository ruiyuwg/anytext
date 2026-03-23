If the recycle bin feature is enabled for the File Storage NAS file system, the evaluation result is Compliant.

## Scenarios

If you accidentally delete files from a general-purpose NAS file system, you can restore the files and the metadata of the files, such as UID, GID, and ACL, from the NAS recycle bin.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the recycle bin feature is enabled for the NAS file system, the evaluation result is Compliant.
    
-   If the recycle bin feature is disabled for the NAS file system, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-p3i-ot7-4aw)" section of this topic.
    

## Rule details

**Item**

**Description**

Rule name

nas-filesystem-recycle-bin-check

Rule identifier

nas-filesystem-recycle-bin-check

Tag

NAS and FileSystem

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

NAS file system

Input parameter

None

## Incompliance remediation

Enable the recycle bin feature for NAS file systems. For more information, see [Recycle bin](/help/en/nas/user-guide/recycle-bin#task-2067898).
