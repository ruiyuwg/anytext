Checks whether a Resource Access Management (RAM) policy is enabled for the access points of File Storage NAS (NAS) file systems. If so, the evaluation result is Compliant.

## Scenarios

You can use custom policies to grant read and write permissions to different RAM users or RAM roles within the same account. You can also use custom policies to allow RAM users or RAM roles within the same account to access resources in the file system by using the root account. This helps meet fine-grained permission requirements and implement more flexible permission management.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

Checks whether a RAM policy is enabled for the access points of NAS file systems. If so, the evaluation result is Compliant.

## **Rule details**

**Parameter**

**Description**

Rule Template Name

nas-filesystem-access-point-enabled-ram

Rule Template Identifier

[nas-filesystem-access-point-enabled-ram](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=nas-filesystem-access-point-enabled-ram)

Tag

FileSystem

Automatic remediation

Not supported

Invoke Type

Periodic: Every 24 hours

Supported resource type

NAS file system (ACS::NAS::FileSystem)

Input parameter

N/A

## **Non-compliance remediation**

Enable a RAM policy for the access points of NAS file systems. For more information, see [Manage access points](/help/en/nas/user-guide/management-access-point#0eff248051u22).
