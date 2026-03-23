-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpJsonFulfillmentsStub (4.93.0) Stay organized with collections Save and categorize content based on your preferences.

4.93.0 (latest) 4.91.0 4.89.0 4.88.0 4.87.0 4.86.0 4.84.0 4.82.0 4.81.0 4.80.0 4.79.0 4.78.0 4.76.0 4.74.0 4.73.0 4.70.0 4.69.0 4.68.0 4.66.0 4.65.0 4.64.0 4.63.0 4.62.0 4.61.0 4.60.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.45.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.33.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.21.0 4.20.0 4.19.0 4.18.0 4.17.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.1 4.8.6 4.7.5 4.6.0 4.5.11 4.4.0 4.3.1

```
public class HttpJsonFulfillmentsStub extends FulfillmentsStub
```

REST stub implementation for the Fulfillments service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [FulfillmentsStub](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStub) \> HttpJsonFulfillmentsStub

## Inherited Members

[FulfillmentsStub.close()](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStub#com_google_cloud_dialogflow_v2_stub_FulfillmentsStub_close__)

[FulfillmentsStub.getFulfillmentCallable()](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStub#com_google_cloud_dialogflow_v2_stub_FulfillmentsStub_getFulfillmentCallable__)

[FulfillmentsStub.getLocationCallable()](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStub#com_google_cloud_dialogflow_v2_stub_FulfillmentsStub_getLocationCallable__)

[FulfillmentsStub.listLocationsCallable()](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStub#com_google_cloud_dialogflow_v2_stub_FulfillmentsStub_listLocationsCallable__)

[FulfillmentsStub.listLocationsPagedCallable()](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStub#com_google_cloud_dialogflow_v2_stub_FulfillmentsStub_listLocationsPagedCallable__)

[FulfillmentsStub.updateFulfillmentCallable()](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStub#com_google_cloud_dialogflow_v2_stub_FulfillmentsStub_updateFulfillmentCallable__)

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

## Static Methods

### create(ClientContext clientContext)

```
public static final HttpJsonFulfillmentsStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[HttpJsonFulfillmentsStub](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.HttpJsonFulfillmentsStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
public static final HttpJsonFulfillmentsStub create(ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

**Parameters**

**Name**

**Description**

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[HttpJsonStubCallableFactory](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonStubCallableFactory.html)`  

**Returns**

**Type**

**Description**

`[HttpJsonFulfillmentsStub](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.HttpJsonFulfillmentsStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(FulfillmentsStubSettings settings)

```
public static final HttpJsonFulfillmentsStub create(FulfillmentsStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[FulfillmentsStubSettings](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStubSettings)`  

**Returns**

**Type**

**Description**

`[HttpJsonFulfillmentsStub](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.HttpJsonFulfillmentsStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### getMethodDescriptors()

```
public static List<ApiMethodDescriptor> getMethodDescriptors()
```

**Internal Only**: This feature is not stable for application use.

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ApiMethodDescriptor](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.ApiMethodDescriptor.html)>`

## Constructors

### HttpJsonFulfillmentsStub(FulfillmentsStubSettings settings, ClientContext clientContext)

```
protected HttpJsonFulfillmentsStub(FulfillmentsStubSettings settings, ClientContext clientContext)
```

Constructs an instance of HttpJsonFulfillmentsStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[FulfillmentsStubSettings](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStubSettings)`  

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### HttpJsonFulfillmentsStub(FulfillmentsStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)

```
protected HttpJsonFulfillmentsStub(FulfillmentsStubSettings settings, ClientContext clientContext, HttpJsonStubCallableFactory callableFactory)
```

Constructs an instance of HttpJsonFulfillmentsStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[FulfillmentsStubSettings](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStubSettings)`  

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[HttpJsonStubCallableFactory](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.httpjson.HttpJsonStubCallableFactory.html)`  

## Methods

### awaitTermination(long duration, TimeUnit unit)

```
public boolean awaitTermination(long duration, TimeUnit unit)
```

**Parameters**

**Name**

**Description**

`duration`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`unit`

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Exceptions**

**Type**

**Description**

`[InterruptedException](https://docs.oracle.com/javase/8/docs/api/java/lang/InterruptedException.html)`

### close()

```
public final void close()
```

**Overrides**

[FulfillmentsStub.close()](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStub#com_google_cloud_dialogflow_v2_stub_FulfillmentsStub_close__)

### getFulfillmentCallable()

```
public UnaryCallable<GetFulfillmentRequest,Fulfillment> getFulfillmentCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetFulfillmentRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.GetFulfillmentRequest),[Fulfillment](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Fulfillment)>`

**Overrides**

[FulfillmentsStub.getFulfillmentCallable()](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStub#com_google_cloud_dialogflow_v2_stub_FulfillmentsStub_getFulfillmentCallable__)

### getLocationCallable()

```
public UnaryCallable<GetLocationRequest,Location> getLocationCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.GetLocationRequest,com.google.cloud.location.Location>`

**Overrides**

[FulfillmentsStub.getLocationCallable()](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStub#com_google_cloud_dialogflow_v2_stub_FulfillmentsStub_getLocationCallable__)

### isShutdown()

```
public boolean isShutdown()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### isTerminated()

```
public boolean isTerminated()
```

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### listLocationsCallable()

```
public UnaryCallable<ListLocationsRequest,ListLocationsResponse> listLocationsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.ListLocationsRequest,com.google.cloud.location.ListLocationsResponse>`

**Overrides**

[FulfillmentsStub.listLocationsCallable()](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStub#com_google_cloud_dialogflow_v2_stub_FulfillmentsStub_listLocationsCallable__)

### listLocationsPagedCallable()

```
public UnaryCallable<ListLocationsRequest,FulfillmentsClient.ListLocationsPagedResponse> listLocationsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.cloud.location.ListLocationsRequest,[ListLocationsPagedResponse](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.FulfillmentsClient.ListLocationsPagedResponse)>`

**Overrides**

[FulfillmentsStub.listLocationsPagedCallable()](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStub#com_google_cloud_dialogflow_v2_stub_FulfillmentsStub_listLocationsPagedCallable__)

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateFulfillmentCallable()

```
public UnaryCallable<UpdateFulfillmentRequest,Fulfillment> updateFulfillmentCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateFulfillmentRequest](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.UpdateFulfillmentRequest),[Fulfillment](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.Fulfillment)>`

**Overrides**

[FulfillmentsStub.updateFulfillmentCallable()](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2.stub.FulfillmentsStub#com_google_cloud_dialogflow_v2_stub_FulfillmentsStub_updateFulfillmentCallable__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
