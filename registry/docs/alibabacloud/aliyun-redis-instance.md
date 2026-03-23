The ALIYUN::REDIS::Instance type creates Redis instances.

## Syntax

```
 {
  "Type": "ALIYUN::REDIS::Instance",
  "Properties": {
    "VpcId": String,
    "EvictionPolicy": String,
    "BackupPolicy": Map,
    "ZoneId": String,
    "InstanceClass": String,
    "InstanceMaintainTime": Map,
    "Tags": List,
    "VpcPasswordFree": Boolean,
    "VSwitchId": String,
    "SecurityGroupId": String,
    "EngineVersion": String,
    "SSLEnabled": String,
    "Password": String,
    "InstanceName": String,
    "DeletionForce": Boolean,
    "Connections": Map,
    "ChargeType": String,
    "Period": Integer,
    "AutoRenewDuration": Integer,
    "ProductType": String,
    "SubscriptionDeletionForce": Boolean,
    "SecondaryZoneId": String,
    "ResourceGroupId": String,
    "PeriodUnit": String,
    "TairConfig": Map,
    "ShardCount": Integer,
    "NodeType": String,
    "DeletionProtection": Boolean,
    "ReadOnlyCount": Integer
  }
}
```

## Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

EngineVersion

String

No

Yes

The database engine version.

Valid values:

-   2.8
    
    **Note**
    
    Discontinued. Select another version.
    
-   4.0
    
-   5.0
    

InstanceClass

String

No

Yes

The instance type.

