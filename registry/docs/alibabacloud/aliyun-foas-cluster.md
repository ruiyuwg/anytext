ALIYUN::FOAS::Cluster is used to create a cluster for an order in exclusive mode.

## Syntax

```
{
  "Type": "ALIYUN::FOAS::Cluster",
  "Properties": {
    "OrderId": String,
    "Description": String,
    "ClusterName": String,
    "OssBucket": String,
    "VSwitchId": String,
    "Order": Map
  }
}
```

## Properties

     

Name

Type

Required

Editable

Description

Validity

OrderId

String

No

No

The ID of the order.

You can only specify either Order or OrderId. We recommend that you use OrderId.

Description

String

Yes

No

The description of the cluster.

None.

ClusterName

String

Yes

No

The name of the cluster.

The name must be 3 to 64 characters in length, and can contain lowercase letters, digits, and underscores (\_). It must start with a letter.

OssBucket

String

Yes

No

The name of the bucket in OSS.

None.

VSwitchId

String

Yes

Yes

The ID of the vSwitch.

None.

Order

Map

No

Yes

The details of the order.

The AliyunBSSFullAccess policy must be attached to the StreamDefaultRole role. The order cannot be canceled.

## Order syntax

```
"Order": {
  "PayModel": String,
  "SlaveSpec": String,
  "MasterSpec": String,
  "SlaveNumber": Integer,
  "Period": Integer,
  "MasterNumber": Integer
}
```

## Order properties

     

Name

Type

Required

Editable

Description

Validity

PayModel

String

No

No

The billing method. Default value: post.

Valid values:

-   pre: subscription.
-   post: pay-as-you-go.

SlaveSpec

String

Yes

No

The type of the Slave instance. Example: Ecs\_8c32g.

None.

MasterSpec

String

Yes

Yes

The type of the Master instance. Example: Ecs\_4c16g.

None.

SlaveNumber

Integer

No

Yes

The number of Slave instances.

Valid values: 2 to 1000. Default value: 2.

Period

Integer

No

No

The subscription duration. Unit: month.

Valid values: 1 to 12. Default value: 1.

MasterNumber

Integer

No

No

The number of Master instances.

Valid values: 1 and 3. Default value: 3.

## Response parameters

Fn::GetAtt

-   OrderId: the ID of the order.
-   MasterInstanceInfos: the Master instance information.
-   SecurityGroupId: the ID of the security group.
-   ClusterId: the ID of the cluster.
-   VSwitchIds: the ID of the vSwitch.
-   State: the cluster status.
-   EngineVersions: the engine version.
-   SlaveInstanceInfos: the Slave instance information.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "Cluster": {
      "Type": "ALIYUN::FOAS::Cluster",
      "Properties": {
        "OrderId": {
          "Ref": "OrderId"
        },
        "Description": {
          "Ref": "Description"
        },
        "ClusterName": {
          "Ref": "ClusterName"
        },
        "OssBucket": {
          "Ref": "OssBucket"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "Order": {
          "Ref": "Order"
        }
      }
    }
  },
  "Parameters": {
    "OrderId": {
      "MinLength": 1,
      "Type": "String",
      "Description": "Order Id. Only one of property Order or OrderId can be specified.\nOrderId is suggested."
    },
    "Description": {
      "MinLength": 1,
      "Type": "String",
      "Description": "Cluster description."
    },
    "ClusterName": {
      "AllowedPattern": "[a-z][a-z0-9_]{2,63}",
      "Type": "String",
      "Description": "Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters."
    },
    "OssBucket": {
      "MinLength": 1,
      "Type": "String",
      "Description": "Bucket name in your OSS."
    },
    "VSwitchId": {
      "MinLength": 1,
      "Type": "String",
      "Description": "vSwitch ID."
    },
    "Order": {
      "Type": "Json",
      "Description": "Order detail. Only one of property Order or OrderId can be specified. Order is not suggested. Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console. The order can not be cancelled."
    }
  },
  "Outputs": {
    "OrderId": {
      "Description": "Order ID.",
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "OrderId"
        ]
      }
    },
    "MasterInstanceInfos": {
      "Description": "Master instance infos.",
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "MasterInstanceInfos"
        ]
      }
    },
    "SecurityGroupId": {
      "Description": "Security group Id.",
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "SecurityGroupId"
        ]
      }
    },
    "ClusterId": {
      "Description": "Cluster ID.",
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "ClusterId"
        ]
      }
    },
    "VSwitchIds": {
      "Description": "VSwitch Ids.",
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "VSwitchIds"
        ]
      }
    },
    "State": {
      "Description": "Cluster status.",
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "State"
        ]
      }
    },
    "EngineVersions": {
      "Description": "Engine Versions.",
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "EngineVersions"
        ]
      }
    },
    "SlaveInstanceInfos": {
      "Description": "Slave instance infos.",
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "SlaveInstanceInfos"
        ]
      }
    }
  }
}
```

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  Cluster:
    Type: ALIYUN::FOAS::Cluster
    Properties:
      OrderId:
        Ref: OrderId
      Description:
        Ref: Description
      ClusterName:
        Ref: ClusterName
      OssBucket:
        Ref: OssBucket
      VSwitchId:
        Ref: VSwitchId
      Order:
        Ref: Order
Parameters:
  OrderId:
    MinLength: 1
    Type: String
    Description: |-
      Order Id. Only one of property Order or OrderId can be specified.
      OrderId is suggested.
  Description:
    MinLength: 1
    Type: String
    Description: Cluster description.
  ClusterName:
    AllowedPattern: "[a-z][a-z0-9_]{2,63}"
    Type: String
    Description: Cluster name. It begins with a letter, and contains only lowercase
      English letters, numbers, underscores (_), and is limited to 3-64 characters.
  OssBucket:
    MinLength: 1
    Type: String
    Description: Bucket name in your OSS.
  VSwitchId:
    MinLength: 1
    Type: String
    Description: vSwitch ID.
  Order:
    Type: Json
    Description: Order detail. Only one of property Order or OrderId can be specified.
      Order is not suggested. Policy AliyunBSSFullAccess must be granted to StreamDefaultRole
      in RAM console.nThe order can not be cancelled.
Outputs:
  OrderId:
    Description: Order ID.
    Value:
      Fn::GetAtt:
      - Cluster
      - OrderId
  MasterInstanceInfos:
    Description: Master instance infos.
    Value:
      Fn::GetAtt:
      - Cluster
      - MasterInstanceInfos
  SecurityGroupId:
    Description: Security group Id.
    Value:
      Fn::GetAtt:
      - Cluster
      - SecurityGroupId
  ClusterId:
    Description: Cluster ID.
    Value:
      Fn::GetAtt:
      - Cluster
      - ClusterId
  VSwitchIds:
    Description: vSwitch Ids.
    Value:
      Fn::GetAtt:
      - Cluster
      - VSwitchIds
  State:
    Description: Cluster status.
    Value:
      Fn::GetAtt:
      - Cluster
      - State
  EngineVersions:
    Description: Engine Versions.
    Value:
      Fn::GetAtt:
      - Cluster
      - EngineVersions
  SlaveInstanceInfos:
    Description: Slave instance infos.
    Value:
      Fn::GetAtt:
      - Cluster
      - SlaveInstanceInfos
```
