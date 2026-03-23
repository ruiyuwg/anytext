Queries instances.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstances)

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

rds:DescribeDBInstances

get

DBInstance

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

ETnLKlblzczshOTUbOCzxxxxxxx

proxyId

string

No

A deprecated parameter. You do not need to configure this parameter.

API

Engine

string

No

The database engine of the instance. Valid values:

-   **MySQL**
-   **SQLServer**
-   **PostgreSQL**
-   **MariaDB**

By default, this operation returns the instances that run any of the supported database engines.

MySQL

ZoneId

string

No

The zone ID of the instance.

cn-hangzhou-a

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmyxxxxx

DBInstanceStatus

string

No

The status of the instance. For more information, see [Instance states](/help/en/rds/developer-reference/instance-state-table).

Running

Expired

string

No

Specifies whether the instances have expired. Valid values:

-   **True**
-   **False**

True

SearchKey

string

No

The keyword that is used for fuzzy search. The keyword can be part of an instance ID or an instance description.

rm-uf6w

DBInstanceId

string

No

The instance ID.

rm-uf6wjk5xxxxxxx

DBInstanceType

string

No

The role of the instance. Valid values:

-   **Primary**: primary instance
-   **Readonly**: read-only instance
-   **Guard**: disaster recovery instance
-   **Temp**: temporary instance

By default, this operation returns the instances that assume any of the supported roles.

Primary

RegionId

string

Yes

The region ID. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

PageSize

integer

No

The number of entries to return on each page. Valid values: **1** to **100**.

Default value: **30**.

30

PageNumber

integer

No

The page number. Pages start from 1.

Default value: **1**.

1

InstanceNetworkType

string

No

The network type of the instance. Valid values:

-   **VPC**
-   **Classic**

By default, this operation returns the instances that reside in any of the supported network types.

Classic

VpcId

string

No

The VPC ID.

vpc-uf6f7l4fg90xxxxxxxxxx

VSwitchId

string

No

The vSwitch ID.

vsw-uf6adz52c2pxxxxxxxxxx

DBInstanceClass

string

No

The instance type of the instance. For information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).

rds.mys2.small

EngineVersion

string

No

The database engine version.

5.7

PayType

string

No

The billing method of the instance. Valid values:

-   **Postpaid**: pay-as-you-go
-   **Prepaid**: subscription

Postpaid

ConnectionMode

string

No

The connection mode of the instance. Valid values:

-   **Standard**: standard mode
-   **Safe**: database proxy mode

By default, this operation queries the instances that use any of the supported connection modes.

Standard

Tags

string

No

The tag that is added to the instance. Each tag is a key-value pair that consists of two fields: TagKey and TagValue. You can specify a maximum of five tags in the following format for each request: {"key1":"value1","key2":"value2"...}.

{"key1":"value1"}

DedicatedHostGroupId

string

No

The dedicated cluster ID.

dhg-7a9xxxxxxxx

DedicatedHostId

string

No

The host ID of the instance in the dedicated cluster.

i-bpxxxxxxx

InstanceLevel

integer

No

Specifies whether to return the RDS edition of the instance by using the Category parameter. Valid values:

-   **0**: returns the RDS edition of the instance.
-   **1**: does not return the RDS edition of the instance.

0

ConnectionString

string

No

The endpoint of the instance. You must specify this parameter only when you want to query a single instance.

rm-uf6wjk5xxxxxxx.mysql.rds.aliyuncs.com

NextToken

string

No

The token that is used to display the next page. You must set this parameter to the value that is returned from the most recent call of the **DescribeDBInstances** operation for **NextToken**. If the returned entries are displayed on multiple pages, the next page can be displayed when you call this operation again with this parameter specified.

o7PORW5o2TJg\*\*\*\*\*\*\*\*\*\*

MaxResults

integer

No

The number of entries to return per page. Valid values: **1 to 100**.

Default value: **30**.

**Note** If you specify this parameter, **PageSize** and **PageNumber** are unavailable.

30

Filter

string

No

The JSON string that consists of filter condition parameters and their values.

{"babelfishEnabled":"true"}

Category

string

No

The RDS edition of the instance. Valid values:

-   **Basic**: RDS Basic Edition
-   **HighAvailability**: RDS High-availability Edition
-   **cluster**: RDS Cluster Edition
-   **serverless\_basic**: RDS Serverless Basic Edition

cluster

You can use one of the following methods to check the response:

