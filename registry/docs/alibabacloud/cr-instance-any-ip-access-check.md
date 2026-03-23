Checks whether 0.0.0.0/0 is added to the IP whitelist of each Container Registry instance. If not, the evaluation result is Compliant.

## Scenarios

If 0.0.0.0/0 is added to the IP whitelist of a Container Registry instance, the instance allows access from all CIDR blocks. This may expose the instance to high security risks. Proceed with caution.

## Risk level

Default risk level: high.

When you configure this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If 0.0.0.0/0 is not added to the IP whitelist of each Container Registry instance, the evaluation result is Compliant.
-   If 0.0.0.0/0 is added to the IP whitelist of a Container Registry instance, the evaluation result is Incompliant. For more information about how to remediate an incompliant configuration, see [Incompliance remediation](#section-znd-odc-nl6).

## Rule details

Item

Description

Rule name

cr-instance-any-ip-access-check

Rule identifier

cr-instance-any-ip-access-check

Tag

CR and Repository

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Interval of 24 hours

Supported resource type

Container Registry instances

Input parameter

None

## Incompliance remediation

Remove 0.0.0.0/0 from the IP whitelist of a Container Registry instance. For more information, see [Configure a repository to be immutable](/help/en/acr/user-guide/turn-on-immutable-image-version#task-1961931).
