Creates an endpoint group.

## Operation description

-   Before you create a virtual endpoint group for a Layer 4 listener, make sure that a default endpoint group is created.
    
-   **CreateEndpointGroup** is an asynchronous operation. After a request is sent, the system returns an endpoint group ID, but the endpoint group is still being created in the background. You can call the [DescribeEndpointGroup](/help/en/ga/api-describeendpointgroup) operation to query the state of an endpoint group:
    
    -   If an endpoint group is in the **init** state, it is being created. In this state, you can only perform query operations.
        
    -   If an endpoint group is in the **active** state, it is created.
        
-   You cannot call the **CreateEndpointGroup** operation to concurrently create endpoint groups in the same Global Accelerator instance.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ga/2019-11-20/CreateEndpointGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ga/2019-11-20/CreateEndpointGroup)

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

ga:CreateEndpointGroup

create

\*EndpointGroup

`acs:ga:{#regionId}:{#accountId}:endpointgroup/*`

\*Listener

`acs:ga:{#regionId}:{#accountId}:listener/{#listenerId}`

\*Accelerator

`acs:ga:{#regionId}:{#accountId}:ga/{#acceleratorId}`

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

The region ID of the Global Accelerator instance. Set the value to **cn-hangzhou**.

cn-hangzhou

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

Generate a token using your client to make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

AcceleratorId

string

Yes

The ID of the Global Accelerator instance.

ga-bp1odcab8tmno0hdq\*\*\*\*

Name

string

No

The name of the endpoint group.

The name must be 1 to 128 characters in length, start with a letter, and can contain digits, periods (.), underscores (\_), and hyphens (-).

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

ListenerId

string

Yes

The ID of the listener.

lsr-bp1bpn0kn908w4nbw\*\*\*\*

TrafficPercentage

integer

No

The percentage of traffic that is distributed to the endpoint group. If a listener is associated with multiple endpoint groups, this parameter specifies the percentage of traffic that is distributed to the endpoint group. Valid values: **1** to **100**.

20

HealthCheckIntervalSeconds

integer

No

The interval at which health checks are performed. Unit: seconds.

3

HealthCheckPath

string

No

The path to which health check requests are sent.

/healthcheck

HealthCheckPort

integer

No

The port that is used for health checks.

20

HealthCheckProtocol

string

No

The protocol that is used for health checks. Valid values:

-   **tcp** or **TCP**
    
-   **http** or **HTTP**
    
-   **https** or **HTTPS**
    

tcp

ThresholdCount

integer

No

The number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy, or the number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy. Valid values: **2** to **10**. Default value: **3**.

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
    
-   **ECS**: an Alibaba Cloud Elastic Compute Service (ECS) instance.
    
-   **SLB**: an Alibaba Cloud Server Load Balancer (SLB) instance.
    
-   **ALB**: an Alibaba Cloud Application Load Balancer (ALB) instance.
    
-   **OSS**: an Alibaba Cloud Object Storage Service (OSS) bucket.
    
-   **ENI**: an Alibaba Cloud Elastic Network Interface (ENI).
    
-   **NLB**: an Alibaba Cloud Network Load Balancer (NLB) instance.
    

**Note**

-   If you set the endpoint type to **ECS**, **ENI**, **SLB**, **ALB**, **NLB**, or **IpTarget**, the system automatically creates a service-linked role named AliyunServiceRoleForGaVpcEndpoint if the role does not exist.
    
-   If you set the endpoint type to **ALB**, the system automatically creates a service-linked role named AliyunServiceRoleForGaAlb if the role does not exist.
    
-   If you set the endpoint type to **OSS**, the system automatically creates a service-linked role named AliyunServiceRoleForGaOss if the role does not exist.
    
-   If you set the endpoint type to **NLB**, the system automatically creates a service-linked role named AliyunServiceRoleForGaNlb if the role does not exist.
    

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

-   This parameter is not available for endpoint groups of UDP or TCP listeners by default. You can configure this parameter as needed.
    
-   This feature is enabled by default for endpoint groups of HTTP or HTTPS listeners. Client IP addresses are preserved in the X-Forwarded-For header field. You cannot disable this feature.
    
-   You cannot set both EnableClientIPPreservation and EnableProxyProtocol to true.
    
-   For more information, see [Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses).
    

false

Weight

integer

Yes

The weight of the endpoint.

Valid values: **0** to **255**.

**Note**

If you set the weight of an endpoint to 0, Global Accelerator stops distributing traffic to the endpoint. Proceed with caution.

20

EnableProxyProtocol

boolean

No

Specifies whether to use the Proxy Protocol to preserve client IP addresses. Valid values:

