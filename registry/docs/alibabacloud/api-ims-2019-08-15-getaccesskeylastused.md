Queries the time when an AccessKey pair was used for the last time.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ims/2019-08-15/GetAccessKeyLastUsed)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ims/2019-08-15/GetAccessKeyLastUsed)

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

ram:GetAccessKeyLastUsed

get

\*User

`acs:ram::{#accountId}:user/{#UserName}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

UserPrincipalName

string

No

The logon name of the RAM user.

If you do not specify this parameter, the AccessKey pair of the current user is queried.

test@example.onaliyun.com

UserAccessKeyId

string

Yes

The ID of the AccessKey pair that you want to query.

LTAI\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

AccessKeyLastUsed

object

The details of the time when the AccessKey pair was used for the last time.

LastUsedDate

string

The time when the AccessKey pair was used for the last time.

2020-10-16T01:37:37Z

ServiceName

string

The Alibaba Cloud service that was last accessed by using the AccessKey pair.

Ram

RequestId

string

The request ID.

B29C79F6-354B-4297-A994-1338CC22A2EC

## Examples

Sample success responses

`JSON`format

```
{
  "AccessKeyLastUsed": {
    "LastUsedDate": "2020-10-16T01:37:37Z",
    "ServiceName": "Ram"
  },
  "RequestId": "B29C79F6-354B-4297-A994-1338CC22A2EC"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ims/2019-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-08-14

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Ims/2019-08-15/GetAccessKeyLastUsed?updateTime=2024-08-14#workbench-doc-change-demo)
