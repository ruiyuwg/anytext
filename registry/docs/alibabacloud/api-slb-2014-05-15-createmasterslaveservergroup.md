Creates a primary/secondary server group. Each primary/secondary server group consists of two backend servers. One backend server functions as the primary server, and the other backend server functions as the secondary backend server.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Slb/2014-05-15/CreateMasterSlaveServerGroup)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Slb/2014-05-15/CreateMasterSlaveServerGroup)

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

slb:CreateMasterSlaveServerGroup

create

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#InstanceId}`

\*LoadBalancer

`acs:slb:{#regionId}:{#accountId}:loadbalancer/{#LoadBalancerId}`

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

The region ID of the Classic Load Balancer (CLB) instance.

cn-hangzhou

LoadBalancerId

string

Yes

The CLB instance ID.

lb-bp1hv944r69al4j\*\*\*\*\*\*

MasterSlaveServerGroupName

string

No

The name of the primary/secondary server group.

Group1

MasterSlaveBackendServers

string

No

The backend servers in the primary/secondary server group. Each primary/secondary server group consists of two backend servers.

Configure the following parameters:

-   **ServerId**: required. The IDs of the backend servers. Specify the IDs in a string. You can specify the IDs of Elastic Compute Service (ECS) instances, elastic network interfaces (ENIs), and elastic container instances. If you set **ServerId** to the IDs of ENIs or elastic container instances, you must configure the **Type** parameter.
    
-   **Weight**: the weight of the backend server. Valid values: **0** to **100**. Default value: **100**. If you set the weight of a backend server to 0, no requests are forwarded to the backend server.
    
-   **Description**: optional. The description of the backend servers. Specify the description in a string. The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/). periods (.), and underscores (\_).
    
-   **Type**: the type of the backend server. Valid values:
    
    -   **ecs** (default): ECS instance
        
    -   **eni**: ENI
        
    -   **eci**: elastic container instance
        

**Note**

You can specify ENIs and elastic container instances as backend servers only for high-performance CLB instances.

-   **ServerIp**: the IP address of the ENI or elastic container instance.
    
-   **Port**: the backend port.
    
-   **ServerType**: Specify the primary and secondary backend servers in a string. Valid values:
    
    -   **Master**: primary server
        
    -   **Slave**: secondary server
        

\[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"82","ServerType":"Master","Description":"test-112" }, { "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"84","ServerType":"Slave","Description":"test-112" }\]

Tag

array<object>

No

The tags.

object

No

Key

string

No

The key of tag N. Valid values of N: **1** to **20**. The tag key cannot be an empty string.

The tag key can be up to 64 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.

test

Value

string

No

The value of tag N. Valid values of N: **1 to 20**. The tag value can be an empty string. The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

1

## Response elements

**Element**

**Type**

**Description**

**Example**

object

MasterSlaveServerGroupId

string

The ID of the active/standby server group.

rsp-bp19au4\*\*\*\*\*\*

RequestId

string

The request ID.

7CA4DB76-4D32-523B-822E-5C9\*\*\*\*\*\*

MasterSlaveBackendServers

object

MasterSlaveBackendServer

array<object>

The backend servers in the primary/secondary server group.

object

Type

string

The type of backend server. Valid values:

-   **ecs**: ECS instance
    
-   **eni**: ENI
    
-   **eci**: elastic container instance
    

ecs

Weight

integer

The weight of the backend server.

100

Description

string

The description of the primary/secondary server group.

test-112

Port

integer

The port that is used by the backend server.

82

ServerId

string

The ID of the backend server that you want to add.

i-bp1fq61enf4loa5i\*\*\*\*

ServerType

string

The type of backend server.

Valid values: **Master** and **Slave**.

Master

## Examples

Success response

`JSON` format

```
{
  "MasterSlaveServerGroupId": "rsp-bp19au4******",
  "RequestId": "7CA4DB76-4D32-523B-822E-5C9******",
  "MasterSlaveBackendServers": {
    "MasterSlaveBackendServer": [
      {
        "Type": "ecs",
        "Weight": 100,
        "Description": "test-112",
        "Port": 82,
        "ServerId": "i-bp1fq61enf4loa5i****",
        "ServerType": "Master"
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

BACKEND\_SERVERS\_NUM\_MUST\_BE\_TWO

Backend servers num must be 2.

400

Mismatched.ZoneId

The zone of the server is not matched with the cloud box loadbalancer.

400

BACKEND\_SERVERS\_HAVE\_SAME\_PORT\_AND\_SERVERID

Backend servers have same port and serverId.

400

BACKEND\_SERVERS\_CAN\_ONLY\_CONTAIN\_ONE\_MASTER\_AND\_ONE\_SLAVE

Backend servers can only contain one master and one slave.

400

BACKEND\_SERVER\_ID\_CAN\_NOT\_EMPTY

Backend server id can not empty.

400

INVALID\_SERVER\_TYPE

Invalid server type.

400

BACKEND\_SERVER\_PORT\_CAN\_NOT\_EMPTY

Backend server port can not empty.

400

RealServerPortNotSupport

Real server port not support.

400

OperationUnsupported.CreateMasterSlaveServerGroup

This type of backend server is not allowed to attached to singleTunnel or anyTunnel lb.

400

IncorrectStatus.RSByPassToas

%s.

400

OperationFailed.ActionNotSupport

The loadbalancer does not support such action.

400

RsTunnelIp2VmNameConflict

%s.

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

See [Error Codes](https://api.alibabacloud.com/document/Slb/2014-05-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Slb/2014-05-15/CreateMasterSlaveServerGroup#workbench-doc-change-demo) for a complete list.
