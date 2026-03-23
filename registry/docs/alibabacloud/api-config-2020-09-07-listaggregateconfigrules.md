Queries the rules in a specified account group.

## Operation description

This topic provides an example of how to query the rules in the account group `ca-f632626622af0079****`. The response shows that the account group contains one rule. This rule evaluates two resources, and the compliance result is `COMPLIANT`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/ListAggregateConfigRules)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/ListAggregateConfigRules)

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

config:ListAggregateConfigRules

list

\*AggregateConfigRule

`acs:config:*:{#accountId}:aggregateconfigrule/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ConfigRuleState

string

No

The state of the rule. Valid values:

-   ACTIVE: The rule is enabled.
    
-   DELETING: The rule is being deleted.
    
-   EVALUATING: The rule is being evaluated.
    
-   INACTIVE: The rule is disabled.
    

ACTIVE

ComplianceType

string

No

The compliance evaluation result. Valid values:

-   COMPLIANT: The resource is compliant.
    
-   NON\_COMPLIANT: The resource is non-compliant.
    
-   NOT\_APPLICABLE: The rule does not apply to the resource.
    
-   INSUFFICIENT\_DATA: No data is available.
    

COMPLIANT

RiskLevel

integer

No

The risk level of the rule. Valid values:

-   1: high
    
-   2: medium
    
-   3: low
    

1

CompliancePackId

string

No

The ID of the compliance package.

cp-fe416457e0d90022\*\*\*\*

ConfigRuleName

string

No

The name of the rule.

The name of the rule.

AggregatorId

string

Yes

The ID of the account group.

For more information about how to obtain the ID of an account group, see [ListAggregators](/help/en/cloud-config/latest/listaggregators).

ca-f632626622af0079\*\*\*\*

PageSize

integer

No

The number of entries to return on each page.

Valid values: 1 to 100. Default value: 10.

10

PageNumber

integer

No

The page number.

Pages start from page 1. Default value: 1.

1

Tag

array<object>

No

The tags of the resource.

You can add a maximum of 20 tags.

object

No

The tags of the resource.

You can add a maximum of 20 tags.

Key

string

No

The key of a resource tag.

You can add a maximum of 20 tag keys.

key-1

Value

string

No

The value of a resource tag.

You can add a maximum of 20 tag values.

value-1

Keyword

string

No

The keyword for a fuzzy query.

The keyword can be a rule ID, rule name, rule description, or rule template identifier.

ecs

ResourceTypes

string

No

The resource type to be evaluated by the rule.

ACS::ECS::Instance

SortBy

string

No

The method that is used to sort the rules. By default, this parameter is not specified. Set the value to `CreateDate-Desc` to sort the rules in descending order of their creation time.

CreateDate-Desc

For more information about common request parameters, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

22EF8287-2C9A-4F1F-80A6-CEFA7612689D

ConfigRules

object

The rules.

ConfigRuleList

array<object>

The details of the rules.

array<object>

RiskLevel

integer

The risk level of the rule. Valid values:

-   1: high
    
-   2: medium
    
-   3: low
    

1

SourceOwner

string

The owner of the rule. Valid values:

-   CUSTOM\_FC: a custom rule.
    
-   ALIYUN: a managed rule.
    

ALIYUN

AccountId

integer

The ID of the management account to which the rule belongs.

100931896542\*\*\*\*

ConfigRuleState

string

The state of the rule. Valid values:

-   ACTIVE: The rule is enabled.
    
-   DELETING: The rule is being deleted.
    
-   EVALUATING: The rule is being evaluated.
    
-   INACTIVE: The rule is disabled.
    

ACTIVE

Compliance

object

The compliance evaluation result.

ComplianceType

string

The summary of the compliance evaluation result. Valid values:

-   COMPLIANT: The resource is compliant.
    
-   NON\_COMPLIANT: The resource is non-compliant.
    
-   NOT\_APPLICABLE: The rule does not apply to the resource.
    
-   INSUFFICIENT\_DATA: No data is available.
    

COMPLIANT

Count

integer

The number of resources that are evaluated based on the summary of the compliance evaluation.

2

SourceIdentifier

string

The identifier of the rule.

-   If the rule is a managed rule, the value of this parameter is the identifier of the rule template.
    
-   If the rule is a custom rule, the value of this parameter is the ARN of the function.
    

eip-bandwidth-limit

ConfigRuleArn

string

The ARN of the rule.

acs:config::100931896542\*\*\*\*:rule/cr-fdc8626622af00f9\*\*\*\*

Description

string

The description of the rule.

The description of the rule.

CreateBy

object

The information about the creator of the rule.

CompliancePackId

string

The ID of the compliance package.

cp-fdc8626622af00f9\*\*\*\*

AggregatorName

string

The name of the account group.

Test\_Group

CompliancePackName

string

The name of the compliance package.

The name of the compliance package.

CreatorName

string

The name of the management account that created the rule.

Alice

CreatorType

string

The type of the creator. The value is fixed to AGGREGATOR.

AGGREGATOR

CreatorId

string

The ID of the management account that created the rule.

100931896542\*\*\*\*

AggregatorId

string

The ID of the account group.

ca-f632626622af0079\*\*\*\*

AutomationType

string

The remediation type. The value is fixed to OOS, which indicates Operation Orchestration Service.

OOS

ConfigRuleName

string

The name of the rule.

The name of the rule.

ConfigRuleId

string

The ID of the rule.

cr-fdc8626622af00f9\*\*\*\*

Tags

array<object>

The tags of the rule.

object

The tags of the rule.

Key

string

The key of the tag.

env

Value

string

The value of the tag.

prod

CreateDate

string

The time when the rule was created. The time is displayed in UTC+8.

2025-09-19T15:51:00

ResourceTypesScope

string

The types of the resources that are evaluated by the rule. Multiple resource types are separated by commas (,).

ACS::EIP::EipAddress

PageSize

integer

The number of entries returned on each page.

10

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of rules.

1

## Examples

Success response

`JSON` format

```
{
  "RequestId": "22EF8287-2C9A-4F1F-80A6-CEFA7612689D",
  "ConfigRules": {
    "ConfigRuleList": [
      {
        "RiskLevel": 1,
        "SourceOwner": "ALIYUN",
        "AccountId": 0,
        "ConfigRuleState": "ACTIVE",
        "Compliance": {
          "ComplianceType": "COMPLIANT",
          "Count": 2
        },
        "SourceIdentifier": "eip-bandwidth-limit",
        "ConfigRuleArn": "acs:config::100931896542****:rule/cr-fdc8626622af00f9****",
        "Description": "The description of the rule.",
        "CreateBy": {
          "CompliancePackId": "cp-fdc8626622af00f9****",
          "AggregatorName": "Test_Group",
          "CompliancePackName": "The name of the compliance package.\n",
          "CreatorName": "Alice",
          "CreatorType": "AGGREGATOR",
          "CreatorId": "100931896542****",
          "AggregatorId": "ca-f632626622af0079****"
        },
        "AutomationType": "OOS",
        "ConfigRuleName": "The name of the rule.",
        "ConfigRuleId": "cr-fdc8626622af00f9****",
        "Tags": [
          {
            "Key": "env",
            "Value": "prod"
          }
        ],
        "CreateDate": "2025-09-19T15:51:00",
        "ResourceTypesScope": "ACS::EIP::EipAddress"
      }
    ],
    "PageSize": 10,
    "PageNumber": 1,
    "TotalCount": 1
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

400

Invalid.AggregatorId.Value

The specified AggregatorId is invalid.

The specified aggregator ID does not exist or you are not authorized to use the aggregator.

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/ListAggregateConfigRules#workbench-doc-change-demo) for a complete list.
