Deletes the backup sets of a PolarDB cluster.

## Operation description

Before you call this operation, make sure that the cluster meets the following requirements:

-   The cluster is in the Running state.
-   The backup sets are in the Success state.

**Note**-   You can call the [DescribeBackups](/help/en/polardb/polardb-for-mysql/api-describebackups) operation to query the status of backup sets.
-   After you delete the backup set file, the storage space that is occupied by the file is released. The released storage space is smaller than the size of the file because your snapshots share some data blocks

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/DeleteBackup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/DeleteBackup)

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

polardb:DeleteBackup

delete

\*dbcluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

DBClusterId

string

Yes

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

BackupId

string

Yes

The backup ID. If you need to specify multiple backup IDs, separate the backup IDs with commas (,).

**Note** You can call the [DescribeBackups](/help/en/polardb/polardb-for-mysql/api-describebackups) operation to query the backup IDs.

11111111

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

3CF4F9FE-BF77-4739-8D68-B8DF5D\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "3CF4F9FE-BF77-4739-8D68-B8DF5D******"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidBackupSetID.NotFound

The specified parameter BackupId is not valid.

The specified BackupId parameter is invalid.

404

InvalidDBClusterId.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).
