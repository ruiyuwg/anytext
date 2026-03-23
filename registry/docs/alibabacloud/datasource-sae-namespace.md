The DATASOURCE::SAE::Namespace type obtains the details of a single namespace.

## Syntax

```
{
  "Type": "DATASOURCE::SAE::Namespace",
  "Properties": {
    "NameSpaceShortId": String,
    "NamespaceId": String,
    "RefreshOptions": String
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

NameSpaceShortId

String

No

Yes

The short ID of the namespace.

The region is not required. The ID can be up to 20 characters long and can contain only lowercase letters and digits.

NamespaceId

String

No

Yes

The ID of the namespace.

None

RefreshOptions

String

No

Yes

The refresh policy for the data source resource when the stack is updated.

Valid values:

-   Never (default): The data source resource is never refreshed when the stack is updated.
    
-   Always: The data source resource is always refreshed when the stack is updated.
    

## Return values

Fn::GetAtt

-   Description: The description of the namespace.
    
-   SecurityGroupId: The ID of the security group.
    
-   VSwitchId: The ID of the vSwitch.
    
-   AppCount: The number of applications.
    
-   NotificationExpired: Indicates whether the notification for the change order has expired.
    
-   BelongRegion: The region to which the namespace belongs.
    
-   NameSpaceShortId: The short ID of the namespace.
    
-   NamespaceName: The name of the namespace.
    
-   TenantId: The ID of the tenant in the SAE namespace.
    
-   VpcId: The ID of the virtual private cloud (VPC).
    
-   LastChangeOrderRunning: Indicates whether a change order is running in the namespace.
    
-   UserId: The ID of the user.
    
-   LastChangeOrderId: The ID of the change order.
    
-   VSwitchName: The name of the vSwitch.
    
-   VpcName: The name of the VPC.
    
-   JumpServerIp: The IP address of the jump server.
    
-   NamespaceId: The ID of the namespace.
    
-   JumpServerAppId: The ID of the jump server application.
    
-   LastChangeOrderStatus: The status of the most recent change order.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  NamespaceId:
    Type: String
    Description: The ID of the namespace.
    Required: false
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::SAE::Namespace
    Properties:
      NamespaceId:
        Ref: NamespaceId
Outputs:
  Description:
    Description: The description of the namespace.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Description
  SecurityGroupId:
    Description: The ID of the security group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - SecurityGroupId
  VSwitchId:
    Description: The ID of the vSwitch.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VSwitchId
  AppCount:
    Description: The number of applications.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AppCount
  NotificationExpired:
    Description: Indicates whether the notification for a change order has expired.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - NotificationExpired
  BelongRegion:
    Description: The region to which the namespace belongs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - BelongRegion
  NameSpaceShortId:
    Description: The short ID of the namespace.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - NameSpaceShortId
  NamespaceName:
    Description: The name of the namespace.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - NamespaceName
  TenantId:
    Description: The ID of the tenant in the SAE namespace.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TenantId
  VpcId:
    Description: The ID of the virtual private cloud (VPC).
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VpcId
  LastChangeOrderRunning:
    Description: Indicates whether a change order is running in the namespace.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LastChangeOrderRunning
  UserId:
    Description: The ID of the user.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - UserId
  LastChangeOrderId:
    Description: The ID of the change order.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LastChangeOrderId
  VSwitchName:
    Description: The name of the vSwitch.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VSwitchName
  VpcName:
    Description: The name of the VPC.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VpcName
  JumpServerIp:
    Description: The IP address of the jump server.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - JumpServerIp
  NamespaceId:
    Description: The ID of the namespace.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - NamespaceId
  JumpServerAppId:
    Description: The ID of the jump server application.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - JumpServerAppId
  LastChangeOrderStatus:
    Description: The status of the most recent change order.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LastChangeOrderStatus
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "NamespaceId": {
      "Type": "String",
      "Description": "The ID of the namespace.",
      "Required": false
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SAE::Namespace",
      "Properties": {
        "NamespaceId": {
          "Ref": "NamespaceId"
        }
      }
    }
  },
  "Outputs": {
    "Description": {
      "Description": "The description of the namespace.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Description"
        ]
      }
    },
    "SecurityGroupId": {
      "Description": "The ID of the security group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SecurityGroupId"
        ]
      }
    },
    "VSwitchId": {
      "Description": "The ID of the vSwitch.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VSwitchId"
        ]
      }
    },
    "AppCount": {
      "Description": "The number of applications.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AppCount"
        ]
      }
    },
    "NotificationExpired": {
      "Description": "Indicates whether the notification for a change order has expired.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "NotificationExpired"
        ]
      }
    },
    "BelongRegion": {
      "Description": "The region to which the namespace belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "BelongRegion"
        ]
      }
    },
    "NameSpaceShortId": {
      "Description": "The short ID of the namespace.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "NameSpaceShortId"
        ]
      }
    },
    "NamespaceName": {
      "Description": "The name of the namespace.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "NamespaceName"
        ]
      }
    },
    "TenantId": {
      "Description": "The ID of the tenant in the SAE namespace.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TenantId"
        ]
      }
    },
    "VpcId": {
      "Description": "The ID of the virtual private cloud (VPC).",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VpcId"
        ]
      }
    },
    "LastChangeOrderRunning": {
      "Description": "Indicates whether a change order is running in the namespace.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LastChangeOrderRunning"
        ]
      }
    },
    "UserId": {
      "Description": "The ID of the user.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "UserId"
        ]
      }
    },
    "LastChangeOrderId": {
      "Description": "The ID of the change order.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LastChangeOrderId"
        ]
      }
    },
    "VSwitchName": {
      "Description": "The name of the vSwitch.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VSwitchName"
        ]
      }
    },
    "VpcName": {
      "Description": "The name of the VPC.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VpcName"
        ]
      }
    },
    "JumpServerIp": {
      "Description": "The IP address of the jump server.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "JumpServerIp"
        ]
      }
    },
    "NamespaceId": {
      "Description": "The ID of the namespace.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "NamespaceId"
        ]
      }
    },
    "JumpServerAppId": {
      "Description": "The ID of the jump server application.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "JumpServerAppId"
        ]
      }
    },
    "LastChangeOrderStatus": {
      "Description": "The status of the most recent change order.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LastChangeOrderStatus"
        ]
      }
    }
  }
}
                        
```
