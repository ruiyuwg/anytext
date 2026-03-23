-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GkeHubGrpc.GkeHubStub (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.81.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.6 1.2.1 1.1.0 1.0.1 0.5.4

```
public static final class GkeHubGrpc.GkeHubStub extends AbstractAsyncStub<GkeHubGrpc.GkeHubStub>
```

The GKE Hub service handles the registration of many Kubernetes clusters to Google Cloud, represented with the Membership resource. GKE Hub is currently only available in the global region. **Membership management may be non-trivial:** it is recommended to use one of the Google-provided client libraries or tools where possible when working with Membership resources.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractAsyncStub \> GkeHubGrpc.GkeHubStub

## Inherited Members

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractAsyncStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

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
protected GkeHubGrpc.GkeHubStub build(Channel channel, CallOptions callOptions)
```

**Parameters**

**Name**

**Description**

channel

`io.grpc.Channel`  

callOptions

`io.grpc.CallOptions`  

**Returns**

**Type**

**Description**

[GkeHubGrpc.GkeHubStub](/java/docs/reference/google-cloud-gkehub/1.4.0/com.google.cloud.gkehub.v1alpha2.GkeHubGrpc.GkeHubStub)

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createMembership(CreateMembershipRequest request, StreamObserver<Operation> responseObserver)

```
public void createMembership(CreateMembershipRequest request, StreamObserver<Operation> responseObserver)
```

Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at [https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster](https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster).

**Parameters**

**Name**

**Description**

request

`[CreateMembershipRequest](/java/docs/reference/google-cloud-gkehub/1.4.0/com.google.cloud.gkehub.v1alpha2.CreateMembershipRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### deleteMembership(DeleteMembershipRequest request, StreamObserver<Operation> responseObserver)

```
public void deleteMembership(DeleteMembershipRequest request, StreamObserver<Operation> responseObserver)
```

Removes a Membership. **This is currently only supported for GKE clusters on Google Cloud**. To unregister other clusters, follow the instructions at [https://cloud.google.com/anthos/multicluster-management/connect/unregistering-a-cluster](https://cloud.google.com/anthos/multicluster-management/connect/unregistering-a-cluster).

**Parameters**

**Name**

**Description**

request

`[DeleteMembershipRequest](/java/docs/reference/google-cloud-gkehub/1.4.0/com.google.cloud.gkehub.v1alpha2.DeleteMembershipRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

### generateConnectManifest(GenerateConnectManifestRequest request, StreamObserver<GenerateConnectManifestResponse> responseObserver)

```
public void generateConnectManifest(GenerateConnectManifestRequest request, StreamObserver<GenerateConnectManifestResponse> responseObserver)
```

Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.

**Parameters**

**Name**

**Description**

request

`[GenerateConnectManifestRequest](/java/docs/reference/google-cloud-gkehub/1.4.0/com.google.cloud.gkehub.v1alpha2.GenerateConnectManifestRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[GenerateConnectManifestResponse](/java/docs/reference/google-cloud-gkehub/1.4.0/com.google.cloud.gkehub.v1alpha2.GenerateConnectManifestResponse)>`  

### getMembership(GetMembershipRequest request, StreamObserver<Membership> responseObserver)

```
public void getMembership(GetMembershipRequest request, StreamObserver<Membership> responseObserver)
```

Gets the details of a Membership.

**Parameters**

**Name**

**Description**

request

`[GetMembershipRequest](/java/docs/reference/google-cloud-gkehub/1.4.0/com.google.cloud.gkehub.v1alpha2.GetMembershipRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Membership](/java/docs/reference/google-cloud-gkehub/1.4.0/com.google.cloud.gkehub.v1alpha2.Membership)>`  

### initializeHub(InitializeHubRequest request, StreamObserver<InitializeHubResponse> responseObserver)

```
public void initializeHub(InitializeHubRequest request, StreamObserver<InitializeHubResponse> responseObserver)
```

Initializes the Hub in this project, which includes creating the default Hub Service Account and the Hub Workload Identity Pool. Initialization is optional, and happens automatically when the first Membership is created. InitializeHub should be called when the first Membership cannot be registered without these resources. A common example is granting the Hub Service Account access to another project, which requires the account to exist first.

**Parameters**

**Name**

**Description**

request

`[InitializeHubRequest](/java/docs/reference/google-cloud-gkehub/1.4.0/com.google.cloud.gkehub.v1alpha2.InitializeHubRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[InitializeHubResponse](/java/docs/reference/google-cloud-gkehub/1.4.0/com.google.cloud.gkehub.v1alpha2.InitializeHubResponse)>`  

### listMemberships(ListMembershipsRequest request, StreamObserver<ListMembershipsResponse> responseObserver)

```
public void listMemberships(ListMembershipsRequest request, StreamObserver<ListMembershipsResponse> responseObserver)
```

Lists Memberships in a given project and location.

**Parameters**

**Name**

**Description**

request

`[ListMembershipsRequest](/java/docs/reference/google-cloud-gkehub/1.4.0/com.google.cloud.gkehub.v1alpha2.ListMembershipsRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[ListMembershipsResponse](/java/docs/reference/google-cloud-gkehub/1.4.0/com.google.cloud.gkehub.v1alpha2.ListMembershipsResponse)>`  

### updateMembership(UpdateMembershipRequest request, StreamObserver<Operation> responseObserver)

```
public void updateMembership(UpdateMembershipRequest request, StreamObserver<Operation> responseObserver)
```

Updates an existing Membership.

**Parameters**

**Name**

**Description**

request

`[UpdateMembershipRequest](/java/docs/reference/google-cloud-gkehub/1.4.0/com.google.cloud.gkehub.v1alpha2.UpdateMembershipRequest)`  

responseObserver

`io.grpc.stub.StreamObserver<[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`  

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
