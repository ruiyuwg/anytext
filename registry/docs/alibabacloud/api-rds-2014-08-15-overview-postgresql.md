## API standard and pre-built SDKs in multi-language

This product (`Rds/2014-08-15`) OpenAPI adopts an RPC\-style signature mechanism. For implementation details, please refer to the [Signature Mechanism documentation](/help/en/sdk/product-overview/v3-request-structure-and-signature).

To streamline development, we provide official SDKs for major programming languages. [Using the SDK](https://api.alibabacloud.com/api-tools/sdk/Rds?version=2014-08-15) allows you to call APIs directly without worrying about low-level details such as request signatures, significantly lowering the barrier to entry and reducing integration complexity.

## Custom signature

If your use case requires direct API integration with custom signatures, consult our technical support team first. Join our DingTalk support group (147535001692) to receive expert guidance.

## Before you begin

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. To call APIs securely, create a [Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API access only, configure its AccessKey pairs, and implement the principle of least privilege (PoLP) through RAM policies. Use the Alibaba Cloud account only when its permissions are explicitly required for specific scenarios.

## Billing

API

Title

Description

[TransformDBInstancePayType](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-transformdbinstancepaytype-postgresql)

TransformDBInstancePayType

Changes the billing method of an ApsaraDB RDS instance.

[ModifyDBInstancePayType](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancepaytype-postgresql)

ModifyDBInstancePayType

Changes the billing method of an instance from pay-as-you-go to subscription.

[ModifyInstanceAutoRenewalAttribute](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyinstanceautorenewalattribute-postgresql)

ModifyInstanceAutoRenewalAttribute

Modifies the auto-renewal settings of an instance.

[DescribePrice](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeprice-postgresql)

DescribePrice

Queries the price of an instance.

[DescribeRenewalPrice](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describerenewalprice-postgresql)

DescribeRenewalPrice

Queries the renewal fees for a subscription instance.

[DescribeInstanceAutoRenewalAttribute](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeinstanceautorenewalattribute-postgresql)

DescribeInstanceAutoRenewalAttribute

Queries the automatic renewal status of an instance.

[RenewInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-renewinstance-postgresql)

RenewInstance

Manually renews an instance.

[DescribeDBInstancePromoteActivity](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancepromoteactivity-postgresql)

DescribeDBInstancePromoteActivity

The operation is phased out.

## Instance management

API

Title

Description

[CreateDBInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createdbinstance-postgresql)

CreateDBInstance

Creates an instance.

[CreateDBInstanceForRebuild](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createdbinstanceforrebuild-postgresql)

CreateDBInstanceForRebuild

Rebuilds an instance from the recycle bin.

[DeleteDBInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deletedbinstance-postgresql)

DeleteDBInstance

Releases an instance.

[RestartDBInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-restartdbinstance-postgresql)

RestartDBInstance

Restarts an instance.

[StopDBInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-stopdbinstance-postgresql)

StopDBInstance

Suspends an ApsaraDB RDS instance.

[StartDBInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-startdbinstance-postgresql)

StartDBInstance

Resumes an instance.

[ModifyDBInstanceSpec](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancespec-postgresql)

ModifyDBInstanceSpec

Changes the instance type and storage capacity of an ApsaraDB RDS instance.

[DestroyDBInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-destroydbinstance-postgresql)

DestroyDBInstance

You can call the DestroyDBInstance operation to destroy an instance. The instance is in the Locked state.

[ModifyDasInstanceConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydasinstanceconfig-postgresql)

ModifyDasInstanceConfig

Configures automatic storage expansion for an instance.

[MigrateToOtherZone](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-migratetootherzone-postgresql)

MigrateToOtherZone

Migrates an instance across zones in the same region.

[ModifyDBInstanceDescription](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancedescription-postgresql)

Modify the name of an instance

You can call the ModifyDBInstanceDescription operation to modify the name of an instance.

[ModifyDBInstanceMaintainTime](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancemaintaintime-postgresql)

ModifyDBInstanceMaintainTime

Modifies the maintenance window of an instance.

[ModifyResourceGroup](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyresourcegroup-postgresql)

ModifyResourceGroup

Moves an ApsaraDB RDS instance to a specified resource group.

[ModifyHADiagnoseConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyhadiagnoseconfig-postgresql)

ModifyHADiagnoseConfig

Change the availability check method of an instance.

[ModifyAccountSecurityPolicy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyaccountsecuritypolicy-postgresql)

ModifyAccountSecurityPolicy

Modifies the password policy for an account of an ApsaraDB RDS for SQL Server instance.

[DescribeSupportOnlineResizeDisk](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describesupportonlineresizedisk-postgresql)

DescribeSupportOnlineResizeDisk

Checks whether the disk of an ApsaraDB RDS for SQL Server instance can be resized online.

[DescribeAvailableZones](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeavailablezones-postgresql)

DescribeAvailableZones

Queries the available zones for an instance.

[DescribeAvailableClasses](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeavailableclasses-postgresql)

DescribeAvailableClasses

Queries the specifications that are supported for an instance. The specifications include the instance type and the storage capacity.

[DescribeDBInstanceAttribute](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstanceattribute-postgresql)

DescribeDBInstanceAttribute

Queries the details of an instance.

[GetDBInstanceTopology](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-getdbinstancetopology-postgresql)

GetDBInstanceTopology

Queries the topology of an instance.

[DescribeDBInstances](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstances-postgresql)

DescribeDBInstances

Queries instances.

[ListClasses](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-listclasses-postgresql)

ListClasses

Queries the specification details of an instance.

[DescribeDBInstancesByExpireTime](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancesbyexpiretime-postgresql)

DescribeDBInstancesByExpireTime

Queries the information about an ApsaraDB RDS instance based on the remaining subscription duration of an instance.

[DescribeRegions](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeregions-postgresql)

DescribeRegions

Queries the details of all regions and zones for ApsaraDB RDS. The regions that are no longer supported are also queried. Exercise caution when you call this operation.

[CheckInstanceExist](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-checkinstanceexist-postgresql)

Query whether an instance exists

You can call the CheckInstanceExist operation to query whether an ApsaraDB RDS instance exists.

[DescribeHADiagnoseConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describehadiagnoseconfig-postgresql)

DescribeHADiagnoseConfig

Queries the availability check method of an instance.

[CheckCloudResourceAuthorized](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-checkcloudresourceauthorized-postgresql)

CheckCloudResourceAuthorized

Checks permissions that are granted on an instance.

[ReleaseInstanceConnection](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-releaseinstanceconnection-postgresql)

ReleaseInstanceConnection

Releases the public endpoint of an instance.

[DescribeDBInstanceDetail](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancedetail-postgresql)

Query the details of an instance

You can call the DescribeDBInstanceDetail operation to query the details of an instance.

[DescribeDBInstancesByPerformance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancesbyperformance-postgresql)

Query instances base on performance

You can call the DescribeDBInstancePerformance operation to query the performance of instances.

[DescribeDBInstancesForClone](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancesforclone-postgresql)

DescribeDBInstancesForClone

Queries a list of instances.

[DescribeDBInstancesAsCsv](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancesascsv-postgresql)

DescribeDBInstancesAsCsv

Queries the instances.

## Version upgrade

API

Title

Description

[ModifyDBInstanceAutoUpgradeMinorVersion](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstanceautoupgrademinorversion-postgresql)

ModifyDBInstanceAutoUpgradeMinorVersion

Changes the method that is used to update the minor engine version of an ApsaraDB RDS for MySQL instance or an ApsaraDB RDS for PostgreSQL instance.

[DescribeUpgradeMajorVersionPrecheckTask](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeupgrademajorversionprechecktask-postgresql)

DescribeUpgradeMajorVersionPrecheckTask

Queries the check report for a major engine version upgrade of an ApsaraDB RDS for MySQL instance or ApsaraDB RDS for PostgreSQL instance.

[DescribeUpgradeMajorVersionTasks](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeupgrademajorversiontasks-postgresql)

DescribeUpgradeMajorVersionTasks

Queries the historical tasks for major engine version upgrades of an ApsaraDB RDS for PostgreSQL instance.

[UpgradeDBInstanceEngineVersion](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-upgradedbinstanceengineversion-postgresql)

UpgradeDBInstanceEngineVersion

Upgrades the major engine version of an ApsaraDB RDS for MySQL instance.

[UpgradeDBInstanceKernelVersion](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-upgradedbinstancekernelversion-postgresql)

UpgradeDBInstanceKernelVersion

Updates the minor engine version of an ApsaraDB RDS instance.

[UpgradeDBInstanceMajorVersionPrecheck](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-upgradedbinstancemajorversionprecheck-postgresql)

UpgradeDBInstanceMajorVersionPrecheck

Performs a precheck before the upgrade of the major engine version of an ApsaraDB RDS for PostgreSQL instance.

[UpgradeDBInstanceMajorVersion](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-upgradedbinstancemajorversion-postgresql)

UpgradeDBInstanceMajorVersion

Initiates a task to upgrade the major engine version of an ApsaraDB RDS for PostgreSQL instance.

## Network and Connection

API

Title

Description

[AllocateInstancePublicConnection](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-allocateinstancepublicconnection-postgresql)

AllocateInstancePublicConnection

Apply for a public endpoint for an ApsaraDB RDS instance

[ReleaseInstancePublicConnection](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-releaseinstancepublicconnection-postgresql)

ReleaseInstancePublicConnection

Releases the public endpoint of an instance.

[ModifyDBInstanceConnectionString](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstanceconnectionstring-postgresql)

ModifyDBInstanceConnectionString

Modifies the endpoint and port of an instance.

[ModifyDBInstanceNetworkExpireTime](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancenetworkexpiretime-postgresql)

ModifyDBInstanceNetworkExpireTime

Changes the expiration time of the classic network endpoint of an instance in hybrid access mode.

[SwitchDBInstanceNetType](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-switchdbinstancenettype-postgresql)

SwitchDBInstanceNetType

Switches between internal and public endpoints of an instance in the classic network.

[ModifyDBInstanceNetworkType](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancenetworktype-postgresql)

ModifyDBInstanceNetworkType

Changes the network type of an ApsaraDB RDS instance from classic network to VPC

[SwitchDBInstanceVpc](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-switchdbinstancevpc-postgresql)

SwitchDBInstanceVpc

Changes the virtual private cloud (VPC) and vSwitch for an ApsaraDB RDS instance.

[ModifyDBInstanceConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstanceconfig-postgresql)

ModifyDBInstanceConfig

Modifies the configuration item of an instance.

[DescribeDBInstanceNetInfo](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancenetinfo-postgresql)

DescribeDBInstanceNetInfo

Queries all endpoints of an instance.

[DescribeVSwitches](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describevswitches-postgresql)

DescribeVSwitches

Queries the details of vSwitch that are available in a virtual private cloud (VPC).

## Primary/Secondary High Availability and Data Replication

API

Title

Description

[ModifyDBInstanceHAConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancehaconfig-postgresql)

ModifyDBInstanceHAConfig

Changes the high availability (HA) and data replication mode of an instance.

[ModifyHASwitchConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyhaswitchconfig-postgresql)

ModifyHASwitchConfig

Enables or disables the automatic primary/secondary switchover feature for an instance.

[DescribeDBInstanceHAConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancehaconfig-postgresql)

DescribeDBInstanceHAConfig

Queries the high availability mode and data replication mode of an instance.

[DescribeHASwitchConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describehaswitchconfig-postgresql)

DescribeHASwitchConfig

Queries the settings of the automatic primary/secondary switchover feature for an instance.

[SwitchDBInstanceHA](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-switchdbinstanceha-postgresql)

SwitchDBInstanceHA

Switches workloads between primary and secondary ApsaraDB RDS instances.

## Event History

API

Title

Description

[ModifyActionEventPolicy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyactioneventpolicy-postgresql)

ModifyActionEventPolicy

Enables or disables the event history feature of an instance.

[DescribeEvents](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeevents-postgresql)

DescribeEvents

Queries historical events of an instance.

[DescribeActionEventPolicy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeactioneventpolicy-postgresql)

DescribeActionEventPolicy

Queries whether the historical events feature is enabled.

## Notification

API

Title

Description

[QueryNotify](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-querynotify-postgresql)

QueryNotify

Queries the notifications of an ApsaraDB RDS instance.

[ConfirmNotify](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-confirmnotify-postgresql)

ConfirmNotify

Marks the notifications of an instance within your Alibaba Cloud account as confirmed.

[DescribeRdsResourceSettings](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describerdsresourcesettings-postgresql)

DescribeRdsResourceSettings

Obtains the notification settings for instance resources. This operation can still be called but is no longer maintained.

## Account management

API

Title

Description

[CreateAccount](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createaccount-postgresql)

CreateAccount

Creates a database account.

[DeleteAccount](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deleteaccount-postgresql)

DeleteAccount

Deletes an account from an instance.

[ModifyAccountCheckPolicy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyaccountcheckpolicy-postgresql)

ModifyAccountCheckPolicy

Checks whether a password policy is applied to an account.

[ModifyAccountDescription](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyaccountdescription-postgresql)

ModifyAccountDescription

Modifies the description of a database account.

[ModifyPGHbaConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifypghbaconfig-postgresql)

ModifyPGHbaConfig

Modifies the pg\_hba.conf file of an ApsaraDB RDS for PostgreSQL instance.

[DescribeAccounts](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeaccounts-postgresql)

DescribeAccounts

Queries the details about the accounts that are created on an ApsaraDB RDS instance.

[DescribeInstanceKeywords](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeinstancekeywords-postgresql)

DescribeInstanceKeywords

Queries the reserved keywords of an instance. The reserved keywords cannot be used for the usernames of accounts or the names of databases.

[DescribePGHbaConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describepghbaconfig-postgresql)

DescribePGHbaConfig

Queries the configuration of the pg\_hba.conf file of an ApsaraDB RDS for PostgreSQL instance.

[DescribeModifyPGHbaConfigLog](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describemodifypghbaconfiglog-postgresql)

DescribeModifyPGHbaConfigLog

Queries the details about the modifications to the pg\_hba.conf file of an ApsaraDB RDS for PostgreSQL instance.

[ResetAccountPassword](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-resetaccountpassword-postgresql)

ResetAccountPassword

Resets the password of a database account.

[LockAccount](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-lockaccount-postgresql)

LockAccount

Locks an account of an ApsaraDB RDS for PostgreSQL instance.

[UnlockAccount](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-unlockaccount-postgresql)

UnlockAccount

Unlocks a database account of an ApsaraDB RDS for PostgreSQL instance.

[GrantAccountPrivilege](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-grantaccountprivilege-postgresql)

GrantAccountPrivilege

Grants an account the permissions on a database of an instance.

[GrantOperatorPermission](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-grantoperatorpermission-postgresql)

GrantOperatorPermission

Grant permissions to a service account.

[RevokeOperatorPermission](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-revokeoperatorpermission-postgresql)

RevokeOperatorPermission

Revokes permissions from the service account of an ApsaraDB RDS instance.

[RevokeAccountPrivilege](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-revokeaccountprivilege-postgresql)

RevokeAccountPrivilege

Removes the permissions on a database of an ApsaraDB RDS instance from an account.

[ResetAccount](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-resetaccount-postgresql)

ResetAccount

Resets the permissions of the privileged account.

[CheckAccountNameAvailable](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-checkaccountnameavailable-postgresql)

CheckAccountNameAvailable

Checks whether the username of the account that you want to create on an instance is available.

## Database management

API

Title

Description

[CreateDatabase](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createdatabase-postgresql)

CreateDatabase

Creates a database in an ApsaraDB RDS instance.

[DeleteDatabase](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deletedatabase-postgresql)

DeleteDatabase

Deletes a database from an RDS instance.

[CopyDatabase](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-copydatabase-postgresql)

CopyDatabase

Replicates the databases of an instance that runs SQL Server 2008 R2 to another instance. This operation is phased out.

[ModifyDBDescription](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbdescription-postgresql)

ModifyDBDescription

Modifies the description of an instance.

[ModifyDatabaseConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydatabaseconfig-postgresql)

ModifyDatabaseConfig

Modifies the property settings of an ApsaraDB RDS for SQL Server instance.

[ModifyCollationTimeZone](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifycollationtimezone-postgresql)

ModifyCollationTimeZone

Modifies the character set collation and time zone of system databases on an instance.

[DescribeDatabases](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedatabases-postgresql)

DescribeDatabases

Queries the details about the databases on an instance.

[DescribeCollationTimeZones](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describecollationtimezones-postgresql)

DescribeCollationTimeZones

Queries the character set collations and time zones that are available for use in ApsaraDB RDS for SQL Server.

[DescribeCharacterSetName](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describecharactersetname-postgresql)

DescribeCharacterSetName

Queries the character sets that are supported by an instance.

[CopyDatabaseBetweenInstances](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-copydatabasebetweeninstances-postgresql)

CopyDatabaseBetweenInstances

Replicates databases between RDS SQL Server instances.

[CheckDBNameAvailable](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-checkdbnameavailable-postgresql)

CheckDBNameAvailable

Checks whether a database name is unique and conforms to the naming conventions on an instance.

## Read-Only Instances

API

Title

Description

[CreateReadOnlyDBInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createreadonlydbinstance-postgresql)

CreateReadOnlyDBInstance

Creates a read-only instance.

[ModifyReadonlyInstanceDelayReplicationTime](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyreadonlyinstancedelayreplicationtime-postgresql)

ModifyReadonlyInstanceDelayReplicationTime

Modifies the latency at which a read-only ApsaraDB RDS for MySQL instance replicates data from its primary instance.

[DescribeReadDBInstanceDelay](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describereaddbinstancedelay-postgresql)

DescribeReadDBInstanceDelay

Queries the latency of data replication between a primary instance and its read-only instance.

[PrecheckDuckDBDependency](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-precheckduckdbdependency-postgresql)

PrecheckDuckDBDependency

Checks whether DuckDB-based analytical instances can be created for the specified RDS for PostgreSQL primary instance. If DuckDB-based analytical instances cannot be created, this operation returns the failure causes and provides solutions or recommended specification values.

## RDS Cluster Edition

API

Title

Description

[CreateDBNodes](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createdbnodes-postgresql)

CreateDBNodes

Adds a node to an ApsaraDB RDS for MySQL or ApsaraDB RDS for PostgreSQL instance that runs RDS Cluster Edition. An RDS instance that runs RDS Cluster Edition is referred to as an RDS cluster.

[CreateDBInstanceEndpoint](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createdbinstanceendpoint-postgresql)

CreateDBInstanceEndpoint

Creates an endpoint for an instance that runs RDS Cluster Edition.

[CreateDBInstanceEndpointAddress](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createdbinstanceendpointaddress-postgresql)

CreateDBInstanceEndpointAddress

Creates a public endpoint for an instance that runs RDS Cluster Edition.

[DeleteDBNodes](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deletedbnodes-postgresql)

DeleteDBNodes

Deletes a node from an instance that runs RDS Cluster Edition.

[DeleteDBInstanceEndpoint](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deletedbinstanceendpoint-postgresql)

DeleteDBInstanceEndpoint

Deletes an endpoint for an instance that runs RDS Cluster Edition.

[DeleteDBInstanceEndpointAddress](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deletedbinstanceendpointaddress-postgresql)

DeleteDBInstanceEndpointAddress

Releases the public endpoint of an instance that runs RDS Cluster Edition.

[ModifyDBInstanceEndpoint](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstanceendpoint-postgresql)

ModifyDBInstanceEndpoint

Modifies the weight of an endpoint for an instance that runs RDS Cluster Edition.

[ModifyDBInstanceEndpointAddress](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstanceendpointaddress-postgresql)

ModifyDBInstanceEndpointAddress

Modifies the information about the endpoint of an instance that runs RDS Cluster Edition.

[DescribeDBInstanceEndpoints](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstanceendpoints-postgresql)

DescribeDBInstanceEndpoints

Queries the information about the endpoints of an instance that runs RDS Cluster Edition.

## Dedicated proxy

API

Title

Description

[CreateDBProxyEndpointAddress](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createdbproxyendpointaddress-postgresql)

CreateDBProxyEndpointAddress

Creates the endpoint that is used to connect to the dedicated proxy of an instance.

[DeleteDBProxyEndpointAddress](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deletedbproxyendpointaddress-postgresql)

DeleteDBProxyEndpointAddress

Deletes the endpoint that is used to connect to the dedicated proxy of an instance.

[ModifyDBProxy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbproxy-postgresql)

ModifyDBProxy

Enables or modifies the database proxy feature for an instance.

[UpgradeDBProxyInstanceKernelVersion](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-upgradedbproxyinstancekernelversion-postgresql)

UpgradeDBProxyInstanceKernelVersion

Upgrades the database proxy version of an instance.

[ModifyDBProxyInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbproxyinstance-postgresql)

ModifyDBProxyInstance

Changes the configuration of a database proxy for an instance.

[ModifyDBProxyEndpoint](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbproxyendpoint-postgresql)

ModifyDBProxyEndpoint

Modifies the connection settings for a database proxy endpoint.

[ModifyDBProxyEndpointAddress](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbproxyendpointaddress-postgresql)

ModifyDBProxyEndpointAddress

Modifies the database proxy endpoint of an instance.

[ModifyDbProxyInstanceSsl](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbproxyinstancessl-postgresql)

ModifyDbProxyInstanceSsl

Configures SSL encryption for an dedicated proxy endpoint of an ApsaraDB RDS for MySQL instance.

[DescribeDBProxy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbproxy-postgresql)

DescribeDBProxy

Queries the settings of the database proxy feature for an instance.

[DescribeDBProxyEndpoint](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbproxyendpoint-postgresql)

DescribeDBProxyEndpoint

Queries the information about the database proxy endpoints of an instance.

[DescribeDBProxyPerformance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbproxyperformance-postgresql)

DescribeDBProxyPerformance

Queries the performance data of the database proxy for an instance.

[GetDbProxyInstanceSsl](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-getdbproxyinstancessl-postgresql)

GetDbProxyInstanceSsl

Queries the SSL encryption settings for a dedicated proxy endpoint of an ApsaraDB RDS for MySQL instance.

## Shared proxy (phased-out)

API

Title

Description

[ModifyReadWriteSplittingConnection](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyreadwritesplittingconnection-postgresql)

ModifyReadWriteSplittingConnection

Modifies the latency threshold of the read/write splitting link and the read weights of a primary instance and its read-only instances.

[DescribeDBInstanceProxyConfiguration](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstanceproxyconfiguration-postgresql)

DescribeDBInstanceProxyConfiguration

Queries the settings of shared proxies that are enabled on an instance.

[AllocateReadWriteSplittingConnection](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-allocatereadwritesplittingconnection-postgresql)

AllocateReadWriteSplittingConnection

Applies for a read-only routing endpoint for an instance.

[ReleaseReadWriteSplittingConnection](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-releasereadwritesplittingconnection-postgresql)

ReleaseReadWriteSplittingConnection

Releases the read/write splitting endpoint of an instance.

[CalculateDBInstanceWeight](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-calculatedbinstanceweight-postgresql)

CalculateDBInstanceWeight

Queries system-assigned read weights.

## Security management

API

Title

Description

[AttachWhitelistTemplateToInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-attachwhitelisttemplatetoinstance-postgresql)

AttachWhitelistTemplateToInstance

Associates a whitelist template with an instance.

[CreateServiceLinkedRole](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createservicelinkedrole-postgresql)

CreateServiceLinkedRole

Creates a service-linked role.

[DetachWhitelistTemplateToInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-detachwhitelisttemplatetoinstance-postgresql)

DetachWhitelistTemplateToInstance

Disassociates a whitelist template from an instance.

[ModifyWhitelistTemplate](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifywhitelisttemplate-postgresql)

ModifyWhitelistTemplate

Edits a whitelist. You can call this operation to create, modify, or delete a whitelist.

[DescribeSecurityGroupConfiguration](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describesecuritygroupconfiguration-postgresql)

DescribeSecurityGroupConfiguration

Queries ECS security groups to which an instance is added.

[ModifySecurityGroupConfiguration](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifysecuritygroupconfiguration-postgresql)

ModifySecurityGroupConfiguration

Changes the ECS security groups to which an instance is added.

[CreateDBInstanceSecurityGroupRule](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createdbinstancesecuritygrouprule-postgresql)

CreateDBInstanceSecurityGroupRule

Adds a security group rule to an ApsaraDB RDS for SQL Server instance.

[DescribeDBInstanceSecurityGroupRule](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancesecuritygrouprule-postgresql)

DescribeDBInstanceSecurityGroupRule

Queries the security group rules that are configured for an ApsaraDB RDS for SQL Server instance.

[ModifyDBInstanceSecurityGroupRule](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancesecuritygrouprule-postgresql)

ModifyDBInstanceSecurityGroupRule

Modifies a security group rule that is configured for an ApsaraDB RDS for SQL Server instance.

[DeleteDBInstanceSecurityGroupRule](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deletedbinstancesecuritygrouprule-postgresql)

DeleteDBInstanceSecurityGroupRule

Deletes a security group rule that is configured for an ApsaraDB RDS for SQL Server instance.

[ModifySecurityIps](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifysecurityips-postgresql)

ModifySecurityIps

Modifies the IP address whitelist of an ApsaraDB RDS instance.

[ModifyDBInstanceSSL](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancessl-postgresql)

ModifyDBInstanceSSL

Modifies the SSL encryption settings of an instance.

[ModifyDBInstanceTDE](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancetde-postgresql)

ModifyDBInstanceTDE

Enables the Transparent Data Encryption (TDE) feature for an ApsaraDB RDS instance and modifies the TDE status for the instance.

[ModifyDTCSecurityIpHostsForSQLServer](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydtcsecurityiphostsforsqlserver-postgresql)

ModifyDTCSecurityIpHostsForSQLServer

Configures a distributed transaction whitelist for an ApsaraDB RDS for SQL Server instance.

[ModifyDBInstanceDeletionProtection](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancedeletionprotection-postgresql)

ModifyDBInstanceDeletionProtection

Enable or disable the release protection feature for an instance.

[DescribeWhitelistTemplateLinkedInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describewhitelisttemplatelinkedinstance-postgresql)

DescribeWhitelistTemplateLinkedInstance

Queries associated instances by whitelist template.

[DescribeInstanceLinkedWhitelistTemplate](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeinstancelinkedwhitelisttemplate-postgresql)

DescribeInstanceLinkedWhitelistTemplate

Queries associated whitelists by instance name.

[DescribeWhitelistTemplate](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describewhitelisttemplate-postgresql)

DescribeWhitelistTemplate

Queries information about the specified IP whitelist.

[DescribeAllWhitelistTemplate](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeallwhitelisttemplate-postgresql)

DescribeAllWhitelistTemplate

Queries whitelist templates at a time by using fuzzy search.

[DescribeDBInstanceIPArrayList](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstanceiparraylist-postgresql)

DescribeDBInstanceIPArrayList

Queries the IP address whitelist of an ApsaraDB RDS instance.

[DescribeDBInstanceSSL](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancessl-postgresql)

DescribeDBInstanceSSL

Queries the SSL configurations of an instance.

[DescribeDBInstanceTDE](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancetde-postgresql)

DescribeDBInstanceTDE

Queries the status of the Transparent Data Encryption (TDE) feature for an instance.

[DescribeDBInstanceEncryptionKey](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstanceencryptionkey-postgresql)

DescribeDBInstanceEncryptionKey

You can call the DescribeDBInstanceEncryptionKey operation to check whether disk encryption is enabled for an instance. You can also query details about the keys that are used for disk encryption. This operation is supported for instances that run MySQL, SQL Server, or PostgreSQL.

[DescribeDBInstanceIpHostname](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstanceiphostname-postgresql)

DescribeDBInstanceIpHostname

Queries the internal IP address and hostname of the Elastic Compute Service (ECS) instance on which the ApsaraDB RDS for SQL Server instance runs.

[DescribeDTCSecurityIpHostsForSQLServer](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedtcsecurityiphostsforsqlserver-postgresql)

DescribeDTCSecurityIpHostsForSQLServer

Queries the distributed transaction whitelists of an ApsaraDB RDS for SQL Server instance.

[MigrateSecurityIPMode](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-migratesecurityipmode-postgresql)

MigrateSecurityIPMode

Changes the whitelist mode of an instance from the standard whitelist mode to the enhanced whitelist mode.

## Log management

API

Title

Description

[DescribeSQLLogReportList](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describesqllogreportlist-postgresql)

DescribeSQLLogReportList

Queries SQL log reports.

[PurgeDBInstanceLog](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-purgedbinstancelog-postgresql)

PurgeDBInstanceLog

Clears the on-premises logs of an ApsaraDB RDS instance.

[DescribeSQLLogFiles](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describesqllogfiles-postgresql)

DescribeSQLLogFiles

Queries the log files that are generated by the SQL Explorer (SQL Audit) feature for an instance. The DescribeSQLLogFiles operation does not return the log files that are generated by the SQL Explorer feature and manually exported from the ApsaraDB RDS console. The DescribeSQLLogFiles operation returns the SQL Explorer log files that are generated by calling the DescribeSQLLogRecords operation with the request parameter Form set to File.

[DescribeSlowLogs](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeslowlogs-postgresql)

DescribeSlowLogs

Queries the statistics on slow query logs.

[DescribeSlowLogRecords](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeslowlogrecords-postgresql)

DescribeSlowLogRecords

Queries the slow log details of an instance.

[DescribeErrorLogs](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeerrorlogs-postgresql)

DescribeErrorLogs

Queries the error logs of an instance over a specific time range.

[ModifySQLCollectorPolicy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifysqlcollectorpolicy-postgresql)

ModifySQLCollectorPolicy

This operation can still be called but is no longer maintained. This operation enables or disables the SQL Explorer (SQL Audit) feature for an instance.

[ModifySQLCollectorRetention](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifysqlcollectorretention-postgresql)

ModifySQLCollectorRetention

Changes the retention period of the log files that are generated by the SQL Explorer feature for an ApsaraDB RDS instance.

[DescribeSQLCollectorPolicy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describesqlcollectorpolicy-postgresql)

DescribeSQLCollectorPolicy

Queries the status of the SQL Explorer (SQL Audit) feature for an ApsaraDB RDS instance.

[DescribeSQLLogRecords](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describesqllogrecords-postgresql)

DescribeSQLLogRecords

Queries the logs that are generated by the SQL Explorer (SQL Audit) feature for an instance.

[DescribeSQLCollectorRetention](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describesqlcollectorretention-postgresql)

DescribeSQLCollectorRetention

Queries the retention period of the log files that are generated by the SQL Explorer feature for an instance.

## Backup and recovery

API

Title

Description

[CreateBackup](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createbackup-postgresql)

CreateBackup

Creates a backup file for an instance.

[DeleteBackup](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deletebackup-postgresql)

DeleteBackup

Deletes the data backup files of an ApsaraDB RDS instance.

[DeleteBackupFile](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deletebackupfile-postgresql)

DeleteBackupFile

Deletes the backup files of an ApsaraDB RDS for SQL Server instance. This operation is available only for users that have been added to the whitelist of the instance.

[ModifyBackupPolicy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifybackuppolicy-postgresql)

ModifyBackupPolicy

Modifies the backup policy settings of an instance.

[DescribeBackups](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describebackups-postgresql)

DescribeBackups

Queries the data backup files of an ApsaraDB RDS instance.

[DescribeDetachedBackups](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedetachedbackups-postgresql)

DescribeDetachedBackups

Queries the data backup files of an ApsaraDB RDS instance that is released.

[DescribeBackupPolicy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describebackuppolicy-postgresql)

DescribeBackupPolicy

Queries the backup settings of an instance.

[DescribeBackupTasks](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describebackuptasks-postgresql)

DescribeBackupTasks

Queries the backup tasks of an instance.

[DescribeBinlogFiles](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describebinlogfiles-postgresql)

DescribeBinlogFiles

Queries the binary log files of an instance that runs MySQL or MariaDB or the write-ahead logging (WAL) files of an instance that runs PostgreSQL.

[DescribeLogBackupFiles](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describelogbackupfiles-postgresql)

DescribeLogBackupFiles

Queries the log backup files of an ApsaraDB RDS for SQL Server instance.

[DescribeBackupDatabase](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describebackupdatabase-postgresql)

DescribeBackupDatabase

Queries the databases that are involved in a backup file.

## Restoration

API

Title

Description

[CreateTempDBInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createtempdbinstance-postgresql)

CreateTempDBInstance

Creates a temporary instance for an RDS instance that runs SQL Server 2008 R2 and uses local disks.

[DescribeLocalAvailableRecoveryTime](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describelocalavailablerecoverytime-postgresql)

DescribeLocalAvailableRecoveryTime

Queries the time range to which an RDS instance can be restored.

[DescribeMetaList](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describemetalist-postgresql)

DescribeMetaList

Queries the information about the databases and tables that can be restored from a specified backup set.

[RecoveryDBInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-recoverydbinstance-postgresql)

RecoveryDBInstance

Restores backup data of an ApsaraDB RDS for SQL Server instance to an existing instance or a new instance.

[CloneDBInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-clonedbinstance-postgresql)

CloneDBInstance

Restores the data of an original instance to a new instance. The new instance is called a cloned instance.

[RestoreTable](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-restoretable-postgresql)

RestoreTable

Restores individual databases or tables of an instance to the original instance.

## Cross-region backup and restoration

API

Title

Description

[CreateDdrInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createddrinstance-postgresql)

CreateDdrInstance

Restores data to a new instance across regions.

[ModifyInstanceCrossBackupPolicy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyinstancecrossbackuppolicy-postgresql)

ModifyInstanceCrossBackupPolicy

Modifies the cross-region backup settings of an instance.

[DescribeInstanceCrossBackupPolicy](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeinstancecrossbackuppolicy-postgresql)

DescribeInstanceCrossBackupPolicy

Queries the cross-region backup settings of an instance.

[DescribeCrossBackupMetaList](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describecrossbackupmetalist-postgresql)

DescribeCrossBackupMetaList

Queries the databases and tables whose data is included in a cross-region backup file of an instance.

[DescribeCrossRegionBackups](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describecrossregionbackups-postgresql)

DescribeCrossRegionBackups

Queries the cross-region data backup files of an instance.

[DescribeCrossRegionLogBackupFiles](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describecrossregionlogbackupfiles-postgresql)

DescribeCrossRegionLogBackupFiles

Queries the cross-region log backup files of an instance.

[DescribeAvailableCrossRegion](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeavailablecrossregion-postgresql)

DescribeAvailableCrossRegion

Queries the available destination regions to which the cross-region backup files from a specific source region can be replicated.

[DescribeAvailableRecoveryTime](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeavailablerecoverytime-postgresql)

DescribeAvailableRecoveryTime

Queries the time range within which data can be restored from a cross-region backup file.

[DescribeCrossRegionBackupDBInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describecrossregionbackupdbinstance-postgresql)

DescribeCrossRegionBackupDBInstance

Queries the instances for which the cross-region backup feature is enabled in a region and the cross-region backup settings of these instances.

[CheckCreateDdrDBInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-checkcreateddrdbinstance-postgresql)

CheckCreateDdrDBInstance

Queries whether an instance can be restored by using a cross-region backup set.

[RestoreDdrTable](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-restoreddrtable-postgresql)

RestoreDdrTable

Restores data to an existing instance across regions.

## Monitoring management

API

Title

Description

[ModifyDBInstanceMonitor](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancemonitor-postgresql)

ModifyDBInstanceMonitor

Modifies a monitoring frequency.

[ModifyDBInstanceMetrics](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancemetrics-postgresql)

ModifyDBInstanceMetrics

Modifies the Enhanced Monitoring metrics that are displayed for an ApsaraDB RDS for PostgreSQL instance.

[DescribeResourceUsage](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeresourceusage-postgresql)

DescribeResourceUsage

Queries the storage usage of an instance.

[DescribeDBInstancePerformance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstanceperformance-postgresql)

DescribeDBInstancePerformance

Queries the performance metrics of an instance.

[DescribeDBInstanceMonitor](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancemonitor-postgresql)

DescribeDBInstanceMonitor

Queries the monitoring frequency of an instance.

[DescribeAvailableMetrics](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeavailablemetrics-postgresql)

DescribeAvailableMetrics

Queries all Enhanced Monitoring metrics that are supported by an ApsaraDB RDS for PostgreSQL instance.

[DescribeDBInstanceMetrics](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancemetrics-postgresql)

DescribeDBInstanceMetrics

Queries the Enhanced Monitoring metrics that are displayed for an ApsaraDB RDS for PostgreSQL instance.

## Parameter management

API

Title

Description

[CreateParameterGroup](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createparametergroup-postgresql)

CreateParameterGroup

Creates a parameter template for an instance.

[DeleteParameterGroup](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deleteparametergroup-postgresql)

DeleteParameterGroup

Deletes a parameter template from an instance.

[ModifyParameter](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyparameter-postgresql)

ModifyParameter

Modifies the parameter values of an instance.

[ModifyParameterGroup](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyparametergroup-postgresql)

ModifyParameterGroup

Modifies the parameter template of an instance.

[DescribeParameters](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeparameters-postgresql)

DescribeParameters

Queries the parameter settings of an instance.

[DescribeModifyParameterLog](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describemodifyparameterlog-postgresql)

DescribeModifyParameterLog

Queries the parameter modification logs of an instance.

[DescribeParameterTemplates](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeparametertemplates-postgresql)

DescribeParameterTemplates

Queries parameter templates.

[DescribeParameterGroups](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeparametergroups-postgresql)

DescribeParameterGroups

Queries the parameter templates that are available in a region.

[DescribeParameterGroup](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeparametergroup-postgresql)

DescribeParameterGroup

Queries the information about a parameter template.

[CloneParameterGroup](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-cloneparametergroup-postgresql)

CloneParameterGroup

Replicates a parameter template to the current region or another region.

## Data migration

API

Title

Description

[DescibeImportsFromDatabase](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-descibeimportsfromdatabase-postgresql)

DescibeImportsFromDatabase

Queries the migration tasks of an instance.

## Operation tasks

API

Title

Description

[ModifyActiveOperationTasks](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyactiveoperationtasks-postgresql)

ModifyActiveOperationTasks

Changes the switching time of scheduled O\\\\\\\\\\\\&M tasks for an instance.

[DescribeActiveOperationTasks](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeactiveoperationtasks-postgresql)

DescribeActiveOperationTasks

Queries the details about scheduled O\\\\\\\\\\\\\\\\\\\\&M tasks for an instance.

[CancelActiveOperationTasks](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-cancelactiveoperationtasks-postgresql)

CancelActiveOperationTasks

Cancels O\\\\\\&M tasks that are not started.

## Cloud migration to an ApsaraDB RDS for PostgreSQL instance

API

Title

Description

[CreateCloudMigrationPrecheckTask](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createcloudmigrationprechecktask-postgresql)

CreateCloudMigrationPrecheckTask

Creates an assessment task for cloud migration to an ApsaraDB RDS for PostgreSQL instance.

[CreateCloudMigrationTask](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createcloudmigrationtask-postgresql)

CreateCloudMigrationTask

Creates a cloud migration task for an ApsaraDB RDS for PostgreSQL instance.

[DescribeCloudMigrationPrecheckResult](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describecloudmigrationprecheckresult-postgresql)

DescribeCloudMigrationPrecheckResult

Query the details about the assessment report for cloud migration to an instance.

[DescribeCloudMigrationResult](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describecloudmigrationresult-postgresql)

DescribeCloudMigrationResult

Queries the details about the cloud migration task of an ApsaraDB RDS for PostgreSQL instance.

[ActivateMigrationTargetInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-activatemigrationtargetinstance-postgresql)

ActivateMigrationTargetInstance

Switches workloads over from the source PostgreSQL instance to the destination ApsaraDB RDS for PostgreSQL instance.

## Tag management

API

Title

Description

[TagResources](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-tagresources-postgresql)

TagResources

Creates and adds tags to one or more instances.

[AddTagsToResource](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-addtagstoresource-postgresql)

AddTagsToResource

Adds tags to an instance.

[UntagResources](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-untagresources-postgresql)

UntagResources

Removes tags from one or more instances.

[RemoveTagsFromResource](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-removetagsfromresource-postgresql)

RemoveTagsFromResource

Removes tags from an instance.

[ListTagResources](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-listtagresources-postgresql)

ListTagResources

Queries the tags that are added to one or more instances.

[DescribeTags](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describetags-postgresql)

DescribeTags

Queries tags of an instance.

[DescribeDBInstanceByTags](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancebytags-postgresql)

DescribeDBInstanceByTags

Queries information about the tags that are added to an instance.

## Extensions management

API

Title

Description

[CreatePostgresExtensions](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createpostgresextensions-postgresql)

CreatePostgresExtensions

Creates an extension for a database.

[DeletePostgresExtensions](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deletepostgresextensions-postgresql)

DeletePostgresExtensions

Deletes an extension from a database.

[UpdatePostgresExtensions](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-updatepostgresextensions-postgresql)

UpdatePostgresExtensions

Updates the version of an extension on a database.

[DescribePostgresExtensions](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describepostgresextensions-postgresql)

DescribePostgresExtensions

Queries extensions that are installed on a database.

## Manager Replication Solt on ApsaraDB RDS for PostgreSQL instance

API

Title

Description

[DeleteSlot](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deleteslot-postgresql)

DeleteSlot

Deletes a replication slot of an instance.

[DescribeSlots](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeslots-postgresql)

DescribeSlots

Queries all replication slots of an instance.

## Assured Serverless

API

Title

Description

[ModifyComputeBurstConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifycomputeburstconfig-postgresql)

ModifyComputeBurstConfig

Modifies the settings of assured serverless or disables assured serverless.

[DescribeComputeBurstConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describecomputeburstconfig-postgresql)

DescribeComputeBurstConfig

Queries the settings of assured serverless.

## Other APIs

API

Title

Description

User secrets

User secrets

[CreateSecret](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createsecret-postgresql)

CreateSecret

Creates a credential for a user who uses the Data API feature.

[DeleteSecret](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-deletesecret-postgresql)

DeleteSecret

Deletes the credential of a user who uses the Data API feature.

[DescribeSecrets](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describesecrets-postgresql)

DescribeSecrets

Queries the credential of a user who uses the Data API feature.

Dedicated cluster management

Dedicated cluster management

[DescribeDedicatedHostGroups](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describededicatedhostgroups-postgresql)

DescribeDedicatedHostGroups

Queries information about an ApsaraDB MyBase dedicated cluster.

[DescribeDedicatedHosts](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describededicatedhosts-postgresql)

DescribeDedicatedHosts

Queries the information about the hosts in a dedicated cluster.

[MigrateDBInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-migratedbinstance-postgresql)

MigrateDBInstance

Migrates an instance across hosts in a dedicated cluster.

[RebuildDBInstance](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-rebuilddbinstance-postgresql)

RebuildDBInstance

Rebuilds the secondary instance of a primary instance in a dedicated cluster.

[MigrateConnectionToOtherZone](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-migrateconnectiontootherzone-postgresql)

MigrateConnectionToOtherZone

Migrates an instance to a different zone.

[ModifyDBInstanceDelayedReplicationTime](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancedelayedreplicationtime-postgresql)

ModifyDBInstanceDelayedReplicationTime

Configures the replication latency for a read-only ApsaraDB RDS for MySQL instance.

[CheckServiceLinkedRole](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-checkservicelinkedrole-postgresql)

CheckServiceLinkedRole

Checks whether a service-linked role (SLR) is created.

[DescribeDBMiniEngineVersions](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbminiengineversions-postgresql)

DescribeDBMiniEngineVersions

Queries minor engine versions that are available for an ApsaraDB RDS for MySQL instance or an ApsaraDB RDS for PostgreSQL instance.

[DescribeRegionInfos](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeregioninfos-postgresql)

DescribeRegionInfos

Queries the regions.

[DescribeDBInstanceNetInfoForChannel](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancenetinfoforchannel-postgresql)

DescribeDBInstanceNetInfoForChannel

Queries all endpoints of an instance.

[DescribeHostWebShell](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describehostwebshell-postgresql)

DescribeHostWebShell

Queries the webshell URL that is used to connect to the host of an ApsaraDB RDS for SQL Server instance.

[DescribeClassDetails](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeclassdetails-postgresql)

DescribeClassDetails

Queries the details about the instance types of an instance by using the code of the instance types.

[DescribeKmsAssociateResources](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describekmsassociateresources-postgresql)

DescribeKmsAssociateResources

Checks whether the specified resource of Key Management Service (KMS) is associated with an ApsaraDB RDS instance.

[ModifyDBInstanceReplicationSwitch](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifydbinstancereplicationswitch-postgresql)

ModifyDBInstanceReplicationSwitch

Enables or disables the native replication feature of ApsaraDB RDS for MySQL.

[DescribeDBInstanceReplication](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstancereplication-postgresql)

DescribeDBInstanceReplication

Queries the status and configurations of a native replication instance.

[MigrateDBNodes](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-migratedbnodes-postgresql)

MigrateDBNodes

Changes the zone of a node from an ApsaraDB RDS for MySQL instance that runs RDS Cluster Edition.

[SwitchOverMajorVersionUpgrade](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-switchovermajorversionupgrade-postgresql)

SwitchOverMajorVersionUpgrade

Performs a zero-downtime workload switchover after the major engine version upgrade of an ApsaraDB RDS for PostgreSQL instance.

## Events and Tasks

API

Title

Description

[DescribeHistoryEventsStat](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describehistoryeventsstat-postgresql)

DescribeHistoryEventsStat

Queries the statistics of historical events in the event center.

[DescribeHistoryEvents](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describehistoryevents-postgresql)

DescribeHistoryEvents

Queries historical events in the event center.

[ModifyEventInfo](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifyeventinfo-postgresql)

ModifyEventInfo

Modifies information about the events in the event center.

[DescribeHistoryTasksStat](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describehistorytasksstat-postgresql)

DescribeHistoryTasksStat

Collects tasks in the task center.

[DescribeHistoryTasks](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describehistorytasks-postgresql)

DescribeHistoryTasks

Queries the historical tasks that are created within 30 days.

[ModifyTaskInfo](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifytaskinfo-postgresql)

ModifyTaskInfo

Modifies information about the historical tasks in the task center.

## Console Interface

API

Title

Description

[CreateYouhuiForOrder](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createyouhuifororder-postgresql)

CreateYouhuiForOrder

[DescribeCurrentModifyOrder](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describecurrentmodifyorder-postgresql)

DescribeCurrentModifyOrder

[DescribeCustinsResourceInfo](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describecustinsresourceinfo-postgresql)

DescribeCustinsResourceInfo

[DescribeDBInstanceConnectivity](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describedbinstanceconnectivity-postgresql)

DescribeDBInstanceConnectivity

[DescribeHostGroupElasticStrategyParameters](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describehostgroupelasticstrategyparameters-postgresql)

DescribeHostGroupElasticStrategyParameters

[DescribeMarketingActivity](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describemarketingactivity-postgresql)

DescribeMarketingActivity

[DescribeQuickSaleConfig](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describequicksaleconfig-postgresql)

DescribeQuickSaleConfig

[DescribeResourceDetails](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-describeresourcedetails-postgresql)

DescribeResourceDetails

[EvaluateLocalExtendDisk](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-evaluatelocalextenddisk-postgresql)

EvaluateLocalExtendDisk

[ModifyCustinsResource](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-modifycustinsresource-postgresql)

ModifyCustinsResource

[PreCheckCreateOrderForDeleteDBNodes](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-precheckcreateorderfordeletedbnodes-postgresql)

PreCheckCreateOrderForDeleteDBNodes

[QueryRecommendByCode](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-queryrecommendbycode-postgresql)

QueryRecommendByCode

[CreateOrderForDeleteDBNodes](/help/en/rds/apsaradb-rds-for-postgresql/api-rds-2014-08-15-createorderfordeletedbnodes-postgresql)

CreateOrderForDeleteDBNodes

Deletes a node from an ApsaraDB RDS for MySQL instance that runs RDS Cluster Edition.
