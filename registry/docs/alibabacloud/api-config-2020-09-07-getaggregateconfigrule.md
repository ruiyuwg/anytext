Queries the details of a specific rule in a specified account group.

## Operation description

This topic provides an example of how to query the details of the rule `cr-7f7d626622af0041****` in the account group `ca-7f00626622af0041****`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/GetAggregateConfigRule)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/GetAggregateConfigRule)

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

config:GetAggregateConfigRule

get

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

For more information, see [ListAggregateConfigRules](/help/en/cloud-config/latest/listaggregateconfigrules).

cr-7f7d626622af0041\*\*\*\*

AggregatorId

string

Yes

The ID of the account group.

For more information, see [ListAggregators](/help/en/cloud-config/latest/listaggregators).

ca-7f00626622af0041\*\*\*\*

Tag `deprecated`

array<object>

No

The tags. This parameter is deprecated. If you specify this parameter, the value does not take effect.

object

No

The tags of the resource. This parameter is deprecated. If you specify this parameter, the value does not take effect.

You can add a maximum of 20 tags.

Key

string

No

The tag key of the resource.

You can add a maximum of 20 tag keys.

key-1

Value

string

No

The tag value of the resource.

You can add a maximum of 20 tag values.

value-1

For more information about common request parameters, see [Common parameters](/help/en/cloud-config/latest/common-parameters-2).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

None.

RequestId

string

The request ID.

811234F4-C3AB-4D15-B90B-F55016D1B5AA

ConfigRule

object

The details of the rule.

RiskLevel

integer

The risk level of the rule. Valid values:

-   1: high
    
-   2: medium
    
-   3: low
    

1

InputParameters

object

The input parameters of the rule.

{"tag1Key":"ECS","tag1Value":"test"}

Source

object

The source of the rule.

SourceDetails

array<object>

The details of the rule source.

object

Not applicable.

MessageType

string

The trigger type of the rule. Valid values:

-   ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
    
-   ScheduledNotification: The rule is triggered periodically.
    

ConfigurationItemChangeNotification

EventSource

string

The event source.

**Note**

Only Cloud Config events are supported: aliyun.config.

aliyun.config

MaximumExecutionFrequency

string

The frequency at which the rule is executed. Valid values:

-   One\_Hour: 1 hour.
    
-   Three\_Hours: 3 hours.
    
-   Six\_Hours: 6 hours.
    
-   Twelve\_Hours: 12 hours.
    
-   TwentyFour\_Hours: 24 hours.
    

One\_Hour

Owner

string

The owner of the rule. Valid values:

-   CUSTOM\_FC: a custom rule.
    
-   ALIYUN: a managed rule.
    

ALIYUN

Identifier

string

The identifier of the rule.

-   If the rule is a managed rule, the value of this parameter is the identifier of the managed rule.
    
-   If the rule is a custom rule, the value of this parameter is the Alibaba Cloud Resource Name (ARN) of the function.
    

acs:fc:cn-hangzhou:100931896542\*\*\*\*:services/ConfigService.LATEST/functions/specific-config

ConfigRuleState

string

The status of the rule. Valid values:

-   ACTIVE: The rule is enabled.
    
-   DELETING: The rule is being deleted.
    
-   EVALUATING: The rule is being evaluated.
    
-   INACTIVE: The rule is disabled.
    

ACTIVE

MaximumExecutionFrequency

string

The frequency at which the rule is executed.

-   One\_Hour: 1 hour.
    
-   Three\_Hours: 3 hours.
    
-   Six\_Hours: 6 hours.
    
-   Twelve\_Hours: 12 hours.
    
-   TwentyFour\_Hours: 24 hours.
    

One\_Hour

ManagedRule

object

The details of the managed rule.

SourceDetails

array<object>

The details of the managed rule source.

object

No description is available.

MessageType

string

The trigger type of the rule. Valid values:

-   ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
    
