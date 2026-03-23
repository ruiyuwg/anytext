-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SecurityCenterGrpc.AsyncService (2.61.0) Stay organized with collections Save and categorize content based on your preferences.

2.95.0 (latest) 2.93.0 2.91.0 2.90.0 2.88.0 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.0 2.66.0 2.65.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.10.0 2.9.0 2.8.0 2.7.1 2.6.0 2.5.6 2.3.2

```
public static interface SecurityCenterGrpc.AsyncService
```

V1 APIs for Security Center service.

## Methods

### batchCreateResourceValueConfigs(BatchCreateResourceValueConfigsRequest request, StreamObserver<BatchCreateResourceValueConfigsResponse> responseObserver)

```
public default void batchCreateResourceValueConfigs(BatchCreateResourceValueConfigsRequest request, StreamObserver<BatchCreateResourceValueConfigsResponse> responseObserver)
```

Creates a ResourceValueConfig for an organization. Maps user's tags to difference resource values for use by the attack path simulation.

**Parameters**

**Name**

**Description**

`request`

`[BatchCreateResourceValueConfigsRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.BatchCreateResourceValueConfigsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[BatchCreateResourceValueConfigsResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.BatchCreateResourceValueConfigsResponse)>`  

### bulkMuteFindings(BulkMuteFindingsRequest request, StreamObserver<Operation> responseObserver)

```
public default void bulkMuteFindings(BulkMuteFindingsRequest request, StreamObserver<Operation> responseObserver)
```

Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.

**Parameters**

**Name**

**Description**

`request`

