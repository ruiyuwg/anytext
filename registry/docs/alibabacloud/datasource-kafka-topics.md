DATASOURCE::KAFKA::Topics is used to query the information about topics.

## Syntax

```
{
  "Type": "DATASOURCE::KAFKA::Topics",
  "Properties": {
    "InstanceId": String,
    "Topic": String,
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

The ID of the instance to which the topic belongs.

None.

Topic

String

Yes

Yes

The topic name.

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

Topics: details of the topics.

**Property**

**Type**

**Description**

**Constraint**

Topics

List

Details of the topics.

None.

Topic

String

The topic name.

None.

PartitionNum

Number

The number of partitions in the topic.

None.

Tags

String

The tags.

None.

StatusName

String

The state of the topic.

None.

InstanceId

String

The ID of the instance to which the topic belongs.

None.

Remark

String

The remarks.

None.

CompactTopic

String

The log cleanup policy that the topic uses. This property is returned when **LocalTopic** is set to **true**.

None.

CreateTime

String

The timestamp that indicates when the topic was created. Unit: milliseconds.

None.

QuotaData

String

The quota data.

None.

LocalTopic

String

The storage type of the topic.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Description:
      en: Resource id.
    Required: true
    Type: String
  Topic:
    Description:
      en: Topic Name.
    Required: true
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      InstanceId:
        Ref: InstanceId
      Topic:
        Ref: Topic
    Type: DATASOURCE::KAFKA::Topics
Outputs:
  Topics:
    Description: The list of topics.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Topics
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "Resource id."
      },
      "Required": true
    },
    "Topic": {
      "Type": "String",
      "Description": {
        "en": "Topic Name."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::KAFKA::Topics",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "Topic": {
          "Ref": "Topic"
        }
      }
    }
  },
  "Outputs": {
    "Topics": {
      "Description": "The list of topics.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Topics"
        ]
      }
    }
  }
}
                        
```
