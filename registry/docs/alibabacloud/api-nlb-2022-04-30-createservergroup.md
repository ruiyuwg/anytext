Creates a server group in a specified region.

## Operation description

**CreateServerGroup** is an asynchronous operation. After a request is sent, the system returns a request ID. However, the server group is still being created in the background. You can call the [GetJobStatus](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-getjobstatus) operation to query the creation status of a server group.

-   If a server group is in the **Succeeded** state, it is created.
    
-   If a server group is in the **Processing** state, it is being created. In this state, you can only perform query operations.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Nlb/2022-04-30/CreateServerGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Nlb/2022-04-30/CreateServerGroup)

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

nlb:CreateServerGroup

create

\*ServerGroup

`acs:nlb:{#regionId}:{#accountId}:servergroup/*`

\*VPC

`acs:vpc:{#regionId}:{#accountId}:vpc/{#VpcId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ServerGroupType

string

No

The type of server group. Valid values:

-   **Instance** (default): a server group of the instance type. You can add Elastic Compute Service (ECS) instances, elastic network interfaces (ENIs), and elastic container instances (ECIs) to this type of server group.
    
-   **Ip**: a server group of the IP address type. You can add backend servers to this type of server group by specifying their IP addresses.
    

Instance

ServerGroupName

string

Yes

The name of the server group.

The name must be 2 to 128 characters in length, start with a letter or a Chinese character, and can contain digits, periods (.), underscores (\_), and hyphens (-).

NLB\_ServerGroup

AddressIPVersion

string

No

The protocol version. Valid values:

-   **ipv4** (default): IPv4.
    
-   **DualStack**: dual-stack.
    

ipv4

Protocol

string

No

The protocol used to forward requests to the backend servers. Valid values:

-   **TCP** (default)
    
-   **UDP**
    
-   **TCP\_UDP**
    

**Note**

-   If you set the value to **UDP**, the server group can be associated only with UDP listeners.
    
-   If you set the value to **TCP** and set **PreserveClientIpEnabled** to **true**, the server group can be associated only with TCP listeners.
    
-   If you set the value to **TCP** and set **PreserveClientIpEnabled** to **false**, the server group can be associated with TCP and TCP over Secure Sockets Layer (SSL) listeners.
    
-   If you set the value to **TCP\_UDP**, the server group can be associated with TCP and UDP listeners.
    

TCP

VpcId

string

Yes

The ID of the virtual private cloud (VPC) to which the server group belongs.

**Note**

If **ServerGroupType** is set to **Instance**, only servers in this VPC can be added to the server group.

vpc-bp15zckdt37pq72zv\*\*\*\*

AnyPortEnabled

boolean

No

Specifies whether to enable port forwarding for all ports. Valid values:

-   **true**
    
-   **false** (default)
    

false

ConnectionDrainEnabled

boolean

No

Specifies whether to enable connection draining. Valid values:

-   **true**
    
-   **false** (default)
    

false

ConnectionDrainTimeout

integer

No

The timeout period of connection draining. Unit: seconds. Valid values: **0** to **900**.

10

Scheduler

string

No

The scheduling algorithm. Valid values:

-   **Wrr** (default): weighted round-robin. Backend servers with higher weights receive more requests than backend servers with lower weights.
    
-   **Wlc**: weighted least connections. Requests are distributed based on the weight and the number of connections of each backend server. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
    
-   **rr**: round-robin. Requests are distributed to backend servers in sequence.
    
-   **sch**: source IP hash. Requests from the same source IP address are distributed to the same backend server.
    
-   **tch**: four-tuple hash. Requests are distributed to backend servers based on a hash of the four-tuple: source IP address, destination IP address, source port, and destination port. This ensures that requests from the same flow are forwarded to the same backend server.
    
-   **qch**: QUIC ID hash. Requests that have the same QUIC ID are hashed to the same backend server.
    

**Note**

You can set the value to qch only when the backend protocol is UDP.

Wrr

PreserveClientIpEnabled

boolean

No

Specifies whether to preserve client IP addresses. Valid values:

-   **true** (default)
    
-   **false**
    

**Note**

If **Protocol** is set to **TCP** and this parameter is set to **true**, the server group cannot be associated with TCP over SSL listeners.

true

HealthCheckConfig

object

No

The health check settings.

HealthCheckEnabled

boolean

No

Specifies whether to enable health checks. Valid values:

-   **true** (default)
    
-   **false**
    

true

HealthCheckType

string

No

The health check protocol. Valid values:

-   **TCP**
    
-   **HTTP**
    
-   **UDP**
    

TCP

HealthCheckConnectPort

integer

No

The port that is used for health checks on backend servers.

Valid values: **0** to **65535**.

Default value: **0**. This value indicates that the port of a backend server is used for health checks.

0

HealthyThreshold

integer

No

The number of consecutive successful health checks required to change the health status of a backend server from **failed** to **successful**.

Valid values: **2** to **10**.

Default value: **2**.

2

UnhealthyThreshold

integer

No

The number of consecutive failed health checks required to change the health status of a backend server from **successful** to **failed**.

Valid values: **2** to **10**.

Default value: **2**.

2

HealthCheckConnectTimeout

integer

No

The maximum timeout period of a health check response. Unit: seconds. Valid values: **1** to **300**. Default value: **5**.

5

HealthCheckInterval

integer

No

The interval between two consecutive health checks. Unit: seconds. Default value: **5**.

-   If **HealthCheckType** is set to **TCP** or **HTTP**, the value must be in the range of **1** to **50**.
    
-   If **HealthCheckType** is set to **UDP**, the value must be in the range of **1** to **300**. The interval must be greater than or equal to the response timeout period. This ensures that UDP probes are not marked as timed out.
    

5

HealthCheckDomain

string

No

The domain name that is used for health checks. Valid values:

-   **$SERVER\_IP**: the private IP address of a backend server.
    
-   **domain**: a specific domain name. The domain name must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), and periods (.).
    

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

$SERVER\_IP

HealthCheckUrl

string

No

The path that is used for health checks.

The path must be 1 to 80 characters in length. It can contain letters, digits, and the following special characters: `-/.%?#&`. It must start with a forward slash (/).

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

