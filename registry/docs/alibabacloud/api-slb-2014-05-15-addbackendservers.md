Adds backend servers.

## Operation description

**Note**

If multiple identical Elastic Compute Service (ECS) instances are specified in a request, only the first ECS instance is added. The other ECS instances are ignored. If the backend server that you add is the same as one of the existing backend servers that are already associated with the listener, an error message is returned.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Slb/2014-05-15/AddBackendServers)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Slb/2014-05-15/AddBackendServers)

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

slb:AddBackendServers

update

\*LoadBalancer

`acs:slb:{#regionId}:{#accountId}:loadbalancer/{#LoadBalancerId}`

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#InstanceId}`

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

No

The ID of the region where the Classic Load Balancer (CLB) instance is deployed.

You can call the [DescribeRegions](/help/en/slb/classic-load-balancer/developer-reference/api-slb-2014-05-15-describeregions) operation to query the most recent region list.

cn-beijing

LoadBalancerId

string

Yes

The ID of the CLB instance.

lb-2ze7o5h52g02kkzz\*\*\*\*\*\*

BackendServers

string

No

The list of backend servers that you want to add. Set the following parameters:

-   **ServerId**: Required. This value must be a string. Enter the ID of an elastic network interface (ENI), or elastic container instance. If **ServerId** is set to the ID of an ENI or elastic container instance, **Type** is required.
    
-   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Default value: **100**.
    
    If the value is set to 0, no requests are forwarded to the backend server.
    
-   **Description**: Optional. The description of the backend server. This value must be a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (\_).
    
-   **Type**: the type of the backend server. Valid values:
    
    -   **ecs** (default): an ECS instance
        
    -   **eni**: an ENI
        
    -   **eci**: an elastic container instance
        

**Note**

You can specify ENIs and elastic container instances as the backend servers only for high-performance CLB instances.

-   **ServerIp**: the IP address of the ECS instance, ENI, or elastic container instance
    
-   **Port**: the backend port
    

Examples:

-   ECS instance: `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]`
    
-   ENI: `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.**.**", "Port":"80","Description":"test-112" }]`
    
-   ENI with multiple IP addresses: `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.**.**", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166.**.**", "Port":"80","Description":"test-113" }]`
    
-   Elastic container instance: `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "192.168.**.**", "Port":"80","Description":"test-114" }]`
    

**Note**

The backend servers that you add to a CLB instance must be in the Running state. You can add at most 20 backend servers to a CLB instance in each request.

\[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168.\*\*.\*\*", "Port":"80","Description":"test-112" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166.\*\*.\*\*", "Port":"80","Description":"test-113" }\]

## Response elements

**Element**

**Type**

**Description**

**Example**

object

LoadBalancerId

string

The ID of the CLB instance.

lb-2ze7o5h52g02kkzz\*\*\*\*

RequestId

string

The ID of the request.

34B82C81-F13B-4EEB-99F6-A048C67CC830

BackendServers

object

BackendServer

array<object>

The list of backend servers.

object

Type

string

The type of the backend server. Valid values:

-   **ecs** (default): an ECS instance
    
-   **eni**: an ENI
    
-   **eci**: an elastic container instance
    

ecs

Weight

string

The weight of the backend server.

Valid values: **0 to 100**. Default value: **100**.

If the value is set to **0**, no requests are forwarded to the backend server.

100

Description

string

The description of the backend server.

**Note**

If you do not specify **Description** in the request, this parameter is not displayed.

The description of the backend server.

ServerId

string

The ID of the ECS instance, ENI, or elastic container instance.

i-2zej4lxhjoq1icu\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "LoadBalancerId": "lb-2ze7o5h52g02kkzz****",
  "RequestId": "34B82C81-F13B-4EEB-99F6-A048C67CC830",
  "BackendServers": {
    "BackendServer": [
      {
        "Type": "ecs",
        "Weight": "100",
        "Description": "The description of the backend server.",
        "ServerId": "i-2zej4lxhjoq1icu*****"
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

InvalidParameter

The specified load balancer does not support the network type of the ECS instance.

400

Mismatched.ZoneId

The zone of the server is not matched with the cloud box loadbalancer.

400

BackendServerProcessing

Backend Server is adding, please try again later.

400

InvalidBackendServers.ServerIpConflict

%s.

400

OperationUnsupported.AddBackendServers

This type of backend server is not allowed to attached to singleTunnel or anyTunnel lb.

400

IncorrectStatus.RSByPassToas

%s.

400

OperationFailed.ActionNotSupport

The loadbalancer does not support such action.

400

NetworkConflict

%s.

400

SystemBusy

The system is busy.

System Busy

See [Error Codes](https://api.alibabacloud.com/document/Slb/2014-05-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Slb/2014-05-15/AddBackendServers#workbench-doc-change-demo) for a complete list.
