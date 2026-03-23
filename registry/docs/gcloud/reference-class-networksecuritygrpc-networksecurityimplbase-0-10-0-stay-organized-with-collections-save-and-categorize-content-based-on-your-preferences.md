-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class NetworkSecurityGrpc.NetworkSecurityImplBase (0.10.0) Stay organized with collections Save and categorize content based on your preferences.

0.90.0 (latest) 0.88.0 0.86.0 0.85.0 0.83.0 0.81.0 0.79.0 0.78.0 0.77.0 0.76.0 0.75.0 0.73.0 0.71.0 0.70.0 0.67.0 0.66.0 0.65.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.4 0.5.1 0.4.4

```
public abstract static class NetworkSecurityGrpc.NetworkSecurityImplBase implements BindableService
```

Network Security API provides resources to configure authentication and authorization policies. Refer to per API resource documentation for more information.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> NetworkSecurityGrpc.NetworkSecurityImplBase

## Implements

io.grpc.BindableService

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

## Constructors

### NetworkSecurityImplBase()

```
public NetworkSecurityImplBase()
```

## Methods

### bindService()

```
public final ServerServiceDefinition bindService()
```

**Returns**

**Type**

**Description**

io.grpc.ServerServiceDefinition

### createAuthorizationPolicy(CreateAuthorizationPolicyRequest request, StreamObserver<Operation> responseObserver)

```
public void createAuthorizationPolicy(CreateAuthorizationPolicyRequest request, StreamObserver<Operation> responseObserver)
```

Creates a new AuthorizationPolicy in a given project and location.

**Parameters**

**Name**

**Description**

request

