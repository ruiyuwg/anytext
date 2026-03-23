Queries the binary log files of an instance that runs MySQL or MariaDB or the write-ahead logging (WAL) files of an instance that runs PostgreSQL.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   MariaDB

### [](#usage-notes)Usage notes

-   If the return value of the **DownloadLink** parameter is NULL, ApsaraDB RDS does not provide a download URL.
-   If the return value of the **DownloadLink** parameter is not NULL, ApsaraDB RDS provides a URL for you to download backup files. The expiration time of the URL is specified by the **LinkExpiredTime** parameter. You must download the backup files before the expiration time.
-   If you use a RAM user to download backup files, you must grant permissions to the RAM user. For more information, see [Grant backup file download permissions to a RAM user with read-only permissions](/help/en/rds/apsaradb-rds-for-mysql/grant-backup-file-download-permissions-to-a-ram-user-with-read-only-permissions).
-   Each log file that is returned by this operation contains the log entries that are generated over the time range that is specified by the StartTime and EndTime parameters.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeBinlogFiles)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeBinlogFiles)

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

rds:DescribeBinlogFiles

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

rm-uf6wjk5xxxxxxx

StartTime

string

Yes

The beginning of the time range to query.

Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

2011-06-01T15:00:00Z

EndTime

string

Yes

The end of the time range to query. The end time must be later than the start time.

Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time must be in UTC.

2011-06-20T15:00:00Z

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

The page number. Pages start from 1.

Default value: **1**.

1

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

TotalFileSize

long

The total size of the log file.

2269410

PageNumber

integer

The page number.

1

RequestId

string

The request ID.

ED169A3E-1657-4104-82AB-24EA8CD0DB75

PageRecordCount

integer

The number of log files on the current page.

30

TotalRecordCount

integer

The total number of log files.

100

Items

array<object>

The details of the log file.

BinLogFile

object

RemoteStatus

string

The status of the log file that is stored in the Object Storage Service (OSS) bucket.

Valid values:

-   **Uploading**
-   **Completed**

Completed

IntranetDownloadLink

string

The URL that is used to download files over an internal network.

http://rdslog-hz-v3.oss-cn-hangzhou-internal.aliyuncs.com/xxxxxx

LogBeginTime

string

The beginning of the time range to query.

The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2019-02-09T17:45:21Z

LinkExpiredTime

string

The expiration time of the URL.

The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2013-06-09T18:00:00Z

DownloadLink

string

The HTTP-based download URL of the log file. If the return value of this parameter is NULL, ApsaraDB RDS does not provide a download URL for the log file.

http://rdsxxxxx.oss.aliyuncs.com/xxxxxx

LogFileName

string

The log file name.

000000040000000000000019

Checksum

string

The checksum. The value of this parameter is calculated by using the CRC64 algorithm.

18358304393468701857

LogEndTime

string

The end of the time range to query.

The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2019-02-15T13:10:28Z

HostInstanceID

string

The ID of the instance to which the log file belongs. This parameter helps determine whether the log file is generated on the primary instance or the secondary instance.

**Note** You can log on to the ApsaraDB RDS console and go to the instance details page. In the left-side navigation pane, click **Service Availability** to view the values of **Primary Instance No.** and **Secondary Instance No.**.

5841973

FileSize

long

The size of the log file.

Unit: bytes.

2269410

## Examples

Sample success responses

`JSON`format

```
{
  "TotalFileSize": 2269410,
  "PageNumber": 1,
  "RequestId": "ED169A3E-1657-4104-82AB-24EA8CD0DB75",
  "PageRecordCount": 30,
  "TotalRecordCount": 100,
  "Items": {
    "BinLogFile": [
      {
        "RemoteStatus": "Completed",
        "IntranetDownloadLink": "http://rdslog-hz-v3.oss-cn-hangzhou-internal.aliyuncs.com/xxxxxx",
        "LogBeginTime": "2019-02-09T17:45:21Z",
        "LinkExpiredTime": "2013-06-09T18:00:00Z",
        "DownloadLink": "http://rdsxxxxx.oss.aliyuncs.com/xxxxxx ",
        "LogFileName": "000000040000000000000019",
        "Checksum": 18358304393468703000,
        "LogEndTime": "2019-02-15T13:10:28Z",
        "HostInstanceID": 5841973,
        "FileSize": 2269410
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

ParameterLeastAssociate

Must input at least one optional parameter.

The point in time or the data backup file cannot be left unspecified. Specify a point in time or a data backup file and try again.

400

InvalidParameters.Format

Specified parameter is not valid

The operation failed. The values of some parameters are invalid.

400

ParameterAbsence

Necessary parameter is absence.

You must pass in the required parameter.

400

ServiceTemporarilyClosed

Service temporarily closed.

The task is closed.

400

ReadDBInstanceNotSupport

The operation is not permitted due to type of the instance.

\-

400

InvalidStartTime.Format

Specified start time is not valid.

The start time is invalid.

400

InvalidEndTime.Format

Specified end time is not valid.

The end time is invalid. Check the end time.

400

InvalidParameterCombination

The end time must be greater than the start time

The end time must be later than the start time.

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

IncorrectDBInstanceEngine

Current DB Instance engine does not support this operation.

The operation failed. The operation is not supported for the database engine that is run on the RDS instance.

403

IncorrectDBInstanceCharacterType

Current DB Instance character\_type does not support this operation.

This operation is not supported for the character type of the current instance.

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

IncorrectDBInstanceLockMode

Current DB instance lock mode does not support this operation.

The operation failed. The RDS instance is locked.

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

InvalidDBInstance.NotFound

Specified instance does not exist or not support.

The RDS instance cannot be found, is deleted, or does not support the operation.

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

2024-11-22

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeBinlogFiles?updateTime=2024-11-22#workbench-doc-change-demo)