-   ScheduledNotification: The rule is triggered periodically.
    

ConfigurationItemChangeNotification

EventSource

string

The event source.

**Note**

Only Cloud Config events are supported: aliyun.config.

aliyun.config

MaximumExecutionFrequency

string

The frequency at which the rule is executed.

-   One\_Hour: 1 hour.
    
-   Three\_Hours: 3 hours.
    
-   Six\_Hours: 6 hours.
    
-   Twelve\_Hours: 12 hours.
    
-   TwentyFour\_Hours: 24 hours.
    

One\_Hour

Description

string

The description of the managed rule.

ECS磁盘未因欠费或安全等原因而被锁定，视为“合规”。

Labels

array

A list of labels for the managed rule.

string

The label of the managed rule.

\["RAM","USer"\]

Identifier

string

The identifier of the managed rule.

ram-user-mfa-check

OptionalInputParameterDetails

object

The details of the optional input parameters for the managed rule.

{}

ManagedRuleName

string

The name of the managed rule.

RAM用户开启MFA

CompulsoryInputParameterDetails

object

The details of the required input parameters for the managed rule.

{}

ConfigRuleArn

string

The ARN of the rule.

acs:config::100931896542\*\*\*\*:rule/cr-7f7d626622af0041\*\*\*\*

Description

string

The description of the rule.

RAM用户开启MFA，视为“合规”。

CreateBy

object

The information about the creator of the rule.

CompliancePackId

string

The ID of the compliance package.

cp-541e626622af008\*\*\*\*

AggregatorName

string

The name of the account group.

Test\_Group

CompliancePackName

string

The name of the compliance package.

OSS合规基线

CreatorName

string

The name of the rule creator.

Alice

CreatorType

string

The type of the rule creator. Only `AGGREGATOR` (account group) is supported.

AGGREGATOR

CreatorId

string

The ID of the account that created the rule.

100931896542\*\*\*\*

AggregatorId

string

The ID of the account group.

ca-04b3fd170e340007\*\*\*\*

ConfigRuleName

string

The name of the rule.

RAM用户开启MFA

ConfigRuleEvaluationStatus

object

The execution status of the rule.

LastErrorCode

string

The error code returned for the last failed execution of the rule.

TimeOut

LastSuccessfulEvaluationTimestamp

integer

The timestamp of the last successful evaluation. Unit: milliseconds.

1624932227486

FirstActivatedTimestamp

integer

The timestamp when the rule was first activated.

1624932221993

FirstEvaluationStarted

boolean

Indicates whether the rule has been evaluated. Valid values:

-   true: The rule has been evaluated.
    
-   false: The rule has not been evaluated.
    

true

LastSuccessfulInvocationTimestamp

integer

The timestamp of the last successful invocation. Unit: milliseconds.

1624932227476

LastErrorMessage

string

The error message returned for the last failed execution of the rule.

time out

LastFailedEvaluationTimestamp

integer

The timestamp of the last failed evaluation. Unit: milliseconds.

1614687022000

LastFailedInvocationTimestamp

integer

The timestamp of the last failed invocation. Unit: milliseconds.

1614687022000

ConfigRuleId

string

The rule ID.

cr-7f7d626622af0041\*\*\*\*

ModifiedTimestamp

integer

The timestamp when the rule was last updated. Unit: milliseconds.

1614687022000

CreateTimestamp

integer

The timestamp when the rule was created. Unit: milliseconds.

1604684022000

ResourceTypesScope

string

The resource types that are evaluated by the rule.

ACS::RAM::User

ExcludeRegionIdsScope

string

The rule does not apply to resources in the specified regions. The system does not evaluate resources in these regions. Separate multiple region IDs with a comma (,).

cn-hangzhou

RegionIdsScope

string

The rule applies only to resources in the specified regions.

global

ExcludeResourceIdsScope

string

The IDs of the resources that are not evaluated by the rule.

23642660635687\*\*\*\*

