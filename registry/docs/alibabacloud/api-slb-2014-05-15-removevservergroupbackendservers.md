Removes backend servers from a vServer group.

## Operation description

**Note**

If the backend servers specified by the **BackendServers** parameter do not exist in the vServer group, the backend servers are ignored. No error message is returned.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Slb/2014-05-15/RemoveVServerGroupBackendServers)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Slb/2014-05-15/RemoveVServerGroupBackendServers)

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

slb:RemoveVServerGroupBackendServers

update

instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

\*loadbalancer

`acs:slb:{#regionId}:{#accountId}:loadbalancer/{#loadbalancerId}`

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

RegionId

string

Yes

The region ID of the Server Load Balancer (SLB) instance.

cn-hangzhou

VServerGroupId

string

Yes

The ID of the vServer group.

rsp-cige6\*\*\*\*

BackendServers

string

Yes

The backend servers that you want to remove. Configure the following parameters:

-   **ServerId**: Required. The ID of the backend server. Specify the value in a string. You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic network interface (ENI), or an elastic container instance. If you set **ServerId** to the ID of an ENI or an elastic container instance, you must configure the **Type** parameter.
    
-   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If you set the weight of a backend server to 0, no requests are forwarded to the backend server.
    
-   **Description**: Optional. The description of the backend server. Specify the value in a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (\_).
    
-   **Type**: the type of the backend server. Valid values:
    
    -   **ecs**: ECS instance
        
    -   **eni**: ENI
        
    -   **eci**: elastic container instance
        

**Note**

You can specify ENIs and elastic container instances as backend servers only for high-performance SLB instances.

-   **ServerIp**: the IP address of an ENI or an elastic container instance.
    
-   **Port**: the backend port.
    

Examples:

-   Add ECS instances:
    
    `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]`
    
-   Add ENIs:
    
    `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.**.**", "Port":"80","Description":"test-112" }]`
    
-   Add ENIs with multiple IP addresses:
    
    `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.**.**", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166.**.**", "Port":"80","Description":"test-113" }]`
    
-   Add elastic container instances:
    
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

rsp-cige6j\*\*\*\*

RequestId

string

The request ID.

9DEC9C28-AB05-4DDF-9A78-6B0\*\*\*\*\*\*

BackendServers

object

BackendServer

array<object>

The backend servers.

object

Type

string

The type of the backend server. Valid values:

-   **ecs** (default): ECS instance
    
-   **eni**: ENI
    
-   **eci**: elastic container instance
    

eni

Weight

integer

The weight of the backend server.

100

Port

integer

The port that is used by the backend server.

80

ServerId

string

The ID of the backend server.

eni-hhshhs\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "VServerGroupId": "rsp-cige6j****",
  "RequestId": "9DEC9C28-AB05-4DDF-9A78-6B0******",
  "BackendServers": {
    "BackendServer": [
      {
        "Type": "eni",
        "Weight": 100,
        "Port": 80,
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

LbStatusNotSupport

The status of specified loadbalancer does not support..

See [Error Codes](https://api.alibabacloud.com/document/Slb/2014-05-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Slb/2014-05-15/RemoveVServerGroupBackendServers#workbench-doc-change-demo) for a complete list.
