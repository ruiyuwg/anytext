DATASOURCE::ResourceManager::ResourceGroup is used to query the information about a resource group.

## Syntax

```
{
  "Type": "DATASOURCE::ResourceManager::ResourceGroup",
  "Properties": {
    "IncludeTags": Boolean,
    "ResourceGroupId": String,
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

IncludeTags

Boolean

No

Yes

Specifies whether to return the information about tags.

Valid values:

-   false (default)
    
-   true
    

ResourceGroupId

String

No

Yes

The ID of the resource group.

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

-   Status: the status of the resource group.
    
-   RegionStatuses: the statuses of the resource group in all regions.
    
-   AccountId: the ID of the Alibaba Cloud account to which the resource group belongs.
    
-   ResourceGroupId: the ID of the resource group.
    
-   DisplayName: the display name of the resource group.
    
-   CreateDate: the time when the resource group was created. The time is displayed in UTC.
    
-   Tags: the tags.
    
-   Name: the name of the resource group.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ResourceGroupId:
    AssociationProperty: ALIYUN::ECS::ResourceGroup::ResourceGroupId
    Type: String
    Description:
      en: The ID of the resource group.
    Required: false
    MinLength: 1
    MaxLength: 50
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ResourceManager::ResourceGroup
    Properties:
      ResourceGroupId:
        Ref: ResourceGroupId
Outputs:
  Status:
    Description: The status of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Status
  RegionStatuses:
    Description: The status of the resource group in each region.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - RegionStatuses
  AccountId:
    Description: The ID of the Alibaba Cloud account to which the resource group belongs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AccountId
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ResourceGroupId
  DisplayName:
    Description: The display name of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DisplayName
  CreateDate:
    Description: The time when the resource group was created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateDate
  Tags:
    Description: The tags of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Tags
  Name:
    Description: The name of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Name
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ResourceGroupId": {
      "AssociationProperty": "ALIYUN::ECS::ResourceGroup::ResourceGroupId",
      "Type": "String",
      "Description": {
        "en": "The ID of the resource group."
      },
      "Required": false,
      "MinLength": 1,
      "MaxLength": 50
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ResourceManager::ResourceGroup",
      "Properties": {
        "ResourceGroupId": {
          "Ref": "ResourceGroupId"
        }
      }
    }
  },
  "Outputs": {
    "Status": {
      "Description": "The status of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Status"
        ]
      }
    },
    "RegionStatuses": {
      "Description": "The status of the resource group in each region.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "RegionStatuses"
        ]
      }
    },
    "AccountId": {
      "Description": "The ID of the Alibaba Cloud account to which the resource group belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AccountId"
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
    "DisplayName": {
      "Description": "The display name of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DisplayName"
        ]
      }
    },
    "CreateDate": {
      "Description": "The time when the resource group was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateDate"
        ]
      }
    },
    "Tags": {
      "Description": "The tags of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Tags"
        ]
      }
    },
    "Name": {
      "Description": "The name of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Name"
        ]
      }
    }
  }
}
                        
```
