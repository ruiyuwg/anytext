DATASOURCE::ROCKETMQ5::ConsumerGroups is used to query consumer groups in ApsaraMQ for RocketMQ 5.0.

## Syntax

```
{
  "Type": "DATASOURCE::ROCKETMQ5::ConsumerGroups",
  "Properties": {
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

InstanceId

String

Yes

Yes

The ID of the instance to which the consumer groups belong.

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

-   ConsumerGroups: the list of consumer groups**.**
    
-   ConsumerGroupIds: the IDs of consumer groups**.**
    

**Property**

**Type**

**Description**

**Constraint**

ConsumerGroupIds

List

None.

None.

ConsumerGroups

List

None.

None.

UpdateTime

String

The time when the consumer group was last updated.

None.

RegionId

String

The region ID of the instance.

None.

CreateTime

String

The time when the consumer group was created.

None.

ConsumerGroupId

String

The ID of the consumer group.

None.

Status

String

The status of the consumer group.

None.

InstanceId

String

The ID of the instance.

None.

Remark

String

The description of the consumer group.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Description:
      en: Instance ID.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      InstanceId:
        Ref: InstanceId
    Type: DATASOURCE::ROCKETMQ5::ConsumerGroups
Outputs:
  ConsumerGroupIds:
    Description: The list of consumer group IDs.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ConsumerGroupIds
  ConsumerGroups:
    Description: The list of consumer groups.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ConsumerGroups
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "Instance ID."
      }
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ROCKETMQ5::ConsumerGroups",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        }
      }
    }
  },
  "Outputs": {
    "ConsumerGroups": {
      "Description": "The list of consumer groups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ConsumerGroups"
        ]
      }
    },
    "ConsumerGroupIds": {
      "Description": "The list of consumer group IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ConsumerGroupIds"
        ]
      }
    }
  }
}
                        
```
