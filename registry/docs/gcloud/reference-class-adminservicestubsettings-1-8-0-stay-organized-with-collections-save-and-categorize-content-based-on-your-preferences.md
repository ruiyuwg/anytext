-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class AdminServiceStubSettings (1.8.0) Stay organized with collections Save and categorize content based on your preferences.

1.16.2 (latest) 1.16.1 1.15.21 1.14.8 1.13.8 1.12.22 1.11.2 1.10.0 1.9.4 1.8.0 1.7.1 1.6.3 1.5.5 1.4.12

```
public class AdminServiceStubSettings extends StubSettings<AdminServiceStubSettings>
```

Settings class to configure an instance of [AdminServiceStub](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.v1.stub.AdminServiceStub).

The default instance has everything set to sensible defaults:

-   The default service address (pubsublite.googleapis.com) and default port (443) are used.
-   Credentials are acquired automatically through Application Default Credentials.
-   Retries are configured for idempotent methods but not for non-idempotent methods.

The builder of this class is recursive, so contained classes are themselves builders. When build() is called, the tree of builders is called to create the complete settings object.

For example, to set the total timeout of createTopic to 30 seconds:

 ```

 // This snippet has been automatically generated and should be regarded as a code template only.
 // It will require modifications to work:
 // - It may require correct/in-range values for request initialization.
 // - It may require specifying regional endpoints when creating the service client as shown in
 // https://cloud.google.com/java/docs/setup#configure_endpoints_for_the_client_library
 AdminServiceStubSettings.Builder adminServiceSettingsBuilder =
     AdminServiceStubSettings.newBuilder();
 adminServiceSettingsBuilder
     .createTopicSettings()
     .setRetrySettings(
         adminServiceSettingsBuilder.createTopicSettings().getRetrySettings().toBuilder()
             .setTotalTimeout(Duration.ofSeconds(30))
             .build());
 AdminServiceStubSettings adminServiceSettings = adminServiceSettingsBuilder.build();
 
```
 

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [StubSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html) \> AdminServiceStubSettings

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

[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ApiClientHeaderProvider.Builder.html)

### defaultCredentialsProviderBuilder()

```
public static GoogleCredentialsProvider.Builder defaultCredentialsProviderBuilder()
```

Returns a builder for the default credentials for this service.

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.GoogleCredentialsProvider.Builder.html)

### defaultExecutorProviderBuilder()

```
public static InstantiatingExecutorProvider.Builder defaultExecutorProviderBuilder()
```

Returns a builder for the default ExecutorProvider for this service.

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.core.InstantiatingExecutorProvider.Builder.html)

### defaultGrpcTransportProviderBuilder()

```
public static InstantiatingGrpcChannelProvider.Builder defaultGrpcTransportProviderBuilder()
```

Returns a builder for the default ChannelProvider for this service.

**Returns**

**Type**

**Description**

[Builder](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.InstantiatingGrpcChannelProvider.Builder.html)

### defaultTransportChannelProvider()

```
public static TransportChannelProvider defaultTransportChannelProvider()
```

**Returns**

**Type**

**Description**

[TransportChannelProvider](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.TransportChannelProvider.html)

### getDefaultEndpoint()

```
public static String getDefaultEndpoint()
```

Returns the default service endpoint.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getDefaultMtlsEndpoint()

```
public static String getDefaultMtlsEndpoint()
```

Returns the default mTLS service endpoint.

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getDefaultServiceScopes()

```
public static List<String> getDefaultServiceScopes()
```

Returns the default service scopes.

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

### newBuilder()

```
public static AdminServiceStubSettings.Builder newBuilder()
```

Returns a new builder for this class.

**Returns**

**Type**

**Description**

[AdminServiceStubSettings.Builder](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.v1.stub.AdminServiceStubSettings.Builder)

### newBuilder(ClientContext clientContext)

```
public static AdminServiceStubSettings.Builder newBuilder(ClientContext clientContext)
```

Returns a new builder for this class.

**Parameter**

**Name**

**Description**

clientContext

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

[AdminServiceStubSettings.Builder](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.v1.stub.AdminServiceStubSettings.Builder)

## Constructors

