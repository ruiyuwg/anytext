ALIYUN::REDIS::PrepayInstance is used to create a subscription Tair (Redis OSS-compatible) instance.

## Syntax

```
  {
  "Type": "ALIYUN::REDIS::PrepayInstance",
  "Properties": {
    "VpcId": String,
    "EvictionPolicy": String,
    "Period": Integer,
    "ZoneId": String,
    "InstanceClass": String,
    "VpcPasswordFree": Boolean,
    "VSwitchId": String,
    "SecurityGroupId": String,
    "EngineVersion": String,
    "Password": String,
    "SSLEnabled": String,
    "InstanceName": String,
    "BackupPolicy": Map,
    "Tags": List,
    "InstanceMaintainTime": Map,
    "DeletionForce": Boolean,
    "AutoPay": Boolean,
    "Connections": Map,
    "AutoRenewDuration": Integer,
    "ProductType": String,
    "SecondaryZoneId": String,
    "ResourceGroupId": String,
    "PeriodUnit": String,
    "TairConfig": Map,
    "ShardCount": Integer,
    "ReadOnlyCount": Integer,
    "SubscriptionDeletionForce": Boolean,
    "NodeType": String,
    "DeletionProtection": Boolean
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

EngineVersion

String

No

Yes

The database engine version of the instance.

Valid values:

-   2.8
    
    **Note**
    
    This version is unavailable. Use another version.
    
-   4.0
    
-   5.0
    

VpcId

String

No

No

The virtual private cloud (VPC) ID of the instance.

None.

EvictionPolicy

String

No

No

The policy based on which the system evicts data.

Valid values:

-   noeviction: The system does not evict keys, but returns an error for write operations.
    
-   allkeys-lru: The system evicts least recently used (LRU) keys.
    
-   volatile-lru: The system evicts LRU keys from keys that have Time To Live (TTL) configured.
    
-   allkeys-random: The system evicts keys at random.
    
-   volatile-random: The system evicts keys at random from keys that have TTL configured.
    
-   volatile-ttl: The system evicts keys that have the shortest TTL from keys that have TTL configured.
    

Period

Integer

No

No

The renewal period of the instance.

Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, and 36.

Unit: month.

ZoneId

String

No

No

The zone ID of the instance.

This property must be specified when you create the instance in a VPC.

If you want to create the instance in multiple zones, you can call the [DescribeZones](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describezones-redis) operation to query the IDs of supported zones.

InstanceClass

String

No

Yes

The instance specifications.

For more information, see [Instance specifications](/help/en/redis/product-overview/overview-4/#concept-gph-q34-tdb).

VSwitchId

String

No

No

The vSwitch ID of the instance.

None.

SecurityGroupId

String

No

Yes

The ID of the security group to which the instance belongs.

You can specify up to 10 IDs. Separate multiple IDs with commas (,).

VpcPasswordFree

Boolean

No

No

Specifies whether to enable the password-free access feature for the instance in the VPC.

Valid values:

-   true
    
-   false (default)
    

Password

String

No

Yes

The password that is used to access the instance.

The password must be 8 to 32 characters in length. The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The password can contain the following special characters: `! @ # $ % ^ & * ( ) _ + - =`

SSLEnabled

String

No

Yes

The state of SSL encryption.

Valid values:

-   Disable: SSL encryption is disabled.
    
-   Enable: SSL encryption is enabled.
    
-   Update: The SSL certificate is updated.
    

SubscriptionDeletionForce

Boolean

No

No

This property takes effect only for subscription instances. If you set this property to true for a subscription instance, the instance is changed to a pay-as-you-go one before the instance is forcefully deleted. If you set this property to false for a subscription instance, the instance is not forcefully deleted. This property involves additional fees. Exercise caution when you specify this property.

None.

InstanceName

String

No

Yes

The instance name.

The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (\_), hyphens (-), and periods (.). It must start with a letter.

BackupPolicy

Map

No

Yes

The backup policy of the instance.

