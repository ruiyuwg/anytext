Register the OSS path to be managed by DLF.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/DataLake/2020-07-10/RegisterLocation)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/DataLake/2020-07-10/RegisterLocation)

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

dlf:RegisterLocation

\*All Resources

`*`

none

none

## Request syntax

```
POST /webapi/locations HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

body

object

No

HTTP

Location

string

Yes

Registered OSS path

oss://mybucket/

RoleName

string

Yes

RAM role name

**Note** Data Lake Formation read and write data in the OSS path. If you want to AliyunDLFWorkFlowDefaultRole a role, the role is automatically built in to the role. Alternatively, you can create a custom role, but you must manually ensure that the role has the read and write permissions on the corresponding path.

AliyunDLFWorkFlowDefaultRole

InventoryCollectEnabled

boolean

No

Whether to enable OSS bucket inventory

true

OssLogCollectEnabled

boolean

No

Whether to enable OSS log storage

true

## Response parameters

Parameter

Type

Description

Example

object

The registration results.

RequestId

string

The request ID.

3C2678BA-3451-14C3-90E2-D4EF5B4E7A84

Success

boolean

Indicates whether the request was successful. Valid values:

-   true.
-   false: The request failed.

true

Data

object

The returned data.

LocationId

string

Location ID

LOC-AB8FBC17F95A4AF5

StorageCollectTaskOperationResultList

array

The list of collection tasks that are enabled.

StorageCollectTaskOperationResultList

[StorageCollectTaskOperationResult](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-storagecollecttaskoperationresult)

The collection task that is enabled.

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "3C2678BA-3451-14C3-90E2-D4EF5B4E7A84",
  "Success": true,
  "Data": {
    "LocationId": "LOC-AB8FBC17F95A4AF5",
    "StorageCollectTaskOperationResultList": [
      {
        "Success": true,
        "TaskId": "",
        "TaskType": "",
        "DlfCreated": true,
        "ErrCode": "",
        "ErrMessage": ""
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-10-28

Add Operation

[View Change Details](https://api.alibabacloud.com/document/DataLake/2020-07-10/RegisterLocation?updateTime=2022-10-28#workbench-doc-change-demo)
