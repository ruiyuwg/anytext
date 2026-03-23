Queries information about the cloud computers whose images can be and are pending to be updated to the specified version.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeFotaPendingDesktops)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/DescribeFotaPendingDesktops)

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

ecd:DescribeFotaPendingDesktops

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

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/describeregions) operation to query the regions supported by Elastic Desktop Service.

cn-hangzhou

MaxResults

integer

No

The number of entries per page.

-   Valid values: 1 to 100.
-   Default value: 20.

20

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.

caeba0bbb2be03f84eb48b699f0a4883

TaskUid

string

Yes

The ID of the image update task. You can call the [DescribeFotaTasks](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describefotatasks) operation to obtain the value of this parameter.

aot-c4khwrp9ocml4\*\*\*\*

DesktopId

string

No

The ID of the cloud computer.

ecd-gx2x1dhsmucyy\*\*\*\*

OfficeSiteId

string

No

The ID of the office network. You can call the [DescribeOfficeSites](/help/en/wuying-workspace/describeofficesites) operation to obtain the value of this parameter.

cn-hangzhou+dir-363353\*\*\*\*

DesktopName

string

No

The name of the cloud computer.

testName

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results. If NextToken is empty, no next page exists.

caeba0bbb2be03f84eb48b699f0a4883

RequestId

string

The request ID.

1CBAFFAB-B697-4049-A9B1-67E1FC5F\*\*\*\*

FotaPendingDesktops

array<object>

The cloud computers whose images can be and are pending to be updated to the version specified in `TaskUid`.

FotaPendingDesktop

object

DesktopId

string

The ID of the cloud computer.

ecd-bvdtu3jn97o1r\*\*\*\*

DesktopName

string

The name of the cloud computer.

TestDesktop

OfficeSiteId

string

The ID of the office network.

cn-hangzhou+dir-815419\*\*\*\*

FotaProject

string

**Note** This parameter is not publicly available.

To be hidden

CurrentAppVersion

string

The current version of the image used by the cloud computer.

0.0.1-D-20220513.143129

Status

long

The status of the cloud computer.

Valid values:

-   0: The cloud computer is being created.
-   1: The cloud computer is being started.
-   2: The cloud computer is running.
-   3: The cloud computer is being stopped.
-   5: The cloud computer is stopped.
-   6: The cloud computer expires.
-   7: The cloud computer is deleted.
-   9: Failed to create the cloud computer.

2

Sessions

array<object>

The connected sessions.

Session

object

EndUserId

string

The ID of the end user that connects to the cloud computer.

end user id

Code

string

The response code.

200

Message

string

The returned message.

success

## Examples

Sample success responses

`JSON`format

```
{
  "NextToken": "caeba0bbb2be03f84eb48b699f0a4883",
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "FotaPendingDesktops": [
    {
      "DesktopId": "ecd-bvdtu3jn97o1r****",
      "DesktopName": "TestDesktop",
      "OfficeSiteId": "cn-hangzhou+dir-815419****",
      "FotaProject": "To be hidden",
      "CurrentAppVersion": "0.0.1-D-20220513.143129",
      "Status": 2,
      "Sessions": [
        {
          "EndUserId": "end user id"
        }
      ]
    }
  ],
  "Code": 200,
  "Message": "success"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-07-25

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeFotaPendingDesktops?updateTime=2024-07-25#workbench-doc-change-demo)

2023-07-14

The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeFotaPendingDesktops?updateTime=2023-07-14#workbench-doc-change-demo)

2022-03-15

Add Operation

[View Change Details](https://api.alibabacloud.com/document/ecd/2020-09-30/DescribeFotaPendingDesktops?updateTime=2022-03-15#workbench-doc-change-demo)
