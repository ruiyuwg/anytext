DATASOURCE::CDDC::DedicatedHostGroup is used to query the information about a dedicated cluster.

## Syntax

```
{
  "Type": "DATASOURCE::CDDC::DedicatedHostGroup",
  "Properties": {
    "DedicatedHostGroupId": String,
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

DedicatedHostGroupId

String

Yes

Yes

The ID of the dedicated cluster.

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

-   DeployType: the instance deployment mode.
    
-   DiskAllocationRatio: the storage overcommit ratio of the host.
    
-   DiskUsedAmount: the used disk size.
    
-   InstanceNumber: the number of instances on the host.
    
-   AllocationPolicy: the policy that is used to allocate host resources.
    
-   Category: the type of the dedicated cluster to which hosts belong.
    
-   HostReplacePolicy: the policy that is used to handle host failures.
    
-   DedicatedHostGroupId: the ID of the dedicated cluster to which hosts belong.
    
-   BastionInstanceId: the ID of the primary instance on the host.
    
-   MemAllocatedAmount: the allocated memory size.
    
-   ZoneIdList: the zones of the hosts.
    
-   OpenPermission: the OS permissions on the host.
    
-   MemAllocateRation: the memory allocation ratio.
    
-   DiskAllocatedAmount: the allocated disk size.
    
-   Engine: the database engine type of the host.
    
-   MemUtility: the memory usage ratio.
    
-   MemAllocationRatio: the memory overcommit ratio of the host.
    
-   CpuAllocateRation: the CPU allocation ratio.
    
-   CreateTime: the time when the host was created.
    
-   Text: the description of the host.
    
-   MemUsedAmount: the used memory size.
    
-   DedicatedHostGroupDesc: the name of the dedicated cluster to which hosts belong.
    
-   VpcId: the ID of the virtual private cloud (VPC) in which the dedicated host resides.
    
-   DiskUtility: the disk usage ratio.
    
-   CpuAllocationRatio: the CPU overcommit ratio of the host.
    
-   DiskAllocateRation: the disk allocation ratio.
    
-   HostNumber: the number of hosts.
    
-   CpuAllocatedAmount: the number of requested CPU cores.
    
-   DedicatedHostCountGroupByHostType: the number of hosts by storage type.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DedicatedHostGroupId:
    Type: String
    Description:
      en: Dedicated Host Group ID.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::CDDC::DedicatedHostGroup
    Properties:
      DedicatedHostGroupId:
        Ref: DedicatedHostGroupId
Outputs:
  DeployType:
    Description: DeployType.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DeployType
  DiskAllocationRatio:
    Description: Disk Allocation Ratio.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DiskAllocationRatio
  DiskUsedAmount:
    Description: DiskUsedAmount.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DiskUsedAmount
  InstanceNumber:
    Description: Total Instance Number.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceNumber
  AllocationPolicy:
    Description: Allocation Policy.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AllocationPolicy
  Category:
    Description: The dedicated cluster family to which the host belongs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Category
  HostReplacePolicy:
    Description: Host Replace Policy.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HostReplacePolicy
  DedicatedHostGroupId:
    Description: Dedicated Host Group ID.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DedicatedHostGroupId
  BastionInstanceId:
    Description: BastionInstanceId.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - BastionInstanceId
  MemAllocatedAmount:
    Description: MemAllocatedAmount.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MemAllocatedAmount
  ZoneIdList:
    Description: ZoneIDList.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ZoneIdList
  OpenPermission:
    Description: Whether Open OS Permission.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - OpenPermission
  MemAllocateRation:
    Description: MemAllocateRation.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MemAllocateRation
  DiskAllocatedAmount:
    Description: DiskAllocatedAmount.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DiskAllocatedAmount
  Engine:
    Description: Database Engine Type.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Engine
  MemUtility:
    Description: MemUtility.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MemUtility
  MemAllocationRatio:
    Description: Memory Allocation Ratio.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MemAllocationRatio
  CpuAllocateRation:
    Description: CpuAllocateRation.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CpuAllocateRation
  CreateTime:
    Description: Create Time.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  Text:
    Description: Text.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Text
  MemUsedAmount:
    Description: MemUsedAmount.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MemUsedAmount
  DedicatedHostGroupDesc:
    Description: Dedicated Host Group Description.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DedicatedHostGroupDesc
  VpcId:
    Description: VPC ID.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VpcId
  DiskUtility:
    Description: DiskUtility.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DiskUtility
  CpuAllocationRatio:
    Description: Cpu Allocation Ratio.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CpuAllocationRatio
  DiskAllocateRation:
    Description: DiskAllocateRation.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DiskAllocateRation
  HostNumber:
    Description: Total Host Number.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - HostNumber
  CpuAllocatedAmount:
    Description: CpuAllocatedAmount.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CpuAllocatedAmount
  DedicatedHostCountGroupByHostType:
    Description: DedicatedHostCountGroupByHostType.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DedicatedHostCountGroupByHostType
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DedicatedHostGroupId": {
      "Type": "String",
      "Description": {
        "en": "Dedicated Host Group ID."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CDDC::DedicatedHostGroup",
      "Properties": {
        "DedicatedHostGroupId": {
          "Ref": "DedicatedHostGroupId"
        }
      }
    }
  },
  "Outputs": {
    "DeployType": {
      "Description": "DeployType.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DeployType"
        ]
      }
    },
    "DiskAllocationRatio": {
      "Description": "Disk Allocation Ratio.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DiskAllocationRatio"
        ]
      }
    },
    "DiskUsedAmount": {
      "Description": "DiskUsedAmount.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DiskUsedAmount"
        ]
      }
    },
    "InstanceNumber": {
      "Description": "Total Instance Number.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceNumber"
        ]
      }
    },
    "AllocationPolicy": {
      "Description": "Allocation Policy.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AllocationPolicy"
        ]
      }
    },
    "Category": {
      "Description": "The dedicated cluster family to which the host belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Category"
        ]
      }
    },
    "HostReplacePolicy": {
      "Description": "Host Replace Policy.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HostReplacePolicy"
        ]
      }
    },
    "DedicatedHostGroupId": {
      "Description": "Dedicated Host Group ID.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DedicatedHostGroupId"
        ]
      }
    },
    "BastionInstanceId": {
      "Description": "BastionInstanceId.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "BastionInstanceId"
        ]
      }
    },
    "MemAllocatedAmount": {
      "Description": "MemAllocatedAmount.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MemAllocatedAmount"
        ]
      }
    },
    "ZoneIdList": {
      "Description": "ZoneIDList.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ZoneIdList"
        ]
      }
    },
    "OpenPermission": {
      "Description": "Whether Open OS Permission.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "OpenPermission"
        ]
      }
    },
    "MemAllocateRation": {
      "Description": "MemAllocateRation.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MemAllocateRation"
        ]
      }
    },
    "DiskAllocatedAmount": {
      "Description": "DiskAllocatedAmount.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DiskAllocatedAmount"
        ]
      }
    },
    "Engine": {
      "Description": "Database Engine Type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Engine"
        ]
      }
    },
    "MemUtility": {
      "Description": "MemUtility.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MemUtility"
        ]
      }
    },
    "MemAllocationRatio": {
      "Description": "Memory Allocation Ratio.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MemAllocationRatio"
        ]
      }
    },
    "CpuAllocateRation": {
      "Description": "CpuAllocateRation.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CpuAllocateRation"
        ]
      }
    },
    "CreateTime": {
      "Description": "Create Time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "Text": {
      "Description": "Text.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Text"
        ]
      }
    },
    "MemUsedAmount": {
      "Description": "MemUsedAmount.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MemUsedAmount"
        ]
      }
    },
    "DedicatedHostGroupDesc": {
      "Description": "Dedicated Host Group Description.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DedicatedHostGroupDesc"
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
    "DiskUtility": {
      "Description": "DiskUtility.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DiskUtility"
        ]
      }
    },
    "CpuAllocationRatio": {
      "Description": "Cpu Allocation Ratio.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CpuAllocationRatio"
        ]
      }
    },
    "DiskAllocateRation": {
      "Description": "DiskAllocateRation.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DiskAllocateRation"
        ]
      }
    },
    "HostNumber": {
      "Description": "Total Host Number.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HostNumber"
        ]
      }
    },
    "CpuAllocatedAmount": {
      "Description": "CpuAllocatedAmount.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CpuAllocatedAmount"
        ]
      }
    },
    "DedicatedHostCountGroupByHostType": {
      "Description": "DedicatedHostCountGroupByHostType.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DedicatedHostCountGroupByHostType"
        ]
      }
    }
  }
}
                        
```
