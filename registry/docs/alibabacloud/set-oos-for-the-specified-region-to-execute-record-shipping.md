Checks whether the execution record delivery is enabled for the specified region in the CloudOps Orchestration Service (OOS) console. If so, the evaluation result is Compliant.

## **Scenarios**

If the execution record delivery is enabled for the specified region, you can store and analyze operation logs in a centralized manner. This facilitates audit tracking and troubleshooting.

## **Risk level**

Default risk level: low.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If the execution record delivery is enabled for the specified region in the OOS console, the evaluation result is Compliant.

## **Rule details**

**Parameter**

**Description**

Rule template name

oos-delivery-enable-check

Rule template identifier

[oos-delivery-enable-check](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=oos-delivery-enable-check)

Automatic remediation

Not supported

Trigger type

Periodic: Every 24 hours

Supported resource type

ACS::::Account

Input parameter

regionId (Default value: cn-shanghai)

## **Non-compliance remediation**

For more information, see [Deliver execution records](/help/en/oos/getting-started/deliver-execution-records).
