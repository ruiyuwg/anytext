Queries the details about a data migration, data synchronization, or change tracking task.

The frequency of calling this operation is limited. Requests that exceed the limit are dropped.

-   You can call this operation up to 160 times per second in each region.
-   You can call this operation up to 40 times per second per account in each region.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Dts&api=DescribeDtsJobDetail&type=RPC&version=2020-01-01)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

DescribeDtsJobDetail

The operation that you want to perform. Set the value to **DescribeDtsJobDetail**.

DtsJobId

String

Yes

ta7w132u12h\*\*\*\*

The ID of the data migration, data synchronization, or change tracking task.

DtsInstanceID

String

No

dtsta7w132u12h\*\*\*\*

The ID of the data migration, data synchronization, or change tracking instance.

SynchronizationDirection

String

No

Forward

The synchronization direction. Valid values:

-   **Forward**
-   **Reverse**

**Note**

-   The default value is **Forward**.
-   The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.

RegionId

String

No

cn-hangzhou

The ID of the region in which the Data Transmission Service (DTS) instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

SyncSubJobHistory

Boolean

No

false

Specifies whether to return the information about all data synchronization subtasks. Default value: **false**. A value of false indicates that the system returns only the information about a data synchronization subtask that is running or was most recently run.

ZeroEtlJob

Boolean

No

false

Specifies whether to query only zero-extract, transform, load (ETL) integration tasks. Valid values:

-   **true**
-   **false**

ResourceGroupId

String

No

rg-acfmzawhxxc\*\*\*\*

The resource group ID.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

Status

String

Migrating

The state of the data migration or synchronization task. Valid values:

-   **NotStarted**: The task is not started.
-   **NotConfigured**: The task is not configured.
-   **Prechecking**: The task is in precheck.
-   **PrecheckFailed**: The task failed to pass the precheck.
-   **PreCheckPass**: The task passed the precheck.
-   **Initializing**: Initial data synchronization is in progress.
-   **InitializeFailed**: Initial data synchronization failed.
-   **synchronizing**: Data synchronization is in progress.
-   **Migrating**: Data migration is in progress.
-   **Failed**: Data synchronization failed.
-   **MigrationFailed**: Data migration failed.
-   **Suspending**: The task is paused.
-   **Modifying**: The objects of the task are being modified.
-   **Retrying**: The task is being retried.
-   **Upgrade**: The task is being upgraded.
-   **Downgrade**: The task is being downgraded.
-   **Locked**: The task is locked.
-   **Finished**: The task is complete.

DtsJobName

String

api\_test

The name of the data migration, data synchronization, or change tracking task.

FinishTime

String

2023-06-16T10:34:17Z