### AdminServiceStubSettings(AdminServiceStubSettings.Builder settingsBuilder)

```
protected AdminServiceStubSettings(AdminServiceStubSettings.Builder settingsBuilder)
```

**Parameter**

**Name**

**Description**

settingsBuilder

`[AdminServiceStubSettings.Builder](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.v1.stub.AdminServiceStubSettings.Builder)`  

## Methods

### createReservationSettings()

```
public UnaryCallSettings<CreateReservationRequest,Reservation> createReservationSettings()
```

Returns the object with the settings used for calls to createReservation.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateReservationRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.CreateReservationRequest),[Reservation](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.Reservation)\>

### createStub()

```
public AdminServiceStub createStub()
```

**Returns**

**Type**

**Description**

[AdminServiceStub](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.v1.stub.AdminServiceStub)

**Exceptions**

**Type**

**Description**

[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)

### createSubscriptionSettings()

```
public UnaryCallSettings<CreateSubscriptionRequest,Subscription> createSubscriptionSettings()
```

Returns the object with the settings used for calls to createSubscription.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateSubscriptionRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.CreateSubscriptionRequest),[Subscription](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.Subscription)\>

### createTopicSettings()

```
public UnaryCallSettings<CreateTopicRequest,Topic> createTopicSettings()
```

Returns the object with the settings used for calls to createTopic.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[CreateTopicRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.CreateTopicRequest),[Topic](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.Topic)\>

### deleteReservationSettings()

```
public UnaryCallSettings<DeleteReservationRequest,Empty> deleteReservationSettings()
```

Returns the object with the settings used for calls to deleteReservation.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteReservationRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.DeleteReservationRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### deleteSubscriptionSettings()

```
public UnaryCallSettings<DeleteSubscriptionRequest,Empty> deleteSubscriptionSettings()
```

Returns the object with the settings used for calls to deleteSubscription.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteSubscriptionRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.DeleteSubscriptionRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### deleteTopicSettings()

```
public UnaryCallSettings<DeleteTopicRequest,Empty> deleteTopicSettings()
```

Returns the object with the settings used for calls to deleteTopic.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[DeleteTopicRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.DeleteTopicRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)\>

### getReservationSettings()

```
public UnaryCallSettings<GetReservationRequest,Reservation> getReservationSettings()
```

Returns the object with the settings used for calls to getReservation.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetReservationRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.GetReservationRequest),[Reservation](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.Reservation)\>

### getSubscriptionSettings()

```
public UnaryCallSettings<GetSubscriptionRequest,Subscription> getSubscriptionSettings()
```

Returns the object with the settings used for calls to getSubscription.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetSubscriptionRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.GetSubscriptionRequest),[Subscription](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.Subscription)\>

### getTopicPartitionsSettings()

```
public UnaryCallSettings<GetTopicPartitionsRequest,TopicPartitions> getTopicPartitionsSettings()
```

Returns the object with the settings used for calls to getTopicPartitions.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetTopicPartitionsRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.GetTopicPartitionsRequest),[TopicPartitions](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.TopicPartitions)\>

### getTopicSettings()

```
public UnaryCallSettings<GetTopicRequest,Topic> getTopicSettings()
```

Returns the object with the settings used for calls to getTopic.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[GetTopicRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.GetTopicRequest),[Topic](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.Topic)\>

### listReservationTopicsSettings()

```
public PagedCallSettings<ListReservationTopicsRequest,ListReservationTopicsResponse,AdminServiceClient.ListReservationTopicsPagedResponse> listReservationTopicsSettings()
```

Returns the object with the settings used for calls to listReservationTopics.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListReservationTopicsRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.ListReservationTopicsRequest),[ListReservationTopicsResponse](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.ListReservationTopicsResponse),[ListReservationTopicsPagedResponse](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.v1.AdminServiceClient.ListReservationTopicsPagedResponse)\>

### listReservationsSettings()

```
public PagedCallSettings<ListReservationsRequest,ListReservationsResponse,AdminServiceClient.ListReservationsPagedResponse> listReservationsSettings()
```

Returns the object with the settings used for calls to listReservations.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListReservationsRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.ListReservationsRequest),[ListReservationsResponse](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.ListReservationsResponse),[ListReservationsPagedResponse](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.v1.AdminServiceClient.ListReservationsPagedResponse)\>

