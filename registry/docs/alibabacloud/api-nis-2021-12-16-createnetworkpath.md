Creates a network path for reachability analysis.

## Operation description

-   You can call the **CreateNetworkPath** operation to create network paths in multiple networking scenarios and between multiple resources. After a path is created, the path parameters are saved for repeated analysis.
    
-   You can create up to 100 network paths within one Alibaba Cloud account.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/nis/2021-12-16/CreateNetworkPath)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/nis/2021-12-16/CreateNetworkPath)

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

nis:CreateNetworkPath

create

\*NetworkPath

`acs:nis:*:{#accountId}:networkpath/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

No

The region ID of the network path that you want to create.

cn-hangzhou

NetworkPathName

string

Yes

The name of the network path.

ecs2PublicIp

SourceId

string

Yes

The ID of the source resource.

i-2zef4ngqfarepyun\*\*\*\*

SourceType

string

Yes

The type of the source resource. Valid values:

-   **ecs**: the Elastic Compute Service (ECS) instance
    
-   **internetIp**: the public IP address
    
-   **vsw**: the vSwitch
    
-   **vpn**: the VPN gateway
    
-   **vbr**: the virtual border router (VBR)
    

ecs

SourceIpAddress

string

No

The source IP address.

172.17.XX.XX

SourcePort

integer

No

The source port.

443

TargetId

string

No

The ID of the destination resource.

i-bp13d0e064gubm\*\*\*\*

TargetType

string

No

The type of the destination resource. Valid values:

-   **ecs**: the ECS instance
    
-   **internetIp**: the public IP address
    
-   **vsw**: the vSwitch
    
-   **vpn**: the VPN gateway
    
-   **vbr**: the VBR
    
-   **clb**: the Classic Load Balancer (CLB) instance
    

ecs

TargetIpAddress

string

No

The destination IP address.

192.168.XX.XX

TargetPort

integer

No

The destination port.

80

Protocol

string

No

The protocol type. Valid values:

-   **tcp**: Transmission Control Protocol (TCP)
    
-   **udp**: User Datagram Protocol (UDP)
    
-   **icmp**: Internet Control Message Protocol (ICMP)
    

tcp

NetworkPathDescription

string

No

The description of the network path.

Analyze path from ECS to ECS

Tag

array<object>

No

The tags to add to the resource.

object

No

Key

string

No

The key of tag N to add to the resource. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.

You can add up to 20 tags in each call.

role

Value

string

No

The value of tag N to add to the resource. You can specify up to 20 tag values. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

ops

ResourceGroupId

string

No

The resource group ID.

rg-acfm27qsxjj\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

NetworkPathId

string

The ID of the network path.

np-4cbf598673d14d27\*\*\*\*

RequestId

string

The request ID.

92DD9FFB-06FB-56F7-83EF-5CEF98F5562A

## Examples

Success response

`JSON` format

```
{
  "NetworkPathId": "np-4cbf598673d14d27****",
  "RequestId": "92DD9FFB-06FB-56F7-83EF-5CEF98F5562A"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IllegalParam.InternetIP

The specified IP address (%s) is not an internet IP address.

The specified IP address (%s) is not a public IP address. The IP address must not fall within the following ranges: 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255, or 192.168.0.0 to 192.168.255.255.

400

IllegalParam.IP

The specified IP address (%s) is invalid.

The specified IP address (%s) is invalid.

400

QuotaExceeded.NetworkPath

The quota of %s is exceeded, usage %s/%s.

The specified number of network paths exceeds the upper limit. Usage: %s/%s.

400

ResourceAlreadyExist.NetworkPath

The specified resource of %s already exists.

The specified network path configuration %s already exists.

400

Mismatch.SourceIdAndTargetId

Reachability Analyzer does not support the scenario in which source and target Internet IP addresses and ECS instance ID (%s and %s) are bound.

Reachability Analyzer does not support the scenario in which the public IP addresses of the source and destination are associated with the ECS instance (%s and %s).

400

IllegalParam.SourceAndTargetInternetIp

Both source ID and target ID are IP addresses, but are not Internet IP addresses. Reachability Analyzer does not support the scenario.

Both the source and destination are IP addresses, but not Alibaba Cloud public IP addresses. Reachability Analyzer supports only Alibaba Cloud public IP addresses.

400

IllegalParam.SourcePort

The specified SourcePort(%s) value is invalid. The value must be within the range of (0,65536\].

The value of SourcePort is invalid. Valid values: 0 to 65536.

400

IllegalParam.TargetPort

The specified TargetPort(%s) value is invalid. The value must be within the range of (0,65536\].

The value of TargetPort is invalid. Valid values: 0 to 65536.

400

IllegalParam.SourceId

The specified SourceId(%s) may be not exist.

The specified instance (%s) may not exist. Check the spelling.

400

IllegalParam.TargetId

The specified TargetId(%s) may be not exist.

The specified instance (%s) may not exist. Check the spelling.

400

MissingParameter.TagValue

You must specify Tag.N.Value.

400

NumberExceed.Tags

The maximum number of Tags is exceeded.

400

Duplicate.TagKey

The Tag.N.Key contains duplicate keys.

400

MissingParameter.TagKey

You must specify Tag.N.Key.

400

InvalidParameter.TagKey

The Tag.N.Key parameter is invalid.

400

InvalidParameter.TagValue

The Tag.N.Value parameter is invalid.

400

IllegalParam.SourceIp

Please enter a valid source IP.

Please enter a valid source IP

400

IllegalParam.Protocol

The specified Protocol(%s) is invalid.

The Protocol(%s) parameter is invalid.

400

IllegalParam.TargetType

The specified target type (%s) is invalid.

The specified destination type () is invalid.

400

IllegalParam.SourceType

The specified source type (%s) is invalid.

400

IllegalParam.TargetIp

The specified target ip (%s) is invalid.

The specified destination IP() is not in the correct format.

400

IllegalParam.NotSupportHaVpn

The specified VPN(%s), which is not currently supported for such instances.

The specified VPN(), which is not currently supported for such instances.

400

IllegalParam.SourceNotBound

Elastic public network IP(%s) is not bound to resources, and analysis is not supported for the time being.

Elastic public network IP() is not bound to resources, and analysis is not supported for the time being.

400

IllegalParam.TargetNotBound

Elastic public network IP(%s) is not bound to resources, and analysis is not supported for the time being.

400

IllegalParam.NotPublicIp

The specified (%s) is invalid.

The specified parameter is illegal.

400

IllegalParam.SourceEqualTarget

The specified source and destination are identical, which is not supported for analysis.

The specified source and destination are the same, and analysis is not supported.

400

IllegalParam.TypeAndIdMismatch

The specified instanceId (%s) and type do not match.

The specified instanceId and its type do not match.

403

Forbidden.NetworkPath

The current user has not activated NIS and is not authorized to use the path analysis interface.

The current user has not activated NIS and is not authorized to use the path analysis interface.

See [Error Codes](https://api.alibabacloud.com/document/nis/2021-12-16/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/nis/2021-12-16/CreateNetworkPath#workbench-doc-change-demo) for a complete list.
