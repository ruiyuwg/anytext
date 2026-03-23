ALIYUN::FC::Service is used to create a service in Function Compute.

All functions of a service share the same configurations, such as service authorization and log settings. A service can have multiple functions, all of which share the service resources, such as the Logstores and Resource Access Management (RAM) roles. A service is the basic unit for O&M management and helps you clearly organize your business logic. A service can be considered as an application. The functions that are used to create the same application belong to a single service. Services are independent of each other and cannot share resources with each other.

## Syntax

```
{
  "Type": "ALIYUN::FC::Service",
  "Properties": {
    "Description": String,
    "VpcConfig": Map,
    "ServiceName": String,
    "Role": String,
    "DeletionForce": Boolean,
    "Tags": List,
    "NasConfig": Map,
    "LogConfig": Map,
    "TracingConfig": Map,
    "InternetAccess": Boolean,
    "VpcBindings": List,
    "OssMountConfig": Map
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Description

String

No

Yes

The description of the service.

None.

VpcConfig

Map

No

Yes

The configurations of the virtual private cloud (VPC). The configurations allow functions to access the specified VPC.

For more information, see [VpcConfig properties](#section-9l4-hcb-3f6).

Example of VpcConfig if you want to delete the VPC configurations when you update a stack:

```
{
 "VpcId": "",
 "VSwitchIds": [],
 "SecurityGroupId": ""
}
```

**Note**

To support VPCs, Function Compute requires the permissions to create and manage elastic network interfaces (ENIs). Therefore, we recommend that you grant the ecs:CreateNetworkInterface permission to Function Compute.

ServiceName

String

Yes

No

The name of the service.

The name must be 1 to 128 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). It must start with a letter or an underscore (\_).

Role

String

No

Yes

The Alibaba Cloud Resource Name (ARN) of the RAM role that is used to grant the required permissions to Function Compute.

You can use the RAM role in the following scenarios:

-   Send the function execution logs to your Logstore.
    
-   Generate a token for a function to access other cloud resources when the function is invoked.
    

NasConfig

Map

No

Yes

The configurations of File Storage NAS (NAS). The configurations allow functions to access the specified NAS resources.

For more information, see [NasConfig properties](#section-zgf-pgd-3o9).

Example of NasConfig if you want to delete the NAS configurations when you update a stack:

```
{
 "MountPoints": [],
 "UserId": -1,
 "GroupId": -1
}
```

LogConfig

Map

No

Yes

The log configurations. The function logs are written to the Logstore that you specify in the configurations.

For more information, see [LogConfig properties](#section-axf-5ea-8q5).

TracingConfig

Map

No

Yes

The configurations of Managed Service for OpenTelemetry.

After Function Compute is integrated with Managed Service for OpenTelemetry, you can record the duration of a request in Function Compute, view the cold start duration of a function, and record the execution duration of a function.

For more information, see [TracingConfig properties](#section-qy0-g7q-l0g).

InternetAccess

Boolean

No

Yes

Specifies whether the functions can access the Internet.

Valid values:

-   true
    
-   false
    

DeletionForce

Boolean

No

Yes

Specifies whether to forcefully delete the service.

This property takes effect when VpcConfig is specified. Valid values:

-   true: forcefully deletes the service. The service is deleted before all ENIs that Function Compute creates for the service are deleted.
    
    **Note**
    
    If the service is created based on the vSwitch or security group that you specify in the ALIYUN::FC::Service resource type, you can set DeletionForce to true when you delete the service. This way, the service is deleted with less waiting time.
    
-   false (default): does not forcefully delete the service. The service is deleted until all ENIs that Function Compute creates for the service are deleted.
    

If the service is created based on a vSwitch or security group created in the current stack, you do not need to specify DeletionForce when you delete the service. After you delete the service, make sure that the functions of the service are not invoked within 1 hour to delete the ENIs and the stack as expected.

Tags

List

No

Yes

The tags.

You can add up to 20 tags.

For more information, see [Tags properties](#section-4zh-1ll-zwf).

VpcBindings

List

No

Yes

The IDs of the VPCs that you want to bind to Function Compute.

By default, you can use public endpoints and private endpoints to invoke created functions. If you want to invoke a function over the specified VPCs, you must bind the VPCs to Function Compute.

You can specify up to 20 VPCs.

OssMountConfig

Map

No

Yes

The mount configurations of Object Storage Service (OSS).

For more information, see [OssMountConfig property](#981da89304m1o).

## LogConfig syntax

```
"LogConfig": {
  "Project": String,
  "Logstore": String,
  "EnableRequestMetrics": Boolean,
  "LogBeginRule": String   
}
```

## LogConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Project

String

No

Yes

The name of the project in LogHub.

None.

Logstore

String

No

Yes

The name of the Logstore in LogHub.

None.

EnableRequestMetrics

Boolean

No

Yes

Specifies whether to enable request monitoring.

Valid values:

-   true
    
-   false
    

LogBeginRule

String

No

Yes

The log segmentation rule.

None.

## VpcConfig syntax

```
"VpcConfig": {
  "SecurityGroupId": String,
  "VSwitchIds": List,
  "VpcId": String,
  "ZoneId": String
}
```

## VpcConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

SecurityGroupId

String

Yes

Yes

The ID of the security group.

None.

VSwitchIds

List

Yes

Yes

The IDs of the vSwitches.

None.

VpcId

String

Yes

Yes

The ID of the VPC.

None.

ZoneId

String

No

Yes

The ID of the zone.

None.

## NasConfig syntax

```
"NasConfig": {
  "MountPoints": List,
  "UserId": Integer,
  "GroupId": Integer
}
```

## NasConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

MountPoints

List

Yes

Yes

The mount targets.

For more information, see [MountPoints properties](#e8605e5404m2m).

UserId

Integer

Yes

Yes

The ID of the user.

Valid values: -1 to 65534.

GroupId

Integer

Yes

Yes

The ID of the group.

Valid values: -1 to 65534.

## TracingConfig syntax

```
"TracingConfig": {
  "Type": String,
  "Params": Map
}
```

## TracingConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Type

String

No

Yes

The type of the tracing system.

None.

Params

Map

No

Yes

The parameters of Managed Service for OpenTelemetry.

None.

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]  
```

