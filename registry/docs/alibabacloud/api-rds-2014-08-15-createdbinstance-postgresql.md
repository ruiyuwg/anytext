Creates an instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   PostgreSQL
-   SQL Server
-   MariaDB

### [](#references)[](#)References

**Note** Fees of an instance are changed if the call is successful. Before you call this operation, carefully read the related topics. If an error message appears when you call this operation, you can search for the error message to view the cause of the error.

-   [Create an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/create-an-apsaradb-rds-for-mysql-instance-1).
-   [Create a serverless ApsaraDB RDS for MySQL instance](/help/en/doc-detail/412231.html).
-   [Create an ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-an-apsaradb-rds-for-postgresql-instance-1)
-   [Create a serverless ApsaraDB RDS for PostgreSQL instance](/help/en/rds/apsaradb-rds-for-postgresql/create-a-serverless-apsaradb-rds-for-postgresql-instance)
-   [Create an ApsaraDB RDS for PostgreSQL instance for which Babelfish is enabled](/help/en/rds/apsaradb-rds-for-postgresql/enable-babelfish-for-an-apsaradb-rds-for-postgresql-instance)
-   [Create an ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-an-apsaradb-rds-for-sql-server-instance-1)
-   [Create a serverless ApsaraDB RDS for SQL Server instance](/help/en/rds/apsaradb-rds-for-sql-server/create-a-serverless-apsaradb-rds-for-sql-server-instance)
-   [Create an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/create-an-apsaradb-rds-for-mariadb-instance-1)

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateDBInstance)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/CreateDBInstance)

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

rds:CreateDBInstance

create

\*All Resources

`*`

-   rds:ResourceTag
-   rds:Engine
-   rds:EngineVersion
-   rds:DBInstanceClass
-   rds:DBInstanceStorage

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/rds/developer-reference/api-rds-2014-08-15-describeregions) operation to query the most recent region list.

cn-hangzhou

Engine

string

Yes

The database engine of the instance. Valid values:

-   **MySQL**
-   **SQLServer**
-   **PostgreSQL**
-   **MariaDB**

MySQL

EngineVersion

string

Yes

The database engine version of the instance.

-   Regular RDS instance
    
    -   Valid values when you set Engine to MySQL: **5.5**, **5.6**, **5.7**, and **8.0**
    -   Valid values when you set Engine to SQLServer: **08r2\_ent\_ha**(cloud disks, discontinued), **2008r2**(premium local disks, discontinued), **2012**(SQL Server EE Basic), **2012\_ent\_ha**, **2012\_std\_ha**, **2012\_web**, **2014\_ent\_ha**, **2014\_std\_ha**, **2016\_ent\_ha**, **2016\_std\_ha**, **2016\_web**, **2017\_ent**, **2017\_std\_ha**, **2017\_web**, **2019\_ent**, **2019\_std\_ha**, **2019\_web**, **2022\_ent**, **2022\_std\_ha**, and **2022\_web**
    -   Valid values when you set Engine to PostgreSQL: **10.0**, **11.0**, **12.0**, **13.0**, **14.0**, **15.0**, **16.0**, and **17.0**
    -   Valid values when you set Engine to MariaDB: **10.3** and **10.6**
-   Serverless RDS instance
    
    -   Valid values when you set Engine to MySQL: **5.7** and **8.0**
    -   Valid values when you set Engine to SQLServer: **2016\_std\_sl**, **2017\_std\_sl**, and **2019\_std\_sl**
    -   Valid values when you set Engine to PostgreSQL: **14.0**, **15.0**, **16.0**, and **17.0**

**Note**

-   ApsaraDB RDS for MariaDB does not support serverless instances.
    
-   RDS instances that run SQL Server: `_ent` specifies SQL Server EE (Always On), `_ent_ha` specifies SQL Server EE, `_std_ha` specifies SQL Server SE, and `_web` specifies SQL Server Web.
    
-   RDS instances that run SQL Server 2014 are not available for purchase on the international site (alibabacloud.com).
    
-   Babelfish is supported only for RDS instances that run PostgreSQL 15.
    

5.6

DBInstanceClass

string

Yes

The instance type of the instance. You can specify an instance type of the standard or YiTian product type. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).

To create a serverless instance, set this parameter to one of the following values:

-   If you want to create a serverless instance that runs MySQL on RDS Basic Edition, set this parameter to **mysql.n2.serverless.1c**.
-   If you want to create a serverless instance that runs MySQL on RDS High-availability Edition, set this parameter to **mysql.n2.serverless.2c**.
-   If you want to create a serverless instance that runs SQL Server, set this parameter to **mssql.mem2.serverless.s2**.
-   If you want to create a serverless instance that runs PostgreSQL on RDS Basic Edition, set this parameter to **pg.n2.serverless.1c**.
-   If you want to create a serverless instance that runs PostgreSQL on RDS High-availability Edition, set this parameter to **pg.n2.serverless.2c**.

rds.mysql.s1.small

DBInstanceStorage

integer

Yes

The storage capacity of the instance. Unit: GB. The storage capacity increases in increments of 5 GB. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).

100

SystemDBCharset

string

No

A deprecated parameter. You do not need to specify this parameter.

gbk

DBInstanceNetType

string

Yes

The network connection type of the instance. The value of this parameter is fixed as **Intranet**, indicating an internal network connection.

Internet

DBInstanceDescription

string

No

The instance name. The value must be 2 to 255 characters in length The name can contain letters, digits, and hyphens (-) and must start with a letter.

**Note** The value cannot start with http:// or https://.

Test database

SecurityIPList

string

Yes

The IP address whitelist of the instance. For more information, see [Configure an IP address whitelist](/help/en/rds/use-a-database-client-or-the-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance-2). Separate multiple IP addresses or CIDR blocks with commas (,). You can add up to 1,000 IP addresses or CIDR blocks to the whitelist. The entries in the IP address whitelist must be in one of the following formats:

