Returns the details of a specified endpoint group.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ga/2019-11-20/DescribeEndpointGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ga/2019-11-20/DescribeEndpointGroup)

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

ga:DescribeEndpointGroup

get

\*EndpointGroup

`acs:ga:{#regionId}:{#accountId}:endpointgroup/{#endpointGroupId}`

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

EndpointGroupId

string

Yes

The ID of the endpoint group to query.

epg-bp14sz7ftcwwjgrdm\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned information.

HealthCheckIntervalSeconds

integer

The interval at which health checks are performed. Unit: seconds.

3

TrafficPercentage

integer

The percentage of traffic that is distributed to the endpoint group when a listener is associated with multiple endpoint groups.

100

EndpointGroupId

string

The endpoint group ID.

epg-bp14sz7ftcwwjgrdm\*\*\*\*

Description

string

The description of the endpoint group.

group1

EndpointGroupIpList

array

The list of active endpoint IP addresses in the endpoint group.

string

The list of active endpoint IP addresses in the endpoint group.

101.XX.XX.22

EndpointGroupUnconfirmedIpList

array

The list of endpoint IP addresses in the endpoint group that are pending confirmation after the GA instance is upgraded.

string

The list of endpoint IP addresses in the endpoint group that are pending confirmation after the GA instance is upgraded.

101.XX.XX.22

RequestId

string

The request ID.

6FEA0CF3-D3B9-43E5-A304-D217037876A8

HealthCheckPath

string

The path for health checks.

/healthcheck

ThresholdCount

integer

The number of consecutive health check failures that must occur before an endpoint is considered unhealthy.

3

Name

string

The name of the endpoint group.

group1

EndpointGroupRegion

string

The ID of the region where the endpoint group is deployed.

cn-hangzhou

State

string

The status of the endpoint group.

-   **init**: The endpoint group is being initialized.
    
-   **active**: The endpoint group is active.
    
-   **updating**: The endpoint group is being updated.
    
-   **deleting**: The endpoint group is being deleted.
    

active

HealthCheckProtocol

string

The protocol for health checks.

-   **tcp** or **TCP**: TCP.
    
-   **http** or **HTTP**: HTTP.
    
-   **https** or **HTTPS**: HTTPS.
    

tcp

HealthCheckPort

integer

The port used for health checks.

20

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
    
-   **ECS**: an Alibaba Cloud Elastic Compute Service (ECS) instance.
    
-   **SLB**: an Alibaba Cloud Server Load Balancer (SLB) instance.
    
-   **ALB**: an Alibaba Cloud Application Load Balancer (ALB) instance.
    
-   **OSS**: an Alibaba Cloud Object Storage Service (OSS) bucket.
    
-   **ENI**: an Alibaba Cloud elastic network interface (ENI).
    
-   **NLB**: an Alibaba Cloud Network Load Balancer (NLB) instance.
    

Ip

EnableClientIPPreservation

boolean

Indicates whether client IP address preservation is enabled.

-   **true**: Client IP address preservation is enabled.
    
-   **false**: Client IP address preservation is disabled.
    

false

Weight

integer

The weight of the endpoint.

255

ProbeProtocol

string

The protocol used for latency probes.

-   **tcp**: TCP.
    
-   **icmp**: ICMP.
    

tcp

Endpoint

string

The IP address, domain name, or instance ID of the endpoint.

120.XX.XX.21

EnableProxyProtocol

boolean

Indicates whether the Proxy Protocol is used to preserve client IP addresses.

-   **true**: The Proxy Protocol is used to preserve client IP addresses.
    
-   **false**: The Proxy Protocol is not used to preserve client IP addresses.
    

false

ProbePort

integer

The port used for latency probes.

80

SubAddress

string

The private IP address of the ENI.

172.168.XX.XX

VpcId

string

The ID of the virtual private cloud (VPC).

vpc-hp30gtnxkfxj1l2xt\*\*\*\*

VSwitchIds

array

The list of vSwitches in the VPC.

string

The vSwitch ID.

vsw-bp1nx4sxxe1nnr1ja\*\*\*\*

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

EndpointRequestProtocol

string

The protocol of the backend service.

-   **HTTP**
    
-   **HTTPS**
    

HTTP

EndpointProtocolVersion

string

The version of the backend service protocol.

-   **HTTP1.1**
    
-   **HTTP2**
    

EndpointGroupType

string

The type of the endpoint group.

-   **default**: a default endpoint group.
    
-   **virtual**: a virtual endpoint group.
    

default

ForwardingRuleIds

array

