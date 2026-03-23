Queries whether the source IP address can access a cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterConnectivity)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterConnectivity)

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

polardb:DescribeDBClusterConnectivity

get

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

ResourceGroupId

string

No

The ID of the resource group.

rg-\*\*\*\*\*\*\*\*\*\*\*\*

DBClusterId

string

Yes

The cluster ID.

pc-xxxxxxxxxxxxx

SourceIpAddress

string

Yes

The source IP address.

192.\*\*\*.\*\*\*.1

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

73A85BAF-1039-4CDE-A83F-1A140F\*\*\*\*\*\*

DBClusterId

string

The cluster ID.

pc-xxxxxxxxxxxxx

ConnCheckResult

string

The connection diagnosis result. Valid values:

-   **Success**
-   **Failed**

Failed

ConnCheckErrorCode

string

The error code for connection diagnosis. Valid values:

-   **SRC\_IP\_NOT\_IN\_USER\_WHITELIST**: The source IP address is not added to the whitelist.
-   **CONNECTION\_ABNORMAL**: The connection to the cluster is normal.

SRC\_IP\_NOT\_IN\_USER\_WHITELIST

ConnCheckErrorMessage

string

The error message for connection diagnosis.

Src ip:192.\*\*\*.\*\*\*.1 not in user whitelist

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "73A85BAF-1039-4CDE-A83F-1A140F******",
  "DBClusterId": "pc-xxxxxxxxxxxxx",
  "ConnCheckResult": "Failed",
  "ConnCheckErrorCode": "SRC_IP_NOT_IN_USER_WHITELIST",
  "ConnCheckErrorMessage": "Src ip:192.***.***.1 not in user whitelist"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidAction

Specified action is not valid.

The specified action is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode).
