DATASOURCE::REDIS::Instances is used to query the information about Tair (Redis OSS-compatible) instances.

## Syntax

```
{
  "Type": "DATASOURCE::REDIS::Instances",
  "Properties": {
    "ArchitectureType": String,
    "EngineVersion": String,
    "EditionType": String,
    "ZoneId": String,
    "ResourceGroupId": String,
    "VSwitchId": String,
    "InstanceClass": String,
    "Expired": String,
    "VpcId": String,
    "PrivateIp": String,
    "InstanceStatus": String,
    "ChargeType": String,
    "NetworkType": String,
    "SearchKey": String,
    "GlobalInstance": String,
    "InstanceType": String,
    "InstanceIds": String,
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

ArchitectureType

String

No

Yes

The architecture type.

Valid values:

-   cluster: cluster architecture
    
-   standard: standard architecture
    
-   rwsplit: read/write splitting architecture
    

EngineVersion

String

No

Yes

The database engine version of the instance.

Valid values:

-   2.8
    
-   4.0
    
-   5.0
    
-   6.0
    

EditionType

String

No

Yes

The edition of the instance.

Valid values:

-   Community: Community Edition
    
-   Enterprise: Tair (Enterprise Edition)
    

ZoneId

String

No

Yes

The zone ID.

None.

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

VSwitchId

String

No

Yes

The vSwitch ID.

None.

InstanceClass

String

No

Yes

The instance type.

None.

Expired

String

No

Yes

Specifies whether the instance has expired.

Valid values:

-   true
    
-   false
    

VpcId

String

No

Yes

The ID of the virtual private cloud (VPC).

None.

PrivateIp

String

No

Yes

The IP address of the VPC.

None.

InstanceStatus

String

No

Yes

The status of the instance.

Valid values:

-   Normal: The instance runs as expected.
    
-   Creating: The instance is being created.
    
-   Changing: The instance is being modified.
    
-   Inactive: The instance is disabled.
    
-   Flushing: The instance is being released.
    
-   Released: The instance is released.
    
-   Transforming: The instance is being transformed.
    
-   Unavailable: The instance is stopped.
    
-   Error: The instance fails to be created.
    
-   Migrating: The instance is being migrated.
    
-   BackupRecovering: The instance is being restored from a backup.
    
-   MinorVersionUpgrading: A minor version of the instance is being updated.
    
-   NetworkModifying: The network configurations of the instance are being modified.
    
-   SSLModifying: The SSL configurations of the instance are being modified.
    
-   MajorVersionUpgrading: The major version of the instance is being upgraded. The instance can be accessed during the upgrade.
    

ChargeType

String

No

Yes

The billing method.

Valid values:

-   PrePaid: subscription
    
-   PostPaid: pay-as-you-go
    

NetworkType

String

No

Yes

The network type.

Valid values:

-   CLASSIC
    
-   VPC
    

SearchKey

String

No

Yes

The keyword that you want to use for fuzzy searches. The keyword can be a part of an instance name or instance ID.

None.

GlobalInstance

String

No

Yes

Specifies whether to return the child instance of a distributed instance.

Valid values:

-   true
    
-   false
    

InstanceType

String

No

Yes

The category of the instance.

Valid values:

-   Tair
    
-   Redis
    
-   Memcache
    

InstanceIds

String

No

Yes

The IDs of the instances that you want to query.

**Note**

If you specify multiple instance IDs, separate the instance IDs with commas (,).

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   InstanceIds: the IDs of the instances.
    
-   Instances: details of the instances.
    

**Property**

**Type**

**Description**

**Constraint**

InstanceIds

List

The IDs of the instances.

None.

Instances

List

Details of the instances.

None.

VpcId

String

The VPC ID.

None.

PrivateIp

String

The IP address of the VPC.

**Note**

This property is not returned if the instance is deployed in the classic network.

Capacity

Number

The capacity of the instance.

Unit: MB.

ReplacateId

String

The logical ID of the distributed instance.

None.

CreateTime

String

The time when the instance was created.

None.

ConnectionDomain

String

The private endpoint of the instance.

None.

IsRds

Boolean

Indicates whether the instance is managed by ApsaraDB RDS.

Valid values:

-   true
    
-   false
    

ChargeType

String

The billing method.

Valid values:

-   PrePaid: subscription
    
-   PostPaid: pay-as-you-go
    

ArchitectureType

String

The architecture type.

Valid values:

-   cluster: cluster architecture
    
-   standard: standard architecture
    
-   SplitRW: read/write splitting architecture
    
-   NULL (default): all architecture types
    

NetworkType

String

The network type.

Valid values:

-   CLASSIC
    
-   VPC
    

ConnectionMode

String

The connection mode of the instance.

Valid values:

-   Standard: standard mode
    
-   Safe: proxy mode
    

Port

Number

The service port of the instance.

None.

SecondaryZoneId

String

The ID of the secondary zone.

**Note**

SecondaryZoneId is not returned if a value that indicates multiple zone IDs, such as "cn-hangzhou-MAZ10(h,i)", is returned for ZoneId.

EngineVersion

String

The database engine version of the instance.

Valid values:

-   2.8
    
-   4.0
    
-   5.0
    
-   6.0
    

PackageType

String

The plan type.

Valid values:

-   standard
    
-   customized
    

Config

String

The parameter settings of the instance.

For more information, see [Configure instance parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/#concept-q1w-kxn-tdb).

Bandwidth

Number

The bandwidth of the instance.

Unit: MB/s.

InstanceName

String

The instance name.

None.

ShardCount

Number

The number of data nodes in the cluster instance.

**Note**

This property is returned only if the instance is a cluster instance that uses cloud disks.

UserName

String

The username that is used to connect to the instance.

By default, a username that is named after the instance ID is returned.

GlobalInstanceId

String

The ID of the distributed instance.

**Note**

This property is returned only if the instance is a child instance of a distributed instance.

QPS

Number

The queries per second (QPS).

None.

InstanceClass

String

The instance type.

None.

DestroyTime

String

The time when the instance was permanently deleted.

None.

InstanceType

String

The category of the instance.

Valid values:

-   Tair
    
-   Redis
    
-   Memcache
    

HasRenewChangeOrder

Boolean

Indicates whether a pending order for renewal and configuration change exists.

Valid values:

-   true
    
-   false
    

SearchKey

String

The keyword that is used for fuzzy searches. The keyword is a part of an instance ID or instance description.

None.

EndTime

String

The expiration time of the subscription instance.

None.

VSwitchId

String

The vSwitch ID.

None.

NodeType

String

The node type.

Valid values:

-   double: master-replica
    
-   single: standalone
    

Connections

Number

The maximum number of connections that are supported by the instance.

None.

ResourceGroupId

String

The ID of the resource group to which the instance belongs.

None.

ZoneId

String

The zone ID.

None.

InstanceStatus

String

The status of the instance.

Valid values:

-   Normal: The instance works as expected.
    
-   Creating: The instance is being created.
    
-   Changing: The instance is being modified.
    
-   Inactive: The instance is disabled.
    
-   Flushing: The instance is being released.
    
-   Released: The instance is released.
    
-   Transforming: The instance is being transformed.
    
-   Migrating: The instance is being migrated.
    
-   Unavailable: The instance is stopped.
    
-   Error: The instance failed to be created.
    
-   BackupRecovering: The instance is being restored from a backup.
    
-   MinorVersionUpgrading: A minor version of the instance is being updated.
    
-   NetworkModifying: The network configurations of the instance are being modified.
    
-   SSLModifying: The SSL configurations of the instance are being modified.
    
-   MajorVersionUpgrading: The major version of the instance is being upgraded. The instance can be accessed during the upgrade.
    

CloudType

String

This property is returned only if the instance is in a cloud box.

None.

EditionType

String

The edition of the instance.

Valid values:

-   Community: Community Edition
    
-   Enterprise: Tair (Enterprise Edition)
    

Tags

Map

The information about the tags.

Example:

```
{
     "Value" : "Community Edition",
      "Key" : "Type"
 } 
```

InstanceId

String

The instance ID.

None.

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceIds": {
      "Type": "String",
      "Description": "The IDs of instances.\nIf you specify multiple instance IDs, separate the instance IDs with commas (,)."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::REDIS::Instances",
      "Properties": {
        "InstanceIds": {
          "Ref": "InstanceIds"
        }
      }
    }
  },
  "Outputs": {
    "Instances": {
      "Description": "The list of The Redis instances.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Instances"
        ]
      }
    },
    "InstanceIds": {
      "Description": "The list of The Redis instance Ids.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceIds"
        ]
      }
    }
  }
}
```

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceIds:
    Type: String
    Description: |-
      The IDs of instances.
      If you specify multiple instance IDs, separate the instance IDs with commas (,).
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::REDIS::Instances
    Properties:
      InstanceIds:
        Ref: InstanceIds
Outputs:
  Instances:
    Description: The list of The Redis instances.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Instances
  InstanceIds:
    Description: The list of The Redis instance Ids.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceIds
                    
```
