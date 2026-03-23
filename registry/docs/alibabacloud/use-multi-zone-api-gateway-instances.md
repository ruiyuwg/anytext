Checks whether each API Gateway instance uses the multi-zone architecture. If so, the evaluation result is Compliant.

## **Scenarios**

If an API Gateway instance uses the multi-zone architecture, business traffic can seamlessly switch to other zones if one zone fails. This ensures high availability and continuity of transaction services.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

If each API Gateway instance uses the multi-zone architecture, the evaluation result is Compliant.

## **Rule details**

**Parameter**

**Description**

Rule template name

apigateway-instance-multi-zone

Rule template identifier

[apigateway-instance-multi-zone](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=apigateway-instance-multi-zone)

Automatic remediation

Not supported

Trigger type

Periodic: Every 24 hours

Supported resource type

ACS::ApiGateway::Instance

Input parameter

None

## **Non-compliance remediation**

For more information, see [Create gateway instances](/help/en/api-gateway/cloud-native-api-gateway/user-guide/create-gateway).
