ALIYUN::IMM::Project is used to create an Intelligent Media Management (IMM) project.

## Syntax

```
{
  "Type": "ALIYUN::IMM::Project",
  "Properties": {
    "Project": String,
    "ServiceRole": String
  }
}
```

## Properties

     

Property

Type

Required

Editable

Description

Constraint

Project

String

Yes

No

The name of the IMM project.

The name must be 1 to 50 characters in length, and can contain letters, digits, and hyphens (-). The name must start with a letter and cannot contain only letters.

ServiceRole

String

No

No

The RAM role to be assigned to IMM.

IMM can assume this RAM role to obtain the permissions that are required to access other Alibaba Cloud services, such as Object Storage Service (OSS).

Default value: AliyunIMMDefaultRole.

You can create a RAM role in the Resource Access Management (RAM) console. For more information, see [Create a normal service role](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service#section-0xg-2ri-2sr).

## Response parameters

Fn::GetAtt

Project: the name of the project.

## Example

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Project": {
      "Type": "String",
      "Description": "The name of project."
    }
  },
  "Resources": {
    "IMMProject": {
      "Type": "ALIYUN::IMM::Project",
      "Properties": {
        "Project": {
          "Ref": "Project"
        }
      }
    }
  },
  "Outputs": {
    "Project": {
      "Description": "The name of project.",
      "Value": {
        "Fn::GetAtt": [
          "IMMProject",
          "Project"
        ]
      }
    }
  }
}
```