The ID of the forwarding rule that is associated with the endpoint group.

string

The ID of the forwarding rule that is associated with the endpoint group.

frule-bp19a3t3yzr21q3\*\*\*\*

AcceleratorId

string

The GA instance ID.

ga-bp1odcab8tmno0hdq\*\*\*\*

ListenerId

string

The listener ID.

lsr-bp1bpn0kn908w4nbw\*\*\*\*

SlsRegion

string

The region of the Simple Log Service (SLS) project.

cn-hangzhou

SlsProjectName

string

The name of the SLS project.

pn-01

SlsLogStoreName

string

The name of the SLS Logstore.

lsn-01

AccessLogSwitch

string

The status of the access log feature.

-   **on**: enabled.
    
-   **off**: disabled.
    
-   **binding**: being enabled.
    
-   **unbinding**: being disabled.
    

on

EnableAccessLog

boolean

Indicates whether access logging is enabled.

-   **true**: Access logging is enabled.
    
-   **false**: Access logging is disabled.
    

true

HealthCheckEnabled

boolean

Indicates whether health checks are enabled.

-   **true**: Health checks are enabled.
    
-   **false**: Health checks are disabled.
    

true

ServiceId

string

The ID of the service that manages the instance.

**Note**

This parameter is returned only if **ServiceManaged** is set to **True**.

ALB

ServiceManaged

boolean

Indicates whether the instance is managed.

-   **true**: The instance is managed.
    
-   **false**: The instance is not managed.
    

true

ServiceManagedInfos

array<object>

The actions that you can perform on the managed instance.

**Note**

-   This parameter is returned only if **ServiceManaged** is set to **True**.
    
-   When the instance is managed, you cannot perform some operations on the instance.
    

object

The actions that you can perform on the managed instance.

Action

string

The name of the action on the managed instance.

-   **Create**: creates an instance.
    
-   **Update**: updates the current instance.
    
-   **Delete**: deletes the current instance.
    
-   **Associate**: associates the instance with other resources.
    
-   **UserUnmanaged**: disassociates the instance from the service.
    
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

Indicates whether the specified action is managed.

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

## Examples

Success response

`JSON` format

```
{
  "HealthCheckIntervalSeconds": 3,
  "TrafficPercentage": 100,
  "EndpointGroupId": "epg-bp14sz7ftcwwjgrdm****",
  "Description": "group1",
  "EndpointGroupIpList": [
    "101.XX.XX.22"
  ],
  "EndpointGroupUnconfirmedIpList": [
    "101.XX.XX.22"
  ],
  "RequestId": "6FEA0CF3-D3B9-43E5-A304-D217037876A8\t",
  "HealthCheckPath": "/healthcheck",
  "ThresholdCount": 3,
  "Name": "group1",
  "EndpointGroupRegion": "cn-hangzhou",
  "State": "active",
  "HealthCheckProtocol": "tcp",
  "HealthCheckPort": 20,
  "EndpointConfigurations": [
    {
      "Type": "Ip",
      "EnableClientIPPreservation": false,
      "Weight": 255,
      "ProbeProtocol": "tcp",
      "Endpoint": "120.XX.XX.21",
      "EnableProxyProtocol": false,
      "ProbePort": 80,
      "SubAddress": "172.168.XX.XX",
      "VpcId": "vpc-hp30gtnxkfxj1l2xt****",
      "VSwitchIds": [
        "vsw-bp1nx4sxxe1nnr1ja****"
      ]
    }
  ],
  "PortOverrides": [
    {
      "ListenerPort": 443,
      "EndpointPort": 80
    }
  ],
  "EndpointRequestProtocol": "HTTP",
  "EndpointProtocolVersion": "",
  "EndpointGroupType": "default",
  "ForwardingRuleIds": [
    "frule-bp19a3t3yzr21q3****"
  ],
  "AcceleratorId": "ga-bp1odcab8tmno0hdq****",
  "ListenerId": "lsr-bp1bpn0kn908w4nbw****",
  "SlsRegion": "cn-hangzhou",
  "SlsProjectName": "pn-01",
  "SlsLogStoreName": "lsn-01",
  "AccessLogSwitch": "on",
  "EnableAccessLog": true,
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
  "HealthCheckHost": ""
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

500

UnknownError

An error occurred while processing your request. Please try again. If the error persists, please submit a ticket.

An error occurred while the request was being processed. Try again later.

See [Error Codes](https://api.alibabacloud.com/document/Ga/2019-11-20/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ga/2019-11-20/DescribeEndpointGroup#workbench-doc-change-demo) for a complete list.
