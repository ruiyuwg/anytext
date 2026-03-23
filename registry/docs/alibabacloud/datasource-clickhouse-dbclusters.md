DATASOURCE::ClickHouse::DBClusters is used to query the information about ApsaraDB for ClickHouse clusters.

## Syntax

```
{
  "Type": "DATASOURCE::ClickHouse::DBClusters",
  "Properties": {
    "DBClusterName": String,
    "DBClusterId": String,
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

DBClusterName

String

No

Yes

The description of the cluster.

None.

DBClusterId

String

No

Yes

The cluster ID.

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

-   DBClusterIds: the IDs of the clusters.
    
-   DBClusters: details of the clusters.
    

**Property**

**Type**

**Description**

**Constraint**

DBClusterIds

List

The IDs of the clusters.

None.

DBClusters

List

Details of the clusters.

None.

Category

String

The edition of the cluster.

None.

DBClusterName

String

The description of the cluster.

None.

LockMode

String

The lock mode of the cluster.

None.

ConnectionString

String

The virtual private cloud (VPC) endpoint of the cluster.

None.

DbNodeCount

String

The number of nodes.

None.

DbClusterNetworkType

String

The network type.

None.

IsExpired

String

Indicates whether the cluster has expired.

None.

LockReason

String

The reason why the cluster is locked.

None.

Status

String

The state of the cluster.

None.

VpcId

String

The VPC ID.

None.

AliUid

String

The ID of the Alibaba Cloud account.

None.

DBClusterId

String

The cluster ID.

None.

Bid

String

The site ID.

None.

RegionId

String

The region ID.

None.

`VSwitchId`

String

The vSwitch ID.

None.

DbNodeClass

String

The specifications of the cluster.

None.

DbNodeStorage

String

The storage space of the node.

None.

CommodityCode

String

The commodity code of the cluster.

None.

ZoneId

String

The zone ID.

None.

VpcCloudInstanceId

String

The ID of resource that is deployed in the VPC.

None.

StorageType

String

The storage type.

None.

Port

String

The HTTP port number.

None.

ExpireTime

String

The expiration time of the cluster.

None.

PaymentType

String

The billing method.

None.

ScaleOutStatus

String

The state of the data migration task.

None.

CreateTime

String

The time when the cluster was created.

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DBClusterId:
    Description: Instance ID.
    Type: String
  DBClusterName:
    Description: The cluster description information.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      DBClusterId:
        Ref: DBClusterId
      DBClusterName:
        Ref: DBClusterName
    Type: DATASOURCE::ClickHouse::DBClusters
Outputs:
  DBClusterIds:
    Description: The list of db cluster IDs.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DBClusterIds
  DBClusters:
    Description: The list of db clusters.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DBClusters
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DBClusterName": {
      "Type": "String",
      "Description": "The cluster description information."
    },
    "DBClusterId": {
      "Type": "String",
      "Description": "Instance ID."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ClickHouse::DBClusters",
      "Properties": {
        "DBClusterName": {
          "Ref": "DBClusterName"
        },
        "DBClusterId": {
          "Ref": "DBClusterId"
        }
      }
    }
  },
  "Outputs": {
    "DBClusterIds": {
      "Description": "The list of db cluster IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DBClusterIds"
        ]
      }
    },
    "DBClusters": {
      "Description": "The list of db clusters.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DBClusters"
        ]
      }
    }
  }
}
```
