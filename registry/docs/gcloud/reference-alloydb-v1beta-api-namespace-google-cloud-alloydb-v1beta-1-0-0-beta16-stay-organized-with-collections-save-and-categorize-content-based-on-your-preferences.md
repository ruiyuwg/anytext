-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# AlloyDB v1beta API - Namespace Google.Cloud.AlloyDb.V1Beta (1.0.0-beta16) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.0.0-beta16 (latest)](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta)
-   [1.0.0-beta15](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/1.0.0-beta15/Google.Cloud.AlloyDb.V1Beta)

## Classes

### [AlloyDBAdmin](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBAdmin)

Service describing handlers for resources

### [AlloyDBAdmin.AlloyDBAdminBase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBAdmin.AlloyDBAdminBase)

Base class for server-side implementations of AlloyDBAdmin

### [AlloyDBAdmin.AlloyDBAdminClient](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBAdmin.AlloyDBAdminClient)

Client for AlloyDBAdmin

### [AlloyDBAdminClient](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBAdminClient)

AlloyDBAdmin client wrapper, for convenient use.

### [AlloyDBAdminClientBuilder](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBAdminClientBuilder)

Builder class for [AlloyDBAdminClient](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBAdminClient) to provide simple configuration of credentials, endpoint etc.

### [AlloyDBAdminClientImpl](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBAdminClientImpl)

AlloyDBAdmin client wrapper implementation, for convenient use.

### [AlloyDBAdminSettings](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBAdminSettings)

Settings for [AlloyDBAdminClient](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBAdminClient) instances.

### [AlloyDBCSQLAdmin](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBCSQLAdmin)

Service for interactions with CloudSQL.

### [AlloyDBCSQLAdmin.AlloyDBCSQLAdminBase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBCSQLAdmin.AlloyDBCSQLAdminBase)

Base class for server-side implementations of AlloyDBCSQLAdmin

### [AlloyDBCSQLAdmin.AlloyDBCSQLAdminClient](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBCSQLAdmin.AlloyDBCSQLAdminClient)

Client for AlloyDBCSQLAdmin

### [AlloyDBCSQLAdminClient](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBCSQLAdminClient)

AlloyDBCSQLAdmin client wrapper, for convenient use.

### [AlloyDBCSQLAdminClientBuilder](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBCSQLAdminClientBuilder)

Builder class for [AlloyDBCSQLAdminClient](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBCSQLAdminClient) to provide simple configuration of credentials, endpoint etc.

### [AlloyDBCSQLAdminClientImpl](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBCSQLAdminClientImpl)

AlloyDBCSQLAdmin client wrapper implementation, for convenient use.

### [AlloyDBCSQLAdminSettings](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBCSQLAdminSettings)

Settings for [AlloyDBCSQLAdminClient](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AlloyDBCSQLAdminClient) instances.

### [AutomatedBackupPolicy](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AutomatedBackupPolicy)

Message describing the user-specified automated backup policy.

All fields in the automated backup policy are optional. Defaults for each field are provided if they are not set.

### [AutomatedBackupPolicy.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AutomatedBackupPolicy.Types)

Container for nested types declared in the AutomatedBackupPolicy message type.

### [AutomatedBackupPolicy.Types.QuantityBasedRetention](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AutomatedBackupPolicy.Types.QuantityBasedRetention)

A quantity based policy specifies that a certain number of the most recent successful backups should be retained.

### [AutomatedBackupPolicy.Types.TimeBasedRetention](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AutomatedBackupPolicy.Types.TimeBasedRetention)

A time based retention policy specifies that all backups within a certain time period should be retained.

### [AutomatedBackupPolicy.Types.WeeklySchedule](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AutomatedBackupPolicy.Types.WeeklySchedule)

A weekly schedule starts a backup at prescribed start times within a day, for the specified days of the week.

The weekly schedule message is flexible and can be used to create many types of schedules. For example, to have a daily backup that starts at 22:00, configure the `start_times` field to have one element "22:00" and the `days_of_week` field to have all seven days of the week.

### [Backup](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Backup)

Message describing Backup object

### [Backup.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Backup.Types)

Container for nested types declared in the Backup message type.

### [Backup.Types.QuantityBasedExpiry](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Backup.Types.QuantityBasedExpiry)

A backup's position in a quantity-based retention queue, of backups with the same source cluster and type, with length, retention, specified by the backup's retention policy. Once the position is greater than the retention, the backup is eligible to be garbage collected.

