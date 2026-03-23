ALIYUN::Flink::Member is used to grants authorization to a member.

## Syntax

```
{
  "Type": "ALIYUN::Flink::Member",
  "Properties": {
    "Member": String,
    "Namespace": String,
    "Role": String,
    "Workspace": String
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Editable**

**Description**

**Constraints**

Member

String

Yes

No

The UID of the member.

None

Namespace

String

Yes

No

The name of the project.

None

Role

String

Yes

No

The role of the member.

Valid values:

-   EDITOR
    
-   OWNER
    
-   VIEWER
    

Workspace

String

Yes

No

The ID of the workspace.

None

## Return values

Fn::GetAtt

MemberInfo: The details of the Flink member.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Role:
    Type: String
    Description:
      en: The role of the member.
    AllowedValues:
      - EDITOR
      - OWNER
      - VIEWER
    Required: true
  Member:
    Type: String
    Description:
      en: The UID of the member.
    Required: true
  Namespace:
    Type: String
    Description:
      en: The name of the project.
    Required: true
    MinLength: 1
    MaxLength: 60
  Workspace:
    Type: String
    Description:
      en: The ID of the workspace.
    Required: true
Resources:
  FlinkMember:
    Type: ALIYUN::Flink::Member
    Properties:
      Role:
        Ref: Role
      Member:
        Ref: Member
      Namespace:
        Ref: Namespace
      Workspace:
        Ref: Workspace
Outputs:
  MemberInfo:
    Description: The details of the Flink member.
    Value:
      Fn::GetAtt:
        - FlinkMember
        - MemberInfo
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Role": {
      "Type": "String",
      "Description": {
        "en": "The role of the member."
      },
      "AllowedValues": [
        "EDITOR",
        "OWNER",
        "VIEWER"
      ],
      "Required": true
    },
    "Member": {
      "Type": "String",
      "Description": {
        "en": "The UID of the member."
      },
      "Required": true
    },
    "Namespace": {
      "Type": "String",
      "Description": {
        "en": "The name of the project."
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 60
    },
    "Workspace": {
      "Type": "String",
      "Description": {
        "en": "The ID of the workspace."
      },
      "Required": true
    }
  },
  "Resources": {
    "FlinkMember": {
      "Type": "ALIYUN::Flink::Member",
      "Properties": {
        "Role": {
          "Ref": "Role"
        },
        "Member": {
          "Ref": "Member"
        },
        "Namespace": {
          "Ref": "Namespace"
        },
        "Workspace": {
          "Ref": "Workspace"
        }
      }
    }
  },
  "Outputs": {
    "MemberInfo": {
      "Description": "The details of the Flink member.",
      "Value": {
        "Fn::GetAtt": [
          "FlinkMember",
          "MemberInfo"
        ]
      }
    }
  }
}
                        
```