-   IP addresses, such as 10.10.XX.XX.
-   CIDR blocks, such as 10.10.XX.XX/24. In this example, 24 indicates that the prefix of each IP address in the IP address whitelist is 24 bits in length. You can replace 24 with a value within the range of 1 to 32.

10.10.XX.XX/24

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

ETnLKlblzczshOTUbOCz\*\*\*\*\*

PayType

string

Yes

The billing method of the instance. Valid values:

-   **Postpaid**: pay-as-you-go.
-   **Prepaid**: subscription.
-   **Serverless**: serverless. This value is not supported for instances that run MariaDB. For more information, see [Overview of serverless ApsaraDB RDS for MySQL instances](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-serverless), [Overview of serverless ApsaraDB RDS for SQL Server instances](/help/en/doc-detail/604344.html), and [Overview of serverless ApsaraDB RDS for PostgreSQL instances](/help/en/doc-detail/607742.html).

**Note** The system automatically generates a purchase order and completes the payment.

Postpaid

ZoneId

string

No

The zone ID of the primary instance.

-   If you specify a virtual private cloud (VPC) and a vSwitch, you must specify the ID of the zone to which the specified vSwitch belongs. Otherwise, the instance cannot be created.
-   If the instance runs RDS High-availability Edition, you must specify the **ZoneIdSlave1** parameter. The ZoneIdSlave1 parameter specifies whether to use the single-zone deployment method or the multi-zone deployment method.
-   If the instance runs RDS Enterprise Edition, you must specify the **ZoneIdSlave1** and **ZoneIdSlave2** parameters. The ZoneIdSlave1 and ZoneIdSlave2 parameters specify whether to use the single-zone deployment method or the multi-zone deployment method.
-   If the instance runs MySQL on RDS Cluster Edition, you must specify the **ZoneIdSlave1** parameter for the RDS cluster that has two nodes and the **ZoneIdSlave1** and **ZoneIdSlave2** parameters for the RDS cluster that has three nodes.

cn-hangzhou-b

ZoneIdSlave1

string

No

The zone ID of the secondary instance.

-   If you set this parameter to **Auto**, the multi-zone deployment method is used and the zone of the secondary instance is automatically configured.
-   If you set this parameter to the same value as the **ZoneId** parameter, the single-zone deployment method is used.
-   If you set this parameter to a value that is different from the value of the **ZoneId** parameter, the multiple-zone deployment method is used.

cn-hangzhou-c

ZoneIdSlave2

string

No

The zone ID of the other secondary node. When you create an ApsaraDB RDS for MySQL cluster, you can create one to two secondary nodes for the cluster. This parameter applies if you create a cluster that contains two secondary nodes.

cn-hangzhou-d

InstanceNetworkType

string

No

The network type of the instance. Valid values:

-   **VPC**: virtual private cloud (VPC)
-   **Classic**: classic network

**Note**

-   If the instance runs MySQL and uses cloud disks, you must set this parameter to **VPC**.
    
-   If the instance runs PostgreSQL or MariaDB, you must set this parameter to **VPC**.
    
-   If the instance runs SQL Server Basic or SQL Server Web, you can set this parameter to VPC or Classic. If the instance runs other database engines, you must set this parameter to **VPC**.
    

Classic

ConnectionMode

string

No

The connection mode of the instance. Valid values:

-   **Standard**: standard mode
-   **Safe**: database proxy mode

ApsaraDB RDS automatically assigns a connection mode to the instance.

**Note** SQL Server 2012, SQL Server 2016, and SQL Server 2017 support only the standard mode.

Standard

VPCId

string

No

The ID of the VPC to which the instance belongs.

**Note** This parameter is available when you set the **InstanceNetworkType** parameter to **VPC**.

vpc-\*\*\*\*\*

VSwitchId

string

No

The vSwitch ID.

-   **Relations with zones**: Specify the vSwitch ID based on the zones in which the vSwitch belongs to. If you specify two vSwitch IDs, make sure that the vSwitch IDs match the zone IDs specified by the ZoneId and ZoneIdSlave1 parameters.
-   **Limits on the network type**: Set **InstanceNetworkType** to **VPC**.
-   **Limits on multiple vSwitch IDs**: If you set **ZoneSlaveId1** to a value that is not **Auto**, you must specify the IDs of two vSwitches for this parameter and separate the IDs with a comma (,).
-   **Limits on characters**: The value cannot contain `spaces` or the following characters: `!` `#` `￥` `&` `%`

vsw-\*\*\*\*\*

PrivateIpAddress

string

No

The private IP address of the instance. The private IP address must be within the CIDR block that is supported by the specified vSwitch. ApsaraDB RDS automatically assigns a private IP address to the instance based on the values of the **VPCId** and **vSwitchId** parameters.

172.16.XX.XX

UsedTime

string

No

The subscription duration of the instance. Valid values:

-   If you set the **Period** parameter to **Year**, the value of the **UsedTime** parameter ranges from **1 to 5**.
-   If you set the **Period** parameter to **Month**, the value of the **UsedTime** parameter ranges from **1 to 11**.

**Note** If you set the PayType parameter to **Prepaid**, you must also specify this parameter.

2

Period

string

No

The unit of the subscription duration. Valid values:

-   **Year**
-   **Month**

**Note** If you set the PayType parameter to **Prepaid**, you must specify this parameter.

Year

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmy\*\*\*\*\*

DBInstanceStorageType

string

Yes

The storage type of the instance. Valid values:

-   **local\_ssd**: Premium Local SSD (recommended)
-   **general\_essd**: Premium Enterprise SSD (ESSD) (recommend)
-   **cloud\_essd**: PL1 ESSD
-   **cloud\_essd2**: PL2 ESSD
-   **cloud\_essd3**: PL3 ESSD
-   **cloud\_ssd**: standard SSD. This storage type is not recommended. Standard SSDs are no longer available for purchase in some Alibaba Cloud regions.

The default value of this parameter is determined by the instance type specified by the **DBInstanceClass** parameter.

