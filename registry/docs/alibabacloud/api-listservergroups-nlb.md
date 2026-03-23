Queries the server groups of a Network Load Balancer (NLB) instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Nlb/2022-04-30/ListServerGroups)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Nlb/2022-04-30/ListServerGroups)

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

nlb:ListServerGroups

get

ServerGroup

`acs:nlb:{#regionId}:{#accountId}:servergroup/*`

ServerGroup

`acs:nlb:{#regionId}:{#accountId}:servergroup/{#ServerGroupId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ServerGroupIds

array

No

The server group IDs. You can specify up to 20 server group IDs in each call.

string

No

The server group ID. You can specify up to 20 server group IDs in each call.

sgp-atstuj3rtoptyui\*\*\*\*

ServerGroupNames

array

No

The names of the server groups to be queried. You can specify up to 20 names in each call.

string

No

The name of the server group to be queried. You can specify up to 20 names in each call.

NLB\_ServerGroup

ResourceGroupId

string

No

The ID of the resource group to which the server group belongs.

rg-atstuj3rtop\*\*\*\*

ServerGroupType

string

No

The type of server group. Valid values:

-   **Instance**: allows you to add servers of the **Ecs**, **Ens**, and **Eci** types.
    
-   **Ip**: allows you to add servers by specifying IP addresses.
    

Instance

VpcId

string

No

The ID of the virtual private cloud (VPC) in which the server group is deployed.

vpc-bp15zckdt37pq72zv\*\*\*\*

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

The key of the tag. You can specify up to 10 tag keys.

The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

Test

Value

string

No

The value of the tag. You can specify up to 10 tag values.

The tag value can be up to 128 characters in length. It cannot start with `aliyun` and `acs:`, and cannot contain `http://` or `https://`.

Test

NextToken

string

No

The pagination token used in the next request to retrieve a new page of results. Valid values:

-   For the first request and last request, you do not need to specify this parameter.
    
-   You must specify the token obtained from the previous query as the value of NextToken.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

MaxResults

integer

No

The number of entries per page. Valid values: **1** to **100**. Default value: **20**.

20

RegionId

string

No

The region ID of the NLB instance.

