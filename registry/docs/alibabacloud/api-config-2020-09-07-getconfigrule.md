Queries the details of a specified rule.

## Operation description

This topic provides an example of how to query the details of the rule `cr-7f7d626622af0041****`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/GetConfigRule)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/GetConfigRule)

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

config:GetConfigRule

get

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

cr-7f7d626622af0041\*\*\*\*

Tag `deprecated`

array<object>

No

The tags of the resource. This parameter is deprecated and has no effect.

You can add a maximum of 20 tags to a resource.

object

No

The tags of the resource.

Key

string

No

The tag key of the resource.

You can add a maximum of 20 tag keys to a resource.

key-1

Value

string

No

The tag value of the resource.

You can add a maximum of 20 tag values to a resource.

value-1

For more information about common request parameters, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

ConfigRule

object

The details of the rule.

AccountId

integer

The ID of the Alibaba Cloud account to which the rule belongs.

120886317861\*\*\*\*

Compliance

object

The compliance statistics of the rule.

ComplianceType

string

The compliance evaluation result. Valid values:

-   COMPLIANT: The resource is compliant.
    
-   NON\_COMPLIANT: The resource is non-compliant.
    
-   NOT\_APPLICABLE: The rule does not apply to the resource.
    
-   INSUFFICIENT\_DATA: No data is available.
    

NON\_COMPLIANT

Count

integer

The number of resources that are evaluated based on the compliance result.

3

ConfigRuleArn

string

The Alibaba Cloud Resource Name (ARN) of the rule.

acs:config::100931896542\*\*\*\*:rule/cr-7f7d626622af0041\*\*\*\*

ConfigRuleEvaluationStatus

object

The execution status of the rule.

FirstActivatedTimestamp

integer

The timestamp when the rule was first activated. Unit: milliseconds.

1624932221993

FirstEvaluationStarted

boolean

Indicates whether the rule has been evaluated. Valid values:

-   true: The rule has been evaluated.
    
-   false: The rule has not been evaluated.
    

true

LastErrorCode

string

The error code returned for the last failed execution of the rule.

TimeOut

LastErrorMessage

string

The error message returned for the last failed execution of the rule.

Time out

LastFailedEvaluationTimestamp

integer

The timestamp when the last failed evaluation of the rule ended. Unit: milliseconds.

1614687022000

LastFailedInvocationTimestamp

integer

The timestamp when the last failed invocation of the rule started. Unit: milliseconds.

1614687022000

LastSuccessfulEvaluationTimestamp

integer

The timestamp when the last successful evaluation of the rule ended. Unit: milliseconds.

1624932227486

LastSuccessfulInvocationTimestamp

integer

The timestamp when the last successful invocation of the rule started. Unit: milliseconds.

1624932227476

ConfigRuleId

string

The rule ID.

cr-7f7d626622af0041\*\*\*\*

ConfigRuleName

string

The rule name.

RAM用户开启MFA

ConfigRuleState

string

The status of the rule. Valid values:

-   ACTIVE: The rule is enabled.
    
-   DELETING: The rule is being deleted.
    
-   EVALUATING: The rule is being used to evaluate resource configurations.
    
-   INACTIVE: The rule is disabled.
    

ACTIVE

ConfigRuleTriggerTypes

string

The trigger type of the rule. Valid values:

-   ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
    
-   ScheduledNotification: The rule is triggered periodically.
    

ConfigurationItemChangeNotification

CreateBy

object

The information about the creator of the rule.

CompliancePackId

string

The ID of the compliance package.

cp-541e626622af008\*\*\*\*

CompliancePackName

string

The name of the compliance package.

OSS合规基线

CreatorId

string

The ID of the Alibaba Cloud account that was used to create the rule.

100931896542\*\*\*\*

CreatorName

string

The name of the creator.

Alice

CreateTimestamp

integer

The timestamp when the rule was created. Unit: milliseconds.

1604684022000

Description

string

The description of the rule.

RAM用户开启MFA，视为“合规”。

ExcludeRegionIdsScope

string

The IDs of the regions where the rule does not apply. The rule does not evaluate resources in these regions. Separate multiple region IDs with a comma (,).

cn-hangzhou

ExcludeResourceGroupIdsScope

string

The IDs of the resource groups where the rule does not apply. The rule does not evaluate resources in these resource groups. Separate multiple resource group IDs with a comma (,).

rg-aekzdibsjjc\*\*\*\*

ExcludeResourceIdsScope

string

The IDs of the resources that are not evaluated by the rule. Separate multiple resource IDs with a comma (,).

23642660635687\*\*\*\*

ExcludeTagsScope

array<object>

The tags of the resources that are not evaluated by the rule.

object

The tags of the resources that are not evaluated by the rule.

TagKey

string

The tag key.

key-2

TagValue

string

The tag value.

value-2

InputParameters

object

The input parameters of the rule.

ManagedRule

object

The details of the managed rule.

CompulsoryInputParameterDetails

object

The details of the required input parameters of the managed rule.

