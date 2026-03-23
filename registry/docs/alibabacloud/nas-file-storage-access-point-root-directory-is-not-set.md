Checks whether the root directory of the access point of an File Storage NAS (NAS) file system is specified as the default directory. If the default directory is not the root directory of the access point of a NAS file system, the evaluation result is Compliant.

## Scenarios

You can create multiple access points for a NAS file system, configure different access policies for the access points, and apply the access points to different services. This reduces the complexity of permission management for multiple services to access shared datasets.

## **Risk level**

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

Checks whether the root directory of the access point of a NAS file system is specified as the default directory. If the default directory is not the root directory of the access point of a NAS file system, the evaluation result is Compliant.

## **Rule details**

**Parameter**

**Description**

Rule Template Name

nas-filesystem-access-point-root-directory-check

Rule Template Identifier

[nas-filesystem-access-point-root-directory-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=nas-filesystem-access-point-root-directory-check)

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

Configure the root directory as the default directory of the access point of a NAS file system. For more information, see [Manage access points](/help/en/nas/user-guide/management-access-point).