-   Method 1: Use **MaxResults** to specify the number of entries per page. Then, use **NextToken** to specify the token that is used to display the next page. **NextToken** is set to the value that is returned from the most recent call of the **DescribeDBInstances** operation for **NextToken**.

**Note** The first time you call the DescribeDBInstances operation to perform a paged query, you need only to specify **MaxResults**. In this case, the operation returns the data of the first page and the value of **NextToken**.

-   Method 2: Use **PageSize** to specify the number of entries per page. Then, use **PageNumber** to display the next page.

**Note** You can use only one of the preceding methods. If a large number of entries are returned, we recommend that you use Method 1 to increase the query speed.

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

1AD222E9-E606-4A42-BF6D-8A4442913CEF

PageNumber

integer

The page number of the returned page.

**Note** If you specify **MaxResults** or **NextToken**, only the value **1** is returned. You can ignore the value 1.

1

PageRecordCount

integer

The number of entries returned on the current page.

10

TotalRecordCount

integer

The total number of entries returned.

**Note** If you specify **MaxResults** or **NextToken**, only the number of entries on the current page is returned. You can ignore the number.

100

Items

array<object>

The information about the instances.

DBInstance

object

VpcId

string

The virtual private cloud (VPC) ID.

vpc-uf6f7l4fg90xxxxxxx

DedicatedHostIdForLog

string

The ID of the host on which the logger instance resides.

dh-bpxxxx

CreateTime

string

The creation time of the instance. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2018-11-05T11:26:02Z

PayType

string

The billing method of the instance. Valid values:

-   **Postpaid**: pay-as-you-go
-   **Prepaid**: subscription

Postpaid

DedicatedHostNameForLog

string

The name of the host on which the logger instance resides.

testlog

MutriORsignle

boolean

Indicates whether the multi-zone deployment method is used for the instance. Valid values:

-   **true**
-   **false**

**Note** If the multi-zone deployment method is used for the instance, the zone ID of the instance contains MAZ. Example: `cn-hangzhou-MAZ10(h,i)`.

true

DedicatedHostGroupName

string

The name of the dedicated cluster.

testhostgroup

EngineVersion

string

The database engine version.

5.7

DedicatedHostGroupId

string

The ID of the dedicated cluster.

dhg-7a9xxxxxxxx

VpcName

string

The VPC name.

test-huadong

DedicatedHostZoneIdForMaster

string

The zone ID of the host on which the primary instance resides.

cn-hangzhou-c

ConnectionString

string

The endpoint of the instance.

rm-uf6wjk5xxxxxxx.mysql.rds.aliyuncs.com

InstanceNetworkType

string

The network type of the instance. Valid values:

-   **Classic**
-   **VPC**

Classic

MasterInstanceId

string

The ID of the primary instance. If this parameter is null, the instance is a primary instance.

rm-uf6wjk5xxxxxxxxxx

ExpireTime

string

The expiration time of the instance. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

**Note** Pay-as-you-go instances never expire.

2019-02-27T16:00:00Z

DestroyTime

string

The time when the instance was destroyed. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2018-11-05T11:26:02Z

GuardDBInstanceId

string

The ID of the disaster recovery instance. This parameter is returned only when the instance is a primary instance and has a disaster recovery instance attached.

rm-uf64zsuxxxxxxxxxx

DedicatedHostNameForMaster

string

The name of the host on which the primary instance resides.

testmaster

ZoneId

string

The zone ID.

cn-hangzhou-a

TipsLevel

integer

The severity of the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:

-   **1**: The instance is normal.
-   **2**: The specifications of the read-only instances do not match the specifications of the primary instance, and instance performance may be affected. You must adjust the specifications of these instances based on your business requirements.

1

DBInstanceId

string

The instance ID.

rm-uf6wjk5xxxxxxxxxx

DedicatedHostIdForMaster

string

The ID of the host on which the primary instance resides.

dh-bpxxxx

TempDBInstanceId

string

The ID of the temporary instance. This parameter is returned only when the instance is a primary instance and has a temporary instance attached.

rm-uf64zsuxxxxxxxxxx

DBInstanceStorageType

string

The storage type of the instance.

ModuleList.4.ModuleCode

ConnectionMode

string

The connection mode of the instance. Valid values:

-   **Standard**: standard mode
-   **Safe**: database proxy mode

Standard

LockMode

string

The lock mode of the instance. Valid values:

