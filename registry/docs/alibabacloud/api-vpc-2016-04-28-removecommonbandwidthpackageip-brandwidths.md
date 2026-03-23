Disassociates an EIP from an Internet Shared Bandwidth instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/RemoveCommonBandwidthPackageIp)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/RemoveCommonBandwidthPackageIp)

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

vpc:RemoveCommonBandwidthPackageIp

delete

\*BandwidthPackage

`acs:vpc:{#regionId}:{#accountId}:combandwidthpackage/{#BandwidthPackageId}`

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

The region ID of the Internet Shared Bandwidth instance.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

BandwidthPackageId

string

Yes

The ID of the Internet Shared Bandwidth instance.

cbwp-2ze2ic1xd2qeqk145\*\*\*\*

IpInstanceId

string

Yes

The EIP ID.

You can call the [DescribeEipAddresses](/help/en/vpc/api-describeeipaddresses) operation to query EIP IDs.

eip-2zeerraiwb7uj6i0d\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

123e4567-e89b-12d3-a456-426655440000

## Response parameters

Parameter

Type

Description

Example

object

The returned data.

RequestId

string

The request ID.

54B48E3D-DF70-471B-AA93-08E683A1B45

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "54B48E3D-DF70-471B-AA93-08E683A1B45"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IpInstanceId.NotBandwidthPackage

The specified IpInstanceId does not in bandwidthPackage.

\-

400

DependencyViolation.ip

The specified BandwidthPackageId has eip in it.

\-

400

EIP\_BIND\_NATGATEWAY

The eip have bind natgateway.

\-

400

IncorrectStatus.Eip

Eip status error.

\-

400

OperationFailed.SnatPoolIp

Multi ip in snat pool cannot remove ip from bandwidth package.

\-

400

DependencyViolation.RouteEntry

vpc route table has route entry.

\-

400

OperationFailed.DistibuteLock

Distibute lock fail.

The operation is locked by another request;

400

Trade\_Sync\_Create\_Sub\_ERROR

SyncOrderToSub error.

\-

400

FAILED\_INVOKE\_INNER\_API

Failed to invoke inner api.

\-

400

InvalidIP.IpInSnatPool

Multi ip in snat pool cannot remove ip from bandwidth package.

\-

400

InvalidInstanceId.NotFound

The specified bandwidthPackageId does not exist in our records.

\-

400

OperationUnsupported.IpNotInCbwp

The specified eip not exist in the commonBandwidthPackage.

The EIP is not associated with the EIP bandwidth plan.

400

InvalidIpInstanceId.Malformed

The specified IpInstanceId is invalid.

\-

400

OperationUnsupported.EipBindRemote

Eip bind remote ecs/slb, cannot remove it from bandwidthPackage.

\-

400

InvalidBandwidthPackageId.NotFound

The specified BandwidthPackageId not exist.

\-

400

InvalidEIPStatus.BizDisabled

The EIP has been locked.

The error message returned because the EIP is locked.

400

Forbidden.FinancialLocked

The ip business status is invalid.

The error message returned because the instance has overdue payments.

400

OperationFailed.SystemBusy

Operation failed because system is busy.

The error message returned because the system is busy. Try again later.

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

404

InvalidBandwidthPackageId.NotFound

The specified bandwidthPackageId does not exist in our records.

The ID of the specified EIP bandwidth plan does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-06-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/RemoveCommonBandwidthPackageIp?updateTime=2023-06-26#workbench-doc-change-demo)