-   If the instance type specifies the Premium Local SSD storage type, the default value of this parameter is **local\_ssd**.
-   If the instance type specifies the cloud disk storage type, the default value of this parameter is **cloud\_essd**.

**Note** Serverless instances support only PL1 ESSDs and Premium ESSDs.

cloud\_essd

BusinessInfo

string

No

The additional business information about the instance.

121436975448952

EncryptionKey

string

No

The ID of the key that is used for cloud disk encryption in the region in which the instance is deployed. If this parameter is specified, cloud disk encryption is enabled and you must also specify the **RoleARN** parameter. Cloud disk encryption cannot be disabled after it is enabled.

You can obtain the ID of the key in the Key Management Service (KMS) console or create a key. For more information, see [Create a key](/help/en/kms/key-management-service/support/create-a-cmk-1).

**Note**-   This parameter is not required when you create an instance that runs MySQL, PostgreSQL, or SQL Server. You need to only specify the **RoleARN** parameter to create an instance that has cloud disk encryption enabled by using the obtained key ID.
-   You can configure RAM authorization to require a RAM user to enable cloud disk encryption when the RAM user is used to create an instance. If cloud disk encryption is disabled during the instance creation, the creation operation fails. To complete the configuration, you can attach the following policy to the RAM user: `{"Version":"1","Statement":[{"Effect":"Deny","Action":"rds:CreateDBInstance","Resource":"*","Condition":{"StringEquals":{"rds:DiskEncryptionRequired":"false"}}}]}`

**Warning** The configuration also affects the CreateOrder operation that is called to create instances in the console.

0d24\*\*\*\*\*-da7b-4786-b981-9a164dxxxxxx

RoleARN

string

No

The Alibaba Cloud Resource Name (ARN) that is provided by your Alibaba Cloud account for Resource Access Management (RAM) users. RAM users can use the ARN to connect to ApsaraDB RDS to Key Management Service (KMS). You can call the CheckCloudResourceAuthorized operation to query the ARN.

**Note** When you enable the encryption, you must specify the RoleARN.

acs:ram::1406xxxxxx:role/aliyunrdsinstanceencryptiondefaultrole

AutoRenew

string

No

Specifies whether to enable auto-renewal for the instance. You must specify this parameter only if the instance uses the subscription billing method. Valid values:

-   **true**
-   **false**

**Note**-   The auto-renewal cycle is one month for a monthly subscription.
-   The auto-renewal cycle is one year for a yearly subscription.

true

Category

string

No

The RDS edition of the instance. Valid values:

-   Regular RDS instance
    
    -   **Basic**: RDS Basic Edition
    -   **HighAvailability**: RDS High-availability Edition
    -   **cluster**: RDS Cluster Edition for ApsaraDB RDS for MySQL or PostgreSQL
    -   **AlwaysOn**: RDS Cluster Edition for ApsaraDB RDS for SQL Server
    -   **Finance**: RDS Basic Edition for serverless instances
-   Serverless RDS instance
    
    -   **serverless\_basic**: RDS Basic Edition for serverless instances. This edition is available only for instances that run MySQL and PostgreSQL.
    -   **serverless\_standard**: RDS High-availability Edition for serverless instances. This edition is available only for instances that run MySQL and PostgreSQL.
    -   **serverless\_ha**: RDS High-availability Edition for serverless instances. This edition is available only for instances that run SQL Server.

**Note** This parameter is required if PayType is set to Serverless.

HighAvailability

DedicatedHostGroupId

string

No

The ID of the dedicated cluster to which the instance belongs.

If you create the instance in a dedicated cluster, you must specify this parameter.

-   You can call the DescribeDedicatedHostGroups operation to query the information about the dedicated cluster.
-   If no dedicated clusters are created, you can call the CreateDedicatedHostGroup operation to create a dedicated cluster.

dhg-4n\*\*\*\*\*

TargetDedicatedHostIdForMaster

string

No

The ID of the host to which the instance belongs in the specified dedicated cluster.

If you create the instance in a dedicated cluster, you must specify this parameter. If you do not specify this parameter, the system automatically assigns a host.

-   You can call the DescribeDedicatedHosts operation to query the host in the dedicated cluster.
-   If no hosts are created, you can call the CreateDedicatedHost operation to create a host.

i-bp\*\*\*\*\*1

TargetDedicatedHostIdForSlave

string

No

The ID of the host to which the secondary instance belongs in the specified dedicated cluster.

If you want to create an instance that runs RDS High-availability Edition or RDS Enterprise Edition in a dedicated cluster, you must specify this parameter. If you do not specify this parameter, the system automatically assigns a host.

-   You can call the DescribeDedicatedHosts operation to query the host in the dedicated cluster.
-   If no hosts are created, you can call the CreateDedicatedHost operation to create a host.

i-bp\*\*\*\*\*2

TargetDedicatedHostIdForLog

string

No

The ID of the host to which the logger instance belongs in the specified dedicated cluster.

If you want to create an instance that runs RDS Enterprise Edition in a dedicated cluster, you must specify this parameter. If you do not specify this parameter, the system automatically assigns a host.

-   You can call the DescribeDedicatedHosts operation to query the host in the dedicated cluster.
-   If no hosts are created, you can call the CreateDedicatedHost operation to create a host.

i-bp\*\*\*\*\*3

DBParamGroupId

string

No

The parameter template ID. You can call the DescribeParameterGroups operation to query the parameter template ID.

**Note** This parameter is available if you want to create an instance that runs MySQL or PostgreSQL. If you do not configure this parameter, the default parameter template is used. If you want to use a custom parameter template, you can customize a parameter template and set this parameter to the ID of the custom template.

rpg-sys-\*\*\*\*\*

DBTimeZone

string

No

The time zone of the instance. This parameter takes effect only when you set **Engine** to **MySQL** or **PostgreSQL**.

-   **Engine** is set to **MySQL**:
    
    -   This time zone is in UTC. Valid values: \*\*-12:59\*\* to **+13:00**.
    -   If the instance uses Premium Local SSDs, you can specify the name of the time zone. For example, you can specify the Asia/Hong\_Kong time zone. For more information, see [Time zones](/help/en/rds/developer-reference/time-zones).
