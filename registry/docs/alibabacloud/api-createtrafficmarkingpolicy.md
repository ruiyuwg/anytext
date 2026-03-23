Creates a traffic marking policy. A traffic marking policy captures network traffic based on traffic classification rules and marks the traffic with the Differentiated Services Code Point (DSCP) values that you specify.

## Operation description

-   Only Enterprise Edition transit routers support traffic marking policies.
    
-   **CreateTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a traffic marking policy ID and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic marking policy.
    
    -   If a traffic marking policy is in the **Creating** state, the traffic marking policy is being created. You can query the traffic marking policy but cannot perform other operations.
        
    -   If a traffic marking policy is in the **Active** state, the traffic marking policy is created.
        

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTrafficMarkingPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/CreateTrafficMarkingPolicy)

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

cen:CreateTrafficMarkingPolicy

create

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

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that it is unique among all requests. The client token can contain only ASCII characters.

**Note**

If you do not set this parameter, **ClientToken** is set to the value of **RequestId**. The value of **RequestId** for each API request may be different.

123e4567-e89b-12d3-a456-426\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request format, and limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): performs a dry run and sends the request.
    

false

TransitRouterId

string

Yes

The ID of the transit router.

tr-8vbuqeo5h5pu3m01d\*\*\*\*

TrafficMarkingPolicyName

string

No

The name of the traffic marking policy.

The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.

nametest

TrafficMarkingPolicyDescription

string

No

The description of the traffic marking policy.

This parameter is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.

desctest

Priority

integer

Yes

The priority value of the traffic marking policy. Valid values: **1** to **100**.

The priority value of each traffic marking policy on a transit router must be unique. A smaller value specifies a higher priority.

5

MarkingDscp

integer

Yes

The differentiated services code point (DSCP) value to be added to packets that match the traffic classification rule. Valid values: **0** to **63**.

The DSCP value of each traffic marking policy on a transit router must be unique.

5

TrafficMatchRules

array<object>

No

The traffic classification rules in the traffic marking policy.

Data packets that meet the traffic classification rule is assigned the DSCP value of quality of service (QoS) policy.

You can create up to 50 traffic classification rules.

object

No

The information about the traffic classification rule.

MatchDscp

integer

No

The Differentiated Service Code Point (DSCP) value that is used to match packets. Valid values: **0** to **63**.

Packets that carry the specified DSCP value meet the traffic classification rule. If you do not specify a DSCP value, all packets meet the traffic classification rule.

**Note**

The DSCP value that you specify for this parameter is the DSCP value that packets carry before they are transmitted over the inter-region connection.

You can create up to 50 traffic classification rules in each call. You can specify a DSCP value for each traffic classification rule.

6

DstCidr

string

No

The destination CIDR block of packets. IPv4 and IPv6 addresses are supported.

Packets whose destination IP addresses fall into the specified destination CIDR block meet the traffic classification rule. If you do not specify a destination CIDR block, all packets meet the traffic classification rule.

You can create up to 50 traffic classification rules in each call You can specify a destination CIDR block for each traffic classification rule.

10.10.10.0/24

TrafficMatchRuleDescription

string

No

The description of the traffic classification rule.

You can create up to 50 traffic classification rules in each call. You can specify a description for each traffic classification rule.

This parameter is optional. If you enter a description, it must be 1 to 256 characters in length and cannot start with http:// or https://.

desctest

Protocol

string

No

The protocol that is used to match packets.

