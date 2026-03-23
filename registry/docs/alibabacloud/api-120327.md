Sets the maximum bandwidth of an EIP that is associated with an Internet Shared Bandwidth instance.

## Operation description

You can call the **ModifyCommonBandwidthPackageIpBandwidth** operation to set the maximum bandwidth of an EIP that is associated with an Internet Shared Bandwidth instance. This prevents an EIP from exhausting the bandwidth resources of an Internet Shared Bandwidth instance.

For example, two EIPs are associated with an Internet Shared Bandwidth instance whose maximum bandwidth is 800 Mbit/s. In this case, you can set the maximum bandwidth of one EIP to 500 Mbit/s and that of the other EIP to 400 Mbit/s. After you set the maximum bandwidth values, the first EIP cannot consume bandwidth higher than 500 Mbit/s. The second EIP cannot consume bandwidth higher than 400 Mbit/s.

When you call this operation, take note of the following items:

-   This operation is valid only for EIPs that are associated with Elastic Compute Service (ECS) instances. This operation is invalid for EIPs that are associated with Server Load Balancer (SLB) instances, NAT gateways, secondary elastic network interfaces (ENIs), or high-availability virtual IP addresses (HAVIPs).
-   This operation is in public preview. You can call this operation to set the maximum bandwidth of EIPs only if the EIPs are associated with an Internet Shared Bandwidth instance. The feature is not supported in the console.
-   You cannot repeatedly call this operation to set the maximum bandwidth of an EIP within the specified period of time.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifyCommonBandwidthPackageIpBandwidth)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifyCommonBandwidthPackageIpBandwidth)

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

vpc:ModifyCommonBandwidthPackageIpBandwidth

update

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

The region ID of the Internet Shared Bandwidth instance. You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

BandwidthPackageId

string

Yes

The ID of the Internet Shared Bandwidth instance.

cbwp-2zep6hw5d6y8exscd\*\*\*\*

EipId

string

Yes

The ID of the EIP that is associated with the Internet Shared Bandwidth instance.

eip-2zewysoansu0svfbg\*\*\*\*

Bandwidth

string

Yes

The maximum bandwidth for the EIP. This value cannot be larger than the maximum bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.

500

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

63D187BF-A30A-4DD6-B68D-FF182C96D8A2

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "63D187BF-A30A-4DD6-B68D-FF182C96D8A2\t"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

%s

%s

\-

400

OperationFailed.DistibuteLock

Distibute lock fail.

The operation is locked by another request;

400

Forbidden.FinancialLocked

The ip business status is invalid.

The error message returned because the instance has overdue payments.

400

InvalidEIPStatus.BizDisabled

The EIP has been locked.

The error message returned because the EIP is locked.

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-02-27

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyCommonBandwidthPackageIpBandwidth?updateTime=2026-02-27#workbench-doc-change-demo)
