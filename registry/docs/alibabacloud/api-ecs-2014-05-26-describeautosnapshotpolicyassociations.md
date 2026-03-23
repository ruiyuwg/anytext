Queries association relationships of automatic snapshot policies.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeAutoSnapshotPolicyAssociations)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeAutoSnapshotPolicyAssociations)

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

ecs:DescribeAutoSnapshotPolicyAssociations

get

\*All Resources

`*`

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

The region ID of the automatic snapshot policy. You can call the [DescribeRegions](https://www.alibabacloud.com/help/zh/ecs/developer-reference/api-ecs-2014-05-26-describeregions?spm=a2c4g.11186623.0.i11) operation to view the latest list of Alibaba Cloud regions.

cn-hangzhou

AutoSnapshotPolicyId

string

No

The ID of the automatic snapshot policy.

-   You can specify only one of AutoSnapshotPolicyId and DiskId.

sp-bp12quk7gqhhuu1f\*\*\*\*

DiskId

string

No

The ID of the disk.

-   You can specify only one of AutoSnapshotPolicyId and DiskId.

d-bp67acfmxazb4p\*\*\*\*

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

MaxResults

integer

No

The number of entries to return on each page. Maximum value: 100.

Default value:

-   If you do not specify this parameter or if you set this parameter to a value that is smaller than 10, the default value is 10.
-   If you set a value greater than 100, the default value is 100.

10

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

NextToken

string

The returned pagination token which can be used in the next request to retrieve a new page of results.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

AutoSnapshotPolicyAssociations

array<object>

The association of automatic snapshot policies.

AutoSnapshotPolicyAssociation

object

The association of the automatic snapshot policy.

AutoSnapshotPolicyId

string

The ID of the automatic snapshot policy.

sp-bp12quk7gqhhuu1f\*\*\*\*

DiskId

string

The ID of the cloud disk.

d-bp67acfmxazb4p\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****",
  "AutoSnapshotPolicyAssociations": {
    "AutoSnapshotPolicyAssociation": [
      {
        "AutoSnapshotPolicyId": "sp-bp12quk7gqhhuu1f****",
        "DiskId": "d-bp67acfmxazb4p****"
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

403

MissingParameter.AutoSnapshotPolicyIdOrDiskId

The AutoSnapshotPolicyId and DiskId parameters cannot both be empty. Please specify one of them.

The AutoSnapshotPolicyId and DiskId parameters cannot both be empty. Please specify one of them.

403

ParameterConflict.AutoSnapshotPolicyIdAndDiskId

The AutoSnapshotPolicyId and DiskId parameters cannot be specified at the same time. You may specify only one of them.

The AutoSnapshotPolicyId and DiskId parameters cannot be specified at the same time. You may specify only one of them.

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

404

InvalidAutoSnapshotPolicyId.NotFound

Specified parameter AutoSnapshotPolicyId not found.

The specified automatic snapshot policy does not exist.

404

InvalidDiskId.NotFound

The specified disk does not exist.

The specified disk does not exist. Check whether the disk ID is correct.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-26

Add Operation

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeAutoSnapshotPolicyAssociations?updateTime=2025-11-26#workbench-doc-change-demo)
