DATASOURCE::Hologram::Instance is used to query the information about a Hologres instance by instance ID.

## Syntax

```
{
  "Type": "DATASOURCE::Hologram::Instance",
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

-   Instance: details of the instance.
    

**Property**

**Type**

**Description**

**Constraint**

Instance

Map

Details of the instance.

None.

InstanceId

String

The instance ID.

None.

ZoneId

String

The zone ID.

None.

Version

String

The version of the instance.

None.

CommodityCode

String

The commodity code.

None.

PaymentType

String

The billing method of the instance.

None.

SuspendReason

String

The reason for the suspension.

None.

ExpirationTime

String

The expiration time. This property is invalid for pay-as-you-go instances.

None.

Tags

String

The tags of the instance.

None.

Endpoints

String

The endpoints.

None.

InstanceType

String

The instance type.

None.

Status

String

The state of the instance.

None.

CreateTime

String

The time when the instance was created.

None.

LeaderInstanceId

String

The ID of the primary instance.

None.

EnableHiveAccess

String

Indicates whether data lake acceleration is enabled.

None.

InstanceName

String

The instance name.

None.

RegionId

String

The region ID.

None.

ResourceGroupId

String

The ID of the resource group.

None.

Memory

Integer

The memory size. Unit: GB.

None.

Cpu

Integer

The number of vCPUs.

None.

ComputeNodeCount

Integer

The number of compute nodes. In a typical configuration, a node has 16 vCPUs and 32 GB memory.

None.

GatewayMemory

Integer

The memory size of the gateway. Unit: GB.

None.

ColdStorageSize

Integer

The infrequent access (IA) storage space of the instance.

None.

InstanceOwner

String

The owner of the instance.

None.

GatewayCount

Integer

The number of gateway nodes.

None.

GatewayCpu

Integer

The number of vCPUs of the gateway.

None.

StorageSize

Integer

The standard storage space of the instance. Unit: GB.

None.

AutoRenewal

Boolean

Indicates whether auto-renewal is enabled.

Valid values:

-   true
    
-   false
    

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
    Type: DATASOURCE::Hologram::Instance
Outputs:
  Instance:
    Description: The attributes of the instance.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Instance
                        
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
      "Type": "DATASOURCE::Hologram::Instance",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        }
      }
    }
  },
  "Outputs": {
    "Instance": {
      "Description": "The attributes of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Instance"
        ]
      }
    }
  }
}
                        
```
