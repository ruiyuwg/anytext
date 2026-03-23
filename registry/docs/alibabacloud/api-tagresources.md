Adds tags to an AnalyticDB for MySQL cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/adb/2019-03-15/TagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/adb/2019-03-15/TagResources)

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

adb:TagResources

create

DBCluster

`acs:adb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

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

The region ID of the cluster. You can call the [DescribeRegions](/help/en/analyticdb-for-mysql/api-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceType

string

Yes

The type of the cluster. Set the value to **ALIYUN::ADB::CLUSTER**.

ALIYUN::ADB::CLUSTER

ResourceId

array

Yes

The ID of the cluster to which to add a tag. If you want to add a tag to multiple clusters, click **Add** and enter the cluster IDs.

**Note**

-   You can add tags to up to 50 clusters at a time.
    
-   You can call the [DescribeDBClusters](/help/en/analyticdb-for-mysql/api-describedbclusters) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
    

string

Yes

The ID of the cluster to which to add a tag. If you want to add a tag to multiple clusters, click **Add** and enter the cluster IDs.

**Note**

-   You can add tags to up to 50 clusters at a time.
    
-   You can call the [DescribeDBClusters](/help/en/analyticdb-for-mysql/api-describedbclusters) operation to query the information about all AnalyticDB for MySQL clusters within a region, including cluster IDs.
    

am-bp1gfds6a32s9\*\*\*\*

Tag

array<object>

Yes

The tags to add to the cluster.

object

Yes

The information about the array object.

Key

string

No

The key of the tag. If you want to add multiple tags to a single cluster at a time, click **Add** and enter tag keys and values.

**Note** You can add up to 20 tags at a time.

testkey1

Value

string

No

The value of the tag. If you want to add multiple tags to a single cluster at a time, click **Add** and enter tag keys and values.

**Note** You can add up to 20 tags at a time.

testvalue1

## Response parameters

Parameter

Type

Description

Example

object

The tags.

RequestId

string

The request ID.

863D51B7-5321-41D8-A0B6-A088B0450EFD

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "863D51B7-5321-41D8-A0B6-A088B0450EFD"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/adb/2019-03-15/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
