-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcUptimeCheckServiceStub (3.17.0) Stay organized with collections Save and categorize content based on your preferences.

3.88.0 (latest) 3.86.0 3.84.0 3.83.0 3.81.0 3.79.0 3.77.0 3.76.0 3.75.0 3.74.0 3.73.0 3.71.0 3.69.0 3.68.0 3.65.0 3.64.0 3.63.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.6 3.3.6 3.2.10

```
public class GrpcUptimeCheckServiceStub extends UptimeCheckServiceStub
```

gRPC stub implementation for the UptimeCheckService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [UptimeCheckServiceStub](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub) \> GrpcUptimeCheckServiceStub

## Inherited Members

[UptimeCheckServiceStub.close()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_close__)

[UptimeCheckServiceStub.createUptimeCheckConfigCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_createUptimeCheckConfigCallable__)

[UptimeCheckServiceStub.deleteUptimeCheckConfigCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_deleteUptimeCheckConfigCallable__)

[UptimeCheckServiceStub.getUptimeCheckConfigCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_getUptimeCheckConfigCallable__)

[UptimeCheckServiceStub.listUptimeCheckConfigsCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_listUptimeCheckConfigsCallable__)

[UptimeCheckServiceStub.listUptimeCheckConfigsPagedCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_listUptimeCheckConfigsPagedCallable__)

[UptimeCheckServiceStub.listUptimeCheckIpsCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_listUptimeCheckIpsCallable__)

[UptimeCheckServiceStub.listUptimeCheckIpsPagedCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_listUptimeCheckIpsPagedCallable__)

[UptimeCheckServiceStub.updateUptimeCheckConfigCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_updateUptimeCheckConfigCallable__)

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
public static final GrpcUptimeCheckServiceStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[GrpcUptimeCheckServiceStub](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.GrpcUptimeCheckServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
public static final GrpcUptimeCheckServiceStub create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

**Parameters**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[GrpcStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcStubCallableFactory.html)`  

**Returns**

**Type**

**Description**

`[GrpcUptimeCheckServiceStub](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.GrpcUptimeCheckServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(UptimeCheckServiceStubSettings settings)

```
public static final GrpcUptimeCheckServiceStub create(UptimeCheckServiceStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[UptimeCheckServiceStubSettings](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[GrpcUptimeCheckServiceStub](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.GrpcUptimeCheckServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

## Constructors

### GrpcUptimeCheckServiceStub(UptimeCheckServiceStubSettings settings, ClientContext clientContext)

```
protected GrpcUptimeCheckServiceStub(UptimeCheckServiceStubSettings settings, ClientContext clientContext)
```

Constructs an instance of GrpcUptimeCheckServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[UptimeCheckServiceStubSettings](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### GrpcUptimeCheckServiceStub(UptimeCheckServiceStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
protected GrpcUptimeCheckServiceStub(UptimeCheckServiceStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

Constructs an instance of GrpcUptimeCheckServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[UptimeCheckServiceStubSettings](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[GrpcStubCallableFactory](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcStubCallableFactory.html)`  

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

[UptimeCheckServiceStub.close()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_close__)

### createUptimeCheckConfigCallable()

```
public UnaryCallable<CreateUptimeCheckConfigRequest,UptimeCheckConfig> createUptimeCheckConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.monitoring.v3.CreateUptimeCheckConfigRequest),[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.monitoring.v3.UptimeCheckConfig)>`

**Overrides**

[UptimeCheckServiceStub.createUptimeCheckConfigCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_createUptimeCheckConfigCallable__)

### deleteUptimeCheckConfigCallable()

```
public UnaryCallable<DeleteUptimeCheckConfigRequest,Empty> deleteUptimeCheckConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.monitoring.v3.DeleteUptimeCheckConfigRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

**Overrides**

[UptimeCheckServiceStub.deleteUptimeCheckConfigCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_deleteUptimeCheckConfigCallable__)

### getOperationsStub()

```
public GrpcOperationsStub getOperationsStub()
```

**Returns**

**Type**

**Description**

`[GrpcOperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.stub.GrpcOperationsStub.html)`

### getUptimeCheckConfigCallable()

```
public UnaryCallable<GetUptimeCheckConfigRequest,UptimeCheckConfig> getUptimeCheckConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.monitoring.v3.GetUptimeCheckConfigRequest),[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.monitoring.v3.UptimeCheckConfig)>`

**Overrides**

[UptimeCheckServiceStub.getUptimeCheckConfigCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_getUptimeCheckConfigCallable__)

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

### listUptimeCheckConfigsCallable()

```
public UnaryCallable<ListUptimeCheckConfigsRequest,ListUptimeCheckConfigsResponse> listUptimeCheckConfigsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListUptimeCheckConfigsRequest](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.monitoring.v3.ListUptimeCheckConfigsRequest),[ListUptimeCheckConfigsResponse](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.monitoring.v3.ListUptimeCheckConfigsResponse)>`

**Overrides**

[UptimeCheckServiceStub.listUptimeCheckConfigsCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_listUptimeCheckConfigsCallable__)

### listUptimeCheckConfigsPagedCallable()

```
public UnaryCallable<ListUptimeCheckConfigsRequest,UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse> listUptimeCheckConfigsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListUptimeCheckConfigsRequest](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.monitoring.v3.ListUptimeCheckConfigsRequest),[ListUptimeCheckConfigsPagedResponse](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.UptimeCheckServiceClient.ListUptimeCheckConfigsPagedResponse)>`

**Overrides**

[UptimeCheckServiceStub.listUptimeCheckConfigsPagedCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_listUptimeCheckConfigsPagedCallable__)

### listUptimeCheckIpsCallable()

```
public UnaryCallable<ListUptimeCheckIpsRequest,ListUptimeCheckIpsResponse> listUptimeCheckIpsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListUptimeCheckIpsRequest](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.monitoring.v3.ListUptimeCheckIpsRequest),[ListUptimeCheckIpsResponse](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.monitoring.v3.ListUptimeCheckIpsResponse)>`

**Overrides**

[UptimeCheckServiceStub.listUptimeCheckIpsCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_listUptimeCheckIpsCallable__)

### listUptimeCheckIpsPagedCallable()

```
public UnaryCallable<ListUptimeCheckIpsRequest,UptimeCheckServiceClient.ListUptimeCheckIpsPagedResponse> listUptimeCheckIpsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListUptimeCheckIpsRequest](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.monitoring.v3.ListUptimeCheckIpsRequest),[ListUptimeCheckIpsPagedResponse](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.UptimeCheckServiceClient.ListUptimeCheckIpsPagedResponse)>`

**Overrides**

[UptimeCheckServiceStub.listUptimeCheckIpsPagedCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_listUptimeCheckIpsPagedCallable__)

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateUptimeCheckConfigCallable()

```
public UnaryCallable<UpdateUptimeCheckConfigRequest,UptimeCheckConfig> updateUptimeCheckConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateUptimeCheckConfigRequest](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.monitoring.v3.UpdateUptimeCheckConfigRequest),[UptimeCheckConfig](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.monitoring.v3.UptimeCheckConfig)>`

**Overrides**

[UptimeCheckServiceStub.updateUptimeCheckConfigCallable()](/java/docs/reference/google-cloud-monitoring/3.17.0/com.google.cloud.monitoring.v3.stub.UptimeCheckServiceStub#com_google_cloud_monitoring_v3_stub_UptimeCheckServiceStub_updateUptimeCheckConfigCallable__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
