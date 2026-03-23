Queries the Function Compute trigger that is set for an Alibaba Cloud CDN event.

## Operation description

**Note** You can call this operation up to 100 times per second per account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/ListFCTrigger)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/ListFCTrigger)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   The required resource types are displayed in bold characters.
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cdn:ListFCTrigger

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

EventMetaName

string

Yes

The name of the event. You can specify only one name.

LogFileCreated

EventMetaVersion

string

Yes

The version number of the event. You can specify only one version number.

1.0.0

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

EC046C5D-8CB4-4B6B-B7F8-B335E51EF90E

FCTriggers

array<object>

The Function Compute triggers that are set for Alibaba Cloud CDN events.

FCTrigger

object

TriggerARN

string

The trigger that corresponds to the Function Compute service.

acs:fc:cn-beijing: 1234567890:services/FCTestService/functions/printEvent/triggers/testtrigger

RoleARN

string

The Resource Access Management (RAM) role.

acs:ram:: 1234567890:role/aliyuncdneventnotificationrole

SourceArn

string

The resources and filters for event listening.

acs:cdn:\*:1234567890:domain/example.com

Notes

string

The remarks.

Test

EventMetaName

string

The name of the event.

LogFileCreated

EventMetaVersion

string

The version of the event.

1.0.0

**SourceARN** format: `acs:cdn:{RegionID}:{AccountID}:{Filter}`.

**Filter** indicates the resource and filter in the format of \*\*{FilterName}/{FilterValue}. If multiple values are returned for **FilterValue**, the values are enclosed with braces **({})** and separated by commas (,).

For example, the LogFileCreated event supports a filter of which **FilterName** is set to **domain**. Function Compute can be triggered only by **example.com** if **Filter** is set to **domain/example.com**. Function Compute can be triggered by multiple domains if **Filter** is set to `domain/{example.com,aliyundoc.com}`.

If multiple filters are returned, they are separated with forward slashes (/) and have the **AND** relation. In this case, the SourceArn parameter is displayed in the format of `acs:cdn:{RegionID}:{AccountID}:{Filter1}/{Filter2}...`.

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "EC046C5D-8CB4-4B6B-B7F8-B335E51EF90E",
  "FCTriggers": [
    {
      "TriggerARN": "acs:fc:cn-beijing: 1234567890:services/FCTestService/functions/printEvent/triggers/testtrigger",
      "RoleARN": "acs:ram:: 1234567890:role/aliyuncdneventnotificationrole",
      "SourceArn": "acs:cdn:*:1234567890:domain/example.com",
      "Notes": "Test\n",
      "EventMetaName": "LogFileCreated",
      "EventMetaVersion": "1.0.0"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

400

NotFound.EventMeta

EventMeta not found.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/ListFCTrigger?updateTime=2024-12-18#workbench-doc-change-demo)
