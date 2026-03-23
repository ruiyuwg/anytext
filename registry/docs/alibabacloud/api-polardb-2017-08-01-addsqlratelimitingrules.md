Adds SQL throttling rules.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/AddSQLRateLimitingRules)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/AddSQLRateLimitingRules)

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

polardb:AddSQLRateLimitingRules

create

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

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RuleName

string

Yes

The name of the SQL throttling rule. You can specify only one rule name at a time.

**Note**

-   Call the [DescribeSQLRateLimitingRules](/help/en/polardb/polardb-for-mysql/api-describemaskingrules) operation to view the details of all SQL throttling rules for the target cluster, including the rule names.
    
-   If the specified rule name does not exist in the current cluster, the system automatically creates a new SQL throttling rule based on the rule name and the value of the `RuleConfig` parameter.
    

testrule

RuleConfig

string

Yes

The configuration of the SQL throttling rule to add or modify, specified as a JSON string. The values of the parameters must be strings. Example: `{"id":"test","enabled":"true","match_mode":"0","template":"dXBkYXRlIHQgc2V0IGEgPSAxIHdoZXJlIGlkID0gMQ==","user":"","database":"","waiting":1024,"endpoint":"[{"EndpointName":"pe-***********","EndpointType":"Cluster","DBEndpointDescription":"Cluster Address"}]","throttle_mode":0,"concurrency":1}`. The JSON string contains the following parameters:

-   `"id"`: Required. The name of the throttling rule. The name must meet the following requirements:
    
    -   It cannot exceed 30 characters in length.
        
    -   It must consist of uppercase letters, lowercase letters, and digits.
        

{"id":"test","enabled":"true","match\_mode":"0","template":"dXBkYXRlIHQgc2V0IGEgPSAxIHdoZXJlIGlkID0gMQ==","user":"","database":"","waiting":1024,"endpoint":"\[{"EndpointName":"pe-\*\*\*\*\*\*\*\*\*\*\*","EndpointType":"Cluster","DBEndpointDescription":"Cluster Address"}\]","throttle\_mode":0,"concurrency":1}

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Message

string

The response message.

**Note**

If the request is successful, \`Successful\` is returned. If the request fails, an error message is returned, such as an error code.

Message

RequestId

string

The request ID.

69A85BAF-1089-4CDF-A82F-0A140F\*\*\*\*\*\*

Success

boolean

Indicates whether the request was successful. Valid values:

-   **true**: The request was successful.
    
-   **false**: The request failed.
    

true

## Examples

Success response

`JSON` format

```
{
  "Message": "Message",
  "RequestId": "69A85BAF-1089-4CDF-A82F-0A140F******",
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/AddSQLRateLimitingRules#workbench-doc-change-demo) for a complete list.
