Queries the information about the private pools that Elastic Compute Service (ECS) instances match.

## Operation description

## [](#usage-notes)[](#)Usage notes

After an elasticity assurance or a capacity reservation is created, a private pool is generated and associated with information about the instances that are created by using the private pool. You can specify a private pool when you create an instance. This way, the instance matches the elasticity assurance or capacity reservation that is associated with the private pool.

When a private pool expires, data related to the association between instances and the private pool becomes invalid. If you call this operation to query information about the private pool, empty values are returned.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceAttachmentAttributes)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceAttachmentAttributes)

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

ecs:DescribeInstanceAttachmentAttributes

get

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

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

The region ID of the elasticity assurance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceIds

string

Yes

The IDs of the instances. The value can be a JSON array that consists of up to 100 instance IDs. Separate the IDs with commas (,).

\["i-bp67acfmxazb4\*\*\*\*", "i-bp67acfmxazb5\*\*\*\*", "i-bp67acfmxazb6\*\*\*\*"\]

PageNumber

integer

No

The page number.

Page starts from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries per page.

Valid values: 1 to 100.

Default value: 10.

10

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

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of entries returned.

1

Instances

array<object>

The information about the association between private pools and instances.

Instance

object

The information about the association between the private pool and the instance.

InstanceId

string

The ID of the instance.

i-bp67acfmxazb4\*\*\*\*

PrivatePoolOptionsMatchCriteria

string

The match mode of the private pool. Valid values:

-   Open: open private pool. Instances automatically match an open private pool.
-   Target: specified private pool. Instances match a specified private pool.
-   None: no private pool. Instances do not use private pools.

Open

PrivatePoolOptionsId

string

The ID of the private pool. If the value of `PrivatePoolOptionsMatchCriteria` is `Open`, the value of PrivatePoolOptionsId is the ID of the private pool that is automatically matched to the instance.

