Binds an Object Storage Service (OSS) bucket to the specified project. The binding enables you to use IMM features by using the x-oss-process parameter.

## Operation description

-   Before you call this operation, make sure that you are familiar with the [billing](/help/en/imm/product-overview/billable-items) of Intelligent Media Management (IMM).\*\*\*\*
-   To use data processing capabilities of IMM based on the x-oss-process parameter, you must bind an OSS bucket to an IMM project. For more information, see [x-oss-process](/help/en/imm/developer-reference/user-guide-for-x-oss-process).
-   Make sure that the specified project exists in the current region. For more information, see [Project management](/help/en/imm/developer-reference/api-imm-2020-09-30-dir-project-management/).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/imm/2020-09-30/AttachOSSBucket)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/imm/2020-09-30/AttachOSSBucket)

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

imm:AttachOSSBucket

create

\*Project

`acs:imm:{#regionId}:{#accountId}:project/{#ProjectName}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ProjectName

string

Yes

The name of the project. For information about how to create a project, see [CreateProject](/help/en/imm/developer-reference/api-imm-2020-09-30-createproject) .

immtest

OSSBucket

string

Yes

The name of the OSS bucket in the same region as the project.

examplebucket

Description

string

No

The description of the binding. The description must be 1 to 128 characters in length. By default, no description is applied.

test-attachment

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

5F74C5C9-5AC0-49F9-914D-E01589D3\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "5F74C5C9-5AC0-49F9-914D-E01589D3****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/imm/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-04-19

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/imm/2020-09-30/AttachOSSBucket?updateTime=2024-04-19#workbench-doc-change-demo)

2023-11-07

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/imm/2020-09-30/AttachOSSBucket?updateTime=2023-11-07#workbench-doc-change-demo)

2022-04-18

Add Operation

[View Change Details](https://api.alibabacloud.com/document/imm/2020-09-30/AttachOSSBucket?updateTime=2022-04-18#workbench-doc-change-demo)
