ALIYUN::KMS::NetworkRule is used to create a network access rule.

## Syntax

```
{
  "Type": "ALIYUN::KMS::NetworkRule",
  "Properties": {
    "NetworkRuleName": String,
    "Description": String,
    "SourcePrivateIp": List,
    "Type": String
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

NetworkRuleName

String

Yes

No

The name of the network access rule.

None.

Description

String

No

Yes

The description.

None.

SourcePrivateIp

List

No

Yes

The private IP addresses or private CIDR blocks.

You can specify up to 800 private IP addresses or private CIDR blocks.

Type

String

Yes

No

The network type.

Set the value to Private. A value of Private specifies that only private IP addresses are supported.

## Return values

Fn::GetAtt

-   Description: the description.
    
-   SourcePrivateIp: the private IP addresses or private CIDR blocks.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SourcePrivateIp:
    AssociationPropertyMetadata:
      Parameter:
        Type: String
        Description:
          en: CIDR format IP.
        Required: false
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: VPC network whitelist, The private IP address or private CIDR block, Supports binding up to 800 CIDR blocks or IP addresses.
    Required: false
    MinLength: 1
    MaxLength: 800
  NetworkRuleName:
    Type: String
    Description:
      en: The name of the access control rule.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::KMS::NetworkRule
    Properties:
      SourcePrivateIp:
        Ref: SourcePrivateIp
      NetworkRuleName:
        Ref: NetworkRuleName
Outputs:
  Description:
    Description: Description.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Description
  SourcePrivateIp:
    Description: VPC network whitelist.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - SourcePrivateIp
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SourcePrivateIp": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Description": {
            "en": "CIDR format IP."
          },
          "Required": false
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "VPC network whitelist, The private IP address or private CIDR block, Supports binding up to 800 CIDR blocks or IP addresses."
      },
      "Required": false,
      "MinLength": 1,
      "MaxLength": 800
    },
    "NetworkRuleName": {
      "Type": "String",
      "Description": {
        "en": "The name of the access control rule."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::KMS::NetworkRule",
      "Properties": {
        "SourcePrivateIp": {
          "Ref": "SourcePrivateIp"
        },
        "NetworkRuleName": {
          "Ref": "NetworkRuleName"
        }
      }
    }
  },
  "Outputs": {
    "Description": {
      "Description": "Description.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Description"
        ]
      }
    },
    "SourcePrivateIp": {
      "Description": "VPC network whitelist.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "SourcePrivateIp"
        ]
      }
    }
  }
}
                        
```
