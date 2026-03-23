Modifies the description, input parameters, and risk level of a rule.

## Operation description

This topic shows how to change the risk level of rule `cr-a260626622af0005****` to `3`, which indicates low risk.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/UpdateConfigRule)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/UpdateConfigRule)

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

config:UpdateConfigRule

update

\*Rule

`acs:config:*:{#accountId}:rule/{#ConfigRuleId}`

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

For more information, see [ListConfigRules](/help/en/cloud-config/latest/listconfigrules).

cr-a260626622af0005\*\*\*\*

Description

string

No

The rule description. The description can be up to 500 characters long.

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
    
-   TwentyFour\_Hours (default): 24 hours.
    

**Note**

Set this parameter when `ConfigRuleTriggerTypes` is set to `ScheduledNotification`.

One\_Hour

ResourceTypesScope

array

No

The resource types that the rule evaluates. To specify multiple resource types, separate them with a comma (,).

ACS::ECS::Instance

string

No

The resource types that the rule evaluates. To specify multiple resource types, separate them with a comma (,).

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

A client token used to ensure the idempotence of the request. Generate a unique token on your client for each request. The `ClientToken` parameter supports only ASCII characters and must not exceed 64 characters in length.

1594295238-f9361358-5843-4294-8d30-b5183fac\*\*\*\*

RegionIdsScope

string

No

The regions where the rule applies. To specify multiple region IDs, separate them with a comma (,).

**Note**

This parameter applies only to managed rules.

cn-hangzhou

ExcludeRegionIdsScope

string

No

The regions where the rule does not apply. To specify multiple region IDs, separate them with a comma (,).

cn-shanghai

ExcludeResourceIdsScope

string

No

The resources that the rule does not evaluate. To specify multiple resource IDs, separate them with a comma (,).

**Note**

This parameter applies only to managed rules.

lb-t4nbowvtbkss7t326\*\*\*\*

ResourceIdsScope

string

No

The resources that the rule evaluates. To specify multiple resource IDs, separate them with a comma (,).

lb-5cmbowstbkss9ta03\*\*\*\*

ConfigRuleTriggerTypes

string

No

The trigger type of the rule. Valid values:

-   ConfigurationItemChangeNotification: The rule triggers on configuration changes.
    
-   ScheduledNotification: The rule triggers on a schedule.
    

**Note**

You can modify this parameter only for custom rules.

ConfigurationItemChangeNotification

ResourceGroupIdsScope

string

No

The resource groups where the rule applies. To specify multiple resource group IDs, separate them with a comma (,).

**Note**

This parameter applies only to managed rules.

rg-aekzc7r7rhx\*\*\*\*

ExcludeResourceGroupIdsScope

string

No

The resource groups where the rule does not apply. To specify multiple resource group IDs, separate them with a comma (,).

rg-bnczc6r7rml\*\*\*\*

TagKeyScope `deprecated`

string

No

This parameter is deprecated. Use the `TagsScope` parameter instead.

The rule applies only to resources that have the specified tag.

**Note**

This parameter applies only to managed rules. You must specify both `TagKeyScope` and `TagValueScope`.

ECS

TagValueScope `deprecated`

string

No

This parameter is deprecated. Use the `TagsScope` parameter instead.

The rule applies only to resources that have the specified tag.

**Note**

This parameter applies only to managed rules. You must specify both `TagKeyScope` and `TagValueScope`.

test

TagKeyLogicScope

string

No

The logical relationship between tags in the `TagsScope` parameter. For example, if you set `TagsScope` to `"TagsScope.1.TagKey":"a","TagsScope.1.TagValue":"a","TagsScope.2.TagKey":"b","TagsScope.2.TagValue":"b"` and set this parameter to `AND`, the rule applies only to resources that have both the `a:a` and `b:b` tags. If you omit this parameter, the default logic is `OR`.

This parameter also works with the deprecated `TagKeyScope` parameter, but this is not recommended. For example, if you set `TagKeyScope` to `ECS,OSS` and set this parameter to `AND`, the rule applies only to resources that have both the `ECS` and `OSS` tags.

Valid values:

-   AND
    
-   OR
    

**Valid values:**

-   OR :
    
    OR
    
-   AND :
    
    AND
    

AND

TagsScope

array<object>

No

Scope of the tag

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

The tags used to exclude resources.

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

The name of the rule.

For more information, see [ListAggregateConfigRules](/help/en/cloud-config/latest/listaggregateconfigrules).

存在所有指定标签

ExtendContent

string

No

The condition for a custom conditional rule, in JSON format.

{"fixedHour":"12"}

Tag `deprecated`

array<object>

No

Optional. Extended content used with a 24-hour trigger period to set the trigger time.

object

No

The tags of the resource. You can add up to 20 tags.

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

ResourceNameScope

string

No

The tags of the resource. This parameter is deprecated. Ignore it. Values passed for this parameter have no effect.

You can add up to 20 tags.

i-xxx

For more information about common request parameters, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

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

cr-a260626622af0005\*\*\*\*

RequestId

string

The request ID.

6EC7AED1-172F-42AE-9C12-295BC2ADB751

## Examples

Success response

`JSON` format

```
{
  "ConfigRuleId": "cr-a260626622af0005****",
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

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/UpdateConfigRule#workbench-doc-change-demo) for a complete list.
