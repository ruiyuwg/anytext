Checks whether the type of an image repository in Container Registry is set to private.

## Scenarios

We recommend that you set an image repository in Container Registry to private without affecting normal business operations. This reduces business security risks.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the type of the image repository in Container Registry is set to private, the evaluation result is compliant.
-   If the type of the image repository in Container Registry is set to public, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-upr-smb-gxr).

## Rule details

 

Item

Description

Rule name

cr-repository-type-private

Rule ID

cr-repository-type-private

Tag

CR,Repository

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

Image repository

Input parameter

None

## Non-compliance remediation

Set the type of the image repository in Container Registry to private. For more information, see [Create a repository and build images](/help/en/acr/user-guide/create-a-repository-and-build-images#section-rog-9pu-nlo).
