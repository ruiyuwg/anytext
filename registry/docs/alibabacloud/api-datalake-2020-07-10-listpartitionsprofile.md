Obtains the details of a partition data profile.

## Operation description

To use a data profile, you must first host the OSS bucket of the table.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/DataLake/2020-07-10/ListPartitionsProfile)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/DataLake/2020-07-10/ListPartitionsProfile)

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

dlf:ListPartitionsProfile

list

\*All Resources

`*`

none

none

## Request syntax

```
GET /webapi/metastorehouse/catalog/database/tableprofile/partitionprofile/listPartitionsProfile HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

CatalogId

string

No

The ID of the data directory. By default, the ID of the primary account is entered.

1344371

DatabaseName

string

Yes

The name of the metadatabase.

test\_db

TableName

string

No

The name of the metadata table.

test\_tbl

PageNumber

integer

No

Page number

1

PageSize

integer

No

The number of entries per page.

20

PartitionNames

array

No

The names of partitions.

string

No

The name of the partition.

year=3/month=1

## Response parameters

Parameter

Type

Description

Example

object

Response

Code

string

The error code.

\-

Message

string

The error message.

\-

RequestId

string

The request ID.

97434FA4-A6B2-1AE4-A174-76964F29C759

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

Total

integer

The total number of entries returned.

10

Data

array

The partition data profiles.

data

[PartitionProfile](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-struct-partitionprofile)

The partition data profile.

LatestDate

string

The time when the metadata warehouse was updated.

2023-08-30 19:16:10

LatestAccessNumDate

string

The time when the access frequency is updated. This parameter is obsolete.

\-

## Examples

Sample success responses

`JSON`format

```
{
  "Code": "-",
  "Message": "-",
  "RequestId": "97434FA4-A6B2-1AE4-A174-76964F29C759",
  "Success": true,
  "Total": 10,
  "Data": [
    {
      "DatabaseName": "test_db",
      "TableName": "test_tbl",
      "PartitionName": "year=2023/month=1",
      "ArchiveStatus": "STANDARD",
      "CreateTime": "2023-08-16 18:02:22",
      "LastModifyTime": "2023-08-16 18:02:25",
      "LastAccessTime": "2023-08-22 12:14:42",
      "LastAccessNumTime": "",
      "Location": "oss://mybucket.cn-hangzhou.oss-dls.aliyuncs.com/test_tb/test_tbl/year=2023/month=1",
      "FileSize": 13,
      "ObjectSize": 13,
      "FileCnt": 1,
      "ObjectCnt": 1,
      "AccessNum": 0,
      "AccessNumWeekly": 0,
      "AccessNumMonthly": 0,
      "ObjectAccessNum": 0,
      "ObjectAccessNumWeekly": 4,
      "ObjectAccessNumMonthly": 4,
      "DataSourceType": "OSS_HDFS"
    }
  ],
  "LatestDate": "2023-08-30 19:16:10",
  "LatestAccessNumDate": "-"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/DataLake/2020-07-10/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-03-21

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/DataLake/2020-07-10/ListPartitionsProfile?updateTime=2024-03-21#workbench-doc-change-demo)
