Returns the details of SQL throttling rules.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeSQLRateLimitingRules)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeSQLRateLimitingRules)

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

polardb:DescribeSQLRateLimitingRules

list

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

None

None

## Request syntax

```
POST  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterId

string

Yes

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*

RuleNameList

string

No

The name of the SQL throttling rule that you want to query. You can specify multiple rule names for a batch query. Separate the rule names with commas (,).

**Note**

Call the [DescribeSQLRateLimitingRules](/help/en/polardb/polardb-for-mysql/api-describemaskingrules) operation to query the details of all SQL throttling rules for the cluster, including the rule names.

testrule

MaxResults

integer

No

The number of entries per page.

Maximum value: 100.

Default value: 10.

10

NextToken

string

No

The token for the next page of results.

AAAAARbaCuN6hiD08qrLdwJ9Fh3QbdIPYBaCDXsvvjLHCQfi

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Data

object

The result set.

RuleList

array

The list of rules.

string

The rule object.

{"id":"test","enabled":"true","match\_mode":"0","template":"dXBkYXRlIHQgc2V0IGEgPSAxIHdoZXJlIGlkID0gMQ==","user":"","database":"","waiting":1024,"endpoint":"\[{"EndpointName":"pe-\*\*\*\*\*\*\*\*\*\*\*","EndpointType":"Cluster","DBEndpointDescription":"Cluster Address"}\]","throttle\_mode":0,"concurrency":1}

MaxResults

integer

The maximum number of entries returned for the current request. Default value: 10.

10

Message

string

The response message.

**Note**

If the request is successful, \`Successful\` is returned. If the request fails, an error message is returned.

Successful

NextToken

string

The token for the next page of results.

AAAAARbaCuN6hiD08qrLdwJ9Fh0vHYf39hc0J5qELgsazkBk

RequestId

string

The request ID.

22C0ACF0-DD29-4B67-9190-B7A48C\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "Data": {
    "RuleList": [
      "{\"id\":\"test\",\"enabled\":\"true\",\"match_mode\":\"0\",\"template\":\"dXBkYXRlIHQgc2V0IGEgPSAxIHdoZXJlIGlkID0gMQ==\",\"user\":\"\",\"database\":\"\",\"waiting\":1024,\"endpoint\":\"[{\"EndpointName\":\"pe-***********\",\"EndpointType\":\"Cluster\",\"DBEndpointDescription\":\"Cluster Address\"}]\",\"throttle_mode\":0,\"concurrency\":1}"
    ]
  },
  "MaxResults": 10,
  "Message": "Successful",
  "NextToken": "AAAAARbaCuN6hiD08qrLdwJ9Fh0vHYf39hc0J5qELgsazkBk",
  "RequestId": "22C0ACF0-DD29-4B67-9190-B7A48C******"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeSQLRateLimitingRules#workbench-doc-change-demo) for a complete list.
