-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SecurityCenterGrpc.SecurityCenterFutureStub (2.32.0) Stay organized with collections Save and categorize content based on your preferences.

2.95.0 (latest) 2.93.0 2.91.0 2.90.0 2.88.0 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.80.0 2.78.0 2.76.0 2.75.0 2.72.0 2.71.0 2.70.0 2.68.0 2.67.0 2.66.0 2.65.0 2.64.0 2.63.0 2.62.0 2.61.0 2.60.0 2.59.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.1 2.10.0 2.9.0 2.8.0 2.7.1 2.6.0 2.5.6 2.3.2

```
public static final class SecurityCenterGrpc.SecurityCenterFutureStub extends AbstractFutureStub<SecurityCenterGrpc.SecurityCenterFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service SecurityCenter.

V1 APIs for Security Center service.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> SecurityCenterGrpc.SecurityCenterFutureStub

## Inherited Members

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.getCallOptions()

io.grpc.stub.AbstractStub.getChannel()

io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)

io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)

io.grpc.stub.AbstractStub.withCompression(java.lang.String)

io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

io.grpc.stub.AbstractStub.withWaitForReady()

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Methods

### build(Channel channel, CallOptions callOptions)

```
protected SecurityCenterGrpc.SecurityCenterFutureStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

`callOptions`

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

