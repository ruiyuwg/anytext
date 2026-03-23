-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class ServiceUsageStubSettings (2.53.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.7 2.2.8

```
public class ServiceUsageStubSettings extends StubSettings<ServiceUsageStubSettings>
```

Settings class to configure an instance of [ServiceUsageStub](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.stub.ServiceUsageStub).

The default instance has everything set to sensible defaults:

-   The default service address (serviceusage.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the [RetrySettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.retrying.RetrySettings) of getService:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ServiceUsageStubSettings.Builder serviceUsageSettingsBuilder =
     ServiceUsageStubSettings.newBuilder();
 serviceUsageSettingsBuilder
     .getServiceSettings()
     .setRetrySettings(
         serviceUsageSettingsBuilder
             .getServiceSettings()
             .getRetrySettings()
             .toBuilder()
             .setInitialRetryDelayDuration(Duration.ofSeconds(1))
             .setInitialRpcTimeoutDuration(Duration.ofSeconds(5))
             .setMaxAttempts(5)
             .setMaxRetryDelayDuration(Duration.ofSeconds(30))
             .setMaxRpcTimeoutDuration(Duration.ofSeconds(60))
             .setRetryDelayMultiplier(1.3)
             .setRpcTimeoutMultiplier(1.5)
             .setTotalTimeoutDuration(Duration.ofSeconds(300))
             .build());
 ServiceUsageStubSettings serviceUsageSettings = serviceUsageSettingsBuilder.build();
 
```
 

Please refer to the [Client Side Retry Guide](https://github.com/googleapis/google-cloud-java/blob/main/docs/client_retries.md) for additional support in setting retries.

To configure the RetrySettings of a Long Running Operation method, create an OperationTimedPollAlgorithm object and update the RPC's polling algorithm. For example, to configure the RetrySettings for enableService:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 ServiceUsageStubSettings.Builder serviceUsageSettingsBuilder =
     ServiceUsageStubSettings.newBuilder();
 TimedRetryAlgorithm timedRetryAlgorithm =
     OperationalTimedPollAlgorithm.create(
         RetrySettings.newBuilder()
             .setInitialRetryDelayDuration(Duration.ofMillis(500))
             .setRetryDelayMultiplier(1.5)
             .setMaxRetryDelay(Duration.ofMillis(5000))
             .setTotalTimeoutDuration(Duration.ofHours(24))
             .build());
 serviceUsageSettingsBuilder
     .createClusterOperationSettings()
     .setPollingAlgorithm(timedRetryAlgorithm)
     .build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> ServiceUsageStubSettings

## Inherited Members

[StubSettings.getApiKey()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_getApiKey__)

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
public static ServiceUsageStubSettings.Builder newBuilder()
```

Returns a new gRPC builder for this class.

**Returns**

**Type**

**Description**

`[ServiceUsageStubSettings.Builder](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.stub.ServiceUsageStubSettings.Builder)`

### newBuilder(ClientContext clientContext)

```
public static ServiceUsageStubSettings.Builder newBuilder(ClientContext clientContext)
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

`[ServiceUsageStubSettings.Builder](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.stub.ServiceUsageStubSettings.Builder)`

### newHttpJsonBuilder()

```
public static ServiceUsageStubSettings.Builder newHttpJsonBuilder()
```

Returns a new REST builder for this class.

**Returns**

**Type**

**Description**

`[ServiceUsageStubSettings.Builder](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.stub.ServiceUsageStubSettings.Builder)`

## Constructors

### ServiceUsageStubSettings(ServiceUsageStubSettings.Builder settingsBuilder)

```
protected ServiceUsageStubSettings(ServiceUsageStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

`settingsBuilder`

`[ServiceUsageStubSettings.Builder](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.stub.ServiceUsageStubSettings.Builder)`  

## Methods

### batchEnableServicesOperationSettings()

```
public OperationCallSettings<BatchEnableServicesRequest,BatchEnableServicesResponse,OperationMetadata> batchEnableServicesOperationSettings()
```

Returns the object with the settings used for calls to batchEnableServices.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[BatchEnableServicesRequest](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.BatchEnableServicesRequest),[BatchEnableServicesResponse](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.BatchEnableServicesResponse),[OperationMetadata](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.OperationMetadata)>`

### batchEnableServicesSettings()

```
public UnaryCallSettings<BatchEnableServicesRequest,Operation> batchEnableServicesSettings()
```

Returns the object with the settings used for calls to batchEnableServices.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[BatchEnableServicesRequest](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.BatchEnableServicesRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### batchGetServicesSettings()

```
public UnaryCallSettings<BatchGetServicesRequest,BatchGetServicesResponse> batchGetServicesSettings()
```

Returns the object with the settings used for calls to batchGetServices.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[BatchGetServicesRequest](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.BatchGetServicesRequest),[BatchGetServicesResponse](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.BatchGetServicesResponse)>`

### createStub()

```
public ServiceUsageStub createStub()
```

**Returns**

**Type**

**Description**

`[ServiceUsageStub](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.stub.ServiceUsageStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### disableServiceOperationSettings()

```
public OperationCallSettings<DisableServiceRequest,DisableServiceResponse,OperationMetadata> disableServiceOperationSettings()
```

Returns the object with the settings used for calls to disableService.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[DisableServiceRequest](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.DisableServiceRequest),[DisableServiceResponse](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.DisableServiceResponse),[OperationMetadata](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.OperationMetadata)>`

### disableServiceSettings()

```
public UnaryCallSettings<DisableServiceRequest,Operation> disableServiceSettings()
```

Returns the object with the settings used for calls to disableService.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DisableServiceRequest](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.DisableServiceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### enableServiceOperationSettings()

```
public OperationCallSettings<EnableServiceRequest,EnableServiceResponse,OperationMetadata> enableServiceOperationSettings()
```

Returns the object with the settings used for calls to enableService.

**Returns**

**Type**

**Description**

`[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[EnableServiceRequest](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.EnableServiceRequest),[EnableServiceResponse](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.EnableServiceResponse),[OperationMetadata](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.OperationMetadata)>`

### enableServiceSettings()

```
public UnaryCallSettings<EnableServiceRequest,Operation> enableServiceSettings()
```

Returns the object with the settings used for calls to enableService.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[EnableServiceRequest](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.EnableServiceRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

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

### getServiceSettings()

```
public UnaryCallSettings<GetServiceRequest,Service> getServiceSettings()
```

Returns the object with the settings used for calls to getService.

**Returns**

**Type**

**Description**

`[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetServiceRequest](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.GetServiceRequest),[Service](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.Service)>`

### listServicesSettings()

```
public PagedCallSettings<ListServicesRequest,ListServicesResponse,ServiceUsageClient.ListServicesPagedResponse> listServicesSettings()
```

Returns the object with the settings used for calls to listServices.

**Returns**

**Type**

**Description**

`[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListServicesRequest](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.ListServicesRequest),[ListServicesResponse](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.ListServicesResponse),[ListServicesPagedResponse](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.ServiceUsageClient.ListServicesPagedResponse)>`

### toBuilder()

```
public ServiceUsageStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

`[ServiceUsageStubSettings.Builder](/java/docs/reference/google-cloud-service-usage/2.53.0/com.google.api.serviceusage.v1.stub.ServiceUsageStubSettings.Builder)`

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
