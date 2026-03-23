Deletes an Internet Shared Bandwidth instance.

## Operation description

You cannot repeatedly call the **DeleteCommonBandwidthPackage** operation to delete an Internet Shared Bandwidth instance within the specified period of time.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteCommonBandwidthPackage)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteCommonBandwidthPackage)

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

vpc:DeleteCommonBandwidthPackage

delete

\*CommonBandwidthPackage

`acs:vpc:{#regionId}:{#accountId}:combandwidthpackage/{#CommonBandwidthPackageId}`

-   vpc:tag

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

The ID of the region where the Internet Shared Bandwidth instance is created.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

Force

string

No

Specifies whether to forcefully delete the Internet Shared Bandwidth instance. Valid values:

-   **false** (default): deletes the Internet Shared Bandwidth instance only when no EIPs are associated with the Internet Shared Bandwidth instance.
-   **true**: disassociates all EIPs from the Internet Shared Bandwidth instance and deletes the Internet Shared Bandwidth instance.

false

BandwidthPackageId

string

Yes

The ID of the Internet Shared Bandwidth instance.

cbwp-2ze2ic1xd2qeqk145pn4u

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

B400EF57-60E3-4D61-B8FB-7FA8F72DF5A6

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "B400EF57-60E3-4D61-B8FB-7FA8F72DF5A6"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParam.%s

The param of %s is missing.

The required parameter is not set.

400

DependencyViolation.Ips

The specified BandwidthPackageId has dependent resource ips.

\-

400

ForbiddenAction.PrePaid

The specified BandwidthPackageId is PrePaid.

\-

400

OperationFailed.BandwidthPackageNotEmpty

Eip bandwidth package not empty.

The EIP bandwidth plan cannot be deleted because EIPs are associated with the EIP bandwidth plan.

400

InvalidOperation.DeletionProtection

The instance cannnot delete because of deletion protecion.

\-

400

OperationUnsupported.Release95Instance

Releasing instances that payBy95 or payByOld95 is unsupported.

\-

400

OperationFailed.AddIpTaskInProcessing

Operation failed because add ip to common bandwidth task in processing.

You cannot delete the resource because EIPs are being associated with the EIP bandwidth plan.

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

404

InvalidBandwidthPackageId.NotFound

The specified BandwidthPackageId does not exist in our records.

The ID of the specified EIP bandwidth plan does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteCommonBandwidthPackage?updateTime=2023-07-24#workbench-doc-change-demo)
