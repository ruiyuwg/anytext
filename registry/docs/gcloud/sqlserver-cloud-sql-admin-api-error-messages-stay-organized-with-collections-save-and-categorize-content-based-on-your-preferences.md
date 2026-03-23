-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Databases](https://docs.cloud.google.com/docs/databases)
-   [Cloud SQL](https://docs.cloud.google.com/sql/docs)
-   [SQL Server](https://docs.cloud.google.com/sql/docs/sqlserver)
-   [Reference](https://docs.cloud.google.com/sql/docs/sqlserver/apis)

Send feedback

# Cloud SQL Admin API error messages Stay organized with collections Save and categorize content based on your preferences.

This page lists Cloud SQL Admin API error codes.

Error class

Error code

Error message

`400 - BAD_REQUEST`

`INVALID_REQUEST`

The incoming request contains invalid data.

`INVALID_MASTERSLAVE_APP`

The request contains invalid primary or secondary application IDs when creating or updating an instance.

`ERROR_NON_EXISTENT_APP_ID`

The application ID does not exist. The instance could not be connected with an application.

`ERROR_APP_REGION`

The App Engine app is in a different geographical region.

`INVALID_OPERATION`

The operation isn't valid for this instance.

`PROJECT_NAME_MISMATCH`

The operation failed to create the target instance because it has a different project name from the source instance name specified.

`ERROR_GCE_ZONE_REGION`

The Compute Engine zone is in a different geographical region.

`ERROR_UNRECOGNIZED_GCE_ZONE`

The request contains an unrecognized Compute Engine zone.

`ERROR_BOTH_GCE_ZONE_GAE_APP_SPECIFIED`

The Compute Engine zone and the App Engine application ID are both specified for location preference when creating or updating an instance. The operation only uses one or the other.

`ERROR_SSL_CERTIFICATE_COMMON_NAME`

The common name can contain only alphanumeric characters, periods, dashes, spaces, and underscores. Spaces can't appear at the beginning or the end. The length can't exceed 64 characters.

`ERROR_SSL_CERTIFICATE_COMMON_NAME_ALREADY_EXISTS`

The operation failed to generate a client certificate because another certificate with the same common name exists.

`ERROR_INVALID_CLONE_SOURCE_PROJECT`

The project for the source Cloud SQL instance doesn't match the project on the request URL.

`ERROR_INVALID_CLONE_DESTINATION_PROJECT`

The project for the destination Cloud SQL instance doesn't match the project on the request URL.

`ERROR_BACKUP_NOT_FOUND`

The system can't find a successful backup. A backup is required to carry out the operation.

`ERROR_ADDING_ON_PREMISES_CONFIG`

The system can't add the on-premises configuration for the given instance type.

`ERROR_ON_PREMISES_INSTANCE_INVALID_OPERATION`

The requested operation isn't valid for an on-premises instance.

`ERROR_ON_PREMISES_INSTANCE_WITH_NO_HOST_PORT`

An on-premises instance needs to be configured with a `host:port`.

`ERROR_ON_PREMISES_INSTANCE_WITH_SSL_CONFIG`

An on-premises instance can't use the SSL configuration.

`ERROR_REPLICA_CONFIGURATION_MISSING_MASTER_INSTANCE_NAME`

The replica configuration doesn't contain the master instance name to use for replication.

`ERROR_REPLICA_CONFIGURATION_MISSING_DUMP_FILE_PATH`

The replica configuration doesn't contain the dump file path when replicating from an on-premises master.

`ERROR_REPLICA_CONFIGURATION_MISSING_USERNAME`

The replica configuration doesn't contain the username (to use for the replication connection) when replicating from an on-premises master.

`ERROR_REPLICA_CONFIGURATION_MISSING_PASSWORD`

The replica configuration doesn't contain the password (to use for the replication connection) when replicating from an on-premises master.

`ERROR_READ_REPLICA_SOURCE_TARGET_REGION_MISMATCH`

The read replica must be in the same region as that of the source instance.

`ERROR_INVALID_PROJECT`

The project specified in the request is invalid.

`ERROR_MATCHING_SOURCE_DESTINATION_INSTANCE_NAME`

The instance being created can't have the same name as the source instance.

`ERROR_INVALID_READ_REPLICA_PROJECT`

The project containing the read replica doesn't match the project on the request URL.

`ERROR_READ_REPLICA_INVALID_OPERATION`

The requested operation isn't valid for a read replica.

`ERROR_REPLICA_INVALID_OPERATION`

The requested operation isn't valid for a read replica.

`ERROR_REPLICATION_MASTER_INVALID_OPERATION`

The requested operation isn't valid for a replication master instance.

`ERROR_DISALLOWED_ENABLING_BACKUPS_FOR_READ_REPLICA`

A backup can't be enabled for read replicas.

`ERROR_INVALID_READ_REPLICA_ACTIVATION_POLICY`

The read replica is not specified as 'ALWAYS'.

`ERROR_INVALID_INSTANCE_TYPE_CLOUDSQL`

A Cloud SQL instance that isn't a replica can't have an associated master instance name.

`ERROR_INVALID_INSTANCE_TYPE_READ_REPLICA`

A read replica must have an associated master instance.

`ERROR_INVALID_INSTANCE_PROPERTY_DATABASE_REPLICATION_ENABLED`

The database replication setting is only used on a read replica.

`ERROR_DISALLOWED_DISABLED_DATABASE_REPLICATION_ON_REPLICA_CREATION`

The database replication flag must be enabled when creating a read replica.

`ERROR_EXPORT_UNKNOWN_FILE_TYPE`

The export file type is unknown.

`ERROR_EXPORT_SQL_DATABASE_COUNT`

The operation requires that you specify exactly one database and one table when exporting a SQL file.

`ERROR_EXPORT_CSV_DATABASE_COUNT`

The operation requires that you specify, at most, one database when exporting a CSV file.

`ERROR_IMPORT_UNKNOWN_FILE_TYPE`

The import file type is unknown.

`ERROR_DATABASE_TYPE_UNSUPPORTED_FOR_REPLICATION`

The replication and cloning operations aren't supported for this database type.

`ERROR_DATABASE_TYPE_UNSUPPORTED_FOR_READ_REPLICA`

The read replica isn't supported for this database type.

`ERROR_READ_REPLICA_INCOMPATIBLE_DATABASE_TYPES`

The database versions for the source and target instances are incompatible for replication.

`ERROR_INSTANCES_INCOMPATIBLE_FOR_REPLICATION`

The source and target instances are incompatible for replication.

`ERROR_UNSUPPORTED_PUBLIC_KEY`

The provided public key uses an invalid or unsupported format.

`ERROR_INVALID_BACKUP_RUN_STATUS`

The backup run status isn't valid for the given request.

`ERROR_FAILOVER_REPLICA_ALREADY_EXISTS`

A failover replica already exists.

`ERROR_INVALID_FAILOVER_REPLICA_OPERATION`

The requested operation isn't allowed for a failover replica.

`ERROR_FAILOVER_REPLICA_AND_MASTER_IN_SAME_ZONE`

The failover replica must be in a different zone than the master instance.

`ERROR_NO_FAILOVER_REPLICA`

The requested operation requires a failover replica.

`ERROR_EXPORT_CSV_SELECT_QUERY_SIZE_EXCEED_LIMIT`

The `Select` query exceeds the size limit for the CSV export operation.

`ERROR_INVALID_HA_MASTER_OPERATION`

The requested operation isn't valid for an HA master instance.

`ERROR_INVALID_HAS_REPLICA_OPERATION`

The requested operation isn't valid for an instance that has a replica.

`ERROR_INSTANCE_NAME_CONFLICT`

There is an existing instance with the given name.

`ERROR_BACKUP_SIZE_EXCEEDS_INSTANCE_SIZE`

Restore from backup can't be done to the instance with storage size smaller than the backup size.

`ERROR_INVALID_PRIMARY_IP_RANGE`

The IP address of the primary database is in an unsupported IP address range. Non-RFC 1918 IPs are not supported. To set up replicas, change the IP address of the primary server.

`ERROR_INVALID_REPLICA_REGION_TOPOLOGY`

Requested operation would cause circular region dependency in replica chain.

`ERROR_REPLICA_DEPTH_LIMIT_EXCEEDED`

Requested operation would cause exceeding the limit of 4 levels on the depth of cascading replicas.

`ERROR_DISALLOWED_UPDATING_EXTERNAL_SERVER_REPLICA_REPLICATION_STATE`

Updating the replication state setting of an external server replica instance isn't allowed. Use the stopReplica or startReplica API instead.

`ERROR_DISALLOWED_UPDATING_EXTERNAL_SERVER_REPLICA_REPLICATION_STATE`

Updating the replication state setting of an external server replica instance isn't allowed. Use the stopReplica or startReplica API instead.

`ERROR_EXTERNAL_SERVER_REPLICA_GTID_MODE`

External server replica must have gtid\_mode=ON in order to have a read replica.

`ERROR_PITR_BACKUP_RUN_NOT_DELETABLE`

This upgrade backup cannot be deleted because it's within the point-in-time recovery retention period for the instance. You can delete it earlier if you adjust the retention period or disable point-in-time recovery.

`ERROR_PROTECTED_INSTANCE_DELETION_FAILURE`

The instance is protected. Please disable the deletion protection and try again. To disable deletion protection, update the instance settings with deletionProtectionEnabled set to false.

`ERROR_READ_REPLICA_UNDER_EXTERNAL_SERVER_REPLICA_NOT_SYNCED`

To have a read replica, there must be an initial sync completed on the external server replica.

Error class

Error code

Error message

`403 - FORBIDDEN`

`NOT_AUTHORIZED`

The client isn't authorized to make this request.

`INVALID_BILLING_ACCOUNT_STATE`

The billing account has an issue. A new instance can't be created until the billing issue is resolved.

`ERROR_GCS_BUCKET_PERMISSION_DENIAL`

The service account doesn't have the required permissions for the bucket.

Error class

Error code

Error message

`404 - NOT_FOUND`

`INSTANCE_DOES_NOT_EXIST`

The Cloud SQL instance doesn't exist.

`ERROR_INVALID_FLAG_NAME`

The requested [flag](/sql/docs/sqlserver/flags) is either misspelled or unsupported by Cloud SQL.

`OPERATION_DOES_NOT_EXIST`

The Cloud SQL instance operation doesn't exist.

`BACKUP_RUN_DOES_NOT_EXIST`

The backup run doesn't exist.

`SSL_CERTIFICATE_DOES_NOT_EXIST`

The SSL certificate doesn't exist.

Error class

Error code

Error message

`409 - CONFLICT`

`INVALID_STATE`

The instance or operation isn't in an appropriate state to handle the request.

`OPERATION_IN_PROGRESS`

The operation failed because another operation was already in progress.

Error class

Error code

Error message

`412 - PRECONDITION_FAILED`

`STALE_DATA`

The condition doesn't match.

Error class

Error code

Error message

`422 - INVALID_VALUE`

`INVALID_INSTANCE_PROPERTY`

The instance property is invalid.

`ERROR_INVALID_FLAG_DATABASE_TYPE`

The flag requested can't be set on this database type.

`ERROR_INVALID_FLAG_VALUE`

The requested value isn't valid.

Error class

Error code

Error message

`429 - LIMIT_EXCEEDED`

`ERROR_MAX_INSTANCE_PER_LABEL`

The operation failed to create an instance because the project has reached the maximum instance per project limit.

`ERROR_MAX_APP_IDS`

The operation failed to update an instance because it exceeded the maximum number of application IDs that can be attached to the instance.

`ERROR_MAX_FREE_INSTANCE_PER_LABEL`

The operation failed to create an instance because the project or creator has reached the maximum free instances per project or creator limit.

`ERROR_MAX_CLIENT_SSL_CERTIFICATES`

The operation failed to create a client SSL certificate because you have created the maximum number of certificates allowed.

Error class

Error code

Error message

`500 - BACKEND_ERROR`

`SERVER_EXCEPTION`

The service is temporarily unavailable.

`ERROR_SPECKLE_RPC`

The service is temporarily unavailable.

`ERROR_BILLING_RPC`

The service is temporarily unavailable.

`ERROR_UNKNOWN`

The operation finished in an unknown state.

`POOL_DOES_NOT_EXIST`

The service is temporarily unavailable.

`ERROR_APPCONFIG_RPC`

The service is temporarily unavailable.

`RETRY_TRANSIENT_ERROR`

The service is temporarily unavailable. This is most likely a momentary error. Retry the operation.

`ERROR_IP_MANAGEMENT_OPERATION`

The service is temporarily unavailable. This is most likely a momentary error. Retry the operation.

`ERROR_GCE_BOOT_DISK_CREATION_FAILURE`

The instance creation operation failed to create a boot disk.

`ERROR_GCE_DATA_DISK_CREATION_FAILURE`

The instance creation operation failed to create a data disk.

`ERROR_GCE_TMP_DISK_CREATION_FAILURE`

The instance creation operation failed to create a tmp disk.

`ERROR_GCE_IP_CREATION_FAILURE`

The instance creation operation failed to obtain an IP address.

`ERROR_GCE_VM_CREATION_FAILURE`

The instance creation operation failed to create a VM.

`ERROR_GCE_STOCKOUT`

The zone or region doesn't have sufficient resources to handle the request at the moment.

`ERROR_GCE_QUOTA_EXCEEDED`

The requested resource is unavailable at the moment.

Error class

Error code

Error message

`501 - UNSUPPORTED_METHOD`

`UNSUPPORTED_OPERATION`

The requested operation isn't supported.

`UNSUPPORTED_V2_OPERATION`

The requested operation isn't supported on Cloud SQL instances.

`ERROR_DISK_ENCRYPTION_UNSUPPORTED`

The disk encryption with a KMS key isn't supported for the requested operation.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.
