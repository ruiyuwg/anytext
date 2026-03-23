Creates a vServer group and adds backend servers to the vServer group.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Slb/2014-05-15/CreateVServerGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Slb/2014-05-15/CreateVServerGroup)

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

slb:CreateVServerGroup

create

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#InstanceId}`

\*LoadBalancer

`acs:slb:{#regionId}:{#accountId}:loadbalancer/{#LoadBalancerId}`

-   slb:tag
-   slb:tag
-   slb:tag

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Tag

array<object>

No

The tags.

object

No

The tags.

Key

string

No

The key of tag N. Valid values of N: **1 to 20**. The tag key cannot be an empty string.

The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.

TestKey

Value

string

No

The tag value. Valid values of N: **1 to 20**. The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag value cannot contain `http://` or `https://`.

TestValue

RegionId

string

Yes

The ID of the region where the SLB instance is deployed.

cn-hangzhou

LoadBalancerId

string

Yes

The ID of the Server Load Balancer (SLB) instance.

lb-bp1qjwo61pqz3ahl\*\*\*\*\*\*

VServerGroupName

string

No

The name of the vServer group.

The name must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.),and underscores (\_).

Group1

BackendServers

string

No

The backend servers that you want to add. Configure the following parameters:

-   **ServerId**: required. The ID of the backend server. Specify the ID in a string. You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic network interface (ENI), or an elastic container instance. If you set ServerId to the ID of an ENI or an elastic container instance, you must configure the Type parameter.
    
-   **Weight**: the weight of the backend server. Valid values: 0 to 100. Default value: 100. If you set the weight of a backend server to 0, no requests are forwarded to the backend server.
    
-   **Description**: optional. The description of the backend server. Specify the description in a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (\_).
    
-   **Type**: the type of the backend server. Valid values:
    
    -   **ecs (default)**: ECS instance
        
    -   **eni**: ENI.
        
    -   **eni**: elastic container instance.
        

**Note**

You can specify ENIs and elastic container instances as backend servers only for high-performance SLB instances.

-   **ServerIp**: The IP address of the ECS instance or ENI.
    
-   **Port**: the backend port.
    

Examples:

-   Add an ECS instance:
    
    `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]`
    
-   Add an ENI:
    
    `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.**.**", "Port":"80","Description":"test-112" }]`
    
-   Add an ENI with multiple IP addresses:
    
    `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.**.**", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166.**.**", "Port":"80","Description":"test-113" }]`
    
-   Add an elastic container instance:
    
    `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "192.168.**.**", "Port":"80","Description":"test-114" }]`
    

**Note**

You can add only running backend servers to SLB instances. You can specify at most 20 backend servers.

\[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.\*\*.\*\*", "Port":"80","Description":"test-112" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166.\*\*.\*\*", "Port":"80","Description":"test-113" }\]

## Response elements

**Element**

**Type**

**Description**

**Example**

object

VServerGroupId

string

The ID of the vServer group.

rsp-cige6\*\*\*\*\*\*

RequestId

string

The ID of the request.

9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C

BackendServers

object

BackendServer

array<object>

The list of backend servers.

object

The backend servers.

Type

string

The type of backend server. Valid values:

-   **ecs** (default): ECS instance
    
-   **eni**: elastic network interface (ENI)
    
-   **eci**: elastic container instance
    

eni

Weight

integer

The weight of the backend server.

100

Description

string

The description of the vServer group.

vServer group

Port

integer

The port that is used by the backend server.

70

ServerId

string

The ID of the ECS instance or ENI.

eni-hhshhs\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "VServerGroupId": "rsp-cige6******",
  "RequestId": "9DEC9C28-AB05-4DDF-9A78-6B08EC9CE18C",
  "BackendServers": {
    "BackendServer": [
      {
        "Type": "eni",
        "Weight": 100,
        "Description": "vServer group",
        "Port": 70,
        "ServerId": "eni-hhshhs****"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

LBNotSupportIpv6Backend

The specified loadbalancer does not support ipv6 backend.

400

Mismatched.ZoneId

The zone of the server is not matched with the cloud box loadbalancer.

400

InvalidBackendServers.ServerIpConflict

%s.

400

OperationUnsupported.CreateVServerGroup

This type of backend server is not allowed to attached to singleTunnel or anyTunnel lb.

400

IncorrectStatus.RSByPassToas

%s.

400

BackendServer.InvalidType

The specified Type is invalid.

400

BackendServer.ServerRegionIdNotEqual

The specified ServerRegionId must be equal.

400

OperationFailed.InvalidCen

The cen related with this loadbalancer is invalid.

400

IncorrectStatus.CenNotAssociated

The action is invalid because the loadbalancer is not associated with cen.

400

InvalidBackendServers.MissingCenBandWidth

The bandwidth is missing between loadbalancer and backendServers in cen.

400

InvalidBackendServers.VpcNotInCen

The BackendServers is not in the cen associated with the loadbalancer.

400

InvalidServerId.NotExist

The specified ServerId is not exist.

400

MissingParameter.ServerRegionId

The parameter ServerRegionId is required.

400

MissingParameter.VbrId

The parameter VbrId is required.

400

InvalidParameter.ServerRegionId

The parameter ServerRegionId is invalid for crossborder.

400

InvalidVbrId.NotInCen

The VbrId is not in the cen associated with the loadbalancer.

400

InvalidParameter.ZoneNotSupport

The zone does not support the parameter %s.

400

NetworkConflict

%s.

400

InvalidParam.TagValue

%s.

400

InvalidParam.TagKey

%s.

400

SizeLimitExceeded.Tag

%s.

400

MissingParam.TagKey

The param MissingParam.TagKey is missing.

400

VpcSystemBusy

Invoke vpc system busy, please retry later.

400

OperationFailed.Endpoint

The operation failed because of the RegionId is unavailable in this endpoint.

endpoint error

403

UnauthorizedRegion

The specified region of is not authorized.

The specified region of is not authorized.

See [Error Codes](https://api.alibabacloud.com/document/Slb/2014-05-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Slb/2014-05-15/CreateVServerGroup#workbench-doc-change-demo) for a complete list.