{}

Description

string

The description of the managed rule.

ECS磁盘未因欠费或安全等原因而被锁定，视为“合规”。

Identifier

string

The identifier of the managed rule.

ram-user-mfa-check

Labels

array

The list of rule labels.

string

The label of the managed rule.

\["RAM","User"\]

ManagedRuleName

string

The name of the managed rule.

RAM用户开启MFA

OptionalInputParameterDetails

object

The details of the optional input parameters of the managed rule.

{}

SourceDetails

array<object>

The source details of the managed rule.

object

The source details of the managed rule.

EventSource

string

The event source.

**Note**

Only Cloud Config events are supported. The value is aliyun.config.

aliyun.config

MaximumExecutionFrequency

string

The execution frequency of the rule. Valid values:

-   One\_Hour: 1 hour.
    
-   Three\_Hours: 3 hours.
    
-   Six\_Hours: 6 hours.
    
-   Twelve\_Hours: 12 hours.
    
-   TwentyFour\_Hours: 24 hours.
    

**Note**

This parameter is returned only when the rule is triggered periodically.

One\_Hour

MessageType

string

The trigger type of the rule. Valid values:

-   ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
    
-   ScheduledNotification: The rule is triggered periodically.
    

ConfigurationItemChangeNotification

MaximumExecutionFrequency

string

The execution frequency of the rule. Valid values:

-   One\_Hour: 1 hour.
    
-   Three\_Hours: 3 hours.
    
-   Six\_Hours: 6 hours.
    
-   Twelve\_Hours: 12 hours.
    
-   TwentyFour\_Hours: 24 hours.
    

**Note**

This parameter is returned only when the rule is triggered periodically.

One\_Hour

ModifiedTimestamp

integer

The timestamp when the rule was last updated. Unit: milliseconds.

1614687022000

RegionIdsScope

string

The IDs of the regions where the rule applies. The rule evaluates only resources in these regions.

global

ResourceGroupIdsScope

string

The IDs of the resource groups where the rule applies. The rule evaluates only resources in these resource groups.

rg-aekzdibsjjc\*\*\*\*

ResourceIdsScope

string

The IDs of the resources that are evaluated by the rule. Separate multiple resource IDs with a comma (,).

eip-8vbf3x310fn56ijfd\*\*\*\*

ResourceTypesScope

string

The types of the resources that are evaluated by the rule.

ACS::RAM::User

RiskLevel

integer

The risk level of the rule. Valid values:

-   1: high
    
-   2: medium
    
-   3: low
    

1

Scope

object

The effective scope of the rule.

ComplianceResourceTypes

array

The list of resource types that are evaluated by the rule. You can also view this information in the ResourceTypesScope field.

string

The type of the resource that is evaluated by the rule.

ACS::RAM::User

Source

object

The source of the rule.

Identifier

string

The identifier of the rule.

-   If the rule is a managed rule, the value of this parameter is the identifier of the managed rule.
    
-   If the rule is a custom rule, the value of this parameter is the ARN of the function.
    

acs:fc:cn-hangzhou:100931896542\*\*\*\*:services/ConfigService.LATEST/functions/specific-config

Owner

string

The owner of the rule. Valid values:

-   CUSTOM\_FC: a custom rule.
    
-   ALIYUN: a managed rule.
    

ALIYUN

SourceDetails

array<object>

The source details.

object

The source details.

EventSource

string

The event source.

**Note**

Only Cloud Config events are supported. The value is aliyun.config.

aliyun.config

MaximumExecutionFrequency

string

The execution frequency of the rule. Valid values:

-   One\_Hour: 1 hour.
    
-   Three\_Hours: 3 hours.
    
-   Six\_Hours: 6 hours.
    
-   Twelve\_Hours: 12 hours.
    
-   TwentyFour\_Hours: 24 hours.
    

**Note**

This parameter is returned only when the rule is triggered periodically.

One\_Hour

MessageType

string

The trigger type of the rule. Valid values:

-   ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
    
-   ScheduledNotification: The rule is triggered periodically.
    

ConfigurationItemChangeNotification

TagKeyLogicScope

string

This parameter is not returned for rules that are created using the `TagsScope` parameter.

This parameter is returned for rules that are created using the deprecated TagKeyScope parameter. We do not recommend that you use the `TagKeyScope` parameter. For example, if `TagKeyScope` is set to `ECS,OSS` and this parameter is set to `AND`, the rule applies only to resources that have both the `ECS` and `OSS` tags.

Valid values:

-   AND
    
-   OR
    

OR

TagKeyScope `deprecated`

string

This parameter is deprecated. Use the `TagsScope` parameter instead.

The rule applies only to resources with the specified tag.

**Note**

The `TagKeyScope` and `TagValueScope` parameters are returned at the same time.

RAM

TagValueScope `deprecated`

string

This parameter is deprecated. Use the `TagsScope` parameter instead.

The rule applies only to resources with the specified tag.

**Note**