Example: 5 backups from the same source cluster and type with a quantity-based retention of 3 and denoted by backup\_id (position, retention).

Safe: backup\_5 (1, 3), backup\_4, (2, 3), backup\_3 (3, 3). Awaiting garbage collection: backup\_2 (4, 3), backup\_1 (5, 3)

### [BackupName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.BackupName)

Resource name for the `Backup` resource.

### [BackupSource](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.BackupSource)

Message describing a BackupSource.

### [BatchCreateInstanceStatus](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.BatchCreateInstanceStatus)

Message for current status of an instance in the BatchCreateInstances operation. For example, lets say a BatchCreateInstances workflow has 4 instances, Instance1 through Instance4. Lets also assume that 2 instances succeeded but the third failed to create and the 4th was never picked up for creation because of failure of the previous one. Then, resulting states would look something like:

1.  Instance1 = ROLLED\_BACK
2.  Instance2 = ROLLED\_BACK
3.  Instance3 = FAILED
4.  Instance4 = FAILED

However, while the operation is running, the instance might be in other states including PENDING\_CREATE, ACTIVE, DELETING and CREATING. The states / do not get further updated once the operation is done.

### [BatchCreateInstanceStatus.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.BatchCreateInstanceStatus.Types)

Container for nested types declared in the BatchCreateInstanceStatus message type.

### [BatchCreateInstancesMetadata](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.BatchCreateInstancesMetadata)

Message for metadata that is specific to BatchCreateInstances API. NEXT\_ID: 3

### [BatchCreateInstancesRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.BatchCreateInstancesRequest)

Message for creating a batch of instances under the specified cluster.

### [BatchCreateInstancesResponse](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.BatchCreateInstancesResponse)

Message for creating batches of instances in a cluster.

### [CloudSQLBackupRunSource](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CloudSQLBackupRunSource)

The source CloudSQL backup resource.

### [Cluster](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Cluster)

A cluster is a collection of regional AlloyDB resources. It can include a primary instance and one or more read pool instances. All cluster resources share a storage layer, which scales as needed.

### [Cluster.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Cluster.Types)

Container for nested types declared in the Cluster message type.

### [Cluster.Types.DataplexConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Cluster.Types.DataplexConfig)

Configuration for Dataplex integration.

### [Cluster.Types.NetworkConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Cluster.Types.NetworkConfig)

Metadata related to network configuration.

### [Cluster.Types.PrimaryConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Cluster.Types.PrimaryConfig)

Configuration for the primary cluster. It has the list of clusters that are replicating from this cluster. This should be set if and only if the cluster is of type PRIMARY.

### [Cluster.Types.PscConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Cluster.Types.PscConfig)

PscConfig contains PSC related configuration at a cluster level.

### [Cluster.Types.SecondaryConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Cluster.Types.SecondaryConfig)

Configuration information for the secondary cluster. This should be set if and only if the cluster is of type SECONDARY.

### [Cluster.Types.TrialMetadata](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Cluster.Types.TrialMetadata)

Contains information and all metadata related to TRIAL clusters.

### [ClusterName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ClusterName)

Resource name for the `Cluster` resource.

### [ConnectionInfo](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ConnectionInfo)

