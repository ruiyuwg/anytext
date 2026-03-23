Removes tags from Elastic Compute Service (ECS) resources. After a tag is removed from a resource, the tag is automatically deleted if it is not added to other resources.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/UntagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/UntagResources)

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

ecs:UntagResources

delete

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

ReservedInstance

`acs:ecs:{#regionId}:{#accountId}:reservedinstance/{#reservedinstanceId}`

SecurityGroup

`acs:ecs:{#regionId}:{#accountId}:securitygroup/{#securitygroupId}`

Snapshot

`acs:ecs:{#regionId}:{#accountId}:snapshot/{#snapshotId}`

LaunchTemplate

`acs:ecs:{#regionId}:{#accountId}:launchtemplate/{#launchtemplateId}`

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

The region ID of the resource. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceType

string

Yes

The type of the resource. Valid values:

-   instance: ECS instance
-   disk: disk
-   snapshot: snapshot
-   image: image
-   securitygroup: security group
-   volume: storage volume
-   eni: elastic network interface (ENI)
-   ddh: dedicated host
-   ddhcluster: dedicated host cluster
-   keypair: SSH key pair
-   launchtemplate: launch template
-   reservedinstance: reserved instance
-   snapshotpolicy: automatic snapshot policy
-   elasticityassurance: elasticity assurance
-   capacityreservation: capacity reservation
-   command: Cloud Assistant command
-   invocation: Cloud Assistant command execution result

instance

All

boolean

No

Specifies whether to remove all tags from the resource. This parameter takes effect only if you do not specify TagKey.N. Valid values:

-   true
-   false

Default value: false.

false

ResourceId

array

Yes

The resource IDs. Valid values of N: 1 to 50.

string

Yes

The ID of resource N.

i-bp67acfmxazb4ph\*\*\*\*

TagKey

array

No

The tag keys. Valid values of N: 1 to 20.

string

No

The key of tag N.

TestKey

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

C46FF5A8-C5F0-4024-8262-B16B639225A0

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "C46FF5A8-C5F0-4024-8262-B16B639225A0"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

NumberExceed.ResourceIds

The ResourceIds parameter's number is exceed , Valid : 50

\-

400

NumberExceed.Tags

The Tags parameter's number is exceed , Valid : 20

\-

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

Param.Conflict

The specified all is true, but the specified TagKey.N is not empty.

\-

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

The parameter - ResourceIds.N should not be null

\-

404

MissingParameter.TagOwnerUid

The parameter - TagOwnerUid should not be null

The TagOwnerUid parameter is required.

404

MissingParameter.TagOwnerBid

The parameter - TagOwnerBid should not be null

The TagOwnerBid parameter is required.

404

MissingParameter.ResourceType

The parameter - ResourceType should not be null

\-

404

MissingParameter.Tags

The parameter - Tags should not be null

The tag-related parameters are required.

404

MissingParameter.RegionId

The parameter - RegionId should not be null

The RegionId parameter is required.

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

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
