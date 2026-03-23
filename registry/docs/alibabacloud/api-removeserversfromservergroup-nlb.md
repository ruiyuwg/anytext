Deletes server groups from a Network Load Balancer (NLB) instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Nlb/2022-04-30/RemoveServersFromServerGroup)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Nlb/2022-04-30/RemoveServersFromServerGroup)

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

nlb:RemoveServersFromServerGroup

delete

\*ServerGroup

`acs:nlb:{#regionId}:{#accountId}:servergroup/{#ServerGroupId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ServerGroupId

string

Yes

The server group ID.

sgp-atstuj3rtoptyui\*\*\*\*

Servers

array<object>

Yes

The backend servers. You can specify up to 200 backend servers in each call.

Server

object

Yes

The backend server. You can specify up to 200 backend servers in each call.

ServerId

string

Yes

The backend server ID.

-   If the server group is of the **Instance** type, set this parameter to the IDs of servers of the **Ecs**, **Eni**, or **Eci** type.
-   If the server group is of the **Ip** type, set ServerId to IP addresses.

ecs-bp67acfmxazb4p\*\*\*\*

ServerType

string

Yes

The type of the backend server. Valid values:

-   **Ecs**: the Elastic Compute Service (ECS) instance
-   **Eni**: the elastic network interface (ENI)
-   **Eci**: the elastic container instance
-   **Ip**: the IP address

Ecs

ServerIp

string

No

The IP addresses of the server. If the server group type is **Ip**, set the ServerId parameter to IP addresses.

192.168.6.6

Port

integer

No

The port that is used by the backend server. Valid values: **0** to **65535**. If you do not set this parameter, the default value **0** is used.

443

DryRun

boolean

No

Specifies whether to perform a dry run. Valid values:

-   **true**: validates the request without performing the operation. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the validation, the corresponding error message is returned. If the request passes the validation, the `DryRunOperation` error code is returned.
-   **false** (default): validates the request and performs the operation. If the request passes the validation, a 2xx HTTP status code is returned and the operation is performed.

false

ClientToken

string

No

The client token used to ensure the idempotence of the request.

You can use the client to generate the token. Ensure that the token is unique among different requests. Only ASCII characters are allowed.

**Note** If you do not set this parameter, the value of **RequestId** is used.\*\*\*\* The value of **RequestId** is different for each request.

123e4567-e89b-12d3-a456-426655440000

RegionId

string

No

The ID of the region where the NLB instance is deployed.

You can call the [DescribeRegions](/help/en/slb/api-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

Removes backend servers from a server group.

RequestId

string

The request ID.

54B48E3D-DF70-471B-AA93-08E683A1B45

ServerGroupId

string

The server group ID.

sgp-atstuj3rtoptyui\*\*\*\*

JobId

string

The ID of the asynchronous task.

72dcd26b-f12d-4c27-b3af-18f6aed5\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "54B48E3D-DF70-471B-AA93-08E683A1B45",
  "ServerGroupId": "sgp-atstuj3rtoptyui****",
  "JobId": "72dcd26b-f12d-4c27-b3af-18f6aed5****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Conflict.Lock

The Lock \[%s\] is conflict.

The specific resource is conflict.

400

IncorrectStatus.serverGroup

The status of servergroup \[%s\] is incorrect.

The current operation cannot be performed on the server group as its status is unavailable. Please check if the server group is currently undergoing any other operations.

400

IllegalParam.%s

The param of %s is illegal.

\-

400

SystemBusy

System is busy, please try again later.

\-

400

IdempotenceSignatureMismatch

The idempotence token of request is same with the prev one, but the signature is different.

The requested idempotent token is the same as the previous one, but the signature is different.

403

Forbidden.NoPermission

Authentication is failed for NoPermission.

Authentication is failed for NoPermission.

404

ResourceNotFound.BackendServer

The specified resource of BackendServer is not found.

The specified backend server resource was not found. Please check the input parameters.

404

ResourceNotFound.serverGroup

The specified resource of serverGroup is not found.

The specified resource of serverGroup is not found. Please check the input parameters.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-02-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/RemoveServersFromServerGroup?updateTime=2024-02-04#workbench-doc-change-demo)

2024-01-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/RemoveServersFromServerGroup?updateTime=2024-01-29#workbench-doc-change-demo)

2023-09-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/RemoveServersFromServerGroup?updateTime=2023-09-26#workbench-doc-change-demo)

2023-09-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/RemoveServersFromServerGroup?updateTime=2023-09-05#workbench-doc-change-demo)

2023-08-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/RemoveServersFromServerGroup?updateTime=2023-08-22#workbench-doc-change-demo)

2023-08-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/RemoveServersFromServerGroup?updateTime=2023-08-22#workbench-doc-change-demo)
