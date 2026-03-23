Changes the billing method of an ApsaraDB RDS instance.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

### [](#references)References

**Note** Fees are generated if the call is successful. Before you call this operation, you must read the following documentation.

-   [Change the billing method of an ApsaraDB RDS for MySQL instance from pay-as-you-go to subscription](/help/en/rds/apsaradb-rds-for-mysql/change-the-billing-method-of-an-apsaradb-rds-for-mysql-instance-from-pay-as-you-go-to-subscription) or [Change the billing method of an ApsaraDB RDS for MySQL instance from subscription to pay-as-you-go](/help/en/rds/apsaradb-rds-for-mysql/change-the-billing-method-of-an-apsaradb-rds-for-mysql-instance-from-subscription-to-pay-as-you-go)
-   [Change the billing method of an ApsaraDB RDS for PostgreSQL instance from pay-as-you-go to subscription](/help/en/rds/apsaradb-rds-for-postgresql/switch-an-apsaradb-rds-for-postgresql-instance-from-pay-as-you-go-to-subscription) or [Change the billing method of an ApsaraDB RDS for PostgreSQL instance from subscription to pay-as-you-go](/help/en/rds/apsaradb-rds-for-postgresql/package-year-package-month-to-pay-by-volume)
-   [Change the billing method of an ApsaraDB RDS for SQL Server instance from pay-as-you-go to subscription](/help/en/rds/apsaradb-rds-for-sql-server/switch-an-apsaradb-rds-for-sql-server-instance-from-pay-as-you-go-to-subscription) or [Change the billing method of an ApsaraDB RDS for SQL Server instance from subscription to pay-as-you-go](/help/en/rds/apsaradb-rds-for-sql-server/switch-an-apsaradb-rds-for-postgresql-instance-from-subscription-to-pay-as-you-go)
-   [Change the billing method of an ApsaraDB RDS for MariaDB instance from pay-as-you-go to subscription](/help/en/rds/apsaradb-rds-for-mariadb/change-the-billing-method-of-an-apsaradb-rds-for-mariadb-instance-from-pay-as-you-go-to-subscription) or [Change the billing method of an ApsaraDB RDS for MariaDB instance from subscription to pay-as-you-go](/help/en/rds/apsaradb-rds-for-mariadb/switch-an-apsaradb-rds-for-mariadb-instance-from-subscription-to-pay-as-you-go)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/TransformDBInstancePayType)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/TransformDBInstancePayType)

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

rds:TransformDBInstancePayType

update

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:ResourceTag

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

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

ETnLKlblzczshOTUbOCzxxxxxxxxxx

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the ID of the instance.

rm-uf6wjk5xxxxxx

UsedTime

integer

No

The subscription duration of the instance. Valid values:

-   If you set **Period** to **Year**, the value of UsedTime ranges from **1 to 5**.
-   If you set **Period** to **Month**, the value of UsedTime ranges from **1 to 11**.

**Note** This parameter must be specified when **PayType** is set to **Prepaid**.

1

PayType

string

Yes

The new billing method of the instance. Valid values:

-   **Postpaid**: pay-as-you-go
-   **Prepaid**: subscription

Prepaid

Period

string

No

The renewal cycle of the instance. Valid values:

-   **Year**
-   **Month**

**Note** This parameter must be specified if you set **PayType** to **Prepaid**.

Month

BusinessInfo

string

No

The additional business information about the instance.

None

AutoRenew

string

No

Specifies whether to enable the auto-renewal feature for the instance. Valid values:

-   **true**
-   **false**

**Note**-   This parameter is valid only when you change the billing method from pay-as-you-go to subscription.
-   All strings except **true** are considered **false**.

true

AutoUseCoupon

boolean

No

Specifies whether to use vouchers to offset fees. Valid values:

-   **true**
-   **false** (default)

true

PromotionCode

string

No

The coupon code.

726702810223

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

DBInstanceId

string

The instance ID.

rm-uf6wjk5xxxxxx

RequestId

string

The ID of the request.

5E6E09DE-5B12-4BFF-A55E-1C86EDE06D9A

ExpiredTime

string

The expiration time.

**Note** If you call this operation to change the billing method of an instance from subscription to pay-as-you-go, this parameter is not returned.

