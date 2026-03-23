Applies for a public endpoint for an AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/adb/2019-03-15/AllocateClusterPublicConnection)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/adb/2019-03-15/AllocateClusterPublicConnection)

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

adb:AllocateClusterPublicConnection

update

DBCluster

`acs:adb:*:{#accountId}:dbcluster/{#dbclusterId}`

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

The Data Warehouse Edition Cluster ID of AnalyticDB for MySQL. You can call the [DescribeDBClusters](/help/en/analyticdb-for-mysql/api-describedbclusters) operation to retrieve all Data Warehouse Edition cluster IDs within the specified region.

am-bp278jg9\*\*\*\*

ConnectionStringPrefix

string

Yes

The prefix of the public endpoint.

-   The prefix must contain lowercase letters, digits, and hyphens (-). It must start with a lowercase letter.
-   The prefix can be up to 30 characters in length.
-   By default, the cluster name is used as the prefix of the public endpoint.

am-bp278jg9\*\*\*\*.ads.aliyuncs.com

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

1AD222E9-E606-4A42-BF6D-8A4442913CEF

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1AD222E9-E606-4A42-BF6D-8A4442913CEF"
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

The specified DBClusterId parameter does not exist. Make sure that the DBClusterId value is valid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/adb/2019-03-15/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
