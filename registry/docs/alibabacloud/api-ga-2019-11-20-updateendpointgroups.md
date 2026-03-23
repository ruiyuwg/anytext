Modifies endpoint groups for a listener in a batch.

## Operation description

### Usage notes

-   **UpdateEndpointGroups** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation continues to run in the background. You can call the [DescribeEndpointGroup](/help/en/ga/api-describeendpointgroup) or [ListEndpointGroups](/help/en/ga/api-listendpointgroups) operation to query the state of an endpoint group.
    -   If an endpoint group is in the **updating** state, its configuration is being modified. In this state, you can only perform query operations.
        
    -   If an endpoint group is in the **active** state, its configuration has been modified.
        
-   You cannot concurrently call the **UpdateEndpointGroups** operation to modify the configurations of endpoint groups that belong to the same Global Accelerator instance.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ga/2019-11-20/UpdateEndpointGroups)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ga/2019-11-20/UpdateEndpointGroups)

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

ga:UpdateEndpointGroups

update

\*EndpointGroup

`acs:ga:{#regionId}:{#accountId}:endpointgroup/{#endpointgroupId}`

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

The region ID of the Global Accelerator instance. Set the value to **cn-hangzhou**.

cn-hangzhou

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Generate a value for this parameter on your client. Make sure that the value is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, a 2xx HTTP status code is returned.
    
-   **false** (default): sends the request. If the request passes the check, a 2xx HTTP status code is returned and the operation is performed.
    

true

EndpointGroupConfigurations

array<object>

Yes

The configurations of the endpoint group.

array<object>

No

The configurations of the endpoint group.

EndpointGroupName

string

No

The name of the endpoint group.

The name must be 1 to 128 characters in length, start with a letter or a Chinese character, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

group1

EndpointGroupDescription

string

No

The description of the endpoint group.

The description can be up to 200 characters in length and cannot start with http:// or https://.

group1

TrafficPercentage

integer

No

The traffic distribution ratio. If a listener is associated with multiple endpoint groups, you can specify this parameter to distribute traffic to the endpoint groups.

Valid values: **1** to **100**.

20

HealthCheckEnabled

boolean

No

Specifies whether to enable the health check feature.

-   **true**: enables the health check feature.
    
-   **false** (default): disables the health check feature.
    

true

HealthCheckIntervalSeconds

integer

No

The interval between two consecutive health checks. Unit: seconds. Valid values: **1** to **50**.

3

HealthCheckPath

string

No

The path of the health check.

/healthcheck

HealthCheckPort

integer

No

The port that is used for health checks.

Valid values: **1** to **65535**.

20

HealthCheckProtocol

string

No

The protocol that is used for health checks.

-   **tcp** or **TCP**: TCP
    
-   **http** or **HTTP**: HTTP
    
-   **https** or **HTTPS**: HTTPS
    

tcp

ThresholdCount

integer

No

The number of consecutive health checks that an endpoint must pass to be considered healthy, or fail to be considered unhealthy.

Valid values: **2** to **10**.

3

EndpointConfigurations

array<object>

No

The configurations of the endpoint.

object

Yes

The configurations of the endpoint.

Type

string

Yes

The type of the endpoint.

-   **Domain**: a custom domain name.
    
-   **Ip**: a custom IP address.
    
-   **IpTarget**: a custom private IP address.
    
-   **PublicIp**: an Alibaba Cloud public IP address.
    
-   **ECS**: an Alibaba Cloud Elastic Compute Service (ECS) instance.
    
-   **SLB**: an Alibaba Cloud Server Load Balancer (SLB) instance.
    
-   **ALB**: an Alibaba Cloud Application Load Balancer (ALB) instance.
    
-   **OSS**: an Alibaba Cloud Object Storage Service (OSS) bucket.
    
-   **ENI**: an Alibaba Cloud Elastic Network Interface (ENI).
    
-   **NLB**: an Alibaba Cloud Network Load Balancer (NLB) instance.
    

**Note**

-   If you set the endpoint type to **ECS**, **ENI**, **SLB**, **NLB**, or **IpTarget**, and the service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaVpcEndpoint.
    
-   If you set the endpoint type to **ALB**, and the service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaAlb.
    
-   If you set the endpoint type to **OSS**, and the service-linked role does not exist, the system automatically creates a service-linked role named AliyunServiceRoleForGaOss.
    

**Note**

For more information, see [Service-linked roles](/help/en/ga/security-and-compliance/aliyunserviceroleforgavpcendpoint-1).

Ip

Weight

integer

Yes

The weight of the endpoint.

Valid values: **0** to **255**.

**Note**

If you set the weight of an endpoint to 0, Global Accelerator stops distributing traffic to the endpoint. Handle this with care.

20

Endpoint

string

Yes

The IP address, domain name, or instance ID of the endpoint, based on the value of Type.

47.0.XX.XX

SubAddress

string

No

The private IP address of the ENI.

