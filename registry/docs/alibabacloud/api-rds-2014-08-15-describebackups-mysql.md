Queries the data backup files of an ApsaraDB RDS instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   RDS MySQL
-   RDS PostgreSQL
-   RDS SQL Server
-   RDS MariaDB

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeBackups)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeBackups)

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

rds:DescribeBackups

get

DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

none

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

BackupId

string

No

The ID of the backup set.

327329803

BackupStatus

string

No

The status of the backup set. Valid values:

-   **Success**
-   **Failed**

Success

BackupMode

string

No

The backup mode. Valid values:

-   **Automated**
-   **Manual**

Automated

StartTime

string

No

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC.

2011-06-01T16:00Z

EndTime

string

No

The end of the time range to query. The end time must be later than the start time. Specify the time in the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm_Z format. The time must be in UTC.

**Note** We recommend that you specify a time range that is as short as possible to avoid timeout.

2011-06-15T16:00Z

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

The number of the page to return. Valid values: any non-zero positive integer.

Default value: **1**.

1

BackupType

string

No

The backup type. Valid values:

-   **FullBackup**: full backup
-   **IncrementalBackup**: incremental backup

FullBackup

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

1A6D328C-84B8-40DC-BF49-6C73984D7494

TotalEcsSnapshotSize

long

The size of the snapshot chain of the instance. Unit: bytes.

0

PageRecordCount

string

The number of backup sets on the current page.

30

TotalRecordCount

string

The total number of entries returned.

100

PageNumber

string

The page number of the returned page.

1

Items

array<object>

The returned backup sets.

Backup

object

The details of the returned backup sets.

StorageClass

string

The storage class of the backup set. Valid values:

-   **0**: regular storage
-   **1**: archive storage

0

Encryption

string

The encryption information about the backup set.

{}

BackupStatus

string

The state of the backup set.

Success

StoreStatus

string

Indicates whether the backup set can be deleted. Valid values:

-   **Enabled**: The backup set can be deleted.
-   **Disabled**: The backup set cannot be deleted.

Disabled

ConsistentTime

long

The point in time at which the data in the backup set is consistent. The return value of this parameter is a timestamp.

**Note** If the instance runs MySQL 5.6, a timestamp is returned. Otherwise, the value 0 is returned.

1576506856

BackupType

string

The backup type of the backup set. Valid values:

-   **FullBackup**
-   **IncrementalBackup**

FullBackup

CopyOnlyBackup

string

The backup mode of the backup set. Valid values:

-   0: the standard mode. This mode supports full backups and incremental backups.
-   1: the copy-only mode. This mode supports only full backups.

**Note** This parameter is returned only when the instance runs SQL Server.

0

BackupEndTime

string

The end time of the backup task. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm_Z format. The time is displayed in UTC.

2019-02-13T12:20:00Z

MetaStatus

string

The status of the backup set that is used to restore individual databases or tables. Valid values:

-   **OK**: The data backup file is normal.
-   **LARGE**: The data backup file contains an abnormally large number of tables. It cannot be used to restore individual databases or tables.
-   **EMPTY**: The data backup file is generated from a failed backup task.

**Note** If an empty string is returned, the data backup file cannot be used to restore individual databases or tables.

OK

BackupInitiator

string

The initiator of the backup task. Valid values:

-   **System**
-   **User**

System

BackupIntranetDownloadURL

string

The URL that is used to download the backup set over an internal network. If the backup set cannot be downloaded, null is returned.

**Note** For example, if BackupMethod of an ApsaraDB RDS for SQL Server instance is set to **Snapshot**, a null string is returned.

http://rdsbak-hz-v3.oss-cn-hangzhou-internal.aliyuncs.com/xxxxx

BackupMethod

string

The method that is used to generate the backup set. Valid values:

-   **Logical**: logical backup
-   **Physical**: physical backup
-   **Snapshot**: snapshot backup

Physical

BackupStartTime

string

The start time of the backup. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm_Z format. The time is displayed in UTC.

2019-02-03T12:20:00Z

BackupDownloadURL

string

The URL that is used to download the backup set over the Internet. If the backup set cannot be downloaded, null is returned.

**Note** For example, if BackupMethod of an ApsaraDB RDS for SQL Server instance is set to **Snapshot**, a null string is returned.

http://rdsbak-hz-v3.oss-cn-hangzhou.aliyuncs.com/xxxxx

IsAvail

integer

Indicates whether the backup set is available. Valid values:

-   **0**: The backup set is unavailable.
-   **1**: The backup set is available.

1

BackupId

string

The ID of the backup set.

321020562

HostInstanceID

string

The ID of the instance that generates the backup set. This parameter is used to indicate whether the instance that generates the backup set is a primary instance or a secondary instance.

5882781

BackupSize

long

The size of the data backup file. Unit: bytes.

