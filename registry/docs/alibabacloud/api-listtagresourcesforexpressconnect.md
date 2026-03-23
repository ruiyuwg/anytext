Queries the tags that are added to an Express Connect circuit.

## Operation description

## [](#)[](#)

-   If you want to query a specific object, you must specify **ResourceId.N** or **Tag.N** that consists of **Tag.N.Key** and **Tag.N.Value** in the request.
-   **Tag.N** is a resource tag that consists of a key-value pair. If you specify only **Tag.N.Key**, all tag values that are associated with the specified key are returned. If you specify only **Tag.N.Value**, an error message is returned.
-   If you specify **Tag.N** and **ResourceId.N** to filter tags, **ResourceId.N** must match all specified key-value pairs.
-   If you specify multiple key-value pairs, resources that contain these key-value pairs are returned.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ListTagResourcesForExpressConnect)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ListTagResourcesForExpressConnect)

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

vpc:ListTagResourcesForExpressConnect

list

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

ResourceType

string

Yes

The type of the resource. Valid values:

-   **PHYSICALCONNECTION**: Express Connect circuit.
-   **VIRTUALBORDERROUTER**: virtual border router (VBR).
-   **ROUTERINTERFACE**: router interface.

PHYSICALCONNECTION

RegionId

string

Yes

The ID of the region to which the resource resides.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to obtain the region ID.

cn-hangzhou

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results.

-   You do not need to specify this parameter for the first request.
-   You must specify the token that is obtained from the previous query as the value of **NextToken**.

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

MaxResults

integer

No

The number of entries per page. Valid values: **1** to **100**. Default value: **20**.

20

ResourceId

array

No

The resource IDs.

string

No

The resource ID. You can specify up to 20 resource IDs.

pc-bp16qjewdsunr41m1\*\*\*\*

Tag

array<object>

No

The tags.

object

No

Key

string

No

The key of the tag to add to the resource. You can specify up to 20 tag keys. The tag key cannot be an empty string.

The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.

FinanceDept

Value

string

No

The value of the tag to add to the resource. You can specify up to 20 tag values The tag value can be an empty string.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

FinanceJoshua

## Response parameters

Parameter

Type

Description

Example

object

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

-   If **NextToken** is empty, no next page exists.
-   If a value is returned for **NextToken**, the value can be used in the next request to retrieve a new page of results.

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

RequestId

string

The request ID.

54B48E3D-DF70-471B-AA93-08E683A1B45

TagResources

array<object>

The tags that are added to the resource.

TagResource

object

ResourceType

string

The type of the resource. Valid values:

-   **PHYSICALCONNECTION**: Express Connect circuit.
-   **VIRTUALBORDERROUTER**: VBR.
-   **ROUTERINTERFACE**: router interface.

PHYSICALCONNECTION

TagValue

string

The value of the tag that is added to the resource.

FinanceJoshua

ResourceId

string

The resource ID.

pc-bp16qjewdsunr41m1\*\*\*\*

TagKey

string

The key of the tag that is added to the resource.

FinanceDept

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "RequestId": "54B48E3D-DF70-471B-AA93-08E683A1B45",
  "TagResources": {
    "TagResource": [
      {
        "ResourceType": "PHYSICALCONNECTION",
        "TagValue": "FinanceJoshua",
        "ResourceId": "pc-bp16qjewdsunr41m1****",
        "TagKey": "FinanceDept"
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

InvalidTagKey

The tag keys are not valid.

The tag index is invalid.

400

InvalidTagValue

The tag values are not valid.

The tag value is invalid.

400

InvalidInstanceType.NotFound

The instance type is not found

The instance type is not found.

400

InvalidInstanceIds.NotFound

The instanceIds are not found

The instance ID is not found.

400

Forbidden.TagKeys

The request do not allow to operate the tag keys

You do not have the permissions to set the TagKeys parameter.

400

QuotaExceeded.TagNum

Custom Tags quota exceeded

The upper limit is reached.

400

Forbidden.TagKey.Duplicated

The specified tag key already exists.

The tag resources are duplicate.

400

SizeLimitExceeded.TagNum

The maximum number of tags is exceeded.

The number of tags has reached the upper limit.

400

SizeLimitExceeded.ResourceId

The maximum number of resource IDs is exceeded.

The number of resource group IDs has reached the upper limit.

403

Forbidden

User not authorized to operate on the specified resource.

You do not have the permissions to manage the specified resource. Apply for the permissions and try again.

403

BothEmpty.TagsAndResources

The specified Tags and ResourcesIds are not allow to both empty.

The tags and resource groups cannot be empty at the same time.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-09-11

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ListTagResourcesForExpressConnect?updateTime=2023-09-11#workbench-doc-change-demo)
