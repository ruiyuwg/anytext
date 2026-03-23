Some MaxCompute resource management operations can be performed only in the management console. Resource Access Management (RAM) is used to authenticate these operations. This topic describes the permissions and access policies for MaxCompute management operations that are integrated with RAM.

## **Permissions**

**Important**

-   If a RAM user is granted the `Allow` permission for the `ListProjects` and `GetProject` operations, the user can view a list of all MaxCompute projects and their information in the specified region of the Alibaba Cloud account. This includes projects that the user has not joined.
    
-   If a RAM user is explicitly denied (`"Effect": "Deny"`) permission for the `ListProjects` and `GetProject` operations, the user cannot view information about any MaxCompute project in the specified region of the Alibaba Cloud account. This includes projects that the user has joined.
    
-   If no policy is defined for a RAM user to allow or deny the `ListProjects` and `GetProject` operations, the user can view a list of the MaxCompute projects they have joined and their information in the specified region of the Alibaba Cloud account.
    
-   Permissions for managing network connectivity and tenant-level users and roles can also be granted through MaxCompute [tenant-level role authorization](/help/en/maxcompute/user-guide/perform-access-control-based-on-tenant-level-roles#task-2243367). If a RAM policy is configured with `Allow` (`"Effect": "Allow"`), authentication is successful. If no RAM policy is defined, the permissions granted by the tenant-level role take effect. If a RAM policy is configured with `Deny` (`"Effect": "Deny"`), authentication fails.
    

### **Overview**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

Overview page - number of jobs

odps:GetJobCount

acs:odps:{#regionId}:{#accountId}:job/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):job/\*

View the number of jobs in a specific status.

### **SQL analysis**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

SQL analysis

odps:GetTableInfo

acs:odps:{#regionId}:{#accountId}:projects/{#ProjectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj\_1

Get table information.

odps:GetFunctionInfo

Get function information.

odps:ListTablePartitions

Get table partition information.

odps:PreviewTable

Preview table data.

### **Project management**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

Project management

odps:ListProjects

acs:odps:{#regionId}:{#accountId}:projects/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/\*

View all projects in the specified region within the Alibaba Cloud account.

odps:CreateProject

Create a project.

odps:GetProject

acs:odps:{#regionId}:{#accountId}:projects/{#ProjectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj\_1

Obtain information about a project.

odps:DeleteProject

Delete a project.

odps:UpdateProjectStatus

Freeze or restore a project.

odps:UpdateProjectDefaultQuota

Change the default quota of a project.

odps:ListOutboundInternetAddress

View the external network configuration.

odps:UpdateOutboundInternetAddress

Update the external network configuration.

odps:CreateRole

Create a project-level role.

odps:DeleteRole

Delete a project-level role.

odps:UpdateRole

Update a project-level role.

odps:UpdateUsersToAdmin

Set a project administrator, which is the Admin role.

odps:UpdateUsersToSuperAdmin

Set a project super administrator, which is the Super\_Administrator role.

odps:UpdateUsersToRole

Manage members of a project-level role.

odps:ListUsers

acs:odps:{#regionId}:{#accountID}:user/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):user/\*

Get the list of sub-users.

odps:GetRoleAcl

acs:odps:{#regionId}:{#accountId}:projects/{#ProjectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj\_1

Get ACL authorization information for a project-level role.

odps:GetRoleAclOnObject

Get ACL authorization for a role on an object.

odps:GetRolePolicy

Get the content of a policy authorization for a role.

odps:ListResources

Get the list of resources.

odps:ListRoles

Get the list of project-level roles.

odps:CreatePackage

acs:odps:{#regionId}:{#accountId}:package/{#packageName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):package/pkg\_1

Create a package.

odps:DeletePackage

Delete a package.

odps:GetPackage

Get a package.

odps:ListPackages

Get packages in batches.

odps:UpdatePackage

Update a package.

odps:ListUserPermissionsAsStringByProject

acs:odps:{#regionId}:{#accountId}:projects/{#ProjectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj\_1

List user permissions in STRING format.

odps:ListUserPermissionsByProject

List user permissions in JSON format.

odps:ListUsersInfoByProject

List all users in a project, including their roles and security information.

odps:ListProjectUsers

List all users in a project.

odps:CreateSchema

acs:odps:{#regionId}:{#accountId}:projects/{#ProjectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj\_1

Create a schema.

odps:ListSchemas

View the list of schemas.

odps:DeleteSchema

Delete a schema.

odps:ListFunctions

View the list of functions.

odps:GetTrustedProjects

View the list of trusted projects.

odps:GetAclAuthInfo

Get ACL authorization information.

odps:CheckRamRole

acs:odps:{#regionId}:{#accountId}:ramrole/{#roleName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):ramrole/AliyunMaxComputeEncryptionDefaultRole

Check whether a service-linked role (SLR) is authorized for the data encryption feature.

odps:GetAsyncJobResult

acs:odps:{#regionId}:{#accountId}:asyncjob/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account):asyncjob/\*

Get the result of an asynchronous API call.

**Note**

To resolve API call timeout issues, some APIs and scenarios use asynchronous requests. After you make a call, you must use this API to get the result asynchronously. This requires the user to have this permission. An example scenario is getting a user list based on a project-level role.

odps:ListTables

acs:odps:{#regionId}:{#accountId}:projects/{#ProjectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj\_1

View the list of tables.

odps:ListUsersByRole

acs:odps:{#regionId}:{#accountId}:projects/{#ProjectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj\_1

View role members.

### **Quota management**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

Quota management

odps:UpdateQuota

acs:odps:{#regionId}:{#accountId}:quotas/{#NickName} 

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):quotas/quota\_1(Level-1 quota name)

Modify a level-1 or level-2 quota.

odps:UpdateQuotaPlan

Modify a quota plan.

odps:UpdateSubQuotas

Create a level-2 custom quota.

odps:UpdateQuotaSchedule

Modify a time plan.

odps:CreateQuotaPlan

Create a quota plan.

odps:DeleteQuotaPlan

Delete a quota plan.

odps:CreateQuotaSchedule

Create a time plan.

odps:ListQuotaRoutingRules

acs:odps:{#regionId}:{#accountId}:quotas/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):quotas/\*

View the list of level-2 quota rules.

odps:CreateQuotaRoutingRule

Add a level-2 quota rule.

odps:GetQuotaRoutingRule

acs:odps:{#regionId}:{#accountId}:quotas/{#quotaPath}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):quotas/quota\_1#quota\_1\_1(Level-1 quota name#Level-2 quota name. You can use a nickname or a name.)

View a level-2 quota rule.

odps:RemoveQuotaRoutingRule

Remove a level-2 quota rule.

odps:UpdateQuotaRoutingRule

Modify a level-2 quota rule.

odps:CreateQuota

acs:odps:{#regionId}:{#accountId}:quota/{#NickName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):quotas/quota\_1(Level-1 quota name)

Create a quota.

odps:DeleteQuota

Delete a quota.

odps:GetQuota

Get a quota.

odps:ListQuotas

Query the list of quotas.

odps:ListQuotasPlans

Query the list of quota plans.

odps:GetQuotaPlan

Get a quota plan.

odps:GetQuotaSchedule

Get a time-based quota plan.

### **Notebook management**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

Notebook management

odps:CreateNotebookTemplate

acs:odps:{#regionId}:{#accountId}:notebooktemplate/{#notebookTemplatesId}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):notebooktemplate/notebookid

Create a Notebook instance template.

odps:ListNotebookTemplates

View the list of Notebook instance templates.

odps:GetNotebookTemplate

View the details of a Notebook instance template.

odps:UpdateNotebookTemplate

Update a Notebook instance template.

odps:DeleteNotebookTemplate

Delete a Notebook instance template.

odps:CreateNotebookStorage

acs:odps:{#regionId}:{#accountId}:notebookstorage/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):notebookstorage/\*

Create and attach a storage for a Notebook instance.

odps:ListNotebookStorage

View the storage attached to a Notebook instance.

odps:CreateNotebookInstance

acs:odps:{#regionId}:{#accountId}:notebookinstance/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):notebookinstance/\*

Create a Notebook instance.

odps:ListNotebookInstances

View the list of Notebook instances.

odps:GetNotebookInstance

acs:odps:{#regionId}:{#accountId}:notebookinstance/{#notebookInstanceId}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):notebookinstance/\*

View the details of a Notebook instance.

odps:StartNotebookInstance

Start a Notebook instance.

odps:StopNotebookInstance

Stop a Notebook instance.

odps:UpdateNotebookInstance

Update a Notebook instance.

odps:DeleteNotebookInstance

Delete a Notebook instance.

### **Resource observation**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

Resource observation

odps:GetMetric

acs:odps:{#regionId}:{#accountId}:metric/{#category}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):metric/storage

Includes monitoring curves for open storage, external table cache, job observation, and storage trends.

Resource observation (computing resources)

odps:GetQuotaUsage

acs:odps:{#regionId}:{#accountId}:quotas/{#nickname}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):quotas/quota\_1(Level-1 quota name)

View the usage details of computing resources or data transmission resources.

odps:QueryQuotaMetric

acs:odps:{#regionId}:{#accountId}:quota/{#metric}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):quota/cpu

View the resource usage of computing resources.

Resource observation (storage resources)

odps:GetStorageSizeSummary

acs:odps:{#regionId}:{#accountId}:storage/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):storage/\*

Get the summary data of storage usage for the current day.

odps:GetStorageAmountSummary

Get the summary data of storage distribution for the current day.

odps:GetStorageSummaryCompared

Get storage usage change data.

odps:ListStorageProjectsInfo

Get project storage details.

odps:SumDailyBillsByItem

acs:odps:{#regionId}:{#accountId}:bills/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):bills/\*

Get storage costs (list price).

odps:SumStorageMetricsByDate

acs:odps:{#regionId}:{#accountId}:storageMetrics/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):storageMetrics/\*

Get daily storage usage.

odps:ListStorageTablesInfo

acs:odps:{#regionId}:{#accountId}:storage/{#projectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):storage/prj\_1

Get table storage details.

odps:ListStoragePartitionsInfo

Get partition storage details.

Resource observation (Data Transmission Service)

odps:GetTableAccessInfoTopK

acs:odps:{#regionId}:{#accountId}:quotas/{#nickname}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):quotas/quota\_1(Level-1 quota name)

View the top K tables by access frequency for data transmission resources.

odps:GetTableIpAccessInfoTopK

View the top K source IP addresses by access frequency for data transmission resources.

odps:GetTableAccessInfo

View the access frequency information of tables for data transmission resources.

odps:ListTableSlotDetail

View the data transmission details of data transmission resources.

odps:GetTunnelThroughputSummary

View the data transmission volume summary of data transmission resources.

odps:QueryTunnelMetric

acs:odps:{#regionId}:{#accountId}:tunnel/{#metric}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):tunnel/slot

View the resource usage of Data Transmission Service.

odps:QueryTunnelMetricDetail

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):quota/request

View the Top-N details of resource usage for Data Transmission Service.

Resource observation (job performance)

odps:ListTopJobInfo

acs:odps:{#regionId}:{#accountId}:job/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):storage/prj\_1

Get the top jobs by resource consumption and duration.

### **Job O&M**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

Job O&M

odps:ListJobInfos

acs:odps:{#regionId}:{#accountId}:job/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):job/\*

View the list of job information.

odps:ListJobSnapshotInfos

View the list of job snapshots.

odps:KillJobs

Stop jobs.

odps:GetJobResourceUsage

View the summary of job resource information.

odps:GetRunningJobs

View the list of running jobs.

odps:GetJobSummaryByPreCompute

View the summary of job statuses.

odps:GetJobLogView

acs:odps:{#regionId}:{#accountId}:job/{#instanceId}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):job/20240828\*\*\*\*ju4h

Get the Logview of a job.

odps:GetJobAnalyzeQuotaUsage

View the computing resource usage of a job.

odps:GetJobAnalyzeQuotaDistribution

acs:odps:{#regionId}:{#accountId}:job/{#quotaNickname}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):job/quota\_1

View the computing resource usage distribution of a job.

Job Insights - similar job analysis

odps:GetJobInfo

acs:odps:{#regionId}:{#accountId}:job/{#instanceId}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):job/20241103\*\*\*\*\*\*\*\*

Get information about a single job based on its instance ID.

odps:ListSimilarJobInfos

acs:odps:{#regionId}:{#accountId}:job/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):job/\*

View the list of similar jobs.

Job observation

odps:ListJobMetric

acs:odps:{#regionId}:{#accountId}:job/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):job/\*

View job-related metrics.

### **Migration services (MMA)**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

Migration services

odps:ListMmsDataSources

acs:odps:{#regionId}:{#accountId}:mmsdatasource/{#datasourceId}

acs:odps:cn-shanghai:12345(Alibaba Cloud account ID):mmsdatasource/2000029

View the list of data sources.

odps:GetMmsDataSource

Get the details of a data source.

odps:CreateMmsDataSource

Create a data source.

odps:UpdateMmsDataSource

Update a data source.

odps:DeleteMmsDataSource

Delete a data source.

odps:CreateMmsFetchMetadataJob

Create a metadata update task.

odps:ListMmsJobs

Get the list of migration plans.

odps:GetMmsJob

Get a migration plan.

odps:CreateMmsJob

Create a migration plan.

odps:DeleteMmsJob

Delete a migration plan.

odps:StartMmsJob

Start a migration plan.

odps:StopMmsJob

Stop a migration plan.

odps:RetryMmsJob

Retry a migration plan.

odps:ListMmsTasks

Get the list of migration tasks.

odps:GetMmsTask

Get a migration task.

odps:ListMmsTaskLogs

Get the list of migration task logs.

odps:GetMmsAsyncTask

Get an asynchronous task.

odps:UpdateMmsAsyncTask

Update the status of an asynchronous task.

odps:DeleteMmsAsyncTask

Delete an asynchronous task.

odps:ListMmsDbs

Get the list of databases in a data source.

odps:GetMmsDb

Get a database in a data source.

odps:ListMmsTables

Get the list of tables in a data source.

odps:GetMmsTable

Get a table in a data source.

odps:ListMmsPartitions

Get the list of partitions in a data source.

odps:GetMmsPartition

Get a partition in a data source.

odps:ListMmsAgents

acs:odps:{#regionId}:{#accountId}:mmsagent

acs:odps:cn-shanghai:12345(Alibaba Cloud account ID):mmsagent

Get the list of agents that are running under the Alibaba Cloud account.

odps:CreateMmsAuthFile

acs:odps:{#regionId}:{#accountId}:mmsauthfile

acs:odps:cn-shanghai:12345(Alibaba Cloud account ID):mmsauthfile

Create an authentication file.

odps:GetMmsProgress

acs:odps:{#regionId}:{#accountId}:\*

acs:odps:cn-shanghai:12345(Alibaba Cloud account ID):\*

View the progress of a migration task.

odps:GetMmsSpeed

### **Cost management**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

Cost analysis

odps:SumBills

acs:odps:{#regionId}:{#accountId}:bills/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):bills/\*

View the cost analysis.

odps:SumBillsByDate

odps:SumDailyBillsByItem

odps:SumComputeMetricsByRecord

acs:odps:{#regionId}:{#accountId}:computeMetrics/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):computeMetrics/\*

View the computing usage analysis.

odps:SumComputeMetricsByUsage

odps:ListComputeMetricsByInstance

odps:ListComputeMetricsBySignature

odps:SumStorageMetricsByDate

acs:odps:{#regionId}:{#accountId}:storageMetrics/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):storageMetrics/\*

View the storage usage analysis.

odps:SumStorageMetricsByType

odps:ListInstances

acs:odps:\*:{#accountId}:instance/\*

acs:odps:\*:12345(Alibaba Cloud account ID):instance/\*

List instances.

### **Disaster recovery management**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

Disaster recovery management

odps:CreateDisasterRecovery

acs:odps:{#regionId}:{#accountId}:disasterrecoveries/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):disasterrecoveries/\*

Create a zone-disaster recovery.

odps:DeleteCrossRegionReplication

acs:odps:{#regionId}:{#accountId}:crossregionreplication/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):crossregionreplication/\*

Delete a cross-region disaster recovery.

odps:DeleteDisasterRecovery

acs:odps:{#regionId}:{#accountId}:disasterrecoveries/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):disasterrecoveries/\*

Delete a zone-disaster recovery.

odps:GetCrossRegionReplication

acs:odps:{#regionId}:{#accountId}:crossregionreplication/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):crossregionreplication/\*

Get project-level observation information about cross-region disaster recovery.

odps:GetDisasterRecovery

acs:odps:{#regionId}:{#accountId}:disasterrecoveries/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):Product/\*

Get project-level observation information about zone-disaster recovery.

odps:ListAvailableReplicationRegions

acs:odps:{#regionId}:{#accountId}:crossregionreplication/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):crossregionreplication/\*

Get available backup regions for cross-region disaster recovery.

odps:ListCrossRegionReplications

acs:odps:{#regionId}:{#accountId}:crossregionreplication/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):crossregionreplication/\*

Get project-level observation information about cross-region disaster recovery in batches.

odps:ListDisasterRecoveries

acs:odps:{#regionId}:{#accountId}:disasterrecoveries/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):disasterrecoveries/\*

Get project-level observation information about zone-disaster recovery in batches.

odps:SwitchCrossRegionReplication

acs:odps:{#regionId}:{#accountId}:crossregionreplication/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):crossregionreplication/\*

Initiate a cross-region disaster recovery switchover.

odps:CreateCrossRegionReplication

acs:odps:{#regionId}:{#accountId}:crossregionreplication/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):crossregionreplication/\*

Create a cross-region disaster recovery.

### **Tenant management**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

Tenant management - tenant properties

odps:GetTenantSetting

acs:odps:{#accountId}:tenant/settings/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):tenant/settings/\*

View tenant configurations.

odps:UpdateTenantSetting

acs:odps:{#accountId}:tenant/settings/{#key}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):tenant/settings/namespaceSchema

Modify tenant configurations.

Tenant management - network connectivity (NetworkLink)

odps:ListNetworkLinks

acs:odps:{#regionId}:{#accountId}:networklink/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):networkLinks/\*

View all network connections within a tenant.

odps:CreateNetworkLink

Create a network connection.

odps:GetNetworkLink

acs:odps:{#regionId}:{#accountId}:networklink/{#networkLinkName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):networkLinks/networklink\_1(NetworkLink name)

Get information about a network connection.

odps:RemoveNetworkLink

Delete a network connection.

Tenant management - image management

odps:ListImage

acs:odps:{#regionId}:{#accountId}:image/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):image/\*

Query the list of custom images.

odps:AddImage

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):image/\*

Create a custom image.

odps:GetImage

acs:odps:{#regionId}:{#accountId}:image/{#name}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):image/image1

Query information about a custom image.

odps:RemoveImage

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):image/{name}

Delete a custom image.

Tenant management - external data sources

odps:ListTenantObjectBindings

acs:odps:{#regionId}:{#accountId}:tenant/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):tenant/\*

List projects to which tenant-side resources are bound.

odps:UpdateTenantObjectBindings

Update a project to which a tenant-side resource is bound.

odps:UpdateForeignServer

acs:odps:{#regionId}:{#accountId}:foreignservers/{#foreignServerName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):foreignservers/foreign\_1

Update an external data source.

odps:DeleteForeignServer

Delete an external data source.

odps:GetForeignServer

Get an external data source.

odps:ListForeignServers

acs:odps:{#regionId}:{#accountId}:foreignservers/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):foreignservers/\*

View the list of external data sources.

odps:CreateForeignServer

Create an external data source.

Tenant-level user and role management

odps:ListTenantUsers

acs:odps:{#accountId}:tenantUsers/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):tenantUsers/\*

View the list of tenant-level users.

odps:AddTenantUsers

Add tenant-level users.

odps:RemoveTenantUsers

Delete tenant-level users.

odps:UpdateTenantRolesToUser

Modify the tenant-level role of a single user.

odps:ListAllTenantRoles

acs:odps{#accountId}}:tenantRoles/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):tenantRoles/\*

View the list of tenant-level roles.

odps:CreateTenantRole

Create a tenant-level role.

odps:UpdateTenantRolePolicy

acs:odps:{#accountId}:tenantRoles/{#roleName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):tenantRoles/tenantrole\_1(Tenant-level role name)

Update the policy authorization of a tenant-level role.

odps:GetTenantRolePolicy

Get the policy authorization of a single tenant-level role.

odps:RemoveTenantRole

Delete a tenant-level role.

### **Intelligent optimization**

#### **Intelligent materialized views - recommendation and management**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

Materialized view

odps:ListGlobalConfig

acs:odps:{#regionId}:{#accountId}:globalconfig/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):globalconfig/\*

View global configuration switches. Currently, only materialized views are supported.

odps:GetGlobalConfig

acs:odps:{#regionId}:{#accountId}:globalconfig/{#configName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):globalconfig/mvrecommendation

Get a single global configuration switch. Currently, only materialized views are supported.

odps:CloseGlobalConfig

Close a single global configuration switch. Currently, only materialized views are supported.

odps:UpdateGlobalConfig

Modify a single global configuration switch. Currently, only materialized views are supported.

odps:ListMvRecommendationSupportProjects

acs:odps:{#regionId}:{#accountId}:projects/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/\*

View the list of projects for which materialized view recommendation is enabled.

odps:CheckMvRecommendationSupportProjects

Check the list of projects for which materialized view recommendation is enabled.

odps:ListMvRecommendations

View the list of recommended materialized views.

odps:GetMvRecommendation

View information about a recommended materialized view.

odps:AddMvRecommendationSupportProject

acs:odps:{#regionId}:{#accountId}:projects/{#projectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj\_1

Add a project for which materialized view recommendation is enabled.

odps:RemoveMvRecommendationSupportProject

Remove a project for which materialized view recommendation is enabled.

odps:CreateMaterializedView

Create a materialized view.

odps:GetMaterializedViewStatus

View the creation status of a materialized view.

odps:ListMaterializedViews

View all created materialized views.

odps:GetMaterializedView

View information about a materialized view.

odps:UpdateMaterializedView

Update information about a materialized view.

odps:DeleteMaterializedView

Delete a materialized view.

odps:ListProjectMvRecommendations

View the list of recommended materialized views for a project.

odps:GetProjectMvRecommendation

View information about a recommended materialized view for a project.

odps:ListMvRecommendationsByProject

View the list of recommended materialized views for a project.

odps:GetMvRecommendationByProject

View information about a recommended materialized view for a project.

odps:ListMvRecommendationJobInfo

View job information related to a recommended materialized view.

odps:ListMaterializedViewJobInfo

View job information related to a materialized view.

odps:GetMaterializedViewsUtility

acs:odps:{#regionId}:{#accountId}:projects/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/\*

Get benefit information of materialized views.

odps:GetMaterializedViewsUtilityByProject

acs:odps:{#regionId}:{#accountId}:projects/{#projectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj

Get benefit information of materialized views for a specific project.

odps:GetMvRecommendationsUtility

acs:odps:{#regionId}:{#accountId}:projects/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/\*

Get benefit information of recommended materialized views.

odps:GetMvRecommendationsUtilityByProject

acs:odps:{#regionId}:{#accountId}:projects/{#projectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj

Get benefit information of recommended materialized views for a specific project.

#### **Intelligent materialized views - automatic materialized views**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

Intelligent optimization - intelligent materialized views - automatic materialized views

odps:GetAutoMvUtility

acs:odps:{#regionId}:{#accountId}:projects/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/\*

View the benefits of automatic materialized views.

odps:GetAutoMvUtilityByProject

acs:odps:{#regionId}:{#accountId}:projects/{#ProjectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj\_1

View the benefits of automatic materialized views for a specific project.

odps:ListAutoMv

acs:odps:{#regionId}:{#accountId}:projects/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/\*

View the list of automatic materialized views.

odps:ListAutoMvByProject

acs:odps:{#regionId}:{#accountId}:projects/{#ProjectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj\_1

View the list of automatic materialized views for a specific project.

odps:GetAutoMvUtilityTrend

acs:odps:{#regionId}:{#accountId}:projects/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/\*

View the benefit trend chart of automatic materialized views.

odps:GetAutoMvUtilityTrendByProject

acs:odps:{#regionId}:{#accountId}:projects/{#ProjectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj\_1

View the benefit trend chart of automatic materialized views for a specific project.

odps:GetAutoMvDetail

acs:odps:{#regionId}:{#accountId}:projects/{#ProjectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj\_1

View the details of automatic materialized views for a specific project.

odps:ListAutoMvProjects

acs:odps:{#regionId}:{#accountId}:projects/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/\*

View the configuration information of automatic materialized views for all projects.

odps:UpdateAutoMvProject

acs:odps:{#regionId}:{#accountId}:projects/{#ProjectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prj\_1

Update the configuration information of automatic materialized views for a project.

#### **Computing resource configuration optimization**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

Cost optimization - upgrade/downgrade recommendations for subscription computing resources

odps:CreateQuotaHistoryRequestAnalysis

acs:odps:{#regionId}:{#accountId}:quotas/{#NickName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):quotas/quota\_1(Level-1 quota name)

Initiate a request to analyze the usage of a quota group for cost optimization (subscription).

odps:GetQuotaHistoryRequestAnalysis

Get the result of the usage analysis of a quota group for cost optimization (subscription).

odps:CreateQuotaScheduleEffectAnalysis

Initiate a request to evaluate the current situation for cost optimization (subscription).

odps:GetQuotaScheduleEffectAnalysis

Get the result of the current situation evaluation for cost optimization (subscription).

odps:CreateQuotaScheduleSuggestion

Initiate a request for recommended configurations for cost optimization (subscription).

odps:GetQuotaScheduleSuggestion

Get the result of recommended configurations for cost optimization (subscription).

Cost optimization -

upgrading/downgrading a pay-as-you-go project to a subscription quota

odps:ListQuotaRecentlyActiveProjects

acs:odps:{#regionId}:{#accountId}:quotas/{#NickName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):quotas/quota\_1(Level-1 quota name)

Get the list of projects for cost optimization (pay-as-you-go).

odps:CreateQuotaHistoryRequestAnalysisWithProjects

acs:odps:{#regionId}:{#accountId}:projects/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):projects/prjname

Initiate a request to analyze the usage of projects and quota groups for cost optimization (pay-as-you-go).

odps:GetQuotaHistoryRequestAnalysisWithProjects

Get the result of the usage analysis of projects and quota groups for cost optimization (pay-as-you-go).

odps:CreateQuotaScheduleEffectAnalysisWithProjects

Initiate a request to evaluate the current situation for cost optimization (pay-as-you-go).

odps:GetQuotaScheduleEffectAnalysisWithProjects

Get the result of the current situation evaluation for cost optimization (pay-as-you-go).

odps:CreateQuotaScheduleSuggestionWithProjects

Initiate a request for recommended configurations for cost optimization (pay-as-you-go).

odps:GetQuotaScheduleSuggestionWithProjects

Get the result of recommended configurations for cost optimization (pay-as-you-go).

#### **Tiered storage configuration optimization**

**Category**

**Action**

**ARN**

**ARN example**

**Description**

Cost optimization - storage cost optimization

odps:GetStorageSuggestion

acs:odps:{#regionId}:{#accountId}:storage/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):storage/\*

Get storage cost optimization suggestions.

odps:GetStorageSuggestionByProject

acs:odps:{#regionId}:{#accountId}:storage/{#projectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):storage/prj

Get storage cost optimization suggestions for a specific project.

odps:GetStorageSuggestionSummary

acs:odps:{#regionId}:{#accountId}:storage/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):storage/\*

Storage cost optimization summary.

odps:GetStorageSuggestionSummaryByProject

acs:odps:{#regionId}:{#accountId}:storage/{#projectName}

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):storage/prj

Storage cost optimization summary for a specific project.

odps:GetStorageSummaryCompared

acs:odps:{#regionId}:{#accountId}:storage/\*

acs:odps:cn-hangzhou:12345(Alibaba Cloud account ID):storage/\*

Storage observation comparison.

## Condition element

The `Condition` element specifies the conditions required for a policy to take effect. It consists of one or more condition clauses. A condition clause consists of a condition operator, a condition key, and a condition value. For more information, see [Conditions](/help/en/ram/policy-elements#section-jix-u0j-2ms).

The condition operators and condition keys for MaxCompute are as follows:

-   Condition operator types:
    
    **Condition operator type**
    
    **Supported type**
    
    Boolean
    
    Bool
    
-   Condition keys:
    
    **Condition key**
    
    **Description**
    
    odps:Encryption
    
    Restricts whether a MaxCompute project is encrypted during creation. Valid values:
    
    -   true: The project must be encrypted.
        
    -   false: The project is not encrypted.
        
    
    For more information about MaxCompute data encryption, see [Data encryption](/help/en/maxcompute/security-and-compliance/storage-encryption#concept-1918053).
    

## Access policies

Resource Access Management (RAM) supports two types of access policies: system policies managed by Alibaba Cloud and custom policies managed by you.

-   System policies
    
    MaxCompute provides two system policies in RAM:
    
    -   `AliyunMaxComputeFullAccess`: This policy includes all the permissions listed in this topic for the MaxCompute integration with RAM. You can attach this policy directly to a RAM user or RAM role. However, this may grant excessive permissions. Use this policy with caution.
        
    -   `AliyunMaxComputeReadOnlyAccess`: This policy includes all `List` and `Get` permissions for the MaxCompute integration with RAM. You can attach this policy directly to a RAM user or RAM role.
        
    
-   Custom policies
    
    You can create custom policies in the RAM console for fine-grained permission management. For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy#task-2149286). A RAM policy includes a version (\`Version\`) and one or more statements (\`Statement\`). Each statement includes an effect (\`Effect\`), actions (\`Action\`), resources (\`Resource\`), and an optional condition (\`Condition\`). The values for Action and Resource (Alibaba Cloud Resource Name) are obtained from the Action and ARN columns in the permission list. For more information, see [Permissions](#96f2634a5edpp). The value for Condition is obtained from the condition description. For more information, see [Condition element](#section-y69-kaq-zol). For more information about the syntax and structure of access policies, see [Policy structure and syntax](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb).
    
    The following are examples of custom policies.
    
    -   Policy for managing MaxCompute project objects
        
        ```
        {
            "Version": "1",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": [
                        "odps:ListProjects",
                        "odps:GetProject",
                        "odps:CreateProject",
                        "odps:DeleteProject",
                        "odps:UpdateProjectDefaultQuota",
                        "odps:UpdateProjectStatus",
                        "odps:UpdateUsersToSuperAdmin",
                        "odps:ListOutboundInternetAddress",
                        "odps:UpdateOutboundInternetAddress"
                  
                    ],
                    "Resource": "*"
                }
            ]
        }
        ```
        
    -   Policy for managing MaxCompute quota objects
        
        ```
        {
            "Version": "1",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": [
                        "odps:UpdateQuota",
                        "odps:UpdateQuotaPlan",
                        "odps:UpdateSubQuotas",
                        "odps:UpdateQuotaSchedule",
                        "odps:CreateQuotaPlan",
                        "odps:DeleteQuotaPlan",
                        "odps:CreateQuotaSchedule",
                        "odps:ListQuotaRoutingRules",
                        "odps:CreateQuotaRoutingRule",
                        "odps:GetQuotaRoutingRule",
                        "odps:RemoveQuotaRoutingRule",
                        "odps:UpdateQuotaRoutingRule"         
                    ],
                    "Resource": "*"
                }
            ]
        }
        ```
        
    -   Policy to deny the creation of unencrypted MaxCompute projects
        
        ```
        {
         "Version": "1",
         "Statement": [
         {
         "Effect": "Deny",
         "Action": "odps:CreateProject",
                    "Resource": "*",
                    "Condition": {
                        "Bool": {
                            "odps:Encryption": [
                                "false"
                            ]
                        }
                    }
                }
            ]
        }
        ```
        
    -   Policy to allow viewing MaxCompute resource observation data
        
        ```
        {
            "Version": "1",
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": [
                        "odps:GetMetric",
                        "odps:GetQuotaUsage",
                        "odps:GetStorageSummaryCompared",
                        "odps:GetStorageSizeSummary",
                        "odps:SumDailyBillsByItem",
                        "odps:SumStorageMetricsByDate",
                        "odps:GetStorageAmountSummary",
                        "odps:ListStorageProjectsInfo",
                        "odps:ListTopJobInfo",
                        "odps:ListStorageTablesInfo",
                        "odps:ListStoragePartitionsInfo",
                        "odps:GetTableAccessInfoTopK",
                        "odps:GetTableIpAccessInfoTopK",
                        "odps:GetTableAccessInfo",
                        "odps:ListTableSlotDetail",
                        "odps:GetTunnelThroughputSummary"
                    ],
                    "Resource": "*"
                }
            ]
        }
        ```
