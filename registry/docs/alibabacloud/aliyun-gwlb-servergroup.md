The ALIYUN::GWLB::ServerGroup type is used to create a server group.

## Syntax

```
{
  "Type": "ALIYUN::GWLB::ServerGroup",
  "Properties": {
    "VpcId": String,
    "ConnectionDrainConfig": Map,
    "HealthCheckConfig": Map,
    "Protocol": String,
    "ResourceGroupId": String,
    "Scheduler": String,
    "Servers": List,
    "ServerGroupType": String,
    "ServerGroupName": String,
    "Tags": List
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

VpcId

String

Yes

No

The ID of the VPC instance.

**Note**

If **ServerGroupType** is set to **Instance**, only servers in this VPC can be added to the server group.

ConnectionDrainConfig

Map

No

Yes

The configuration of connection draining.

For more information, see [ConnectionDrainConfig properties](#dc10c80deaiwu).

HealthCheckConfig

Map

No

Yes

The health check configuration.

For more information, see [HealthCheckConfig properties](#5da741dc58m3c).

Protocol

String

No

No

The backend forwarding protocol.

Valid value:

-   **GENEVE** (default)
    

ResourceGroupId

String

No

No

The ID of the resource group.

None

Scheduler

String

No

Yes

The scheduling algorithm.

Valid values:

-   **5TCH** (default): 5-tuple hashing. This is consistent hashing based on a 5-tuple (source IP address, destination IP address, source port, destination port, and protocol). The same stream is scheduled to the same backend server.
    
-   **3TCH**: Trituple hashing. This is consistent hashing based on a trituple (source IP address, destination IP address, and protocol). The same stream is scheduled to the same backend server.
    
-   **2TCH**: 2-tuple hashing. This is consistent hashing based on a 2-tuple (source IP address and destination IP address). The same stream is scheduled to the same backend server.
    

Servers

List

No

Yes

The list of backend servers.

For more information, see [Servers properties](#fce5af3c96yjy).

ServerGroupType

String

No

No

The type of the server group.

Valid values:

-   **Instance** (default): The server group contains instances. You can add ECS instances, ENIs, and ECI instances to this type of server group.
    
-   **Ip**: The server group contains IP addresses. You can directly add backend servers by specifying their IP addresses.
    

ServerGroupName

String

No

Yes

The name of the server group.

The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character and can contain digits, periods (.), underscores (\_), and hyphens (-).

Tags

List

No

Yes

The custom tags.

For more information, see [Tags properties](#0f42d035427k7).

## ConnectionDrainConfig syntax

```
"ConnectionDrainConfig": {
  "ConnectionDrainEnabled": Boolean,
  "ConnectionDrainTimeout": Integer
}
```

## ConnectionDrainConfig properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

ConnectionDrainEnabled

Boolean

No

Yes

Specifies whether to enable connection draining.

Valid values:

-   **true**: Enables.
    
-   **false** (default): Disables.
    

ConnectionDrainTimeout

Integer

No

Yes

The timeout period for connection draining.

Unit: seconds.

Valid values: **1** to **3600**.

Default value: **300**.

## HealthCheckConfig syntax

```
"HealthCheckConfig": {
  "HealthCheckInterval": Integer,
  "HealthCheckConnectPort": Integer,
  "UnhealthyThreshold": Integer,
  "HealthyThreshold": Integer,
  "HealthCheckPath": String,
  "HealthCheckProtocol": String,
  "HealthCheckConnectTimeout": Integer,
  "HealthCheckDomain": String,
  "HealthCheckEnabled": Boolean,
  "HealthCheckHttpCode": List
}
```

## HealthCheckConfig properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

HealthCheckInterval

Integer

No

Yes

The interval between two consecutive health checks.

Unit: seconds.

Valid values: **1** to **50**.

Default value: **10**.

HealthCheckConnectPort

Integer

No

Yes

The port on the backend server that is used for health checks.

Valid values: **1** to **65535**.

Default value: **80**.

HealthyThreshold

Integer

No

Yes

The number of consecutive successful health checks required to change the health check status of a backend server from failed to healthy.

Valid values: **2** to **10**.

Default value: **2**.

HealthCheckPath

String

No

Yes

The path for health checks.

The path must be 1 to 80 characters in length. It can contain letters, digits, hyphens (-), forward slashes (/), periods (.), percent signs (%), question marks (?), number signs (#), ampersands (&), and the following extended characters: \_;~!()\*\[\]@$^:',+=

The path must start with a forward slash (/).

**Note**

This parameter is valid only when **HealthCheckProtocol** is set to **HTTP**.

HealthCheckProtocol

String

No

Yes

The health check protocol.

Valid values:

-   **TCP** (default): Sends SYN handshake messages to check whether the server port is active.
    
-   **HTTP**: Sends GET requests to simulate browser access and check whether the server application is healthy.
    

HealthCheckConnectTimeout

Integer

No

Yes

The maximum timeout period for a health check response.

Unit: seconds.

Valid values: **1** to **300**.

Default value: **5**.

HealthCheckDomain

String

No

Yes

The domain name for health checks.

Valid values:

-   **$SERVER\_IP** (default): Uses the private IP address of the backend server.
    
-   **domain**: a specific domain name. The domain name must be 1 to 80 characters in length and can contain letters, digits, hyphens (-), and periods (.).
    

**Note**

This parameter is valid only when **HealthCheckProtocol** is set to **HTTP**.

HealthCheckEnabled

Boolean

No

Yes

Specifies whether to enable health checks.

Valid values:

-   **true** (default): Enabled.
    
-   **false**: Disabled.
    

HealthCheckHttpCode

List

No

Yes

The list of HTTP status codes that indicate a healthy state.

The HTTP status codes that indicate a healthy state. Valid values:

-   **http\_2xx**
    
-   **http\_3xx**
    
-   **http\_4xx**
    
-   **http\_5xx**
    

**Note**

This parameter is valid only when **HealthCheckProtocol** is set to **HTTP**.

UnhealthyThreshold

Integer

No

Yes

The number of consecutive failed health checks required to change the health check status of a backend server from healthy to failed.

Valid values: **2** to **10**.

Default value: **2**.

## Servers syntax

```
"Servers": [
  {
    "ServerType": String,
    "ServerId": String,
    "Port": Integer,
    "ServerIp": String
  }
]
```

## Servers properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

ServerType

String

Yes

Yes

The type of the backend server.

Valid values:

-   Ecs: an ECS instance.
    
-   Eni: an ENI.
    
-   Eci: an ECI instance.
    
-   Ip: an IP address.
    

ServerId

String

Yes

Yes

The ID of the backend server.

None

Port

Integer

No

No

The port used by the backend server.

Valid value:

-   6081
    

ServerIp

String

No

Yes

The IP address of the backend server.

None

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Tags properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Key

String

Yes

No

The tag key.

None

Value

String

No

No

The tag value.

None

## Return values

Fn::GetAtt

-   ConnectionDrainConfig: The configuration for connection draining.
    
-   VpcId: The ID of the VPC.
    
-   ResourceGroupId: The ID of the resource group.
    
-   Scheduler: The scheduling algorithm.
    
-   CreateTime: The time when the resource was created.
    
-   ServerGroupId: The ID of the server group.
    
-   HealthCheckConfig: The health check configuration.
    
-   Protocol: The backend forwarding protocol.
    
-   Servers: The list of backend servers.
    
-   ServerGroupType: The type of the server group.
    
-   Tags: The list of custom tags.
    
-   ServerGroupName: The name of the server group.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VpcId:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Type: String
    Description:
      en: |-
        The VPC instance ID.
        > If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::GWLB::ServerGroup
    Properties:
      VpcId:
        Ref: VpcId
Outputs:
  ConnectionDrainConfig:
    Description: The configuration for connection draining.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ConnectionDrainConfig
  VpcId:
    Description: The ID of the VPC instance.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - VpcId
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ResourceGroupId
  Scheduler:
    Description: The scheduling algorithm.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Scheduler
  CreateTime:
    Description: The time when the server group was created.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CreateTime
  ServerGroupId:
    Description: The ID of the server group.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ServerGroupId
  HealthCheckConfig:
    Description: The health check configuration.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - HealthCheckConfig
  Protocol:
    Description: The backend protocol.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Protocol
  Servers:
    Description: The list of servers.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Servers
  ServerGroupType:
    Description: The server group type.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ServerGroupType
  Tags:
    Description: The list of resource tags.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Tags
  ServerGroupName:
    Description: The server group name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ServerGroupName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VpcId": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Description": {
        "en": "The VPC instance ID.\n> If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GWLB::ServerGroup",
      "Properties": {
        "VpcId": {
          "Ref": "VpcId"
        }
      }
    }
  },
  "Outputs": {
    "ConnectionDrainConfig": {
      "Description": "The configuration for connection draining.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ConnectionDrainConfig"
        ]
      }
    },
    "VpcId": {
      "Description": "The ID of the VPC instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "VpcId"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ResourceGroupId"
        ]
      }
    },
    "Scheduler": {
      "Description": "The scheduling algorithm.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Scheduler"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the server group was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "ServerGroupId": {
      "Description": "The ID of the server group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ServerGroupId"
        ]
      }
    },
    "HealthCheckConfig": {
      "Description": "The health check configuration.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "HealthCheckConfig"
        ]
      }
    },
    "Protocol": {
      "Description": "The backend protocol.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Protocol"
        ]
      }
    },
    "Servers": {
      "Description": "The list of servers.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Servers"
        ]
      }
    },
    "ServerGroupType": {
      "Description": "The server group type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ServerGroupType"
        ]
      }
    },
    "Tags": {
      "Description": "The list of resource tags.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Tags"
        ]
      }
    },
    "ServerGroupName": {
      "Description": "The server group name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ServerGroupName"
        ]
      }
    }
  }
}
                        
```
