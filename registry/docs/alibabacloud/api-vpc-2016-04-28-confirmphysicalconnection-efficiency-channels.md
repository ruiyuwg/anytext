Changes the status of an Express Connect circuit to Confirmed.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ConfirmPhysicalConnection)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ConfirmPhysicalConnection)

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

vpc:ConfirmPhysicalConnection

get

\*All Resources

`*`

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

The region ID of the Express Connect circuit.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-shanghai

PhysicalConnectionId

string

Yes

The ID of the Express Connect circuit.

pc-119mf\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

02fb3da4-130e-11e9-8e44-0016e0\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

API-20365164-5b0d-460a-83c2-2189972b\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "API-20365164-5b0d-460a-83c2-2189972b****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

OperationFailed.PconnTrafficNotEnable

The operation is failed because of PconnTrafficNotEnable.

Billing for outbound data transfer is disabled.

400

ResourceNotFound.PhysicalConnectionId

PhysicalConnection is not found.

PhysicalConnectionId is set to an invalid value.

400

MissingParam.RegionNo

RegionNo is missing.

The RegionNo parameter is not set.

400

MissingParam.AliUid

AliUid is missing.

The AliUid parameter is not set.

400

MissingParam.PhysicalConnectionId

PhysicalConnectionId is missing.

The PhysicalConnectionId is not set.

400

InvalidPhysicalConnectionId.NotFound

The specified physicalConnection is not found

The PhysicalConnectionId parameter is set to an invalid value.

400

InvalidRegionId.NotFound

The specified RegionId is not found.

The specified region ID is invalid. Check whether the service is available in the specified region.

400

IncorrectStatus.PhysicalConnection

The specified PhysicalConnectionId is not in Allocated state.

The PhysicalConnectionId parameter is not in the Allocated state.

400

OperationUnsupported.SkipConstruction

You can not skip construction.

You cannot skip the construction step.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-06-28

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ConfirmPhysicalConnection?updateTime=2024-06-28#workbench-doc-change-demo)

2021-09-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ConfirmPhysicalConnection?updateTime=2021-09-27#workbench-doc-change-demo)
