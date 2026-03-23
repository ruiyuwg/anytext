ALIYUN::CMS::Namespace is used to create a namespace.

## Syntax

```
{
  "Type": "ALIYUN::CMS::Namespace",
  "Properties": {
    "Description": String,
    "Specification": String,
    "Namespace": String
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

Namespace

String

Yes

No

The name of the namespace.

The name can contain lowercase letters, digits, and underscores (\_).

Description

String

No

Yes

The description of the namespace.

None

Specification

String

No

Yes

The storage specification, which determines the data retention period of the namespace.

Valid values:

-   cms.s1.large: The data retention period is 15 days.
    
-   cms.s1.xlarge: The data retention period is 32 days.
    
-   cms.s1.2xlarge: The data retention period is 63 days.
    
-   cms.s1.3xlarge (default): The data retention period is 93 days.
    
-   cms.s1.6xlarge: The data retention period is 185 days.
    
-   cms.s1.12xlarge: The data retention period is 367 days.
    

## Return values

Fn::GetAtt

-   ModifyTime: the time when the namespace was last modified.
    
-   Description: the description of the namespace.
    
-   CreateTime: the time when the namespace was created.
    
-   Specification: the storage specification.
    
-   Namespace: the name of the namespace.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Description:
    Description: The description of the namespace.
    Type: String
  Namespace:
    AllowedPattern: ^[-a-z0-9]+$
    Description: 'The name of the namespace.

      The name can contain lowercase letters, digits, and hyphens (-).'
    Type: String
  Specification:
    AllowedValues:
    - cms.s1.large
    - cms.s1.xlarge
    - cms.s1.2xlarge
    - cms.s1.3xlarge
    - cms.s1.6xlarge
    - cms.s1.12xlarge
    Description: 'The data retention period of the namespace. Valid values:

      - cms.s1.large: Data storage duration is 15 days.

      - cms.s1.xlarge: Data storage duration is 32 days.

      - cms.s1.2xlarge: Data storage duration 63 days.

      - cms.s1.3xlarge: Data storage duration 93 days.

      - cms.s1.6xlarge: Data storage duration 185 days.

      - cms.s1.12xlarge: Data storage duration 376 days.'
    Type: String
Resources:
  ExtensionResource:
    Properties:
      Description:
        Ref: Description
      Namespace:
        Ref: Namespace
      Specification:
        Ref: Specification
    Type: ALIYUN::CMS::Namespace
Outputs:
  CreateTime:
    Description: 'The timestamp that was generated when the namespace was created.

      Unit: milliseconds.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - CreateTime
  Description:
    Description: The description of the namespace.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - Description
  ModifyTime:
    Description: The timestamp that was generated when the namespace was last modified.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - ModifyTime
  Namespace:
    Description: The namespace for the Alibaba Cloud service.
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - Namespace
  Specification:
    Description: 'The data retention period of the namespace. Valid values:

      - cms.s1.large: Data storage duration is 15 days.

      - cms.s1.xlarge: Data storage duration is 32 days.

      - cms.s1.2xlarge: Data storage duration 63 days.

      - cms.s1.3xlarge: Data storage duration 93 days.

      - cms.s1.6xlarge: Data storage duration 185 days.

      - cms.s1.12xlarge: Data storage duration 376 days.'
    Value:
      Fn::GetAtt:
      - ExtensionResource
      - Specification
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Description": {
      "Type": "String",
      "Description": "The description of the namespace."
    },
    "Specification": {
      "Type": "String",
      "Description": "The data retention period of the namespace. Valid values:\n- cms.s1.large: Data storage duration is 15 days.\n- cms.s1.xlarge: Data storage duration is 32 days.\n- cms.s1.2xlarge: Data storage duration 63 days.\n- cms.s1.3xlarge: Data storage duration 93 days.\n- cms.s1.6xlarge: Data storage duration 185 days.\n- cms.s1.12xlarge: Data storage duration 376 days.",
      "AllowedValues": [
        "cms.s1.large",
        "cms.s1.xlarge",
        "cms.s1.2xlarge",
        "cms.s1.3xlarge",
        "cms.s1.6xlarge",
        "cms.s1.12xlarge"
      ]
    },
    "Namespace": {
      "Type": "String",
      "Description": "The name of the namespace.\nThe name can contain lowercase letters, digits, and hyphens (-).",
      "AllowedPattern": "^[-a-z0-9]+$"
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::CMS::Namespace",
      "Properties": {
        "Description": {
          "Ref": "Description"
        },
        "Specification": {
          "Ref": "Specification"
        },
        "Namespace": {
          "Ref": "Namespace"
        }
      }
    }
  },
  "Outputs": {
    "ModifyTime": {
      "Description": "The timestamp that was generated when the namespace was last modified.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ModifyTime"
        ]
      }
    },
    "Description": {
      "Description": "The description of the namespace.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Description"
        ]
      }
    },
    "CreateTime": {
      "Description": "The timestamp that was generated when the namespace was created.\nUnit: milliseconds.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "Specification": {
      "Description": "The data retention period of the namespace. Valid values:\n- cms.s1.large: Data storage duration is 15 days.\n- cms.s1.xlarge: Data storage duration is 32 days.\n- cms.s1.2xlarge: Data storage duration 63 days.\n- cms.s1.3xlarge: Data storage duration 93 days.\n- cms.s1.6xlarge: Data storage duration 185 days.\n- cms.s1.12xlarge: Data storage duration 376 days.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Specification"
        ]
      }
    },
    "Namespace": {
      "Description": "The namespace for the Alibaba Cloud service.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Namespace"
        ]
      }
    }
  }
}
```
