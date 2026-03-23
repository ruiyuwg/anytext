Creates a rule for a specified account group. You can create a rule from a template or create a custom rule using Function Compute. The rule checks your resources for compliance. After a rule is created, it automatically runs once. Cloud Config then runs evaluations based on the rule's trigger. You can also run evaluations manually.

## Operation description

### Limits

Each management account and delegated administrator account can have up to 200 rules.

### Background information

Cloud Config supports the following methods for creating rules:

-   Create rules from templates
    
    Rule templates are predefined rule functions that Cloud Config provides in Function Compute (FC). Use rule templates to create rules quickly. For more information about rules, see [the referenced document](/help/en/cloud-config/latest/rule-definition-and-implementation).
    
-   Create rules based on functions in Function Compute
    
    Custom function rules are rules whose code is hosted in FC functions. If the predefined rule templates in Cloud Config do not meet your compliance requirements, write function code to check compliance in complex scenarios. For more information about custom function rules, see [the referenced document](/help/en/cloud-config/latest/custom-rule-functions).
    

### Usage notes

This example shows how to create a rule for the account group `ca-a4e5626622af0079****` using the \`required-tags\` template. The response shows that the rule is created with the ID `cr-4e3d626622af0080****`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/CreateAggregateConfigRule)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/CreateAggregateConfigRule)

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

config:CreateAggregateConfigRule

create

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

ConfigRuleName

string

Yes

The name of the rule.

存在所有指定标签

Description

string

No

A description of the rule.

最多可以定义6组标签。如果资源同时具有指定的所有标签，则视为“合规”。

InputParameters

object

No

The input parameters for the rule.

{"tag1Key":"ECS","tag1Value":"test"}

ConfigRuleTriggerTypes

string

Yes

The trigger type for the rule. Valid values:

-   ConfigurationItemChangeNotification: The rule triggers when a resource configuration changes.
    
-   ScheduledNotification: The rule triggers on a schedule.
    

ConfigurationItemChangeNotification

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

Set this parameter if you set `ConfigRuleTriggerTypes` to `ScheduledNotification`.

One\_Hour

ResourceTypesScope

array

Yes

The resource types to evaluate. Separate multiple types with commas (,).

ACS::ECS::Instance

string

No

The resource types to evaluate. Separate multiple types with commas (,).

ACS::ECS::Instance

RiskLevel

integer

Yes

The risk level of the rule. Valid values:

-   1: high
    
-   2: medium
    
-   3: low
    

1

ClientToken

string

No

A client token that ensures the request is idempotent. Generate a unique value from your client for each request. The `ClientToken` parameter must contain only ASCII characters and be no more than 64 characters long.

1594295238-f9361358-5843-4294-8d30-b5183fac\*\*\*\*

AggregatorId

string

Yes

The ID of the account group.

For more information about how to obtain the ID of an account group, see [the referenced document](/help/en/cloud-config/latest/listaggregators).

ca-a4e5626622af0079\*\*\*\*

RegionIdsScope

string

No

The rule applies only to resources in the specified regions. Separate multiple region IDs with commas (,).

cn-hangzhou

ExcludeRegionIdsScope

string

No

The rule does not apply to resources in the specified regions. Resources in these regions are not evaluated. Separate multiple region IDs with commas (,).

cn-shanghai

ResourceIdsScope

string

No

The rule applies only to the specified resources. Separate multiple resource IDs with commas (,).

lb-5cmbowstbkss9ta03\*\*\*\*

ExcludeResourceIdsScope

string

No

The rule does not apply to the specified resources. These resources are not evaluated. Separate multiple resource IDs with commas (,).

lb-t4nbowvtbkss7t326\*\*\*\*

ResourceGroupIdsScope

string

No

The rule applies only to resources in the specified resource groups. Separate multiple resource group IDs with commas (,).

rg-aekzc7r7rhx\*\*\*\*

ExcludeResourceGroupIdsScope

string

No

The rule does not apply to resources in the specified resource groups. Resources in these groups are not evaluated. Separate multiple resource group IDs with commas (,).

rg-bnczc6r7rml\*\*\*\*

TagKeyScope `deprecated`

string

No

This parameter is deprecated. Use the `TagsScope` parameter instead.

The rule applies only to resources that have the specified tag keys. Separate multiple tag keys with commas (,).

**Note**

This parameter applies only to rule templates. Set both `TagKeyScope` and `TagValueScope` together.

ECS

TagValueScope `deprecated`

string

No

This parameter is deprecated. Use the `TagsScope` parameter instead.

The rule applies only to resources that have the specified tag values.

**Note**

This parameter applies only to rule templates. Set both `TagKeyScope` and `TagValueScope` together.

test

TagKeyLogicScope

string

No

The logical relationship between multiple tags in the `TagsScope` parameter. For example, if you set `TagsScope` to `"TagsScope.1.TagKey":"a","TagsScope.1.TagValue":"a","TagsScope.2.TagKey":"b","TagsScope.2.TagValue":"b"` and set this parameter to `AND`, the rule applies only to resources that have both the `a:a` and `b:b` tags. The default value is `OR`.

You can also use this parameter with the deprecated `TagKeyScope` parameter, but this is not recommended. For example, if you set `TagKeyScope` to `ECS,OSS` and set this parameter to `AND`, the rule applies only to resources that have both the `ECS` and `OSS` tags.

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

The scope of tags to include.

object

No

TagKey

string

No

The tag key of the resource.

key-1

TagValue

string

No

The tag value of the resource.

value-1

ExcludeTagsScope

array<object>

No

The scope of tags to exclude.

object

No

TagKey

string

No

The tag key of the resource to exclude.

key-2

TagValue

string

No

The tag value of the resource to exclude.

value-2

SourceOwner

string

Yes

The type of rule. Valid values:

-   ALIYUN: rule template
    
-   CUSTOM\_FC: custom Function Compute rule
    
-   CUSTOM\_CONFIGURATION: custom condition rule
    

ALIYUN

SourceIdentifier

string

Yes

The identifier of the rule.

-   If `SourceOwner` is `ALIYUN`, enter the identifier of the rule template, such as `required-tags`.
    
    **Note**
    
    For more information about how to query rule template identifiers, see [the referenced document](/help/en/cloud-config/latest/managed-rules).
    
-   If `SourceOwner` is `CUSTOM_CONFIGURATION`, enter `acs-config-configuration`.
    
-   If `SourceOwner` is `CUSTOM_FC`, enter the Alibaba Cloud Resource Name (ARN) of the Function Compute function.
    
    The ARN format is `acs:fc:{region}:{accountId}:services/{serviceName}.LATEST/functions/{functionName}`. For example, `acs:fc:cn-hangzhou:120886317861****:services/service-test.LATEST/functions/config-test`.
    
    **Note**
    
    For more information about how to obtain a function ARN, see [the referenced document](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-listfunctions).
    

required-tags

FolderIdsScope

string

No

The rule applies only to resources of member accounts in the specified folders. Separate multiple folder IDs with commas (,).

**Note**

-   This parameter applies only to global account group rules.
    
-   This parameter applies only to rule templates.
    

fd-ZtHsRH\*\*\*\*

ExcludeFolderIdsScope

string

No

The rule does not apply to resources of member accounts in the specified folders. Resources in these folders are not evaluated. Separate multiple folder IDs with commas (,).

**Note**

-   This parameter applies only to global account group rules.
    
-   This parameter applies only to rule templates.
    

fd-pWmkqZ\*\*\*\*

ExcludeAccountIdsScope

string

No

The rule does not apply to resources of the specified member accounts. Resources in these accounts are not evaluated. Separate multiple member account IDs with commas (,).

**Note**

This parameter applies only to rule templates.

120886317861\*\*\*\*

AccountIdsScope

string

No

The rule applies only to resources of the specified member accounts. Separate multiple member account IDs with commas (,).

**Note**

This parameter applies only to rule templates.

115748125982\*\*\*\*

Conditions

string

No

The conditions for a custom condition rule, in JSON format.

{"ComplianceConditions":"{\\"operator\\":\\"and\\",\\"children\\":\[{\\"operator\\":\\"StringEquals\\",\\"featurePath\\":\\"$.Status\\",\\"desired\\":\\"1\\",\\"featureSource\\":\\"CONFIGURATION\\"}\]}"}

ExtendContent

string

No

Extended content. This parameter currently supports only setting the trigger time for rules that run on a 24-hour cycle.

{"fixedHour":"12"}

Tag

array<object>

No

The tag of the rule.

object

No

The tag.

Key

string

No

The key of the tag.

You can add up to 20 tag keys.

key-1

Value

string

No

The value of the tag.

You can add up to 20 tag values.

value-1

ResourceNameScope

string

No

The rule applies only to resources with the specified names.

i-xxx

## Response elements

**Element**

**Type**

**Description**

**Example**

object

None

ConfigRuleId

string

The ID of the rule.

cr-4e3d626622af0080\*\*\*\*

RequestId

string

The ID of the request.

5895065A-196C-4254-8AD8-14EFC31EEF50

## Examples

Success response

`JSON` format

```
{
  "ConfigRuleId": "cr-4e3d626622af0080****",
  "RequestId": "5895065A-196C-4254-8AD8-14EFC31EEF50"
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

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/CreateAggregateConfigRule#workbench-doc-change-demo) for a complete list.