The `TagKeyScope` and `TagValueScope` parameters are returned at the same time.

MFA

TagsScope

array<object>

The tag-based scope.

object

The tags that define the scope.

TagKey

string

The tag key.

key-1

TagValue

string

The tag value.

value-1

Tags

array<object>

The tags of the resource.

object

The tags of the resource.

TagKey

string

The tag key.

key-1

TagValue

string

The tag value.

value-1

ResourceNameScope

string

The rule evaluates only resources that have the specified names.

i-xxx

ExtendContent

string

The extended content. This parameter is used only to specify the trigger time for a rule that is triggered on a 24-hour cycle.

{"fixedHour":"12"}

RequestId

string

The request ID.

811234F4-C3AB-4D15-B90B-F55016D1B5AA

## Examples

Success response

`JSON` format

```
{
  "ConfigRule": {
    "AccountId": 0,
    "Compliance": {
      "ComplianceType": "NON_COMPLIANT",
      "Count": 3
    },
    "ConfigRuleArn": "acs:config::100931896542****:rule/cr-7f7d626622af0041****",
    "ConfigRuleEvaluationStatus": {
      "FirstActivatedTimestamp": 1624932221993,
      "FirstEvaluationStarted": true,
      "LastErrorCode": "TimeOut",
      "LastErrorMessage": "Time out",
      "LastFailedEvaluationTimestamp": 1614687022000,
      "LastFailedInvocationTimestamp": 1614687022000,
      "LastSuccessfulEvaluationTimestamp": 1624932227486,
      "LastSuccessfulInvocationTimestamp": 1624932227476
    },
    "ConfigRuleId": "cr-7f7d626622af0041****",
    "ConfigRuleName": "RAM用户开启MFA",
    "ConfigRuleState": "ACTIVE",
    "ConfigRuleTriggerTypes": "ConfigurationItemChangeNotification",
    "CreateBy": {
      "CompliancePackId": "cp-541e626622af008****",
      "CompliancePackName": "OSS合规基线",
      "CreatorId": "100931896542****",
      "CreatorName": "Alice"
    },
    "CreateTimestamp": 1604684022000,
    "Description": "RAM用户开启MFA，视为“合规”。",
    "ExcludeRegionIdsScope": "cn-hangzhou",
    "ExcludeResourceGroupIdsScope": "rg-aekzdibsjjc****",
    "ExcludeResourceIdsScope": "23642660635687****",
    "ExcludeTagsScope": [
      {
        "TagKey": "key-2",
        "TagValue": "value-2"
      }
    ],
    "InputParameters": {
      "test": "test",
      "test2": 1
    },
    "ManagedRule": {
      "CompulsoryInputParameterDetails": {},
      "Description": "ECS磁盘未因欠费或安全等原因而被锁定，视为“合规”。",
      "Identifier": "ram-user-mfa-check",
      "Labels": [
        "[\"RAM\",\"User\"]"
      ],
      "ManagedRuleName": "RAM用户开启MFA",
      "OptionalInputParameterDetails": {},
      "SourceDetails": [
        {
          "EventSource": "aliyun.config",
          "MaximumExecutionFrequency": "One_Hour",
          "MessageType": "ConfigurationItemChangeNotification"
        }
      ]
    },
    "MaximumExecutionFrequency": "One_Hour",
    "ModifiedTimestamp": 1614687022000,
    "RegionIdsScope": "global",
    "ResourceGroupIdsScope": "rg-aekzdibsjjc****",
    "ResourceIdsScope": "eip-8vbf3x310fn56ijfd****\n",
    "ResourceTypesScope": "ACS::RAM::User",
    "RiskLevel": 1,
    "Scope": {
      "ComplianceResourceTypes": [
        "ACS::RAM::User"
      ]
    },
    "Source": {
      "Identifier": "acs:fc:cn-hangzhou:100931896542****:services/ConfigService.LATEST/functions/specific-config",
      "Owner": "ALIYUN",
      "SourceDetails": [
        {
          "EventSource": "aliyun.config",
          "MaximumExecutionFrequency": "One_Hour",
          "MessageType": "ConfigurationItemChangeNotification"
        }
      ]
    },
    "TagKeyLogicScope": "OR",
    "TagKeyScope": "RAM",
    "TagValueScope": "MFA",
    "TagsScope": [
      {
        "TagKey": "key-1",
        "TagValue": "value-1"
      }
    ],
    "Tags": [
      {
        "TagKey": "key-1",
        "TagValue": "value-1"
      }
    ],
    "ResourceNameScope": "i-xxx",
    "ExtendContent": "{\"fixedHour\":\"12\"}"
  },
  "RequestId": "811234F4-C3AB-4D15-B90B-F55016D1B5AA"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ConfigRuleNotExists

The ConfigRule does not exist.

The rule does not exist.

400

NoPermission

You are not authorized to perform this operation.

You are not authorized to perform this operation.

404

AccountNotExisted

Your account does not exist.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/GetConfigRule#workbench-doc-change-demo) for a complete list.
