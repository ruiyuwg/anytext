Creates a data report export task.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/CreateEcdReportTask)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/CreateEcdReportTask)

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

ecd:CreateEcdReportTask

none

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

TaskType

string

Yes

The type of the report task.

Valid value:

-   RESOURCE\_REPORT

RESOURCE\_REPORT

SubType

string

Yes

The sub-type of the report export task.

Valid value:

-   DESKTOP: cloud computer

DESKTOP

FilterList

array<object>

No

The filter conditions for filtering query results. The logical relationship between each filter condition is "and" (&). Each filter condition contains FilterKey and FilterValues, which indicate the key and value for the filter condition.

object

No

The filter condition object.

FilterKey

string

No

The key of the filter condition for filtering query results. When SubType is set to:

1.  DESKTOP (indicating a cloud computer report), the following filter conditions are available:

-   KeyWord: cloud computer keyword (supports automatic recognition)
-   RegionId: region ID
-   DesktopId: cloud computer ID
-   DesktopName: cloud computer name (supports fuzzy matching)
-   OfficeSiteId: office network ID
-   OfficeSiteName: office network name (supports fuzzy matching)
-   Status: cloud computer status
-   DesktopType: desktop type
-   DesktopIP: cloud computer IP address
-   SubPayType: billing method
-   EndUserId: user name (supports fuzzy matching)
-   ExpireTime: expiration date and time, in the yyyy-MM-dd'T'HH:mm:ss'Z' format
-   IncludeAssignedUser: indicates whether the cloud computer is assigned to users or not
-   ResourceGroupId: resource group ID
-   PolicyId: policy ID
-   Tag:{Tag Key value}: cloud computer tag (To filter data using multiple tags, specify multiple filter condition objects.)

Tag:TestKey

FilterValues

array

No

The value of the filter condition. Only the first value of the FilterValues parameter is used, if FilterKey is set to one of the following values:

-   KeyWord
-   DesktopName
-   OfficeSiteName
-   DesktopIP
-   EndUserId
-   ExpireTime
-   IncludeAssignedUser

string

No

The specific value of the filter condition for filtering query results.

ReportFileName

string

No

The name of the report file.

LangType

string

No

The language of the report. An enumerated type.

Valid values:

-   zh-CN (default): Chinese
-   en-GB: English

zh-CN

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

Success

boolean

Indicates whether the request is successful.

True

Code

string

The request result. If the request was successful, `success` is returned. If the request failed, an error message is returned.

success

Message

string

The error message returned if the request failed. This parameter is not returned if the value of Code is success.

success

TaskId

string

The ID of the report export task.

ret-g67ip\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1CBAFFAB-B697-4049-A9B1-67E1FC5F****",
  "Success": true,
  "Code": "success",
  "Message": "success",
  "TaskId": "ret-g67ip******"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