/test/index.html

HealthCheckHttpCode

array

No

The HTTP status codes that indicate a healthy backend server. You can specify multiple HTTP status codes and separate them with commas (,). Valid values: **http\_2xx** (default), **http\_3xx**, **http\_4xx**, and **http\_5xx**.

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

string

No

The HTTP status codes that indicate a healthy backend server. You can specify multiple HTTP status codes and separate them with commas (,). Valid values: **http\_2xx** (default), **http\_3xx**, **http\_4xx**, and **http\_5xx**.

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

http\_2xx

HttpCheckMethod

string

No

The HTTP method that is used for health checks. Valid values: **GET** (default) and **HEAD**.

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

GET

HealthCheckReq

string

No

The request string for UDP health checks. The string can contain only letters and digits. The string must be at most 512 characters in length.

hello

HealthCheckExp

string

No

The response string for UDP health checks. The string can contain only letters and digits. The string must be at most 512 characters in length.

ok

HealthCheckHttpVersion

string

No

The version of the HTTP protocol. Valid values: **HTTP1.0** (default) and **HTTP1.1**.

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

HTTP1.0

ResourceGroupId

string

No

The ID of the resource group to which the server group belongs.

rg-atstuj3rtop\*\*\*\*

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run. The system checks the required parameters, request format, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): sends the request. If the request passes the check, a 2xx HTTP status code is returned and the operation is performed.
    

true

ClientToken

string

No

A client-generated token that is used to ensure the idempotence of the request.

Make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the request as the **ClientToken**. The **RequestId** of each API request may be different.

123e4567-e89b-12d3-a456-426655440000

RegionId

string

No

The ID of the region where the Network Load Balancer (NLB) instance is deployed.

You can call the [DescribeRegions](/help/en/slb/network-load-balancer/developer-reference/api-nlb-2022-04-30-describeregions) operation to obtain region IDs.

