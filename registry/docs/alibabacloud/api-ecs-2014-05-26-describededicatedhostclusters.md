Queries the details of one or more dedicated host groups.

## Operation description

## [](#usage-notes)[](#)Usage notes

You can specify multiple request parameters to filter query results. Specified request parameters have logical AND relations. Only the specified parameters are included in the filter conditions. However, if `DedicatedHostClusterIds` is set to an empty JSON array (`[]`), this parameter is regarded as a valid filter condition and an empty result is returned.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDedicatedHostClusters)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDedicatedHostClusters)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

ecs:DescribeDedicatedHostClusters

get

DedicatedHostCluster

`acs:ecs:{#regionId}:{#accountId}:ddhcluster/{#ddhclusterId}`

DedicatedHostCluster

`acs:ecs:{#regionId}:{#accountId}:ddhcluster/*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

Status

string

No

**Note** This parameter is unavailable for use.

null

LockReason

string

No

**Note** This parameter is unavailable for use.

null

ResourceGroupId

string

No

The resource group ID of the host group. You can use a resource group ID to filter no more than 1,000 host groups.

**Note** A default resource group is not supported.

rg-bp67acfmxazb4p\*\*\*\*

Tag

array<object>

No

The tags of the host group.

object

No

The tags of the host group.

Key

string

No

The tag key. Valid values of N: 1 to 20. The tag key cannot be an empty string. It can be up to 64 characters in length, and can neither contain `http://` or `https://` nor `acs:` or `aliyun`.

You can filter no more than 1,000 host groups, regardless of how many tags are used. To query more than 1,000 host groups, call the [ListTagResources](/help/en/ecs/api-listtagresources) API operation.

TestKey

Value

string

No

The tag value. Valid values of N: 1 to 20. The tag value cannot be an empty string. It can be up to 64 characters in length and cannot contain `http://` or `https://`.

TestValue

RegionId

string

Yes

The region ID of the host group. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ZoneId

string

No

The zone ID of the host group. You can call the [DescribeZones](/help/en/ecs/api-describezones) operation to query the most recent zone list.

cn-hangzhou-f

DedicatedHostClusterIds

string

No

The list of host group IDs. The value can be a JSON array consisting of multiple IDs in the `["dc-xxxxxxxxx", "dc-yyyyyyyyy",..., "dc-zzzzzzzzz"]` format. Separate the IDs with commas (,).

\["dc-bp12wlf6am0vz9v2\*\*\*\*", "dc-bp12wlf6am0vz9v3\*\*\*\*"\]

DedicatedHostClusterName

string

No

The name of the host group.

myDDHCluster

PageNumber

integer

No

The page number.

Pages start from page 1.

Default value: 1

1

PageSize

integer

No

The number of entries to return on each page.

Valid values: 1 to 100.

Default value: 10.

5

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries per page.

5

RequestId

string

The request ID.

214A2187-B06F-4E49-A081-4D053466A8C7

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of dedicated host clusters.

2

DedicatedHostClusters

array<object>

An array consisting of host group information.

DedicatedHostCluster

object

Description

string

The description of the host group.

This-is-my-DDHCluster

DedicatedHostClusterId

string

The ID of the host group.

dc-bp12wlf6am0vz9v2\*\*\*\*

ResourceGroupId

string

The resource group ID of the host group.

rg-bp67acfmxazb4p\*\*\*\*

ZoneId

string

The zone ID of the host group.

cn-hangzhou-f

RegionId

string

The region ID of the host group.

cn-hangzhou

DedicatedHostClusterName

string

The name of the host group.

myDDHCluster

Tags

array<object>

The tags of the host group.

Tag

object

TagValue

string

The tag value.

TestValue

TagKey

string

The tag key.

TestKey

DedicatedHostIds

array

The IDs of dedicated hosts in the host group.

DedicatedHostId

string

The ID of the dedicated host.

\["dh-bp181e5064b5sotr\*\*\*\*","dh-bp18064b5sotrr9c\*\*\*\*"\]

DedicatedHostClusterCapacity

object

The capacity of the host group.

AvailableVcpus

integer

The number of available vCPUs.

2

AvailableMemory

integer

The size of available memory. Unit: GiB

4

TotalMemory

integer

The total memory size. Unit: GiB

8

TotalVcpus

integer

The total number of vCPUs.

4

LocalStorageCapacities

array<object>

The local storage capacity.

LocalStorageCapacity

object

DataDiskCategory

string

The category of data disks. Valid values:

-   cloud: basic disk
-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD
-   ephemeral\_ssd: local SSD
-   cloud\_essd: Enterprise SSD (ESSD)

cloud

AvailableDisk

integer

The available capacity of the local disk. Unit: GiB

20

TotalDisk

integer

The total capacity of the local disk. Unit: GiB

40

AvailableInstanceTypes

array<object>

The available capacity of ECS instances in the host group.

AvailableInstanceType

object

InstanceType

string

The ECS instance type.

ecs.c6.26xlarge

AvailableInstanceCapacity

integer

The available capacity of the ECS instance type.

0

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 5,
  "RequestId": "214A2187-B06F-4E49-A081-4D053466A8C7",
  "PageNumber": 1,
  "TotalCount": 2,
  "DedicatedHostClusters": {
    "DedicatedHostCluster": [
      {
        "Description": "This-is-my-DDHCluster",
        "DedicatedHostClusterId": "dc-bp12wlf6am0vz9v2****",
        "ResourceGroupId": "rg-bp67acfmxazb4p****",
        "ZoneId": "cn-hangzhou-f",
        "RegionId": "cn-hangzhou",
        "DedicatedHostClusterName": "myDDHCluster",
        "Tags": {
          "Tag": [
            {
              "TagValue": "TestValue",
              "TagKey": "TestKey"
            }
          ]
        },
        "DedicatedHostIds": {
          "DedicatedHostId": [
            [
              "dh-bp181e5064b5sotr****",
              "dh-bp18064b5sotrr9c****"
            ]
          ]
        },
        "DedicatedHostClusterCapacity": {
          "AvailableVcpus": 2,
          "AvailableMemory": 4,
          "TotalMemory": 8,
          "TotalVcpus": 4,
          "LocalStorageCapacities": {
            "LocalStorageCapacity": [
              {
                "DataDiskCategory": "cloud",
                "AvailableDisk": 20,
                "TotalDisk": 40
              }
            ]
          },
          "AvailableInstanceTypes": {
            "AvailableInstanceType": [
              {
                "InstanceType": "ecs.c6.26xlarge",
                "AvailableInstanceCapacity": 0
              }
            ]
          }
        }
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParamter.RegionId

The regionId should not be null.

The RegionId parameter is required.

400

InvalidParameter.DedicatedHostClusterIds

The specified parameter dedicatedHostClusterIds is not valid.

\-

400

InvalidRegion.NotFound

The specified parameter RegionId is not valid.

The specified RegionId parameter is invalid.

400

InvalidZone.NotFound

The specified parameter ZoneId is not valid.

The specified ZoneId parameter is invalid.

403

InvalidDedicatedHostIds.Malformed

The amount of specified dedicatedHostClusterIds exceeds the limit.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDedicatedHostClusters?updateTime=2025-02-20#workbench-doc-change-demo)
