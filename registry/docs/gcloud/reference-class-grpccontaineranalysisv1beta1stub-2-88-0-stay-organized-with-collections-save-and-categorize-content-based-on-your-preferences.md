-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcContainerAnalysisV1Beta1Stub (2.88.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.82.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.10 2.3.1 2.2.16

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public class GrpcContainerAnalysisV1Beta1Stub extends ContainerAnalysisV1Beta1Stub
```

gRPC stub implementation for the ContainerAnalysisV1Beta1 service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [ContainerAnalysisV1Beta1Stub](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1Stub) \> GrpcContainerAnalysisV1Beta1Stub

## Inherited Members

[ContainerAnalysisV1Beta1Stub.close()](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1Stub#com_google_cloud_devtools_containeranalysis_v1beta1_stub_ContainerAnalysisV1Beta1Stub_close__)

[ContainerAnalysisV1Beta1Stub.exportSBOMCallable()](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1Stub#com_google_cloud_devtools_containeranalysis_v1beta1_stub_ContainerAnalysisV1Beta1Stub_exportSBOMCallable__)

[ContainerAnalysisV1Beta1Stub.generatePackagesSummaryCallable()](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1Stub#com_google_cloud_devtools_containeranalysis_v1beta1_stub_ContainerAnalysisV1Beta1Stub_generatePackagesSummaryCallable__)

[ContainerAnalysisV1Beta1Stub.getIamPolicyCallable()](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1Stub#com_google_cloud_devtools_containeranalysis_v1beta1_stub_ContainerAnalysisV1Beta1Stub_getIamPolicyCallable__)

[ContainerAnalysisV1Beta1Stub.setIamPolicyCallable()](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1Stub#com_google_cloud_devtools_containeranalysis_v1beta1_stub_ContainerAnalysisV1Beta1Stub_setIamPolicyCallable__)

[ContainerAnalysisV1Beta1Stub.testIamPermissionsCallable()](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1Stub#com_google_cloud_devtools_containeranalysis_v1beta1_stub_ContainerAnalysisV1Beta1Stub_testIamPermissionsCallable__)

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
public static final GrpcContainerAnalysisV1Beta1Stub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[GrpcContainerAnalysisV1Beta1Stub](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.GrpcContainerAnalysisV1Beta1Stub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
public static final GrpcContainerAnalysisV1Beta1Stub create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)
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

`[GrpcContainerAnalysisV1Beta1Stub](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.GrpcContainerAnalysisV1Beta1Stub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ContainerAnalysisV1Beta1StubSettings settings)

```
public static final GrpcContainerAnalysisV1Beta1Stub create(ContainerAnalysisV1Beta1StubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[ContainerAnalysisV1Beta1StubSettings](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1StubSettings)`  

**Returns**

**Type**

**Description**

`[GrpcContainerAnalysisV1Beta1Stub](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.GrpcContainerAnalysisV1Beta1Stub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

## Constructors

### GrpcContainerAnalysisV1Beta1Stub(ContainerAnalysisV1Beta1StubSettings settings, ClientContext clientContext)

```
protected GrpcContainerAnalysisV1Beta1Stub(ContainerAnalysisV1Beta1StubSettings settings, ClientContext clientContext)
```

Constructs an instance of GrpcContainerAnalysisV1Beta1Stub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[ContainerAnalysisV1Beta1StubSettings](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1StubSettings)`  

`clientContext`

`[ClientContext](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### GrpcContainerAnalysisV1Beta1Stub(ContainerAnalysisV1Beta1StubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
protected GrpcContainerAnalysisV1Beta1Stub(ContainerAnalysisV1Beta1StubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

Constructs an instance of GrpcContainerAnalysisV1Beta1Stub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[ContainerAnalysisV1Beta1StubSettings](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1StubSettings)`  

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

[ContainerAnalysisV1Beta1Stub.close()](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1Stub#com_google_cloud_devtools_containeranalysis_v1beta1_stub_ContainerAnalysisV1Beta1Stub_close__)

### exportSBOMCallable()

```
public UnaryCallable<ExportSBOMRequest,ExportSBOMResponse> exportSBOMCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ExportSBOMRequest](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.containeranalysis.v1beta1.ExportSBOMRequest),[ExportSBOMResponse](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.containeranalysis.v1beta1.ExportSBOMResponse)>`

**Overrides**

[ContainerAnalysisV1Beta1Stub.exportSBOMCallable()](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1Stub#com_google_cloud_devtools_containeranalysis_v1beta1_stub_ContainerAnalysisV1Beta1Stub_exportSBOMCallable__)

### generatePackagesSummaryCallable()

```
public UnaryCallable<GeneratePackagesSummaryRequest,PackagesSummaryResponse> generatePackagesSummaryCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GeneratePackagesSummaryRequest](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.containeranalysis.v1beta1.GeneratePackagesSummaryRequest),[PackagesSummaryResponse](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.containeranalysis.v1beta1.PackagesSummaryResponse)>`

**Overrides**

[ContainerAnalysisV1Beta1Stub.generatePackagesSummaryCallable()](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1Stub#com_google_cloud_devtools_containeranalysis_v1beta1_stub_ContainerAnalysisV1Beta1Stub_generatePackagesSummaryCallable__)

### getIamPolicyCallable()

```
public UnaryCallable<GetIamPolicyRequest,Policy> getIamPolicyCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.GetIamPolicyRequest,com.google.iam.v1.Policy>`

**Overrides**

[ContainerAnalysisV1Beta1Stub.getIamPolicyCallable()](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1Stub#com_google_cloud_devtools_containeranalysis_v1beta1_stub_ContainerAnalysisV1Beta1Stub_getIamPolicyCallable__)

### getOperationsStub()

```
public GrpcOperationsStub getOperationsStub()
```

**Returns**

**Type**

**Description**

`[GrpcOperationsStub](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.stub.GrpcOperationsStub.html)`

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

### setIamPolicyCallable()

```
public UnaryCallable<SetIamPolicyRequest,Policy> setIamPolicyCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.SetIamPolicyRequest,com.google.iam.v1.Policy>`

**Overrides**

[ContainerAnalysisV1Beta1Stub.setIamPolicyCallable()](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1Stub#com_google_cloud_devtools_containeranalysis_v1beta1_stub_ContainerAnalysisV1Beta1Stub_setIamPolicyCallable__)

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### testIamPermissionsCallable()

```
public UnaryCallable<TestIamPermissionsRequest,TestIamPermissionsResponse> testIamPermissionsCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<com.google.iam.v1.TestIamPermissionsRequest,com.google.iam.v1.TestIamPermissionsResponse>`

**Overrides**

[ContainerAnalysisV1Beta1Stub.testIamPermissionsCallable()](/java/docs/reference/google-cloud-containeranalysis/latest/com.google.cloud.devtools.containeranalysis.v1beta1.stub.ContainerAnalysisV1Beta1Stub#com_google_cloud_devtools_containeranalysis_v1beta1_stub_ContainerAnalysisV1Beta1Stub_testIamPermissionsCallable__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
