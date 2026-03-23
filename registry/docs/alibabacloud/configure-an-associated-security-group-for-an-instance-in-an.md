Checks whether the scaling configurations of each instance specify a security group to which the instance is added. If so, the evaluation result is Compliant.

## **Scenarios**

Specifying a security group in scaling configurations can effectively protect the network security of instances.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the scaling configurations of each instance specify a security group to which the instance is added, the evaluation result is Compliant.
    
-   If the scaling configurations of an instance do not specify a security group to which the instance is added, the evaluation result is Non-compliant.
    

## **Rule details**

**Parameter**

**Description**

Rule name

ess-scaling-configuration-attach-security-group

Rule identifier

[ess-scaling-configuration-attach-security-group](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ess-scaling-configuration-attach-security-group)

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

Specify a security group in the scaling configurations of each instance. For more information, see [Manage scaling configurations](/help/en/auto-scaling/user-guide/manage-scaling-configurations).
