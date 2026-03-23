Modifies the description, input parameters, and risk level of a rule in a specified account group.

## Operation description

This topic provides an example of how to change the risk level of the rule `cr-4e3d626622af0080****` in the account group `ca-a4e5626622af0079****` to `3` (low risk).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/UpdateAggregateConfigRule)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/UpdateAggregateConfigRule)

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

config:UpdateAggregateConfigRule

update

\*AggregateConfigRule

`acs:config:*:{#accountId}:aggregateconfigrule/{#ConfigRuleId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ConfigRuleId

string

Yes

The rule ID.

For more information, see ListAggregateConfigRules.

cr-4e3d626622af0080\*\*\*\*

Description

string

No

The description of the rule.

最多可以定义6组标签。如果资源同时具有指定的所有标签，则视为“合规”。

InputParameters

object

No

The rule parameters.

{"tag1Key":"ECS","tag1Value":"test"}

MaximumExecutionFrequency

string

No

The frequency at which the rule runs. Valid values:

-   One\_Hour: 1 hour.
    
-   Three\_Hours: 3 hours.
    
-   Six\_Hours: 6 hours.
    
-   Twelve\_Hours: 12 hours.
    
-   TwentyFour\_Hours: 24 hours.
    

**Note**

This parameter is required if you set `ConfigRuleTriggerTypes` to `ScheduledNotification`.

One\_Hour

ResourceTypesScope

array

No

The resource types that the rule evaluates. Separate multiple resource types with a comma (,).

ACS::ECS::Instance

string

No

The type of the resource evaluated by the rule. Multiple resource types are separated with commas (,).

ACS::ECS::Instance

RiskLevel

integer

No

The risk level of the rule. Valid values:

-   1: high risk.
    
-   2: medium risk.
    
-   3: low risk.
    

3

ClientToken

string

No

A client token used to ensure the idempotence of the request. Make sure that the client token is unique for each request. The `ClientToken` can contain only ASCII characters and cannot exceed 64 characters in length.

1594295238-f9361358-5843-4294-8d30-b5183fac\*\*\*\*

RegionIdsScope

string

No

The rule applies only to resources in the specified region IDs. Separate multiple region IDs with a comma (,).

**Note**

This parameter applies only to rule templates.

cn-hangzhou

ExcludeRegionIdsScope

string

No

The regions to exclude. The rule does not apply to resources in these regions. Separate multiple region IDs with a comma (,).

cn-shanghai

ExcludeResourceIdsScope

string

No

The resources to exclude. The rule does not apply to these resources. Separate multiple resource IDs with a comma (,).

**Note**

This parameter applies only to rule templates.

lb-t4nbowvtbkss7t326\*\*\*\*

ResourceIdsScope

string

No

The rule applies only to the specified resource IDs. Separate multiple resource IDs with a comma (,).

lb-5cmbowstbkss9ta03\*\*\*\*

ConfigRuleTriggerTypes

string

No

The trigger mechanism of the rule. Valid values:

-   ConfigurationItemChangeNotification: Configuration changes.
    
-   ScheduledNotification: Scheduled execution.
    

**Note**

You can modify this parameter only for custom rules.

ConfigurationItemChangeNotification

AggregatorId

string

Yes

The account group ID.

For more information, see ListAggregators.

ca-a4e5626622af0079\*\*\*\*

ResourceGroupIdsScope

string

No

The rule applies only to resources in the specified resource group IDs. Separate multiple resource group IDs with a comma (,).

**Note**

This parameter applies only to rule templates.

rg-aekzc7r7rhx\*\*\*\*

ExcludeResourceGroupIdsScope

string

No

The resource groups to exclude. The rule does not apply to resources in these resource groups. Separate multiple resource group IDs with a comma (,).

rg-bnczc6r7rml\*\*\*\*

TagKeyScope `deprecated`

string

No

This parameter is deprecated. Use the `TagsScope` parameter instead.

The rule applies only to resources with the specified tag.

**Note**

This parameter applies only to rule templates. You must specify both `TagKeyScope` and `TagValueScope`.

ECS

TagValueScope `deprecated`

string

No

This parameter is deprecated. Use the `TagsScope` parameter instead.

The rule applies only to resources with the specified tag.

**Note**

This parameter applies only to rule templates. You must specify both `TagKeyScope` and `TagValueScope`.

test

TagsScope

array<object>

No

The tag scope.

object

No

TagKey

string

No

The tag key.

key-1

TagValue

string

No

The tag value.

value-1

ExcludeTagsScope

array<object>

No

The excluded tag scope.

object

No

TagKey

string

No

The tag key.

key-2

TagValue

string

No

The tag value.

value-2

ConfigRuleName

string

No

The rule name.

For more information, see ListAggregateConfigRules.

存在所有指定标签

TagKeyLogicScope

string

No

The logical relationship for multiple tags in the `TagsScope` parameter. For example, if you set the `TagsScope` parameter to `"TagsScope.1.TagKey":"a","TagsScope.1.TagValue":"a","TagsScope.2.TagKey":"b","TagsScope.2.TagValue":"b"` and set this parameter to `AND`, the rule applies only to resources that have both the `a:a` and `b:b` tags. If you do not set this parameter, the default value is `OR`.

This parameter also works with the deprecated `TagKeyScope` parameter (not recommended). For example, if you set the `TagKeyScope` parameter to `ECS,OSS` and set this parameter to `AND`, the rule applies only to resources that have both the `ECS` and `OSS` tags.

Valid values:

-   AND: Logical AND.
    
-   OR: Logical OR.
    

**Valid values:**

-   OR :
    
    OR
    
-   AND :
    
    AND
    

AND

FolderIdsScope

string

No

The rule applies only to resources of member accounts in the specified resource directory IDs.

**Note**

-   This parameter applies only to rules in a global account group.
    
-   This parameter applies only to rule templates.
    

fd-ZtHsRH\*\*\*\*

ExcludeFolderIdsScope

string

No

The folders to exclude. The rule does not apply to resources of member accounts in these folders. Separate multiple folder IDs with a comma (,).

**Note**

-   This parameter applies only to rules in a global account group.
    
-   This parameter applies only to rule templates.
    

fd-pWmkqZ\*\*\*\*

ExcludeAccountIdsScope

string

No

The member accounts to exclude. The rule does not apply to resources of these member accounts. Separate multiple member account IDs with a comma (,).

**Note**

This parameter applies only to rule templates.

120886317861\*\*\*\*

AccountIdsScope

string

No

The rule applies only to resources of the specified member accounts. Separate multiple member account IDs with a comma (,).

**Note**

This parameter applies only to rule templates.

115748125982\*\*\*\*

ResourceNameScope

string

No

The conditions for the custom rule, specified in JSON format.

i-xxx

Tag `deprecated`

array<object>

No

The rule applies only to resources with the specified resource name.

object

No

The tags of the resource. You can add up to 20 tags.

Key

string

No

The tag key of the resource. You can add up to 20 tag keys.

key-1

Value

string

No

The tag value of the resource. You can add up to 20 tag values.

value-1

For more information about common request parameters, see Common parameters.

## Response elements

**Element**

**Type**

**Description**

**Example**

object

None

ConfigRuleId

string

The rule ID.

cr-4e3d626622af0080\*\*\*\*

RequestId

string

The request ID.

6EC7AED1-172F-42AE-9C12-295BC2ADB751

## Examples

Success response

`JSON` format

```
{
  "ConfigRuleId": "cr-4e3d626622af0080****",
  "RequestId": "6EC7AED1-172F-42AE-9C12-295BC2ADB751"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ExceedMaxRuleCount

The maximum number of rules is exceeded.

400

ConfigRuleNotExists

The ConfigRule does not exist.

The rule does not exist.

400

ConfigRuleExists

The ConfigRule already exists.

400

Invalid.AggregatorId.Value

The specified AggregatorId is invalid.

The specified aggregator ID does not exist or you are not authorized to use the aggregator.

403

AggregatorMemberNoPermission

The aggregator member is not authorized to perform the operation.

The aggregator member is not authorized to perform the operation.

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/UpdateAggregateConfigRule#workbench-doc-change-demo) for a complete list.
