DATASOURCE::CMS::SlsGroups is used to query the information about Logstore groups.

## Syntax

```
{
  "Type": "DATASOURCE::CMS::SlsGroups",
  "Properties": {
    "SlsGroupName": String,
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

SlsGroupName

String

No

Yes

The name of the Logstore group.

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

-   SlsGroups: details of the Logstore groups.
    
-   SlsGroupNames: the names of the Logstore groups.
    

**Property**

**Type**

**Description**

**Constraint**

SlsGroupNames

List

The names of the Logstore groups.

None.

SlsGroups

List

Details of the Logstore groups.

None.

SlsGroupName

String

The name of the Logstore group.

None.

SlsGroupConfig

List

The configurations of the Logstore group.

None.

SlsGroupDescription

String

The description of the Logstore group.

None.

CreateTime

String

The timestamp that indicates when the Logstore group was created.

Unit: milliseconds.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SlsGroupName:
    Description: The name of the Logstore group.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      SlsGroupName:
        Ref: SlsGroupName
    Type: DATASOURCE::CMS::SlsGroups
Outputs:
  SlsGroupNames:
    Description: The list of sls group names.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - SlsGroupNames
  SlsGroups:
    Description: The list of sls groups.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - SlsGroups
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SlsGroupName": {
      "Type": "String",
      "Description": "The name of the Logstore group."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CMS::SlsGroups",
      "Properties": {
        "SlsGroupName": {
          "Ref": "SlsGroupName"
        }
      }
    }
  },
  "Outputs": {
    "SlsGroups": {
      "Description": "The list of sls groups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SlsGroups"
        ]
      }
    },
    "SlsGroupNames": {
      "Description": "The list of sls group names.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SlsGroupNames"
        ]
      }
    }
  }
}
```
