Queries the pricing information about newly attached subscription data disks or about the new instance types when you upgrade the configurations of unexpired subscription Elastic Compute Service (ECS) instances.

## Operation description

-   Pricing information can be queried for unexpired subscription ECS instances only when you upgrade their configurations. The pricing information cannot be queried when the instance configurations are downgraded.
-   Pricing information cannot be queried for pay-as-you-go ECS instances when you change their configurations. Prices of existing pay-as-you-go ECS instances whose configurations are changed are the same as those of new pay-as-you-go instances. You can call the [DescribePrice](/help/en/ecs/api-describeprice) operation to query the latest prices of ECS instances.
-   Before you upgrade the configurations of an instance, we recommend that you call the [DescribeResourcesModification](/help/en/ecs/api-describeresourcesmodification) operation to query the instance types available for configuration upgrades in a specified zone.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceModificationPrice)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceModificationPrice)

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

ecs:DescribeInstanceModificationPrice

get

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

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

InstanceId

string

Yes

The ID of the instance for which you want to query pricing information for a configuration upgrade.

i-bp1f2o4ldh8l\*\*\*\*

InstanceType

string

No

The new instance type. We recommend that you call the [DescribeResourcesModification](/help/en/ecs/api-describeresourcesmodification) operation to query the instance types available for configuration upgrades in a specified zone.

**Note** When you call the DescribeInstanceModificationPrice operation, you must specify at least one of the following parameters: `InstanceType` and `DataDisk.N.*`.

ecs.g6e.large

SystemDisk.Category

string

No

The category of the system disk. You must specify this parameter only when you upgrade a non-I/O optimized instance of a retired instance type to an I/O optimized instance of an available instance type. For more information about instance types, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families) and [Retired instance types](/help/en/ecs/user-guide/retired-instance-types).

Valid values:

-   cloud\_efficiency: ultra disk
-   cloud\_ssd: standard SSD

This parameter is empty by default.

cloud\_ssd

DataDisk

array<object>

No

The information about data disks.

object

No

The information about the data disk.

PerformanceLevel

string

No

The performance level of data disk N that is an enhanced SSD (ESSD). The value of N must be the same as that in `DataDisk.N.Category` when DataDisk.N.Category is set to cloud\_essd. Valid values:

-   PL0: A single ESSD can deliver up to 10,000 random read/write IOPS.
-   PL1: A single ESSD can deliver up to 50,000 random read/write IOPS.
-   PL2: A single ESSD can deliver up to 100,000 random read/write IOPS.
-   PL3: A single ESSD can deliver up to 1,000,000 random read/write IOPS.

Default value: PL1.

For more information about ESSD performance levels, see [ESSDs](/help/en/ecs/user-guide/essds) .

PL1

Size

integer

No

The capacity of data disk N. Valid values of N: 1 to 16. Unit: GiB. Valid values:

-   Valid values when DataDisk.N.Category is set to cloud\_efficiency: 20 to 32768.
    
-   Valid values when DataDisk.N.Category is set to cloud\_ssd: 20 to 32768.
    
-   Valid values when DataDisk.N.Category is set to cloud\_essd: vary based on the `DataDisk.N.PerformanceLevel` value.
    
    -   Valid values when DataDisk.N.PerformanceLevel is set to PL0: 1 to 32768.
    -   Valid values when DataDisk.N.PerformanceLevel is set to PL1: 20 to 32768.
    -   Valid values when DataDisk.N.PerformanceLevel is set to PL2: 461 to 32768.
    -   Valid values when DataDisk.N.PerformanceLevel is set to PL3: 1261 to 32768.
-   Valid values when DataDisk.N.Category is set to cloud: 5 to 2000.
    

The default value is the minimum capacity allowed for the specified data disk category.

100

Category

string

No

The category of data disk N. You can specify this parameter if you want to query the pricing information about newly attached subscription data disks. Valid values of N: 1 to 16. Valid values:

-   cloud\_efficiency: utra disk.
-   cloud\_ssd: standard SSD.
-   cloud\_essd: ESSD.
-   cloud: basic disk.

This parameter is empty by default.

**Note** When you call the DescribeInstanceModificationPrice operation, you must specify at least one of the following parameters: `InstanceType` and `DataDisk.N.*`.

cloud\_essd

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

A3DC3196-379B-4F32-A2C5-B937134FAD8A

PriceInfo

object

Details about the prices and promotion rules.

Rules

array<object>

The information about the promotion rules.

Rule

object

Description

string

The description of the promotion rule.

Upgrade offers

RuleId

long

The ID of the promotion rule.

1234567890

Price

object

The price.

OriginalPrice

float

The original price.

175.200

DiscountPrice

float

The discount.

61.320

Currency

string

The currency unit. Valid values:

-   Alibaba Cloud China site (aliyun.com): CNY
-   Alibaba Cloud International site (alibabacloud.com): USD

CNY

TradePrice

float

The transaction price, which is equal to the original price minus the discount.

113.880

DetailInfos

array<object>

The information about the price.

**Note** This parameter is returned only when ResourceType is set to instance.

DetailInfo

