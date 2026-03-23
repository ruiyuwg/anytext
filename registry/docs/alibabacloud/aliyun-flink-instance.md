ALIYUN::Flink::Instance is used to create a subscription or pay-as-you-go Realtime Compute for Apache Flink instance.

## Syntax

```
{
  "Type": "ALIYUN::Flink::Instance",
  "Properties": {
    "InstanceName": String,
    "VpcId": String,
    "ZoneId": String,
    "Bucket": String,
    "VSwitchIds": List,
    "PricingCycle": String,
    "ChargeType": String,
    "AutoRenew": Boolean,
    "PromotionCode": String,
    "ResourceSpec": Map,
    "Duration": Integer,
    "UsePromotionCode": Boolean
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

InstanceName

String

Yes

No

The name of the instance.

None.

VpcId

String

Yes

No

The ID of the virtual private cloud (VPC).

None.

ZoneId

String

Yes

No

The ID of the zone to which the instance belongs.

None.

Bucket

String

Yes

No

The name of the bucket.

None.

VSwitchIds

List

Yes

No

The ID of the vSwitch.

None.

PricingCycle

String

No

No

The unit of the subscription duration.

Valid values:

-   Year
    
-   Month
    

ChargeType

String

Yes

No

The billing method of the instance.

Valid values:

-   POST: pay-as-you-go
    
-   PRE: subscription
    

AutoRenew

Boolean

No

No

The renewal method.

Valid values:

-   true: The system automatically renews the instance.
    
-   false: You manually renew the instance.
    

PromotionCode

String

No

No

The coupon code.

None.

ResourceSpec

Map

No

Yes

The resource specifications.

For more information, see [ResourceSpec properties](#section-drq-173-pgm).

Duration

Integer

No

No

The subscription duration.

**Note**

This property is required if you set the ChargeType property to PRE.

UsePromotionCode

Boolean

No

No

Specifies whether to use coupon code.

Valid values:

-   true
    
-   false
    

## ResourceSpec syntax

```
"ResourceSpec": {
  "Cpu": Integer,
  "MemoryGB": Integer
}
```

## ResourceSpec properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Cpu

Integer

No

Yes

The number of vCPUs.

None.

MemoryGB

Integer

No

Yes

The memory size.

Unit: GB.

**Note**

The value of the MemoryGB property must be four times the value of the Cpu property.

## Return values

Fn::GetAtt

-   InstanceId: the ID of the instance.
    
-   OrderId: the ID of the order.
    
-   WorkspaceId: the ID of the work space.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceName:
    Type: String
    Description: The name of instance.
    AllowedPattern: ^[a-z][a-z0-9-]{1,60}
  VpcId:
    Type: String
    Description: VPC ID.
  ZoneId:
    Type: String
    Description: The available area ID of the instance.
  Bucket:
    Type: String
    Description: OSS bucket name.
  VSwitchIds:
    Type: CommaDelimitedList
    Description: Virtual switch ID.
  ChargeType:
    Type: String
    Description: |-
      The payment type, the value of the value is as follows:
      POST: pay as you go.
      PRE: subscription.
    AllowedValues:
      - PayAsYouGo
      - PostPaid
      - PayOnDemand
      - Postpaid
      - PostPay
      - POST
      - Subscription
      - PrePaid
      - PrePay
      - Prepaid
      - PRE
Resources:
  Instance:
    Type: ALIYUN::Flink::Instance
    Properties:
      InstanceName:
        Ref: InstanceName
      VpcId:
        Ref: VpcId
      ZoneId:
        Ref: ZoneId
      Bucket:
        Ref: Bucket
      VSwitchIds:
        Ref: VSwitchIds
      ChargeType:
        Ref: ChargeType
Outputs:
  InstanceId:
    Description: Instance ID.
    Value:
      Fn::GetAtt:
        - Instance
        - InstanceId
  OrderId:
    Description: Order information.
    Value:
      Fn::GetAtt:
        - Instance
        - OrderId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceName": {
      "Type": "String",
      "Description": "The name of instance.",
      "AllowedPattern": "^[a-z][a-z0-9-]{1,60}"
    },
    "VpcId": {
      "Type": "String",
      "Description": "VPC ID."
    },
    "ZoneId": {
      "Type": "String",
      "Description": "The available area ID of the instance."
    },
    "Bucket": {
      "Type": "String",
      "Description": "OSS bucket name."
    },
    "VSwitchIds": {
      "Type": "CommaDelimitedList",
      "Description": "Virtual switch ID."
    },
    "ChargeType": {
      "Type": "String",
      "Description": "The payment type, the value of the value is as follows:\nPOST: pay as you go.\nPRE: subscription.",
      "AllowedValues": [
        "PayAsYouGo",
        "PostPaid",
        "PayOnDemand",
        "Postpaid",
        "PostPay",
        "POST",
        "Subscription",
        "PrePaid",
        "PrePay",
        "Prepaid",
        "PRE"
      ]
    }
  },
  "Resources": {
    "Instance": {
      "Type": "ALIYUN::Flink::Instance",
      "Properties": {
        "InstanceName": {
          "Ref": "InstanceName"
        },
        "VpcId": {
          "Ref": "VpcId"
        },
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "Bucket": {
          "Ref": "Bucket"
        },
        "VSwitchIds": {
          "Ref": "VSwitchIds"
        },
        "ChargeType": {
          "Ref": "ChargeType"
        }
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "Instance ID.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "InstanceId"
        ]
      }
    },
    "OrderId": {
      "Description": "Order information.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "OrderId"
        ]
      }
    }
  }
}
```