You can call the [DescribeRegions](/help/en/slb/api-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The operation to query server groups.

RequestId

string

The request ID.

54B28E3D-DF70-471B-AA93-08E683A1B45

ServerGroups

array<object>

A list of server groups.

array<object>

The server group.

RegionId

string

The region ID of the NLB instance.

cn-hangzhou

ServerGroupId

string

The server group ID.

sgp-atstuj3rtoptyui\*\*\*\*

ServerGroupName

string

The server group name.

NLB\_ServerGroup

ServerGroupType

string

The type of server group. Valid values:

-   **Instance** : contains servers of the **Ecs**, **Ens**, and **Eci** types.
    
-   **Ip**: contains servers specified by IP addresses.
    

Instance

AddressIPVersion

string

The IP version. Valid values:

-   **ipv4**
    
-   **DualStack**
    

ipv4

VpcId

string

The ID of the VPC to which the server group belongs.

vpc-bp15zckdt37pq72zv\*\*\*\*

Scheduler

string

The routing algorithm. Valid values:

-   **Wrr**: Backend servers with higher weights receive more requests than backend servers with lower weights.
    
-   **rr**: Requests are forwarded to the backend servers in sequence. sch: Requests are forwarded to the backend servers based on source IP address hashing.
    
-   **sch**: Requests from the same source IP address are forwarded to the same backend server.
    
-   **tch**: Four-element hashing, which specifies consistent hashing that is based on four factors: source IP address, destination IP address, source port, and destination port. Requests that contain the same information based on the four factors are forwarded to the same backend server.
    
-   **qch**: QUIC ID hashing. Requests that contain the same QUIC ID are forwarded to the same backend server.
    

Wrr

Protocol

string

The backend protocol. Valid values: **TCP** and **UDP**.

TCP

HealthCheck

object

The configurations of health checks.

HealthCheckEnabled

boolean

Indicates whether the health check feature is enabled. Valid values:

-   **true**
    
-   **false**
    

false

HealthCheckType

string

The protocol that is used for health checks. Valid values:

-   **TCP**
    
-   **HTTP**
    
-   **UDP**
    

TCP

HealthCheckConnectPort

integer

The backend port that is used for health checks.

Valid values: **0** to **65535**.

A value of **0** indicates that the port on a backend server is used for health checks.

200

HealthyThreshold

integer

The number of times that an unhealthy backend server must consecutively pass health checks before it is declared healthy. In this case, the health status changes from **fail** to **success**.

Valid values: **2** to **10**.

2

UnhealthyThreshold

integer

The number of times that a healthy backend server must consecutively fail health checks before it is declared unhealthy. In this case, the health status changes from **success** to **fail**.

Valid values: **2** to **10**.

3

HealthCheckConnectTimeout

integer

The maximum timeout period of a health check response. Unit: seconds. Default value: **5**.

Valid values: **1** to **300**

200

HealthCheckInterval

integer

The interval at which health checks are performed. Unit: seconds. Default value: **5**.

-   If you set **HealthCheckType** to **TCP** or **HTTP**, valid values are **1 to 50**.
    
-   If you set **HealthCheckType** to **UDP**, valid values are **1 to 300**. Set the health check interval equal to or larger than the response timeout period to ensure that UDP response timeouts are not determined as no responses.
    

10

HealthCheckDomain

string

The domain name that you want to use for health checks. Valid values:

-   **$SERVER\_IP**: the private IP address of a backend server.
    
-   **domain**: a specified domain name. The domain name must be 1 to 80 characters in length, and can contain lowercase letters, digits, hyphens (-), and periods (.).
    

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

$SERVER\_IP

HealthCheckUrl

string

The path to which health check probes are sent.

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

/test/index.html

HealthCheckHttpCode

array

The HTTP status codes returned for health checks. Multiple HTTP status codes are separated by commas (,). Valid values: **http\_2xx**, **http\_3xx**, **http\_4xx**, and **http\_5xx**.

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

string

The HTTP status codes returned for health checks. Multiple HTTP status codes are separated by commas (,). Valid values: **http\_2xx**, **http\_3xx**, **http\_4xx**, and **http\_5xx**.

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

http\_2xx

HttpCheckMethod

string

The HTTP method that is used for health checks. Valid values: **GET** and **HEAD**.

**Note**

This parameter takes effect only when **HealthCheckType** is set to **HTTP**.

GET

HealthCheckReq

string

The request string of UDP health checks. The string must be 1 to 512 characters in length, and can contain letters and digits.

hello

HealthCheckExp

string

The response string of UDP health checks. The string must be 1 to 512 characters in length, and can contain letters and digits.

ok

HealthCheckHttpVersion

string

The version of the HTTP protocol. Valid values: **HTTP1.0** and **HTTP1.1**.

**Note**

This parameter takes effect only if you set **HealthCheckType** to **HTTP**.

HTTP1.0

ConnectionDrainEnabled

boolean

Indicates whether connection draining is enabled. Valid values:

-   **true**
    
-   **false**
    

false

ConnectionDrainTimeout

integer

The timeout period of connection draining. Unit: seconds. Valid values: **10** to **900**.

200

PreserveClientIpEnabled

boolean

Indicates whether client IP preservation is enabled. Valid values:

-   **true**
    
-   **false**
    

**Note**

This parameter is set to **true** by default when **AddressIPVersion** is set to **ipv4**. This parameter is set to **false** when **AddressIPVersion** is set to **ipv6**. **true** will be supported by later versions.

true

AnyPortEnabled

boolean

Indicates whether the feature of forwarding requests to all ports is enabled. Valid values:

-   **true**
    
-   **false**
    

false

ResourceGroupId

string

The ID of the resource group to which the server group belongs.

rg-atstuj3rtop\*\*\*\*

ServerGroupStatus

string

The status of the server group. Valid values:

-   **Creating**
    
-   **Available**
    
-   **Configuring**
    

Available

AliUid

integer

The ID of the Alibaba Cloud account.

165820696622\*\*\*\*

Tags

array<object>

The tag.

object

The tags.

Key

string

The tag key. At most 10 tag keys are returned.

The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Test

Value

string

The tag value. At most 10 tag values are returned.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Test

RelatedLoadBalancerIds

array

The NLB instances.

string

A list of NLB instances.

nlb-83ckzc8d4xlp8o\*\*\*\*

ServerCount

integer

The number of server groups associated with the NLB instances.

2

IpVersionAffinityMode

string

Traffic scheduling policy for dual-stack NLB instances:

-   NonAffinity (default): Forwards requests to healthy backend servers based on the configured scheduling algorithm, regardless of the source IP protocol version (IPv4 or IPv6).
    
-   Affinity: Forwards requests based on source IP protocol affinity. IPv4 requests are forwarded exclusively to IPv4 backend servers, and IPv6 requests are forwarded exclusively to IPv6 backend servers.
    

**Note**

This parameter only applies when the **AddressIPVersion** is set to **DualStack**.

Affinity

TotalCount

integer

The total number of entries returned.

1

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:

-   If **NextToken** is empty, no next page exists.
    
-   If a value is returned for **NextToken**, the value is the token that determines the start point of the next query.
    

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

MaxResults

integer

The number of entries per page. Valid values: **1** to **100**.

20

## Examples

Success response

`JSON` format

```
{
  "RequestId": "54B28E3D-DF70-471B-AA93-08E683A1B45",
  "ServerGroups": [
    {
      "RegionId": "cn-hangzhou",
      "ServerGroupId": "sgp-atstuj3rtoptyui****",
      "ServerGroupName": "NLB_ServerGroup",
      "ServerGroupType": "Instance",
      "AddressIPVersion": "ipv4",
      "VpcId": "vpc-bp15zckdt37pq72zv****",
      "Scheduler": "Wrr",
      "Protocol": "TCP",
      "HealthCheck": {
        "HealthCheckEnabled": false,
        "HealthCheckType": "TCP",
        "HealthCheckConnectPort": 200,
        "HealthyThreshold": 2,
        "UnhealthyThreshold": 3,
        "HealthCheckConnectTimeout": 200,
        "HealthCheckInterval": 10,
        "HealthCheckDomain": "$SERVER_IP",
        "HealthCheckUrl": "/test/index.html",
        "HealthCheckHttpCode": [
          "http_2xx"
        ],
        "HttpCheckMethod": "GET",
        "HealthCheckReq": "hello",
        "HealthCheckExp": "ok",
        "HealthCheckHttpVersion": "HTTP1.0"
      },
      "ConnectionDrainEnabled": false,
      "ConnectionDrainTimeout": 200,
      "PreserveClientIpEnabled": true,
      "AnyPortEnabled": false,
      "ResourceGroupId": "rg-atstuj3rtop****",
      "ServerGroupStatus": "Available",
      "AliUid": 0,
      "Tags": [
        {
          "Key": "Test",
          "Value": "Test"
        }
      ],
      "RelatedLoadBalancerIds": [
        "nlb-83ckzc8d4xlp8o****"
      ],
      "ServerCount": 2,
      "IpVersionAffinityMode": "Affinity"
    }
  ],
  "TotalCount": 1,
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "MaxResults": 20
}
```

## Error codes

**HTTP status code**

**Error code**

**Error message**

**Description**

400

SystemBusy

System is busy, please try again later.

403

Forbidden.%s

Authentication is failed for %s.

403

Forbidden.NoPermission

Authentication is failed for NoPermission.

Authentication is failed for NoPermission.

See [Error Codes](https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Nlb/2022-04-30/ListServerGroups#workbench-doc-change-demo) for a complete list.
