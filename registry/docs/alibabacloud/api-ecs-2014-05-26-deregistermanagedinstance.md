Deregisters a managed instance. After you deregister the managed instance, you can no longer use Cloud Assistant to send commands or files to the instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeregisterManagedInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeregisterManagedInstance)

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

ecs:DeregisterManagedInstance

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

The region ID. Supported regions: China (Qingdao), China (Beijing), China (Zhangjiakou), China (Hohhot), China (Ulanqab), China (Hangzhou), China (Shanghai), China (Shenzhen), China (Heyuan), China (Guangzhou), China (Chengdu), China (Hong Kong), Singapore, Japan (Tokyo), US (Silicon Valley), and US (Virginia).

You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceId

string

Yes

The managed instance ID.

mi-hz01axdfas\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

4ECEEE12-56F1-4FBC-9AB1-890F74942176

Instance

object

Details of the managed instances.

LastInvokedTime

string

The time when the Cloud Assistant task was last executed.

2021-01-20T09:00:40Z

InternetIp

string

The public IP address of the managed instance.

47.8.\*\*.\*\*

Hostname

string

The hostname of the managed instance.

test-Hostname

InstanceId

string

The managed instance ID.

mi-hz01axdfas\*\*\*\*

ActivationId

string

The activation code ID.

4ECEEE12-56F1-4FBC-9AB1-890F7494\*\*\*\*

IntranetIp

string

The internal IP address of the managed instance.

10.0.\*\*.\*\*

AgentVersion

string

The version number of Cloud Assistant Agent.

2.2.0.102

RegistrationTime

string

The time when the managed instance was registered.

2021-01-20T08:57:56Z

InstanceName

string

The name of the managed instance.

test-InstanceName-001

OsType

string

The operating system type of the managed instance.

linux

OsVersion

string

The version information about the operating system.

Linux\_#38~18.04.1-Ubuntu SMP Wed Jan 6 18:26:30 UTC 2021\_x86\_64

InvocationCount

long

The number of times that Cloud Assistant tasks were executed on the managed instance.

2

MachineId

string

The machine code of the managed instance.

e03231b37ab14e53b5795ad625fc\*\*\*\*

ResourceGroupId

string

The ID of the resource group to which the managed instance belongs.

rg-123\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "4ECEEE12-56F1-4FBC-9AB1-890F74942176",
  "Instance": {
    "LastInvokedTime": "2021-01-20T09:00:40Z",
    "InternetIp": "47.8.**.**",
    "Hostname": "test-Hostname",
    "InstanceId": "mi-hz01axdfas****",
    "ActivationId": "4ECEEE12-56F1-4FBC-9AB1-890F7494****",
    "IntranetIp": "10.0.**.**",
    "AgentVersion": "2.2.0.102",
    "RegistrationTime": "2021-01-20T08:57:56Z",
    "InstanceName": "test-InstanceName-001",
    "OsType": "linux",
    "OsVersion": "Linux_#38~18.04.1-Ubuntu SMP Wed Jan 6 18:26:30 UTC 2021_x86_64",
    "InvocationCount": 2,
    "MachineId": "e03231b37ab14e53b5795ad625fc****",
    "ResourceGroupId": "rg-123******"
  }
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

403

Operation.Forbidden

The operation is not permitted.

The operation is not supported.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidInstance.NotFound

The specified instance id does not exist.

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

2025-11-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeregisterManagedInstance?updateTime=2025-11-25#workbench-doc-change-demo)

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeregisterManagedInstance?updateTime=2024-12-05#workbench-doc-change-demo)

2023-11-23

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeregisterManagedInstance?updateTime=2023-11-23#workbench-doc-change-demo)

2022-02-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeregisterManagedInstance?updateTime=2022-02-25#workbench-doc-change-demo)
