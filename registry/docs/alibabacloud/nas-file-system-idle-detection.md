Checks whether a mount target is created for an File Storage NAS (NAS) file system. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to manage idle NAS file systems. It helps you better manage costs.

## **Risk level**

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If a mount target is created for a NAS file system, the evaluation result is Compliant.
    
-   If no mount target is created for a NAS file system, the evaluation result is Non-compliant.
    
-   If the duration from the creation time of a NAS file system to the current time is shorter than the specified number of days, the evaluation result is Not Applicable. The default period is 7 days.
    

## **Rule details**

**Item**

**Description**

Rule name

nas-filesystem-idle-check

Rule identifier

[nas-filesystem-idle-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=nas-filesystem-idle-check)

Tag

NAS and FileSystem

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

NAS file system

Input parameter

allocateDays. Default value: 7 days.

## **Non-compliance remediation**

Create a mount target for a NAS file system. For more information, see [What is NAS?](/help/en/nas/product-overview/what-is-nas)