`[BulkMuteFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.BulkMuteFindingsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createBigQueryExport(CreateBigQueryExportRequest request, StreamObserver<BigQueryExport> responseObserver)

```
public default void createBigQueryExport(CreateBigQueryExportRequest request, StreamObserver<BigQueryExport> responseObserver)
```

Creates a BigQuery export.

**Parameters**

**Name**

**Description**

`request`

`[CreateBigQueryExportRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.CreateBigQueryExportRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[BigQueryExport](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.BigQueryExport)>`  

### createEventThreatDetectionCustomModule(CreateEventThreatDetectionCustomModuleRequest request, StreamObserver<EventThreatDetectionCustomModule> responseObserver)

```
public default void createEventThreatDetectionCustomModule(CreateEventThreatDetectionCustomModuleRequest request, StreamObserver<EventThreatDetectionCustomModule> responseObserver)
```

Creates a resident Event Threat Detection custom module at the scope of the given Resource Manager parent, and also creates inherited custom modules for all descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`request`

`[CreateEventThreatDetectionCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.CreateEventThreatDetectionCustomModuleRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[EventThreatDetectionCustomModule](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModule)>`  

### createFinding(CreateFindingRequest request, StreamObserver<Finding> responseObserver)

```
public default void createFinding(CreateFindingRequest request, StreamObserver<Finding> responseObserver)
```

Creates a finding. The corresponding source must exist for finding creation to succeed.

**Parameters**

**Name**

**Description**

`request`

`[CreateFindingRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.CreateFindingRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Finding](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.Finding)>`  

### createMuteConfig(CreateMuteConfigRequest request, StreamObserver<MuteConfig> responseObserver)

```
public default void createMuteConfig(CreateMuteConfigRequest request, StreamObserver<MuteConfig> responseObserver)
```

Creates a mute config.

**Parameters**

**Name**

**Description**

`request`

`[CreateMuteConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.CreateMuteConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[MuteConfig](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.MuteConfig)>`  

### createNotificationConfig(CreateNotificationConfigRequest request, StreamObserver<NotificationConfig> responseObserver)

```
public default void createNotificationConfig(CreateNotificationConfigRequest request, StreamObserver<NotificationConfig> responseObserver)
```

Creates a notification config.

**Parameters**

**Name**

**Description**

`request`

`[CreateNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.CreateNotificationConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[NotificationConfig](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.NotificationConfig)>`  

### createSecurityHealthAnalyticsCustomModule(CreateSecurityHealthAnalyticsCustomModuleRequest request, StreamObserver<SecurityHealthAnalyticsCustomModule> responseObserver)

```
public default void createSecurityHealthAnalyticsCustomModule(CreateSecurityHealthAnalyticsCustomModuleRequest request, StreamObserver<SecurityHealthAnalyticsCustomModule> responseObserver)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameters**

**Name**

**Description**

`request`

`[CreateSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.CreateSecurityHealthAnalyticsCustomModuleRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SecurityHealthAnalyticsCustomModule](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModule)>`  

### createSource(CreateSourceRequest request, StreamObserver<Source> responseObserver)

```
public default void createSource(CreateSourceRequest request, StreamObserver<Source> responseObserver)
```

Creates a source.

**Parameters**

**Name**

**Description**

`request`

`[CreateSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.CreateSourceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Source](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.Source)>`  

### deleteBigQueryExport(DeleteBigQueryExportRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteBigQueryExport(DeleteBigQueryExportRequest request, StreamObserver<Empty> responseObserver)
```

Deletes an existing BigQuery export.

**Parameters**

**Name**

**Description**

`request`

`[DeleteBigQueryExportRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.DeleteBigQueryExportRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteEventThreatDetectionCustomModule(DeleteEventThreatDetectionCustomModuleRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteEventThreatDetectionCustomModule(DeleteEventThreatDetectionCustomModuleRequest request, StreamObserver<Empty> responseObserver)
```

Deletes the specified Event Threat Detection custom module and all of its descendants in the Resource Manager hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`request`

`[DeleteEventThreatDetectionCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.DeleteEventThreatDetectionCustomModuleRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteMuteConfig(DeleteMuteConfigRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteMuteConfig(DeleteMuteConfigRequest request, StreamObserver<Empty> responseObserver)
```

Deletes an existing mute config.

**Parameters**

**Name**

**Description**

`request`

`[DeleteMuteConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.DeleteMuteConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteNotificationConfig(DeleteNotificationConfigRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteNotificationConfig(DeleteNotificationConfigRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a notification config.

**Parameters**

**Name**

**Description**

`request`

`[DeleteNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.DeleteNotificationConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteResourceValueConfig(DeleteResourceValueConfigRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteResourceValueConfig(DeleteResourceValueConfigRequest request, StreamObserver<Empty> responseObserver)
```

Deletes a ResourceValueConfig.

**Parameters**

**Name**

**Description**

`request`

`[DeleteResourceValueConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.DeleteResourceValueConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### deleteSecurityHealthAnalyticsCustomModule(DeleteSecurityHealthAnalyticsCustomModuleRequest request, StreamObserver<Empty> responseObserver)

```
public default void deleteSecurityHealthAnalyticsCustomModule(DeleteSecurityHealthAnalyticsCustomModuleRequest request, StreamObserver<Empty> responseObserver)
```

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

**Parameters**

**Name**

**Description**

`request`

`[DeleteSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.DeleteSecurityHealthAnalyticsCustomModuleRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`  

### getBigQueryExport(GetBigQueryExportRequest request, StreamObserver<BigQueryExport> responseObserver)

```
public default void getBigQueryExport(GetBigQueryExportRequest request, StreamObserver<BigQueryExport> responseObserver)
```

Gets a BigQuery export.

**Parameters**

**Name**

**Description**

`request`

`[GetBigQueryExportRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GetBigQueryExportRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[BigQueryExport](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.BigQueryExport)>`  

### getEffectiveEventThreatDetectionCustomModule(GetEffectiveEventThreatDetectionCustomModuleRequest request, StreamObserver<EffectiveEventThreatDetectionCustomModule> responseObserver)

```
public default void getEffectiveEventThreatDetectionCustomModule(GetEffectiveEventThreatDetectionCustomModuleRequest request, StreamObserver<EffectiveEventThreatDetectionCustomModule> responseObserver)
```

Gets an effective Event Threat Detection custom module at the given level.

**Parameters**

**Name**

**Description**

`request`

`[GetEffectiveEventThreatDetectionCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GetEffectiveEventThreatDetectionCustomModuleRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[EffectiveEventThreatDetectionCustomModule](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.EffectiveEventThreatDetectionCustomModule)>`  

### getEffectiveSecurityHealthAnalyticsCustomModule(GetEffectiveSecurityHealthAnalyticsCustomModuleRequest request, StreamObserver<EffectiveSecurityHealthAnalyticsCustomModule> responseObserver)

```
public default void getEffectiveSecurityHealthAnalyticsCustomModule(GetEffectiveSecurityHealthAnalyticsCustomModuleRequest request, StreamObserver<EffectiveSecurityHealthAnalyticsCustomModule> responseObserver)
```

Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`request`

`[GetEffectiveSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[EffectiveSecurityHealthAnalyticsCustomModule](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModule)>`  

### getEventThreatDetectionCustomModule(GetEventThreatDetectionCustomModuleRequest request, StreamObserver<EventThreatDetectionCustomModule> responseObserver)

```
public default void getEventThreatDetectionCustomModule(GetEventThreatDetectionCustomModuleRequest request, StreamObserver<EventThreatDetectionCustomModule> responseObserver)
```

Gets an Event Threat Detection custom module.

**Parameters**

**Name**

**Description**

`request`

`[GetEventThreatDetectionCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GetEventThreatDetectionCustomModuleRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[EventThreatDetectionCustomModule](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModule)>`  

### getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public default void getIamPolicy(GetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Gets the access control policy on the specified Source.

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.GetIamPolicyRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### getMuteConfig(GetMuteConfigRequest request, StreamObserver<MuteConfig> responseObserver)

```
public default void getMuteConfig(GetMuteConfigRequest request, StreamObserver<MuteConfig> responseObserver)
```

Gets a mute config.

**Parameters**

**Name**

**Description**

`request`

`[GetMuteConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GetMuteConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[MuteConfig](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.MuteConfig)>`  

### getNotificationConfig(GetNotificationConfigRequest request, StreamObserver<NotificationConfig> responseObserver)

```
public default void getNotificationConfig(GetNotificationConfigRequest request, StreamObserver<NotificationConfig> responseObserver)
```

Gets a notification config.

**Parameters**

**Name**

**Description**

`request`

`[GetNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GetNotificationConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[NotificationConfig](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.NotificationConfig)>`  

### getOrganizationSettings(GetOrganizationSettingsRequest request, StreamObserver<OrganizationSettings> responseObserver)

```
public default void getOrganizationSettings(GetOrganizationSettingsRequest request, StreamObserver<OrganizationSettings> responseObserver)
```

Gets the settings for an organization.

**Parameters**

**Name**

**Description**

`request`

`[GetOrganizationSettingsRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.OrganizationSettings)>`  

### getResourceValueConfig(GetResourceValueConfigRequest request, StreamObserver<ResourceValueConfig> responseObserver)

```
public default void getResourceValueConfig(GetResourceValueConfigRequest request, StreamObserver<ResourceValueConfig> responseObserver)
```

Gets a ResourceValueConfig.

**Parameters**

**Name**

**Description**

`request`

`[GetResourceValueConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GetResourceValueConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ResourceValueConfig](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ResourceValueConfig)>`  

### getSecurityHealthAnalyticsCustomModule(GetSecurityHealthAnalyticsCustomModuleRequest request, StreamObserver<SecurityHealthAnalyticsCustomModule> responseObserver)

```
public default void getSecurityHealthAnalyticsCustomModule(GetSecurityHealthAnalyticsCustomModuleRequest request, StreamObserver<SecurityHealthAnalyticsCustomModule> responseObserver)
```

Retrieves a SecurityHealthAnalyticsCustomModule.

**Parameters**

**Name**

**Description**

`request`

`[GetSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GetSecurityHealthAnalyticsCustomModuleRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SecurityHealthAnalyticsCustomModule](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModule)>`  

### getSimulation(GetSimulationRequest request, StreamObserver<Simulation> responseObserver)

```
public default void getSimulation(GetSimulationRequest request, StreamObserver<Simulation> responseObserver)
```

Get the simulation by name or the latest simulation for the given organization.

**Parameters**

**Name**

**Description**

`request`

`[GetSimulationRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GetSimulationRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Simulation](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.Simulation)>`  

### getSource(GetSourceRequest request, StreamObserver<Source> responseObserver)

```
public default void getSource(GetSourceRequest request, StreamObserver<Source> responseObserver)
```

Gets a source.

**Parameters**

**Name**

**Description**

`request`

`[GetSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GetSourceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Source](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.Source)>`  

### getValuedResource(GetValuedResourceRequest request, StreamObserver<ValuedResource> responseObserver)

```
public default void getValuedResource(GetValuedResourceRequest request, StreamObserver<ValuedResource> responseObserver)
```

Get the valued resource by name

**Parameters**

**Name**

**Description**

`request`

`[GetValuedResourceRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GetValuedResourceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ValuedResource](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ValuedResource)>`  

### groupAssets(GroupAssetsRequest request, StreamObserver<GroupAssetsResponse> responseObserver) (deprecated)

```
public default void groupAssets(GroupAssetsRequest request, StreamObserver<GroupAssetsResponse> responseObserver)
```

Filters an organization's assets and groups them by their specified properties.

**Parameters**

**Name**

**Description**

`request`

`[GroupAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GroupAssetsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[GroupAssetsResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GroupAssetsResponse)>`  

### groupFindings(GroupFindingsRequest request, StreamObserver<GroupFindingsResponse> responseObserver)

```
public default void groupFindings(GroupFindingsRequest request, StreamObserver<GroupFindingsResponse> responseObserver)
```

Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization\_id}/sources/-/findings, /v1/folders/{folder\_id}/sources/-/findings, /v1/projects/{project\_id}/sources/-/findings

**Parameters**

**Name**

**Description**

`request`

`[GroupFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GroupFindingsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[GroupFindingsResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.GroupFindingsResponse)>`  

### listAssets(ListAssetsRequest request, StreamObserver<ListAssetsResponse> responseObserver) (deprecated)

```
public default void listAssets(ListAssetsRequest request, StreamObserver<ListAssetsResponse> responseObserver)
```

Lists an organization's assets.

**Parameters**

**Name**

**Description**

`request`

`[ListAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListAssetsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListAssetsResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListAssetsResponse)>`  

### listAttackPaths(ListAttackPathsRequest request, StreamObserver<ListAttackPathsResponse> responseObserver)

```
public default void listAttackPaths(ListAttackPathsRequest request, StreamObserver<ListAttackPathsResponse> responseObserver)
```

Lists the attack paths for a set of simulation results or valued resources and filter.

**Parameters**

**Name**

**Description**

`request`

`[ListAttackPathsRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListAttackPathsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListAttackPathsResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListAttackPathsResponse)>`  

### listBigQueryExports(ListBigQueryExportsRequest request, StreamObserver<ListBigQueryExportsResponse> responseObserver)

```
public default void listBigQueryExports(ListBigQueryExportsRequest request, StreamObserver<ListBigQueryExportsResponse> responseObserver)
```

Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.

**Parameters**

**Name**

**Description**

`request`

`[ListBigQueryExportsRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListBigQueryExportsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListBigQueryExportsResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListBigQueryExportsResponse)>`  

### listDescendantEventThreatDetectionCustomModules(ListDescendantEventThreatDetectionCustomModulesRequest request, StreamObserver<ListDescendantEventThreatDetectionCustomModulesResponse> responseObserver)

```
public default void listDescendantEventThreatDetectionCustomModules(ListDescendantEventThreatDetectionCustomModulesRequest request, StreamObserver<ListDescendantEventThreatDetectionCustomModulesResponse> responseObserver)
```

Lists all resident Event Threat Detection custom modules under the given Resource Manager parent and its descendants.

**Parameters**

**Name**

**Description**

`request`

`[ListDescendantEventThreatDetectionCustomModulesRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListDescendantEventThreatDetectionCustomModulesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListDescendantEventThreatDetectionCustomModulesResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListDescendantEventThreatDetectionCustomModulesResponse)>`  

### listDescendantSecurityHealthAnalyticsCustomModules(ListDescendantSecurityHealthAnalyticsCustomModulesRequest request, StreamObserver<ListDescendantSecurityHealthAnalyticsCustomModulesResponse> responseObserver)

```
public default void listDescendantSecurityHealthAnalyticsCustomModules(ListDescendantSecurityHealthAnalyticsCustomModulesRequest request, StreamObserver<ListDescendantSecurityHealthAnalyticsCustomModulesResponse> responseObserver)
```

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.

**Parameters**

**Name**

**Description**

`request`

`[ListDescendantSecurityHealthAnalyticsCustomModulesRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListDescendantSecurityHealthAnalyticsCustomModulesResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse)>`  

### listEffectiveEventThreatDetectionCustomModules(ListEffectiveEventThreatDetectionCustomModulesRequest request, StreamObserver<ListEffectiveEventThreatDetectionCustomModulesResponse> responseObserver)

```
public default void listEffectiveEventThreatDetectionCustomModules(ListEffectiveEventThreatDetectionCustomModulesRequest request, StreamObserver<ListEffectiveEventThreatDetectionCustomModulesResponse> responseObserver)
```

Lists all effective Event Threat Detection custom modules for the given parent. This includes resident modules defined at the scope of the parent along with modules inherited from its ancestors.

**Parameters**

**Name**

**Description**

`request`

`[ListEffectiveEventThreatDetectionCustomModulesRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListEffectiveEventThreatDetectionCustomModulesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListEffectiveEventThreatDetectionCustomModulesResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListEffectiveEventThreatDetectionCustomModulesResponse)>`  

### listEffectiveSecurityHealthAnalyticsCustomModules(ListEffectiveSecurityHealthAnalyticsCustomModulesRequest request, StreamObserver<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse> responseObserver)

```
public default void listEffectiveSecurityHealthAnalyticsCustomModules(ListEffectiveSecurityHealthAnalyticsCustomModulesRequest request, StreamObserver<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse> responseObserver)
```

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

**Parameters**

**Name**

**Description**

`request`

`[ListEffectiveSecurityHealthAnalyticsCustomModulesRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListEffectiveSecurityHealthAnalyticsCustomModulesResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse)>`  

### listEventThreatDetectionCustomModules(ListEventThreatDetectionCustomModulesRequest request, StreamObserver<ListEventThreatDetectionCustomModulesResponse> responseObserver)

```
public default void listEventThreatDetectionCustomModules(ListEventThreatDetectionCustomModulesRequest request, StreamObserver<ListEventThreatDetectionCustomModulesResponse> responseObserver)
```

Lists all Event Threat Detection custom modules for the given Resource Manager parent. This includes resident modules defined at the scope of the parent along with modules inherited from ancestors.

**Parameters**

**Name**

**Description**

`request`

`[ListEventThreatDetectionCustomModulesRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListEventThreatDetectionCustomModulesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListEventThreatDetectionCustomModulesResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListEventThreatDetectionCustomModulesResponse)>`  

### listFindings(ListFindingsRequest request, StreamObserver<ListFindingsResponse> responseObserver)

```
public default void listFindings(ListFindingsRequest request, StreamObserver<ListFindingsResponse> responseObserver)
```

Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization\_id}/sources/-/findings

**Parameters**

**Name**

**Description**

`request`

`[ListFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListFindingsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListFindingsResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListFindingsResponse)>`  

### listMuteConfigs(ListMuteConfigsRequest request, StreamObserver<ListMuteConfigsResponse> responseObserver)

```
public default void listMuteConfigs(ListMuteConfigsRequest request, StreamObserver<ListMuteConfigsResponse> responseObserver)
```

Lists mute configs.

**Parameters**

**Name**

**Description**

`request`

`[ListMuteConfigsRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListMuteConfigsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListMuteConfigsResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListMuteConfigsResponse)>`  

### listNotificationConfigs(ListNotificationConfigsRequest request, StreamObserver<ListNotificationConfigsResponse> responseObserver)

```
public default void listNotificationConfigs(ListNotificationConfigsRequest request, StreamObserver<ListNotificationConfigsResponse> responseObserver)
```

Lists notification configs.

**Parameters**

**Name**

**Description**

`request`

`[ListNotificationConfigsRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListNotificationConfigsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListNotificationConfigsResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListNotificationConfigsResponse)>`  

### listResourceValueConfigs(ListResourceValueConfigsRequest request, StreamObserver<ListResourceValueConfigsResponse> responseObserver)

```
public default void listResourceValueConfigs(ListResourceValueConfigsRequest request, StreamObserver<ListResourceValueConfigsResponse> responseObserver)
```

Lists all ResourceValueConfigs.

**Parameters**

**Name**

**Description**

`request`

`[ListResourceValueConfigsRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListResourceValueConfigsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListResourceValueConfigsResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListResourceValueConfigsResponse)>`  

### listSecurityHealthAnalyticsCustomModules(ListSecurityHealthAnalyticsCustomModulesRequest request, StreamObserver<ListSecurityHealthAnalyticsCustomModulesResponse> responseObserver)

```
public default void listSecurityHealthAnalyticsCustomModules(ListSecurityHealthAnalyticsCustomModulesRequest request, StreamObserver<ListSecurityHealthAnalyticsCustomModulesResponse> responseObserver)
```

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

**Parameters**

**Name**

**Description**

`request`

`[ListSecurityHealthAnalyticsCustomModulesRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListSecurityHealthAnalyticsCustomModulesResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesResponse)>`  

### listSources(ListSourcesRequest request, StreamObserver<ListSourcesResponse> responseObserver)

```
public default void listSources(ListSourcesRequest request, StreamObserver<ListSourcesResponse> responseObserver)
```

Lists all sources belonging to an organization.

**Parameters**

**Name**

**Description**

`request`

`[ListSourcesRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListSourcesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListSourcesResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListSourcesResponse)>`  

### listValuedResources(ListValuedResourcesRequest request, StreamObserver<ListValuedResourcesResponse> responseObserver)

```
public default void listValuedResources(ListValuedResourcesRequest request, StreamObserver<ListValuedResourcesResponse> responseObserver)
```

Lists the valued resources for a set of simulation results and filter.

**Parameters**

**Name**

**Description**

`request`

`[ListValuedResourcesRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListValuedResourcesRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ListValuedResourcesResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ListValuedResourcesResponse)>`  

### runAssetDiscovery(RunAssetDiscoveryRequest request, StreamObserver<Operation> responseObserver) (deprecated)

```
public default void runAssetDiscovery(RunAssetDiscoveryRequest request, StreamObserver<Operation> responseObserver)
```

Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO\_MANY\_REQUESTS error.

**Parameters**

**Name**

**Description**

`request`

`[RunAssetDiscoveryRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### setFindingState(SetFindingStateRequest request, StreamObserver<Finding> responseObserver)

```
public default void setFindingState(SetFindingStateRequest request, StreamObserver<Finding> responseObserver)
```

Updates the state of a finding.

**Parameters**

**Name**

**Description**

`request`

`[SetFindingStateRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.SetFindingStateRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Finding](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.Finding)>`  

### setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)

```
public default void setIamPolicy(SetIamPolicyRequest request, StreamObserver<Policy> responseObserver)
```

Sets the access control policy on the specified Source.

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.SetIamPolicyRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.Policy>`  

### setMute(SetMuteRequest request, StreamObserver<Finding> responseObserver)

```
public default void setMute(SetMuteRequest request, StreamObserver<Finding> responseObserver)
```

Updates the mute state of a finding.

**Parameters**

**Name**

**Description**

`request`

`[SetMuteRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.SetMuteRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Finding](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.Finding)>`  

### simulateSecurityHealthAnalyticsCustomModule(SimulateSecurityHealthAnalyticsCustomModuleRequest request, StreamObserver<SimulateSecurityHealthAnalyticsCustomModuleResponse> responseObserver)

```
public default void simulateSecurityHealthAnalyticsCustomModule(SimulateSecurityHealthAnalyticsCustomModuleRequest request, StreamObserver<SimulateSecurityHealthAnalyticsCustomModuleResponse> responseObserver)
```

Simulates a given SecurityHealthAnalyticsCustomModule and Resource.

**Parameters**

**Name**

**Description**

`request`

`[SimulateSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SimulateSecurityHealthAnalyticsCustomModuleResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.SimulateSecurityHealthAnalyticsCustomModuleResponse)>`  

### testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)

```
public default void testIamPermissions(TestIamPermissionsRequest request, StreamObserver<TestIamPermissionsResponse> responseObserver)
```

Returns the permissions that a caller has on the specified source.

**Parameters**

**Name**

**Description**

`request`

`com.google.iam.v1.TestIamPermissionsRequest`  

`responseObserver`

`io.grpc.stub.StreamObserver<com.google.iam.v1.TestIamPermissionsResponse>`  

### updateBigQueryExport(UpdateBigQueryExportRequest request, StreamObserver<BigQueryExport> responseObserver)

```
public default void updateBigQueryExport(UpdateBigQueryExportRequest request, StreamObserver<BigQueryExport> responseObserver)
```

Updates a BigQuery export.

**Parameters**

**Name**

**Description**

`request`

`[UpdateBigQueryExportRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.UpdateBigQueryExportRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[BigQueryExport](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.BigQueryExport)>`  

### updateEventThreatDetectionCustomModule(UpdateEventThreatDetectionCustomModuleRequest request, StreamObserver<EventThreatDetectionCustomModule> responseObserver)

```
public default void updateEventThreatDetectionCustomModule(UpdateEventThreatDetectionCustomModuleRequest request, StreamObserver<EventThreatDetectionCustomModule> responseObserver)
```

Updates the Event Threat Detection custom module with the given name based on the given update mask. Updating the enablement state is supported for both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name or configuration of a module is supported for resident modules only. The type of a module cannot be changed.

**Parameters**

**Name**

**Description**

`request`

`[UpdateEventThreatDetectionCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.UpdateEventThreatDetectionCustomModuleRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[EventThreatDetectionCustomModule](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.EventThreatDetectionCustomModule)>`  

### updateExternalSystem(UpdateExternalSystemRequest request, StreamObserver<ExternalSystem> responseObserver)

```
public default void updateExternalSystem(UpdateExternalSystemRequest request, StreamObserver<ExternalSystem> responseObserver)
```

Updates external system. This is for a given finding.

**Parameters**

**Name**

**Description**

`request`

`[UpdateExternalSystemRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.UpdateExternalSystemRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ExternalSystem](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ExternalSystem)>`  

### updateFinding(UpdateFindingRequest request, StreamObserver<Finding> responseObserver)

```
public default void updateFinding(UpdateFindingRequest request, StreamObserver<Finding> responseObserver)
```

Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.

**Parameters**

**Name**

**Description**

`request`

`[UpdateFindingRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.UpdateFindingRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Finding](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.Finding)>`  

### updateMuteConfig(UpdateMuteConfigRequest request, StreamObserver<MuteConfig> responseObserver)

```
public default void updateMuteConfig(UpdateMuteConfigRequest request, StreamObserver<MuteConfig> responseObserver)
```

Updates a mute config.

**Parameters**

**Name**

**Description**

`request`

`[UpdateMuteConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.UpdateMuteConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[MuteConfig](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.MuteConfig)>`  

### updateNotificationConfig(UpdateNotificationConfigRequest request, StreamObserver<NotificationConfig> responseObserver)

```
public default void updateNotificationConfig(UpdateNotificationConfigRequest request, StreamObserver<NotificationConfig> responseObserver)
```

Updates a notification config. The following update fields are allowed: description, pubsub\_topic, streaming\_config.filter

**Parameters**

**Name**

**Description**

`request`

`[UpdateNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.UpdateNotificationConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[NotificationConfig](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.NotificationConfig)>`  

### updateOrganizationSettings(UpdateOrganizationSettingsRequest request, StreamObserver<OrganizationSettings> responseObserver)

```
public default void updateOrganizationSettings(UpdateOrganizationSettingsRequest request, StreamObserver<OrganizationSettings> responseObserver)
```

Updates an organization's settings.

**Parameters**

**Name**

**Description**

`request`

`[UpdateOrganizationSettingsRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.OrganizationSettings)>`  

### updateResourceValueConfig(UpdateResourceValueConfigRequest request, StreamObserver<ResourceValueConfig> responseObserver)

```
public default void updateResourceValueConfig(UpdateResourceValueConfigRequest request, StreamObserver<ResourceValueConfig> responseObserver)
```

Updates an existing ResourceValueConfigs with new rules.

**Parameters**

**Name**

**Description**

`request`

`[UpdateResourceValueConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.UpdateResourceValueConfigRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ResourceValueConfig](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ResourceValueConfig)>`  

### updateSecurityHealthAnalyticsCustomModule(UpdateSecurityHealthAnalyticsCustomModuleRequest request, StreamObserver<SecurityHealthAnalyticsCustomModule> responseObserver)

```
public default void updateSecurityHealthAnalyticsCustomModule(UpdateSecurityHealthAnalyticsCustomModuleRequest request, StreamObserver<SecurityHealthAnalyticsCustomModule> responseObserver)
```

Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.

**Parameters**

**Name**

**Description**

`request`

`[UpdateSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.UpdateSecurityHealthAnalyticsCustomModuleRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SecurityHealthAnalyticsCustomModule](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModule)>`  

### updateSecurityMarks(UpdateSecurityMarksRequest request, StreamObserver<SecurityMarks> responseObserver)

```
public default void updateSecurityMarks(UpdateSecurityMarksRequest request, StreamObserver<SecurityMarks> responseObserver)
```

Updates security marks.

**Parameters**

**Name**

**Description**

`request`

`[UpdateSecurityMarksRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[SecurityMarks](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.SecurityMarks)>`  

### updateSource(UpdateSourceRequest request, StreamObserver<Source> responseObserver)

```
public default void updateSource(UpdateSourceRequest request, StreamObserver<Source> responseObserver)
```

Updates a source.

**Parameters**

**Name**

**Description**

`request`

`[UpdateSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.UpdateSourceRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[Source](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.Source)>`  

### validateEventThreatDetectionCustomModule(ValidateEventThreatDetectionCustomModuleRequest request, StreamObserver<ValidateEventThreatDetectionCustomModuleResponse> responseObserver)

```
public default void validateEventThreatDetectionCustomModule(ValidateEventThreatDetectionCustomModuleRequest request, StreamObserver<ValidateEventThreatDetectionCustomModuleResponse> responseObserver)
```

Validates the given Event Threat Detection custom module.

**Parameters**

**Name**

**Description**

`request`

`[ValidateEventThreatDetectionCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ValidateEventThreatDetectionCustomModuleRequest)`  

`responseObserver`

`io.grpc.stub.StreamObserver<[ValidateEventThreatDetectionCustomModuleResponse](/java/docs/reference/google-cloud-securitycenter/2.61.0/com.google.cloud.securitycenter.v1.ValidateEventThreatDetectionCustomModuleResponse)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
