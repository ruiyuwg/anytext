DATASOURCE::SLS::Project is used to query a project.

## Syntax

```
{
  "Type": "DATASOURCE::SLS::Project",
  "Properties": {
    "ProjectName": String,
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

ProjectName

String

Yes

Yes

The name of the project.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   Status: the status of the project.
    
-   Owner: the Alibaba Cloud account to which the project belongs.
    
-   Description: the description of the project.
    
-   Quota: the quota of the project.
    
-   ResourceGroupId: the ID of the resource group to which the project belongs.
    
-   ProjectName: the name of the project**.**
    
-   CreateTime: the time when the project was created.
    
-   DataRedundancyType: the data redundancy type**.**
    
-   Region: the region to which the project belongs.
    
-   LastModifyTime: the time when the project was last updated.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ProjectName:
    Type: String
    Description:
      en: The name of the project.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::SLS::Project
    Properties:
      ProjectName:
        Ref: ProjectName
Outputs:
  Status:
    Description: The status of the project.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Status
  Owner:
    Description: The ID of the Alibaba Cloud account that is used to create the project.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Owner
  Description:
    Description: The description of the project.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Description
  Quota:
    Description: Project quota.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Quota
  ResourceGroupId:
    Description: The ID of the resource group to which the project belongs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ResourceGroupId
  ProjectName:
    Description: The name of the project.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ProjectName
  CreateTime:
    Description: The time at which the project was created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  DataRedundancyType:
    Description: Data redundancy type.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DataRedundancyType
  Region:
    Description: The region to which the project belongs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Region
  LastModifyTime:
    Description: The time at which the project was last modified.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LastModifyTime
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ProjectName": {
      "Type": "String",
      "Description": {
        "en": "The name of the project."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLS::Project",
      "Properties": {
        "ProjectName": {
          "Ref": "ProjectName"
        }
      }
    }
  },
  "Outputs": {
    "Status": {
      "Description": "The status of the project.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Status"
        ]
      }
    },
    "Owner": {
      "Description": "The ID of the Alibaba Cloud account that is used to create the project.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Owner"
        ]
      }
    },
    "Description": {
      "Description": "The description of the project.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Description"
        ]
      }
    },
    "Quota": {
      "Description": "Project quota.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Quota"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group to which the project belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroupId"
        ]
      }
    },
    "ProjectName": {
      "Description": "The name of the project.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ProjectName"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time at which the project was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "DataRedundancyType": {
      "Description": "Data redundancy type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DataRedundancyType"
        ]
      }
    },
    "Region": {
      "Description": "The region to which the project belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Region"
        ]
      }
    },
    "LastModifyTime": {
      "Description": "The time at which the project was last modified.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LastModifyTime"
        ]
      }
    }
  }
}
                        
```
