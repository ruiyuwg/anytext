ALIYUN::VPC::CustomerGateway is used to create a customer gateway.

## Syntax

```
{
  "Type": "ALIYUN::VPC::CustomerGateway",
  "Properties": {
    "IpAddress": String,
    "Description": String,
    "Name": String,
    "Asn": Integer
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

IpAddress

String

Yes

No

The IP address of the customer gateway.

None.

Description

String

No

Yes

The description of the customer gateway.

The description must be 2 to 256 characters in length. It must start with a letter and cannot start with http:// or https://.

Name

String

No

Yes

The name of the customer gateway.

The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter and cannot start with http:// or https://.

Asn

Integer

No

No

The autonomous system number (ASN) of the gateway device in the data center.

The value of the **Asn** property is a four-byte number. You can enter the number in two segments and separate the first 16 bits from the following 16 bits with a period (.). Enter the number in each segment in the decimal format.

For example, if you enter 123.456, the ASN is 8061384. The ASN is calculated by the following equation: 123 × 65536 + 456 = 8061384.

## Return values

Fn::GetAtt

CustomerGatewayId: the ID of the customer gateway.

## Examples

**YAML** **format**

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  CustomerGateway:
    Type: ALIYUN::VPC::CustomerGateway
    Properties:
      IpAddress:
        Ref: IpAddress
      Description:
        Ref: Description
      Name:
        Ref: Name
Parameters:
  IpAddress:
    Type: String
    Description: The IP address of the user gateway.
  Description:
    MinLength: 2
    Type: String
    Description: Description of the user gateway. The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.
    MaxLength: 256
  Name:
    MinLength: 2
    Type: String
    Description: The name of the user gateway. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.
    MaxLength: 128
Outputs:
  CustomerGatewayId:
    Description: The ID of the user gateway.
    Value:
      Fn::GetAtt:
        - CustomerGateway
        - CustomerGatewayId
```

**JSON** **format**

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "CustomerGateway": {
      "Type": "ALIYUN::VPC::CustomerGateway",
      "Properties": {
        "IpAddress": {
          "Ref": "IpAddress"
        },
        "Description": {
          "Ref": "Description"
        },
        "Name": {
          "Ref": "Name"
        }
      }
    }
  },
  "Parameters": {
    "IpAddress": {
      "Type": "String",
      "Description": "The IP address of the user gateway."
    },
    "Description": {
      "MinLength": 2,
      "Type": "String",
      "Description": "Description of the user gateway. The length is 2-256 characters and must start with a letter or Chinese, but cannot start with http:// or https://.",
      "MaxLength": 256
    },
    "Name": {
      "MinLength": 2,
      "Type": "String",
      "Description": "The name of the user gateway. The length is 2-128 characters and must start with a letter or Chinese. It can contain numbers, periods (.), underscores (_), and dashes (-). But it can't start with http:// or https://.",
      "MaxLength": 128
    }
  },
  "Outputs": {
    "CustomerGatewayId": {
      "Description": "The ID of the user gateway.",
      "Value": {
        "Fn::GetAtt": [
          "CustomerGateway",
          "CustomerGatewayId"
        ]
      }
    }
  }
}
```
