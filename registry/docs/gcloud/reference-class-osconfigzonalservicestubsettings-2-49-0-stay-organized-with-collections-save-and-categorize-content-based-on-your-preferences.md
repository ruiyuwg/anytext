-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class OsConfigZonalServiceStubSettings (2.49.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.6 2.4.3 2.3.2

```
public class OsConfigZonalServiceStubSettings extends StubSettings<OsConfigZonalServiceStubSettings>
```

Settings class to configure an instance of [OsConfigZonalServiceStub](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.stub.OsConfigZonalServiceStub).

The default instance has everything set to sensible defaults:

-   The default service address (osconfig.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getOSPolicyAssignment to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 OsConfigZonalServiceStubSettings.Builder osConfigZonalServiceSettingsBuilder =
     OsConfigZonalServiceStubSettings.newBuilder();
 osConfigZonalServiceSettingsBuilder
     .getOSPolicyAssignmentSettings()
     .setRetrySettings(
         osConfigZonalServiceSettingsBuilder
             .getOSPolicyAssignmentSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 OsConfigZonalServiceStubSettings osConfigZonalServiceSettings =
     osConfigZonalServiceSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> OsConfigZonalServiceStubSettings

## Inherited Members

[StubSettings.getBackgroundExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getBackgroundExecutorProvider__)

[StubSettings.getClock()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getClock__)

[StubSettings.getCredentialsProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getCredentialsProvider__)

[StubSettings.getEndpoint()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getEndpoint__)

[StubSettings.getExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getExecutorProvider__)

[StubSettings.getGdchApiAudience()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getGdchApiAudience__)

[StubSettings.getHeaderProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getHeaderProvider__)

[StubSettings.getInternalHeaderProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getInternalHeaderProvider__)

[StubSettings.getMtlsEndpoint()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getMtlsEndpoint__)

[StubSettings.getQuotaProjectId()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getQuotaProjectId__)

[StubSettings.getServiceName()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getServiceName__)

[StubSettings.getStreamWatchdogCheckInterval()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getStreamWatchdogCheckInterval__)

[StubSettings.getStreamWatchdogCheckIntervalDuration()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getStreamWatchdogCheckIntervalDuration__)

[StubSettings.getStreamWatchdogProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getStreamWatchdogProvider__)

[StubSettings.getTracerFactory()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getTracerFactory__)

[StubSettings.getTransportChannelProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getTransportChannelProvider__)

[StubSettings.getUniverseDomain()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getUniverseDomain__)

[StubSettings.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

[StubSettings.toString()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toString__)

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Methods

### defaultApiClientHeaderProviderBuilder()

```
public static ApiClientHeaderProvider.Builder defaultApiClientHeaderProviderBuilder()
```

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ApiClientHeaderProvider.Builder.html)`

### defaultCredentialsProviderBuilder()

```
public static GoogleCredentialsProvider.Builder defaultCredentialsProviderBuilder()
```

Returns a builder for the default credentials for this service.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.GoogleCredentialsProvider.Builder.html)`

### defaultExecutorProviderBuilder()

```
public static InstantiatingExecutorProvider.Builder defaultExecutorProviderBuilder()
```

Returns a builder for the default ExecutorProvider for this service.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.InstantiatingExecutorProvider.Builder.html)`

### defaultGrpcApiClientHeaderProviderBuilder()

```
public static ApiClientHeaderProvider.Builder defaultGrpcApiClientHeaderProviderBuilder()
```

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ApiClientHeaderProvider.Builder.html)`

### defaultGrpcTransportProviderBuilder()

```
public static InstantiatingGrpcChannelProvider.Builder defaultGrpcTransportProviderBuilder()
```

Returns a builder for the default gRPC ChannelProvider for this service.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.InstantiatingGrpcChannelProvider.Builder.html)`

### defaultHttpJsonApiClientHeaderProviderBuilder()

```
public static ApiClientHeaderProvider.Builder defaultHttpJsonApiClientHeaderProviderBuilder()
```

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ApiClientHeaderProvider.Builder.html)`

### defaultHttpJsonTransportProviderBuilder()

```
public static InstantiatingHttpJsonChannelProvider.Builder defaultHttpJsonTransportProviderBuilder()
```

**Beta**

This feature is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the launch stage descriptions.

Returns a builder for the default REST ChannelProvider for this service.

**Returns**

**Type**

**Description**

`[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.InstantiatingHttpJsonChannelProvider.Builder.html)`

### defaultTransportChannelProvider()

```
public static TransportChannelProvider defaultTransportChannelProvider()
```

**Returns**

**Type**

**Description**

`[TransportChannelProvider](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.TransportChannelProvider.html)`

### getDefaultEndpoint()

```
public static String getDefaultEndpoint()
```

**Obsolete**

_Use getEndpoint() instead_

This feature is stable for usage in this major version, but may be deprecated in a future release.

Returns the default service endpoint.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getDefaultMtlsEndpoint()

```
public static String getDefaultMtlsEndpoint()
```

Returns the default mTLS service endpoint.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getDefaultServiceScopes()

```
public static List<String> getDefaultServiceScopes()
```

Returns the default service scopes.

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### newBuilder()

```
public static OsConfigZonalServiceStubSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[OsConfigZonalServiceStubSettings.Builder](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.stub.OsConfigZonalServiceStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static OsConfigZonalServiceStubSettings.Builder newBuilder(ClientContext clientContext)
```

Returns a new builder for this class.

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[OsConfigZonalServiceStubSettings.Builder](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.stub.OsConfigZonalServiceStubSettings.Builder)`

### newHttpJsonBuilder()

```
public static OsConfigZonalServiceStubSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[OsConfigZonalServiceStubSettings.Builder](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.stub.OsConfigZonalServiceStubSettings.Builder)`

## Constructors

### OsConfigZonalServiceStubSettings(OsConfigZonalServiceStubSettings.Builder settingsBuilder)

```
protected OsConfigZonalServiceStubSettings(OsConfigZonalServiceStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[OsConfigZonalServiceStubSettings.Builder](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.stub.OsConfigZonalServiceStubSettings.Builder)`  

## Methods

### createOSPolicyAssignmentOperationSettings()

```
public OperationCallSettings<CreateOSPolicyAssignmentRequest,OSPolicyAssignment,OSPolicyAssignmentOperationMetadata> createOSPolicyAssignmentOperationSettings()
```

Returns the object with the settings used for calls to createOSPolicyAssignment.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateOSPolicyAssignmentRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.CreateOSPolicyAssignmentRequest),[OSPolicyAssignment](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.OSPolicyAssignment),[OSPolicyAssignmentOperationMetadata](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.OSPolicyAssignmentOperationMetadata)>`

### createOSPolicyAssignmentSettings()

```
public UnaryCallSettings<CreateOSPolicyAssignmentRequest,Operation> createOSPolicyAssignmentSettings()
```

Returns the object with the settings used for calls to createOSPolicyAssignment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateOSPolicyAssignmentRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.CreateOSPolicyAssignmentRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createStub()

```
public OsConfigZonalServiceStub createStub()
```

**Returns**

**Type**

**Description**

`[OsConfigZonalServiceStub](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.stub.OsConfigZonalServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### deleteOSPolicyAssignmentOperationSettings()

```
public OperationCallSettings<DeleteOSPolicyAssignmentRequest,Empty,OSPolicyAssignmentOperationMetadata> deleteOSPolicyAssignmentOperationSettings()
```

Returns the object with the settings used for calls to deleteOSPolicyAssignment.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteOSPolicyAssignmentRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.DeleteOSPolicyAssignmentRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OSPolicyAssignmentOperationMetadata](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.OSPolicyAssignmentOperationMetadata)>`

### deleteOSPolicyAssignmentSettings()

```
public UnaryCallSettings<DeleteOSPolicyAssignmentRequest,Operation> deleteOSPolicyAssignmentSettings()
```

Returns the object with the settings used for calls to deleteOSPolicyAssignment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteOSPolicyAssignmentRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.DeleteOSPolicyAssignmentRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getInventorySettings()

```
public UnaryCallSettings<GetInventoryRequest,Inventory> getInventorySettings()
```

Returns the object with the settings used for calls to getInventory.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetInventoryRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.GetInventoryRequest),[Inventory](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.Inventory)>`

### getOSPolicyAssignmentReportSettings()

```
public UnaryCallSettings<GetOSPolicyAssignmentReportRequest,OSPolicyAssignmentReport> getOSPolicyAssignmentReportSettings()
```

Returns the object with the settings used for calls to getOSPolicyAssignmentReport.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetOSPolicyAssignmentReportRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.GetOSPolicyAssignmentReportRequest),[OSPolicyAssignmentReport](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.OSPolicyAssignmentReport)>`

### getOSPolicyAssignmentSettings()

```
public UnaryCallSettings<GetOSPolicyAssignmentRequest,OSPolicyAssignment> getOSPolicyAssignmentSettings()
```

Returns the object with the settings used for calls to getOSPolicyAssignment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetOSPolicyAssignmentRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.GetOSPolicyAssignmentRequest),[OSPolicyAssignment](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.OSPolicyAssignment)>`

### getServiceName()

```
public String getServiceName()
```

Returns the default service name.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

**Overrides**

[StubSettings<SettingsT>.getServiceName()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getServiceName__)

### getVulnerabilityReportSettings()

```
public UnaryCallSettings<GetVulnerabilityReportRequest,VulnerabilityReport> getVulnerabilityReportSettings()
```

Returns the object with the settings used for calls to getVulnerabilityReport.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetVulnerabilityReportRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.GetVulnerabilityReportRequest),[VulnerabilityReport](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.VulnerabilityReport)>`

