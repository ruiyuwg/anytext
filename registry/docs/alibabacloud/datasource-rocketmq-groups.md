DATASOURCE::ROCKETMQ::Groups is used to query groups.

## Syntax

```
{
  "Type": "DATASOURCE::ROCKETMQ::Groups",
  "Properties": {
    "GroupName": String,
    "GroupType": String,
    "InstanceId": String,
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

GroupName

String

No

Yes

The group ID.

None.

GroupType

String

No

Yes

The protocol over which the group publishes or subscribes to messages.

Valid values:

-   tcp
    
-   http
    

InstanceId

String

No

Yes

The ID of the instance to which the group belongs.

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

-   GroupNames: the IDs of the groups.
    
-   Groups: details of the groups.
    

**Property**

**Type**

**Description**

**Constraint**

GroupNames

List

The IDs of the groups.

None.

Groups

List

Details of the groups.

None.

GroupType

string

The protocol over which the group publishes or subscribes to messages.

Valid values:

-   tcp
    
-   http
    

Remark

string

The remarks.

None.

Tags

Map

The tags that are added to the group.

Example:

```
[
            {
              "Key": "CartService",
              "Value": "ServiceA"
            }
          ]
```

InstanceId

string

The instance ID.

None.

GroupName

string

The ID of the consumer group.

None.

IndependentNaming

boolean

Indicates whether the instance has a separate namespace.

Valid values:

-   true: The instance has a separate namespace. Resource names must be unique within an instance but can be the same across different instances.
    
-   false: The instance does not have a separate namespace. Resource names must be globally unique within and across all instances.
    

Owner

string

The owner of the group.

None.

CreateTime

string

The time when the group was created.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ROCKETMQ::Groups
    Properties:
      GroupType: http
Outputs:
  GroupNames:
    Description: The list of group names.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - GroupNames
  Groups:
    Description: The list of groups.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Groups
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ROCKETMQ::Groups",
      "Properties": {
        "GroupType": "http"
      }
    }
  },
  "Outputs": {
    "GroupNames": {
      "Description": "The list of group names.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "GroupNames"
        ]
      }
    },
    "Groups": {
      "Description": "The list of groups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Groups"
        ]
      }
    }
  }
}
```
