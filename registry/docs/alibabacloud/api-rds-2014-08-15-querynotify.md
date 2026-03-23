Queries the notifications of an ApsaraDB RDS instance.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

### [](#feature-description)Feature description

The notifications are highlighted at the top of the ApsaraDB RDS console. The notifications include renewal reminders and reminders of instance creation failures.

After you call this operation to query notifications, you can call the [ConfirmNotify](/help/en/rds/developer-reference/api-rds-2014-08-15-confirmnotify) operation to mark the notifications as confirmed, which means that you understand the content of the notifications.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/QueryNotify)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/QueryNotify)

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

rds:QueryNotify

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

WithConfirmed

boolean

Yes

Specifies whether the query results contain confirmed notifications. Valid values:

-   **true**
-   **false**

**Note** A confirmed notification is a notification that has been marked as confirmed by calling the ConfirmNotify operation.

false

From

string

Yes

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

2022-05-02T08:38:37Z

To

string

Yes

The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

2022-05-09T08:38:37Z

PageSize

integer

No

The number of entries per page. Valid values:

-   **30**
-   **50**
-   **100**

Default value: **30**.

30

PageNumber

integer

No

The page number. Pages start from page 1. Default value: 1.\*\*\*\*

Default value: **1**.

1

## Response parameters

Parameter

Type

Description

Example

object

PlainResponse

Data

object

The response parameters.

NotifyItemList

array<object>

The details of notifications.

NotifyItemList

object

Id

long

The ID of the notification.

103499

GmtCreated

string

The time when the notification was created.

2022-04-21T02:04:04Z

GmtModified

string

The time when the notification was modified.

2022-04-21T02:10:47Z

AliUid

long

The ID of the Alibaba Cloud account.

22973492\*\*\*\*\*\*\*\*\*\*

IdempotentId

string

This parameter ensures the idempotence of the notification and prevents the notification from being repeatedly sent.

ETnLKlblzczshOTUbOCzxxxxxxxxxx

IdempotentCount

string

The number of times that repeatedly sent notifications are blocked.

0

Type

string

The type of the notification. Valid values:

-   **Sell**: sales notification
-   **Operation**: O&M notification
-   **Promotion**: promotion notification

Sell

Level

string

The level of the notification. Valid values:

-   **help**
-   **success**
-   **warning**
-   **error**
-   **loading**
-   **notice**

error

TemplateName

string

The template of the notification. Valid values:

-   **RenewalRecommend**: The template that is used to notify of renewal suggestions.
-   **InstanceCreateFailed**: The template that is used to notify that an instance fails to be created and is refunded.

InstanceCreateFailed

NotifyElement

string

The element in the notification template. This parameter is a JSON string. Fields in the JSON string vary based on the value of the **TemplateName** parameter.

-   If the **TemplateName** parameter is **RenewalRecommend**, the JSON string contains the following fields:
    
    -   **instanceName**: the ID of the instance that is about to expire
    -   **reservedTime**: the remaining validity period of the instance in days
-   If the **TemplateName** parameter is **InstanceCreateFailed**, the JSON string contains the following fields:
    
    -   **orderId**: the ID of the order to purchase the instance
    -   **reason**: the cause of the instance creation failure

{\\"orderId\\":21466\*\*\*\*\*\*\*\*\*\*}

ConfirmFlag

boolean

Indicates whether the notification has been confirmed. You can call the [ConfirmNotify](/help/en/rds/developer-reference/api-rds-2014-08-15-confirmnotify) operation to mark the notification as confirmed. Valid values:

-   **true**
-   **false**

true

Confirmor

long

The UID of the contact who called the [ConfirmNotify](/help/en/rds/developer-reference/api-rds-2014-08-15-confirmnotify) operation to mark the notification as confirmed. The contact belongs to the current Alibaba Cloud account.

The value **0** indicates that the notification is automatically confirmed by the system.

0

PageSize

integer

The number of entries returned on each page.

25

PageNumber

integer

The page number of the page returned.

1

TotalRecordCount

integer

The total number of entries returned.

1

RequestId

string

The request ID.

94CB8D93-017A-5AE7-A118-6E0F89D93C0A

## Examples

Sample success responses

`JSON`format

```
{
  "Data": {
    "NotifyItemList": [
      {
        "Id": 103499,
        "GmtCreated": "2022-04-21T02:04:04Z",
        "GmtModified": "2022-04-21T02:10:47Z",
        "AliUid": 0,
        "IdempotentId": "ETnLKlblzczshOTUbOCzxxxxxxxxxx",
        "IdempotentCount": 0,
        "Type": "Sell",
        "Level": "error",
        "TemplateName": "InstanceCreateFailed",
        "NotifyElement": "{\\\"orderId\\\":21466**********}",
        "ConfirmFlag": true,
        "Confirmor": 0
      }
    ],
    "PageSize": 25,
    "PageNumber": 1,
    "TotalRecordCount": 1
  },
  "RequestId": "94CB8D93-017A-5AE7-A118-6E0F89D93C0A"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Param.Invalid

Param invalid

A request parameter error occurred.

400

Param.Invalid.TimeEndBeforeStart

Param invalid. End time before start time

The end time cannot be earlier than the start time.

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

No change history
