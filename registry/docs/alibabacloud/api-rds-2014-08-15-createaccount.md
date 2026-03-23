Creates a database account.

## Operation description

### [](#supported-database-engines)Supported database engines

-   RDS MySQL
-   RDS PostgreSQL
-   RDS SQL Server
-   RDS MariaDB

### [](#references)References

**Note** : Before you call this operation, read the following documentation and make sure that you fully understand the prerequisites and impacts of this operation.

-   [Create an account on an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-account-on-an-apsaradb-rds-for-mysql-instance)
-   [Create an account on an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-an-account-on-an-apsaradb-rds-for-postgresql-instance)
-   [Create an account on an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-a-standard-account-privileged-account-and-a-global-read-only-account)
-   [Create an account on an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/create-an-account-on-an-apsaradb-rds-for-mariadb-instance)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateAccount)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateAccount)

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

rds:CreateAccount

create

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

AccountName

string

Yes

The name of the database account.

-   The name must be unique.
    
-   The name can contain lowercase letters, digits, and underscores (\_). For MySQL databases, the name can contain uppercase letters.
    
-   The name must start with a letter and end with a letter or digit.
    
-   For MySQL databases, the name of the privileged account cannot be the same as that of the standard account. For example, if the name of the privileged account is `Test1`, the name of the standard account cannot be `test1`.
    
-   The length of the value must meet the following requirements:
    
    -   If the instance runs MySQL 5.7 or MySQL 8.0, the value must be 2 to 32 characters in length.
    -   If the instance runs MySQL 5.6, the value must be 2 to 16 characters in length.
    -   If the instance runs SQL Server, the value must be 2 to 64 characters in length.
    -   If the instance runs PostgreSQL with cloud disks, the value must be 2 to 63 characters in length.
    -   If the instance runs PostgreSQL with local disks, the value must be 2 to 16 characters in length.
    -   If the instance runs MariaDB, the value must be 2 to 16 characters in length.
-   For more information about invalid characters, see [Forbidden keywords](/help/en/rds/developer-reference/forbidden-keywords).
    

test1

AccountPassword

string

Yes

The password of the account.

-   The value must be 8 to 32 characters in length.
    
-   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
    
-   Special characters include `! @ # $ % ^ & * ( ) _ + - =`
    

Test123456

AccountDescription

string

No

The description of the account. The value must be 2 to 256 characters in length. The value can contain letters, digits, underscores (\_), and hyphens (-), and must start with a letter.

**Note** : The name cannot start with http:// or https://.

Test Account A

AccountType

string

No

The account type. Valid values:

-   **Normal** (default): standard account.
-   **Super**: privileged account.
-   **Sysadmin**: system admin account. The account type is available only for ApsaraDB RDS for SQL Server instances.

Before you create a system admin account, check whether the instance meets all prerequisites. For more information, see [Create a system admin account](/help/en/rds/apsaradb-rds-for-sql-server/create-a-system-admin-account-for-an-apsaradb-rds-for-sql-server-instance).

Normal

CheckPolicy

boolean

No

Specifies whether to use a password policy.

**Note**

-   This parameter is available only for ApsaraDB RDS for SQL Server instances that do not belong to the shared instance family and do not run SQL Server 2008 R2.
    
-   Before you call this operation, you must configure a password policy for the account of your instance. For more information, see [Configure a password policy for the account of an ApsaraDB RDS for SQL Server instance](/help/en/rds/developer-reference/api-rds-2014-08-15-modifyaccountsecuritypolicy).
    

true

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

D4D4BE8A-DD46-440A-BFCD-EE31DA81C9DD

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "D4D4BE8A-DD46-440A-BFCD-EE31DA81C9DD"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

GeneralIns.Creating

The general instance is creating.

An RDS instance is in production. Please wait.

400

GeneralIns.Maintaining

The general instance is maintaining.

An RDS instance is being migrated or maintained. Please wait.

400

GeneralIns.Switching

The general instance is Switching.

A switchover for high availability is in progress. Please wait.

400

InvalidEngineVersion.NotSupported

Current db instance does not support sysadmin.

The operation failed. The current instance does not support creating sysAdmin accounts.

400

Database.ConnectError

Database connect error. please check instance status and database processlist

A database connection error occurred. Check the instance state and the database connection pool.

400

Account.AddError

Create Account failed, please check your input value or may your input value not satisfy instance current policy

Failed to create the account. Check the specified parameters or the parameter policy configuration.

400

InvalidAccountPassword.Format

Specified account password is not valid.

The password of the account is invalid. Specify a valid password.

400

InvalidAccountDescription.Format

Specified account description is not valid.

The account description is invalid. Specify a valid description. The description can be up to 256 characters in length and cannot be left unspecified.

400

InvalidGeneralGroupNameOrGdnInstanceName

The specified params generalGroupName or gdnInstanceName should not be null.

\-

400

InvalidAccountPrivilege.Malformed

Specified account privilege is not valid.

Your account does not have the required permissions.

400

InvalidAccountName.Forbid

Specified account name is a keyword in RDS.

The username is invalid. Forbidden keywords cannot be used for a username. Modify the username.

400

InvalidAccountName.Duplicate

Specified account name already exists in this instance.

The username already exists in the RDS instance. Specify a different username.

400

InvalidDBDescription.Format

Specified DB description is not valid.

The database description is invalid. Specify a valid description.

400

%s

DB Operation Failed:%s.

\-

400

InvalidAccountType.Format

The first account can't be normal type.

The first account can't be normal type.

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

IncorrectDBInstanceState

Current DB instance state does not support this operation.

\-

403

IncorrectAccountType

Current account type does not support this operation.

This operation is not supported for the current account type. Check the account type.

403

AccountLimitExceeded

AccountQuotaExceeded: Exceeding the allowed amount of account

The number of accounts exceeds the maximum number of accounts that are allowed.

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

2025-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateAccount?updateTime=2025-10-28#workbench-doc-change-demo)

2025-05-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateAccount?updateTime=2025-05-20#workbench-doc-change-demo)

2025-04-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateAccount?updateTime=2025-04-02#workbench-doc-change-demo)

2025-02-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateAccount?updateTime=2025-02-28#workbench-doc-change-demo)

2024-09-09

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateAccount?updateTime=2024-09-09#workbench-doc-change-demo)

2024-07-26

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateAccount?updateTime=2024-07-26#workbench-doc-change-demo)

2024-05-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateAccount?updateTime=2024-05-28#workbench-doc-change-demo)

2022-10-28

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateAccount?updateTime=2022-10-28#workbench-doc-change-demo)

2022-06-23

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateAccount?updateTime=2022-06-23#workbench-doc-change-demo)

2021-08-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateAccount?updateTime=2021-08-13#workbench-doc-change-demo)
