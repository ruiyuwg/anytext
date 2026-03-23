DATASOURCE::GraphDatabase::DbInstances is used to query the information about Graph Database (GDB) instances.

## Syntax

```
{
  "Type": "DATASOURCE::GraphDatabase::DbInstances",
  "Properties": {
    "ResourceGroupId": String,
    "DbInstanceDescription": String,
    "DbInstanceId": String,
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

DbInstanceDescription

String

No

Yes

The description of the instance.

None.

DbInstanceId

String

No

Yes

The instance ID.

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

-   DbInstances: details of the instances.
    
-   DbInstanceIds: the IDs of the instances.
    

**Property**

**Type**

**Description**

**Constraint**

DbInstanceIds

List

The IDs of the instances.

None.

DbInstances

List

Details of the instances.

None.

DbInstanceDescription

String

The description.

None.

LockMode

String

The lock mode of the instance.

None.

DbInstanceCategory

String

The edition of the instance.

None.

DbVersion

String

The database version.

None.

DbInstanceId

String

The instance ID.

None.

LockReason

String

The reason why the instance is locked.

None.

Status

String

The status of the instance.

None.

VpcId

String

The ID of the virtual private cloud (VPC).

None.

Tags

List

The custom tags.

None.

RegionId

String

The region information.

None.

ResourceGroupId

String

The ID of the resource group.

None.

VSwitchId

String

The vSwitch ID.

None.

DbNodeClass

String

The node type of the database.

None.

Expired

String

The expiration time of the instance.

None.

DbNodeCount

String

The number of nodes.

None.

ZoneId

String

The zone ID of the instance.

None.

DbInstanceType

String

The instance type.

None.

DbNodeStorage

String

The storage capacity of the instance.

None.

ExpireTime

String

The expiration time of the database.

None.

PaymentType

String

The billing method.

None.

ReadOnlyDbInstanceIds

List

The IDs of the read-only instances.

None.

CreateTime

String

The time when the instance was created.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DbInstanceId:
    Type: String
    Description: The first ID of the resource.
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::GraphDatabase::DbInstances
    Properties:
      DbInstanceId:
        Ref: DbInstanceId
Outputs:
  DbInstances:
    Description: The list of db instances.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DbInstances
  DbInstanceIds:
    Description: The list of db instance IDs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DbInstanceIds
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DbInstanceId": {
      "Type": "String",
      "Description": "The first ID of the resource."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::GraphDatabase::DbInstances",
      "Properties": {
        "DbInstanceId": {
          "Ref": "DbInstanceId"
        }
      }
    }
  },
  "Outputs": {
    "DbInstances": {
      "Description": "The list of db instances.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DbInstances"
        ]
      }
    },
    "DbInstanceIds": {
      "Description": "The list of db instance IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DbInstanceIds"
        ]
      }
    }
  }
}
```