object

The information about the price.

Resource

string

The resource name. Valid values:

-   InstanceType
-   bandwidth
-   image
-   SystemDisk
-   DataDisk

instanceType

OriginalPrice

float

The original price.

4368

DiscountPrice

float

The discount.

655.2

TradePrice

float

The transaction price.

3712.8

SubRules

array<object>

The pricing rules.

Rule

object

The pricing rule.

Description

string

The description of the pricing rule.

If you subscribe to an instance for one year, you can receive a 15% discount off the list price.

RuleId

long

The ID of the pricing rule.

315716429631488

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "A3DC3196-379B-4F32-A2C5-B937134FAD8A",
  "PriceInfo": {
    "Rules": {
      "Rule": [
        {
          "Description": "Upgrade offers\n",
          "RuleId": 1234567890
        }
      ]
    },
    "Price": {
      "OriginalPrice": 175.2,
      "DiscountPrice": 61.32,
      "Currency": "CNY",
      "TradePrice": 113.88,
      "DetailInfos": {
        "DetailInfo": [
          {
            "Resource": "instanceType",
            "OriginalPrice": 4368,
            "DiscountPrice": 655.2,
            "TradePrice": 3712.8,
            "SubRules": {
              "Rule": [
                {
                  "Description": "If you subscribe to an instance for one year, you can receive a 15% discount off the list price.",
                  "RuleId": 315716429631488
                }
              ]
            }
          }
        ]
      }
    }
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter.InstanceTypeOrDataDisk

You must specify the parameter InstanceType or DataDisk.

\-

400

InvalidSystemDiskCategory.ValueNotSupported

The specified parameter "SystemDisk.Category" is not valid.

The specified parameter system disk specification is invalid.

400

InvalidDiskCategory.Missing

The DataDisk.1.Category parameter that is mandatory for processing the request is not provided.

The mandatory parameter DataDiskCategory is not provided.

400

InvalidDataDiskCategory.ValueNotSupported

The specified parameter "DataDisk.n.Category" is not valid.

\-

400

InvalidDiskCategory.ValueNotSupported

The specified parameter "DiskCategory" is not valid.

The specified cloud disk type DiskCategory is invalid.

400

InvalidDataDiskSize.ValueNotSupported

The specified DataDisk.n.Size beyond the permitted range.

\-

400

InvalidPerformanceLevel.Malformed

The specified parameter DataDisk.n.PerformanceLevel is not valid.

\-

400

InvalidDiskSize.TooSmall

Specified disk size is too small when choose PL0 of cloud\_essd.

\-

400

OperationDenied.PerformanceLevelNotMatch

The specified DataDisk.n.PerformanceLevel and DataDisk.n.Size do not match.

\-

400

InvalidInstanceType.ValueNotSupported

The specified InstanceType does not exist or beyond the permitted range.

The specified instance type does not exist or you are not authorized to manage instances of this instance type.

400

InvalidAction.WithActiveElasticUpgrade

The instance has active Elastic Upgrade.

The operation is not supported while the instance are being temporarily upgraded. The instance goes through a temporary configuration upgrade if the EndTime parameter is specified to call the ModifyPrepayInstanceSpec operation.

400

PriceNotFound

The price of your queried resource is not available now, please try other resources.

The price of the specified resource does not exist. Modify the parameter value and try again later.

403

InvalidParameter.ResourceOwnerAccount

ResourceOwnerAccount is Invalid.

The specified ResourceOwnerAccount parameter is invalid.

403

ChargeTypeViolation

PostPaid instance do not support this operation.

\-

403

InvalidInstanceType.NotSupportUpgrade

The specified InstanceType can only be downgraded. This API supports querying prices only of InstanceType that can be upgraded.

The specified instance type can be used only for a configuration downgrade of the specified instance, and this API operation can be used to query pricing information about instance types only for instance configuration upgrades. We recommend that you call the DescribeResourcesModification operation to query the instance types available for instance configuration upgrades.

403

InstanceExpired

The PrePaid instance has been expired.

\-

403

Throttling.User

Request was denied due to user flow control.

\-

403

Throttling

Request was denied due to request throttling.

\-

403

InstanceType.Offline

The specified InstanceType has been offline

The specified instance type is retired. Select another instance type.

403

RegionUnauthorized

There is no authority to create instance in the specified region.

You are not authorized to create instances in the specified region.

404

InvalidRegionId.NotFound

The RegionId provided does not exist in our records.

The RegionId provided does not exist

404

InvalidResourceGroup.NotFound

The ResourceGroup provided does not exist in our records.

The specified resource group does not exist.

404

InvalidInstanceId.NotFound

The specified InstanceId does not exist.

The specified instance does not exist.

500

InternalError

The request processing has failed due to some unknown error, exception or failure.

An internal error has occurred. Try again later.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceModificationPrice?updateTime=2025-10-28#workbench-doc-change-demo)

2025-01-08

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceModificationPrice?updateTime=2025-01-08#workbench-doc-change-demo)

2024-12-19

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceModificationPrice?updateTime=2024-12-19#workbench-doc-change-demo)
