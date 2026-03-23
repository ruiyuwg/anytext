Queries the session records of Elastic Compute Service (ECS) Session Manager.

## Operation description

You can query the session records of Session Manager that were generated in the last four weeks.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeTerminalSessions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeTerminalSessions)

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

ecs:DescribeTerminalSessions

list

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#InstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID.

cn-hangzhou

InstanceId

string

No

The instance ID.

i-bp1i7gg30r52z2em\*\*\*\*

SessionId

string

No

The session ID.

s-hz023od0x9\*\*\*\*

MaxResults

integer

No

The maximum number of entries per page.

Valid values: 1 to 100.

Default value: 10.

10

NextToken

string

No

The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.

AAAAAdDWBF2\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

AAAAAdDWBF2\*\*\*\*

Sessions

array<object>

The information of the sessions.

Session

object

The information about the sessions.

Connections

array<object>

The information of the connections.

Connection

object

The connection.

Status

string

The state of the session. Valid values:

-   Connecting: The connection is being established.
-   Connected: The connection is established.
-   Terminated: The session is terminated.
-   Failed: The connection failed.

Connecting

FailedDetail

string

Cause of the connection failure. This parameter is returned only when the Status parameter is Failed.

The Session Manager is closed normally.

EndTime

string

The time when the connection was closed.

2024-01-19T09:16:46Z

InstanceId

string

The instance ID.

i-bp1i7gg30r52z2em\*\*\*\*

StartTime

string

The time when the connection started to be established.

2024-01-19T09:16:40Z

ClosedReason

string

The reason why the connection was closed. This parameter is returned only when the `Status` value is `Disconnected`, `Terminated`, or `Failed`. Valid values:

-   InstanceNotExists: The specified instance did not exist or was released.
-   InstanceNotRunning: The specified instance was not running.
-   DeliveryTimeout: The connection timed out.
-   AgentNeedUpgrade: Cloud Assistant Agent required an upgrade.
-   AgentNotOnline: Cloud Assistant Agent was not connected to the Cloud Assistant server.
-   MessageFormatInvalid: The message format was invalid.
-   AgentSocketClosed: The connection was closed as expected.
-   ClientClosed: Session Manager Client closed the connection.

AgentNeedUpgrade

IdentityType

string

The principal type. Valid values:

-   Account: an Alibaba Cloud account
-   RAMUser: a RAM user
-   AssumedRoleUser: a RAM role

RAMUser

PrincipalId

string

The ID of the principal. Valid values based on the `IdentityType` value:

-   If the requester uses an Alibaba Cloud account to call the operation, the ID of the Alibaba Cloud account is returned.
-   If the requester uses a Resource Access Management (RAM) user to call the operation, the ID of the RAM user is returned.
-   If the requester uses a RAM role to call the operation, the ID of the principal that actually calls the operation is returned.

123456xxxx

Username

string

The username used to establish connections.

root

CreationTime

string

The time when the session was created.

2024-01-19T09:15:46Z

TargetServer

string

The address of the service that was accessed in a virtual private cloud (VPC) from the instance.

192.168.0.246

PortNumber

integer

The port number of the instance, which is used for data forwarding. If no port number was specified for data forwarding when the session was created, this parameter is empty.

22

ClientIP

string

The IP address of the client used to establish connections.

192.168.1.1

SessionId

string

The session ID.

s-hz023od0x9\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "NextToken": "AAAAAdDWBF2****",
  "Sessions": {
    "Session": [
      {
        "Connections": {
          "Connection": [
            {
              "Status": "Connecting",
              "FailedDetail": "The Session Manager is closed normally.",
              "EndTime": "2024-01-19T09:16:46Z",
              "InstanceId": "i-bp1i7gg30r52z2em****",
              "StartTime": "2024-01-19T09:16:40Z",
              "ClosedReason": "AgentNeedUpgrade"
            }
          ]
        },
        "IdentityType": "RAMUser",
        "PrincipalId": "123456xxxx",
        "Username": "root",
        "CreationTime": "2024-01-19T09:15:46Z",
        "TargetServer": "192.168.0.246",
        "PortNumber": 22,
        "ClientIP": "192.168.1.1",
        "SessionId": "s-hz023od0x9****"
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

InvalidParameter.NextToken

The specified parameter NextToken is not valid.

The specified parameter NextToken is illegal.

400

InvalidParameter.MaxResults

The specified parameter MaxResults is not valid.

The specified parameter MaxResults is illegal.

404

InvalidRegionId.NotFound

The specified parameter RegionId does not exist.

\-

500

InternalError

An error occurred when you dispatched the request.

An error occurred while sending the request, please try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history