-   **true**: preserves client IP addresses.
    
-   **false** (default): does not preserve client IP addresses.
    

**Note**

-   You can configure this parameter only for endpoint groups of TCP listeners.
    
-   You cannot set both EnableClientIPPreservation and EnableProxyProtocol to true.
    
-   For more information, see [Preserve client IP addresses](/help/en/ga/user-guide/preserve-client-ip-addresses).
    

false

Endpoint

string

Yes

The IP address, domain name, or instance ID of the endpoint. The value of this parameter depends on the value of the Type parameter.

120.1.XX.XX

SubAddress

string

No

The private IP address of the ENI.

**Note**

This parameter is available only when the endpoint type is **ENI**. If you do not specify this parameter, the primary private IP address of the ENI is used by default.

172.168.X.X

VpcId

string

No

The ID of the VPC.

You can specify only one VPC ID for an endpoint group that is associated with a smart routing listener.

**Note**

This parameter is required and takes effect only when the endpoint type is **IpTarget**.

vpc-bp1quce3451z5b2hv\*\*\*\*

VSwitchIds

array

No

The list of vSwitches in the VPC.

string

No

The ID of the vSwitch.

You can specify up to two vSwitch IDs for an endpoint group that is associated with a smart routing listener.

**Note**

This parameter is required and takes effect only when the endpoint type is **IpTarget**.

-   The vSwitch must belong to the VPC that is specified by the **VpcId** parameter.
    

vsw-bp12mho4ze51ezagm\*\*\*\*

EndpointRequestProtocol

string

No

The protocol of the backend service. Valid values:

-   **HTTP** (default)
    
-   **HTTPS**
    

**Note**

-   You can set this parameter only when you create an endpoint group for an **HTTP** or **HTTPS** listener.
    
-   For an **HTTP** listener, the backend service protocol must be **HTTP**.
    

HTTP

EndpointProtocolVersion

string

No

The version of the backend service protocol. Valid values:

-   **HTTP1.1** (default): HTTP/1.1
    
-   **HTTP2**: HTTP/2
    

**Note**

This parameter is available only when the backend service protocol is set to HTTPS.

HTTP1.1

EndpointGroupType

string

No

The type of the endpoint group. Valid values:

-   **default** (default): a default endpoint group.
    
-   **virtual**: a virtual endpoint group.
    

**Note**

Before you create a virtual endpoint group for a Layer 4 listener, make sure that a default endpoint group is created.

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

The listener port that is mapped to the endpoint port.

**Note**

-   Virtual endpoint groups of TCP listeners do not support port mapping. If a listener is associated with a virtual endpoint group, you cannot configure port mapping for the default endpoint group. If you have configured port mapping for the default endpoint group, you cannot add a virtual endpoint group.
    
-   After you configure port mapping, you cannot change the listener protocol, except for switching between HTTP and HTTPS.
    
-   The listener port range that you modify must include all listener ports that are used for port mapping. For example, if the listener port range is 80-82 and you map ports 100-102 to the endpoint, you cannot change the listener port range to 80-81.
    

443

EndpointPort

integer

No

The endpoint port that is mapped to the listener port.

80

HealthCheckEnabled

boolean

No

Specifies whether to enable the health check feature. Valid values:

-   **true**: enables the health check feature.
    
-   **false**: disables the health check feature.
    

true

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

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run and does not create the endpoint group. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the system returns a 2xx HTTP status code.
    
-   **false** (default): sends the request. If the request passes the check, a 2xx HTTP status code is returned and the endpoint group is created.
    

false

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

EndpointGroupId

string

The ID of the endpoint group.

epg-bp1dmlohjjz4kqaun\*\*\*\*

RequestId

string

The ID of the request.

04F0F334-1335-436C-A1D7-6C044FE73368

## Examples

Success response

`JSON` format

```
{
  "EndpointGroupId": "epg-bp1dmlohjjz4kqaun****",
  "RequestId": "04F0F334-1335-436C-A1D7-6C044FE73368"
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

NotExist.ListenerPort

The listening port %s does not exist.

The listening port does not exist.

400

NoPermission.EnableHealthCheck

You do not have permission to enable health check.

The current account does not have the permissions to enable health checks.

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

Exist.EndpointGroup

The endpoint group already exists.

The endpoint group already exists.

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

500

UnknownError

An error occurred while processing your request. Please try again. If the error persists, please submit a ticket.

An error occurred while the request was being processed. Try again later.

See [Error Codes](https://api.alibabacloud.com/document/Ga/2019-11-20/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ga/2019-11-20/CreateEndpointGroup#workbench-doc-change-demo) for a complete list.
