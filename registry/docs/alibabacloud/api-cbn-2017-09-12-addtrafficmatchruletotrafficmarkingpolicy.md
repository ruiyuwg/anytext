Adds a traffic classification rule to a traffic marking policy.

## Operation description

**AddTrafficMatchRuleToTrafficMarkingPolicy** is an asynchronous operation. After you send a request, the system returns a **request ID** and runs the task in the background. You can call the **ListTrafficMarkingPolicies** operation to query the status of a traffic classification rule.

-   If a traffic classification rule is in the **Creating** state, the traffic classification rule is being created. In this case, you can query the traffic classification rule but cannot perform other operations.
    
-   If a traffic classification rule is in the **Active** state, the traffic classification rule is added to the traffic marking policy.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cbn/2017-09-12/AddTrafficMatchRuleToTrafficMarkingPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cbn/2017-09-12/AddTrafficMatchRuleToTrafficMarkingPolicy)

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

cen:AddTrafficMatchRuleToTrafficMarkingPolicy

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

You can use the client to generate the value, but you must make sure that it is unique among different requests. The token can contain only ASCII characters.

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

TrafficMarkingPolicyId

string

Yes

The ID of the traffic marking policy.

tm-u9nxup5kww5po8\*\*\*\*

TrafficMatchRules

array<object>

No

The traffic classification rules.

You can add at most 50 traffic classification rules in each call.

object

No

The information about the traffic classification rule.

MatchDscp

integer

No

The Differentiated Services Code Point (DSCP) value that is used to match packets. Valid values: **0** to **63**.

Packets that carry the specified DSCP value are considered a match. If you do not specify a DSCP value, packets are considered a match regardless of the DSCP value.

**Note**

The DSCP value that you specify for this parameter is the DSCP value that packets carry before they are transmitted over the inter-region connection.

5

DstCidr

string

No

The destination CIDR block that is used to match packets.

Packets whose destination IP addresses fall into the specified destination CIDR block are considered a match. If you do not specify a destination CIDR block, packets are considered a match regardless of the destination IP address.

10.10.10.0/24

TrafficMatchRuleDescription

string

No

The description of the traffic classification rule.

This parameter is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:// or https://.

desctest

Protocol

string

No

The protocol that is used to match packets.

