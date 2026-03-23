Checks whether 0.0.0.0/0 is specified as the authorized object of a rule in a permission group in File Storage NAS (NAS).

## Scenarios

You can specify IP addresses or CIDR blocks in rules that are added to a permission group in NAS. This restricts the service scope of specific NAS file systems and ensures network security in the cloud environment.

## Risk level

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If 0.0.0.0/0 is not specified as the authorized object of any rule in any permission group in NAS, the evaluation result of the rule is Compliant.
    
-   If 0.0.0.0/0 is specified as the authorized object of a rule in a permission group in NAS, the evaluation result of the rule is Non-compliant. For more information about how to remediate a non-compliant configuration, see [Non-compliance remediation](#section-u8l-ahn-tdn).
    

## Rule details

**Item**

**Description**

Rule name

nas-access-group-public-access-check

Rule identifier

nas-access-group-public-access-check

Tag

NAS and AccessGroup

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

NAS file system

Input parameter

N/A

## Non-compliance remediation

Find the permission group whose configuration is non-compliant and add a rule that implements access control to the permission group. For more information, see [Manage permission groups](/help/en/nas/user-guide/manage-a-permission-group#task-27534-zh).
