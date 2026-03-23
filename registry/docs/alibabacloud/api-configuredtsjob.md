You can configure a data migration or synchronization task.

-   You can preconfigure the task in the console and then preview the corresponding OpenAPI parameters to help you specify the request parameters. For more information, see [Preview OpenAPI request parameters](/help/en/dts/user-guide/preview-openapi-parameters).
-   Tasks on a dedicated cluster support only the configure-first, purchase-later billing method. Cross-region tasks are not supported.

## Debug

[You can run this operation in OpenAPI Explorer to simplify the process of calculating signatures. After a successful call, OpenAPI Explorer automatically generates sample SDK code.](https://api.aliyun.com/#product=Dts&api=ConfigureDtsJob&type=RPC&version=2020-01-01)

## Request parameters

**Name**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

ConfigureDtsJob

The action to perform. Set the value to **ConfigureDtsJob**.

DtsJobName

String

Yes

rdsmysql\_to\_mysql

The name of the DTS task.

SourceEndpointInstanceType

String

Yes

RDS

The type of the source instance. Valid values:

**Alibaba Cloud database**

-   **RDS**: RDS for MySQL, RDS for SQL Server, RDS for PostgreSQL, or RDS for MariaDB.
-   **PolarDB**: PolarDB for MySQL.
-   **REDIS**: Tair (compatible with Redis).
-   **DISTRIBUTED\_POLARDBX10**: PolarDB-X 1.0.
-   **POLARDBX20**: PolarDB-X 2.0.
-   **MONGODB**: ApsaraDB for MongoDB.
-   **DISTRIBUTED\_DMSLOGICDB**: Data Management (DMS) logical database.

**Self-managed database**

-   **OTHER**: A self-managed database with a public IP address.
-   **ECS**: A self-managed database that is hosted on an ECS instance.
-   **EXPRESS**: A self-managed database that is connected over a leased line.
-   **CEN**: A self-managed database that is connected over CEN.
-   **DG**: A self-managed database that is connected over Database Gateway.

**Note**

-   If the source instance is a PolarDB for PostgreSQL (Compatible with Oracle) cluster, set the source instance type to **OTHER** or **EXPRESS**. The cluster is considered a self-managed database that is connected over the Internet or a leased line.
    
    **Note**
    
    -   [Supported databases](/help/en/dts/product-overview/supported-databases/)For more information about the supported source and destination databases, see .
        
        **Note**
        
        -   [Preparations overview](/help/en/dts/user-guide/preparations/)If the source instance is a self-managed database, you must perform preparations. For more information, see .
        
    

SourceEndpointInstanceID

String

No

rm-bp1imrtn6fq7h\*\*\*\*

The ID of the source instance.

If the source instance is an Alibaba Cloud database instance, such as an RDS for MySQL instance, specify the ID of the Alibaba Cloud database instance.

If the source instance is a self-managed database, the value of this parameter varies based on the value of **SourceEndpointInstanceType**. For example, if **SourceEndpointInstanceType** is set to:

-   **ECS**, specify the ID of the ECS instance.
-   **DG**, specify the ID of the Database Gateway instance.
-   **EXPRESS** or **CEN**, specify the ID of the VPC that is connected to the source database.

**Note** If you set the value to **CEN**[Reserve parameter description](/help/en/dts/developer-reference/reserve-parameter-description), you must also specify the ID of the CEN instance in the Reserve parameter. For more information, see .

SourceEndpointEngineName

String

No

MYSQL

The database type of the source instance.

-   **MYSQL**: MySQL database, including RDS for MySQL and self-managed MySQL.
-   **MARIADB**: RDS for MariaDB.
-   **PolarDB**: PolarDB for MySQL.
-   **POLARDB\_O**: PolarDB for PostgreSQL (Compatible with Oracle).
-   **POLARDBX10**: PolarDB-X 1.0.
-   **POLARDBX20**: cloud-native distributed database PolarDB-X 2.0.
-   **ORACLE**: self-managed Oracle.
-   **POSTGRESQL**: PostgreSQL database, including RDS for PostgreSQL and self-managed PostgreSQL.
-   **MSSQL**: SQL Server database, including RDS for SQL Server and self-managed SQL Server.
-   **MONGODB**: MongoDB database, including self-managed MongoDB and ApsaraDB for MongoDB.
-   **DB2**: self-managed DB2 for LUW.
-   **AS400**: self-managed Db2 for i.
-   **DMSPOLARDB**: Data Management (DMS) logical database.
-   **HBASE**: self-managed HBase database.
-   **TERADATA**: Teradata database.
-   **TiDB**: TiDB database.
-   **REDIS**: Redis database, including self-managed Redis and Tair (compatible with Redis).

**Note**

-   The default value is **MYSQL**.
-   If the database type of the source instance is **MONGODB**[Reserve parameter description](/help/en/dts/developer-reference/reserve-parameter-description), you must also specify information in the Reserve parameter. For more information, see .

SourceEndpointRegion

String

No

cn-hangzhou

The region of the source instance. For more information, see [List of supported regions](/help/en/dts/developer-reference/supported-regions).

**Note** This parameter is required if the source instance is an Alibaba Cloud database instance.

SourceEndpointIP

String

No

172.16.\*\*.\*\*\*

The IP address of the source instance.

**Note** This parameter is required only when **SourceEndpointInstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.

SourceEndpointPort

String

No

3306

The database service port of the source instance.

**Note** This parameter is required only when the source instance is a self-managed database.

SourceEndpointOracleSID

String

No

testsid

The system ID (SID) of the Oracle database.

**Note** This parameter is required only when **SourceEndpointEngineName** is set to **Oracle** and the Oracle database is not a Real Application Clusters (RAC) instance.

SourceEndpointDatabaseName

String

No

dtstestdatabase

The name of the database that contains the objects to migrate in the source instance.

**Note** This parameter is required only when the source instance or the database type of the source instance is PolarDB for PostgreSQL (Compatible with Oracle), PostgreSQL, or MongoDB.

SourceEndpointUserName

String

No

dtstest

The database account of the source database.

**Note**

-   In most cases, you must specify the database account of the source database.
-   [Prepare a database account for data migration](/help/en/dts/user-guide/prepare-the-database-accounts-for-data-migration)[Prepare a database account for data synchronization](/help/en/dts/user-guide/prepare-the-database-accounts-for-data-synchronization)The permissions required for database accounts vary depending on the database that you want to migrate or synchronize. For more information, see and .

SourceEndpointPassword

String

No

Test123456

The password of the database account for the source database.

SourceEndpointOwnerID

String

No

140692647406\*\*\*\*

The ID of the Alibaba Cloud account to which the source instance belongs.

**Note** If you specify this parameter, you are performing a cross-account data migration or synchronization task. You must also specify the **SourceEndpointRole** parameter.

SourceEndpointRole

String

No

ram-for-dts

The name of the RAM role configured for the Alibaba Cloud account to which the source instance belongs.

**Note** [How to configure RAM authorization for data migration or synchronization across Alibaba Cloud accounts](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization)This parameter is required for cross-account data migration or synchronization. For more information about the required permissions and how to grant them to the RAM role, see .

DestinationEndpointInstanceType

String

Yes

EXPRESS

The type of the destination instance. Valid values:

**Alibaba Cloud database**

-   **RDS**: RDS for MySQL, RDS for SQL Server, RDS for PostgreSQL, or RDS for MariaDB.
-   **PolarDB**: PolarDB for MySQL.
-   **DISTRIBUTED\_POLARDBX10**: PolarDB-X 1.0.
-   **POLARDBX20**: PolarDB-X 2.0.
-   **REDIS**: Tair (compatible with Redis).
-   **ADS**: AnalyticDB for MySQL 2.0 and 3.0.
-   **MONGODB**: ApsaraDB for MongoDB.
-   **GREENPLUM**: AnalyticDB for PostgreSQL.
-   **DATAHUB**: DataHub.
-   **ELK**: Elasticsearch.
-   **Tablestore**: Tablestore.
-   **ODPS**: MaxCompute.

**Self-managed database**

-   **OTHER**: A self-managed database with a public IP address.
-   **ECS**: A self-managed database that is hosted on an ECS instance.
-   **EXPRESS**: A self-managed database that is connected over a leased line.
-   **CEN**: A self-managed database that is connected over CEN.
-   **DG**: A self-managed database that is connected over Database Gateway.

**Note**

-   If the destination instance is a PolarDB for PostgreSQL (Compatible with Oracle) cluster, set the destination instance type to **OTHER** or **EXPRESS**. The cluster is considered a self-managed database that is connected over the Internet or a leased line.
-   If the destination instance is a Message Queue for Apache Kafka instance, set the destination instance type to **ECS** or **EXPRESS**. The instance is considered a self-managed database that is connected over an ECS instance or a leased line.
-   [Supported source and target databases](/help/en/dts/product-overview/supported-sources-and-targets)For more information about the supported source and destination databases, see .
-   [Preparations overview](/help/en/dts/user-guide/preparation-overview)If the destination instance is a self-managed database, you must perform preparations. For more information, see .

DestinationEndpointInstanceID

String

No

vpc-bp1opxu1zkhn00gzv\*\*\*\*

The ID of the destination instance.

If the destination instance is an Alibaba Cloud database instance, such as an RDS for MySQL instance, specify the ID of the Alibaba Cloud database instance.

If the destination instance is a self-managed database, the value of this parameter varies based on the value of **DestinationEndpointInstanceType**. For example, if **DestinationEndpointInstanceType** is set to:

-   **ECS**, specify the ID of the ECS instance.
-   **DG**, specify the ID of the Database Gateway instance.
-   **EXPRESS** or **CEN**, specify the ID of the VPC that is connected to the destination database.

**Note** If you set the value to **CEN**[Reserve parameters](/help/en/dts/developer-reference/reserve-parameter-description), you must also specify the ID of the CEN instance in the Reserve parameter. For more information, see .

DestinationEndpointEngineName

String

No

MYSQL

The database type of the destination instance.

-   **MYSQL**: MySQL database, including RDS for MySQL and self-managed MySQL.
-   **MARIADB**: RDS for MariaDB.
-   **PolarDB**: PolarDB for MySQL.
-   **POLARDB\_O**: PolarDB for PostgreSQL (Compatible with Oracle).
-   **POLARDBX10**: PolarDB-X 1.0.
-   **POLARDBX20**: cloud-native distributed database PolarDB-X 2.0.
-   **ORACLE**: self-managed Oracle.
-   **PostgreSQL**: PostgreSQL database, including RDS for PostgreSQL and self-managed PostgreSQL.
-   **MSSQL**: SQL Server database, including RDS for SQL Server and self-managed SQL Server.
-   **ADS**: AnalyticDB for MySQL 2.0.
-   **ADB30**: AnalyticDB for MySQL 3.0.
-   **MONGODB**: MongoDB database, including self-managed MongoDB and ApsaraDB for MongoDB.
-   **GREENPLUM**: AnalyticDB for PostgreSQL.
-   **KAFKA**: Kafka database, including Message Queue for Apache Kafka and self-managed Kafka.
-   **DATAHUB**: DataHub.
-   **DB2**: self-managed DB2 for LUW.
-   **AS400**: Db2 for i.
-   **ODPS**: MaxCompute.
-   **Tablestore**: Tablestore.
-   **ELK**: Elasticsearch.
-   **REDIS**: Redis database, including self-managed Redis and Tair (compatible with Redis).

**Note**

-   The default value is **MYSQL**.
-   If the database type of the destination instance is **KAFKA**, **MONGODB**, or **PolarDB**[Reserve parameter description](/help/en/dts/developer-reference/reserve-parameter-description), you must also specify information in the Reserve parameter. For more information, see .

DestinationEndpointRegion

String

No

cn-hangzhou

The region of the destination instance. For more information, see [List of supported regions](/help/en/dts/developer-reference/supported-regions).

**Note** This parameter is required if the destination instance is an Alibaba Cloud database instance.

DestinationEndpointIP

String

No

172.16.\*\*.\*\*\*

The IP address of the destination instance.

**Note** This parameter is required only when **DestinationEndpointInstanceType** is set to **OTHER**, **EXPRESS**, **DG**, or **CEN**.

DestinationEndpointPort

String

No

3306

The database service port of the destination instance.

**Note** This parameter is required only when the destination instance is a self-managed database.

DestinationEndpointDataBaseName

String

No

dtstestdata

The name of the database to which the objects are migrated in the destination instance.

**Note**

-   This parameter is required only when the destination instance or destination database is a PolarDB for PostgreSQL (Compatible with Oracle) cluster, an AnalyticDB for PostgreSQL instance, a PostgreSQL database, a MaxCompute project, or a MongoDB database.
-   If the destination database is a MaxCompute project, specify the name of the MaxCompute project.

DestinationEndpointUserName

String

No

dtstest

The database account of the destination database.

**Note**

-   In most cases, you must specify the database account of the destination database.
-   [Prepare a database account for data migration](/help/en/dts/user-guide/prepare-the-database-accounts-for-data-migration)[Prepare a database account for data synchronization](/help/en/dts/user-guide/prepare-the-database-accounts-for-data-synchronization)The permissions required for database accounts vary depending on the database that you want to migrate or synchronize. For more information, see and .
-   [Create an AccessKey](/help/en/ram/user-guide/create-an-accesskey-pair)If the destination database is a MaxCompute project, specify the AccessKey ID of your Alibaba Cloud account. For more information about how to obtain an AccessKey ID, see .

DestinationEndpointPassword

String

No

Test123456

The password of the database account for the destination database.

**Note** [Create an AccessKey](/help/en/ram/user-guide/create-an-accesskey-pair)If the destination database is a MaxCompute project, specify the AccessKey secret of your Alibaba Cloud account. For more information about how to obtain an AccessKey secret, see .

DestinationEndpointOwnerID

String

No

140692647406\*\*\*\*

The ID of the Alibaba Cloud account to which the destination RDS for MySQL instance belongs.

**Note**

-   This parameter is available only if the destination instance is an RDS for MySQL instance.
-   If you specify this parameter, you are performing a cross-account data migration or synchronization task. You must also specify the **DestinationEndpointRole** parameter.

DestinationEndpointRole

String

No

ram-for-dts

The name of the RAM role configured for the Alibaba Cloud account to which the destination instance belongs.

**Note** [How to configure RAM authorization for cross-account data migration or synchronization](/help/en/dts/user-guide/configure-ram-authorization-for-cross-account-data-migration-and-synchronization)This parameter is required for cross-account data migration or synchronization. For more information about the required permissions and how to grant them to the RAM role, see .

StructureInitialization

Boolean

Yes

true

Specifies whether to perform schema migration or initialization. Valid values:

-   **true**: Yes. This is the default value.
-   **false**: No.

**Note** If **JobType** is set to **CHECK**, you can set this parameter only to **false**.

DataInitialization

Boolean

Yes

true

Specifies whether to perform initial full data synchronization. Valid values:

-   **true**: Yes. This is the default value.
-   **false**: No.

**Note** If **JobType** is set to **CHECK**, you can set this parameter only to **false**.

DataSynchronization

Boolean

Yes

true

Specifies whether to perform incremental data migration or synchronization. Valid values:

-   **false**: No. This is the default value.
-   **true**: Yes.

**Note** If **JobType** is set to **CHECK**, you can set this parameter only to **false**.

DbList

String

Yes

{"dtstest":{"name":"dtstest","all":true}}

The objects that you want to migrate or synchronize. The value is a JSON string. For more information, see [Description of migration, synchronization, or subscription objects](/help/en/dts/developer-reference/objects-of-dts-tasks).

-   The DbList parameter can contain a maximum of 1 MB of data.
-   If the DbList parameter includes filter conditions, the total size of the parameter, including the conditions, cannot exceed 1 MB.
-   For a distributed task, such as a migration or synchronization task whose source is a PolarDB-X 1.0 instance, the DbList parameter is split based on physical tables to generate multiple subtasks. The DbList parameter of each subtask can contain a maximum of 1 MB of data.

Reserve

String

No

{ "srcInstanceId": "cen-9kqshqum\*\*\*\*\*\*\*" }

The reserved parameter for DTS, which is a JSON string. You can use this parameter to provide additional information about the source and destination databases, such as the data storage format for the destination Kafka database, the instance ID of a Cloud Enterprise Network (CEN), or the configuration of the extract, transform, and load (ETL) feature. For more information, see [Description of the Reserve parameter](/help/en/dts/developer-reference/reserve-parameter-description).

Checkpoint

String

No

1610540493

The start offset of incremental data migration or synchronization. The value is a UNIX timestamp. Unit: seconds.

**Note** If you specify the **Checkpoint** parameter, you must make sure that no other running DTS tasks use the same source database as the destination DTS instance.

DestinationEndpointOracleSID

String

No

testsid

The SID of the Oracle database.

**Note** This parameter is required only when **DestinationEndpointEngineName** is set to **Oracle** and the Oracle database is not a RAC instance.

JobType

String

Yes

SYNC

The task type. Valid values:

-   **MIGRATION**: data migration.
-   **SYNC**: data synchronization.
-   **CHECK**: data verification.

**Note**

-   If you set this parameter to **MIGRATION** or **SYNC**, you can also configure a data verification task in the data migration or synchronization instance.
-   If you want to configure a data verification task, you must also specify the **DataCheckConfigure** parameter.

DtsJobId

String

No

k2gm967v16f\*\*\*\*

The ID of the data migration or synchronization task.

**Note** [DescribeDtsJobs](/help/en/dts/developer-reference/api-describedtsjobs)You can call the operation to query the task ID.

DtsInstanceId

String

No

dtsk2gm967v16f\*\*\*\*

The ID of the data migration or synchronization instance.

**Note** [DescribeDtsJobs](/help/en/dts/developer-reference/api-describedtsjobs)You can call the operation to query the instance ID.

DelayPhone

String

No

1361234\*\*\*\*,1371234\*\*\*\*

The mobile numbers of the contacts who receive latency-related alerts. Separate multiple mobile numbers with commas (,).

**Note**

-   This parameter is available only for the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers.
-   [Set alert rules for DTS tasks in Cloud Monitor](/help/en/dts/user-guide/configure-alert-rules-for-dts-tasks-in-the-cloudmonitor-console)The international site (alibabacloud.com) does not support mobile phone alerts. You can only .

DelayRuleTime

Long

No

10

The threshold for triggering a latency alert. Unit: seconds. The value must be an integer. Set the threshold to 10 seconds or longer to avoid false alerts that are caused by network and database jitters.

**Note** This parameter is required when **DelayNotice** is set to **true**.

DelayNotice

Boolean

No

true

Specifies whether to monitor the task latency. Valid values:

-   **true**: Yes.
-   **false**: No.

ErrorPhone

String

No

1361234\*\*\*\*,1371234\*\*\*\*

The mobile numbers of the contacts who receive exception-related alerts. Separate multiple mobile numbers with commas (,).

**Note**

-   This parameter is available only for the China site (aliyun.com). Only mobile numbers in the Chinese mainland are supported. You can specify up to 10 mobile numbers.
-   [Set an alert rule for a DTS task on the Cloud Monitor platform](/help/en/dts/user-guide/configure-alert-rules-for-dts-tasks-in-the-cloudmonitor-console)The international site (alibabacloud.com) does not support mobile phone alerts. You can only .

ErrorNotice

Boolean

No

true

Specifies whether to monitor the task status. Valid values:

-   **true**: Yes.
-   **false**: No.

SynchronizationDirection

String

No

Forward

The synchronization direction. Valid values:

-   **Forward**: forward.
-   **Reverse**: reverse.

**Note**

-   The default value is **Forward**.
-   This parameter takes effect only if the synchronization topology of the task is bidirectional.

RegionId

String

No

cn-hangzhou

The region where the DTS instance is located. For more information, see [List of supported regions](/help/en/dts/developer-reference/supported-regions).

DedicatedClusterId

String

No

dtscluster\_atyl3b5214uk\*\*\*

The ID of the DTS dedicated cluster.

**Note** If you specify the ID of a dedicated cluster, the task is scheduled to the cluster.

FileOssUrl

String

No

http://db-list-os-file.oss-cn-shanghai.aliyuncs.com/8e42\_121852\*\*\*\*\*\*\*\*\*\*\_79dd3aeabe2f43cdb\*\*\*\*\*\*\*\*\*\*\*\*\*\*

The URL of the Object Storage Service (OSS) file for the task.

DataCheckConfigure

String

No

{"fullCheckModel":1,"fullCheckRatio":20,"checkMaximumHourEnable":1,"checkMaximumHour":1,"fullCheckErrorNotice":true,"fullCheckValidFailNotice":true,"fullCheckNoticeValue":8,"incrementalCheckErrorNotice":true,"incrementalCheckValidFailNotice":true,"incrementalCheckValidFailNoticeTimes":2,"incrementalCheckValidFailNoticePeriod":1,"incrementalCheckValidFailNoticeValue":1,"incrementalCheckDelayNotice":true,"incrementalCheckDelayNoticeTimes":2,"incrementalCheckDelayNoticePeriod":1,"incrementalCheckDelayNoticeValue":60,"fullDataCheck":true,"incrementalDataCheck":true,"dataCheckNoticePhone":"13126800\*\*\*\*","dataCheckDbList":{"dts":{"name":"dts","all":true}}}

The parameters for data verification, including the configurations for data verification and alerts. The value is a JSON string. For more information, see [DataCheckConfigure parameters](/help/en/dts/developer-reference/datacheckconfigure-parameter).

DisasterRecoveryJob

Boolean

No

true

Specifies whether the instance is a disaster recovery instance. Valid values:

-   **true**: Yes.
-   **false**: No.

SourceEndpointVSwitchID

String

No

vsw-bp10df3mxae6lpmku\*\*\*\*

The ID of the vSwitch for the data shipping link.

DtsBisLabel

String

No

normal

The environment tag of the DTS instance. Valid values:

-   **normal**
-   **online**

SrcCaCertificateOssUrl

String

No

\*\*\*\*

The path of the certificate authority (CA) certificate if the source database is connected over SSL.

**Note** This feature is not supported. Do not specify this parameter.

SrcCaCertificatePassword

String

No

\*\*\*\*

The password of the CA certificate if the source database is connected over SSL.

**Note** This feature is not supported. Do not specify this parameter.

DestCaCertificateOssUrl

String

No

\*\*\*\*

The path of the CA certificate if the destination database is connected over SSL.

**Note** This feature is not supported. Do not specify this parameter.

DestCaCertificatePassword

String

No

\*\*\*\*

The password of the CA certificate if the destination database is connected over SSL.

**Note** This feature is not supported. Do not specify this parameter.

MinDu

double

No

1

The minimum number of DTS units (DUs).

**Note** This parameter is supported only for serverless instances.

MaxDu

double

No

16

The maximum number of DUs.

**Note** This parameter is supported only for serverless instances.

SrcClientCertOssUrl

String

No

\*\*\*\*

The path of the client certificate if the source database is connected over SSL.

**Note** This feature is not supported. Do not specify this parameter.

SrcClientKeyOssUrl

String

No

\*\*\*\*

The path of the private key of the client certificate if the source database is connected over SSL.

**Note** This feature is not supported. Do not specify this parameter.

SrcClientPassword

String

No

\*\*\*\*

The password of the private key of the client certificate if the source database is connected over SSL.

**Note** This feature is not supported. Do not specify this parameter.

DestClientCertOssUrl

String

No

\*\*\*\*

The path of the client certificate if the destination database is connected over SSL.

**Note** This feature is not supported. Do not specify this parameter.

DestClientKeyOssUrl

String

No

\*\*\*\*

The path of the private key of the client certificate if the destination database is connected over SSL.

**Note** This feature is not supported. Do not specify this parameter.

DestClientPassword

String

No

\*\*\*\*

The password of the private key of the client certificate if the destination database is connected over SSL.

**Note** This feature is not supported. Do not specify this parameter.

SrcPrimaryVswId

String

No

\*\*\*\*

The primary vSwitch of the source for VPC NAT.

SrcSecondaryVswId

String

No

\*\*\*\*

The secondary vSwitch of the source for VPC NAT.

DestPrimaryVswId

String

No

\*\*\*\*

The primary vSwitch of the destination for VPC NAT.

DestSecondaryVswId

String

No

\*\*\*\*

The secondary vSwitch of the destination for VPC NAT.

ResourceGroupId

String

No

rg-acfmzawhxxc\*\*\*\*

The ID of the resource group.

## Response parameters

**Name**

**Type**

**Example**

**Description**

HttpStatusCode

String

200

The HTTP status code.

RequestId

String

224DB9F7-3100-4899-AB9C-C938BCCB\*\*\*\*

The request ID.

ErrCode

String

InternalError

The error code returned if the call fails.

DtsJobId

String

k2gm967v16f\*\*\*\*

The ID of the data migration or synchronization task.

DtsInstanceId

String

dtsk2gm967v16f\*\*\*\*

The ID of the data migration or synchronization instance.

Success

String

true

Indicates whether the request was successful.

ErrMessage

String

The request processing has failed due to some unknown error.

The error message returned if the call fails.

## Examples

Sample request

```
http(s)://dts.aliyuncs.com/?Action=ConfigureDtsJob
&RegionId=cn-hangzhou
&SourceEndpointInstanceType=RDS
&DestinationEndpointInstanceType=EXPRESS
&StructureInitialization=true
&DataInitialization=true
&DataSynchronization=true
&DbList={"dtstest":{"name":"dtstest","all":true}}
&JobType=SYNC
&SourceEndpointInstanceID=rm-bp1imrtn6fq7h****
&SourceEndpointEngineName=MYSQL
&SourceEndpointRegion=cn-hangzhou
&SourceEndpointUserName=dtstest
&SourceEndpointPassword=Test123456
&DestinationEndpointInstanceID=vpc-bp1opxu1zkhn00gzv****
&DestinationEndpointEngineName=MYSQL
&DestinationEndpointIP=172.16.**.***
&DestinationEndpointRegion=cn-hangzhou
&DestinationEndpointPort=3306
&DestinationEndpointUserName=dtstest
&DestinationEndpointPassword=Test123456
&DtsJobId=k2gm967v16f****
&DtsInstanceId=dtsk2gm967v16f****
&DtsJobName=rdsmysql_to_self-managed_mysql_over_leased_line
&<Common request parameters>
```

Sample responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<ConfigureDtsJobResponse>
    <DtsJobId>k2gm967v16f****</DtsJobId>
    <RequestId>224DB9F7-3100-4899-AB9C-C938BCCB****</RequestId>
    <HttpStatusCode>200</HttpStatusCode>
    <DtsInstanceId>dtsk2gm967v16f****</DtsInstanceId>
    <Success>true</Success>
</ConfigureDtsJobResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "DtsJobId" : "k2gm967v16f****",
  "RequestId" : "224DB9F7-3100-4899-AB9C-C938BCCB****",
  "HttpStatusCode" : 200,
  "DtsInstanceId" : "dtsk2gm967v16f****",
  "Success" : true
}
```

## Error codes

**HttpCode**

**Error code**

**Error message**

**Description**

403

InvalidParameter.KafkaBrokerInvalid

kafka broker configuration must be intranet IP

The broker of the self-managed Kafka cluster on an ECS instance must be configured using an IP address. Hostnames are not supported.

403

InvalidParameter.KafkaHostInvalid

kafaka host name should be intranet IP

The hostname of the Kafka cluster is not supported. Enter an internal IP address.

403

UpdateJob.OperationDenied.InitStatus

The operation is not permitted due to Dts job status is init.

The task has started and cannot be modified. Reconfigure the task or modify the synchronization objects.

403

GetMongoDbShardInfo.NoShardAddress

MongoDb has not yet opened the shard connection address, please try again after opening.

Failed to obtain the shard connection information. Check the parameter configurations to confirm that the database is a sharded MongoDB database and the shard address is enabled.

403

GetMongoDbShardInfo.EmptyInstances

Failed to get MongoDb shard information, the return is empty.

Failed to obtain the shard information. Check the parameter configurations to confirm that the database is a sharded MongoDB database.

403

CheckJobFailed.ServerUnAvailable

Unable to check whether the node can connect to the database because the node service is unavailable.

Some DTS nodes are unavailable. Try again. If the issue persists, contact technical support.

403

DbTypeNotSupport.PolarDBRDS

The current rds instance is of type PolarDB, which is not supported for the time being. Only rds instances under drds are supported.

DTS does not support data synchronization for DRDS instances that use PolarDB for MySQL databases for database sharding.

403

DbTypeNotSupport.OnlyReadRDS

Synchronization is not currently supported due to latency issues with read-only DRDS instances.

DTS does not support data synchronization for DRDS instances that use read-only databases for database sharding.

403

DTS.Msg.InvalidParameter.KafkaBrokerInvalid

kafka broker configuration must be intranet IP

The broker of the self-managed Kafka cluster on an ECS instance must be configured using an IP address. Hostnames are not supported.

403

DTS.Msg.InvalidParameter.KafkaHostInvalid

kafaka host name should be intranet IP

The hostname of the Kafka cluster is not supported. Enter an internal IP address.

403

DTS.Msg.UpdateJob.OperationDenied.InitStatus

The operation is not permitted due to Dts job status is init.

The task has started and cannot be modified. Reconfigure the task or modify the synchronization objects.

403

DTS.Msg.GetMongoDbShardInfo.NoShardAddress

MongoDb has not yet opened the shard connection address, please try again after opening.

Failed to obtain the shard connection information. Check the parameter configurations to confirm that the database is a sharded MongoDB database and the shard address is enabled.

403

DTS.Msg.GetMongoDbShardInfo.EmptyInstances

Failed to get MongoDb shard information, the return is empty.

Failed to obtain the shard information. Check the parameter configurations to confirm that the database is a sharded MongoDB database.

403

DTS.Msg.CheckJobFailed.ServerUnAvailable

Unable to check whether the node can connect to the database because the node service is unavailable.

Some DTS nodes are unavailable. Try again. If the issue persists, contact technical support.

403

DTS.Msg.DbTypeNotSupport.PolarDBRDS

The current rds instance is of type PolarDB, which is not supported for the time being. Only rds instances under drds are supported.

DTS does not support data synchronization for DRDS instances that use PolarDB for MySQL databases for database sharding.

403

DTS.Msg.DbTypeNotSupport.OnlyReadRDS

Synchronization is not currently supported due to latency issues with read-only DRDS instances.

DTS does not support data synchronization for DRDS instances that use read-only databases for database sharding.

403

InvalidSecurityToken.Expired

Specified SecurityToken is expired.

The signature has expired. Update the signature.

400

Throttling.User

Request was denied due to user flow control.

The request was denied because the request frequency reached the limit. Try again later.

500

ServiceUnavailable

The request has failed due to a temporary failure of the server.

The request failed because the server timed out or was unavailable. Try again. If the request fails again, contact technical support.

For more information about other error codes, see the [API Error Center for the international site](https://error-center.alibabacloud.com/status/product/Dts).
