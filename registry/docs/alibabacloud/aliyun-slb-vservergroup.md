ALIYUN::SLB::VServerGroup is used to create a server group and attach backend servers to a Server Load Balancer (SLB) instance.

## Syntax

```
{
  "Type": "ALIYUN::SLB::VServerGroup",
  "Properties": {
    "VServerGroupName": String,
    "BackendServers": List,
    "LoadBalancerId": String,
    "Tags": List
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

VServerGroupName

String

Yes

No

The name of the server group.

None.

BackendServers

List

No

Yes

The backend servers that you want to attach to the SLB instance.

You can attach up to 20 Elastic Compute Service (ECS) instances.

For more information, see [BackendServers properties](#section-xgu-duh-zg3).

LoadBalancerId

String

Yes

No

The ID of the SLB instance.

None.

Tags

List

No

Yes

The tags.

For more information, see [Tags properties](/help/en/ros/developer-reference/aliyun-nlb-listener#section-ec7-4zh-mz8).

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

The ID of the instance that you want to use as the backend server.

None.

Port

Integer

Yes

Yes

The port of the backend server.

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

-   ecs (default): ECS instance
    
-   eni: elastic network interface (ENI)
    

Description

String

No

Yes

The description of the backend server.

The description must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (\_).

ServerIp

String

No

Yes

The IP address of the backend server.

The IP address of an ECS instance or ENI is supported.

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

The tag key.

None.

Value

String

No

No

The tag value.

None.

## Return values

Fn::GetAtt

-   VServerGroupId: the ID of the server group.
    
-   BackendServers: the backend servers that are attached to the SLB instance.
    
-   LoadBalancerId: the ID of the SLB instance.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      LoadBalancerId:
        AssociationProperty: ALIYUN::SLB::Instance::InstanceId
        Type: String
        Description: The id of load balancer.
      ECSInstanceId:
        Type: String
        AssociationProperty: ALIYUN::ECS::Instance::InstanceId
    Resources:
      VServerGroup:
        Type: ALIYUN::SLB::VServerGroup
        Properties:
          VServerGroupName:
            Ref: ALIYUN::StackName
          LoadBalancerId:
            Ref: LoadBalancerId
          BackendServers:
            - ServerId:
                Ref: ECSInstanceId
              Port: '80'
    Outputs:
      VServerGroupId:
        Description: The id of VServerGroup created.
        Value:
          Fn::GetAtt:
            - VServerGroup
            - VServerGroupId
      BackendServers:
        Description: Backend server list in this VServerGroup.
        Value:
          Fn::GetAtt:
            - VServerGroup
            - BackendServers
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "LoadBalancerId": {
          "AssociationProperty":"ALIYUN::SLB::Instance::InstanceId",
          "Type":"String",
          "Description": "The id of load balancer."
        },
        "ECSInstanceId": {
          "Type": "String",
          "AssociationProperty": "ALIYUN::ECS::Instance::InstanceId"
        }
      },
      "Resources": {
        "VServerGroup": {
          "Type": "ALIYUN::SLB::VServerGroup",
          "Properties": {
            "VServerGroupName": {
              "Ref": "ALIYUN::StackName"
            },
            "LoadBalancerId": {
              "Ref": "LoadBalancerId"
            },
            "BackendServers": [
              {
                "ServerId": {
                  "Ref": "ECSInstanceId"
                },
                "Port": "80"
              }
            ]
          }
        }
      },
      "Outputs": {
        "VServerGroupId": {
          "Description": "The id of VServerGroup created.",
          "Value": {
            "Fn::GetAtt": [
              "VServerGroup",
              "VServerGroupId"
            ]
          }
        },
        "BackendServers": {
          "Description": "Backend server list in this VServerGroup.",
          "Value": {
            "Fn::GetAtt": [
              "VServerGroup",
              "BackendServers"
            ]
          }
        }
      }
    }
    ```
