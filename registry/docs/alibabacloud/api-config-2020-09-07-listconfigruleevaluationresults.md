Queries the compliance evaluation results of a rule.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/ListConfigRuleEvaluationResults)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/ListConfigRuleEvaluationResults)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

config:ListConfigRuleEvaluationResults

list

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ComplianceType

string

No

The compliance evaluation result. Valid values:

-   COMPLIANT: The resource is compliant.
    
-   NON\_COMPLIANT: The resource is non-compliant.
    
-   NOT\_APPLICABLE: The rule does not apply to the resource.
    
-   INSUFFICIENT\_DATA: No data is available.
    
-   IGNORED: The evaluation result is ignored.
    

NON\_COMPLIANT

NextToken

string

No

If the response is truncated, use the `NextToken` to retrieve the next page of results.

IWBjqMYSy0is7zSMGu16\*\*\*\*

MaxResults

integer

No

The maximum number of entries to return on each page. Valid values: 1 to 100.

10

ConfigRuleId

string

No

The rule ID.

For more information about how to obtain a rule ID, see [ListConfigRules](/help/en/cloud-config/latest/listconfigrules).

cr-cac56457e0d900d3\*\*\*\*

CompliancePackId

string

No

The compliance package ID.

For more information about how to obtain a compliance package ID, see [ListCompliancePacks](/help/en/cloud-config/latest/listcompliancepacks).

cp-f1e3326622af00cb\*\*\*\*

Regions

string

No

The region where the evaluated resource resides. Separate multiple regions with commas (,).

cn-shanghai

ResourceTypes

string

No

The type of the evaluated resource. Separate multiple resource types with commas (,).

ACS::ECS::Instance

ResourceGroupIds

string

No

The ID of the resource group to which the evaluated resource belongs. Separate multiple resource group IDs with commas (,).

rg-aek2indxn3g\*\*\*\*

For more information about common request parameters, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

2A4A33BD-8186-4D60-91B9-42174EED75B5

EvaluationResults

object

The rule evaluation results.

NextToken

string

The token used to retrieve the next page of results.

IWBjqMYSy0is7zSMGu16\*\*\*\*

MaxResults

integer

The maximum number of entries returned per page.

10

EvaluationResultList

array<object>

The list of rule evaluation results.

array<object>

RiskLevel

integer

The risk level of the rule. Valid values:

-   1: high
    
-   2: medium
    
-   3: low
    

1

ComplianceType

string

The compliance evaluation result. Valid values:

-   COMPLIANT: The resource is compliant.
    
-   NON\_COMPLIANT: The resource is non-compliant.
    
-   NOT\_APPLICABLE: The rule does not apply to the resource.
    
-   INSUFFICIENT\_DATA: No data is available.
    
-   IGNORED: The evaluation result is ignored.
    

NON\_COMPLIANT

ResultRecordedTimestamp

integer

The UNIX timestamp when the resource evaluation result was generated. Unit: milliseconds.

1622802307150

Annotation

string

The supplementary information about the non-compliant resource. This may include the following information:

-   `configuration`: The current configuration of the resource, which is the non-compliant configuration.
    
-   `desiredValue`: The expected configuration of the resource, which is the compliant configuration.
    
-   `operator`: The comparison operator used to compare the current configuration with the expected configuration.
    
-   `property`: The JSON path of the current configuration in the resource property struct.
    
-   `reason`: The reason why the resource is non-compliant.
    

{\\"configuration\\":\\"\\",\\"desiredValue\\":\\"\\",\\"operator\\":\\"IsNotStringEmpty\\",\\"property\\":\\"$.KeyPairName\\",\\"reason\\":\\"No property contains.\\"}

ConfigRuleInvokedTimestamp

integer

The UNIX timestamp when the rule was triggered for evaluation. Unit: milliseconds.

1622802307081

InvokingEventMessageType

string

The trigger type of the rule. Valid values:

-   ConfigurationItemChangeNotification: The rule is triggered by a configuration change.
    
-   ScheduledNotification: The rule is triggered periodically.
    
-   Manual: The rule is triggered manually.
    

ConfigurationItemChangeNotification

EvaluationResultIdentifier

object

The identifier of the rule evaluation result.

OrderingTimestamp

integer

The UNIX timestamp displayed on the timeline. Unit: milliseconds.

