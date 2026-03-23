Queries the renewal fees for a subscription instance.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeRenewalPrice)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeRenewalPrice)

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

rds:DescribeRenewalPrice

get

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#DbInstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

ETnLKlblzczshOTUbOCzxxxxxxxxxx

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5xxxxxx

RegionId

string

No

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

PayType

string

No

The billing method of the instance. Valid values:

-   **Postpaid**: pay-as-you-go
-   **Prepaid**: subscription

Postpaid

DBInstanceClass

string

No

The instance type of the instance. For more information, see [Primary instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types). By default, the current instance type applies.

mysql.n2.medium.2c

UsedTime

integer

Yes

The subscription duration of the instance. Valid values:

-   If you set the **TimeType** parameter to **Year**, the value of the UsedTime parameter is within the range of **1 to 3**.
-   If you set the **TimeType** parameter to **Month**, the value of the UsedTime parameter is within the range of **1 to 9**.

1

TimeType

string

Yes

The renewal cycle of the instance. Valid values:

-   **Year**
-   **Month**

Year

Quantity

integer

No

The number of the instances. Default value: **1**.

1

OrderType

string

No

The type of order. Set the value to **BUY**.

BUY

BusinessInfo

string

No

The additional business information about the instance.

121436975448952

ResourceGroupId

string

No

The resource group ID. You can call the DescribeDBInstanceAttribute operation to query the resource group ID.

rg-acfmx\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

DC9F4EF6-D038-4405-B497-1F48E722C9F2

PriceInfo

object

Details of price information.

OriginalPrice

float

The original price.

138

DiscountPrice

float

The discount.

27

Currency

string

The currency unit.

CNY

TradePrice

float

The transaction price, which is equal to the original price minus the discount.

111

Coupons

array<object>

An array that consists of information about the coupon.

Coupon

object

The details of the coupon.

IsSelected

string

Indicates whether the coupon is selected.

true

CouponNo

string

The coupon ID.

123456

Name

string

The name of the coupon.

test

Description

string

The description of the coupon.

test

RuleIds

array

An array that consists of the ID of the promotion rule.

RuleId

string

The ID of the promotion rule.

1001199213

ActivityInfo

object

The information about the promotion.

CheckErrMsg

string

The returned message.

Error description

ErrorCode

string

The error code that is returned.

123456

Success

string

Indicates whether the request was successful.

Success

Rules

array<object>

An array that consists of the details of the promotion rule.

Rule

object

The details of the promotion rule.

Name

string

The name of the rule.

test

Description

string

The description of the activity.

Content

RuleId

long

The ID of the promotion rule.

