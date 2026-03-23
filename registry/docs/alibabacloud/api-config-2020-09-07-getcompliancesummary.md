Queries the compliance summary for the current account.

## Operation description

This topic provides an example of how to query the compliance summary by resource and rule for an account group.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/GetComplianceSummary)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/GetComplianceSummary)

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

config:GetComplianceSummary

get

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

No parameters required.

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

CAEE6F34-DEDC-4BAA-AA8C-946D5D008737

ComplianceSummary

object

The compliance summary.

ComplianceSummaryByResource

object

The compliance summary by resource.

LowRiskRuleNonCompliantResourceCount

integer

The number of non-compliant resources detected by low-risk rules.

**Note**

Note: This value can be greater than the total number of resources in your account. Resources are counted based on each rule. For example, if a resource is evaluated as non-compliant by two low-risk rules, the value of this parameter increases by 2.

2

NonCompliantCount

integer

The number of non-compliant resources.

12

ComplianceSummaryTimestamp

integer

The timestamp when the compliance summary was generated. Unit: milliseconds.

1589853712165

TotalCount

integer

The total number of resources.

13

CompliantCount

integer

The number of compliant resources.

1

HighRiskRuleNonCompliantResourceCount

integer

The number of non-compliant resources detected by high-risk rules.

**Note**

Note: This value can be greater than the total number of resources in your account. Resources are counted based on each rule. For example, if a resource is evaluated as non-compliant by two rules, the value of this parameter increases by 2.

2

MediumRiskRuleNonCompliantResourceCount

integer

The number of non-compliant resources detected by medium-risk rules.

**Note**

Note: This value can be greater than the total number of resources in your account. Resources are counted based on each rule. For example, if a resource is evaluated as non-compliant by two rules, the value of this parameter increases by 2.

6

ComplianceSummaryByConfigRule

object

The compliance summary by rule.

CompliantCount

integer

The number of compliant rules.

5

NonCompliantCount

integer

The number of non-compliant rules.

11

ComplianceSummaryTimestamp

integer

The timestamp when the compliance summary was generated. Unit: milliseconds.

1589853712165

TotalCount

integer

The total number of rules.

16

## Examples

Success response

`JSON` format

```
{
  "RequestId": "CAEE6F34-DEDC-4BAA-AA8C-946D5D008737",
  "ComplianceSummary": {
    "ComplianceSummaryByResource": {
      "LowRiskRuleNonCompliantResourceCount": 2,
      "NonCompliantCount": 12,
      "ComplianceSummaryTimestamp": 1589853712165,
      "TotalCount": 13,
      "CompliantCount": 1,
      "HighRiskRuleNonCompliantResourceCount": 2,
      "MediumRiskRuleNonCompliantResourceCount": 6
    },
    "ComplianceSummaryByConfigRule": {
      "CompliantCount": 5,
      "NonCompliantCount": 11,
      "ComplianceSummaryTimestamp": 1589853712165,
      "TotalCount": 16
    }
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/GetComplianceSummary#workbench-doc-change-demo) for a complete list.
