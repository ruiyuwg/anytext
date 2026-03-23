-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcCompanyServiceStub (2.35.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.6 2.2.9

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

```
public class GrpcCompanyServiceStub extends CompanyServiceStub
```

gRPC stub implementation for the CompanyService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [CompanyServiceStub](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub) \> GrpcCompanyServiceStub

## Inherited Members

[CompanyServiceStub.close()](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub#com_google_cloud_talent_v4beta1_stub_CompanyServiceStub_close__)

[CompanyServiceStub.createCompanyCallable()](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub#com_google_cloud_talent_v4beta1_stub_CompanyServiceStub_createCompanyCallable__)

[CompanyServiceStub.deleteCompanyCallable()](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub#com_google_cloud_talent_v4beta1_stub_CompanyServiceStub_deleteCompanyCallable__)

[CompanyServiceStub.getCompanyCallable()](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub#com_google_cloud_talent_v4beta1_stub_CompanyServiceStub_getCompanyCallable__)

[CompanyServiceStub.listCompaniesCallable()](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub#com_google_cloud_talent_v4beta1_stub_CompanyServiceStub_listCompaniesCallable__)

[CompanyServiceStub.listCompaniesPagedCallable()](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub#com_google_cloud_talent_v4beta1_stub_CompanyServiceStub_listCompaniesPagedCallable__)

[CompanyServiceStub.updateCompanyCallable()](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub#com_google_cloud_talent_v4beta1_stub_CompanyServiceStub_updateCompanyCallable__)

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
public static final GrpcCompanyServiceStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[GrpcCompanyServiceStub](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.GrpcCompanyServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
public static final GrpcCompanyServiceStub create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)
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

`[GrpcCompanyServiceStub](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.GrpcCompanyServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(CompanyServiceStubSettings settings)

```
public static final GrpcCompanyServiceStub create(CompanyServiceStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[CompanyServiceStubSettings](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[GrpcCompanyServiceStub](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.GrpcCompanyServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

## Constructors

### GrpcCompanyServiceStub(CompanyServiceStubSettings settings, ClientContext clientContext)

```
protected GrpcCompanyServiceStub(CompanyServiceStubSettings settings, ClientContext clientContext)
```

Constructs an instance of GrpcCompanyServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[CompanyServiceStubSettings](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### GrpcCompanyServiceStub(CompanyServiceStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
protected GrpcCompanyServiceStub(CompanyServiceStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

Constructs an instance of GrpcCompanyServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[CompanyServiceStubSettings](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStubSettings)`  

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

[CompanyServiceStub.close()](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub#com_google_cloud_talent_v4beta1_stub_CompanyServiceStub_close__)

### createCompanyCallable()

```
public UnaryCallable<CreateCompanyRequest,Company> createCompanyCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateCompanyRequest](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.CreateCompanyRequest),[Company](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.Company)>`

**Overrides**

[CompanyServiceStub.createCompanyCallable()](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub#com_google_cloud_talent_v4beta1_stub_CompanyServiceStub_createCompanyCallable__)

### deleteCompanyCallable()

```
public UnaryCallable<DeleteCompanyRequest,Empty> deleteCompanyCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[DeleteCompanyRequest](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.DeleteCompanyRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

**Overrides**

[CompanyServiceStub.deleteCompanyCallable()](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub#com_google_cloud_talent_v4beta1_stub_CompanyServiceStub_deleteCompanyCallable__)

### getCompanyCallable()

```
public UnaryCallable<GetCompanyRequest,Company> getCompanyCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[GetCompanyRequest](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.GetCompanyRequest),[Company](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.Company)>`

**Overrides**

[CompanyServiceStub.getCompanyCallable()](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub#com_google_cloud_talent_v4beta1_stub_CompanyServiceStub_getCompanyCallable__)

### getOperationsStub()

```
public GrpcOperationsStub getOperationsStub()
```

**Returns**

**Type**

**Description**

`[GrpcOperationsStub](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.stub.GrpcOperationsStub.html)`

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

### listCompaniesCallable()

```
public UnaryCallable<ListCompaniesRequest,ListCompaniesResponse> listCompaniesCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListCompaniesRequest](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.ListCompaniesRequest),[ListCompaniesResponse](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.ListCompaniesResponse)>`

**Overrides**

[CompanyServiceStub.listCompaniesCallable()](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub#com_google_cloud_talent_v4beta1_stub_CompanyServiceStub_listCompaniesCallable__)

### listCompaniesPagedCallable()

```
public UnaryCallable<ListCompaniesRequest,CompanyServiceClient.ListCompaniesPagedResponse> listCompaniesPagedCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[ListCompaniesRequest](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.ListCompaniesRequest),[ListCompaniesPagedResponse](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.CompanyServiceClient.ListCompaniesPagedResponse)>`

**Overrides**

[CompanyServiceStub.listCompaniesPagedCallable()](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub#com_google_cloud_talent_v4beta1_stub_CompanyServiceStub_listCompaniesPagedCallable__)

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

### updateCompanyCallable()

```
public UnaryCallable<UpdateCompanyRequest,Company> updateCompanyCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[UpdateCompanyRequest](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.UpdateCompanyRequest),[Company](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.Company)>`

**Overrides**

[CompanyServiceStub.updateCompanyCallable()](/java/docs/reference/google-cloud-talent/2.35.0/com.google.cloud.talent.v4beta1.stub.CompanyServiceStub#com_google_cloud_talent_v4beta1_stub_CompanyServiceStub_updateCompanyCallable__)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
