Starts multiple workflow instances at a time.

## Operation description

This API operation is available for all DataWorks editions.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/StartWorkflowInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/dataworks-public/2024-05-18/StartWorkflowInstances)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

Ids

array

Yes

The IDs of workflow instances.

long

Yes

The ID of the workflow instance.

1234

Comment

string

No

The remarks.

this is a comment

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

22C97E95-F023-56B5-8852-B1A77A17\*\*\*\*

SuccessInfo

object

The result of the batch operation, which is in the MAP structure. The workflow instance ID serves as a key, and the result serves as a value.

object

The result.

Success

boolean

Indicates whether the request was successful.

true

Message

string

The error message.

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "22C97E95-F023-56B5-8852-B1A77A17****",
  "SuccessInfo": {
    "key": {
      "Success": true,
      "Message": ""
    }
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/dataworks-public/2024-05-18/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