### listInventoriesSettings()

```
public PagedCallSettings<ListInventoriesRequest,ListInventoriesResponse,OsConfigZonalServiceClient.ListInventoriesPagedResponse> listInventoriesSettings()
```

Returns the object with the settings used for calls to listInventories.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListInventoriesRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.ListInventoriesRequest),[ListInventoriesResponse](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.ListInventoriesResponse),[ListInventoriesPagedResponse](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.OsConfigZonalServiceClient.ListInventoriesPagedResponse)>`

### listOSPolicyAssignmentReportsSettings()

```
public PagedCallSettings<ListOSPolicyAssignmentReportsRequest,ListOSPolicyAssignmentReportsResponse,OsConfigZonalServiceClient.ListOSPolicyAssignmentReportsPagedResponse> listOSPolicyAssignmentReportsSettings()
```

Returns the object with the settings used for calls to listOSPolicyAssignmentReports.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListOSPolicyAssignmentReportsRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.ListOSPolicyAssignmentReportsRequest),[ListOSPolicyAssignmentReportsResponse](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.ListOSPolicyAssignmentReportsResponse),[ListOSPolicyAssignmentReportsPagedResponse](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.OsConfigZonalServiceClient.ListOSPolicyAssignmentReportsPagedResponse)>`

### listOSPolicyAssignmentRevisionsSettings()

