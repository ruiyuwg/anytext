-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ServiceManagerStubSettings (3.7.0) Stay organized with collections Save and categorize content based on your preferences.

3.85.0 (latest) 3.83.0 3.81.0 3.80.0 3.78.0 3.76.0 3.74.0 3.73.0 3.72.0 3.71.0 3.70.0 3.68.0 3.66.0 3.65.0 3.62.0 3.61.0 3.60.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.51.0 3.50.0 3.49.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.39.0 3.38.0 3.37.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.27.0 3.26.0 3.25.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.7 3.0.1 2.1.7

```
public class ServiceManagerStubSettings extends StubSettings<ServiceManagerStubSettings>
```

Settings class to configure an instance of [ServiceManagerStub](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.cloud.api.servicemanagement.v1.stub.ServiceManagerStub).

The default instance has everything set to sensible defaults:

-   The default service address (servicemanagement.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of getService to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ServiceManagerStubSettings.Builder serviceManagerSettingsBuilder =
     ServiceManagerStubSettings.newBuilder();
 serviceManagerSettingsBuilder
     .getServiceSettings()
     .setRetrySettings(
         serviceManagerSettingsBuilder
             .getServiceSettings()
             .getRetrySettings()
             .toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 ServiceManagerStubSettings serviceManagerSettings = serviceManagerSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> ServiceManagerStubSettings

## Inherited Members

[StubSettings.getBackgroundExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getBackgroundExecutorProvider__)

[StubSettings.getClock()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getClock__)

[StubSettings.getCredentialsProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getCredentialsProvider__)

[StubSettings.getEndpoint()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getEndpoint__)

[StubSettings.getExecutorProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getExecutorProvider__)

[StubSettings.getHeaderProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getHeaderProvider__)

[StubSettings.getInternalHeaderProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getInternalHeaderProvider__)

[StubSettings.getMtlsEndpoint()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getMtlsEndpoint__)

[StubSettings.getQuotaProjectId()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getQuotaProjectId__)

[StubSettings.getStreamWatchdogCheckInterval()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getStreamWatchdogCheckInterval__)

[StubSettings.getStreamWatchdogProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getStreamWatchdogProvider__)

[StubSettings.getTracerFactory()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getTracerFactory__)

[StubSettings.getTransportChannelProvider()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getTransportChannelProvider__)

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
public static ServiceManagerStubSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[ServiceManagerStubSettings.Builder](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.cloud.api.servicemanagement.v1.stub.ServiceManagerStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static ServiceManagerStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[ServiceManagerStubSettings.Builder](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.cloud.api.servicemanagement.v1.stub.ServiceManagerStubSettings.Builder)`

### newHttpJsonBuilder()

```
public static ServiceManagerStubSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[ServiceManagerStubSettings.Builder](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.cloud.api.servicemanagement.v1.stub.ServiceManagerStubSettings.Builder)`

## Constructors

### ServiceManagerStubSettings(ServiceManagerStubSettings.Builder settingsBuilder)

```
protected ServiceManagerStubSettings(ServiceManagerStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[ServiceManagerStubSettings.Builder](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.cloud.api.servicemanagement.v1.stub.ServiceManagerStubSettings.Builder)`  

## Methods

### createServiceConfigSettings()

```
public UnaryCallSettings<CreateServiceConfigRequest,Service> createServiceConfigSettings()
```

Returns the object with the settings used for calls to createServiceConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateServiceConfigRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.CreateServiceConfigRequest),com.google.api.Service>`

### createServiceOperationSettings()

```
public OperationCallSettings<CreateServiceRequest,ManagedService,OperationMetadata> createServiceOperationSettings()
```

Returns the object with the settings used for calls to createService.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateServiceRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.CreateServiceRequest),[ManagedService](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.ManagedService),[OperationMetadata](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.OperationMetadata)>`

### createServiceRolloutOperationSettings()

```
public OperationCallSettings<CreateServiceRolloutRequest,Rollout,OperationMetadata> createServiceRolloutOperationSettings()
```

Returns the object with the settings used for calls to createServiceRollout.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[CreateServiceRolloutRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.CreateServiceRolloutRequest),[Rollout](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.Rollout),[OperationMetadata](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.OperationMetadata)>`

### createServiceRolloutSettings()

```
public UnaryCallSettings<CreateServiceRolloutRequest,Operation> createServiceRolloutSettings()
```

Returns the object with the settings used for calls to createServiceRollout.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateServiceRolloutRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.CreateServiceRolloutRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createServiceSettings()

```
public UnaryCallSettings<CreateServiceRequest,Operation> createServiceSettings()
```

Returns the object with the settings used for calls to createService.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateServiceRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.CreateServiceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createStub()

```
public ServiceManagerStub createStub()
```

**Returns**

**Type**

**Description**

`[ServiceManagerStub](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.cloud.api.servicemanagement.v1.stub.ServiceManagerStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### deleteServiceOperationSettings()

```
public OperationCallSettings<DeleteServiceRequest,Empty,OperationMetadata> deleteServiceOperationSettings()
```

Returns the object with the settings used for calls to deleteService.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DeleteServiceRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.DeleteServiceRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html),[OperationMetadata](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.OperationMetadata)>`

### deleteServiceSettings()

```
public UnaryCallSettings<DeleteServiceRequest,Operation> deleteServiceSettings()
```

Returns the object with the settings used for calls to deleteService.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteServiceRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.DeleteServiceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### generateConfigReportSettings()

```
public UnaryCallSettings<GenerateConfigReportRequest,GenerateConfigReportResponse> generateConfigReportSettings()
```

Returns the object with the settings used for calls to generateConfigReport.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GenerateConfigReportRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.GenerateConfigReportRequest),[GenerateConfigReportResponse](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.GenerateConfigReportResponse)>`

### getServiceConfigSettings()

```
public UnaryCallSettings<GetServiceConfigRequest,Service> getServiceConfigSettings()
```

Returns the object with the settings used for calls to getServiceConfig.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetServiceConfigRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.GetServiceConfigRequest),com.google.api.Service>`

### getServiceRolloutSettings()

```
public UnaryCallSettings<GetServiceRolloutRequest,Rollout> getServiceRolloutSettings()
```

Returns the object with the settings used for calls to getServiceRollout.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetServiceRolloutRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.GetServiceRolloutRequest),[Rollout](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.Rollout)>`

### getServiceSettings()

```
public UnaryCallSettings<GetServiceRequest,ManagedService> getServiceSettings()
```

Returns the object with the settings used for calls to getService.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetServiceRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.GetServiceRequest),[ManagedService](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.ManagedService)>`

### listServiceConfigsSettings()

```
public PagedCallSettings<ListServiceConfigsRequest,ListServiceConfigsResponse,ServiceManagerClient.ListServiceConfigsPagedResponse> listServiceConfigsSettings()
```

Returns the object with the settings used for calls to listServiceConfigs.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListServiceConfigsRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.ListServiceConfigsRequest),[ListServiceConfigsResponse](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.ListServiceConfigsResponse),[ListServiceConfigsPagedResponse](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.cloud.api.servicemanagement.v1.ServiceManagerClient.ListServiceConfigsPagedResponse)>`

### listServiceRolloutsSettings()

```
public PagedCallSettings<ListServiceRolloutsRequest,ListServiceRolloutsResponse,ServiceManagerClient.ListServiceRolloutsPagedResponse> listServiceRolloutsSettings()
```

Returns the object with the settings used for calls to listServiceRollouts.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListServiceRolloutsRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.ListServiceRolloutsRequest),[ListServiceRolloutsResponse](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.ListServiceRolloutsResponse),[ListServiceRolloutsPagedResponse](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.cloud.api.servicemanagement.v1.ServiceManagerClient.ListServiceRolloutsPagedResponse)>`

