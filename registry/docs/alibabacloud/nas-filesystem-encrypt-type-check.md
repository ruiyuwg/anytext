Checks whether the server-side encryption feature is enabled for the File Storage NAS (NAS) file systems that you create.

## Scenarios

NAS supports server-side encryption. NAS encrypts data that is stored in file systems. When you access data, NAS decrypts and sends you the required data. If you have higher requirements for data security or compliance, we recommend that you enable the server-side encryption feature.

## Risk level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the server-side encryption feature is enabled for the NAS file systems that you create, the evaluation result of the rule is Compliant.
    
-   If the server-side encryption feature is disabled for a NAS file system that you create, the evaluation result of the rule is non-compliant. For more information about how to remediate a non-compliant configuration, see [Non-compliance remediation](#section-1yg-xoz-l8a).
    

## Rule details

**Item**

**Description**

Rule name

nas-filesystem-encrypt-type-check

Rule identifier

nas-filesystem-encrypt-type-check

Tag

NAS and FileSystem

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

NAS file system

Input parameter

N/A

## Non-compliance remediation

Find the NAS file system whose configuration is non-compliant and enable the server-side encryption feature for it. For more information, see [Server-side encryption](/help/en/nas/user-guide/server-side-encryption#task-2349639).
