This operation queries a list of endpoint groups.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ga/2019-11-20/ListEndpointGroups)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ga/2019-11-20/ListEndpointGroups)

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

ga:ListEndpointGroups

list

\*EndpointGroup

`acs:ga:{#regionId}:{#accountId}:endpointgroup/*`

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

Yes

The region ID of the Alibaba Cloud Global Accelerator (GA) instance. Set the value to **cn-hangzhou**.

cn-hangzhou

PageNumber

integer

No

The page number. Default value: **1**.

1

PageSize

integer

No

The number of entries per page. Maximum value: **50**. Default value: **10**.

10

AcceleratorId

string

Yes

The ID of the GA instance.

ga-bp1odcab8tmno0hdq\*\*\*\*

ListenerId

string

No

The ID of the listener.

lsr-bp1bpn0kn908w4nbw\*\*\*\*

EndpointGroupType

string

No

The type of the endpoint group. Valid values:

-   **default**: a default endpoint group.
    
-   **virtual**: a virtual endpoint group.
    
-   If you leave this parameter empty, both default and virtual endpoint groups are queried.
    

virtual

AccessLogSwitch

string

No

Specifies whether to enable the access log feature. Valid values:

-   **on**: enables the access log feature.
    
-   **off** (default): disables the access log feature.
    

on

EndpointGroupId

string

No

The ID of the endpoint group.

epg-bp16jdc00bhe97sr5\*\*\*\*

Tag

array<object>

No

The tags of the endpoint group.

object

No

The tags of the endpoint group.

Key

string

No

The tag key of the endpoint group. The tag key cannot be an empty string.

The tag key can be up to 64 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

You can specify up to 20 tag keys.

test-key

Value

string

No

The tag value of the endpoint group. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

You can specify up to 20 tag values.

test-value

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The list of returned information.

TotalCount

integer

The total number of entries returned.

1

PageSize

integer

The number of entries per page.

10

RequestId

string

The request ID.

A052D49E-CCC2-41DB-816C-DC3381503194

PageNumber

integer

The page number.

1

EndpointGroups

array<object>

The configurations of the endpoint groups.

array<object>

The configurations of the endpoint groups.

EndpointGroupId

string

The ID of the endpoint group.

epg-bp16jdc00bhe97sr5\*\*\*\*

EndpointGroupIpList

array

The list of public IP addresses of the endpoint group.

string

The list of public IP addresses of the endpoint group.

47.1.XX.XX

EndpointGroupUnconfirmedIpList

array

The list of endpoint group IP addresses that are pending confirmation after the GA instance is upgraded.

string

The list of endpoint group IP addresses that are pending confirmation after the GA instance is upgraded.

47.1.XX.XX

State

string

The status of the endpoint group.

-   **init**: The endpoint group is being initialized.
    
-   **active**: The endpoint group is running.
    
-   **updating**: The endpoint group is being updated.
    
-   **deleting**: The endpoint group is being deleted.
    

active

HealthCheckPath

string

The path for health checks.

/healthcheck

EndpointGroupRegion

string

The ID of the region where the endpoint group is deployed.

cn-hangzhou

HealthCheckIntervalSeconds

integer

The interval between two consecutive health checks. Unit: seconds.

3

TrafficPercentage

integer

The traffic distribution ratio. If a listener is associated with multiple endpoint groups, traffic is distributed to the endpoint groups based on the specified ratios.

100

HealthCheckProtocol

string

The protocol that is used for health checks.

-   **tcp** or **TCP**: TCP.
    
-   **http** or **HTTP**: HTTP.
    
-   **https** or **HTTPS**: HTTPS.
    

tcp

ThresholdCount

integer

The number of consecutive health check failures that must occur before an endpoint is considered unhealthy.

3

ListenerId

string

The ID of the listener.

lsr-bp1bpn0kn908w4nbw\*\*\*\*

AcceleratorId

string

The ID of the GA instance.

ga-bp1odcab8tmno0hdq\*\*\*\*

EndpointConfigurations

array<object>

The configurations of the endpoints.

object

The configurations of the endpoints.

Type

string

The type of endpoint.

-   **Domain**: a custom domain name.
    
-   **Ip**: a custom IP address.
    
-   **IpTarget**: a custom private IP address.
    
-   **PublicIp**: an Alibaba Cloud public IP address.
    
-   **ECS**: an Alibaba Cloud ECS instance.
    
-   **SLB**: an Alibaba Cloud SLB instance.
    
