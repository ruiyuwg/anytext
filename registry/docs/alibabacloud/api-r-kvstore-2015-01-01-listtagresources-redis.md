Queries the relationships between Tair (Redis OSS-compatible) instances and tags.

## Operation description

You can also query the relationships between instances and tags in the Tair (Redis OSS-compatible) console. For more information, see [Filter Tair (Redis OSS-compatible) instances by tag](/help/en/redis/user-guide/filter-apsaradb-for-redis-instances-by-tag) and [View tags bound to an instance](/help/en/redis/view-the-tags-that-are-added-to-an-apsaradb-for-redis-instance).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ListTagResources)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ListTagResources)

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

kvstore:ListTagResources

get

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/*`

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

The region ID of the instance.

cn-hangzhou

ResourceType

string

Yes

The resource type. Set the value to **INSTANCE**.

INSTANCE

NextToken

string

No

The token used to start the next query to retrieve more results.

**Note** This parameter is not required in the first query. If not all results are returned in one query, you can specify the **NextToken** value returned for the query to perform the next query.

212db86sca4384811e0b5e8707ec2\*\*\*\*

ResourceId

array

No

The IDs of the instances.

**Note**-   You must specify this parameter or the **Tag** parameter.

string

No

The ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

Tag

array<object>

No

The tags of the instance. You must specify this parameter or the **ResourceId** parameter.

object

No

Key

string

No

The keys of the tags associated with the instances you want to query.

demokey

Value

string

No

The values of the tags associated with the instances you want to query.

demovalue

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

NextToken

string

The token required to obtain more results. If a query does not return all results, in the next query, you can provide the token returned by the previous query to obtain more results.

212db86sca4384811e0b5e8707ec2\*\*\*\*

RequestId

string

The ID of the request.

47A514A1-4B77-4E30-B4C5-2A880650\*\*\*\*

TagResources

array<object>

Details about the instances and tags.

TagResource

object

The tag that is added to the instance.

TagValue

string

The values of the tags.

demovalue

ResourceType

string

The resource type. The return value is **ALIYUN::KVSTORE::INSTANCE**. This value indicates a Tair (Redis OSS-compatible) instance.

ALIYUN::KVSTORE::INSTANCE

ResourceId

string

The resource ID, which is also the ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

TagKey

string

The keys of the tags.

demokey

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "212db86sca4384811e0b5e8707ec2****",
  "RequestId": "47A514A1-4B77-4E30-B4C5-2A880650****",
  "TagResources": {
    "TagResource": [
      {
        "TagValue": "demovalue",
        "ResourceType": "ALIYUN::KVSTORE::INSTANCE",
        "ResourceId": "r-bp1zxszhcgatnx****",
        "TagKey": "demokey"
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

InvalidTagKey.Malformed

The specified parameter Tag.n.Key or TagKey.n is not valid.

\-

400

InvalidTagValue.Malformed

The specified parameter Tag.n.Value is not valid.

\-

400

InvalidParameter.ResourceId

The specified parameter ResourceId.n is not valid.

\-

400

MissParameter.TagOrResourceId

The parameter Tag.n or ResourceId.n is needed.

The parameters Tag and ResourceId cannot all be empty. At least one of them is passed in.

400

InvalidParameter.Scope

The specified parameter Scope is not valid.

\-

400

NumberExceed.ResourceIds

The ResourceIds parameter number is exceed.

\-

400

NumberExceed.Tags

The Tags parameter number is exceed.

\-

400

Duplicate.TagKey

The specified parameter Tag.n.Key is duplicated.

\-

400

InvalidParameter.ResourceType

The specified parameter ResourceType is not valid.

\-

404

InvalidDbInstanceId.NotFound

Specified instance does not exist.

The specified instance does not exist

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ListTagResources?updateTime=2025-03-25#workbench-doc-change-demo)
