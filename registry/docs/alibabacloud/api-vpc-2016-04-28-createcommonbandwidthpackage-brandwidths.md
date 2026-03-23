Creates an Internet Shared Bandwidth instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateCommonBandwidthPackage)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/CreateCommonBandwidthPackage)

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

vpc:CreateCommonBandwidthPackage

create

\*CommonBandwidthPackage

`acs:vpc:{#regionId}:{#accountId}:combandwidthpackage/*`

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

Zone

string

No

The zone of the Internet Shared Bandwidth instance. This parameter is required if you create an Internet Shared Bandwidth instance for a cloud box.

ap-southeast-1-lzdvn-cb

ISP

string

No

The line type. Valid values:

-   **BGP** (default) All regions support BGP (Multi-ISP).
-   **BGP\_PRO** BGP (Multi-ISP) Pro lines are available in the China (Hong Kong), Singapore, Japan (Tokyo), Philippines (Manila), Malaysia (Kuala Lumpur), Indonesia (Jakarta), and Thailand (Bangkok) regions.

If you are allowed to use single-ISP bandwidth, you can also use one of the following values:

-   **ChinaTelecom**
-   **ChinaUnicom**
-   **ChinaMobile**
-   **ChinaTelecom\_L2**
-   **ChinaUnicom\_L2**
-   **ChinaMobile\_L2**

If your services are deployed in China East 1 Finance, this parameter is required and you must set the value to **BGP\_FinanceCloud**.

BGP

Name

string

No

The name of the Internet Shared Bandwidth instance.

The name must be 0 to 128 characters in length and cannot start with `http://` or `https://`.

test123

Description

string

No

The description of the Internet Shared Bandwidth instance.

The description must be 0 to 256 characters in length and cannot start with `http://` or `https://`.

abc

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not specify this parameter, the system automatically uses the **request ID** as the **client token**. The **request ID** may be different for each request.

02fb3da4-130e-11e9-8e44-001\*\*\*\*

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmxazdjdhd\*\*\*\*

Bandwidth

integer

Yes

The maximum bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.

Valid values: **1** to **1000**. Default value: **1**.

1000

Ratio

integer

No

The percentage of the minimum bandwidth commitment. Set the parameter to **20**.

**Note** This parameter is available only on the Alibaba Cloud China site.

20

InternetChargeType

string

No

The billing method of the Internet Shared Bandwidth instance. Set the value to **PayByTraffic**, which specifies the pay-by-data-transfer billing method.

SecurityProtectionTypes

array

No

string

No

The edition of Anti-DDoS.

-   If you do not set this parameter, Anti-DDoS Origin Basic is used.
-   If you set the value to **AntiDDoS\_Enhanced**, Anti-DDoS Pro/Premium is used.

Valid values of **N**: **1** to **10**. You can specify only one Anti-DDoS edition. If you specify more than one edition, the operation may fail.

AntiDDoS\_Enhanced

## Response parameters

Parameter

Type

Description

Example

object

BandwidthPackageId

string

The ID of the Internet Shared Bandwidth instance.

cbwp-bp1vevu8h3ieh\*\*\*\*

RequestId

string

The request ID.

FF39F653-033E-4CD9-9EDF-3CCA5A71FBC3

ResourceGroupId

string

The ID of the resource group.

rg-acfmxazdjdhd\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "BandwidthPackageId": "cbwp-bp1vevu8h3ieh****",
  "RequestId": "FF39F653-033E-4CD9-9EDF-3CCA5A71FBC3",
  "ResourceGroupId": "rg-acfmxazdjdhd****"
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

MissingParameter

Miss mandatory parameter.

Some required parameters are not specified. Specify all required parameters and try again.

400

InvalidParameter.Name.Malformed

The specified Name is not valid.

The specified name format is invalid. Enter the name in the valid format.

400

InvalidParameter.Description.Malformed

The specified Description is not valid.

The specified description is invalid.

400

BandwidthPackageOperation.conflict

BandwidthPackage operation conflict, please wait a moment and try again.

\-

400

InvalidParameter.Bandwidth

The specified bandwidth is not valid.

\-

400

BandwidthPackage.QuotaExceeded

Create BandwidthPackage has exceeded quota.

\-

400

IllegalParam.Zone

Zone is illegal.

\-

400

InvalidParameter.InvalidChargeType

The specified chargeType is not valid.

\-

400

InvalidResourceGroupId

The specified ResourceGroupId does not exist.

The specified resource group ID does not exist.

400

OperationFailed.SaleValidate

Validate sale condition with subArticle failed.

Failed to validate the sales condition with a subproject.

400

OperationFailed.SyncOrderToSub

SyncOrderToSub error.

The operation failed.

400

IllegalParam.Ratio

The specified ratio is not valid.

\-

400

OperationUnsupported.InvalidZone

It is not allowed to create CBWP in the specified zone.

\-

400

IllegalParam.AvailableZone

%s

\-

400

MissingParam.NameOrDescription

%s

\-

400

OperationFailed.SystemBusy

Operation failed because system is busy.

The error message returned because the system is busy. Try again later.

400

UnsupportedRegion.CloudBoxInternet

The region does not support cloud box public network.

The region does not support cloud box public network.

400

ResourceNotEnough.CommonBandWidthPackage

The specified resource commonBandWidthPackage is not enough.

The specified resource commonBandWidthPackage is not enough.

404

InvalidRegionId.NotFound

The specified RegionId does not exist in our records.

The specified region ID does not exist.

404

InvalidVpcId.NotFound

Specified value of VpcId is not found in our record.

The VPC does not exist. Check whether the specified VPC is valid.

404

InvalidZoneId.NotFound

Specified value of ZoneId is not exists.

The specified zone does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-02-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateCommonBandwidthPackage?updateTime=2026-02-28#workbench-doc-change-demo)

2025-03-26

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateCommonBandwidthPackage?updateTime=2025-03-26#workbench-doc-change-demo)

2024-02-23

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateCommonBandwidthPackage?updateTime=2024-02-23#workbench-doc-change-demo)

2023-11-06

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateCommonBandwidthPackage?updateTime=2023-11-06#workbench-doc-change-demo)

2023-06-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/CreateCommonBandwidthPackage?updateTime=2023-06-26#workbench-doc-change-demo)
