Queries the details about the accounts that are created on an ApsaraDB RDS instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   RDS MySQL
-   RDS PostgreSQL
-   RDS SQL Server
-   RDS MariaDB

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeAccounts)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeAccounts)

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

rds:DescribeAccounts

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

**Note** This parameter is not supported for RDS instances that run SQL Server 2017 on RDS Cluster Edition.

rm-uf6wjk5\*\*\*\*\*

AccountName

string

No

The name of the database account.

test1

PageSize

integer

No

The number of entries per page. Valid values: **30 to 200**. Default value: **30**.

30

PageNumber

integer

No

The page number. Default value: **1**. Pages start from page 1.

1

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

Accounts

array<object>

The information about the account.

DBInstanceAccount

object

The details of the account.

AccountDescription

string

The description of the account.

Test account

AccountName

string

The name of the database account.

test1

AccountStatus

string

The status of the account. Valid values:

-   **Unavailable**
-   **Available**

Available

AccountType

string

The type of the account. Valid values:

-   **Normal**: standard account
-   **Super**: privileged account
-   **Sysadmin**: system admin account, which is supported only for instances running SQL Server

Normal

BypassRLS

string

Indicates whether the account has the row-level security (RLS) permissions. Valid values:

-   **t**: The account has the RLS permissions.
-   **f**: The account does not have the RLS permissions.

**Note** This parameter is returned only for instances that run PostgreSQL.

f

CheckPolicy

boolean

Indicates whether the password policy is applied.

**Note** This parameter is returned only for instances that run SQL Server.

true

CreateDB

string

Indicates whether the account has the permissions to create databases. Valid values:

-   **t**: The account has the permissions to create databases.
-   **f**: The account does not have the permissions to create databases.

**Note** This parameter is returned only for instances that run PostgreSQL.

t

CreateRole

string

Indicates whether the account has the permissions to create roles. Valid values:

-   **t**: The account has the permissions to create roles.
-   **f**: The account does not have the permissions to create roles.

**Note** This parameter is returned only for instances that run PostgreSQL.

t

DBInstanceId

string

The ID of the instance to which the account belongs.

rm-uf6wjk5\*\*\*\*\*

DatabasePrivileges

array<object>

The details about the permissions that are granted to the account.

DatabasePrivilege

object

AccountPrivilege

string

The type of the permissions. Valid values:

-   **ReadWrite**: read and write permissions.
-   **ReadOnly**: read-only permissions.
-   **DDLOnly**: DDL-only permissions.
-   **DMLOnly**: DML-only permissions.
-   **Custom**: custom permissions. You can modify the permissions of the account by using SQL commands.

ReadWrite

AccountPrivilegeDetail

string

The permissions that are granted to the account. For more information, see [Account permissions](/help/en/rds/apsaradb-rds-for-mysql/account-permissions).

SELECT,INSERT

DBName

string

The name of the database.

test1

PasswordExpireTime

string

The expiration time of the password.

**Note** This parameter is returned only for instances that run SQL Server.

2024-10-21

PrivExceeded

string

Indicates whether the number of databases that are managed by the account exceeds the upper limit. Valid values:

-   **1**: The number of databases that are managed by the account exceeds the upper limit.
-   **0**: The number of databases that are managed by the account does not exceed the upper limit.

0

Replication

string

Indicates whether the account has the replication permissions. Valid values:

-   **t**: The account has the replication permissions.
-   **f**: The account does not have the replication permissions.

**Note** This parameter is returned only for instances that run PostgreSQL.

t

ValidUntil

string

The expiration time of the password. Valid values:

-   **infinity**: The password never expires.
-   **Empty**: The expiration time is not specified.
-   **Actual expiration time**: in the format of _yyyy-MM-dd_T_HH:mm:ss_Z in UTC. Example: 2022-10-01T00:00:00Z.

**Note** This parameter is returned only for instances that run PostgreSQL.

2022-10-01T00:00:00Z

PageNumber

integer

The page number.

1

RequestId

string

The request ID.

A2E94301-D07F-4457-9B49-6AA2BB388C85

SystemAdminAccountFirstActivationTime

string

The first time when the system admin account was enabled. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

**Note** This parameter is returned only for instances that run SQL Server.

2020-02-06T11:00:00Z

SystemAdminAccountStatus

string

Indicates whether the system admin account was enabled. Valid values:

-   **true**: The system admin account was enabled.
-   **false**: The system admin account was disabled.