-   **Engine** is set to **PostgreSQL**.
    
    -   This time zone is not in UTC. For more information, see [Time zones](/help/en/rds/developer-reference/time-zones).
    -   You can configure this parameter only when the RDS instance uses cloud disks.

**Note**-   You can specify the time zone when you create a primary instance. You cannot specify the time zone when you create a read-only instance. Read-only instances inherit the time zone of their primary instance.
-   If you do not specify this parameter, the system automatically assigns the default time zone of the region in which the instance resides.

+08:00

DBIsIgnoreCase

string

No

Specifies whether the table name is case-sensitive. Valid values:

-   **true**: Table names are not case-sensitive. This is the default value.
-   **false**: Table names are case-sensitive.

true

TargetMinorVersion

string

No

The minor engine version of the instance. This parameter is required only when you create an instance that runs MySQL or PostgreSQL. The value format varies based on the database engine of the instance.

-   If you create an instance that runs MySQL, the value is in the following format: `<RDS edition>_<Minor engine version>`. Examples: `rds_20200229`, `xcluster_20200229`, and `xcluster80_20200229`.
    
    -   rds: The instance runs RDS Basic Edition or RDS High-availability Edition.
        
    -   xcluster: The instance runs MySQL 5.7 on RDS Enterprise Edition.
        
    -   xcluster80: The instance runs MySQL 8.0 on RDS Enterprise Edition.
        
    
    **Note** You can call the DescribeDBMiniEngineVersions operation to query the minor engine version. For more information about the differences between minor engine versions of AliSQL, see [Release notes](/help/en/rds/apsaradb-rds-for-mysql/release-notes-for-alisql).
    
-   If you create an instance that runs PostgreSQL, the value is in the following format: `rds_postgres_<Major engine version>00_<Minor engine version>`. Example: `rds_postgres_1400_20220830`.
    
    -   1400: The major engine version is PostgreSQL 14.
        
    -   20220830: the AliPG version. You can call the DescribeDBMiniEngineVersions operation to query the AliPG version. For more information about minor engine versions, see [Release notes for AliPG](/help/en/rds/apsaradb-rds-for-postgresql/release-notes-for-alipg).
        
    
    **Note** If you configure the **BabelfishConfig** parameter for your instance that runs PostgreSQL and set the babelfishEnabled field to true, the value of this parameter is in the following format: `rds_postgres_Major engine version00_AliPG version_babelfish`.
    

rds\_20200229

StorageAutoScale

string

No

Specifies whether to enable the automatic storage expansion feature for the instance. This feature is supported if the instance runs MySQL or PostgreSQL. Valid values:

-   **Enable**: enables the feature.
-   **Disable** (default): disables the feature.

**Note** After the instance is created, you can call the ModifyDasInstanceConfig operation to adjust the settings. For more information, see [Configure automatic storage expansion](/help/en/rds/apsaradb-rds-for-mysql/configure-automatic-storage-expansion-for-an-apsaradb-rds-for-mysql-instance).

Disable

StorageThreshold

integer

No

The threshold in percentage based on which automatic storage expansion is triggered.

-   **10**
-   **20**
-   **30**
-   **40**
-   **50**

**Note** If you set the **StorageAutoScale** parameter to **Enable**, you must specify this parameter.

50

StorageUpperBound

integer

No

The maximum storage capacity that is allowed for automatic storage expansion. The storage capacity of the instance cannot exceed the maximum storage capacity. Unit: GB.

**Note**-   Valid values: an integer greater than or equal to 0.
-   If you set **StorageAutoScale** to **Enable**, you must specify this parameter.

2000

DryRun

boolean

No

Specifies whether to perform a dry run. Default value: false. Valid values:

-   **true**: performs only a dry run. The system checks the request for potential issues, including missing parameter values, incorrect request syntax, service limits, and insufficient inventory errors.
-   **false** (default): performs a dry run and sends the request. If the request passes the dry run, the instance is created.

false

UserBackupId

string

No

The ID of the full backup file. You can call the ListUserBackupFiles operation to query the ID of the full backup file. If you want to create an instance by using the data of a backup file, you must specify this parameter.

This parameter is supported only when the following requirements are met:

-   The **PayType** parameter is set to **Postpaid**.
-   The **Engine** parameter is set to **MySQL**.
-   The **EngineVersion** parameter is set to **5.7**.
-   The **Category** parameter is set to **Basic**.

67798\*\*\*\*\*

Amount

integer

No

The number of ApsaraDB RDS for MySQL instances that you want to create. The parameter takes effect only when you create multiple ApsaraDB RDS for MySQL instances at a time by using a single request.

Valid values: **1** to **20**. Default value: **1**.

**Note**-   If you want to create multiple ApsaraDB RDS for MySQL instances at a time by using a single request, you can add tags to all the instances by using the **Tag.Key** parameter and the **Tag.Value** parameter. After the instances are created, you can manage the instances based on the tags.
-   After you submit a request to create multiple ApsaraDB RDS for MySQL instances, this operation returns **TaskId**, **RequestId**, and **Message**. You can call the DescribeDBInstanceAttribute operation to query the information about an instance.
-   If the value of the **Engine** parameter is not **MySQL** and the value of the Amount parameter is greater than **1**, this operation fails and returns an error code `InvalidParam.Engine`.

2

CreateStrategy

string

No

The policy based on which multiple instances are created. The parameter takes effect only when the value of the **Amount** parameter is greater than 1. Valid values:

-   **Atomicity** (default): atomicity. The instances are all created together. If one instance cannot be created, none of the instances are created.
-   **Partial**: non-atomicity. Each instance is independently created. The failure in creating an instance does not affect the creation of the other instances.

Atomicity

Tag

array<object>

No

The tags that are added to instances.

object

No

The details of the tag.

Key

string

No

The tag key. You can use this parameter to add tags to the instance.

