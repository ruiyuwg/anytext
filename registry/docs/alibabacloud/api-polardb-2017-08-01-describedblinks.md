Queries the database links of a PolarDB for Oracle cluster.

## Operation description

**Note** You can query only the database links that use a PolarDB for Oracle cluster as the source.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBLinks)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBLinks)

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

polardb:DescribeDBLinks

get

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

The ID of the cluster for which you want to query the database links.

**Note** You can call the [DescribeDBClusters](/help/en/polardb/polardb-for-oracle/api-describedbclusters-2) operation to query PolarDB clusters.

pc-a\*\*\*\*\*\*\*\*\*\*\*\*\*

DBLinkName

string

No

The name of the database link. If you leave this parameter empty, the system returns all the database links.

dblink\_test

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

45D24263-7E3A-4140-9472-\*\*\*\*\*\*\*\*\*\*\*\*

DBLinkInfos

array<object>

Details about the database links.

DBLinkInfos

object

DBInstanceName

string

The ID of the source cluster that the database link connects.

pc-a\*\*\*\*\*\*\*\*\*\*\*\*\*

DBLinkName

string

The name of the database link.

dblink\_test

SourceDBName

string

The name of the source database of the database link.

testdb1

TargetDBName

string

The name of the destination database of the database link.

testdb2

TargetDBInstanceName

string

The ID of the destination cluster that the database link connects.

**Note** If the destination cluster is not a PolarDB for Oracle cluster, the returned value is empty.

pc-b\*\*\*\*\*\*\*\*\*\*\*\*

TargetAccount

string

The account of the destination database of the database link.

testacc

DBInstanceName

string

The ID of the cluster.

pc-a\*\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "45D24263-7E3A-4140-9472-************",
  "DBLinkInfos": [
    {
      "DBInstanceName": "pc-a*************",
      "DBLinkName": "dblink_test",
      "SourceDBName": "testdb1",
      "TargetDBName": "testdb2",
      "TargetDBInstanceName": "pc-b************",
      "TargetAccount": "testacc"
    }
  ],
  "DBInstanceName": "pc-a*************"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

404

InvalidDBClusterId.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).
