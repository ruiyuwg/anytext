ALIYUN::VPC::AnycastEIP is used to create an Anycast elastic IP address (Anycast EIP).

## Syntax

```
{
  "Type": "ALIYUN::VPC::AnycastEIP",
  "Properties": {
    "Description": String,
    "ServiceLocation": String,
    "InstanceChargeType": String,
    "InternetChargeType": String,
    "Name": String,
    "Bandwidth": Integer,
    "ResourceGroupId": String
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

Description

String

No

Yes

The description of the Anycast EIP.

None.

ServiceLocation

String

No

No

The access region of the Anycast EIP.

Set the value to international. A value of international specifies regions outside the Chinese mainland.

InstanceChargeType

String

No

No

The billing method of the Anycast EIP.

Set the value to PostPaid. A value of PostPaid specifies the pay-as-you-go billing method.

InternetChargeType

String

No

No

The metering method for Internet usage of the Anycast EIP.

Set the value to PayByTraffic. A value of PayByTraffic specifies the pay-by-data-transfer metering method.

Name

String

No

Yes

The name of the Anycast EIP.

The name must be 2 to 128 characters in length and can contain letters, digits, underscores (\_), and hyphens (-). It must start with a letter.

Bandwidth

Integer

No

No

The peak bandwidth of the Anycast EIP

Valid values: 100 to 200.

Default value: 1000.

Unit: Mbit/s.

**Note**

The peak bandwidth indicates only the upper bandwidth limit and is for reference only. The actual peak bandwidth may vary based on usage scenarios.

ResourceGroupId

String

No

No

The ID of the associated resource group.

None.

## Return values

Fn::GetAtt

-   AnycastId: the ID of the Anycast EIP.
    
-   IpAddress: the IP of the Anycast EIP.
    
-   OrderId: the ID of the order.
    
-   Name: the name of the Anycast EIP.
    

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Description": {
      "Type": "String",
      "Description": "Anycast EIP instance description"
    },
    "ServiceLocation": {
      "Type": "String",
      "Description": "Anycast EIP instance access area",
      "AllowedValues": [
        "international"
      ],
      "Default": "international"
    },
    "InstanceChargeType": {
      "Type": "String",
      "Description": "Anycast EIP instance charge type",
      "AllowedValues": [
        "PostPaid"
      ]
    },
    "InternetChargeType": {
      "Type": "String",
      "Description": "Anycast EIP instance access public network billing method",
      "AllowedValues": [
        "PayByTraffic"
      ]
    },
    "Name": {
      "Type": "String",
      "Description": "Anycast EIP instance name"
    }
  },
  "Resources": {
    "AnycastEip": {
      "Type": "ALIYUN::VPC::AnycastEIP",
      "Properties": {
        "Description": {
          "Ref": "Description"
        },
        "ServiceLocation": {
          "Ref": "ServiceLocation"
        },
        "InstanceChargeType": {
          "Ref": "InstanceChargeType"
        },
        "InternetChargeType": {
          "Ref": "InternetChargeType"
        },
        "Name": {
          "Ref": "Name"
        }
      }
    }
  },
  "Outputs": {
    "AnycastId": {
      "Description": "Anycast EIP instance ID",
      "Value": {
        "Fn::GetAtt": [
          "AnycastEip",
          "AnycastId"
        ]
      }
    },
    "IpAddress": {
      "Description": "Anycase IP address",
      "Value": {
        "Fn::GetAtt": [
          "AnycastEip",
          "IpAddress"
        ]
      }
    },
    "OrderId": {
      "Description": "Order ID",
      "Value": {
        "Fn::GetAtt": [
          "AnycastEip",
          "OrderId"
        ]
      }
    },
    "Name": {
      "Description": "Anycast EIP instance name",
      "Value": {
        "Fn::GetAtt": [
          "AnycastEip",
          "Name"
        ]
      }
    }
  }
}
```

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Description:
    Description: Anycast EIP instance description
    Type: String
  InstanceChargeType:
    AllowedValues:
    - PostPaid
    Description: Anycast EIP instance charge type
    Type: String
  InternetChargeType:
    AllowedValues:
    - PayByTraffic
    Description: Anycast EIP instance access public network billing method
    Type: String
  Name:
    Description: Anycast EIP instance name
    Type: String
  ServiceLocation:
    AllowedValues:
    - international
    Default: international
    Description: Anycast EIP instance access area
    Type: String
Resources:
  AnycastEip:
    Properties:
      Description:
        Ref: Description
      InstanceChargeType:
        Ref: InstanceChargeType
      InternetChargeType:
        Ref: InternetChargeType
      Name:
        Ref: Name
      ServiceLocation:
        Ref: ServiceLocation
    Type: ALIYUN::VPC::AnycastEIP
Outputs:
  AnycastId:
    Description: Anycast EIP instance ID
    Value:
      Fn::GetAtt:
      - AnycastEip
      - AnycastId
  IpAddress:
    Description: Anycase IP address
    Value:
      Fn::GetAtt:
      - AnycastEip
      - IpAddress
  Name:
    Description: Anycast EIP instance name
    Value:
      Fn::GetAtt:
      - AnycastEip
      - Name
  OrderId:
    Description: Order ID
    Value:
      Fn::GetAtt:
      - AnycastEip
      - OrderId
```