-   If the specified tag key is an existing key, the system directly adds the tag key to the instance. You can call the ListTagResources to query the existing tag.
-   If the specified tag key does not exist, the system creates the tag key and adds the tag key to the instance.
-   The value cannot be an empty string.
-   This parameter must be used together with the **Tag.Value** parameter.

testkey1

Value

string

No

The tag value. You can use this parameter to add tags to the instance.

-   If the specified tag value is found in the specified tag key, the system directly adds the tag value to the instance. You can call the ListTagResources to query the existing tag.
-   If the specified tag value is not found in the specified tag key, the system creates the tag value and adds the tag value to the instance.
-   This parameter must be used together with the **Tag.Key** parameter.

testvalue1

DeletionProtection

boolean

No

Specifies whether to enable the release protection feature for the instance. This feature is available only for pay-as-you-go instances. Valid values:

-   **true**: enables the feature.
-   **false** (default): disables the feature.

true

BabelfishConfig

string

No

The configuration of the Babelfish feature for the instance that runs PostgreSQL.

Format:{"babelfishEnabled":"true","migrationMode":"xxxxxxx","masterUsername":"xxxxxxx","masterUserPassword":"xxxxxxxx"}

The following list describes the fields in the format:

-   **babelfishEnabled**: specifies whether to enable Babelfish for the instance. If you set this field to **true**, you enable Babelfish for the instance. If you leave this parameter empty, Babelfish is disabled for the instance.
-   **migrationMode**: The migration mode of the instance. Valid values: **single-db** and **multi-db**.
-   **masterUsername**: The username of the administrator account. The username can contain lowercase letters, digits, and underscores (\_). It must start with a letter and end with a letter or digit. It can be up to 63 characters in length and cannot start with pg.
-   **masterUserPassword**: The password of the administrator account. The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. It must be 8 to 32 characters in length. The password can contain any of the following characters: `! @ # $ % ^ & * ( ) _ + - =`.

**Note** This parameter applies only to ApsaraDB RDS for PostgreSQL instances. For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see [Introduction to Babelfish](/help/en/doc-detail/428613.html).

{"babelfishEnabled":"true","migrationMode":"single-db","masterUsername":"babelfish\_user","masterUserPassword":"Babelfish123!"}

ServerlessConfig

object

No

The settings of the serverless instance. These parameters are required only when you create a serverless instance.

**Note** ApsaraDB RDS for MariaDB does not support serverless instances.

MaxCapacity

double

No

The maximum number of RDS Capacity Units (RCUs). Valid values:

-   Serverless ApsaraDB RDS for MySQL instances: **1 to 32**
-   Serverless ApsaraDB RDS for SQL Server instances: **2 to 16**
-   Serverless ApsaraDB RDS for PostgreSQL instances: **1 to 14**

**Note** The value of this parameter must be greater than or equal to the value of the **MinCapacity** parameter and can be set only to an **integer**.

8

MinCapacity

double

No

The minimum number of RCUs. Valid values:

-   Serverless ApsaraDB RDS for MySQL instances: **0.5 to 32**.
-   Serverless ApsaraDB RDS for SQL Server instances: **2 to 16**. Only integers are supported.
-   Serverless ApsaraDB RDS for PostgreSQL instances: **0.5 to 14**

**Note** The value of this parameter must be less than or equal to the value of the **MaxCapacity** parameter.

0.5

AutoPause

boolean

No

Specifies whether to enable the automatic startup and stop feature for the serverless instance. Valid values:

-   **true**: enables the feature.
-   **false** (default): disables the feature.

**Note** This parameter is required only for serverless instances that run MySQL and PostgreSQL. After the automatic start and stop feature is enabled, if no connections to the instance are established within 10 minutes, the instance is suspended. After a connection to the instance is established, the instance is resumed.

true

SwitchForce

boolean

No

Specifies whether to enable the forced scaling feature for the serverless instance. Valid values:

-   **true**: enables the feature.
-   **false** (default): disables the feature.

**Note**

-   This parameter is required only for serverless instances that run MySQL and PostgreSQL. If you set this parameter to true, a service interruption that lasts approximately 30 to 120 seconds occurs during forced scaling. Process with caution.
    
-   The RCU scaling for a serverless instance immediately takes effect. In some cases, such as the execution of large transactions, the scaling does not immediately take effect. In this case, you can enable this feature to forcefully scale the RCUs of the instance.
    

false

ConnectionString

string

No

The internal endpoint that is used to connect to the instance.

rm-uf6wjk5\*\*\*\*\*.mysql.rds.aliyuncs.com

Port

string

No

The port. You can initialize the port when you create the instance.

-   Valid values if the instance runs MySQL: 1000 to 65534
-   Valid values if the instance runs PostgreSQL, SQL Server, or MariaDB: 1000 to 5999

3306

BpeEnabled

string

No

A deprecated parameter. You do not need to specify this parameter.

false

BurstingEnabled

boolean

No

Specifies whether to enable the I/O burst feature of Premium ESSDs. Valid values:

-   **true**
-   **false**

**Note** For more information about the I/O burst feature of general ESSDs, see [What are Premium ESSDs?](/help/en/rds/support/what-is-a-universal-cloud-disk)

false

AutoPay

boolean

No

Specifies whether to enable automatic payment. Valid values:

-   **true**: enables the feature. Make sure that your account balance is sufficient when you enable automatic payment.
-   **false**: does not automatically complete the payment. An unpaid order is generated.

**Note** Default value: true. If your account balance is insufficient, you can set AutoPay to false to generate an unpaid order. Then, you can log on to the ApsaraDB RDS console to complete the payment.

true

IoAccelerationEnabled

string

No

Specifies whether to enable Buffer Pool Extension (BPE) of Premium ESSDs. Valid values:

-   **1**: enables BPE.
-   **0**: disables BPE.

**Note** For more information about Buffer Pool Extension(BPE) of Premium ESSDs, see [Buffer Pool Extension(BPE)](/help/en/rds/product-overview/buffer-pool-extension-bpe).

