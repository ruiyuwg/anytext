Creates a session by using the session management feature. When you call this operation, you can include the ID of an Elastic Compute Service (ECS) instance in the request to create a WebSocket session for the instance. The URL of the WebSocket session returned by the operation can be used to connect to the instance.

## Operation description

## [](#usage-notes)[](#)Usage notes

When you use custom code to connect to an ECS instance that serves as a client, you can call this operation to obtain the WebSocket URL that is used to connect to the instance. Take note of the following items:

-   The ECS instance must be in the Running state.
    
-   Cloud Assistant Agent must be installed on the ECS instance. You can call the [DescribeCloudAssistantStatus](/help/en/ecs/api-describecloudassistantstatus) operation to check whether Cloud Assistant Agent is installed on the ECS instance and query the version number of the installed Cloud Assistant Agent.
    
    -   If Cloud Assistant Agent is not installed on the ECS instance, call the [InstallCloudAssistant](/help/en/ecs/api-installcloudassistant) operation to install Cloud Assistant Agent.
        
    -   The Cloud Assistant Agent versions that are later than the following ones support the session management feature. If you need to upgrade the Cloud Assistant Agent version, follow the instructions in [Upgrade or disable upgrades of Cloud Assistant Agent](/help/en/ecs/user-guide/upgrade-or-disable-upgrades-for-the-cloud-assistant-agent).
        
        -   Linux operating system: 2.2.3.256
        -   Windows operating system: 2.1.3.256
-   Each WebSocket URL returned by the StartTerminalSession operation remains valid for 10 minutes.
    
-   If no data is transferred over a session within 3 minutes, Cloud Assistant closes the session connection.
    
-   Up to 1,000 sessions can be created and available in a region. Each ECS instance can have up to 20 sessions in the connected state. Each session supports a bandwidth of up to 200 Kbit/s.
    
-   The port forwarding feature supports only TCP port forwarding. UDP port forwarding is not supported.
    
-   If you want to permanently close a session and invalidate the WebSocket URL, call the EndTerminalSession operation.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/StartTerminalSession)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/StartTerminalSession)

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

ecs:StartTerminalSession

update

\*Instance

`acs:ecs:{#regionId}:{#accountId}:instance/{#instanceId}`

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

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceId

array

Yes

The instance IDs.

string

Yes

The ID of instance N. You can specify up to 10 instance IDs in a single request. Valid values of N: 1 to 10.

i-bp1eifrtpxa9tb\*\*\*\*

PortNumber

integer

No

The port number of the ECS instance. The port is used to forward data. After this parameter is configured, Cloud Assistant Agent forwards data to the specified port. For example, you can set this parameter to 22 for data forwarding over SSH.

This parameter is empty by default, which indicates that no port is configured to forward data.

22

CommandLine

string

No

The command to run after the session is initiated. The command length cannot exceed 512 characters.

**Note** If you specify the `CommandLine` parameter, you cannot specify the `PortNumber` or `TargetServer` parameter.

ssh root@192.168.0.246

TargetServer

string

No

The IP address of the instance. You can use the IP address to access the destination service in a virtual private cloud (VPC).

**Note** If this parameter is not empty, `PortNumber` specifies the port number that is used by the managed instance to access the destination service in the VPC.

192.168.0.246

Username

string

No

The username used for connection establishment.

testUser

ConnectionType

string

No

The network type of the WebSocket URL required to connect to the instance. Valid values:

-   Internet (default)
-   Intranet

Intranet

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

EB5173B0-8E80-564E-AAD1-3135412\*\*\*\*\*

SessionId

string

The session ID.

s-hz023od0x9\*\*\*\*

SecurityToken

string

The security token included in the WebSocket request header. The system uses this token to authenticate the request.

d86c2df2-d19c-4bd8-b817-a19ef123\*\*\*\*

WebSocketUrl

string

The URL of the WebSocket session that is used to connect to the instance. The URL includes the session ID (`SessionId`) and the authentication token (`SecurityToken`).

wss://cn-hangzhou.axt.aliyuncs.com/session?sessionId=s-hz023od0x9\*\*\*\*&token=d86c2df2-d19c-4bd8-b817-a19ef123\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "EB5173B0-8E80-564E-AAD1-3135412*****",
  "SessionId": "s-hz023od0x9****",
  "SecurityToken": "d86c2df2-d19c-4bd8-b817-a19ef123****",
  "WebSocketUrl": "wss://cn-hangzhou.axt.aliyuncs.com/session?sessionId=s-hz023od0x9****&token=d86c2df2-d19c-4bd8-b817-a19ef123****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

RegionId.ApiNotSupported

The api is not supported in this region.

The API operation cannot be called in the specified region. Check whether the specified RegionId parameter is valid.

400

PortNumber.Invalid

The port number is invalid.

The port number is invalid.

400

InvalidParameter.ConnectionType

The specified parameter ConnectionType is not valid.

The specified parameter ConnectionType is illegal.

403

InstanceIds.ExceedLimit

The number of instance IDs exceeds the upper limit.

The number of specified instance IDs exceeds the upper limit.

403

SessionCount.ExceedLimit

The number of sessions exceeds the upper limit.

The number of sessions in the connected state exceeds the upper limit.

403

Operation.Forbidden

The operation is not permitted.

The operation is not supported.

403

PortForwarding.NotSupported

Port forwarding is not supported currently.

Port forwarding is not supported.

403

UserBehavior.SessionManagerDisabled

The api is disabled by user behavior.

\-

403

InvalidCommandLine.Conflict

The parameter PortNumber or TargetServer cannot be specified with parameter CommandLine.

\-

403

InvalidTargetServer.MissingPortNumber

The parameter PortNumber must be specified with parameter TargetServer.

\-

403

InvalidCommandLine.LengthLimitExceeded

The length of the parameter CommandLine exceeded the limit of 512 characters.

\-

403

InvalidInstanceIds.CountLimitExceeded

The count of Instances exceeded the maximum limit of 1 when TargetServer or CommandLine parameter was specified.

\-

403

Username.ExceedLimit

The length of the username exceeds the upper limit.

The length of the username exceeds the upper limit.

403

InvalidOperation.SecurityGroupRuleDenied

The operation is not allowed by the security group inbound rules of the specified instance.

\-

403

InvalidTargetServer.LengthLimitExceeded

The length of the parameter TargetServer exceeded the limit of 128 characters.

\-

403

InvalidOperation.ConnectionTypeUnsupported

The operation is not supported for the parameter ConnectionType.

\-

403

InvalidPasswordName.LengthLimitExceeded

The length of the parameter PasswordName exceeds the limit of 255 characters.

\-

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidInstance.NotFound

The specified instances not found.

The specified instance ID does not exist.

500

InternalError.Dispatch

An error occurred when you dispatched the request.

An error occurred while the request is being sent. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-11

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StartTerminalSession?updateTime=2025-04-11#workbench-doc-change-demo)

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StartTerminalSession?updateTime=2024-12-05#workbench-doc-change-demo)

2024-07-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StartTerminalSession?updateTime=2024-07-18#workbench-doc-change-demo)

2024-04-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StartTerminalSession?updateTime=2024-04-28#workbench-doc-change-demo)

2024-03-12

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StartTerminalSession?updateTime=2024-03-12#workbench-doc-change-demo)

2023-08-16

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StartTerminalSession?updateTime=2023-08-16#workbench-doc-change-demo)

2023-05-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StartTerminalSession?updateTime=2023-05-12#workbench-doc-change-demo)

2023-03-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/StartTerminalSession?updateTime=2023-03-15#workbench-doc-change-demo)
