Adds SQL firewall rules.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/AddFirewallRules)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/AddFirewallRules)

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

polardb:AddFirewallRules

create

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

None

None

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

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RuleName

string

No

The name of the firewall rule. You can specify only one rule name.

**Note**

-   Call the [DescribeFirewallRules](/help/en/polardb/polardb-for-mysql/api-describemaskingrules) operation to view the details of all firewall rules for the target cluster, including the rule names.
    
-   If the specified rule name does not exist in the cluster, the system automatically creates a new firewall rule based on the name and the value of the `RuleConfig` parameter.
    

testrule

RuleConfig

string

No

A JSON string that contains the configuration parameters and their values for the firewall rule to add. All parameter values must be strings. For example: `{"id":"test","enabled":"true","mode":"Collecting","users":{"applies_to":[]},"endpoint":"[{"EndpointName":"pe-************","EndpointType":"Cluster","DBEndpointDescription":"Cluster Address"},{"EndpointName":"pe-************","EndpointType":"Custom","DBEndpointDescription":"pc-************"},{"EndpointName":"pe-************","EndpointType":"Custom","DBEndpointDescription":"pc-************K"}]","type":"WhiteList"}`. The JSON string contains the following parameters:

-   `"id"`: Required. The name of the firewall rule.
    
-   `"endpoint"`: Required. The information about the instance endpoint.
    

{"id":"test","enabled":"true","mode":"Collecting","users":{"applies\_to":\[\]},"endpoint":"\[{"EndpointName":"pe-\*\*\*\*\*\*\*\*\*\*\*\*","EndpointType":"Cluster","DBEndpointDescription":"Cluster Address"},{"EndpointName":"pe-\*\*\*\*\*\*\*\*\*\*\*\*","EndpointType":"Custom","DBEndpointDescription":"pc-\*\*\*\*\*\*\*\*\*\*\*\*"},{"EndpointName":"pe-\*\*\*\*\*\*\*\*\*\*\*\*","EndpointType":"Custom","DBEndpointDescription":"pc-\*\*\*\*\*\*\*\*\*\*\*\*K"}\]","type":"WhiteList"}

ResourceGroupId

string

No

The resource group ID.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

2921D843-433A-5FB3-A03B-4EC093B219F8

Message

string

The response message.

Successful

Success

boolean

The result of the request. Valid values:

-   **true**: The request was successful.
    
-   **false**: The request failed.
    

True

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2921D843-433A-5FB3-A03B-4EC093B219F8",
  "Message": "Successful",
  "Success": true
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/AddFirewallRules#workbench-doc-change-demo) for a complete list.
