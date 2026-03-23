DATASOURCE::KAFKA::Instances is used to query the information about ApsaraMQ for Kafka instances.

## Syntax

```
{
  "Type": "DATASOURCE::KAFKA::Instances",
  "Properties": {
    "ResourceGroupId": String,
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

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

InstanceId

String

No

Yes

The instance ID.

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

ExpiredTime

Integer

The expiration time.

Unit: milliseconds.

SslEndPoint

String

The SSL endpoint of the instance in IP address mode.

None.

Tags

String

The tags.

None.

DiskType

Integer

The disk type.

None.

RegionId

String

The region ID of the instance.

None.

CreateTime

Integer

The time when the instance was created.

Unit: milliseconds.

InstanceId

String

The instance ID.

None.

Status

String

The state of the instance.

None.

ZoneId

String

The zone ID.

None.

DiskSize

Integer

The disk size.

Unit: GB.

DeployType

Integer

The deployment type.

None.

DomainEndpoint

String

The default endpoint of the instance in domain name mode.

None.

InstanceName

String

The instance name.

None.

EndPoint

String

The default endpoint of the instance in IP address mode.

None.

IoMax

Integer

The peak traffic allowed for the instance.

None.

ResourceGroupId

String

The ID of the resource group.

None.

VSwitchId

String

The vSwitch ID.

None.

EipMax

Integer

The peak Internet traffic allowed for the instance.

None.

PaymentType

String

The billing method.

None.

TopicNumLimit

Integer

The maximum number of topics that can be created on the instance.

None.

SpecType

String

The edition of the instance.

None.

MsgRetain

Integer

The retention period of messages on the instance.

Unit: hour.

VpcId

String

The virtual private cloud (VPC) ID.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Description:
      en: The ID of the instance.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      InstanceId:
        Ref: InstanceId
    Type: DATASOURCE::KAFKA::Instances
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
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the instance."
      }
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::KAFKA::Instances",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        }
      }
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
