Checks whether a Tablestore instance can be accessed only from a virtual private cloud (VPC) or by using the Tablestore console.

## Scenarios

You can enable access control for a Tablestore instance without affecting normal business operations so that the instance can be accessed only from a VPC or by using the Tablestore console. This reduces business security risks.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the Tablestore instance can be accessed only from a VPC or by using the Tablestore console, the evaluation result is compliant.
-   If the Tablestore instance can be accessed by using other methods than a VPC or the Tablestore console, the evaluation result is non-compliant.

## Rule details

 

Item

Description

Rule name

ots-instance-network-not-normal

Rule ID

ots-instance-network-not-normal

Tag

OTS and Instance

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

Tablestore instance

Input parameter

None
