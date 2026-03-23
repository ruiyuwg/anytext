ALIYUN::CloudPhone::InstanceGroup is used to create and start cloud phones.

## Syntax

```
{
  "Type": "ALIYUN::CloudPhone::InstanceGroup",
  "Properties": {
    "KeyPairName": String,
    "Description": String,
    "Amount": Integer,
    "SecurityGroupId": String,
    "AutoRenew": Boolean,
    "VSwitchId": String,
    "Period": Integer,
    "AutoPay": Boolean,
    "InstanceName": String,
    "EipBandwidth": Integer,
    "ChargeType": String,
    "ImageId": String,
    "VncPassword": String,
    "Tag": List,
    "InstanceType": String,
    "Resolution": String,
    "PeriodUnit": String
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

ImageId

String

Yes

Yes

The image ID.

None.

InstanceType

String

Yes

No

The type identifier of the cloud phones.

None.

SecurityGroupId

String

Yes

No

The ID of the security group to which the cloud phones belong.

The cloud phones must belong to the same security group as the Elastic Compute Service (ECS) instances.

VSwitchId

String

Yes

No

The vSwitch ID.

None.

Amount

Integer

No

No

The number of ECS instances that you want to create.

Valid values: 1 to 100.

Default value: 1.

AutoPay

Boolean

No

No

Specifies whether to enable automatic payment.

Valid values:

-   true (default)
    
-   false
    

AutoRenew

Boolean

No

No

Specifies whether to enable auto-renewal.

This property takes effect only when ChargeType is set to PrePaid.

Valid values:

-   true
    
-   false (default)
    

ChargeType

String

No

No

The billing method of the cloud phones.

Valid values:

-   PrePaid: subscription
    
-   PostPaid (default): pay-as-you-go
    

Description

String

No

Yes

The description of the cloud phones.

The description must be 2 to 256 characters in length, and cannot start with `http://` or `https://`.

EipBandwidth

Integer

No

No

The bandwidth of the elastic IP address (EIP).

Valid values: 1 to 200.

If you specify this property, an EIP with the specified bandwidth is automatically created and associated with the cloud phone.

If the cloud phone is released, the EIP is also released.

InstanceName

String

No

Yes

The name of the cloud phone.

The name must be 2 to 128 characters in length, and cannot start with `http://` or `https://`. It can contain letters, digits, colons (:), underscores (\_), periods (.), and hyphens (-).

The default value of this property is the value of the InstanceId property.

KeyPairName

String

No

Yes

The name of the key pair that you want to use to connect to the cloud phones.

None.

Period

Integer

No

No

The subscription duration.

-   Valid values when PeriodUnit is set to Month: 1, 2, 3, and 6.
    
-   Valid values when PeriodUnit is set to Year: 1 to 5.
    

PeriodUnit

String

No

No

The unit of the subscription duration.

Valid values:

-   Year
    
-   Month (default)
    

Resolution

String

No

Yes

The resolution of the cloud phones.

You can call the [DescribeInstanceTypes](/help/en/ecs/api-describeinstancetypes#doc-api-Ecs-DescribeInstanceTypes) operation to query the resolutions that are supported by the cloud phone type and select an appropriate resolution.

Tag

List

No

Yes

The tags of the cloud phones.

For more information, see [Tag properties](#section-4jn-uoa-gkx).

VncPassword

String

No

Yes

The password that you want to use to connect to the management terminal of the cloud phones.

None.

## Tag syntax

```
"Tag": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Tag properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

Yes

No

The tag key of the cloud phone.

None.

Value

String

No

No

The tag value of the cloud phone.

None.

## Return values

Fn::GetAtt

-   OrderId: the order ID.
    
-   InstanceIds: the IDs of the cloud phones.
    
-   TradePrice: the price.
    
-   PrivateIps: the private IP addresses. This property is supported only by the cloud phones that reside in a virtual private cloud (VPC).  
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SecurityGroupId:
    Type: String
    Description: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
  VSwitchId:
    Type: String
    Description: vswitch id
  ImageId:
    Type: String
    Description: The image id
  VncPassword:
    Type: String
    Description: |-
      Cloud phone VNC password.
      The password must be six characters long, and must contain only uppercase,
      lowercase English letters and Arabic numerals.
    AllowedPattern: '[a-zA-Z0-9]{6}'
  InstanceType:
    Type: String
    Description: instance type
Resources:
  InstanceGroup:
    Type: ALIYUN::CloudPhone::InstanceGroup
    Properties:
      SecurityGroupId:
        Ref: SecurityGroupId
      VSwitchId:
        Ref: VSwitchId
      ImageId:
        Ref: ImageId
      VncPassword:
        Ref: VncPassword
      InstanceType:
        Ref: InstanceType
Outputs:
  OrderId:
    Description: oder id
    Value:
      Fn::GetAtt:
        - InstanceGroup
        - OrderId
  InstanceIds:
    Description: instance ids
    Value:
      Fn::GetAtt:
        - InstanceGroup
        - InstanceIds
  TradePrice:
    Description: price
    Value:
      Fn::GetAtt:
        - InstanceGroup
        - TradePrice
                    
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SecurityGroupId": {
      "Type": "String",
      "Description": "Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC."
    },
    "VSwitchId": {
      "Type": "String",
      "Description": "vswitch id"
    },
    "ImageId": {
      "Type": "String",
      "Description": "The image id"
    },
    "VncPassword": {
      "Type": "String",
      "Description": "Cloud phone VNC password.\nThe password must be six characters long, and must contain only uppercase, \nlowercase English letters and Arabic numerals.",
      "AllowedPattern": "[a-zA-Z0-9]{6}"
    },
    "InstanceType": {
      "Type": "String",
      "Description": "instance type"
    }
  },
  "Resources": {
    "InstanceGroup": {
      "Type": "ALIYUN::CloudPhone::InstanceGroup",
      "Properties": {
        "SecurityGroupId": {
          "Ref": "SecurityGroupId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "ImageId": {
          "Ref": "ImageId"
        },
        "VncPassword": {
          "Ref": "VncPassword"
        },
        "InstanceType": {
          "Ref": "InstanceType"
        }
      }
    }
  },
  "Outputs": {
    "OrderId": {
      "Description": "oder id",
      "Value": {
        "Fn::GetAtt": [
          "InstanceGroup",
          "OrderId"
        ]
      }
    },
    "InstanceIds": {
      "Description": "instance ids",
      "Value": {
        "Fn::GetAtt": [
          "InstanceGroup",
          "InstanceIds"
        ]
      }
    },
    "TradePrice": {
      "Description": "price",
      "Value": {
        "Fn::GetAtt": [
          "InstanceGroup",
          "TradePrice"
        ]
      }
    }
  }
}
```
