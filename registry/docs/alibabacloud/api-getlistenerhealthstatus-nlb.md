Queries the health check status of a Network Load Balancer (NLB) listener.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Nlb/2022-04-30/GetListenerHealthStatus)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Nlb/2022-04-30/GetListenerHealthStatus)

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

nlb:GetListenerHealthStatus

get

\*LoadBalancer

`acs:nlb:{#regionId}:{#accountId}:loadbalancer/{#LoadBalancerId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ListenerId

string

Yes

The ID of the listener on the NLB instance.

lsn-bp1bpn0kn908w4nbw\*\*\*\*@80

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

The health check status of the listener.

RequestId

string

The ID of the request.

54B48E3D-DF70-471B-AA93-08E683A1B45

ListenerHealthStatus

array<object>

The health check status of the server group of the listener.

ListenerHealthStatus

object

The health check status of the server group of the listener.

ListenerId

string

The ID of the listener of the NLB instance.

lsn-bp1bpn0kn908w4nbw\*\*\*\*@80

ListenerPort

integer

The listening port.

80

ListenerProtocol

string

The listening protocol. Valid values: **TCP**, **UDP**, and **TCPSSL**.

TCPSSL

ServerGroupInfos

array<object>

The information about the server groups.

ServerGroupInfo

object

The information about the server group.

HeathCheckEnabled

boolean

Indicates whether the health check feature is enabled. Valid values:

-   **true**: enabled
-   **false**: disabled

true

ServerGroupId

string

The ID of the server group.

sgp-ppdpc14gdm3x4o\*\*\*\*

NonNormalServers

array<object>

A list of unhealthy backend servers.

AbnormalServer

object

A list of unhealthy backend servers.

Status

string

The health check status. Valid values:

-   **Initial**: indicates that health checks are configured for the NLB instance, but no data was found.
-   **Unhealthy**: indicates that the backend server consecutively fails health checks.
-   **Unavailable**: indicates that health checks are disabled.

Initial

Port

integer

The backend port.

80

Reason

object

The cause of the health check failure.

ReasonCode

string

The reason why the **status** is abnormal. Valid values:

-   **CONNECT\_TIMEOUT**: The NLB instance failed to connect to the backend server within the specified period of time.
-   **CONNECT\_FAILED**: The NLB instance failed to connect to the backend server.
-   **RECV\_RESPONSE\_TIMEOUT**: The NLB instance failed to receive a response from the backend server within the specified period of time.
-   **CONNECT\_INTERRUPT**: The connection between the health check and the backend servers was interrupted.
-   **HTTP\_CODE\_NOT\_MATCH**: The HTTP status code from the backend servers was not the expected one.
-   **HTTP\_INVALID\_HEADER**: The format of the response from the backend servers is invalid.

CONNECT\_TIMEOUT

ServerId

string

The ID of the backend server.

i-bp1bt75jaujl7tjl\*\*\*\*

ServerIp

string

The IP address of the backend server.

192.168.8.10

TotalCount

integer

The number of entries returned.

10

NextToken

string

The token that is used for the next query. Valid values:

-   If **NextToken** is empty, it indicates that no next query is to be sent.
-   If a value of **NextToken** is returned, the value is the token used for the next query.

FFmyTO70tTpLG6I3FmYAXGKPd\*\*\*\*

MaxResults

integer

The number of entries returned per page.

20

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "54B48E3D-DF70-471B-AA93-08E683A1B45",
  "ListenerHealthStatus": [
    {
      "ListenerId": "\tlsn-bp1bpn0kn908w4nbw****@80",
      "ListenerPort": 80,
      "ListenerProtocol": "TCPSSL",
      "ServerGroupInfos": [
        {
          "HeathCheckEnabled": true,
          "ServerGroupId": "sgp-ppdpc14gdm3x4o****",
          "NonNormalServers": [
            {
              "Status": "Initial",
              "Port": 80,
              "Reason": {
                "ReasonCode": "CONNECT_TIMEOUT"
              },
              "ServerId": "i-bp1bt75jaujl7tjl****",
              "ServerIp": "192.168.8.10"
            }
          ]
        }
      ]
    }
  ],
  "TotalCount": 10,
  "NextToken": "FFmyTO70tTpLG6I3FmYAXGKPd****",
  "MaxResults": 20
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

SystemBusy

System is busy, please try again later.

\-

403

Forbidden.NoPermission

Authentication is failed for NoPermission.

Authentication is failed for NoPermission.

404

ResourceNotFound.loadBalancer

The specified resource of loadbalancer is not found.

The specified load balancer resource was not found. Please check the input parameters.

404

ResourceNotFound.listener

The specified resource %s is not found.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-08-16

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/GetListenerHealthStatus?updateTime=2024-08-16#workbench-doc-change-demo)

2023-10-10

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/GetListenerHealthStatus?updateTime=2023-10-10#workbench-doc-change-demo)

2023-10-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/GetListenerHealthStatus?updateTime=2023-10-09#workbench-doc-change-demo)

2023-09-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/GetListenerHealthStatus?updateTime=2023-09-26#workbench-doc-change-demo)

2023-09-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/GetListenerHealthStatus?updateTime=2023-09-13#workbench-doc-change-demo)
