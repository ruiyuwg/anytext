## API standard and pre-built SDKs in multi-language

The OpenAPI specification of this product (`Dds/2015-12-01`) follows the [RPC](/help/en/sdk/product-overview/v3-request-structure-and-signature) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages to abstract low-level complexities such as request signing. This enables developers to call APIs using language-specific syntax without dealing with HTTP details directly.

## **C**ustom signature

If your specific needs, such as a customized signature, are not supported by the SDK, manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Note that manual signing requires significant effort (usually about 5 business days). For support, join our DingTalk group (ID: 147535001692).

## **Before you begin**

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. To call APIs securely, [create a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API access only, configure its AccessKey pairs, and implement the principle of least privilege (PoLP) through RAM policies. Use the Alibaba Cloud account only when its permissions are explicitly required for specific scenarios.

## Create or clone an instance

**API**

**Title**

**Description**

[CreateDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createdbinstance)

CreateDBInstance

Creates or clones an ApsaraDB for MongoDB replica set instance.

[CreateShardingDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createshardingdbinstance)

CreateShardingDBInstance

Creates or clones a MongoDB sharded cluster instance.

## Modify instance configuration

**API**

**Title**

**Description**

[ModifyDBInstanceSpec](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancespec)

ModifyDBInstanceSpec

Changes the instance type or storage capacity of an ApsaraDB for MongoDB standalone instance, replica set instance, or Serverless instance. Serverless instances are available only on the Alibaba Cloud China Website (www.aliyun.com).

[ModifyNodeSpec](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifynodespec)

ModifyNodeSpec

Changes the instance type and storage space of a node in a MongoDB sharded cluster instance.

[ModifyNodeSpecBatch](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifynodespecbatch)

ModifyNodeSpecBatch

Changes the configuration of one or more Mongos or shard nodes in an ApsaraDB for MongoDB sharded cluster instance.

[ModifyDBInstanceDiskType](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancedisktype)

ModifyDBInstanceDiskType

Modifies the disk type of an ApsaraDB for MongoDB instance.

## Renewal management

**API**

**Title**

**Description**

[DescribePrice](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeprice)

DescribePrice

Queries the price of an instance.

[RenewDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-renewdbinstance)

RenewDBInstance

Manually renews an ApsaraDB for MongoDB subscription instance.

## Query instances

**API**

**Title**

**Description**

[DescribeDBInstanceSpecInfo](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstancespecinfo)

DescribeDBInstanceSpecInfo

Gets instance type details.

[DescribeDBInstances](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstances)

DescribeDBInstances

Queries a list of MongoDB instances.

[DescribeDBInstanceAttribute](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstanceattribute)

DescribeDBInstanceAttribute

Queries the details of an ApsaraDB for MongoDB instance.

[DescribeActiveOperationTasks](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeactiveoperationtasks)

DescribeActiveOperationTasks

Queries the details of scheduled operations and maintenance (O&M) tasks for a MongoDB instance.

[DescribeDBInstancesOverview](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstancesoverview)

DescribeDBInstancesOverview

Queries the overview of one or more ApsaraDB for MongoDB instances.

## Connection management

**API**

**Title**

**Description**

[ReleaseNodePrivateNetworkAddress](/help/en/mongodb/developer-reference/api-dds-2015-12-01-releasenodeprivatenetworkaddress)

ReleaseNodePrivateNetworkAddress

Releases the internal endpoint of a shard or Configserver node for a sharded cluster instance.

## Whitelists and security groups

**API**

**Title**

**Description**

[ModifySecurityGroupConfiguration](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifysecuritygroupconfiguration)

ModifySecurityGroupConfiguration

You can call this operation to modify an ECS Security group that is bound to an ApsaraDB for MongoDB instance.

[DescribeGlobalSecurityIPGroupRelation](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeglobalsecurityipgrouprelation)

DescribeGlobalSecurityIPGroupRelation

Queries the mapping between an instance and a global IP address whitelist template.

[DeleteGlobalSecurityIPGroup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-deleteglobalsecurityipgroup)

DeleteGlobalSecurityIPGroup

Deletes a global IP address whitelist template.

## Keys

**API**

**Title**

**Description**

[ModifyDBInstanceTDE](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancetde)

ModifyDBInstanceTDE

Modifies the Transparent Data Encryption (TDE) status of a MongoDB instance.

[DescribeUserEncryptionKeyList](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeuserencryptionkeylist)

DescribeUserEncryptionKeyList

Queries the custom keys for an instance.

[DescribeKmsKeys](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describekmskeys)

DescribeKmsKeys

Queries Key Management Service (KMS) keys that are available for disk encryption.

## SSL encryption

**API**

**Title**

**Description**

[ModifyDBInstanceSSL](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancessl)

ModifyDBInstanceSSL

Modifies the SSL configuration of a MongoDB instance.

[DescribeDBInstanceSSL](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstancessl)

DescribeDBInstanceSSL

Queries the details of the SSL configuration for a MongoDB instance.

## Audit logs

**API**

**Title**

**Description**

[DescribeAuditRecords](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeauditrecords)

DescribeAuditRecords

Queries the audit logs of a MongoDB instance.

[DescribeAuditPolicy](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeauditpolicy)

DescribeAuditPolicy

Queries whether the audit log feature is enabled for a MongoDB instance.

## Performance monitoring

**API**

**Title**

**Description**

[DescribeDBInstancePerformance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstanceperformance)

DescribeDBInstancePerformance

Queries the performance data of a MongoDB instance.

## Backup and recovery

**API**

**Title**

**Description**

[CreateBackup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createbackup)

CreateBackup

Creates a backup for a MongoDB instance.

[ModifyBackupPolicy](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifybackuppolicy)

ModifyBackupPolicy

Modifies the backup policy of a MongoDB instance.

[DescribeBackupPolicy](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describebackuppolicy)

DescribeBackupPolicy

Queries the backup policy of a MongoDB instance.

[DescribeBackups](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describebackups)

DescribeBackups

Queries the backups of a MongoDB instance.

[DescribeClusterBackups](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeclusterbackups)

DescribeClusterBackups

Queries the cluster backup sets for an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.

[DescribeClusterRecoverTime](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeclusterrecovertime)

DescribeClusterRecoverTime

Queries the recoverable time range of an ApsaraDB for MongoDB sharded cluster instance with disk storage.

[DescribeBackupStorage](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describebackupstorage)

DescribeBackupStorage

Queries the backup usage for a MongoDB replica set or sharded cluster instance that uses cloud disks.

[DescribeBackupTasks](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describebackuptasks)

DescribeBackupTasks

Queries ongoing backup jobs for MongoDB ReplicaSet or sharded cluster instances that use cloud disks.

[DescribeInstanceRecoverTime](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeinstancerecovertime)

DescribeInstanceRecoverTime

Queries the recoverable time range for an ApsaraDB for MongoDB replica set instance with disk storage.

## Additional Information

**API**

**Title**

**Description**

[AllocateDBInstanceSrvNetworkAddress](/help/en/mongodb/developer-reference/api-dds-2015-12-01-allocatedbinstancesrvnetworkaddress)

AllocateDBInstanceSrvNetworkAddress

Applies for an SRV connection string for an ApsaraDB for MongoDB instance.

[CancelActiveOperationTasks](/help/en/mongodb/developer-reference/api-dds-2015-12-01-cancelactiveoperationtasks)

CancelActiveOperationTasks

Cancels Operations and Maintenance (O&M) events in a batch.

[DescribeActiveOperationTaskRegion](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeactiveoperationtaskregion)

Query maintenance task types and task quantities.

Queries the types and number of O&M tasks for a MongoDB instance.

[DescribeActiveOperationMaintenanceConfig](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeactiveoperationmaintenanceconfig)

DescribeActiveOperationMaintenanceConfig

Queries the Operation and Maintenance (O&M) task configuration for a MongoDB instance.

[ModifyDBInstanceConfig](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstanceconfig)

ModifyDBInstanceConfig

Modifies instance configuration

[CreateNodeRoleTag](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createnoderoletag)

CreateNodeRoleTag

Creates a role tag for an instance node.

[ModifyDBInstanceAttribute](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstanceattribute)

ModifyDBInstanceAttribute

Modifies instance release protection configuration.

[ModifySrvNetworkAddress](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifysrvnetworkaddress)

ModifySrvNetworkAddress

Modifies the SRV connection address of a MongoDB instance.

[DescribeRdsVSwitchs](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describerdsvswitchs)

DescribeRdsVSwitchs

Queries a list of vSwitches.

[DescribeRdsVpcs](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describerdsvpcs)

DescribeRdsVpcs

Queries a list of VPCs.

[DescribeRoleTagStatus](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeroletagstatus)

DescribeRoleTagStatus

Describes the status of a tag for a node.

[DescribeVpcsForMongoDB](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describevpcsformongodb)

DescribeVpcsForMongoDB

Queries a paginated list of VPCs.

## Others

**API**

**Title**

**Description**

[AllocateNodePrivateNetworkAddress](/help/en/mongodb/developer-reference/api-dds-2015-12-01-allocatenodeprivatenetworkaddress)

AllocateNodePrivateNetworkAddress

Applies for an internal endpoint for a shard or Configserver node in an ApsaraDB for MongoDB sharded cluster instance.

[AllocatePublicNetworkAddress](/help/en/mongodb/developer-reference/api-dds-2015-12-01-allocatepublicnetworkaddress)

AllocatePublicNetworkAddress

Allocates a public endpoint to an instance.

[CheckCloudResourceAuthorized](/help/en/mongodb/developer-reference/api-dds-2015-12-01-checkcloudresourceauthorized)

CheckCloudResourceAuthorized

Checks whether Key Management Service (KMS) keys are authorized to an ApsaraDB for MongoDB instance.

[CheckRecoveryCondition](/help/en/mongodb/developer-reference/api-dds-2015-12-01-checkrecoverycondition)

CheckRecoveryCondition

Queries whether the data of an ApsaraDB for MongoDB instance can be restored.

[CheckServiceLinkedRole](/help/en/mongodb/developer-reference/api-dds-2015-12-01-checkservicelinkedrole)

CheckServiceLinkedRole

Checks whether a service-linked role (SLR) is created for an instance.

[CreateAccount](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createaccount)

CreateAccount

Creates an account that is granted read-only permissions for shard nodes in an ApsaraDB for MongoDB sharded cluster instance that uses cloud disks.

[CreateGlobalSecurityIPGroup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createglobalsecurityipgroup)

CreateGlobalSecurityIPGroup

Creates a global IP whitelist template.

[CreateNode](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createnode)

CreateNode

Adds a shard or mongos node to an ApsaraDB for MongoDB instance.

[CreateNodeBatch](/help/en/mongodb/developer-reference/api-dds-2015-12-01-createnodebatch)

CreateNodeBatch

Batch adds mongos or shard nodes for a sharded cluster instance.

[DeleteBackup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-deletebackup)

DeleteBackup

Deletes a MongoDB backup set.

[DeleteDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-deletedbinstance)

DeleteDBInstance

Releases a pay-as-you-go MongoDB instance.

[DeleteNode](/help/en/mongodb/developer-reference/api-dds-2015-12-01-deletenode)

DeleteNode

Deletes a shard or mongos node from an ApsaraDB for MongoDB sharded cluster instance.

[DescribeAccounts](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeaccounts)

DescribeAccounts

Queries the database accounts of an ApsaraDB for MongoDB instance.

[DescribeActiveOperationTask](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeactiveoperationtask)

DescribeActiveOperationTask

Queries the detailed information about tasks of an ApsaraDB for MongoDB instance.

[DescribeActiveOperationTaskCount](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeactiveoperationtaskcount)

DescribeActiveOperationTaskCount

Queries the number of operation and maintenance tasks on an ApsaraDB for MongoDB instance.

[DescribeActiveOperationTaskType](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeactiveoperationtasktype)

DescribeActiveOperationTaskType

Queries the types of Operation and Maintenance tasks and the number of tasks of each type for an ApsaraDB for MongoDB instance.

[DescribeAuditLogFilter](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeauditlogfilter)

DescribeAuditLogFilter

Queries the types of entries in the audit log collected for an ApsaraDB for MongoDB instance.

[DescribeAvailabilityZones](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeavailabilityzones)

DescribeAvailabilityZones

Queries a list of the zones that are supported by an ApsaraDB for MongoDB instance.

[DescribeAvailableEngineVersion](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeavailableengineversion)

DescribeAvailableEngineVersion

Queries the engine versions to which an ApsaraDB for MongoDB instance can be upgraded.

[DescribeAvailableResource](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeavailableresource)

DescribeAvailableResource

Queries the available resources in the specified zone.

[DescribeBackupDBs](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describebackupdbs)

DescribeBackupDBs

Queries the databases at a specified time or the databases in a specified backup set before you restore a database for an ApsaraDB for MongoDB instance.

[DescribeDBInstanceEncryptionKey](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstanceencryptionkey)

DescribeDBInstanceEncryptionKey

Queries the details of a key for an ApsaraDB for MongoDB instance.

[DescribeDBInstanceMonitor](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstancemonitor)

DescribeDBInstanceMonitor

Queries the collection frequency of monitoring data for an ApsaraDB for MongoDB instance.

[DescribeDBInstanceSwitchLog](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstanceswitchlog)

DescribeDBInstanceSwitchLog

Queries the primary/secondary switching logs of an ApsaraDB for MongoDB instance.

[DescribeDBInstanceTDEInfo](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describedbinstancetdeinfo)

DescribeDBInstanceTDEInfo

Queries whether Transparent Data Encryption (TDE) is enabled for an ApsaraDB for MongoDB instance.

[DescribeErrorLogRecords](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeerrorlogrecords)

DescribeErrorLogRecords

Queries entries in error logs of an ApsaraDB for MongoDB instance.

[DescribeGlobalSecurityIPGroup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeglobalsecurityipgroup)

DescribeGlobalSecurityIPGroup

Queries the global IP whitelist template of an ApsaraDB for MongoDB instance.

[DescribeHistoryTasks](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describehistorytasks)

DescribeHistoryTasks

Queries a list of tasks in the task center.

[DescribeHistoryTasksStat](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describehistorytasksstat)

DescribeHistoryTasksStat

Queries the overview of a task in the task center.

[DescribeInstanceAutoRenewalAttribute](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeinstanceautorenewalattribute)

DescribeInstanceAutoRenewalAttribute

You can call this operation to query whether auto-renewal is enabled for an ApsaraDB for MongoDB instance.

[DescribeKernelReleaseNotes](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describekernelreleasenotes)

DescribeKernelReleaseNotes

Queries the release notes of the minor versions of an ApsaraDB for MongoDB instance.

[DescribeMongoDBLogConfig](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describemongodblogconfig)

DescribeMongoDBLogConfig

Queries the logging configurations of an ApsaraDB for MongoDB instance.

[DescribeParameterModificationHistory](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeparametermodificationhistory)

DescribeParameterModificationHistory

Queries the parameter modification records of an ApsaraDB for MongoDB instance.

[DescribeParameterTemplates](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeparametertemplates)

DescribeParameterTemplates

Queries the default parameter templates for MongoDB instances.

[DescribeParameters](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeparameters)

DescribeParameters

Queries the parameter settings of an ApsaraDB for MongoDB instance.

[DescribeRegions](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeregions)

DescribeRegions

Queries all regions and zones supported for an ApsaraDB for MongoDB instance.

[DescribeRenewalPrice](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describerenewalprice)

DescribeRenewalPrice

Queries the monthly renewal price of an ApsaraDB for MongoDB instance.

[DescribeReplicaSetRole](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describereplicasetrole)

DescribeReplicaSetRole

Queries the role and connection information of an ApsaraDB for MongoDB instance.

[DescribeRestoreDBInstanceList](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describerestoredbinstancelist)

DescribeRestoreDBInstanceList

Queries ApsaraDB for MongoDB instances whose backups are restored within seven days.

[DescribeRoleZoneInfo](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describerolezoneinfo)

DescribeRoleZoneInfo

Queries the role and zone of each node in an ApsaraDB for MongoDB instance.

[DescribeRunningLogRecords](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describerunninglogrecords)

DescribeRunningLogRecords

Queries the operational logs of an ApsaraDB for MongoDB instance.

[DescribeSecurityGroupConfiguration](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describesecuritygroupconfiguration)

DescribeSecurityGroupConfiguration

Queries the Elastic Compute Service (ECS) security groups that are associated with an ApsaraDB for MongoDB instance.

[DescribeSecurityIps](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describesecurityips)

DescribeSecurityIps

You can call this operation to query the IP whitelists of an ApsaraDB for MongoDB instance.

[DescribeShardingNetworkAddress](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeshardingnetworkaddress)

DescribeShardingNetworkAddress

Retrieves the connection information for a MongoDB sharded cluster instance.

[DescribeSlowLogRecords](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describeslowlogrecords)

DescribeSlowLogRecords

Queries the details of entries in slow query logs of an ApsaraDB for MongoDB instance.

[DescribeTags](/help/en/mongodb/developer-reference/api-dds-2015-12-01-describetags)

DescribeTags

Queries all tags in a specified region.

[DestroyInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-destroyinstance)

DestroyInstance

Destroys an ApsaraDB for MongoDB instance.

[EvaluateResource](/help/en/mongodb/developer-reference/api-dds-2015-12-01-evaluateresource)

EvaluateResource

Checks whether sufficient resources are available in a region in which you want to create or upgrade an ApsaraDB for MongoDB instance.

[ListTagResources](/help/en/mongodb/developer-reference/api-dds-2015-12-01-listtagresources)

ListTagResources

Queries the relationship between ApsaraDB for MongoDB instances and tags.

[MigrateAvailableZone](/help/en/mongodb/developer-reference/api-dds-2015-12-01-migrateavailablezone)

MigrateAvailableZone

Migrates an ApsaraDB for MongoDB instance to a specific zone.

[MigrateToOtherZone](/help/en/mongodb/developer-reference/api-dds-2015-12-01-migratetootherzone)

MigrateToOtherZone

You can call this operation to migrate an ApsaraDB for MongoDB instance to another zone.

[ModifyAccountDescription](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyaccountdescription)

ModifyAccountDescription

Modifies the description of the root account in an ApsaraDB for MongoDB instance.

[ModifyActiveOperationMaintenanceConfig](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyactiveoperationmaintenanceconfig)

ModifyActiveOperationMaintenanceConfig

Modifies the Operations and Maintenance (O&M) task configuration for a MongoDB instance.

[ModifyActiveOperationTasks](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyactiveoperationtasks)

ModifyActiveOperationTasks

Modifies the switching time of scheduled O\\\\\\\\\\\\&M tasks for an ApsaraDB for MongoDB instance.

[ModifyAuditLogFilter](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyauditlogfilter)

ModifyAuditLogFilter

Queries the types of logs collected by the audit log feature of an ApsaraDB for MongoDB instance.

[ModifyAuditPolicy](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyauditpolicy)

ModifyAuditPolicy

Enables or disables the audit log feature or configures the log storage duration for an ApsaraDB for MongoDB instance.

[ModifyBackupExpireTime](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifybackupexpiretime)

ModifyBackupExpireTime

Modifies the time-to-live (TTL) of a MongoDB backup set.

[ModifyDBInstanceConnectionString](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstanceconnectionstring)

ModifyDBInstanceConnectionString

Modifies the endpoint and port of a MongoDB instance.

[ModifyDBInstanceDescription](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancedescription)

ModifyDBInstanceDescription

Modifies the name of an ApsaraDB for MongoDB instance.

[ModifyDBInstanceMaintainTime](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancemaintaintime)

ModifyDBInstanceMaintainTime

Modifies the maintenance window of an ApsaraDB for MongoDB instance.

[ModifyDBInstanceMonitor](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancemonitor)

ModifyDBInstanceMonitor

You can call this operation to set the monitoring granularity for an ApsaraDB for MongoDB instance.

[ModifyDBInstanceNetExpireTime](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancenetexpiretime)

ModifyDBInstanceNetExpireTime

Extends the retention period of the classic network endpoint of an ApsaraDB for MongoDB instance.

[ModifyDBInstanceNetworkType](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifydbinstancenetworktype)

ModifyDBInstanceNetworkType

Changes the network type of an ApsaraDB for MongoDB instance.

[ModifyGlobalSecurityIPGroup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyglobalsecurityipgroup)

ModifyGlobalSecurityIPGroup

Modifies the global IP whitelist template associated with an ApsaraDB for MongoDB instance.

[ModifyGlobalSecurityIPGroupName](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyglobalsecurityipgroupname)

ModifyGlobalSecurityIPGroupName

Modifies the name of a global IP whitelist template associated with an ApsaraDB for MongoDB instance.

[ModifyGlobalSecurityIPGroupRelation](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyglobalsecurityipgrouprelation)

ModifyGlobalSecurityIPGroupRelation

Modifies the mapping between a global whitelist template and an ApsaraDB for MongoDB instance.

[ModifyInstanceAutoRenewalAttribute](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyinstanceautorenewalattribute)

ModifyInstanceAutoRenewalAttribute

Enables or disables auto-renewal for an ApsaraDB for MongoDB instance.

[ModifyInstanceVpcAuthMode](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyinstancevpcauthmode)

ModifyInstanceVpcAuthMode

Disables password-free access over Virtual Private Cloud (VPC) for an ApsaraDB for MongoDB instance.

[ModifyParameters](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyparameters)

ModifyParameters

Modifies the parameters of an ApsaraDB for MongoDB instance.

[ModifyResourceGroup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifyresourcegroup)

ModifyResourceGroup

Moves an ApsaraDB for MongoDB instance to a specified resource group.

[ModifySecurityIps](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifysecurityips)

ModifySecurityIps

Modifies the IP address whitelist of an ApsaraDB for MongoDB instance.

[ModifyTaskInfo](/help/en/mongodb/developer-reference/api-dds-2015-12-01-modifytaskinfo)

ModifyTaskInfo

Modifies the information of a task in the task center for an ApsaraDB for MongoDB instance.

[ReleasePublicNetworkAddress](/help/en/mongodb/developer-reference/api-dds-2015-12-01-releasepublicnetworkaddress)

ReleasePublicNetworkAddress

Releases the public endpoint of an ApsaraDB for MongoDB instance.

[ResetAccountPassword](/help/en/mongodb/developer-reference/api-dds-2015-12-01-resetaccountpassword)

ResetAccountPassword

Resets the password of the root account in an ApsaraDB for MongoDB instance.

[RestartDBInstance](/help/en/mongodb/developer-reference/api-dds-2015-12-01-restartdbinstance)

RestartDBInstance

Restarts an ApsaraDB for MongoDB instance.

[RestartNode](/help/en/mongodb/developer-reference/api-dds-2015-12-01-restartnode)

RestartNode

Restarts a single node of a MongoDB instance.

[SwitchDBInstanceHA](/help/en/mongodb/developer-reference/api-dds-2015-12-01-switchdbinstanceha)

SwitchDBInstanceHA

Switches the primary and secondary nodes for an ApsaraDB for MongoDB instance.

[TagResources](/help/en/mongodb/developer-reference/api-dds-2015-12-01-tagresources)

TagResources

Binds tags to ApsaraDB for MongoDB instances.

[TransferClusterBackup](/help/en/mongodb/developer-reference/api-dds-2015-12-01-transferclusterbackup)

TransferClusterBackup

Switches the backup mode of an ApsaraDB for MongoDB sharded cluster instance to the cluster backup mode. After the instance is switched to the cluster backup mode, the instance supports high-frequency backup.

[TransformInstanceChargeType](/help/en/mongodb/developer-reference/api-dds-2015-12-01-transforminstancechargetype)

TransformInstanceChargeType

Changes the billing method of an instance from pay-as-you-go to subscription or from subscription to pay-as-you-go.

[TransformToPrePaid](/help/en/mongodb/developer-reference/api-dds-2015-12-01-transformtoprepaid)

TransformToPrePaid

Changes the billing method of an ApsaraDB for MongoDB instance from pay-as-you-go to subscription.

[UntagResources](/help/en/mongodb/developer-reference/api-dds-2015-12-01-untagresources)

UntagResources

Removes a tag if the tag is not added to another instance.

[UpgradeDBInstanceEngineVersion](/help/en/mongodb/developer-reference/api-dds-2015-12-01-upgradedbinstanceengineversion)

UpgradeDBInstanceEngineVersion

Upgrades the database version of an ApsaraDB for MongoDB instance.

[UpgradeDBInstanceKernelVersion](/help/en/mongodb/developer-reference/api-dds-2015-12-01-upgradedbinstancekernelversion)

UpgradeDBInstanceKernelVersion

Upgrades the minor version of an ApsaraDB for MongoDB instance.
