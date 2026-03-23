AddCommonBandwidthPackageIp

## Operation description

Associates an elastic IP address (EIP) with an Internet Shared Bandwidth instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/AddCommonBandwidthPackageIp)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/AddCommonBandwidthPackageIp)

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

vpc:AddCommonBandwidthPackageIp

create

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

The current API does not require request parameters

## Response parameters

Parameter

Type

Description

Example

The current API has no return parameters

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "01FDDD49-C4B7-4D2A-A8E5-A93915C450A6"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

OperationDenied.SecurityProtectionTypesInconsistent

The operation is not allowed because of SecurityProtectionTypesInconsistent.

\-

400

IpInstanceId.AlreadyInBandwidthPackage

The specified Eip InstanceId already in bandwidthPackage.

The specified Eip InstanceId already in bandwidthPackage.

400

IpInstanceId.BizStatusInvalid

The specified Eip BizStatus is Disable, Cannot add to bandwidthPackage.

\-

400

IpInstanceId.ChargeType.NotSupport

The specified Eip instance is PrePaid type, Cannot add to BandwidthPackage.

\-

400

BandwidthPackageId.InvalidBizStatus

The specified BandwidthPackageId has been FinancialLocked, Cannot add Ip.

\-

400

IpInstanceId.QuotaExceeded

The specified BandwidthPackageId has too many ip in it. exceed the quota , Cannot add more.

\-

400

EipOperation.TooFrequently

The specified Eip add into bandwidthPackage too frequently. please add later.

\-

400

TaskConflict

The operation is too frequent, TaskConflict.

The system is unavailable. Try again later.

400

IncorrectStatus.Eip

Eip status error.

\-

400

OperationUnsupported.IpType

Ip type does not support the operation.

\-

400

ParamExclusive.IpInstanceIdAndBandwidthPackageId

%s

\-

400

InvalidBandwidthPackage.NotExist

Eip bandwidth package not exist.

\-

400

OperationFailed.DistibuteLock

Distibute lock fail.

The operation is locked by another request;

400

OperationFailed.ZoneIdInconsistent

%s

\-

400

AttrMismatching.BandwidthPackageIpVersion

%s

\-

400

InvalidBandwidthPackageId.NotFound

The specified BandwidthPackageId not exist.

\-

400

InvalidInstanceId.NotFound

The InstanceId is not found.

The InstanceId is not found.

400

InvalidEIPStatus.BizDisabled

The EIP has been locked.

The error message returned because the EIP is locked.

400

Forbidden.FinancialLocked

The ip business status is invalid.

The error message returned because the instance has overdue payments.

400

Mismatch.CloudBoxCbwpZoneAndEipZone

The CbwpZone and EipZone are mismatched.

The EIP bandwidth plan of the cloud box does not match the zone of the EIP.

400

MissingParam.BandwidthPackageId

The parameter bandwidthPackageId is mandatory.

The parameter bandwidthPackageId is mandatory.

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

404

InvalidBandwidthPackageId.NotFound

The specified bandwidthPackageId does not exist in our records.

The ID of the specified EIP bandwidth plan does not exist.

404

InvalidIpInstanceId.NotFound

The specified Eip InstanceId does not exist in our records.

The specified EIP does not exist.

404

IpInstanceId.InvalidIpInternetChargeType

The hybrid type eip not support add into bandwidthPackage of PayBytraffic type.

\-

404

BandwidthPackageId.InvalidBandwidth

The hybrid type eip can not add into low bandwidth bandwidthPackage.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-08-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/AddCommonBandwidthPackageIp?updateTime=2023-08-08#workbench-doc-change-demo)
