DATASOURCE::ROCKETMQ::Instances is used to query the information about all ApsaraMQ for RocketMQ instances.

## Syntax

```
{
  "Type": "DATASOURCE::ROCKETMQ::Instances",
  "Properties": {
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

-   Instances: details of the instances.
    
-   InstanceIds: the IDs of the instances.
    

**Property**

**Type**

**Description**

**Constraint**

InstanceIds

List

The IDs of the instances.

None.

Instances

List

Details of the instances.

None.

Status

Number

The instance status.

Valid values:

-   0: A Platinum Edition instance is being deployed.
    
-   5: A Standard Edition or Platinum Edition instance is running.
    
-   7: A Platinum Edition instance is being upgraded and is running.
    

Tags

Map

The tags that are added to the instance.

Example:

```
[
            {
              "Key": "CartService",
              "Value": "ServiceA"
            }
          ]
```

InstanceId

string

The instance ID.

None.

InstanceType

Number

The edition of the instance.

Valid values:

-   1: Standard Edition
    
-   2: Platinum Edition
    

For more information about instance editions and the differences between the editions, see [Instance editions](/help/en/apsaramq-for-rocketmq/cloud-message-queue-rocketmq-4-x-series/product-overview/instance-editions#concept-1957759).

IndependentNaming

boolean

Indicates whether the instance has a separate namespace.

Valid values:

-   true: The instance has a separate namespace. Resource names must be unique within an instance but can be the same across different instances.
    
-   false: The instance does not have a separate namespace. Resource names must be globally unique within and across all instances.
    

InstanceName

string

The instance name.

The name must be 3 to 64 characters in length, and can contain letters, digits, hyphens (-), and underscores (\_).

CreateTime

string

The creation time of the instance.

This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.

ReleaseTime

string

The expiration time of the Platinum Edition instance.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  ExtensionDataSource:
    Properties: {}
    Type: DATASOURCE::ROCKETMQ::Instances
Outputs:
  InstanceIds:
    Description: The list of instance IDs.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - InstanceIds
  Instances:
    Description: The list of instances.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Instances
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ROCKETMQ::Instances",
      "Properties": {}
    }
  },
  "Outputs": {
    "Instances": {
      "Description": "The list of instances.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Instances"
        ]
      }
    },
    "InstanceIds": {
      "Description": "The list of instance IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceIds"
        ]
      }
    }
  }
}
```
