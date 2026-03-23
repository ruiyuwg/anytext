ALIYUN::SLS::Project is used to create a Simple Log Service (SLS) project.

## Syntax

```
{
  "Type": "ALIYUN::SLS::Project",
  "Properties": {
    "Name": String,
    "Description": String,
    "Tags": List,
    "ResourceGroupId": String,
    "DataRedundancyType": String
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

Name

String

Yes

No

The name of the project.

The name must be 3 to 63 characters in length. It must start and end with a lowercase letter or a digit. It can contain lowercase letters, digits, and hyphens (-).

Description

String

No

No

The description of the project.

The description can be up to 64 characters in length, and cannot contain the following special characters: `< > ' \ "`.

Tags

List

No

Yes

The tags.

You can add up to 20 tags.

For more information, see [Tags syntax](#section-bt3-3wv-4js) and [Tags properties](#section-n16-q4m-ulw).

ResourceGroupId

String

No

Yes

The ID of the resource group to which the project belongs.

None.

DataRedundancyType

String

No

No

The data redundancy type.

None.

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

The key of the tag.

The key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Value

String

No

No

The value of the tag.

The value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

Name: the name of the project.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  Project:
    Type: ALIYUN::SLS::Project
    Properties:
      Name: TestProject
Outputs:
  Name:
    Description: Project name.
    Value:
      Fn::GetAtt:
        - Project
        - Name
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "Project": {
      "Type": "ALIYUN::SLS::Project",
      "Properties": {
        "Name": "TestProject"
      }
    }
  },
  "Outputs": {
    "Name": {
      "Description": "Project name.",
      "Value": {
        "Fn::GetAtt": [
          "Project",
          "Name"
        ]
      }
    }
  }
}
```
