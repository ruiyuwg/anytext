Updates the configuration of a Network Load Balancer (NLB) server group.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Nlb/2022-04-30/UpdateServerGroupAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Nlb/2022-04-30/UpdateServerGroupAttribute)

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

nlb:UpdateServerGroupAttribute

update

\*ServerGroup

`acs:nlb:{#regionId}:{#accountId}:servergroup/{#ServerGroupId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ServerGroupId

string

Yes

The ID of the server group.

sgp-atstuj3rtoptyui\*\*\*\*

ServerGroupName

string

No

The new name of the server group.

The name must be 2 to 128 characters in length, start with a letter or a Chinese character, and can contain digits, periods (.), underscores (\_), and hyphens (-).

NLB\_ServerGroup1

ConnectionDrainEnabled

boolean

No

Specifies whether to enable connection draining. Valid values:

-   **true**
    
-   **false**
    

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

-   **Wrr**: weighted round-robin. Backend servers with higher weights receive more requests than backend servers with lower weights.
    
-   **Wlc**: weighted least connections. Requests are distributed to backend servers based on their weights and the number of connections. If two backend servers have the same weight, the backend server that has fewer connections receives more requests.
    
-   **rr**: round-robin. Requests are distributed to backend servers in sequence.
    
-   **sch**: source IP hash. Requests from the same source IP address are distributed to the same backend server.
    
-   **tch**: four-tuple hash. Requests are distributed to backend servers based on a hash of the four-tuple, which consists of the source IP address, destination IP address, source port, and destination port. This ensures that requests from the same flow are distributed to the same backend server.
    
-   **qch**: QUIC ID hash. Requests with the same QUIC ID are distributed to the same backend server.
    

**Note**

You can set the scheduling algorithm to qch only when the backend protocol is UDP.

Wrr

IpVersionAffinityMode

string

No

Specifies whether to enable client IP address preservation. Valid values:

-   **true**
    
-   **false**
    

**Note**

If **PreserveClientIpEnabled** is set to **false** and the server group is associated with a **TCPSSL** listener, you cannot change the value of this parameter to **true**.

Affinity

PreserveClientIpEnabled

boolean

No

The health check configurations.

false

HealthCheckConfig

object

No

The ID of the region where the NLB instance is deployed.

You can call the operation to query the most recent region list.

HealthCheckEnabled

boolean

No

Specifies whether to enable the health check feature. Valid values:

-   **true**
    
-   **false**
    

false

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

The port that is used for health checks on backend servers. Valid values: **0** to **65535**. If you set the value to **0**, the port of a backend server is used for health checks.

0

HealthyThreshold

integer

No

The number of consecutive health checks that a backend server must pass before it is declared healthy. In this case, the health check status is changed from **failed** to **success**. Valid values: **2** to **10**.

3

UnhealthyThreshold

integer

No

The number of consecutive health checks that a backend server must fail before it is declared unhealthy. In this case, the health check status is changed from **success** to **failed**. Valid values: **2** to **10**.

3

HealthCheckConnectTimeout

integer

No

The maximum timeout period of a health check response. Unit: seconds. Valid values: 1 to **300**. Default value: **5**.

100

HealthCheckInterval

integer

No

The interval at which health checks are performed. Unit: seconds. Default value: **5**.

-   If HealthCheckType is set to **TCP** or **HTTP**, the value must be in the range of **1** to **50**.
    
-   If HealthCheckType is set to **UDP**, the value must be in the range of **1** to **300**. Make sure that the interval is greater than or equal to the response timeout period. This prevents UDP probes from being marked as unresponsive due to timeouts.
    

5

HealthCheckDomain

string

No

The domain name that is used for health checks. Valid values:

-   **$SERVER\_IP**: the private IP address of a backend server.
    
-   **domain**: a specific domain name. The domain name must be 1 to 80 characters in length and can contain lowercase letters, digits, hyphens (-), and periods (.).
    

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

$SERVER\_IP

HealthCheckUrl

string

No

The path that is used for health checks.

The path must be 1 to 80 characters in length. It can contain letters, digits, and the following special characters: `-/.%?#&=`. It can also contain the following extended characters: `_;~!()*[]@$^:',+`. The path must start with a forward slash (/).

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

