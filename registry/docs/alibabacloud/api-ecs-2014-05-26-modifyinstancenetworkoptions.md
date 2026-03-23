Modifies instance network configurations.

## Operation description

When you call this operation, note that:

-   This is an asynchronous operation. The ID of the asynchronous task is returned after the call. Query the asynchronous task result to determine whether the execution is complete.
-   You can modify only one attribute at a time. If you modify multiple attributes, call this operation multiple times.
-   To modify the BandwidthWeighting, you must specify the specifications of the instance. You can use the [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes) to query whether the current instance type supports bandwidth weights and the supported bandwidth weights.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceNetworkOptions)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyInstanceNetworkOptions)

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

ecs:ModifyInstanceNetworkOptions

update

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

InstanceId

string

No

The ID of the instance whose network bandwidth weight is to be modified.

i-bp67acfmxazb4p\*\*\*\*

BandwidthWeighting

string

No

The bandwidth weight.

The supported values vary with instance types. You can query the bandwidth weights supported by the current instance type by using the [DescribeInstanceTypes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstancetypes) .

Valid values:

-   Vpc-L1: Vpc-L1.
-   Vpc-L2: Vpc-L2.
-   Ebs-L1: Ebs-L1.
-   Ebs-L2: Ebs-L2.
-   Default: the Default.

Vpc-L1

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

TaskId

string

The ID of the task for which the bandwidth weight is modified.

You can use the [DescribeTaskAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describetaskattribute) interface to modify the bandwidth weight result.

t-bp198jigq7l0h5ac\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "TaskId": "t-bp198jigq7l0h5ac****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IdempotentParameterMismatch

The request uses the same client token as a previous, but non-identical request. Do not reuse a client token with different requests, unless the requests are identical.

\-

400

InvalidInstanceType.NetworkOptionsBandwidthWeightingUnsupported

The current instance type does not support setting or modifying the BandwidthWeighting parameter.

The current instance type does not support setting or modifying the BandwidthWeighting parameter.

400

InvalidParameter.NetworkOptionsBandwidthWeighting

The specified parameter BandwidthWeighting is not valid.The correct value should be in \[%s\].

The specified parameter BandwidthWeighting is not valid.The correct value should be in \[%s\].

404

InvalidInstanceId.NotFound

Specified instance does not exist.

The specified instance does not exist. Check whether the instance ID is correct.

503

LimitedOperation.ServiceUnavailable

The service is currently unavailable. Please try again later.

The service is currently unavailable. Please try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-12-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyInstanceNetworkOptions?updateTime=2025-12-03#workbench-doc-change-demo)
