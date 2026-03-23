ALIYUN::KMS::Instance is used to create a Key Management Service (KMS) instance.

## Syntax

```
{
  "Type": "ALIYUN::KMS::Instance",
  "Properties": {
    "ProductVersion": String,
    "Connection": Map,
    "InstanceChargeType": String,
    "KeyNum": Integer,
    "Log": Boolean,
    "LogStorage": Integer,
    "Period": Integer,
    "PeriodUnit": String,
    "RenewPeriod": Integer,
    "RenewStatus": String,
    "SecretNum": Integer,
    "Spec": Integer,
    "VpcNum": Integer
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

ProductVersion

String

Yes

No

The category of the instance.

Valid values:

-   software: software key management
    
-   hardware: hardware key management
    
-   software-small: basic software key management
    
-   hardware-small: basic hardware key management
    

Connection

Map

No

No

The network connection configurations of the instance.

For more information, see [Connection properties](#2ba65432ca95b).

InstanceChargeType

String

No

No

The billing method of the instance.

Set the value to Subscription, which is the default value.

KeyNum

Integer

No

Yes

The number of keys that you can create for the instance.

Valid values: 100 to 100000.

**Note**

You must specify this property when InstanceChargeType is set to Subscription.

Log

Boolean

No

Yes

Specifies whether to enable the log analysis feature.

Valid values:

-   true
    
-   false
    

LogStorage

Integer

No

Yes

The number of Logstores that you want to associate with the instance.

Valid values: 1000 to 500000.

Period

Integer

No

No

The subscription duration.

-   Valid values when PeriodUnit is set to Year: 1 to 3.
    
-   Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, and 36.
    

PeriodUnit

String

No

No

The unit of the subscription duration.

Valid values:

-   Month
    
-   Year
    

RenewPeriod

Integer

No

No

The auto-renewal period.

You must specify this property when RenewStatus is set to AutoRenewal.

Unit: month.

RenewStatus

String

No

No

The auto-renewal status.

Valid values:

-   AutoRenewal
    
-   ManualRenewal (default)
    

SecretNum

Integer

No

Yes

The number of credentials that you can create for the instance.

Valid values: 0 to 100000.

**Note**

You must specify this property when InstanceChargeType is set to Subscription.

Spec

Integer

No

Yes

The computing performance of the instance, which is measured by queries per second (QPS).

Valid values:

-   200
    
-   1000
    
-   2000
    
-   4000
    

VpcNum

Integer

No

Yes

The total access management quota for the instance.

Valid values: 1 to 1000.

**Note**

You must specify this property when InstanceChargeType is set to Subscription.

## Connection syntax

```
"Connection": {
  "VpcId": String,
  "VSwitchIds": List,
  "ZoneIds": List
}
```

## Connection properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

VpcId

String

Yes

No

The ID of the virtual private cloud (VPC) that you want to associate with the instance.

None.

VSwitchIds

List

Yes

No

The vSwitches of the instance.

You can specify up to one vSwitch.

ZoneIds

List

Yes

No

The zones of the instance.

You can specify up to two zones.

## Return values

Fn::GetAtt

InstanceId: the instance ID.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ProductVersion:
    Type: String
    Description:
      en: KMS Instance commodity type (software/software-small/hardware/hardware-small).
    AllowedValues:
      - software
      - software-small
      - hardware
      - hardware-small
    Required: true
Resources:
  Instance:
    Type: ALIYUN::KMS::Instance
    Properties:
      ProductVersion:
        Ref: ProductVersion
Outputs:
  InstanceId:
    Description: The ID of the instance.
    Value:
      Fn::GetAtt:
        - Instance
        - InstanceId
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ProductVersion": {
      "Type": "String",
      "Description": {
        "en": "KMS Instance commodity type (software/software-small/hardware/hardware-small)."
      },
      "AllowedValues": [
        "software",
        "software-small",
        "hardware",
        "hardware-small"
      ],
      "Required": true
    }
  },
  "Resources": {
    "Instance": {
      "Type": "ALIYUN::KMS::Instance",
      "Properties": {
        "ProductVersion": {
          "Ref": "ProductVersion"
        }
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "The ID of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "InstanceId"
        ]
      }
    }
  }
}
```
