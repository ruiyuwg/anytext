DATASOURCE::SLS::Projects is used to query the information about Simple Log Service (SLS) projects.

## Syntax

```
{
  "Type": "DATASOURCE::SLS::Projects",
  "Properties": {
    "RefreshOptions": String
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

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   Projects: details of the projects.
    
-   ProjectNames: the names of the projects.
    

**Property**

**Type**

**Description**

**Constraint**

ProjectNames

List

The names of the projects.

None.

Projects

List

Details of the projects.

None.

ProjectName

String

The project name.

The name is globally unique in an Alibaba Cloud region. You cannot change the name after the project is created.

Status

String

The status of the project.

Valid values:

-   Normal: The project works as expected.
    
-   Disable: The project is disabled.
    

Owner

String

The ID of the Alibaba Cloud account that is used to create the project.

None.

Description

String

The description of the project.

None.

CreatedTime

String

The time when the project was created.

None.

LastModifyTime

String

The timestamp when the project was last updated.

Unit: milliseconds.

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "Projects": {
      "Type": "DATASOURCE::SLS::Projects",
      "Properties": {}
    }
  },
  "Outputs": {
    "Projects": {
      "Description": "The list of projects.",
      "Value": {
        "Fn::GetAtt": [
          "Projects",
          "Projects"
        ]
      }
    },
    "ProjectNames": {
      "Description": "The list of project names.",
      "Value": {
        "Fn::GetAtt": [
          "Projects",
          "ProjectNames"
        ]
      }
    }
  }
}
```

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  Projects:
    Type: DATASOURCE::SLS::Projects
    Properties: {}
Outputs:
  Projects:
    Description: The list of projects.
    Value:
      Fn::GetAtt:
        - Projects
        - Projects
  ProjectNames:
    Description: The list of project names.
    Value:
      Fn::GetAtt:
        - Projects
        - ProjectNames
                    
```
