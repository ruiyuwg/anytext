Checks whether the Image parameter of each scaling configuration is set to a specified value. If so, the evaluation result is Compliant. The default value of the Image parameter is Shared Image. This rule does not apply to scaling configurations whose Image parameter is not configured.

## Scenarios

This rule applies when you need to use images from the same source for all ECS instances of your business.

## Risk Level

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If the Image parameter of each scaling configuration is set to a specified value, the evaluation result is Compliant. The default value of the Image parameter is Shared Image. This rule does not apply to scaling configurations whose Image parameter is not configured.

## **Rule details**

**Item**

**description**

Rule name

ess-scaling-configuration-image-type-check

Rule identifier

[ess-scaling-configuration-image-type-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=ess-scaling-configuration-image-type-check)

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ACS::ESS::ScalingConfiguration

Input parameter

imageOwnerAlias. Default value: others.
