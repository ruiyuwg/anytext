DATASOURCE::BPStudio::Application is used to query the information about an application.

## Syntax

```
{
  "Type": "DATASOURCE::BPStudio::Application",
  "Properties": {
    "ApplicationId": String,
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

ApplicationId

String

Yes

Yes

The application ID.

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

-   Status: the application status.
    
-   ApplicationName: the application name.
    
-   ResourceGroupId: the ID of the resource group.
    
-   ImageUrl: the address of the image in the database.
    
-   ApplicationId: the application ID.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ApplicationId:
    Type: String
    Description:
      en: The first ID of the resource.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::BPStudio::Application
    Properties:
      ApplicationId:
        Ref: ApplicationId
Outputs:
  Status:
    Description: The status of the resource.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Status
  ApplicationName:
    Description: Application name.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ApplicationName
  ResourceGroupId:
    Description: The ID of the resource group to which the resource belongs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ResourceGroupId
  ImageUrl:
    Description: The Picture in the OSS Storage Address.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ImageUrl
  ApplicationId:
    Description: The first ID of the resource.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ApplicationId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ApplicationId": {
      "Type": "String",
      "Description": {
        "en": "The first ID of the resource."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::BPStudio::Application",
      "Properties": {
        "ApplicationId": {
          "Ref": "ApplicationId"
        }
      }
    }
  },
  "Outputs": {
    "Status": {
      "Description": "The status of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Status"
        ]
      }
    },
    "ApplicationName": {
      "Description": "Application name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ApplicationName"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group to which the resource belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroupId"
        ]
      }
    },
    "ImageUrl": {
      "Description": "The Picture in the OSS Storage Address.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ImageUrl"
        ]
      }
    },
    "ApplicationId": {
      "Description": "The first ID of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ApplicationId"
        ]
      }
    }
  }
}
                        
```