### listServicesSettings()

```
public PagedCallSettings<ListServicesRequest,ListServicesResponse,ServiceManagerClient.ListServicesPagedResponse> listServicesSettings()
```

Returns the object with the settings used for calls to listServices.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListServicesRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.ListServicesRequest),[ListServicesResponse](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.ListServicesResponse),[ListServicesPagedResponse](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.cloud.api.servicemanagement.v1.ServiceManagerClient.ListServicesPagedResponse)>`

### submitConfigSourceOperationSettings()

```
public OperationCallSettings<SubmitConfigSourceRequest,SubmitConfigSourceResponse,OperationMetadata> submitConfigSourceOperationSettings()
```

Returns the object with the settings used for calls to submitConfigSource.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[SubmitConfigSourceRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.SubmitConfigSourceRequest),[SubmitConfigSourceResponse](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.SubmitConfigSourceResponse),[OperationMetadata](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.OperationMetadata)>`

### submitConfigSourceSettings()

```
public UnaryCallSettings<SubmitConfigSourceRequest,Operation> submitConfigSourceSettings()
```

Returns the object with the settings used for calls to submitConfigSource.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[SubmitConfigSourceRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.SubmitConfigSourceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### toBuilder()

```
public ServiceManagerStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[ServiceManagerStubSettings.Builder](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.cloud.api.servicemanagement.v1.stub.ServiceManagerStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### undeleteServiceOperationSettings()

```
public OperationCallSettings<UndeleteServiceRequest,UndeleteServiceResponse,OperationMetadata> undeleteServiceOperationSettings()
```

Returns the object with the settings used for calls to undeleteService.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[UndeleteServiceRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.UndeleteServiceRequest),[UndeleteServiceResponse](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.UndeleteServiceResponse),[OperationMetadata](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.OperationMetadata)>`

### undeleteServiceSettings()

```
public UnaryCallSettings<UndeleteServiceRequest,Operation> undeleteServiceSettings()
```

Returns the object with the settings used for calls to undeleteService.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UndeleteServiceRequest](/java/docs/reference/google-cloud-service-management/3.7.0/com.google.api.servicemanagement.v1.UndeleteServiceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
