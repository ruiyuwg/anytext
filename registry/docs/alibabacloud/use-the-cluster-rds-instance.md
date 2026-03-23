Checks whether the edition of an ApsaraDB RDS instance matches a specified value. If so, the evaluation result is Compliant. The default value of the categories parameter indicates Cluster Edition or High-availability Edition.

## Scenarios

When you select a suitable instance type for ApsaraDB RDS instances, you must consider the requirements and features of your applications, such as data volume, concurrent requests, and computing and storage requirements. This rule can help you identify ApsaraDB RDS instances that do not meet your business requirements.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the edition of an ApsaraDB RDS instance matches a specified value, the evaluation result is Compliant.
    
-   If the edition of an ApsaraDB RDS instance does not match the specified values, the evaluation result is Non-compliant.
    

## **Rule details**

**Parameter**

**Description**

Rule name

rds-instance-category-check

Rule identifier

[rds-instance-category-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-instance-category-check)

Tag

RDS and Instance

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

ApsaraDB RDS instances

Input parameter

categories. Default value: HighAvailability,cluster,AlwaysOn,Finance.
