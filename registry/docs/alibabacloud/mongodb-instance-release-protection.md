Checks whether the release protection feature is enabled for each ApsaraDB for MongoDB instance. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to enable the release protection feature for an ApsaraDB for MongoDB instance. This prevents your business from being interrupted when you accidentally release an ApsaraDB for MongoDB instance.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the release protection feature is enabled for each ApsaraDB for MongoDB instance, the evaluation result is Compliant.
-   If the release protection feature is disabled for an ApsaraDB for MongoDB instance, the evaluation result is Incompliant.

## Rule details

 

Item

Description

Rule name

mongodb-instance-release-protection

Rule identifier

mongodb-instance-release-protection

Tag

MongoDB

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB for MongoDB instance

Input parameter

None.