`[CreateAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.CreateAuthorizationPolicyRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createClientTlsPolicy(CreateClientTlsPolicyRequest request, StreamObserver<Operation> responseObserver)

```
public void createClientTlsPolicy(CreateClientTlsPolicyRequest request, StreamObserver<Operation> responseObserver)
```

Creates a new ClientTlsPolicy in a given project and location.

**Parameters**

**Name**

**Description**

request

`[CreateClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.CreateClientTlsPolicyRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### createServerTlsPolicy(CreateServerTlsPolicyRequest request, StreamObserver<Operation> responseObserver)

```
public void createServerTlsPolicy(CreateServerTlsPolicyRequest request, StreamObserver<Operation> responseObserver)
```

Creates a new ServerTlsPolicy in a given project and location.

**Parameters**

**Name**

**Description**

request

`[CreateServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.CreateServerTlsPolicyRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteAuthorizationPolicy(DeleteAuthorizationPolicyRequest request, StreamObserver<Operation> responseObserver)

```
public void deleteAuthorizationPolicy(DeleteAuthorizationPolicyRequest request, StreamObserver<Operation> responseObserver)
```

Deletes a single AuthorizationPolicy.

**Parameters**

**Name**

**Description**

request

`[DeleteAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.DeleteAuthorizationPolicyRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteClientTlsPolicy(DeleteClientTlsPolicyRequest request, StreamObserver<Operation> responseObserver)

```
public void deleteClientTlsPolicy(DeleteClientTlsPolicyRequest request, StreamObserver<Operation> responseObserver)
```

Deletes a single ClientTlsPolicy.

**Parameters**

**Name**

**Description**

request

`[DeleteClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.DeleteClientTlsPolicyRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteServerTlsPolicy(DeleteServerTlsPolicyRequest request, StreamObserver<Operation> responseObserver)

```
public void deleteServerTlsPolicy(DeleteServerTlsPolicyRequest request, StreamObserver<Operation> responseObserver)
```

Deletes a single ServerTlsPolicy.

**Parameters**

**Name**

**Description**

request

`[DeleteServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.DeleteServerTlsPolicyRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### getAuthorizationPolicy(GetAuthorizationPolicyRequest request, StreamObserver<AuthorizationPolicy> responseObserver)

```
public void getAuthorizationPolicy(GetAuthorizationPolicyRequest request, StreamObserver<AuthorizationPolicy> responseObserver)
```

Gets details of a single AuthorizationPolicy.

**Parameters**

**Name**

**Description**

request

`[GetAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.GetAuthorizationPolicyRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[AuthorizationPolicy](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.AuthorizationPolicy)>`  

### getClientTlsPolicy(GetClientTlsPolicyRequest request, StreamObserver<ClientTlsPolicy> responseObserver)

```
public void getClientTlsPolicy(GetClientTlsPolicyRequest request, StreamObserver<ClientTlsPolicy> responseObserver)
```

Gets details of a single ClientTlsPolicy.

**Parameters**

**Name**

**Description**

request

`[GetClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.GetClientTlsPolicyRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ClientTlsPolicy](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.ClientTlsPolicy)>`  

### getServerTlsPolicy(GetServerTlsPolicyRequest request, StreamObserver<ServerTlsPolicy> responseObserver)

```
public void getServerTlsPolicy(GetServerTlsPolicyRequest request, StreamObserver<ServerTlsPolicy> responseObserver)
```

Gets details of a single ServerTlsPolicy.

**Parameters**

**Name**

**Description**

request

`[GetServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.GetServerTlsPolicyRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ServerTlsPolicy](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.ServerTlsPolicy)>`  

### listAuthorizationPolicies(ListAuthorizationPoliciesRequest request, StreamObserver<ListAuthorizationPoliciesResponse> responseObserver)

```
public void listAuthorizationPolicies(ListAuthorizationPoliciesRequest request, StreamObserver<ListAuthorizationPoliciesResponse> responseObserver)
```

Lists AuthorizationPolicies in a given project and location.

**Parameters**

**Name**

**Description**

request

`[ListAuthorizationPoliciesRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.ListAuthorizationPoliciesRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ListAuthorizationPoliciesResponse](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.ListAuthorizationPoliciesResponse)>`  

### listClientTlsPolicies(ListClientTlsPoliciesRequest request, StreamObserver<ListClientTlsPoliciesResponse> responseObserver)

```
public void listClientTlsPolicies(ListClientTlsPoliciesRequest request, StreamObserver<ListClientTlsPoliciesResponse> responseObserver)
```

Lists ClientTlsPolicies in a given project and location.

**Parameters**

**Name**

**Description**

request

`[ListClientTlsPoliciesRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.ListClientTlsPoliciesRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ListClientTlsPoliciesResponse](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.ListClientTlsPoliciesResponse)>`  

### listServerTlsPolicies(ListServerTlsPoliciesRequest request, StreamObserver<ListServerTlsPoliciesResponse> responseObserver)

```
public void listServerTlsPolicies(ListServerTlsPoliciesRequest request, StreamObserver<ListServerTlsPoliciesResponse> responseObserver)
```

Lists ServerTlsPolicies in a given project and location.

**Parameters**

**Name**

**Description**

request

`[ListServerTlsPoliciesRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.ListServerTlsPoliciesRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ListServerTlsPoliciesResponse](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.ListServerTlsPoliciesResponse)>`  

### updateAuthorizationPolicy(UpdateAuthorizationPolicyRequest request, StreamObserver<Operation> responseObserver)

```
public void updateAuthorizationPolicy(UpdateAuthorizationPolicyRequest request, StreamObserver<Operation> responseObserver)
```

Updates the parameters of a single AuthorizationPolicy.

**Parameters**

**Name**

**Description**

request

`[UpdateAuthorizationPolicyRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.UpdateAuthorizationPolicyRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateClientTlsPolicy(UpdateClientTlsPolicyRequest request, StreamObserver<Operation> responseObserver)

```
public void updateClientTlsPolicy(UpdateClientTlsPolicyRequest request, StreamObserver<Operation> responseObserver)
```

Updates the parameters of a single ClientTlsPolicy.

**Parameters**

**Name**

**Description**

request

`[UpdateClientTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.UpdateClientTlsPolicyRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### updateServerTlsPolicy(UpdateServerTlsPolicyRequest request, StreamObserver<Operation> responseObserver)

```
public void updateServerTlsPolicy(UpdateServerTlsPolicyRequest request, StreamObserver<Operation> responseObserver)
```

Updates the parameters of a single ServerTlsPolicy.

**Parameters**

**Name**

**Description**

request

`[UpdateServerTlsPolicyRequest](/java/docs/reference/google-cloud-network-security/0.10.0/com.google.cloud.networksecurity.v1.UpdateServerTlsPolicyRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
