Creates a rule from a template or a custom rule using Function Compute to check resource compliance. After you create a rule, Cloud Config runs an initial evaluation and then automatically triggers subsequent evaluations based on the rule's trigger. You can also run evaluations manually.

## Operation description

### Limits

You can create up to 200 rules per account.

### Background information

You can create rules in Cloud Config in two ways:

-   Create rules from templates
    
    Rule templates are predefined rule functions provided by Cloud Config in Function Compute. You can use rule templates to quickly create rules. For more information, see [Definition and working principles of rules](/help/en/cloud-config/latest/rule-definition-and-implementation).
    
-   Create custom rules using Function Compute
    
    Custom rules use Function Compute functions to host your rule code. If Cloud Config's predefined rule templates do not meet your compliance requirements, you can write your own function code to check compliance in complex scenarios. For more information, see [Definition and working principles of custom rules](/help/en/cloud-config/latest/custom-rule-functions).
    

### Usage notes

This topic demonstrates how to create a rule from the \`required-tags\` template. The response confirms that the rule was created successfully. Its ID is `cr-5772ba41209e007b****`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/CreateConfigRule)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/CreateConfigRule)

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

config:CreateConfigRule

create

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

TagKeyScope `deprecated`

string

No

This parameter is deprecated. Use the `TagsScope` parameter instead.

The rule applies only to resources that have the specified tag key.

**Note**

This parameter applies only to managed rules. You must set both `TagKeyScope` and `TagValueScope`.

ECS

TagValueScope `deprecated`

string

No

This parameter is deprecated. Use the `TagsScope` parameter instead.

The rule applies only to resources that have the specified tag value.

**Note**

This parameter applies only to rule templates. You must set both `TagKeyScope` and `TagValueScope`.

test

TagKeyLogicScope

string

No

The logical operator used when you specify multiple tags for the `TagsScope` parameter. For example, if you set `TagsScope` to `"TagsScope.1.TagKey":"a","TagsScope.1.TagValue":"a","TagsScope.2.TagKey":"b","TagsScope.2.TagValue":"b"` and set this parameter to `AND`, the rule applies only to resources that have both the `a:a` and `b:b` tags. If you do not specify this parameter, the default value `OR` is used.

This parameter also works with the deprecated `TagKeyScope` parameter. For example, if you set `TagKeyScope` to `ECS,OSS` and set this parameter to `AND`, the rule applies only to resources that have both the `ECS` and `OSS` tags.

Valid values:

-   AND: Use AND logic.
    
-   OR: Use OR logic.
    

AND

TagsScope

array<object>

No

The scope of the tags.

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

The scope of the tags to exclude.

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

Description

string

No

The description of the rule.

最多可以定义6组标签。如果资源同时具有指定的所有标签，则视为“合规”。

SourceOwner

string

Yes

The type of rule to create. Valid values:

-   ALIYUN: rule template.
    
-   CUSTOM\_FC: custom Function Compute rule.
    
-   CUSTOM\_CONFIGURATION: custom condition rule.
    

ALIYUN

MaximumExecutionFrequency

string

No

The frequency at which the rule runs. Valid values:

-   One\_Hour: every hour.
    
-   Three\_Hours: every three hours.
    
-   Six\_Hours: every six hours.
    
-   Twelve\_Hours: every twelve hours.
    
-   TwentyFour\_Hours (default): every twenty-four hours.
    

**Note**

This parameter is required if you set ConfigRuleTriggerTypes to ScheduledNotification.

One\_Hour

Conditions

string

No

The conditions for a custom condition rule, in JSON format.

{"ComplianceConditions":"{\\"operator\\":\\"and\\",\\"children\\":\[{\\"operator\\":\\"StringEquals\\",\\"featurePath\\":\\"$.Status\\",\\"desired\\":\\"1\\",\\"featureSource\\":\\"CONFIGURATION\\"}\]}"}

RegionIdsScope

string

No

The rule applies only to resources in the specified regions. Separate multiple region IDs with commas (,).

**Note**

This parameter applies only to rule templates.

cn-hangzhou

ExcludeRegionIdsScope

string

No

The rule does not apply to resources in the specified regions. The compliance of resources in these regions is not evaluated. Separate multiple region IDs with commas (,).

cn-shanghai

ResourceGroupIdsScope

string

No

The rule applies only to resources in the specified resource groups. Separate multiple resource group IDs with commas (,).

**Note**

This parameter applies only to rule templates.

rg-aekzc7r7rhx\*\*\*\*

ExcludeResourceGroupIdsScope

string

No

The rule does not apply to resources in the specified resource groups. The compliance of resources in these resource groups is not evaluated. Separate multiple resource group IDs with commas (,).

rg-bnczc6r7rml\*\*\*\*

InputParameters

object

No

The input parameters for the rule.

You can get the input parameters of a rule by calling the [GetManagedRule](/help/en/cloud-config/latest/api-config-2020-09-07-getmanagedrule) operation. View the `CompulsoryInputParameterDetails` and `OptionalInputParameterDetails` parameters to learn about the required and optional parameters.

The format of the input parameters is `{"Parameter 1 Name":"Parameter 1 Value","Parameter 2 Name":"Parameter 2 Value"}`.

{"key1":"value1","key2":"value2"}

ResourceIdsScope

string

No

The rule applies to the specified resources. Separate multiple resource IDs with commas (,).

lb-5cmbowstbkss9ta03\*\*\*\*

ExcludeResourceIdsScope

string

No

The rule does not apply to the specified resources. The compliance of these resources is not evaluated. Separate multiple resource IDs with commas (,).

**Note**

This parameter applies only to rule templates.

lb-t4nbowvtbkss7t326\*\*\*\*

SourceIdentifier

string

Yes

The identifier of the rule.

-   If you set `SourceOwner` to `ALIYUN`, specify the identifier of the rule template. Example: `required-tags`.
    
    **Note**
    
    To query the identifier of a rule template, see [List of rule templates](/help/en/cloud-config/latest/managed-rules).
    
-   If you set `SourceOwner` to `CUSTOM_CONFIGURATION`, set this parameter to `acs-config-configuration`.
    
-   If you set `SourceOwner` to `CUSTOM_FC`, specify the Alibaba Cloud Resource Name (ARN) of the function.
    
    The ARN must be in the format `acs:fc:{Region}:{AccountID}:services/{ServiceName}.LATEST/functions/{FunctionName}`. Example: `acs:fc:cn-hangzhou:120886317861****:services/service-test.LATEST/functions/config-test`.
    
    **Note**
    
    To obtain the ARN of a function, see [ListFunctions](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-listfunctions).
    

required-tags

ConfigRuleTriggerTypes

string

Yes

The trigger that invokes the rule. Valid values:

-   ConfigurationItemChangeNotification: The rule runs when a resource configuration changes.
    
-   ScheduledNotification: The rule runs on a regular schedule.
    

**Note**

If a rule has multiple triggers, separate them with commas (,).

ConfigurationItemChangeNotification

ConfigRuleName

string

Yes

The name of the rule.

存在所有指定标签

ClientToken

string

No

A client token used to ensure request idempotence. Generate a unique token on your client. The `ClientToken` parameter can contain only ASCII characters and cannot exceed 64 characters.

1594295238-f9361358-5843-4294-8d30-b5183fac\*\*\*\*

ResourceTypesScope

array

Yes

The resource types to evaluate. Separate multiple resource types with commas (,).

ACS::ECS::Instance

string

No

The resource types to evaluate. Separate multiple resource types with commas (,).

ACS::ECS::Instance

RiskLevel

integer

Yes

The risk level of the rule. Valid values:

-   1: high.
    
-   2: medium.
    
-   3: low.
    

1

ExtendContent

string

No

Extended content. This parameter specifies the trigger time for a 24-hour evaluation cycle.

{"fixedHour":"13"}

Tag

array<object>

No

The tags of the rule to create.

object

No

The tags of the resource.

You can attach up to 20 tags.

Key

string

No

The tag key of the resource.

You can attach up to 20 tag keys.

key-1

Value

string

No

The tag value of the resource.

You can attach up to 20 tag values.

value-1

ResourceNameScope

string

No

The rule applies only to resources that have the specified names.

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

cr-5772ba41209e007b\*\*\*\*

RequestId

string

The request ID.

6EC7AED1-172F-42AE-9C12-295BC2ADB751

## Examples

Success response

`JSON` format

```
{
  "ConfigRuleId": "cr-5772ba41209e007b****",
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

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/CreateConfigRule#workbench-doc-change-demo) for a complete list.
