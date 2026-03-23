Retrieves the details of a specific application on a PolarDB instance.

## Operation description

This API returns details about a PolarDB application, such as its component details and endpoints.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeApplicationAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeApplicationAttribute)

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

polardb:DescribeApplicationAttribute

get

\*All Resource

`*`

None

None

## Request syntax

```
POST  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

ApplicationId

string

Yes

The application ID.

pa-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response schema.

RequestId

string

The request ID.

3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF

ApplicationId

string

The application ID.

pa-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

DBClusterId

string

The ID of the DB cluster that the application depends on.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Architecture

string

The CPU architecture. Valid value:

-   `x86`
    

x86

Description

string

The application description.

myapp

SecurityGroups

array<object>

The application-level security groups.

object

An application-level security group.

SecurityGroupName

string

The name of the security group.

MyGroupName

SecurityGroupId

string

The ID of the security group.

sg-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RegionId

string

The region ID.

cn-beijing

NetType

string

The network type. Valid value:

-   vpc
    

vpc

SecurityIPArrays

array<object>

The application-level IP whitelists.

object

An application-level IP whitelist.

SecurityIPArrayTag

string

The tag of the IP address group.

mytag

SecurityIPType

string

The type of the IP address.

ipv4

SecurityIPList

string

The IP addresses in the whitelist. Separate multiple IP addresses with a comma (,).

127.0.0.1

SecurityIPArrayName

string

The name of the IP address group. Default value: `default`.

default

SecurityIPNetType

string

The network type of the IP addresses in the whitelist. Default value: `mix`.

mix

Status

string

The application status. Valid values:

-   Creating: The application is being created.
    
-   Activated: The application is running.
    
-   Maintaining: The application is under maintenance.
    
-   ClassChanging: The application configuration is being changed.
    
-   Transing: The application is being migrated.
    
-   MinorVersionUpgrading: The minor version of the application is being upgraded.
    
-   NetCreating: The endpoint is being created.
    
-   NetDeleting: The endpoint is being deleted.
    
-   NetModifying: The endpoint is being modified.
    
-   Restarting: The application is restarting.
    
-   Locking: The application is being locked.
    
-   Locked: The application is locked.
    
-   Unlocking: The application is being unlocked.
    
-   Deleting: The application is being deleted.
    

Activated

LockMode

string

The lock mode. Valid values:

-   Unlock: The application is not locked.
    
-   Lock: The application is locked.
    

Unlock

ApplicationType

string

The application type.

supabase

Version

string

The application version.

1.0.0

UpgradeAvailable

string

Specifies whether an upgrade is available.

false

MaintainStartTime

string

The start time of the maintenance window.

18:00Z

MaintainEndTime

string

The end time of the maintenance window.

19:00Z

PayType

string

The billing method.

Postpaid

Expired

boolean

Specifies whether the application has expired.

false

VPCId

string

The ID of the virtual private cloud (VPC).

vpc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

VSwitchId

string

The vSwitch ID.

vsw-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Components

array<object>

The child components.

array<object>

A child component.

Status

string

The component status. The valid values are the same as those for the application status.

Activated

SecurityGroups

array<object>

The component-level security groups.

This parameter is omitted if the component uses the same security groups as the application.

object

A component-level security group.

SecurityGroupName

string

The name of the security group.

MyGroupName

SecurityGroupId

string

The ID of the security group.

sg-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

RegionId

string

The region ID.

cn-beijing

NetType

string

The network type. Valid value:

-   vpc
    

vpc

ComponentType

string

The type of the child component.

gateway

Topology

object

The topology of the child component.

Parents

array

The IDs or component types of the parent nodes for this component.

string

The ID or component type of a parent node for this component.

pac-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Children

array

The IDs or component types of the child nodes for this component.

string

The ID or component type of a child node for this component.

pac-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Layer

string

The topology level of the child component.

0

SecurityIPArrays

array<object>

The component-level IP whitelists.

This parameter is omitted if the component uses the same IP whitelists as the application.

object

A component-level IP whitelist.

SecurityIPArrayTag

string

The tag of the IP address group.

mytag

SecurityIPType

string

The type of the IP address.

ipv4

SecurityIPList

string

The IP addresses in the whitelist. Separate multiple IP addresses with a comma (,).

127.0.0.1

SecurityIPArrayName

string

The name of the IP address group. Default value: `default`.

default

SecurityIPNetType

string

The network type of the IP addresses in the whitelist. Default value: `mix`.

mix

ComponentClassDescription

string

A description of the component's specifications.

2C4GB

ComponentId

string

The child component ID.

pac-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ComponentClass

string

The specifications of the child component.

polar.app.g2.medium

ComponentReplica

integer

The number of replicas for the child component.

1

ComponentMaxReplica

integer

The maximum number of replicas for the child component.

1

ComponentReplicaGroupName

string

The replica group name of the child component.

default

Endpoints

array<object>

The application endpoints.

object

An application endpoint.

Description

string

The endpoint description.

myendpoint

PortDescription

string

The port description.

kong\_http

EndpointId

string

The endpoint ID.

pa-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

IP

string

The IP address.

172.31.95.252

Port

string

The port.

8080

NetType

string

The endpoint type. Valid values:

-   Private: A private endpoint within a VPC.
    
-   Public: A public endpoint accessible from the internet.
    

Private

CreationTime

string

The creation time.

2025-03-25T09:37:10Z

ExpireTime

string

The expiration time.

This parameter is empty for pay-as-you-go applications.

2025-06-25T09:37:10Z

RegionId

string

The region ID.

cn-beijing

ZoneId

string

The zone ID.

cn-beijing-l

PolarFSInstanceId

string

The ID of the PolarFileSystem (PolarFS) instance.

pfs-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ServerlessType

string

The serverless type. Valid values:

-   2: Agile
    
-   3: Stable
    

2

MemApplicationAttribute

object

LlmModelName

string

EmbedderModelName

string

RerankerModelName

string

ProjectName

string

DbName

string

UserName

string

MinorVersion

string

LatestVersion

string

IsLatestVersion

boolean

## Examples

Success response

`JSON` format

```
{
  "RequestId": "3E5CD764-FCCA-5C9C-838E-20E0DE84B2AF",
  "ApplicationId": "pa-**************",
  "DBClusterId": "pc-**************",
  "Architecture": "x86",
  "Description": "myapp",
  "SecurityGroups": [
    {
      "SecurityGroupName": "MyGroupName",
      "SecurityGroupId": "sg-**************",
      "RegionId": "cn-beijing",
      "NetType": "vpc"
    }
  ],
  "SecurityIPArrays": [
    {
      "SecurityIPArrayTag": "mytag",
      "SecurityIPType": "ipv4",
      "SecurityIPList": "127.0.0.1",
      "SecurityIPArrayName": "default",
      "SecurityIPNetType": "mix"
    }
  ],
  "Status": "Activated",
  "LockMode": "Unlock",
  "ApplicationType": "supabase",
  "Version": "1.0.0",
  "UpgradeAvailable": "false",
  "MaintainStartTime": "18:00Z",
  "MaintainEndTime": "19:00Z",
  "PayType": "Postpaid",
  "Expired": false,
  "VPCId": "vpc-*******************",
  "VSwitchId": "vsw-*******************",
  "Components": [
    {
      "Status": "Activated",
      "SecurityGroups": [
        {
          "SecurityGroupName": "MyGroupName",
          "SecurityGroupId": "sg-*******************\n",
          "RegionId": "cn-beijing",
          "NetType": "vpc"
        }
      ],
      "ComponentType": "gateway",
      "Topology": {
        "Parents": [
          "pac-**************"
        ],
        "Children": [
          "pac-**************"
        ],
        "Layer": "0"
      },
      "SecurityIPArrays": [
        {
          "SecurityIPArrayTag": "mytag",
          "SecurityIPType": "ipv4",
          "SecurityIPList": "127.0.0.1",
          "SecurityIPArrayName": "default",
          "SecurityIPNetType": "mix"
        }
      ],
      "ComponentClassDescription": "2C4GB",
      "ComponentId": "pac-*******************",
      "ComponentClass": "polar.app.g2.medium",
      "ComponentReplica": 1,
      "ComponentMaxReplica": 1,
      "ComponentReplicaGroupName": "default"
    }
  ],
  "Endpoints": [
    {
      "Description": "myendpoint",
      "PortDescription": "kong_http",
      "EndpointId": "pa-**************",
      "IP": "172.31.95.252",
      "Port": "8080",
      "NetType": "Private"
    }
  ],
  "CreationTime": "2025-03-25T09:37:10Z",
  "ExpireTime": "2025-06-25T09:37:10Z",
  "RegionId": "cn-beijing",
  "ZoneId": "cn-beijing-l",
  "PolarFSInstanceId": "pfs-**************",
  "ServerlessType": "2",
  "MemApplicationAttribute": {
    "LlmModelName": "",
    "EmbedderModelName": "",
    "RerankerModelName": "",
    "ProjectName": "",
    "DbName": "",
    "UserName": ""
  },
  "MinorVersion": "",
  "LatestVersion": "",
  "IsLatestVersion": false
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeApplicationAttribute#workbench-doc-change-demo) for a complete list.
