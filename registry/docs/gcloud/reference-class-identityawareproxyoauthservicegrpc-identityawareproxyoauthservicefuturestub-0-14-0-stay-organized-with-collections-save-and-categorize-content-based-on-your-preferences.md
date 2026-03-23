-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class IdentityAwareProxyOAuthServiceGrpc.IdentityAwareProxyOAuthServiceFutureStub (0.14.0) Stay organized with collections Save and categorize content based on your preferences.

0.43.0 (latest) 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.34.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static final class IdentityAwareProxyOAuthServiceGrpc.IdentityAwareProxyOAuthServiceFutureStub extends AbstractFutureStub<IdentityAwareProxyOAuthServiceGrpc.IdentityAwareProxyOAuthServiceFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service IdentityAwareProxyOAuthService.

API to programmatically create, list and retrieve Identity Aware Proxy (IAP) OAuth brands; and create, retrieve, delete and reset-secret of IAP OAuth clients.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> IdentityAwareProxyOAuthServiceGrpc.IdentityAwareProxyOAuthServiceFutureStub

## Inherited Members

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractFutureStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.<T>withOption(io.grpc.CallOptions.Key<T>,T)

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

io.grpc.stub.AbstractStub.getCallOptions()

io.grpc.stub.AbstractStub.getChannel()

io.grpc.stub.AbstractStub.withCallCredentials(io.grpc.CallCredentials)

io.grpc.stub.AbstractStub.withChannel(io.grpc.Channel)

io.grpc.stub.AbstractStub.withCompression(java.lang.String)

io.grpc.stub.AbstractStub.withDeadline(io.grpc.Deadline)

io.grpc.stub.AbstractStub.withDeadlineAfter(java.time.Duration)

io.grpc.stub.AbstractStub.withDeadlineAfter(long,java.util.concurrent.TimeUnit)

io.grpc.stub.AbstractStub.withExecutor(java.util.concurrent.Executor)

io.grpc.stub.AbstractStub.withInterceptors(io.grpc.ClientInterceptor...)

io.grpc.stub.AbstractStub.withMaxInboundMessageSize(int)

io.grpc.stub.AbstractStub.withMaxOutboundMessageSize(int)

io.grpc.stub.AbstractStub.withOnReadyThreshold(int)

io.grpc.stub.AbstractStub.withWaitForReady()

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

## Methods

### build(Channel channel, CallOptions callOptions)

```
protected IdentityAwareProxyOAuthServiceGrpc.IdentityAwareProxyOAuthServiceFutureStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

`callOptions`

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

`[IdentityAwareProxyOAuthServiceGrpc.IdentityAwareProxyOAuthServiceFutureStub](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.IdentityAwareProxyOAuthServiceGrpc.IdentityAwareProxyOAuthServiceFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createBrand(CreateBrandRequest request)

```
public ListenableFuture<Brand> createBrand(CreateBrandRequest request)
```

Constructs a new OAuth brand for the project if one does not exist. The created brand is "internal only", meaning that OAuth clients created under it only accept requests from users who belong to the same Google Workspace organization as the project. The brand is created in an un-reviewed status. NOTE: The "internal only" status can be manually changed in the Google Cloud Console. Requires that a brand does not already exist for the project, and that the specified support email is owned by the caller.

**Parameter**

**Name**

**Description**

`request`

`[CreateBrandRequest](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.CreateBrandRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Brand](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.Brand)>`

### createIdentityAwareProxyClient(CreateIdentityAwareProxyClientRequest request)

```
public ListenableFuture<IdentityAwareProxyClient> createIdentityAwareProxyClient(CreateIdentityAwareProxyClientRequest request)
```

Creates an Identity Aware Proxy (IAP) OAuth client. The client is owned by IAP. Requires that the brand for the project exists and that it is set for internal-only use.

**Parameter**

**Name**

**Description**

`request`

`[CreateIdentityAwareProxyClientRequest](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.CreateIdentityAwareProxyClientRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[IdentityAwareProxyClient](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.IdentityAwareProxyClient)>`

### deleteIdentityAwareProxyClient(DeleteIdentityAwareProxyClientRequest request)

```
public ListenableFuture<Empty> deleteIdentityAwareProxyClient(DeleteIdentityAwareProxyClientRequest request)
```

Deletes an Identity Aware Proxy (IAP) OAuth client. Useful for removing obsolete clients, managing the number of clients in a given project, and cleaning up after tests. Requires that the client is owned by IAP.

**Parameter**

**Name**

**Description**

`request`

`[DeleteIdentityAwareProxyClientRequest](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.DeleteIdentityAwareProxyClientRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)>`

### getBrand(GetBrandRequest request)

```
public ListenableFuture<Brand> getBrand(GetBrandRequest request)
```

Retrieves the OAuth brand of the project.

**Parameter**

**Name**

**Description**

`request`

`[GetBrandRequest](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.GetBrandRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Brand](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.Brand)>`

### getIdentityAwareProxyClient(GetIdentityAwareProxyClientRequest request)

```
public ListenableFuture<IdentityAwareProxyClient> getIdentityAwareProxyClient(GetIdentityAwareProxyClientRequest request)
```

Retrieves an Identity Aware Proxy (IAP) OAuth client. Requires that the client is owned by IAP.

**Parameter**

**Name**

**Description**

`request`

`[GetIdentityAwareProxyClientRequest](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.GetIdentityAwareProxyClientRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[IdentityAwareProxyClient](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.IdentityAwareProxyClient)>`

### listBrands(ListBrandsRequest request)

```
public ListenableFuture<ListBrandsResponse> listBrands(ListBrandsRequest request)
```

Lists the existing brands for the project.

**Parameter**

**Name**

**Description**

`request`

`[ListBrandsRequest](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.ListBrandsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListBrandsResponse](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.ListBrandsResponse)>`

### listIdentityAwareProxyClients(ListIdentityAwareProxyClientsRequest request)

```
public ListenableFuture<ListIdentityAwareProxyClientsResponse> listIdentityAwareProxyClients(ListIdentityAwareProxyClientsRequest request)
```

Lists the existing clients for the brand.

**Parameter**

**Name**

**Description**

`request`

`[ListIdentityAwareProxyClientsRequest](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.ListIdentityAwareProxyClientsRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListIdentityAwareProxyClientsResponse](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.ListIdentityAwareProxyClientsResponse)>`

### resetIdentityAwareProxyClientSecret(ResetIdentityAwareProxyClientSecretRequest request)

```
public ListenableFuture<IdentityAwareProxyClient> resetIdentityAwareProxyClientSecret(ResetIdentityAwareProxyClientSecretRequest request)
```

Resets an Identity Aware Proxy (IAP) OAuth client secret. Useful if the secret was compromised. Requires that the client is owned by IAP.

**Parameter**

**Name**

**Description**

`request`

`[ResetIdentityAwareProxyClientSecretRequest](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.ResetIdentityAwareProxyClientSecretRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[IdentityAwareProxyClient](/java/docs/reference/google-cloud-iap/0.14.0/com.google.cloud.iap.v1.IdentityAwareProxyClient)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
