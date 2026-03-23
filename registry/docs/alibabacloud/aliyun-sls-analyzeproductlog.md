ALIYUN::SLS::AnalyzeProductLog is used to analyze the logs of a cloud service.

## Syntax

```
{
  "Type": "ALIYUN::SLS::AnalyzeProductLog",
  "Properties": {
    "CloudProduct": String,
    "Logstore": String,
    "Project": String,
    "Overwrite": Boolean
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

CloudProduct

String

Yes

No

The name of the cloud service.

None.

Logstore

String

Yes

No

The name of the Logstore.

None.

Project

String

Yes

No

The name of the project.

None.

Overwrite

Boolean

No

No

Specifies whether to overwrite existing analysis rules.

None.

## Return values

Fn::GetAtt

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Project:
    Type: String
    Description:
      en: The project name.
    Required: true
  Logstore:
    Type: String
    Description:
      en: The logstore name.
    Required: true
  CloudProduct:
    Type: String
    Description:
      en: The cloud product name.
    Required: true
Resources:
  AnalyzeProductLog:
    Type: ALIYUN::SLS::AnalyzeProductLog
    Properties:
      Project:
        Ref: Project
      Logstore:
        Ref: Logstore
      CloudProduct:
        Ref: CloudProduct
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Project": {
      "Type": "String",
      "Description": {
        "en": "The project name."
      },
      "Required": true
    },
    "Logstore": {
      "Type": "String",
      "Description": {
        "en": "The logstore name."
      },
      "Required": true
    },
    "CloudProduct": {
      "Type": "String",
      "Description": {
        "en": "The cloud product name."
      },
      "Required": true
    }
  },
  "Resources": {
    "AnalyzeProductLog": {
      "Type": "ALIYUN::SLS::AnalyzeProductLog",
      "Properties": {
        "Project": {
          "Ref": "Project"
        },
        "Logstore": {
          "Ref": "Logstore"
        },
        "CloudProduct": {
          "Ref": "CloudProduct"
        }
      }
    }
  }
}
                        
```