2020-04-20T10:00:00Z

OrderId

long

The order ID.

205157600280623

ChargeType

string

The payment type.

-   Valid value if the new billing method is pay-as-you-go: POSTPAY
-   Valid value if the new billing method is subscription: PREPAY

Prepaid

## Examples

Sample success responses

`JSON`format

```
{
  "DBInstanceId": "rm-uf6wjk5xxxxxx",
  "RequestId": "5E6E09DE-5B12-4BFF-A55E-1C86EDE06D9A",
  "ExpiredTime": "2020-04-20T10:00:00Z",
  "OrderId": 205157600280623,
  "ChargeType": "Prepaid"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDBInstanceName.NotFound

The specified DB instance name does not exist.

The instance name does not exist.

400

InvalidInstanceUseType.NotSupport

Specified instanceUseType does not support in RDS.

The operation failed. The role that is specified by the instanceUseType parameter is not supported for the RDS instance.

400

InvalidOrderCharge.NotSupport

The specified order charge does not support in RDS.

The operation failed. ApsaraDB RDS supports two billing methods: subscription (Prepaid) and pay-as-you-go (Postpaid). Specify a valid billing method by using the PayType parameter.

400

InvalidOrderTask.NotSupport

The Current InstanceId exist Order Task in RDS.

Uncompleted order tasks are found in the RDS instance. Please try again later.

400

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation failed. The RDS instance is not in a ready state.

400

IncompleteAccountInfo

Your information is incomplete. Complete your information before the operation.

The operation failed. Items that are marked with an asterisk (\*) in the account information must be specified. Make sure that you specify these items on the Basic Information page in Account Center.

400

IncompleteTaxInfo

Your tax information is incomplete. Complete your information before the operation.

The operation failed. Your tax information is incomplete. Complete your tax information.

400

InvalidPaymentMethod.Incomplete

No payment method is specified for your account. We recommend that you add a payment method.

No valid payment method is specified for your Alibaba Cloud account. Add a valid payment method.

400

InvalidPaymentMethod.Missing

Your payment method is incomplete. We recommend that you add a payment method.

No valid payment method is specified within your Alibaba Cloud account. Add a valid payment method.

400

InsuffcientBalanceOrBankAccount

Add a payment method or add funds to the prepayment balance. Get started by creating an instance.

No valid payment method is specified within your Alibaba Cloud account. Add a valid payment method or add funds to your Alibaba Cloud account.

400

InvalidPaymentMethod.NoAccess

No payment method is specified for your account. Please contact your Customer Manager or open a ticket.

\-

400

InvalidPaymentMethod.Missing

No payment method is specified for your account. We recommend that you add a payment method.

No valid payment method is specified for your Alibaba Cloud account. Add a valid payment method.

400

InvalidPaymentMethod.InsufficientBalance

No payment method is specified for your account. We recommend that you add a payment method or add funds to the prepayment balance.

\-

400

OrderTaskAlreadyExists

Order task already exists.

The specified order task already exists.

400

InvalidOldInstanceType.NotSupport

Specified oldInstanceType does not support in RDS.

This operation is not supported for the database engine version of the current instance.

400

OperationDenied.TimeLimit

The interval between the two conversion operations must be greater than 15 minutes.

The operation failed. The time interval between two operations that are performed to convert the payment type must be greater than 15 minutes.

400

InvalidDBInstanceId.Malformed

The specified parameter DBInstanceId is not valid.

The instance ID is invalid. Check the instance ID.

400

InvalidPayType.Malformed

The specified parameter PayType is not valid.

\-

400

InvalidResource.Format

The specified parameter Resource is not valid.

The resource ID is invalid.

400

InvalidPayType.Format

The specified parameter PayType is not valid.

The payment type is invalid.

400

InvalidUsedTime.Format

The specified parameter UsedTime is not valid.

UsedTime is not defined.

400

InvalidPeriod.Format

The specified parameter Period is not valid.

\-

400

InvalidPeriodOrUsedTime.Format

The specified parameter Period and UsedTime are not valid.

\-

400

InvalidDiscountCoupon.Malformed

The specified discount coupon is not valid.

\-

400

InsufficientQuota.NoEnough

Your current quota is insufficient. Please contact your channel partner to increase your quota.

The quota is insufficient. Contact your channel partner to request a quota increase.

400

SYSTEM.ILLEGALARGUMENT

The current instance does not have a valid configuration when change the payType from Prepaid to Postpaid.

\-

400

AccountMoneyValidate.error

Insufficient funds available in the account.

\-

400

ContainForbiddenLabel.error

There is a label that prohibits placing an order, and the order cannot be placed.

\-

400

Pay.InsufficientBalance

Insufficient available balance.

Insufficient available balance.

400

CommodityServiceCalling.Exception

Failed to call commodity service.

Failed to call commodity service return.

400

Risk.RiskControlRejection

Your account is abnormal, please contact customer service for details.

Your account is abnormal, please contact customer service for details.

400

Commodity.InvalidComponent

The module you purchased is not legal, please buy it again.

The module you purchased is not legal, please buy it again.

400

InvalidParam.PREPAY

The prepaid instance purchase limit has been exceeded, and changing the payment method to prepaid is not allowed.

The classic network is offline. The current instance is of the classic network type and has exceeded the subscription limit. You are not allowed to switch to the subscription method.

400

InvalidParam.POSTPAY

It is not allowed to switch the payment method to postpaid after exceeding the purchase time limit for postpaid instances.

When the classic network is offline, the current instance is of the classic network type and has exceeded the time limit of the post-payment instance. You cannot switch the payment method to post-payment.

400

Order.InstHasUnsettledBills

You currently have outstanding bills, please settle them first.

You currently have outstanding bills, please settle them first.

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

RegionDissolvedEOM

Dear customer, Alibaba Cloud plans to optimize and adjust the current region. Cloud services in this region will cease operations. You are currently unable to operate new purchase orders. Thank you for your understanding and support.

Hello, Alibaba Cloud plans to optimize and adjust the current region. Cloud services in this region will stop operating. In order to ensure your business continuity and smooth transition of data migration, you are currently unable to operate new purchase orders. Thank you for your understanding and support.

400

RegionEndTimeDissolvedAustralia

Cloud services in the Australia (Sydney) region will be discontinued. Set the validity date to September 30, 2024 or earlier than September 30, 2024.

Hello customer, this area has been abolished.

400

Price.CommoditySys

Commodity system call exception.

Commodity system call exception.

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

BasicInfoUncompleted

Your information is incomplete. Complete your information before the operation.

Your basic information is not complete, please complete your basic information before operation.

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

400

ProductInstanceReleased

The instance has been released. Please check before placing the order.

The instance has been released, please verify and place an order.

400

RegionEndTimeDissolvedIndia

The region is no longer supported.

The region is no longer supported.

403

OperationDenied.LockMode

The operation is not permitted when the instance locked.

The operation failed. The RDS instance is locked possibly because the balance within your Alibaba Cloud account is insufficient. Top up or add funds to your Alibaba Cloud account to unlock the RDS instance.

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

500

InvokeProxyFailure

The request processing has failed due to service failure of rds api.

The request failed to be processed due to an RDS API failure.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-19

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/TransformDBInstancePayType?updateTime=2024-11-19#workbench-doc-change-demo)

2024-08-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/TransformDBInstancePayType?updateTime=2024-08-29#workbench-doc-change-demo)

2024-08-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/TransformDBInstancePayType?updateTime=2024-08-15#workbench-doc-change-demo)

2024-08-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/TransformDBInstancePayType?updateTime=2024-08-13#workbench-doc-change-demo)

2024-05-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/TransformDBInstancePayType?updateTime=2024-05-14#workbench-doc-change-demo)

2024-05-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/TransformDBInstancePayType?updateTime=2024-05-11#workbench-doc-change-demo)

2024-03-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/TransformDBInstancePayType?updateTime=2024-03-11#workbench-doc-change-demo)

2023-09-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/TransformDBInstancePayType?updateTime=2023-09-08#workbench-doc-change-demo)

2023-05-04

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/TransformDBInstancePayType?updateTime=2023-05-04#workbench-doc-change-demo)

2022-09-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/TransformDBInstancePayType?updateTime=2022-09-01#workbench-doc-change-demo)

2021-10-26

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/TransformDBInstancePayType?updateTime=2021-10-26#workbench-doc-change-demo)