cn-hangzhou

Tag

array<object>

No

The tags.

object

No

The tag.

Key

string

No

The key of the tag. The key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. It can contain letters, digits, underscores (\_), periods (.), colons (:), forward slashes (/), equal signs (=), plus signs (+), hyphens (-), and at signs (@).

You can add up to 20 tags in a single call.

env

Value

string

No

The value of the tag. The value can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`. It can contain letters, digits, underscores (\_), periods (.), colons (:), forward slashes (/), equal signs (=), plus signs (+), hyphens (-), and at signs (@).

You can add up to 20 tags in a single call.

product

IpVersionAffinityMode

string

No

Traffic scheduling policy for dual-stack NLB instances:

-   NonAffinity (default): Forwards requests to healthy backend servers based on the configured scheduling algorithm, regardless of the source IP protocol version (IPv4 or IPv6).
    
-   Affinity: Forwards requests based on source IP protocol affinity. IPv4 requests are forwarded exclusively to IPv4 backend servers, and IPv6 requests are forwarded exclusively to IPv6 backend servers.
    

**Note**

This parameter applies only when the **AddressIPVersion** is set to **DualStack**.

Affinity

## Response elements

**Element**

**Type**

**Description**

**Example**

object

A server group is created.

RequestId

string

The ID of the request.

54B48E3D-DF70-471B-AA93-08E683A1B45

ServerGroupId

string

The ID of the server group.

sgp-atstuj3rtoptyui\*\*\*\*

JobId

string

The ID of the asynchronous task.

72dcd26b-f12d-4c27-b3af-18f6aed5\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "54B48E3D-DF70-471B-AA93-08E683A1B45",
  "ServerGroupId": "sgp-atstuj3rtoptyui****",
  "JobId": "72dcd26b-f12d-4c27-b3af-18f6aed5****"
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

IllegalParam.AnyPortServerGroupConflictWithHealthCheckConfig

The param of AnyPortServerGroupConflictWithHealthCheckConfig is illegal.

400

IllegalParamFormat.ParseCreateRsPoolRequestFailed

The param format of CreateRsPoolRequest is illegal.

The param format of CreateRsPoolRequest is illegal.

400

IllegalParam.PreserveClientIpSwitch

The param of PreserveClientIpSwitch is illegal.

400

OperationDenied.VpcNotSupportIpv6

The operation is not allowed because of VpcNotSupportIpv6.

The VPC you are using does not support Ipv6.

400

IllegalParam.healthCheckDomain

The parameter of healthCheckConfig.healthCheckDomain is illegal.

The healthCheckDomain in the health check configuration is invalid. Check the input parameters.

400

OperationDenied.UidNotAllowQuic29

The operation is not allowed because of uid not allow quic29 version.

400

IlleagalParam.healthCheckUrl

The parameter of healthCheckUrl in healthCheckConfig is illegal.

The URL of the health check used in the health check setting is invalid.

400

IllegalParam.ServerGroupName

The param of ServerGroupName is illegal.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

Request validation has been passed with DryRun flag set.

400

MissingParam.%s

The parameter of %s is missing.

400

IllegalParam.ConnectionDrainTimeout

The param of ConnectionDrainTimeout is illegal.

The parameter ConnectionDrainTimeout is invalid. Check the input parameters.

400

IllegalParam

The param of %s is illegal.

400

SystemBusy

System is busy, please try again later.

400

QuotaExceeded.QuotaInsufficient

The quota of %s is exceeded, usage %s/%s.

The quota is insufficient, currently used %s/%s. Please modify the quota size in the quota center.

403

Forbidden.NoPermission

Authentication is failed for NoPermission.

Authentication is failed for NoPermission.

404

ResourceNotFound.Vpc

The specified resource of Vpc is not found.

The specified VPC resource was not found. Please check the input parameters.

404

ResourceNotFound.ResourceGroup

The param of resourceGroup not existed.

The resource group does not exist.

See [Error Codes](https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Nlb/2022-04-30/CreateServerGroup#workbench-doc-change-demo) for a complete list.
