DATASOURCE::CMS::MonitorGroups is used to query the information about application groups.

## Syntax

```
{
  "Type": "DATASOURCE::CMS::MonitorGroups",
  "Properties": {
    "Type": String,
    "DynamicTagRuleId": String,
    "MonitorGroupName": String,
    "GroupId": Integer,
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

Type

String

No

Yes

The type of the application group.

Valid values:

-   custom: a self-managed application group
    
-   ehpc\_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster
    
-   kubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster
    

DynamicTagRuleId

String

No

Yes

The ID of the tag rule.

None.

MonitorGroupName

String

No

Yes

The name of the application group.

None.

GroupId

Integer

No

Yes

The ID of the application group.

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

-   GroupIds: the IDs of the application groups.
    
-   MonitorGroups: details of the application groups.
    

**Property**

**Type**

**Description**

**Constraint**

GroupIds

List

The IDs of the application groups.

None.

MonitorGroups

List

Details of the application groups.

None.

Tags

List

The tags of the application group.

None.

BindUrl

String

The URL that is synchronized from ACK.

None.

TemplateIds

List

The alert templates that are applied to the application group.

None.

ContactGroups

List

The alert contact groups.

None.

ServiceId

String

The ID of the Alibaba Cloud service.

None.

DynamicTagRuleId

String

The ID of the tag rule.

None.

MonitorGroupName

String

The name of the application group.

None.

GmtModified

String

The timestamp that indicates when the application group was modified.

Unit: milliseconds.

CreateTime

String

The timestamp that indicates when the application group was created.

Unit: milliseconds.

Type

String

The type of the application group.

None.

GroupId

String

The ID of the application group.

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  ExtensionDataSource:
    Type: 'DATASOURCE::CMS::MonitorGroups'
    Properties:
      Type:
        Ref: Type
Parameters:
  Type:
    Type: String
    Description: >-
      The type of the application group. Valid values:

      custom: a self-managed application group.

      ehpc_cluster: an application group that is synchronized from an Elastic
      High Performance Computing (E-HPC) cluster.

      kubernetes: an application group that is synchronized from a Container
      Service for Kubernetes (ACK) cluster.
Outputs:
  GroupIds:
    Description: The list of group IDs.
    Value:
      'Fn::GetAtt':
        - ExtensionDataSource
        - GroupIds
  MonitorGroups:
    Description: The list of monitor groups.
    Value:
      'Fn::GetAtt':
        - ExtensionDataSource
        - MonitorGroups
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CMS::MonitorGroups",
      "Properties": {
        "Type": {
          "Ref": "Type"
        }
      }
    }
  },
  "Parameters": {
    "Type": {
      "Type": "String",
      "Description": "The type of the application group. Valid values:\ncustom: a self-managed application group.\nehpc_cluster: an application group that is synchronized from an Elastic High Performance Computing (E-HPC) cluster.\nkubernetes: an application group that is synchronized from a Container Service for Kubernetes (ACK) cluster."
    }
  },
  "Outputs": {
    "GroupIds": {
      "Description": "The list of group IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "GroupIds"
        ]
      }
    },
    "MonitorGroups": {
      "Description": "The list of monitor groups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MonitorGroups"
        ]
      }
    }
  }
}
```
