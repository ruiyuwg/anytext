Queries a list of update tasks.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeFotaTasks)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeFotaTasks)

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

ecd:DescribeFotaTasks

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

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/describeregions) operation to query the regions supported by Elastic Desktop Service.

cn-hangzhou

MaxResults

integer

No

The number of entries per page.

-   Valid values: 1 to 100
-   Default value: 20

20

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. If the NextToken parameter is empty, no next page exists.

caeba0bbb2be03f84eb48b699f0a4883

TaskUid

array

No

The IDs of the image update tasks.

string

No

The ID of the image update task. You can call the [DescribeFotaTasks](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describefotatasks) operation to obtain the value of this parameter.

aot-c4khwrp9ocml4\*\*\*\*

UserStatus

string

No

Specifies whether to automatically push the image update task.

Valid values:

-   Running: automatically pushes the image update task.
-   Pending: does not automatically push the image update task.

Pending

FotaStatus

string

No

**Note** This parameter is not publicly available.

To be hidden.

Lang

string

No

The language of the image version to update.

Valid values:

-   en: English.
-   zh: Simplified Chinese.

zh

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

FotaTasks

array<object>

Details about the image update task.

FotaTask

object

Details about the image update task.

TaskUid

string

The ID of the image upgrade task.

aot-c4khwrp9ocml4\*\*\*\*

FotaProject

string

**Note** This parameter is not publicly available.

To be hidden.

AppVersion

string

The image version. You can call the [DescribeImages](/help/en/wuying-workspace/describeimages) operation to obtain the value of this parameter.

0.0.1-D-20220513.143129

Status

string

Indicates whether the image update task is automatically pushed.

Valid values:

-   Running: automatically pushes the image update task.
-   Pending: does not automatically push the image update task.

valid

PublishTime

string

The time when the image version available for update was published.

2022-05-31T04:28:48Z

PendingDesktopCount

integer

The number of cloud computers whose images can be updated to this version.

1

ReleaseNote

string

The description of the image version available for update.

test

Size

integer

The size of the update package. Unit: KB.

568533470

PendingCustomImageCount

integer

The number of custom images that can be updated to this version.

1

Code

string

The returned message. If the request was successful, a `success` is returned. If the request failed, an error message is returned.

success

Message

string

The returned error message. This parameter is not returned if the Code value is a `success` message.

success

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.

AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "FotaTasks": [
    {
      "TaskUid": "aot-c4khwrp9ocml4****",
      "FotaProject": "To be hidden.",
      "AppVersion": "0.0.1-D-20220513.143129",
      "Status": "valid",
      "PublishTime": "2022-05-31T04:28:48Z",
      "PendingDesktopCount": 1,
      "ReleaseNote": "test",
      "Size": 568533470,
      "PendingCustomImageCount": 1
    }
  ],
  "Code": "success",
  "Message": "success",
  "NextToken": "AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-12-06

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeFotaTasks?updateTime=2023-12-06#workbench-doc-change-demo)

2023-11-23

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeFotaTasks?updateTime=2023-11-23#workbench-doc-change-demo)

2023-03-28

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeFotaTasks?updateTime=2023-03-28#workbench-doc-change-demo)

2022-03-15

Add Operation

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeFotaTasks?updateTime=2022-03-15#workbench-doc-change-demo)
