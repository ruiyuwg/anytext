ALIYUN::ServerlessDev::Project is used to create a project. If a template is specified for the project, the project is automatically deployed.

## Syntax

```
{
  "Type": "ALIYUN::ServerlessDev::Project",
  "Properties": {
    "Name": String,
    "Description": String,
    "Labels": Map,
    "Spec": Map
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

The project name.

The name must be unique and cannot be changed.

Description

String

No

No

The description.

None.

Labels

Map

No

No

The tags of the project.

None.

Spec

Map

No

No

The configurations of the project.

For more information, see the "Spec properties" section of this topic.

## Spec syntax

```
"Spec": {
  "TemplateConfig": Map,
  "RoleArn": String
}
```

## Spec properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

RoleArn

String

No

Yes

The Alibaba Cloud Resource Name (ARN) of the role that the development platform assumes to deploy the project.

Default value: acs:ram::${your\_main\_account\_ID}:role/aliyundevsdefaultrole.

TemplateConfig

Map

No

Yes

The template configurations of the project.

If you specify this property, the system automatically creates a default environment and deploys the project. For more information, see the "TemplateConfig properties" section of this topic.

## TemplateConfig syntax

```
"TemplateConfig": {
  "Parameters": Map,
  "TemplateName": String
}
```

## TemplateConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

TemplateName

String

Yes

Yes

The template name.

None.

Parameters

Map

No

Yes

The parameters of the template.

None.

## Return values

Fn::GetAtt

Name: the project name.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters: {}
    Resources:
      Project:
        Type: ALIYUN::ServerlessDev::Project
        Properties:
          Name: test
    Outputs:
      Name:
        Description: The name of the project.
        Value:
          Fn::GetAtt:
            - Project
            - Name
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
      },
      "Resources": {
        "Project": {
          "Type": "ALIYUN::ServerlessDev::Project",
          "Properties": {
            "Name": "test"
          }
        }
      },
      "Outputs": {
        "Name": {
          "Description": "The name of the project.",
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
