Modifies the configurations of an endpoint group.

## Operation description

-   **UpdateEndpointGroup** is an asynchronous operation. After you send a request, the system returns a request ID, but the operation continues to run in the background. You can call [DescribeEndpointGroup](/help/en/ga/api-describeendpointgroup) to query the state of an endpoint group:
    -   If the endpoint group is in the **updating** state, its configurations are being modified. In this state, you can only perform query operations.
        
    -   If the endpoint group is in the **active** state, its configurations have been modified.
        
-   You cannot concurrently call **UpdateEndpointGroup** to modify the configurations of endpoint groups in the same Global Accelerator instance.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ga/2019-11-20/UpdateEndpointGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ga/2019-11-20/UpdateEndpointGroup)

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

ga:UpdateEndpointGroup

update

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

The region ID of the Global Accelerator instance. Set the value to **cn-hangzhou**.

cn-hangzhou

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Generate a parameter value from your client to make sure that the value is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

EndpointGroupId

string

Yes

The ID of the endpoint group.

epg-bp1dmlohjjz4kqaun\*\*\*\*

Name

string

No

The name of the endpoint group.

The name must be 1 to 128 characters in length, start with a letter or a Chinese character, and can contain digits, periods (.), underscores (\_), and hyphens (-).

group1

Description

string

No

The description of the endpoint group.

The description can be up to 200 characters in length and cannot start with `http://` or `https://`.

EndpointGroup

EndpointGroupRegion

string

Yes

The ID of the region where the endpoint group is deployed.

cn-hangzhou

TrafficPercentage

integer

No

The weight of the endpoint group. When a listener is associated with multiple endpoint groups, traffic is distributed to the endpoint groups based on their weights.

20

HealthCheckIntervalSeconds

integer

No

The interval between two consecutive health checks. Unit: seconds. Valid values: **1** to **50**.

3

HealthCheckPath

string

No

The path for health checks.

/healthcheck

HealthCheckPort

integer

No

The port that is used for health checks. Valid values: **1** to **65535**.

20

HealthCheckProtocol

string

No

The protocol that is used for health checks. Valid values:

-   **tcp** or **TCP**: TCP
    
-   **http** or **HTTP**: HTTP
    
-   **https** or **HTTPS**: HTTPS
    

HTTPS

ThresholdCount

integer

No

The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy.

Valid values: **2** to **10**.

3

EndpointConfigurations

array<object>

No

The configurations of the endpoints.

object

No

The configurations of the endpoints.

Type

string

Yes

The type of the endpoint. Valid values:

-   **Domain**: a custom domain name.
    
-   **Ip**: a custom IP address.
    
-   **IpTarget**: a custom private IP address.
    
-   **PublicIp**: an Alibaba Cloud public IP address.
    
-   **ECS**: an Alibaba Cloud ECS instance.
    
-   **SLB**: an Alibaba Cloud SLB instance.
    
-   **ALB**: an Alibaba Cloud ALB instance.
    
-   **OSS**: an Alibaba Cloud OSS instance.
    
-   **ENI**: an Alibaba Cloud ENI.
    
-   **NLB**: an Alibaba Cloud NLB instance.
    

**Note**

-   If you set the endpoint type to **ECS**, **ENI**, **SLB**, **ALB**, **NLB**, or **IpTarget**, and the service-linked role AliyunServiceRoleForGaVpcEndpoint does not exist, the system automatically creates the service-linked role.
    
-   If you set the endpoint type to **ALB**, and the service-linked role AliyunServiceRoleForGaAlb does not exist, the system automatically creates the service-linked role.
    
-   If you set the endpoint type to **OSS**, and the service-linked role AliyunServiceRoleForGaOss does not exist, the system automatically creates the service-linked role.
    
-   If you set the endpoint type to **NLB**, and the service-linked role AliyunServiceRoleForGaNlb does not exist, the system automatically creates the service-linked role.
    

**Note**

For more information, see [Service-linked roles](/help/en/ga/security-and-compliance/aliyunserviceroleforgavpcendpoint-1).

Ip

EnableClientIPPreservation

boolean

No

Specifies whether to preserve client IP addresses. Valid values:

-   **true**: preserves client IP addresses.
    
-   **false** (default): does not preserve client IP addresses.
    

**Note**

-   By default, client IP address preservation is disabled for endpoint groups of UDP and TCP listeners. You can enable it as needed.
    
-   By default, client IP address preservation is enabled for endpoint groups of HTTP and HTTPS listeners. The client IP addresses are obtained from the X-Forwarded-For header. You cannot disable this feature.
    
-   EnableClientIPPreservation and EnableProxyProtocol cannot be both set to true.
    
-   For more information, see [Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses).
    

false

Weight

integer

Yes

The weight of the endpoint.

Valid values: **0** to **255**.

**Note**

If you set the weight of an endpoint to 0, Global Accelerator stops distributing traffic to the endpoint. Handle this with care.

20

EnableProxyProtocol

boolean

No

Specifies whether to use the proxy protocol to preserve client IP addresses. Valid values:

-   **true**: uses the proxy protocol.
    
-   **false** (default): does not use the proxy protocol.
    

**Note**

-   This parameter is available only for endpoint groups of TCP listeners.
    
-   EnableClientIPPreservation and EnableProxyProtocol cannot be both set to true.
    
-   For more information, see [Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses).
    

false

Endpoint

string

Yes

The IP address, domain name, or instance ID of the endpoint, based on the value of Type.

120.XX.XX.21

SubAddress

string

No

The private IP address of the ENI.

**Note**

This parameter is available only when the endpoint type is **ENI**. If you do not specify this parameter, the primary private IP address of the ENI is used.

172.168.XX.XX

VpcId

string

No

The ID of the VPC.

You can specify up to one VPC ID for an endpoint group that is associated with a listener that uses smart routing.

**Note**

This parameter is required and takes effect only when the endpoint type is **IpTarget**.

vpc-2zen6t0u7xhm0k5iz\*\*\*\*

VSwitchIds

array

No

The vSwitches in the VPC.

string

No

The ID of the vSwitch.

You can specify up to two vSwitch IDs for an endpoint group that is associated with a listener that uses smart routing.

**Note**

This parameter is required and takes effect only when the endpoint type is IpTarget.

-   The vSwitch must belong to the VPC specified by the VpcId parameter.
    

vsw-2ze2dbtkxabpvpqxc\*\*\*\*

EndpointRequestProtocol

string

No

The protocol of the backend service. Valid values:

-   **HTTP**
    
-   **HTTPS**
    

**Note**

-   This parameter is available only when you create an endpoint group for an HTTP or HTTPS listener.
    
-   For an HTTP listener, the backend service protocol must be HTTP.
    

HTTP

EndpointProtocolVersion

string

No

The version of the backend service protocol. Valid values:

-   **HTTP1.1**
    
-   **HTTP2**
    

**Note**

This parameter is available only when EndpointRequestProtocol is set to HTTPS.

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

The listener port that is mapped to the endpoint port.

**Note**

-   For TCP listeners, virtual endpoint groups do not support port mapping. If a listener is already associated with a virtual endpoint group, you cannot configure port mapping for the default endpoint group. If you have configured port mapping for the default endpoint group, you cannot add a virtual endpoint group to the listener.
    
-   After you configure port mapping, the following limits apply when you modify the listener: You cannot change the listener protocol, except for switching between HTTP and HTTPS.
    
-   Listener port: The modified listener port range must include all listener ports that are configured in the existing port mappings. For example, if the current listener port range is 80-82 and you have mapped listener ports 80, 81, and 82 to endpoint ports 100, 101, and 102, you cannot change the listener port range to 80-81.
    

443

EndpointPort

integer

No

The endpoint port to which the listener port is mapped.

80

HealthCheckEnabled

boolean

No

Specifies whether to enable the health check feature. Valid values:

-   **true**: enables the health check feature.
    
-   **false** (default): disables the health check feature.
    

true

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

## Examples

Success response

`JSON` format

```
{
  "RequestId": "6FEA0CF3-D3B9-43E5-A304-D217037876A8\t"
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

See [Release Notes](https://api.alibabacloud.com/document/Ga/2019-11-20/UpdateEndpointGroup#workbench-doc-change-demo) for a complete list.