The time when the task was complete. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \[com.mysql.jdbc.exceptions.jdbc4.MySQLNonTransientConnectionException:Could not create connection to database server. Attempted reconnect 3 times. Giving up.\]\[com.mysql.jdbc.exceptions.jdbc4.CommunicationsException:Communications link failure\\n\\nThe last packet sent successfully to the server was 0 milliseconds ago. The driver has not received any packets from the server.\]\[java.net.ConnectException:Connection timed out (Connection timed out)\] About more information in \[https://yq.aliyun.com/articles/499178\].

The error message returned if the task failed.

DtsJobId

String

i03e3zty16i\*\*\*\*

The ID of the data migration, data synchronization, or change tracking task.

CreateTime

String

2022-03-16T08:01:19Z

The time when the task was created. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

PayType

String

PrePaid

The billing method of the DTS instance. Valid values:

-   **PrePaid**: subscription.
-   **PostPaid**: pay-as-you-go.

Reserved

String

{\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1\*\*.\*\*:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1\*\*.\*\*:11077\\",\\"useJobTask\\":\\"1\\"}

The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved](/help/en/dts/developer-reference/migrationreserved).

DatabaseCount

Integer

2

The number of ApsaraDB RDS for MySQL instances that are attached to the source PolarDB-X 1.0 instance.

DtsJobClass

String

xlarge

The instance class.

**Note** For more information about the description and test performance of each instance class, see [Specifications of data migration instances](/help/en/dts/product-overview/specifications-of-data-migration-instances) and [Specifications of data synchronization instances](/help/en/dts/product-overview/specifications-of-data-synchronization-channels).

EndTimestamp

String

2022-03-26T14:03:21Z

The end of the time range for change tracking. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

AppName

String

new

Indicates whether the new change tracking feature is used.

**Note** This parameter is returned only for change tracking instances of the new version.

DestNetType

String

VPC

The network type of the consumer client. Valid values:

-   **CLASSIC**: classic network.
-   **VPC**: virtual private cloud (VPC).

SubscribeTopic

String

cn\_hangzhou\_rm\_bp1162kryivb8\*\*\*\*\_dtstest\_version2

The topic of the change tracking instance.

**Note** This parameter is returned only if your change tracking instances are of the new version and you have called the [CreateConsumerGroup](/help/en/dts/developer-reference/api-createconsumergroup) operation to create a consumer group.

DtsInstanceID

String

dtsi03e3zty16i\*\*\*\*

The ID of the data migration, data synchronization, or change tracking instance.

RequestId

String

29207299-7C41-493A-BA4F-2FAC5DE4\*\*\*\*

The request ID.

Code

Integer

200

The error code. This parameter will be removed in the future.

Checkpoint

Long

1616405159

The start offset of incremental data migration or data synchronization. This value is a UNIX timestamp. Unit: seconds.

Delay

Long

0

The latency of incremental data migration or synchronization. Unit: milliseconds.

ExpireTime

String

2023-06-16T08:01:19Z

The time when the instance expires. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

**Note** This parameter is returned only if the return value of **PayType** is **PrePaid**.

ErrCode

String

InternalError

The error code returned if the request failed.

Success

Boolean

true

Indicates whether the request was successful.

ErrMessage

String

The Value of Input Parameter %s is not valid.

The error message returned if the request failed.

ConsumptionClient

String

114.\*\*\*.\*\*\*.\*\*:dts\*\*\*\*\*\*\*\*

The downstream client information in the following format: <IP address of the downstream client>:<Random ID generated by DTS>.

DbObject

String

{\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}

The objects of the data migration, data synchronization, or change tracking task. For more information, see [Objects of DTS tasks](/help/en/dts/developer-reference/objects-of-dts-tasks).

DynamicMessage

String

DtsJobId

The dynamic part in the error message. The value of this parameter is used to replace **%s** in the value of **ErrMessage**.

**Note** For example, if the return value of **ErrMessage** is **The Value of Input Parameter %s is not valid** and the value of **DynamicMessage** is **DtsJobId**, the specified value of **DtsJobId** is invalid.

ConsumptionCheckpoint

String

2022-03-23T07:30:31Z

The consumption checkpoint of the change tracking instance. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

EtlCalculator

String

{ "cells ": \[{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442\*\*\*\*\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e\*\*\*\*\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924\*\*\*\*\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }\] }

The operator information of the ETL task.

**Note** This parameter is returned only if you query the details of an ETL task.

HttpStatusCode

Integer

200

The returned HTTP status code.

BeginTimestamp

String

2022-03-15T08:25:34Z

The start of the time range for change tracking. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

GroupId

String

rg-acfmzawhxxc\*\*\*\*

The resource group ID.

SynchronizationDirection

String

Forward

The synchronization direction. Valid values:

-   **Forward**
-   **Reverse**

**Note**

-   The default value is **Forward**.
-   The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.

DtsJobDirection

String

Forward

The synchronization direction. Valid values:

-   **Forward**
-   **Reverse**

**Note** This parameter is returned only if the topology of the data synchronization instance is two-way synchronization.

DemoJob

Boolean

false

Indicates whether the task is a subtask. Valid values:

-   **true**
-   **false**

SourceEndpoint

Object

The connection settings of the source instance.

OracleSID

String

testsid

The system ID (SID) of the Oracle database.

**Note** This parameter is returned only if the return value of **EngineName** of the source instance is **Oracle** and the Oracle database is deployed in a non-Real Application Cluster (RAC) architecture.

SslSolutionEnum

String

DISABLE

Indicates whether SSL encryption is enabled. Valid values:

-   **DISABLE**: SSL encryption is disabled.
-   **ENABLE\_WITH\_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
-   **ENABLE\_ONLY\_4\_MONGODB\_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
-   **ENABLE\_ONLY\_4\_KAFKA\_SCRAM\_SHA\_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.

Ip

String

172.16.88.\*\*\*

The endpoint of the source instance.

InstanceID

String

rm-bp1162kryivb8\*\*\*\*

The source instance ID.

RoleName

String

ram-for-dts

The name of the Resource Access Management (RAM) role configured for the Alibaba Cloud account to which the source instance belongs.

InstanceType

String

RDS

The type of the source instance.

Port

String

3306

The database service port of the source instance.

EngineName

String

MySQL

The database engine of the source instance.

Region

String

cn-hangzhou

The ID of the region in which the source instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

DatabaseName

String

dtstestdata

The name of the database from which the objects are migrated in the source instance.

AliyunUid

String

140692647406\*\*\*\*

The ID of the Alibaba Cloud account to which the source instance belongs.

UserName

String

dtstest

The database account of the source instance.

CanModifyPassword

Boolean

false

Indicates whether the password can be modified. Valid values:

-   **true**
-   **false**

DestinationEndpoint

Object

The connection settings of the destination instance.

SslSolutionEnum

String

DISABLE

Indicates whether SSL encryption is enabled. Valid values:

-   **DISABLE**: SSL encryption is disabled.
-   **ENABLE\_WITH\_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
-   **ENABLE\_ONLY\_4\_MONGODB\_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
-   **ENABLE\_ONLY\_4\_KAFKA\_SCRAM\_SHA\_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.

OracleSID

String

testsid

The SID of the Oracle database.

**Note** This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.

DatabaseName

String

dtstestdata

The name of the database to which the objects are migrated in the destination instance.

Region

String

cn-hangzhou

The ID of the region in which the destination instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

Ip

String

172.16.XX.XX

The endpoint of the destination instance.

InstanceID

String

rm-bp1imrtn6fq7h\*\*\*\*

The destination instance ID.

Port

String

3306

The database service port of the destination instance.

InstanceType

String

RDS

The type of the destination instance.

UserName

String

dtstest

The database account of the destination instance.

EngineName

String

MySQL

The database engine of the destination instance.

CanModifyPassword

Boolean

false

Indicates whether the password can be modified. Valid values:

-   **true**
-   **false**

MigrationMode

Object

The migration types or initial synchronization types.

DataExtractTransformLoad

Boolean

false

Indicates whether data transformation is performed. Valid values:

-   **true**
-   **false**

DataInitialization

Boolean

true

Indicates whether full data migration or initial full data synchronization is performed. Valid values:

-   **true**
-   **false**

DataSynchronization

Boolean

true

Indicates whether incremental data migration or synchronization is performed. Valid values:

-   **true**
-   **false**

StructureInitialization

Boolean

true

Indicates whether schema migration or initial schema synchronization is performed. Valid values:

-   **true**
-   **false**

SubscriptionHost

Object

The endpoint of the change tracking instance.

VpcHost

String

dts-cn-\*\*\*\*-vpc.aliyuncs.com:18003

The VPC endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

PublicHost

String

dts-cn-\*\*\*\*.aliyuncs.com:18001

The public endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

PrivateHost

String

dts-cn-\*\*\*\*-internal.aliyuncs.com:18002

The private endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

SubscriptionDataType

Object

The type of data for change tracking.

Dml

Boolean

true

Indicates whether DML statements are tracked. Valid values:

-   **true**
-   **false**

Ddl

Boolean

true

Indicates whether DDL statements are tracked. Valid values:

-   **true**
-   **false**

SubDistributedJob

Array of SubDistributedJob

The information about the subtasks in the current distributed task. If the DTS task is not a distributed task, the value of this parameter is null.

**Note** This parameter is available only if the DTS task is a data synchronization task.

SubSyncJob

Array of Any

\*\*\*\*

The information about the subtasks in the current data synchronization task.

DtsInstanceID

String

dtsnjuc14kp12u\*\*\*\*

The DTS instance ID.

DtsJobId

String

m06j1g92124\*\*\*\*

The DTS task ID.

DtsJobName

String

dtstest\*\*\*\*

The DTS instance name.

GroupId

String

rg-acfmzawhxxc\*\*\*\*

The resource group ID.

DatabaseCount

Integer

2

The number of ApsaraDB RDS for MySQL instances that are attached to the source PolarDB-X 1.0 instance.

DtsJobClass

String

xlarge

The instance class.

DtsJobDirection

String

Forward

The synchronization direction. Valid values:

-   **Forward**
-   **Reverse**

**Note** This parameter is returned only if the topology of the data synchronization instance is two-way synchronization.

SynchronizationDirection

String

Forward

The synchronization direction. Valid values:

-   **Forward**
-   **Reverse**

**Note**

-   The default value is **Forward**.
-   The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.

PayType

String

PrePaid

The billing method. Valid values:

-   **PrePaid**: subscription.
-   **PostPaid**: pay-as-you-go.

ExpireTime

String

2023-06-16T08:01:19Z

The time when the instance expires. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

**Note** This parameter is returned only if the return value of **PayType** is **PrePaid**.

CreateTime

String

2023-01-12T08:34:11Z

The time when the task was created. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

FinishTime

String

2023-06-16T10:34:17Z

The time when the task was complete. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

SourceEndpoint

Object

The connection settings of the source instance.

InstanceID

String

dtsnjuc14kp12u\*\*\*\*

The source instance ID.

Region

String

cn-hangzhou

The ID of the region in which the source instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

InstanceType

String

RDS

The type of the source instance.

EngineName

String

MySQL

The database engine of the source instance.

Ip

String

192.168.XX.XX

The endpoint of the source instance.

Port

String

3306

The database service port of the source instance.

DatabaseName

String

dtstestdata

The name of the database from which the objects are migrated in the source instance.

OracleSID

String

testsid

The SID of the Oracle database.

**Note** This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.

UserName

String

dtstest

The database account of the source instance.

SslSolutionEnum

String

DISABLE

Indicates whether SSL encryption is enabled. Valid values:

-   **DISABLE**: SSL encryption is disabled.
-   **ENABLE\_WITH\_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
-   **ENABLE\_ONLY\_4\_MONGODB\_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
-   **ENABLE\_ONLY\_4\_KAFKA\_SCRAM\_SHA\_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.

RoleName

String

ram-for-dts

The name of the RAM role configured for the Alibaba Cloud account to which the source instance belongs.

AliyunUid

String

140692647406\*\*\*\*

The ID of the Alibaba Cloud account to which the source instance belongs.

DestinationEndpoint

Object

The connection settings of the destination instance.

InstanceID

String

rm-bp1f9guj5rhzq\*\*\*\*

The destination instance ID.

Region

String

cn-hangzhou

The ID of the region in which the destination instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

InstanceType

String

RDS

The type of the destination instance.

EngineName

String

MySQL

The database engine of the destination instance.

Ip

String

192.168.XX.XX

The endpoint of the destination instance.

Port

String

3306

The database service port of the destination instance.

DatabaseName

String

dtstestdata

The name of the database to which the objects are migrated in the destination instance.

OracleSID

String

testid

The SID of the Oracle database.

**Note** This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.

UserName

String

dtstest

The database account of the destination instance.

SslSolutionEnum

String

DISABLE

Indicates whether SSL encryption is enabled. Valid values:

-   **DISABLE**: SSL encryption is disabled.
-   **ENABLE\_WITH\_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
-   **ENABLE\_ONLY\_4\_MONGODB\_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
-   **ENABLE\_ONLY\_4\_KAFKA\_SCRAM\_SHA\_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.

RoleName

String

ram-for-dts

The name of the RAM role configured for the Alibaba Cloud account to which the destination instance belongs.

AliyunUid

String

140692647406\*\*\*\*

The ID of the Alibaba Cloud account to which the destination instance belongs.

DbObject

String

{\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}

The objects of the data migration, data synchronization, or change tracking task. For more information, see [Objects of DTS tasks](/help/en/dts/developer-reference/objects-of-dts-tasks).

MigrationMode

Object

The migration types or initial synchronization types.

StructureInitialization

Boolean

true

Indicates whether schema migration or initial schema synchronization is performed. Valid values:

-   **true**
-   **false**

DataInitialization

Boolean

true

Indicates whether full data migration or initial full data synchronization is performed. Valid values:

-   **true**
-   **false**

DataSynchronization

Boolean

true

Indicates whether incremental data migration or synchronization is performed. Valid values:

-   **true**
-   **false**

DataExtractTransformLoad

Boolean

false

Indicates whether data transformation is performed. Valid values:

-   **true**
-   **false**

Status

String

Finished

The state of the data migration or synchronization task. Valid values:

-   **NotStarted**: The task is not started.
-   **NotConfigured**: The task is not configured.
-   **Prechecking**: The task is in precheck.
-   **PrecheckFailed**: The task failed to pass the precheck.
-   **PreCheckPass**: The task passed the precheck.
-   **Initializing**: Initial data synchronization is in progress.
-   **InitializeFailed**: Initial data synchronization failed.
-   **synchronizing**: Data synchronization is in progress.
-   **Migrating**: Data migration is in progress.
-   **Failed**: Data synchronization failed.
-   **MigrationFailed**: Data migration failed.
-   **Suspending**: The task is paused.
-   **Modifying**: The objects of the task are being modified.
-   **Retrying**: The task is being retried.
-   **Upgrade**: The task is being upgraded.
-   **Downgrade**: The task is being downgraded.
-   **Locked**: The task is locked.
-   **Finished**: The task is complete.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Delay

Long

0

The latency of incremental data migration or synchronization. Unit: milliseconds.

TagList

Array of TagList

The tags of the task.

Id

Long

2

The primary key of the table.

GmtCreate

String

2022-03-16T08:01:19Z

The time when the task was created.

GmtModified

String

2022-03-16T08:01:19Z

The time when the task was modified.

ResourceId

String

dtsnjuc14kp12u\*\*\*\*

The ID of the data migration, data synchronization, or change tracking instance.

ResourceType

String

ALIYUN::DTS::INSTANCE

The resource type.

RegionId

String

cn-hangzhou

The ID of the region in which the DTS task resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

AliUid

Long

191448876515\*\*\*\*

The Alibaba Cloud account ID.

TagKey

String

key1

The tag key.

TagValue

String

value1

The tag value.

TagCategory

String

System

The type of the tag. Valid values:

-   **System**: The tag was created by the system.
-   **Custom**: The tag was created by a user.

**Note** By default, if the parameter is left empty, custom tags and system tags are returned.

SrcRegion

String

cn-hangzhou

The ID of the region in which the DTS task resides.

**Note** In most cases, the ID of the region in which the destination instance resides is returned.

Scope

String

0

Indicates whether the tag is visible. Valid values:

-   **0**: The tag is public.
-   **1**: The tag is private.

Creator

Long

191448876515\*\*\*\*

The operator of the tag.

Checkpoint

String

1616405159

The start offset of incremental data migration or data synchronization. This value is a UNIX timestamp. Unit: seconds.

PrecheckStatus

Object

The precheck state.

Status

String

Finished

The precheck state. Valid values:

-   **NotStarted**: The task is not started.
-   **Prechecking**: The task is in precheck.
-   **PrecheckFailed**: The task failed to pass the precheck.
-   **Finished**: The task is complete.

Percent

String

100

The precheck progress. Unit: percentage.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Detail

Array of Detail

The result of each precheck item.

CheckItem

String

CHECK\_CONN\_SRC

The name of the precheck item.

CheckItemDescription

String

CHECK\_CONN\_SRC\_DETAIL

The description of the precheck item.

CheckResult

String

Success

The precheck result. Valid values:

-   **Success**
-   **Failed**

FailedReason

String

Original error: Access denied for user 'dtstest'@'100.104.\*\*\*.\*\*' (using password: YES)

The error message returned if the task failed to pass the precheck.

**Note** This parameter is returned only if the return value of **CheckResult** is **Failed**.

RepairMethod

String

CHECK\_ERROR\_DEST\_CONN\_REPAIR2

The method used to fix the precheck failure.

**Note** This parameter is returned only if the return value of **CheckResult** is **Failed**.

StructureInitializationStatus

Object

The state of initial schema synchronization.

Status

String

Finished

The state of initial schema synchronization. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Percent

String

100

The progress of initial schema synchronization. Unit: percentage.

Progress

String

1

The number of tables whose schemas are synchronized to the destination instance.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

DataInitializationStatus

Object

The state of full data migration or initial full data synchronization.

Status

String

Finished

The state of full data migration or initial full data synchronization. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if full data migration or initial full data synchronization failed.

Percent

String

100

The progress of full data migration or initial full data synchronization. Unit: percentage.

Progress

String

16

The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

DataSynchronizationStatus

Object

The state of incremental data migration or synchronization.

Status

String

Catched

The state of incremental data migration or synchronization. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Suspending**: The task is paused.
-   **Checking**: The task is in precheck.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.
-   **Catched**: The task has no latency.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Percent

String

95

The progress of incremental data migration or synchronization.

Progress

String

0.00RPS/(0.000MB/s)

The number of rows and size of data that is synchronized or migrated to the destination table per second during incremental data synchronization or migration.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

DataEtlStatus

Object

The state of the ETL task.

**Note** This parameter collection is returned only if an ETL task is configured.

Status

String

Finished

The state of the ETL task. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.
-   **Catched**: The task has no latency.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Percent

String

100

The progress of full data migration or initial full data synchronization. Unit: percentage.

Progress

String

16

The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

Performance

Object

The performance of the data migration or synchronization instance.

Rps

String

100

The number of times that SQL statements are migrated or synchronized per second, including BEGIN, COMMIT, DML, and DDL statements. DML statements include INSERT, DELETE, and UPDATE.

Flow

String

1

The size of data that is migrated or synchronized per second. Unit: Mbit/s.

ReverseJob

Object

The details of the data synchronization task in the reverse direction.

**Note** This parameter is returned only for two-way data synchronization tasks.

DtsInstanceID

String

dtsnjuc14kp12u\*\*\*\*

The DTS instance ID.

DtsJobId

String

m06j1g92124\*\*\*\*

The DTS task ID.

DtsJobName

String

dtstest\*\*\*\*

The DTS instance name.

GroupId

String

rg-acfmzawhxxc\*\*\*\*

The resource group ID.

DatabaseCount

Integer

2

The number of ApsaraDB RDS for MySQL instances that are attached to the source PolarDB-X 1.0 instance.

DtsJobClass

String

xlarge

The instance class.

DtsJobDirection

String

Forward

The synchronization direction. Valid values:

-   **Forward**
-   **Reverse**

**Note** This parameter is returned only if the topology of the data synchronization instance is two-way synchronization.

SynchronizationDirection

String

Forward

The synchronization direction. Valid values:

-   **Forward**
-   **Reverse**

**Note**

-   The default value is **Forward**.
-   The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.

PayType

String

PrePaid

The billing method. Valid values:

-   **PrePaid**: subscription.
-   **PostPaid**: pay-as-you-go.

ExpireTime

String

2023-06-16T08:01:19Z

The time when the instance expires. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

**Note** This parameter is returned only if the return value of **PayType** is **PrePaid**.

CreateTime

String

2023-01-12T08:34:11Z

The time when the task was created. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

FinishTime

String

2023-06-16T10:34:17Z

The time when the task was complete. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

SourceEndpoint

Object

The connection settings of the source instance.

InstanceID

String

rm-bp2f3huj5rhzq\*\*\*\*

The source instance ID.

Region

String

cn-hangzhou

The ID of the region in which the source instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

InstanceType

String

RDS

The type of the source instance.

EngineName

String

MySQL

The database engine of the source instance.

Ip

String

192.168.XX.XX

The endpoint of the source instance.

Port

String

3306

The database service port of the source instance.

DatabaseName

String

dtstestdata

The name of the database from which the objects are migrated in the source instance.

OracleSID

String

testsid

The SID of the Oracle database.

**Note** This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.

UserName

String

dtstest

The database account of the source instance.

SslSolutionEnum

String

DISABLE

Indicates whether SSL encryption is enabled. Valid values:

-   **DISABLE**: SSL encryption is disabled.
-   **ENABLE\_WITH\_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
-   **ENABLE\_ONLY\_4\_MONGODB\_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
-   **ENABLE\_ONLY\_4\_KAFKA\_SCRAM\_SHA\_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.

RoleName

String

ram-for-dts

The name of the RAM role configured for the Alibaba Cloud account to which the source instance belongs.

AliyunUid

String

140692647406\*\*\*\*

The ID of the Alibaba Cloud account to which the source instance belongs.

DestinationEndpoint

Object

The connection settings of the destination instance.

InstanceID

String

rm-bp1f9guj5rhzq\*\*\*\*

The destination instance ID.

Region

String

cn-hangzhou

The ID of the region in which the destination instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

InstanceType

String

RDS

The type of the destination instance.

EngineName

String

MySQL

The database engine of the destination instance.

Ip

String

192.168.XX.XX

The endpoint of the destination instance.

Port

String

3306

The database service port of the destination instance.

DatabaseName

String

dtstestdata

The name of the database to which the objects are migrated in the destination instance.

OracleSID

String

testsid

The SID of the Oracle database.

**Note** This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.

UserName

String

dtstest

The database account of the destination instance.

SslSolutionEnum

String

DISABLE

Indicates whether SSL encryption is enabled. Valid values:

-   **DISABLE**: SSL encryption is disabled.
-   **ENABLE\_WITH\_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
-   **ENABLE\_ONLY\_4\_MONGODB\_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
-   **ENABLE\_ONLY\_4\_KAFKA\_SCRAM\_SHA\_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.

RoleName

String

ram-for-dts

The name of the RAM role configured for the Alibaba Cloud account to which the destination instance belongs.

AliyunUid

String

140692647406\*\*\*\*

The ID of the Alibaba Cloud account to which the destination instance belongs.

DbObject

String

{\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}

The objects of the data migration, data synchronization, or change tracking task. For more information, see [Objects of DTS tasks](/help/en/dts/developer-reference/objects-of-dts-tasks).

MigrationMode

Object

The migration types or initial synchronization types.

StructureInitialization

Boolean

true

Indicates whether schema migration or initial schema synchronization is performed. Valid values:

-   **true**
-   **false**

DataInitialization

Boolean

true

Indicates whether full data migration or initial full data synchronization is performed. Valid values:

-   **true**
-   **false**

DataSynchronization

Boolean

true

Indicates whether incremental data migration or synchronization is performed. Valid values:

-   **true**
-   **false**

DataExtractTransformLoad

Boolean

false

Indicates whether data transformation is performed. Valid values:

-   **true**
-   **false**

Status

String

Finished

The state of the data migration or synchronization task. Valid values:

-   **NotStarted**: The task is not started.
-   **NotConfigured**: The task is not configured.
-   **Prechecking**: The task is in precheck.
-   **PrecheckFailed**: The task failed to pass the precheck.
-   **PreCheckPass**: The task passed the precheck.
-   **Initializing**: Initial data synchronization is in progress.
-   **InitializeFailed**: Initial data synchronization failed.
-   **synchronizing**: Data synchronization is in progress.
-   **Migrating**: Data migration is in progress.
-   **Failed**: Data synchronization failed.
-   **MigrationFailed**: Data migration failed.
-   **Suspending**: The task is paused.
-   **Modifying**: The objects of the task are being modified.
-   **Retrying**: The task is being retried.
-   **Upgrade**: The task is being upgraded.
-   **Downgrade**: The task is being downgraded.
-   **Locked**: The task is locked.
-   **Finished**: The task is complete.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Delay

Long

0

The latency of incremental data migration or synchronization. Unit: milliseconds.

TagList

Array of TagList

The tags of the task.

Id

Long

2

The primary key of the table.

GmtCreate

String

2022-03-16T08:01:19Z

The time when the task was created.

GmtModified

String

2022-03-16T08:01:19Z

The time when the task was modified.

ResourceId

String

dtsnjuc14kp12u\*\*\*\*

The ID of the data migration, data synchronization, or change tracking instance.

ResourceType

String

ALIYUN::DTS::INSTANCE

The resource type.

RegionId

String

cn-hangzhou

The ID of the region in which the DTS instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

AliUid

Long

191448876515\*\*\*\*

The Alibaba Cloud account ID.

TagKey

String

key1

The tag key.

TagValue

String

value1

The tag value.

TagCategory

String

System

The type of the tag. Valid values:

-   **System**: The tag was created by the system.
-   **Custom**: The tag was created by a user.

**Note** By default, if the parameter is left empty, custom tags and system tags are returned.

SrcRegion

String

cn-hangzhou

The ID of the region in which the DTS task resides.

**Note** In most cases, the ID of the region in which the destination instance resides is returned.

Scope

String

0

Indicates whether the tag is visible. Valid values:

-   **0**: The tag is public.
-   **1**: The tag is private.

Creator

Long

191448876515\*\*\*\*

The operator of the tag.

Checkpoint

String

1616405159

The start offset of incremental data migration or data synchronization. This value is a UNIX timestamp. Unit: seconds.

PrecheckStatus

Object

The precheck state.

Status

String

Finished

The precheck state. Valid values:

-   **NotStarted**: The task is not started.
-   **Prechecking**: The task is in precheck.
-   **PrecheckFailed**: The task failed to pass the precheck.
-   **Finished**: The task is complete.

Percent

String

100

The precheck progress. Unit: percentage.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Detail

Array of Detail

The result of each precheck item.

CheckItem

String

CHECK\_CONN\_SRC

The name of the precheck item.

CheckItemDescription

String

CHECK\_CONN\_SRC\_DETAIL

The description of the precheck item.

CheckResult

String

Success

The precheck result. Valid values:

-   **Success**
-   **Failed**

FailedReason

String

Original error: Access denied for user 'dtstest'@'100.104.\*\*\*.\*\*' (using password: YES)

The error message returned if the task failed to pass the precheck.

**Note** This parameter is returned only if the return value of **CheckResult** is **Failed**.

RepairMethod

String

CHECK\_ERROR\_DEST\_CONN\_REPAIR2

The method used to fix the precheck failure.

**Note** This parameter is returned only if the return value of **CheckResult** is **Failed**.

StructureInitializationStatus

Object

The state of initial schema synchronization.

Status

String

Finished

The state of initial schema synchronization. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Percent

String

100

The progress of initial schema synchronization. Unit: percentage.

Progress

String

1

The number of tables whose schemas are synchronized to the destination instance.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

DataInitializationStatus

Object

The state of full data migration or initial full data synchronization.

Status

String

Finished

The state of full data migration or initial full data synchronization. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if full data migration or initial full data synchronization failed.

Percent

String

100

The progress of full data migration or initial full data synchronization. Unit: percentage.

Progress

String

16

The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

DataSynchronizationStatus

Object

The state of incremental data migration or synchronization.

Status

String

Catched

The state of incremental data migration or synchronization. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Suspending**: The task is paused.
-   **Checking**: The task is in precheck.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.
-   **Catched**: The task has no latency.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Percent

String

95

The progress of incremental data migration or synchronization.

Progress

String

0.00RPS/(0.000MB/s)

The number of rows and size of data that is synchronized or migrated to the destination table per second during incremental data synchronization or migration.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

DataEtlStatus

Object

The state of the ETL task.

**Note** This parameter collection is returned only if an ETL task is configured.

Status

String

Finished

The state of the ETL task. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.
-   **Catched**: The task has no latency.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Percent

String

100

The progress of full data migration or initial full data synchronization. Unit: percentage.

Progress

String

16

The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

Performance

Object

The performance of the data migration or synchronization instance.

Rps

String

100

The number of times that SQL statements are migrated or synchronized per second, including BEGIN, COMMIT, DML, and DDL statements. DML statements include INSERT, DELETE, and UPDATE.

Flow

String

1

The size of data that is migrated or synchronized per second. Unit: Mbit/s.

ReverseJob

Any

\*\*\*\*

The details of the data synchronization task in the reverse direction.

**Note** This parameter is returned only for two-way data synchronization tasks.

Reserved

String

{\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1\*\*.\*\*:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1\*\*.\*\*:11077\\",\\"useJobTask\\":\\"1\\"}

The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved](/help/en/dts/developer-reference/migrationreserved).

SubscriptionHost

Object

The endpoint of the change tracking instance.

PublicHost

String

dts-cn-\*\*\*\*.aliyuncs.com:18001

The public endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

PrivateHost

String

dts-cn-\*\*\*\*-internal.aliyuncs.com:18002

The private endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

VpcHost

String

dts-cn-\*\*\*\*.aliyuncs.com:18001

The VPC endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

SubscribeTopic

String

cn\_hangzhou\_rm\_bp1162kryivb8\*\*\*\*\_dtstest\_version2

The topic of the change tracking instance.

**Note** This parameter is returned only if your change tracking instances are of the new version and you have called the [CreateConsumerGroup](/help/en/dts/developer-reference/api-createconsumergroup) operation to create a consumer group.

ConsumptionCheckpoint

String

2022-03-23T07:30:31Z

The consumption checkpoint of the change tracking instance. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

BeginTimestamp

String

2022-03-15T08:25:34Z

The start of the time range for change tracking. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

EndTimestamp

String

2022-03-26T14:03:21Z

The end of the time range for change tracking. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

ConsumptionClient

String

114.\*\*\*.\*\*\*.\*\*:dts\*\*\*\*\*\*\*\*

The downstream client information in the following format: <IP address of the downstream client>:<Random ID generated by DTS>.

DestNetType

String

VPC

The network type of the consumer client. Valid values:

-   **CLASSIC**: classic network.
-   **VPC**: VPC.

SubscriptionDataType

Object

The type of data for change tracking.

Ddl

Boolean

true

Indicates whether DDL statements are tracked. Valid values:

-   **true**
-   **false**

Dml

Boolean

true

Indicates whether DML statements are tracked. Valid values:

-   **true**
-   **false**

AppName

String

new

Indicates whether the new change tracking feature is used.

**Note** This parameter is returned only for change tracking instances of the new version.

EtlCalculator

String

{ "cells ": \[{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442\*\*\*\*\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e\*\*\*\*\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924\*\*\*\*\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }\] }

The operator information of the ETL task.

**Note** This parameter is returned only if you query the details of an ETL task.

RetryState

Object

The information about the retries performed by DTS due to an exception.

JobId

String

ta7w132u12h\*\*\*\*

The task ID.

MaxRetryTime

Integer

7200

The maximum duration of a retry. Unit: seconds.

RetryTime

Integer

3600

The time that has elapsed from the point in time when the first retry starts. Unit: seconds.

RetryCount

Integer

5

The number of retries.

Retrying

Boolean

true

Indicates whether the task is being retried. Valid values:

-   **true**
-   **false**

Module

String

03

The progress of the instance when DTS performs retries.

RetryTarget

String

srcDB

The object on which the retries are performed. Valid values:

-   **srcDB**: the source database.
-   **destDB**: the destination database.
-   **inner\_module**: an internal module of DTS.

ErrMsg

String

CHECK\_\_ERROR\_SAME\_OBJ

The error message returned.

OriginType

String

DTS

The source of the task. Valid values:

-   **PTS**
-   **DMS**
-   **DTS**

JobType

String

SYNC

The type of the DTS task. Valid values:

-   **online**: data migration task.
-   **SYNC**: data synchronization task.
-   **SUBSCRIBE**: change tracking task.

IsDemoJob

Boolean

false

Indicates whether the task is a subtask. Valid values:

-   **true**
-   **false**

TaskType

String

rds

The task type.

MinDu

double

1

The minimum number of DTS Units (DUs).

**Note** This parameter is supported only for serverless instances.

MaxDu

double

16

The maximum number of DUs.

**Note** This parameter is supported only for serverless instances.

Reserved

String

{\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1\*\*.\*\*:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1\*\*.\*\*:11077\\",\\"useJobTask\\":\\"1\\"}

The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved](/help/en/dts/developer-reference/migrationreserved).

SubscriptionHost

Object

The endpoint of the change tracking instance.

PublicHost

String

dts-cn-\*\*\*\*.aliyuncs.com:18001

The public endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

PrivateHost

String

dts-cn-\*\*\*\*-internal.aliyuncs.com:18002

The private endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

VpcHost

String

dts-cn-\*\*\*\*.aliyuncs.com:18001

The VPC endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

SubscribeTopic

String

cn\_hangzhou\_rm\_bp1162kryivb8\*\*\*\*\_dtstest\_version2

The topic of the change tracking instance.

**Note** This parameter is returned only if your change tracking instances are of the new version and you have called the [CreateConsumerGroup](/help/en/dts/developer-reference/api-createconsumergroup) operation to create a consumer group.

ConsumptionCheckpoint

String

2022-03-23T07:30:31Z

The consumption checkpoint of the change tracking instance. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

BeginTimestamp

String

2022-03-15T08:25:34Z

The start of the time range for change tracking. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

EndTimestamp

String

2022-03-26T14:03:21Z

The end of the time range for change tracking. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

ConsumptionClient

String

114.\*\*\*.\*\*\*.\*\*:dts\*\*\*\*\*\*\*\*

The downstream client information in the following format: <IP address of the downstream client>:<Random ID generated by DTS>.

DestNetType

String

VPC

The network type of the consumer client. Valid values:

-   **CLASSIC**: classic network.
-   **VPC**: VPC.

SubscriptionDataType

Object

The type of data for change tracking.

Ddl

Boolean

true

Indicates whether DDL statements are tracked. Valid values:

-   **true**
-   **false**

Dml

Boolean

true

Indicates whether DML statements are tracked. Valid values:

-   **true**
-   **false**

AppName

String

new

Indicates whether the new change tracking feature is used.

**Note** This parameter is returned only for change tracking instances of the new version.

EtlCalculator

String

{ "cells ": \[{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442\*\*\*\*\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e\*\*\*\*\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924\*\*\*\*\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }\] }

The operator information of the ETL task.

**Note** This parameter is returned only if you query the details of an ETL task.

RetryState

Object

The information about the retries performed by DTS due to an exception.

JobId

String

ta7w132u12h\*\*\*\*

The task ID.

MaxRetryTime

Integer

7200

The maximum duration of a retry. Unit: seconds.

RetryTime

Integer

3600

The time that has elapsed from the point in time when the first retry starts. Unit: seconds.

RetryCount

Integer

5

The number of retries.

Retrying

Boolean

true

Indicates whether the task is being retried. Valid values:

-   **true**
-   **false**

Module

String

03

The progress of the instance when DTS performs retries.

RetryTarget

String

srcDB

The object on which the retries are performed. Valid values:

-   **srcDB**: the source database.
-   **destDB**: the destination database.
-   **inner\_module**: an internal module of DTS.

ErrMsg

String

CHECK\_\_ERROR\_SAME\_OBJ

The error message returned.

OriginType

String

DTS

The source of the task. Valid values:

-   **PTS**
-   **DMS**
-   **DTS**

JobType

String

SYNC

The type of the DTS task. Valid values:

-   **online**: data migration task.
-   **SYNC**: data synchronization task.
-   **SUBSCRIBE**: change tracking task.

IsDemoJob

Boolean

false

Indicates whether the task is a subtask. Valid values:

-   **true**
-   **false**

TaskType

String

rds

The task type.

MinDu

double

1

The minimum number of DUs.

**Note** This parameter is supported only for serverless instances.

MaxDu

double

16

The maximum number of DUs.

**Note** This parameter is supported only for serverless instances.

SubSyncJob

Array of SubSyncJob

The information about the subtasks in the current data synchronization task.

SubSyncJob

Array of Any

\*\*\*\*

The information about the subtasks in the current data synchronization task.

DtsInstanceID

String

dtsnjuc14kp12u\*\*\*\*

The DTS instance ID.

DtsJobId

String

m06j1g92124\*\*\*\*

The DTS task ID.

DtsJobName

String

dtstest\*\*\*\*

The DTS instance name.

GroupId

String

rg-acfmzawhxxc\*\*\*\*

The resource group ID.

DatabaseCount

Integer

2

The number of ApsaraDB RDS for MySQL instances that are attached to the source PolarDB-X 1.0 instance.

DtsJobClass

String

xlarge

The instance class.

DtsJobDirection

String

Forward

The synchronization direction. Valid values:

-   **Forward**
-   **Reverse**

**Note** This parameter is returned only if the topology of the data synchronization instance is two-way synchronization.

SynchronizationDirection

String

Forward

The synchronization direction. Valid values:

-   **Forward**
-   **Reverse**

**Note**

-   The default value is **Forward**.
-   The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.

PayType

String

PrePaid

The billing method. Valid values:

-   **PrePaid**: subscription.
-   **PostPaid**: pay-as-you-go.

ExpireTime

String

2023-06-16T08:01:19Z

The time when the instance expires. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

**Note** This parameter is returned only if the return value of **PayType** is **PrePaid**.

CreateTime

String

2023-01-12T08:34:11Z

The time when the task was created. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

FinishTime

String

2023-06-16T10:34:17Z

The time when the task was complete. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

SourceEndpoint

Object

The connection settings of the source instance.

InstanceID

String

rm-bp2f3huj5rhzq\*\*\*\*

The source instance ID.

Region

String

cn-hangzhou

The ID of the region in which the source instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

InstanceType

String

RDS

The type of the source instance.

EngineName

String

MySQL

The database engine of the source instance.

Ip

String

192.168.XX.XX

The endpoint of the source instance.

Port

String

3306

The database service port of the source instance.

DatabaseName

String

dtstestdata

The name of the database from which the objects are migrated in the source instance.

OracleSID

String

testsid

The SID of the Oracle database.

**Note** This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.

UserName

String

dtstest

The database account of the source instance.

SslSolutionEnum

String

DISABLE

Indicates whether SSL encryption is enabled. Valid values:

-   **DISABLE**: SSL encryption is disabled.
-   **ENABLE\_WITH\_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
-   **ENABLE\_ONLY\_4\_MONGODB\_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
-   **ENABLE\_ONLY\_4\_KAFKA\_SCRAM\_SHA\_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.

RoleName

String

ram-for-dts

The name of the RAM role configured for the Alibaba Cloud account to which the source instance belongs.

AliyunUid

String

140692647406\*\*\*\*

The ID of the Alibaba Cloud account to which the source instance belongs.

DestinationEndpoint

Object

The connection settings of the destination instance.

InstanceID

String

rm-bp1f9guj5rhzq\*\*\*\*

The destination instance ID.

Region

String

cn-hangzhou

The ID of the region in which the destination instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

InstanceType

String

RDS

The type of the destination instance.

EngineName

String

MySQL

The database engine of the destination instance.

Ip

String

192.168.XX.XX

The endpoint of the destination instance.

Port

String

3306

The database service port of the destination instance.

DatabaseName

String

dtstestdata

The name of the database to which the objects are migrated in the destination instance.

OracleSID

String

testsid

The SID of the Oracle database.

**Note** This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.

UserName

String

dtstest

The database account of the destination instance.

SslSolutionEnum

String

DISABLE

Indicates whether SSL encryption is enabled. Valid values:

-   **DISABLE**: SSL encryption is disabled.
-   **ENABLE\_WITH\_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
-   **ENABLE\_ONLY\_4\_MONGODB\_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
-   **ENABLE\_ONLY\_4\_KAFKA\_SCRAM\_SHA\_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.

RoleName

String

ram-for-dts

The name of the RAM role configured for the Alibaba Cloud account to which the destination instance belongs.

AliyunUid

String

140692647406\*\*\*\*

The ID of the Alibaba Cloud account to which the destination instance belongs.

DbObject

String

{\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}

The objects of the data migration, data synchronization, or change tracking task. For more information, see [Objects of DTS tasks](/help/en/dts/developer-reference/objects-of-dts-tasks).

MigrationMode

Object

The migration types or initial synchronization types.

StructureInitialization

Boolean

true

Indicates whether schema migration or initial schema synchronization is performed. Valid values:

-   **true**
-   **false**

DataInitialization

Boolean

true

Indicates whether full data migration or initial full data synchronization is performed. Valid values:

-   **true**
-   **false**

DataSynchronization

Boolean

true

Indicates whether incremental data migration or synchronization is performed. Valid values:

-   **true**
-   **false**

DataExtractTransformLoad

Boolean

false

Indicates whether data transformation is performed. Valid values:

-   **true**
-   **false**

Status

String

Finished

The state of the data migration or synchronization task. Valid values:

-   **NotStarted**: The task is not started.
-   **NotConfigured**: The task is not configured.
-   **Prechecking**: The task is in precheck.
-   **PrecheckFailed**: The task failed to pass the precheck.
-   **PreCheckPass**: The task passed the precheck.
-   **Initializing**: Initial data synchronization is in progress.
-   **InitializeFailed**: Initial data synchronization failed.
-   **synchronizing**: Data synchronization is in progress.
-   **Migrating**: Data migration is in progress.
-   **Failed**: Data synchronization failed.
-   **MigrationFailed**: Data migration failed.
-   **Suspending**: The task is paused.
-   **Modifying**: The objects of the task are being modified.
-   **Retrying**: The task is being retried.
-   **Upgrade**: The task is being upgraded.
-   **Downgrade**: The task is being downgraded.
-   **Locked**: The task is locked.
-   **Finished**: The task is complete.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Delay

Long

0

The latency of incremental data migration or synchronization. Unit: milliseconds.

TagList

Array of TagList

The tags of the task.

Id

Long

2

The primary key of the table.

GmtCreate

String

2022-03-16T08:01:19Z

The time when the task was created.

GmtModified

String

2022-03-16T08:01:19Z

The time when the task was modified.

ResourceId

String

dtsnjuc14kp12u\*\*\*\*

The ID of the data migration, data synchronization, or change tracking instance.

ResourceType

String

ALIYUN::DTS::INSTANCE

The resource type.

RegionId

String

cn-hangzhou

The ID of the region in which the DTS instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

AliUid

Long

191448876515\*\*\*\*

The Alibaba Cloud account ID.

TagKey

String

key1

The tag key.

TagValue

String

value1

The tag value.

TagCategory

String

System

The type of the tag. Valid values:

-   **System**: The tag was created by the system.
-   **Custom**: The tag was created by a user.

**Note** By default, if the parameter is left empty, custom tags and system tags are returned.

SrcRegion

String

cn-hangzhou

The ID of the region in which the DTS task resides.

**Note** In most cases, the ID of the region in which the destination instance resides is returned.

Scope

String

0

Indicates whether the tag is visible. Valid values:

-   **0**: The tag is public.
-   **1**: The tag is private.

Creator

Long

191448876515\*\*\*\*

The operator of the tag.

Checkpoint

String

1616405159

The start offset of incremental data migration or data synchronization. This value is a UNIX timestamp. Unit: seconds.

PrecheckStatus

Object

The precheck state.

Status

String

Finished

The precheck state. Valid values:

-   **NotStarted**: The task is not started.
-   **Prechecking**: The task is in precheck.
-   **PrecheckFailed**: The task failed to pass the precheck.
-   **Finished**: The task is complete.

Percent

String

100

The precheck progress. Unit: percentage.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Detail

Array of Detail

The result of each precheck item.

CheckItem

String

CHECK\_CONN\_SRC

The name of the precheck item.

CheckItemDescription

String

CHECK\_CONN\_SRC\_DETAIL

The description of the precheck item.

CheckResult

String

Success

The precheck result. Valid values:

-   **Success**
-   **Failed**

FailedReason

String

Original error: Access denied for user 'dtstest'@'100.104.\*\*\*.\*\*' (using password: YES)

The error message returned if the task failed to pass the precheck.

**Note** This parameter is returned only if the return value of **CheckResult** is **Failed**.

RepairMethod

String

CHECK\_ERROR\_DEST\_CONN\_REPAIR2

The method used to fix the precheck failure.

**Note** This parameter is returned only if the return value of **CheckResult** is **Failed**.

StructureInitializationStatus

Object

The state of initial schema synchronization.

Status

String

Finished

The state of initial schema synchronization. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Percent

String

100

The progress of initial schema synchronization. Unit: percentage.

Progress

String

1

The number of tables whose schemas are synchronized to the destination instance.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

DataInitializationStatus

Object

The state of full data migration or initial full data synchronization.

Status

String

Finished

The state of full data migration or initial full data synchronization. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if full data migration or initial full data synchronization failed.

Percent

String

100

The progress of full data migration or initial full data synchronization. Unit: percentage.

Progress

String

16

The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

DataSynchronizationStatus

Object

The state of incremental data migration or synchronization.

Status

String

Catched

The state of incremental data migration or synchronization. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Suspending**: The task is paused.
-   **Checking**: The task is in precheck.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.
-   **Catched**: The task has no latency.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Percent

String

95

The progress of incremental data migration or synchronization.

Progress

String

0.00RPS/(0.000MB/s)

The number of rows and size of data that is synchronized or migrated to the destination table per second during incremental data synchronization or migration.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

DataEtlStatus

Object

The state of the ETL task.

**Note** This parameter collection is returned only if an ETL task is configured.

Status

String

Finished

The state of the ETL task. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.
-   **Catched**: The task has no latency.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Percent

String

100

The progress of full data migration or initial full data synchronization. Unit: percentage.

Progress

String

16

The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

Performance

Object

The performance of the data migration or synchronization instance.

Rps

String

100

The number of times that SQL statements are migrated or synchronized per second, including BEGIN, COMMIT, DML, and DDL statements. DML statements include INSERT, DELETE, and UPDATE.

Flow

String

1

The size of data that is migrated or synchronized per second. Unit: Mbit/s.

ReverseJob

Object

The details of the data synchronization task in the reverse direction.

**Note** This parameter is returned only for two-way data synchronization tasks.

DtsInstanceID

String

dtsnjuc14kp12u\*\*\*\*

The DTS instance ID.

DtsJobId

String

m06j1g92124\*\*\*\*

The DTS task ID.

DtsJobName

String

dtstest\*\*\*\*

The DTS instance name.

GroupId

String

rg-acfmzawhxxc\*\*\*\*

The resource group ID.

DatabaseCount

Integer

2

The number of ApsaraDB RDS for MySQL instances that are attached to the source PolarDB-X 1.0 instance.

DtsJobClass

String

xlarge

The instance class.

DtsJobDirection

String

Forward

The synchronization direction. Valid values:

-   **Forward**
-   **Reverse**

**Note** This parameter is returned only if the topology of the data synchronization instance is two-way synchronization.

SynchronizationDirection

String

Forward

The synchronization direction. Valid values:

-   **Forward**
-   **Reverse**

**Note**

-   The default value is **Forward**.
-   The value **Reverse** takes effect only if the topology of the data synchronization instance is two-way synchronization.

PayType

String

PrePaid

The billing method. Valid values:

-   **PrePaid**: subscription.
-   **PostPaid**: pay-as-you-go.

ExpireTime

String

2023-06-16T08:01:19Z

The time when the instance expires. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

**Note** This parameter is returned only if the return value of **PayType** is **PrePaid**.

CreateTime

String

2023-01-12T08:34:11Z

The time when the task was created. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

FinishTime

String

2023-06-16T10:34:17Z

The time when the task was complete. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

SourceEndpoint

Object

The connection settings of the source instance.

InstanceID

String

rm-bp2f3huj5rhzq\*\*\*\*

The DTS instance ID.

Region

String

cn-hangzhou

The ID of the region in which the source instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

InstanceType

String

RDS

The type of the source instance.

EngineName

String

MySQL

The database engine of the source instance.

Ip

String

192.168.XX.XX

The endpoint of the source instance.

Port

String

3306

The database service port of the source instance.

DatabaseName

String

dtstestdata

The name of the database from which the objects are migrated in the source instance.

OracleSID

String

testsid

The SID of the Oracle database.

**Note** This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.

UserName

String

dtstest

The database account of the source instance.

SslSolutionEnum

String

DISABLE

Indicates whether SSL encryption is enabled. Valid values:

-   **DISABLE**: SSL encryption is disabled.
-   **ENABLE\_WITH\_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
-   **ENABLE\_ONLY\_4\_MONGODB\_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
-   **ENABLE\_ONLY\_4\_KAFKA\_SCRAM\_SHA\_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.

RoleName

String

ram-for-dts

The name of the RAM role configured for the Alibaba Cloud account to which the source instance belongs.

AliyunUid

String

140692647406\*\*\*\*

The ID of the Alibaba Cloud account to which the source instance belongs.

DestinationEndpoint

Object

The connection settings of the destination instance.

InstanceID

String

rm-bp1f9guj5rhzq\*\*\*\*

The destination instance ID.

Region

String

cn-hangzhou

The ID of the region in which the destination instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

InstanceType

String

RDS

The type of the destination instance.

EngineName

String

MySQL

The database engine of the destination instance.

Ip

String

192.168.XX,XX

The endpoint of the destination instance.

Port

String

3306

The database service port of the destination instance.

DatabaseName

String

dtstestdata

The name of the database to which the objects are migrated in the destination instance.

OracleSID

String

testsid

The SID of the Oracle database.

**Note** This parameter is returned only if the return value of **EngineName** of the destination instance is **Oracle** and the Oracle database is deployed in a non-RAC architecture.

UserName

String

dtstest

The database account of the destination instance.

SslSolutionEnum

String

DISABLE

Indicates whether SSL encryption is enabled. Valid values:

-   **DISABLE**: SSL encryption is disabled.
-   **ENABLE\_WITH\_CERTIFICATE**: SSL encryption is enabled and the CA certificate is uploaded.
-   **ENABLE\_ONLY\_4\_MONGODB\_ALTAS**: SSL encryption is enabled for the connection to an AWS MongoDB Altas database.
-   **ENABLE\_ONLY\_4\_KAFKA\_SCRAM\_SHA\_256**: SCRAM-SHA-256 is used to encrypt the connection to a Kafka cluster.

RoleName

String

ram-for-dts

The name of the RAM role configured for the Alibaba Cloud account to which the destination instance belongs.

AliyunUid

String

140692647406\*\*\*\*

The ID of the Alibaba Cloud account to which the destination instance belongs.

DbObject

String

{\\"dtstestdata\\":{\\"all\\":true,\\"name\\":\\"dtstestdata\\",\\"state\\":\\"normal\\"}}

The objects of the data migration, data synchronization, or change tracking task. For more information, see [Objects of DTS tasks](/help/en/dts/developer-reference/objects-of-dts-tasks).

MigrationMode

Object

The migration types or initial synchronization types.

StructureInitialization

Boolean

true

Indicates whether schema migration or initial schema synchronization is performed. Valid values:

-   **true**
-   **false**

DataInitialization

Boolean

true

Indicates whether full data migration or initial full data synchronization is performed. Valid values:

-   **true**
-   **false**

DataSynchronization

Boolean

true

Indicates whether incremental data migration or synchronization is performed. Valid values:

-   **true**
-   **false**

DataExtractTransformLoad

Boolean

false

Indicates whether data transformation is performed. Valid values:

-   **true**
-   **false**

Status

String

Finished

The state of the data migration or synchronization task. Valid values:

-   **NotStarted**: The task is not started.
-   **NotConfigured**: The task is not configured.
-   **Prechecking**: The task is in precheck.
-   **PrecheckFailed**: The task failed to pass the precheck.
-   **PreCheckPass**: The task passed the precheck.
-   **Initializing**: Initial data synchronization is in progress.
-   **InitializeFailed**: Initial data synchronization failed.
-   **synchronizing**: Data synchronization is in progress.
-   **Migrating**: Data migration is in progress.
-   **Failed**: Data synchronization failed.
-   **MigrationFailed**: Data migration failed.
-   **Suspending**: The task is paused.
-   **Modifying**: The objects of the task are being modified.
-   **Retrying**: The task is being retried.
-   **Upgrade**: The task is being upgraded.
-   **Downgrade**: The task is being downgraded.
-   **Locked**: The task is locked.
-   **Finished**: The task is complete.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Delay

Long

0

The latency of incremental data migration or synchronization. Unit: milliseconds.

TagList

Array of TagList

The tags of the task.

Id

Long

2

The primary key of the table.

GmtCreate

String

2022-03-16T08:01:19Z

The time when the task was created.

GmtModified

String

2022-03-16T08:01:19Z

The time when the task was modified.

ResourceId

String

dtsnjuc14kp12u\*\*\*\*

The ID of the data migration, data synchronization, or change tracking instance.

ResourceType

String

ALIYUN::DTS::INSTANCE

The resource type.

RegionId

String

cn-hangzhou

The ID of the region in which the DTS instance resides. For more information, see [Supported regions](/help/en/dts/developer-reference/supported-regions).

AliUid

Long

191448876515\*\*\*\*

The Alibaba Cloud account ID.

TagKey

String

key1

The tag key.

TagValue

String

value1

The tag value.

TagCategory

String

System

The type of the tag. Valid values:

-   **System**: The tag was created by the system.
-   **Custom**: The tag was created by a user.

**Note** By default, if the parameter is left empty, custom tags and system tags are returned.

SrcRegion

String

cn-hangzhou

The ID of the region in which the DTS task resides.

**Note** In most cases, the ID of the region in which the destination instance resides is returned.

Scope

String

0

Indicates whether the tag is visible. Valid values:

-   **0**: The tag is public.
-   **1**: The tag is private.

Creator

Long

191448876515\*\*\*\*

The operator of the tag.

Checkpoint

String

1616405159

The start offset of incremental data migration or data synchronization. This value is a UNIX timestamp. Unit: seconds.

PrecheckStatus

Object

The precheck state.

Status

String

Finished

The precheck state. Valid values:

-   **NotStarted**: The task is not started.
-   **Prechecking**: The task is in precheck.
-   **PrecheckFailed**: The task failed to pass the precheck.
-   **Finished**: The task is complete.

Percent

String

100

The precheck progress. Unit: percentage.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Detail

Array of Detail

The result of each precheck item.

CheckItem

String

CHECK\_CONN\_SRC

The name of the precheck item.

CheckItemDescription

String

CHECK\_CONN\_SRC\_DETAIL

The description of the precheck item.

CheckResult

String

Success

The precheck result. Valid values:

-   **Success**
-   **Failed**

FailedReason

String

Original error: Access denied for user 'dtstest'@'100.104.\*\*\*.\*\*' (using password: YES)

The error message returned if the task failed to pass the precheck.

**Note** This parameter is returned only if the return value of **CheckResult** is **Failed**.

RepairMethod

String

CHECK\_ERROR\_DEST\_CONN\_REPAIR2

The method used to fix the precheck failure.

**Note** This parameter is returned only if the return value of **CheckResult** is **Failed**.

StructureInitializationStatus

Object

The state of initial schema synchronization.

Status

String

Finished

The state of initial schema synchronization. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Percent

String

100

The progress of initial schema synchronization. Unit: percentage.

Progress

String

1

The number of tables whose schemas are synchronized to the destination instance.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

DataInitializationStatus

Object

The state of full data migration or initial full data synchronization.

Status

String

Finished

The state of full data migration or initial full data synchronization. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if full data migration or initial full data synchronization failed.

Percent

String

100

The progress of full data migration or initial full data synchronization. Unit: percentage.

Progress

String

16

The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

DataSynchronizationStatus

Object

The state of incremental data migration or synchronization.

Status

String

Finished

The state of incremental data migration or synchronization. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Suspending**: The task is paused.
-   **Checking**: The task is in precheck.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.
-   **Catched**: The task has no latency.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Percent

String

95

The progress of incremental data migration or synchronization.

Progress

String

0.00RPS/(0.000MB/s)

The number of rows and size of data that is synchronized or migrated to the destination table per second during incremental data synchronization or migration.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

DataEtlStatus

Object

The state of the ETL task.

**Note** This parameter collection is returned only if an ETL task is configured.

Status

String

Finished

The state of the ETL task. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.
-   **Catched**: The task has no latency.

ErrorMessage

String

DTS-070211: Connect Source DB failed. cause by \*\*\*\*

The error message returned if the task failed.

Percent

String

100

The progress of full data migration or initial full data synchronization. Unit: percentage.

Progress

String

16

The number of entries that are migrated or synchronized during full data migration or initial full data synchronization.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

Performance

Object

The performance of the data migration or synchronization instance.

Rps

String

100

The number of times that SQL statements are migrated or synchronized per second, including BEGIN, COMMIT, DML, and DDL statements. DML statements include INSERT, DELETE, and UPDATE.

Flow

String

1

The size of data that is migrated or synchronized per second. Unit: Mbit/s.

ReverseJob

Any

\*\*\*\*

The details of the data synchronization task in the reverse direction.

**Note** This parameter is returned only for two-way data synchronization tasks.

Reserved

String

{\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1\*\*.\*\*:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1\*\*.\*\*:11077\\",\\"useJobTask\\":\\"1\\"}

The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved](/help/en/dts/developer-reference/migrationreserved).

SubscriptionHost

Object

The endpoint of the change tracking instance.

PublicHost

String

dts-cn-\*\*\*\*.aliyuncs.com:18001

The public endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

PrivateHost

String

dts-cn-\*\*\*\*-internal.aliyuncs.com:18002

The private endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

VpcHost

String

dts-cn-\*\*\*\*.aliyuncs.com:18001

The VPC endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

SubscribeTopic

String

cn\_hangzhou\_rm\_bp1162kryivb8\*\*\*\*\_dtstest\_version2

The topic of the change tracking instance.

**Note** This parameter is returned only if your change tracking instances are of the new version and you have called the [CreateConsumerGroup](/help/en/dts/developer-reference/api-createconsumergroup) operation to create a consumer group.

ConsumptionCheckpoint

String

2022-03-23T07:30:31Z

The consumption checkpoint of the change tracking instance. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

BeginTimestamp

String

2022-03-15T08:25:34Z

The start of the time range for change tracking. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

EndTimestamp

String

2022-03-26T14:03:21Z

The end of the time range for change tracking. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

ConsumptionClient

String

114.\*\*\*.\*\*\*.\*\*:dts\*\*\*\*\*\*\*\*

The downstream client information in the following format: <IP address of the downstream client>:<Random ID generated by DTS>.

DestNetType

String

VPC

The network type of the consumer client. Valid values:

-   **CLASSIC**: classic network.
-   **VPC**: VPC.

SubscriptionDataType

Object

The type of data for change tracking.

Ddl

Boolean

true

Indicates whether DDL statements are tracked. Valid values:

-   **true**
-   **false**

Dml

Boolean

true

Indicates whether DML statements are tracked. Valid values:

-   **true**
-   **false**

AppName

String

new

Indicates whether the new change tracking feature is used.

**Note** This parameter is returned only for change tracking instances of the new version.

EtlCalculator

String

{ "cells ": \[{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442\*\*\*\*\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e\*\*\*\*\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924\*\*\*\*\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }\] }

The operator information of the ETL task.

**Note** This parameter is returned only if you query the details of an ETL task.

RetryState

Object

The information about the retries performed by DTS due to an exception.

JobId

String

ta7w132u12h\*\*\*\*

The task ID.

MaxRetryTime

Integer

7200

The maximum duration of a retry. Unit: seconds.

RetryTime

Integer

3600

The time that has elapsed from the point in time when the first retry starts. Unit: seconds.

RetryCount

Integer

5

The number of retries.

Retrying

Boolean

true

Indicates whether the task is being retried. Valid values:

-   **true**
-   **false**

Module

String

03

The progress of the instance when DTS performs retries.

RetryTarget

String

srcDB

The object on which the retries are performed. Valid values:

-   **srcDB**: the source database.
-   **destDB**: the destination database.
-   **inner\_module**: an internal module of DTS.

ErrMsg

String

CHECK\_\_ERROR\_SAME\_OBJ

The error message returned.

OriginType

String

DTS

The source of the task. Valid values:

-   **PTS**
-   **DMS**
-   **DTS**

JobType

String

SYNC

The type of the DTS task. Valid values:

-   **online**: data migration task.
-   **SYNC**: data synchronization task.
-   **SUBSCRIBE**: change tracking task.

IsDemoJob

Boolean

false

Indicates whether the task is a subtask. Valid values:

-   **true**
-   **false**

TaskType

String

rds

The task type.

Reserved

String

{\\"srcHostPorts\\":\\"\\",\\"whitelist.dms.online.ddl.enable\\":false,\\"filterDDL\\":false,\\"sqlparser.dms.original.ddl\\":true,\\"srcOracleType\\":\\"sid\\",\\"maxRetryTime\\":43200,\\"destSSL\\":\\"0\\",\\"destOracleType\\":\\"sid\\",\\"srcSSL\\":\\"0\\",\\"dbListCaseChangeMode\\":\\"default\\",\\"SourceEngineVersion\\":\\"8.0.18\\",\\"srcNetType\\":\\"VPC\\",\\"destNetType\\":\\"VPC\\",\\"srcVpcNetMappingInst\\":\\"172.16.1\*\*.\*\*:10803\\",\\"destVpcNetMappingInst\\":\\"172.16.1\*\*.\*\*:11077\\",\\"useJobTask\\":\\"1\\"}

The reserved parameter of DTS. The value is a JSON string. You can specify this parameter to meet specific requirements, such as whether to automatically start a precheck. For more information, see [MigrationReserved](/help/en/dts/developer-reference/migrationreserved).

SubscriptionHost

Object

The endpoint of the change tracking instance.

PublicHost

String

dts-cn-\*\*\*\*.aliyuncs.com:18001

The public endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

PrivateHost

String

dts-cn-\*\*\*\*-internal.aliyuncs.com:18002

The private endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

VpcHost

String

dts-cn-\*\*\*\*.aliyuncs.com:18001

The VPC endpoint of the change tracking instance. The format is `<Address>:<Port number>`.

SubscribeTopic

String

cn\_hangzhou\_rm\_bp1162kryivb8\*\*\*\*\_dtstest\_version2

The topic of the change tracking instance.

**Note** This parameter is returned only if your change tracking instances are of the new version and you have called the [CreateConsumerGroup](/help/en/dts/developer-reference/api-createconsumergroup) operation to create a consumer group.

ConsumptionCheckpoint

String

2022-03-23T07:30:31Z

The consumption checkpoint of the change tracking instance. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

BeginTimestamp

String

2022-03-15T08:25:34Z

The start of the time range for change tracking. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

EndTimestamp

String

2022-03-26T14:03:21Z

The end of the time range for change tracking. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

ConsumptionClient

String

114.\*\*\*.\*\*\*.\*\*:dts\*\*\*\*\*\*\*\*

The downstream client information in the following format: <IP address of the downstream client>:<Random ID generated by DTS>.

DestNetType

String

VPC

The network type of the consumer client. Valid values:

-   **CLASSIC**: classic network.
-   **VPC**: VPC.

SubscriptionDataType

Object

The type of data for change tracking.

Ddl

Boolean

true

Indicates whether DDL statements are tracked. Valid values:

-   **true**
-   **false**

Dml

Boolean

true

Indicates whether DML statements are tracked. Valid values:

-   **true**
-   **false**

AppName

String

new

Indicates whether the new change tracking feature is used.

**Note** This parameter is returned only for change tracking instances of the new version.

EtlCalculator

String

{ "cells ": \[{\\"shape\\":\\"edge\\",\\"attrs\\":{\\"line\\":{\\"stroke\\":\\"#b1b1b1\\",\\"strokeWidth\\":1,\\"targetMarker\\":{\\"name\\":\\"block\\",\\"args\\":{\\"size\\":\\"8\\"}},\\"strokeDasharray\\":\\"\\"}},\\"id\\":\\"cd1ec473-f9b9-4e9b-a742-ac23f442\*\*\*\*\\",\\"source\\":{\\"cell\\":\\"8b261182-bfab-4803-ad8e-6bb08e3e\*\*\*\*\\",\\"port\\":\\"out1\\"},\\"target\\":{\\"cell\\":\\"b36770df-f48c-4d6b-9644-54c5e924\*\*\*\*\\",\\"port\\":\\"in1\\"},\\"zIndex\\":7 }\] }

The operator information of the ETL task.

**Note** This parameter is returned only if you query the details of an ETL task.

RetryState

Object

The information about the retries performed by DTS due to an exception.

JobId

String

ta7w132u12h\*\*\*\*

The task ID.

MaxRetryTime

Integer

7200

The maximum duration of a retry. Unit: seconds.

RetryTime

Integer

3600

The time that has elapsed from the point in time when the first retry starts. Unit: seconds.

RetryCount

Integer

5

The number of retries.

Retrying

Boolean

true

Indicates whether the task is being retried. Valid values:

-   **true**
-   **false**

Module

String

03

The progress of the instance when DTS performs retries.

RetryTarget

String

srcDB

The object on which the retries are performed. Valid values:

-   **srcDB**: the source database.
-   **destDB**: the destination database.
-   **inner\_module**: an internal module of DTS.

ErrMsg

String

CHECK\_\_ERROR\_SAME\_OBJ

The error message returned.

OriginType

String

DTS

The source of the task. Valid values:

-   **PTS**
-   **DMS**
-   **DTS**

JobType

String

SYNC

The type of the DTS task. Valid values:

-   **online**: data migration task.
-   **SYNC**: data synchronization task.
-   **SUBSCRIBE**: change tracking task.

IsDemoJob

Boolean

false

Indicates whether the task is a subtask. Valid values:

-   **true**
-   **false**

TaskType

String

rds

The task type.

MinDu

double

1

The minimum number of DUs.

**Note** This parameter is supported only for serverless instances.

MaxDu

double

16

The maximum number of DUs.

**Note** This parameter is supported only for serverless instances.

JobType

String

sync

The type of the DTS task. Valid values:

-   **sync**: a data synchronization task.
-   **subSync**: a subtask generated when the objects to be synchronized are modified.

**Note** In most cases, this parameter is returned together with **TaskType**.

TaskType

String

Distributed\_xxx

The type of the task.

**Note** In most cases, this parameter is returned together with **JobType**.

DedicatedClusterId

String

dtsxxxxx

The dedicated cluster ID.

DataSynchronizationStatus

Object

The state of incremental data migration or synchronization.

Status

String

Catched

The state of incremental data migration or synchronization. Valid values:

-   **NotStarted**: The task is not started.
-   **Migrating**: The task is in progress.
-   **Suspending**: The task is paused.
-   **Checking**: The task is in precheck.
-   **Failed**: The task failed.
-   **Finished**: The task is complete.
-   **Catched**: The task has no latency.

NeedUpgrade

Boolean

true

Indicates whether the instance class needs to be upgraded. Valid values:

-   **true**
-   **false**

Percent

String

95

The progress of incremental data migration or synchronization. Unit: percentage.

Progress

String

0.00RPS/(0.000MB/s)

The number of rows and size of data that is synchronized or migrated to the destination table per second during incremental data synchronization or migration.

ErrorMessage

String

The task has failed for a long time and cannot be recovered.

The error message returned if incremental data migration or synchronization failed.

BootTime

String

2022-03-30T03:36:11.000

The time when the task was started. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

Binlog

String

\*\*\*\*

The binary logs.

BinlogSite

String

156629109\*\*\*\*

The current offset.

BinlogTime

String

\*\*\*\*

The offset range.

LastUpdateTime

String

156629109\*\*\*\*

The timestamp when the task was last updated.

RetryState

Object

The information about the retries performed by DTS due to an exception.

RetryCount

Integer

5

The number of retries.

MaxRetryTime

Integer

7200

The maximum duration of a retry. Unit: seconds.

ErrMessage

String

Unexpected error

The error message returned if these retries failed.

RetryTarget

String

srcDB

The object on which the retries are performed. Valid values:

-   **srcDB**: the source database.
-   **destDB**: the destination database.
-   **inner\_module**: an internal module of DTS.

RetryTime

Integer

3600

The time that has elapsed from the point in time when the first retry starts. Unit: seconds.

Module

String

03

The progress of the instance when DTS performs retries.

JobId

String

bi6e22ay243\*\*\*\*

The task ID.

Retrying

Boolean

false

Indicates whether the task is being retried. Valid values:

-   **true**
-   **false**

ResourceGroupId

String

rg-acfmzawhxxc\*\*\*\*

The resource group ID.

ResourceGroupDisplayName

String

default resource group

The resource group name.

DtsBisLabel

String

normal

The environment tag of the DTS instance. Valid values:

-   **normal**
-   **online**

DataDeliveryChannelInfo

Object

The information about the data shipping channel.

PublicDproxyUrl

String

dts-\*\*\*\*.aliyuncs.com:18\*\*\*

The public endpoint of the data shipping channel.

VpcDproxyUrl

String

dts-\*\*\*\*.aliyuncs.com:18\*\*\*

The VPC endpoint of the data shipping channel.

Topic

String

cn\_hangzhou\_\*\*\*\*\*\*\_data\_delivery\_version2

The destination topic of the data shipping instance.

Region

String

cn-hangzhou

The region in which the data shipping channel resides.

PartitionNum

Integer

3

The number of partitions of the destination topic.

MinDu

double

1

The minimum number of DUs.

**Note** This parameter is supported only for serverless instances.

MaxDu

double

16

The maximum number of DUs.

**Note** This parameter is supported only for serverless instances.

## Examples

Sample requests

```
http(s)://dts.aliyuncs.com/?Action=DescribeDtsJobDetail
&DtsJobId=ta7w132u12h****
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<DescribeDtsJobDetailResponse>
    <DtsJobName>api_test</DtsJobName>
    <DtsInstanceID>dtsi03e3zty16i****</DtsInstanceID>
    <Success>true</Success>
    <Delay>0</Delay>
    <MigrationMode>
        <DataInitialization>true</DataInitialization>
        <DataSynchronization>true</DataSynchronization>
        <StructureInitialization>true</StructureInitialization>
    </MigrationMode>
    <DtsJobClass>xlarge</DtsJobClass>
    <DtsJobId>i03e3zty16i****</DtsJobId>
    <HttpStatusCode>200</HttpStatusCode>
    <Status>Migrating</Status>
    <RequestId>29207299-7C41-493A-BA4F-2FAC5DE4****</RequestId>
    <DbObject>{"dtstestdata":{"all":true,"name":"dtstestdata","state":"normal"}}</DbObject>
    <CreateTime>2021-03-16T08:01:19Z</CreateTime>
    <PayType>PostPaid</PayType>
    <Checkpoint>1616405159</Checkpoint>
    <DestinationEndpoint>
        <UserName>dtstest</UserName>
        <InstanceID>rm-bp1imrtn6fq7h****</InstanceID>
        <SslSolutionEnum>DISABLE</SslSolutionEnum>
        <Port>3306</Port>
        <DatabaseName>dtstestdata</DatabaseName>
        <Region>cn-hangzhou</Region>
        <InstanceType>RDS</InstanceType>
        <EngineName>MySQL</EngineName>
    </DestinationEndpoint>
    <SourceEndpoint>
        <RoleName/>
        <UserName>dtstest</UserName>
        <InstanceID>rm-bp1162kryivb8****</InstanceID>
        <SslSolutionEnum>DISABLE</SslSolutionEnum>
        <Port>3306</Port>
        <AliyunUid>140692647406****</AliyunUid>
        <Region>cn-hangzhou</Region>
        <InstanceType>RDS</InstanceType>
        <EngineName>MySQL</EngineName>
    </SourceEndpoint>
    <Reserved>{"srcHostPorts":"","whitelist.dms.online.ddl.enable":false,"filterDDL":false,"sqlparser.dms.original.ddl":true,"srcOracleType":"sid","maxRetryTime":43200,"destSSL":"0","destOracleType":"sid","srcSSL":"0","dbListCaseChangeMode":"default","SourceEngineVersion":"8.0.18","srcNetType":"VPC","destNetType":"VPC","srcVpcNetMappingInst":"172.16.1**.**:1****","destVpcNetMappingInst":"172.16.1**.**:1****","useJobTask":"1"}</Reserved>
</DescribeDtsJobDetailResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "DtsJobName" : "api_test",
  "DtsInstanceID" : "dtsi03e3zty16i****",
  "Success" : true,
  "Delay" : 0,
  "MigrationMode" : {
    "DataInitialization" : true,
    "DataSynchronization" : true,
    "StructureInitialization" : true
  },
  "DtsJobClass" : "xlarge",
  "DtsJobId" : "i03e3zty16i****",
  "HttpStatusCode" : 200,
  "Status" : "Migrating",
  "RequestId" : "29207299-7C41-493A-BA4F-2FAC5DE4****",
  "DbObject" : "{\"dtstestdata\":{\"all\":true,\"name\":\"dtstestdata\",\"state\":\"normal\"}}",
  "CreateTime" : "2021-03-16T08:01:19Z",
  "PayType" : "PostPaid",
  "Checkpoint" : "1616405159",
  "DestinationEndpoint" : {
    "UserName" : "dtstest",
    "InstanceID" : "rm-bp1imrtn6fq7h****",
    "SslSolutionEnum" : "DISABLE",
    "Port" : "3306",
    "DatabaseName" : "dtstestdata",
    "Region" : "cn-hangzhou",
    "InstanceType" : "RDS",
    "EngineName" : "MySQL"
  },
  "SourceEndpoint" : {
    "RoleName" : "",
    "UserName" : "dtstest",
    "InstanceID" : "rm-bp1162kryivb8****",
    "SslSolutionEnum" : "DISABLE",
    "Port" : "3306",
    "AliyunUid" : "140692647406****",
    "Region" : "cn-hangzhou",
    "InstanceType" : "RDS",
    "EngineName" : "MySQL"
  },
  "Reserved" : "{\"srcHostPorts\":\"\",\"whitelist.dms.online.ddl.enable\":false,\"filterDDL\":false,\"sqlparser.dms.original.ddl\":true,\"srcOracleType\":\"sid\",\"maxRetryTime\":43200,\"destSSL\":\"0\",\"destOracleType\":\"sid\",\"srcSSL\":\"0\",\"dbListCaseChangeMode\":\"default\",\"SourceEngineVersion\":\"8.0.18\",\"srcNetType\":\"VPC\",\"destNetType\":\"VPC\",\"srcVpcNetMappingInst\":\"172.16.1**.**:1****\",\"destVpcNetMappingInst\":\"172.16.1**.**:1****\",\"useJobTask\":\"1\"}"
}
```

## Error codes

**HttpCode**

**Error code**

**Error message**

**Description**

400

Throttling.User

Request was denied due to user flow control.

The number of calls per second exceeds the limit. Try again later.

500

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The response of the server timed out or the server was unavailable. Try again. If the error persists, contact technical support.

403

InvalidSecurityToken.Expired

Specified SecurityToken is expired.

The signature expired. Use a new signature.

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/Dts).
