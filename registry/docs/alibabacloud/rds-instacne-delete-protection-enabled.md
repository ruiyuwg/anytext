Checks whether the deletion protection feature is enabled for each ApsaraDB RDS instance. If so, the evaluation result is compliant.

## Scenarios

This rule applies when you need to enable the release protection feature for specific-purpose ApsaraDB RDS instances. This prevents your business from being interrupted if resources are accidentally deleted. This also helps improve business stability.

## Risk level

Default risk level: Medium.

Change the risk level as needed.

## Detection logic

-   If the deletion protection feature is enabled for each ApsaraDB RDS instance, the evaluation result is compliant.
    
-   If the deletion protection feature is disabled for each ApsaraDB RDS instance, the evaluation result is non-compliant.
    

## Rule details

**Item**

**Description**

Rule name

rds-instance-delete-protection-enabled

Rule identifier

[rds-instance-delete-protection-enabled](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instacne-delete-protection-enabled)

Tag

RDS and Instance

Automatic remediation

Supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instance

Input parameter

None
