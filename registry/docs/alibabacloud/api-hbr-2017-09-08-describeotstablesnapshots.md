Queries the details about Tablestore instances that are backed up.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeOtsTableSnapshots)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/DescribeOtsTableSnapshots)

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

hbr:DescribeOtsTableSnapshots

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

StartTime

long

No

The start time of the backup. The value must be a UNIX timestamp. Unit: milliseconds.

1611109271630

EndTime

long

No

The end time of the backup. The value must be a UNIX timestamp. Unit: milliseconds.

1652068250881

SnapshotIds

array

No

The snapshot IDs.

string

No

The snapshot ID.

s-00047mxg17p26\*\*\*\*3c

OtsInstances

array<object>

No

The Tablestore instances that are backed up.

object

No

The list of Tablestore instances that are backed up.

InstanceName

string

No

The name of the Tablestore instance.

instancename

TableNames

array

No

The names of the tables in the Tablestore instance.

string

No

The name of the table in the Tablestore instance.

tablename

Limit

integer

No

The maximum number of rows that you want the current query to return.

100

NextToken

string

No

The token that is required to obtain the next page of backup snapshots.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

CrossAccountType

string

No

Specifies whether data is backed up within the same Alibaba Cloud account or across Alibaba Cloud accounts. Valid values:

-   SELF\_ACCOUNT: Data is backed up within the same Alibaba Cloud account.
-   CROSS\_ACCOUNT: Data is backed up across Alibaba Cloud accounts.

CROSS\_ACCOUNT

CrossAccountUserId

long

No

The UID of the source account used for cross-account backup.

144015xxxxx98732

CrossAccountRoleName

string

No

The name of the RAM role that is created within the source Alibaba Cloud account and assigned to the current Alibaba Cloud account to authorize the current Alibaba Cloud account to back up data across Alibaba Cloud accounts.

BackupRole

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

09376812-6290-5E36-B504-E8010D72D1F0

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

Code

string

The HTTP status code. The status code 200 indicates that the request was successful.

200

Message

string

The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

Limit

integer

The number of backup snapshots that are displayed on the current page.

10

Snapshots

array<object>

The backup snapshots.

Snapshot

object

The list of backup snapshots.

Status

string

The status of the backup job. Valid values:

-   **COMPLETE**: The backup job is completed.
-   **PARTIAL\_COMPLETE**: The backup job is partially completed.
-   **FAILED**: The backup job has failed.

COMPLETE

SnapshotHash

string

The hash value of the backup snapshot.

f2fe...

VaultId

string

The ID of the backup vault that stores the backup snapshot.

v-00030j\*\*\*\*\*\*\*sn

BackupType

string

The backup type. Valid value: **COMPLETE**, which indicates full backup.

COMPLETE

CreateTime

long

The time when the Tablestore instance was created. The value is a UNIX timestamp. Unit: seconds.

1607436917

ActualBytes

string

The actual data amount of backup snapshots after duplicates are removed. Unit: bytes.

0

SourceType

string

The type of the data source. Valid values:

-   **ECS\_FILE**: backup snapshots for Elastic Compute Service (ECS) files
-   **OSS**: backup snapshots for Object Storage Service (OSS) buckets
-   **NAS**: backup snapshots for Apsara File Storage NAS file systems
-   **OTS\_TABLE**: backup snapshots for Tablestore instances

OTS\_TABLE

BytesTotal

long

The total amount of data. Unit: bytes.

0

CompleteTime

long

The time when the backup snapshot was completed. The value is a UNIX timestamp. Unit: seconds.

1642496679

Retention

long

The retention period of the backup snapshot. Unit: days.

730

CreatedTime

long

The time when the backup snapshot was created. The value is a UNIX timestamp. Unit: seconds.

1642496679

ParentSnapshotHash

string

The hash value of the parent backup snapshot.

f2fe..

StartTime

long

The time when the backup snapshot started. The value is a UNIX timestamp. Unit: seconds.

1642496543

UpdatedTime

long

The time when the backup snapshot was updated. The value is a UNIX timestamp. Unit: seconds.

1642496679

SnapshotId

string

The ID of the backup snapshot.

s-00047mxg17p26\*\*\*\*\*b

JobId

string

The ID of the backup job.

job-00030j3chkt\*\*\*\*\*\*2

InstanceName

string

The name of the Tablestore instance.

instancename

TableName

string

The name of the table in the Tablestore instance.

table2

RangeStart

long

The time when the backup job started. The value is a UNIX timestamp. Unit: milliseconds.

1642492553038

RangeEnd

long

The time when the backup job ended. The value is a UNIX timestamp. Unit: milliseconds.

1642521709966

NextToken

string

The token that is required to obtain the next page of backup snapshots.

caeba0bbb2be03f84eb48b699f0a

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "09376812-6290-5E36-B504-E8010D72D1F0",
  "Success": true,
  "Code": 200,
  "Message": "successful",
  "Limit": 10,
  "Snapshots": [
    {
      "Status": "COMPLETE",
      "SnapshotHash": "f2fe...",
      "VaultId": "v-00030j*******sn",
      "BackupType": "COMPLETE",
      "CreateTime": 1607436917,
      "ActualBytes": 0,
      "SourceType": "OTS_TABLE",
      "BytesTotal": 0,
      "CompleteTime": 1642496679,
      "Retention": 730,
      "CreatedTime": 1642496679,
      "ParentSnapshotHash": "f2fe..",
      "StartTime": 1642496543,
      "UpdatedTime": 1642496679,
      "SnapshotId": "s-00047mxg17p26*****b",
      "JobId": "job-00030j3chkt******2",
      "InstanceName": "instancename",
      "TableName": "table2",
      "RangeStart": 1642492553038,
      "RangeEnd": 1642521709966
    }
  ],
  "NextToken": "caeba0bbb2be03f84eb48b699f0a"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