### listSubscriptionsSettings()

```
public PagedCallSettings<ListSubscriptionsRequest,ListSubscriptionsResponse,AdminServiceClient.ListSubscriptionsPagedResponse> listSubscriptionsSettings()
```

Returns the object with the settings used for calls to listSubscriptions.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListSubscriptionsRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.ListSubscriptionsRequest),[ListSubscriptionsResponse](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.ListSubscriptionsResponse),[ListSubscriptionsPagedResponse](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.v1.AdminServiceClient.ListSubscriptionsPagedResponse)\>

### listTopicSubscriptionsSettings()

```
public PagedCallSettings<ListTopicSubscriptionsRequest,ListTopicSubscriptionsResponse,AdminServiceClient.ListTopicSubscriptionsPagedResponse> listTopicSubscriptionsSettings()
```

Returns the object with the settings used for calls to listTopicSubscriptions.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListTopicSubscriptionsRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.ListTopicSubscriptionsRequest),[ListTopicSubscriptionsResponse](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.ListTopicSubscriptionsResponse),[ListTopicSubscriptionsPagedResponse](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.v1.AdminServiceClient.ListTopicSubscriptionsPagedResponse)\>

### listTopicsSettings()

```
public PagedCallSettings<ListTopicsRequest,ListTopicsResponse,AdminServiceClient.ListTopicsPagedResponse> listTopicsSettings()
```

Returns the object with the settings used for calls to listTopics.

**Returns**

**Type**

**Description**

[PagedCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.PagedCallSettings.html)<[ListTopicsRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.ListTopicsRequest),[ListTopicsResponse](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.ListTopicsResponse),[ListTopicsPagedResponse](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.v1.AdminServiceClient.ListTopicsPagedResponse)\>

### seekSubscriptionOperationSettings()

```
public OperationCallSettings<SeekSubscriptionRequest,SeekSubscriptionResponse,OperationMetadata> seekSubscriptionOperationSettings()
```

Returns the object with the settings used for calls to seekSubscription.

**Returns**

**Type**

**Description**

[OperationCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.OperationCallSettings.html)<[SeekSubscriptionRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.SeekSubscriptionRequest),[SeekSubscriptionResponse](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.SeekSubscriptionResponse),[OperationMetadata](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.OperationMetadata)\>

### seekSubscriptionSettings()

```
public UnaryCallSettings<SeekSubscriptionRequest,Operation> seekSubscriptionSettings()
```

Returns the object with the settings used for calls to seekSubscription.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[SeekSubscriptionRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.SeekSubscriptionRequest),[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)\>

### toBuilder()

```
public AdminServiceStubSettings.Builder toBuilder()
```

Returns a builder containing all the values of this settings class.

**Returns**

**Type**

**Description**

[AdminServiceStubSettings.Builder](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.v1.stub.AdminServiceStubSettings.Builder)

**Overrides**

[StubSettings<SettingsT>.toBuilder()](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.StubSettings.html#com_google_api_gax_rpc_StubSettings_toBuilder__)

### updateReservationSettings()

```
public UnaryCallSettings<UpdateReservationRequest,Reservation> updateReservationSettings()
```

Returns the object with the settings used for calls to updateReservation.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateReservationRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.UpdateReservationRequest),[Reservation](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.Reservation)\>

### updateSubscriptionSettings()

```
public UnaryCallSettings<UpdateSubscriptionRequest,Subscription> updateSubscriptionSettings()
```

Returns the object with the settings used for calls to updateSubscription.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateSubscriptionRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.UpdateSubscriptionRequest),[Subscription](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.Subscription)\>

### updateTopicSettings()

```
public UnaryCallSettings<UpdateTopicRequest,Topic> updateTopicSettings()
```

Returns the object with the settings used for calls to updateTopic.

**Returns**

**Type**

**Description**

[UnaryCallSettings](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallSettings.html)<[UpdateTopicRequest](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.UpdateTopicRequest),[Topic](/java/docs/reference/google-cloud-pubsublite/1.8.0/com.google.cloud.pubsublite.proto.Topic)\>

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