ConnectionInfo singleton resource. [https://google.aip.dev/156](https://google.aip.dev/156)

### [ConnectionInfoName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ConnectionInfoName)

Resource name for the `ConnectionInfo` resource.

### [ContinuousBackupConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ContinuousBackupConfig)

ContinuousBackupConfig describes the continuous backups recovery configurations of a cluster.

### [ContinuousBackupInfo](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ContinuousBackupInfo)

ContinuousBackupInfo describes the continuous backup properties of a cluster.

### [ContinuousBackupSource](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ContinuousBackupSource)

Message describing a ContinuousBackupSource.

### [CreateBackupRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CreateBackupRequest)

Message for creating a Backup

### [CreateClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CreateClusterRequest)

Message for creating a Cluster

### [CreateDatabaseRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CreateDatabaseRequest)

Message for CreateDatabase request.

### [CreateInstanceRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CreateInstanceRequest)

Message for creating a Instance

### [CreateInstanceRequests](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CreateInstanceRequests)

See usage below for notes.

### [CreateSecondaryClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CreateSecondaryClusterRequest)

### [CreateSecondaryInstanceRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CreateSecondaryInstanceRequest)

Message for creating a Secondary Instance

### [CreateUserRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CreateUserRequest)

Message for creating a User

### [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName)

Resource name for the `CryptoKey` resource.

### [CryptoKeyVersionName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyVersionName)

Resource name for the `CryptoKeyVersion` resource.

### [Database](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Database)

Message describing Database object.

### [DatabaseName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.DatabaseName)

Resource name for the `Database` resource.

### [DeleteBackupRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.DeleteBackupRequest)

Message for deleting a Backup

### [DeleteClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.DeleteClusterRequest)

Message for deleting a Cluster

### [DeleteInstanceRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.DeleteInstanceRequest)

Message for deleting a Instance

### [DeleteUserRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.DeleteUserRequest)

Message for deleting a User

### [EncryptionConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.EncryptionConfig)

EncryptionConfig describes the encryption config of a cluster or a backup that is encrypted with a CMEK (customer-managed encryption key).

### [EncryptionInfo](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.EncryptionInfo)

EncryptionInfo describes the encryption information of a cluster or a backup.

### [EncryptionInfo.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.EncryptionInfo.Types)

Container for nested types declared in the EncryptionInfo message type.

### [ExecuteSqlMetadata](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExecuteSqlMetadata)

Any additional metadata information regarding the execution of the SQL

### [ExecuteSqlMetadata.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExecuteSqlMetadata.Types)

Container for nested types declared in the ExecuteSqlMetadata message type.

### [ExecuteSqlRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExecuteSqlRequest)

Request for ExecuteSql rpc.

### [ExecuteSqlResponse](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExecuteSqlResponse)

Execute a SQL statement response.

### [ExportClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest)

Export cluster request.

### [ExportClusterRequest.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest.Types)

Container for nested types declared in the ExportClusterRequest message type.

### [ExportClusterRequest.Types.CsvExportOptions](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest.Types.CsvExportOptions)

Options for exporting data in CSV format.

### [ExportClusterRequest.Types.SqlExportOptions](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest.Types.SqlExportOptions)

Options for exporting data in SQL format.

### [ExportClusterResponse](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterResponse)

Response of export cluster rpc.

### [FailoverInstanceRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.FailoverInstanceRequest)

Message for triggering failover on an Instance

### [GCAInstanceConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.GCAInstanceConfig)

Instance level configuration parameters related to the Gemini Cloud Assist product.

### [GcsDestination](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.GcsDestination)

Destination for Export. Export will be done to cloud storage.

### [GeminiClusterConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.GeminiClusterConfig)

Deprecated and unused. This message will be removed in the near future.

### [GeminiInstanceConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.GeminiInstanceConfig)

Deprecated and unused. This message will be removed in the near future.

### [GenerateClientCertificateRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.GenerateClientCertificateRequest)

Message for requests to generate a client certificate signed by the Cluster CA.

### [GenerateClientCertificateResponse](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.GenerateClientCertificateResponse)

Message returned by a GenerateClientCertificate operation.

### [GetBackupRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.GetBackupRequest)

Message for getting a Backup

### [GetClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.GetClusterRequest)

Message for getting a Cluster

### [GetConnectionInfoRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.GetConnectionInfoRequest)

Request message for GetConnectionInfo.

### [GetInstanceRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.GetInstanceRequest)

Message for getting a Instance

### [GetUserRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.GetUserRequest)

Message for getting a User

### [ImportClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ImportClusterRequest)

Import cluster request.

### [ImportClusterRequest.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ImportClusterRequest.Types)

Container for nested types declared in the ImportClusterRequest message type.

### [ImportClusterRequest.Types.CsvImportOptions](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ImportClusterRequest.Types.CsvImportOptions)

Options for importing data in CSV format.

### [ImportClusterRequest.Types.SqlImportOptions](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ImportClusterRequest.Types.SqlImportOptions)

Options for importing data in SQL format.

### [ImportClusterResponse](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ImportClusterResponse)

Response of import rpc.

### [InjectFaultRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.InjectFaultRequest)

Message for triggering fault injection on an instance

### [InjectFaultRequest.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.InjectFaultRequest.Types)

Container for nested types declared in the InjectFaultRequest message type.

### [Instance](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance)

An Instance is a computing unit that an end customer can connect to. It's the main unit of computing resources in AlloyDB.

### [Instance.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types)

Container for nested types declared in the Instance message type.

### [Instance.Types.ClientConnectionConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.ClientConnectionConfig)

Client connection configuration

### [Instance.Types.ConnectionPoolConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.ConnectionPoolConfig)

Configuration for Managed Connection Pool (MCP).

### [Instance.Types.InstanceNetworkConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.InstanceNetworkConfig)

Metadata related to instance-level network configuration.

### [Instance.Types.InstanceNetworkConfig.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.InstanceNetworkConfig.Types)

Container for nested types declared in the InstanceNetworkConfig message type.

### [Instance.Types.InstanceNetworkConfig.Types.AuthorizedNetwork](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.InstanceNetworkConfig.Types.AuthorizedNetwork)

AuthorizedNetwork contains metadata for an authorized network.

### [Instance.Types.MachineConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.MachineConfig)

MachineConfig describes the configuration of a machine.

### [Instance.Types.Node](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.Node)

Details of a single node in the instance. Nodes in an AlloyDB instance are ephemeral, they can change during update, failover, autohealing and resize operations.

### [Instance.Types.ObservabilityInstanceConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.ObservabilityInstanceConfig)

Observability Instance specific configuration.

### [Instance.Types.PscAutoConnectionConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.PscAutoConnectionConfig)

Configuration for setting up PSC service automation. Consumer projects in the configs will be allowlisted automatically for the instance.

### [Instance.Types.PscInstanceConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.PscInstanceConfig)

PscInstanceConfig contains PSC related configuration at an instance level.

### [Instance.Types.PscInterfaceConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.PscInterfaceConfig)

Configuration for setting up a PSC interface to enable outbound connectivity.

### [Instance.Types.QueryInsightsInstanceConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.QueryInsightsInstanceConfig)

QueryInsights Instance specific configuration.

### [Instance.Types.ReadPoolConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.ReadPoolConfig)

Configuration for a read pool instance.

### [Instance.Types.UpdatePolicy](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.UpdatePolicy)

Policy to be used while updating the instance.

### [Instance.Types.UpdatePolicy.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.UpdatePolicy.Types)

Container for nested types declared in the UpdatePolicy message type.

### [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.InstanceName)

Resource name for the `Instance` resource.

### [ListBackupsRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ListBackupsRequest)

Message for requesting list of Backups

### [ListBackupsResponse](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ListBackupsResponse)

Message for response to listing Backups

### [ListClustersRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ListClustersRequest)

Message for requesting list of Clusters

### [ListClustersResponse](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ListClustersResponse)

Message for response to listing Clusters

### [ListDatabasesRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ListDatabasesRequest)

Message for ListDatabases request.

### [ListDatabasesResponse](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ListDatabasesResponse)

Message for ListDatabases response.

### [ListInstancesRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ListInstancesRequest)

Message for requesting list of Instances

### [ListInstancesResponse](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ListInstancesResponse)

Message for response to listing Instances

### [ListSupportedDatabaseFlagsRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ListSupportedDatabaseFlagsRequest)

Message for listing the information about the supported Database flags.

### [ListSupportedDatabaseFlagsResponse](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ListSupportedDatabaseFlagsResponse)

Message for response to listing SupportedDatabaseFlags.

### [ListUsersRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ListUsersRequest)

Message for requesting list of Users

### [ListUsersResponse](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ListUsersResponse)

Message for response to listing Users

### [MaintenanceSchedule](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.MaintenanceSchedule)

MaintenanceSchedule stores the maintenance schedule generated from the MaintenanceUpdatePolicy, once a maintenance rollout is triggered, if MaintenanceWindow is set, and if there is no conflicting DenyPeriod. The schedule is cleared once the update takes place. This field cannot be manually changed; modify the MaintenanceUpdatePolicy instead.

### [MaintenanceUpdatePolicy](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.MaintenanceUpdatePolicy)

MaintenanceUpdatePolicy defines the policy for system updates.

### [MaintenanceUpdatePolicy.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.MaintenanceUpdatePolicy.Types)

Container for nested types declared in the MaintenanceUpdatePolicy message type.

### [MaintenanceUpdatePolicy.Types.DenyMaintenancePeriod](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.MaintenanceUpdatePolicy.Types.DenyMaintenancePeriod)

DenyMaintenancePeriod definition. Excepting emergencies, maintenance will not be scheduled to start within this deny period. The start\_date must be less than the end\_date.

### [MaintenanceUpdatePolicy.Types.MaintenanceWindow](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.MaintenanceUpdatePolicy.Types.MaintenanceWindow)

MaintenanceWindow specifies a preferred day and time for maintenance.

### [MigrationSource](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.MigrationSource)

Subset of the source instance configuration that is available when reading the cluster resource.

### [MigrationSource.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.MigrationSource.Types)

Container for nested types declared in the MigrationSource message type.

### [NetworkName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.NetworkName)

Resource name for the `Network` resource.

### [OperationMetadata](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.OperationMetadata)

Represents the metadata of the long-running operation.

### [PromoteClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.PromoteClusterRequest)

Message for promoting a Cluster

### [PromoteClusterStatus](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.PromoteClusterStatus)

Message for current status of the database during Promote Cluster operation.

### [PromoteClusterStatus.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.PromoteClusterStatus.Types)

Container for nested types declared in the PromoteClusterStatus message type.

### [RestartInstanceRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.RestartInstanceRequest)

### [RestoreClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.RestoreClusterRequest)

Message for restoring a Cluster from a backup or another cluster at a given point in time. NEXT\_ID: 11

### [RestoreFromCloudSQLRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.RestoreFromCloudSQLRequest)

Message for registering Restoring from CloudSQL resource.

### [ServiceAttachmentName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ServiceAttachmentName)

Resource name for the `ServiceAttachment` resource.

### [SqlResult](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SqlResult)

SqlResult represents the result for the execution of a sql statement.

### [SqlResultColumn](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SqlResultColumn)

Contains the name and datatype of a column in a SQL Result.

### [SqlResultRow](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SqlResultRow)

A single row from a sql result.

### [SqlResultValue](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SqlResultValue)

A single value in a row from a sql result.

### [SslConfig](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SslConfig)

SSL configuration.

### [SslConfig.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SslConfig.Types)

Container for nested types declared in the SslConfig message type.

### [SupportedDatabaseFlag](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SupportedDatabaseFlag)

SupportedDatabaseFlag gives general information about a database flag, like type and allowed values. This is a static value that is defined on the server side, and it cannot be modified by callers. To set the Database flags on a particular Instance, a caller should modify the Instance.database\_flags field.

### [SupportedDatabaseFlag.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SupportedDatabaseFlag.Types)

Container for nested types declared in the SupportedDatabaseFlag message type.

### [SupportedDatabaseFlag.Types.IntegerRestrictions](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SupportedDatabaseFlag.Types.IntegerRestrictions)

Restrictions on INTEGER type values.

### [SupportedDatabaseFlag.Types.StringRestrictions](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SupportedDatabaseFlag.Types.StringRestrictions)

Restrictions on STRING type values

### [SupportedDatabaseFlagName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SupportedDatabaseFlagName)

Resource name for the `SupportedDatabaseFlag` resource.

### [SwitchoverClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SwitchoverClusterRequest)

Message for switching over to a cluster

### [UpdateBackupRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpdateBackupRequest)

Message for updating a Backup

### [UpdateClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpdateClusterRequest)

Message for updating a Cluster

### [UpdateInstanceRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpdateInstanceRequest)

Message for updating a Instance

### [UpdateUserRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpdateUserRequest)

Message for updating a User

### [UpgradeClusterRequest](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterRequest)

Upgrades a cluster.

### [UpgradeClusterResponse](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterResponse)

UpgradeClusterResponse contains the response for upgrade cluster operation.

### [UpgradeClusterResponse.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterResponse.Types)

Container for nested types declared in the UpgradeClusterResponse message type.

### [UpgradeClusterResponse.Types.ClusterUpgradeDetails](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterResponse.Types.ClusterUpgradeDetails)

Upgrade details of a cluster. This cluster can be primary or secondary.

### [UpgradeClusterResponse.Types.InstanceUpgradeDetails](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterResponse.Types.InstanceUpgradeDetails)

Details regarding the upgrade of instances associated with a cluster.

### [UpgradeClusterResponse.Types.StageInfo](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterResponse.Types.StageInfo)

Stage information for different stages in the upgrade process.

### [UpgradeClusterStatus](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterStatus)

Message for current status of the Major Version Upgrade operation.

### [UpgradeClusterStatus.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterStatus.Types)

Container for nested types declared in the UpgradeClusterStatus message type.

### [UpgradeClusterStatus.Types.ReadPoolInstancesUpgradeStageStatus](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterStatus.Types.ReadPoolInstancesUpgradeStageStatus)

Read pool instances upgrade specific status.

### [UpgradeClusterStatus.Types.ReadPoolInstancesUpgradeStageStatus.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterStatus.Types.ReadPoolInstancesUpgradeStageStatus.Types)

Container for nested types declared in the ReadPoolInstancesUpgradeStageStatus message type.

### [UpgradeClusterStatus.Types.ReadPoolInstancesUpgradeStageStatus.Types.Stats](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterStatus.Types.ReadPoolInstancesUpgradeStageStatus.Types.Stats)

Upgrade stats for read pool instances.

### [UpgradeClusterStatus.Types.StageStatus](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterStatus.Types.StageStatus)

Status of an upgrade stage.

### [UpgradeClusterStatus.Types.StageStatus.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterStatus.Types.StageStatus.Types)

Container for nested types declared in the StageStatus message type.

### [UpgradeClusterStatus.Types.StageStatus.Types.StageSchedule](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterStatus.Types.StageStatus.Types.StageSchedule)

Timing information for the stage execution.

### [User](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.User)

Message describing User object.

### [User.Types](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.User.Types)

Container for nested types declared in the User message type.

### [UserName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UserName)

Resource name for the `User` resource.

### [UserPassword](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UserPassword)

The username/password for a database user. Used for specifying initial users at cluster creation time.

## Enums

### [AutomatedBackupPolicy.RetentionOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AutomatedBackupPolicy.RetentionOneofCase)

Enum of possible cases for the "retention" oneof.

### [AutomatedBackupPolicy.ScheduleOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.AutomatedBackupPolicy.ScheduleOneofCase)

Enum of possible cases for the "schedule" oneof.

### [Backup.Types.State](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Backup.Types.State)

Backup State

### [Backup.Types.Type](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Backup.Types.Type)

Backup Type

### [BackupName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.BackupName.ResourceNameType)

The possible contents of [BackupName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.BackupName).

### [BatchCreateInstanceStatus.Types.State](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.BatchCreateInstanceStatus.Types.State)

State contains all valid instance states for the BatchCreateInstances operation. This is mainly used for status reporting through the LRO metadata.

### [Cluster.SourceOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Cluster.SourceOneofCase)

Enum of possible cases for the "source" oneof.

### [Cluster.Types.ClusterType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Cluster.Types.ClusterType)

Type of Cluster

### [Cluster.Types.State](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Cluster.Types.State)

Cluster State

### [ClusterName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ClusterName.ResourceNameType)

The possible contents of [ClusterName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ClusterName).

### [ClusterView](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ClusterView)

View on Cluster. Pass this enum to rpcs that returns a cluster message to control which subsets of fields to get.

### [ConnectionInfoName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ConnectionInfoName.ResourceNameType)

The possible contents of [ConnectionInfoName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ConnectionInfoName).

### [CryptoKeyName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName.ResourceNameType)

The possible contents of [CryptoKeyName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyName).

### [CryptoKeyVersionName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyVersionName.ResourceNameType)

The possible contents of [CryptoKeyVersionName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.CryptoKeyVersionName).

### [DatabaseName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.DatabaseName.ResourceNameType)

The possible contents of [DatabaseName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.DatabaseName).

### [DatabaseVersion](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.DatabaseVersion)

The supported database engine versions.

### [EncryptionInfo.Types.Type](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.EncryptionInfo.Types.Type)

Possible encryption types.

### [ExecuteSqlMetadata.Types.Status](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExecuteSqlMetadata.Types.Status)

Status contains all valid Status a SQL execution can end up in.

### [ExecuteSqlRequest.UserCredentialOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExecuteSqlRequest.UserCredentialOneofCase)

Enum of possible cases for the "user\_credential" oneof.

### [ExportClusterRequest.DestinationOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest.DestinationOneofCase)

Enum of possible cases for the "destination" oneof.

### [ExportClusterRequest.ExportOptionsOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterRequest.ExportOptionsOneofCase)

Enum of possible cases for the "export\_options" oneof.

### [ExportClusterResponse.DestinationOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ExportClusterResponse.DestinationOneofCase)

Enum of possible cases for the "destination" oneof.

### [GCAEntitlementType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.GCAEntitlementType)

Enum representing the type of GCA entitlement assigned to a resource.

### [ImportClusterRequest.ImportOptionsOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ImportClusterRequest.ImportOptionsOneofCase)

Enum of possible cases for the "import\_options" oneof.

### [InjectFaultRequest.Types.FaultType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.InjectFaultRequest.Types.FaultType)

FaultType contains all valid types of faults that can be injected to an instance.

### [Instance.Types.ActivationPolicy](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.ActivationPolicy)

Specifies whether an instance needs to spin up.

### [Instance.Types.AvailabilityType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.AvailabilityType)

The Availability type of an instance. Potential values:

-   ZONAL: The instance serves data from only one zone. Outages in that zone affect instance availability.
-   REGIONAL: The instance can serve data from more than one zone in a region (it is highly available).

### [Instance.Types.InstanceType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.InstanceType)

Type of an Instance

### [Instance.Types.State](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.State)

Instance State

### [Instance.Types.UpdatePolicy.Types.Mode](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.Instance.Types.UpdatePolicy.Types.Mode)

Specifies the available modes of update.

### [InstanceName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.InstanceName.ResourceNameType)

The possible contents of [InstanceName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.InstanceName).

### [InstanceView](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.InstanceView)

View on Instance. Pass this enum to rpcs that returns an Instance message to control which subsets of fields to get.

### [MigrationSource.Types.MigrationSourceType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.MigrationSource.Types.MigrationSourceType)

Denote the type of migration source that created this cluster.

### [NetworkName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.NetworkName.ResourceNameType)

The possible contents of [NetworkName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.NetworkName).

### [OperationMetadata.RequestSpecificOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.OperationMetadata.RequestSpecificOneofCase)

Enum of possible cases for the "request\_specific" oneof.

### [PromoteClusterStatus.Types.State](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.PromoteClusterStatus.Types.State)

State contains all valid states of the database during promote cluster operation. This is used for status reporting through the LRO metadata.

### [RestoreClusterRequest.SourceOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.RestoreClusterRequest.SourceOneofCase)

Enum of possible cases for the "source" oneof.

### [RestoreFromCloudSQLRequest.SourceOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.RestoreFromCloudSQLRequest.SourceOneofCase)

Enum of possible cases for the "source" oneof.

### [ServiceAttachmentName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ServiceAttachmentName.ResourceNameType)

The possible contents of [ServiceAttachmentName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.ServiceAttachmentName).

### [SslConfig.Types.CaSource](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SslConfig.Types.CaSource)

Certificate Authority (CA) source for SSL/TLS certificates.

### [SslConfig.Types.SslMode](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SslConfig.Types.SslMode)

SSL mode options.

### [SubscriptionType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SubscriptionType)

Subscription\_type added to distinguish between Standard and Trial subscriptions. By default, a subscription type is considered STANDARD unless explicitly specified.

### [SupportedDatabaseFlag.RecommendedValueOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SupportedDatabaseFlag.RecommendedValueOneofCase)

Enum of possible cases for the "recommended\_value" oneof.

### [SupportedDatabaseFlag.RestrictionsOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SupportedDatabaseFlag.RestrictionsOneofCase)

Enum of possible cases for the "restrictions" oneof.

### [SupportedDatabaseFlag.Types.Scope](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SupportedDatabaseFlag.Types.Scope)

The scope of the flag.

### [SupportedDatabaseFlag.Types.ValueType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SupportedDatabaseFlag.Types.ValueType)

ValueType describes the semantic type of the value that the flag accepts. Regardless of the ValueType, the Instance.database\_flags field accepts the stringified version of the value, i.e. "20" or "3.14".

### [SupportedDatabaseFlagName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SupportedDatabaseFlagName.ResourceNameType)

The possible contents of [SupportedDatabaseFlagName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.SupportedDatabaseFlagName).

### [UpgradeClusterResponse.Types.Stage](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterResponse.Types.Stage)

Stage in the upgrade.

### [UpgradeClusterResponse.Types.Status](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterResponse.Types.Status)

Status of upgrade operation.

### [UpgradeClusterStatus.Types.StageStatus.StageSpecificStatusOneofCase](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UpgradeClusterStatus.Types.StageStatus.StageSpecificStatusOneofCase)

Enum of possible cases for the "stage\_specific\_status" oneof.

### [User.Types.UserType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.User.Types.UserType)

Enum that details the user type.

### [UserName.ResourceNameType](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UserName.ResourceNameType)

The possible contents of [UserName](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1Beta/latest/Google.Cloud.AlloyDb.V1Beta.UserName).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.