0

ColdDataEnabled

boolean

No

Specifies whether to enable the data archiving feature of Premium ESSDs. Valid values:

-   **true**
-   **false**

**Note** For more information about the data archiving feature of Premium ESSDs, see [Use the data archiving feature](/help/en/rds/apsaradb-rds-for-mysql/rds-mysql-data-archiving-function).

false

WhitelistTemplateList

string

No

The entries in the whitelist. If you enter multiple IP addresses or CIDR blocks, you must separate the IP addresses or CIDR blocks with commas (,). Do not add spaces preceding or following the commas. Example: `192.168.0.1,172.16.213.9`.

192.XXX.XX.1,172.XXX.XX.9

AutoCreateProxy

boolean

No

Specifies whether to automatically create a proxy. Valid values:

-   **true**: automatically creates a database proxy. By default, a general-purpose database proxy is created.
-   **false**: does not automatically create a database proxy.

false

AutoUseCoupon

boolean

No

Specifies whether to use a coupon. Default value: false. Valid values:

-   **true**
-   **false**

**Note** If you downgrade the specifications of an instance after you use coupons, the used coupons cannot be refunded.

true

PromotionCode

string

No

The coupon code.

aliwood-1688-mobile-promotion

OptimizedWrites

string

No

Specifies whether to enable the 16K atomic write feature. Valid values:

-   **optimized**: enables the 16K atomic write feature.
-   **none** (default): does not enable the 16K atomic write feature.

**Note** For more information, see [Use the 16K atomic write feature](/help/en/rds/apsaradb-rds-for-mysql/16kb-atomic-write).

optimized

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

DryRunResult

boolean

Indicates whether the request passed the dry run. Valid values:

-   **true**
-   **false**

**Note**-   If the system does not perform a dry run, this parameter is not returned.
-   If the request failed the dry run, an error message is returned.

true

TagResult

boolean

Indicates whether the specified tag is added to the instance. Valid values:

-   **true**: The specified tag is added to the instance.
-   **false**: The specified tag fails to be added to the instance.

**Note** If you do not add a tag to the instance, this parameter is not returned.

true

RequestId

string

The ID of the request.

1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC

ConnectionString

string

The internal endpoint of the instance.

rm-uf6wjk5\*\*\*\*\*.mysql.rds.aliyuncs.com

Message

string

The message that indicates whether multiple instances are created.

**Note** The parameter is returned only when the value of the **Amount** parameter is greater than 1.

Batch Create DBInstance Task Is In Process.

DBInstanceId

string

The instance ID. If the value of the **Amount** parameter is greater than **1**, more than one instance ID is returned. The number of instance IDs that are returned is the same as the value of the Amount parameter. The returned instance IDs are separated by commas (,).

For example, if the value of the **Amount** parameter is **3**, three instance IDs are returned. Examples: `rm-uf6wjk5*****1,rm-uf6wjk5*****2,rm-uf6wjk5*****3`

rm-uf6wjk5\*\*\*\*\*

Port

string

The internal IP address and port number that are used to connect to the instance.

3306

TaskId

string

The ID of the task that is run to create multiple instances.

-   This parameter is returned only when the value of **Amount** is greater than 1.
-   The **TaskID** parameter cannot be used to query a task.

s2365879-a9d0-55af-fgae-f2\*\*\*\*\*

DryRun

boolean

Indicates that the system performed a dry run.

-   The value is fixed as **true**.
-   If the system does not perform a dry run, this parameter is not returned.

true

OrderId

string

The order ID.

1007893702\*\*\*\*\*

**Note** In the latest version of SDK, the default timeout period on the client side is different from the default timeout period on the instance. If you use the latest version of SDK to call this operation, a timeout error may be reported even if this operation is successfully called. To prevent this issue, you can set ReadTimeout to 20000 before you call this operation. ![Configure ReadTimeout](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20241202/qgldfr/CreateDBInstance_Configure+ReadTimeout.png) 

## Examples

Sample success responses

`JSON`format

