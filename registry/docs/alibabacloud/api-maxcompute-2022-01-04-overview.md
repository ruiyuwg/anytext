## API standard and pre-built SDKs in multi-language

The OpenAPI specification of this product (`MaxCompute/2022-01-04`) follows the [ROA](/help/en/sdk/product-overview/roa-mechanism) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages to abstract low-level complexities such as request signing. This enables developers to call APIs using language-specific syntax without dealing with HTTP details directly.

## **C**ustom signature

If your specific needs, such as a customized signature, are not supported by the SDK, manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Note that manual signing requires significant effort (usually about 5 business days). For support, join our DingTalk group (ID: 147535001692).

## **Before you begin**

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. To call APIs securely, [create a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API access only, configure its AccessKey pairs, and implement the principle of least privilege (PoLP) through RAM policies. Use the Alibaba Cloud account only when its permissions are explicitly required for specific scenarios.

## Quota Management

**API**

**Title**

**Description**

[ListQuotas](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listquotas)

ListQuotas

Retrieves a list of quotas.

[GetQuota](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getquota)

GetQuota

Retrieve information for the specified level-1 quota group. Warning: This operation will be decommissioned on July 31, 2024. It will be replaced by the \`QueryQuota\` operation. The request parameters, response parameters, and features of the two operations are the same.

Compute Quota

Compute Quota

[ListComputeQuotaPlan](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listcomputequotaplan)

ListComputeQuotaPlan

Lists compute quota plans.

[UpdateComputeQuotaSchedule](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-updatecomputequotaschedule)

UpdateComputeQuotaSchedule

Updates the time-based schedule for a computing quota.

Tunnel Quota

Tunnel Quota

## Project Management

**API**

**Title**

**Description**

Basic Management (Project)

Basic Management (Project)

[GetProject](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getproject)

GetProject

Queries the basic information about a MaxCompute project.

[UpdateProjectBasicMeta](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-updateprojectbasicmeta)

UpdateProjectBasicMeta

Modifies the basic information of a project.

[UpdateProjectModelTier](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-updateprojectmodeltier)

UpdateProjectModelTier

Upgrades a project's Layer 2 model to a Layer 3 model.

[DeleteProject](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-deleteproject)

DeleteProject

Deletes a MaxCompute project. This operation is irreversible. Use this API with caution.

Role Permissions

Role Permissions

[UpdateUsersToRole](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-updateuserstorole)

UpdateUsersToRole

Adds or removes users from a project role.

## Resource Observation

**API**

**Title**

**Description**

[QueryQuotaMetric](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-queryquotametric)

QueryQuotaMetric

Queries the time series data of resource consumption for a quota.

[QueryTunnelMetricDetail](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-querytunnelmetricdetail)

QueryTunnelMetricDetail

Queries detailed data for the Tunnel Data Transmission Service within a specified time range.

[QueryTunnelMetric](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-querytunnelmetric)

QueryTunnelMetric

Queries metric data for the Tunnel Data Transmission Service within a specified time range.

[QueryStorageMetric](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-querystoragemetric)

QueryStorageMetric

Queries time-series metrics of data storage.

[GetStorageSizeSummary](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getstoragesizesummary)

GetStorageSizeSummary

Retrieves a summary of storage usage.

[GetStorageAmountSummary](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getstorageamountsummary)

GetStorageAmountSummary

Retrieves a summary of the total storage amount.

[GetStorageSummaryCompared](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getstoragesummarycompared)

GetStorageSummaryCompared

Retrieves the year-on-year (YoY) change in storage usage.

[ListStorageProjectsInfo](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-liststorageprojectsinfo)

ListStorageProjectsInfo

Retrieves the storage details of projects.

[SumStorageMetricsByDate](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-sumstoragemetricsbydate)

SumStorageMetricsByDate

Retrieves the storage information for each category or project on a specified date.

## Job Management

**API**

**Title**

**Description**

[ListJobInfos](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listjobinfos)

ListJobInfos

Retrieves a list of jobs.

[ListJobSnapshotInfos](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listjobsnapshotinfos)

ListJobSnapshotInfos

Retrieves job snapshot data at a specific point in time.

## Data Migration

**API**

**Title**

**Description**

[CreateMmsDataSource](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-createmmsdatasource)

CreateMmsDataSource

Creates a data source to migrate data to MaxCompute using MaxCompute Migration Assist (MMA).

[GetMmsDataSource](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getmmsdatasource)

GetMmsDataSource

Retrieves the details of a single MaxCompute Migration Assist (MMA) data source.

[ListMmsDataSources](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listmmsdatasources)

ListMmsDataSources

Lists the MaxCompute Migration Assist (MMA) data sources.

[UpdateMmsDataSource](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-updatemmsdatasource)

UpdateMmsDataSource

Refreshes the metadata of a MaxCompute Migration Assist (MMA) data source.

[DeleteMmsDataSource](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-deletemmsdatasource)

DeleteMmsDataSource

Deletes a MaxCompute Migration Assist (MMA) data source and its associated migration plans and metadata.

[CreateMmsFetchMetadataJob](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-createmmsfetchmetadatajob)

CreateMmsFetchMetadataJob

Creates a job to pull metadata from a data source.

[GetMmsFetchMetadataJob](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getmmsfetchmetadatajob)

GetMmsFetchMetadataJob

Retrieves the details of a MaxCompute Migration Assist (MMA) job that fetches metadata.

[ListMmsDbs](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listmmsdbs)

ListMmsDbs

List databases in the MMA data source.

[GetMmsDb](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getmmsdb)

GetMmsDb

Retrieves a database from a MaxCompute Migration Assist (MMA) data source.

[ListMmsTables](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listmmstables)

ListMmsTables

Lists the tables in a MaxCompute Migration Assist (MMA) data source.

[GetMmsTable](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getmmstable)

GetMmsTable

Retrieves a table from a MaxCompute Migration Assist (MMA) data source.

[ListMmsPartitions](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listmmspartitions)

ListMmsPartitions

Lists the partitions in a MaxCompute Migration Assist (MMA) data source.

[GetMmsPartition](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getmmspartition)

GetMmsPartition

Retrieves a partition from a MaxCompute Migration Assist (MMA) data source.

[CreateMmsJob](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-createmmsjob)

CreateMmsJob

Creates a data migration task.

[ListMmsJobs](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listmmsjobs)

ListMmsJobs

Lists migration jobs.

[GetMmsJob](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getmmsjob)

GetMmsJob

Retrieves the details of a single MaxCompute Migration Assist (MMA) migration plan.

[GetMmsAsyncTask](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getmmsasynctask)

GetMmsAsyncTask

Retrieves a single asynchronous task from MaxCompute Migration Assist (MMA).

[DeleteMmsJob](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-deletemmsjob)

DeleteMmsJob

Deletes a MaxCompute Migration Assist (MMA) data migration plan.

[StartMmsJob](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-startmmsjob)

StartMmsJob

Starts a data migration job.

[StopMmsJob](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-stopmmsjob)

StopMmsJob

Stops a data migration job.

[RetryMmsJob](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-retrymmsjob)

RetryMmsJob

Retries a data migration job.

[ListMmsTasks](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listmmstasks)

ListMmsTasks

Retrieves a list of migration tasks.

[GetMmsTask](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getmmstask)

GetMmsTask

Retrieves the details of a specific migration task.

[ListMmsTaskLogs](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listmmstasklogs)

ListMmsTaskLogs

Lists the execution logs for a specific migration task.

## Others

**API**

**Title**

**Description**

[ApplyComputeQuotaPlan](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-applycomputequotaplan)

ApplyComputeQuotaPlan

Activate a Quota Plan Immediately.

[CreateComputeQuotaPlan](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-createcomputequotaplan)

CreateComputeQuotaPlan

Creates a quota plan.

[CreatePackage](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-createpackage)

CreatePackage

Creates a package.

[CreateProject](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-createproject)

CreateProject

Creates a MaxCompute project.

[CreateQuotaPlan](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-createquotaplan)

CreateQuotaPlan

Creates a quota plan.

[CreateRole](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-createrole)

CreateRole

Creates a role at the MaxCompute project level.

[DeleteComputeQuotaPlan](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-deletecomputequotaplan)

DeleteComputeQuotaPlan

Deletes a MaxCompute quota plan.

[DeleteQuotaPlan](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-deletequotaplan)

DeleteQuotaPlan

Deletes a quota plan.

[GetComputeEffectivePlan](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getcomputeeffectiveplan)

GetComputeEffectivePlan

GetComputeEffectivePlan.

[GetComputeQuotaPlan](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getcomputequotaplan)

GetComputeQuotaPlan

Get detailed information of a single compute quota plan.

[GetComputeQuotaSchedule](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getcomputequotaschedule)

GetComputeQuotaSchedule

Displays the time-specific configuration of compute quota.

[GetJobInfo](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getjobinfo)

GetJobInfo

Queries the basic information about a job.

[GetJobResourceUsage](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getjobresourceusage)

GetJobResourceUsage

Performs statistics on all jobs that are complete on a specified day and obtains the total resource usage of each job executor on a daily basis.

[GetPackage](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getpackage)

GetPackage

Obtains the information about a package.

[GetQuotaPlan](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getquotaplan)

GetQuotaPlan

Obtains the information of a quota plan.

[GetQuotaSchedule](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getquotaschedule)

GetQuotaSchedule

Obtains the scheduling plan for a quota plan.

[GetQuotaUsage](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getquotausage)

GetQuotaUsage

Queries quota resource consumption information.

[GetRoleAcl](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getroleacl)

GetRoleAcl

Obtains the ACL-based permissions that is granted to a project-level role.

[GetRoleAclOnObject](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getroleaclonobject)

GetRoleAclOnObject

Obtains ACL-based permissions on an object that are granted to a project-level role.

[GetRolePolicy](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getrolepolicy)

GetRolePolicy

Obtains the policy that is attached to a project-level role.

[GetRunningJobs](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-getrunningjobs)

GetRunningJobs

Obtains the running state data of jobs that are in the running state in a specified period of time.

[GetTableInfo](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-gettableinfo)

GetTableInfo

Views the information about MaxCompute internal tables, views, external tables, clustered tables, or transactional tables.

[GetTrustedProjects](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-gettrustedprojects)

GetTrustedProjects

Obtains the trusted projects of the current project.

[KillJobs](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-killjobs)

KillJobs

Terminates a running job.

[ListComputeMetricsByInstance](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listcomputemetricsbyinstance)

ListComputeMetricsByInstance

Queries a list of computing resources used by a pay-as-you-go job.

[ListFunctions](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listfunctions)

ListFunctions

Obtains functions in a MaxCompute project.

[ListJobMetric](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listjobmetric)

ListJobMetric

Queries a performance metric of the job that is complete.

[ListPackages](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listpackages)

ListPackages

Queries the packages in a MaxCompute project.

[ListProjectUsers](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listprojectusers)

ListProjectUsers

Queries a list of users in a project.

[ListProjects](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listprojects)

ListProjects

Queries a list of MaxCompute projects.

[ListQuotasPlans](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listquotasplans)

ListQuotasPlans

Obtains quota plans.

[ListResources](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listresources)

ListResources

Obtains resources in a MaxCompute project.

[ListRoles](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listroles)

ListRoles

Obtains MaxCompute project-level roles.

[ListStoragePartitionsInfo](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-liststoragepartitionsinfo)

ListStoragePartitionsInfo

Queries the storage details of a specific partition in a partitioned table in a MaxCompute project.

[ListStorageTablesInfo](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-liststoragetablesinfo)

ListStorageTablesInfo

Queries the table storage details of a MaxCompute project.

[ListTables](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listtables)

ListTables

Obtains tables in a MaxCompute project.

[ListUsers](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listusers)

ListUsers

Obtains users in a MaxCompute project.

[ListUsersByRole](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-listusersbyrole)

ListUsersByRole

Obtains information about the users who are assigned a project-level role.

[QueryQuota](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-queryquota)

QueryQuota

Queries the information about a specified level-1 quota group.

[UpdateComputeQuotaPlan](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-updatecomputequotaplan)

UpdateComputeQuotaPlan

Update the ComputeQuotaPlan.

[UpdateComputeSubQuota](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-updatecomputesubquota)

UpdateComputeSubQuota

Updates the basic configuration of a MaxCompute quota. For example, you can call this operation to add or delete a level-2 quota, define the basic attributes of a level-2 quota, and define the configuration of compute units (CUs) for a quota plan that is in effect.

[UpdatePackage](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-updatepackage)

UpdatePackage

Updates the objects in a package and projects in which the package can be installed.

[UpdateProjectDefaultQuota](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-updateprojectdefaultquota)

UpdateProjectDefaultQuota

Updates the default computing quota of a project.

[UpdateProjectIpWhiteList](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-updateprojectipwhitelist)

UpdateProjectIpWhiteList

Modifies the IP address whitelist of a MaxCompute project.

[UpdateQuotaPlan](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-updatequotaplan)

UpdateQuotaPlan

Updates a quota plan.

[UpdateQuotaSchedule](/help/en/maxcompute/user-guide/api-maxcompute-2022-01-04-updatequotaschedule)

UpdateQuotaSchedule

Updates the scheduling plan for a quota plan.
