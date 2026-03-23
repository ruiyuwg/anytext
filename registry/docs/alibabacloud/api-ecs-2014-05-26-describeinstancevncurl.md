Queries the Virtual Network Computing (VNC) logon address of an Elastic Compute Service (ECS) instance.

## Operation description

-   You cannot directly use the VNC logon address (VncUrl) in the response to log on to an ECS instance. To log on to the ECS instance, you can use the **web management terminal URL** that contains the VNC logon address.

**Note** To construct a web management terminal URL, add the `vncUrl=\*\*\*\*`, `instanceId=****`, and `isWindows=true/false` parameters at the end of `https://g.alicdn.com/aliyun/ecs-console-vnc2/0.0.8/index.html?`. Separate each parameter with an ampersand (`&`). Parameter description:

-   `vncUrl`: the VNC logon address.
    
-   `instanceId`: the instance ID.
    
-   `isWindows`: specifies whether the operating system of your ECS instance is Windows. A value of `true` specifies that the operating system is Windows. A value of `false` specifies that the operating system is not Windows.
    
-   You can connect to an ECS instance without using a VNC logon password. Therefore, you do not need to specify the `password` parameter.
    
-   The keepalive time of a connection to a VNC management terminal is 300 seconds. If you do not interact with the VNC management terminal within 300 seconds, the VNC management terminal is automatically disconnected.
    
-   If the connection is interrupted, you must call the DescribeInstanceVncUrl operation to obtain a new VNC logon address (`VncUrl`) and use the new logon address to construct a new web management terminal URL that you can use to reconnect to the VNC management terminal. You can reconnect to a VNC management terminal up to 30 times per minute.
    

Sample web management terminal URL:

```
https://g.alicdn.com/aliyun/ecs-console-vnc2/0.0.8/index.html?vncUrl=ws%3A%2F%****&instanceId=i-wz9hhwq5a6tm****&isWindows=true
```

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceVncUrl)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceVncUrl)

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

ecs:DescribeInstanceVncUrl

get

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

The region ID of the instance. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent list of regions.

cn-hangzhou

InstanceId

string

Yes

The ID of the instance

i-bp1hzoinajzkh91h\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

VncUrl

string

The VNC logon address.

**Note** The VNC logon address returned is valid only for 15 seconds. If a connection is not established within 15 seconds after a successful call, the VNC logon address expires and you must call the DescribeInstanceVncUrl operation to obtain a new logon address.

wss%3A%2F%2Fhz01-vncproxy.aliyun.com%2Fwebsockify%2F%3Fs%3DDvh%252FIA%252BYc73gWO48cBx2gBxUDVzaAnSKr74pq30mzqUYgeUMcB%252FbkNixDxdEA996

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "VncUrl": "wss%3A%2F%2Fhz01-vncproxy.aliyun.com%2Fwebsockify%2F%3Fs%3DDvh%252FIA%252BYc73gWO48cBx2gBxUDVzaAnSKr74pq30mzqUYgeUMcB%252FbkNixDxdEA996",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidRegionInstance

The specified InstanceId does not exist in given region.

The instance does not exist in the specified region.

403

IncorrectInstanceStatus

The current status of the resource does not support this operation.

The resource is in a state that does not support the current operation.

403

InstanceNotReady

The specified instance is not ready for use

The specified instance is not available. Check to see if the instance status is preventing this action and try again later.

403

InstanceNotReady

Temporarily unable to connect the specified instance,please try later.

\-

404

InvalidRegionId.NotFound

The specified RegionId does not exist.

The specified region ID does not exist.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

500

InternalError

The request processing has failed due to some unknown error.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceVncUrl?updateTime=2024-12-17#workbench-doc-change-demo)
