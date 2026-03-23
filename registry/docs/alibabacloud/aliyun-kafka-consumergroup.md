ALIYUN::KAFKA::ConsumerGroup is used to create a consumer group.

## Syntax

```
{
  "Type": "ALIYUN::KAFKA::ConsumerGroup",
  "Properties": {
    "InstanceId": String,
    "ConsumerId": String,
    "Tags": List,
    "Remark": String
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

InstanceId

String

Yes

No

The ID of the ApsaraMQ for Kafka instance.

None.

ConsumerId

String

Yes

No

The name of the consumer group.

The name must meet the following requirements:

-   The name can contain only letters, digits, hyphens (-), and underscores (\_) and must contain at least one letter or digit.
    
-   The name must be 3 to 128 characters in length. An overlength value is automatically truncated to 128 characters.
    
-   After a consumer group is created, you cannot change the name of the consumer group.
    

Tags

List

No

Yes

The tags.

You can add 1 to 20 tags. For more information, see [Tags properties](#b8a83b9341vp6).

Remark

String

No

No

The remarks.

None.

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

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Value

String

No

No

The tag value of the consumer group.

-   You can leave this property empty.
    
-   The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
    

Key

String

Yes

No

The tag key of the consumer group.

-   You cannot leave this property empty.
    
-   The tag key can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
    

## Return values

Fn::GetAtt

-   ConsumerId: the ID of the consumer group.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ConsumerId:
    Description:
      en: 'Group name. Value:
        Can only contain letters, numbers, dashes (-), underscores (_), and at least
        one English or number.
        The length is limited to 3 to 128 characters, and more than 128 characters
        will be automatically intercepted.
        Once the group name is created, it cannot be modified.'
    Type: String
  InstanceId:
    Description:
      en: Kafka instance id.
    Type: String
  Remark:
    Description:
      en: Remark description.
    Type: String
Resources:
  ConsumerGroup:
    Properties:
      ConsumerId:
        Ref: ConsumerId
      InstanceId:
        Ref: InstanceId
      Remark:
        Ref: Remark
    Type: ALIYUN::KAFKA::ConsumerGroup
Outputs:
  ConsumerId:
    Description: Consumer group ID
    Value:
      Fn::GetAtt:
      - ConsumerGroup
      - ConsumerId
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "Kafka instance id."
      }
    },
    "ConsumerId": {
      "Type": "String",
      "Description": {
        "en": "Group name. Value:\nCan only contain letters, numbers, dashes (-), underscores (_), and at least one English or number.\nThe length is limited to 3 to 128 characters, and more than 128 characters will be automatically intercepted.\nOnce the group name is created, it cannot be modified."
      }
    },
    "Remark": {
      "Type": "String",
      "Description": {
        "en": "Remark description."
      }
    }
  },
  "Resources": {
    "ConsumerGroup": {
      "Type": "ALIYUN::KAFKA::ConsumerGroup",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "ConsumerId": {
          "Ref": "ConsumerId"
        },
        "Remark": {
          "Ref": "Remark"
        }
      }
    }
  },
  "Outputs": {
    "ConsumerId": {
      "Description": "Consumer group ID",
      "Value": {
        "Fn::GetAtt": [
          "ConsumerGroup",
          "ConsumerId"
        ]
      }
    }
  }
}
                        
```
