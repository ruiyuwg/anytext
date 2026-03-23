ALIYUN::SLB::MasterSlaveServerGroup is used to create a primary/secondary server group.

**Important**

A primary/secondary server group contains only two Elastic Compute Service (ECS) instances. One instance serves as the primary server. The other ECS instance serves as the secondary server.

## Syntax

```
{
  "Type": "ALIYUN::SLB::MasterSlaveServerGroup",
  "Properties": {
    "MasterSlaveServerGroupName": String,
    "MasterSlaveBackendServers": List,
    "LoadBalancerId": String
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

MasterSlaveServerGroupName

String

No

No

The name of the primary/secondary server group.

None.

MasterSlaveBackendServers

List

Yes

No

The backend servers in the primary/secondary server group.

A primary/secondary server group can contain up to two backend servers. If you do not specify this property, an empty primary/secondary server group is created.

LoadBalancerId

String

Yes

No

The ID of the Server Load Balancer (SLB) instance.

None.

## MasterSlaveBackendServers syntax

```
"MasterSlaveBackendServers": [
  {
    "ServerId": String,
    "Port": Integer,
    "Weight": Integer,
    "ServerType": String,
    "Type": String,
    "ServerIp": String
  }
]
```

## MasterSlaveBackendServers properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ServerId

String

Yes

No

The ID of the ECS instance or elastic network interface (ENI) that you want to add to the primary/secondary server group.

None.

ServerType

String

No

No

The server type.

Valid values:

-   Master (default): primary
    
-   Slave: secondary
    

Port

Integer

Yes

No

The port number that is used by the backend server.

Valid values: 1 to 65535.

Weight

Integer

Yes

No

The weight of the backend server.

Valid values: 0 to 100.

Type

String

No

No

The type of the instance that you want to use as the backend server.

Valid values:

-   **ecs**: ECS instance
    
-   **eni**: ENI
    

ServerIp

String

No

No

The IP address of the ECS instance or ENI.

None.

## Return values

Fn::GetAtt

MasterSlaveServerGroupId: the ID of the primary/secondary server group.

## Examples

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "MasterSlaveServerGroup": {
      "Type": "ALIYUN::SLB::MasterSlaveServerGroup",
      "Properties": {
        "MasterSlaveServerGroupName": "Group1",
        "MasterSlaveBackendServers": [
          {
            "ServerId": "vm****",
            "Port": "80",
            "Weight": "100",
            "ServerType": "Master"
          },
          {
            "ServerId": "vm****",
            "Port": "90",
            "Weight": "100",
            "ServerType": "Slave"
          }
        ],
        "LoadBalancerId": "lb-bp1hv944r69al4j9j****"
      }
    }
  },
  "Outputs": {
    "MasterSlaveServerGroupId": {
      "Value": {
        "Fn::GetAtt": [
          "MasterSlaveServerGroup",
          "MasterSlaveServerGroupId"
        ]
      }
    }
  }
}
```