-   **Unlock**: The instance is not locked.
-   **ManualLock**: The instance is manually locked.
-   **LockByExpiration**: The instance is automatically locked due to instance expiration.
-   **LockByRestoration**: The instance is automatically locked before the instance is rolled back.
-   **LockByDiskQuota**: The instance is automatically locked due to exhausted storage capacity.
-   **Released**: The instance is released. After an instance is released, the instance cannot be unlocked. You can only restore the backup data of the instance to a new instance. This process requires a long period of time.

Unlock

GeneralGroupName

string

The name of the dedicated cluster to which the instance belongs. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.

TestGroup

VpcCloudInstanceId

string

The ID of the instance. This parameter is returned only when the instance resides in a VPC.

rm-uf6wjk5xxxxxxx

DedicatedHostZoneIdForSlave

string

The zone ID of the host on which the secondary instance resides.

cn-hangzhou-d

Tips

string

The information about the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.

Run as expected.

DedicatedHostZoneIdForLog

string

The zone ID of the host on which the logger instance resides.

cn-hangzhou-b

DedicatedHostNameForSlave

string

The name of the host on which the secondary instance resides.

testslave

DBInstanceDescription

string

The instance description.

Test database

DBInstanceCPU

string

The number of CPU instances.

Returns only when the InstanceLevel parameter is 1.

2

DBInstanceMemory

integer

The memory size of the node. Unit: MB.

Returns only when the InstanceLevel parameter is 1.

4096

DBInstanceNetType

string

The type of the network connection to the instance. Valid values:

-   **Internet**
-   **Intranet**

Internet

DBInstanceType

string

The type of the instance. Valid values:

-   **Primary**: primary instance
-   **Readonly**: read-only instance
-   **Guard**: disaster recovery instance
-   **Temp**: temporary instance

Primary

LockReason

string

The reason why the instance was locked.

instance\_expired

DBInstanceStatus

string

The instance status. For more information, see [Instance statuses](/help/en/rds/developer-reference/instance-state-table).

Running

RegionId

string

The region ID.

cn-hangzhou

VSwitchId

string

The vSwitch ID.

vsw-uf6adz52c2pxxxxxxx

DedicatedHostIdForSlave

string

The ID of the host on which the secondary instance resides.

dh-bpxxxx

ResourceGroupId

string

The resource group ID.

rg-acfmyxxxxxxx

Category

string

The RDS edition of the instance. Valid values:

-   **Basic**: RDS Basic Edition
-   **HighAvailability**: RDS High-availability Edition
-   **Finance**: RDS Enterprise Edition

**Note** This parameter is returned only when the **InstanceLevel** parameter is set to **1**.

Basic

Engine

string

The database engine of the instance.

MySQL

DBInstanceClass

string

The instance type of the instance. For information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).

rds.mys2.small

SwitchWeight

integer

Indicates whether the instance supports weight-based switchovers for high availability. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:

-   **100**: The instance supports weight-based switchovers for high availability.
-   **0**: The instance does not support weight-based switchovers for high availability.

100

ReadOnlyDBInstanceIds

array<object>

The IDs of the read-only instances. This parameter is returned only when the instance is a primary instance and has the read-only instances attached.

ReadOnlyDBInstanceId

object

DBInstanceId

string

The read-only instance ID.

rr-uf6wjk5xxxxxxx

DeletionProtection

boolean

Indicates whether the release protection feature is enabled for the instance. Valid values:

-   **true**
-   **false**

false

BurstingEnabled

boolean

Indicates whether the I/O burst feature is enabled. Valid values:

-   **true**
-   **false**

false

BpeEnabled

string

A deprecated parameter.

0

IoAccelerationEnabled

string

Indicates whether the I/O acceleration feature is enabled. Valid values:

-   1: enabled
-   0: disabled

0

ColdDataEnabled

boolean

A reserved parameter.

false

NextToken

string

The token that is used to display the next page. If the returned entries are displayed on multiple pages, the next page can be displayed when you call this operation again with **NextToken** specified.