/test/index.html

HealthCheckHttpCode

array

No

The HTTP status codes that indicate a healthy backend server. You can specify multiple HTTP status codes. Separate them with commas (,). Valid values: **http\_2xx** (default), **http\_3xx**, **http\_4xx**, and **http\_5xx**.

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

string

No

The HTTP status codes that indicate a healthy backend server. You can specify multiple HTTP status codes. Separate them with commas (,). Valid values: **http\_2xx** (default), **http\_3xx**, **http\_4xx**, and **http\_5xx**.

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

http\_2xx

HttpCheckMethod

string

No

The HTTP method that is used for health checks. Valid values: **GET** and **HEAD**.

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

GET

HealthCheckReq

string

No

The request string for UDP health checks. The string can contain only letters and digits and must be at most 512 characters in length.

hello

HealthCheckExp

string

No

The response string for UDP health checks. The string can contain only letters and digits and must be at most 512 characters in length.

ok

HealthCheckHttpVersion

string

No

The version of the HTTP protocol that is used for health checks. Valid values: **HTTP1.0** and **HTTP1.1**.

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

HTTP1.0

RegionId

string

No

Specifies whether to perform a dry run. Valid values:

-   **true**: performs a dry run but does not update the server group. The system checks the required parameters, the request format, and business limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
    
-   **false** (default): sends a normal request. If the request passes the check, an HTTP 2xx status code is returned and the operation is performed.
    

cn-hangzhou

DryRun

boolean

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate a token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters.

**Note**

If you do not specify this parameter, the system automatically uses the **RequestId** of the API request as the **ClientToken**. The **RequestId** may be different for each API request.

false

ClientToken

string

No

Traffic scheduling policy for dual-stack NLB instances:

-   NonAffinity (default): Forwards requests to healthy backend servers based on the configured scheduling algorithm, regardless of the source IP protocol version (IPv4 or IPv6).
    
-   Affinity: Forwards requests based on source IP protocol affinity. IPv4 requests are forwarded exclusively to IPv4 backend servers, and IPv6 requests are forwarded exclusively to IPv6 backend servers.
    

**Note**

This parameter only applies when the **AddressIPVersion** is set to **DualStack**.

123e4567-e89b-12d3-a456-426655440000

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The configurations of the server group.

RequestId

string

The request ID.

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

IllegalParam.%s

The param of %s is illegal.

400

SystemBusy

System is busy, please try again later.

400

IllegalParam.healthCheckDomain

The parameter of healthCheckConfig.healthCheckDomain is illegal.

The healthCheckDomain in the health check configuration is invalid. Check the input parameters.

400

IlleagalParam.healthCheckUrl

The parameter of healthCheckUrl in healthCheckConfig is illegal.

The URL of the health check used in the health check setting is invalid.

400

OperationDenied.UidNotAllowQuic29

The operation is not allowed because of uid not allow quic29 version.

400

IllegalParam

The param of %s is illegal.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

Request validation has been passed with DryRun flag set.

400

IllegalParam.ServerGroupName

The param of ServerGroupName is illegal.

400

IllegalParam.PreserveClientIpSwitch

The server group associated with the tcpssl listener does not support enabling PreserveClientIp.

The server group associated with the tcpssl listener does not support enabling PreserveClientIp.

403

Forbidden.NoPermission

Authentication is failed for NoPermission.

Authentication is failed for NoPermission.

404

ResourceNotFound.serverGroup

The specified resource of serverGroup is not found.

The specified resource of serverGroup is not found. Please check the input parameters.

See [Error Codes](https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Nlb/2022-04-30/UpdateServerGroupAttribute#workbench-doc-change-demo) for a complete list.
