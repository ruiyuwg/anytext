Queries information about Elastic Compute Service (ECS) instances in an auto provisioning group.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeAutoProvisioningGroupInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeAutoProvisioningGroupInstances)

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

ecs:DescribeAutoProvisioningGroupInstances

get

\*AutoProvisioningGroup

`acs:ecs:{#regionId}:{#accountId}:autoprovisioninggroup/{#autoprovisioninggroupId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID of the auto provisioning group. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

PageNumber

integer

No

The page number.

Pages start from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries per page.

Valid values: 1 to 100.

Default value: 10.

10

AutoProvisioningGroupId

string

Yes

The ID of the auto provisioning group.

apg-uf6jel2bbl62wh13\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries per page.

10

RequestId

string

The request ID.

B48A12CD-1295-4A38-A8F0-0E92C937\*\*\*\*

PageNumber

integer

The page number.

1

TotalCount

integer

The number of queried instances in the auto provisioning group.

2

Instances

array<object>

The information about the instances in the auto provisioning group.

Instance

object

Status

string

The status of the instance.

Running

CreationTime

string

The time when the instance was created.

2017-12-10T04:04Z

IsSpot

boolean

Indicates whether the instance is a spot instance.

true

CPU

integer

The number of vCPU cores of the instance.

2

InstanceId

string

The instance ID.

i-bp67acfmxazb4p\*\*\*\*

NetworkType

string

The network type of the instance. Valid values:

-   vpc: Virtual Private Cloud (VPC)
-   classic: classic network

vpc

InstanceType

string

The ECS instance type.

ecs.g5.large

RegionId

string

The region ID of the container group.

cn-hangzhou

IoOptimized

boolean

Indicates whether the instance is an I/O optimized instance.

true

OsType

string

The operating system type of the instance. Valid values:

-   windows
-   linux

linux

ZoneId

string

The ID of the zone to which the instance belongs.

cn-hangzhou-g

Memory

integer

The memory capacity of the instance. Unit: MiB.

1024

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "B48A12CD-1295-4A38-A8F0-0E92C937****",
  "PageNumber": 1,
  "TotalCount": 2,
  "Instances": {
    "Instance": [
      {
        "Status": "Running",
        "CreationTime": "2017-12-10T04:04Z",
        "IsSpot": true,
        "CPU": 2,
        "InstanceId": "i-bp67acfmxazb4p****",
        "NetworkType": "vpc",
        "InstanceType": "ecs.g5.large",
        "RegionId": "cn-hangzhou",
        "IoOptimized": true,
        "OsType": "linux",
        "ZoneId": "cn-hangzhou-g",
        "Memory": 1024
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

MissingParameter

The specified parameter "AutoProvisioningGroupId" should not be null.

Elastic Supply Group Id(AutoProvisioningGroupId) must be filled in.

400

MissingParamter.RegionId

The regionId should not be null.

The RegionId parameter is required.

403

Forbidden.RAM

User not authorized to operate on the specified resource, or this API doesn't support RAM.

\-

404

InvalidAutoProvisioningGroupId.NotFound

The specified AutoProvisioningGroupId does not exist.

The specified elastic supply group does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