Traffic classification rules support the following protocols: **HTTP**, **HTTPS**, **TCP**, **UDP**, **SSH**, and **Telnet**. For more information, log on to the [CEN console](https://cen.console.alibabacloud.com/cen/list).

**Some protocols use a fixed port. Click to view the protocols and ports.**

-   If the protocol is **ICMP**, the destination port must be **\-1**.
    
-   If the protocol is **GRE**, the destination port must be **1**.
    
-   If the protocol is **SSH**, the destination port must be **22**.
    
-   If the protocol is **Telnet**, the destination port must be **23**.
    
-   If the protocol is **HTTP**, the destination port must be **80**.
    
-   If the protocol is **HTTPS**, the destination port must be **443**.
    
-   If the protocol is **MS SQL**, the destination port must be **1443**.
    
-   If the protocol is **Oracle**, the destination port must be **1521**.
    
-   If the protocol is **Mysql**, the destination port must be **3306**.
    
-   If the protocol is **RDP**, the destination port must be **3389**.
    
-   If the protocol is **Postgre SQL**, the destination port must be **5432**.
    
-   If the protocol is **Redis**, the destination port must be **6379**.
    

You can create up to 50 traffic classification rules in each call. You can specify a protocol for each traffic classification rule.

HTTP

DstPortRange

array

No

The destination port range that is used to match packets. Valid values: **\-1** and **1** to **65535**.

Packets whose destination ports fall within the destination port range meet the traffic classification rule. If you do not specify destination port range, all packets meet the traffic classification rule.

You can enter up to two port numbers. Take note of the following rules:

-   If you enter only one port number, such as 1, packets whose destination port is 1 meet the traffic classification rule. A value of -1 specifies all destination ports.
    
-   If you enter two port numbers, such as 1 and 200, packets whose destination ports fall into 1 and 200 meet the traffic classification rule.
    
-   If you enter two port numbers and one of them is -1, the other port number must also be -1. In this case, all packets meet the traffic classification rule.
    

You can create up to 50 traffic classification rules in each call. You can specify a destination port range for each traffic classification rule.

integer

No

The destination port range that is used to match packets. Valid values: **\-1** and **1** to **65535**.

Packets whose destination ports fall within the destination port range meet the traffic classification rule. If you do not specify destination port range, all packets meet the traffic classification rule.

You can enter up to two port numbers. Take note of the following rules:

-   If you enter only one port number, such as 1, packets whose destination port is 1 meet the traffic classification rule.
    
-   If you enter two port numbers, such as 1 and 200, packets whose destination ports fall into 1 and 200 meet the traffic classification rule.
    
-   If you enter two port numbers and one of them is -1, the other port number must also be -1. In this case, all packets meet the traffic classification rule.
    

You can create up to 50 traffic classification rules in each call. You can specify a destination port range for each traffic classification rule.

80

SrcCidr

string

No

The source CIDR block of packets. IPv6 and IPv4 addresses are supported.

Packets whose source IP addresses fall into the specified source CIDR block meet the traffic classification rule. If you do not specify a source CIDR block, all packets meet the traffic classification rule.

You can create up to 50 traffic classification rules in each call. You can specify a source CIDR block for each traffic classification rule.

192.168.10.0/24

SrcPortRange

array

No

The source port range that is used to match packets. Valid values: **\-1** and **1** to **65535**.

Packets whose source ports fall within the source port range meet the traffic classification rule. If you do not specify a source port range, all packets meet the traffic classification rule.

You can enter up to two port numbers. Take note of the following rules:

-   If you enter only one port number, such as 1, packets whose source port is 1 meet the traffic classification rule. A value of -1 specifies all source ports.
    
-   If you enter two port numbers, such as 1 and 200, packets whose source ports fall into 1 and 200 meet the traffic classification rule.
    
-   If you enter two port numbers and one of them is -1, the other port number must also be -1. In this case, all packets meet the traffic classification rule.
    

You can create up to 50 traffic classification rules in each call. You can specify a source port range for each traffic classification rule.

integer

No

The source port range that is used to match packets. Valid values: **\-1** and **1** to **65535**.

Packets whose source ports fall within the source port range meet the traffic classification rule. If you do not specify a source port range, all packets meet the traffic classification rule.

You can enter up to two port numbers. Take note of the following rules:

-   If you enter only one port number, such as 1, packets whose source port is 1 meet the traffic classification rule.
    
-   If you enter two port numbers, such as 1 and 200, packets whose source ports fall into 1 and 200 meet the traffic classification rule.
    
-   If you enter two port numbers and one of them is -1, the other port number must also be -1. In this case, all packets meet the traffic classification rule.
    

You can create up to 50 traffic classification rules in each call. You can specify a source port range for each traffic classification rule.

1

TrafficMatchRuleName

string

No

The name of the traffic classification rule.

You can create up to 50 traffic classification rules in each call. You can specify a name for each traffic classification rule.

The name can be empty or 1 to 128 characters in length, and cannot start with http:// or https://.

nametest

AddressFamily

string

No

The address family. You can set the value to IPv4 or IPv6, or leave the value empty.

IPv4

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response.

TrafficMarkingPolicyId

string

The ID of the traffic marking policy.

tm-u9nxup5kww5po8\*\*\*\*

RequestId

string

The ID of the request.

0876E54E-3E36-5C31-89F0-9EE8A9266F9A

## Examples

Success response

`JSON` format

```
{
  "TrafficMarkingPolicyId": "tm-u9nxup5kww5po8****",
  "RequestId": "0876E54E-3E36-5C31-89F0-9EE8A9266F9A"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidTransitRouterId.NotFound

TransitRouterId is not found.

The error message returned because the ID of the transit router does not exist.

400

IllegalParam.Protocol

Protocol is illegal.

The error message returned because the specified protocol is invalid.

400

OperationFailed.TransitRouterType

Operation failed because The Basic TransitRouter does not support this action.

The error message returned because this operation is not supported by Basic Edition transit routers.

400

IllegalParam.Priority

Priority is illegal.

The error message returned because the specified priority is invalid.

400

IllegalParam.MarkingDscp

MarkingDscp is illegal.

The error message returned because the MarkingDscp parameter is set to an invalid value.

400

IllegalParam.SrcCidr

SrcCidr is illegal.

The error message returned because the specified source CIDR block is invalid.

400

IllegalParam.DstCidr

DstCidr is illegal.

The error message returned because the specified destination CIDR block (DstCidr) is invalid.

400

Duplicated.Priority

The parameter Priority is duplicated.

The error message returned because duplicate priorities are specified.

400

Duplicated.MarkingDscp

The parameter MarkingDscp is duplicated.

The error message returned because the MarkingDscp parameter specifies duplicate descriptions.

400

Duplicated.TrafficMatchRules

The parameter TrafficMatchRules are duplicated.

The error message returned because the traffic match rules (TrafficMatchRules) are duplicate.

400

QuotaExceeded.TrafficMatchRule

The maximum number of TrafficMatchRule per Transit Router is exceeded.

The number of flow classification rules supported by each forwarding router instance exceeds the limit. You can submit a work order to increase the quota.

400

IllegalParam.MatchDscp

MarkingDscp is invalid.

MarkingDscp parameter is illegal.

400

IllegalParam.SrcPortRange

The specified SrcPortRange is illegal.

400

IllegalParam.DstPortRange

The specified DstPortRange is illegal.

The specified DstPortRange is illegal.

400

AttrMismatching.CidrAddressFamily

Attribute SrcCidr or DstCidr of TrafficMarkRule does not match AddressFamily.

Attribute SrcCidr or DstCidr of TrafficMarkRule does not match AddressFamily.

400

IllegalParam.AddressFamily

AddressFamily is illegal.

The AddressFamily value of the request parameter is invalid. Valid values are IPv4 or IPv6.

400

AttrMismatching.SrcCidrDstCidr

Attribute SrcCidr of TrafficMarkRule does not match DstCidr.

Attribute SrcCidr of TrafficMarkRule does not match DstCidr.

400

AttrMismatching.CidrProtocol

Attribute SrcCidr or DstCidr of TrafficMarkRule does not match Protocol.

Attribute SrcCidr or DstCidr of TrafficMarkRule does not match Protocol.

400

InvalidTransitRouterMode.NeedUpgrade

TransitRouter need to upgrade.

The error message returned because the specified transit router mode is not supported.

400

OperationUnsupported.DstPortRange

Current TR version does not support setting destination port range.

Current TR version does not support setting destination port range.

400

OperationUnsupported.SrcPortRange

Current TR version does not support setting source port range.

Current TR version does not support setting source port range

400

OperationUnsupported.IPv6Cidr

The traffic marking policy for current TR type does not support IPv6 CIDR.

The flow classification rules in the flow marking policy of the basic version forwarding router do not support IPv6 network segments.

400

IncorrectStatus.TransitRouterInstance

The status of TransitRouter is incorrect.

The error message returned because the transit router is in an invalid state.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

MissingParam.TransitRouterId

The parameter TransitrouterId is mandatory.

The error message returned because the TransitRouterId parameter is not set.

400

OperationUnsupported.TransitRouterType

The specified TransitRouterType does not support the operation.

The error message returned because this operation is not supported by the specified type of transit router.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/CreateTrafficMarkingPolicy#workbench-doc-change-demo) for a complete list.
