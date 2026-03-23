Modifies the maximum bandwidth of an Internet Shared Bandwidth instance.

## Operation description

Before you call this operation, take note of the following items:

-   **ModifyCommonBandwidthPackageSpec** is an asynchronous operation. After a request is sent, the system returns a request ID and runs the task in the background. You can call the [DescribeCommonBandwidthPackages](/help/en/internet-shared-bandwidth/api-describecommonbandwidthpackages) operation to query the status of the task.
    
    -   If the Internet Shared Bandwidth instance is in the **Modifying** state, the maximum bandwidth of the Internet Shared Bandwidth instance is being modified. In this state, you can only query the Internet Shared Bandwidth instance and cannot perform other operations.
    -   If the Internet Shared Bandwidth instance is in the **Available** state, the maximum bandwidth of the Internet Shared Bandwidth instance is modified.
-   You cannot repeatedly call the **ModifyCommonBandwidthPackageSpec** operation to modify the maximum bandwidth of an Internet Shared Bandwidth instance within the specified period of time.
    

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifyCommonBandwidthPackageSpec)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/ModifyCommonBandwidthPackageSpec)

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

vpc:ModifyCommonBandwidthPackageSpec

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

The region ID of the Internet Shared Bandwidth instance.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

BandwidthPackageId

string

Yes

The ID of the Internet Shared Bandwidth instance.

cbwp-2ze2ic1xd2qeqk145\*\*\*\*

Bandwidth

string

Yes

The maximum bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.

Valid values: **1** to **1000**.

1000

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

7F129000-F929-4AF5-BE8D-BAE434C795306

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "7F129000-F929-4AF5-BE8D-BAE434C795306"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

ResourceNotEnough.Bandwidth

The specified resource of Bandwidth is not enough.

The specified resource of Bandwidth is insufficient.

400

InvalidParameter.Bandwidth

The specified bandwidth is not valid.

\-

400

InvalidBandwidthPackageId.NotFound

The specified BandwidthPackageId not exist.

\-

400

InvalidCommonBandwidthPackageId.NotFound

The specified BandwidthPackageId is not found.

\-

400

IncorrectStatus.ResourceStatus

Resource status is abnormal for renew.

\-

400

SYSTEM.SALE\_VALIDATE\_UNEXPECTED\_ERROR

You have arrears and do not meet the purchase conditions.

\-

400

OperationFailed.SyncOrderToSub

SyncOrderToSub error.

The operation failed.

400

OperationFailed.SaleValidate

Validate sale condition with subArticle failed.

Failed to validate the sales condition with a subproject.

400

OperationFailed.QueryCommodityInfo

Operation failed because quey commodity info error.

\-

400

OperationFailed.QueryPrice

Query price failed when create order.

Failed to query the price when creating the order.

400

Forbidden.ChargeTypeIsPrepaid

It's forbidden to change prepaid CBWP's bandwidth by API. It can be changed on Aliyun web console.

\-

400

IncorrectStatus.CbwpModifying

Cbwp Modifying status is invalid.

\-

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

404

InvalidBandwidthPackageId.NotFound

The specified BandwidthPackageId does not exist in our records.

The ID of the specified EIP bandwidth plan does not exist.

404

InvalidBandwidth.ValueNotSupported

The specified value of Bandwidth not supported.

The specified maximum bandwidth value is invalid.

404

BandwidthPackage.FinancialLocked

The specified BandwidthPackage has been Financial Lock.

\-

500

OrderError.BandwidthPackage

The Account failed to create order.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-02-27

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/ModifyCommonBandwidthPackageSpec?updateTime=2026-02-27#workbench-doc-change-demo)
