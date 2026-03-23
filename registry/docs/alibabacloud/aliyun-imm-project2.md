ALIYUN::IMM::Project2 is used to create a project of the new Intelligent Media Management (IMM) version.

## Syntax

```
{
  "Type": "ALIYUN::IMM::Project2",
  "Properties": {
    "ProjectName": String,
    "Description": String,
    "DatasetMaxBindCount": Integer,
    "DatasetMaxEntityCount": Integer,
    "DatasetMaxTotalFileSize": Integer,
    "DatasetMaxRelationCount": Integer,
    "DatasetMaxFileCount": Integer,
    "ProjectMaxDatasetCount": Integer,
    "ServiceRole": String,
    "TemplateId": String
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

ProjectName

String

Yes

No

The name of the project.

The name must meet the following requirements:

-   The name must be 1 to 128 characters in length.
    
-   It can contain only letters, digits, hyphens (-), and underscores (\_).
    
-   It must start with a letter or an underscore (\_).
    

Description

String

No

Yes

The description of the project.

The description must be 1 to 256 characters in length. This property is empty by default.

DatasetMaxBindCount

Integer

No

Yes

The maximum number of bindings for each dataset.

Valid values: 1 to 10. Default value: 10.

DatasetMaxEntityCount

Integer

No

Yes

The maximum number of metadata entities in each dataset.

Default value: 10000000000.

DatasetMaxTotalFileSize

Integer

No

Yes

The maximum total size of files in each dataset.

You cannot add indexes after the maximum total size is exceeded. Unit: bytes. Default value: 90000000000000000.

DatasetMaxRelationCount

Integer

No

Yes

The maximum number of metadata relationships in each dataset.

Default value: 100000000000.

DatasetMaxFileCount

Integer

No

Yes

The maximum number of files in each dataset.

Valid values: 1 to 100000000. Default value: 1000000000.

ProjectMaxDatasetCount

Integer

No

Yes

The maximum number of datasets in each project.

Valid values: 1 to 1000000000. Default value: 1000000000.

ServiceRole

String

No

Yes

The service role.

The service role allows access from IMM to other cloud resources, such as Object Storage Service (OSS). Default value: `AliyunIMMDefaultRole`.

You can create a custom service role in the Resource Access Management (RAM) console and grant the required permissions to the service role. For more information, see [Grant permissions to a RAM user](/help/en/imm/user-guide/grant-permissions-to-a-ram-user).

TemplateId

String

No

Yes

The ID of the workflow template.

This property is empty by default. For more information, see [Workflow templates and operators](/help/en/imm/user-guide/workflow-templates-and-operators).

## Return values

Fn::GetAtt

ProjectName: the name of the project.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ProjectName:
    Type: String
    Description:
      en: The name of project.
    Required: true
    Default: my-project
Resources:
  Project:
    Type: ALIYUN::IMM::Project2
    Properties:
      ProjectName:
        Ref: ProjectName
Outputs:
  ProjectName:
    Description: The name of project.
    Value:
      Fn::GetAtt:
        - Project
        - ProjectName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ProjectName": {
      "Type": "String",
      "Description": {
        "en": "The name of project."
      },
      "Required": true,
      "Default": "my-project"
    }
  },
  "Resources": {
    "Project": {
      "Type": "ALIYUN::IMM::Project2",
      "Properties": {
        "ProjectName": {
          "Ref": "ProjectName"
        }
      }
    }
  },
  "Outputs": {
    "ProjectName": {
      "Description": "The name of project.",
      "Value": {
        "Fn::GetAtt": [
          "Project",
          "ProjectName"
        ]
      }
    }
  }
}
                        
```