**Note** The [system admin account](/help/en/rds/apsaradb-rds-for-sql-server/create-a-system-admin-account-for-an-apsaradb-rds-for-sql-server-instance) is supported only for the instances that run SQL Server. If the instance runs SQL Server, a value is returned for this parameter. If the instance runs a different database engine, no value is returned for this parameter.

True

TotalRecordCount

integer

The total number of entries that are returned.

1

ResourceGroupId

string

The resource group ID.

rg-acfmy\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "Accounts": {
    "DBInstanceAccount": [
      {
        "AccountDescription": "Test account\n",
        "AccountName": "test1",
        "AccountStatus": "Available",
        "AccountType": "Normal",
        "BypassRLS": "f",
        "CheckPolicy": true,
        "CreateDB": "t",
        "CreateRole": "t",
        "DBInstanceId": "rm-uf6wjk5*****",
        "DatabasePrivileges": {
          "DatabasePrivilege": [
            {
              "AccountPrivilege": "ReadWrite",
              "AccountPrivilegeDetail": "SELECT,INSERT",
              "DBName": "test1"
            }
          ]
        },
        "PasswordExpireTime": "2024-10-21",
        "PrivExceeded": 0,
        "Replication": "t",
        "ValidUntil": "2022-10-01T00:00:00Z"
      }
    ]
  },
  "PageNumber": 1,
  "RequestId": "A2E94301-D07F-4457-9B49-6AA2BB388C85",
  "SystemAdminAccountFirstActivationTime": "2020-02-06T11:00:00Z",
  "SystemAdminAccountStatus": "True",
  "TotalRecordCount": 1,
  "ResourceGroupId": "rg-acfmy****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

%s

DB Operation Failed:%s.

\-

400

IO.Exception

IO exception, retry later.

An I/O error occurred.

400

Database.ConnectError

Database connect error. please check instance status and database processlist

A database connection error occurred. Check the instance state and the database connection pool.

400

InvalidDBInstanceStatus.NotSupport

The Specified instance status is not supported to query account list.

\-

400

InvalidEngine.Malformed

Specified engine is not valid.

The database engine is invalid. Specify a valid database engine.

400

Account.QueryError

Query Account failed, please check your input value.

Failed to query the account, check the request parameters. For example, check whether the specified account of the RDS for MySQL instance contains special characters.

400

SqlExcutionFailed

Database is already open and can only have one user at a time.

\-

400

SqlExecuteFailedOrTimeout

sql command execution failed or timed out:%s.

SQL command execution failed or timed out

400

ConcurrentLimit

The request processing has been concurrent limit.

Request processing has reached the concurrency limit.

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

400

DbossGeneralError

The instance is being created. Please wait.

Instance is being created, please wait a moment. Or the RDS SQL Server account name may contain special characters.

400

InvalidCharacter.DbOrAccount

The database name or account name contains invalid characters.

The database name or account name contains illegal characters.

400

NoAvailablePaymentMethod

No payment method is specified for account. We recommend that you add a payment method.

Account does not specify a payment method. We recommend that you add a payment method.

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

IncorrectDBInstanceLockMode

Current DB instance lock mode does not support this operation.

The operation failed. The RDS instance is locked.

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

408

NetworkOrSqlTimeoutError

Failed to create login due to potential SQL Server overload or other issues that may cause the login creation fail. Please retry later.

The query failed due to timeout caused by potential SQL Server overload or excessive number of instance accounts.

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

2025-04-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAccounts?updateTime=2025-04-02#workbench-doc-change-demo)

2025-02-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAccounts?updateTime=2025-02-14#workbench-doc-change-demo)

2024-11-14

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAccounts?updateTime=2024-11-14#workbench-doc-change-demo)

2024-09-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAccounts?updateTime=2024-09-26#workbench-doc-change-demo)

2024-09-09

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAccounts?updateTime=2024-09-09#workbench-doc-change-demo)

2024-06-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAccounts?updateTime=2024-06-03#workbench-doc-change-demo)

2024-05-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAccounts?updateTime=2024-05-28#workbench-doc-change-demo)

2023-09-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAccounts?updateTime=2023-09-08#workbench-doc-change-demo)

2023-03-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAccounts?updateTime=2023-03-24#workbench-doc-change-demo)

2022-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAccounts?updateTime=2022-10-28#workbench-doc-change-demo)

2022-09-15

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAccounts?updateTime=2022-09-15#workbench-doc-change-demo)

2022-09-15

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAccounts?updateTime=2022-09-15#workbench-doc-change-demo)

2022-07-08

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeAccounts?updateTime=2022-07-08#workbench-doc-change-demo)
