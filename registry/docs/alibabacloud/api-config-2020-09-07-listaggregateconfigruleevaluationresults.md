Queries the evaluation results of a rule for resources in a specified account group.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/ListAggregateConfigRuleEvaluationResults)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/ListAggregateConfigRuleEvaluationResults)

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

config:ListAggregateConfigRuleEvaluationResults

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
    

**Valid values:**

-   NOT\_APPLICABLE :
    
    NOT\_APPLICABLE
    
-   COMPLIANT :
    
    COMPLIANT
    
-   NON\_COMPLIANT :
    
    NON\_COMPLIANT
    
-   INSUFFICIENT\_DATA :
    
    INSUFFICIENT\_DATA
    
-   IGNORED :
    
    IGNORED
    

NON\_COMPLIANT

NextToken

string

No

The pagination token that is returned when the response is truncated. Use this token in the next request to retrieve the next page of results.

IWBjqMYSy0is7zSMGu16\*\*\*\*

MaxResults

integer

No

The maximum number of entries to return on a single page. Valid values: 1 to 100.

10

ConfigRuleId

string

No

The rule ID.

For more information about how to obtain a rule ID, see [ListAggregateConfigRules](/help/en/cloud-config/latest/listaggregateconfigrules).

cr-888f626622af00ae\*\*\*\*

AggregatorId

string

Yes

The ID of the account group.

For more information about how to obtain the ID of an account group, see [ListAggregators](/help/en/cloud-config/latest/listaggregators).

ca-b1e6626622af00cb\*\*\*\*

CompliancePackId

string

No

The ID of the compliance package.

For more information about how to obtain the ID of a compliance package, see [ListAggregateCompliancePacks](/help/en/cloud-config/latest/listaggregatecompliancepacks).

cp-f1e3326622af00cb\*\*\*\*

Regions

string

No

The ID of the region where the resource resides. Separate multiple region IDs with commas (,).

cn-shanghai

ResourceTypes

string

No

The resource type. Separate multiple resource types with commas (,).

ACS::ECS::Instance

ResourceGroupIds

string

No

The ID of the resource group to which the resource belongs. Separate multiple resource group IDs with commas (,).

rg-aek2cqyzvuj\*\*\*\*

ResourceAccountId

integer

No

The ID of the Alibaba Cloud account to which the resource in the account group belongs.

**Note**

