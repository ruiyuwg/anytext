Creates and adds tags to Elastic Compute Service (ECS) resources.

## Operation description

## [](#usage-notes)[](#)Usage notes

Before you add tags to a resource, Alibaba Cloud checks the number of existing tags of the resource. If the maximum number of tags is reached, an error message is returned. For more information, see [Tag limits](/help/en/ecs/user-guide/limitations).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/TagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/TagResources)

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

ecs:TagResources

create

DedicatedHost

`acs:ecs:{#regionId}:{#accountId}:ddh/{#ddhId}`

Disk

`acs:ecs:{#regionId}:{#accountId}:disk/{#diskId}`

NetworkInterface

`acs:ecs:{#regionId}:{#accountId}:eni/{#eniId}`

Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/{#keypairId}`

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}`

ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#reservedinstanceId}`

SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

AutoSnapshotPolicy

`acs:ecs:{#regionId}:{#accountId}:snapshotpolicy/{#SnapshotPolicyId}`

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

The region ID of the resource. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent list of regions.

cn-hangzhou

ResourceType

string

Yes

The type of the resource to which the tags are added. Valid values:

-   instance: ECS instance
-   disk: disk
-   snapshot: snapshot
-   image: image
-   securitygroup: security group
-   volume: storage volume
-   eni: ENI
-   ddh: dedicated host
-   ddhcluster: dedicated host cluster
-   keypair: SSH key pair
-   launchtemplate: launch template
-   reservedinstance
-   snapshotpolicy: automatic snapshot policy
-   elasticityassurance: elasticity assurance
-   capacityreservation: capacity reservation
-   command: Cloud Assistant command
-   invocation: Cloud Assistant command execution result or file delivery result
-   activation: activation code for a Cloud Assistant managed instance
-   managedinstance: Cloud Assistant managed instance

instance

ResourceId

array

Yes

Resource IDs. You can specify up to 50 resource IDs.

string

Yes

The ID of resource N.

r-XXX

Tag

array<object>

Yes

The tags of the reserved instance. You can specify up to 20 tags. If you specify multiple tags, the tag keys cannot be duplicated.\`\`

object

Yes

Tag N.

Key

string

Yes

The tag key cannot be null or an empty string. The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.

TestKey

Value

string

Yes

The value of tag N. The tag value cannot be null and can be an empty string. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`.

TestValue

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

NumberExceed.ResourceIds

The ResourceIds parameter's number is exceed , Valid : 50.

The number of ResourceIds parameters specified exceeds the limit.

400

NumberExceed.Tags

The Tags parameter's number is exceed , Valid : 20.

The number of labels specified exceeds the limit.

400

Duplicate.TagKey

The Tag.N.Key contain duplicate key.

The specified tag key already exists. Tag keys must be unique.

400

InvalidTagKey.Malformed

The specified Tag.n.Key is not valid.

The specified Tag.N.Key parameter is invalid.

400

InvalidTagValue.Malformed

The specified Tag.n.Value is not valid.

The specified tag value is invalid.

400

OperationDenied.QuotaExceed

The quota of tags on resource is beyond permitted range.

The maximum number of tags on resource is exceeded.

400

InvalidTag.Mismatch

The specified Tag.n.Key and Tag.n.Value are not match.

The specified Tag.N.Key and Tag.N.Value parameters do not correspond to each other.

400

InvalidTagCount

The specified tags are beyond the permitted range.

The number of specified tags exceeds the upper limit.

400

Invalid.Scope

The specified scope is invalid.

The specified Scope parameter is invalid.

403

PermissionDenied.TagOwnerBid

The specified operator not have permission to set TagOwnerBid value.

\-

403

PermissionDenied.TagOwnerUid

The specified operator not have permission to set TagOwnerUid value.

You are not authorized to specify the TagOwnerUid parameter.

403

PermissionDenied.Scope

The specified operator not have permission to set Scope value.

You are not authorized to specify the Scope parameter.

403

InvalidResourceId.NotSupported

The specified ResourceId does not support tagging.

The specified resource does not support tagging.

403

NoPermissionKey.Scope

%s

\-

403

NoPermission.Tag

The operator is not permission for the tag.

You are not authorized to manage the tag.

403

QuotaExceed.Tags

%s

The number of specified tags exceeds the upper limit. %s is a variable. An error message is dynamically returned based on call conditions.

403

TagKey.Duplication

The TagKey has duplication with others, case-insensitive.

Duplicate values exist in the specified Tag.N.Key parameter. The value of this parameter is not case sensitive. Check whether duplicate parameter values are passed in.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidRegionId.NotFound

%s

The specified region ID does not exist.

404

MissingParameter.ResourceIds

The parameter - ResourceIds.N should not be null.

\-

404

MissingParameter.TagOwnerUid

The parameter - TagOwnerUid should not be null.

\-

404

MissingParameter.TagOwnerBid

The parameter - TagOwnerBid should not be null.

\-

404

MissingParameter.ResourceType

The parameter - ResourceType should not be null.

The ResourceType parameter is required.

404

MissingParameter.Tags

The parameter - Tags should not be null.

\-

404

MissingParameter.RegionId

The parameter - RegionId should not be null.

\-

404

InvalidResourceId.NotFound

The specified ResourceIds are not found in our records.

The specified resource does not exist. Check whether the ResourceId parameter is correct.

404

InvalidResourceType.NotFound

The ResourceType provided does not exist in our records.

The specified resource type does not exist.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

500

ServiceUnavailable

The service is unavailable, please try again later.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/TagResources?updateTime=2025-04-10#workbench-doc-change-demo)
