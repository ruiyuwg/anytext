Queries the compliance summary for a specified account group.

## Operation description

This topic provides an example of how to query the compliance summary by resource and by rule for the account group ca-a91d626622af0035\*\*\*\*.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Config/2020-09-07/GetAggregateComplianceSummary)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Config/2020-09-07/GetAggregateComplianceSummary)

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

config:GetAggregateComplianceSummary

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

AggregatorId

string

Yes

The ID of the account group.

ca-a91d626622af0035\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

929B8360-BD57-54FF-96DB-AD1D9B476769

ComplianceSummary

object

The compliance summary.

ComplianceSummaryByResource

object

The compliance summary by resource.

CompliantCount

integer

The number of compliant resources.

20

LowRiskRuleNonCompliantResourceCount

integer

The number of non-compliant resources detected by low-risk rules. Note: This value is not deduplicated by resource. If a resource is evaluated as non-compliant by two different rules, it is counted twice.

2

ComplianceSummaryTimestamp

integer

The timestamp of the compliance summary. This value is a UNIX timestamp. Unit: milliseconds.

1589853822103

TotalCount

integer

The total number of resources.

31

NonCompliantCount

integer

The number of non-compliant resources.

11

HighRiskRuleNonCompliantResourceCount

integer

The number of non-compliant resources detected by high-risk rules. Note: This value is not deduplicated by resource. If a resource is evaluated as non-compliant by two different rules, it is counted twice.

2

MediumRiskRuleNonCompliantResourceCount

integer

The number of non-compliant resources detected by medium-risk rules. Note: This value is not deduplicated by resource. If a resource is evaluated as non-compliant by two different rules, it is counted twice.

6

ComplianceSummaryByConfigRule

object

The compliance summary by rule.

CompliantCount

integer

The number of compliant rules.

4

NonCompliantCount

integer

The number of non-compliant rules.

5

ComplianceSummaryTimestamp

integer

The timestamp of the compliance summary. This value is a UNIX timestamp. Unit: milliseconds.

1589853822103

TotalCount

integer

The total number of rules.

9

## Examples

Success response

`JSON` format

```
{
  "RequestId": "929B8360-BD57-54FF-96DB-AD1D9B476769",
  "ComplianceSummary": {
    "ComplianceSummaryByResource": {
      "CompliantCount": 20,
      "LowRiskRuleNonCompliantResourceCount": 2,
      "ComplianceSummaryTimestamp": 1589853822103,
      "TotalCount": 31,
      "NonCompliantCount": 11,
      "HighRiskRuleNonCompliantResourceCount": 2,
      "MediumRiskRuleNonCompliantResourceCount": 6
    },
    "ComplianceSummaryByConfigRule": {
      "CompliantCount": 4,
      "NonCompliantCount": 5,
      "ComplianceSummaryTimestamp": 1589853822103,
      "TotalCount": 9
    }
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

Invalid.AggregatorId.Value

The specified AggregatorId is invalid.

The specified aggregator ID does not exist or you are not authorized to use the aggregator.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request has failed due to a temporary failure of the server.

See [Error Codes](https://api.alibabacloud.com/document/Config/2020-09-07/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Config/2020-09-07/GetAggregateComplianceSummary#workbench-doc-change-demo) for a complete list.
