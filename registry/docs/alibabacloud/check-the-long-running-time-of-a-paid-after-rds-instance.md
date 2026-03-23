Checks whether the running duration of each pay-as-you-go ApsaraDB RDS instance is less than or equal to the specified value. If so, the evaluation result is Compliant. This rule does not apply to subscription Apsara DB RDS instances.

## Scenarios

After a pay-as-you-go ApsaraDB RDS instance is created, you can change the billing method of the ApsaraDB RDS instance to subscription based on the running duration of the ApsaraDB RDS instance. This is more cost-effective and allows you to reserve resources for later use.

## **Risk level**

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   Checks whether the running duration of each pay-as-you-go ApsaraDB RDS instance is less than or equal to the specified value. If so, the evaluation result is Compliant.
    
-   This rule does not apply to subscription Apsara DB RDS instances.
    

## **Rule details**

**Parameter**

**Description**

Rule Template Name

rds-long-time-post-paid-check

Rule Template Identifier

[rds-long-time-post-paid-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=rds-long-time-post-paid-check)

Tag

ApsaraDB RDS

Automatic remediation

Not supported

Invoke Type

Configuration Change

Supported resource type

ApsaraDB RDS instance (ACS::RDS::DBInstance)

Input parameter

The parameter name is runTime. Default value: 30. Unit: days. The parameter specifies the running duration of an ApsaraDB RDS instance. Maximum value: 365.

## **Non-compliance remediation**

If the running duration of a pay-as-you-go ApsaraDB RDS instance is greater than 365 days, we recommend that you change the billing method of the instance to subscription. For more information, see [ModifyDBInstancePayType](/help/en/rds/developer-reference/api-rds-2014-08-15-modifydbinstancepaytype).
