Queries all users of a cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/EHPC/2018-04-12/ListUsers)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/EHPC/2018-04-12/ListUsers)

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

ehpc:ListUsers

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

ClusterId

string

Yes

The ID of the E-HPC cluster.

You can call the [ListClusters](/help/en/doc-detail/87116.html) operation to query the cluster ID.

ehpc-hz-FYUr32\*\*\*\*

PageNumber

integer

No

The page number of the page to return.

Pages start from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries to return on each page. Valid values: 1 to 50.

Default value: 10.

10

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries returned per page.

1

RequestId

string

The request ID.

04F0F334-1335-436C-A1D7-6C044FE7\*\*\*\*

PageNumber

integer

The page number returned.

1

TotalCount

integer

The total number of returned entries.

1

Users

array<object>

The list of users.

UserInfo

object

Name

string

The username of the account.

user1

AddTime

string

The time when the user was created.

2018-07-18T17:46:47

Group

string

The name of the permission group. Valid values:

-   users: an ordinary permission group. It is applicable to ordinary users that need only to submit and debug jobs.
-   wheel: a sudo permission group. It is applicable to the administrator who needs to manage the cluster. In addition to submitting and debugging jobs, users who have sudo permissions can run sudo commands to install software and restart nodes.

wheel

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 1,
  "RequestId": "04F0F334-1335-436C-A1D7-6C044FE7****",
  "PageNumber": 1,
  "TotalCount": 1,
  "Users": {
    "UserInfo": [
      {
        "Name": "user1",
        "AddTime": "2018-07-18T17:46:47",
        "Group": "wheel"
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParams

The specified parameter %s is invalid.

The specified parameter %s is invalid.

403

InvalidClusterStatus

The operation failed due to invalid cluster status.

The cluster status does not support the operation.

404

ManagerNotFound

The manager nodes do not exist or their status is abnormal.

The manager nodes do not exist or their status is abnormal.

404

ClusterNotFound

The specified cluster does not exist.

The specified instance does not exist.

406

AgentError

The agent service request failed.

The cluster-side command failed to run. %s

406

AgentError.Account.DomainNotExist

The specified domain does not exist: %s.

The domain service does not exist: %s

406

AgentError.Account.GetentPasswdFailure

Failed to get the user list: %s.

Failed to obtain the domain user list: %s

406

AgentError.Account.GetUserListFailure

Get user list fail: %s

Failed to query the list of users: %s

407

NotAuthorized

You are not authorized by RAM for this request.

The request is not authorized by RAM.

500

UnknownError

An unknown error occurred.

An unknown error occurred.

503

ServiceUnavailable

The request has failed due to a temporary failure of the server

The request has failed due to a temporary failure of the server.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/EHPC/2018-04-12/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