ResourceIdsScope

string

The rule applies only to the specified resources. Separate multiple resource IDs with a comma (,).

eip-8vbf3x310fn56ijfd\*\*\*\*

ResourceGroupIdsScope

string

The rule applies only to resources in the specified resource groups.

rg-aekzdibsjjc\*\*\*\*

ExcludeResourceGroupIdsScope

string

The rule does not apply to resources in the specified resource groups. The system does not evaluate resources in these resource groups. Separate multiple resource group IDs with a comma (,).

rg-aekzdibsjjc\*\*\*\*

TagKeyScope `deprecated`

string

This parameter is deprecated. Use the `TagsScope` parameter instead.

The rule applies only to resources that have the specified tag key.

RAM

TagValueScope `deprecated`

string

This parameter is deprecated. Use the `TagsScope` parameter instead.

The rule applies only to resources that have the specified tag value.

MFA

TagsScope

array<object>

The scope of the tags.

object

TagKey

string

The tag key.

key-1

TagValue

string

The tag value.

value-1

ExcludeTagsScope

array<object>

The excluded scope of the tags.

object

TagKey

string

The tag key.

key-2

TagValue

string

The tag value.

value-2

ConfigRuleTriggerTypes

string

The trigger type of the rule. Valid values:

-   ConfigurationItemChangeNotification: The rule is triggered by configuration changes.
    
-   ScheduledNotification: The rule is triggered periodically.
    

ConfigurationItemChangeNotification

TagKeyLogicScope

string

This parameter is not returned for rules that are created using the `TagsScope` parameter.

This parameter is returned only for rules that are created using the deprecated `TagKeyScope` parameter. For example, if `TagKeyScope` is set to `ECS,OSS` and this parameter is set to `AND`, the rule applies to resources that have both the `ECS` and `OSS` tags.

Valid values:

-   AND
    
-   OR
    

AND

FolderIdsScope

string

The rule applies only to resources within the member accounts in the specified folders of the resource directory.

fd-ZtHsRH\*\*\*\*

ExcludeFolderIdsScope

string

The rule does not apply to resources within the member accounts in the specified folders of the resource directory. The system does not evaluate resources in these folders.

fd-pWmkqZ\*\*\*\*

ExcludeAccountIdsScope

string

The rule does not apply to resources in the specified member accounts. The system does not evaluate resources in these accounts.

120886317861\*\*\*\*

ResourceNameScope

string

The rule applies only to resources that have the specified names.

i-xxx

Compliance

object

The compliance statistics of the rule.

ComplianceType

string

The compliance evaluation result. Valid values:

-   COMPLIANT: The resource is compliant.
    
-   NON\_COMPLIANT: The resource is not compliant.
    
-   NOT\_APPLICABLE: The rule does not apply to the resource.
    
-   INSUFFICIENT\_DATA: No data is available.
    

NON\_COMPLIANT

Count

integer

The number of resources that have the corresponding compliance evaluation result.

3

AccountId

integer

The ID of the Alibaba Cloud account to which the rule belongs.

120886317861\*\*\*\*

ExtendContent

string

The extended content. This parameter is used to configure the trigger time for a rule that is triggered on a 24-hour cycle.

{"fixedHour":"12"}

Tags

array<object>

The resource tags.

object

The resource tags.

TagKey

string

The tag key.

key-1

TagValue

string

The tag value.

value-1

AccountIdsScope

string

The rule applies only to resources in the specified member accounts. Separate multiple member account IDs with a comma (,).

