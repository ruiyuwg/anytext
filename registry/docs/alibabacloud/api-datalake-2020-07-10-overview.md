## API standard and pre-built SDKs in multi-language

The OpenAPI specification of this product (`DataLake/2020-07-10`) follows the [ROA](/help/en/sdk/product-overview/roa-mechanism) standard. Alibaba Cloud provides pre-built [SDKs](https://api.alibabacloud.com/api-tools/sdk/OpenAPIExplorer?version=2024-11-30) for popular programming languages to abstract low-level complexities such as request signing. This enables developers to call APIs using language-specific syntax without dealing with HTTP details directly.

## **C**ustom signature

If your specific needs, such as a customized signature, are not supported by the SDK, manually sign requests using the [signature mechanism](/help/en/sdk/product-overview/roa-mechanism). Note that manual signing requires significant effort (usually about 5 business days). For support, join our DingTalk group (ID: 147535001692).

## **Before you begin**

An Alibaba Cloud account has full administrative privileges. A compromised AccessKey pair exposes all associated resources to unauthorized access, posing a significant security risk. [Create a Resource Access Management (RAM) user](/help/en/ram/user-guide/create-a-ram-user) with API-only access and use RAM policies to apply the principle of least privilege (PoLP). Alibaba Cloud accounts are only used when explicitly required.

To call APIs securely, configure the following:

-   A RAM user account
    
-   An [AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair) for the account
    

## Metadata

**API**

**Title**

**Description**

Catalog

Catalog

[CreateCatalog](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-createcatalog)

CreateCatalog

Create a Data Catalog for Data Lake.

[DeleteCatalog](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-deletecatalog)

DeleteCatalog

Deletes a data directory.

[UpdateCatalog](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-updatecatalog)

UpdateCatalog

Updates the contents of the Data Catalog.

[ListCatalogs](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listcatalogs)

ListCatalogs

You can call this operation to query the list of metabase namespaces (catalogs).

[GetCatalog](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-getcatalog)

GetCatalog

Obtains the details of a data directory.

Database

Database

[CreateDatabase](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-createdatabase)

CreateDatabase

Create a metadabase in the data lake metadata.

[DeleteDatabase](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-deletedatabase)

DeleteDatabase

Deletes a database in the data lake by name.

[UpdateDatabase](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-updatedatabase)

UpdateDatabase

Update the details of a database in the data lake.

[GetDatabase](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-getdatabase)

GetDatabase

Obtains the details of a database in a data lake.

[ListDatabases](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listdatabases)

ListDatabases

Obtains a list of databases in the data lake and queries them by page. You can match them based on the database name.

Table

Table

[CreateTable](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-createtable)

CreateTable

Add a data table for the data lake.

[DeleteTable](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-deletetable)

DeleteTable

Deletes a data table in a data lake by name.

[DeleteTableColumnStatistics](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-deletetablecolumnstatistics)

DeleteTableColumnStatistics

Recycle field statistics for data tables in the data lake.

[DeleteTableVersion](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-deletetableversion)

DeleteTableVersion

Deletes a specified version of a data table in the data lake.

[UpdateTable](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-updatetable)

UpdateTable

Update the data table information in the data lake based on the name.

[UpdateTableColumnStatistics](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-updatetablecolumnstatistics)

UpdateTableColumnStatistics

Creates or updates field statistics for a data table.

[GetTable](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-gettable)

GetTable

Get detailed information about the data tables in the data lake.

[GetTableColumnStatistics](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-gettablecolumnstatistics)

GetTableColumnStatistics

You can call this operation to obtain statistics about a specified field in a data table in a data lake.

[GetTableVersion](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-gettableversion)

GetTableVersion

Gets a specified version of a data table in the data lake.

[ListTableNames](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listtablenames)

ListTableNames

This function is used only to query the names of data tables in Data Lake.

[ListTables](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listtables)

ListTables

You can call this operation to obtain a list of data tables in the data lake.

[ListTableVersions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listtableversions)

ListTableVersions

Queries the list of specified versions of data tables in a data lake by page.

[GetTableProfile](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-gettableprofile)

GetTableProfile

Obtains the details of a table data profile.

[RenameTable](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-renametable)

RenameTable

is used only to update the name of a data table in the data lake.

[BatchGetTables](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-batchgettables)

BatchGetTables

Obtain detailed information about data tables in the data lake in batches.

[BatchCreateTables](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-batchcreatetables)

BatchCreateTables

Add data tables to a data lake at a time.

[BatchDeleteTables](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-batchdeletetables)

BatchDeleteTables

Deletes multiple data tables in a data lake by name.

[BatchDeleteTableVersions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-batchdeletetableversions)

BatchDeleteTableVersions

Deletes a specified version of a data table in a data lake at a time.

[BatchUpdateTables](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-batchupdatetables)

BatchUpdateTables

Update the details of data tables in the data lake in batches.

Partition

Partition

[CreatePartition](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-createpartition)

CreatePartition

Add a partition to the data table of the data lake.

[DeletePartition](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-deletepartition)

DeletePartition

Deletes a specified partition from a data table in the data lake.

[DeletePartitionColumnStatistics](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-deletepartitioncolumnstatistics)

DeletePartitionColumnStatistics

Reclaim the field statistics of data table partitions in the data lake.

[UpdatePartitionColumnStatistics](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-updatepartitioncolumnstatistics)

UpdatePartitionColumnStatistics

Creates or updates the field statistics of a data table partition.

[GetPartition](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-getpartition)

GetPartition

Get details about the database partitions in the data lake.

[GetPartitionColumnStatistics](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-getpartitioncolumnstatistics)

GetPartitionColumnStatistics

Obtains the statistics of a specified field for a data partition in a data lake.

[ListPartitionNames](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listpartitionnames)

ListPartitionNames

You can call this operation to obtain a list of partition names of data tables in a data lake. This method is usually used for multi-level partitioning.

[ListPartitions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listpartitions)

ListPartitions

Obtains a list of database partition details in the data lake.

[ListPartitionsByFilter](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listpartitionsbyfilter)

ListPartitionsByFilter

Obtain the list of data table partitions in the data lake and query them by filter condition.

[BatchCreatePartitions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-batchcreatepartitions)

BatchCreatePartitions

Add multiple partitions to a data table in a data lake at a time.

[BatchDeletePartitions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-batchdeletepartitions)

BatchDeletePartitions

Deletes multiple partitions of a data table in the data lake.

[BatchGetPartitionColumnStatistics](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-batchgetpartitioncolumnstatistics)

BatchGetPartitionColumnStatistics

Obtains the field statistics of data table partitions in a data lake at a time.

[BatchGetPartitions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-batchgetpartitions)

BatchGetPartitions

Obtains the details of database partitions in a data lake in batches.

[BatchUpdatePartitions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-batchupdatepartitions)

BatchUpdatePartitions

Batch update multiple partitions for a data table in a data lake.

[RenamePartition](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-renamepartition)

RenamePartition

Update the partition name of the data table in the data lake.

Function

Function

[CreateFunction](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-createfunction)

CreateFunction

Added user-defined functions for databases in the data lake.

[DeleteFunction](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-deletefunction)

DeleteFunction

Deletes a user-defined function for a database in the data lake by name.

[UpdateFunction](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-updatefunction)

UpdateFunction

Updates the user-defined function information for a database in the data lake by name.

[ListFunctionNames](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listfunctionnames)

ListFunctionNames

Paged query to obtain the list of function names of the database.

[ListFunctions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listfunctions)

ListFunctions

Obtains a list of user-defined functions for databases in the data lake in bulk.

[GetFunction](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-getfunction)

GetFunction

Obtain the user-defined function of the database in the data lake based on the function name.

Lock

Lock

[CreateLock](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-createlock)

CreateLock

Creates a specified metadata lock.

[GetLock](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-getlock)

GetLock

Queries the specified metadata lock.

[AbortLock](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-abortlock)

AbortLock

Aborts the specified metadata lock.

[RefreshLock](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-refreshlock)

RefreshLock

Refreshes the specified metadata lock.

[UnLock](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-unlock)

UnLock

Unlocks the specified metadata lock.

Metadata Migration

Metadata Migration

[StopMigrationWorkflow](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-stopmigrationworkflow)

StopMigrationWorkflow

Stop the metadata migration task.

[RunMigrationWorkflow](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-runmigrationworkflow)

RunMigrationWorkflow

Runs a metadata migration task.

[GetAsyncTaskStatus](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-getasynctaskstatus)

GetAsyncTaskStatus

Used in metadata-related asynchronous APIs to check the status of asynchronous execution tasks.

[Search](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-search)

Search

Metadata retrieval.

## Permissions

**API**

**Title**

**Description**

[CreateRole](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-createrole)

CreateRole

In the Data Lake Permissions section, add a role.

[GrantRoleToUsers](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-grantroletousers)

GrantRoleToUsers

Grant a Data Lake role to multiple users.

[GrantRolesToUser](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-grantrolestouser)

GrantRolesToUser

Grant multiple roles to a single user.

[GrantPermissions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-grantpermissions)

GrantPermissions

Grant the operation permissions on resources to the User /Data Lake role.

[BatchGrantPermissions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-batchgrantpermissions)

BatchGrantPermissions

Grant the operation permissions on resources to a user or a data lake role at a time.

[DeleteRole](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-deleterole)

DeleteRole

Delete a role from Data Lake Permissions.

[RevokeRoleFromUsers](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-revokerolefromusers)

RevokeRoleFromUsers

Removes multiple users from a single data lake role.

[RevokeRolesFromUser](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-revokerolesfromuser)

RevokeRolesFromUser

Removes multiple roles from a single user.

[RevokePermissions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-revokepermissions)

RevokePermissions

Cancels the operation permissions on resources granted to a User /Data Lake role.

[BatchRevokePermissions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-batchrevokepermissions)

BatchRevokePermissions

You can call this operation to revoke permissions on resources from a user or data lake role at a time.

[UpdateRole](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-updaterole)

UpdateRole

Updates a role that has the data lake permissions.

[UpdateRoleUsers](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-updateroleusers)

UpdateRoleUsers

Update the user in the role to include ram user/ram role.

[UpdatePermissions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-updatepermissions)

UpdatePermissions

Update the permissions of the User /Data Lake role.

[UpdateCatalogSettings](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-updatecatalogsettings)

UpdateCatalogSettings

To update the configurations of Data Lake Catalog, you must assume the admin role or more.

[GetRole](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-getrole)

GetRole

Obtain the role in Data Lake Permissions based on the role name.

[ListRoles](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listroles)

ListRoles

You can query the list of data lake roles.

[ListRoleUsers](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listroleusers)

ListRoleUsers

Gets the list of users for a single role.

[ListUserRoles](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listuserroles)

ListUserRoles

Obtains the list of data lake roles for a single user.

[ListPermissions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listpermissions)

ListPermissions

Queries permissions.

[CheckPermissions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-checkpermissions)

CheckPermissions

Verify user permissions.

[GetCatalogSettings](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-getcatalogsettings)

GetCatalogSettings

To obtain the configurations of Data Lake Catalog, you must assume the admin role or above.

## Data exploration

**API**

**Title**

**Description**

[GetQueryResult](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-getqueryresult)

GetQueryResult

Obtains the results of a data exploration query.

[SubmitQuery](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-submitquery)

SubmitQuery

Submit an SQL query task.

[CancelQuery](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-cancelquery)

CancelQuery

Cancel a query request.

## Universal Services

**API**

**Title**

**Description**

[GetRegionStatus](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-getregionstatus)

GetRegionStatus

You can Data Lake Formation the activation status of the service in the specified region.

[GetServiceStatus](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-getservicestatus)

GetServiceStatus

Obtains the service activation status of a Data Lake Formation user.

[DescribeRegions](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-describeregions)

DescribeRegions

Obtains the list of open regions.

## Other

**API**

**Title**

**Description**

[SearchAcrossCatalog](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-searchacrosscatalog)

SearchAcrossCatalog

Search across catalogs for content such as libraries, tables, and fields.

[RegisterLocation](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-registerlocation)

RegisterLocation

Register the OSS path to be managed by DLF.

[DeregisterLocation](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-deregisterlocation)

DeregisterLocation

Cancel Location registration.

[UpdateRegisteredLocation](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-updateregisteredlocation)

UpdateRegisteredLocation

Edit a Registered Location.

[ListPartitionsByExpr](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listpartitionsbyexpr)

ListPartitionsByExpr

Obtains a list of data table partitions in the data lake and queries them by condition.

[GetDatabaseProfile](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-getdatabaseprofile)

GetDatabaseProfile

Gets the details of the database data profile.

[GetLifecycleRule](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-getlifecyclerule)

GetLifecycleRule

Obtains the lifecycle rules of a database and table.

[ListPartitionsProfile](/help/en/dlf/dlf-1-0/developer-reference/api-datalake-2020-07-10-listpartitionsprofile)

ListPartitionsProfile

Obtains the details of a partition data profile.
