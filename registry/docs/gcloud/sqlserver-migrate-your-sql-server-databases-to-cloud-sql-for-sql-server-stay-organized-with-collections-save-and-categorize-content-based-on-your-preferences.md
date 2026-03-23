-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Databases](https://docs.cloud.google.com/docs/databases)
-   [Database Migration Service](https://docs.cloud.google.com/database-migration/docs)
-   [Homogeneous migration to SQL Server](https://docs.cloud.google.com/database-migration/docs/sqlserver/scenario-overview)

Send feedback

# Migrate your SQL Server databases to Cloud SQL for SQL Server Stay organized with collections Save and categorize content based on your preferences.

This page describes how to migrate your SQL Server databases to Cloud SQL for SQL Server instance with Database Migration Service.

The migration process involves the following tasks:

1.  Exporting full database backup, and transaction log files from the source SQL Server instance.
    
    You can also use the optional differential database backup in your migration process.
    
2.  Uploading your backup files to a Cloud Storage bucket.
    
3.  Creating the destination Cloud SQL for SQL Server instance.
    
4.  Creating and running the migration job in Database Migration Service.
    
5.  Monitoring the migration job progress with Database Migration Service observability features.
    
6.  Promoting the migration job after the data is fully migrated.
    

## Costs

For homogenous migrations to Cloud SQL, Database Migration Service is offered at no additional charge. However, Cloud SQL and Cloud Storage pricing applies for network charges as well as Cloud SQL and Cloud Storage entities created for migration purposes.

In this document, you use the following billable components of Google Cloud:

-   Cloud Storage
-   Cloud SQL

To generate a cost estimate based on your projected usage, use the [pricing calculator](/products/calculator).

## Before you begin

1.  Verify if this migration path can fully support your scenario. See [SQL Server Known limitations](/database-migration/docs/sqlserver/known-limitations).
2.  Consider in which region you want to create the destination database. Database Migration Service is a fully-regional product, meaning all entities related to your migration (source and destination connection profiles, migration jobs, destination databases, storage buckets) must be saved in a single region.
3.  In the Google Cloud console, on the project selector page, select or [create a Google Cloud project](/resource-manager/docs/creating-managing-projects).
    
    [Go to project selector](https://console.cloud.google.com/projectselector2/home/dashboard)
    
4.  Enable the Database Migration Service, Compute Engine, Cloud Storage, and Cloud SQL Admin APIs.
    
    [Enable the APIs](https://console.cloud.google.com/flows/enableapi?apiid=compute.googleapis.com,datamigration.googleapis.com,sqladmin.googleapis.com,storage.googleapis.com)
    

### Required roles

To get the permissions that you need to perform homogeneous SQL Server migrations with Database Migration Service, ask your administrator to grant the required IAM roles on your project for the following [accounts involved in the migration process](/database-migration/docs/sqlserver/access-control)

-   User account that performs the migration:
    -   [Database Migration Admin](/iam/docs/roles-permissions/datamigration#datamigration.admin) (`roles/datamigration.admin`)
    -   [Storage Admin](/iam/docs/roles-permissions/storage#storage.admin) (`roles/storage.admin`)
    -   [Cloud SQL Editor](/iam/docs/roles-permissions/cloudsql#cloudsql.editor) (`roles/cloudsql.editor`)
-   Database Migration Service service account:
    -   [Database Migration Admin](/iam/docs/roles-permissions/datamigration#datamigration.admin) (`roles/datamigration.admin`)
    -   [Storage Admin](/iam/docs/roles-permissions/storage#storage.admin) (`roles/storage.admin`)
    -   [Cloud SQL Editor](/iam/docs/roles-permissions/cloudsql#cloudsql.editor) (`roles/cloudsql.editor`)
    -   [Cloud SQL Studio User](/iam/docs/roles-permissions/cloudsql#cloudsql.studioUser) (`roles/cloudsql.studioUser`)

For more information about granting roles, see [Manage access](/iam/docs/granting-changing-revoking-access).

These predefined roles contain the permissions required to perform homogeneous SQL Server migrations with Database Migration Service. To see the exact permissions that are required, expand the **Required permissions** section:

#### Required permissions

The following permissions are required to perform homogeneous SQL Server migrations with Database Migration Service:

-   User account that performs the migration:
    -   `datamigration.*`
    -   `resourcemanager.projects.get`
    -   `resourcemanager.projects.list`
    -   `cloudsql.operations.get`
    -   `cloudsql.instances.create`
    -   `cloudsql.instances.get`
    -   `cloudsql.instances.list`
    -   `cloudsql.instances.import`
    -   `cloudsql.databases.get`
    -   `cloudsql.databases.list`
    -   `cloudsql.databases.delete`
    -   `compute.machineTypes.list`
    -   `compute.machineTypes.get`
    -   `compute.projects.get`
    -   `storage.buckets.create`
    -   `storage.buckets.list`
-   Database Migration Service service account:
    -   `datamigration.*`
    -   `resourcemanager.projects.get`
    -   `resourcemanager.projects.list`
    -   `cloudsql.instances.create`
    -   `cloudsql.instances.get`
    -   `cloudsql.instances.list`
    -   `cloudsql.instances.executeSql`
    -   `storage.objects.create`
    -   `storage.objects.list`

You might also be able to get these permissions with [custom roles](/iam/docs/creating-custom-roles) or other [predefined roles](/iam/docs/roles-permissions).

## Prepare your source data

To prepare your source data for migration, follow these steps:

1.  [Consider your backup strategy for the migration process](/database-migration/docs/sqlserver/supported-backup-files). Database Migration Service supports using a differential backup and the transaction log files for migrating data that appears in your database after you take the full backup.
    
2.  [Perform a full backup of your source SQL Server database](/database-migration/docs/sqlserver/export-backup-files). Make sure you use the correct naming pattern.
    
3.  [Prepare a Cloud Storage bucket and upload your backup files to it](/database-migration/docs/sqlserver/storage-buckets). Make sure you set up the necessary directory structure for each backup file type you want to use.
    
4.  [Create a source connection profile](/database-migration/docs/sqlserver/create-source-connection-profile) for the Cloud Storage bucket.
    

## Prepare your Cloud SQL for SQL Server destination instance

To configure your destination Cloud SQL instance, perform the following steps:

1.  [Create and configure your Cloud SQL for SQL Server destination instance](/database-migration/docs/sqlserver/create-cloud-sql-destination-instance). Make sure you use enough compute and memory resources to cover your migration needs, and assign the Storage Admin (`roles/storage.admin`) role to the instance's service account.
    
2.  [Create a destination connection profile](/database-migration/docs/sqlserver/create-destination-connection-profile) for your Cloud SQL instance.
    

## Create and run the migration job

To configure and run your migration, perform the following steps:

1.  [Create and run the migration job](/database-migration/docs/sqlserver/create-migration-job).
    
    When you start the migration job, your destination Cloud SQL for SQL Server databases are put into recovery mode where they are fully managed by Database Migration Service. You can promote your destination instance when your data is fully migrated. After your destination instance is promoted, all the databases in that instance become fully operational. You also gain full write access to those databases.
    
    **Note:** To you use a differential backup file in the migration process, you need to use a specific configuration when you create the migration job. You can upload the differential backup file at a later time- after you create the migration job, but before you start uploading transaction log files.
    
    You can monitor the migration progress, as well as your destination instance health with Database Migration Service observability features. See [Migration job metrics](/database-migration/docs/sqlserver/migration-job-metrics).
    
2.  Keep uploading new transaction log backup files to the Cloud Storage bucket.
    
    To cover data that appears in your source database after you perform the full backup export, [export transaction log backup files](/database-migration/docs/sqlserver/export-backup-files) and upload them to the storage bucket. Database Migration Service automatically detects new files, reads their contents, and pushes the data to your destination instance. See [Automate transaction log exports](/database-migration/docs/sqlserver/automate-backup-exports).
    

## Finalize the migration

When you decide to switch your application to the new Cloud SQL for SQL Server instance, finalize the migration by following these steps:

1.  Stop all write operations on your source databases. You can switch them to read-only mode to retain operational functionality.
2.  Take the last transaction log backup, upload the file to your storage bucket, and stop the incremental load phase in Database Migration Service. You can achieve this result by performing one of the following actions:
    -   Stop your [automated backup file uploads](/database-migration/docs/sqlserver/automate-backup-exports), or upload the last transaction log file. Monitor the [unprocessed transaction log backups size](/database-migration/docs/sqlserver/migration-job-metrics) to determine when Database Migration Service finishes processing that file.
    -   Optionally, you can upload a transaction log file whose name ends in `.trn.final` suffix. Database Migration Service stops continuous loads when it detects a backup file whose name matches the [`.trn.final` suffix convention](/database-migration/docs/sqlserver/export-backup-files).
        
        When Database Migration Service finishes processing that file, migration job status changes to [**Ready to promote**](/database-migration/docs/sqlserver/migration-job-statuses#ready-to-promote).
        
3.  [Promote the migration job](/database-migration/docs/sqlserver/finalize-migration).
4.  (Optional) [Verify migration data](/database-migration/docs/sqlserver/verify-migration) for completeness.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.