120886317861\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "811234F4-C3AB-4D15-B90B-F55016D1B5AA",
  "ConfigRule": {
    "RiskLevel": 1,
    "InputParameters": {
      "tag1Key": "ECS",
      "tag1Value": "test"
    },
    "Source": {
      "SourceDetails": [
        {
          "MessageType": "ConfigurationItemChangeNotification",
          "EventSource": "aliyun.config",
          "MaximumExecutionFrequency": "One_Hour"
        }
      ],
      "Owner": "ALIYUN",
      "Identifier": "acs:fc:cn-hangzhou:100931896542****:services/ConfigService.LATEST/functions/specific-config"
    },
    "ConfigRuleState": "ACTIVE",
    "MaximumExecutionFrequency": "One_Hour",
    "ManagedRule": {
      "SourceDetails": [
        {
          "MessageType": "ConfigurationItemChangeNotification",
          "EventSource": "aliyun.config",
          "MaximumExecutionFrequency": "One_Hour"
        }
      ],
      "Description": "ECS磁盘未因欠费或安全等原因而被锁定，视为“合规”。",
      "Labels": [
        "[\"RAM\",\"USer\"]"
      ],
      "Identifier": "ram-user-mfa-check",
      "OptionalInputParameterDetails": {},
      "ManagedRuleName": "RAM用户开启MFA",
      "CompulsoryInputParameterDetails": {}
    },
    "ConfigRuleArn": "acs:config::100931896542****:rule/cr-7f7d626622af0041****",
    "Description": "RAM用户开启MFA，视为“合规”。",
    "CreateBy": {
      "CompliancePackId": "cp-541e626622af008****",
      "AggregatorName": "Test_Group",
      "CompliancePackName": "OSS合规基线",
      "CreatorName": "Alice",
      "CreatorType": "AGGREGATOR",
      "CreatorId": "100931896542****",
      "AggregatorId": "ca-04b3fd170e340007****"
    },
    "ConfigRuleName": "RAM用户开启MFA",
    "ConfigRuleEvaluationStatus": {
      "LastErrorCode": "TimeOut",
      "LastSuccessfulEvaluationTimestamp": 1624932227486,
      "FirstActivatedTimestamp": 1624932221993,
      "FirstEvaluationStarted": true,
      "LastSuccessfulInvocationTimestamp": 1624932227476,
      "LastErrorMessage": "time out",
      "LastFailedEvaluationTimestamp": 1614687022000,
      "LastFailedInvocationTimestamp": 1614687022000
    },
    "ConfigRuleId": "cr-7f7d626622af0041****",
    "ModifiedTimestamp": 1614687022000,
    "CreateTimestamp": 1604684022000,
    "ResourceTypesScope": "ACS::RAM::User",
    "ExcludeRegionIdsScope": "cn-hangzhou",
    "RegionIdsScope": "global",
    "ExcludeResourceIdsScope": "23642660635687****",
    "ResourceIdsScope": "eip-8vbf3x310fn56ijfd****\n",
    "ResourceGroupIdsScope": "rg-aekzdibsjjc****",
    "ExcludeResourceGroupIdsScope": "rg-aekzdibsjjc****",
    "TagKeyScope": "RAM",
    "TagValueScope": "MFA",
    "TagsScope": [
      {
        "TagKey": "key-1",
        "TagValue": "value-1"
      }
    ],
    "ExcludeTagsScope": [
      {
        "TagKey": "key-2",
        "TagValue": "value-2"
      }
    ],
    "ConfigRuleTriggerTypes": "ConfigurationItemChangeNotification",
    "TagKeyLogicScope": "AND",
    "FolderIdsScope": "fd-ZtHsRH****",
    "ExcludeFolderIdsScope": "fd-pWmkqZ****",
    "ExcludeAccountIdsScope": "120886317861****",
    "ResourceNameScope": "i-xxx",
    "Compliance": {
      "ComplianceType": "NON_COMPLIANT",
      "Count": 3
    },
    "AccountId": 0,
    "ExtendContent": "{\"fixedHour\":\"12\"}",
    "Tags": [
      {
        "TagKey": "key-1",
        "TagValue": "value-1"
      }
    ],
    "AccountIdsScope": "120886317861****\n"
  }
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

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/GetAggregateConfigRule#workbench-doc-change-demo) for a complete list.
