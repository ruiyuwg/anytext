If 0.0.0.0/0 is not added to any rule of the permission group of the NAS file system, the evaluation result is Compliant.

## Scenarios

If 0.0.0.0/0 is added to a permission group rule of a NAS file system, the file system allows access from all IP addresses. This exposes the file system to high security risks. We recommend that you do not use this configuration.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If 0.0.0.0/0 is not added to any rule of the permission group of the NAS file system, the evaluation result is Compliant.
    
-   If 0.0.0.0/0 is added to a rule of the permission group of the NAS file system, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see the "[Incompliance remediation](#section-jya-j01-9ok)" section of this topic.
    
-   If no mount target is created for the NAS file system or if the permission group of the NAS file system does not have a rule, the evaluation result is Incompliant.
    

## Rule details

**Item**

**Description**

Rule name

nas-filesystem-mount-target-access-group-check

Rule identifier

nas-filesystem-mount-target-access-group-check

Tag

NAS and FileSystem

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

File Storage NAS file system

Input parameter

None

## Incompliance remediation

Delete 0.0.0.0/0 from the rules of the permission group. For more information, see [Usage notes](/help/en/nas/user-guide/usage-notes#concept-o3z-wfk-bfb).
