## API standard and pre-built SDKs in multi-language

The OpenAPI specification of this product (`hbr/2017-09-08`) follows the [RPC](/help/en/sdk/product-overview/v3-request-structure-and-signature) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages to abstract low-level complexities such as request signing. This enables developers to call APIs using language-specific syntax without dealing with HTTP details directly.

## **C**ustom signature

If your specific needs, such as a customized signature, are not supported by the SDK, manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Note that manual signing requires significant effort (usually about 5 business days). For support, join our DingTalk group (ID: 147535001692).

## **Before you begin**

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. To call APIs securely, [create a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API access only, configure its AccessKey pairs, and implement the principle of least privilege (PoLP) through RAM policies. Use the Alibaba Cloud account only when its permissions are explicitly required for specific scenarios.

## Backup vaults

**API**

**Title**

**Description**

[CreateVault](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-createvault)

CreateVault

Creates a backup vault.

[DescribeVaults](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describevaults)

DescribeVaults

Describes one or more backup vaults that meet specified criteria.

## Backup plans

**API**

**Title**

**Description**

[CreateBackupPlan](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-createbackupplan)

CreateBackupPlan

Creates a backup plan.

[DeleteBackupPlan](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deletebackupplan)

DeleteBackupPlan

Deletes a backup plan.

[DisableBackupPlan](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-disablebackupplan)

DisableBackupPlan

Disables a backup plan.

[EnableBackupPlan](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-enablebackupplan)

EnableBackupPlan

Resumes a backup plan.

[UpdateBackupPlan](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-updatebackupplan)

UpdateBackupPlan

Updates a backup plan.

[DescribeBackupPlans](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describebackupplans)

DescribeBackupPlans

Gets one or more backup plans that meet specified conditions.

[ExecuteBackupPlan](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-executebackupplan)

ExecuteBackupPlan

Executes a backup plan.

## Backup policy

**API**

**Title**

**Description**

[CreatePolicyV2](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-createpolicyv2)

CreatePolicyV2

Creates a backup policy.

[DeletePolicyV2](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deletepolicyv2)

DeletePolicyV2

Deletes a policy.

[DescribePoliciesV2](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describepoliciesv2)

DescribePoliciesV2

Queries one or more policies.

[DeletePolicyBinding](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deletepolicybinding)

DeletePolicyBinding

Detaches a data source from a policy. After the data source is detached, the policy no longer protects it. Use this operation with caution.

[UpdatePolicyBinding](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-updatepolicybinding)

UpdatePolicyBinding

Updates the association between a backup policy and a data source.

[DescribePolicyBindings](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describepolicybindings)

List Bound Policies

You can query the data sources attached to a policy, or the policies attached to a data source.

## Backup clients

**API**

**Title**

**Description**

[DeleteBackupClient](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deletebackupclient)

DeleteBackupClient

Deletes a Cloud Backup client.

[DeleteBackupClientResource](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deletebackupclientresource)

DeleteBackupClientResource

Deletes the resources of a backup client.

[DescribeBackupClients](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describebackupclients)

DescribeBackupClients

Queries the information about one or more backup clients that meet specified conditions.

[InstallBackupClients](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-installbackupclients)

InstallBackupClients

Installs backup clients on one or more ECS instances.

## Backup files

**API**

**Title**

**Description**

[DeleteSnapshot](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deletesnapshot)

DeleteSnapshot

Deletes a backup snapshot.

[SearchHistoricalSnapshots](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-searchhistoricalsnapshots)

SearchHistoricalSnapshots

Retrieves one or more historical backup snapshots that meet the specified criteria.

[DescribeUdmSnapshots](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describeudmsnapshots)

DescribeUdmSnapshots

Queries the snapshots of full backups.

## Restore jobs

**API**

**Title**

**Description**

[CreateRestoreJob](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-createrestorejob)

CreateRestoreJob

Creates a restore job.

[CancelRestoreJob](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-cancelrestorejob)

CancelRestoreJob

Cancels a restore job.

[DescribeRestoreJobs2](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describerestorejobs2)

DescribeRestoreJobs2

Queries one or more restore jobs that meet specified conditions.

## Backup jobs

**API**

**Title**

**Description**

[CancelBackupJob](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-cancelbackupjob)

CancelBackupJob

Cancels a backup job.

[DescribeBackupJobs2](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describebackupjobs2)

DescribeBackupJobs2

Queries backup jobs that meet the specified criteria.

## Backup of SAP HANA

**API**

**Title**

**Description**

[DeleteClient](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deleteclient)

DeleteClient

Deletes a client.

[DescribeHanaBackupPlans](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describehanabackupplans)

DescribeHanaBackupPlans

Queries for one or more SAP HANA backup plans that match specified criteria.

## Container backup

**API**

**Title**

**Description**

[DescribeContainerResource](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describecontainerresource)

DescribeContainerResource

Queries the list of container cluster resources.

[DeleteContainerCluster](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deletecontainercluster)

DeleteContainerCluster

Unregisters a container cluster record in Cloud Backup. After you unregister the cluster, you cannot recover backups of the cluster.

## Other

**API**

**Title**

**Description**

[DescribeCrossAccounts](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describecrossaccounts)

DescribeCrossAccounts

Queries information about cross-account management relationships.

[AddCrossAccount](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-addcrossaccount)

AddCrossAccount

Create a cross-account management relationship.

[CreateVaultReplication](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-createvaultreplication)

CreateVaultReplication

Configures backup vault replication.

[DeleteCrossAccount](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deletecrossaccount)

DeleteCrossAccount

Deletes a cross-account management relationship.

[DeleteVaultReplication](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deletevaultreplication)

DeleteVaultReplication

Stops backup vault replication.

[ListProtectedResources](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-listprotectedresources)

ListProtectedResources

Queries a list of protected resources.

## Others

**API**

**Title**

**Description**

[AddContainerCluster](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-addcontainercluster)

AddContainerCluster

Registers a Container Service for Kubernetes (ACK) cluster.

[ChangeResourceGroup](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-changeresourcegroup)

ChangeResourceGroup

Changes the resource group to which an instance belongs.

[CheckRole](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-checkrole)

CheckRole

Checks whether the user has permissions to access the current resource or page.

[CreateBackupJob](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-createbackupjob)

CreateBackupJob

Creates a backup job.

[CreateClients](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-createclients)

CreateClients

Installs one or more Cloud Backup clients on specified instances.

[CreateHanaBackupPlan](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-createhanabackupplan)

CreateHanaBackupPlan

Creates a backup plan for an SAP HANA instance.

[CreateHanaInstance](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-createhanainstance)

CreateHanaInstance

Registers an SAP HANA instance.

[CreateHanaRestore](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-createhanarestore)

CreateHanaRestore

Creates a restore job for an SAP HANA database.

[CreatePolicyBindings](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-createpolicybindings)

CreatePolicyBindings

Binds one or more data sources to a backup policy.

[CreateReplicationVault](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-createreplicationvault)

CreateReplicationVault

Creates a mirror vault.

[CreateTempFileUploadUrl](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-createtempfileuploadurl)

CreateTempFileUploadUrl

Generates the parameters and signature required for a file upload URL.

[DeleteAirEcsInstance](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deleteairecsinstance)

DeleteAirEcsInstance

Removes the Elastic Compute Service (ECS) instance that is used for restoration only in ECS Backup Essential Edition.

[DeleteHanaBackupPlan](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deletehanabackupplan)

DeleteHanaBackupPlan

Deletes an SAP HANA backup plan.

[DeleteHanaInstance](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deletehanainstance)

DeleteHanaInstance

Deletes an SAP HANA instance.

[DeleteUdmDisk](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deleteudmdisk)

DeleteUdmDisk

Cancels a protected disk.

[DeleteUdmEcsInstance](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deleteudmecsinstance)

DeleteUdmEcsInstance

Stops protection for Elastic Compute Service (ECS) instance backup.

[DeleteVault](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-deletevault)

DeleteVault

Deletes a backup vault.

[DescribeClients](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describeclients)

DescribeClients

Queries one or more Cloud Backup clients that meet the specified conditions.

[DescribeContainerCluster](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describecontainercluster)

DescribeContainerCluster

Queries one or more container clusters that meet the specified conditions.

[DescribeHanaBackupSetting](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describehanabackupsetting)

DescribeHanaBackupSetting

Queries the backup parameters of an SAP HANA database.

[DescribeHanaBackupsAsync](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describehanabackupsasync)

DescribeHanaBackupsAsync

Queries one or more SAP HANA backups that meet the specified conditions.

[DescribeHanaDatabases](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describehanadatabases)

DescribeHanaDatabases

Queries the information about SAP HANA databases.

[DescribeHanaInstances](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describehanainstances)

DescribeHanaInstances

Queries one or more SAP HANA instances that meet the specified conditions.

[DescribeHanaRestores](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describehanarestores)

DescribeHanaRestores

Queries one or more SAP HANA restore jobs that meet the specified conditions.

[DescribeHanaRetentionSetting](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describehanaretentionsetting)

DescribeHanaRetentionSetting

Queries the backup retention period of an SAP HANA database.

[DescribeOtsTableSnapshots](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describeotstablesnapshots)

DescribeOtsTableSnapshots

Queries the details about Tablestore instances that are backed up.

[DescribeRecoverableOtsInstances](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describerecoverableotsinstances)

DescribeRecoverableOtsInstances

Queries the tables of a restorable Tablestore instance.

[DescribeRegions](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describeregions)

DescribeRegions

Queries available regions.

[DescribeTask](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describetask)

DescribeTask

Queries an asynchronous job.

[DescribeVaultReplicationRegions](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-describevaultreplicationregions)

DescribeVaultReplicationRegions

Queries the regions that support cross-region replication.

[DetachNasFileSystem](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-detachnasfilesystem)

DetachNasFileSystem

Deletes an internal mount target created by Cloud Backup.

[DisableHanaBackupPlan](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-disablehanabackupplan)

DisableHanaBackupPlan

Disables an SAP HANA backup plan.

[EnableHanaBackupPlan](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-enablehanabackupplan)

EnableHanaBackupPlan

Enables an SAP HANA backup plan.

[ExecutePolicyV2](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-executepolicyv2)

Execute Policy

Execute a policy for one or all bound data sources.

[GenerateRamPolicy](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-generaterampolicy)

GenerateRamPolicy

Generates a Resource Access Management (RAM) policy.

[GetTempFileDownloadLink](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-gettempfiledownloadlink)

GetTempFileDownloadLink

Obtains download links of files such as job reports.

[OpenHbrService](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-openhbrservice)

OpenHbrService

Activates Cloud Backup.

[StartHanaDatabaseAsync](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-starthanadatabaseasync)

StartHanaDatabaseAsync

Starts an SAP HANA database.

[StopHanaDatabaseAsync](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-stophanadatabaseasync)

StopHanaDatabaseAsync

Stops an SAP HANA database.

[UninstallBackupClients](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-uninstallbackupclients)

UninstallBackupClients

Uninstalls a Cloud Backup client from one or more Elastic Compute Service (ECS) instance.

[UninstallClient](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-uninstallclient)

UninstallClient

Uninstalls an HBR client.

[UpdateClientSettings](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-updateclientsettings)

UpdateClientSettings

Updates the configurations of an HBR client.

[UpdateContainerCluster](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-updatecontainercluster)

Update Container Cluster Information

Update container cluster information, including the container cluster name, network type, etc.

[UpdateHanaBackupPlan](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-updatehanabackupplan)

UpdateHanaBackupPlan

Updates an SAP HANA backup plan.

[UpdateHanaBackupSetting](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-updatehanabackupsetting)

UpdateHanaBackupSetting

Updates the backup parameters of an SAP HANA database.

[UpdateHanaInstance](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-updatehanainstance)

UpdateHanaInstance

Updates an SAP HANA instance.

[UpdateHanaRetentionSetting](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-updatehanaretentionsetting)

UpdateHanaRetentionSetting

Updates the backup retention period of an SAP HANA database.

[UpdatePolicyV2](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-updatepolicyv2)

UpdatePolicyV2

Modifies a backup policy.

[UpdateVault](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-updatevault)

UpdateVault

Updates the configuration information about the backup vault.

[UpgradeBackupClients](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-upgradebackupclients)

UpgradeBackupClients

Upgrades an HBR client on one or more Elastic Compute Service (ECS) instances.

[UpgradeClient](/help/en/cloud-backup/developer-reference/api-hbr-2017-09-08-upgradeclient)

UpgradeClient

Upgrades the Cloud Backup client.