-   **ALB**: an Alibaba Cloud ALB instance.
    
-   **OSS**: an Alibaba Cloud OSS bucket.
    
-   **ENI**: an Alibaba Cloud Elastic Network Interface (ENI).
    
-   **NLB**: an Alibaba Cloud NLB instance.
    

Ip

EnableClientIPPreservation

boolean

Indicates whether the client IP address preservation feature is enabled.

-   **true**: The client IP address preservation feature is enabled.
    
-   **false**: The client IP address preservation feature is disabled.
    

false

Weight

integer

The weight of the endpoint.

20

ProbeProtocol

string

The protocol that is used to probe the latency.

-   **icmp**: ICMP.
    
-   **tcp**: TCP.
    

tcp

Endpoint

string

The IP address, domain name, or instance ID of the endpoint.

47.1.XX.XX

EnableProxyProtocol

boolean

Indicates whether the Proxy Protocol is used to preserve client IP addresses.

-   **true**: The Proxy Protocol is used to preserve client IP addresses.
    
-   **false**: The Proxy Protocol is not used to preserve client IP addresses.
    

ProbePort

integer

The port that is used to probe the latency.

80

EndpointId

string

The ID of the endpoint.

ep-bp1d2utp8qqe2a44t\*\*\*\*

SubAddress

string

The private IP address of the ENI.

172.168.XX.XX

VpcId

string

The ID of the virtual private cloud (VPC).

vpc-8vbhucmd5b2q2fpqqu\*\*\*\*

VSwitchIds

array

The list of vSwitches in the VPC.

string

The ID of the vSwitch.

vsw-hp3xwc2aebg2u30ln\*\*\*\*

PortOverrides

array<object>

The port mapping.

object

The port mapping.

ListenerPort

integer

The listener port.

443

EndpointPort

integer

The endpoint port.

80

ForwardingRuleIds

array

The ID of the forwarding rule that is associated with the endpoint group.

string

The ID of the forwarding rule that is associated with the endpoint group.

frule-bp19a3t3yzr21q3\*\*\*\*

EndpointGroupType

string

The type of the endpoint group.

-   **default**: a default endpoint group.
    
-   **virtual**: a virtual endpoint group.
    

default

EndpointRequestProtocol

string

The protocol of the backend service.

-   **HTTP**: HTTP.
    
-   **HTTPS**: HTTPS.
    

HTTP

EndpointProtocolVersion

string

The version of the backend service protocol.

-   **HTTP1.1**: HTTP/1.1.
    
-   **HTTP2**: HTTP/2.
    

HTTP1.1

Description

string

The description of the endpoint group.

group1

Name

string

The name of the endpoint group.

group1

HealthCheckPort

integer

The port that is used for health checks.

10

HealthCheckEnabled

boolean

Indicates whether health checks are enabled.

-   **true**: Health checks are enabled.
    
-   **false**: Health checks are disabled.
    

true

ServiceId

string

The ID of the service that is associated with the managed instance.

**Note**

This parameter is returned only if **ServiceManaged** is set to **True**.

ALB

ServiceManaged

boolean

Indicates whether the instance is a managed instance. Valid values:

-   **true**: The instance is a managed instance.
    
-   **false**: The instance is not a managed instance.
    

true

ServiceManagedInfos

array<object>

The actions that you can perform on the managed instance.

**Note**

-   This parameter is returned only if **ServiceManaged** is set to **True**.
    
-   If the instance is managed, you cannot perform some operations on the instance.
    

object

The actions that you can perform on the managed instance.

Action

string

The name of the action on the managed instance.

-   **Create**: creates an instance.
    
-   **Update**: updates the current instance.
    
-   **Delete**: deletes the current instance.
    
-   **Associate**: associates the instance with another instance.
    
-   **UserUnmanaged**: disassociates the instance from a service.
    
-   **CreateChild**: creates a child resource in the instance.
    

Update

ChildType

string

The type of the child resource.

-   **Listener**: a listener.
    
-   **IpSet**: an acceleration region.
    
-   **EndpointGroup**: an endpoint group.
    
-   **ForwardingRule**: a forwarding rule.
    
-   **Endpoint**: an endpoint.
    
-   **EndpointGroupDestination**: a protocol mapping of an endpoint group that is associated with a custom routing listener.
    
-   **EndpointPolicy**: a traffic policy of an endpoint that is associated with a custom routing listener.
    

**Note**

