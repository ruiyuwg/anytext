ALIYUN::CDDC::DedicatedHost is used to create a host in a dedicated cluster.

For more information about dedicated clusters, see [What is ApsaraDB for MyBase?](/help/en/apsaradb-for-mybase/latest/what-is-apsaradb-for-mybase#concept-2319911)

## Syntax

```
{
  "Type": "ALIYUN::CDDC::DedicatedHost",
  "Properties": {
    "HostClass": String,
    "OsPassword": String,
    "ZoneId": String,
    "DedicatedHostGroupId": String,
    "AutoRenew": String,
    "VSwitchId": String,
    "UsedTime": String,
    "ImageCategory": String,
    "Period": String,
    "PaymentType": String,
    "HostName": String,
    "Tags": List
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

DedicatedHostGroupId

String

Yes

No

The ID of the dedicated cluster.

None.

HostClass

String

Yes

Yes

The instance type of the host.

For more information, see [Instance types of hosts](/help/en/apsaradb-for-mybase/latest/instance-specifications#task-2047476).

PaymentType

String

Yes

No

The billing method of the host.

Set the value to PrePaid. A value of PrePaid specifies the subscription billing method.

VSwitchId

String

Yes

No

The vSwitch ID.

None.

ZoneId

String

Yes

No

The zone ID.

For example, if you set ZoneId to `cn-hangzhou-i`, `cn-hangzhou` in the property value specifies the region that corresponds to the zone.

You can call the [DescribeRegions](/help/en/apsaradb-for-mybase/latest/describeregions#doc-api-cddc-DescribeRegions) operation to query the most recent region list.

AutoRenew

String

No

No

Specifies whether to enable auto-renewal.

Valid values:

-   true
    
-   false (default)
    

HostName

String

No

Yes

The hostname.

The hostname must be 1 to 64 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). It must start with a letter.

ImageCategory

String

No

No

The image type of the host.

Valid values:

-   WindowsWithMssqlEntAlwaysonLicense: SQL Server Cluster Edition
    
-   WindowsWithMssqlStdLicense: SQL Server Standard Edition
    
-   WindowsWithMssqlEntLicense: SQL Server Enterprise Edition
    
-   WindowsWithMssqlWebLicense: SQL Server Web Edition
    
-   AliLinux: other image types
    

OsPassword

String

No

No

The password of the host.

You can specify a password for a host only when you create the host in a Proprietary MyBase dedicated cluster.

The password must be 8 to 30 characters in length. It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The following special characters are supported: `( ) \ ~ ! @ # $ % ^ & * - _ + = | { } [ ] : ; ' < > , . ? /`.

Period

String

No

No

The unit of the subscription period of the host.

Valid values:

-   Year
    
-   Month
    
-   Week
    

Tags

List

No

Yes

The tags.

For more information, see [Tags properties](#section-7pr-3eq-au5).

UsedTime

String

No

No

The subscription duration.

-   Valid values when Period is set to Year: 1 to 5.
    
-   Valid values when Period is set to Month: 1 to 9.
    
-   Valid values when Period is set to Week: 1 to 3.
    

## Tags syntax

```
"Tags": [
  {
    "TagKey": String,
    "TagValue": String
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

TagKey

String

No

No

The tag key.

The tag key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

TagValue

String

No

No

The tag value.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

-   DiskAllocationRatio: the disk usage. Unit: percentage.
    
-   DedicatedHostId: the ID of the host in the dedicated cluster.
    
-   MemAllocationRatio: the memory usage. Unit: percentage.
    
-   ZoneId: the zone ID.
    
-   DedicatedHostGroupId: the ID of the dedicated cluster.
    
-   AutoRenew: indicates whether auto-renewal is enabled.
    
-   VSwitchId: the vSwitch ID.
    
-   ImageCategory: the image type of the host.
    
-   HostStorage: the total storage capacity of the host. Unit: GB.
    
-   StorageUsed: the storage usage. Unit: GB.
    
-   OpenPermission: indicates whether the feature that allows you to grant the host OS permissions is enabled.
    
-   HostType: the storage type of the host.
    
-   HostClass: the instance type of the host.
    
-   HostCpu: the CPU of the host.
    
-   VpcId: the ID of the virtual private cloud (VPC).
    
-   EcsClassCode: the Elastic Compute Service (ECS) instance type of the host.
    
-   CpuAllocationRatio: the CPU utilization.
    
-   HostMem: the memory of the host.
    
-   PaymentType: the billing method of the host.
    
-   MemoryUsed: the memory usage. Unit: GB.
    
-   IpAddress: the IP address of the host.
    
-   CpuUsed: the CPU utilization. Unit: core.
    
-   HostName: the hostname.
    

## Examples

## YAML format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  HostClass:
    Type: String
    Description: Host Class
    Default: rds.i2g.2xlarge
  OsPassword:
    Type: String
    Default: Password123
  ZoneId:
    Type: String
    Description: Zone ID
    Default: cn-hangzhou-i
  DedicatedHostGroupId:
    Type: String
    Description: Dedicated Host Group ID
    Default: dhg-23h5e2axmuf4****
  VSwitchId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      ZoneId: ${ZoneId}
  PaymentType:
    Type: String
    Description: Payment Type
    Default: PrePaid
Resources:
  CDDCDedicatedHost:
    Type: ALIYUN::CDDC::DedicatedHost
    Properties:
      HostClass:
        Ref: HostClass
      OsPassword:
        Ref: OsPassword
      ZoneId:
        Ref: ZoneId
      DedicatedHostGroupId:
        Ref: DedicatedHostGroupId
      VSwitchId:
        Ref: VSwitchId
      PaymentType:
        Ref: PaymentType
Outputs:
  DiskAllocationRatio:
    Description: Disk Allocation Ratio
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - DiskAllocationRatio
  DedicatedHostId:
    Description: The first ID of the resource
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - DedicatedHostId
  MemAllocationRatio:
    Description: Memory Allocation Ratio
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - MemAllocationRatio
  ZoneId:
    Description: Zone ID
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - ZoneId
  DedicatedHostGroupId:
    Description: Dedicated Host Group ID
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - DedicatedHostGroupId
  AutoRenew:
    Description: Whether Auto Renew
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - AutoRenew
  VSwitchId:
    Description: VSwitch ID
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - VSwitchId
  ImageCategory:
    Description: Host Image Category
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - ImageCategory
  HostStorage:
    Description: Host Storage
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - HostStorage
  StorageUsed:
    Description: Storage Used
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - StorageUsed
  OpenPermission:
    Description: Whether Open OS Permission
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - OpenPermission
  HostType:
    Description: Host Storage Type
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - HostType
  HostClass:
    Description: Host Class
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - HostClass
  HostCpu:
    Description: Host CPU
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - HostCpu
  VpcId:
    Description: VPC ID
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - VpcId
  EcsClassCode:
    Description: ECS Class Code
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - EcsClassCode
  CpuAllocationRatio:
    Description: CPU Allocation Ratio
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - CpuAllocationRatio
  HostMem:
    Description: Host Memory
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - HostMem
  PaymentType:
    Description: Payment Type
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - PaymentType
  MemoryUsed:
    Description: Host Memory Used
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - MemoryUsed
  IpAddress:
    Description: Host IP Address
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - IpAddress
  CpuUsed:
    Description: CPU Used
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - CpuUsed
  HostName:
    Description: Host Name
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHost
        - HostName
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "HostClass": {
      "Type": "String",
      "Description": "Host Class",
      "Default": "rds.i2g.2xlarge"
    },
    "OsPassword": {
      "Type": "String",
      "Default": "Password123"
    },
    "ZoneId": {
      "Type": "String",
      "Description": "Zone ID",
      "Default": "cn-hangzhou-i"
    },
    "DedicatedHostGroupId": {
      "Type": "String",
      "Description": "Dedicated Host Group ID",
      "Default": "dhg-23h5e2axmuf4****"
    },
    "VSwitchId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "ZoneId": "${ZoneId}"
      }
    },
    "PaymentType": {
      "Type": "String",
      "Description": "Payment Type",
      "Default": "PrePaid"
    }
  },
  "Resources": {
    "CDDCDedicatedHost": {
      "Type": "ALIYUN::CDDC::DedicatedHost",
      "Properties": {
        "HostClass": {
          "Ref": "HostClass"
        },
        "OsPassword": {
          "Ref": "OsPassword"
        },
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "DedicatedHostGroupId": {
          "Ref": "DedicatedHostGroupId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "PaymentType": {
          "Ref": "PaymentType"
        }
      }
    }
  },
  "Outputs": {
    "DiskAllocationRatio": {
      "Description": "Disk Allocation Ratio",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "DiskAllocationRatio"
        ]
      }
    },
    "DedicatedHostId": {
      "Description": "The first ID of the resource",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "DedicatedHostId"
        ]
      }
    },
    "MemAllocationRatio": {
      "Description": "Memory Allocation Ratio",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "MemAllocationRatio"
        ]
      }
    },
    "ZoneId": {
      "Description": "Zone ID",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "ZoneId"
        ]
      }
    },
    "DedicatedHostGroupId": {
      "Description": "Dedicated Host Group ID",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "DedicatedHostGroupId"
        ]
      }
    },
    "AutoRenew": {
      "Description": "Whether Auto Renew",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "AutoRenew"
        ]
      }
    },
    "VSwitchId": {
      "Description": "VSwitch ID",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "VSwitchId"
        ]
      }
    },
    "ImageCategory": {
      "Description": "Host Image Category",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "ImageCategory"
        ]
      }
    },
    "HostStorage": {
      "Description": "Host Storage",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "HostStorage"
        ]
      }
    },
    "StorageUsed": {
      "Description": "Storage Used",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "StorageUsed"
        ]
      }
    },
    "OpenPermission": {
      "Description": "Whether Open OS Permission",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "OpenPermission"
        ]
      }
    },
    "HostType": {
      "Description": "Host Storage Type",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "HostType"
        ]
      }
    },
    "HostClass": {
      "Description": "Host Class",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "HostClass"
        ]
      }
    },
    "HostCpu": {
      "Description": "Host CPU",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "HostCpu"
        ]
      }
    },
    "VpcId": {
      "Description": "VPC ID",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "VpcId"
        ]
      }
    },
    "EcsClassCode": {
      "Description": "ECS Class Code",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "EcsClassCode"
        ]
      }
    },
    "CpuAllocationRatio": {
      "Description": "CPU Allocation Ratio",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "CpuAllocationRatio"
        ]
      }
    },
    "HostMem": {
      "Description": "Host Memory",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "HostMem"
        ]
      }
    },
    "PaymentType": {
      "Description": "Payment Type",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "PaymentType"
        ]
      }
    },
    "MemoryUsed": {
      "Description": "Host Memory Used",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "MemoryUsed"
        ]
      }
    },
    "IpAddress": {
      "Description": "Host IP Address",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "IpAddress"
        ]
      }
    },
    "CpuUsed": {
      "Description": "CPU Used",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "CpuUsed"
        ]
      }
    },
    "HostName": {
      "Description": "Host Name",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHost",
          "HostName"
        ]
      }
    }
  }
}
```
