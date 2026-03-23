Modifies the information of a managed instance.

## Operation description

## [](#usage-notes)[](#)Usage notes

The ModifyManagedInstance operation can be called to change only the name of a single managed instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyManagedInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyManagedInstance)

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

ecs:ModifyManagedInstance

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

The new name of the managed instance. The name must be 1 to 128 characters in length. It must start with a letter and cannot start with a special character or a digit. It can contain letters, digits, periods (.), underscores (\_), hyphens (-), and colons (:) and cannot start with `http://` or `https://`.

mi-hz01nmcf\*\*\*\*

InstanceName

string

Yes

The new name of the managed instance. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with a special character or a digit. The name can contain letters, digits, periods (.), underscores (\_), hyphens (-), and colons (:) and cannot start with `http://` or `https://`.

testInstanceName

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

Details of the managed instance.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Instance

object

The name of the managed instance.

InstanceName

string

The ID of the managed instance.

testInstanceName

InstanceId

string

The managed instance ID.

mi-hz01nmcf\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Instance": {
    "InstanceName": "testInstanceName",
    "InstanceId": "mi-hz01nmcf****"
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

400

InstanceName.ExceedLimit

The specified instance name exceed limit.

The length of the managed instance name exceeds the upper limit.

400

InstanceName.InvalidPattern

The specified instance name pattern invalid.

The managed instance name is invalid.

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

The specified instances id does not exist.

The specified managed instance ID does not exist.

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

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyManagedInstance?updateTime=2025-11-25#workbench-doc-change-demo)

2024-12-05

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyManagedInstance?updateTime=2024-12-05#workbench-doc-change-demo)

2022-02-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyManagedInstance?updateTime=2022-02-25#workbench-doc-change-demo)
