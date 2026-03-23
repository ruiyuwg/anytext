Restarts database links.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/RestartDBLink)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/RestartDBLink)

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

polardb:RestartDBLink

none

\*DBCluster

`acs:polardb:{#regionId}:{#accountId}:{#resource-type}/{#resource-id}`

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

**Note** You can call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to query the IDs of all clusters in an Alibaba Cloud account.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

E56531A4-E552-40BA-9C58-137B80\*\*\*\*\*\*

TaskId

string

The task ID.

ec8c4723-eac5-4f12-becb-01ac08\*\*\*\*\*\*

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "E56531A4-E552-40BA-9C58-137B80******",
  "TaskId": "ec8c4723-eac5-4f12-becb-01ac08******",
  "DBClusterId": "pc-****************\n"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDBClusterId.Malformed

The specified parameter DBClusterId is not valid.

The specified DBClusterId parameter is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
