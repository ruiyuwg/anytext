DATASOURCE::CDDC::DedicatedHostGroups is used to query the information about resources in dedicated clusters.

## Syntax

```
{
  "Type": "DATASOURCE::CDDC::DedicatedHostGroups",
  "Properties": {
    "DedicatedHostGroupId": String,
    "Engine": String,
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

No

Yes

The ID of the dedicated cluster.

None.

Engine

String

No

Yes

The database engine type that is used to filter hosts.

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

-   DedicatedHostGroups: details of the dedicated clusters.
    
-   DedicatedHostGroupIds: the IDs of the dedicated clusters.
    

**Property**

**Type**

**Description**

**Constraint**

DedicatedHostGroupIds

List

The IDs of the dedicated clusters.

None.

DedicatedHostGroups

List

Details of the dedicated clusters.

None.

DiskUtility

String

The disk usage rate.

None.

Category

String

The type of the dedicated cluster.

None.

Text

String

The description of the host.

None.

VpcId

String

The ID of the virtual private cloud (VPC) in which the dedicated cluster of the host resides.

None.

MemAllocationRatio

String

The memory overcommit ratio of the host.

None.

DeployType

String

The method that is used to deploy instances.

None.

DiskAllocatedAmount

String

The allocated disk size.

None.

HostNumber

String

The number of hosts.

None.

DiskUsedAmount

String

The used disk size.

None.

DedicatedHostGroupDesc

String

The name of the dedicated cluster to which the host belongs.

None.

MemUsedAmount

String

The used memory size.

None.

Engine

String

The database engine type of the host.

None.

BastionInstanceId

String

The ID of the primary instance that is deployed on the host.

None.

InstanceNumber

String

The number of instances that are deployed on the host.

None.

MemAllocateRation

String

The memory allocation rate.

None.

CreateTime

String

The timestamp that indicates when the dedicated cluster was created.

None.

DiskAllocationRatio

String

The storage overcommit ratio of the host.

None.

CpuAllocationRatio

String

The CPU overcommit ratio of the host.

None.

AllocationPolicy

String

The policy that is used to allocate resources on the host.

None.

DedicatedHostCountGroupByHostType

String

The storage type of the host in the dedicated cluster.

None.

MemAllocatedAmount

String

The allocated memory size.

None.

DiskAllocateRation

String

The disk allocation rate.

None.

OpenPermission

String

The OS permissions on the host.

None.

MemUtility

String

The memory usage rate.

None.

CpuAllocatedAmount

String

The allocated CPU cores.

None.

CpuAllocateRation

String

The CPU allocation rate.

None.

DedicatedHostGroupId

String

The ID of the dedicated cluster.

None.

ZoneIdList

String

The zones to which the hosts of the dedicated cluster belong.

None.

HostReplacePolicy

String

The policy that is used to handle host faults.

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DedicatedHostGroupId:
    Description: Dedicated Host Group ID.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      DedicatedHostGroupId:
        Ref: DedicatedHostGroupId
    Type: DATASOURCE::CDDC::DedicatedHostGroups
Outputs:
  DedicatedHostGroupIds:
    Description: The list of dedicated host group IDs.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DedicatedHostGroupIds
  DedicatedHostGroups:
    Description: The list of dedicated host groups.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DedicatedHostGroups
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DedicatedHostGroupId": {
      "Type": "String",
      "Description": "Dedicated Host Group ID."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CDDC::DedicatedHostGroups",
      "Properties": {
        "DedicatedHostGroupId": {
          "Ref": "DedicatedHostGroupId"
        }
      }
    }
  },
  "Outputs": {
    "DedicatedHostGroups": {
      "Description": "The list of dedicated host groups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DedicatedHostGroups"
        ]
      }
    },
    "DedicatedHostGroupIds": {
      "Description": "The list of dedicated host group IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DedicatedHostGroupIds"
        ]
      }
    }
  }
}
```
