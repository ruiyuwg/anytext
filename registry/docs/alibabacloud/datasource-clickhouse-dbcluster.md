DATASOURCE::ClickHouse::DBCluster is used to query the information about an ApsaraDB for ClickHouse cluster.

## Syntax

```
{
  "Type": "DATASOURCE::ClickHouse::DBCluster",
  "Properties": {
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

DBClusterId

String

Yes

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

-   Category: the edition of the cluster.
    
-   ResourceGroupId: the ID of the resource group.
    
-   VpcIpAddr: the IP address that is used to connect to the cluster over the virtual private cloud (VPC).
    
-   Port: the HTTP port.
    
-   DBClusterId: the cluster ID.
    
-   EncryptionKey: the key of Key Management Service (KMS).
    
-   DbNodeStorage: the storage capacity of a single node.
    
-   DBClusterType: the cluster type.
    
-   SupportBackup: indicates whether data backup is supported.
    
-   CommodityCode: the commodity code.
    
-   PaymentType: the billing method.
    
-   SupportOss: indicates whether tiered storage of hot data and cold data is supported.
    
-   PublicConnectionString: the public endpoint.
    
-   SupportHttpsPort: indicates whether HTTPS ports are supported.
    
-   LockReason: the reason why the cluster is locked.
    
-   Bid: the site ID.
    
-   DbNodeClass: the specifications of the cluster.
    
-   MaintainTime: the maintenance window of the cluster.
    
-   Engine: the type of the database engine.
    
-   IsExpired: indicates whether the cluster has expired.
    
-   EncryptionType: the encryption type.
    
-   SecurityIps: the IP addresses that are allowed in the whitelist.
    
-   EngineVersion: the version of the database engine.
    
-   StorageType: the storage type.
    
-   ZoneId: the zone ID.
    
-   PublicIpAddr: the IP address that is used to connect to the cluster over the Internet.
    
-   VSwitchId: the vSwitch ID.
    
-   CreateTime: the time when the cluster was created.
    
-   DbNodeCount: the number of nodes.
    
-   LockMode: the lock mode of the cluster.
    
-   DBClusterName: the cluster name.
    
-   ScaleOutStatus: the status of the data migration task.
    
-   VpcId: the VPC ID.
    
-   DBClusterIPArrayName: the name of the IP address whitelist that is modified.  
    
-   DbClusterNetworkType: the network type.
    
-   VpcCloudInstanceId: the ID of the VPC resource.
    
-   SupportMysqlPort: indicates whether the cluster supports MySQL ports.
    
-   ConnectionString: the VPC endpoint.
    
-   ExpireTime: the expiration time of the cluster.
    
-   PublicPort: the TCP port in the public endpoint.
    
-   AliUid: the ID of the Alibaba Cloud account.
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DBClusterId:
    Description:
      en: Instance ID.
    Required: true
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      DBClusterId:
        Ref: DBClusterId
    Type: DATASOURCE::ClickHouse::DBCluster
Outputs:
  AliUid:
    Description: Alibaba Cloud account.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - AliUid
  Bid:
    Description: The ID of the business process flow.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Bid
  Category:
    Description: Copy configuration, value description:.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Category
  CommodityCode:
    Description: Buy Product Code.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - CommodityCode
  ConnectionString:
    Description: Connection string.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ConnectionString
  CreateTime:
    Description: The creation time of the resource.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - CreateTime
  DBClusterIPArrayName:
    Description: The name of the whitelist group to be modified.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DBClusterIPArrayName
  DBClusterId:
    Description: Instance ID.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DBClusterId
  DBClusterName:
    Description: The cluster description information.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DBClusterName
  DBClusterType:
    Description: Instance type.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DBClusterType
  DbClusterNetworkType:
    Description: Network type. Currently, only VPC is supported.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DbClusterNetworkType
  DbNodeClass:
    Description: Set the node type.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DbNodeClass
  DbNodeCount:
    Description: 'Value range: S-Series: 1 to 48 C Series: 1-24 units:.'
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DbNodeCount
  DbNodeStorage:
    Description: 'Single-node storage space. Value range: 100 GB to 32000GB.'
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DbNodeStorage
  EncryptionKey:
    Description: Key management service KMS key ID.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - EncryptionKey
  EncryptionType:
    Description: Currently only supports ECS disk encryption, with a value of CloudDisk,
      not encrypted when empty.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - EncryptionType
  Engine:
    Description: Engine.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Engine
  EngineVersion:
    Description: The engine version.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - EngineVersion
  ExpireTime:
    Description: The expiration time.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ExpireTime
  IsExpired:
    Description: If the instance has expired.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - IsExpired
  LockMode:
    Description: The lock mode.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - LockMode
  LockReason:
    Description: Lock reason.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - LockReason
  MaintainTime:
    Description: Examples of the maintenance window, in the format of hh:mmZ-hh:mm
      Z.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - MaintainTime
  PaymentType:
    Description: The paymen type of the resource.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - PaymentType
  Port:
    Description: Connection port.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Port
  PublicConnectionString:
    Description: A public IP address for the connection.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - PublicConnectionString
  PublicIpAddr:
    Description: Public IP address.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - PublicIpAddr
  PublicPort:
    Description: Public network port.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - PublicPort
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ResourceGroupId
  ScaleOutStatus:
    Description: Scale state.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ScaleOutStatus
  SecurityIps:
    Description: The whitelist supports the following two formats:.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - SecurityIps
  StorageType:
    Description: 'Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud
      disk.'
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - StorageType
  SupportBackup:
    Description: Support fallback scheme.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - SupportBackup
  SupportHttpsPort:
    Description: The system supports http port number.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - SupportHttpsPort
  SupportMysqlPort:
    Description: Supports Mysql, and those of the ports.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - SupportMysqlPort
  SupportOss:
    Description: Whether hot and cold stratification is supported, 0 means not, and
      1st generation table supports it.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - SupportOss
  VSwitchId:
    Description: Switch ID.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - VSwitchId
  VpcCloudInstanceId:
    Description: Virtual Private Cloud (VPC cloud instance ID.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - VpcCloudInstanceId
  VpcId:
    Description: VPC ID.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - VpcId
  VpcIpAddr:
    Description: VPC IP address.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - VpcIpAddr
  ZoneId:
    Description: On behalf of the zone resource attribute field.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ZoneId
                        
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DBClusterId": {
      "Type": "String",
      "Description": {
        "en": "Instance ID."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ClickHouse::DBCluster",
      "Properties": {
        "DBClusterId": {
          "Ref": "DBClusterId"
        }
      }
    }
  },
  "Outputs": {
    "Category": {
      "Description": "Copy configuration, value description:.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Category"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroupId"
        ]
      }
    },
    "VpcIpAddr": {
      "Description": "VPC IP address.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VpcIpAddr"
        ]
      }
    },
    "Port": {
      "Description": "Connection port.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Port"
        ]
      }
    },
    "DBClusterId": {
      "Description": "Instance ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DBClusterId"
        ]
      }
    },
    "EncryptionKey": {
      "Description": "Key management service KMS key ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "EncryptionKey"
        ]
      }
    },
    "DbNodeStorage": {
      "Description": "Single-node storage space. Value range: 100 GB to 32000GB.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DbNodeStorage"
        ]
      }
    },
    "DBClusterType": {
      "Description": "Instance type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DBClusterType"
        ]
      }
    },
    "SupportBackup": {
      "Description": "Support fallback scheme.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SupportBackup"
        ]
      }
    },
    "CommodityCode": {
      "Description": "Buy Product Code.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CommodityCode"
        ]
      }
    },
    "PaymentType": {
      "Description": "The paymen type of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PaymentType"
        ]
      }
    },
    "SupportOss": {
      "Description": "Whether hot and cold stratification is supported, 0 means not, and 1st generation table supports it.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SupportOss"
        ]
      }
    },
    "PublicConnectionString": {
      "Description": "A public IP address for the connection.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PublicConnectionString"
        ]
      }
    },
    "SupportHttpsPort": {
      "Description": "The system supports http port number.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SupportHttpsPort"
        ]
      }
    },
    "LockReason": {
      "Description": "Lock reason.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LockReason"
        ]
      }
    },
    "Bid": {
      "Description": "The ID of the business process flow.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Bid"
        ]
      }
    },
    "DbNodeClass": {
      "Description": "Set the node type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DbNodeClass"
        ]
      }
    },
    "MaintainTime": {
      "Description": "Examples of the maintenance window, in the format of hh:mmZ-hh:mm Z.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MaintainTime"
        ]
      }
    },
    "Engine": {
      "Description": "Engine.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Engine"
        ]
      }
    },
    "IsExpired": {
      "Description": "If the instance has expired.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "IsExpired"
        ]
      }
    },
    "EncryptionType": {
      "Description": "Currently only supports ECS disk encryption, with a value of CloudDisk, not encrypted when empty.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "EncryptionType"
        ]
      }
    },
    "SecurityIps": {
      "Description": "The whitelist supports the following two formats:.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SecurityIps"
        ]
      }
    },
    "EngineVersion": {
      "Description": "The engine version.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "EngineVersion"
        ]
      }
    },
    "StorageType": {
      "Description": "Storage type CloudSSD:SSD cloud disk CloudEfficiency: Ultra cloud disk.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StorageType"
        ]
      }
    },
    "ZoneId": {
      "Description": "On behalf of the zone resource attribute field.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ZoneId"
        ]
      }
    },
    "PublicIpAddr": {
      "Description": "Public IP address.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PublicIpAddr"
        ]
      }
    },
    "VSwitchId": {
      "Description": "Switch ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VSwitchId"
        ]
      }
    },
    "CreateTime": {
      "Description": "The creation time of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "DbNodeCount": {
      "Description": "Value range: S-Series: 1 to 48 C Series: 1-24 units:.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DbNodeCount"
        ]
      }
    },
    "LockMode": {
      "Description": "The lock mode.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LockMode"
        ]
      }
    },
    "DBClusterName": {
      "Description": "The cluster description information.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DBClusterName"
        ]
      }
    },
    "ScaleOutStatus": {
      "Description": "Scale state.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScaleOutStatus"
        ]
      }
    },
    "VpcId": {
      "Description": "VPC ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VpcId"
        ]
      }
    },
    "DBClusterIPArrayName": {
      "Description": "The name of the whitelist group to be modified.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DBClusterIPArrayName"
        ]
      }
    },
    "DbClusterNetworkType": {
      "Description": "Network type. Currently, only VPC is supported.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DbClusterNetworkType"
        ]
      }
    },
    "VpcCloudInstanceId": {
      "Description": "Virtual Private Cloud (VPC cloud instance ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VpcCloudInstanceId"
        ]
      }
    },
    "SupportMysqlPort": {
      "Description": "Supports Mysql, and those of the ports.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SupportMysqlPort"
        ]
      }
    },
    "ConnectionString": {
      "Description": "Connection string.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ConnectionString"
        ]
      }
    },
    "ExpireTime": {
      "Description": "The expiration time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ExpireTime"
        ]
      }
    },
    "PublicPort": {
      "Description": "Public network port.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PublicPort"
        ]
      }
    },
    "AliUid": {
      "Description": "Alibaba Cloud account.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AliUid"
        ]
      }
    }
  }
}
                        
```
