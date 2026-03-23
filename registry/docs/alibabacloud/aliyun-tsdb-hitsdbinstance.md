ALIYUN::TSDB::HiTSDBInstance is used to create a Time Series Database (TSDB) instance.

## Syntax

```
{
  "Type": "ALIYUN::TSDB::HiTSDBInstance",
  "Properties": {
    "InstanceStorage": Integer,
    "ZoneId": String,
    "VPCId": String,
    "InstanceAlias": String,
    "PricingCycle": String,
    "SecurityIpList": List,
    "VSwitchId": String,
    "InstanceClass": String,
    "Duration": Integer,
    "PayType": String,
    "DiskCategory": String
  }
}
```

## Properties

     

Property

Type

Required

Editable

Description

Constraint

ZoneId

String

Yes

No

The ID of the zone.

N/A

VPCId

String

Yes

No

The ID of the virtual private cloud (VPC).

N/A

InstanceAlias

String

No

Yes

The alias of the instance.

N/A

SecurityIpList

List

No

Yes

The IP address whitelist of the instance.

N/A

VSwitchId

String

Yes

No

The ID of the vSwitch.

N/A

InstanceClass

String

Yes

No

The instance type.

Valid values:

-   tsdb.1x.basic: Basic Edition I
-   tsdb.3x.basic: Basic Edition II
-   tsdb.4x.basic: Basic Edition III
-   tsdb.12x.standard: Standard Edition I
-   tsdb.24x.standard: Standard Edition II
-   tsdb.48x.large: Ultimate Edition I
-   tsdb.96x.large: Ultimate Edition II

InstanceStorage

Integer

Yes

No

The storage capacity of the instance.

Valid values:

-   A Basic Edition or Standard Edition instance: 40 to 6000.
-   An Ultimate Edition instance: 320 to 32000.

Unit: GB.

PayType

String

No

No

The billing method of the instance.

Valid values:

-   POSTPAY: pay-as-you-go
-   PREPAY: subscription

PricingCycle

String

No

No

The unit of the billing cycle for the subscription instance.

This property takes effect only if the PayType property is set to PREPAY. Valid values:

-   Month: This is the default value.
-   Year

Duration

Integer

No

No

The subscription duration.

Valid values:

-   If the PricingCycle property is set to Month: 1 to 9.
-   If the PricingCycle property is set to Year: 1 to 3.

DiskCategory

String

No

No

The disk type of TSDB for InfluxDB®️.

Valid values:

-   cloud\_efficiency: ultra disk
-   cloud\_ssd: SSD
-   cloud\_essd: enhanced SSD (ESSD)

## Response parameters

Fn::GetAtt

-   InstanceId: the ID of the instance.
-   ReverseVpcPort: the reverse VPC endpoint of the instance.
-   ReverseVpcIp: the reverse IP address of the instance from a VPC.
-   PublicConnectionString: the public connection string of the instance.
-   EngineType: the type of the database engine.
-   OrderId: the ID of the order.
-   ConnectionString: the connection string of the database.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceStorage": {
      "Type": "Number",
      "Description": "The storage capacity of the instance. Unit: GB. For example, the value 50 indicates 50 GB.",
      "MinValue": 40,
      "MaxValue": 6000,
      "Default": 50
    },
    "ZoneId": {
      "Type": "String",
      "Description": "The zone ID of the instance.",
      "Default": "cn-hangzhou-i"
    },
    "VPCId": {
      "Type": "String",
      "Description": "The ID of the virtual private cloud (VPC) that is connected to the instance.",
      "Default": "vpc-wz9ydz3vg93s1ozsd****"
    },
    "VSwitchId": {
      "Type": "String",
      "Description": "The ID of the VSwitch in the specified VPC.",
      "Default": "vsw-wz9kv78f9cp47yadu****"
    },
    "InstanceClass": {
      "Type": "String",
      "Description": "The type of the instance. For more information, see Instance types:\ntsdb.1x.basic: Basic Edition I\ntsdb.3x.basic: Basic Edition II\ntsdb.4x.basic: Basic Edition III\ntsdb.12x.standard: Standard Edition I\ntsdb.24x.standard: Standard Edition II\ntsdb.48x.large: Ultimate Edition I\ntsdb.96x.large: Ultimate Edition II and so on.",
      "Default": "tsdb.1x.basic"
    }
  },
  "Resources": {
    "HiTSDBInstance": {
      "Type": "ALIYUN::TSDB::HiTSDBInstance",
      "Properties": {
        "InstanceStorage": {
          "Ref": "InstanceStorage"
        },
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "VPCId": {
          "Ref": "VPCId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "InstanceClass": {
          "Ref": "InstanceClass"
        }
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "The ID of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "HiTSDBInstance",
          "InstanceId"
        ]
      }
    },
    "ReverseVpcPort": {
      "Description": "Reverse vpc port of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "HiTSDBInstance",
          "ReverseVpcPort"
        ]
      }
    },
    "ReverseVpcIp": {
      "Description": "Reverse vpc ip of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "HiTSDBInstance",
          "ReverseVpcIp"
        ]
      }
    },
    "PublicConnectionString": {
      "Description": "Public connection string of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "HiTSDBInstance",
          "PublicConnectionString"
        ]
      }
    },
    "EngineType": {
      "Description": "Engine type of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "HiTSDBInstance",
          "EngineType"
        ]
      }
    },
    "OrderId": {
      "Description": "Order id of created instance.",
      "Value": {
        "Fn::GetAtt": [
          "HiTSDBInstance",
          "OrderId"
        ]
      }
    },
    "ConnectionString": {
      "Description": "Connection string of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "HiTSDBInstance",
          "ConnectionString"
        ]
      }
    }
  }
}
```
