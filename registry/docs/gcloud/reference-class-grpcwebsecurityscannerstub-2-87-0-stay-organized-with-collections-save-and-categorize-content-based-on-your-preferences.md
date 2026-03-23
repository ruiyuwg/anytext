-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcWebSecurityScannerStub (2.87.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.4 2.1.1 2.0.15

```
public class GrpcWebSecurityScannerStub extends WebSecurityScannerStub
```

gRPC stub implementation for the WebSecurityScanner service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [WebSecurityScannerStub](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub) \> GrpcWebSecurityScannerStub

## Inherited Members

[WebSecurityScannerStub.close()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_close__)

[WebSecurityScannerStub.createScanConfigCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_createScanConfigCallable__)

[WebSecurityScannerStub.deleteScanConfigCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_deleteScanConfigCallable__)

[WebSecurityScannerStub.getFindingCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_getFindingCallable__)

[WebSecurityScannerStub.getScanConfigCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_getScanConfigCallable__)

[WebSecurityScannerStub.getScanRunCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_getScanRunCallable__)

[WebSecurityScannerStub.listCrawledUrlsCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listCrawledUrlsCallable__)

[WebSecurityScannerStub.listCrawledUrlsPagedCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listCrawledUrlsPagedCallable__)

[WebSecurityScannerStub.listFindingTypeStatsCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listFindingTypeStatsCallable__)

[WebSecurityScannerStub.listFindingsCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listFindingsCallable__)

[WebSecurityScannerStub.listFindingsPagedCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listFindingsPagedCallable__)

[WebSecurityScannerStub.listScanConfigsCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listScanConfigsCallable__)

[WebSecurityScannerStub.listScanConfigsPagedCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listScanConfigsPagedCallable__)

[WebSecurityScannerStub.listScanRunsCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listScanRunsCallable__)

[WebSecurityScannerStub.listScanRunsPagedCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listScanRunsPagedCallable__)

[WebSecurityScannerStub.startScanRunCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_startScanRunCallable__)

[WebSecurityScannerStub.stopScanRunCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_stopScanRunCallable__)

[WebSecurityScannerStub.updateScanConfigCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_updateScanConfigCallable__)

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
public static final GrpcWebSecurityScannerStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[GrpcWebSecurityScannerStub](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.GrpcWebSecurityScannerStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
public static final GrpcWebSecurityScannerStub create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

**Parameters**

**Name**

**Description**

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[GrpcStubCallableFactory](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcStubCallableFactory.html)`  

**Returns**

**Type**

**Description**

`[GrpcWebSecurityScannerStub](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.GrpcWebSecurityScannerStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(WebSecurityScannerStubSettings settings)

```
public static final GrpcWebSecurityScannerStub create(WebSecurityScannerStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[WebSecurityScannerStubSettings](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStubSettings)`  

**Returns**

**Type**

**Description**

`[GrpcWebSecurityScannerStub](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.GrpcWebSecurityScannerStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

## Constructors

### GrpcWebSecurityScannerStub(WebSecurityScannerStubSettings settings, ClientContext clientContext)

```
protected GrpcWebSecurityScannerStub(WebSecurityScannerStubSettings settings, ClientContext clientContext)
```

Constructs an instance of GrpcWebSecurityScannerStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[WebSecurityScannerStubSettings](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStubSettings)`  

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### GrpcWebSecurityScannerStub(WebSecurityScannerStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
protected GrpcWebSecurityScannerStub(WebSecurityScannerStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

Constructs an instance of GrpcWebSecurityScannerStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[WebSecurityScannerStubSettings](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStubSettings)`  

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

`callableFactory`

`[GrpcStubCallableFactory](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.grpc.GrpcStubCallableFactory.html)`  

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

[WebSecurityScannerStub.close()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_close__)

### createScanConfigCallable()

```
public UnaryCallable<CreateScanConfigRequest,ScanConfig> createScanConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.CreateScanConfigRequest),[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ScanConfig)>`

**Overrides**

[WebSecurityScannerStub.createScanConfigCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_createScanConfigCallable__)

### deleteScanConfigCallable()

```
public UnaryCallable<DeleteScanConfigRequest,Empty> deleteScanConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.DeleteScanConfigRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

**Overrides**

[WebSecurityScannerStub.deleteScanConfigCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_deleteScanConfigCallable__)

### getFindingCallable()

```
public UnaryCallable<GetFindingRequest,Finding> getFindingCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetFindingRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.GetFindingRequest),[Finding](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.Finding)>`

**Overrides**

[WebSecurityScannerStub.getFindingCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_getFindingCallable__)

### getOperationsStub()

```
public GrpcOperationsStub getOperationsStub()
```

**Returns**

**Type**

**Description**

`[GrpcOperationsStub](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.stub.GrpcOperationsStub.html)`

### getScanConfigCallable()

```
public UnaryCallable<GetScanConfigRequest,ScanConfig> getScanConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.GetScanConfigRequest),[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ScanConfig)>`

**Overrides**

[WebSecurityScannerStub.getScanConfigCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_getScanConfigCallable__)

### getScanRunCallable()

```
public UnaryCallable<GetScanRunRequest,ScanRun> getScanRunCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.GetScanRunRequest),[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ScanRun)>`

**Overrides**

[WebSecurityScannerStub.getScanRunCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_getScanRunCallable__)

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

### listCrawledUrlsCallable()

```
public UnaryCallable<ListCrawledUrlsRequest,ListCrawledUrlsResponse> listCrawledUrlsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListCrawledUrlsRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ListCrawledUrlsRequest),[ListCrawledUrlsResponse](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ListCrawledUrlsResponse)>`

**Overrides**

[WebSecurityScannerStub.listCrawledUrlsCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listCrawledUrlsCallable__)

### listCrawledUrlsPagedCallable()

```
public UnaryCallable<ListCrawledUrlsRequest,WebSecurityScannerClient.ListCrawledUrlsPagedResponse> listCrawledUrlsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListCrawledUrlsRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ListCrawledUrlsRequest),[ListCrawledUrlsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient.ListCrawledUrlsPagedResponse)>`

**Overrides**

[WebSecurityScannerStub.listCrawledUrlsPagedCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listCrawledUrlsPagedCallable__)

### listFindingTypeStatsCallable()

```
public UnaryCallable<ListFindingTypeStatsRequest,ListFindingTypeStatsResponse> listFindingTypeStatsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListFindingTypeStatsRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ListFindingTypeStatsRequest),[ListFindingTypeStatsResponse](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ListFindingTypeStatsResponse)>`

**Overrides**

[WebSecurityScannerStub.listFindingTypeStatsCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listFindingTypeStatsCallable__)

### listFindingsCallable()

```
public UnaryCallable<ListFindingsRequest,ListFindingsResponse> listFindingsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListFindingsRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ListFindingsRequest),[ListFindingsResponse](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ListFindingsResponse)>`

**Overrides**

[WebSecurityScannerStub.listFindingsCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listFindingsCallable__)

### listFindingsPagedCallable()

```
public UnaryCallable<ListFindingsRequest,WebSecurityScannerClient.ListFindingsPagedResponse> listFindingsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListFindingsRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ListFindingsRequest),[ListFindingsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient.ListFindingsPagedResponse)>`

**Overrides**

[WebSecurityScannerStub.listFindingsPagedCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listFindingsPagedCallable__)

### listScanConfigsCallable()

```
public UnaryCallable<ListScanConfigsRequest,ListScanConfigsResponse> listScanConfigsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListScanConfigsRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ListScanConfigsRequest),[ListScanConfigsResponse](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ListScanConfigsResponse)>`

**Overrides**

[WebSecurityScannerStub.listScanConfigsCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listScanConfigsCallable__)

### listScanConfigsPagedCallable()

```
public UnaryCallable<ListScanConfigsRequest,WebSecurityScannerClient.ListScanConfigsPagedResponse> listScanConfigsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListScanConfigsRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ListScanConfigsRequest),[ListScanConfigsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient.ListScanConfigsPagedResponse)>`

**Overrides**

[WebSecurityScannerStub.listScanConfigsPagedCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listScanConfigsPagedCallable__)

### listScanRunsCallable()

```
public UnaryCallable<ListScanRunsRequest,ListScanRunsResponse> listScanRunsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListScanRunsRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ListScanRunsRequest),[ListScanRunsResponse](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ListScanRunsResponse)>`

**Overrides**

[WebSecurityScannerStub.listScanRunsCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listScanRunsCallable__)

### listScanRunsPagedCallable()

```
public UnaryCallable<ListScanRunsRequest,WebSecurityScannerClient.ListScanRunsPagedResponse> listScanRunsPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListScanRunsRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ListScanRunsRequest),[ListScanRunsPagedResponse](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.WebSecurityScannerClient.ListScanRunsPagedResponse)>`

**Overrides**

[WebSecurityScannerStub.listScanRunsPagedCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_listScanRunsPagedCallable__)

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### startScanRunCallable()

```
public UnaryCallable<StartScanRunRequest,ScanRun> startScanRunCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[StartScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.StartScanRunRequest),[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ScanRun)>`

**Overrides**

[WebSecurityScannerStub.startScanRunCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_startScanRunCallable__)

### stopScanRunCallable()

```
public UnaryCallable<StopScanRunRequest,ScanRun> stopScanRunCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[StopScanRunRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.StopScanRunRequest),[ScanRun](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ScanRun)>`

**Overrides**

[WebSecurityScannerStub.stopScanRunCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_stopScanRunCallable__)

### updateScanConfigCallable()

```
public UnaryCallable<UpdateScanConfigRequest,ScanConfig> updateScanConfigCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateScanConfigRequest](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.UpdateScanConfigRequest),[ScanConfig](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.ScanConfig)>`

**Overrides**

[WebSecurityScannerStub.updateScanConfigCallable()](/java/docs/reference/google-cloud-websecurityscanner/latest/com.google.cloud.websecurityscanner.v1.stub.WebSecurityScannerStub#com_google_cloud_websecurityscanner_v1_stub_WebSecurityScannerStub_updateScanConfigCallable__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
