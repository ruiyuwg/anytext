DATASOURCE::ResourceManager::ResourceGroups is used to query resource groups.

## Syntax

```
{
  "Type": "DATASOURCE::ResourceManager::ResourceGroups",
  "Properties": {
    "DisplayName": String,
    "IncludeTags": Boolean,
    "Name": String,
    "ResourceGroupIds": List,
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

DisplayName

String

No

Yes

The display name of the resource group.

None.

IncludeTags

Boolean

No

Yes

Specifies whether to return the information about tags.

Valid values:

-   false (default)
    
-   true
    

**Note**

When you configure filter conditions for tags, the system returns the information about tags regardless of the `IncludeTags` value.

Name

String

No

Yes

The name of the resource group.

None.

ResourceGroupIds

List

No

Yes

The IDs of the resource groups.

You can specify up to 100 resource group IDs.

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

-   ResourceGroupIds: the IDs of the resource groups.
    
-   ResourceGroups: details of the resource groups.
    

Property

Type

Description

Constraint

ResourceGroupIds

List

The IDs of the resource groups.

None.

ResourceGroups

List

Details of the resource groups.

None.

Status

string

The status of the resource group.

None.

AccountId

string

The ID of the Alibaba Cloud account to which the resource group belongs.

None.

DisplayName

string

The display name of the resource group.

None.

ResourceGroupId

string

The ID of the resource group.

None.

Name

string

The name of the resource group.

None.

CreateDate

string

The time when the resource group was created. The time is displayed in UTC.

None.

Tags

string

The tags.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Name:
    Type: String
    Description:
      en: The identifier of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported. The identifier can be a maximum of 50 characters in length and can contain letters, digits, and hyphens (-).
    Required: false
    MinLength: 1
    MaxLength: 50
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ResourceManager::ResourceGroups
    Properties:
      Name:
        Ref: Name
Outputs:
  ResourceGroupIds:
    Description: The IDs of the resource groups.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ResourceGroupIds
  ResourceGroups:
    Description: The list of the resource groups.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ResourceGroups
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Name": {
      "Type": "String",
      "Description": {
        "en": "The identifier of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported. The identifier can be a maximum of 50 characters in length and can contain letters, digits, and hyphens (-)."
      },
      "Required": false,
      "MinLength": 1,
      "MaxLength": 50
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ResourceManager::ResourceGroups",
      "Properties": {
        "Name": {
          "Ref": "Name"
        }
      }
    }
  },
  "Outputs": {
    "ResourceGroupIds": {
      "Description": "The IDs of the resource groups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroupIds"
        ]
      }
    },
    "ResourceGroups": {
      "Description": "The list of the resource groups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroups"
        ]
      }
    }
  }
}
                        
```