```
public PagedCallSettings<ListOSPolicyAssignmentRevisionsRequest,ListOSPolicyAssignmentRevisionsResponse,OsConfigZonalServiceClient.ListOSPolicyAssignmentRevisionsPagedResponse> listOSPolicyAssignmentRevisionsSettings()
```

Returns the object with the settings used for calls to listOSPolicyAssignmentRevisions.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListOSPolicyAssignmentRevisionsRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.ListOSPolicyAssignmentRevisionsRequest),[ListOSPolicyAssignmentRevisionsResponse](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.ListOSPolicyAssignmentRevisionsResponse),[ListOSPolicyAssignmentRevisionsPagedResponse](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.OsConfigZonalServiceClient.ListOSPolicyAssignmentRevisionsPagedResponse)>`

### listOSPolicyAssignmentsSettings()

```
public PagedCallSettings<ListOSPolicyAssignmentsRequest,ListOSPolicyAssignmentsResponse,OsConfigZonalServiceClient.ListOSPolicyAssignmentsPagedResponse> listOSPolicyAssignmentsSettings()
```

Returns the object with the settings used for calls to listOSPolicyAssignments.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListOSPolicyAssignmentsRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.ListOSPolicyAssignmentsRequest),[ListOSPolicyAssignmentsResponse](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.ListOSPolicyAssignmentsResponse),[ListOSPolicyAssignmentsPagedResponse](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.OsConfigZonalServiceClient.ListOSPolicyAssignmentsPagedResponse)>`

### listVulnerabilityReportsSettings()

```
public PagedCallSettings<ListVulnerabilityReportsRequest,ListVulnerabilityReportsResponse,OsConfigZonalServiceClient.ListVulnerabilityReportsPagedResponse> listVulnerabilityReportsSettings()
```

Returns the object with the settings used for calls to listVulnerabilityReports.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListVulnerabilityReportsRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.ListVulnerabilityReportsRequest),[ListVulnerabilityReportsResponse](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.ListVulnerabilityReportsResponse),[ListVulnerabilityReportsPagedResponse](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.OsConfigZonalServiceClient.ListVulnerabilityReportsPagedResponse)>`

### toBuilder()

```
public OsConfigZonalServiceStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[OsConfigZonalServiceStubSettings.Builder](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.stub.OsConfigZonalServiceStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateOSPolicyAssignmentOperationSettings()

```
public OperationCallSettings<UpdateOSPolicyAssignmentRequest,OSPolicyAssignment,OSPolicyAssignmentOperationMetadata> updateOSPolicyAssignmentOperationSettings()
```

Returns the object with the settings used for calls to updateOSPolicyAssignment.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UpdateOSPolicyAssignmentRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.UpdateOSPolicyAssignmentRequest),[OSPolicyAssignment](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.OSPolicyAssignment),[OSPolicyAssignmentOperationMetadata](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.OSPolicyAssignmentOperationMetadata)>`

### updateOSPolicyAssignmentSettings()

```
public UnaryCallSettings<UpdateOSPolicyAssignmentRequest,Operation> updateOSPolicyAssignmentSettings()
```

Returns the object with the settings used for calls to updateOSPolicyAssignment.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateOSPolicyAssignmentRequest](/java/docs/reference/google-cloud-os-config/2.49.0/com.google.cloud.osconfig.v1.UpdateOSPolicyAssignmentRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
