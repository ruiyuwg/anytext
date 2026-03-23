Creates endpoint groups.

## Operation description

-   This operation creates endpoint groups in a batch. You cannot create default and virtual endpoint groups in the same request.
    
-   This operation does not support creating virtual endpoint groups for Layer 4 listeners. To create a virtual endpoint group for a Layer 4 listener, call the [CreateEndpointGroup](/help/en/ga/developer-reference/api-ga-2019-11-20-createendpointgroup) operation.
    
-   **CreateEndpointGroups** is an asynchronous operation. After a request is sent, the system returns a request ID, but the endpoint groups are not created immediately. The system creates the endpoint groups in the background. You can call the [DescribeEndpointGroup](/help/en/ga/api-describeendpointgroup) or [ListEndpointGroups](/help/en/ga/api-listendpointgroups) operation to query the state of the endpoint groups:
    
    -   If an endpoint group is in the **init** state, the endpoint group is being created. In this state, you can only perform query operations.
        
    -   If all endpoint groups are in the **active** state, the endpoint groups have been created.
        
-   You cannot call the **CreateEndpointGroups** operation to concurrently create endpoint groups for the same Global Accelerator instance.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ga/2019-11-20/CreateEndpointGroups)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ga/2019-11-20/CreateEndpointGroups)

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

ga:CreateEndpointGroups

create

\*EndpointGroup

`acs:ga:{#regionId}:{#accountId}:endpointgroup/*`

\*Accelerator

`acs:ga:{#regionId}:{#accountId}:ga/{#acceleratorId}`

\*Listener

`acs:ga:{#regionId}:{#accountId}:listener/{#listenerId}`

-   ga:AcceleratorMainland

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

The ID of the region where the GA instance is deployed. Set the value to **cn-hangzhou**.

cn-hangzhou

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Generate a value for this parameter on your client. Make sure that the value is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.

1F4B6A4A-C89E-489E-BAF1-52777EE148EF

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the system returns the HTTP 2xx status code.
    
-   **false** (default): performs a dry run and sends the request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is called.
    

true

AcceleratorId

string

Yes

The ID of the GA instance.

ga-bp1odcab8tmno0hdq\*\*\*\*

ListenerId

string

Yes

The ID of the listener.

**Note**

When the listener protocol is **HTTP** or **HTTPS**, you can create only one endpoint group for each call.

lsr-bp1bpn0kn908w4nbw\*\*\*\*

EndpointGroupConfigurations

array<object>

Yes

The configurations of the endpoint group.

You can specify information about at most 10 endpoint groups.

array<object>

No

The configurations of the endpoint group.

You can specify information about at most 10 endpoint groups.

EndpointGroupName

string

No

The name of the endpoint group.

The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). The name must start with a letter.

group1

EndpointGroupDescription

string

No

The description of the endpoint group.

