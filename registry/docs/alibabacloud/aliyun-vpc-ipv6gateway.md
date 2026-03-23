ALIYUN::VPC::Ipv6Gateway is used to create an IPv6 gateway.

## Syntax

```
{
  "Type": "ALIYUN::VPC::Ipv6Gateway",
  "Properties": {
    "Description": String,
    "VpcId": String,
    "Spec": String,
    "Name": String,
    "Tags": List
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

The description of the IPv6 gateway.

The description must be 2 to 256 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.

VpcId

String

Yes

No

The ID of the virtual private cloud (VPC) in which you want to create the IPv6 gateway.

None.

Spec

String

No

Yes

The edition of the IPv6 gateway.

Valid values:

-   Small (default): Free Edition.
    
-   Medium: Enterprise Edition.
    
-   Large: Enhanced Enterprise Edition.
    

Name

String

No

Yes

The name of the IPv6 gateway.

The name must be 2 to 256 characters in length, and can contain letters, digits, periods (.), underscores (\_), and hyphens (-). It must start with a letter and cannot start with `http://` or `https://`.

Tags

List

No

Yes

The tags.

You can add up to 20 tags.

For more information, see [Tags properties](#section-og8-l1v-z8f).

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]  
```

## Tags properties

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

The tag key.

The tag key must be 1 to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

Value

String

No

No

The tag value.

The tag value can be up to 128 characters in length, and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

## Return values

Fn::GetAtt

-   Ipv6GatewayId: the ID of the IPv6 gateway.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VPC:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Type: String
    Description: Please search the ID starts with (vpc-xxx)from console-Virtual Private Cloud
    Label: Existing VPC Instance ID
Resources:
  Ipv6Gateway:
    Type: ALIYUN::VPC::Ipv6Gateway
    Properties:
      VpcId:
        Ref: VPC
      Spec: Small
Outputs:
  Ipv6GatewayId:
    Description: ID IPv6 gateway.
    Value:
      Fn::GetAtt:
        - Ipv6Gateway
        - Ipv6GatewayId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VPC": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Description": "Please search the ID starts with (vpc-xxx)from console-Virtual Private Cloud",
      "Label": "Existing VPC Instance ID"
    }
  },
  "Resources": {
    "Ipv6Gateway": {
      "Type": "ALIYUN::VPC::Ipv6Gateway",
      "Properties": {
        "VpcId": {
          "Ref": "VPC"
        },
        "Spec": "Small"
      }
    }
  },
  "Outputs": {
    "Ipv6GatewayId": {
      "Description": "ID IPv6 gateway.",
      "Value": {
        "Fn::GetAtt": [
          "Ipv6Gateway",
          "Ipv6GatewayId"
        ]
      }
    }
  }
}
```
