Checks whether the request method of an API that allows Internet access in API Gateway is set to HTTPS.

## Scenarios

You can set the request method of an API to HTTPS to encrypt information and data. This secures data transmission.

## Risk level

Default risk level: high.

You can change the risk level as required when you apply this rule.

## Compliance evaluation logic

-   If the request method of the API that allows Internet access in API Gateway is set to HTTPS, the evaluation result is compliant.
-   This rule does not apply to APIs that allows only internal access.
-   If the request method of the API that allows Internet access in API Gateway is not set to HTTPS, the evaluation result is non-compliant. For more information about how to correct the non-compliant configuration, see [Non-compliance remediation](#section-bpj-775-c7x).

## Rule details

 

Item

Description

Rule name

api-gateway-api-internet-request-https

Rule ID

api-gateway-api-internet-request-https

Tag

ApiGateway and API

Automatic remediation

Not supported

Trigger type

Configuration change

Supported resource type

API resource

Input parameter

None

## Non-compliance remediation

Encrypt API requests by using the HTTPS protocol. For more information, see [Enable HTTPS for an API operation](/help/en/api-gateway/traditional-api-gateway/user-guide/enable-https-for-an-api-operation/#topic1144).
