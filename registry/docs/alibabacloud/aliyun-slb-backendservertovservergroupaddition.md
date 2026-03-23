ALIYUN::SLB::BackendServerToVServerGroupAddition is used to add backend servers to an existing server group.

## Syntax

```
{
  "Type": "ALIYUN::SLB::BackendServerToVServerGroupAddition",
  "Properties": {
    "BackendServers": List,
    "VServerGroupId": String
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

VServerGroupId

String

Yes

No

The ID of the server group.

None.

BackendServers

List

Yes

Yes

Details of the backend servers.

For more information, see [BackendServers properties](#section-ivs-w1d-4do).

## BackendServers syntax

```
"BackendServers": [
  {
    "ServerId": String,
    "Port": Integer,
    "Weight": Integer,
    "Type": String,
    "Description": String,
    "ServerIp": String
  }
]
```

## BackendServers properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ServerId

String

Yes

Yes

The ID of the instance that is used as the backend server.

None.

Port

Integer

Yes

Yes

The port that is used by the backend server.

Valid values: 1 to 65535.

Weight

Integer

No

Yes

The weight of the backend server.

Valid values: 0 to 100.

Type

String

No

Yes

The type of the backend server.

Valid values:

-   ecs (default): Elastic Compute Service (ECS) instance
    
-   eni: elastic network interface (ENI)
    
    **Note**
    
    You can specify ENIs as backend servers only for high-performance Server Load Balancer (SLB) instances.
    

Description

String

No

Yes

The description of the backend server.

The description must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (\_).

ServerIp

String

No

Yes

The IP address of the backend server.

The IP addresses of ECS instances or ENIs are supported.

## Return values

Fn::GetAtt

VServerGroupId: the ID of the server group.

## Examples

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VServerGroupId:
    Type: String
    Description: The ID of virtual server group.
    Default: rsp-wz9j5sanme***
  BackendServers:
    Type: Json
    Description: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
    Default:
      - Type: ecs
        ServerId: i-wz9c46a4ejwyj*****
        Port: 80
        Weight: 100
Resources:
  BackendServerToVServerGroupAddition:
    Type: ALIYUN::SLB::BackendServerToVServerGroupAddition
    Properties:
      VServerGroupId:
        Ref: VServerGroupId
      BackendServers:
        Ref: BackendServers
Outputs:
  VServerGroupId:
    Description: The ID of virtual server group.
    Value:
      Fn::GetAtt:
        - BackendServerToVServerGroupAddition
        - VServerGroupId
```

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VServerGroupId": {
      "Type": "String",
      "Description": "The ID of virtual server group.",
      "Default": "rsp-wz9j5sanme***"
    },
    "BackendServers": {
      "Type": "Json",
      "Description": "The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.",
      "Default": [
        {
          "Type": "ecs",
          "ServerId": "i-wz9c46a4ejwyj*****",
          "Port": 80,
          "Weight": 100
        }
      ]
    }
  },
  "Resources": {
    "BackendServerToVServerGroupAddition": {
      "Type": "ALIYUN::SLB::BackendServerToVServerGroupAddition",
      "Properties": {
        "VServerGroupId": {
          "Ref": "VServerGroupId"
        },
        "BackendServers": {
          "Ref": "BackendServers"
        }
      }
    }
  },
  "Outputs": {
    "VServerGroupId": {
      "Description": "The ID of virtual server group.",
      "Value": {
        "Fn::GetAtt": [
          "BackendServerToVServerGroupAddition",
          "VServerGroupId"
        ]
      }
    }
  }
}
```

For more examples, visit [Listener.json](https://github.com/aliyun/ros-templates/tree/master/ResourceTemplates/SLB/JSON/Listener.json) and [Listener.yml](https://github.com/aliyun/ros-templates/tree/master/ResourceTemplates/SLB/YAML/Listener.yml). In the examples, the following resource types are used: ALIYUN::SLB::Listener, ALIYUN::SLB::LoadBalancerClone, ALIYUN::SLB::Certificate, ALIYUN::SLB::DomainExtension, ALIYUN::SLB::VServerGroup, ALIYUN::SLB::Rule, and ALIYUN::SLB::BackendServerToVServerGroupAddition.
