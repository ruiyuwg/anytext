Stops a listener of a Network Load Balancer (NLB) instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Nlb/2022-04-30/StopListener)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Nlb/2022-04-30/StopListener)

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

nlb:StopListener

update

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

The listener ID.

lsn-bp1bpn0kn908w4nbw\*\*\*\*@80

DryRun

boolean

No

Specifies whether to perform a dry run, without sending the actual request. Valid values:

-   **true**: performs a dry run without performing the operation. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, and service limits. If the request fails the dry run, an error message is returned. If the request passes the dry run, the `DryRunOperation` error code is returned.
-   **false** (default): performs a dry run and sends the actual request. If the request passes the dry run, a 2xx HTTP status code is returned and the operation is performed.

false

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token. Ensure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system uses the **request ID** as the **client token**. The **request ID** is different for each request.

123e4567-e89b-12d3-a456-426655440000

RegionId

string

No

The region ID of the NLB instance.

You can call the [DescribeRegions](/help/en/slb/api-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

The operation to disable a listener.

RequestId

string

The request ID.

CEF72CEB-54B6-4AE8-B225-F876FF7BA984

JobId

string

The ID of the asynchronous task.

72dcd26b-f12d-4c27-b3af-18f6aed5\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "CEF72CEB-54B6-4AE8-B225-F876FF7BA984",
  "JobId": "72dcd26b-f12d-4c27-b3af-18f6aed5****"
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

400

IncorrectStatus.listener

The status of listener \[%s\] is incorrect.

The current operation cannot be performed on the listener as its status is unavailable. Please check if the listener is currently undergoing any other operations.

400

DryRunOperation

Request validation has been passed with DryRun flag set.

Request validation has been passed with DryRun flag set.

403

Forbidden.NoPermission

Authentication is failed for NoPermission.

Authentication is failed for NoPermission.

404

ResourceNotFound.listener

The specified resource %s is not found.

\-

404

ResourceNotFound.loadBalancer

The specified resource of loadbalancer is not found.

The specified load balancer resource was not found. Please check the input parameters.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Nlb/2022-04-30/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-03-21

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/StopListener?updateTime=2024-03-21#workbench-doc-change-demo)

2024-02-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/StopListener?updateTime=2024-02-29#workbench-doc-change-demo)

2023-12-18

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/StopListener?updateTime=2023-12-18#workbench-doc-change-demo)

2023-10-09

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/StopListener?updateTime=2023-10-09#workbench-doc-change-demo)

2023-09-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/StopListener?updateTime=2023-09-26#workbench-doc-change-demo)

2023-08-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Nlb/2022-04-30/StopListener?updateTime=2023-08-22#workbench-doc-change-demo)
