Removes backend servers.

## Operation description

**Note**

If the backend servers that you want to remove are not in the server list of the Classic Load Balancer (CLB) instance, the request fails. However, the system does not report an error.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Slb/2014-05-15/RemoveBackendServers)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Slb/2014-05-15/RemoveBackendServers)

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

slb:RemoveBackendServers

update

\*loadbalancer

`acs:slb:{#regionId}:{#accountId}:loadbalancer/{#loadbalancerId}`

-   ecs:tag
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

No

The ID of the region where the CLB instance is deployed.

cn-hangzhou

LoadBalancerId

string

Yes

The ID of the CLB instance.

lb-bp15lbk8uja8rvm4a\*\*\*\*

BackendServers

string

Yes

The backend servers that you want to remove.

-   **ServerId**: The IDs of the backend servers. Set the value to a string. This parameter is required.
    
-   **Type**: the type of the backend server. Valid values:
    
    -   **ecs** (default): Elastic Compute Service (ECS) instance
        
    -   **eni**: elastic network interface (ENI)
        
    -   **eci**: elastic container instance
        
-   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Set the value to an integer.
    

You can specify at most 20 backend servers in each call. Examples:

-   Remove ECS instances:
    

`[{"ServerId":"i-bp1fq61enf4loa5i****", "Type": "ecs","Weight":"100"}]`

-   Remove ENIs:
    

`[{"ServerId":"eni-2ze1sdp5****","Type": "eni","Weight":"100"}]`

-   Remove elastic container instances:
    

`[{"ServerId":"eci-2ze1sdp5****","Type": "eci","Weight":"100"}]`

\[{"ServerId":"i-bp1fq61enf4loa5i\*\*\*\*", "Type": "ecs","Weight":"100"}\]

## Response elements

**Element**

**Type**

**Description**

**Example**

object

LoadBalancerId

string

The ID of the CLB instance.

lb-bp15lbk8uja8rvm4a\*\*\*\*

RequestId

string

The request ID.

365F4154-92F6-4AE4-92F8-7FF34\*\*\*\*\*\*

BackendServers

object

BackendServer

array<object>

The backend servers.

object

Type

string

The type of backend server. Valid values:

-   **ecs**: ECS instance
    
-   **eni**: ENI
    
-   **eci**: elastic container instances
    

ecs

Weight

integer

The weight of the backend server. Valid values: **0 to 100**.

100

Description

string

The description of the server group.

BackendServer1

ServerId

string

The ID of the backend server.

i-bp1fq61enf4loa5i\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "LoadBalancerId": "lb-bp15lbk8uja8rvm4a****",
  "RequestId": "365F4154-92F6-4AE4-92F8-7FF34******",
  "BackendServers": {
    "BackendServer": [
      {
        "Type": "ecs",
        "Weight": 100,
        "Description": "BackendServer1",
        "ServerId": "i-bp1fq61enf4loa5i****"
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

SystemBusy

The system is busy.

System Busy

See [Error Codes](https://api.alibabacloud.com/document/Slb/2014-05-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Slb/2014-05-15/RemoveBackendServers#workbench-doc-change-demo) for a complete list.