o7PORW5o2TJg\*\*\*\*\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1AD222E9-E606-4A42-BF6D-8A4442913CEF",
  "PageNumber": 1,
  "PageRecordCount": 10,
  "TotalRecordCount": 100,
  "Items": {
    "DBInstance": [
      {
        "VpcId": "vpc-uf6f7l4fg90xxxxxxx",
        "DedicatedHostIdForLog": "dh-bpxxxx",
        "CreateTime": "2018-11-05T11:26:02Z",
        "PayType": "Postpaid",
        "DedicatedHostNameForLog": "testlog",
        "MutriORsignle": true,
        "DedicatedHostGroupName": "testhostgroup",
        "EngineVersion": 5.7,
        "DedicatedHostGroupId": "dhg-7a9xxxxxxxx",
        "VpcName": "test-huadong",
        "DedicatedHostZoneIdForMaster": "cn-hangzhou-c",
        "ConnectionString": "rm-uf6wjk5xxxxxxx.mysql.rds.aliyuncs.com",
        "InstanceNetworkType": "Classic",
        "MasterInstanceId": "rm-uf6wjk5xxxxxxxxxx",
        "ExpireTime": "2019-02-27T16:00:00Z",
        "DestroyTime": "2018-11-05T11:26:02Z",
        "GuardDBInstanceId": "rm-uf64zsuxxxxxxxxxx",
        "DedicatedHostNameForMaster": "testmaster",
        "ZoneId": "cn-hangzhou-a",
        "TipsLevel": 1,
        "DBInstanceId": "rm-uf6wjk5xxxxxxxxxx",
        "DedicatedHostIdForMaster": "dh-bpxxxx",
        "TempDBInstanceId": "rm-uf64zsuxxxxxxxxxx",
        "DBInstanceStorageType": "ModuleList.4.ModuleCode",
        "ConnectionMode": "Standard",
        "LockMode": "Unlock",
        "GeneralGroupName": "TestGroup",
        "VpcCloudInstanceId": "rm-uf6wjk5xxxxxxx",
        "DedicatedHostZoneIdForSlave": "cn-hangzhou-d",
        "Tips": "Run as expected.\n",
        "DedicatedHostZoneIdForLog": "cn-hangzhou-b",
        "DedicatedHostNameForSlave": "testslave",
        "DBInstanceDescription": "Test database\n",
        "DBInstanceCPU": 2,
        "DBInstanceMemory": 4096,
        "DBInstanceNetType": "Internet",
        "DBInstanceType": "Primary",
        "LockReason": "instance_expired",
        "DBInstanceStatus": "Running",
        "RegionId": "cn-hangzhou",
        "VSwitchId": "vsw-uf6adz52c2pxxxxxxx",
        "DedicatedHostIdForSlave": "dh-bpxxxx",
        "ResourceGroupId": "rg-acfmyxxxxxxx",
        "Category": "Basic",
        "Engine": "MySQL",
        "DBInstanceClass": "rds.mys2.small",
        "SwitchWeight": 100,
        "ReadOnlyDBInstanceIds": {
          "ReadOnlyDBInstanceId": [
            {
              "DBInstanceId": "rr-uf6wjk5xxxxxxx"
            }
          ]
        },
        "DeletionProtection": false,
        "BurstingEnabled": false,
        "BpeEnabled": 0,
        "IoAccelerationEnabled": 0,
        "ColdDataEnabled": false
      }
    ]
  },
  "NextToken": "o7PORW5o2TJg**********"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Invalid.NextToken

The parameter NextToken is invalid.

The specified NextToken is invalid.

400

InvalidDBInstanceType.ValueNotSupport

The specified parameter DBInstanceType is not valid.

\-

400

InvalidParameter.OwnerAccount

The specified parameter OwnerAccount is not valid.

The operation failed. The value of the OwnerAccount parameter is invalid. Check the value of this parameter.

400

TimeoutRetryLater

Timeout, Please retry later.

\-

400

InvalidExpired.Format

The instance expiration status parameter is incorrect.

The parameter that specifies the instance expiration status is invalid.

400

Abs.InvalidAccount.NotFound

account is not found.

The account does not exist.

400

Abs.ImageNotFound

The specified Image is disabled or is deleted.

The specified image has expired or has been deleted.

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

2025-05-07

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstances?updateTime=2025-05-07#workbench-doc-change-demo)

2024-08-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstances?updateTime=2024-08-15#workbench-doc-change-demo)

2024-04-02

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstances?updateTime=2024-04-02#workbench-doc-change-demo)

2024-04-01

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstances?updateTime=2024-04-01#workbench-doc-change-demo)

2024-01-04

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstances?updateTime=2024-01-04#workbench-doc-change-demo)

2023-05-26

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstances?updateTime=2023-05-26#workbench-doc-change-demo)

2023-05-15

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstances?updateTime=2023-05-15#workbench-doc-change-demo)

2023-05-11

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstances?updateTime=2023-05-11#workbench-doc-change-demo)

2022-09-01

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstances?updateTime=2022-09-01#workbench-doc-change-demo)

2022-06-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstances?updateTime=2022-06-24#workbench-doc-change-demo)

2021-10-11

The Error code has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstances?updateTime=2021-10-11#workbench-doc-change-demo)
