Queries the directory quotas of a file system.

## Operation description

Only General-purpose NAS file systems support the directory quota feature.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/NAS/2017-06-26/DescribeDirQuotas)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/NAS/2017-06-26/DescribeDirQuotas)

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

nas:DescribeDirQuotas

list

\*FileSystem

`acs:nas:{#regionId}:{#accountId}:filesystem/{#filesystemId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

FileSystemId

string

Yes

The ID of the file system.

1ca404\*\*\*\*

Path

string

No

The absolute path of a directory.

If you do not specify this parameter, all directories for which quotas are created are returned.

/data/sub1

PageSize

integer

No

The number of entries per page. Default value: 10.

Valid values: 1 to 100.

1

PageNumber

integer

No

The page number.

Pages start from page 1. Default value: 1.

1

## Response parameters

Parameter

Type

Description

Example

object

TotalCount

integer

The total number of directories.

1

DirQuotaInfos

array<object>

The queried directory quotas.

DirQuotaInfo

object

Status

string

The status of the quota created for the directory. Valid values: Initializing and Normal. The Initializing state indicates that the quota is being created. The Normal state indicates that the quota is created.

Normal

Path

string

The absolute path of a directory.

/data/sub1

DirInode

string

The inode number of the directory.

1123

UserQuotaInfos

array<object>

The information about quotas for all users.

UserQuotaInfo

object

FileCountReal

long

The total number of files that a user has created in the directory.

5100

UserType

string

The type of user. Valid values: Uid, Gid, and AllUsers.

-   If Uid or Gid is returned, a value is returned for UserId.
-   If AllUsers is returned, UserId is empty.

Uid

FileCountLimit

long

The maximum number of files that a user can create in the directory.

10000

UserId

string

The ID of the user that you specify to create a quota for the directory. The value depends on the value of the UserType parameter. Valid values: Uid and Gid.

500

SizeLimit

long

The maximum size of files that a user can create in the directory. Unit: GiB.

1024

QuotaType

string

The type of the quota. Valid values: Accounting and Enforcement.

Accounting

SizeReal

long

The total size of files that a user has created in the directory. Unit: GiB.

800

SizeRealInByte

long

The total size of files that a user has created in the directory. Unit: bytes.

858995833870

RequestId

string

The request ID.

5BC5CB97-9F28-42FE-84A4-0CD0DF42\*\*\*\*

PageSize

integer

The number of entries per page.

1

PageNumber

integer

The page number.

1

## Examples

Sample success responses

`JSON`format

```
{
  "TotalCount": 1,
  "DirQuotaInfos": [
    {
      "Status": "Normal",
      "Path": "/data/sub1",
      "DirInode": 1123,
      "UserQuotaInfos": [
        {
          "FileCountReal": 5100,
          "UserType": "Uid",
          "FileCountLimit": 10000,
          "UserId": 500,
          "SizeLimit": 1024,
          "QuotaType": "Accounting",
          "SizeReal": 800,
          "SizeRealInByte": 858995833870
        }
      ]
    }
  ],
  "RequestId": "5BC5CB97-9F28-42FE-84A4-0CD0DF42****",
  "PageSize": 1,
  "PageNumber": 1
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/NAS/2017-06-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-04-16

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/NAS/2017-06-26/DescribeDirQuotas?updateTime=2024-04-16#workbench-doc-change-demo)
