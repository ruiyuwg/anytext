This rule checks whether HTTPS force redirect is enabled for all public independent domains attached to an API Gateway group. The group is considered compliant if HTTPS force redirect is enabled for all its public independent domains. If no independent domains are attached to the group, the rule is not applicable.

## **Scenarios**

Use this rule to check whether HTTPS force redirect is enabled for all public independent domains attached to an API Gateway group. This ensures secure communication for your external services.

## **Risk level**

Default risk level: High.

You can change the risk level as needed.

## **Detection logic**

-   Checks whether HTTPS force redirect is enabled for all public independent domains attached to an API Gateway group. The group is considered compliant if HTTPS force redirect is enabled for all its public independent domains. If no independent domains are attached to the group, the rule is not applicable.
    

## **Rule details**

**Parameter**

**Description**

Rule name

Enable HTTPS force redirect for independent domains in API groups

Rule identifier

[api-gateway-group-force-https](https://confignew.console.alibabacloud.com/rules/create?step=setBasicProperties&managedRuleIdentifier=api-gateway-group-force-https)

Tag

ApiGroup

Automatic remediation

Not supported

Rule trigger mechanism

Configuration changes

Supported resource types

ACS::ApiGateway::ApiGroup

Input parameters

None
