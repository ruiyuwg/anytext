ALIYUN::GA::Domain is used to create a domain name.

## Syntax

```
{
  "Type": "ALIYUN::GA::Domain",
  "Properties": {
    "AcceleratorIds": List,
    "Domain": String
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

AcceleratorIds

List

Yes

No

The IDs of the Global Accelerator (GA) instances.

You can specify up to 50 IDs.

Domain

String

Yes

No

The domain name that you want to associate with the GA instances.

None.

## Return values

Fn::GetAtt

-   AcceleratorIds: the IDs of the GA instances.
    
-   Domain: the domain name that is associated with the GA instances.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AcceleratorIds:
    AssociationPropertyMetadata:
      Parameter:
        Type: String
        Description:
          en: The ID of the GA instance to be disassociated.
        Required: true
    AssociationProperty: List[Parameter]
    Type: Json
    Description:
      en: The IDs of the GA instance to be disassociated. You can specify up to 50 IDs.
    Required: true
    MinLength: 1
    MaxLength: 50
  Domain:
    Type: String
    Description:
      en: The accelerated domain name to be disassociated.
    Required: true
Resources:
  ExtensionResource:
    Type: ALIYUN::GA::Domain
    Properties:
      AcceleratorIds:
        Ref: AcceleratorIds
      Domain:
        Ref: Domain
Outputs:
  AcceleratorIds:
    Description: The IDs of GA instances.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AcceleratorIds
  Domain:
    Description: The accelerated domain name.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Domain
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AcceleratorIds": {
      "AssociationPropertyMetadata": {
        "Parameter": {
          "Type": "String",
          "Description": {
            "en": "The ID of the GA instance to be disassociated."
          },
          "Required": true
        }
      },
      "AssociationProperty": "List[Parameter]",
      "Type": "Json",
      "Description": {
        "en": "The IDs of the GA instance to be disassociated. You can specify up to 50 IDs."
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 50
    },
    "Domain": {
      "Type": "String",
      "Description": {
        "en": "The accelerated domain name to be disassociated."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GA::Domain",
      "Properties": {
        "AcceleratorIds": {
          "Ref": "AcceleratorIds"
        },
        "Domain": {
          "Ref": "Domain"
        }
      }
    }
  },
  "Outputs": {
    "AcceleratorIds": {
      "Description": "The IDs of GA instances.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AcceleratorIds"
        ]
      }
    },
    "Domain": {
      "Description": "The accelerated domain name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Domain"
        ]
      }
    }
  }
}
                        
```
