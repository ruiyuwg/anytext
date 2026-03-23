Checks whether all system disks in the scaling configurations are encrypted. If so, the evaluation result is Compliant.

## **Scenarios**

Encrypting the system disks in the scaling configurations can effectively improve data security and reliability, and ensure that compliance requirements can be met.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If all system disks in the scaling configurations are encrypted, the evaluation result is Compliant.
    
-   If a system disk in the scaling configurations is not encrypted, the evaluation result is Non-compliant.
    

## **Rule details**

**Parameter**

**Description**

Rule name

ess-scaling-configuration-system-disk-encrypted

Rule identifier

[ess-scaling-configuration-system-disk-encrypted](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ess-scaling-configuration-system-disk-encrypted)

Tag

ESS and ScalingConfiguration

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

Scaling configurations

Input parameter

None

## **Non-compliance remediation**

Encrypt all system disks in the scaling configurations. For more information, see [Manage scaling configurations](/help/en/auto-scaling/user-guide/manage-scaling-configurations).
