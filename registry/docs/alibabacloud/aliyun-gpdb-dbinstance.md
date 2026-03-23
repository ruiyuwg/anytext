ALIYUN::GPDB::DBInstance is used to create an AnalyticDB for PostgreSQL instance in reserved storage mode.

## Syntax

```
{
  "Type": "ALIYUN::GPDB::DBInstance",
  "Properties": {
    "EngineVersion": String,
    "ZoneId": String,
    "VSwitchId": String,   
    "DBInstanceClass": String,
    "DBInstanceGroupCount": Integer,
    "VPCId": String,
    "SecurityIPList": String,   
    "DBInstanceDescription": String,
    "PayType": String,
    "Period": Integer,
    "PeriodUnit": String,
    "Tags": List,
    "VectorConfigurationStatus": String,
    "StorageSize": Integer,
    "EncryptionType": String,
    "MasterNodeNum": Integer,
    "DBInstanceMode": String,
    "SegDiskPerformanceLevel": String,
    "DBInstanceCategory": String,
    "SegStorageType": String,
    "EncryptionKey": String,
    "CreateSampleData": Boolean,
    "ServerlessMode": String,
    "ServerlessResource": Integer,
    "PrivateIpAddress": String,
    "SegNodeNum": Integer,
    "InstanceSpec": String,
    "IdleTime": Integer,
    "ProdType": String,
    "MasterCU": Integer,
    "StandbyZoneId": String,
    "StandbyVSwitchId": String,
    "DeployMode": String,
    "AINodeSpecInfos": List,
    "ResourceGroupId": String
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

Yes

No

The engine version.

Valid values:

-   6.0: 6.0 Standard Edition
    
-   6.0x: 6.0 Vector Enhanced Edition
    

AINodeSpecInfos

List

No

No

The information about the AI nodes.

For more information, refer to [AINodeSpecInfos properties](#b13e1c8dd96zt).

VSwitchId

String

Yes

No

The vSwitch ID.

Example: vsw-bp183p93qs667muql\*\*\*\*.

DBInstanceClass

String

No

No

The instance type family.

Example: gpdb.group.segsdx2.

DBInstanceGroupCount

Integer

No

No

The number of compute nodes in the AnalyticDB for PostgreSQL instance.

Example: 2.

VPCId

String

No

No

The ID of the virtual private cloud (VPC).

Example: vpc-bp1m6fww66xbntjyc\*\*\*\*.

SecurityIPList

String

No

Yes

The IP address whitelist.

Default value: 127.0.0.1.

DBInstanceDescription

String

No

Yes

The description of the instance.

Example: AnalyticDB PostgreSQL DB Instance.

The description can be up to 256 characters in length.

PayType

String

No

Yes

The billing method.

Valid values:

-   Postpaid (default): pay-as-you-go
    
-   Prepaid: subscription
    

Period

Integer

No

Yes

The subscription duration of the instance.

-   Valid values when PeriodUnit is set to Month: 1 to 11.
    
-   Valid values when PeriodUnit is set to Year: 1 to 3.
    

PeriodUnit

String

No

Yes

The unit of the subscription duration.

Valid values:

-   Month (default)
    
-   Year
    

Tags

List

No

No

The custom tags of the instance.

For more information, see [Tags properties](#section-xcp-hqc-d0e).

EncryptionType

String

No

No

The encryption type.

Valid values:

-   **NULL** (default): disables encryption.
    
-   **CloudDisk**: enables encryption on cloud disks. In this case, you must use **EncryptionKey** to specify an encryption key.
    

**Note**

Disk encryption cannot be disabled after it is enabled.

MasterNodeNum

Integer

No

No

The number of coordinator nodes.

Valid values: 1 to 2.

**Note**

If you leave this property empty, 1 is used.

DBInstanceMode

String

No

No

The resource mode of the instance.

Valid values:

-   **StorageElastic**: elastic storage mode
    
-   **Serverless**: Serverless mode
    
-   **Classic**: reserved storage mode
    

SegDiskPerformanceLevel

String

No

No

The performance level (PL) of the enhanced SSD (ESSD).

Valid values:

-   **pl0**
    
-   **pl1**
    
-   **pl2**
    

**Note**

This property takes effect only when SegStorageType is set to cloud\_essd.

If you do not specify this property, pl1 is used.

DBInstanceCategory

String

No

No

The edition of the instance.

Valid values:

-   **HighAvailability**: High-availability Edition
    
-   **Basic**: Basic Edition
    

**Note**

You must specify this property when you create an instance in elastic storage mode.

SegStorageType

String

No

No

The storage type of the disk.

Set the value to **cloud\_essd**. A value of cloud\_essd specified an ESSD.

**Note**

You must specify this property when you create an instance in elastic storage mode.

StorageSize

Integer

No

No

The size of the storage space.

Unit: GB. Valid values: 50 to 8000.

EncryptionKey

String

No

No

The key ID.

If **EncryptionType** is set to **CloudDisk**, you must use EncryptionKey to specify the ID of an encryption key that resides in the same region as the cloud disk specified by EncryptionType. If EncryptionType is not set to CloudDisk, you must leave EncryptionKey empty.

CreateSampleData

Boolean

No

No

Specifies whether to load the sample dataset after the instance is created.

Valid values:

-   **true**
    
-   **false** (default)
    

ServerlessMode

String

No

No

The Serverless mode of the instance.

Valid values:

-   **Manual** (default): manual scheduling
    
-   **Auto**: automatic scheduling
    

**Note**

You must specify this property only when you create an instance in Serverless mode.

ServerlessResource

Integer

No

No

The threshold of computing resources.

Unit: AnalyticDB compute unit (ACU). Valid values: 8 to 32. The value must be in increments of 8 ACUs. Default value: 32.

**Note**

You must specify this property only when you create an instance in automatic Serverless mode.

PrivateIpAddress

String

No

No

The private IP address of the instance.

None.

SegNodeNum

Integer

No

No

The number of compute nodes.

-   Valid values for High-availability Edition instances in elastic storage mode: multiples of 4 in the range of 4 to 512.
    
-   Valid values for Basic Edition instances in elastic storage mode: multiples of 2 in the range of 2 to 512.
    
-   Valid values for instances in Serverless mode: multiples of 2 in the range of 2 to 512.
    

**Note**

You must specify this property when you create an instance in elastic storage mode or Serverless mode.

InstanceSpec

String

No

No

The specifications of compute nodes.

-   Valid values for High-availability Edition instances in elastic storage mode:
    
    -   **2C16G**
        
    -   **4C32G**
        
    -   **16C128G**
        
-   Valid values for Basic Edition instances in elastic storage mode:
    
    -   **2C8G**
        
    -   **4C16G**
        
    -   **8C32G**
        
    -   **16C64G**
        
-   Valid values for instances in Serverless mode:
    
    -   **4C16G**
        
    -   **8C32G**
        

**Note**

You must specify this property when you create an instance in elastic storage mode or Serverless mode.

IdleTime

Integer

No

No

The wait time for the instance that has no traffic to become idle.

An instance becomes idle after the period of time during which no business traffic is generated reaches the specified threshold. Minimum value: 60. Default value: 600. Unit: seconds.

**Note**

You must specify this property only when you create an instance in automatic Serverless mode.

ProdType

String

No

No

The product type.

Valid values:

-   **standard** (default): Standard Edition
    
-   **cost-effective**: Cost-efficient Edition
    

MasterCU

Integer

No

No

The number of coordinator node resources.

None.

StandbyZoneId

String

No

No

The ID of the secondary zone.

None.

StandbyVSwitchId

String

No

No

The ID of the secondary vSwitch.

None.

DeployMode

String

No

No

The deployment mode.

None.

ResourceGroupId

String

No

Yes

The resource group ID.

None.

VectorConfigurationStatus

String

No

No

Specifies whether to enable vector search engine optimization.

Valid values:

-   enabled
    
-   disabled (default)
    

**Note**

-   We recommend that you do not enable vector search engine optimization in mainstream analysis, data warehousing, and real-time data warehousing scenarios.
    
-   We recommend that you enable vector search engine optimization in AI Generated Content (AIGC) and vector retrieval scenarios that require the vector analysis engine.
    

ZoneId

String

Yes

No

The zone ID.

Example: cn-hangzhou-h.

For more information about zone IDs, refer to [DescribeRegions](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describeregions).

## AINodeSpecInfos syntax

```
"AINodeSpecInfos": [
  {
    "AINodeSpec": String,
    "AINodeNum": Integer
  }
]
```

## AINodeSpecInfos properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AINodeSpec

String

Yes

No

The specifications of the AI node.

None.

AINodeNum

Integer

Yes

No

The number of AI nodes.

None.

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
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

The tag key.

The tag key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.

Value

String

No

No

The tag value.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

-   DBInstanceId: the instance ID.
    
-   Port: the port.
    
-   OrderId: the order ID.
    
-   ConnectionString: the endpoint.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ZoneId:
    Type: String
  VpcId:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::VPC::VPCId'
  VSwitchId:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::VSwitch::VSwitchId'
    AssociationPropertyMetadata:
      ZoneId: ZoneId
      VpcId: VpcId
Resources:
  DBInstance:
    Type: 'ALIYUN::GPDB::DBInstance'
    Properties:
      ZoneId:
        Ref: ZoneId
      VPCId:
        Ref: VpcId
      VSwitchId:
        Ref: VSwitchId
      DBInstanceGroupCount: 2
      EngineVersion: '6.0'
      DBInstanceClass: gpdb.group.segsdx2
      DBInstanceDescription: AnalyticDB PostgreSQL DB Instance
Outputs:
  OrderId:
    Value:
      'Fn::GetAtt':
        - DBInstance
        - OrderId
  ConnectionString:
    Value:
      'Fn::GetAtt':
        - DBInstance
        - ConnectionString
  DBInstanceId:
    Value:
      'Fn::GetAtt':
        - DBInstance
        - DBInstanceId
  Port:
    Value:
      'Fn::GetAtt':
        - DBInstance
        - Port
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ZoneId": {
      "Type": "String"
    },
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "VSwitchId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "ZoneId": "ZoneId",
        "VpcId": "VpcId"
      }
    }
  },
  "Resources": {
    "DBInstance": {
      "Type": "ALIYUN::GPDB::DBInstance",
      "Properties": {
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "VPCId": {
          "Ref": "VpcId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "DBInstanceGroupCount": 2,
        "EngineVersion": "6.0",
        "DBInstanceClass": "gpdb.group.segsdx2",
        "DBInstanceDescription": "AnalyticDB PostgreSQL DB Instance"
      }
    }
  },
  "Outputs": {
    "OrderId": {
      "Value": { "Fn::GetAtt": ["DBInstance", "OrderId"] }
    },
    "ConnectionString": {
      "Value": { "Fn::GetAtt": ["DBInstance", "ConnectionString"] }
    },
    "DBInstanceId": {
      "Value": { "Fn::GetAtt": ["DBInstance", "DBInstanceId"] }
    },
    "Port": {
      "Value": { "Fn::GetAtt": ["DBInstance", "Port"] }
    }
  }
}
```