Specify this parameter or \`ResourceOwnerId\`. We recommend that you specify this parameter.

100931896542\*\*\*\*

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

A6662516-D056-4325-B6A7-CD3E89C97C39

EvaluationResults

object

The collection of evaluation results.

NextToken

string

The pagination token that is used in the next request to retrieve a new page of results.

IWBjqMYSy0is7zSMGu16\*\*\*\*

MaxResults

integer

The maximum number of entries returned per page.

10

EvaluationResultList

array<object>

A list of evaluation results.

array<object>

RiskLevel

integer

The risk level of the rule. Valid values:

-   1: high risk.
    
-   2: medium risk.
    
-   3: low risk.
    

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

The timestamp when the evaluation result was recorded. Unit: milliseconds.

1624869013065

Annotation

string

The annotation of the non-compliant resource. The annotation may include the following information:

-   `configuration`: the current configuration of the resource, which is the non-compliant configuration.
    
-   `desiredValue`: the expected configuration of the resource, which is the compliant configuration.
    
-   `operator`: the comparison operator that is used to compare the current configuration with the expected configuration.
    
-   `property`: the JSON path of the current configuration in the resource property struct.
    
-   `reason`: the reason why the resource is non-compliant.
    

{\\"configuration\\":\\"LRS\\",\\"desiredValue\\":\\"ZRS\\",\\"operator\\":\\"StringEquals\\",\\"property\\":\\"$.DataRedundancyType\\"}

ConfigRuleInvokedTimestamp

integer

The timestamp when the rule was triggered to evaluate the resource. Unit: milliseconds.

1624869012713

InvokingEventMessageType

string

The trigger type of the rule. Valid values:

-   ConfigurationItemChangeNotification: The rule is triggered by a configuration change.
    
-   ScheduledNotification: The rule is triggered periodically.
    

ScheduledNotification

EvaluationResultIdentifier

object

The identifier of the evaluation result.

OrderingTimestamp

integer

The timestamp that is displayed on the timeline. Unit: milliseconds.

**Note**

This is the timestamp when the rule was triggered to evaluate the resource. It is the same as the value of the `ConfigRuleInvokedTimestamp` parameter.

1624869012713

EvaluationResultQualifier

object

The information about the resource that is evaluated.

ResourceOwnerId

integer

The ID of the Alibaba Cloud account to which the resource belongs.

173808452267\*\*\*\*

ConfigRuleArn

string

The Alibaba Cloud Resource Name (ARN) of the rule.

acs:config::100931896542\*\*\*\*:rule/cr-888f626622af00ae\*\*\*\*

ResourceType

string

The resource type.

ACS::OSS::Bucket

ConfigRuleName

string

The name of the rule.

OSS存储空间开启同城冗余存储

ResourceGroupId

string

The ID of the resource group to which the resource belongs.

rg-acfm26cicib\*\*\*\*

ConfigRuleId

string

The rule ID.

cr-888f626622af00ae\*\*\*\*

ResourceName

string

The resource name.

Bucket-test

RegionId

string

The ID of the region to which the resource belongs.

cn-hangzhou

CompliancePackId

string

The ID of the compliance package to which the rule belongs.

cr-7263fd26622af00bc\*\*\*\*

IgnoreDate

string

The date when the ignored evaluation result is automatically restored.

**Note**

If this parameter is empty, the result is not automatically restored. You must manually restore it.

2022-06-01

ResourceId

string

The resource ID.

Bucket-test

RemediationEnabled

boolean

Indicates whether the remediation setting is enabled. Valid values:

-   true: The remediation setting is enabled.
    
-   false: The remediation setting is not enabled.
    

false

EvaluationId

string

The unique ID of the evaluation result.

00000089-4e0d-58b5-a96a-8e54112110f3

LastNonCompliantRecordTimestamp

integer

The timestamp when the resource last became non-compliant.

1744696393000

LastCompliantFixedTimestamp

integer

The timestamp when the resource was last remediated to a compliant state. This parameter is not returned if a new resource or rule is evaluated as compliant for the first time.

1768788515723

## Examples

Success response

`JSON` format

```
{
  "RequestId": "A6662516-D056-4325-B6A7-CD3E89C97C39",
  "EvaluationResults": {
    "NextToken": "IWBjqMYSy0is7zSMGu16****",
    "MaxResults": 10,
    "EvaluationResultList": [
      {
        "RiskLevel": 1,
        "ComplianceType": "NON_COMPLIANT",
        "ResultRecordedTimestamp": 1624869013065,
        "Annotation": "{\\\"configuration\\\":\\\"LRS\\\",\\\"desiredValue\\\":\\\"ZRS\\\",\\\"operator\\\":\\\"StringEquals\\\",\\\"property\\\":\\\"$.DataRedundancyType\\\"}",
        "ConfigRuleInvokedTimestamp": 1624869012713,
        "InvokingEventMessageType": "ScheduledNotification",
        "EvaluationResultIdentifier": {
          "OrderingTimestamp": 1624869012713,
          "EvaluationResultQualifier": {
            "ResourceOwnerId": 0,
            "ConfigRuleArn": "acs:config::100931896542****:rule/cr-888f626622af00ae****",
            "ResourceType": "ACS::OSS::Bucket",
            "ConfigRuleName": "OSS存储空间开启同城冗余存储",
            "ResourceGroupId": "rg-acfm26cicib****",
            "ConfigRuleId": "cr-888f626622af00ae****",
            "ResourceName": "Bucket-test",
            "RegionId": "cn-hangzhou",
            "CompliancePackId": "cr-7263fd26622af00bc****",
            "IgnoreDate": "2022-06-01",
            "ResourceId": "Bucket-test"
          }
        },
        "RemediationEnabled": false,
        "EvaluationId": "00000089-4e0d-58b5-a96a-8e54112110f3",
        "LastNonCompliantRecordTimestamp": 1744696393000,
        "LastCompliantFixedTimestamp": 1768788515723
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

400

Invalid.AggregatorId.Value

The specified AggregatorId is invalid.

The specified aggregator ID does not exist or you are not authorized to use the aggregator.

400

Invalid.CompliancePackId.Value

The specified CompliancePackId does not exist.

The specified compliance pack ID does not exist.

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

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/ListAggregateConfigRuleEvaluationResults#workbench-doc-change-demo) for a complete list.
