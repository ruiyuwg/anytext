ALIYUN::HBase::Cluster is used to create an ApsaraDB for HBase cluster.

## Syntax

```
{
  "Type": "ALIYUN::HBase::Cluster",
  "Properties": {
    "AutoRenewPeriod": Integer,
    "ColdStorageSize": Integer,
    "EngineVersion": String,
    "ResourceGroupId": String,
    "NodeCount": Integer,
    "ZoneId": String,
    "VSwitchId": String,
    "Period": Integer,
    "EncryptionKey": String,
    "PayType": String,
    "MasterInstanceType": String,
    "DiskType": String,
    "VpcId": String,
    "SecurityIPList": String,
    "CoreInstanceType": String,
    "DiskSize": Integer,
    "ClusterName": String,
    "Engine": String,
    "PeriodUnit": String,
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

AutoRenewPeriod

Integer

No

No

The auto-renewal period of the cluster.

Unit: month.

If you set this property to **2**, the system automatically renews the cluster for 2 months when the cluster expires.

**Note**

Default value: **0**. A value of 0 indicates that the system does not automatically renew the cluster when the cluster expires.

ColdStorageSize

Integer

No

No

The cold storage capacity of the cluster.

Unit: GB. Valid values:

-   **0**: If you set this property to 0, cold storage is disabled.
    
-   **800** to **1000000**: If you set this property to one of the values, cold storage is enabled.
    

**Note**

You can enable the cold storage feature only when Engine is set to **hbaseue**.

EngineVersion

String

Yes

No

The engine version of the cluster.

The valid values of EngineVersion vary based on the value of Engine.

-   Valid values of EngineVersion when Engine is set to **hbase**: **1.1** and **2.0**.
    
-   Valid value of EngineVersion when Engine is set to **hbaseue**: **2.0**.
    
-   Valid value of EngineVersion when Engine is set to **bds**: **1.0**.
    

ResourceGroupId

String

No

No

The ID of the resource group.

None.

NodeCount

Integer

Yes

Yes

The number of core nodes.

-   Valid value when the cluster is a single-node cluster: 1.
    
-   Valid values when the cluster uses cloud disks: 2 to 100.
    
-   Valid values when the cluster uses local disks: 4 to 100.
    

ZoneId

String

Yes

No

The zone ID.

None.

VSwitchId

String

No

No

The ID of the vSwitch that belongs to the virtual private cloud (VPC).

None.

Period

Integer

No

No

The subscription duration of the cluster.

-   Valid values when PeriodUnit is set to **year**: **1** to **3**.
    
-   Valid values when PeriodUnit is set to **month**: **1** to **9**.
    

**Note**

You must specify this property only when PayType is set to **Prepaid**.

EncryptionKey

String

No

No

The ID of the encryption key.

The value is empty if you do not enable encryption. If encryption is enabled for a cluster that uses cloud disks, you cannot disable encryption for the cluster.

PayType

String

Yes

No

The billing method of the cluster.

Valid values:

-   **Prepaid**: subscription
    
-   **Postpaid**: pay-as-you-go
    

MasterInstanceType

String

No

Yes

The instance type of the master node.

You can call the [DescribeAvailableResource](/help/en/hbase/developer-reference/api-describeavailableresource) operation to query the instance type.

DiskType

String

No

No

The disk category of the core nodes of the cluster.

Valid values:

-   cloud\_efficiency: ultra disk
    
-   cloud\_ssd: standard SSD
    
-   local\_hdd\_pro: local HDD
    
-   local\_ssd\_pro: local SSD
    
-   cloud\_essd\_pl1: Enterprise SSD (ESSD)
    

VpcId

String

No

No

The VPC ID.

If you leave this property and `VswitchId` empty, the cluster uses the classic network.

SecurityIPList

String

No

Yes

The IP addresses or CIDR blocks that you want to add to the whitelist of the cluster.

Separate multiple IP addresses with commas (,).

**Note**

If you set this property to 127.0.0.1, all IP addresses are not allowed to access the cluster. If you set this property to 192.168.0.0/24, IP addresses in the 192.168.0.XX format are allowed to access the cluster.

CoreInstanceType

String

Yes

Yes

The instance type of the core nodes.

You can call the [DescribeAvailableResource](/help/en/hbase/developer-reference/api-describeavailableresource) operation to query the instance type.

DiskSize

Integer

No

Yes

The disk size of the core node.

Unit: GB.

-   Valid values when the cluster is a single-node cluster: 20 to 500. Unit: GB. The value is in increments of 1 GB.
    
-   Valid values when the cluster uses cloud disks: 400 to 64000. Unit: GB. The value is in increments of 40 GB.
    
-   Valid values vary based on the instance type of the core node when the cluster uses local disks:
    
    -   Valid value when the instance type of the core node is hbase.d1.4xlarge: 44000.
        
    -   Valid value when the instance type of the core node is hbase.d1.6xlarge: 66000.
        
    -   Valid value when the instance type of the core node is hbase.d1.8xlarge: 88000.
        
    -   Valid value when the instance type of the core node is hbase.i2.xlarge: 894.
        
    -   Valid value when the instance type of the core node is hbase.i2.2xlarge: 1788.
        
    -   Valid value when the instance type of the core node is hbase.i2.4xlarge: 3576.
        
    -   Valid value when the instance type of the core node is hbase.i2.8xlarge: 7152.
        
    -   Valid value when the instance type of the core node is hbase.d2s.5xlarge: 58400.
        
    -   Valid value when the instance type of the core node is hbase.d2s.10xlarge: 109500.
        

ClusterName

String

No

Yes

The cluster name.

The name must comply with the following rules:

-   The name must be 2 to 128 characters in length.
    
-   It must start with a letter.
    
-   It can contain digits and special characters. Special characters include periods (.), hyphens (-), and underscores (\_).
    

Engine

String

Yes

No

The type of the database engine.

Valid values:

-   **hbase**: ApsaraDB for HBase Standard Edition or ApsaraDB for HBase Standalone Edition
    
-   **hbaseue**: ApsaraDB for HBase Performance-enhanced Edition
    
-   **bds**: Lindorm Tunnel Service (LTS)
    

PeriodUnit

String

No

No

The unit of the subscription duration of the cluster.

Valid values:

-   **year**
    
-   **month**
    

**Note**

You must specify this property only when PayType is set to **Prepaid**.

DeletionProtection

Boolean

No

Yes

Specifies whether to enable the deletion protection feature.

Valid values:

-   **true**: enables the deletion protection feature. If you enable the feature, you cannot directly release the cluster. You must disable the feature before you can release the cluster.
    
-   **false**: disables the deletion protection feature.
    

## Return values

Fn::GetAtt

-   UiProxyConnAddrInfo: the addresses of the web console connections.
    
-   ClusterId: the cluster ID.
    
-   ServiceConnAddrs: the addresses of the sub-services.
    
-   ThriftConn: the addresses of the Thrift connections.
    
-   SlbConnAddrs: the addresses of the connections with the Server Load Balancer (SLB) instances.
    
-   ZkConnAddrs: the addresses of the Zookeeper connections.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VpcId:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Required: false
    Type: String
    Description:
      en: |-
        The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId
        parameter empty, the classic network type is used. The VPC network type is preferred.
  VSwitchId:
    AssociationProperty: ALIYUN::VPC::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
      ZoneId: ${ZoneId}
    Required: false
    Type: String
    Description:
      en: The ID of the vSwitch.
  PayType:
    Default: Postpaid
    Required: true
    Type: String
    Description:
      en: |-
        The billing method.
        Prepaid: The subscription billing method is used.
        Postpaid: The pay-as-you-go billing method is used.
    AllowedValues:
      - Prepaid
      - Postpaid
  ZoneId:
    AssociationProperty: ZoneId
    Required: true
    Type: String
    Description:
      en: The ID of the zone.
Resources:
  Cluster:
    Type: ALIYUN::HBase::Cluster
    Properties:
      Engine: hbaseue
      VpcId:
        Ref: VpcId
      CoreInstanceType: hbase.sn1.2xlarge
      PayType:
        Ref: PayType
      ZoneId:
        Ref: ZoneId
      MasterInstanceType: hbase.sn1.large
      VSwitchId:
        Ref: VSwitchId
      EngineVersion: '2.0'
      NodeCount: 2
      DiskSize: 400
      DiskType: cloud_ssd
Outputs:
  ServiceConnAddrs:
    Description: LIST of ServiceConnAddr.
    Value:
      Fn::GetAtt:
        - Cluster
        - ServiceConnAddrs
  UiProxyConnAddrInfo:
    Description: WebUI connection information list.
    Value:
      Fn::GetAtt:
        - Cluster
        - UiProxyConnAddrInfo
  ThriftConn:
    Description: Thrift Connection address list.
    Value:
      Fn::GetAtt:
        - Cluster
        - ThriftConn
  SlbConnAddrs:
    Description: LIST of SlbConnAddr.
    Value:
      Fn::GetAtt:
        - Cluster
        - SlbConnAddrs
  ClusterId:
    Description: The ID of the instance.
    Value:
      Fn::GetAtt:
        - Cluster
        - ClusterId
  ZkConnAddrs:
    Description: List of ZkConnAddr.
    Value:
      Fn::GetAtt:
        - Cluster
        - ZkConnAddrs
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ZoneId": {
      "AssociationProperty": "ZoneId",
      "Type": "String",
      "Description": {
        "en": "The ID of the zone."
      },
      "Required": true
    },
    "VSwitchId": {
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}",
        "ZoneId": "${ZoneId}"
      },
      "AssociationProperty": "ALIYUN::VPC::VSwitch::VSwitchId",
      "Type": "String",
      "Description": {
        "en": "The ID of the vSwitch."
      },
      "Required": false
    },
    "PayType": {
      "Type": "String",
      "Description": {
        "en": "The billing method.\nPrepaid: The subscription billing method is used.\nPostpaid: The pay-as-you-go billing method is used."
      },
      "AllowedValues": [
        "Prepaid",
        "Postpaid"
      ],
      "Required": true,
      "Default": "Postpaid"
    },
    "VpcId": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Description": {
        "en": "The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId\nparameter empty, the classic network type is used. The VPC network type is preferred."
      },
      "Required": false
    }
  },
  "Resources": {
    "Cluster": {
      "Type": "ALIYUN::HBase::Cluster",
      "Properties": {
        "EngineVersion": "2.0",
        "NodeCount": 2,
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "PayType": {
          "Ref": "PayType"
        },
        "MasterInstanceType": "hbase.sn1.large",
        "DiskType": "cloud_ssd",
        "VpcId": {
          "Ref": "VpcId"
        },
        "CoreInstanceType": "hbase.sn1.2xlarge",
        "Engine": "hbaseue",
        "DiskSize": 400
      }
    }
  },
  "Outputs": {
    "UiProxyConnAddrInfo": {
      "Description": "WebUI connection information list.",
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "UiProxyConnAddrInfo"
        ]
      }
    },
    "ClusterId": {
      "Description": "The ID of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "ClusterId"
        ]
      }
    },
    "ServiceConnAddrs": {
      "Description": "LIST of ServiceConnAddr.",
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "ServiceConnAddrs"
        ]
      }
    },
    "ThriftConn": {
      "Description": "Thrift Connection address list.",
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "ThriftConn"
        ]
      }
    },
    "SlbConnAddrs": {
      "Description": "LIST of SlbConnAddr.",
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "SlbConnAddrs"
        ]
      }
    },
    "ZkConnAddrs": {
      "Description": "List of ZkConnAddr.",
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "ZkConnAddrs"
        ]
      }
    }
  }
}
```
