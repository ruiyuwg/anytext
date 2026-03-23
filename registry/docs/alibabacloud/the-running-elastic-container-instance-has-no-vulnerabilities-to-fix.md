If an Elastic Container Instance has no vulnerabilities of the specified type and level to be fixed in the Security Center, the calculation result is compliant.

## **Scenario**

Regular scans and automatic updates ensure that running Elastic Container Instances have no vulnerabilities to fix. This ensures the security and stability of applications.

## **Severity**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If an Elastic Container Instance has no vulnerabilities of the specified type and level to be fixed in the Security Center, the calculation result is compliant. This rule does not apply to ECS instances that are not running.

## **Description**

**Field**

**description**

Rule Template Name

The running Elastic Container Instance has no vulnerabilities to be fixed.

Rule Template Identifier

[eci-container-group-updated-security-vul](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=eci-container-group-updated-security-vul)

Automatic remediation

Not supported

Invoke Type

Periodic: Every 24 hours

Supported resource type

ACS::ECI::ContainerGroup

Input parameter

type. Default value: cve.

necessity. Default value: asap.

## **Non-compliance remediation**

For more information, see [View and handle vulnerabilities](/help/en/security-center/user-guide/view-and-handle-vulnerabilities).
