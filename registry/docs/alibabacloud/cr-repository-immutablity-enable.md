Checks whether each Container Registry repository is configured to be immutable. If so, the evaluation result is Compliant.

## Scenarios

After you configure a repository to be immutable, the existing and new images in the repository cannot be overwritten except for the images of the latest version. This prevents images of different versions from being overwritten due to manual operations and ensures that the images in the repository are consistent with the images that are deployed in containers.

## Risk level

Default risk level: high.

When you configure this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If each Container Registry repository is configured to be immutable, the evaluation result is Compliant.
-   If a Container Registry repository is not configured to be immutable, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-r67-i0v-74d).

## Rule details

Item

Description

Rule name

cr-repository-immutablity-enable

Rule identifier

cr-repository-immutablity-enable

Tag

CR and Repository

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

Container Registry repositories

Input parameter

None

## Incompliance remediation

Configure a Container Registry repository to be immutable. For more information, see [Configure a repository to be immutable](/help/en/acr/user-guide/turn-on-immutable-image-version#task-1961931).