1622802307081

EvaluationResultQualifier

object

The resource information in the rule evaluation result.

ResourceOwnerId

integer

The ID of the Alibaba Cloud account to which the resource belongs.

120886317861\*\*\*\*

ConfigRuleArn

string

The Alibaba Cloud Resource Name (ARN) of the rule.

acs:config::120886317861\*\*\*\*:rule/cr-cac56457e0d900d3\*\*\*\*

ResourceType

string

The resource type.

ACS::ECS::Instance

ConfigRuleName

string

The rule name.

ECS实例CPU核数满足最低要求

ResourceGroupId

string

The ID of the resource group to which the resource belongs.

rg-aek3tprgnnc\*\*\*\*

ConfigRuleId

string

The rule ID.

cr-cac56457e0d900d3\*\*\*\*

ResourceName

string

The resource name.

iZuf6j91r34rnwawoox\*\*\*\*

RegionId

string

The ID of the region to which the resource belongs.

cn-hangzhou

CompliancePackId

string

The ID of the compliance package to which the rule belongs.

cp-bcc33457e0d900d5\*\*\*\*

IgnoreDate

string

The date when the ignored evaluation result is automatically resumed.

**Note**

If this parameter is empty, the result is not automatically resumed. You must manually resume it.

2022-06-01

ResourceId

string

The resource ID.

i-hp3e4kvhzqn2s11t\*\*\*\*

RemediationEnabled

boolean

Indicates whether the remediation setting is enabled. Valid values:

-   true: The remediation setting is enabled.
    
-   false: The remediation setting is disabled.
    

false

EvaluationId

string

The unique ID of the evaluation result.

00000089-4e0d-58b5-a96a-8e54112110f3

LastNonCompliantRecordTimestamp

integer

The start time of the last non-compliance.

1744696665000

LastCompliantFixedTimestamp

integer

The time when the resource was last remediated to a compliant state. This value is not recorded when a new resource or rule is evaluated as compliant for the first time.

1768788515725

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2A4A33BD-8186-4D60-91B9-42174EED75B5",
  "EvaluationResults": {
    "NextToken": "IWBjqMYSy0is7zSMGu16****",
    "MaxResults": 10,
    "EvaluationResultList": [
      {
        "RiskLevel": 1,
        "ComplianceType": "NON_COMPLIANT",
        "ResultRecordedTimestamp": 1622802307150,
        "Annotation": "{\\\"configuration\\\":\\\"\\\",\\\"desiredValue\\\":\\\"\\\",\\\"operator\\\":\\\"IsNotStringEmpty\\\",\\\"property\\\":\\\"$.KeyPairName\\\",\\\"reason\\\":\\\"No property contains.\\\"}",
        "ConfigRuleInvokedTimestamp": 1622802307081,
        "InvokingEventMessageType": "ConfigurationItemChangeNotification",
        "EvaluationResultIdentifier": {
          "OrderingTimestamp": 1622802307081,
          "EvaluationResultQualifier": {
            "ResourceOwnerId": 0,
            "ConfigRuleArn": "acs:config::120886317861****:rule/cr-cac56457e0d900d3****",
            "ResourceType": "ACS::ECS::Instance",
            "ConfigRuleName": "ECS实例CPU核数满足最低要求",
            "ResourceGroupId": "rg-aek3tprgnnc****",
            "ConfigRuleId": "cr-cac56457e0d900d3****",
            "ResourceName": "iZuf6j91r34rnwawoox****",
            "RegionId": "cn-hangzhou",
            "CompliancePackId": "cp-bcc33457e0d900d5****",
            "IgnoreDate": "2022-06-01",
            "ResourceId": "i-hp3e4kvhzqn2s11t****"
          }
        },
        "RemediationEnabled": false,
        "EvaluationId": "00000089-4e0d-58b5-a96a-8e54112110f3",
        "LastNonCompliantRecordTimestamp": 1744696665000,
        "LastCompliantFixedTimestamp": 1768788515725
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NoPermission

You are not authorized to perform this operation.

You are not authorized to perform this operation.

404

CloudConfigServiceRoleNotExisted

The CloudConfigServiceRole does not exist.

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/ListConfigRuleEvaluationResults#workbench-doc-change-demo) for a complete list.
