DATASOURCE::ROS::StackGroups is used to query the details of stack groups.

## Syntax

```
{
  "Type": "DATASOURCE::ROS::StackGroups",
  "Properties": {
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

-   StackGroups: details of the stack groups.
    
-   StackGroupNames: the names of the stack groups.
    

**Property**

**Type**

**Description**

**Constraint**

StackGroupNames

List

The names of the stack groups.

None.

StackGroups

List

Details of stack groups.

None.

Status

String

The status of the stack group.

Valid values:

-   ACTIVE
    
-   DELETED
    

PermissionModel

String

The permission model of the stack group.

Valid values:

-   SELF\_MANAGED
    
-   SERVICE\_MANAGED
    

Description

String

The description of the stack group.

None.

Tags

List

The tags of the stack group.

Example:

```
[
        {
          "Key": "usage1",
          "Value": "test1"
        }
      ]
```

StackGroupId

String

The ID of the stack group.

None.

ResourceGroupId

String

The ID of the resource group.

None.

AutoDeployment

Map

The information about automatic deployment settings.

Example:

```
{
        "Enabled": true,
        "RetainStacksOnAccountRemoval": true
      }
```

StackGroupName

String

The name of the stack group.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ResourceGroupId:
    Description: The ID of the resource group.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      ResourceGroupId:
        Ref: ResourceGroupId
    Type: DATASOURCE::ROS::StackGroups
Outputs:
  StackGroupNames:
    Description: The list of stack group names.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - StackGroupNames
  StackGroups:
    Description: The list of stack groups.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - StackGroups
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ResourceGroupId": {
      "Type": "String",
      "Description": "The ID of the resource group."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ROS::StackGroups",
      "Properties": {
        "ResourceGroupId": {
          "Ref": "ResourceGroupId"
        }
      }
    }
  },
  "Outputs": {
    "StackGroups": {
      "Description": "The list of stack groups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StackGroups"
        ]
      }
    },
    "StackGroupNames": {
      "Description": "The list of stack group names.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StackGroupNames"
        ]
      }
    }
  }
}
```