For more information, see [Instance Type Navigation and FAQ](/help/en/redis/product-overview/overview-4/#concept-gph-q34-tdb).

InstanceMaintainTime

Map

No

Yes

The maintenance window for the instance.

None

Tags

List

No

Yes

Tags.

Each instance supports a maximum of 20 tags.

For more information, see [Tags properties](#section-ula-xea-u9c).

VpcPasswordFree

Boolean

No

No

Enable or disable passwordless access to instances in a VPC.

Valid values:

-   true: Enable.
    
-   false (default): Disable.
    

VpcId

String

No

No

The VPC ID.

None

EvictionPolicy

String

No

No

The data eviction policy.

Valid values:

-   noeviction: Do not delete any keys. Return an error on write operations.
    
-   allkeys-lru: Delete the least recently used keys first.
    
-   volatile-lru: Delete the least recently used keys only from those with an expire set.
    
-   allkeys-random: Randomly delete keys.
    
-   volatile-random: Randomly delete keys only from those with an expire set.
    
-   volatile-ttl: Delete keys with the shortest time to live (TTL) only from those with an expire set.
    

ZoneId

String

No

No

The zone ID.

This parameter is required when creating an instance in a VPC.

When you create a multi-zone instance, you can call the [DescribeZones - Query supported zones](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describezones-redis) API operation to obtain the supported multi-zone IDs.

VSwitchId

String

No

No

The vSwitch ID in the VPC.

None

SecurityGroupId

String

No

Yes

The security group ID.

Set a maximum of 10 IDs. Separate IDs with commas (,).

Password

String

No

Yes

The password.

The password must be 8 to 30 characters long and contain uppercase letters, lowercase letters, and numbers.

SSLEnabled

String

No

Yes

The SSL status.

Valid values:

-   Disable: Disable SSL.
    
-   The feature is enabled.
    
-   Update: Update the certificate.
    

InstanceName

String

No

Yes

The instance name.

The instance name must be 2 to 128 characters long. It must start with a letter or Chinese character and can contain letters, numbers, Chinese characters, underscores (\_), hyphens (-), and periods (.).

DeletionForce

Boolean

No

Yes

Delete the instance upon recovery.

Valid values:

-   true: Delete the instance upon recovery.
    
-   false (default): Do not delete the instance upon recovery.
    

SubscriptionDeletionForce

Boolean

No

No

This option applies only to subscription instances. For subscription instances, if this option is true, the instance converts to a pay-as-you-go instance before deletion. If false, the system does not force deletion. This operation incurs additional fees. Choose carefully.

None

Connections

Map

No

Yes

The connection address.

For more information, see [Connections properties](#section-6yi-y-821).

BackupPolicy

Map

No

Yes

The backup policy.

For more information, see [BackupPolicy properties](#section-6yi-ymf-85e).

ChargeType

String

No

Yes

The billing method of the instance.

Valid values:

-   PostPaid (default): Pay-as-you-go.
    
-   PrePaid: Subscription.
    

Period

Integer

No

Yes

The billing cycle.

Valid values: 1 to 9, 12, 24, 36, 60.

Unit: months.

AutoRenewDuration

Integer

No

Yes

The auto-renewal duration.

Valid values: 1 to 12.

Unit: months.

When the instance is about to expire, it automatically renews for the duration specified by this parameter.

**Note**

This parameter is valid when ChargeType is set to PrePaid.

ProductType

String

No

No

The product type.

Valid values:

-   **Local**: Redis open-source edition instance (classic) or memory-optimized (classic).
    
-   **Tair\_rdb**: Memory-optimized (cloud-native).
    
-   **Tair\_scm**: Persistent memory.
    
-   **Tair\_essd**: Disk-based.
    
-   **OnECS**: Redis open-source edition instance (cloud-native).
    

**Note**

Set the ProductType property to speed up parameter queries.

SecondaryZoneId

String

No

Yes

The secondary zone ID.

You can call the [DescribeZones - Query Supported Zones](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describezones-redis) operation.

**Note**

This parameter distributes primary and secondary data nodes across different zones, enabling cross-zone disaster recovery and tolerating data center-level failures.

ResourceGroupId

String

No

Yes

The resource group ID.

None

PeriodUnit

String

No

Yes

The unit of duration.

Valid values:

-   Year: Year.
    
-   Month: Month.
    

TairConfig

Map

No

No

Tair configuration.

For more information, see [TairConfig properties](#e13a62d30811y).

ReadOnlyCount

Integer

No

No

The number of read-only nodes in the primary zone.

**Note**

The **ReadOnlyCount** parameter applies only to cloud-native instances with read/write splitting enabled. If the instance uses a cluster architecture, this parameter indicates the number of read-only nodes (in primary and secondary zones) for a **single shard**.

ShardCount

Integer

No

No

The number of shards.

This parameter applies only to disk-based cluster architecture instances. Use this parameter to customize the number of shards.

NodeType

String

No

No

The node type.

Valid values:

-   **MASTER\_SLAVE**: High availability (HA) (double replica).
    
-   **STAND\_ALONE**: Single replica.
    
-   **double**: Double replica.
    
-   **single**: Single replica.
    

**Note**

For cloud-native instances, select **MASTER\_SLAVE** or **STAND\_ALONE**. For classic instances, select **double** or **single**.

DeletionProtection

Boolean

No

Yes

Whether release protection is enabled.

Valid values:

-   **true**: Enabled.
    
-   **false**: Disabled.
    

## BackupPolicy Syntax

```
"BackupPolicy": {
  "PreferredBackupPeriod": "String",
  "PreferredBackupTime": "String",
  "EnableBackupLog": "Integer"
}
```

## BackupPolicy Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

PreferredBackupPeriod

String

Yes

Yes

The backup cycle.

Valid values:

-   Monday: Monday.
    
-   Tuesday: Tuesday.
    
-   Wednesday: Wednesday.
    
-   Thursday.
    
-   Friday: Friday.
    
-   Saturday: Saturday.
    
-   Sunday: Sunday.
    

PreferredBackupTime

String

Yes

Yes

The backup time.

Format: `HH:mmZ-HH:mmZ`.

EnableBackupLog

Integer

No

Yes

Enable or disable incremental backup.

Valid values:

-   1: Enable.
    
-   0 (default): Disable.
    

## InstanceMaintainTime Syntax

```
"InstanceMaintainTime": {
  "MaintainStartTime": "String",
  "MaintainEndTime": "String"
}
```

## InstanceMaintainTime Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

MaintainStartTime

String

No

No

The start time of the maintenance window.

Format: `HH:mmZ` (UTC). For example, to start at 01:00 (UTC+8), set this parameter to `17:00Z`.

MaintainEndTime

String

No

No

The end time of the maintenance window.

Format: `HH:mmZ` (UTC). For example, to end at 02:00 (UTC+8), set this parameter to `18:00Z`.

**Note**

The interval between the start and end times must be 1 hour. For example, if MaintainStartTime is `17:00Z`, MaintainEndTime is `18:00Z`.

## Tags Syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]  
```

## Tags Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Key

String

Yes

No

The tag key.

The tag key must be unique within the same account and region.

Value

String

No

No

The tag value.

None

## Connections Syntax

```
"Connections": {
  "VpcPrivateConnection": "Map",
  "ClassicInnerConnection": "Map",
  "DirectConnection": "Map",
  "PublicConnection": "Map"
}
```

## Connections Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

VpcPrivateConnection

Map

No

Yes

The VPC private network address.

For more information, see [VpcPrivateConnection properties](#section-0ul-zyf-sk9).

ClassicInnerConnection

Map

No

Yes

The classic internal network address.

For more information, see [ClassicInnerConnection properties](#section-cbe-qkl-0fb).

DirectConnection

Map

No

Yes

The direct connection address. This is a cluster instance. Request direct connection endpoints as needed.

For more information, see [DirectConnection properties](#section-4ze-mbp-ma8).

PublicConnection

Map

No

Yes

The public address.

For more information, see [PublicConnection properties](#section-7ax-jed-23t).

## VpcPrivateConnection Syntax

```
"VpcPrivateConnection": {
  "ConnectionPort": Integer,
  "ConnectionString": String
}
```

## VpcPrivateConnection Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

ConnectionPort

Integer

Yes

Yes

The ApsaraDB service port of the instance.

Valid values: 1024 to 65535.

ConnectionString

String

Yes

Yes

The prefix of the public endpoint.

The prefix must be 8 to 64 characters long, start with a lowercase letter, and contain only lowercase letters and numbers.

## PublicConnection Syntax

```
"PublicConnection": {
  "ConnectionPort": Integer,
  "ConnectionString": String
}
```

## PublicConnection Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

ConnectionPort

Integer

Yes

Yes

The ApsaraDB service port of the instance.

Valid values: 1024 to 65535.

ConnectionString

String

Yes

Yes

The prefix of the public endpoint.

The prefix must be 8 to 64 characters long, start with a lowercase letter, and contain only lowercase letters and numbers.

## DirectConnection Syntax

```
"DirectConnection": {
  "ConnectionPort": Integer,
  "ConnectionString": String
}
```

## DirectConnection Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

ConnectionPort

Integer

Yes

Yes

The ApsaraDB service port of the instance.

Valid values: 1024 to 65535.

ConnectionString

String

Yes

Yes

The prefix of the public endpoint.

The prefix must be 8 to 64 characters long, start with a lowercase letter, and contain only lowercase letters and numbers.

## ClassicInnerConnection Syntax

```
"ClassicInnerConnection": {
  "ConnectionPort": Integer,
  "ConnectionString": String
}
```

## ClassicInnerConnection Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

ConnectionPort

Integer

Yes

Yes

The ApsaraDB service port of the instance.

Valid values: 1024 to 65535.

ConnectionString

String

Yes

Yes

The prefix of the public endpoint.

The prefix must be 8 to 64 characters long, start with a lowercase letter, and contain only lowercase letters and numbers.

## TairConfig Syntax

```
"TairConfig": {
  "Storage": "Integer",
  "StorageType": "String",
  "ShardCount": "Integer"
}
```

## TairConfig Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Storage

Integer

No

No

The storage capacity of the cloud disk.

The storage capacity varies based on the instance specifications. For more information, see [Disk-based instance specifications](/help/en/tair/product-overview/essd-based-instances-1).

StorageType

String

No

No

The storage class.

Valid values:

-   essd\_pl0
    
-   essd\_pl1
    
-   essd\_pl2
    
-   essd\_pl3
    

ShardCount

Integer

No

No

The number of data nodes in the instance.

Valid values:

-   **1**: Default value. This indicates that the created instance uses a standard architecture and has only one data node.
    
-   **2** to **32**: Pass a value in this range to create a cluster architecture instance with the specified number of data nodes.
    

## Return Values

Fn::GetAtt

-   InstanceId: The instance ID.
    
-   OrderId: The instance order ID.
    
-   ConnectionDomain: The private connection address of the instance.
    
-   Port: The Redis service port.
    
-   InstanceName: The instance name.
    
-   InstanceClass: The instance type.
    
-   VpcId: The VPC ID.
    
-   Capacity: The storage capacity of the instance.
    
-   InstanceType: The database engine version of the instance.
    
-   ChargeType: The billing method of the instance.
    
-   PackageType: The plan type.
    
-   Connections: The maximum connections supported by the instance.
    
-   ArchitectureType: The architecture type.
    
-   NodeType: The node type.
    
-   HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scale-out orders.
    
-   ResourceGroupId: The resource group ID.
    
-   QPS: The number of queries per second (QPS). This is the theoretical value for the current instance type.
    
-   ZoneId: The zone ID to which the instance belongs.
    
-   Bandwidth: The instance bandwidth. Unit: Mbps.
    
-   EngineVersion: The engine version.
    
-   NetworkType: The network type.
    
-   VSwitchId: The vSwitch ID.
    
-   PrivateIp: The private IP address of the instance.
    
-   PublicConnectionString: The public connection string of the instance.
    
-   VpcPrivateConnectionPort: The VPC private connection port.
    
-   ClassicInnerConnectionString: The classic internal connection string of the instance.
    
-   VpcPrivateConnectionString: The VPC private connection string of the instance.
    
-   PublicConnectionPort: The public connection port of the instance.
    
-   DirectConnectionString: The direct connection string of the instance.
    
-   DirectConnectionPort: The direct connection port of the instance.
    
-   ClassicInnerConnectionPort: The classic internal connection port of the instance.
    

## Examples

### **Scenario 1:** Create a Redis instance.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/redis/instance-case1.yml&pageTitle=Create%20Redis&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description: {}
Parameters:
  VpcId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VPC::VpcId
  ZoneId:
    Type: String
    Description:
      zh-cn: Before creating an instance, confirm the Availability Zone supports Redis resource specifications.
      en: Before creating an instance, confirm the Availability Zone supports Redis resource specifications.
    AssociationProperty: ALIYUN::ECS::Instance:ZoneId
    Label:
      en: Zone ID
      zh-cn: Zone ID
  VSwitchId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
      ZoneId: ${ZoneId}
Resources:
  RedisInstance:
    Type: ALIYUN::REDIS::Instance
    Properties:
      VpcId:
        Ref: VpcId
      VSwitchId:
        Ref: VSwitchId
      InstanceClass: redis.master.small.default
      EvictionPolicy: noeviction
      ZoneId:
        Ref: ZoneId
      InstanceName: DefaultRedis
      Password: Admin@123!
Outputs:
  InstanceId:
    Value:
      Fn::GetAtt:
        - RedisInstance
        - InstanceId                     
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
  },
  "Parameters": {
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VpcId"
    },
    "ZoneId": {
      "Type": "String",
      "Description": {
        "zh-cn": "Before creating an instance, confirm the Availability Zone supports Redis resource specifications.",
        "en": "Before creating an instance, confirm the Availability Zone supports Redis resource specifications."
      },
      "AssociationProperty": "ALIYUN::ECS::Instance:ZoneId",
      "Label": {
        "en": "Zone ID",
        "zh-cn": "Zone ID"
      }
    },
    "VSwitchId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}",
        "ZoneId": "${ZoneId}"
      }
    }
  },
  "Resources": {
    "RedisInstance": {
      "Type": "ALIYUN::REDIS::Instance",
      "Properties": {
        "VpcId": {
          "Ref": "VpcId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "InstanceClass": "redis.master.small.default",
        "EvictionPolicy": "noeviction",
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "InstanceName": "DefaultRedis",
        "Password": "Admin@123!"
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Value": {
        "Fn::GetAtt": [
          "RedisInstance",
          "InstanceId"
        ]
      }
    }
  }
}
```

### **Scenario 2:** Create a Redis instance and add an IP whitelist.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/redis/instance-case2.yml&pageTitle=Create%20Redis%20and%20add%20IP%20whitelist&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description: {}
Parameters:
  VpcId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VPC::VpcId
  ZoneId:
    Type: String
    Description:
      zh-cn: Before creating an instance, confirm the Availability Zone supports Redis resource specifications.
      en: Before creating an instance, confirm the Availability Zone supports Redis resource specifications.
    AssociationProperty: ALIYUN::ECS::Instance:ZoneId
    Label:
      en: Zone ID
      zh-cn: Zone ID
  VSwitchId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
      ZoneId: ${ZoneId}
Resources:
  RedisInstance:
    Type: ALIYUN::REDIS::Instance
    Properties:
      VpcId:
        Ref: VpcId
      VSwitchId:
        Ref: VSwitchId
      InstanceClass: redis.master.small.default
      EvictionPolicy: noeviction
      ZoneId:
        Ref: ZoneId
      InstanceName: DefaultRedis
      Password: Admin@123!
  REDISWhitelist:
    Type: ALIYUN::REDIS::Whitelist
    Properties:
      InstanceId:
        Ref: RedisInstance
      SecurityIps: 192.168.0.0/16
Outputs:
  InstanceId:
    Value:
      Fn::GetAtt:
        - RedisInstance
        - InstanceId                     
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {},
  "Parameters": {
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VpcId"
    },
    "ZoneId": {
      "Type": "String",
      "Description": {
        "zh-cn": "Before creating an instance, confirm the Availability Zone supports Redis resource specifications.",
        "en": "Before creating an instance, confirm the Availability Zone supports Redis resource specifications."
      },
      "AssociationProperty": "ALIYUN::ECS::Instance:ZoneId",
      "Label": {
        "en": "Zone ID",
        "zh-cn": "Zone ID"
      }
    },
    "VSwitchId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}",
        "ZoneId": "${ZoneId}"
      }
    }
  },
  "Resources": {
    "RedisInstance": {
      "Type": "ALIYUN::REDIS::Instance",
      "Properties": {
        "VpcId": {
          "Ref": "VpcId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "InstanceClass": "redis.master.small.default",
        "EvictionPolicy": "noeviction",
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "InstanceName": "DefaultRedis",
        "Password": "Admin@123!"
      }
    },
    "REDISWhitelist": {
      "Type": "ALIYUN::REDIS::Whitelist",
      "Properties": {
        "InstanceId": {
          "Ref": "RedisInstance"
        },
        "SecurityIps": "192.168.0.0/16"
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Value": {
        "Fn::GetAtt": [
          "RedisInstance",
          "InstanceId"
        ]
      }
    }
  }
}
```

### **Scenario 3:** Use DTS to synchronize cache between MySQL and Redis.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/redis/instance-case3.yml&pageTitle=Use%20DTS%20to%20synchronize%20MySQL%20and%20Redis%20cache&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  zh-cn: This template synchronizes MySQL and Redis caches using DTS. It creates and configures security for VPC, ECS, RDS, and Redis instances. It also establishes consumer groups to ensure data consistency.
  en: This template synchronizes MySQL and Redis caches using DTS. It creates and configures security for VPC, ECS, RDS, and Redis instances. It also establishes consumer groups to ensure data consistency.
Parameters:
  ZoneId:
    Type: String
    Label:
      en: VSwitch Availability Zone
      zh-cn: VSwitch Availability Zone
    AssociationProperty: ALIYUN::ECS::Instance::ZoneId
  RDSDBUser:
    Type: String
    Label:
      en: RDS DB Username
      zh-cn: RDS DB Username
    Description:
      en: Username of database.
      zh-cn: Username of database.
    ConstraintDescription:
      en: Must contain 2 to 16 lowercase letters and underscores. It must start with a letter and end with an alphanumeric character.
      zh-cn: Must contain 2 to 16 lowercase letters and underscores. It must start with a letter and end with an alphanumeric character.
    Default: demouser123
    MinLength: 2
    MaxLength: 16
  DbName:
    Type: String
    Label:
      en: RDS DB Name
      zh-cn: RDS DB Name
    ConstraintDescription:
      en: Must contain 2 to 16 lowercase letters and underscores. It must start with a letter and end with an alphanumeric character.
      zh-cn: Must contain 2 to 16 lowercase letters and underscores. It must start with a letter and end with an alphanumeric character.
    Default: demodb
    Required: true
    MinLength: 2
    MaxLength: 16
  RDSDBPassword:
    Type: String
    Label:
      en: RDS DB Password
      zh-cn: RDS DB Password
    Description:
      en: The RDS database password must be 8 to 32 characters long. It must contain letters, numbers, and underscores (_). It must also include three different character types.
      zh-cn: The RDS database password must be 8 to 32 characters long. It must contain letters, numbers, and underscores (_). It must also include three different character types.
    ConstraintDescription:
      en: Must be 8 to 32 characters long. It must contain letters, numbers, and underscores (_).
      zh-cn: Must be 8 to 32 characters long. It must contain letters, numbers, and underscores (_).
    AssociationProperty: ALIYUN::RDS::Instance::AccountPassword
    MinLength: 8
    MaxLength: 32
    NoEcho: true
  DBInstanceClass:
    Type: String
    Label:
      en: Instance Class
      zh-cn: Instance Class
    AssociationProperty: ALIYUN::RDS::Instance::InstanceType
    AssociationPropertyMetadata:
      ZoneId: ${ZoneId}
      EngineVersion: "8.0"
      Engine: MySQL
      Category: HighAvailability
      DBInstanceStorageType: cloud_essd
      CommodityCode: bards
    Default: mysql.x4.medium.2c
  DtsJobName:
    Type: String
    Label:
      en: Dts Job Name
      zh-cn: Dts Job Name
    Description:
      en: Set a name that reflects its business purpose for easy identification. Uniqueness is not required.
      zh-cn: Set a name that reflects its business purpose for easy identification. Uniqueness is not required.
    Default: mysql2redis_dts
  RedisInstanceClass:
    Type: String
    Label:
      en: Tair Specifications
      zh-cn: Tair Specifications
    Description:
      en: <font color='blue'>Before selecting a model, confirm if the model is in stock in the current availability zone. To save testing costs, use a 2 GB memory model, such as tair.rdb.2g.</font> For more information, see <a href='https://www.alibabacloud.com/help/zh/redis/product-overview/enhanced-performance' target='_blank'><font color='red'>Specification inquiry</font></a>.
      zh-cn: <font color='blue'>Before selecting a model, confirm if the model is in stock in the current availability zone. To save testing costs, use a 2 GB memory model, such as tair.rdb.2g.</font> For more information, see <a href='https://www.alibabacloud.com/help/zh/redis/product-overview/enhanced-performance' target='_blank'><font color='red'>Specification inquiry</font></a>.
    AssociationProperty: ALIYUN::REDIS::Instance::InstanceClass
    AssociationPropertyMetadata:
      Engine: Redis
      ProductType: Tair_rdb
      InstanceChargeType: PostPaid
      ZoneId: ${ZoneId1}
      OrderType: BUY
    Default: tair.rdb.2g
  RedisPassword:
    Type: String
    Label:
      en: Instance Password
      zh-cn: Instance Password
    Description:
      en: Must be 8 to 32 characters long. It can contain uppercase and lowercase letters, numbers, and special symbols: ! @ # $ % ^ & * ( ) _ + - =
      zh-cn: Must be 8 to 32 characters long. It can contain uppercase and lowercase letters, numbers, and special symbols: ! @ # $ % ^ & * ( ) _ + - =
    ConstraintDescription:
      en: Must be 8 to 32 characters long. It can contain uppercase and lowercase letters, numbers, and special symbols: ! @ # $ % ^ & * ( ) _ + - =
      zh-cn: Must be 8 to 32 characters long. It can contain uppercase and lowercase letters, numbers, and special symbols: ! @ # $ % ^ & * ( ) _ + - =
    MinLength: '8'
    MaxLength: '32'
    NoEcho: true
Resources:
  Vpc:
    Type: ALIYUN::ECS::VPC
    Properties:
      CidrBlock: 192.168.0.0/16
  VSwitch:
    Type: ALIYUN::ECS::VSwitch
    Properties:
      ZoneId:
        Ref: ZoneId
      VpcId:
        Ref: Vpc
      VSwitchName:
        Fn::Join:
          - '-'
          - - VSwitch
            - StackId
            - Ref: ALIYUN::StackId
      CidrBlock: 192.168.0.0/24
  RdsDBInstance:
    Type: ALIYUN::RDS::DBInstance
    Properties:
      ZoneId:
        Ref: ZoneId
      VpcId:
        Ref: Vpc
      VSwitchId:
        Ref: VSwitch
      DBInstanceClass:
        Ref: DBInstanceClass
      DBInstanceStorage: 100
      Engine: MySQL
      EngineVersion: "8.0"
      MasterUserPassword:
        Ref: RDSDBPassword
      MasterUserType: Super
      MasterUsername:
        Ref: RDSDBUser
      DBMappings:
        - CharacterSetName: utf8mb4
          DBName:
            Ref: DbName
      Category: HighAvailability
      DBInstanceStorageType: cloud_essd
      SecurityIPList: 192.168.0.0/16
      SlaveZoneIds:
        - Ref: ZoneId
  RedisInstance:
    Type: ALIYUN::REDIS::Instance
    Properties:
      ZoneId:
        Ref: ZoneId
      VpcId:
        Ref: Vpc
      VSwitchId:
        Ref: VSwitch
      InstanceClass:
        Ref: RedisInstanceClass
      InstanceName: rds_mysql2redis_redis
      EvictionPolicy: noeviction
      EngineVersion: '6.0'
      Password:
        Ref: RedisPassword
  Whitelist:
    Type: ALIYUN::REDIS::Whitelist
    Properties:
      InstanceId:
        Ref: RedisInstance
      SecurityIps: 192.168.0.0/16
  MigrationJob:
    Type: ALIYUN::DTS::SynchronizationJob2
    Properties:
      DtsJobName:
        Ref: DtsJobName
      SourceEndpoint:
        InstanceType: RDS
        InstanceID:
          Ref: RdsDBInstance
        EngineName: MYSQL
        Region:
          Ref: ALIYUN::Region
        UserName:
          Ref: RDSDBUser
        Password:
          Ref: RDSDBPassword
      DestinationEndpoint:
        InstanceType: Redis
        InstanceID:
          Ref: RedisInstance
        EngineName: Redis
        Region:
          Ref: ALIYUN::Region
        Password:
          Ref: RedisPassword
      StructureInitialization: false
      DelayNotice: true
      ErrorNotice: true
      DelayRuleTime: 60
      DataInitialization: true
      DataSynchronization: true
      DbList:
        Fn::GetJsonValue:
          - DbList
          - Fn::Sub: '{ "DbList": { "${DbName}": {   "name": "0",   "all": true,   "customAttachedColumn": {     "__DTS_TP_TO_REDIS_KEY__": {       "name": "__DTS_TP_TO_REDIS_KEY__",       "syntacticType": "ADD",       "value": "__DB__+''.''+__TB__+''.''+pk_str_with_name_value(''.'',''.'')",       "type": "STRING",       "length": ""     },     "__DTS_TP_TO_REDIS_VALUE__": {       "name": "__DTS_TP_TO_REDIS_VALUE__",       "syntacticType": "ADD",       "value": "tp2redis_json_value()",       "type": "STRING",       "length": ""     }   } }}}'
  DtsInstance:
    Type: ALIYUN::DTS::Instance
    Properties:
      JobId:
        Fn::GetAtt:
          - MigrationJob
          - DtsJobId
      InstanceClass: small
      PayType: PostPaid
      AutoStart: true
      Type: SYNC
      SourceRegion:
        Ref: ALIYUN::Region
      DestinationRegion:
        Ref: ALIYUN::Region
      SourceEndpointEngineName: MySQL
      DestinationEndpointEngineName: Redis
Outputs:
  RdsInstanceAddress:
    Description:
      en: RDS Instance Address.
      zh-cn: RDS Instance Address.
    Value:
      'Fn::Sub':
        - 'https://rds.console.alibabacloud.com/detail/${InstanceID}/basicInfo?region=${Region}'
        - InstanceID:
            Ref: RdsDBInstance
          Region:
            Ref: ALIYUN::Region
  TairInstanceAddress:
    Description:
      en: Tair Instance Address.
      zh-cn: Tair Instance Address.
    Value:
      'Fn::Sub':
        - 'https://kvstore.console.alibabacloud.com/Redis/instance/${Region}/${InstanceID}'
        - InstanceID:
            Ref: RedisInstance
          Region:
            Ref: ALIYUN::Region
Metadata:
  ALIYUN::ROS::Interface:
    ParameterGroups:
      - Parameters:
          - ZoneId
        Label:
          default:
            en: Infrastructure Configuration (Required)
            zh-cn: Infrastructure Configuration (Required)
      - Parameters:
          - DBInstanceClass
          - DbName
          - RDSDBUser
          - RDSDBPassword
        Label:
          default: RDS
      - Parameters:
          - RedisInstanceClass
          - RedisPassword
        Label:
          default: Tair
      - Parameters:
          - DtsJobName
        Label:
          default: DTS
    TemplateTags:
      - acs:technical-solution:database:real-time synchronization of RDS and Redis to build cache consistency-tech_solu_21
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "zh-cn": "This template synchronizes MySQL and Redis caches using DTS. It creates and configures security for VPC, ECS, RDS, and Redis instances. It also establishes consumer groups to ensure data consistency.",
    "en": "This template synchronizes MySQL and Redis caches using DTS. It creates and configures security for VPC, ECS, RDS, and Redis instances. It also establishes consumer groups to ensure data consistency."
  },
  "Parameters": {
    "ZoneId": {
      "Type": "String",
      "Label": {
        "en": "VSwitch Availability Zone",
        "zh-cn": "VSwitch Availability Zone"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId"
    },
    "RDSDBUser": {
      "Type": "String",
      "Label": {
        "en": "RDS DB Username",
        "zh-cn": "RDS DB Username"
      },
      "Description": {
        "en": "Username of database.",
        "zh-cn": "Username of database."
      },
      "ConstraintDescription": {
        "en": "Must contain 2 to 16 lowercase letters and underscores. It must start with a letter and end with an alphanumeric character.",
        "zh-cn": "Must contain 2 to 16 lowercase letters and underscores. It must start with a letter and end with an alphanumeric character."
      },
      "Default": "demouser123",
      "MinLength": 2,
      "MaxLength": 16
    },
    "DbName": {
      "Type": "String",
      "Label": {
        "en": "RDS DB Name",
        "zh-cn": "RDS DB Name"
      },
      "ConstraintDescription": {
        "en": "Must contain 2 to 16 lowercase letters and underscores. It must start with a letter and end with an alphanumeric character.",
        "zh-cn": "Must contain 2 to 16 lowercase letters and underscores. It must start with a letter and end with an alphanumeric character."
      },
      "Default": "demodb",
      "Required": true,
      "MinLength": 2,
      "MaxLength": 16
    },
    "RDSDBPassword": {
      "Type": "String",
      "Label": {
        "en": "RDS DB Password",
        "zh-cn": "RDS DB Password"
      },
      "Description": {
        "en": "The RDS database password must be 8 to 32 characters long. It must contain letters, numbers, and underscores (_). It must also include three different character types.",
        "zh-cn": "The RDS database password must be 8 to 32 characters long. It must contain letters, numbers, and underscores (_). It must also include three different character types."
      },
      "ConstraintDescription": {
        "en": "Must be 8 to 32 characters long. It must contain letters, numbers, and underscores (_).",
        "zh-cn": "Must be 8 to 32 characters long. It must contain letters, numbers, and underscores (_)."
      },
      "AssociationProperty": "ALIYUN::RDS::Instance::AccountPassword",
      "MinLength": 8,
      "MaxLength": 32,
      "NoEcho": true
    },
    "DBInstanceClass": {
      "Type": "String",
      "Label": {
        "en": "Instance Class",
        "zh-cn": "Instance Class"
      },
      "AssociationProperty": "ALIYUN::RDS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "ZoneId": "${ZoneId}",
        "EngineVersion": "8.0",
        "Engine": "MySQL",
        "Category": "HighAvailability",
        "DBInstanceStorageType": "cloud_essd",
        "CommodityCode": "bards"
      },
      "Default": "mysql.x4.medium.2c"
    },
    "DtsJobName": {
      "Type": "String",
      "Label": {
        "en": "Dts Job Name",
        "zh-cn": "Dts Job Name"
      },
      "Description": {
        "en": "Set a name that reflects its business purpose for easy identification. Uniqueness is not required.",
        "zh-cn": "Set a name that reflects its business purpose for easy identification. Uniqueness is not required."
      },
      "Default": "mysql2redis_dts"
    },
    "RedisInstanceClass": {
      "Type": "String",
      "Label": {
        "en": "Tair Specifications",
        "zh-cn": "Tair Specifications"
      },
      "Description": {
        "en": "<font color='blue'>Before selecting a model, confirm if the model is in stock in the current availability zone. To save testing costs, use a 2 GB memory model, such as tair.rdb.2g.</font> For more information, see <a href='https://www.alibabacloud.com/help/zh/redis/product-overview/enhanced-performance' target='_blank'><font color='red'>Specification inquiry</font></a>.",
        "zh-cn": "<font color='blue'>Before selecting a model, confirm if the model is in stock in the current availability zone. To save testing costs, use a 2 GB memory model, such as tair.rdb.2g.</font> For more information, see <a href='https://www.alibabacloud.com/help/zh/redis/product-overview/enhanced-performance' target='_blank'><font color='red'>Specification inquiry</font></a>."
      },
      "AssociationProperty": "ALIYUN::REDIS::Instance::InstanceClass",
      "AssociationPropertyMetadata": {
        "Engine": "Redis",
        "ProductType": "Tair_rdb",
        "InstanceChargeType": "PostPaid",
        "ZoneId": "${ZoneId1}",
        "OrderType": "BUY"
      },
      "Default": "tair.rdb.2g"
    },
    "RedisPassword": {
      "Type": "String",
      "Label": {
        "en": "Instance Password",
        "zh-cn": "Instance Password"
      },
      "Description": {
        "en": "Must be 8 to 32 characters long. It can contain uppercase and lowercase letters, numbers, and special symbols: ! @ # $ % ^ & * ( ) _ + - =",
        "zh-cn": "Must be 8 to 32 characters long. It can contain uppercase and lowercase letters, numbers, and special symbols: ! @ # $ % ^ & * ( ) _ + - ="
      },
      "ConstraintDescription": {
        "en": "Must be 8 to 32 characters long. It can contain uppercase and lowercase letters, numbers, and special symbols: ! @ # $ % ^ & * ( ) _ + - =",
        "zh-cn": "Must be 8 to 32 characters long. It can contain uppercase and lowercase letters, numbers, and special symbols: ! @ # $ % ^ & * ( ) _ + - ="
      },
      "MinLength": "8",
      "MaxLength": "32",
      "NoEcho": true
    }
  },
  "Resources": {
    "Vpc": {
      "Type": "ALIYUN::ECS::VPC",
      "Properties": {
        "CidrBlock": "192.168.0.0/16"
      }
    },
    "VSwitch": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchName": {
          "Fn::Join": [
            "-",
            [
              "VSwitch",
              "StackId",
              {
                "Ref": "ALIYUN::StackId"
              }
            ]
          ]
        },
        "CidrBlock": "192.168.0.0/24"
      }
    },
    "RdsDBInstance": {
      "Type": "ALIYUN::RDS::DBInstance",
      "Properties": {
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchId": {
          "Ref": "VSwitch"
        },
        "DBInstanceClass": {
          "Ref": "DBInstanceClass"
        },
        "DBInstanceStorage": 100,
        "Engine": "MySQL",
        "EngineVersion": "8.0",
        "MasterUserPassword": {
          "Ref": "RDSDBPassword"
        },
        "MasterUserType": "Super",
        "MasterUsername": {
          "Ref": "RDSDBUser"
        },
        "DBMappings": [
          {
            "CharacterSetName": "utf8mb4",
            "DBName": {
              "Ref": "DbName"
            }
          }
        ],
        "Category": "HighAvailability",
        "DBInstanceStorageType": "cloud_essd",
        "SecurityIPList": "192.168.0.0/16",
        "SlaveZoneIds": [
          {
            "Ref": "ZoneId"
          }
        ]
      }
    },
    "RedisInstance": {
      "Type": "ALIYUN::REDIS::Instance",
      "Properties": {
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchId": {
          "Ref": "VSwitch"
        },
        "InstanceClass": {
          "Ref": "RedisInstanceClass"
        },
        "InstanceName": "rds_mysql2redis_redis",
        "EvictionPolicy": "noeviction",
        "EngineVersion": "6.0",
        "Password": {
          "Ref": "RedisPassword"
        }
      }
    },
    "Whitelist": {
      "Type": "ALIYUN::REDIS::Whitelist",
      "Properties": {
        "InstanceId": {
          "Ref": "RedisInstance"
        },
        "SecurityIps": "192.168.0.0/16"
      }
    },
    "MigrationJob": {
      "Type": "ALIYUN::DTS::SynchronizationJob2",
      "Properties": {
        "DtsJobName": {
          "Ref": "DtsJobName"
        },
        "SourceEndpoint": {
          "InstanceType": "RDS",
          "InstanceID": {
            "Ref": "RdsDBInstance"
          },
          "EngineName": "MYSQL",
          "Region": {
            "Ref": "ALIYUN::Region"
          },
          "UserName": {
            "Ref": "RDSDBUser"
          },
          "Password": {
            "Ref": "RDSDBPassword"
          }
        },
        "DestinationEndpoint": {
          "InstanceType": "Redis",
          "InstanceID": {
            "Ref": "RedisInstance"
          },
          "EngineName": "Redis",
          "Region": {
            "Ref": "ALIYUN::Region"
          },
          "Password": {
            "Ref": "RedisPassword"
          }
        },
        "StructureInitialization": false,
        "DelayNotice": true,
        "ErrorNotice": true,
        "DelayRuleTime": 60,
        "DataInitialization": true,
        "DataSynchronization": true,
        "DbList": {
          "Fn::GetJsonValue": [
            "DbList",
            {
              "Fn::Sub": "{ \"DbList\": { \"${DbName}\": {   \"name\": \"0\",   \"all\": true,   \"customAttachedColumn\": {     \"__DTS_TP_TO_REDIS_KEY__\": {       \"name\": \"__DTS_TP_TO_REDIS_KEY__\",       \"syntacticType\": \"ADD\",       \"value\": \"__DB__+'.'+__TB__+'.'+pk_str_with_name_value('.','.')\",       \"type\": \"STRING\",       \"length\": \"\"     },     \"__DTS_TP_TO_REDIS_VALUE__\": {       \"name\": \"__DTS_TP_TO_REDIS_VALUE__\",       \"syntacticType\": \"ADD\",       \"value\": \"tp2redis_json_value()\",       \"type\": \"STRING\",       \"length\": \"\"     }   } }}}"
            }
          ]
        }
      }
    },
    "DtsInstance": {
      "Type": "ALIYUN::DTS::Instance",
      "Properties": {
        "JobId": {
          "Fn::GetAtt": [
            "MigrationJob",
            "DtsJobId"
          ]
        },
        "InstanceClass": "small",
        "PayType": "PostPaid",
        "AutoStart": true,
        "Type": "SYNC",
        "SourceRegion": {
          "Ref": "ALIYUN::Region"
        },
        "DestinationRegion": {
          "Ref": "ALIYUN::Region"
        },
        "SourceEndpointEngineName": "MySQL",
        "DestinationEndpointEngineName": "Redis"
      }
    }
  },
  "Outputs": {
    "RdsInstanceAddress": {
      "Description": {
        "en": "RDS Instance Address.",
        "zh-cn": "RDS Instance Address."
      },
      "Value": {
        "Fn::Sub": [
          "https://rds.console.alibabacloud.com/detail/${InstanceID}/basicInfo?region=${Region}",
          {
            "InstanceID": {
              "Ref": "RdsDBInstance"
            },
            "Region": {
              "Ref": "ALIYUN::Region"
            }
          }
        ]
      }
    },
    "TairInstanceAddress": {
      "Description": {
        "en": "Tair Instance Address.",
        "zh-cn": "Tair Instance Address."
      },
      "Value": {
        "Fn::Sub": [
          "https://kvstore.console.alibabacloud.com/Redis/instance/${Region}/${InstanceID}",
          {
            "InstanceID": {
              "Ref": "RedisInstance"
            },
            "Region": {
              "Ref": "ALIYUN::Region"
            }
          }
        ]
      }
    }
  },
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "Parameters": [
            "ZoneId"
          ],
          "Label": {
            "default": {
              "en": "Infrastructure Configuration (Required)",
              "zh-cn": "Infrastructure Configuration (Required)"
            }
          }
        },
        {
          "Parameters": [
            "DBInstanceClass",
            "DbName",
            "RDSDBUser",
            "RDSDBPassword"
          ],
          "Label": {
            "default": "RDS"
          }
        },
        {
          "Parameters": [
            "RedisInstanceClass",
            "RedisPassword"
          ],
          "Label": {
            "default": "Tair"
          }
        },
        {
          "Parameters": [
            "DtsJobName"
          ],
          "Label": {
            "default": "DTS"
          }
        }
      ],
      "TemplateTags": [
        "acs:technical-solution:database:real-time synchronization of RDS and Redis to build cache consistency-tech_solu_21"
      ]
    }
  }
}
```

For more examples, see [public templates containing this resource](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public?resourceType=ALIYUN::REDIS::Instance).
