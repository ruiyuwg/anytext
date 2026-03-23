Installs Cloud Assistant Agent on Elastic Compute Service (ECS) instances. After you install Cloud Assistant Agent on ECS instances, restart the instances for the installation to take effect.

## Operation description

## [](#usage-notes)[](#)Usage notes

After you call the InstallCloudAssistant operation to install Cloud Assistant Agent on an ECS instance, call the [RebootInstance](/help/en/ecs/api-rebootinstance) operation to restart the instance to make the installation take effect.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/InstallCloudAssistant)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/InstallCloudAssistant)

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

ecs:InstallCloudAssistant

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

The IDs of instances. You can specify up to 50 instance IDs in a single request.

cn-hangzhou

InstanceId

array

Yes

The ID of the instance.

string

Yes

The request ID.

i-bp1iudwa5b1tqa\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The request ID.

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
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

MissingParam.InstanceId

The parameter instanceId is missing or empty.

\-

403

InstanceIds.ExceedLimit

The number of instance IDs exceeds the upper limit.

The number of specified instance IDs exceeds the upper limit.

403

Operation.Forbidden

The operation is not permitted.

The operation is not supported.

403

InvalidInstanceId.OSTypeUnsupported

The OS type of the instance %s corresponding to the parameter InstanceId does not support the operation.

The operating system type of the instance corresponding to the parameter InstanceId does not support this operation.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidInstance.NotFound

The specified instance does not exist.

\-

500

InternalError.Dispatch

An error occurred when you dispatched the request.

An error occurred while the request is being sent. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-01-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InstallCloudAssistant?updateTime=2025-01-14#workbench-doc-change-demo)

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InstallCloudAssistant?updateTime=2024-12-05#workbench-doc-change-demo)

2022-02-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/InstallCloudAssistant?updateTime=2022-02-25#workbench-doc-change-demo)