```
{
  "DryRunResult": true,
  "TagResult": true,
  "RequestId": "1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC",
  "ConnectionString": "rm-uf6wjk5*****.mysql.rds.aliyuncs.com",
  "Message": "Batch Create DBInstance Task Is In Process.",
  "DBInstanceId": "rm-uf6wjk5*****",
  "Port": 3306,
  "TaskId": "s2365879-a9d0-55af-fgae-f2*****",
  "DryRun": true,
  "OrderId": "1007893702*****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

Invalid.ParamGroupDBVersion

%s.%s

\-

400

InvalidInstanceLevel.DiskType

Specified instance level not support request disk type

The current instance type does not support the specified storage type.

400

RR309

We have detected a security risk with your payment method. Please proceed with verification via the link in your email or console message and re-submit your order after verification.

A security risk was detected in the default payment method. Please verify your payment method before placing your order. A verification link will be sent to you via email and internal message.

400

InvalidZoneId.NotSupported

The Specified vpc Zone not supported.

VPC-hosted RDS instances cannot be created in the zone. Specify a different zone.

400

InvalidZone.NotSupportedForStorageType

The specified zone is closed or invalid for Specified DBInstanceStorageType.

\-

400

InvalidNetworkTypeClassicWhenCloudStorage

The Specified InstanceNetworkType value Classic is not valid when choose cloud storage type.

When selecting a cloud storage type, specifying a InstanceNetworkType value of Classic is not valid.

400

InvalidZone.NotSupported

The Specified Zone not supported.

The zone is invalid.

400

InvalidEssdStorageSize

invalid cloud essd storage size.

The storage size of cloud disks is invalid. Check the storage size.

400

InvalidParameter

Some Reuquest Parameters Is Invalid. Check or Try It Again Later.

\-

400

Pay.AmountLimitExceeded

Pay amount limit exceeded.

\-

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

No payment method is specified for your account. We recommend that you add a payment method.

No valid payment method is specified for your Alibaba Cloud account. Add a valid payment method.

400

InsuffcientBalanceOrBankAccount

Add a payment method or add funds to the prepayment balance. Get started by creating an instance.

No valid payment method is specified within your Alibaba Cloud account. Add a valid payment method or add funds to your Alibaba Cloud account.

400

InvalidPaymentMethod.NoAccess

No payment method is specified for your account. We recommend that you add a payment method.

\-

400

InvalidPaymentMethod.InsufficientBalance

No payment method is specified for your account. We recommend that you add a payment method or add funds to the prepayment balance.

\-

400

Pay.LowFunds

The balance of the advance payment is insufficient or there is no balance of the advance payment.

\-

400

Pay.ChargeChannelNotFound

Failure to obtain the first external payment channel if the advance balance is insufficient.

\-

400

VswitchIpExhausted

Vswitch IP exhausted.

The operation failed. No vSwitch IP addresses are available.

400

InvalidPrivateIpAddress.AlreadyUsed

The specified IP is already used.

The IP address has been used.

400

InvalidEcsImage.NotFound

Sepcified ecs image does not exist

\-

400

InvalidMinorVersion.NotFound

Sepcified minor version does not exists.

\-

400

InvalidConcurrentOperate

Concurrent operation is detected.

Concurrent operations exist. Wait until the previous operation is complete and try again.

400

ZoneId.NotMatchWithCategory

The number of ZoneId specified does not match with category.

The number of zones is not supported for the database engine or the RDS edition of the RDS instance. Modify the zone settings.

400

InvalidSecurityIPList.Format

The specified parameter securityIPList is not valid.

The format of the IP address whitelist does not meet the requirements. Check the IP address whitelist.

400

InvalidDBParamGroupId.Format

The specified parameter dbParamGroupId is not valid.

\-

400

InvalidTargetMinorVersion.Format

The specified parameter targetMinorVersion is not valid.

\-

400

InvalidDedicatedHostGroupId.Format

The specified parameter dedicatedHostGroupId is not valid.

\-

400

InvalidDBInstanceClass.Malformed

The specified parameter DBInstanceClass is not valid.

\-

400

InvalidEngineVersion.Malformed

The specified parameter EngineVersion is not valid.

The database engine version is invalid. Check the database engine version and try again.

400

CreditPayInsufficientBalance

Insufficient credit pay limit. Please contact your channel partner to increase the limit.

The quota runs out. Contact your customer service representatives to increase the quota.

400

InvalidTagKey.Malformed

The Tag.N.Key parameter is empty.

The Tag.N.Key parameter is left unspecified.

400

InvalidTagValue.Malformed

The Tag.N.Value parameter is empty.

The Tag.N.Value parameter is left unspecified.

400

Duplicate.TagKey

The Tag.N.Key contains duplicate keys.

The values of two Tag.N.Key parameters are duplicate.

400

NumberExceed.Tags

The maximum number of Tags is exceeded. The maximum is 20.

The number of tags exceeds 20.

400

MissingParameter.ResourceIds

The parameter ResourceIds.N must not be null.

The ResourceIds.N parameter cannot be empty.

400

InvalidParameter.TagKey

The Tag.N.Key parameter is invalid.

The value of the Tag.N.Key parameter is invalid.

400

InvalidParameter.TagValue

The Tag.N.Value parameter is invalid.

The Tag.N.Value parameter is invalid.

400

NoPermission.SystemTag

You have no permission to use system tags.

You have no permission to use the system tag.

400

InvalidParam.Amount

Amount is allowed from 1 to 20.

Amount is allowed from 1 to 20.

400

InvalidParam.CreateStrategy

Only Atomicity and Partial are allowed.

Only the Atomicity and Partial parameters are supported.

400

InvalidParam.Engine

Only MySQL is allowed when Amount > 1.

\-

400

InvalidMultiZoneInfoList

The Specified Zone Info List is Invaild.

\-

400

InvalidKmsConfigStatus

The Kms Service Config is Invalid.

\-

400

InvalidConnectionString.Duplicate

Specified connection string already exists in the Aliyun RDS.

The endpoint is duplicate. Specify a different endpoint.

400

InvalidPort.Malformed

Specified port is not valid.

The port number is invalid.

400

InvalidUsedTime

UsedTime can not Less than or equal to zero.

The value of the UsedTime parameter must be greater than 0.

400

Kms.Unauthorized

KMS has not been authorized.

KMS is not authorized.

400

InvalidDBInstanceClass.Offline

The specified instance type is no longer provided. Please specify another instance type.

The instance type that you select is no longer available. Select another instance type.

400

SystemParamGroupCode.Format

Specific DBParamGroupId is not valid.

\-

400

InvalidDBInstanceName.Duplicate

Specified DB instance name already exists in the Aliyun RDS.

The operation failed. The instance name already exists. Specify a different name and try again.

400

ServiceLinkedRole.NotExist

Service linked role for RDS PostgreSQL not exist.

Create the AliyunServiceRoleForRdsPgsqlOnEcs role for ApsaraDB RDS for PostgreSQL.

400

CommodityServiceCalling.Exception

Failed to call commodity service.

Failed to call commodity service return.

400

Commodity.InvalidComponent

The module you purchased is not legal, please buy it again.

The module you purchased is not legal, please buy it again.

400

Pay.InsufficientBalance

Insufficient available balance.

Insufficient available balance.

400

Price.CommoditySys

Commodity system call exception.

Commodity system call exception.

400

RegionEndTimeDissolvedAustralia

Cloud services in the Australia (Sydney) region will be discontinued. Set the validity date to September 30, 2024 or earlier than September 30, 2024.

Hello customer, this area has been abolished.

400

RegionEndTimeDissolvedIndia

Cloud services in the India (Mumbai) region will be discontinued. Set the validity date to July 15, 2024 or earlier than July 15, 2024.

Hello customer, this area has been abolished.

400

InvalidPrivateIpAddress.Format

The specified private IP address format is incorrect.

The specified IP address is not in the correct format.

400

InvalidPrivateIpAddress.Mismatch

Specified private IP address is not in the CIDR block of virtual switch.

The VPC endpoint is invalid.

400

TooManyWhitelistTemplateIds

create dbinstance can support attach to up to 10 whitelist templates.

Excessive number of incoming whitelist templates! You can associate up to 10 whitelist templates.

400

UnsupportExtendDisk.NotSupport

Specified DB instance is unsupport extend disk.

Disk expansion is not supported on the specified instance.

400

InvalidWhitelistTemplateId

the template id list is invalid.

The ID of the specified whitelist template is incorrect. Check the setting.

400

InvalidRequestId

The request is copy, check your token.

The request is copy, check your token.

400

InvalidParameter.MinCapacity

The specified parameter 'MinCapacity' is not valid.

The specified parameter 'MinCapacity' is not valid.

400

InvalidUsedTime

The usedTime value should be between 1 and 11.

The usedTime value should be between 1 and 11.

400

UnsupportedClassCode

The specified DB instance class stops selling.

The specified DB instance class stops selling.

400

InvalidParameter.NotSupportDBInstanceStorageType

Parameter DBInstanceStorageType is invalid.

Invalid DBInstanceStorageType parameter

400

InvalidParam.InstanceNetworkType

Creation of classic network instances is not supported.

Classic network offline, does not support the creation of classic network instances!

400

InvalidOrder.NotFound

Specified order does not exist in RDS.

The specified order does not exist in RDS.

400

InvalidVSwitchId.Format

The specified vswitch Id format is incorrect.

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

RegionDissolvedEOM

Dear customer, Alibaba Cloud plans to optimize and adjust the current region. Cloud services in this region will cease operations. You are currently unable to operate new purchase orders. Thank you for your understanding and support.

Hello, Alibaba Cloud plans to optimize and adjust the current region. Cloud services in this region will stop operating. In order to ensure your business continuity and smooth transition of data migration, you are currently unable to operate new purchase orders. Thank you for your understanding and support.

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

InvalidParam

Sepcified wal level Parameter is invalid. There are still logical slots in instance, so it can not be set as replica.

The specified wal\_level parameter is invalid. There is still a copy slot in the instance, so it cannot be set to replica.

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

IncorrectTargetCategory

Current target category does not support this operation.

Current target category does not support this operation.

400

PurchaseDurationInsufficient

The purchase duration does not meet the requirements, please choose again.

The purchase duration does not meet the requirements, please select again.

401

CannotDecreaseEssdPerfLevel

cannot decrease cloud essd performance level.

The storage type change failed the verification check. The storage type of an RDS instance that runs SQL Server with standard SSDs or ESSDs cannot be changed to local SSDs.

403

RISK.RISK\_CONTROL\_REJECTION

Risk control rejection.

\-

403

AliCroup2CloudUserCannotBuyNotInnerCommodity

There is no group cloud commodity label, and users within the group are not allowed to purchase.

\-

403

GroupReplicationNotSupport.InvalidEngineVersion

Group Replication requires the instance engine version to be 8.0.

\-

403

GroupReplicationNotSupport.InvalidNodeClassCode

Group Replication requires the ClassCode of each node to be consistent.

\-

403

GroupReplicationNotSupport.InvalidNodeNum

Group Replication is not supported, the number of nodes must be an odd number greater than or equal to 3.

\-

403

GroupReplicationNotSupport.InvalidXengine

Group Replication is not supported because the instance has xengine tables.

\-

403

GroupReplicationNotSupport.MemoryTooSmall

Group Replication is not supported because the memory is too small.

\-

403

IncorrectMinorVersion

Current engine minor version does not support operations.

This operation is not supported for the current minor engine version.

403

CloudDiskEncryptionNotSupport

The encryption key is not allowed for general-purpose instance.

Universal instances do not support cloud disk encryption.

403

CloudSSDNotSupport

Cloud ssd does not support this operation, please upgrade to essd.

\-

403

InvalidVswitchId

Specified conn vswitch id is not valid.

\-

403

BasicCategoryNotSupport

The Basic category is not supported.

Basic series not supported

403

OrderStatus.UnPaid

The specified db instance has unpaid order.

The instance has an unpaid order. Please pay first and try again.

403

InvalidReduceDiskSize

The storage capacity after the scale-down must be larger than the used amount.

The scale-in target capacity cannot be less than the current storage space usage

403

InvalidUserOperatorPermission

The user permission does not support this operation.

The user is not authorized to perform this operation.

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

403

IncorrectCharacterType

Current DB instance character type does not support this operation.

This operation is not supported for the character type of the instance.

404

InsufficientResourceCapacity

The target availability zone does not have sufficient resources.

The target Availability Zone does not have enough resources.

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

2025-03-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2025-03-31#workbench-doc-change-demo)

2025-01-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2025-01-02#workbench-doc-change-demo)

2024-12-03

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-12-03#workbench-doc-change-demo)

2024-11-19

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-11-19#workbench-doc-change-demo)

2024-10-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-10-31#workbench-doc-change-demo)

2024-10-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-10-24#workbench-doc-change-demo)

2024-09-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-09-24#workbench-doc-change-demo)

2024-08-29

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-08-29#workbench-doc-change-demo)

2024-08-27

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-08-27#workbench-doc-change-demo)

2024-08-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-08-14#workbench-doc-change-demo)

2024-07-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-07-25#workbench-doc-change-demo)

2024-07-23

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-07-23#workbench-doc-change-demo)

2024-07-05

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-07-05#workbench-doc-change-demo)

2024-06-03

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-06-03#workbench-doc-change-demo)

2024-05-24

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-05-24#workbench-doc-change-demo)

2024-05-22

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-05-22#workbench-doc-change-demo)

2024-05-16

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-05-16#workbench-doc-change-demo)

2024-05-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-05-14#workbench-doc-change-demo)

2024-05-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-05-14#workbench-doc-change-demo)

2024-05-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CreateDBInstance?updateTime=2024-05-14#workbench-doc-change-demo)
