ALIYUN::ROCKETMQ::Group is used to create a Group ID on the ROCKETMQ client. The Group ID that you create is used to publish and subscribe to messages.

## Syntax

```
{
  "Type": "ALIYUN::ROCKETMQ::Group",
  "Properties": {
    "InstanceId": String,
    "GroupType": String,
    "Remark": String,
    "GroupId": String
  }
}
```

## Properties

     

Parameter

Data type

Required

Editable

Description

Constraint

InstanceId

String

Yes

No

The ID of the instance corresponding to the group ID that you want to create.

N/A

GroupType

String

No

No

Protocol for a Group ID

Valid values:

-   tcp: The default value. A Group ID is applicable only when you send and receive messages over TCP.
-   http: a Group ID can be used only for sending and receiving HTTP messages.

Remark

String

No

No

Remarks

N/A

GroupId

String

Yes

No

The Group ID of the consumer cluster.

To `GID_` or `GID-` and can contain letters, digits, hyphen (-), and underscores (\_). The description must be 5 to 64 characters in length.

## Error code

Fn::GetAtt

-   GroupType: The protocol to which the Group ID you created applies.
-   InstanceId: The ID of the instance.
-   GroupId: The ID of the created Group.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Resources:
      Group:
        Type: 'ALIYUN::ROCKETMQ::Group'
        Properties:
          InstanceId:
            Ref: InstanceId
          GroupType:
            Ref: GroupType
          Remark:
            Ref: Remark
          GroupId:
            Ref: GroupId
    Parameters:
      InstanceId:
        Type: String
        Description: The ID of the instance.
      GroupType:
        Type: String
        Description: >-
          Group ID specifies the creation of applicable agreements. Group ID TCP
          protocol and the HTTP protocol can not be shared and the need to create
          separately. Value as follows:
    
          tcp: Default, indicates Group ID is created only for the TCP protocol
          messaging.
    
          http: represents the Group ID was created only for the HTTP protocol
          messaging.
        AllowedValues:
          -tcp
          -http
      Remark:
        Type: String
        Description: The remarks on the request.
      GroupId:
        MinLength: 7
        Type: String
        Description: >-
          The group ID of the consumption cluster. When creating a group ID, pay
          attention to the following aspects:
    
          A group ID starts with"GID_" or "GID-", and contains letters, numbers,
          hyphens (-), and underscores (_).
    
          A group ID ranges from 7 to 64 bytes.
    
          Once a group ID is created, it cannot be edited anymore.
        MaxLength: 64
    Outputs:
      GroupType:
        Description: Group Type
        Value:
          'Fn::GetAtt':
            -Group
            -GroupType
      InstanceId:
        Description: Instance ID
        Value:
          'Fn::GetAtt':
            -Group
            - InstanceId
      GroupId:
        Description: Group ID
        Value:
          'Fn::GetAtt':
            -Group
            -GroupId
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Resources": {
        "Group": {
          "Type": "ALIYUN::ROCKETMQ::Group",
          "Properties": {
            "InstanceId": {
              "Ref": "InstanceId"
            },
            "GroupType": {
              "Ref": "GroupType"
            },
            "Remark": {
              "Ref": "Remark"
            },
            "GroupId": {
              "Ref": "GroupId"
            }
          }
        }
      },
      "Parameters": {
        "InstanceId": {
          "Type": "String",
          "Description": "The ID of the instance."
        },
        "GroupType": {
          "Type": "String",
          "Description": "Group ID specifies the creation of applicable agreements. Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:\ntcp: Default, indicates Group ID is created only for the TCP protocol messaging.\nhttp: represents the Group ID was created only for the HTTP protocol messaging.",
          "AllowedValues": [
            "tcp",
            "http"
          ]
        },
        "Remark": {
          "Type": "String",
          "Description": "The remarks on the request."
        },
        "GroupId": {
          "MinLength": 7,
          "Type": "String",
          "Description": "The group ID of the consumption cluster. When creating a group ID, pay attention to the following aspects:\nA group ID starts with\"GID_\" or \"GID-\", and contains letters, numbers, hyphens (-), and underscores (_).\nA group ID ranges from 7 to 64 bytes.\nOnce a group ID is created, it cannot be edited anymore.",
          "MaxLength": 64
        }
      },
      "Outputs": {
        "GroupType": {
          "Description": "Group Type",
          "Value": {
            "Fn::GetAtt": [
              "Group",
              "GroupType"
            ]
          }
        },
        "InstanceId": {
          "Description": "Instance ID",
          "Value": {
            "Fn::GetAtt": [
              "Group",
              "InstanceId"
            ]
          }
        },
        "GroupId": {
          "Description": "Group ID",
          "Value": {
            "Fn::GetAtt": [
              "Group",
              "GroupId"
            ]
          }
        }
      }
    }
    ```