This parameter is returned only if **Action** is set to **CreateChild**.

Listener

IsManaged

boolean

Indicates whether the specified action is managed. Valid values:

-   **true**: The specified action is managed. You cannot perform the specified action on the managed instance.
    
-   **false**: The specified action is not managed. You can perform the specified action on the managed instance.
    

false

Tags

array<object>

The tags of the endpoint group.

object

The tags of the endpoint group.

Key

string

The tag key of the endpoint group.

test-key

Value

string

The tag value of the endpoint group.

test-value

HealthCheckHost

string

The domain name that is used for health checks.

www.taobao.com

EndpointIpVersion

string

The IP protocol of the backend service. Valid values:

-   **IPv4** (default): GA communicates with the endpoint service using IPv4 addresses.
    
-   **IPv6**: GA communicates with the endpoint service using IPv6 addresses.
    
-   **ProtocolAffinity**: The IP protocol that GA uses to communicate with the endpoint service is the same as the IP protocol that the client uses to send requests.
    

IPv4

EndpointPrivateIpList

array<object>

The list of private IP addresses of the backend service.

object

PrivateIp

string

The private IP address.

172.19.115.37

VSwitchId

string

The ID of the vSwitch in the VPC.

gsw-0jl6tmriqep1ga\*\*\*

CIDR

string

## Examples

Success response

`JSON` format

```
{
  "TotalCount": 1,
  "PageSize": 10,
  "RequestId": "A052D49E-CCC2-41DB-816C-DC3381503194\t",
  "PageNumber": 1,
  "EndpointGroups": [
    {
      "EndpointGroupId": "epg-bp16jdc00bhe97sr5****",
      "EndpointGroupIpList": [
        "47.1.XX.XX"
      ],
      "EndpointGroupUnconfirmedIpList": [
        "47.1.XX.XX"
      ],
      "State": "active",
      "HealthCheckPath": "/healthcheck",
      "EndpointGroupRegion": "cn-hangzhou",
      "HealthCheckIntervalSeconds": 3,
      "TrafficPercentage": 100,
      "HealthCheckProtocol": "tcp",
      "ThresholdCount": 3,
      "ListenerId": "lsr-bp1bpn0kn908w4nbw****",
      "AcceleratorId": "ga-bp1odcab8tmno0hdq****",
      "EndpointConfigurations": [
        {
          "Type": "Ip",
          "EnableClientIPPreservation": false,
          "Weight": 20,
          "ProbeProtocol": "tcp",
          "Endpoint": "47.1.XX.XX",
          "EnableProxyProtocol": false,
          "ProbePort": 80,
          "EndpointId": "ep-bp1d2utp8qqe2a44t****",
          "SubAddress": "172.168.XX.XX",
          "VpcId": "vpc-8vbhucmd5b2q2fpqqu****",
          "VSwitchIds": [
            "vsw-hp3xwc2aebg2u30ln****"
          ]
        }
      ],
      "PortOverrides": [
        {
          "ListenerPort": 443,
          "EndpointPort": 80
        }
      ],
      "ForwardingRuleIds": [
        "frule-bp19a3t3yzr21q3****"
      ],
      "EndpointGroupType": "default",
      "EndpointRequestProtocol": "HTTP",
      "EndpointProtocolVersion": "HTTP1.1",
      "Description": "group1",
      "Name": "group1",
      "HealthCheckPort": 10,
      "HealthCheckEnabled": true,
      "ServiceId": "ALB",
      "ServiceManaged": true,
      "ServiceManagedInfos": [
        {
          "Action": "Update",
          "ChildType": "Listener",
          "IsManaged": false
        }
      ],
      "Tags": [
        {
          "Key": "test-key",
          "Value": "test-value"
        }
      ],
      "HealthCheckHost": "www.taobao.com",
      "EndpointIpVersion": "IPv4",
      "EndpointPrivateIpList": [
        {
          "PrivateIp": "172.19.115.37",
          "VSwitchId": "gsw-0jl6tmriqep1ga***",
          "CIDR": ""
        }
      ]
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

NoPermission

No permissions.

No permissions.

500

UnknownError

An error occurred while processing your request. Please try again. If the error persists, please submit a ticket.

An error occurred while the request was being processed. Try again later.

See [Error Codes](https://api.alibabacloud.com/document/Ga/2019-11-20/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ga/2019-11-20/ListEndpointGroups#workbench-doc-change-demo) for a complete list.
