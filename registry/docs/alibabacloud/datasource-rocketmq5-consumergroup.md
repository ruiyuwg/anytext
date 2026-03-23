DATASOURCE::ROCKETMQ5::ConsumerGroup is used to query the information about a consumer group in ApsaraMQ for RocketMQ 5.0.

## Syntax

```
{
  "Type": "DATASOURCE::ROCKETMQ5::ConsumerGroup",
  "Properties": {
    "ConsumerGroupId": String,
    "InstanceId": String,
    "RefreshOptions": String
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

ConsumerGroupId

String

Yes

Yes

The ID of the consumer group.

None.

InstanceId

String

Yes

Yes

The ID of the instance to which the consumer group belongs.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   Status: the status of the consumer group.
    
-   ConsumerGroupId: the ID of the consumer group.
    
-   InstanceId: the ID of the instance.
    
-   ConsumeRetryPolicy: the consumption retry policy for the consumer group.
    
-   CreateTime: the time when the consumer group was created.
    
-   UpdateTime: the time when the consumer group was last updated.
    
-   DeliveryOrderType: the delivery order type of the consumer group.
    
-   Remark: the remarks on the consumer group.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ConsumerGroupId:
    Type: String
    Description:
      en: The ID of the consumer group.
    Required: true
  InstanceId:
    Type: String
    Description:
      en: The ID of the instance to which the consumer group belongs.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ROCKETMQ5::ConsumerGroup
    Properties:
      ConsumerGroupId:
        Ref: ConsumerGroupId
      InstanceId:
        Ref: InstanceId
Outputs:
  Status:
    Description: The state of the consumer group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Status
  ConsumerGroupId:
    Description: The ID of the consumer group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ConsumerGroupId
  InstanceId:
    Description: The ID of the RocketMQ instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceId
  ConsumeRetryPolicy:
    Description: 'The consumption retry policy that you want to configure for the consumer group. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ConsumeRetryPolicy
  CreateTime:
    Description: The time when the consumer group was created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  UpdateTime:
    Description: The time when the consumer group was last updated.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - UpdateTime
  DeliveryOrderType:
    Description: The message delivery order of the consumer group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DeliveryOrderType
  Remark:
    Description: The remarks on the consumer group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Remark
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ConsumerGroupId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the consumer group."
      },
      "Required": true
    },
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the instance to which the consumer group belongs."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ROCKETMQ5::ConsumerGroup",
      "Properties": {
        "ConsumerGroupId": {
          "Ref": "ConsumerGroupId"
        },
        "InstanceId": {
          "Ref": "InstanceId"
        }
      }
    }
  },
  "Outputs": {
    "Status": {
      "Description": "The state of the consumer group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Status"
        ]
      }
    },
    "ConsumerGroupId": {
      "Description": "The ID of the consumer group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ConsumerGroupId"
        ]
      }
    },
    "InstanceId": {
      "Description": "The ID of the RocketMQ instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceId"
        ]
      }
    },
    "ConsumeRetryPolicy": {
      "Description": "The consumption retry policy that you want to configure for the consumer group. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ConsumeRetryPolicy"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the consumer group was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "UpdateTime": {
      "Description": "The time when the consumer group was last updated.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "UpdateTime"
        ]
      }
    },
    "DeliveryOrderType": {
      "Description": "The message delivery order of the consumer group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DeliveryOrderType"
        ]
      }
    },
    "Remark": {
      "Description": "The remarks on the consumer group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Remark"
        ]
      }
    }
  }
}
                        
```
