DATASOURCE::BPStudio::Template is used to query the information about a template, such as the architecture diagram.

## Syntax

```
{
  "Type": "DATASOURCE::BPStudio::Template",
  "Properties": {
    "TemplateId": String,
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

TemplateId

String

Yes

Yes

The template ID.

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

-   Description: the description of the template**.**
    
-   ResourceGroupId: the ID of the resource group.
    
-   TopoUrl: the address of the resource file.
    
-   CreateTime: the creation time.
    
-   TemplateName: the template name.
    
-   ImageUrl: the path of the architecture diagram file of the template.
    
-   TemplateId: the template ID.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  TemplateId:
    Type: String
    Description:
      en: The first ID of the resource.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::BPStudio::Template
    Properties:
      TemplateId:
        Ref: TemplateId
Outputs:
  Description:
    Description: Template description.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Description
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ResourceGroupId
  TopoUrl:
    Description: Represents resource file address.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TopoUrl
  CreateTime:
    Description: The creation time of the resource.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  TemplateName:
    Description: The name of the resource.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TemplateName
  ImageUrl:
    Description: Representative resource picture address.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ImageUrl
  TemplateId:
    Description: The first ID of the resource.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TemplateId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "TemplateId": {
      "Type": "String",
      "Description": {
        "en": "The first ID of the resource."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::BPStudio::Template",
      "Properties": {
        "TemplateId": {
          "Ref": "TemplateId"
        }
      }
    }
  },
  "Outputs": {
    "Description": {
      "Description": "Template description.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Description"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroupId"
        ]
      }
    },
    "TopoUrl": {
      "Description": "Represents resource file address.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TopoUrl"
        ]
      }
    },
    "CreateTime": {
      "Description": "The creation time of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "TemplateName": {
      "Description": "The name of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TemplateName"
        ]
      }
    },
    "ImageUrl": {
      "Description": "Representative resource picture address.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ImageUrl"
        ]
      }
    },
    "TemplateId": {
      "Description": "The first ID of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TemplateId"
        ]
      }
    }
  }
}
                        
```