eap-bp67acfmxazb4\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 1,
  "Instances": {
    "Instance": [
      {
        "InstanceId": "i-bp67acfmxazb4****",
        "PrivatePoolOptionsMatchCriteria": "Open",
        "PrivatePoolOptionsId": "eap-bp67acfmxazb4****"
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

MissingParameter.RegionId

The specified RegionId should not be null.

The RegionId parameter is required.

400

DedicatedHostNotSupported

DedicatedHost is not supported for PrivatePool.

The private pool does not support dedicated hosts.

400

SpotNotSupported

Spot is not supported for PrivatePool.

The private pool does not support spot instances.

400

ClassicNetworkNotSupported

Classic network is not supported for PrivatePool.

The private pool does not support instances in the classic network.

400

Invalid.InstanceId

Instance does not exist.

The specified instance does not exist.

400

Invalid.PrivatePoolOptions.MatchCriteria

Target mode does not support this operation.

The operation is not supported while the PrivatePoolOptions.MatchCriteria parameter is set to Target.

400

MissingParameter.PrivatePoolOptions.Id

The specified PrivatePoolOptions.Id should not be null.

The PrivatePoolOptions.Id parameter is required.

400

Invalid.PrivatePoolOptions.Id

The PrivatePool does not exist.

The private pool does not exist.

400

Invalid.InstanceType

The InstanceType does not match the PrivatePool.

The instance type and the private pool do not match.

400

Invalid.InstanceChargeType

The InstanceChargeType does not match the PrivatePool.

The instance billing method and the private pool do not match.

400

Invalid.ZoneId

The ZoneId does not match the PrivatePool.

The zone and the private pool do not match.

400

Invalid.PrivatePoolOptions.status

The PrivatePool has been used up.

The resource is exhausted.

400

Invalid.PrivatePoolOptions.MatchCriteria

The PrivatePoolOptions.MatchCriteria does not match the PrivatePool.

The specified PrivatePoolOptions.MatchCriteria parameter does not match the private pool.

400

InvalidPlatform.ValueNotSupported

The Platform does not match the PrivatePool.

The specified Platform parameter does not match the private pool.

400

Invalid.PrivatePoolOptions.status

The PrivatePool is expired or inactive.

The private pool has expired or is not activated.

400

Invalid.PrivatePoolOptions.status

The PrivatePool status is not valid.

The specified private pool state is incorrect.

400

Invalid.PrivatePoolOptions.status

The Instance should be created within 48 hours once the PrivatePool is started.

The Instance should be created within 48 hours once the PrivatePool is started.

400

InvalidAliUid

The PrivatePool does not belong to the user of the Instance.

The specified private pool does not belong to the user who attempted to create the instance.

400

Invalid.InstanceId

The Instance dose not attached to a PrivatePool.

The instance and the private pool do not match.

400

MissingParameter.PackageType

The specified parameter "PackageType" can not be empty.

\-

400

MissingParameter.PrivatePoolOptions.Ids

The specified parameter "PrivatePoolOptions.Ids" can not be empty.

Specifies that the parameter "PrivatePoolOptions.ids" cannot be empty.

400

MissingParameter.PrivatePoolOptions.Id

The specified parameter "PrivatePoolOptions.Id" can not be empty.

The specified parameter PrivatePoolOptions.Id cannot be empty.

400

MissingParameter.InstanceCpuCoreCount

The specified parameter "InstanceCpuCoreCount" can not be empty.

The specified parameter 'InstanceCpuCocount' cannot be empty.

400

MissingParameter.InstanceAmount

The specified parameter "InstanceAmount" can not be empty.

The specified parameter InstanceAmount cannot be empty.

400

MissingParameter.InstanceCpuCoreCountOrInstanceAmount

The specified parameter "InstanceCpuCoreCount" and "InstanceAmount" must not be empty at the same time.

The specified parameter InstanceCpuCoreCount and InstanceAmount cannot be both empty.

400

Invalid.TooManyPrivatePoolOptions.Ids

Too many PrivatePoolOptions.Ids in this request.

The number of specified private pool IDs exceeds the upper limit.

400

Invalid.TooManyZoneIds

Too many ZoneIds in the request.

The number of specified zone IDs exceeds the upper limit.

400

Invalid.TooManyInstanceTypes

Too many InstanceTypes in the request.

The number of specified instance types exceeds the upper limit.

400

Invalid.TooManyUnpaidPrivatePool

Too many PrivatePools create but still unpaid.

Multiple private pools are created but not paid.

400

Invalid.InstanceCpuCoreCountOrInstanceAmount

Both InstanceCpuCoreCount and InstanceAmount are provided.

The InstanceCpuCoreCount and InstanceAmount parameters cannot be both specified.

400

Invalid.PrivatePoolOptions.Ids

The specified parameter "PrivatePoolOptions.Ids" exist invalid element Id.

The specified private pool ID does not exist.

400

Invalid.PackageType

The specified parameter "PackageType" is invalid.

The specified parameter PackageType is invalid.

400

Invalid.PrivatePool.Purchase

The PrivatePool has already paid.

The private pool is already paid.

400

Invalid.AssuranceTimes.NotSupported

The value of AssuranceTimes is not supported.

The specified AssuranceTimes parameter is invalid.

400

Invalid.TooManyInstanceTypes

The specified parameter "InstanceType" should only has one item.

The specified parameter InstanceType can have only one entry.

400

Invalid.PrivatePoolOptions.MatchCriteria

The specified parameter "PrivatePoolOptions.MatchCriteria" is invalid.

The specified parameter PrivatePoolOptions.MatchCriteria is invalid.

400

RepeatStartPrivatePool

PrivatePool has already been started.

The private pool is already started.

400

Invalid.PrivatePoolOptions.Id

The specified parameter "PrivatePoolOptions.Id" should be empty.

Specifies that the parameter PrivatePoolOptions.Id should be empty.

400

Invalid.InstanceId

Modify DedicatedHost Instance's attachment attributes is not supported.

Modify DedicatedHost Instance's attachment attributes is not supported.

400

Invalid.InstanceId

Modify Spot Instance's attachment attributes is not supported.

Modify Spot Instance's attachment attributes is not supported.

400

Invalid.InstanceId

Modify Classic Network Instance's attachment attributes is not supported.

Modify Classic Network Instance's attachment attributes is not supported.

403

InvalidParameter.TooManyInstanceIds

Instance ids cannot be more than 100.

InstanceIds cannot be more than 100.

403

Abs.InvalidInstanceIds.MalFormed

The specified InstanceIds is not valid.

\-

404

InvalidInstanceIds.NotFound

The specified InstanceIds does not exist.

The specified InstanceId parameter does not exist. You can call the DescribeInstances operation to query the state of the instance.

500

InvalidParameter

Invalid parameters.

\-

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-27

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceAttachmentAttributes?updateTime=2025-02-27#workbench-doc-change-demo)