1001199213

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "DC9F4EF6-D038-4405-B497-1F48E722C9F2",
  "PriceInfo": {
    "OriginalPrice": 138,
    "DiscountPrice": 27,
    "Currency": "CNY",
    "TradePrice": 111,
    "Coupons": {
      "Coupon": [
        {
          "IsSelected": true,
          "CouponNo": 123456,
          "Name": "test",
          "Description": "test"
        }
      ]
    },
    "RuleIds": {
      "RuleId": [
        1001199213
      ]
    },
    "ActivityInfo": {
      "CheckErrMsg": "Error description\n",
      "ErrorCode": 123456,
      "Success": "Success"
    }
  },
  "Rules": {
    "Rule": [
      {
        "Name": "test",
        "Description": "Content\n",
        "RuleId": 1001199213
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

SYSTEM.SaleValidateFailed

The request not refer to the correct order period. please check your Period or UsedTime param.

\-

400

OrdQueryAccountError

Error calling account service.

\-

400

Price.WanHuaTong.sys

Inquiry error.

\-

400

DBNodeParameter.Required

The specified parameter DBNode is required.

You must specify the DBNode parameter.

400

Order.ComboInstanceNotAllowOperate

A package instance is not allowed to operate independently.

A package instance is not allowed to operate independently.

400

Price.PricingPlanResultNotFound

Pricing plan price result not found.

Pricing plan price result not found.

400

Order.NoRealNameAuthentication

You have not passed the real-name authentication and do not meet the purchase conditions. Please log in to the user center for real-name authentication.

You have not passed the real-name authentication and do not meet the purchase conditions. Please log in to the cost and cost for real-name authentication.

400

InsufficientAvailableQuota

Your account quota limit is less than 0, please recharge before trying to purchase.

Your account available limit is less than 0, please recharge before trying to purchase.

400

CommodityServiceCalling.Exception

Failed to call commodity service.

Failed to call commodity service return.

400

RegionDissolvedEOM

Dear customer, Alibaba Cloud plans to optimize and adjust the current region. Cloud services in this region will cease operations. You are currently unable to operate new purchase orders. Thank you for your understanding and support.

Hello, Alibaba Cloud plans to optimize and adjust the current region. Cloud services in this region will stop operating. In order to ensure your business continuity and smooth transition of data migration, you are currently unable to operate new purchase orders. Thank you for your understanding and support.

400

Commodity.InvalidComponent

The module you purchased is not legal, please buy it again.

The module you purchased is not legal, please buy it again.

400

RegionEndTimeDissolvedIndia

Cloud services in the India (Mumbai) region will be discontinued. Set the validity date to July 15, 2024 or earlier than July 15, 2024.

Hello customer, this area has been abolished.

400

RegionEndTimeDissolvedAustralia

Cloud services in the Australia (Sydney) region will be discontinued. Set the validity date to September 30, 2024 or earlier than September 30, 2024.

Hello customer, this area has been abolished.

400

Price.CommoditySys

Commodity system call exception.

Commodity system call exception.

400

Pay.InsufficientBalance

Insufficient available balance.

Insufficient available balance.

400

Order.PeriodInvalid

There is a problem with the period you selected, please choose again.

There is a problem with the period you selected, please choose again.

400

pay.noCreditCard

Account not bound to credit card.

\-

400

Order.InstHasUnpaidOrder

There is an unpaid order for the service you have purchased. Please pay or void it before placing the order.

There is an unpaid order for the service you have purchased. Please pay or void it before placing the order.

400

noAvailablePaymentMethod

No payment method is specified for your account. We recommend that you add a payment method.

No payment method has been specified for your account. We recommend that you add a payment method.

400

BasicInfoUncompleted

Your information is incomplete. Complete your information before the operation.

Your basic information is not complete, please complete your basic information before operation.

400

Risk.RiskControlRejection

Your account is abnormal, please contact customer service for details.

Your account is abnormal, please contact customer service for details.

400

BasicInfoUncompleted

Your information is incomplete, Complete your information before the operation.

\-

400

Api.NotSupport

Specified api is not supported.

The current interface does not support.

400

ContainForbiddenLabelError

There is a label that prohibits placing orders. Please contact your distributor for assistance.

You cannot place the order because a tag indicates that order placement is prohibited. Contact your distributor.

400

InvalidDBInstanceId.NotFound

The DBInstanceId provided does not exist in records.

The DBInstanceId provided does not exist.

400

InvalidInstanceLevel.DiskType

Specified instance level not support request disk type

The current instance type does not support the specified storage type.

400

InvalidParam

Sepcified wal level Parameter is invalid. There are still logical slots in instance, so it can not be set as replica.

The specified wal\_level parameter is invalid. There is still a copy slot in the instance, so it cannot be set to replica.

400

KmsApiError

User secret key invalid.

The user key is invalid.

400

System.SaleValidateFailed

Sales expression validation system error.

A system error occurs when the sales expression is verified.

400

Abs.InvalidAccount.NotFound

account is not found.

The account does not exist.

400

SqlExecuteFailedOrTimeout

sql command execution failed or timed out:%s.

SQL command execution failed or timed out

400

ColdData.EngineVersionNotSupport

The current instance engine version not support coldDataEnabled.

The current instance engine version not support coldDataEnabled.

400

ColdData.MinorVersionNotSupport

The current instance minor version not support coldDataEnabled.

The current instance minor version not support coldDataEnabled.

400

IncorrectTargetClasscode

The current instance type does not support this operation.

This operation is not supported by the instance type.

400

InvalidConnectionString.Duplicate

Specified connection string already exists in the RDS.

The link address name is duplicate. Please reset the connection string.

400

RequiredParam.NotFound

Required input param is not found.

\-

400

Parameters.Invalid

Parameter error, please check the parameters.

Parameter error, please check the parameters.

400

BackupPolicyNotSupport

Cold Data won't open with CrossBackup or Flash Backup, please check Backup Policy.

Cold Data won't open with CrossBackup or Flash Backup, please check Backup Policy.

400

InvalideStatus.Format

The instance status does not support this operation.

\-

400

InvalidReleasedKeepPolicy.Format

Specified Released Keep Policy is not valid.

Specified Released Keep Policy is not valid.

400

InvalidDBInstanceEngineType.Format

the DB instance engine type does not support this operation.

This operation is not supported for the database engine of the instance.

400

Pay.NoCreditCard

No credit cards.

No credit cards.

400

VpcNetworkTypeNotSupport

The vpc network type instance does not support this operation.

The vpc network type instance does not support this operation.

400

MirrorInsExists

Specified DB instance mirror ins already existed.

Specified DB instance mirror ins already existed.

400

UnsupportedClassCode

The specified DB instance class stops selling.

The specified DB instance class stops selling.

400

InvalidBackupSet

The specified database does not exist in the backup set.

The specified database does not exist in the backup set.

400

OrdTCommodityQueryError

Failed to query for product.

Failed to query product.

403

OrderStatus.UnPaid

The specified db instance has unpaid order.

The instance has an unpaid order. Please pay first and try again.

403

InvalidReduceDiskSize

The storage capacity after the scale-down must be larger than the used amount.

The scale-in target capacity cannot be less than the current storage space usage

403

CloudSSDNotSupport

Cloud ssd does not support this operation, please upgrade to essd.

\-

403

InvalidUserOperatorPermission

The user permission does not support this operation.

The user is not authorized to perform this operation.

403

InvalidVswitchId

Specified conn vswitch id is not valid.

\-

403

IncorrectMinorVersion

Current engine minor version does not support operations.

This operation is not supported for the current minor engine version.

403

OperationDenied.ZoneResource

There is no available zone for inventory.

There is no available zone for inventory.

403

NotInFlowController

Sorry,no permission.

Sorry,no permission.

403

InvalidKmsKey

Kms key is disabled.

\-

403

InvalidInstanceLevel.Malformed

Current DB instance level does not support this operation.

The specified database instance type does not support this operation.

404

canNotFindSubscription

Subscription information not found.

\-

404

InvalidClusterKms

The current instance does not authorized to access the Key Management Service.

The instance does not have permissions to access Key Management Service (KMS).

404

Request.NotFound

The requested resource is not available.

The requested resources are unavailable.

404

HostInfo.NotFound

The specified host info is not found.

\-

500

ExternalFailure

The request processing has failed due to external service failure.

The request processing has failed due to external service failure.

500

RequestMetaDataFailed

The service request failed. Please try again later or contact service personnel.

The service request failed. Please try again later or contact service personnel.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeRenewalPrice?updateTime=2024-11-18#workbench-doc-change-demo)

2024-07-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeRenewalPrice?updateTime=2024-07-11#workbench-doc-change-demo)

2023-09-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeRenewalPrice?updateTime=2023-09-08#workbench-doc-change-demo)

2023-07-21

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeRenewalPrice?updateTime=2023-07-21#workbench-doc-change-demo)
