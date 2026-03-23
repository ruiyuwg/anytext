Checks whether the domain name bound to each API group in API Gateway is added to WAF or WAF 3.0. If so, the evaluation result is Compliant.

## Scenarios

You need to add the domain names bound to API groups to WAF. This helps you reduce malicious attacks and unauthorized access, monitor access requests and generate logs in real time, and ensure high availability and scalability of API operations.

## **Risk level**

Default risk level: medium.

When you apply this rule, you can change the risk level based on your business requirements.

## **Compliance evaluation logic**

-   If the domain name bound to each API group in API Gateway is added to WAF or WAF 3.0, the evaluation result is Compliant.
    
-   If the domain name bound to an API group in API Gateway is not added to WAF or WAF 3.0, the evaluation result is Non-compliant.
    

## **Rule details**

**Parameter**

**Description**

Rule name

api-gateway-group-domain-access-waf-or-waf3

Rule identifier

[api-gateway-group-domain-access-waf-or-waf3](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=api-gateway-group-domain-access-waf-or-waf3)

Tag

ApiGateway and ApiGroup

Automatic remediation

Not supported

Trigger type

Periodic execution

Evaluation frequency

Every 24 hours

Supported resource type

API groups

Input parameter

None

## **Non-compliance remediation**

Add the domain names bound to API groups in API Gateway to WAF or WAF 3.0. For more information, see [Configure WAF](/help/en/api-gateway/traditional-api-gateway/user-guide/configure-waf).