2167808

BackupMode

string

The backup mode of the backup set. Valid values:

-   **Automated**
-   **Manual**

Automated

DBInstanceId

string

The instance ID.

rm-uf6wjk5xxxxxxx

Checksum

string

The checksum. The value of this parameter is calculated by using the CRC64 algorithm.

1835830439\*\*\*\*\*\*\*\*\*\*

BackupDownloadLinkByDB

array<object>

An array consisting of URLs from which you can download backup sets of individual databases.

BackupDownloadLinkByDB

object

IntranetDownloadLink

string

The internal URL from which you can download the backup set.

https://cn-hangzhou-internal.bak.rds.aliyuncs.com/custins53664665/hins18676859\_2021072909473127987849.zip?Expires=\*\*\*\*\*&dbList=tb1

DataBase

string

The name of the database.

dbs

DownloadLink

string

The public URL from which you can download the backup set.

https://cn-hangzhou.bak.rds.aliyuncs.com/custins53664665/hins18676859\_2021072909473127987849.zip?Expires=\*\*\*\*\*&dbList=tb1

Engine

string

The type of the database engine. Valid values:

-   MySQL
-   SQLServer
-   PostgreSQL
-   MariaDB

MySQL

EngineVersion

string

The version of the database engine.

8.0

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1A6D328C-84B8-40DC-BF49-6C73984D7494",
  "TotalEcsSnapshotSize": 0,
  "PageRecordCount": 30,
  "TotalRecordCount": 100,
  "PageNumber": 1,
  "Items": {
    "Backup": [
      {
        "StorageClass": 0,
        "Encryption": {},
        "BackupStatus": "Success",
        "StoreStatus": "Disabled",
        "ConsistentTime": 1576506856,
        "BackupType": "FullBackup",
        "CopyOnlyBackup": 0,
        "BackupEndTime": "2019-02-13T12:20:00Z",
        "MetaStatus": "OK",
        "BackupInitiator": "System",
        "BackupIntranetDownloadURL": "http://rdsbak-hz-v3.oss-cn-hangzhou-internal.aliyuncs.com/xxxxx",
        "BackupMethod": "Physical",
        "BackupStartTime": "2019-02-03T12:20:00Z",
        "BackupDownloadURL": "http://rdsbak-hz-v3.oss-cn-hangzhou.aliyuncs.com/xxxxx",
        "IsAvail": 1,
        "BackupId": 321020562,
        "HostInstanceID": 5882781,
        "BackupSize": 2167808,
        "BackupMode": "Automated",
        "DBInstanceId": "rm-uf6wjk5xxxxxxx",
        "Checksum": "1835830439**********",
        "BackupDownloadLinkByDB": {
          "BackupDownloadLinkByDB": [
            {
              "IntranetDownloadLink": "https://cn-hangzhou-internal.bak.rds.aliyuncs.com/custins53664665/hins18676859_2021072909473127987849.zip?Expires=*****&dbList=tb1",
              "DataBase": "dbs",
              "DownloadLink": "https://cn-hangzhou.bak.rds.aliyuncs.com/custins53664665/hins18676859_2021072909473127987849.zip?Expires=*****&dbList=tb1"
            }
          ]
        },
        "Engine": "MySQL",
        "EngineVersion": 8
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

InvalidRestoreTime.Malformed

The requested restoreTime param is invalid, or the requested restoreTime is not within the scope of the instance backup.

\-

400

InvalidPageNumbers.Malformed

Specified page number is not valid.

The page number cannot be found.

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

InvalidDBinstanceClass.ValueNotSupported

The specified parameter DBinstanceClass is invalid.

The specified parameter DBinstanceClass is invalid.

400

InvalidBackupSetLocation.Format

Specified backup set location is not valid.

\-

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

400

ProductInstanceReleased

The instance has been released. Please check before placing the order.

The instance has been released, please verify and place an order.

403

InvalidMaxRecordsPerPage.Malformed

Specified record number is not valid.

\-

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

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

InvalidDBInstance.NotFound

The specified instance does not exist or is not supported.

The RDS instance cannot be found. Check the ID or name of the RDS instance.

404

Request.NotFound

The requested resource is not available.

The requested resources are unavailable.

404

InvalidClusterKms

The current instance does not authorized to access the Key Management Service.

The instance does not have permissions to access Key Management Service (KMS).

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

2024-08-13

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeBackups?updateTime=2024-08-13#workbench-doc-change-demo)

2024-08-06

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeBackups?updateTime=2024-08-06#workbench-doc-change-demo)

2024-07-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeBackups?updateTime=2024-07-05#workbench-doc-change-demo)

2024-07-02

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeBackups?updateTime=2024-07-02#workbench-doc-change-demo)

2021-10-21

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeBackups?updateTime=2021-10-21#workbench-doc-change-demo)
