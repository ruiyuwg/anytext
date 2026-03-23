Queries a list of rules.

## Operation description

This topic provides an example of how to query the list of rules for the current account. The sample response indicates that the rule list contains one rule, three resources are evaluated, and the compliance result is COMPLIANT.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/ListConfigRules)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/ListConfigRules)

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

config:ListConfigRules

list

\*Rule

`acs:config:*:{#accountId}:rule/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ResourceTypes

string

No

The type of resource evaluated by the rule.

ACS::ECS::Instance

PageSize

integer

No

The number of entries to return on each page.

Valid values: 1 to 100. Default value: 10.

10

CompliancePackId

string

No

The ID of the compliance package.

cp-fe416457e0d90022\*\*\*\*

ComplianceType

string

No

The compliance evaluation result of the rule. Valid values:

-   COMPLIANT: Compliant.
    
-   NON\_COMPLIANT: Non-compliant.
    
-   NOT\_APPLICABLE: Not applicable.
    
-   INSUFFICIENT\_DATA: Insufficient data.
    

COMPLIANT

PageNumber

integer

No

The page number.

The default value is 1.

1

Keyword

string

No

The keyword for the fuzzy query.

Supports fuzzy queries by rule ID, rule name, rule description, or rule template identifier.

ecs

ConfigRuleState

string

No

The state of the rule. Valid values:

-   ACTIVE: The rule is enabled.
    
-   DELETING: The rule is being deleted.
    
-   EVALUATING: The rule is being evaluated.
    
-   INACTIVE: The rule is disabled.
    

ACTIVE

ConfigRuleName

string

No

The name of the rule.

The name of the rule.

RiskLevel

integer

No

The risk level of the rule. Valid values:

-   1: High risk.
    
-   2: Medium risk.
    
-   3: Low risk.
    

1

SortBy

string

No

The sorting method. This parameter is not required. Set the value to `CreateDate-Desc` to sort the rules by creation time in descending order.

CreateDate-Desc

Tag

array<object>

No

The tags of the resource.

A maximum of 20 tags can be attached.

object

No

The tags of the resource.

A maximum of 20 tags can be attached.

Key

string

No

The tag key.

key-1

Value

string

No

The tag value.

value-1

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

AC3A7E12-72E6-5CC9-A5C1-D8D8919829A7

ConfigRules

object

The list of rules.

ConfigRuleList

array<object>

The details of the rules.

array<object>

The details of the rules.

RiskLevel

integer

The risk level of the rule. Valid values:

-   1: High risk.
    
-   2: Medium risk.
    
-   3: Low risk.
    

1

SourceOwner

string

The owner of the rule. Valid values:

-   CUSTOM\_FC: a custom rule created using a Function Compute (FC) function.
    
-   ALIYUN: a managed rule.
    

ALIYUN

AccountId

integer

The ID of the account to which the rule belongs.

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

The compliance aggregation results of the rule.

ComplianceType

string

The summary of the compliance evaluation result. Valid values:

-   COMPLIANT: Compliant.
    
-   NON\_COMPLIANT: Non-compliant.
    
-   NOT\_APPLICABLE: Not applicable.
    
-   INSUFFICIENT\_DATA: Insufficient data.
    

COMPLIANT

Count

integer

The number of evaluated resources that correspond to the compliance summary.

2

SourceIdentifier

string

The identifier of the rule.

-   If the rule is a managed rule, this parameter indicates the identifier of the managed rule.
    
-   If the rule is a custom rule, this parameter indicates the Alibaba Cloud Resource Name (ARN) of the function.
    

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

CompliancePackName

string

The name of the compliance package.

The name of the compliance package.

AutomationType

string

The remediation type. Only Operation Orchestration Service (OOS) is supported.

OOS

ConfigRuleName

string

The name of the rule.

The name of the rule.

ConfigRuleId

string

The rule ID.

cr-fdc8626622af00f9\*\*\*\*

Tags

array<object>

The tags of the rule.

object

The tags of the rule.

Key

string

The tag key of the rule.

env

Value

string

The tag value of the rule.

prod

ResourceTypesScope

string

The types of resources evaluated by the rule. Multiple resource types are separated by commas (,).

ACS::EIP::EipAddress

CreateDate

string

The time when the rule was created. The time is displayed in UTC+8.

2025-09-19T15:51:00

PageSize

integer

The number of entries returned per page.

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
  "RequestId": "AC3A7E12-72E6-5CC9-A5C1-D8D8919829A7",
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
          "CompliancePackName": "The name of the compliance package."
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
        "ResourceTypesScope": "ACS::EIP::EipAddress",
        "CreateDate": "2025-09-19T15:51:00"
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

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/ListConfigRules#workbench-doc-change-demo) for a complete list.
