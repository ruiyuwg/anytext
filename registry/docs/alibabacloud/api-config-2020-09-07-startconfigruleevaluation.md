Re-evaluates a specific rule or all rules in a compliance package.

## Operation description

This topic provides an example of how to re-evaluate the rule cr-9920626622af0035\*\*\*\*.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/StartConfigRuleEvaluation)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/StartConfigRuleEvaluation)

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

config:StartConfigRuleEvaluation

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

ConfigRuleId

string

No

The ID of the rule.

For more information, see [ListConfigRules](/help/en/cloud-config/latest/api-config-2020-09-07-listconfigrules).

**Note**

Specify either `CompliancePackId` or `ConfigRuleId`.

cr-9920626622af0035\*\*\*\*

RevertEvaluation

boolean

No

Specifies whether to restore evaluation results that were ignored. Valid values:

-   true: Restores ignored evaluation results.
    
-   false (default): Does not restore ignored evaluation results.
    

false

CompliancePackId

string

No

The ID of the compliance package.

For more information, see [ListCompliancePacks](/help/en/cloud-config/latest/api-config-2020-09-07-listcompliancepacks).

**Note**

Specify either `CompliancePackId` or `ConfigRuleId`.

cp-ac16626622af0053\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

D31EEAD7-BF1E-5927-977A-AFF9342A7273

Result

boolean

The result of the request. Valid values:

-   true: The request is successful.
    
-   false: The request failed.
    

true

## Examples

Success response

`JSON` format

```
{
  "RequestId": "D31EEAD7-BF1E-5927-977A-AFF9342A7273",
  "Result": true
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

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/StartConfigRuleEvaluation#workbench-doc-change-demo) for a complete list.
