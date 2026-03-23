ALIYUN::CDDC::DedicatedHostGroup is used to create a dedicated cluster.

For more information about dedicated clusters, see [What is ApsaraDB for MyBase?](/help/en/apsaradb-for-mybase/latest/what-is-apsaradb-for-mybase#concept-2319911)

## Syntax

```
{
  "Type": "ALIYUN::CDDC::DedicatedHostGroup",
  "Properties": {
    "DiskAllocationRatio": Integer,
    "AllocationPolicy": String,
    "VpcId": String,
    "MemAllocationRatio": Integer,
    "HostReplacePolicy": String,
    "CpuAllocationRatio": Integer,
    "Engine": String,
    "DedicatedHostGroupDesc": String,
    "OpenPermission": String
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

Engine

String

Yes

No

The type of the database engine.

Valid values:

-   MySQL
    
-   SQLServer
    
-   PostgreSQL
    
-   Redis
    

VpcId

String

Yes

No

The ID of the virtual private cloud (VPC) in which the dedicated cluster resides.

None.

AllocationPolicy

String

No

Yes

The policy that you want to use to allocate resources to hosts in the dedicated cluster.

Valid values:

-   Evenly (default): The system preferentially allocates resources to the hosts that does not have resources or have fewer resources allocated. This maximizes system stability.
    
-   Intensively: The system preferentially allocates resources to the hosts that are created earlier and have more resources allocated. This maximizes resource utilization.
    

CpuAllocationRatio

Integer

No

Yes

The CPU overcommit ratio of the dedicated cluster.

Valid values: 100 to 300. Unit: percentage.

Default value: 200. A value of 200 indicates that the total number of CPU resources that can be allocated to instances is twice the number of CPU resources that are provided for the instances. This maximizes resource utilization.

DedicatedHostGroupDesc

String

No

Yes

The name of the dedicated cluster.

The name must be 1 to 64 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). It must start with a letter.

DiskAllocationRatio

Integer

No

Yes

The storage overcommit ratio of the dedicated cluster.

Valid values: 100 to 300. Unit: percentage.

Default value: 200. A value of 200 indicates that the total number of storage resources that can be allocated to instances is twice the number of storage resources that are provided for the instances. This maximizes resource utilization.

HostReplacePolicy

String

No

Yes

The policy that you want to use to handle host failures.

Valid values:

-   Auto (default): The system automatically replaces faulty hosts.
    
-   Manual: You manually replace faulty hosts.
    

**Note**

You can set this property to one of the values based on your business requirements only when your dedicated clusters run the MySQL database engine. You must set this property to Auto when your dedicated clusters run other database engines.

MemAllocationRatio

Integer

No

Yes

The memory overcommit ratio of each host in the dedicated cluster.

Valid values: 0 to 100. Unit: percentage.

Default value: 100.

OpenPermission

String

No

Yes

Specifies whether to enable the feature that allows you to grant the host OS permissions.

Valid values:

-   0
    
-   1 (default)
    

## Return values

Fn::GetAtt

-   DeployType: the instance deployment mode.
    
-   DiskAllocationRatio: the storage overcommit ratio of the host.
    
-   DiskUsedAmount: the used disk size.
    
-   InstanceNumber: the number of instances on the host.
    
-   AllocationPolicy: the policy that is used to allocate resources to hosts in the dedicated cluster.
    
-   HostReplacePolicy: the policy that is used to handle host failures.
    
-   DedicatedHostGroupId: the ID of the dedicated cluster.
    
-   BastionInstanceId: the ID of the primary instance on the host.
    
-   MemAllocatedAmount: the allocated memory size.
    
-   OpenPermission: indicates whether the feature that allows you to grant the host OS permissions is enabled.
    
-   MemAllocateRation: the memory allocation ratio.
    
-   DiskAllocatedAmount: the allocated disk size.
    
-   Engine: the database engine type of the host.
    
-   MemUtility: the memory usage ratio.
    
-   MemAllocationRatio: the memory overcommit ratio of the host.
    
-   CpuAllocateRation: the ratio of requested CPU cores.
    
-   Text: the description of the host.
    
-   MemUsedAmount: the used memory size.
    
-   DedicatedHostGroupDesc: the name of the dedicated cluster to which the hosts belong.
    
-   VpcId: the ID of the VPC in which the dedicated cluster of the hosts resides.
    
-   DiskUtility: the disk usage ratio.
    
-   CpuAllocationRatio: the CPU overcommit ratio of the host.
    
-   DiskAllocateRation: the disk allocation ratio.
    
-   HostNumber: the number of hosts.
    
-   CpuAllocatedAmount: the number of requested CPU cores.
    

## Examples

## YAML format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VpcId:
    Type: String
    Description: VPC ID
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  Engine:
    Type: String
    Description: Database Engine Type
    Default: MySQL
Resources:
  CDDCDedicatedHostGroup:
    Type: ALIYUN::CDDC::DedicatedHostGroup
    Properties:
      VpcId:
        Ref: VpcId
      Engine:
        Ref: Engine
Outputs:
  DeployType:
    Description: DeployType
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - DeployType
  DiskAllocationRatio:
    Description: Disk Allocation Ratio
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - DiskAllocationRatio
  DiskUsedAmount:
    Description: DiskUsedAmount
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - DiskUsedAmount
  InstanceNumber:
    Description: Total Instance Number
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - InstanceNumber
  AllocationPolicy:
    Description: Allocation Policy
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - AllocationPolicy
  HostReplacePolicy:
    Description: Host Replace Policy
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - HostReplacePolicy
  DedicatedHostGroupId:
    Description: Dedicated Host Group ID
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - DedicatedHostGroupId
  BastionInstanceId:
    Description: BastionInstanceId
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - BastionInstanceId
  MemAllocatedAmount:
    Description: MemAllocatedAmount
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - MemAllocatedAmount
  OpenPermission:
    Description: Whether Open OS Permission
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - OpenPermission
  MemAllocateRation:
    Description: MemAllocateRation
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - MemAllocateRation
  DiskAllocatedAmount:
    Description: DiskAllocatedAmount
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - DiskAllocatedAmount
  Engine:
    Description: Database Engine Type
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - Engine
  MemUtility:
    Description: MemUtility
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - MemUtility
  MemAllocationRatio:
    Description: Memory Allocation Ratio
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - MemAllocationRatio
  CpuAllocateRation:
    Description: CpuAllocateRation
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - CpuAllocateRation
  Text:
    Description: Text
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - Text
  MemUsedAmount:
    Description: MemUsedAmount
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - MemUsedAmount
  DedicatedHostGroupDesc:
    Description: Dedicated Host Group Description
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - DedicatedHostGroupDesc
  VpcId:
    Description: VPC ID
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - VpcId
  DiskUtility:
    Description: DiskUtility
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - DiskUtility
  CpuAllocationRatio:
    Description: Cpu Allocation Ratio
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - CpuAllocationRatio
  DiskAllocateRation:
    Description: DiskAllocateRation
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - DiskAllocateRation
  HostNumber:
    Description: Total Host Number
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - HostNumber
  CpuAllocatedAmount:
    Description: CpuAllocatedAmount
    Value:
      Fn::GetAtt:
        - CDDCDedicatedHostGroup
        - CpuAllocatedAmount
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VpcId": {
      "Type": "String",
      "Description": "VPC ID",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "Engine": {
      "Type": "String",
      "Description": "Database Engine Type",
      "Default": "MySQL"
    }
  },
  "Resources": {
    "CDDCDedicatedHostGroup": {
      "Type": "ALIYUN::CDDC::DedicatedHostGroup",
      "Properties": {
        "VpcId": {
          "Ref": "VpcId"
        },
        "Engine": {
          "Ref": "Engine"
        }
      }
    }
  },
  "Outputs": {
    "DeployType": {
      "Description": "DeployType",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "DeployType"
        ]
      }
    },
    "DiskAllocationRatio": {
      "Description": "Disk Allocation Ratio",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "DiskAllocationRatio"
        ]
      }
    },
    "DiskUsedAmount": {
      "Description": "DiskUsedAmount",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "DiskUsedAmount"
        ]
      }
    },
    "InstanceNumber": {
      "Description": "Total Instance Number",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "InstanceNumber"
        ]
      }
    },
    "AllocationPolicy": {
      "Description": "Allocation Policy",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "AllocationPolicy"
        ]
      }
    },
    "HostReplacePolicy": {
      "Description": "Host Replace Policy",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "HostReplacePolicy"
        ]
      }
    },
    "DedicatedHostGroupId": {
      "Description": "Dedicated Host Group ID",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "DedicatedHostGroupId"
        ]
      }
    },
    "BastionInstanceId": {
      "Description": "BastionInstanceId",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "BastionInstanceId"
        ]
      }
    },
    "MemAllocatedAmount": {
      "Description": "MemAllocatedAmount",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "MemAllocatedAmount"
        ]
      }
    },
    "OpenPermission": {
      "Description": "Whether Open OS Permission",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "OpenPermission"
        ]
      }
    },
    "MemAllocateRation": {
      "Description": "MemAllocateRation",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "MemAllocateRation"
        ]
      }
    },
    "DiskAllocatedAmount": {
      "Description": "DiskAllocatedAmount",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "DiskAllocatedAmount"
        ]
      }
    },
    "Engine": {
      "Description": "Database Engine Type",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "Engine"
        ]
      }
    },
    "MemUtility": {
      "Description": "MemUtility",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "MemUtility"
        ]
      }
    },
    "MemAllocationRatio": {
      "Description": "Memory Allocation Ratio",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "MemAllocationRatio"
        ]
      }
    },
    "CpuAllocateRation": {
      "Description": "CpuAllocateRation",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "CpuAllocateRation"
        ]
      }
    },
    "Text": {
      "Description": "Text",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "Text"
        ]
      }
    },
    "MemUsedAmount": {
      "Description": "MemUsedAmount",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "MemUsedAmount"
        ]
      }
    },
    "DedicatedHostGroupDesc": {
      "Description": "Dedicated Host Group Description",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "DedicatedHostGroupDesc"
        ]
      }
    },
    "VpcId": {
      "Description": "VPC ID",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "VpcId"
        ]
      }
    },
    "DiskUtility": {
      "Description": "DiskUtility",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "DiskUtility"
        ]
      }
    },
    "CpuAllocationRatio": {
      "Description": "Cpu Allocation Ratio",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "CpuAllocationRatio"
        ]
      }
    },
    "DiskAllocateRation": {
      "Description": "DiskAllocateRation",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "DiskAllocateRation"
        ]
      }
    },
    "HostNumber": {
      "Description": "Total Host Number",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "HostNumber"
        ]
      }
    },
    "CpuAllocatedAmount": {
      "Description": "CpuAllocatedAmount",
      "Value": {
        "Fn::GetAtt": [
          "CDDCDedicatedHostGroup",
          "CpuAllocatedAmount"
        ]
      }
    }
  }
}
```
