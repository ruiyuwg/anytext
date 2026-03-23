ALIYUN::FOAS::Project is used to create a project in a Realtime Compute cluster.

## Syntax

```
{
  "Type": "ALIYUN::FOAS::Project",
  "Properties": {
    "OrderId": String,
    "DeployType": String,
    "Description": String,
    "ManagerIds": String,
    "ClusterId": String,
    "Name": String
  }
}
```

## Properties

     

Name

Type

Required

Editable

Description

Validity

OrderId

String

No

No

The ID of the shared mode instance.

This parameter is required only when users create projects in the shared mode clusters.

DeployType

String

Yes

No

The type of the cluster.

Valid values:

-   cell: exclusive mode clusters.
-   public: shared mode clusters.

Description

String

No

No

The description of the project.

None.

ManagerIds

String

Yes

No

The account IDs of administrators. Separate multiple account IDs with commas (,).

None.

ClusterId

String

No

No

The ID of the cluster.

None.

Name

String

Yes

No

The name of the project.

The name must be 3 to 64 characters in length, and can contain lowercase letters, digits, and underscores (\_). It must start with a letter.

## Response parameters

Fn::GetAtt

State: the project status.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "Project": {
      "Type": "ALIYUN::FOAS::Project",
      "Properties": {
        "OrderId": {
          "Ref": "OrderId"
        },
        "DeployType": {
          "Ref": "DeployType"
        },
        "Description": {
          "Ref": "Description"
        },
        "ManagerIds": {
          "Ref": "ManagerIds"
        },
        "ClusterId": {
          "Ref": "ClusterId"
        },
        "Name": {
          "Ref": "Name"
        }
      }
    }
  },
  "Parameters": {
    "OrderId": {
      "MinLength": 1,
      "Type": "String",
      "Description": "Order Id of Shared cluster."
    },
    "DeployType": {
      "Type": "String",
      "Description": "Cluster type: Exclusive cluster: cell. Shared cluster: public",
      "AllowedValues": [
        "cell",
        "public"
      ]
    },
    "Description": {
      "MinLength": 1,
      "Type": "String",
      "Description": "Project description."
    },
    "ManagerIds": {
      "MinLength": 1,
      "Type": "String",
      "Description": "Comma delimited account Id list of managers."
    },
    "ClusterId": {
      "MinLength": 1,
      "Type": "String",
      "Description": "Cluster ID."
    },
    "Name": {
      "AllowedPattern": "[a-z][a-z0-9_]{2,63}",
      "Type": "String",
      "Description": "Project name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters."
    }
  },
  "Outputs": {
    "State": {
      "Description": "Project state.",
      "Value": {
        "Fn::GetAtt": [
          "Project",
          "State"
        ]
      }
    }
  }
}
```

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  Project:
    Type: ALIYUN::FOAS::Project
    Properties:
      OrderId:
        Ref: OrderId
      DeployType:
        Ref: DeployType
      Description:
        Ref: Description
      ManagerIds:
        Ref: ManagerIds
      ClusterId:
        Ref: ClusterId
      Name:
        Ref: Name
Parameters:
  OrderId:
    MinLength: 1
    Type: String
    Description: Order Id of Shared cluster.
  DeployType:
    Type: String
    Description: 'Cluster type: Exclusive cluster: cell. Shared cluster: public'
    AllowedValues:
    - cell
    - public
  Description:
    MinLength: 1
    Type: String
    Description: Project description.
  ManagerIds:
    MinLength: 1
    Type: String
    Description: Comma delimited account Id list of managers.
  ClusterId:
    MinLength: 1
    Type: String
    Description: Cluster ID.
  Name:
    AllowedPattern: "[a-z][a-z0-9_]{2,63}"
    Type: String
    Description: Project name. It begins with a letter, and contains only lowercase
      English letters, numbers, underscores (_), and is limited to 3-64 characters.
Outputs:
  State:
    Description: Project state.
    Value:
      Fn::GetAtt:
      - Project
      - State
```
