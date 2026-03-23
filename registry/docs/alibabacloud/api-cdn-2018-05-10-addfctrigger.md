Adds a Function Compute trigger.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cdn/2018-05-10/AddFCTrigger)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cdn/2018-05-10/AddFCTrigger)

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

cdn:AddFCTrigger

create

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

TriggerARN

string

Yes

The trigger that corresponds to the Function Compute service.

acs:fc:cn-beijing: 1234567890:services/FCTestService/functions/printEvent/triggers/testtrigger

EventMetaName

string

Yes

The name of the event.

LogFileCreated

EventMetaVersion

string

Yes

The version of the event.

1.0.0

SourceARN

string

Yes

The resources and filters for event listening.

acs:cdn:\*:1234567890:domain/example.com

FunctionARN

string

No

The feature trigger.

acs:fc:1223455566666:123:services/myservice/functions/myfunction

RoleARN

string

Yes

The assigned Resource Access Management (RAM) role.

acs:ram:: 1234567890:role/aliyuncdneventnotificationrole

Notes

string

Yes

The remarks.

test

## [](#triggerarn)TriggerARN

TriggerARN format: `acs:cdn:{RegionID}:{AccountID}:{Filter}`.

-   Filter indicates the resource and filter in the format of `{FilterName}/{FilterValue}`. If you want to specify multiple values for FilterValue, separate the values with commas (,) and enclose them with braces ({}).
-   In this example, the LogFileCreated event supports a filter of which FilterName is set to domain. Function Compute can be triggered only by `example.com` if Filter is set to `domain/example.com`. Function Compute can be triggered by multiple domains if Filter is set to `domain/{example.com,aliyundoc.com}`.
-   Separate filters with forward slashes (/). The forward slashes indicate the AND logic. Format: `acs:cdn:{RegionID}:{AccountID}:{Filter1}/{Filter2}/{Filter3}...`.

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

EC046C5D-8CB4-4B6B-B7F8-B335E51EF90

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "EC046C5D-8CB4-4B6B-B7F8-B335E51EF90"
}
```

## Error codes

HTTP status code

Error code

Error message

400

NotFound.EventMeta

EventMeta not found.

400

Duplicated.FCTrigger

FCTrigger has already existed.

400

InvalidParameter.TriggerARN

The specified parameter TriggerARN is not valid.

400

InvalidParameter.SourceARN

The specified parameter SourceARN is not valid.

400

InvalidParameter.FunctionARN

The specified parameter FunctionARN is not valid.

400

InvalidParameter.RoleARN

The specified parameter RoleARN is not valid.

403

PermissionDeny

No permission to operate this FCTrigger.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cdn/2018-05-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Cdn/2018-05-10/AddFCTrigger?updateTime=2024-12-18#workbench-doc-change-demo)
