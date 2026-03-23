Triggers a task to run by using an HTTP Trigger node at a specified time.

## Operation description

This API operation is available for all DataWorks editions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/TriggerSchedulerTaskInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/TriggerSchedulerTaskInstance)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

TaskId

long

Yes

The task ID.

1234

EnvType

string

No

The environment of the workspace. Valid values:

-   Prod: production environment
-   Dev: development environment

Prod

TriggerTime

long

Yes

The time defined by the HTTP Trigger node. This value is a UNIX timestamp.

1710239005403

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

22C97E95-F023-56B5-8852-B1A77A17XXXX

Success

boolean

Indicates whether the request was successful.

true

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "22C97E95-F023-56B5-8852-B1A77A17XXXX\n",
  "Success": true
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dataworks-public/2024-05-18/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-01-06

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/dataworks-public/2024-05-18/TriggerSchedulerTaskInstance?updateTime=2025-01-06#workbench-doc-change-demo)
