-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GrpcPublicCertificateAuthorityServiceStub (0.49.0) Stay organized with collections Save and categorize content based on your preferences.

0.84.0 (latest) 0.82.0 0.80.0 0.79.0 0.77.0 0.75.0 0.73.0 0.72.0 0.71.0 0.70.0 0.69.0 0.67.0 0.65.0 0.64.0 0.61.0 0.60.0 0.59.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public class GrpcPublicCertificateAuthorityServiceStub extends PublicCertificateAuthorityServiceStub
```

gRPC stub implementation for the PublicCertificateAuthorityService service API.

This class is for advanced usage and reflects the underlying API directly.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [PublicCertificateAuthorityServiceStub](/java/docs/reference/google-cloud-publicca/0.49.0/com.google.cloud.security.publicca.v1.stub.PublicCertificateAuthorityServiceStub) \> GrpcPublicCertificateAuthorityServiceStub

## Inherited Members

[PublicCertificateAuthorityServiceStub.close()](/java/docs/reference/google-cloud-publicca/0.49.0/com.google.cloud.security.publicca.v1.stub.PublicCertificateAuthorityServiceStub#com_google_cloud_security_publicca_v1_stub_PublicCertificateAuthorityServiceStub_close__)

[PublicCertificateAuthorityServiceStub.createExternalAccountKeyCallable()](/java/docs/reference/google-cloud-publicca/0.49.0/com.google.cloud.security.publicca.v1.stub.PublicCertificateAuthorityServiceStub#com_google_cloud_security_publicca_v1_stub_PublicCertificateAuthorityServiceStub_createExternalAccountKeyCallable__)

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
public static final GrpcPublicCertificateAuthorityServiceStub create(ClientContext clientContext)
```

**Parameter**

**Name**

**Description**

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

**Returns**

**Type**

**Description**

`[GrpcPublicCertificateAuthorityServiceStub](/java/docs/reference/google-cloud-publicca/0.49.0/com.google.cloud.security.publicca.v1.stub.GrpcPublicCertificateAuthorityServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
public static final GrpcPublicCertificateAuthorityServiceStub create(ClientContext clientContext, GrpcStubCallableFactory callableFactory)
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

`[GrpcPublicCertificateAuthorityServiceStub](/java/docs/reference/google-cloud-publicca/0.49.0/com.google.cloud.security.publicca.v1.stub.GrpcPublicCertificateAuthorityServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

### create(PublicCertificateAuthorityServiceStubSettings settings)

```
public static final GrpcPublicCertificateAuthorityServiceStub create(PublicCertificateAuthorityServiceStubSettings settings)
```

**Parameter**

**Name**

**Description**

`settings`

`[PublicCertificateAuthorityServiceStubSettings](/java/docs/reference/google-cloud-publicca/0.49.0/com.google.cloud.security.publicca.v1.stub.PublicCertificateAuthorityServiceStubSettings)`  

**Returns**

**Type**

**Description**

`[GrpcPublicCertificateAuthorityServiceStub](/java/docs/reference/google-cloud-publicca/0.49.0/com.google.cloud.security.publicca.v1.stub.GrpcPublicCertificateAuthorityServiceStub)`

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

## Constructors

### GrpcPublicCertificateAuthorityServiceStub(PublicCertificateAuthorityServiceStubSettings settings, ClientContext clientContext)

```
protected GrpcPublicCertificateAuthorityServiceStub(PublicCertificateAuthorityServiceStubSettings settings, ClientContext clientContext)
```

Constructs an instance of GrpcPublicCertificateAuthorityServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[PublicCertificateAuthorityServiceStubSettings](/java/docs/reference/google-cloud-publicca/0.49.0/com.google.cloud.security.publicca.v1.stub.PublicCertificateAuthorityServiceStubSettings)`  

`clientContext`

`[ClientContext](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.ClientContext.html)`  

### GrpcPublicCertificateAuthorityServiceStub(PublicCertificateAuthorityServiceStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)

```
protected GrpcPublicCertificateAuthorityServiceStub(PublicCertificateAuthorityServiceStubSettings settings, ClientContext clientContext, GrpcStubCallableFactory callableFactory)
```

Constructs an instance of GrpcPublicCertificateAuthorityServiceStub, using the given settings. This is protected so that it is easy to make a subclass, but otherwise, the static factory methods should be preferred.

**Parameters**

**Name**

**Description**

`settings`

`[PublicCertificateAuthorityServiceStubSettings](/java/docs/reference/google-cloud-publicca/0.49.0/com.google.cloud.security.publicca.v1.stub.PublicCertificateAuthorityServiceStubSettings)`  

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

[PublicCertificateAuthorityServiceStub.close()](/java/docs/reference/google-cloud-publicca/0.49.0/com.google.cloud.security.publicca.v1.stub.PublicCertificateAuthorityServiceStub#com_google_cloud_security_publicca_v1_stub_PublicCertificateAuthorityServiceStub_close__)

### createExternalAccountKeyCallable()

```
public UnaryCallable<CreateExternalAccountKeyRequest,ExternalAccountKey> createExternalAccountKeyCallable()
```

**Returns**

**Type**

**Description**

`[UnaryCallable](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.rpc.UnaryCallable.html)<[CreateExternalAccountKeyRequest](/java/docs/reference/google-cloud-publicca/0.49.0/com.google.cloud.security.publicca.v1.CreateExternalAccountKeyRequest),[ExternalAccountKey](/java/docs/reference/google-cloud-publicca/0.49.0/com.google.cloud.security.publicca.v1.ExternalAccountKey)>`

**Overrides**

[PublicCertificateAuthorityServiceStub.createExternalAccountKeyCallable()](/java/docs/reference/google-cloud-publicca/0.49.0/com.google.cloud.security.publicca.v1.stub.PublicCertificateAuthorityServiceStub#com_google_cloud_security_publicca_v1_stub_PublicCertificateAuthorityServiceStub_createExternalAccountKeyCallable__)

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

### shutdown()

```
public void shutdown()
```

### shutdownNow()

```
public void shutdownNow()
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
