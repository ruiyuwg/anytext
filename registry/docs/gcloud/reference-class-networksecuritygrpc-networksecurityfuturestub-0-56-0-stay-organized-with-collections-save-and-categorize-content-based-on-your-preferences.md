-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class NetworkSecurityGrpc.NetworkSecurityFutureStub (0.56.0) Stay organized with collections Save and categorize content based on your preferences.

0.90.0 (latest) 0.88.0 0.86.0 0.85.0 0.83.0 0.81.0 0.79.0 0.78.0 0.77.0 0.76.0 0.75.0 0.73.0 0.71.0 0.70.0 0.67.0 0.66.0 0.65.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.4 0.5.1 0.4.4

```
public static final class NetworkSecurityGrpc.NetworkSecurityFutureStub extends AbstractFutureStub<NetworkSecurityGrpc.NetworkSecurityFutureStub>
```

A stub to allow clients to do ListenableFuture-style rpc calls to service NetworkSecurity.

Network Security API provides resources to configure authentication and authorization policies. Refer to per API resource documentation for more information.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractFutureStub \> NetworkSecurityGrpc.NetworkSecurityFutureStub

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
protected NetworkSecurityGrpc.NetworkSecurityFutureStub build(Channel channel, CallOptions callOptions)
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

`[NetworkSecurityGrpc.NetworkSecurityFutureStub](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.NetworkSecurityGrpc.NetworkSecurityFutureStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createAuthorizationPolicy(CreateAuthorizationPolicyRequest request)

```
public ListenableFuture<Operation> createAuthorizationPolicy(CreateAuthorizationPolicyRequest request)
```

Creates a new AuthorizationPolicy in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[CreateAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createClientTlsPolicy(CreateClientTlsPolicyRequest request)

```
public ListenableFuture<Operation> createClientTlsPolicy(CreateClientTlsPolicyRequest request)
```

Creates a new ClientTlsPolicy in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[CreateClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### createServerTlsPolicy(CreateServerTlsPolicyRequest request)

```
public ListenableFuture<Operation> createServerTlsPolicy(CreateServerTlsPolicyRequest request)
```

Creates a new ServerTlsPolicy in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[CreateServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteAuthorizationPolicy(DeleteAuthorizationPolicyRequest request)

```
public ListenableFuture<Operation> deleteAuthorizationPolicy(DeleteAuthorizationPolicyRequest request)
```

Deletes a single AuthorizationPolicy.

**Parameter**

**Name**

**Description**

`request`

`[DeleteAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteClientTlsPolicy(DeleteClientTlsPolicyRequest request)

```
public ListenableFuture<Operation> deleteClientTlsPolicy(DeleteClientTlsPolicyRequest request)
```

Deletes a single ClientTlsPolicy.

**Parameter**

**Name**

**Description**

`request`

`[DeleteClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### deleteServerTlsPolicy(DeleteServerTlsPolicyRequest request)

```
public ListenableFuture<Operation> deleteServerTlsPolicy(DeleteServerTlsPolicyRequest request)
```

Deletes a single ServerTlsPolicy.

**Parameter**

**Name**

**Description**

`request`

`[DeleteServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getAuthorizationPolicy(GetAuthorizationPolicyRequest request)

```
public ListenableFuture<AuthorizationPolicy> getAuthorizationPolicy(GetAuthorizationPolicyRequest request)
```

Gets details of a single AuthorizationPolicy.

**Parameter**

**Name**

**Description**

`request`

`[GetAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.GetAuthorizationPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[AuthorizationPolicy](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy)>`

### getClientTlsPolicy(GetClientTlsPolicyRequest request)

```
public ListenableFuture<ClientTlsPolicy> getClientTlsPolicy(GetClientTlsPolicyRequest request)
```

Gets details of a single ClientTlsPolicy.

**Parameter**

**Name**

**Description**

`request`

`[GetClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.GetClientTlsPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ClientTlsPolicy](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.ClientTlsPolicy)>`

### getServerTlsPolicy(GetServerTlsPolicyRequest request)

```
public ListenableFuture<ServerTlsPolicy> getServerTlsPolicy(GetServerTlsPolicyRequest request)
```

Gets details of a single ServerTlsPolicy.

**Parameter**

**Name**

**Description**

`request`

`[GetServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.GetServerTlsPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ServerTlsPolicy](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.ServerTlsPolicy)>`

### listAuthorizationPolicies(ListAuthorizationPoliciesRequest request)

```
public ListenableFuture<ListAuthorizationPoliciesResponse> listAuthorizationPolicies(ListAuthorizationPoliciesRequest request)
```

Lists AuthorizationPolicies in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListAuthorizationPoliciesRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListAuthorizationPoliciesResponse](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse)>`

### listClientTlsPolicies(ListClientTlsPoliciesRequest request)

```
public ListenableFuture<ListClientTlsPoliciesResponse> listClientTlsPolicies(ListClientTlsPoliciesRequest request)
```

Lists ClientTlsPolicies in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListClientTlsPoliciesRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.ListClientTlsPoliciesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListClientTlsPoliciesResponse](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse)>`

### listServerTlsPolicies(ListServerTlsPoliciesRequest request)

```
public ListenableFuture<ListServerTlsPoliciesResponse> listServerTlsPolicies(ListServerTlsPoliciesRequest request)
```

Lists ServerTlsPolicies in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListServerTlsPoliciesRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.ListServerTlsPoliciesRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[ListServerTlsPoliciesResponse](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse)>`

### updateAuthorizationPolicy(UpdateAuthorizationPolicyRequest request)

```
public ListenableFuture<Operation> updateAuthorizationPolicy(UpdateAuthorizationPolicyRequest request)
```

Updates the parameters of a single AuthorizationPolicy.

**Parameter**

**Name**

**Description**

`request`

`[UpdateAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateClientTlsPolicy(UpdateClientTlsPolicyRequest request)

```
public ListenableFuture<Operation> updateClientTlsPolicy(UpdateClientTlsPolicyRequest request)
```

Updates the parameters of a single ClientTlsPolicy.

**Parameter**

**Name**

**Description**

`request`

`[UpdateClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### updateServerTlsPolicy(UpdateServerTlsPolicyRequest request)

```
public ListenableFuture<Operation> updateServerTlsPolicy(UpdateServerTlsPolicyRequest request)
```

Updates the parameters of a single ServerTlsPolicy.

**Parameter**

**Name**

**Description**

`request`

`[UpdateServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.56.0/com.google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest)`  

**Returns**

**Type**

**Description**

`com.google.common.util.concurrent.ListenableFuture<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
