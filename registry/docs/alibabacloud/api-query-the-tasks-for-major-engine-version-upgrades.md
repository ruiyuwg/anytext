Queries the historical tasks for major engine version upgrades of an ApsaraDB RDS for PostgreSQL instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

PostgreSQL

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeUpgradeMajorVersionTasks)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeUpgradeMajorVersionTasks)

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

rds:DescribeUpgradeMajorVersionTasks

get

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

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

pgm-bp1gm3yh0ht1\*\*\*\*

PageSize

integer

No

The number of entries per page.

Valid values: **30** to **100**.

Default value: **30**.

30

PageNumber

integer

No

The page number.

Pages start from 1.

Default value: **1**.

1

TargetMajorVersion

string

No

The major engine version of the new instance. Valid values:

-   **10.0**
-   **11.0**
-   **12.0**
-   **13.0**
-   **14.0**
-   **15.0**

12.0

TaskId

integer

No

A reserved parameter. You do not need to specify this parameter.

417450000

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

152E0C6D-B9C3-4468-9F2C-FEF9D9E8417B

PageNumber

integer

The page number.

1

PageRecordCount

integer

The number of entries per page.

30

TotalRecordCount

integer

The total number of entries returned.

1

Items

array<object>

The tasks for major engine version upgrades.

Tasks

object

TargetMajorVersion

string

The major engine version of the new instance. Valid values:

-   **10.0**
-   **11.0**
-   **12.0**
-   **13.0**
-   **14.0**
-   **15.0**

12.0

Result

string

The status of the task.

-   **Success**: The task is successful.
-   **Failed**: The task failed.
-   **Running**: The task is in the phase in which data is being migrated to a new instance.

Success

EndTime

string

The end time of the task.

This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC. Unit: milliseconds.

1614237779000

StartTime

string

The start time of the task.

This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC. Unit: milliseconds.

1614236007000

SourceMajorVersion

string

The major engine version of the original instance.

11.0

UpgradeMode

string

The upgrade mode.

Valid values:

-   **clone**: The system does not migrate data to the new instance and does not switch your workloads over to the new instance.
-   **switch**: The system migrates data to the new instance and switches your workloads over to the new instance.

switch

CollectStatMode

string

The time when the system collects the statistics.

Valid values:

-   **After**: The system collects the statistics after a switchover.
-   **Before**: The system collects the statistics before a switchover.

After

SourceInsName

string

The ID of the original instance.

pgm-bp1i3kkq7321\*\*\*\*

TaskId

integer

The task ID.

342900000

TargetInsName

string

The ID of the new instance.

pgm-bp1c0v6d8092\*\*\*\*

SwitchTime

string

The time at which your workloads are switched over from the original instance to the new instance.

This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC. Unit: milliseconds.

1614237539000

Detail

string

The details of the task.

2021-10-27 15:03:05 --- do upgrade precheck on slave succcess.\\n2021-10-27 15:03:11 --- begin to upgrade major version, source instance will locked in readonly mode.\\n2021-10-27 15:03:21 --- upgrade master success.\\n2021-10-27 15:06:10 --- exchange source and target instance dns success.\\n

SwitchEndTime

string

The end time of the switching from the original instance to the new instance.

Expressed in Unix timestamp. Unit: milliseconds.

1714237539000

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "152E0C6D-B9C3-4468-9F2C-FEF9D9E8417B",
  "PageNumber": 1,
  "PageRecordCount": 30,
  "TotalRecordCount": 1,
  "Items": [
    {
      "TargetMajorVersion": 12,
      "Result": "Success",
      "EndTime": 1614237779000,
      "StartTime": 1614236007000,
      "SourceMajorVersion": 11,
      "UpgradeMode": "switch",
      "CollectStatMode": "After",
      "SourceInsName": "pgm-bp1i3kkq7321****",
      "TaskId": 342900000,
      "TargetInsName": "pgm-bp1c0v6d8092****",
      "SwitchTime": 1614237539000,
      "Detail": "2021-10-27 15:03:05 --- do upgrade precheck on slave succcess.\\n2021-10-27 15:03:11 --- begin to upgrade major version, source instance will locked in readonly mode.\\n2021-10-27 15:03:21 --- upgrade master success.\\n2021-10-27 15:06:10 --- exchange source and target instance dns success.\\n",
      "SwitchEndTime": 1714237539000
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

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

400

ProductInstanceReleased

The instance has been released. Please check before placing the order.

The instance has been released, please verify and place an order.

400

RegionEndTimeDissolvedIndia

The region is no longer supported.

The region is no longer supported.

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

InvalidDBInstanceName.NotFound

The database instance does not exist.

The name of the RDS instance cannot be found. Check the name of the RDS instance.

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

2025-04-17

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeUpgradeMajorVersionTasks?updateTime=2025-04-17#workbench-doc-change-demo)

2024-11-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeUpgradeMajorVersionTasks?updateTime=2024-11-18#workbench-doc-change-demo)

2024-11-13

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeUpgradeMajorVersionTasks?updateTime=2024-11-13#workbench-doc-change-demo)
