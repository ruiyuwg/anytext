Queries the transmission and approval result for a submitted file.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/TransferTaskApprovalCallback)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/TransferTaskApprovalCallback)

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

ecd:TransferTaskApprovalCallback

update

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

TaskId

string

No

The ID of the transmission task.

trt-msndfksm18fs\*\*\*\*

Result

string

No

The approval result.

Valid values:

-   Approved
-   Rejected

Approved

OssBucketRegionId

string

No

The region where the OSS bucket storing the file resides.

cn-hangzhou

OssBucketName

string

No

The name of the OSS bucket where the file resides.

ed\*\*\*\*-17337752804\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The returned data.

RequestId

string

The request ID.

AE7B699F-625C-587E-BC5F-1395CA\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "AE7B699F-625C-587E-BC5F-1395CA****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
