Checks whether the minor version of each PolarDB database is in the stable state. If so, the evaluation result is Compliant.

## Scenarios

This rule applies when you need to check whether the version of each PolarDB database is stable. This ensures business continuity.

## Risk level

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## Compliance evaluation logic

-   If the minor version of each PolarDB database is in the stable state, the evaluation result is Compliant.
-   If the minor version of each PolarDB database is not in the stable state, the evaluation result is Incompliant.

## Rule details

 

Item

Description

Rule name

polardb-dbversion-status-check

Rule identifier

polardb-dbversion-status-check

Tag

PolarDB

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

PolarDB cluster

Input parameter

None.
