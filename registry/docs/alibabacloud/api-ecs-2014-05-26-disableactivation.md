To prevent an activation code from being leaked, you can call the DisableActivation operation to disable the activation code. Disabled activation codes cannot be used to register new managed instances. However, managed instances that are already registered are not affected.

## Operation description

## [](#usage-notes)[](#)Usage notes

To prevent an activation code from being leaked, you can call the DisableActivation operation to disable the activation code. Disabled activation codes cannot be used to register new managed instances. However, managed instances that are already registered are not affected.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DisableActivation)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DisableActivation)

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

ecs:DisableActivation

update

\*Activation

`acs:ecs:{#regionId}:{#accountId}:activation/{#ActivationId}`

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

ActivationId

string

Yes

The request ID.

4ECEEE12-56F1-4FBC-9AB1-890F1234\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

Details about the activation code and its usage information.

4ECEEE12-56F1-4FBC-9AB1-890F74942176

Activation

object

The time when the activation code was created.

CreationTime

string

The number of instances that were deregistered.

2021-01-20T06:00:00Z

DeregisteredCount

integer

The maximum number of times that the activation code can be used to register managed instances.

1

InstanceCount

integer

The description of the activation code.

1

Description

string

The number of registered instances.

This is description.

RegisteredCount

integer

The default prefix of the instance name.

1

InstanceName

string

Indicates whether the activation code is disabled.

test-InstanceName

Disabled

boolean

The IP addresses of the hosts that can use the activation code.

false

IpAddressRange

string

The validity period of the activation code. Unit: hours.

0.0.0.0/0

TimeToLiveInHours

long

The activation code ID.

4

ActivationId

string

The ID of the activation code.

4ECEEE12-56F1-4FBC-9AB1-890F1234\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "4ECEEE12-56F1-4FBC-9AB1-890F74942176",
  "Activation": {
    "CreationTime": "2021-01-20T06:00:00Z",
    "DeregisteredCount": 1,
    "InstanceCount": 1,
    "Description": "This is description.",
    "RegisteredCount": 1,
    "InstanceName": "test-InstanceName",
    "Disabled": false,
    "IpAddressRange": "0.0.0.0/0",
    "TimeToLiveInHours": 4,
    "ActivationId": "4ECEEE12-56F1-4FBC-9AB1-890F1234****"
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

ActivationId.NotFound

The specified activation id does not exist.

The specified activation code does not exist.

500

InternalError.Dispatch

An error occurred when you dispatched the request.

An error occurred while the request is being sent. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DisableActivation?updateTime=2024-12-05#workbench-doc-change-demo)

2022-02-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DisableActivation?updateTime=2022-02-25#workbench-doc-change-demo)
