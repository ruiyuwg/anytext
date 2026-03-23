Initiates a task for analyzing network reachability.

## Operation description

You can call this operation to initiate a task for analyzing network reachability by specifying only the information about the source and destination. You do not need to create a network path for reachability analysis. The analysis result is not recorded in the system. If you want to record the path parameters and analysis result in the Network Intelligence Service (NIS) console, we recommend that you call the **createNetworkReachableAnalysis** operation.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/nis/2021-12-16/CreateAndAnalyzeNetworkPath)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/nis/2021-12-16/CreateAndAnalyzeNetworkPath)

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

nis:CreateAndAnalyzeNetworkPath

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

SourceId

string

Yes

The ID of the source resource.

i-uf62y8khhbkbdrp6\*\*\*\*

SourceIpAddress

string

No

The source IP address.

192.168.XX.XX

TargetIpAddress

string

No

The destination IP address.

172.50.XX.XX

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

SourcePort

integer

No

The source port.

0

TargetId

string

No

The ID of the destination resource.

i-m5eactvw7wtpktv5\*\*\*\*

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

RegionId

string

No

The ID of the region for which you want to initiate a task for analyzing network reachability.

cn-shanghai

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The request ID.

D5E98683-355B-5867-8D3D-A24755F6895B

NetworkReachableAnalysisId

string

The ID of the task for analyzing network reachability that you initiated.

nra-dfe9e53d2b524568\*\*\*\*

SourceId

string

The ID of the source resource.

i-uf62y8khhbkbdrp6\*\*\*\*

TargetId

string

The ID of the destination resource.

i-m5eactvw7wtpktv5\*\*\*\*

SourceType

string

The type of the source resource.

ecs

TargetType

string

The type of the destination resource.

ecs

SourcePort

string

The source port.

0

TargetPort

string

The destination port.

80

Protocol

string

The protocol type.

tcp

SourceIpAddress

string

The source IP address.

192.168.XX.XX

TargetIpAddress

string

The destination IP address.

172.50.XX.XX

## Examples

Success response

`JSON` format

```
{
  "RequestId": "D5E98683-355B-5867-8D3D-A24755F6895B",
  "NetworkReachableAnalysisId": "nra-dfe9e53d2b524568****",
  "SourceId": "i-uf62y8khhbkbdrp6****",
  "TargetId": "i-m5eactvw7wtpktv5****",
  "SourceType": "ecs",
  "TargetType": "ecs",
  "SourcePort": "0",
  "TargetPort": "80",
  "Protocol": "tcp",
  "SourceIpAddress": "192.168.XX.XX",
  "TargetIpAddress": "172.50.XX.XX"
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

IllegalParam.SourceIp

Please enter a valid source IP.

Please enter a valid source IP

400

IllegalParam.SourceType

The specified source type (%s) is invalid.

400

IllegalParam.Protocol

The specified Protocol(%s) is invalid.

The Protocol(%s) parameter is invalid.

400

IllegalParam.TargetType

The specified target type (%s) is invalid.

The specified destination type () is invalid.

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

See [Release Notes](https://api.alibabacloud.com/document/nis/2021-12-16/CreateAndAnalyzeNetworkPath#workbench-doc-change-demo) for a complete list.
