Checks whether the specified key is contained in the environment variable name of the container group of Elastic Container Instance (ECI). If the specified key is not contained in the environment variable name of the container group of ECI, the evaluation result is Compliant.

## Scenarios

Make sure that sensitive information is adequately protected when you use environment variables to prevent data leaks and abuse.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

Checks whether the specified key is contained in the environment variable name of the container group of ECI. If the specified key is not contained in the environment variable name of the container group of ECI, the evaluation result is Compliant.

## **Rule details**

**Parameter**

**Description**

Rule Template Name

eci-containergroup-environment-no-specified-keys

Rule Template Identifier

[eci-containergroup-environment-no-specified-keys](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=eci-containergroup-environment-no-specified-keys)

Tag

ContainerGroup

Automatic remediation

Not supported

Invoke Type

Periodic: Every 24 hours

Supported resource type

Container group (ACS::ECI::ContainerGroup)

Input parameter

The parameter name is keys. Default value: AccessKey, AK, or AccessKeyID.