For more information, see [BackupPolicy properties](#section-0vz-9sl-cs9).

Tags

List

No

Yes

The tags of the instance.

You can add up to 20 tags to an instance.

For more information, see [Tags properties](#section-lup-602-gm2).

AutoPay

Boolean

No

No

Specifies whether to enable automatic payment.

Valid values:

-   true
    
-   false (default)
    

InstanceMaintainTime

Map

No

Yes

The maintenance window of the instance.

For more information, see [InstanceMaintainTime properties](#section-ds3-zk9-3cs).

DeletionForce

Boolean

No

Yes

Specifies whether to delete the instance when the instance is moved to the recycle bin.

Valid values:

-   true
    
-   false (default)
    

Connections

Map

No

Yes

The endpoints of the instance.

For more information, see [Connections properties](#section-6yf-85e).

AutoRenewDuration

Integer

No

Yes

The auto-renewal period of the instance.

Valid values: 1 to 12.

Unit: month.

When an instance is about to expire, the system automatically renews the instance based on the value of this property.

ProductType

String

No

No

The edition of the instance.

Valid values:

-   Local: a Community Edition instance that supports local disks or an Enhanced Edition (Tair) performance-enhanced instance that uses local disks
    
-   Tair\_rdb: a Tair performance-enhanced instance that uses cloud disks
    
-   Tair\_scm: a Tair persistent memory-optimized instance
    
-   Tair\_essd: a Tair storage-optimized instance
    
-   OnECS: a Community Edition instance that uses cloud disks
    

SecondaryZoneId

String

No

Yes

The secondary zone ID of the instance.

You can call the [DescribeZones](/help/en/time-series-database/latest/describezones) operation to query the ID of the secondary zone.

**Note**

If you specify this property, the master node and the replica node of the instance are deployed in different zones, and disaster recovery is implemented across zones. The instance can withstand failures in data centers.

ResourceGroupId

String

No

Yes

The resource group ID of the instance.

None.

PeriodUnit

String

No

No

The unit of the subscription duration.

Valid values:

-   Year
    
-   Month
    

TairConfig

Map

No

No

The Tair configurations of the instance.

For more information, see [TairConfig properties](#e13a62d30811y).

ShardCount

Integer

No

No

The number of data shards in the instance.

Valid values:

-   1 (default): You can create the instance in the standard architecture that contains only a single data shard.
    
-   2 to 32: You can create the instance in the cluster architecture that contains the specified number of data shards.
    

ReadOnlyCount

Integer

No

No

The number of read replicas in the primary zone.

**ReadOnlyCount** applies only to cloud-native read/write splitting instances. If the instance is a cluster instance, the preceding parameters indicate the number of read replicas **per shard** in the primary and secondary zones.

NodeType

String

No

No

The node type of the instance.

Valid values:

-   MASTER\_SLAVE: high availability (master-replica)
    
-   STAND\_ALONE: standalone
    
-   double: master-replica
    
-   single: standalone
    

**Note**

The MASTER\_SLAVE and STAND\_ALONE values are supported for instances that use cloud disks. The double and single values are supported for instances that use local disks.

DeletionProtection

Boolean

No

Yes

Specifies whether to enable the deletion protection feature.

Valid values:

-   **true**
    
-   **false**
    

## BackupPolicy syntax

```
"BackupPolicy": {
  "PreferredBackupPeriod": "String",
  "PreferredBackupTime": "String",
  "EnableBackupLog": "Integer"
}
```

## BackupPolicy properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

PreferredBackupPeriod

String

Yes

Yes

The day of a week on which the system backs up data.

Valid values:

-   Monday
    
-   Tuesday
    
-   Wednesday
    
-   Thursday
    
-   Friday
    
-   Saturday
    
-   Sunday
    

PreferredBackupTime

String

Yes

Yes

The time at which the system backs up data.

Specify the time in the ISO 8601 standard in the `HH:mmZ-HH:mmZ` format.

EnableBackupLog

Integer

No

Yes

Specifies whether to enable incremental backup.

Valid values:

-   1: enables incremental backup.
    
-   0 (default): disables incremental backup.
    

## InstanceMaintainTime syntax

```
"InstanceMaintainTime": {
  "MaintainStartTime": "String",
  "MaintainEndTime": "String"
}
```

## InstanceMaintainTime properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

MaintainStartTime

String

No

No

The start time of the maintenance window.

Specify the time in the ISO 8601 standard in the `HH:mmZ` format. The time must be in UTC. For example, if you want the maintenance window to start at `22:00` (UTC+8), you must set this property to `14:00Z`.

MaintainEndTime

String

No

No

The end time of the maintenance window.

Specify the time in the ISO 8601 standard in the `HH:mmZ` format. The time must be in UTC. For example, if you want the maintenance window to end at `23:00` (UTC+8), you must set this property to `15:00Z`.

**Note**

The end time must be one hour later than the start time. For example, if you set MaintainStartTime to `17:00Z`, you must set MaintainEndTime to `18:00Z`.

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]  
```

## Tags properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

Yes

No

The key of the tag.

A tag key must be unique within an Alibaba Cloud account in a region.

Value

String

No

No

The value of the tag.

None.

## Connections syntax

```
"Connections": {
  "VpcPrivateConnection": "Map",
  "ClassicInnerConnection": "Map",
  "DirectConnection": "Map",
  "PublicConnection": "Map"
}
```

## Connections properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

VpcPrivateConnection

Map

No

Yes

The VPC endpoint.

For more information, see [VpcPrivateConnection properties](#section-0ul-zyf-sk9).

ClassicInnerConnection

Map

No

Yes

The classic network endpoint.

For more information, see [ClassicInnerConnection properties](#section-cbe-qkl-0fb).

DirectConnection

Map

No

Yes

The private endpoint for the direct connection mode. You can apply for a private endpoint for the direct connection mode based on your business requirements.

For more information, see [DirectConnection properties](#section-4ze-mbp-ma8).

PublicConnection

Map

No

Yes

The public endpoint.

For more information, see [PublicConnection properties](#section-7ax-jed-23t).

## VpcPrivateConnection syntax

```
"VpcPrivateConnection": {
  "ConnectionPort": Integer,
  "ConnectionString": String
}
```

## VpcPrivateConnection properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ConnectionPort

Integer

Yes

Yes

The port number used by the Tair (Redis OSS-compatible) instance to provide services.

Valid values: 1024 to 65535.

ConnectionString

String

Yes

Yes

The prefix of the VPC endpoint.

The prefix must be 8 to 64 characters in length, and can contain lowercase letters and digits. The prefix must start with a lowercase letter.

## PublicConnection syntax

```
"PublicConnection": {
  "ConnectionPort": Integer,
  "ConnectionString": String
}
```

## PublicConnection properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ConnectionPort

Integer

Yes

Yes

The port number used by the Tair (Redis OSS-compatible) instance to provide services.

Valid values: 1024 to 65535.

ConnectionString

String

Yes

Yes

The prefix of the public endpoint.

The prefix must be 8 to 64 characters in length, and can contain lowercase letters and digits. The prefix must start with a lowercase letter.

## DirectConnection syntax

```
"DirectConnection": {
  "ConnectionPort": Integer,
  "ConnectionString": String
}
```

## DirectConnection properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ConnectionPort

Integer

Yes

Yes

The port number used by the Tair (Redis OSS-compatible) instance to provide services.

Valid values: 1024 to 65535.

ConnectionString

String

Yes

Yes

The prefix of the private endpoint for the direct connection mode.

The prefix must be 8 to 64 characters in length, and can contain lowercase letters and digits. The prefix must start with a lowercase letter.

## ClassicInnerConnection syntax

```
"ClassicInnerConnection": {
  "ConnectionPort": Integer,
  "ConnectionString": String
}
```

## ClassicInnerConnection properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ConnectionPort

Integer

Yes

Yes

The port number used by the Tair (Redis OSS-compatible) instance to provide services.

Valid values: 1024 to 65535.

ConnectionString

String

Yes

Yes

The prefix of the classic network endpoint.

The prefix must be 8 to 64 characters in length, and can contain lowercase letters and digits. The prefix must start with a lowercase letter.

## TairConfig syntax

```
"BackupPolicy": {
  "Storage": "Integer",
  "StorageType": "String",
  "ShardCount": "Integer"
}
```

## TairConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Storage

Integer

No

No

The storage capacity of the cloud disk.

The storage capacity varies based on the instance type. For more information, see [ESSD/SSD-based instances](/help/en/tair/product-overview/essd-based-instances-1).

StorageType

String

No

No

The storage type.

Valid values:

-   essd\_pl0
    
-   essd\_pl1
    
-   essd\_pl2
    
-   essd\_pl3
    

ShardCount

Integer

No

No

The number of data shards in the instance.

Valid values:

-   **1** (default): You can create the instance in the standard architecture that contains only a single data shard.
    
-   **2** to **32**: You can create the instance in the cluster architecture that contains the specified number of data shards.
    

## Return values

Fn::GetAtt

-   InstanceId: the instance ID.
    
-   OrderId: the order ID of the instance.
    
-   ConnectionDomain: the endpoint that is used to access the instance.
    
-   Port: the port number that is used to access the instance.
    
-   InstanceName: the instance name.
    
-   InstanceClass: the instance specifications.
    
-   VpcId: the VPC ID of the instance.
    
-   Capacity: the storage capacity of the instance.
    
-   InstanceType: the database engine type of the instance.
    
-   ChargeType: the billing method of the instance.
    
-   PackageType: the plan type of the instance.
    
-   Connections: the maximum number of connections that are supported by the instance.
    
-   ArchitectureType: the architecture type of the instance.
    
-   NodeType: the node type of the instance.
    
-   HasRenewChangeOrder: indicates whether pending renewal or resource scale-out orders exist within the current Alibaba Cloud account.
    
-   ResourceGroupId: the resource group ID of the instance.
    
-   QPS: the queries per second (QPS) of the instance. The value is the expected maximum QPS.
    
-   ZoneId: the zone ID of the instance.
    
-   Bandwidth: the bandwidth of the instance. Unit: Mbit/s.
    
-   EngineVersion: the database engine version of the instance.
    
-   NetworkType: the network type of the instance.
    
-   VSwitchId: the vSwitch ID of the instance.
    
-   PrivateIp: the private IP address of the instance.
    
-   PublicConnectionString: the prefix of the public endpoint that is used to access the instance.
    
-   VpcPrivateConnectionPort: the port number that is used to access the instance by using the VPC endpoint.
    
-   ClassicInnerConnectionString: the prefix of the classic network endpoint that is used to access the instance.
    
-   VpcPrivateConnectionString: the prefix of the VPC endpoint that is used to access the instance.
    
-   PublicConnectionPort: the port number that is used to access the instance by using the public endpoint.
    
-   DirectConnectionString: the prefix of the private endpoint that is used to access the instance in direct connection mode.
    
-   DirectConnectionPort: the port number that is used to access the instance by using the private endpoint in direct connection mode.
    
-   ClassicInnerConnectionPort: the port number that is used to access the instance by using the classic network endpoint.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test Create Redis PrepayInstance
Parameters:
  InstanceClass:
    Type: String
    Description: Instance Class
  VpcName:
    Type: String
    Default: mytest
  VSwitchName:
    Type: String
    Default: mytest
  ZoneId:
    Type: String
    AssociationProperty: ALIYUN::ECS::Instance:ZoneId
  EngineVersion:
    Type: String
    Description: 'AllowedValues: 2.8, 4.0, 5.0'
    Default: '5.0'
Resources:
  Vpc:
    Type: ALIYUN::ECS::VPC
    Properties:
      VpcName:
        Ref: VpcName
      CidrBlock: 192.168.0.0/16
  VSwitch:
    DependsOn: Vpc
    Type: ALIYUN::ECS::VSwitch
    Properties:
      VpcId:
        Ref: Vpc
      VSwitchName:
        Ref: VSwitchName
      ZoneId:
        Ref: ZoneId
      CidrBlock: 192.168.10.0/24
  RedisPrepayInstance:
    Type: ALIYUN::REDIS::PrepayInstance
    Properties:
      InstanceClass:
        Ref: InstanceClass
      EngineVersion:
        Ref: EngineVersion
      VpcId:
        Ref: Vpc
      VSwitchId:
        Ref: VSwitch
Outputs:
  OrderId:
    Value:
      Fn::GetAtt:
        - RedisPrepayInstance
        - OrderId
                    
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test Create Redis PrepayInstance",
  "Parameters": {
    "InstanceClass": {
      "Type": "String",
      "Description": "Instance Class"
    },
    "VpcName": {
      "Type": "String",
      "Default": "mytest"
    },
    "VSwitchName": {
      "Type": "String",
      "Default": "mytest"
    },
    "ZoneId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance:ZoneId"
    },
    "EngineVersion": {
      "Type": "String",
      "Description": "AllowedValues: 2.8, 4.0, 5.0",
      "Default": "5.0"
    }
  },
  "Resources": {
    "Vpc": {
      "Type": "ALIYUN::ECS::VPC",
      "Properties": {
        "VpcName": {
          "Ref": "VpcName"
        },
        "CidrBlock": "192.168.0.0/16"
      }
    },
    "VSwitch": {
      "DependsOn": "Vpc",
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchName": {
          "Ref": "VSwitchName"
        },
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "CidrBlock": "192.168.10.0/24"
      }
    },
    "RedisPrepayInstance": {
      "Type": "ALIYUN::REDIS::PrepayInstance",
      "Properties": {
        "InstanceClass": {
          "Ref": "InstanceClass"
        },
        "EngineVersion": {
          "Ref": "EngineVersion"
        },
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchId": {
          "Ref": "VSwitch"
        }
      }
    }
  },
  "Outputs": {
    "OrderId": {
      "Value": {
        "Fn::GetAtt": [
          "RedisPrepayInstance",
          "OrderId"
        ]
      }
    }
  }
}
```