**Note**

-   This parameter is available only when the endpoint type is ENI. You can specify this parameter. If you do not specify this parameter, the primary private IP address of the ENI is used.
    

172.168.XX.XX

EnableClientIPPreservation

boolean

No

Specifies whether to preserve client IP addresses. Valid values:

-   **true**: preserves client IP addresses.
    
-   **false** (default): does not preserve client IP addresses.
    

**Note**

-   By default, client IP address preservation is disabled for endpoint groups of TCP and UDP listeners. You can enable it based on your business needs.
    
-   Client IP address preservation is enabled by default for endpoint groups of HTTP and HTTPS listeners. The client IP addresses are retrieved from the X-Forwarded-For header field. You cannot disable this feature.
    
-   EnableClientIPPreservation and EnableProxyProtocol cannot be set to true at the same time.
    
-   For more information, see [Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses).
    

EnableProxyProtocol

boolean

No

Specifies whether to use the Proxy Protocol to preserve client IP addresses. Valid values:

-   **true**: uses the Proxy Protocol.
    
-   **false** (default): does not use the Proxy Protocol.
    

**Note**

-   This parameter is available only for endpoint groups of TCP listeners.
    
-   EnableClientIPPreservation and EnableProxyProtocol cannot be set to true at the same time.
    
-   For more information, see [Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses).
    

VpcId

string

No

The ID of the virtual private cloud (VPC).

You can specify at most one VPC ID for an endpoint group that is associated with a listener that uses smart routing.

**Note**

This parameter is required and takes effect only when the endpoint type is **IpTarget**.

vpc-uf66oesmrqge1t2gs\*\*\*\*

VSwitchIds

array

No

The list of vSwitches in the VPC.

string

No

The ID of the vSwitch.

You can specify at most two vSwitch IDs for an endpoint group that is associated with a listener that uses smart routing.

**Note**

This parameter is required and takes effect only when the endpoint type is IpTarget.

-   The vSwitch must belong to the VPC specified by the VpcId parameter.
    

vsw-uf6r0due94mypz1i9\*\*\*\*

EndpointRequestProtocol

string

No

The protocol of the backend service. Valid values:

-   **HTTP**: HTTP
    
-   **HTTPS**: HTTPS
    

**Note**

-   You can set this parameter only when you create an endpoint group for an HTTP or HTTPS listener.
    
-   For an HTTP listener, the backend service protocol must be HTTP.
    

HTTP

EndpointProtocolVersion

string

No

The version of the backend service protocol for endpoints in a listener that uses smart routing. Valid values:

-   **HTTP1.1** (default): HTTP/1.1
    
-   **HTTP2**: HTTP/2
    

**Note**

This parameter is available only when you set EndpointRequestProtocol to HTTPS.

HTTP1.1

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

-   For TCP listeners, virtual endpoint groups do not support port mapping. If a virtual endpoint group already exists under the listener, you cannot configure port mapping for the default endpoint group. If port mapping is already configured for the default endpoint group, you cannot add a virtual endpoint group.
    
-   After you configure port mapping, the following limits apply to subsequent listener modifications: You cannot change the listener protocol, except for changing it between HTTP and HTTPS.
    
-   Listener port: The modified listener port range must include all listener ports that are currently mapped. For example, if the listener port range is 80-82 and the ports are mapped to endpoint ports 100-102, you cannot change the listener port range to 80-81.
    

443

EndpointPort

integer

No

The endpoint port.

Valid values: **1** to **65499**.

80

EnableClientIPPreservationToa

boolean

No

Specifies whether to use the TCP Option Address (TOA) module to preserve client IP addresses. Valid values:

-   **true**: yes.
    
-   **false**: no.
    

false

EnableClientIPPreservationProxyProtocol

boolean

No

Specifies whether to use the Proxy Protocol to preserve client IP addresses. Valid values:

-   **true**: yes.
    
-   **false**: no.
    

false

EndpointGroupId

string

Yes

The ID of the endpoint group.

ep-bp1d2utp8qqe2a44t\*\*\*\*

HealthCheckHost

string

No

ListenerId

string

Yes

The ID of the listener.

lsr-bp1bpn0kn908w4nbw\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response.

RequestId

string

The ID of the request.

6FEA0CF3-D3B9-43E5-A304-D217037876A8

EndpointGroupIds

array

The IDs of the endpoint groups.

string

The ID of the endpoint group.

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

NoPermission.EnableHealthCheck

You do not have permission to enable health check.

The current account does not have the permissions to enable health checks.

400

NotExist.EndPointGroup

The endpoint group does not exist.

The endpoint group does not exist.

400

StateError.EndPointGroup

The specified state of endpoint group is invalid.

The endpoint group is in an invalid state.

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

See [Error Codes](https://api.alibabacloud.com/document/Ga/2019-11-20/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ga/2019-11-20/UpdateEndpointGroups#workbench-doc-change-demo) for a complete list.
