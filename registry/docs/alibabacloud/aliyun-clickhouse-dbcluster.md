ALIYUN::ClickHouse::DBCluster is used to create an ApsaraDB for ClickHouse cluster.

## Syntax

```
{
  "Type": "ALIYUN::ClickHouse::DBCluster",
  "Properties": {
    "DbNodeStorageType": String,
    "DBNodeStorage": Integer,
    "EncryptionType": String,
    "Category": String,
    "ZoneId": String,
    "VSwitchId": String,
    "DBClusterDescription": String,
    "Period": String,
    "EncryptionKey": String,
    "DBClusterNetworkType": String,
    "DBClusterType": String,
    "VpcId": String,
    "DBClusterVersion": String,
    "DBNodeCount": Integer,
    "UsedTime": Integer,
    "PaymentType": String
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

Category

String

Yes

No

The edition of the cluster.

Valid values:

-   Basic: Single-replica Edition
    
-   HighAvailability: Double-replica Edition
    

DBClusterNetworkType

String

Yes

No

The network type.

Set the value to VPC. This value specifies a virtual private cloud (VPC).

DBClusterType

String

Yes

Yes

The specifications of the cluster.

-   Valid values when the cluster is of Double-replica Edition:
    
    -   **LC20**: large-storage type, 20 cores, and 88 GB of memory
        
    -   **LC40**: large-storage type, 40 cores, and 176 GB of memory
        
    -   **LC80**: large-storage type, 80 cores, and 352 GB of memory
        
    -   **C8**: standard type, 8 cores, and 32 GB of memory
        
    -   **C16**: standard type, 16 cores, and 64 GB of memory
        
    -   **C32**: standard type, 32 cores, and 128 GB of memory
        
    -   **C64**: standard type, 64 cores, and 256 GB of memory
        
    -   **C80**: standard type, 80 cores, and 384 GB of memory
        
    -   **C104**: standard type, 104 cores, and 384 GB of memory
        
-   Valid values when the cluster is of Single-replica Edition:
    
    -   **LS20**: large-storage type, 20 cores, and 88 GB of memory
        
    -   **LS40**: large-storage type, 40 cores, and 176 GB of memory
        
    -   **LS80**: large-storage type, 80 cores, and 352 GB of memory
        
    -   **S8**: standard type, 8 cores, and 32 GB of memory
        
    -   **S16**: standard type, 16 cores, and 64 GB of memory
        
    -   **S32**: standard type, 32 cores, and 128 GB of memory
        
    -   **S64**: standard type, 64 cores, and 256 GB of memory
        
    -   **S80**: standard type, 80 cores, and 384 GB of memory
        
    -   **S104**: standard type, 104 cores, and 384 GB of memory
        

DBClusterVersion

String

Yes

No

The version of the cluster.

Valid values:

-   21.8.10.19
    
-   22.8.5.29
    

DBNodeCount

Integer

Yes

Yes

The number of nodes.

-   Valid values for the S series: 1 to 48.
    
-   Valid values for the C series: 1 to 24.
    

DBNodeStorage

Integer

Yes

Yes

The storage capacity of the node.

Valid values: 100 to 10000.

Unit: GB.

The value must be in increments of 100 GB.

DbNodeStorageType

String

Yes

No

The storage type of the node.

Valid values:

-   cloud\_essd: Enterprise SSD (ESSD)
    
-   cloud\_efficiency: ultra disk
    

PaymentType

String

Yes

No

The billing method.

Valid values:

-   Postpaid: pay-as-you-go
    
-   Prepaid: subscription
    

DBClusterDescription

String

No

Yes

The description of the cluster.

None.

EncryptionKey

String

No

No

The ID of the key that is provided by Key Management Service (KMS).

None.

EncryptionType

String

No

No

The encryption type.

Set the value to CloudDisk. A value of CloudDisk specifies that disk encryption is used for the cluster.

Period

String

No

No

The unit of the subscription duration of the cluster.

Valid values:

-   Year
    
-   Month
    

**Note**

You must specify this property when PaymentType is set to Prepaid.

UsedTime

Integer

No

No

The usage duration of the cluster.

-   Valid values when Period is set to Month: 1 to 9.
    
-   Valid values when Period is set to Year: 1 to 3.
    

VpcId

String

No

No

The VPC ID.

None.

VSwitchId

String

No

No

The vSwitch ID.

None.

ZoneId

String

No

No

The zone ID.

You can call the [DescribeRegions](/help/en/clickhouse/api-describeregions#topic6503) operation to query the supported zone.

## Return values

Fn::GetAtt

-   DBClusterId: the cluster ID.
    
-   PublicPort: the public port.
    
-   Bid: the business process ID.
    
-   LockReason: the reason why the cluster is locked.
    
-   LockMode: the lock mode.
    
-   DBClusterVersion: the cluster version.
    
-   CommodityCode: the commodity code.
    
-   VpcId: the VPC ID.
    
-   Engine: the cluster engine.
    
-   Category: the edition of the cluster.
    
-   DBClusterType: the specifications of the cluster.
    
-   DBClusterNetworkType: the network type.
    
-   EncryptionType: the encryption type.
    
-   VpcCloudInstanceId: the ID of the cluster of the VPC type.
    
-   Port: the port number that is used to connect to the cluster.
    
-   PaymentType: the billing method.
    
-   DBNodeStorage: the storage capacity of the node.
    
-   PublicConnectionString: the public endpoint.
    
-   EngineVersion: the engine version.
    
-   IsExpired: indicates whether the cluster is expired.
    
-   VSwitchId: the vSwitch ID.
    
-   Period: the unit of the subscription duration of the cluster.
    
-   StorageType: the storage type.
    
-   DBNodeCount: the number of nodes.
    
-   AliUid: the ID of the Alibaba Cloud account.
    
-   DBClusterDescription: the description of the cluster.
    
-   ConnectionString: the endpoint of the cluster.
    
-   ZoneId: the zone ID.
    
-   EncryptionKey: the ID of the key that is provided by KMS.
    
-   DbNodeStorageType: the storage type of the node.
    
-   DBNodeClass: the node type.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VpcId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  ZoneId:
    Type: String
    AssociationProperty: ZoneId
  VSwitchId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      ZoneId: ${ZoneId}
      VpcId: ${VpcId}
  PaymentType:
    Type: String
    Description: PayType
    Default: Month
Resources:
  ClickHouseDBCluster:
    Type: ALIYUN::ClickHouse::DBCluster
    Properties:
      DbNodeStorageType: cloud_essd
      DBNodeStorage: 100 
      Category: Basic
      ZoneId:
        Ref: ZoneId
      VSwitchId:
        Ref: VSwitchId
      Period: Month
      DBClusterNetworkType: VPC
      DBClusterType: S8
      VpcId:
        Ref: VpcId
      DBClusterVersion: 21.8.10.19
      DBNodeCount: 3
      UsedTime: 1
      PaymentType: Prepaid
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "ZoneId": {
      "Type": "String",
      "AssociationProperty": "ZoneId"
    },
    "VSwitchId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "ZoneId": "${ZoneId}",
        "VpcId": "${VpcId}"
      }
    },
    "PaymentType": {
      "Type": "String",
      "Description": "PayType",
      "Default": "Month"
    }
  },
  "Resources": {
    "ClickHouseDBCluster": {
      "Type": "ALIYUN::ClickHouse::DBCluster",
      "Properties": {
        "DbNodeStorageType": "cloud_essd",
        "DBNodeStorage": 100,
        "Category": "Basic",
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "Period": "Month",
        "DBClusterNetworkType": "VPC",
        "DBClusterType": "S8",
        "VpcId": {
          "Ref": "VpcId"
        },
        "DBClusterVersion": "21.8.10.19",
        "DBNodeCount": 3,
        "UsedTime": 1,
        "PaymentType": "Prepaid"
      }
    }
  }
}
```
