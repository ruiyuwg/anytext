-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class GkeHubMembershipServiceGrpc.GkeHubMembershipServiceBlockingStub (1.30.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.81.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.6 1.2.1 1.1.0 1.0.1 0.5.4

```
public static final class GkeHubMembershipServiceGrpc.GkeHubMembershipServiceBlockingStub extends AbstractBlockingStub<GkeHubMembershipServiceGrpc.GkeHubMembershipServiceBlockingStub>
```

A stub to allow clients to do synchronous rpc calls to service GkeHubMembershipService.

The GKE Hub MembershipService handles the registration of many Kubernetes clusters to Google Cloud, represented with the Membership resource. GKE Hub is currently available in the global region and all regions in [https://cloud.google.com/compute/docs/regions-zones](https://cloud.google.com/compute/docs/regions-zones). **Membership management may be non-trivial:** it is recommended to use one of the Google-provided client libraries or tools where possible when working with Membership resources.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> io.grpc.stub.AbstractStub \> io.grpc.stub.AbstractBlockingStub \> GkeHubMembershipServiceGrpc.GkeHubMembershipServiceBlockingStub

## Inherited Members

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel)

io.grpc.stub.AbstractBlockingStub.<T>newStub(io.grpc.stub.AbstractStub.StubFactory<T>,io.grpc.Channel,io.grpc.CallOptions)

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
protected GkeHubMembershipServiceGrpc.GkeHubMembershipServiceBlockingStub build(Channel channel, CallOptions callOptions)
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

`[GkeHubMembershipServiceGrpc.GkeHubMembershipServiceBlockingStub](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1beta1.GkeHubMembershipServiceGrpc.GkeHubMembershipServiceBlockingStub)`

**Overrides**

io.grpc.stub.AbstractStub.build(io.grpc.Channel,io.grpc.CallOptions)

### createMembership(CreateMembershipRequest request)

```
public Operation createMembership(CreateMembershipRequest request)
```

Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at [https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster](https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster).

**Parameter**

**Name**

**Description**

`request`

`[CreateMembershipRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1beta1.CreateMembershipRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### deleteMembership(DeleteMembershipRequest request)

```
public Operation deleteMembership(DeleteMembershipRequest request)
```

Removes a Membership. **This is currently only supported for GKE clusters on Google Cloud**. To unregister other clusters, follow the instructions at [https://cloud.google.com/anthos/multicluster-management/connect/unregistering-a-cluster](https://cloud.google.com/anthos/multicluster-management/connect/unregistering-a-cluster).

**Parameter**

**Name**

**Description**

`request`

`[DeleteMembershipRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1beta1.DeleteMembershipRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### generateConnectManifest(GenerateConnectManifestRequest request)

```
public GenerateConnectManifestResponse generateConnectManifest(GenerateConnectManifestRequest request)
```

Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.

**Parameter**

**Name**

**Description**

`request`

`[GenerateConnectManifestRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1beta1.GenerateConnectManifestRequest)`  

**Returns**

**Type**

**Description**

`[GenerateConnectManifestResponse](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1beta1.GenerateConnectManifestResponse)`

### generateExclusivityManifest(GenerateExclusivityManifestRequest request)

```
public GenerateExclusivityManifestResponse generateExclusivityManifest(GenerateExclusivityManifestRequest request)
```

GenerateExclusivityManifest generates the manifests to update the exclusivity artifacts in the cluster if needed. Exclusivity artifacts include the Membership custom resource definition (CRD) and the singleton Membership custom resource (CR). Combined with ValidateExclusivity, exclusivity artifacts guarantee that a Kubernetes cluster is only registered to a single GKE Hub. The Membership CRD is versioned, and may require conversion when the GKE Hub API server begins serving a newer version of the CRD and corresponding CR. The response will be the converted CRD and CR if there are any differences between the versions.

**Parameter**

**Name**

**Description**

`request`

`[GenerateExclusivityManifestRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1beta1.GenerateExclusivityManifestRequest)`  

**Returns**

**Type**

**Description**

`[GenerateExclusivityManifestResponse](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1beta1.GenerateExclusivityManifestResponse)`

### getMembership(GetMembershipRequest request)

```
public Membership getMembership(GetMembershipRequest request)
```

Gets the details of a Membership.

**Parameter**

**Name**

**Description**

`request`

`[GetMembershipRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1beta1.GetMembershipRequest)`  

**Returns**

**Type**

**Description**

`[Membership](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1beta1.Membership)`

### listMemberships(ListMembershipsRequest request)

```
public ListMembershipsResponse listMemberships(ListMembershipsRequest request)
```

Lists Memberships in a given project and location.

**Parameter**

**Name**

**Description**

`request`

`[ListMembershipsRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1beta1.ListMembershipsRequest)`  

**Returns**

**Type**

**Description**

`[ListMembershipsResponse](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1beta1.ListMembershipsResponse)`

### updateMembership(UpdateMembershipRequest request)

```
public Operation updateMembership(UpdateMembershipRequest request)
```

Updates an existing Membership.

**Parameter**

**Name**

**Description**

`request`

`[UpdateMembershipRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1beta1.UpdateMembershipRequest)`  

**Returns**

**Type**

**Description**

`[Operation](https://cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)`

### validateExclusivity(ValidateExclusivityRequest request)

```
public ValidateExclusivityResponse validateExclusivity(ValidateExclusivityRequest request)
```

ValidateExclusivity validates the state of exclusivity in the cluster. The validation does not depend on an existing Hub membership resource.

**Parameter**

**Name**

**Description**

`request`

`[ValidateExclusivityRequest](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1beta1.ValidateExclusivityRequest)`  

**Returns**

**Type**

**Description**

`[ValidateExclusivityResponse](/java/docs/reference/google-cloud-gkehub/1.30.0/com.google.cloud.gkehub.v1beta1.ValidateExclusivityResponse)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.
