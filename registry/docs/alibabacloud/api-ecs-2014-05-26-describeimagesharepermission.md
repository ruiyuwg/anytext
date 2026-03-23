Queries the accounts with which a custom image is shared. When you call this operation, you can specify parameters, such as RegionId and ImageId, in the request. The response can be displayed by page. By default, 10 entries are displayed on each page.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImageSharePermission)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeImageSharePermission)

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

ecs:DescribeImageSharePermission

get

\*Image

`acs:ecs:{#regionId}:{#accountId}:image/{#imageId}`

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

The region ID of the custom image. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ImageId

string

Yes

The ID of the custom image.

m-bp1caf3yicx5jlfl\*\*\*\*

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

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PageNumber

integer

The page number.

1

PageSize

integer

The number of entries per page.

10

TotalCount

integer

The total number of entries returned.

1

ImageId

string

The ID of the custom image.

m-bp1caf3yicx5jlfl\*\*\*\*

RegionId

string

The region ID of the custom image.

cn-hangzhou

ShareGroups

array<object>

The shared groups.

ShareGroup

object

Group

string

The shared group.

all

Accounts

array<object>

The Alibaba Cloud accounts.

Account

object

AliyunId

string

The ID of the Alibaba Cloud account.

1234567890

SharedTime

string

The time when the image was shared. The time follows the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2023-01-01T12:05:00Z

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "PageSize": 10,
  "TotalCount": 1,
  "ImageId": "m-bp1caf3yicx5jlfl****",
  "RegionId": "cn-hangzhou",
  "ShareGroups": {
    "ShareGroup": [
      {
        "Group": "all"
      }
    ]
  },
  "Accounts": {
    "Account": [
      {
        "AliyunId": 1234567890,
        "SharedTime": "2023-01-01T12:05:00Z"
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

The input parameter "RegionId "that is mandatory for processing this request is not supplied.

\-

400

MissingParameter

The input parameter "ImageId "that is mandatory for processing this request is not supplied.

\-

404

InvalidImageId.NotFound

The specified image %s does not exist.

The specified image does not exist under the current account. check whether the image id is correct.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImageSharePermission?updateTime=2025-02-27#workbench-doc-change-demo)

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImageSharePermission?updateTime=2024-12-17#workbench-doc-change-demo)

2023-05-17

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeImageSharePermission?updateTime=2023-05-17#workbench-doc-change-demo)