## Tags properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

Yes

No

The key of the tag.

The key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Value

String

No

No

The value of the tag.

The value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

## OssMountConfig syntax

```
"OssMountConfig": {
  "MountPoints": List
}
```

## OssMountConfig property

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

MountPoints

List

Yes

Yes

The detailed configurations of the OSS mount targets.

For more information, see [MountPoints properties](#e8605e5404m2m).

## MountPoints syntax

```
"MountPoints":  [
  {
    "ServerAddr": String,
    "MountDir": String
  }
]
```

## MountPoints properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ServerAddr

String

Yes

Yes

The address of the NAS server.

None.

MountDir

String

Yes

Yes

The local mount directory.

None.

## Return values

Fn::GetAtt

-   ServiceId: the ID of the service. The system generates a unique ID for each service.
    
-   ServiceName: the name of the service.
    
-   Tags: the tags.
    
-   Role: the RAM role.
    
-   LogProject: the log project.
    
-   Logstore: the Logstore.
    
-   InternetAccess: indicates whether the functions can access the Internet.
    
-   VpcId: the ID of the VPC.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test FC
Parameters: {}
Resources:
  Service:
    Type: ALIYUN::FC::Service
    Properties:
      ServiceName: mytest
Outputs: {}                 
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test FC",
  "Parameters": {
  },
  "Resources": {
    "Service": {
      "Type": "ALIYUN::FC::Service",
      "Properties": {
        "ServiceName": "mytest"
      }
    }
  },
  "Outputs": {
  }
}
```
