Queries the evaluation results for a resource based on a rule.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/ListResourceEvaluationResults)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/ListResourceEvaluationResults)

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

config:ListResourceEvaluationResults

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

ResourceType

string

No

The resource type.

For more information, see [ListDiscoveredResources](/help/en/cloud-config/latest/listdiscoveredresources).

ACS::RAM::User

ResourceId

string

No

The resource ID.

For more information, see [ListDiscoveredResources](/help/en/cloud-config/latest/listdiscoveredresources).

23642660635396\*\*\*\*

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

This parameter is optional. The only supported value is `LastNonCompliantRecordTimestamp-Asc`. This value sorts resources based on when they first became non-compliant, with the earliest appearing first. Use this parameter only when you set the `ComplianceType` parameter to `NON_COMPLIANT`.

LastNonCompliantRecordTimestamp-Asc

ComplianceType

string

No

The compliance evaluation result. Valid values:

-   COMPLIANT: The resource is compliant.
    
-   NON\_COMPLIANT: The resource is non-compliant.
    
-   NOT\_APPLICABLE: The rule does not apply to the resource.
    
-   INSUFFICIENT\_DATA: No data is available for the resource.
    
-   IGNORED: The evaluation result is ignored.
    

NON\_COMPLIANT

NextToken

string

No

If the response is truncated, pass the `NextToken` value in a subsequent request to retrieve the remaining results.

IWBjqMYSy0is7zSMGu16\*\*\*\*

MaxResults

integer

No

The maximum number of entries to return for a single request. Valid values: 1 to 100.

10

Region

string

No

The ID of the region where the resource resides. For example, `global` indicates Global, and `cn-hangzhou` indicates China (Hangzhou).

For more information, see [ListDiscoveredResources](/help/en/cloud-config/latest/listdiscoveredresources).

global

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

25C89DDB-BB79-487D-88C3-4A561F21EFC4

EvaluationResults

object

The resource evaluation results.

NextToken

string

The token that is used to retrieve the next page of results.

IWBjqMYSy0is7zSMGu16\*\*\*\*

MaxResults

integer

The maximum number of entries returned per page.

10

EvaluationResultList

array<object>

The list of resource evaluation results.

object

None.

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
    
-   INSUFFICIENT\_DATA: The data is insufficient.
    
-   IGNORED: The evaluation result is ignored.
    

NON\_COMPLIANT

ResultRecordedTimestamp

integer

The timestamp when the resource evaluation result was generated. Unit: milliseconds.

1624932227595

Annotation

string

Additional information about the non-compliant resource. The value of this parameter can contain the following information:

-   `configuration`: The current configuration of the resource, which is the non-compliant configuration.
    
-   `desiredValue`: The expected configuration of the resource, which is the compliant configuration.
    
-   `operator`: The comparison operator that is used to compare the current configuration with the expected configuration.
    
-   `property`: The JSON path of the current configuration in the resource property struct.
    
-   `reason`: The reason why the resource is non-compliant.
    

{\\"configuration\\":\\"false\\",\\"desiredValue\\":\\"True\\",\\"operator\\":\\"StringEquals\\",\\"property\\":\\"$.LoginProfile.MFABindRequired\\"}

ConfigRuleInvokedTimestamp

integer

The timestamp when the rule was triggered for evaluation. Unit: milliseconds.

1624932227157

InvokingEventMessageType

string

The trigger type of the rule. Valid values:

-   ConfigurationItemChangeNotification: The rule is triggered by a configuration change.
    
-   ScheduledNotification: The rule is triggered periodically.
    
-   Manual: The rule is triggered manually.
    

ScheduledNotification

EvaluationResultIdentifier

object

The identifier of the resource evaluation result.

OrderingTimestamp

integer

The timestamp that is displayed on the timeline. Unit: milliseconds.

1624932227157

EvaluationResultQualifier

object

The resource information in the evaluation result.

ConfigRuleArn

string

The ARN of the rule.

acs:config::100931896542\*\*\*\*:rule/cr-7f7d626622af0041\*\*\*\*

ResourceType

string

The resource type.

ACS::RAM::User

ConfigRuleName

string

The rule name.

ram-user-mfa-check

ResourceId

string

The resource ID.

23642660635396\*\*\*\*

ConfigRuleId

string

The rule ID.

cr-7f7d626622af0041\*\*\*\*

ResourceName

string

The resource name.

Alice

RegionId

string

The ID of the region where the resource resides.

global

IgnoreDate

string

The date when the ignored evaluation result is automatically resumed.

**Note**

If this parameter is empty, the evaluation result is not automatically resumed. You must manually resume the result.

2022-06-01

RemediationEnabled

boolean

Indicates whether the remediation setting is enabled. Valid values:

-   true: The remediation setting is enabled.
    
-   false: The remediation setting is not enabled.
    

true

EvaluationId

string

The unique ID of the evaluation result.

00000089-4e0d-58b5-a96a-8e54112110f3

LastNonCompliantRecordTimestamp

integer

The start time of the last non-compliance.

1744696393000

## Examples

Success response

`JSON` format

```
{
  "RequestId": "25C89DDB-BB79-487D-88C3-4A561F21EFC4",
  "EvaluationResults": {
    "NextToken": "IWBjqMYSy0is7zSMGu16****",
    "MaxResults": 10,
    "EvaluationResultList": [
      {
        "RiskLevel": 1,
        "ComplianceType": "NON_COMPLIANT",
        "ResultRecordedTimestamp": 1624932227595,
        "Annotation": "{\\\"configuration\\\":\\\"false\\\",\\\"desiredValue\\\":\\\"True\\\",\\\"operator\\\":\\\"StringEquals\\\",\\\"property\\\":\\\"$.LoginProfile.MFABindRequired\\\"}",
        "ConfigRuleInvokedTimestamp": 1624932227157,
        "InvokingEventMessageType": "ScheduledNotification",
        "EvaluationResultIdentifier": {
          "OrderingTimestamp": 1624932227157,
          "EvaluationResultQualifier": {
            "ConfigRuleArn": "acs:config::100931896542****:rule/cr-7f7d626622af0041****",
            "ResourceType": "ACS::RAM::User",
            "ConfigRuleName": "ram-user-mfa-check",
            "ResourceId": "23642660635396****",
            "ConfigRuleId": "cr-7f7d626622af0041****",
            "ResourceName": "Alice",
            "RegionId": "global",
            "IgnoreDate": "2022-06-01"
          }
        },
        "RemediationEnabled": true,
        "EvaluationId": "00000089-4e0d-58b5-a96a-8e54112110f3",
        "LastNonCompliantRecordTimestamp": 1744696393000
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

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/ListResourceEvaluationResults#workbench-doc-change-demo) for a complete list.