The description can be up to 200 characters in length and cannot start with \`http://\` or \`https://\`.

EndpointGroup

EndpointGroupRegion

string

Yes

The ID of the region where you want to create the endpoint group.

You can specify up to 10 region IDs.

cn-hongkong

TrafficPercentage

integer

No

The traffic distribution ratio. If a listener is associated with multiple endpoint groups, the system distributes traffic to them based on their ratios.

Valid values: **1** to **100**. Default value: **100**.

You can specify traffic distribution ratios for up to 10 endpoint groups.

100

HealthCheckEnabled

boolean

No

Specifies whether to enable the health check feature for the endpoint group. Valid values:

-   **true**: enables the health check feature.
    
-   **false** (default): disables the health check feature.
    

You can enable the health check feature for up to 10 endpoint groups.

false

HealthCheckIntervalSeconds

integer

No

The interval between two consecutive health checks. Unit: seconds.

You can specify up to 10 health check intervals.

5

HealthCheckPath

string

No

The path to which health check requests are sent.

You can specify up to 10 health check paths.

/healthcheck

HealthCheckPort

integer

No

The port that is used for health checks. Valid values: **1** to **65535**.

You can specify up to 10 ports for health checks.

443

HealthCheckProtocol

string

No

The protocol that is used for health checks. Valid values:

-   **tcp** or **TCP**
    
-   **http** or **HTTP**
    
-   **https** or **HTTPS**
    

You can specify up to 10 health check protocols.

HTTPS

ThresholdCount

integer

No

The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy. Valid values: **2** to **10**. Default value: **3**.

You can specify the number of consecutive health checks for up to 10 endpoint groups.

3

EndpointConfigurations

array<object>

No

The configurations of the endpoints in an endpoint group that is associated with a listener that uses smart routing.

object

No

The configurations of the endpoints in an endpoint group that is associated with a listener that uses smart routing.

Type

string

No

The type of endpoint in the endpoint group. Valid values:

-   **Domain**: a custom domain name.
    
-   **Ip**: a custom IP address.
    
-   **IpTarget**: a private IP address.
    
-   **PublicIp**: an Alibaba Cloud public IP address.
    
-   **ECS**: an Alibaba Cloud Elastic Compute Service (ECS) instance.
    
-   **SLB**: an Alibaba Cloud Server Load Balancer (SLB) instance.
    
-   **ALB**: an Alibaba Cloud Application Load Balancer (ALB) instance.
    
-   **OSS**: an Alibaba Cloud Object Storage Service (OSS) bucket.
    
-   **ENI**: an Alibaba Cloud Elastic Network Interface (ENI).
    
-   **NLB**: an Alibaba Cloud Network Load Balancer (NLB) instance.
    

You can specify up to 100 endpoint types for an endpoint group.

**Note**

-   This parameter is required if the routing type of the listener is **Standard**. You can configure endpoint groups and endpoints for a listener that uses smart routing.
    
-   If you set the endpoint type to **ECS**, **ENI**, **SLB**, **ALB**, **NLB**, or **IpTarget**, and the service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaVpcEndpoint.
    
-   If you set the endpoint type to **ALB** and the service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaAlb.
    
-   If you set the endpoint type to **OSS** and the service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaOss.
    
-   If you set the endpoint type to **NLB** and the service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaNlb.
    

**Note**

For more information, see [Service-linked Role](/help/en/ga/security-and-compliance/aliyunserviceroleforgavpcendpoint-1).

Domain

Weight

integer

No

The weight of the endpoint.

Valid values: **0** to **255**.

**Note**

If you set the weight of an endpoint to 0, Global Accelerator stops distributing traffic to the endpoint. Handle this with care.

255

Endpoint

string

No

The IP address or domain name of the endpoint that is associated with a listener that uses smart routing.

You can specify up to 100 endpoint IP addresses or domain names for an endpoint group.

1.1.1.1

SubAddress

string

No

The private IP address of the ENI.

**Note**

This parameter is available only when the endpoint type is set to **ENI**. If you do not specify this parameter, the primary private IP address of the ENI is used.

172.168.XX.XX

EnableClientIPPreservation

boolean

No

Specifies whether to preserve client IP addresses. Valid values:

-   **true**: preserves client IP addresses.
    
-   **false** (default): does not preserve client IP addresses.
    

**Note**

-   By default, client IP addresses are not preserved for endpoint groups of UDP and TCP listeners. You can configure this feature as needed.
    
-   For endpoint groups of HTTP and HTTPS listeners, client IP addresses are preserved by default. You can obtain client IP addresses from the X-Forwarded-For header. This feature cannot be disabled.
    
-   You cannot set both \`EnableClientIPPreservation\` and \`EnableProxyProtocol\` to \`true\`.
    
-   For more information, see [Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses).
    

false

EnableProxyProtocol

boolean

No

Specifies whether to use the proxy protocol to preserve client IP addresses. Valid values:

-   **true**: uses the proxy protocol.
    
-   **false** (default): does not use the proxy protocol.
    

**Note**

-   This parameter is available only for endpoint groups of TCP listeners.
    
-   You cannot set both \`EnableClientIPPreservation\` and \`EnableProxyProtocol\` to \`true\`.
    
-   For more information, see [Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses).
    

false

VpcId

string

No

The ID of the VPC.

You can specify one VPC ID for an endpoint group.

**Note**

This parameter is required and takes effect only when the endpoint type is set to **IpTarget**.

vpc-2zekzii824szm3hps\*\*\*\*

VSwitchIds

array

No

The list of vSwitches in the VPC.

string

No

The ID of the vSwitch.

You can specify up to two vSwitch IDs for an endpoint group.

**Note**

This parameter is required and takes effect only when the endpoint type is set to IpTarget.

-   The vSwitch must belong to the VPC specified by the VpcId parameter.
    

vsw-bp1b2qx7y2qqnbkan\*\*\*\*

EndpointRequestProtocol

string

No

The protocol of the backend service. Valid values:

-   **HTTP**
    
-   **HTTPS**
    

**Note**

-   You can set this parameter only when you create an endpoint group for an HTTP or HTTPS listener.
    
-   For an HTTP listener, the backend service protocol must be HTTP.
    

HTTPS

EndpointProtocolVersion

string

No

The version of the backend service protocol. Valid values:

-   **HTTP1.1** (default)
    
-   **HTTP2**
    

**Note**

This parameter is available only when the EndpointRequestProtocol parameter is set to HTTPS.

HTTP1.1

EndpointGroupType

string

No

The type of the endpoint group. Valid values:

-   **default** (default)
    
-   **virtual**
    

You can specify up to 10 endpoint group types.

default

PortOverrides

array<object>

No

The port mapping.

object

No

The port mapping.

ListenerPort

integer

No

The listener port.

Valid values: **1** to **65499**.

**Note**

-   For TCP listeners, port mapping is not supported for virtual endpoint groups. If a listener is associated with a virtual endpoint group, you cannot configure port mapping for the default endpoint group. If you have configured port mapping for the default endpoint group, you cannot add a virtual endpoint group.
    
-   After you configure port mapping, you cannot change the listener protocol, except for switching between HTTP and HTTPS.
    
-   The listener port range that you modify must include all listener ports that are used for port mapping. For example, if the listener port range is 80-82 and you map the listener ports to endpoint ports 100-102, you cannot change the listener port range to 80-81.
    

80

EndpointPort

integer

No

The endpoint port.

443

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

The tag key can be up to 64 characters in length and cannot start with \`aliyun\` or \`acs:\`. It cannot contain \`http://\` or \`https://\`.

You can specify up to 20 tag keys.

tag-key

Value

string

No

The tag value of the endpoint group. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot start with \`aliyun\` or \`acs:\`. It cannot contain \`http://\` or \`https://\`.

You can specify up to 20 tag values.

tag-value

SystemTag

array<object>

No

This parameter is not used.

object

No

This parameter is not used.

Key

string

No

This parameter is not used.

\-

Value

string

No

This parameter is not used.

\-

Scope

string

No

This parameter is not used.

\-

HealthCheckHost

string

No

The domain name that is used for health checks.

www.taobao.com

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned data.

RequestId

string

The ID of the request.

6FEA0CF3-D3B9-43E5-A304-D217037876A8

EndpointGroupIds

array

The IDs of the endpoint groups.

string

The IDs of the endpoint groups.

epg-bp1dmlohjjz4kqaun\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "6FEA0CF3-D3B9-43E5-A304-D217037876A8",
  "EndpointGroupIds": [
    "epg-bp1dmlohjjz4kqaun****"
  ]
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

Domain.NotFit

The domain is not fit the rule

The domain name does not have an ICP number.

400

Resource.QuotaFull

The resource quota is exceeded.

The number of resources has reached the upper limit.

400

NoPermission.EnableHealthCheck

You do not have permission to enable health check.

The current account does not have the permissions to enable health checks.

400

NotSupportHealthCheck.Accelerator

Currently Accelerator does not support health check.

The current GA instance does not support health checks.

400

EndpointGroupExclusive.Listener

All endpoint group must under the same listener.

All the endpoint groups must be associated with the same listener.

400

RegionConflict.EndpointGroup

Endpoint group under the same listener must have different region.

The endpoint groups that are associated with the same listener must be deployed in different regions.

400

ListenerProtocolIllegal.EndpointGroup

Listener protocol is illegal, the https/http listener instance is only allowed to have one default endpoint group.

You can configure only one default endpoint group for an HTTPS or HTTP listener.

400

QuotaExceeded.EndpointGroup

The number of endpoint group exceeds the limit.

The number of endpoint groups has reached the upper limit.

400

ParamExclusive.EndpointGroupType

All endpoint group type group must be consistent.

400

HealthCheckPath.Illegal

Health check path illegal.

The health check path is invalid.

400

NotExist.Listener

The listener does not exist.

The listener does not exist.

400

NotActive.Listener

The state of the listener is not active.

The listener is unstable.

400

NotExist.Accelerator

The accelerated instance does not exist.

The GA instance does not exist.

400

StateError.Accelerator

The state of the accelerated instance is invalid.

The status of the GA instance is invalid.

400

NotExist.BusinessRegion

The business region does not exist.

The business region does not exist.

400

NotExist.BasicBandwidthPackage

You must specify the basic bandwidth package.

You must specify the basic bandwidth package.

400

QuotaExceeded.EndPoint

The maximum number of endpoints is exceeded.

The maximum number of endpoints is exceeded.

400

NoPermission.VpcEndpoint

You are not authorized to perform the operation.

The user does not have permissions to create service linked roles. Contact the Alibaba Cloud account owner or the permission administrator to grant the current user AliyunGlobalAccelerationFullAccess or create custom permission policies for service linked role. The following content describes the detailed information about custom permission policies: ServiceName: vpcendpoint.ga.aliyuncs.com. Service linked role name: AliyunServiceRoleForGaVpc. Endpoint Permission: ram:CreateServiceLinkedRole.

400

EndPointRequestProtocolIllegal.EndpointGroup

endpoint group request protoco is illegal

400

QuotaExceeded.PortOverride

The number of port override exceeds the limit.

The number of port override exceeds the limit.

400

NotExist.ListenerPort

listener port %s is not exist

400

MixedVpc.EndPoint

VPC Endpoint cannot be mixed with other types of Endpoints.

You cannot use private endpoints with other types of endpoints.

400

IllegalPublicIp.EndPoint

The public IP address configured for the endpoint is invalid. Only an Alibaba Cloud public IP address in the region of the endpoint can be configured.

The public IP address configured for the endpoint is invalid. Only an Alibaba Cloud public IP address in the region of the endpoint can be configured.

See [Error Codes](https://api.alibabacloud.com/document/Ga/2019-11-20/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ga/2019-11-20/CreateEndpointGroups#workbench-doc-change-demo) for a complete list.