Traffic classification rules support the following protocols: **HTTP**, **HTTPS**, **TCP**, **UDP**, **SSH**, and **Telnet**. For more information, log on to the [Cloud Enterprise Network (CEN) console](https://cen.console.alibabacloud.com/cen/list).

**Some protocols use a specific port. Click to view protocols and ports.**

-   If the protocol is **ICMP**, set the destination port to **\-1**.
    
-   If the protocol is **GRE**, set the destination port to **\-1**.
    
-   If the protocol is **SSH**, set the destination port to **22**.
    
-   If the protocol is **Telnet**, set the destination port to **23**.
    
-   If the protocol is **HTTP**, set the destination port to **80**.
    
-   If the protocol is **HTTPS**, set the destination port to **443**.
    
-   If the protocol is **MS SQL**, set the destination port to **1443**.
    
-   If the protocol is **Oracle**, set the destination port to **1521**.
    
-   If the protocol is **Mysql**, set the destination port to **3306**.
    
-   If the protocol is **RDP**, set the destination port to **3389**.
    
-   If the protocol is **Postgre SQL**, set the destination port to **5432**.
    
-   If the protocol is **Redis**, set the destination port to **6379**.
    

HTTP

DstPortRange

array

No

The destination port range that is used to match packets. Valid values: **\-1** and **1** to **65535**.

Packets whose destination ports fall into the specified destination port range are considered a match. If you do not specify destination port range, packets are considered a match regardless of the destination port.

You can specify at most two port numbers for this parameter. Take note of the following rules:

-   If you enter only one port number, such as 1, packets whose destination port is 1 are considered a match. A value of -1 specifies all destination ports.
    
-   If you enter two port numbers, such as 1 and 200, packets whose destination ports fall into 1 and 200 are considered a match.
    
-   If you enter two port numbers and one of them is -1, the other port must also be -1. In this case, packets are considered a match regardless of the destination port.
    

integer

No

The destination port range that is used to match packets. Valid values: **\-1** and **1** to **65535**.

Packets whose destination ports fall into the specified destination port range are considered a match. If you do not specify a destination port range, packets are considered a match regardless of the destination port.

You can enter at most two port numbers. Take note of the following rules:

-   If you enter only one port number, such as 1, packets whose destination port is 1 are considered a match.
    
-   If you enter two port numbers, such as 1 and 200, packets whose destination ports fall into 1 and 200 are considered a match.
    
-   If you enter two port numbers and one of them is -1, the other port number must also be -1. In this case, packets are considered a match regardless of the destination port.
    

80

SrcCidr

string

No

The source CIDR block that is used to match packets.

Packets whose source IP addresses fall into the specified source CIDR block are considered a match. If you do not specify a source CIDR block, packets are considered a match regardless of the source IP address.

192.168.10.0/24

AddressFamily

string

No

The address family. You can set the value to IPv4 or IPv6, or leave the value empty.

IPv4

SrcPortRange

array

No

The source port range that is used to match packets. Valid values: **\-1** and **1** to **65535**.

Packets whose source ports fall into the specified source port range are considered a match. If you do not specify a source port range, packets are considered a match regardless of the source port.

You can enter at most two port numbers. Take note of the following rules:

-   If you enter only one port number, such as 1, packets whose source port is 1 are considered a match. A value of -1 specifies all source ports.
    
-   If you enter two port numbers, such as 1 and 200, packets whose source ports fall into 1 and 200 are considered a match.
    
-   If you enter two port numbers and one of them is -1, the other port number must also be -1. In this case, packets are considered a match regardless of the source port.
    

integer

No

The source port range that is used to match packets. Valid values: **\-1** and **1** to **65535**.

Packets whose source ports fall into the specified source port range are considered a match. If you do not specify a source port range, packets are considered a match regardless of the source port.

You can enter at most two port numbers. Take note of the following rules:

-   If you enter only one port number, such as 1, packets whose source port is 1 are considered a match.
    
-   If you enter two port numbers, such as 1 and 200, packets whose source ports fall into 1 and 200 are considered a match.
    
-   If you enter two port numbers and one of them is -1, the other port number must also be -1. In this case, packets are considered a match regardless of the source port.
    

200

TrafficMatchRuleName

string

No

The name of the traffic classification rule.

The name is optional. If you enter a name, it must be 1 to 128 characters in length, and cannot start with http:// or https://.

nametest

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The response.

RequestId

string

The ID of the request.

0876E54E-3E36-5C31-89F0-9EE8A9266F9A

## Examples

Success response

`JSON` format

```
{
  "RequestId": "0876E54E-3E36-5C31-89F0-9EE8A9266F9A"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

InvalidTrafficMarkingPolicyId.NotFound

Operation is failed because traffic marking policy id is not found.

The error message returned because the specified traffic marking policy ID (TrafficMarkingPolicyId) does not exist.

400

IllegalParam.SrcCidr

The specified SrcCidr is invalid.

The error message returned because the specified source CIDR block is invalid.

400

IncorrectStatus.TrafficMarkingPolicy

The status of TrafficMarkingPolicy is incorrect.

The error message returned because the status of the traffic marking policy does not support this operation. Try again later.

400

IllegalParam.DstCidr

The specified DstCidr is invalid.

The error message returned because the specified destination CIDR block (DstCidr) is invalid.

400

IllegalParam.Protocol

The specified Protocol is invalid.

The error message returned because the specified protocol is invalid.

400

Duplicated.TrafficMatchRules

The parameter AddTrafficMatchRules are duplicated.

400

InstanceExist.TrafficMatchRules

The instance already exists.

The error message returned because the specified traffic match rules (TrafficMatchRules) already exist.

400

MissingParam.TrafficMatchRules

The parameter TrafficMatchRules is empty.

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

OperationUnsupported.SrcPortRange

Current TR version does not support setting source port range.

Current TR version does not support setting source port range

400

OperationUnsupported.DstPortRange

Current TR version does not support setting destination port range.

Current TR version does not support setting destination port range.

400

OperationUnsupported.IPv6Cidr

The traffic marking policy for current TR type does not support IPv6 CIDR.

The flow classification rules in the flow marking policy of the basic version forwarding router do not support IPv6 network segments.

400

InvalidParameter

Invalid parameter.

The error message returned because the parameter is set to an invalid value.

400

Unauthorized

The AccessKeyId is unauthorized.

The error message returned because you do not have the permissions to perform this operation.

400

MissingParam.TrafficMarkingPolicyId

The parameter TrafficMarkingPolicyId is mandatory.

See [Error Codes](https://api.alibabacloud.com/document/Cbn/2017-09-12/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cbn/2017-09-12/AddTrafficMatchRuleToTrafficMarkingPolicy#workbench-doc-change-demo) for a complete list.