`[SecurityCenterGrpc.SecurityCenterFutureStub](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.SecurityCenterGrpc.SecurityCenterFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### bulkMuteFindings(BulkMuteFindingsRequest request)

```
public ListenableFuture<Operation> bulkMuteFindings(BulkMuteFindingsRequest request)
```

Kicks off an LRO to bulk mute findings for a parent based on a filter. The parent can be either an organization, folder or project. The findings matched by the filter will be muted after the LRO is done.

**Parameter**

**Name**

**Description**

`request`

`[BulkMuteFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.BulkMuteFindingsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createBigQueryExport(CreateBigQueryExportRequest request)

```
public ListenableFuture<BigQueryExport> createBigQueryExport(CreateBigQueryExportRequest request)
```

Creates a BigQuery export.

**Parameter**

**Name**

**Description**

`request`

`[CreateBigQueryExportRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.CreateBigQueryExportRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[BigQueryExport](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.BigQueryExport)>`

### createFinding(CreateFindingRequest request)

```
public ListenableFuture<Finding> createFinding(CreateFindingRequest request)
```

Creates a finding. The corresponding source must exist for finding creation to succeed.

**Parameter**

**Name**

**Description**

`request`

`[CreateFindingRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.CreateFindingRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Finding](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.Finding)>`

### createMuteConfig(CreateMuteConfigRequest request)

```
public ListenableFuture<MuteConfig> createMuteConfig(CreateMuteConfigRequest request)
```

Creates a mute config.

**Parameter**

**Name**

**Description**

`request`

`[CreateMuteConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.CreateMuteConfigRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[MuteConfig](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.MuteConfig)>`

### createNotificationConfig(CreateNotificationConfigRequest request)

```
public ListenableFuture<NotificationConfig> createNotificationConfig(CreateNotificationConfigRequest request)
```

Creates a notification config.

**Parameter**

**Name**

**Description**

`request`

`[CreateNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.CreateNotificationConfigRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[NotificationConfig](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.NotificationConfig)>`

### createSecurityHealthAnalyticsCustomModule(CreateSecurityHealthAnalyticsCustomModuleRequest request)

```
public ListenableFuture<SecurityHealthAnalyticsCustomModule> createSecurityHealthAnalyticsCustomModule(CreateSecurityHealthAnalyticsCustomModuleRequest request)
```

Creates a resident SecurityHealthAnalyticsCustomModule at the scope of the given CRM parent, and also creates inherited SecurityHealthAnalyticsCustomModules for all CRM descendants of the given parent. These modules are enabled by default.

**Parameter**

**Name**

**Description**

`request`

`[CreateSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.CreateSecurityHealthAnalyticsCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[SecurityHealthAnalyticsCustomModule](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModule)>`

### createSource(CreateSourceRequest request)

```
public ListenableFuture<Source> createSource(CreateSourceRequest request)
```

Creates a source.

**Parameter**

**Name**

**Description**

`request`

`[CreateSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.CreateSourceRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Source](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.Source)>`

### deleteBigQueryExport(DeleteBigQueryExportRequest request)

```
public ListenableFuture<Empty> deleteBigQueryExport(DeleteBigQueryExportRequest request)
```

Deletes an existing BigQuery export.

**Parameter**

**Name**

**Description**

`request`

`[DeleteBigQueryExportRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.DeleteBigQueryExportRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteMuteConfig(DeleteMuteConfigRequest request)

```
public ListenableFuture<Empty> deleteMuteConfig(DeleteMuteConfigRequest request)
```

Deletes an existing mute config.

**Parameter**

**Name**

**Description**

`request`

`[DeleteMuteConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.DeleteMuteConfigRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteNotificationConfig(DeleteNotificationConfigRequest request)

```
public ListenableFuture<Empty> deleteNotificationConfig(DeleteNotificationConfigRequest request)
```

Deletes a notification config.

**Parameter**

**Name**

**Description**

`request`

`[DeleteNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.DeleteNotificationConfigRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### deleteSecurityHealthAnalyticsCustomModule(DeleteSecurityHealthAnalyticsCustomModuleRequest request)

```
public ListenableFuture<Empty> deleteSecurityHealthAnalyticsCustomModule(DeleteSecurityHealthAnalyticsCustomModuleRequest request)
```

Deletes the specified SecurityHealthAnalyticsCustomModule and all of its descendants in the CRM hierarchy. This method is only supported for resident custom modules.

**Parameter**

**Name**

**Description**

`request`

`[DeleteSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.DeleteSecurityHealthAnalyticsCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getBigQueryExport(GetBigQueryExportRequest request)

```
public ListenableFuture<BigQueryExport> getBigQueryExport(GetBigQueryExportRequest request)
```

Gets a BigQuery export.

**Parameter**

**Name**

**Description**

`request`

`[GetBigQueryExportRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.GetBigQueryExportRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[BigQueryExport](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.BigQueryExport)>`

### getEffectiveSecurityHealthAnalyticsCustomModule(GetEffectiveSecurityHealthAnalyticsCustomModuleRequest request)

```
public ListenableFuture<EffectiveSecurityHealthAnalyticsCustomModule> getEffectiveSecurityHealthAnalyticsCustomModule(GetEffectiveSecurityHealthAnalyticsCustomModuleRequest request)
```

Retrieves an EffectiveSecurityHealthAnalyticsCustomModule.

**Parameter**

**Name**

**Description**

`request`

`[GetEffectiveSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.GetEffectiveSecurityHealthAnalyticsCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[EffectiveSecurityHealthAnalyticsCustomModule](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.EffectiveSecurityHealthAnalyticsCustomModule)>`

### getIamPolicy(GetIamPolicyRequest request)

```
public ListenableFuture<Policy> getIamPolicy(GetIamPolicyRequest request)
```

Gets the access control policy on the specified Source.

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.GetIamPolicyRequest`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<com.google.iam.v1.Policy>`

### getMuteConfig(GetMuteConfigRequest request)

```
public ListenableFuture<MuteConfig> getMuteConfig(GetMuteConfigRequest request)
```

Gets a mute config.

**Parameter**

**Name**

**Description**

`request`

`[GetMuteConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.GetMuteConfigRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[MuteConfig](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.MuteConfig)>`

### getNotificationConfig(GetNotificationConfigRequest request)

```
public ListenableFuture<NotificationConfig> getNotificationConfig(GetNotificationConfigRequest request)
```

Gets a notification config.

**Parameter**

**Name**

**Description**

`request`

`[GetNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.GetNotificationConfigRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[NotificationConfig](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.NotificationConfig)>`

### getOrganizationSettings(GetOrganizationSettingsRequest request)

```
public ListenableFuture<OrganizationSettings> getOrganizationSettings(GetOrganizationSettingsRequest request)
```

Gets the settings for an organization.

**Parameter**

**Name**

**Description**

`request`

`[GetOrganizationSettingsRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.GetOrganizationSettingsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.OrganizationSettings)>`

### getSecurityHealthAnalyticsCustomModule(GetSecurityHealthAnalyticsCustomModuleRequest request)

```
public ListenableFuture<SecurityHealthAnalyticsCustomModule> getSecurityHealthAnalyticsCustomModule(GetSecurityHealthAnalyticsCustomModuleRequest request)
```

Retrieves a SecurityHealthAnalyticsCustomModule.

**Parameter**

**Name**

**Description**

`request`

`[GetSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.GetSecurityHealthAnalyticsCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[SecurityHealthAnalyticsCustomModule](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModule)>`

### getSource(GetSourceRequest request)

```
public ListenableFuture<Source> getSource(GetSourceRequest request)
```

Gets a source.

**Parameter**

**Name**

**Description**

`request`

`[GetSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.GetSourceRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Source](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.Source)>`

### groupAssets(GroupAssetsRequest request)

```
public ListenableFuture<GroupAssetsResponse> groupAssets(GroupAssetsRequest request)
```

Filters an organization's assets and groups them by their specified properties.

**Parameter**

**Name**

**Description**

`request`

`[GroupAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.GroupAssetsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[GroupAssetsResponse](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.GroupAssetsResponse)>`

### groupFindings(GroupFindingsRequest request)

```
public ListenableFuture<GroupFindingsResponse> groupFindings(GroupFindingsRequest request)
```

Filters an organization or source's findings and groups them by their specified properties. To group across all sources provide a `-` as the source id. Example: /v1/organizations/{organization\_id}/sources/-/findings, /v1/folders/{folder\_id}/sources/-/findings, /v1/projects/{project\_id}/sources/-/findings

**Parameter**

**Name**

**Description**

`request`

`[GroupFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.GroupFindingsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[GroupFindingsResponse](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.GroupFindingsResponse)>`

### listAssets(ListAssetsRequest request)

```
public ListenableFuture<ListAssetsResponse> listAssets(ListAssetsRequest request)
```

Lists an organization's assets.

**Parameter**

**Name**

**Description**

`request`

`[ListAssetsRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListAssetsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListAssetsResponse](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListAssetsResponse)>`

### listBigQueryExports(ListBigQueryExportsRequest request)

```
public ListenableFuture<ListBigQueryExportsResponse> listBigQueryExports(ListBigQueryExportsRequest request)
```

Lists BigQuery exports. Note that when requesting BigQuery exports at a given level all exports under that level are also returned e.g. if requesting BigQuery exports under a folder, then all BigQuery exports immediately under the folder plus the ones created under the projects within the folder are returned.

**Parameter**

**Name**

**Description**

`request`

`[ListBigQueryExportsRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListBigQueryExportsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListBigQueryExportsResponse](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListBigQueryExportsResponse)>`

### listDescendantSecurityHealthAnalyticsCustomModules(ListDescendantSecurityHealthAnalyticsCustomModulesRequest request)

```
public ListenableFuture<ListDescendantSecurityHealthAnalyticsCustomModulesResponse> listDescendantSecurityHealthAnalyticsCustomModules(ListDescendantSecurityHealthAnalyticsCustomModulesRequest request)
```

Returns a list of all resident SecurityHealthAnalyticsCustomModules under the given CRM parent and all of the parent’s CRM descendants.

**Parameter**

**Name**

**Description**

`request`

`[ListDescendantSecurityHealthAnalyticsCustomModulesRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListDescendantSecurityHealthAnalyticsCustomModulesResponse](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListDescendantSecurityHealthAnalyticsCustomModulesResponse)>`

### listEffectiveSecurityHealthAnalyticsCustomModules(ListEffectiveSecurityHealthAnalyticsCustomModulesRequest request)

```
public ListenableFuture<ListEffectiveSecurityHealthAnalyticsCustomModulesResponse> listEffectiveSecurityHealthAnalyticsCustomModules(ListEffectiveSecurityHealthAnalyticsCustomModulesRequest request)
```

Returns a list of all EffectiveSecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

**Parameter**

**Name**

**Description**

`request`

`[ListEffectiveSecurityHealthAnalyticsCustomModulesRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListEffectiveSecurityHealthAnalyticsCustomModulesResponse](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListEffectiveSecurityHealthAnalyticsCustomModulesResponse)>`

### listFindings(ListFindingsRequest request)

```
public ListenableFuture<ListFindingsResponse> listFindings(ListFindingsRequest request)
```

Lists an organization or source's findings. To list across all sources provide a `-` as the source id. Example: /v1/organizations/{organization\_id}/sources/-/findings

**Parameter**

**Name**

**Description**

`request`

`[ListFindingsRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListFindingsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListFindingsResponse](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListFindingsResponse)>`

### listMuteConfigs(ListMuteConfigsRequest request)

```
public ListenableFuture<ListMuteConfigsResponse> listMuteConfigs(ListMuteConfigsRequest request)
```

Lists mute configs.

**Parameter**

**Name**

**Description**

`request`

`[ListMuteConfigsRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListMuteConfigsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListMuteConfigsResponse](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListMuteConfigsResponse)>`

### listNotificationConfigs(ListNotificationConfigsRequest request)

```
public ListenableFuture<ListNotificationConfigsResponse> listNotificationConfigs(ListNotificationConfigsRequest request)
```

Lists notification configs.

**Parameter**

**Name**

**Description**

`request`

`[ListNotificationConfigsRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListNotificationConfigsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListNotificationConfigsResponse](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListNotificationConfigsResponse)>`

### listSecurityHealthAnalyticsCustomModules(ListSecurityHealthAnalyticsCustomModulesRequest request)

```
public ListenableFuture<ListSecurityHealthAnalyticsCustomModulesResponse> listSecurityHealthAnalyticsCustomModules(ListSecurityHealthAnalyticsCustomModulesRequest request)
```

Returns a list of all SecurityHealthAnalyticsCustomModules for the given parent. This includes resident modules defined at the scope of the parent, and inherited modules, inherited from CRM ancestors.

**Parameter**

**Name**

**Description**

`request`

`[ListSecurityHealthAnalyticsCustomModulesRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListSecurityHealthAnalyticsCustomModulesResponse](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListSecurityHealthAnalyticsCustomModulesResponse)>`

### listSources(ListSourcesRequest request)

```
public ListenableFuture<ListSourcesResponse> listSources(ListSourcesRequest request)
```

Lists all sources belonging to an organization.

**Parameter**

**Name**

**Description**

`request`

`[ListSourcesRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListSourcesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListSourcesResponse](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ListSourcesResponse)>`

### runAssetDiscovery(RunAssetDiscoveryRequest request)

```
public ListenableFuture<Operation> runAssetDiscovery(RunAssetDiscoveryRequest request)
```

Runs asset discovery. The discovery is tracked with a long-running operation. This API can only be called with limited frequency for an organization. If it is called too frequently the caller will receive a TOO\_MANY\_REQUESTS error.

**Parameter**

**Name**

**Description**

`request`

`[RunAssetDiscoveryRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.RunAssetDiscoveryRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### setFindingState(SetFindingStateRequest request)

```
public ListenableFuture<Finding> setFindingState(SetFindingStateRequest request)
```

Updates the state of a finding.

**Parameter**

**Name**

**Description**

`request`

`[SetFindingStateRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.SetFindingStateRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Finding](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.Finding)>`

### setIamPolicy(SetIamPolicyRequest request)

```
public ListenableFuture<Policy> setIamPolicy(SetIamPolicyRequest request)
```

Sets the access control policy on the specified Source.

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.SetIamPolicyRequest`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<com.google.iam.v1.Policy>`

### setMute(SetMuteRequest request)

```
public ListenableFuture<Finding> setMute(SetMuteRequest request)
```

Updates the mute state of a finding.

**Parameter**

**Name**

**Description**

`request`

`[SetMuteRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.SetMuteRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Finding](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.Finding)>`

### testIamPermissions(TestIamPermissionsRequest request)

```
public ListenableFuture<TestIamPermissionsResponse> testIamPermissions(TestIamPermissionsRequest request)
```

Returns the permissions that a caller has on the specified source.

**Parameter**

**Name**

**Description**

`request`

`com.google.iam.v1.TestIamPermissionsRequest`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<com.google.iam.v1.TestIamPermissionsResponse>`

### updateBigQueryExport(UpdateBigQueryExportRequest request)

```
public ListenableFuture<BigQueryExport> updateBigQueryExport(UpdateBigQueryExportRequest request)
```

Updates a BigQuery export.

**Parameter**

**Name**

**Description**

`request`

`[UpdateBigQueryExportRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.UpdateBigQueryExportRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[BigQueryExport](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.BigQueryExport)>`

### updateExternalSystem(UpdateExternalSystemRequest request)

```
public ListenableFuture<ExternalSystem> updateExternalSystem(UpdateExternalSystemRequest request)
```

Updates external system. This is for a given finding.

**Parameter**

**Name**

**Description**

`request`

`[UpdateExternalSystemRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.UpdateExternalSystemRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ExternalSystem](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.ExternalSystem)>`

### updateFinding(UpdateFindingRequest request)

```
public ListenableFuture<Finding> updateFinding(UpdateFindingRequest request)
```

Creates or updates a finding. The corresponding source must exist for a finding creation to succeed.

**Parameter**

**Name**

**Description**

`request`

`[UpdateFindingRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.UpdateFindingRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Finding](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.Finding)>`

### updateMuteConfig(UpdateMuteConfigRequest request)

```
public ListenableFuture<MuteConfig> updateMuteConfig(UpdateMuteConfigRequest request)
```

Updates a mute config.

**Parameter**

**Name**

**Description**

`request`

`[UpdateMuteConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.UpdateMuteConfigRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[MuteConfig](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.MuteConfig)>`

### updateNotificationConfig(UpdateNotificationConfigRequest request)

```
public ListenableFuture<NotificationConfig> updateNotificationConfig(UpdateNotificationConfigRequest request)
```

Updates a notification config. The following update fields are allowed: description, pubsub\_topic, streaming\_config.filter

**Parameter**

**Name**

**Description**

`request`

`[UpdateNotificationConfigRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.UpdateNotificationConfigRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[NotificationConfig](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.NotificationConfig)>`

### updateOrganizationSettings(UpdateOrganizationSettingsRequest request)

```
public ListenableFuture<OrganizationSettings> updateOrganizationSettings(UpdateOrganizationSettingsRequest request)
```

Updates an organization's settings.

**Parameter**

**Name**

**Description**

`request`

`[UpdateOrganizationSettingsRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[OrganizationSettings](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.OrganizationSettings)>`

### updateSecurityHealthAnalyticsCustomModule(UpdateSecurityHealthAnalyticsCustomModuleRequest request)

```
public ListenableFuture<SecurityHealthAnalyticsCustomModule> updateSecurityHealthAnalyticsCustomModule(UpdateSecurityHealthAnalyticsCustomModuleRequest request)
```

Updates the SecurityHealthAnalyticsCustomModule under the given name based on the given update mask. Updating the enablement state is supported on both resident and inherited modules (though resident modules cannot have an enablement state of "inherited"). Updating the display name and custom config of a module is supported on resident modules only.

**Parameter**

**Name**

**Description**

`request`

`[UpdateSecurityHealthAnalyticsCustomModuleRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.UpdateSecurityHealthAnalyticsCustomModuleRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[SecurityHealthAnalyticsCustomModule](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.SecurityHealthAnalyticsCustomModule)>`

### updateSecurityMarks(UpdateSecurityMarksRequest request)

```
public ListenableFuture<SecurityMarks> updateSecurityMarks(UpdateSecurityMarksRequest request)
```

Updates security marks.

**Parameter**

**Name**

**Description**

`request`

`[UpdateSecurityMarksRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.UpdateSecurityMarksRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[SecurityMarks](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.SecurityMarks)>`

### updateSource(UpdateSourceRequest request)

```
public ListenableFuture<Source> updateSource(UpdateSourceRequest request)
```

Updates a source.

**Parameter**

**Name**

**Description**

`request`

`[UpdateSourceRequest](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.UpdateSourceRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Source](/java/docs/reference/google-cloud-securitycenter/2.32.0/com.google.cloud.securitycenter.v1.Source)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
