-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CatalogServiceGrpc (2.60.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public final class CatalogServiceGrpc
```

Service for managing catalog configuration.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> CatalogServiceGrpc

## Inherited Members

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

## Static Fields

### SERVICE\_NAME

```
public static final String SERVICE_NAME
```

**Field Value**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

## Static Methods

### bindService(CatalogServiceGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(CatalogServiceGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[CatalogServiceGrpc.AsyncService](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.CatalogServiceGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getAddCatalogAttributeMethod()

```
public static MethodDescriptor<AddCatalogAttributeRequest,AttributesConfig> getAddCatalogAttributeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[AddCatalogAttributeRequest](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.AddCatalogAttributeRequest),[AttributesConfig](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.AttributesConfig)>`

### getGetAttributesConfigMethod()

```
public static MethodDescriptor<GetAttributesConfigRequest,AttributesConfig> getGetAttributesConfigMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetAttributesConfigRequest](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.GetAttributesConfigRequest),[AttributesConfig](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.AttributesConfig)>`

### getGetCompletionConfigMethod()

```
public static MethodDescriptor<GetCompletionConfigRequest,CompletionConfig> getGetCompletionConfigMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetCompletionConfigRequest](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.GetCompletionConfigRequest),[CompletionConfig](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.CompletionConfig)>`

### getGetDefaultBranchMethod()

```
public static MethodDescriptor<GetDefaultBranchRequest,GetDefaultBranchResponse> getGetDefaultBranchMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetDefaultBranchRequest](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.GetDefaultBranchRequest),[GetDefaultBranchResponse](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.GetDefaultBranchResponse)>`

### getListCatalogsMethod()

```
public static MethodDescriptor<ListCatalogsRequest,ListCatalogsResponse> getListCatalogsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListCatalogsRequest](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.ListCatalogsRequest),[ListCatalogsResponse](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.ListCatalogsResponse)>`

### getRemoveCatalogAttributeMethod()

```
public static MethodDescriptor<RemoveCatalogAttributeRequest,AttributesConfig> getRemoveCatalogAttributeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[RemoveCatalogAttributeRequest](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.RemoveCatalogAttributeRequest),[AttributesConfig](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.AttributesConfig)>`

### getReplaceCatalogAttributeMethod()

```
public static MethodDescriptor<ReplaceCatalogAttributeRequest,AttributesConfig> getReplaceCatalogAttributeMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ReplaceCatalogAttributeRequest](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.ReplaceCatalogAttributeRequest),[AttributesConfig](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.AttributesConfig)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getSetDefaultBranchMethod()

```
public static MethodDescriptor<SetDefaultBranchRequest,Empty> getSetDefaultBranchMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[SetDefaultBranchRequest](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.SetDefaultBranchRequest),[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getUpdateAttributesConfigMethod()

```
public static MethodDescriptor<UpdateAttributesConfigRequest,AttributesConfig> getUpdateAttributesConfigMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateAttributesConfigRequest](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.UpdateAttributesConfigRequest),[AttributesConfig](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.AttributesConfig)>`

### getUpdateCatalogMethod()

```
public static MethodDescriptor<UpdateCatalogRequest,Catalog> getUpdateCatalogMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateCatalogRequest](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.UpdateCatalogRequest),[Catalog](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.Catalog)>`

### getUpdateCompletionConfigMethod()

```
public static MethodDescriptor<UpdateCompletionConfigRequest,CompletionConfig> getUpdateCompletionConfigMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateCompletionConfigRequest](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.UpdateCompletionConfigRequest),[CompletionConfig](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.CompletionConfig)>`

### newBlockingStub(Channel channel)

```
public static CatalogServiceGrpc.CatalogServiceBlockingStub newBlockingStub(Channel channel)
```

Creates a new blocking-style stub that supports unary and streaming output calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[CatalogServiceGrpc.CatalogServiceBlockingStub](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.CatalogServiceGrpc.CatalogServiceBlockingStub)`

### newFutureStub(Channel channel)

```
public static CatalogServiceGrpc.CatalogServiceFutureStub newFutureStub(Channel channel)
```

Creates a new ListenableFuture-style stub that supports unary calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[CatalogServiceGrpc.CatalogServiceFutureStub](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.CatalogServiceGrpc.CatalogServiceFutureStub)`

### newStub(Channel channel)

```
public static CatalogServiceGrpc.CatalogServiceStub newStub(Channel channel)
```

Creates a new async stub that supports all call types for the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[CatalogServiceGrpc.CatalogServiceStub](/java/docs/reference/google-cloud-retail/2.60.0/com.google.cloud.retail.v2.CatalogServiceGrpc.CatalogServiceStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
