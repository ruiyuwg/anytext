Checks whether the image scanning feature is enabled for a Container Registry instance. If so, the evaluation result is Compliant.

## Scenarios

You can scan container images to identify and fix vulnerabilities and improve system security.

## **Risk level**

Default risk level: high.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

Checks whether the image scanning feature is enabled for a Container Registry instance. If so, the evaluation result is Compliant.

## **Rule details**

**Parameter**

**Description**

Rule Template Name

cr-repository-image-scanning-enabled

Rule Template Identifier

[cr-repository-image-scanning-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=cr-repository-image-scanning-enabled)

Tag

Image

Automatic remediation

Not supported

Invoke Type

Periodic: Every 24 hours

Supported resource type

Container Registry instance (ACS::CR::Instance)

Input parameter

N/A

## **Non-compliance remediation**

Enable the image scanning feature for a Container Registry instance. For more information, see [Scan container images](/help/en/acr/user-guide/scan-container-images).
