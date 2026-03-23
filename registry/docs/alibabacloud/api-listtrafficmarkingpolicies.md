You can call the ListTrafficMarkingPolicies operation to query details about traffic marking policies, such as their status and priority.

## Operation description

When you call the **ListTrafficMarkingPolicies** operation:

-   You must specify at least one of the **TransitRouterId** and **TrafficMarkingPolicyId** parameters.
    
-   If you do not specify the **TrafficMarkingPolicyId** parameter, the operation returns only information about the traffic marking policy based on the **TransitRouterId**, **TrafficMarkingPolicyName**, and **TrafficMarkingPolicyDescription** parameters. Information about traffic classification rules is not returned. The **TrafficMatchRules** field is not included in the response.
    
-   If you specify the **TrafficMarkingPolicyId** parameter, the operation returns information about the traffic marking policy and its traffic classification rules. The **TrafficMatchRules** field is included in the response. If the **TrafficMatchRules** field is an empty array, no traffic classification rules are configured for the policy.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTrafficMarkingPolicies)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/ListTrafficMarkingPolicies)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that support authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

cen:ListTrafficMarkingPolicies

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

TransitRouterId

string

No

The ID of the TransitRouter instance.

tr-bp1rmwxnk221e3fas\*\*\*\*

TrafficMarkingPolicyId

string

No

The ID of the traffic marking policy.

tm-iz5egnyitxiroq\*\*\*\*

TrafficMarkingPolicyName

string

No

The name of the traffic marking policy.

The name can be empty or 1 to 128 characters in length. It cannot start with http:// or https://.

nametest

TrafficMarkingPolicyDescription

string

No

The description of the traffic marking policy.

The description can be empty or 1 to 256 characters in length. It cannot start with http:// or https://.

desctest

MaxResults

integer

No

The number of entries to return on each page. Valid values: **1** to **100**. Default value: **20**.

20

NextToken

string

No

The token that is used for the next query. Valid values:

-   You do not need to specify this parameter for the first query.
    
-   If a next query is to be sent, set the value to the **NextToken** value returned from the last API call.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response.

NextToken

string

The token that is used for the next query.

-   If **NextToken** is empty, no next query is to be sent.
    
-   If a value is returned for **NextToken**, the value is the token that is used for the next query.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

RequestId

string

The request ID.

699989E4-64A0-5F78-8B93-CDB32D98971F

TotalCount

integer

The number of entries returned.

1

MaxResults

integer

The number of entries returned per page.

20

TrafficMarkingPolicies

array<object>

The list of traffic marking policies.

object

The information about the traffic marking policy.

TrafficMarkingPolicyStatus

string

The status of the traffic marking policy.

-   **Creating**: The policy is being created.
    
-   **Active**: The policy is available.
    
-   **Modifying**: The policy is being modified.
    
-   **Deleting**: The policy is being deleted.
    

Creating

TrafficMarkingPolicyId

string

The ID of the traffic marking policy.

tm-iz5egnyitxiroq\*\*\*\*

MarkingDscp

integer

The Differentiated Services Code Point (DSCP) value of the traffic marking policy.

5

TrafficMarkingPolicyName

string

The name of the traffic marking policy.

nametest

Priority

integer

The priority of the traffic marking policy.

A smaller value indicates a higher priority.

5

TrafficMarkingPolicyDescription

string

The description of the traffic marking policy.

desctest

TrafficMatchRules

array<object>

The list of traffic classification rules.

object

The information about the traffic classification rule.

MatchDscp

integer

The DSCP value of the traffic message.

**Note**

If **MatchDscp** returns -1, it indicates that all DSCP values are matched.

6

DstCidr

string

The destination CIDR block of the traffic message. IPv4 and IPv6 addresses are supported.

192.168.120.0/24

TrafficMatchRuleDescription

string

The description of the traffic classification rule.

desctest

Protocol

string

The protocol type of the traffic message.

**Note**

A traffic marking policy supports matching multiple protocol types. For more information about the protocol types, see the relevant documentation.

HTTP

TrafficMatchRuleId

string

The ID of the traffic classification rule.

tm-rule-fa9kgq1e90rmhc\*\*\*\*

SrcCidr

string

The source CIDR block of the traffic message. IPv6 and IPv4 addresses are supported.

192.168.10.0/24

TrafficMatchRuleName

string

The name of the traffic classification rule.

nametest

TrafficMatchRuleStatus

string

The status of the traffic classification rule.

-   **Creating**: The rule is being created.
    
-   **Active**: The rule is available.
    
-   **Deleting**: The rule is being deleted.
    

Creating

AddressFamily

string

The address type. Valid values are IPv4, IPv6, or empty.

IPv4

DstPortRange

array

The destination port range to be matched by the traffic classification rule.

integer

The destination port range to be matched by the traffic classification rule.

The operation returns two destination port numbers:

-   If the two destination port numbers are the same, for example, 80 and 80, the traffic classification rule matches traffic with a destination port of 80.
    
    ```
      If both destination port numbers are -1, the stream classification rule matches traffic with any destination port number.
    ```
    
-   If both destination port numbers are -1, the traffic classification rule matches traffic with any destination port.
    

80,80

SrcPortRange

array

The source port range to be matched by the traffic classification rule.

integer

The source port range to be matched by the traffic classification rule.

The operation returns two source port numbers:

-   If the two source port numbers are the same, for example, 80 and 80, the traffic classification rule matches traffic with a source port of 80.
    
    ```
      If both source port numbers are -1, the stream classification rule matches traffic with any source port number.
    ```
    
-   If both source port numbers are -1, the traffic classification rule matches traffic with any source port.
    

1,200

TransitRouterId

string

The ID of the TransitRouter instance.

tr-ccni\*\*\*

## Examples

Success response

`JSON` format

```
{
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "RequestId": "699989E4-64A0-5F78-8B93-CDB32D98971F",
  "TotalCount": 1,
  "MaxResults": 20,
  "TrafficMarkingPolicies": [
    {
      "TrafficMarkingPolicyStatus": "Creating",
      "TrafficMarkingPolicyId": "tm-iz5egnyitxiroq****",
      "MarkingDscp": 5,
      "TrafficMarkingPolicyName": "nametest",
      "Priority": 5,
      "TrafficMarkingPolicyDescription": "desctest",
      "TrafficMatchRules": [
        {
          "MatchDscp": 6,
          "DstCidr": "192.168.120.0/24",
          "TrafficMatchRuleDescription": "desctest",
          "Protocol": "HTTP",
          "TrafficMatchRuleId": "tm-rule-fa9kgq1e90rmhc****",
          "SrcCidr": "192.168.10.0/24",
          "TrafficMatchRuleName": "nametest",
          "TrafficMatchRuleStatus": "Creating",
          "AddressFamily": "IPv4",
          "DstPortRange": [
            0
          ],
          "SrcPortRange": [
            0
          ]
        }
      ],
      "TransitRouterId": "tr-ccni***"
    }
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

MissingParam.TransitRouterIdOrTrafficMarkingPolicyId

Either TransitRouterId or TrafficMarkingPolicyId must be specified.

The error message returned because the TransitRouterId or TrafficMarkingPolicyId parameter is not set.

400

IllegalParam.NextToken

The specified NextToken is invalid.

The error message returned because the NextToken parameter is set to an invalid value.

400

InvalidName

Name is invalid.

The error message returned because the specified name is invalid.

400

InvalidDescription

Description is invalid.

The error message returned because the description is invalid.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/ListTrafficMarkingPolicies#workbench-doc-change-demo) for a complete list.
